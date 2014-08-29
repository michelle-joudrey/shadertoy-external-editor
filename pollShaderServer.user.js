// ==UserScript==
// @name           shadertoy-external-editor
// @author         Reinitialized
//
//Version Number
// @version        0.02
//
// Urls process this user script on
// @include        /^https?://(www\.)?shadertoy.com/new$/
// @require       https://cdn.socket.io/socket.io-1.0.6.js
// ==/UserScript==

var socket = io.connect('localhost:1234');
socket.on('shaderUpdate', function(shader) {
    if (t = gShaderToy) {
	t.mCodeEditor.setValue(shader);
	t.SetShaderFromEditor();
    }
});
