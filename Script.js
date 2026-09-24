// Replace with your deployed Google Apps Script Web App URL
const API_URL = "https://script.google.com/macros/s/AKfycbyWL7DKt3xT1Kc23RSkaL9cnwWbYKo8u_8tspFMUvPss4qn050wmu992bwAgW2Arazx/exec";

let sessionToken = sessionStorage.getItem("sessionToken");
let currentUserRole = sessionStorage.getItem("userRole");
let currentUsername = sessionStorage.getItem("userName");
let pendingUsername = "";

window.addEventListener("DOMContentLoaded", () => {
  if (sessionToken && currentUserRole && currentUsername) {
    showAppView(currentUsername, currentUserRole);
  }
});

function togglePasswordVisibility(e) {
  if (e) e.preventDefault();
  const passwordInput = document.getElementById("loginPassword");
  const toggleBtn = document.getElementById("showToggleBtn");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  toggleBtn.textContent = passwordInput.type === "password" ? "👁️ Show" : "🙈 Hide";
}

function handleForgotPassword(e) {
  if (e) e.preventDefault();
  alert("Forgot Password?\n\nPlease contact your System Administrator to reset your credentials.");
}

function apiCall(payload, callback) {
  if (sessionToken) payload.token = sessionToken;
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    if (!data.success && (data.message === "Unauthorized or session expired." || data.message === "Access denied.")) {
      alert("Session Expired or Unauthorized Access: " + data.message);
      logout();
      return;
    }
    callback(data);
  })
  .catch(err => alert("Connection error. Ensure your APPS SCRIPT URL is correct."));
}

// OTP STEP 1: Request OTP
function handleRequestOtp() {
  const u = document.getElementById("loginUsername").value.trim();
  const p = document.getElementById("loginPassword").value.trim();
  const btn = document.getElementById("loginBtn");
  const err = document.getElementById("loginError");

  if (!u || !p) {
    err.innerText = "Please enter both username and password.";
    err.style.display = "block";
    return;
  }

  btn.innerText = "Sending Code...";
  btn.disabled = true;
  err.style.display = "none";

  apiCall({ action: "requestOtp", username: u, password: p }, res => {
    btn.innerText = "SEND OTP";
    btn.disabled = false;
    if (res.success) {
      pendingUsername = res.username;
      document.getElementById("stepCredentials").classList.add("hidden");
      document.getElementById("stepOtp").classList.remove("hidden");
      document.getElementById("otpNotice").innerText = res.message;
    } else {
      err.innerText = res.message;
      err.style.display = "block";
    }
  });
}

// OTP STEP 2: Verify OTP Code
function handleVerifyOtp() {
  const otp = document.getElementById("otpCode").value.trim();
  const btn = document.getElementById("verifyBtn");
  const err = document.getElementById("loginError");

  if (!otp || otp.length !== 6) {
    err.innerText = "Please enter a valid 6-digit OTP code.";
    err.style.display = "block";
    return;
  }

  btn.innerText = "Verifying...";
  btn.disabled = true;
  err.style.display = "none";

  apiCall({ action: "verifyOtp", username: pendingUsername, otp: otp }, res => {
    btn.innerText = "VERIFY & LOG IN";
    btn.disabled = false;
    if (res.success) {
      sessionToken = res.token;
      currentUserRole = res.role;
      currentUsername = res.username;

      sessionStorage.setItem("sessionToken", sessionToken);
      sessionStorage.setItem("userRole", currentUserRole);
      sessionStorage.setItem("userName", currentUsername);

      showAppView(currentUsername, currentUserRole);
    } else {
      err.innerText = res.message;
      err.style.display = "block";
    }
  });
}

function resetToStep1() {
  document.getElementById("stepOtp").classList.add("hidden");
  document.getElementById("stepCredentials").classList.remove("hidden");
  document.getElementById("loginError").style.display = "none";
  document.getElementById("otpCode").value = "";
}

function showAppView(username, role) {
  document.getElementById("userBadge").innerText = `${username} (${role})`;
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("appView").classList.remove("hidden");

  const userTabBtn = document.querySelector("button[onclick=\"switchTab('users')\"]");
  if (userTabBtn) userTabBtn.style.display = role.toLowerCase() === "admin" ? "inline-block" : "none";

  switchTab("dashboard");
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  
  const activeBtn = document.querySelector(`.nav-btn[onclick="switchTab('${tabName}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  document.getElementById('tab-' + tabName).classList.remove('hidden');

  if (tabName === 'dashboard') loadDashboard();
  if (tabName === 'catalog') loadCatalog();
  if (tabName === 'suppliers') loadSuppliers();
  if (tabName === 'alerts') loadLowStock();
  if (tabName === 'logs') loadLogs();
  if (tabName === 'users') loadUsers();
}

function renderCatalogTable(rawMatrix) {
  if (!rawMatrix || rawMatrix.length === 0) return "<p>No data available.</p>";
  let html = "<table><tr>";
  rawMatrix[0].forEach(h => html += `<th>${h}</th>`);
  html += "<th>ACTION</th></tr>";

  for (let i = 1; i < rawMatrix.length; i++) {
    html += "<tr>";
    const itemId = rawMatrix[i][0];
    rawMatrix[i].forEach(cell => html += `<td>${cell}</td>`);
    html += `<td><button class="btn-danger" onclick="deleteItem('${itemId}')">Delete</button></td>`;
    html += "</tr>";
  }
  return html + "</table>";
}

function renderTable(rawMatrix) {
  if (!rawMatrix || rawMatrix.length === 0) return "<p>No data available.</p>";
  let html = "<table><tr>";
  rawMatrix[0].forEach(h => html += `<th>${h}</th>`);
  html += "</tr>";
  for (let i = 1; i < rawMatrix.length; i++) {
    html += "<tr>";
    rawMatrix[i].forEach(cell => html += `<td>${cell}</td>`);
    html += "</tr>";
  }
  return html + "</table>";
}

function loadDashboard() {
  apiCall({ action: "getDashboard" }, res => {
    if (res.success) {
      document.getElementById("m-items").innerText = res.totalItems;
      document.getElementById("m-val").innerText = "₱" + res.totalValue;
      document.getElementById("m-low").innerText = res.lowStock;
    }
  });
}

function loadCatalog() { apiCall({ action: "getInventory" }, res => document.getElementById("catalogTable").innerHTML = renderCatalogTable(res.data)); }
function loadSuppliers() { apiCall({ action: "getSuppliers" }, res => document.getElementById("supplierTable").innerHTML = renderTable(res.data)); }
function loadLowStock() { apiCall({ action: "getLowStock" }, res => document.getElementById("alertsTable").innerHTML = renderTable(res.data)); }
function loadLogs() { apiCall({ action: "getTransactions" }, res => document.getElementById("logsTable").innerHTML = renderTable(res.data)); }
function loadUsers() { apiCall({ action: "getUsers" }, res => document.getElementById("usersTable").innerHTML = renderTable(res.data)); }

function submitNewItem() {
  const id = document.getElementById("addId").value.trim();
  const name = document.getElementById("addName").value.trim();
  const cat = document.getElementById("addCategory").value.trim();
  const qty = parseInt(document.getElementById("addQty").value);
  const price = parseFloat(document.getElementById("addPrice").value);
  const min = parseInt(document.getElementById("addMin").value);

  if (!id || !name || isNaN(qty) || isNaN(price)) return alert("Please fill in all item fields correctly.");

  apiCall({ action: "addItem", itemId: id, itemName: name, category: cat, qty: qty, price: price, minStock: min }, res => {
    alert(res.success ? "Item added successfully!" : "Error: " + res.message);
    if (res.success) {
      document.getElementById("addId").value = "";
      document.getElementById("addName").value = "";
      document.getElementById("addCategory").value = "";
      document.getElementById("addQty").value = "";
      document.getElementById("addPrice").value = "";
      document.getElementById("addMin").value = "";
      switchTab('catalog');
    }
  });
}

function deleteItem(itemId) {
  if (!confirm(`Are you sure you want to delete Item ID: ${itemId}?`)) return;
  apiCall({ action: "deleteItem", itemId: itemId }, res => {
    alert(res.success ? "Item deleted successfully!" : "Error: " + res.message);
    if (res.success) loadCatalog();
  });
}

function submitStock() {
  const itemId = document.getElementById("stkId").value.trim();
  const type = document.getElementById("stkType").value;
  let qty = parseInt(document.getElementById("stkQty").value);
  const notes = document.getElementById("stkNotes").value.trim();

  if (!itemId || isNaN(qty) || qty <= 0) return alert("Please enter valid item ID and positive quantity.");
  if (type === "STOCK OUT") qty = -qty;

  apiCall({ action: "adjustStock", itemId: itemId, qtyChange: qty, type: type, notes: notes }, res => {
    alert(res.success ? "Stock transaction successful!" : "Error: " + res.message);
    if (res.success) {
      document.getElementById("stkId").value = "";
      document.getElementById("stkQty").value = "";
      document.getElementById("stkNotes").value = "";
      switchTab('catalog');
    }
  });
}

function logout() {
  sessionToken = null;
  currentUserRole = null;
  currentUsername = null;
  pendingUsername = "";
  sessionStorage.clear();

  resetToStep1();
  document.getElementById("appView").classList.add("hidden");
  document.getElementById("loginSection").classList.remove("hidden");
}
