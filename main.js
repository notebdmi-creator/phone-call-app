
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: 'logo.png'
  });

  win.loadURL('https://amarip.net');
}

app.whenReady().then(createWindow);
