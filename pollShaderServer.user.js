// ==UserScript==
// @name           shadertoy-external-editor
// @author         Reinitialized
//
//Version Number
// @version        0.01
//
// Urls process this user script on
// @include        /^https?://(www\.)?shadertoy.com/new$/
// ==/UserScript==

function pollShaderServer()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.timeout = 0;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            gShaderToy.mCodeEditor.setValue(xmlhttp.responseText);
            gShaderToy.SetShaderFromEditor();
            pollShaderServer();
        }
    }
    xmlhttp.open("GET","http://127.0.0.1:1234", true);
    xmlhttp.send();
};
pollShaderServer();
