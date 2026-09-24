/* ==========================================
   EXTRACT BREW CAFE - HIGH-FIDELITY THEME
   ================================---------- */

:root {
  --bg-main: #0d0d0d;
  --bg-surface: #161618;
  --bg-card: #1e1e22;
  --border-color: #2a2a30;
  --border-focus: #d97706;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --primary: #d97706;
  --primary-hover: #b45309;
  --danger: #ef4444;
  --danger-hover: #dc2626;
  --success: #10b981;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

* { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
}

body { 
  background-color: var(--bg-main); 
  color: var(--text-main); 
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  -webkit-font-smoothing: antialiased;
}

/* ------------------------------------------
   LOGIN CARD / AUTHENTICATION
   ------------------------------------------ */
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: radial-gradient(circle at 50% 20%, #261908 0%, var(--bg-main) 70%);
}

.login-card {
  max-width: 420px;
  width: 100%;
  padding: 40px 32px;
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(217, 119, 6, 0.1);
  text-align: center;
}

.login-card h2 {
  font-size: 24px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 8px;
}

.login-card p {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 24px;
}

/* ------------------------------------------
   HEADER & NAVIGATION
   ------------------------------------------ */
header { 
  background: rgba(22, 22, 24, 0.85); 
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 16px 24px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  border-bottom: 1px solid var(--border-color); 
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand { 
  font-size: 18px; 
  font-weight: 800; 
  color: var(--primary); 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  letter-spacing: 0.5px; 
}

.brand svg {
  width: 22px;
  height: 22px;
  fill: var(--primary);
}

.nav-bar { 
  display: flex; 
  background: var(--bg-surface); 
  padding: 4px;
  border-radius: var(--radius-md);
  max-width: 800px;
  margin: 16px auto 0;
  width: calc(100% - 32px);
  border: 1px solid var(--border-color);
  overflow-x: auto; 
  white-space: nowrap; 
  -webkit-overflow-scrolling: touch; 
}

.nav-btn { 
  background: none; 
  border: none; 
  color: var(--text-muted); 
  padding: 10px 18px; 
  font-size: 13px; 
  font-weight: 600; 
  cursor: pointer; 
  border-radius: var(--radius-sm);
  transition: var(--transition);
  flex: 1;
  text-align: center;
}

.nav-btn:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.03);
}

.nav-btn.active { 
  color: #121212; 
  background: var(--primary);
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
}

/* ------------------------------------------
   CONTAINERS & CARDS
   ------------------------------------------ */
.container { 
  padding: 24px 16px; 
  flex: 1; 
  max-width: 900px; 
  margin: 0 auto; 
  width: 100%; 
}

.card { 
  background: var(--bg-card); 
  border-radius: var(--radius-lg); 
  padding: 24px; 
  margin-bottom: 20px; 
  border: 1px solid var(--border-color); 
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4); 
  transition: var(--transition);
}

.card:hover {
  border-color: rgba(217, 119, 6, 0.3);
}

/* ------------------------------------------
   FORMS & INPUTS
   ------------------------------------------ */
.form-group { 
  margin-bottom: 18px; 
  text-align: left; 
}

label { 
  font-size: 11px; 
  font-weight: 700; 
  color: var(--text-muted); 
  text-transform: uppercase; 
  margin-bottom: 6px; 
  display: block; 
  letter-spacing: 0.5px;
}

input, select { 
  width: 100%; 
  padding: 12px 14px; 
  border-radius: var(--radius-sm); 
  border: 1px solid var(--border-color); 
  background: var(--bg-main); 
  color: var(--text-main); 
  font-size: 14px; 
  transition: var(--transition);
}

input:focus, select:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.15);
}

input::placeholder {
  color: #4b5563;
}

/* Buttons */
button {
  cursor: pointer;
  border: none;
  font-weight: 700;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.btn-primary, button.btn-amber { 
  width: 100%; 
  padding: 13px; 
  background: var(--primary); 
  color: #121212; 
  font-size: 14px; 
  margin-top: 12px; 
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.25);
}

.btn-primary:hover, button.btn-amber:hover { 
  background: var(--primary-hover); 
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(217, 119, 6, 0.4);
}

.btn-primary:active, button.btn-amber:active {
  transform: translateY(0);
}

.btn-primary:disabled { 
  opacity: 0.6; 
  cursor: not-allowed; 
  transform: none;
  box-shadow: none;
}

.btn-danger { 
  background: rgba(239, 68, 68, 0.15); 
  color: #fca5a5; 
  border: 1px solid rgba(239, 68, 68, 0.3);
  padding: 8px 14px; 
  width: auto; 
  font-size: 12px; 
  border-radius: var(--radius-sm); 
}

.btn-danger:hover {
  background: var(--danger);
  color: #fff;
}

/* ------------------------------------------
   DASHBOARD METRICS GRID
   ------------------------------------------ */
.grid-3 { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
  gap: 16px; 
  margin-bottom: 20px;
}

.metric-box { 
  background: var(--bg-surface); 
  padding: 20px; 
  border-radius: var(--radius-md); 
  border: 1px solid var(--border-color); 
  position: relative;
  overflow: hidden;
}

.metric-box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--primary);
}

.metric-title {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.metric-val { 
  font-size: 26px; 
  font-weight: 800; 
  color: var(--primary); 
  margin-top: 6px; 
  letter-spacing: -0.5px;
}

/* ------------------------------------------
   TABLE STYLING
   ------------------------------------------ */
.table-responsive { 
  overflow-x: auto; 
  margin-top: 16px; 
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

table { 
  width: 100%; 
  border-collapse: collapse; 
  text-align: left; 
  font-size: 13px; 
  white-space: nowrap;
}

th { 
  background: var(--bg-surface); 
  color: var(--primary); 
  padding: 14px 16px; 
  border-bottom: 1px solid var(--border-color); 
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
}

td { 
  padding: 14px 16px; 
  border-bottom: 1px solid var(--border-color); 
  color: #e5e7eb; 
}

tr:last-child td {
  border-bottom: none;
}

tr:hover td {
  background: rgba(255, 255, 255, 0.015);
}

/* ------------------------------------------
   SPECIAL COMPONENTS
   ------------------------------------------ */
.otp-input-box { 
  text-align: center; 
  font-size: 28px; 
  letter-spacing: 12px; 
  font-weight: 800; 
  color: var(--primary);
  background: var(--bg-main);
  padding: 16px;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
}

.badge-warning {
  background: rgba(217, 119, 6, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(217, 119, 6, 0.3);
}

.badge-danger {
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.badge-success {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.hidden { 
  display: none !important; 
}
