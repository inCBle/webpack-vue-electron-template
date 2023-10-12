const { join } = require('node:path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1400,
		height: 900,
		minWidth: 1280,
		minHeight: 720,
		center: true, // 居中
		resizable: true, // 可缩放
		webPreferences: {
			preload: join(__dirname, 'preload.js'),
		},
	});

	win.loadFile(join(__dirname, '../index.html'));
};

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
