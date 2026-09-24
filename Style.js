* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
body { background-color: #121212; color: #f3f4f6; min-height: 100vh; display: flex; flex-direction: column; }

.login-card {
  max-width: 400px;
  width: 90%;
  margin: 80px auto;
  padding: 30px;
  background-color: #1e1e1e;
  border-radius: 12px;
  border: 1px solid #2d2d2d;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.form-group { margin-bottom: 20px; text-align: left; }
.form-group input { width: 100%; padding: 12px; padding-right: 70px; }

.btn-primary { width: 100%; padding: 12px; background: #d97706; color: #121212; border: none; font-weight: 700; cursor: pointer; border-radius: 8px; font-size: 14px; }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

header { background: #1a1a1a; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #2d2d2d; }
.brand { font-size: 18px; font-weight: 800; color: #d97706; display: flex; align-items: center; gap: 8px; letter-spacing: 0.5px; }

.nav-bar { display: flex; background: #1a1a1a; overflow-x: auto; border-bottom: 2px solid #2d2d2d; white-space: nowrap; -webkit-overflow-scrolling: touch; }
.nav-btn { background: none; border: none; color: #9ca3af; padding: 12px 16px; font-size: 13px; font-weight: 600; cursor: pointer; }
.nav-btn.active { color: #d97706; border-bottom: 3px solid #d97706; }

.container { padding: 16px; flex: 1; max-width: 800px; margin: 0 auto; width: 100%; }
.card { background: #1a1a1a; border-radius: 12px; padding: 16px; margin-bottom: 16px; border: 1px solid #2d2d2d; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3); }

label { font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-top: 8px; display: block; }
input, select, button { width: 100%; padding: 12px; margin-top: 4px; border-radius: 8px; border: 1px solid #374151; background: #121212; color: #fff; font-size: 14px; }
button.btn-amber { background: #d97706; color: #121212; border: none; font-weight: 700; cursor: pointer; margin-top: 12px; }
button.btn-danger { background: #ef4444; color: #fff; border: none; font-weight: 700; cursor: pointer; padding: 6px 12px; width: auto; font-size: 12px; border-radius: 6px; }

.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; }
.metric-box { background: #121212; padding: 12px; border-radius: 8px; border: 1px solid #2d2d2d; }
.metric-val { font-size: 20px; font-weight: 800; color: #d97706; margin-top: 4px; }

.table-responsive { overflow-x: auto; margin-top: 12px; }
table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
th { background: #121212; color: #d97706; padding: 10px; border-bottom: 1px solid #2d2d2d; }
td { padding: 10px; border-bottom: 1px solid #2d2d2d; color: #e5e7eb; }

.otp-input-box { text-align: center; font-size: 22px; letter-spacing: 8px; font-weight: bold; }
.hidden { display: none !important; }
