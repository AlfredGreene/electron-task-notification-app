// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ipc = require('electron').ipcRenderer;

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', function () {
  ipc.send('close-window');
})

const minBtn = document.getElementById('minimize-btn');

minBtn.addEventListener('click', function () {
  ipc.send('minimize-window');
})

