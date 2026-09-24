<style>
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

  .login-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
  }

  .login-card {
    width: 100%;
    max-width: 400px;
    padding: 34px 30px;
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    box-shadow: 0 20px 44px -12px rgba(0, 0, 0, 0.55);
  }

  .login-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--primary);
    font-size: 21px;
    font-weight: 800;
    letter-spacing: 0.2px;
    margin-bottom: 4px;
  }

  .login-subtitle {
    text-align: center;
    color: var(--text-muted);
    font-size: 12.5px;
    margin-bottom: 26px;
  }

  .form-group { margin-bottom: 18px; text-align: left; }
  .form-group input { width: 100%; padding: 12px 14px; padding-right: 72px; }

  .btn-primary {
    width: 100%;
    padding: 13px;
    background: var(--primary);
    color: #0d0d0d;
    border: none;
    font-weight: 700;
    cursor: pointer;
    border-radius: var(--radius-sm);
    font-size: 14px;
    transition: var(--transition);
  }
  .btn-primary:hover:not(:disabled) { background: var(--primary-hover); }
  .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

  .otp-input-box { text-align: center; font-size: 24px; letter-spacing: 10px; font-weight: 700; }

  .password-toggle {
    position: absolute;
    right: 12px;
    top: 38px;
    cursor: pointer;
    font-size: 12.5px;
    color: var(--text-muted);
    user-select: none;
  }

  .link-muted {
    color: var(--primary);
    font-size: 13px;
    text-decoration: none;
  }
  .link-muted:hover { text-decoration: underline; }

  .error-text {
    color: var(--danger);
    font-size: 12.5px;
    margin-top: 14px;
    text-align: center;
    display: none;
  }

  header {
    background: var(--bg-surface);
    padding: 14px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .brand {
    font-size: 18px;
    font-weight: 800;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .user-badge { font-size: 12.5px; color: var(--text-muted); }

  .nav-bar {
    display: flex;
    background: var(--bg-surface);
    overflow-x: auto;
    border-bottom: 2px solid var(--border-color);
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .nav-btn {
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    color: var(--text-muted);
    padding: 13px 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
  }
  .nav-btn:hover { color: var(--text-main); }
  .nav-btn.active { color: var(--primary); border-bottom-color: var(--primary); }

  .container { padding: 18px; flex: 1; max-width: 840px; margin: 0 auto; width: 100%; }

  .card {
    background: var(--bg-card);
    border-radius: var(--radius-md);
    padding: 18px;
    margin-bottom: 16px;
    border: 1px solid var(--border-color);
  }
  .card h3 { margin-bottom: 14px; font-size: 15px; color: var(--primary); font-weight: 700; }
  .card h3.danger-heading { color: var(--danger); }

  label {
    font-size: 11px;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.3px;
    margin-top: 10px;
    display: block;
  }

  input, select, button {
    width: 100%;
    padding: 12px 14px;
    margin-top: 5px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-color);
    background: var(--bg-main);
    color: var(--text-main);
    font-size: 14px;
    transition: var(--transition);
  }
  input:focus, select:focus { outline: none; border-color: var(--border-focus); }

  button.btn-amber {
    background: var(--primary);
    color: #0d0d0d;
    border: none;
    font-weight: 700;
    cursor: pointer;
    margin-top: 14px;
  }
  button.btn-amber:hover { background: var(--primary-hover); }

  button.btn-danger {
    background: var(--danger);
    color: #fff;
    border: none;
    font-weight: 700;
    cursor: pointer;
    padding: 7px 14px;
    width: auto;
    font-size: 12px;
    border-radius: 6px;
    margin-top: 0;
  }
  button.btn-danger:hover { background: var(--danger-hover); }

  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; }
  .metric-box { background: var(--bg-main); padding: 14px 8px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); }
  .metric-label { font-size: 10px; color: var(--text-muted); letter-spacing: 0.4px; }
  .metric-val { font-size: 21px; font-weight: 800; color: var(--primary); margin-top: 4px; }
  .metric-val.danger { color: var(--danger); }

  .table-responsive { overflow-x: auto; margin-top: 12px; }
  table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
  th { background: var(--bg-main); color: var(--primary); padding: 10px; border-bottom: 1px solid var(--border-color); white-space: nowrap; }
  td { padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main); }
  tr:last-child td { border-bottom: none; }
  .empty-note { color: var(--text-muted); font-size: 13px; padding: 8px 0; }

  .hidden { display: none !important; }

  @media (max-width: 380px) {
    .grid-3 { grid-template-columns: 1fr 1fr; }
    .metric-box:last-child { grid-column: span 2; }
  }
</style>
