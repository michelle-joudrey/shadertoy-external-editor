shadertoy-external-editor
=========

Edit [ShaderToy](https://www.shadertoy.com) shaders interactively in your editor of choice.

Installation
--------------
1. [Install Node](http://nodejs.org/download/)
2. [Install the browser userscript](https://github.com/reinitialized/shadertoy-external-editor/raw/master/pollShaderServer.user.js)
3. Create a shader at the path "~/myShaderToy.vert"
4. Run:
```sh
node shaderServer.js
```
4. [Open a new ShaderToy](https://www.shadertoy.com/new)
5. Modify myShaderToy.vert (changes are reflected on the webpage upon saving)

License
----

MIT
