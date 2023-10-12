const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('appApi', {
	getElectronVersions: () => {
		return process.versions['electron']
	},
});
