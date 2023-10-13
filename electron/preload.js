const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appApi', {
	getElectronVersions: () => {
		return process.versions['electron'];
	},
	openFile: () => ipcRenderer.invoke('dialog:openFile'),
});
