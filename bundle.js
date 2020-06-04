!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=BABYLON},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(0),i=n(2);const a=document.getElementById("view"),s=new r.Engine(a,!0),c=new r.Scene(s);new r.ArcRotateCamera("camera",Math.PI/2,Math.PI/3.2,2,r.Vector3.Zero(),c).attachControl(a);new r.HemisphericLight("light",new r.Vector3(0,1,0),c);new r.PointLight("pointLight",new r.Vector3(0,1,0),c);const u=r.MeshBuilder.CreateGround("mesh",{},c);var l=r.MeshBuilder.CreateSphere("sphere",{diameter:.1,segments:32},c);l.position.y=.05;const m=new i.SampleMaterial("material",c),p=new r.StandardMaterial("sphereMateria",c);p.diffuseColor=new r.Color3(0,1,0),p.specularColor=new r.Color3(0,1,0),l.actionManager=new r.ActionManager(c),l.actionManager.registerAction(new r.ExecuteCodeAction(r.ActionManager.OnPickTrigger,()=>{if(l.material==p)l.material=null,c.beginDirectAnimation(l,[d],0,2*f,!0);else{l.material=p;const e=new r.ParticleSystem("ducks",300,c);e.particleTexture=new r.Texture("1200px-Star_.svg.png",c),e.emitter=new r.Vector3(0,1,0),e.minEmitBox=new r.Vector3(-5,-5,-5),e.maxEmitBox=new r.Vector3(5,5,5),e.gravity=new r.Vector3(0,-2,0),e.emitRate=222,e.start(),setTimeout(()=>{e.stop()},3e3),c.stopAnimation(l)}})),u.material=m;var f=10,d=new o.Animation("xSlide","position.x",f,o.Animation.ANIMATIONTYPE_FLOAT,o.Animation.ANIMATIONLOOPMODE_CYCLE),v=[];v.push({frame:0,value:.5}),v.push({frame:f,value:-.5}),v.push({frame:2*f,value:.5}),d.setKeys(v);var h=new o.Animation("yRot","rotation.y",f,o.Animation.ANIMATIONTYPE_FLOAT,o.Animation.ANIMATIONLOOPMODE_CYCLE),g=[];g.push({frame:0,value:0}),g.push({frame:f,value:Math.PI}),g.push({frame:2*f,value:2*Math.PI}),h.setKeys(g),c.beginDirectAnimation(u,[h],0,2*f,!0);for(var M=[],w=0;w<51;w++)M.push(new o.Vector3((50+10*Math.sin(8*w*Math.PI/50))*Math.cos(2*w*Math.PI/50),0,(50+5*Math.sin(6*w*Math.PI/50))*Math.sin(2*w*Math.PI/50)));o.MeshBuilder.CreateLines("track",{points:M},c).color=new o.Color3(0,20,0),s.runRenderLoop(()=>{c.render()}),console.clear()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SampleMaterial=void 0;const r=n(0),o=n(3),i=n(4);BABYLON.Effect.ShadersStore.sampleVertexShader=o,BABYLON.Effect.ShadersStore.sampleFragmentShader=i;class a extends r.ShaderMaterial{constructor(e,t){super(e,t,{vertex:"sample",fragment:"sample"},{uniforms:["worldViewProjection","time"],attributes:["position","normal","uv"]});const n=Date.now();t.registerBeforeRender(()=>{const e=Date.now()-n;this.time=e/1e3})}set time(e){this.setFloat("time",e)}}t.SampleMaterial=a},function(e,t){e.exports="precision highp float;\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\n// Uniforms\nuniform mat4 worldViewProjection;\n\n// Varying\nvarying vec2 uvV;\n\nvoid main(void) {\n    gl_Position = worldViewProjection * vec4(position, 1.0);\n\n    uvV = uv;\n}\n"},function(e,t){e.exports="precision highp float;\n\n// Uniforms\nuniform float time;\n\n// Varying\nvarying vec2 uvV;\n\nvoid main(void) {\n    vec3 color = 0.5 + 0.5*cos(time + uvV.xyx +vec3(0,2,4));\n\n    gl_FragColor = vec4(color, 1.);\n}\n"}]);