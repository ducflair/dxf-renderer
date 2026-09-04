var pW=Object.create;var{getPrototypeOf:uW,defineProperty:v7,getOwnPropertyNames:dW}=Object;var lW=Object.prototype.hasOwnProperty;var v6=(J,Q,$)=>{$=J!=null?pW(uW(J)):{};let U=Q||!J||!J.__esModule?v7($,"default",{value:J,enumerable:!0}):$;for(let F of dW(J))if(!lW.call(U,F))v7(U,F,{get:()=>J[F],enumerable:!0});return U};var h7=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var h6=h7((b7,C4)=>{(function(J,Q){if(typeof define==="function"&&define.amd)define(Q);else if(typeof C4==="object"&&C4.exports)C4.exports=Q();else J.log=Q()})(b7,function(){var J=function(){},Q="undefined",$=typeof window!==Q&&typeof window.navigator!==Q&&/Trident\/|MSIE /.test(window.navigator.userAgent),U=["trace","debug","info","warn","error"],F={},G=null;function E(T,f){var h=T[f];if(typeof h.bind==="function")return h.bind(T);else try{return Function.prototype.bind.call(h,T)}catch(p){return function(){return Function.prototype.apply.apply(h,[T,arguments])}}}function q(){if(console.log)if(console.log.apply)console.log.apply(console,arguments);else Function.prototype.apply.apply(console.log,[console,arguments]);if(console.trace)console.trace()}function N(T){if(T==="debug")T="log";if(typeof console===Q)return!1;else if(T==="trace"&&$)return q;else if(console[T]!==void 0)return E(console,T);else if(console.log!==void 0)return E(console,"log");else return J}function B(){var T=this.getLevel();for(var f=0;f<U.length;f++){var h=U[f];this[h]=f<T?J:this.methodFactory(h,T,this.name)}if(this.log=this.debug,typeof console===Q&&T<this.levels.SILENT)return"No console available for logging"}function V(T){return function(){if(typeof console!==Q)B.call(this),this[T].apply(this,arguments)}}function w(T,f,h){return N(T)||V.apply(this,arguments)}function _(T,f){var h=this,p,d,m,x="loglevel";if(typeof T==="string")x+=":"+T;else if(typeof T==="symbol")x=void 0;function t(b){var y=(U[b]||"silent").toUpperCase();if(typeof window===Q||!x)return;try{window.localStorage[x]=y;return}catch(c){}try{window.document.cookie=encodeURIComponent(x)+"="+y+";"}catch(c){}}function s(){var b;if(typeof window===Q||!x)return;try{b=window.localStorage[x]}catch(N0){}if(typeof b===Q)try{var y=window.document.cookie,c=encodeURIComponent(x),G0=y.indexOf(c+"=");if(G0!==-1)b=/^([^;]+)/.exec(y.slice(G0+c.length+1))[1]}catch(N0){}if(h.levels[b]===void 0)b=void 0;return b}function W0(){if(typeof window===Q||!x)return;try{window.localStorage.removeItem(x)}catch(b){}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(b){}}function F0(b){var y=b;if(typeof y==="string"&&h.levels[y.toUpperCase()]!==void 0)y=h.levels[y.toUpperCase()];if(typeof y==="number"&&y>=0&&y<=h.levels.SILENT)return y;else throw TypeError("log.setLevel() called with invalid level: "+b)}h.name=T,h.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},h.methodFactory=f||w,h.getLevel=function(){if(m!=null)return m;else if(d!=null)return d;else return p},h.setLevel=function(b,y){if(m=F0(b),y!==!1)t(m);return B.call(h)},h.setDefaultLevel=function(b){if(d=F0(b),!s())h.setLevel(b,!1)},h.resetLevel=function(){m=null,W0(),B.call(h)},h.enableAll=function(b){h.setLevel(h.levels.TRACE,b)},h.disableAll=function(b){h.setLevel(h.levels.SILENT,b)},h.rebuild=function(){if(G!==h)p=F0(G.getLevel());if(B.call(h),G===h)for(var b in F)F[b].rebuild()},p=F0(G?G.getLevel():"WARN");var P0=s();if(P0!=null)m=F0(P0);B.call(h)}G=new _,G.getLogger=function(f){if(typeof f!=="symbol"&&typeof f!=="string"||f==="")throw TypeError("You must supply a name when creating a logger.");var h=F[f];if(!h)h=F[f]=new _(f,G.methodFactory);return h};var I=typeof window!==Q?window.log:void 0;return G.noConflict=function(){if(typeof window!==Q&&window.log===G)window.log=I;return G},G.getLoggers=function(){return F},G.default=G,G})});var o9=h7((s9,J6)=>{var n9=(()=>{var{defineProperty:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:$}=Object,U=Object.prototype.hasOwnProperty,F=(H,Z)=>{for(var W in Z)J(H,W,{get:Z[W],enumerable:!0})},G=(H,Z,W,K)=>{if(Z&&typeof Z==="object"||typeof Z==="function"){for(let X of $(Z))if(!U.call(H,X)&&X!==W)J(H,X,{get:()=>Z[X],enumerable:!(K=Q(Z,X))||K.enumerable})}return H},E=(H)=>G(J({},"__esModule",{value:!0}),H),q={};F(q,{BoundingBox:()=>C1,Font:()=>I7,Glyph:()=>b2,Path:()=>m1,_parse:()=>n,load:()=>xW,loadSync:()=>gW,parse:()=>yW});var N=0,B=-3;function V(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function w(H,Z){this.source=H,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=Z,this.destLen=0,this.ltree=new V,this.dtree=new V}var _=new V,I=new V,T=new Uint8Array(30),f=new Uint16Array(30),h=new Uint8Array(30),p=new Uint16Array(30),d=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),m=new V,x=new Uint8Array(320);function t(H,Z,W,K){var X,Y;for(X=0;X<W;++X)H[X]=0;for(X=0;X<30-W;++X)H[X+W]=X/W|0;for(Y=K,X=0;X<30;++X)Z[X]=Y,Y+=1<<H[X]}function s(H,Z){var W;for(W=0;W<7;++W)H.table[W]=0;H.table[7]=24,H.table[8]=152,H.table[9]=112;for(W=0;W<24;++W)H.trans[W]=256+W;for(W=0;W<144;++W)H.trans[24+W]=W;for(W=0;W<8;++W)H.trans[168+W]=280+W;for(W=0;W<112;++W)H.trans[176+W]=144+W;for(W=0;W<5;++W)Z.table[W]=0;Z.table[5]=32;for(W=0;W<32;++W)Z.trans[W]=W}var W0=new Uint16Array(16);function F0(H,Z,W,K){var X,Y;for(X=0;X<16;++X)H.table[X]=0;for(X=0;X<K;++X)H.table[Z[W+X]]++;H.table[0]=0;for(Y=0,X=0;X<16;++X)W0[X]=Y,Y+=H.table[X];for(X=0;X<K;++X)if(Z[W+X])H.trans[W0[Z[W+X]]++]=X}function P0(H){if(!H.bitcount--)H.tag=H.source[H.sourceIndex++],H.bitcount=7;var Z=H.tag&1;return H.tag>>>=1,Z}function b(H,Z,W){if(!Z)return W;while(H.bitcount<24)H.tag|=H.source[H.sourceIndex++]<<H.bitcount,H.bitcount+=8;var K=H.tag&65535>>>16-Z;return H.tag>>>=Z,H.bitcount-=Z,K+W}function y(H,Z){while(H.bitcount<24)H.tag|=H.source[H.sourceIndex++]<<H.bitcount,H.bitcount+=8;var W=0,K=0,X=0,Y=H.tag;do K=2*K+(Y&1),Y>>>=1,++X,W+=Z.table[X],K-=Z.table[X];while(K>=0);return H.tag=Y,H.bitcount-=X,Z.trans[W+K]}function c(H,Z,W){var K,X,Y,R,O,A;K=b(H,5,257),X=b(H,5,1),Y=b(H,4,4);for(R=0;R<19;++R)x[R]=0;for(R=0;R<Y;++R){var P=b(H,3,0);x[d[R]]=P}F0(m,x,0,19);for(O=0;O<K+X;){var D=y(H,m);switch(D){case 16:var C=x[O-1];for(A=b(H,2,3);A;--A)x[O++]=C;break;case 17:for(A=b(H,3,3);A;--A)x[O++]=0;break;case 18:for(A=b(H,7,11);A;--A)x[O++]=0;break;default:x[O++]=D;break}}F0(Z,x,0,K),F0(W,x,K,X)}function G0(H,Z,W){for(;;){var K=y(H,Z);if(K===256)return N;if(K<256)H.dest[H.destLen++]=K;else{var X,Y,R,O;K-=257,X=b(H,T[K],f[K]),Y=y(H,W),R=H.destLen-b(H,h[Y],p[Y]);for(O=R;O<R+X;++O)H.dest[H.destLen++]=H.dest[O]}}}function N0(H){var Z,W,K;while(H.bitcount>8)H.sourceIndex--,H.bitcount-=8;if(Z=H.source[H.sourceIndex+1],Z=256*Z+H.source[H.sourceIndex],W=H.source[H.sourceIndex+3],W=256*W+H.source[H.sourceIndex+2],Z!==(~W&65535))return B;H.sourceIndex+=4;for(K=Z;K;--K)H.dest[H.destLen++]=H.source[H.sourceIndex++];return H.bitcount=0,N}function Y1(H,Z){var W=new w(H,Z),K,X,Y;do{switch(K=P0(W),X=b(W,2,0),X){case 0:Y=N0(W);break;case 1:Y=G0(W,_,I);break;case 2:c(W,W.ltree,W.dtree),Y=G0(W,W.ltree,W.dtree);break;default:Y=B}if(Y!==N)throw Error("Data error")}while(!K);if(W.destLen<W.dest.length)if(typeof W.dest.slice==="function")return W.dest.slice(0,W.destLen);else return W.dest.subarray(0,W.destLen);return W.dest}s(_,I),t(T,f,4,3),t(h,p,2,1),T[28]=0,f[28]=258;function u0(H,Z,W,K,X){return Math.pow(1-X,3)*H+3*Math.pow(1-X,2)*X*Z+3*(1-X)*Math.pow(X,2)*W+Math.pow(X,3)*K}function Z1(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Z1.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},Z1.prototype.addPoint=function(H,Z){if(typeof H==="number"){if(isNaN(this.x1)||isNaN(this.x2))this.x1=H,this.x2=H;if(H<this.x1)this.x1=H;if(H>this.x2)this.x2=H}if(typeof Z==="number"){if(isNaN(this.y1)||isNaN(this.y2))this.y1=Z,this.y2=Z;if(Z<this.y1)this.y1=Z;if(Z>this.y2)this.y2=Z}},Z1.prototype.addX=function(H){this.addPoint(H,null)},Z1.prototype.addY=function(H){this.addPoint(null,H)},Z1.prototype.addBezier=function(H,Z,W,K,X,Y,R,O){let A=[H,Z],P=[W,K],D=[X,Y],C=[R,O];this.addPoint(H,Z),this.addPoint(R,O);for(let z=0;z<=1;z++){let k=6*A[z]-12*P[z]+6*D[z],S=-3*A[z]+9*P[z]-9*D[z]+3*C[z],j=3*P[z]-3*A[z];if(S===0){if(k===0)continue;let U0=-j/k;if(0<U0&&U0<1){if(z===0)this.addX(u0(A[z],P[z],D[z],C[z],U0));if(z===1)this.addY(u0(A[z],P[z],D[z],C[z],U0))}continue}let g=Math.pow(k,2)-4*j*S;if(g<0)continue;let $0=(-k+Math.sqrt(g))/(2*S);if(0<$0&&$0<1){if(z===0)this.addX(u0(A[z],P[z],D[z],C[z],$0));if(z===1)this.addY(u0(A[z],P[z],D[z],C[z],$0))}let J0=(-k-Math.sqrt(g))/(2*S);if(0<J0&&J0<1){if(z===0)this.addX(u0(A[z],P[z],D[z],C[z],J0));if(z===1)this.addY(u0(A[z],P[z],D[z],C[z],J0))}}},Z1.prototype.addQuad=function(H,Z,W,K,X,Y){let R=H+0.6666666666666666*(W-H),O=Z+0.6666666666666666*(K-Z),A=R+0.3333333333333333*(X-H),P=O+0.3333333333333333*(Y-Z);this.addBezier(H,Z,R,O,A,P,X,Y)};var C1=Z1;function I0(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}var T0={};function A1(H,Z){let W=Math.floor(H),K=H-W;if(!T0[Z])T0[Z]={};if(T0[Z][K]!==void 0){let Y=T0[Z][K];return W+Y}let X=+(Math.round(K+"e+"+Z)+"e-"+Z);return T0[Z][K]=X,W+X}function W1(H){let Z=[[]],W=0,K=0;for(let X=0;X<H.length;X+=1){let Y=Z[Z.length-1],R=H[X],O=Y[0],A=Y[1],P=Y[Y.length-1],D=H[X+1];if(Y.push(R),R.type==="M")W=R.x,K=R.y;else if(R.type==="L"&&(!D||D.type==="Z")){if(!(Math.abs(R.x-W)>1||Math.abs(R.y-K)>1))Y.pop()}else if(R.type==="L"&&P&&P.x===R.x&&P.y===R.y)Y.pop();else if(R.type==="Z"){if(O&&A&&P&&O.type==="M"&&A.type==="L"&&P.type==="L"&&P.x===O.x&&P.y===O.y)Y.shift(),Y[0].type="M";if(X+1<H.length)Z.push([])}}return H=[].concat.apply([],Z),H}function N2(H){return Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0,scale:1,x:0,y:0},H)}function s1(H){if(parseInt(H)===H)H={decimalPlaces:H,flipY:!1};return Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0},H)}I0.prototype.fromSVG=function(H,Z={}){if(typeof SVGPathElement<"u"&&H instanceof SVGPathElement)H=H.getAttribute("d");Z=N2(Z),this.commands=[];let W="0123456789",K="MmLlQqCcZzHhVv",X="SsTtAa",Y="-+",R={},O=[""],A=!1;function P(S){return S.filter((j)=>j.length).map((j)=>{let g=parseFloat(j);if(Z.decimalPlaces||Z.decimalPlaces===0)g=A1(g,Z.decimalPlaces);return g})}function D(S){if(!this.commands.length)return S;let j=this.commands[this.commands.length-1];for(let g=0;g<S.length;g++)S[g]+=j[g&1?"y":"x"];return S}function C(){if(R.type===void 0)return;let S=R.type.toUpperCase(),j=S!=="Z"&&R.type.toUpperCase()!==R.type,g=P(O);if(O=[""],!g.length&&S!=="Z")return;if(j&&S!=="H"&&S!=="V")g=D.apply(this,[g]);let $0=this.commands.length?this.commands[this.commands.length-1].x||0:0,J0=this.commands.length?this.commands[this.commands.length-1].y||0:0;switch(S){case"M":this.moveTo(...g);break;case"L":this.lineTo(...g);break;case"V":for(let U0=0;U0<g.length;U0++){let O0=0;if(j)O0=this.commands.length?this.commands[this.commands.length-1].y||0:0;this.lineTo($0,g[U0]+O0)}break;case"H":for(let U0=0;U0<g.length;U0++){let O0=0;if(j)O0=this.commands.length?this.commands[this.commands.length-1].x||0:0;this.lineTo(g[U0]+O0,J0)}break;case"C":this.bezierCurveTo(...g);break;case"Q":this.quadraticCurveTo(...g);break;case"Z":if(this.commands.length<1||this.commands[this.commands.length-1].type!=="Z")this.close();break}if(this.commands.length){for(let U0 in this.commands[this.commands.length-1])if(this.commands[this.commands.length-1][U0]===void 0)this.commands[this.commands.length-1][U0]=0}}for(let S=0;S<H.length;S++){let j=H.charAt(S),g=O[O.length-1];if(W.indexOf(j)>-1)O[O.length-1]+=j;else if(Y.indexOf(j)>-1){if(!R.type&&!this.commands.length)R.type="L";if(j==="-")if(!R.type||g.indexOf("-")>0)A=!0;else if(g.length)O.push("-");else O[O.length-1]=j;else if(!R.type||g.length>0)A=!0;else continue}else if(K.indexOf(j)>-1)if(R.type)C.apply(this),R={type:j};else R.type=j;else if(X.indexOf(j)>-1)throw Error("Unsupported path command: "+j+". Currently supported commands are "+K.split("").join(", ")+".");else if(` ,	
\r\f\v`.indexOf(j)>-1)O.push("");else if(j===".")if(!R.type||g.indexOf(j)>-1)A=!0;else O[O.length-1]+=j;else A=!0;if(A)throw Error("Unexpected character: "+j+" at offset "+S)}if(C.apply(this),Z.optimize)this.commands=W1(this.commands);let{flipY:z,flipYBase:k}=Z;if(z===!0&&Z.flipYBase===void 0){let S=this.getBoundingBox();k=S.y1+S.y2}for(let S in this.commands){let j=this.commands[S];for(let g in j)if(["x","x1","x2"].includes(g))this.commands[S][g]=Z.x+j[g]*Z.scale;else if(["y","y1","y2"].includes(g))this.commands[S][g]=Z.y+(z?k-j[g]:j[g])*Z.scale}return this},I0.fromSVG=function(H,Z){return new I0().fromSVG(H,Z)},I0.prototype.moveTo=function(H,Z){this.commands.push({type:"M",x:H,y:Z})},I0.prototype.lineTo=function(H,Z){this.commands.push({type:"L",x:H,y:Z})},I0.prototype.curveTo=I0.prototype.bezierCurveTo=function(H,Z,W,K,X,Y){this.commands.push({type:"C",x1:H,y1:Z,x2:W,y2:K,x:X,y:Y})},I0.prototype.quadTo=I0.prototype.quadraticCurveTo=function(H,Z,W,K){this.commands.push({type:"Q",x1:H,y1:Z,x:W,y:K})},I0.prototype.close=I0.prototype.closePath=function(){this.commands.push({type:"Z"})},I0.prototype.extend=function(H){if(H.commands)H=H.commands;else if(H instanceof C1){let Z=H;this.moveTo(Z.x1,Z.y1),this.lineTo(Z.x2,Z.y1),this.lineTo(Z.x2,Z.y2),this.lineTo(Z.x1,Z.y2),this.close();return}Array.prototype.push.apply(this.commands,H)},I0.prototype.getBoundingBox=function(){let H=new C1,Z=0,W=0,K=0,X=0;for(let Y=0;Y<this.commands.length;Y++){let R=this.commands[Y];switch(R.type){case"M":H.addPoint(R.x,R.y),Z=K=R.x,W=X=R.y;break;case"L":H.addPoint(R.x,R.y),K=R.x,X=R.y;break;case"Q":H.addQuad(K,X,R.x1,R.y1,R.x,R.y),K=R.x,X=R.y;break;case"C":H.addBezier(K,X,R.x1,R.y1,R.x2,R.y2,R.x,R.y),K=R.x,X=R.y;break;case"Z":K=Z,X=W;break;default:throw Error("Unexpected path command "+R.type)}}if(H.isEmpty())H.addPoint(0,0);return H},I0.prototype.draw=function(H){let Z=this._layers;if(Z&&Z.length){for(let K=0;K<Z.length;K++)this.draw.call(Z[K],H);return}let W=this._image;if(W){H.drawImage(W.image,W.x,W.y,W.width,W.height);return}H.beginPath();for(let K=0;K<this.commands.length;K+=1){let X=this.commands[K];if(X.type==="M")H.moveTo(X.x,X.y);else if(X.type==="L")H.lineTo(X.x,X.y);else if(X.type==="C")H.bezierCurveTo(X.x1,X.y1,X.x2,X.y2,X.x,X.y);else if(X.type==="Q")H.quadraticCurveTo(X.x1,X.y1,X.x,X.y);else if(X.type==="Z"&&this.stroke&&this.strokeWidth)H.closePath()}if(this.fill)H.fillStyle=this.fill,H.fill();if(this.stroke)H.strokeStyle=this.stroke,H.lineWidth=this.strokeWidth,H.stroke()},I0.prototype.toPathData=function(H){H=s1(H);function Z(O){let A=A1(O,H.decimalPlaces);if(Math.round(O)===A)return""+A;else return A.toFixed(H.decimalPlaces)}function W(){let O="";for(let A=0;A<arguments.length;A+=1){let P=arguments[A];if(P>=0&&A>0)O+=" ";O+=Z(P)}return O}let K=this.commands;if(H.optimize)K=JSON.parse(JSON.stringify(this.commands)),K=W1(K);let{flipY:X,flipYBase:Y}=H;if(X===!0&&Y===void 0){let O=new I0;O.extend(K);let A=O.getBoundingBox();Y=A.y1+A.y2}let R="";for(let O=0;O<K.length;O+=1){let A=K[O];if(A.type==="M")R+="M"+W(A.x,X?Y-A.y:A.y);else if(A.type==="L")R+="L"+W(A.x,X?Y-A.y:A.y);else if(A.type==="C")R+="C"+W(A.x1,X?Y-A.y1:A.y1,A.x2,X?Y-A.y2:A.y2,A.x,X?Y-A.y:A.y);else if(A.type==="Q")R+="Q"+W(A.x1,X?Y-A.y1:A.y1,A.x,X?Y-A.y:A.y);else if(A.type==="Z")R+="Z"}return R},I0.prototype.toSVG=function(H,Z){if(this._layers&&this._layers.length)console.warn("toSVG() does not support colr font layers yet");if(this._image)console.warn("toSVG() does not support SVG glyphs yet");if(!Z)Z=this.toPathData(H);let W='<path d="';if(W+=Z,W+='"',this.fill!==void 0&&this.fill!=="black")if(this.fill===null)W+=' fill="none"';else W+=' fill="'+this.fill+'"';if(this.stroke)W+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"';return W+="/>",W},I0.prototype.toDOMElement=function(H,Z){if(this._layers&&this._layers.length)console.warn("toDOMElement() does not support colr font layers yet");if(!Z)Z=this.toPathData(H);let W=document.createElementNS("http://www.w3.org/2000/svg","path");if(W.setAttribute("d",Z),this.fill!==void 0&&this.fill!=="black")if(this.fill===null)W.setAttribute("fill","none");else W.setAttribute("fill",this.fill);if(this.stroke)W.setAttribute("stroke",this.stroke),W.setAttribute("stroke-width",this.strokeWidth);return W};var m1=I0;function e2(H){throw Error(H)}function r5(H,Z){if(!H)e2(Z)}var H0={fail:e2,argument:r5,assert:r5},c3=32768,i3=2147483648,e9=-32768,JJ=32767.00001525879,j2={},i={},Y0={};function I1(H){return function(){return H}}i.BYTE=function(H){return H0.argument(H>=0&&H<=255,"Byte value should be between 0 and 255."),[H]},Y0.BYTE=I1(1),i.CHAR=function(H){return[H.charCodeAt(0)]},Y0.CHAR=I1(1),i.CHARARRAY=function(H){if(H===null||typeof H>"u")H="",console.warn("CHARARRAY with undefined or null value encountered and treated as an empty string. This is probably caused by a missing glyph name.");let Z=[];for(let W=0;W<H.length;W+=1)Z[W]=H.charCodeAt(W);return Z},Y0.CHARARRAY=function(H){if(typeof H>"u")return 0;return H.length},i.USHORT=function(H){return[H>>8&255,H&255]},Y0.USHORT=I1(2),i.SHORT=function(H){if(H>=c3)H=-(2*c3-H);return[H>>8&255,H&255]},Y0.SHORT=I1(2),i.UINT24=function(H){return[H>>16&255,H>>8&255,H&255]},Y0.UINT24=I1(3),i.ULONG=function(H){return[H>>24&255,H>>16&255,H>>8&255,H&255]},Y0.ULONG=I1(4),i.LONG=function(H){if(H>=i3)H=-(2*i3-H);return[H>>24&255,H>>16&255,H>>8&255,H&255]},Y0.LONG=I1(4),i.FLOAT=function(H){if(H>JJ||H<e9)throw Error(`Value ${H} is outside the range of representable values in 16.16 format`);let Z=Math.round(H*65536)<<0;return i.ULONG(Z)},Y0.FLOAT=Y0.ULONG,i.FIXED=i.ULONG,Y0.FIXED=Y0.ULONG,i.FWORD=i.SHORT,Y0.FWORD=Y0.SHORT,i.UFWORD=i.USHORT,Y0.UFWORD=Y0.USHORT,i.F2DOT14=function(H){return i.USHORT(H*16384)},Y0.F2DOT14=Y0.USHORT,i.LONGDATETIME=function(H){return[0,0,0,0,H>>24&255,H>>16&255,H>>8&255,H&255]},Y0.LONGDATETIME=I1(8),i.TAG=function(H){return H0.argument(H.length===4,"Tag should be exactly 4 ASCII characters."),[H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2),H.charCodeAt(3)]},Y0.TAG=I1(4),i.Card8=i.BYTE,Y0.Card8=Y0.BYTE,i.Card16=i.USHORT,Y0.Card16=Y0.USHORT,i.OffSize=i.BYTE,Y0.OffSize=Y0.BYTE,i.SID=i.USHORT,Y0.SID=Y0.USHORT,i.NUMBER=function(H){if(H>=-107&&H<=107)return[H+139];else if(H>=108&&H<=1131)return H=H-108,[(H>>8)+247,H&255];else if(H>=-1131&&H<=-108)return H=-H-108,[(H>>8)+251,H&255];else if(H>=-32768&&H<=32767)return i.NUMBER16(H);else return i.NUMBER32(H)},Y0.NUMBER=function(H){return i.NUMBER(H).length},i.NUMBER16=function(H){return[28,H>>8&255,H&255]},Y0.NUMBER16=I1(3),i.NUMBER32=function(H){return[29,H>>24&255,H>>16&255,H>>8&255,H&255]},Y0.NUMBER32=I1(5),i.REAL=function(H){let Z=H.toString(),W=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(Z);if(W){let Y=parseFloat("1e"+((W[2]?+W[2]:0)+W[1].length));Z=(Math.round(H*Y)/Y).toString()}let K="";for(let Y=0,R=Z.length;Y<R;Y+=1){let O=Z[Y];if(O==="e")K+=Z[++Y]==="-"?"c":"b";else if(O===".")K+="a";else if(O==="-")K+="e";else K+=O}K+=K.length&1?"f":"ff";let X=[30];for(let Y=0,R=K.length;Y<R;Y+=2)X.push(parseInt(K.substr(Y,2),16));return X},Y0.REAL=function(H){return i.REAL(H).length},i.NAME=i.CHARARRAY,Y0.NAME=Y0.CHARARRAY,i.STRING=i.CHARARRAY,Y0.STRING=Y0.CHARARRAY,j2.UTF8=function(H,Z,W){let K=[],X=W;for(let Y=0;Y<X;Y++,Z+=1)K[Y]=H.getUint8(Z);return String.fromCharCode.apply(null,K)},j2.UTF16=function(H,Z,W){let K=[],X=W/2;for(let Y=0;Y<X;Y++,Z+=2)K[Y]=H.getUint16(Z);return String.fromCharCode.apply(null,K)},i.UTF16=function(H){let Z=[];for(let W=0;W<H.length;W+=1){let K=H.charCodeAt(W);Z[Z.length]=K>>8&255,Z[Z.length]=K&255}return Z},Y0.UTF16=function(H){return H.length*2};var a5={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};j2.MACSTRING=function(H,Z,W,K){let X=a5[K];if(X===void 0)return;let Y="";for(let R=0;R<W;R++){let O=H.getUint8(Z+R);if(O<=127)Y+=String.fromCharCode(O);else Y+=X[O&127]}return Y};var t5=typeof WeakMap==="function"&&new WeakMap,e5,QJ=function(H){if(!e5){e5={};for(let X in a5)e5[X]=new String(X)}let Z=e5[H];if(Z===void 0)return;if(t5){let X=t5.get(Z);if(X!==void 0)return X}let W=a5[H];if(W===void 0)return;let K={};for(let X=0;X<W.length;X++)K[W.charCodeAt(X)]=X+128;if(t5)t5.set(Z,K);return K};i.MACSTRING=function(H,Z){let W=QJ(Z);if(W===void 0)return;let K=[];for(let X=0;X<H.length;X++){let Y=H.charCodeAt(X);if(Y>=128){if(Y=W[Y],Y===void 0)return}K[X]=Y}return K},Y0.MACSTRING=function(H,Z){let W=i.MACSTRING(H,Z);if(W!==void 0)return W.length;else return 0};function Q6(H){return H>=-128&&H<=127}function HJ(H,Z,W){let K=0,X=H.length;while(Z<X&&K<64&&H[Z]===0)++Z,++K;return W.push(128|K-1),Z}function $J(H,Z,W){let K=0,X=H.length,Y=Z;while(Y<X&&K<64){let R=H[Y];if(!Q6(R))break;if(R===0&&Y+1<X&&H[Y+1]===0)break;++Y,++K}W.push(K-1);for(let R=Z;R<Y;++R)W.push(H[R]+256&255);return Y}function ZJ(H,Z,W){let K=0,X=H.length,Y=Z;while(Y<X&&K<64){let R=H[Y];if(R===0)break;if(Q6(R)&&Y+1<X&&Q6(H[Y+1]))break;++Y,++K}W.push(64|K-1);for(let R=Z;R<Y;++R){let O=H[R];W.push(O+65536>>8&255,O+256&255)}return Y}i.VARDELTAS=function(H){let Z=0,W=[];while(Z<H.length){let K=H[Z];if(K===0)Z=HJ(H,Z,W);else if(K>=-128&&K<=127)Z=$J(H,Z,W);else Z=ZJ(H,Z,W)}return W},i.INDEX=function(H){let Z=1,W=[Z],K=[];for(let O=0;O<H.length;O+=1){let A=i.OBJECT(H[O]);Array.prototype.push.apply(K,A),Z+=A.length,W.push(Z)}if(K.length===0)return[0,0];let X=[],Y=1+Math.floor(Math.log(Z)/Math.log(2))/8|0,R=[void 0,i.BYTE,i.USHORT,i.UINT24,i.ULONG][Y];for(let O=0;O<W.length;O+=1){let A=R(W[O]);Array.prototype.push.apply(X,A)}return Array.prototype.concat(i.Card16(H.length),i.OffSize(Y),X,K)},Y0.INDEX=function(H){return i.INDEX(H).length},i.DICT=function(H){let Z=[],W=Object.keys(H),K=W.length;for(let X=0;X<K;X+=1){let Y=parseInt(W[X],0),R=H[Y],O=i.OPERAND(R.value,R.type),A=i.OPERATOR(Y);for(let P=0;P<O.length;P++)Z.push(O[P]);for(let P=0;P<A.length;P++)Z.push(A[P])}return Z},Y0.DICT=function(H){return i.DICT(H).length},i.OPERATOR=function(H){if(H<1200)return[H];else return[12,H-1200]},i.OPERAND=function(H,Z){let W=[];if(Array.isArray(Z))for(let K=0;K<Z.length;K+=1){H0.argument(H.length===Z.length,"Not enough arguments given for type"+Z);let X=i.OPERAND(H[K],Z[K]);for(let Y=0;Y<X.length;Y++)W.push(X[Y])}else if(Z==="SID"){let K=i.NUMBER(H);for(let X=0;X<K.length;X++)W.push(K[X])}else if(Z==="offset"){let K=i.NUMBER32(H);for(let X=0;X<K.length;X++)W.push(K[X])}else if(Z==="number"){let K=i.NUMBER(H);for(let X=0;X<K.length;X++)W.push(K[X])}else if(Z==="real"){let K=i.REAL(H);for(let X=0;X<K.length;X++)W.push(K[X])}else throw Error("Unknown operand type "+Z);return W},i.OP=i.BYTE,Y0.OP=Y0.BYTE;var J4=typeof WeakMap==="function"&&new WeakMap;i.CHARSTRING=function(H){if(J4){let K=J4.get(H);if(K!==void 0)return K}let Z=[],W=H.length;for(let K=0;K<W;K+=1){let X=H[K],Y=i[X.type](X.value);for(let R=0;R<Y.length;R++)Z.push(Y[R])}if(J4)J4.set(H,Z);return Z},Y0.CHARSTRING=function(H){return i.CHARSTRING(H).length},i.OBJECT=function(H){let Z=i[H.type];return H0.argument(Z!==void 0,"No encoding function for type "+H.type),Z(H.value)},Y0.OBJECT=function(H){let Z=Y0[H.type];return H0.argument(Z!==void 0,"No sizeOf function for type "+H.type),Z(H.value)},i.TABLE=function(H){let Z=[],W=(H.fields||[]).length,K=[],X=[];for(let Y=0;Y<W;Y+=1){let R=H.fields[Y],O=i[R.type];H0.argument(O!==void 0,"No encoding function for field type "+R.type+" ("+R.name+")");let A=H[R.name];if(A===void 0)A=R.value;let P=O(A);if(R.type==="TABLE"){if(A.fields!==null)X.push(Z.length),K.push(P);Z.push(...[0,0])}else for(let D=0;D<P.length;D++)Z.push(P[D])}for(let Y=0;Y<K.length;Y+=1){let R=X[Y],O=Z.length;H0.argument(O<65536,"Table "+H.tableName+" too big."),Z[R]=O>>8,Z[R+1]=O&255;for(let A=0;A<K[Y].length;A++)Z.push(K[Y][A])}return Z},Y0.TABLE=function(H){let Z=0,W=(H.fields||[]).length;for(let K=0;K<W;K+=1){let X=H.fields[K],Y=Y0[X.type];H0.argument(Y!==void 0,"No sizeOf function for field type "+X.type+" ("+X.name+")");let R=H[X.name];if(R===void 0)R=X.value;if(Z+=Y(R),X.type==="TABLE")Z+=2}return Z},i.RECORD=i.TABLE,Y0.RECORD=Y0.TABLE,i.LITERAL=function(H){return H},Y0.LITERAL=function(H){return H.length};function f0(H,Z,W){if(Z&&Z.length)for(let K=0;K<Z.length;K+=1){let X=Z[K];this[X.name]=X.value}if(this.tableName=H,this.fields=Z,W){let K=Object.keys(W);for(let X=0;X<K.length;X+=1){let Y=K[X],R=W[Y];if(this[Y]!==void 0)this[Y]=R}}}f0.prototype.encode=function(){return i.TABLE(this)},f0.prototype.sizeOf=function(){return Y0.TABLE(this)};function v2(H,Z,W){if(W===void 0)W=Z.length;let K=Array(Z.length+1);K[0]={name:H+"Count",type:"USHORT",value:W};for(let X=0;X<Z.length;X++)K[X+1]={name:H+X,type:"USHORT",value:Z[X]};return K}function H6(H,Z,W){let K=Z.length,X=Array(K+1);X[0]={name:H+"Count",type:"USHORT",value:K};for(let Y=0;Y<K;Y++)X[Y+1]={name:H+Y,type:"TABLE",value:W(Z[Y],Y)};return X}function h2(H,Z,W){let K=Z.length,X=[];X[0]={name:H+"Count",type:"USHORT",value:K};for(let Y=0;Y<K;Y++)X=X.concat(W(Z[Y],Y));return X}function Q4(H){if(H.format===1)f0.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(v2("glyph",H.glyphs)));else if(H.format===2)f0.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(h2("rangeRecord",H.ranges,function(Z,W){return[{name:"startGlyphID"+W,type:"USHORT",value:Z.start},{name:"endGlyphID"+W,type:"USHORT",value:Z.end},{name:"startCoverageIndex"+W,type:"USHORT",value:Z.index}]})));else H0.assert(!1,"Coverage format must be 1 or 2.")}Q4.prototype=Object.create(f0.prototype),Q4.prototype.constructor=Q4;function H4(H){f0.call(this,"scriptListTable",h2("scriptRecord",H,function(Z,W){let K=Z.script,X=K.defaultLangSys;return H0.assert(!!X,"Unable to write GSUB: script "+Z.tag+" has no default language system."),[{name:"scriptTag"+W,type:"TAG",value:Z.tag},{name:"script"+W,type:"TABLE",value:new f0("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new f0("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:X.reqFeatureIndex}].concat(v2("featureIndex",X.featureIndexes)))}].concat(h2("langSys",K.langSysRecords,function(Y,R){let O=Y.langSys;return[{name:"langSysTag"+R,type:"TAG",value:Y.tag},{name:"langSys"+R,type:"TABLE",value:new f0("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:O.reqFeatureIndex}].concat(v2("featureIndex",O.featureIndexes)))}]})))}]}))}H4.prototype=Object.create(f0.prototype),H4.prototype.constructor=H4;function $4(H){f0.call(this,"featureListTable",h2("featureRecord",H,function(Z,W){let K=Z.feature;return[{name:"featureTag"+W,type:"TAG",value:Z.tag},{name:"feature"+W,type:"TABLE",value:new f0("featureTable",[{name:"featureParams",type:"USHORT",value:K.featureParams}].concat(v2("lookupListIndex",K.lookupListIndexes)))}]}))}$4.prototype=Object.create(f0.prototype),$4.prototype.constructor=$4;function Z4(H,Z){f0.call(this,"lookupListTable",H6("lookup",H,function(W){let K=Z[W.lookupType];return H0.assert(!!K,"Unable to write GSUB lookup type "+W.lookupType+" tables."),new f0("lookupTable",[{name:"lookupType",type:"USHORT",value:W.lookupType},{name:"lookupFlag",type:"USHORT",value:W.lookupFlag}].concat(H6("subtable",W.subtables,K)))}))}Z4.prototype=Object.create(f0.prototype),Z4.prototype.constructor=Z4;function W4(H){if(H.format===1)f0.call(this,"classDefTable",[{name:"classFormat",type:"USHORT",value:1},{name:"startGlyphID",type:"USHORT",value:H.startGlyph}].concat(v2("glyph",H.classes)));else if(H.format===2)f0.call(this,"classDefTable",[{name:"classFormat",type:"USHORT",value:2}].concat(h2("rangeRecord",H.ranges,function(Z,W){return[{name:"startGlyphID"+W,type:"USHORT",value:Z.start},{name:"endGlyphID"+W,type:"USHORT",value:Z.end},{name:"class"+W,type:"USHORT",value:Z.classId}]})));else H0.assert(!1,"Class format must be 1 or 2.")}W4.prototype=Object.create(f0.prototype),W4.prototype.constructor=W4;var u={Table:f0,Record:f0,Coverage:Q4,ClassDef:W4,ScriptList:H4,FeatureList:$4,LookupList:Z4,ushortList:v2,tableList:H6,recordList:h2};function n3(H,Z){return H.getUint8(Z)}function K4(H,Z){return H.getUint16(Z,!1)}function WJ(H,Z){return H.getInt16(Z,!1)}function s3(H,Z){return(H.getUint16(Z)<<8)+H.getUint8(Z+2)}function $6(H,Z){return H.getUint32(Z,!1)}function KJ(H,Z){return H.getInt32(Z,!1)}function o3(H,Z){let W=H.getInt16(Z,!1),K=H.getUint16(Z+2,!1);return W+K/65535}function UJ(H,Z){let W="";for(let K=Z;K<Z+4;K+=1)W+=String.fromCharCode(H.getInt8(K));return W}function XJ(H,Z,W){let K=0;for(let X=0;X<W;X+=1)K<<=8,K+=H.getUint8(Z+X);return K}function YJ(H,Z,W){let K=[];for(let X=Z;X<W;X+=1)K.push(H.getUint8(X));return K}function FJ(H){let Z="";for(let W=0;W<H.length;W+=1)Z+=String.fromCharCode(H[W]);return Z}var GJ={byte:1,uShort:2,f2dot14:2,short:2,uInt24:3,uLong:4,fixed:4,longDateTime:8,tag:4},l0={LONG_WORDS:32768,WORD_DELTA_COUNT_MASK:32767,SHARED_POINT_NUMBERS:32768,COUNT_MASK:4095,EMBEDDED_PEAK_TUPLE:32768,INTERMEDIATE_REGION:16384,PRIVATE_POINT_NUMBERS:8192,TUPLE_INDEX_MASK:4095,POINTS_ARE_WORDS:128,POINT_RUN_COUNT_MASK:127,DELTAS_ARE_ZERO:128,DELTAS_ARE_WORDS:64,DELTA_RUN_COUNT_MASK:63,INNER_INDEX_BIT_COUNT_MASK:15,MAP_ENTRY_SIZE_MASK:48};function v(H,Z){this.data=H,this.offset=Z,this.relativeOffset=0}v.prototype.parseByte=function(){let H=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,H},v.prototype.parseChar=function(){let H=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,H},v.prototype.parseCard8=v.prototype.parseByte,v.prototype.parseUShort=function(){let H=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,H},v.prototype.parseCard16=v.prototype.parseUShort,v.prototype.parseSID=v.prototype.parseUShort,v.prototype.parseOffset16=v.prototype.parseUShort,v.prototype.parseShort=function(){let H=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,H},v.prototype.parseF2Dot14=function(){let H=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,H},v.prototype.parseUInt24=function(){let H=s3(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=3,H},v.prototype.parseULong=function(){let H=$6(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,H},v.prototype.parseLong=function(){let H=KJ(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,H},v.prototype.parseOffset32=v.prototype.parseULong,v.prototype.parseFixed=function(){let H=o3(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,H},v.prototype.parseString=function(H){let Z=this.data,W=this.offset+this.relativeOffset,K="";this.relativeOffset+=H;for(let X=0;X<H;X++)K+=String.fromCharCode(Z.getUint8(W+X));return K},v.prototype.parseTag=function(){return this.parseString(4)},v.prototype.parseLongDateTime=function(){let H=$6(this.data,this.offset+this.relativeOffset+4);return H-=2082844800,this.relativeOffset+=8,H},v.prototype.parseVersion=function(H){let Z=K4(this.data,this.offset+this.relativeOffset),W=K4(this.data,this.offset+this.relativeOffset+2);if(this.relativeOffset+=4,H===void 0)H=4096;return Z+W/H/10},v.prototype.skip=function(H,Z){if(Z===void 0)Z=1;this.relativeOffset+=GJ[H]*Z},v.prototype.parseULongList=function(H){if(H===void 0)H=this.parseULong();let Z=Array(H),W=this.data,K=this.offset+this.relativeOffset;for(let X=0;X<H;X++)Z[X]=W.getUint32(K),K+=4;return this.relativeOffset+=H*4,Z},v.prototype.parseOffset16List=v.prototype.parseUShortList=function(H){if(H===void 0)H=this.parseUShort();let Z=Array(H),W=this.data,K=this.offset+this.relativeOffset;for(let X=0;X<H;X++)Z[X]=W.getUint16(K),K+=2;return this.relativeOffset+=H*2,Z},v.prototype.parseShortList=function(H){let Z=Array(H),W=this.data,K=this.offset+this.relativeOffset;for(let X=0;X<H;X++)Z[X]=W.getInt16(K),K+=2;return this.relativeOffset+=H*2,Z},v.prototype.parseByteList=function(H){let Z=Array(H),W=this.data,K=this.offset+this.relativeOffset;for(let X=0;X<H;X++)Z[X]=W.getUint8(K++);return this.relativeOffset+=H,Z},v.prototype.parseList=function(H,Z){if(!Z)Z=H,H=this.parseUShort();let W=Array(H);for(let K=0;K<H;K++)W[K]=Z.call(this);return W},v.prototype.parseList32=function(H,Z){if(!Z)Z=H,H=this.parseULong();let W=Array(H);for(let K=0;K<H;K++)W[K]=Z.call(this);return W},v.prototype.parseRecordList=function(H,Z){if(!Z)Z=H,H=this.parseUShort();let W=Array(H),K=Object.keys(Z);for(let X=0;X<H;X++){let Y={};for(let R=0;R<K.length;R++){let O=K[R],A=Z[O];Y[O]=A.call(this)}W[X]=Y}return W},v.prototype.parseRecordList32=function(H,Z){if(!Z)Z=H,H=this.parseULong();let W=Array(H),K=Object.keys(Z);for(let X=0;X<H;X++){let Y={};for(let R=0;R<K.length;R++){let O=K[R],A=Z[O];Y[O]=A.call(this)}W[X]=Y}return W},v.prototype.parseTupleRecords=function(H,Z){let W=[];for(let K=0;K<H;K++){let X=[];for(let Y=0;Y<Z;Y++)X.push(this.parseF2Dot14());W.push(X)}return W},v.prototype.parseStruct=function(H){if(typeof H==="function")return H.call(this);else{let Z=Object.keys(H),W={};for(let K=0;K<Z.length;K++){let X=Z[K],Y=H[X];W[X]=Y.call(this)}return W}},v.prototype.parseValueRecord=function(H){if(H===void 0)H=this.parseUShort();if(H===0)return;let Z={};if(H&1)Z.xPlacement=this.parseShort();if(H&2)Z.yPlacement=this.parseShort();if(H&4)Z.xAdvance=this.parseShort();if(H&8)Z.yAdvance=this.parseShort();if(H&16)Z.xPlaDevice=void 0,this.parseShort();if(H&32)Z.yPlaDevice=void 0,this.parseShort();if(H&64)Z.xAdvDevice=void 0,this.parseShort();if(H&128)Z.yAdvDevice=void 0,this.parseShort();return Z},v.prototype.parseValueRecordList=function(){let H=this.parseUShort(),Z=this.parseUShort(),W=Array(Z);for(let K=0;K<Z;K++)W[K]=this.parseValueRecord(H);return W},v.prototype.parsePointer=function(H){let Z=this.parseOffset16();if(Z>0)return new v(this.data,this.offset+Z).parseStruct(H);return},v.prototype.parsePointer32=function(H){let Z=this.parseOffset32();if(Z>0)return new v(this.data,this.offset+Z).parseStruct(H);return},v.prototype.parseListOfLists=function(H){let Z=this.parseOffset16List(),W=Z.length,K=this.relativeOffset,X=Array(W);for(let Y=0;Y<W;Y++){let R=Z[Y];if(R===0){X[Y]=void 0;continue}if(this.relativeOffset=R,H){let O=this.parseOffset16List(),A=Array(O.length);for(let P=0;P<O.length;P++)this.relativeOffset=R+O[P],A[P]=H.call(this);X[Y]=A}else X[Y]=this.parseUShortList()}return this.relativeOffset=K,X},v.prototype.parseCoverage=function(){let H=this.offset+this.relativeOffset,Z=this.parseUShort(),W=this.parseUShort();if(Z===1)return{format:1,glyphs:this.parseUShortList(W)};else if(Z===2){let K=Array(W);for(let X=0;X<W;X++)K[X]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:K}}throw Error("0x"+H.toString(16)+": Coverage format must be 1 or 2.")},v.prototype.parseClassDef=function(){let H=this.offset+this.relativeOffset,Z=this.parseUShort();if(Z===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};else if(Z===2)return{format:2,ranges:this.parseRecordList({start:v.uShort,end:v.uShort,classId:v.uShort})};return console.warn(`0x${H.toString(16)}: This font file uses an invalid ClassDef format of ${Z}. It might be corrupted and should be reacquired if it doesn't display as intended.`),{format:Z}},v.list=function(H,Z){return function(){return this.parseList(H,Z)}},v.list32=function(H,Z){return function(){return this.parseList32(H,Z)}},v.recordList=function(H,Z){return function(){return this.parseRecordList(H,Z)}},v.recordList32=function(H,Z){return function(){return this.parseRecordList32(H,Z)}},v.pointer=function(H){return function(){return this.parsePointer(H)}},v.pointer32=function(H){return function(){return this.parsePointer32(H)}},v.tag=v.prototype.parseTag,v.byte=v.prototype.parseByte,v.uShort=v.offset16=v.prototype.parseUShort,v.uShortList=v.prototype.parseUShortList,v.uInt24=v.prototype.parseUInt24,v.uLong=v.offset32=v.prototype.parseULong,v.uLongList=v.prototype.parseULongList,v.fixed=v.prototype.parseFixed,v.f2Dot14=v.prototype.parseF2Dot14,v.struct=v.prototype.parseStruct,v.coverage=v.prototype.parseCoverage,v.classDef=v.prototype.parseClassDef;var r3={reserved:v.uShort,reqFeatureIndex:v.uShort,featureIndexes:v.uShortList};v.prototype.parseScriptList=function(){return this.parsePointer(v.recordList({tag:v.tag,script:v.pointer({defaultLangSys:v.pointer(r3),langSysRecords:v.recordList({tag:v.tag,langSys:v.pointer(r3)})})}))||[]},v.prototype.parseFeatureList=function(){return this.parsePointer(v.recordList({tag:v.tag,feature:v.pointer({featureParams:v.offset16,lookupListIndexes:v.uShortList})}))||[]},v.prototype.parseLookupList=function(H){return this.parsePointer(v.list(v.pointer(function(){let Z=this.parseUShort();H0.argument(1<=Z&&Z<=9,"GPOS/GSUB lookup type "+Z+" unknown.");let W=this.parseUShort(),K=W&16;return{lookupType:Z,lookupFlag:W,subtables:this.parseList(v.pointer(H[Z])),markFilteringSet:K?this.parseUShort():void 0}})))||[]},v.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){let H=this.parseUShort(),Z=this.parseUShort();return H0.argument(H===1&&Z<1,"GPOS/GSUB feature variations table unknown."),this.parseRecordList32({conditionSetOffset:v.offset32,featureTableSubstitutionOffset:v.offset32})})||[]},v.prototype.parseVariationStore=function(){let H=this.relativeOffset,Z=this.parseUShort(),W={itemVariationStore:this.parseItemVariationStore()};return this.relativeOffset=H+Z+2,W},v.prototype.parseItemVariationStore=function(){let H=this.relativeOffset,Z={format:this.parseUShort(),variationRegions:[],itemVariationSubtables:[]},W=this.parseOffset32(),K=this.parseUShort(),X=this.parseULongList(K);this.relativeOffset=H+W,Z.variationRegions=this.parseVariationRegionList();for(let Y=0;Y<K;Y++){let R=X[Y];this.relativeOffset=H+R,Z.itemVariationSubtables.push(this.parseItemVariationSubtable())}return Z},v.prototype.parseVariationRegionList=function(){let H=this.parseUShort(),Z=this.parseUShort();return this.parseRecordList(Z,{regionAxes:v.recordList(H,{startCoord:v.f2Dot14,peakCoord:v.f2Dot14,endCoord:v.f2Dot14})})},v.prototype.parseItemVariationSubtable=function(){let H=this.parseUShort(),Z=this.parseUShort(),W=this.parseUShortList(),K=W.length;return{regionIndexes:W,deltaSets:H&&K?this.parseDeltaSets(H,Z,K):[]}},v.prototype.parseDeltaSetIndexMap=function(){let H=this.parseByte(),Z=this.parseByte(),W=[],K=0;switch(H){case 0:K=this.parseUShort();break;case 1:K=this.parseULong();break;default:console.error(`unsupported DeltaSetIndexMap format ${H}`)}if(!K)return{format:H,entryFormat:Z};let X=(Z&l0.INNER_INDEX_BIT_COUNT_MASK)+1,Y=((Z&l0.MAP_ENTRY_SIZE_MASK)>>4)+1;for(let R=0;R<K;R++){let O;if(Y===1)O=this.parseByte();else if(Y===2)O=this.parseUShort();else if(Y===3)O=this.parseUInt24();else if(Y===4)O=this.parseULong();else throw Error(`Invalid entry size of ${Y}`);let A=O>>X,P=O&(1<<X)-1;W.push({outerIndex:A,innerIndex:P})}return{format:H,entryFormat:Z,map:W}},v.prototype.parseDeltaSets=function(H,Z,W){let K=Array.from({length:H},()=>[]),X=Z&l0.LONG_WORDS,Y=Z&l0.WORD_DELTA_COUNT_MASK;if(Y>W)throw Error("wordCount must be less than or equal to regionIndexCount");let R=(X?this.parseLong:this.parseShort).bind(this),O=(X?this.parseShort:this.parseChar).bind(this);for(let A=0;A<H;A++)for(let P=0;P<W;P++)if(P<Y)K[A].push(R());else K[A].push(O());return K},v.prototype.parseTupleVariationStoreList=function(H,Z,W){let K=this.parseUShort(),Y=this.parseUShort()&1,R=this.parseOffset32(),O=(Y?this.parseULong:this.parseUShort).bind(this),A={},P=O();if(!Y)P*=2;let D;for(let C=0;C<K;C++){if(D=O(),!Y)D*=2;let z=D-P;A[C]=z?this.parseTupleVariationStore(R+P,H,Z,W,C):void 0,P=D}return A},v.prototype.parseTupleVariationStore=function(H,Z,W,K,X){let Y=this.relativeOffset;if(this.relativeOffset=H,W==="cvar")this.relativeOffset+=4;let R=this.parseUShort(),O=!!(R&l0.SHARED_POINT_NUMBERS),A=R&l0.COUNT_MASK,P=this.parseOffset16(),D=[],C=[];for(let S=0;S<A;S++){let j=this.parseTupleVariationHeader(Z,W);D.push(j)}if(this.relativeOffset!==H+P)console.warn(`Unexpected offset after parsing tuple variation headers! Expected ${H+P}, actually ${this.relativeOffset}`),this.relativeOffset=H+P;if(O)C=this.parsePackedPointNumbers();let z=this.relativeOffset;for(let S=0;S<A;S++){let j=D[S];if(j.privatePoints=[],this.relativeOffset=z,W==="cvar"&&!j.peakTuple)console.warn("An embedded peak tuple is required in TupleVariationHeaders for the cvar table.");if(j.flags.privatePointNumbers)j.privatePoints=this.parsePackedPointNumbers();delete j.flags;let g=this.offset,$0=this.relativeOffset,J0=(U0)=>{let O0=void 0,M0=void 0,_0=()=>{let z0=0;if(W==="gvar"){if(z0=j.privatePoints.length||C.length,!z0){let y0=K.get(X);y0.path,z0=y0.points.length,z0+=4}}else if(W==="cvar")z0=K.length;if(this.offset=g,this.relativeOffset=$0,O0=this.parsePackedDeltas(z0),W==="gvar")M0=this.parsePackedDeltas(z0)};return{configurable:!0,get:function(){if(O0===void 0)_0();return U0==="deltasY"?M0:O0},set:function(z0){if(O0===void 0)_0();if(U0==="deltasY")M0=z0;else O0=z0}}};if(Object.defineProperty(j,"deltas",J0.call(this,"deltas")),W==="gvar")Object.defineProperty(j,"deltasY",J0.call(this,"deltasY"));z+=j.variationDataSize,delete j.variationDataSize}this.relativeOffset=Y;let k={headers:D};return k.sharedPoints=C,k},v.prototype.parseTupleVariationHeader=function(H,Z){let W=this.parseUShort(),K=this.parseUShort(),X=!!(K&l0.EMBEDDED_PEAK_TUPLE),Y=!!(K&l0.INTERMEDIATE_REGION),R=!!(K&l0.PRIVATE_POINT_NUMBERS),O=X?void 0:K&l0.TUPLE_INDEX_MASK,A=X?this.parseTupleRecords(1,H)[0]:void 0,P=Y?this.parseTupleRecords(1,H)[0]:void 0,D=Y?this.parseTupleRecords(1,H)[0]:void 0,C={variationDataSize:W,peakTuple:A,intermediateStartTuple:P,intermediateEndTuple:D,flags:{embeddedPeakTuple:X,intermediateRegion:Y,privatePointNumbers:R}};if(Z==="gvar")C.sharedTupleRecordsIndex=O;return C},v.prototype.parsePackedPointNumbers=function(){let H=this.parseByte(),Z=[],W=H;if(H>=128){let X=this.parseByte();W=(H&l0.POINT_RUN_COUNT_MASK)<<8|X}let K=0;while(Z.length<W){let X=this.parseByte(),Y=!!(X&l0.POINTS_ARE_WORDS),R=(X&l0.POINT_RUN_COUNT_MASK)+1;for(let O=0;O<R&&Z.length<W;O++){let A;if(Y)A=this.parseUShort();else A=this.parseByte();K=K+A,Z.push(K)}}return Z},v.prototype.parsePackedDeltas=function(H){let Z=[];while(Z.length<H){let W=this.parseByte(),K=!!(W&l0.DELTAS_ARE_ZERO),X=!!(W&l0.DELTAS_ARE_WORDS),Y=(W&l0.DELTA_RUN_COUNT_MASK)+1;for(let R=0;R<Y&&Z.length<H;R++)if(K)Z.push(0);else if(X)Z.push(this.parseShort());else Z.push(this.parseChar())}return Z};var n={getByte:n3,getCard8:n3,getUShort:K4,getCard16:K4,getShort:WJ,getUInt24:s3,getULong:$6,getFixed:o3,getTag:UJ,getOffset:XJ,getBytes:YJ,bytesToString:FJ,Parser:v},U4=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],a3={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},RJ={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},t3={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function EJ(H,Z,W){switch(H){case 0:if(Z===65535)return"und";else if(W)return W[Z];break;case 1:return a3[Z];case 3:return t3[Z]}return}var Z6="utf-16",OJ={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},qJ={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function W6(H,Z,W){switch(H){case 0:return Z6;case 1:return qJ[W]||OJ[Z];case 3:if(Z===1||Z===10)return Z6;break}return}var e3={0:"unicode",1:"macintosh",2:"reserved",3:"windows"};function AJ(H){return e3[H]}function NJ(H,Z,W){let K={},X=new n.Parser(H,Z),Y=X.parseUShort(),R=X.parseUShort(),O=X.offset+X.parseUShort();for(let A=0;A<R;A++){let P=X.parseUShort(),D=X.parseUShort(),C=X.parseUShort(),z=X.parseUShort(),k=U4[z]||z,S=X.parseUShort(),j=X.parseUShort(),g=EJ(P,C,W),$0=W6(P,D,C),J0=AJ(P);if($0!==void 0&&g!==void 0&&J0!==void 0){let U0;if($0===Z6)U0=j2.UTF16(H,O+j,S);else U0=j2.MACSTRING(H,O+j,S,$0);if(U0){let O0=K[J0];if(O0===void 0)O0=K[J0]={};let M0=O0[k];if(M0===void 0)M0=O0[k]={};M0[g]=U0}}}if(Y===1)X.parseUShort();return K}function X4(H){let Z={};for(let W in H)Z[H[W]]=parseInt(W);return Z}function J8(H,Z,W,K,X,Y){return new u.Record("NameRecord",[{name:"platformID",type:"USHORT",value:H},{name:"encodingID",type:"USHORT",value:Z},{name:"languageID",type:"USHORT",value:W},{name:"nameID",type:"USHORT",value:K},{name:"length",type:"USHORT",value:X},{name:"offset",type:"USHORT",value:Y}])}function DJ(H,Z){let W=H.length,K=Z.length-W+1;J:for(let X=0;X<K;X++)for(;X<K;X++){for(let Y=0;Y<W;Y++)if(Z[X+Y]!==H[Y])continue J;return X}return-1}function Q8(H,Z){let W=DJ(H,Z);if(W<0){W=Z.length;let K=0,X=H.length;for(;K<X;++K)Z.push(H[K])}return W}function PJ(H,Z){let W=X4(e3),K=X4(a3),X=X4(t3),Y=[],R=[];for(let A in H){let P,D=[],C={},z=X4(U4),k=W[A];for(let S in H[A]){let j=z[S];if(j===void 0)j=S;if(P=parseInt(j),isNaN(P))throw Error('Name table entry "'+S+'" does not exist, see nameTableNames for complete list.');C[P]=H[A][S],D.push(P)}for(let S=0;S<D.length;S++){P=D[S];let j=C[P];for(let g in j){let $0=j[g];if(k===1||k===0){let J0=K[g],U0=RJ[J0],O0=W6(k,U0,J0),M0=i.MACSTRING($0,O0);if(k===0){if(J0=Z.indexOf(g),J0<0)J0=Z.length,Z.push(g);U0=4,M0=i.UTF16($0)}if(M0!==void 0){let _0=Q8(M0,R);Y.push(J8(k,U0,J0,P,M0.length,_0))}}if(k===3){let J0=X[g];if(J0!==void 0){let U0=i.UTF16($0),O0=Q8(U0,R);Y.push(J8(3,1,J0,P,U0.length,O0))}}}}}Y.sort(function(A,P){return A.platformID-P.platformID||A.encodingID-P.encodingID||A.languageID-P.languageID||A.nameID-P.nameID});let O=new u.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:Y.length},{name:"stringOffset",type:"USHORT",value:6+Y.length*12}]);for(let A=0;A<Y.length;A++)O.fields.push({name:"record_"+A,type:"RECORD",value:Y[A]});return O.fields.push({name:"strings",type:"LITERAL",value:R}),O}function Y4(H,Z,W=[]){if(Z<256&&Z in U4){if(W.length&&!W.includes(parseInt(Z)))return;Z=U4[Z]}for(let K in H)for(let X in H[K])if(X===Z||parseInt(X)===Z)return H[K][X];return}var H8={parse:NJ,make:PJ,getNameByID:Y4};function LJ(H,Z,W,K){H.length=Z.parseUShort(),H.language=Z.parseUShort()-1;let X=Z.parseByteList(H.length),Y=Object.assign({},X),R=W6(W,K,H.language),O=a5[R];for(let A=0;A<O.length;A++)Y[O.charCodeAt(A)]=X[128+A];H.glyphIndexMap=Y}function MJ(H,Z,W){Z.parseUShort(),H.length=Z.parseULong(),H.language=Z.parseULong();let K;H.groupCount=K=Z.parseULong(),H.glyphIndexMap={};for(let X=0;X<K;X+=1){let Y=Z.parseULong(),R=Z.parseULong(),O=Z.parseULong();for(let A=Y;A<=R;A+=1)if(H.glyphIndexMap[A]=O,W===12)O++}}function BJ(H,Z,W,K,X){H.length=Z.parseUShort(),H.language=Z.parseUShort();let Y;H.segCount=Y=Z.parseUShort()>>1,Z.skip("uShort",3),H.glyphIndexMap={};let R=new n.Parser(W,K+X+14),O=new n.Parser(W,K+X+16+Y*2),A=new n.Parser(W,K+X+16+Y*4),P=new n.Parser(W,K+X+16+Y*6),D=K+X+16+Y*8;for(let C=0;C<Y-1;C+=1){let z,k=R.parseUShort(),S=O.parseUShort(),j=A.parseShort(),g=P.parseUShort();for(let $0=S;$0<=k;$0+=1){if(g!==0){if(D=P.offset+P.relativeOffset-2,D+=g,D+=($0-S)*2,z=n.getUShort(W,D),z!==0)z=z+j&65535}else z=$0+j&65535;H.glyphIndexMap[$0]=z}}}function VJ(H,Z){let W={};Z.skip("uLong");let K=Z.parseULong();for(let X=0;X<K;X+=1){let Y=Z.parseUInt24(),R={varSelector:Y},O=Z.parseOffset32(),A=Z.parseOffset32(),P=Z.relativeOffset;if(O)Z.relativeOffset=O,R.defaultUVS=Z.parseStruct({ranges:function(){return Z.parseRecordList32({startUnicodeValue:Z.parseUInt24,additionalCount:Z.parseByte})}});if(A)Z.relativeOffset=A,R.nonDefaultUVS=Z.parseStruct({uvsMappings:function(){let D={},C=Z.parseRecordList32({unicodeValue:Z.parseUInt24,glyphID:Z.parseUShort});for(let z=0;z<C.length;z+=1)D[C[z].unicodeValue]=C[z];return D}});W[Y]=R,Z.relativeOffset=P}H.varSelectorList=W}function _J(H,Z){let W={};W.version=n.getUShort(H,Z),H0.argument(W.version===0,"cmap table version should be 0."),W.numTables=n.getUShort(H,Z+2);let K=null,X=-1,Y=-1,R=null,O=null,A=[0,1,2,3,4,6],P=[0,1,10];for(let C=W.numTables-1;C>=0;C-=1)if(R=n.getUShort(H,Z+4+C*8),O=n.getUShort(H,Z+4+C*8+2),R===3&&P.includes(O)||R===0&&A.includes(O)||R===1&&O===0){if(Y>0)continue;if(Y=n.getULong(H,Z+4+C*8+4),K)break}else if(R===0&&O===5){if(X=n.getULong(H,Z+4+C*8+4),K=new n.Parser(H,Z+X),K.parseUShort()!==14)X=-1,K=null;else if(Y>0)break}if(Y===-1)throw Error("No valid cmap sub-tables found.");let D=new n.Parser(H,Z+Y);if(W.format=D.parseUShort(),W.format===0)LJ(W,D,R,O);else if(W.format===12||W.format===13)MJ(W,D,W.format);else if(W.format===4)BJ(W,D,H,Z,Y);else throw Error("Only format 0 (platformId 1, encodingId 0), 4, 12 and 14 cmap tables are supported (found format "+W.format+", platformId "+R+", encodingId "+O+").");if(K)VJ(W,K);return W}function zJ(H,Z,W){H.segments.push({end:Z,start:Z,delta:-(Z-W),offset:0,glyphIndex:W})}function wJ(H){H.segments.push({end:65535,start:65535,delta:1,offset:0})}function CJ(H){if(H.length===0)return H;let Z=[H[0]];for(let W=1;W<H.length;W++){let K=Z[Z.length-1],X=H[W];if(K.end+1===X.start&&K.delta===X.delta&&X.end!==65535)K.end=X.end;else Z.push(X)}return Z}function IJ(H){let Z=!0,W;for(W=H.length-1;W>0;W-=1)if(H.get(W).unicode>65535){Z=!1;break}let K=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:Z?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:Z?12:20}];if(!Z)K.push(...[{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}]);K.push(...[{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);let X=new u.Table("cmap",K);X.segments=[];for(W=0;W<H.length;W+=1){let k=H.get(W);for(let S=0;S<k.unicodes.length;S+=1)zJ(X,k.unicodes[S],W)}X.segments.sort(function(k,S){return k.start-S.start}),X.segments=CJ(X.segments),wJ(X);let Y=X.segments.length,R=0,O=[],A=[],P=[],D=[],C=[],z=[];for(W=0;W<Y;W+=1){let k=X.segments[W];if(k.end<=65535&&k.start<=65535){if(O.push({name:"end_"+W,type:"USHORT",value:k.end}),A.push({name:"start_"+W,type:"USHORT",value:k.start}),P.push({name:"idDelta_"+W,type:"SHORT",value:k.delta}),D.push({name:"idRangeOffset_"+W,type:"USHORT",value:k.offset}),k.glyphId!==void 0)C.push({name:"glyph_"+W,type:"USHORT",value:k.glyphId})}else R+=1;if(!Z&&k.glyphIndex!==void 0)z.push({name:"cmap12Start_"+W,type:"ULONG",value:k.start}),z.push({name:"cmap12End_"+W,type:"ULONG",value:k.end}),z.push({name:"cmap12Glyph_"+W,type:"ULONG",value:k.glyphIndex})}X.segCountX2=(Y-R)*2,X.searchRange=Math.pow(2,Math.floor(Math.log(Y-R)/Math.log(2)))*2,X.entrySelector=Math.log(X.searchRange/2)/Math.log(2),X.rangeShift=X.segCountX2-X.searchRange;for(let k=0;k<O.length;k++)X.fields.push(O[k]);X.fields.push({name:"reservedPad",type:"USHORT",value:0});for(let k=0;k<A.length;k++)X.fields.push(A[k]);for(let k=0;k<P.length;k++)X.fields.push(P[k]);for(let k=0;k<D.length;k++)X.fields.push(D[k]);for(let k=0;k<C.length;k++)X.fields.push(C[k]);if(X.cmap4Length=14+O.length*2+2+A.length*2+P.length*2+D.length*2+C.length*2,!Z){let k=16+z.length*4;X.cmap12Offset=20+X.cmap4Length,X.fields.push(...[{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:k},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:z.length/3}]);for(let S=0;S<z.length;S++)X.fields.push(z[S])}return X}var $8={parse:_J,make:IJ},F4=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],TJ=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],SJ=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],kJ=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"],K6=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],jJ=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],D2=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function Z8(H){this.font=H}Z8.prototype.charToGlyphIndex=function(H){let Z=H.codePointAt(0),W=this.font.glyphs;if(W)for(let K=0;K<W.length;K+=1){let X=W.get(K);for(let Y=0;Y<X.unicodes.length;Y+=1)if(X.unicodes[Y]===Z)return K}return null};function W8(H){this.cmap=H}W8.prototype.charToGlyphIndex=function(H){return this.cmap.glyphIndexMap[H.codePointAt(0)]||0};function K8(H,Z){this.encoding=H,this.charset=Z}K8.prototype.charToGlyphIndex=function(H){let Z=H.codePointAt(0),W=this.encoding[Z];return this.charset.indexOf(W)};function U6(H){switch(H.version){case 1:this.names=D2.slice();break;case 2:this.names=Array(H.numberOfGlyphs);for(let Z=0;Z<H.numberOfGlyphs;Z++)if(H.glyphNameIndex[Z]<D2.length)this.names[Z]=D2[H.glyphNameIndex[Z]];else this.names[Z]=H.names[H.glyphNameIndex[Z]-D2.length];break;case 2.5:this.names=Array(H.numberOfGlyphs);for(let Z=0;Z<H.numberOfGlyphs;Z++)this.names[Z]=D2[Z+H.glyphNameIndex[Z]];break;case 3:this.names=[];break;default:this.names=[];break}}U6.prototype.nameToGlyphIndex=function(H){return this.names.indexOf(H)},U6.prototype.glyphIndexToName=function(H){return this.names[H]};function vJ(H){let Z,W=H.tables.cmap.glyphIndexMap,K=Object.keys(W);for(let X=0;X<K.length;X+=1){let Y=K[X],R=W[Y];Z=H.glyphs.get(R),Z.addUnicode(parseInt(Y))}for(let X=0;X<H.glyphs.length;X+=1)if(Z=H.glyphs.get(X),H.cffEncoding)Z.name=H.cffEncoding.charset[X];else if(H.glyphNames.names)Z.name=H.glyphNames.glyphIndexToName(X)}function hJ(H){H._IndexToUnicodeMap={};let Z=H.tables.cmap.glyphIndexMap,W=Object.keys(Z);for(let K=0;K<W.length;K+=1){let X=W[K],Y=Z[X];if(H._IndexToUnicodeMap[Y]===void 0)H._IndexToUnicodeMap[Y]={unicodes:[parseInt(X)]};else H._IndexToUnicodeMap[Y].unicodes.push(parseInt(X))}}function fJ(H,Z){if(Z.lowMemory)hJ(H);else vJ(H)}function bJ(H,Z,W,K,X){H.beginPath(),H.moveTo(Z,W),H.lineTo(K,X),H.stroke()}var P2={line:bJ};function yJ(H,Z){let W=new v(H,Z),K=W.parseShort();if(K!==0)console.warn("Only CPALv0 is currently fully supported.");let X=W.parseShort(),Y=W.parseShort(),R=W.parseShort(),O=W.parseOffset32(),A=W.parseUShortList(Y);W.relativeOffset=O;let P=W.parseULongList(R);return W.relativeOffset=O,{version:K,numPaletteEntries:X,colorRecords:P,colorRecordIndices:A}}function xJ({version:H=0,numPaletteEntries:Z=0,colorRecords:W=[],colorRecordIndices:K=[0]}){if(H0.argument(H===0,"Only CPALv0 are supported."),H0.argument(W.length,"No colorRecords given."),H0.argument(K.length,"No colorRecordIndices given."),K.length>1)H0.argument(Z,"Can't infer numPaletteEntries on multiple colorRecordIndices");return new u.Table("CPAL",[{name:"version",type:"USHORT",value:H},{name:"numPaletteEntries",type:"USHORT",value:Z||W.length},{name:"numPalettes",type:"USHORT",value:K.length},{name:"numColorRecords",type:"USHORT",value:W.length},{name:"colorRecordsArrayOffset",type:"ULONG",value:12+2*K.length},...K.map((X,Y)=>({name:"colorRecordIndices_"+Y,type:"USHORT",value:X})),...W.map((X,Y)=>({name:"colorRecords_"+Y,type:"ULONG",value:X}))])}function U8(H){var Z=(H&4278190080)>>24,W=(H&16711680)>>16,K=(H&65280)>>8,X=H&255;return Z=Z+256&255,W=W+256&255,K=K+256&255,X=(X+256&255)/255,{b:Z,g:W,r:K,a:X}}function X6(H,Z,W=0,K="hexa"){if(Z==65535)return"currentColor";let X=H&&H.tables&&H.tables.cpal;if(!X)return"currentColor";if(W>X.colorRecordIndices.length-1)throw Error(`Palette index out of range (colorRecordIndices.length: ${X.colorRecordIndices.length}, index: ${Z})`);if(Z>X.numPaletteEntries)throw Error(`Color index out of range (numPaletteEntries: ${X.numPaletteEntries}, index: ${Z})`);let Y=X.colorRecordIndices[W]+Z;if(Y>X.colorRecords)throw Error(`Color index out of range (colorRecords.length: ${X.colorRecords.length}, lookupIndex: ${Y})`);let R=U8(X.colorRecords[Y]);if(K==="bgra")return R;return f2(R,K)}function T1(H){return("0"+parseInt(H).toString(16)).slice(-2)}function gJ(H){let Z=H.r/255,W=H.g/255,K=H.b/255,X=Math.max(Z,W,K),Y=Math.min(Z,W,K),R,O,A=(X+Y)/2;if(X===Y)R=O=0;else{let P=X-Y;switch(O=A>0.5?P/(2-X-Y):P/(X+Y),X){case Z:R=(W-K)/P+(W<K?6:0);break;case W:R=(K-Z)/P+2;break;case K:R=(Z-W)/P+4;break}R/=6}return{h:R*360,s:O*100,l:A*100}}function mJ(H){let{h:Z,s:W,l:K,a:X}=H;Z=Z%360,W/=100,K/=100;let Y=(1-Math.abs(2*K-1))*W,R=Y*(1-Math.abs(Z/60%2-1)),O=K-Y/2,A=0,P=0,D=0;if(0<=Z&&Z<60)A=Y,P=R,D=0;else if(60<=Z&&Z<120)A=R,P=Y,D=0;else if(120<=Z&&Z<180)A=0,P=Y,D=R;else if(180<=Z&&Z<240)A=0,P=R,D=Y;else if(240<=Z&&Z<300)A=R,P=0,D=Y;else if(300<=Z&&Z<=360)A=Y,P=0,D=R;return{r:Math.round((A+O)*255),g:Math.round((P+O)*255),b:Math.round((D+O)*255),a:X}}function X8(H){return parseInt(`0x${T1(H.b)}${T1(H.g)}${T1(H.r)}${T1(H.a*255)}`,16)}function G4(H,Z="hexa"){let W=Z=="raw"||Z=="cpal",K=Number.isInteger(H),X=!0;if(K&&W||H==="currentColor")return H;else if(typeof H==="object"){if(Z=="bgra")return H;if(W)return X8(H)}else if(!K&&/^#([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/i.test(H.trim())){switch(H=H.trim().substring(1),H.length){case 3:H={r:parseInt(H[0].repeat(2),16),g:parseInt(H[1].repeat(2),16),b:parseInt(H[2].repeat(2),16),a:1};break;case 4:H={r:parseInt(H[0].repeat(2),16),g:parseInt(H[1].repeat(2),16),b:parseInt(H[2].repeat(2),16),a:parseInt(H[3].repeat(2),16)/255};break;case 6:H={r:parseInt(H[0]+H[1],16),g:parseInt(H[2]+H[3],16),b:parseInt(H[4]+H[5],16),a:1};break;case 8:H={r:parseInt(H[0]+H[1],16),g:parseInt(H[2]+H[3],16),b:parseInt(H[4]+H[5],16),a:parseInt(H[6]+H[7],16)/255};break}if(Z=="bgra")return H}else if(typeof document<"u"&&/^[a-z]+$/i.test(H)){let Y=document.createElement("canvas").getContext("2d");Y.fillStyle=H;let R=f2(Y.fillStyle,"hexa");if(R==="#000000ff"&&H.toLowerCase()!=="black")X=!1;else H=R}else{H=H.trim();let Y=/rgba?\(\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(Y.test(H)){let R=H.match(Y).filter((O)=>typeof O<"u");H={r:Math.round(parseFloat(R[1])/(R[2]?0.39215686274509803:1)),g:Math.round(parseFloat(R[3])/(R[4]?0.39215686274509803:1)),b:Math.round(parseFloat(R[5])/(R[6]?0.39215686274509803:1)),a:!R[7]?1:parseFloat(R[7])/(R[8]?100:1)}}else{let R=/hsla?\(\s*(?:(\d*\.\d+|\d+)(deg|turn|))\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(R.test(H)){let O=H.match(R).filter((A)=>typeof A<"u");H=mJ({h:parseFloat(O[1])*(O[2]==="turn"?360:1),s:parseFloat(O[3]),l:parseFloat(O[4]),a:!O[5]?1:parseFloat(O[5])/(O[6]?100:1)})}else X=!1}}if(!X)throw Error(`Invalid color format: ${H}`);return f2(H,Z)}function f2(H,Z="hexa"){if(H==="currentColor")return H;if(Number.isInteger(H)){if(Z=="raw"||Z=="cpal")return H;H=U8(H)}else if(typeof H!=="object")H=G4(H,"bgra");let W=["hsl","hsla"].includes(Z)?gJ(H):null;switch(Z){case"rgba":return`rgba(${H.r}, ${H.g}, ${H.b}, ${parseFloat(H.a.toFixed(3))})`;case"rgb":return`rgb(${H.r}, ${H.g}, ${H.b})`;case"hex":case"hex6":case"hex-6":return`#${T1(H.r)}${T1(H.g)}${T1(H.b)}`;case"hexa":case"hex8":case"hex-8":return`#${T1(H.r)}${T1(H.g)}${T1(H.b)}${T1(H.a*255)}`;case"hsl":return`hsl(${W.h.toFixed(2)}, ${W.s.toFixed(2)}%, ${W.l.toFixed(2)}%)`;case"hsla":return`hsla(${W.h.toFixed(2)}, ${W.s.toFixed(2)}%, ${W.l.toFixed(2)}%, ${parseFloat(H.a.toFixed(3))})`;case"bgra":return H;case"raw":case"cpal":return X8(H);default:throw Error("Unknown color format: "+Z)}}var Y8={parse:yJ,make:xJ,getPaletteColor:X6,parseColor:G4,formatColor:f2};function pJ(H,Z){let W=Z||new m1;return{configurable:!0,get:function(){if(typeof W==="function")W=W();return W},set:function(K){W=K}}}function c0(H){this.bindConstructorValues(H)}c0.prototype.bindConstructorValues=function(H){if(this.index=H.index||0,H.name===".notdef")H.unicode=void 0;else if(H.name===".null")H.unicode=0;if(H.unicode===0&&H.name!==".null")throw Error('The unicode value "0" is reserved for the glyph name ".null" and cannot be used by any other glyph.');if(this.name=H.name||null,this.unicode=H.unicode,this.unicodes=H.unicodes||(H.unicode!==void 0?[H.unicode]:[]),"xMin"in H)this.xMin=H.xMin;if("yMin"in H)this.yMin=H.yMin;if("xMax"in H)this.xMax=H.xMax;if("yMax"in H)this.yMax=H.yMax;if("advanceWidth"in H)this.advanceWidth=H.advanceWidth;if("leftSideBearing"in H)this.leftSideBearing=H.leftSideBearing;if("points"in H)this.points=H.points;Object.defineProperty(this,"path",pJ(this,H.path))},c0.prototype.addUnicode=function(H){if(this.unicodes.length===0)this.unicode=H;this.unicodes.push(H)},c0.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},c0.prototype.getPath=function(H,Z,W,K,X){H=H!==void 0?H:0,Z=Z!==void 0?Z:0,W=W!==void 0?W:72,K=Object.assign({},X&&X.defaultRenderOptions,K);let Y,R,O=K.xScale,A=K.yScale,P=1/(this.path.unitsPerEm||1000)*W,D=this;if(X&&X.variation)D=X.variation.getTransform(this,K.variation),Y=D.path.commands;if(K.hinting&&X&&X.hinting)R=D.path&&X.hinting.exec(D,W,K);if(R)Y=X.hinting.getCommands(R),H=Math.round(H),Z=Math.round(Z),O=A=1;else{if(Y=D.path.commands,O===void 0)O=P;if(A===void 0)A=P}let C=new m1;if(K.drawSVG){let z=this.getSvgImage(X);if(z){let k=new m1;return k._image={image:z.image,x:H+z.leftSideBearing*P,y:Z-z.baseline*P,width:z.image.width*P,height:z.image.height*P},C._layers=[k],C}}if(K.drawLayers){let z=this.getLayers(X);if(z&&z.length){C._layers=[];for(let k=0;k<z.length;k+=1){let S=z[k],j=X6(X,S.paletteIndex,K.usePalette);if(j==="currentColor")j=K.fill||"black";else j=f2(j,K.colorFormat||"rgba");K=Object.assign({},K,{fill:j}),C._layers.push(this.getPath.call(S.glyph,H,Z,W,K,X))}return C}}C.fill=K.fill||this.path.fill,C.stroke=this.path.stroke,C.strokeWidth=this.path.strokeWidth*P;for(let z=0;z<Y.length;z+=1){let k=Y[z];if(k.type==="M")C.moveTo(H+k.x*O,Z+-k.y*A);else if(k.type==="L")C.lineTo(H+k.x*O,Z+-k.y*A);else if(k.type==="Q")C.quadraticCurveTo(H+k.x1*O,Z+-k.y1*A,H+k.x*O,Z+-k.y*A);else if(k.type==="C")C.curveTo(H+k.x1*O,Z+-k.y1*A,H+k.x2*O,Z+-k.y2*A,H+k.x*O,Z+-k.y*A);else if(k.type==="Z"&&C.stroke&&C.strokeWidth)C.closePath()}return C},c0.prototype.getLayers=function(H){if(!H)throw Error("The font object is required to read the colr/cpal tables in order to get the layers.");return H.layers.get(this.index)},c0.prototype.getSvgImage=function(H){if(!H)throw Error("The font object is required to read the svg table in order to get the image.");return H.svgImages.get(this.index)},c0.prototype.getContours=function(H=null){if(this.points===void 0&&!H)return[];let Z=[],W=[],K=H?H:this.points;for(let X=0;X<K.length;X+=1){let Y=K[X];if(W.push(Y),Y.lastPointOfContour)Z.push(W),W=[]}return H0.argument(W.length===0,"There are still points left in the current contour."),Z},c0.prototype.getMetrics=function(){let H=this.path.commands,Z=[],W=[];for(let X=0;X<H.length;X+=1){let Y=H[X];if(Y.type!=="Z")Z.push(Y.x),W.push(Y.y);if(Y.type==="Q"||Y.type==="C")Z.push(Y.x1),W.push(Y.y1);if(Y.type==="C")Z.push(Y.x2),W.push(Y.y2)}let K={xMin:Math.min.apply(null,Z),yMin:Math.min.apply(null,W),xMax:Math.max.apply(null,Z),yMax:Math.max.apply(null,W),leftSideBearing:this.leftSideBearing};if(!isFinite(K.xMin))K.xMin=0;if(!isFinite(K.xMax))K.xMax=this.advanceWidth;if(!isFinite(K.yMin))K.yMin=0;if(!isFinite(K.yMax))K.yMax=0;return K.rightSideBearing=this.advanceWidth-K.leftSideBearing-(K.xMax-K.xMin),K},c0.prototype.draw=function(H,Z,W,K,X,Y){X=Object.assign({},Y&&Y.defaultRenderOptions,X),this.getPath(Z,W,K,X,Y).draw(H)},c0.prototype.drawPoints=function(H,Z,W,K,X,Y){if(X=Object.assign({},Y&&Y.defaultRenderOptions,X),X.drawLayers){let z=this.getLayers(Y);if(z&&z.length){for(let k=0;k<z.length;k+=1)if(z[k].glyph.index!==this.index)this.drawPoints.call(z[k].glyph,H,Z,W,K);return}}function R(z,k,S,j){H.beginPath();for(let g=0;g<z.length;g+=1)H.moveTo(k+z[g].x*j,S+z[g].y*j),H.arc(k+z[g].x*j,S+z[g].y*j,2,0,Math.PI*2,!1);H.fill()}Z=Z!==void 0?Z:0,W=W!==void 0?W:0,K=K!==void 0?K:24;let O=1/this.path.unitsPerEm*K,A=[],P=[],C=this.path.commands;if(Y&&Y.variation)C=Y.variation.getTransform(this,X.variation).path.commands;for(let z=0;z<C.length;z+=1){let k=C[z];if(k.x!==void 0)A.push({x:k.x,y:-k.y});if(k.x1!==void 0)P.push({x:k.x1,y:-k.y1});if(k.x2!==void 0)P.push({x:k.x2,y:-k.y2})}H.fillStyle="blue",R(A,Z,W,O),H.fillStyle="red",R(P,Z,W,O)},c0.prototype.drawMetrics=function(H,Z,W,K){let X;Z=Z!==void 0?Z:0,W=W!==void 0?W:0,K=K!==void 0?K:24,X=1/this.path.unitsPerEm*K,H.lineWidth=1,H.strokeStyle="black",P2.line(H,Z,-1e4,Z,1e4),P2.line(H,-1e4,W,1e4,W);let Y=this.xMin||0,R=this.yMin||0,O=this.xMax||0,A=this.yMax||0,P=this.advanceWidth||0;H.strokeStyle="blue",P2.line(H,Z+Y*X,-1e4,Z+Y*X,1e4),P2.line(H,Z+O*X,-1e4,Z+O*X,1e4),P2.line(H,-1e4,W+-R*X,1e4,W+-R*X),P2.line(H,-1e4,W+-A*X,1e4,W+-A*X),H.strokeStyle="green",P2.line(H,Z+P*X,-1e4,Z+P*X,1e4)},c0.prototype.toPathData=function(H,Z){H=Object.assign({},{variation:Z&&Z.defaultRenderOptions.variation},H);let W=this;if(Z&&Z.variation)W=Z.variation.getTransform(this,H.variation);let K=W.points&&H.pointsTransform?H.pointsTransform(W.points):W.path;if(H.pathTransform)K=H.pathTransform(K);return K.toPathData(H)},c0.prototype.fromSVG=function(H,Z={}){return this.path.fromSVG(H,Z)},c0.prototype.toSVG=function(H,Z){let W=this.toPathData.apply(this,[H,Z]);return this.path.toSVG(H,W)},c0.prototype.toDOMElement=function(H,Z){H=Object.assign({},{variation:Z&&Z.defaultRenderOptions.variation},H);let W=this.path;if(Z&&Z.variation)W=Z.variation.getTransform(this,H.variation).path;return W.toDOMElement(H)};var b2=c0;function y2(H,Z,W){Object.defineProperty(H,Z,{get:function(){return typeof H[W]>"u"&&H.path,H[W]},set:function(K){H[W]=K},enumerable:!0,configurable:!0})}function R4(H,Z){if(this.font=H,this.glyphs={},Array.isArray(Z))for(let W=0;W<Z.length;W++){let K=Z[W];K.path.unitsPerEm=H.unitsPerEm,this.glyphs[W]=K}this.length=Z&&Z.length||0}if(typeof Symbol<"u"&&Symbol.iterator)R4.prototype[Symbol.iterator]=function(){let H=-1;return{next:function(){H++;let Z=H>=this.length-1;return{value:this.get(H),done:Z}}.bind(this)}};R4.prototype.get=function(H){if(this.font._push&&this.glyphs[H]===void 0){if(this.font._push(H),typeof this.glyphs[H]==="function")this.glyphs[H]=this.glyphs[H]();let Z=this.glyphs[H],W=this.font._IndexToUnicodeMap[H];if(W)for(let K=0;K<W.unicodes.length;K++)Z.addUnicode(W.unicodes[K]);if(this.font.cffEncoding)Z.name=this.font.cffEncoding.charset[H];else if(this.font.glyphNames.names)Z.name=this.font.glyphNames.glyphIndexToName(H);this.glyphs[H].advanceWidth=this.font._hmtxTableData[H].advanceWidth,this.glyphs[H].leftSideBearing=this.font._hmtxTableData[H].leftSideBearing}else if(typeof this.glyphs[H]==="function")this.glyphs[H]=this.glyphs[H]();return this.glyphs[H]},R4.prototype.push=function(H,Z){this.glyphs[H]=Z,this.length++};function uJ(H,Z){return new b2({index:Z,font:H})}function dJ(H,Z,W,K,X,Y){return function(){let R=new b2({index:Z,font:H});return R.path=function(){W(R,K,X);let O=Y(H.glyphs,R);return O.unitsPerEm=H.unitsPerEm,O},y2(R,"numberOfContours","_numberOfContours"),y2(R,"xMin","_xMin"),y2(R,"xMax","_xMax"),y2(R,"yMin","_yMin"),y2(R,"yMax","_yMax"),y2(R,"points","_points"),R}}function lJ(H,Z,W,K,X){return function(){let Y=new b2({index:Z,font:H});return Y.path=function(){let R=W(H,Y,K,X);return R.unitsPerEm=H.unitsPerEm,R},Y}}var p1={GlyphSet:R4,glyphLoader:uJ,ttfGlyphLoader:dJ,cffGlyphLoader:lJ};function F8(H,Z){if(H===Z)return!0;else if(Array.isArray(H)&&Array.isArray(Z)){if(H.length!==Z.length)return!1;for(let W=0;W<H.length;W+=1)if(!F8(H[W],Z[W]))return!1;return!0}else return!1}var G8=10;function E4(H){let Z;if(H.length<1240)Z=107;else if(H.length<33900)Z=1131;else Z=32768;return Z}function u1(H,Z,W,K){let X=[],Y=[],R=K>1?n.getULong(H,Z):n.getCard16(H,Z),O=K>1?4:2,A,P;if(R!==0){let D=n.getByte(H,Z+O);A=Z+(R+1)*D+O;let C=Z+O+1;for(let z=0;z<R+1;z+=1)X.push(n.getOffset(H,C,D)),C+=D;P=A+X[R]}else P=Z+O;for(let D=0;D<X.length-1;D+=1){let C=n.getBytes(H,A+X[D],A+X[D+1]);if(W)C=W(C,H,Z,K);Y.push(C)}return{objects:Y,startOffset:Z,endOffset:P}}function cJ(H,Z,W){let K=[],X=W>1?n.getULong(H,Z):n.getCard16(H,Z),Y=W>1?4:2,R,O;if(X!==0){let A=n.getByte(H,Z+Y);R=Z+(X+1)*A+Y;let P=Z+Y+1;for(let D=0;D<X+1;D+=1)K.push(n.getOffset(H,P,A)),P+=A;O=R+K[X]}else O=Z+Y;return{offsets:K,startOffset:Z,endOffset:O}}function iJ(H,Z,W,K,X,Y){let R=Y>1?n.getULong(W,K):n.getCard16(W,K),O=Y>1?4:2,A=0;if(R!==0){let D=n.getByte(W,K+O);A=K+(R+1)*D+O}let P=n.getBytes(W,A+Z[H],A+Z[H+1]);if(X)P=X(P);return P}function nJ(H){let Z="",W=15,K=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];for(;;){let X=H.parseByte(),Y=X>>4,R=X&15;if(Y===W)break;if(Z+=K[Y],R===W)break;Z+=K[R]}return parseFloat(Z)}function sJ(H,Z){let W,K,X,Y;if(Z===28)return W=H.parseByte(),K=H.parseByte(),W<<8|K;if(Z===29)return W=H.parseByte(),K=H.parseByte(),X=H.parseByte(),Y=H.parseByte(),W<<24|K<<16|X<<8|Y;if(Z===30)return nJ(H);if(Z>=32&&Z<=246)return Z-139;if(Z>=247&&Z<=250)return W=H.parseByte(),(Z-247)*256+W+108;if(Z>=251&&Z<=254)return W=H.parseByte(),-(Z-251)*256-W-108;throw Error("Invalid b0 "+Z)}function oJ(H){let Z={};for(let W=0;W<H.length;W+=1){let K=H[W][0],X=H[W][1],Y;if(X.length===1)Y=X[0];else Y=X;if(Object.prototype.hasOwnProperty.call(Z,K)&&!isNaN(Z[K]))throw Error("Object "+Z+" already has key "+K);Z[K]=Y}return Z}function Y6(H,Z,W,K){Z=Z!==void 0?Z:0;let X=new n.Parser(H,Z),Y=[],R=[];W=W!==void 0?W:H.byteLength;let O=K<2?22:28;while(X.relativeOffset<W){let A=X.parseByte();if(A<O){if(A===12)A=1200+X.parseByte();if(K>1&&A===23){$Q(R);continue}Y.push([A,R]),R=[]}else R.push(sJ(X,A,K))}return oJ(Y)}function J5(H,Z){if(Z<=390)Z=F4[Z];else if(H)Z=H[Z-391];else Z=void 0;return Z}function F6(H,Z,W){let K={},X;for(let Y=0;Y<Z.length;Y+=1){let R=Z[Y];if(Array.isArray(R.type)){let O=[];O.length=R.type.length;for(let A=0;A<R.type.length;A++){if(X=H[R.op]!==void 0?H[R.op][A]:void 0,X===void 0)X=R.value!==void 0&&R.value[A]!==void 0?R.value[A]:null;if(R.type[A]==="SID")X=J5(W,X);O[A]=X}K[R.name]=O}else{if(X=H[R.op],X===void 0)X=R.value!==void 0?R.value:null;if(R.type==="SID")X=J5(W,X);K[R.name]=X}}return K}function rJ(H,Z){let W={};if(W.formatMajor=n.getCard8(H,Z),W.formatMinor=n.getCard8(H,Z+1),W.formatMajor>2)throw Error(`Unsupported CFF table version ${W.formatMajor}.${W.formatMinor}`);if(W.size=n.getCard8(H,Z+2),W.formatMajor<2)W.offsetSize=n.getCard8(H,Z+3),W.startOffset=Z,W.endOffset=Z+4;else W.topDictLength=n.getCard16(H,Z+3),W.endOffset=Z+8;return W}var R8=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[0.001,0,0,0.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],E8=[{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[0.001,0,0,0.001,0,0]},{name:"charStrings",op:17,type:"offset"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"vstore",op:24,type:"offset"}],O8=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}],q8=[{name:"blueValues",op:6,type:"delta"},{name:"otherBlues",op:7,type:"delta"},{name:"familyBlues",op:7,type:"delta"},{name:"familyBlues",op:8,type:"delta"},{name:"familyOtherBlues",op:9,type:"delta"},{name:"blueScale",op:1209,type:"number",value:0.039625},{name:"blueShift",op:1210,type:"number",value:7},{name:"blueFuzz",op:1211,type:"number",value:1},{name:"stdHW",op:10,type:"number"},{name:"stdVW",op:11,type:"number"},{name:"stemSnapH",op:1212,type:"number"},{name:"stemSnapV",op:1213,type:"number"},{name:"languageGroup",op:1217,type:"number",value:0},{name:"expansionFactor",op:1218,type:"number",value:0.06},{name:"vsindex",op:22,type:"number",value:0},{name:"subrs",op:19,type:"offset"}],aJ=[{name:"private",op:18,type:["number","offset"],value:[0,0]}];function tJ(H,Z,W,K){let X=Y6(H,Z,H.byteLength,K);return F6(X,K>1?E8:R8,W)}function G6(H,Z,W,K,X){let Y=Y6(H,Z,W,X);return F6(Y,X>1?q8:O8,K)}function eJ(H,Z,W){let K=Y6(H,Z,void 0,W);return F6(K,aJ)}function JQ(H,Z,W){let K=[];for(let X=0;X<W.length;X++){let Y=new DataView(new Uint8Array(W[X]).buffer),R=eJ(Y,0,2),O=R.private[0],A=R.private[1];if(O!==0&&A!==0){let P=G6(H,A+Z,O,[],2);if(P.subrs){let D=A+P.subrs,C=u1(H,D+Z,void 0,2);R._subrs=C.objects,R._subrsBias=E4(R._subrs)}R._privateDict=P}K.push(R)}return K}function R6(H,Z,W,K,X){let Y=[];for(let R=0;R<W.length;R+=1){let O=new DataView(new Uint8Array(W[R]).buffer),A=tJ(O,0,K,X);A._subrs=[],A._subrsBias=0,A._defaultWidthX=0,A._nominalWidthX=0;let P=X<2?A.private[0]:0,D=X<2?A.private[1]:0;if(P!==0&&D!==0){let C=G6(H,D+Z,P,K,X);if(A._defaultWidthX=C.defaultWidthX,A._nominalWidthX=C.nominalWidthX,C.subrs!==0){let z=D+C.subrs,k=u1(H,z+Z,void 0,X);A._subrs=k.objects,A._subrsBias=E4(A._subrs)}A._privateDict=C}Y.push(A)}return Y}function QQ(H,Z,W,K,X){let Y,R,O=new n.Parser(H,Z);W-=1;let A=[".notdef"],P=O.parseCard8();if(P===0)for(let D=0;D<W;D+=1)if(Y=O.parseSID(),X)A.push(Y);else A.push(J5(K,Y)||Y);else if(P===1)while(A.length<=W){Y=O.parseSID(),R=O.parseCard8();for(let D=0;D<=R;D+=1){if(X)A.push("cid"+("00000"+Y).slice(-5));else A.push(J5(K,Y)||Y);Y+=1}}else if(P===2)while(A.length<=W){Y=O.parseSID(),R=O.parseCard16();for(let D=0;D<=R;D+=1){if(X)A.push("cid"+("00000"+Y).slice(-5));else A.push(J5(K,Y)||Y);Y+=1}}else throw Error("Unknown charset format "+P);return A}function HQ(H,Z){let W,K={},X=new n.Parser(H,Z),Y=X.parseCard8();if(Y===0){let R=X.parseCard8();for(let O=0;O<R;O+=1)W=X.parseCard8(),K[W]=O}else if(Y===1){let R=X.parseCard8();W=1;for(let O=0;O<R;O+=1){let A=X.parseCard8(),P=X.parseCard8();for(let D=A;D<=A+P;D+=1)K[D]=W,W+=1}}else throw Error("Unknown encoding format "+Y);return K}function $Q(H){let Z=H.pop();while(H.length>Z)H.pop()}function A8(H,Z){let W=H.tables.cff&&H.tables.cff.topDict&&H.tables.cff.topDict.paintType||0;if(W===2)Z.fill=null,Z.stroke="black",Z.strokeWidth=H.tables.cff.topDict.strokeWidth||0;return W}function E6(H,Z,W,K,X){let Y,R,O,A,P=new m1,D=[],C=0,z=!1,k=!1,S=0,j=0,g,$0,J0,U0,O0=0,M0=[],_0,z0=0,y0=H.tables.cff2||H.tables.cff;if(J0=y0.topDict._defaultWidthX,U0=y0.topDict._nominalWidthX,X=X||H.variation&&H.variation.get(),!Z.getBlendPath)Z.getBlendPath=function(a){return E6(H,Z,W,K,a)};if(H.isCIDFont||K>1){let a=y0.topDict._fdSelect?y0.topDict._fdSelect[Z.index]:0,e=y0.topDict._fdArray[a];if(g=e._subrs,$0=e._subrsBias,K>1)M0=y0.topDict._vstore.itemVariationStore,O0=e._privateDict.vsindex;else J0=e._defaultWidthX,U0=e._nominalWidthX}else g=y0.topDict._subrs,$0=y0.topDict._subrsBias;let j1=A8(H,P),q0=J0;function R1(a,e){if(k&&j1!==2)P.closePath();P.moveTo(a,e),k=!0}function t0(){let a;if(a=(D.length&1)!==0,a&&!z)q0=D.shift()+U0;C+=D.length>>1,D.length=0,z=!0}function Z0(a){let e,i0,Y2,V4,V2,v1,e0,D1,n0,E1,J1,Q1,b0=0;while(b0<a.length){let L1=a[b0];switch(b0+=1,L1){case 1:t0();break;case 3:t0();break;case 4:if(D.length>1&&!z)q0=D.shift()+U0,z=!0;j+=D.pop(),R1(S,j);break;case 5:while(D.length>0)S+=D.shift(),j+=D.shift(),P.lineTo(S,j);break;case 6:while(D.length>0){if(S+=D.shift(),P.lineTo(S,j),D.length===0)break;j+=D.shift(),P.lineTo(S,j)}break;case 7:while(D.length>0){if(j+=D.shift(),P.lineTo(S,j),D.length===0)break;S+=D.shift(),P.lineTo(S,j)}break;case 8:while(D.length>0)Y=S+D.shift(),R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),S=O+D.shift(),j=A+D.shift(),P.curveTo(Y,R,O,A,S,j);break;case 10:if(V2=D.pop()+$0,v1=g[V2],v1){if(z0>=G8){console.warn("CFF charstring subroutine call depth exceeded, skipping callsubr");break}z0++,Z0(v1),z0--}break;case 11:if(K>1){console.error("CFF CharString operator return (11) is not supported in CFF2");break}return;case 12:switch(L1=a[b0],b0+=1,L1){case 35:Y=S+D.shift(),R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),e0=O+D.shift(),D1=A+D.shift(),n0=e0+D.shift(),E1=D1+D.shift(),J1=n0+D.shift(),Q1=E1+D.shift(),S=J1+D.shift(),j=Q1+D.shift(),D.shift(),P.curveTo(Y,R,O,A,e0,D1),P.curveTo(n0,E1,J1,Q1,S,j);break;case 34:Y=S+D.shift(),R=j,O=Y+D.shift(),A=R+D.shift(),e0=O+D.shift(),D1=A,n0=e0+D.shift(),E1=A,J1=n0+D.shift(),Q1=j,S=J1+D.shift(),P.curveTo(Y,R,O,A,e0,D1),P.curveTo(n0,E1,J1,Q1,S,j);break;case 36:Y=S+D.shift(),R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),e0=O+D.shift(),D1=A,n0=e0+D.shift(),E1=A,J1=n0+D.shift(),Q1=E1+D.shift(),S=J1+D.shift(),P.curveTo(Y,R,O,A,e0,D1),P.curveTo(n0,E1,J1,Q1,S,j);break;case 37:if(Y=S+D.shift(),R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),e0=O+D.shift(),D1=A+D.shift(),n0=e0+D.shift(),E1=D1+D.shift(),J1=n0+D.shift(),Q1=E1+D.shift(),Math.abs(J1-S)>Math.abs(Q1-j))S=J1+D.shift();else j=Q1+D.shift();P.curveTo(Y,R,O,A,e0,D1),P.curveTo(n0,E1,J1,Q1,S,j);break;default:console.log("Glyph "+Z.index+": unknown operator 1200"+L1),D.length=0}break;case 14:if(K>1){console.error("CFF CharString operator endchar (14) is not supported in CFF2");break}if(D.length>=4){let _2=K6[D.pop()],p2=K6[D.pop()],_4=D.pop(),z4=D.pop();if(_2&&p2){Z.isComposite=!0,Z.components=[];let k7=H.cffEncoding.charset.indexOf(_2),j7=H.cffEncoding.charset.indexOf(p2);Z.components.push({glyphIndex:j7,dx:0,dy:0}),Z.components.push({glyphIndex:k7,dx:z4,dy:_4}),P.extend(H.glyphs.get(j7).path);let mW=H.glyphs.get(k7),k6=JSON.parse(JSON.stringify(mW.path.commands));for(let j6=0;j6<k6.length;j6+=1){let l1=k6[j6];if(l1.type!=="Z")l1.x+=z4,l1.y+=_4;if(l1.type==="Q"||l1.type==="C")l1.x1+=z4,l1.y1+=_4;if(l1.type==="C")l1.x2+=z4,l1.y2+=_4}P.extend(k6)}}else if(D.length>0&&!z)q0=D.shift()+U0,z=!0;if(k&&j1!==2)P.closePath(),k=!1;break;case 15:if(K<2){console.error("CFF2 CharString operator vsindex (15) is not supported in CFF");break}O0=D.pop();break;case 16:if(K<2){console.error("CFF2 CharString operator blend (16) is not supported in CFF");break}if(!_0)_0=H.variation&&X&&H.variation.process.getBlendVector(M0,O0,X);var C0=D.pop(),K1=_0?_0.length:M0.itemVariationSubtables[O0].regionIndexes.length,P1=C0*K1,h1=D.length-P1,a1=h1-C0;if(_0)for(let _2=0;_2<C0;_2++){var S7=D[a1+_2];for(let p2=0;p2<K1;p2++)S7+=_0[p2]*D[h1++];D[a1+_2]=S7}while(P1--)D.pop();break;case 18:t0();break;case 19:case 20:t0(),b0+=C+7>>3;break;case 21:if(D.length>2&&!z)q0=D.shift()+U0,z=!0;j+=D.pop(),S+=D.pop(),R1(S,j);break;case 22:if(D.length>1&&!z)q0=D.shift()+U0,z=!0;S+=D.pop(),R1(S,j);break;case 23:t0();break;case 24:while(D.length>2)Y=S+D.shift(),R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),S=O+D.shift(),j=A+D.shift(),P.curveTo(Y,R,O,A,S,j);S+=D.shift(),j+=D.shift(),P.lineTo(S,j);break;case 25:while(D.length>6)S+=D.shift(),j+=D.shift(),P.lineTo(S,j);Y=S+D.shift(),R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),S=O+D.shift(),j=A+D.shift(),P.curveTo(Y,R,O,A,S,j);break;case 26:if(D.length&1)S+=D.shift();while(D.length>0)Y=S,R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),S=O,j=A+D.shift(),P.curveTo(Y,R,O,A,S,j);break;case 27:if(D.length&1)j+=D.shift();while(D.length>0)Y=S+D.shift(),R=j,O=Y+D.shift(),A=R+D.shift(),S=O+D.shift(),j=A,P.curveTo(Y,R,O,A,S,j);break;case 28:e=a[b0],i0=a[b0+1],D.push((e<<24|i0<<16)>>16),b0+=2;break;case 29:if(V2=D.pop()+H.gsubrsBias,v1=H.gsubrs[V2],v1){if(z0>=G8){console.warn("CFF charstring subroutine call depth exceeded, skipping callgsubr");break}z0++,Z0(v1),z0--}break;case 30:while(D.length>0){if(Y=S,R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),S=O+D.shift(),j=A+(D.length===1?D.shift():0),P.curveTo(Y,R,O,A,S,j),D.length===0)break;Y=S+D.shift(),R=j,O=Y+D.shift(),A=R+D.shift(),j=A+D.shift(),S=O+(D.length===1?D.shift():0),P.curveTo(Y,R,O,A,S,j)}break;case 31:while(D.length>0){if(Y=S+D.shift(),R=j,O=Y+D.shift(),A=R+D.shift(),j=A+D.shift(),S=O+(D.length===1?D.shift():0),P.curveTo(Y,R,O,A,S,j),D.length===0)break;Y=S,R=j+D.shift(),O=Y+D.shift(),A=R+D.shift(),S=O+D.shift(),j=A+(D.length===1?D.shift():0),P.curveTo(Y,R,O,A,S,j)}break;default:if(L1<32)console.log("Glyph "+Z.index+": unknown operator "+L1);else if(L1<247)D.push(L1-139);else if(L1<251)e=a[b0],b0+=1,D.push((L1-247)*256+e+108);else if(L1<255)e=a[b0],b0+=1,D.push(-(L1-251)*256-e-108);else e=a[b0],i0=a[b0+1],Y2=a[b0+2],V4=a[b0+3],b0+=4,D.push((e<<24|i0<<16|Y2<<8|V4)/65536)}}}if(Z0(W),H.variation&&X)P.commands=P.commands.map((a)=>{let e=Object.keys(a);for(let i0=0;i0<e.length;i0++){let Y2=e[i0];if(Y2==="type")continue;a[Y2]=Math.round(a[Y2])}return a});if(z)Z.advanceWidth=q0;return P}function N8(H,Z,W,K,X){let Y=[],R,O=new n.Parser(H,Z),A=O.parseCard8();if(A===0)for(let P=0;P<W;P++){if(R=O.parseCard8(),R>=K)throw Error("CFF table CID Font FDSelect has bad FD index value "+R+" (FD count "+K+")");Y.push(R)}else if(A===3||X>1&&A===4){let P=A===4?O.parseULong():O.parseCard16(),D=A===4?O.parseULong():O.parseCard16();if(D!==0)throw Error(`CFF Table CID Font FDSelect format ${A} range has bad initial GID ${D}`);let C;for(let z=0;z<P;z++){if(R=A===4?O.parseUShort():O.parseCard8(),C=A===4?O.parseULong():O.parseCard16(),R>=K)throw Error("CFF table CID Font FDSelect has bad FD index value "+R+" (FD count "+K+")");if(C>W)throw Error(`CFF Table CID Font FDSelect format ${X} range has bad GID ${C}`);for(;D<C;D++)Y.push(R);D=C}if(C!==W)throw Error("CFF Table CID Font FDSelect format 3 range has bad final (Sentinal) GID "+C)}else throw Error("CFF Table CID Font FDSelect table has unsupported format "+A);return Y}function ZQ(H,Z,W,K){let X,Y=rJ(H,Z);if(Y.formatMajor===2)X=W.tables.cff2={};else X=W.tables.cff={};let R=Y.formatMajor>1?null:u1(H,Y.endOffset,n.bytesToString),O=Y.formatMajor>1?null:u1(H,R.endOffset),A=Y.formatMajor>1?null:u1(H,O.endOffset,n.bytesToString),P=u1(H,Y.formatMajor>1?Z+Y.size+Y.topDictLength:A.endOffset,void 0,Y.formatMajor);W.gsubrs=P.objects,W.gsubrsBias=E4(W.gsubrs);let D;if(Y.formatMajor>1){let z=Z+Y.size,k=n.getBytes(H,z,z+Y.topDictLength);D=R6(H,0,[k],void 0,Y.formatMajor)[0]}else{let z=R6(H,Z,O.objects,A.objects,Y.formatMajor);if(z.length!==1)throw Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+z.length);D=z[0]}if(X.topDict=D,D._privateDict)W.defaultWidthX=D._privateDict.defaultWidthX,W.nominalWidthX=D._privateDict.nominalWidthX;if(Y.formatMajor<2&&D.ros[0]!==void 0&&D.ros[1]!==void 0)W.isCIDFont=!0;if(Y.formatMajor>1){let{fdArray:z,fdSelect:k}=D;if(!z)throw Error("This is a CFF2 font, but FDArray information is missing");let S=u1(H,Z+z,null,Y.formatMajor),j=JQ(H,Z,S.objects);if(D._fdArray=j,k)D._fdSelect=N8(H,Z+k,W.numGlyphs,j.length,Y.formatMajor)}else if(W.isCIDFont){let{fdArray:z,fdSelect:k}=D;if(z===0||k===0)throw Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");z+=Z;let S=u1(H,z),j=R6(H,Z,S.objects,A.objects,Y.formatMajor);D._fdArray=j,k+=Z,D._fdSelect=N8(H,k,W.numGlyphs,j.length,Y.formatMajor)}if(Y.formatMajor<2){let z=Z+D.private[1],k=G6(H,z,D.private[0],A.objects,Y.formatMajor);if(W.defaultWidthX=k.defaultWidthX,W.nominalWidthX=k.nominalWidthX,k.subrs!==0){let S=z+k.subrs,j=u1(H,S);W.subrs=j.objects,W.subrsBias=E4(W.subrs)}else W.subrs=[],W.subrsBias=0}let C;if(K.lowMemory)C=cJ(H,Z+D.charStrings,Y.formatMajor),W.nGlyphs=C.offsets.length-(Y.formatMajor>1?1:0);else C=u1(H,Z+D.charStrings,null,Y.formatMajor),W.nGlyphs=C.objects.length;if(Y.formatMajor>1&&W.tables.maxp&&W.nGlyphs!==W.tables.maxp.numGlyphs)console.error(`Glyph count in the CFF2 table (${W.nGlyphs}) must correspond to the glyph count in the maxp table (${W.tables.maxp.numGlyphs})`);if(Y.formatMajor<2){let z=[],k=[];if(D.charset===0)z=TJ;else if(D.charset===1)z=SJ;else if(D.charset===2)z=kJ;else z=QQ(H,Z+D.charset,W.nGlyphs,A.objects,W.isCIDFont);if(D.encoding===0)k=K6;else if(D.encoding===1)k=jJ;else k=HQ(H,Z+D.encoding);W.cffEncoding=new K8(k,z),W.encoding=W.encoding||W.cffEncoding}if(W.glyphs=new p1.GlyphSet(W),K.lowMemory)W._push=function(z){let k=iJ(z,C.offsets,H,Z+D.charStrings,void 0,Y.formatMajor);W.glyphs.push(z,p1.cffGlyphLoader(W,z,E6,k,Y.formatMajor))};else for(let z=0;z<W.nGlyphs;z+=1){let k=C.objects[z];W.glyphs.push(z,p1.cffGlyphLoader(W,z,E6,k,Y.formatMajor))}if(D.vstore){let z=new n.Parser(H,Z+D.vstore);D._vstore=z.parseVariationStore()}}function D8(H,Z){let W,K=F4.indexOf(H);if(K>=0)W=K;if(K=Z.indexOf(H),K>=0)W=K+F4.length;else W=F4.length+Z.length,Z.push(H);return W}function WQ(){return new u.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function KQ(H){let Z=new u.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);Z.names=[];for(let W=0;W<H.length;W+=1)Z.names.push({name:"name_"+W,type:"NAME",value:H[W]});return Z}function P8(H,Z,W){let K={};for(let X=0;X<H.length;X+=1){let Y=H[X],R=Z[Y.name];if(R!==void 0&&!F8(R,Y.value)){if(Y.type==="SID")R=D8(R,W);K[Y.op]={name:Y.name,type:Y.type,value:R}}}return K}function L8(H,Z,W){let K=new u.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return K.dict=P8(W>1?E8:R8,H,Z),K}function M8(H){let Z=new u.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return Z.topDicts=[{name:"topDict_0",type:"TABLE",value:H}],Z}function UQ(H){let Z=new u.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);Z.strings=[];for(let W=0;W<H.length;W+=1)Z.strings.push({name:"string_"+W,type:"STRING",value:H[W]});return Z}function XQ(){return new u.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function YQ(H,Z){let W=new u.Record("Charsets",[{name:"format",type:"Card8",value:0}]);for(let K=0;K<H.length;K+=1){let X=H[K],Y=D8(X,Z);W.fields.push({name:"glyph_"+K,type:"SID",value:Y})}return W}function FQ(H,Z){let W=[],K=H.path;if(Z<2)W.push({name:"width",type:"NUMBER",value:H.advanceWidth});let X=0,Y=0;for(let R=0;R<K.commands.length;R+=1){let O,A,P=K.commands[R];if(P.type==="Q")P={type:"C",x:P.x,y:P.y,x1:Math.round(0.3333333333333333*X+0.6666666666666666*P.x1),y1:Math.round(0.3333333333333333*Y+0.6666666666666666*P.y1),x2:Math.round(0.3333333333333333*P.x+0.6666666666666666*P.x1),y2:Math.round(0.3333333333333333*P.y+0.6666666666666666*P.y1)};if(P.type==="M")O=Math.round(P.x-X),A=Math.round(P.y-Y),W.push({name:"dx",type:"NUMBER",value:O}),W.push({name:"dy",type:"NUMBER",value:A}),W.push({name:"rmoveto",type:"OP",value:21}),X=Math.round(P.x),Y=Math.round(P.y);else if(P.type==="L")O=Math.round(P.x-X),A=Math.round(P.y-Y),W.push({name:"dx",type:"NUMBER",value:O}),W.push({name:"dy",type:"NUMBER",value:A}),W.push({name:"rlineto",type:"OP",value:5}),X=Math.round(P.x),Y=Math.round(P.y);else if(P.type==="C"){let D=Math.round(P.x1-X),C=Math.round(P.y1-Y),z=Math.round(P.x2-P.x1),k=Math.round(P.y2-P.y1);O=Math.round(P.x-P.x2),A=Math.round(P.y-P.y2),W.push({name:"dx1",type:"NUMBER",value:D}),W.push({name:"dy1",type:"NUMBER",value:C}),W.push({name:"dx2",type:"NUMBER",value:z}),W.push({name:"dy2",type:"NUMBER",value:k}),W.push({name:"dx",type:"NUMBER",value:O}),W.push({name:"dy",type:"NUMBER",value:A}),W.push({name:"rrcurveto",type:"OP",value:8}),X=Math.round(P.x),Y=Math.round(P.y)}}if(Z<2)W.push({name:"endchar",type:"OP",value:14});return W}function GQ(H,Z){let W=new u.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]);for(let K=0;K<H.length;K+=1){let X=H.get(K),Y=FQ(X,Z);W.charStrings.push({name:X.name,type:"CHARSTRING",value:Y})}return W}function RQ(H,Z,W){let K=new u.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return K.dict=P8(W>1?q8:O8,H,Z),K}function EQ(H,Z){let K=new u.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),X=1/Z.unitsPerEm,Y={version:Z.version,fullName:Z.fullName,familyName:Z.familyName,weight:Z.weightName,fontBBox:Z.fontBBox||[0,0,0,0],fontMatrix:[X,0,0,X,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},R=Z&&Z.topDict||{};if(R.paintType)Y.paintType=R.paintType,Y.strokeWidth=R.strokeWidth||0;let O={},A=[],P;for(let k=1;k<H.length;k+=1)P=H.get(k),A.push(P.name);let D=[];K.header=WQ(),K.nameIndex=KQ([Z.postScriptName]);let C=L8(Y,D);K.topDictIndex=M8(C),K.globalSubrIndex=XQ(),K.charsets=YQ(A,D),K.charStringsIndex=GQ(H,1),K.privateDict=RQ(O,D),K.stringIndex=UQ(D);let z=K.header.sizeOf()+K.nameIndex.sizeOf()+K.topDictIndex.sizeOf()+K.stringIndex.sizeOf()+K.globalSubrIndex.sizeOf();return Y.charset=z,Y.encoding=0,Y.charStrings=Y.charset+K.charsets.sizeOf(),Y.private[1]=Y.charStrings+K.charStringsIndex.sizeOf(),C=L8(Y,D),K.topDictIndex=M8(C),K}var O6={parse:ZQ,make:EQ};function OQ(H,Z){let W={},K=new n.Parser(H,Z);return W.version=K.parseVersion(),W.fontRevision=Math.round(K.parseFixed()*1000)/1000,W.checkSumAdjustment=K.parseULong(),W.magicNumber=K.parseULong(),H0.argument(W.magicNumber===1594834165,"Font header has wrong magic number."),W.flags=K.parseUShort(),W.unitsPerEm=K.parseUShort(),W.created=K.parseLongDateTime(),W.modified=K.parseLongDateTime(),W.xMin=K.parseShort(),W.yMin=K.parseShort(),W.xMax=K.parseShort(),W.yMax=K.parseShort(),W.macStyle=K.parseUShort(),W.lowestRecPPEM=K.parseUShort(),W.fontDirectionHint=K.parseShort(),W.indexToLocFormat=K.parseShort(),W.glyphDataFormat=K.parseShort(),W}function qQ(H){let Z=Math.round(new Date().getTime()/1000)+2082844800,W=Z,K=H.macStyle||0;if(H.createdTimestamp)W=H.createdTimestamp+2082844800;return new u.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1000},{name:"created",type:"LONGDATETIME",value:W},{name:"modified",type:"LONGDATETIME",value:Z},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:K},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],H)}var B8={parse:OQ,make:qQ};function AQ(H,Z){let W={},K=new n.Parser(H,Z);return W.version=K.parseVersion(),W.ascender=K.parseShort(),W.descender=K.parseShort(),W.lineGap=K.parseShort(),W.advanceWidthMax=K.parseUShort(),W.minLeftSideBearing=K.parseShort(),W.minRightSideBearing=K.parseShort(),W.xMaxExtent=K.parseShort(),W.caretSlopeRise=K.parseShort(),W.caretSlopeRun=K.parseShort(),W.caretOffset=K.parseShort(),K.relativeOffset+=8,W.metricDataFormat=K.parseShort(),W.numberOfHMetrics=K.parseUShort(),W}function NQ(H){return new u.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],H)}var V8={parse:AQ,make:NQ};function DQ(H,Z,W,K,X){let Y,R,O=new n.Parser(H,Z);for(let A=0;A<K;A+=1){if(A<W)Y=O.parseUShort(),R=O.parseShort();let P=X.get(A);P.advanceWidth=Y,P.leftSideBearing=R}}function PQ(H,Z,W,K,X){H._hmtxTableData={};let Y,R,O=new n.Parser(Z,W);for(let A=0;A<X;A+=1){if(A<K)Y=O.parseUShort(),R=O.parseShort();H._hmtxTableData[A]={advanceWidth:Y,leftSideBearing:R}}}function LQ(H,Z,W,K,X,Y,R){if(R.lowMemory)PQ(H,Z,W,K,X);else DQ(Z,W,K,X,Y)}function MQ(H){let Z=new u.Table("hmtx",[]);for(let W=0;W<H.length;W+=1){let K=H.get(W),X=K.advanceWidth||0,Y=K.leftSideBearing||0;Z.fields.push({name:"advanceWidth_"+W,type:"USHORT",value:X}),Z.fields.push({name:"leftSideBearing_"+W,type:"SHORT",value:Y})}return Z}var _8={parse:LQ,make:MQ};function BQ(H){let Z=new u.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:H.length}]),W="",K=12+H.length*4;for(let X=0;X<H.length;++X){let Y=W.indexOf(H[X]);if(Y<0)Y=W.length,W+=H[X];Z.fields.push({name:"offset "+X,type:"USHORT",value:K+Y}),Z.fields.push({name:"length "+X,type:"USHORT",value:H[X].length})}return Z.fields.push({name:"stringPool",type:"CHARARRAY",value:W}),Z}function VQ(H,Z){let W=new n.Parser(H,Z),K=W.parseULong();H0.argument(K===1,"Unsupported ltag table version."),W.skip("uLong",1);let X=W.parseULong(),Y=[];for(let R=0;R<X;R++){let O="",A=Z+W.parseUShort(),P=W.parseUShort();for(let D=A;D<A+P;++D)O+=String.fromCharCode(H.getInt8(D));Y.push(O)}return Y}var z8={make:BQ,parse:VQ};function _Q(H,Z){let W={},K=new n.Parser(H,Z);if(W.version=K.parseVersion(),W.numGlyphs=K.parseUShort(),W.version===1)W.maxPoints=K.parseUShort(),W.maxContours=K.parseUShort(),W.maxCompositePoints=K.parseUShort(),W.maxCompositeContours=K.parseUShort(),W.maxZones=K.parseUShort(),W.maxTwilightPoints=K.parseUShort(),W.maxStorage=K.parseUShort(),W.maxFunctionDefs=K.parseUShort(),W.maxInstructionDefs=K.parseUShort(),W.maxStackElements=K.parseUShort(),W.maxSizeOfInstructions=K.parseUShort(),W.maxComponentElements=K.parseUShort(),W.maxComponentDepth=K.parseUShort();return W}function zQ(H){return new u.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:H}])}var w8={parse:_Q,make:zQ},q6=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66000,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function wQ(H){for(let Z=0;Z<q6.length;Z+=1){let W=q6[Z];if(H>=W.begin&&H<W.end)return Z}return-1}function CQ(H,Z){let W={},K=new n.Parser(H,Z);W.version=K.parseUShort(),W.xAvgCharWidth=K.parseShort(),W.usWeightClass=K.parseUShort(),W.usWidthClass=K.parseUShort(),W.fsType=K.parseUShort(),W.ySubscriptXSize=K.parseShort(),W.ySubscriptYSize=K.parseShort(),W.ySubscriptXOffset=K.parseShort(),W.ySubscriptYOffset=K.parseShort(),W.ySuperscriptXSize=K.parseShort(),W.ySuperscriptYSize=K.parseShort(),W.ySuperscriptXOffset=K.parseShort(),W.ySuperscriptYOffset=K.parseShort(),W.yStrikeoutSize=K.parseShort(),W.yStrikeoutPosition=K.parseShort(),W.sFamilyClass=K.parseShort(),W.panose=[];for(let X=0;X<10;X++)W.panose[X]=K.parseByte();if(W.ulUnicodeRange1=K.parseULong(),W.ulUnicodeRange2=K.parseULong(),W.ulUnicodeRange3=K.parseULong(),W.ulUnicodeRange4=K.parseULong(),W.achVendID=String.fromCharCode(K.parseByte(),K.parseByte(),K.parseByte(),K.parseByte()),W.fsSelection=K.parseUShort(),W.usFirstCharIndex=K.parseUShort(),W.usLastCharIndex=K.parseUShort(),W.sTypoAscender=K.parseShort(),W.sTypoDescender=K.parseShort(),W.sTypoLineGap=K.parseShort(),W.usWinAscent=K.parseUShort(),W.usWinDescent=K.parseUShort(),W.version>=1)W.ulCodePageRange1=K.parseULong(),W.ulCodePageRange2=K.parseULong();if(W.version>=2)W.sxHeight=K.parseShort(),W.sCapHeight=K.parseShort(),W.usDefaultChar=K.parseUShort(),W.usBreakChar=K.parseUShort(),W.usMaxContent=K.parseUShort();return W}function IQ(H){return new u.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],H)}var A6={parse:CQ,make:IQ,unicodeRanges:q6,getUnicodeRange:wQ};function TQ(H,Z){let W={},K=new n.Parser(H,Z);switch(W.version=K.parseVersion(),W.italicAngle=K.parseFixed(),W.underlinePosition=K.parseShort(),W.underlineThickness=K.parseShort(),W.isFixedPitch=K.parseULong(),W.minMemType42=K.parseULong(),W.maxMemType42=K.parseULong(),W.minMemType1=K.parseULong(),W.maxMemType1=K.parseULong(),W.version){case 1:W.names=D2.slice();break;case 2:W.numberOfGlyphs=K.parseUShort(),W.glyphNameIndex=Array(W.numberOfGlyphs);for(let X=0;X<W.numberOfGlyphs;X++)W.glyphNameIndex[X]=K.parseUShort();W.names=[];for(let X=0;X<W.numberOfGlyphs;X++)if(W.glyphNameIndex[X]>=D2.length){let Y=K.parseChar();W.names.push(K.parseString(Y))}break;case 2.5:W.numberOfGlyphs=K.parseUShort(),W.offset=Array(W.numberOfGlyphs);for(let X=0;X<W.numberOfGlyphs;X++)W.offset[X]=K.parseChar();break}return W}function SQ(H){let{italicAngle:Z=Math.round((H.italicAngle||0)*65536),underlinePosition:W=0,underlineThickness:K=0,isFixedPitch:X=0,minMemType42:Y=0,maxMemType42:R=0,minMemType1:O=0,maxMemType1:A=0}=H.tables.post||{};return new u.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:Z},{name:"underlinePosition",type:"FWORD",value:W},{name:"underlineThickness",type:"FWORD",value:K},{name:"isFixedPitch",type:"ULONG",value:X},{name:"minMemType42",type:"ULONG",value:Y},{name:"maxMemType42",type:"ULONG",value:R},{name:"minMemType1",type:"ULONG",value:O},{name:"maxMemType1",type:"ULONG",value:A}])}var C8={parse:TQ,make:SQ},S1=[,,,,,,,,,];S1[1]=function(){let Z=this.offset+this.relativeOffset,W=this.parseUShort();if(W===1)return{substFormat:1,coverage:this.parsePointer(v.coverage),deltaGlyphId:this.parseShort()};else if(W===2)return{substFormat:2,coverage:this.parsePointer(v.coverage),substitute:this.parseOffset16List()};H0.assert(!1,"0x"+Z.toString(16)+": lookup type 1 format must be 1 or 2.")},S1[2]=function(){let Z=this.parseUShort();return H0.argument(Z===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:Z,coverage:this.parsePointer(v.coverage),sequences:this.parseListOfLists()}},S1[3]=function(){let Z=this.parseUShort();return H0.argument(Z===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:Z,coverage:this.parsePointer(v.coverage),alternateSets:this.parseListOfLists()}},S1[4]=function(){let Z=this.parseUShort();return H0.argument(Z===1,"GSUB ligature table identifier-format must be 1"),{substFormat:Z,coverage:this.parsePointer(v.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var x2={sequenceIndex:v.uShort,lookupListIndex:v.uShort};S1[5]=function(){let Z=this.offset+this.relativeOffset,W=this.parseUShort();if(W===1)return{substFormat:W,coverage:this.parsePointer(v.coverage),ruleSets:this.parseListOfLists(function(){let K=this.parseUShort(),X=this.parseUShort();return{input:this.parseUShortList(K-1),lookupRecords:this.parseRecordList(X,x2)}})};else if(W===2)return{substFormat:W,coverage:this.parsePointer(v.coverage),classDef:this.parsePointer(v.classDef),classSets:this.parseListOfLists(function(){let K=this.parseUShort(),X=this.parseUShort();return{classes:this.parseUShortList(K-1),lookupRecords:this.parseRecordList(X,x2)}})};else if(W===3){let K=this.parseUShort(),X=this.parseUShort();return{substFormat:W,coverages:this.parseList(K,v.pointer(v.coverage)),lookupRecords:this.parseRecordList(X,x2)}}H0.assert(!1,"0x"+Z.toString(16)+": lookup type 5 format must be 1, 2 or 3.")},S1[6]=function(){let Z=this.offset+this.relativeOffset,W=this.parseUShort();if(W===1)return{substFormat:1,coverage:this.parsePointer(v.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(x2)}})};else if(W===2)return{substFormat:2,coverage:this.parsePointer(v.coverage),backtrackClassDef:this.parsePointer(v.classDef),inputClassDef:this.parsePointer(v.classDef),lookaheadClassDef:this.parsePointer(v.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(x2)}})};else if(W===3)return{substFormat:3,backtrackCoverage:this.parseList(v.pointer(v.coverage)),inputCoverage:this.parseList(v.pointer(v.coverage)),lookaheadCoverage:this.parseList(v.pointer(v.coverage)),lookupRecords:this.parseRecordList(x2)};H0.assert(!1,"0x"+Z.toString(16)+": lookup type 6 format must be 1, 2 or 3.")},S1[7]=function(){let Z=this.parseUShort();H0.argument(Z===1,"GSUB Extension Substitution subtable identifier-format must be 1");let W=this.parseUShort(),K=new v(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:W,extension:S1[W].call(K)}},S1[8]=function(){let Z=this.parseUShort();return H0.argument(Z===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:Z,coverage:this.parsePointer(v.coverage),backtrackCoverage:this.parseList(v.pointer(v.coverage)),lookaheadCoverage:this.parseList(v.pointer(v.coverage)),substitutes:this.parseUShortList()}};function kQ(H,Z){Z=Z||0;let W=new v(H,Z),K=W.parseVersion(1);if(H0.argument(K===1||K===1.1,"Unsupported GSUB table version."),K===1)return{version:K,scripts:W.parseScriptList(),features:W.parseFeatureList(),lookups:W.parseLookupList(S1)};else return{version:K,scripts:W.parseScriptList(),features:W.parseFeatureList(),lookups:W.parseLookupList(S1),variations:W.parseFeatureVariationsList()}}var L2=[,,,,,,,,,];L2[1]=function(Z){if(Z.substFormat===1)return new u.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)},{name:"deltaGlyphID",type:"SHORT",value:Z.deltaGlyphId}]);else if(Z.substFormat===2)return new u.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)}].concat(u.ushortList("substitute",Z.substitute)));H0.fail("Lookup type 1 substFormat must be 1 or 2.")},L2[2]=function(Z){return H0.assert(Z.substFormat===1,"Lookup type 2 substFormat must be 1."),new u.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)}].concat(u.tableList("seqSet",Z.sequences,function(W){return new u.Table("sequenceSetTable",u.ushortList("sequence",W))})))},L2[3]=function(Z){return H0.assert(Z.substFormat===1,"Lookup type 3 substFormat must be 1."),new u.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)}].concat(u.tableList("altSet",Z.alternateSets,function(W){return new u.Table("alternateSetTable",u.ushortList("alternate",W))})))},L2[4]=function(Z){return H0.assert(Z.substFormat===1,"Lookup type 4 substFormat must be 1."),new u.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)}].concat(u.tableList("ligSet",Z.ligatureSets,function(W){return new u.Table("ligatureSetTable",u.tableList("ligature",W,function(K){return new u.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:K.ligGlyph}].concat(u.ushortList("component",K.components,K.components.length+1)))}))})))},L2[5]=function(Z){if(Z.substFormat===1)return new u.Table("contextualSubstitutionTable",[{name:"substFormat",type:"USHORT",value:Z.substFormat},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)}].concat(u.tableList("sequenceRuleSet",Z.ruleSets,function(W){if(!W)return new u.Table("NULL",null);return new u.Table("sequenceRuleSetTable",u.tableList("sequenceRule",W,function(K){let X=u.ushortList("seqLookup",[],K.lookupRecords.length).concat(u.ushortList("inputSequence",K.input,K.input.length+1));[X[0],X[1]]=[X[1],X[0]];for(let Y=0;Y<K.lookupRecords.length;Y++){let R=K.lookupRecords[Y];X=X.concat({name:"sequenceIndex"+Y,type:"USHORT",value:R.sequenceIndex}).concat({name:"lookupListIndex"+Y,type:"USHORT",value:R.lookupListIndex})}return new u.Table("sequenceRuleTable",X)}))})));else if(Z.substFormat===2)return new u.Table("contextualSubstitutionTable",[{name:"substFormat",type:"USHORT",value:Z.substFormat},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)},{name:"classDef",type:"TABLE",value:new u.ClassDef(Z.classDef)}].concat(u.tableList("classSeqRuleSet",Z.classSets,function(W){if(!W)return new u.Table("NULL",null);return new u.Table("classSeqRuleSetTable",u.tableList("classSeqRule",W,function(K){let X=u.ushortList("classes",K.classes,K.classes.length+1).concat(u.ushortList("seqLookupCount",[],K.lookupRecords.length));for(let Y=0;Y<K.lookupRecords.length;Y++){let R=K.lookupRecords[Y];X=X.concat({name:"sequenceIndex"+Y,type:"USHORT",value:R.sequenceIndex}).concat({name:"lookupListIndex"+Y,type:"USHORT",value:R.lookupListIndex})}return new u.Table("classSeqRuleTable",X)}))})));else if(Z.substFormat===3){let W=[{name:"substFormat",type:"USHORT",value:Z.substFormat}];W.push({name:"inputGlyphCount",type:"USHORT",value:Z.coverages.length}),W.push({name:"substitutionCount",type:"USHORT",value:Z.lookupRecords.length});for(let X=0;X<Z.coverages.length;X++){let Y=Z.coverages[X];W.push({name:"inputCoverage"+X,type:"TABLE",value:new u.Coverage(Y)})}for(let X=0;X<Z.lookupRecords.length;X++){let Y=Z.lookupRecords[X];W=W.concat({name:"sequenceIndex"+X,type:"USHORT",value:Y.sequenceIndex}).concat({name:"lookupListIndex"+X,type:"USHORT",value:Y.lookupListIndex})}return new u.Table("contextualSubstitutionTable",W)}H0.assert(!1,"lookup type 5 format must be 1, 2 or 3.")},L2[6]=function(Z){if(Z.substFormat===1)return new u.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:Z.substFormat},{name:"coverage",type:"TABLE",value:new u.Coverage(Z.coverage)}].concat(u.tableList("chainRuleSet",Z.chainRuleSets,function(K){return new u.Table("chainRuleSetTable",u.tableList("chainRule",K,function(X){let Y=u.ushortList("backtrackGlyph",X.backtrack,X.backtrack.length).concat(u.ushortList("inputGlyph",X.input,X.input.length+1)).concat(u.ushortList("lookaheadGlyph",X.lookahead,X.lookahead.length)).concat(u.ushortList("substitution",[],X.lookupRecords.length));for(let R=0;R<X.lookupRecords.length;R++){let O=X.lookupRecords[R];Y=Y.concat({name:"sequenceIndex"+R,type:"USHORT",value:O.sequenceIndex}).concat({name:"lookupListIndex"+R,type:"USHORT",value:O.lookupListIndex})}return new u.Table("chainRuleTable",Y)}))})));else if(Z.substFormat===2)H0.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(Z.substFormat===3){let W=[{name:"substFormat",type:"USHORT",value:Z.substFormat}];W.push({name:"backtrackGlyphCount",type:"USHORT",value:Z.backtrackCoverage.length});for(let X=0;X<Z.backtrackCoverage.length;X++){let Y=Z.backtrackCoverage[X];W.push({name:"backtrackCoverage"+X,type:"TABLE",value:new u.Coverage(Y)})}W.push({name:"inputGlyphCount",type:"USHORT",value:Z.inputCoverage.length});for(let X=0;X<Z.inputCoverage.length;X++){let Y=Z.inputCoverage[X];W.push({name:"inputCoverage"+X,type:"TABLE",value:new u.Coverage(Y)})}W.push({name:"lookaheadGlyphCount",type:"USHORT",value:Z.lookaheadCoverage.length});for(let X=0;X<Z.lookaheadCoverage.length;X++){let Y=Z.lookaheadCoverage[X];W.push({name:"lookaheadCoverage"+X,type:"TABLE",value:new u.Coverage(Y)})}W.push({name:"substitutionCount",type:"USHORT",value:Z.lookupRecords.length});for(let X=0;X<Z.lookupRecords.length;X++){let Y=Z.lookupRecords[X];W=W.concat({name:"sequenceIndex"+X,type:"USHORT",value:Y.sequenceIndex}).concat({name:"lookupListIndex"+X,type:"USHORT",value:Y.lookupListIndex})}return new u.Table("chainContextTable",W)}H0.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function jQ(H){return new u.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new u.ScriptList(H.scripts)},{name:"features",type:"TABLE",value:new u.FeatureList(H.features)},{name:"lookups",type:"TABLE",value:new u.LookupList(H.lookups,L2)}])}var I8={parse:kQ,make:jQ};function vQ(H,Z){let W=new n.Parser(H,Z),K=W.parseULong();H0.argument(K===1,"Unsupported META table version."),W.parseULong(),W.parseULong();let X=W.parseULong(),Y={};for(let R=0;R<X;R++){let O=W.parseTag(),A=W.parseULong(),P=W.parseULong();if(O==="appl"||O==="bild")continue;let D=j2.UTF8(H,Z+A,P);Y[O]=D}return Y}function hQ(H){let Z=Object.keys(H).length,W="",K=16+Z*12,X=new u.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:K},{name:"numTags",type:"ULONG",value:Z}]);for(let Y in H){let R=W.length;W+=H[Y],X.fields.push({name:"tag "+Y,type:"TAG",value:Y}),X.fields.push({name:"offset "+Y,type:"ULONG",value:K+R}),X.fields.push({name:"length "+Y,type:"ULONG",value:H[Y].length})}return X.fields.push({name:"stringPool",type:"CHARARRAY",value:W}),X}var T8={parse:vQ,make:hQ};function fQ(H,Z){let W=new v(H,Z),K=W.parseUShort();if(K!==0)console.warn("Only COLRv0 is currently fully supported. A subset of color glyphs might be available in this font if provided in the v0 format.");let X=W.parseUShort(),Y=W.parseOffset32(),R=W.parseOffset32(),O=W.parseUShort();W.relativeOffset=Y;let A=W.parseRecordList(X,{glyphID:v.uShort,firstLayerIndex:v.uShort,numLayers:v.uShort});W.relativeOffset=R;let P=W.parseRecordList(O,{glyphID:v.uShort,paletteIndex:v.uShort});return{version:K,baseGlyphRecords:A,layerRecords:P}}function bQ({version:H=0,baseGlyphRecords:Z=[],layerRecords:W=[]}){H0.argument(H===0,"Only COLRv0 supported.");let K=14,X=K+Z.length*6;return new u.Table("COLR",[{name:"version",type:"USHORT",value:H},{name:"numBaseGlyphRecords",type:"USHORT",value:Z.length},{name:"baseGlyphRecordsOffset",type:"ULONG",value:K},{name:"layerRecordsOffset",type:"ULONG",value:X},{name:"numLayerRecords",type:"USHORT",value:W.length},...Z.map((Y,R)=>[{name:"glyphID_"+R,type:"USHORT",value:Y.glyphID},{name:"firstLayerIndex_"+R,type:"USHORT",value:Y.firstLayerIndex},{name:"numLayers_"+R,type:"USHORT",value:Y.numLayers}]).flat(),...W.map((Y,R)=>[{name:"LayerGlyphID_"+R,type:"USHORT",value:Y.glyphID},{name:"paletteIndex_"+R,type:"USHORT",value:Y.paletteIndex}]).flat()])}var S8={parse:fQ,make:bQ};function yQ(H,Z){return[{name:"tag_"+H,type:"TAG",value:Z.tag},{name:"minValue_"+H,type:"FIXED",value:Z.minValue<<16},{name:"defaultValue_"+H,type:"FIXED",value:Z.defaultValue<<16},{name:"maxValue_"+H,type:"FIXED",value:Z.maxValue<<16},{name:"flags_"+H,type:"USHORT",value:0},{name:"nameID_"+H,type:"USHORT",value:Z.axisNameID}]}function xQ(H,Z,W){let K={},X=new n.Parser(H,Z);K.tag=X.parseTag(),K.minValue=X.parseFixed(),K.defaultValue=X.parseFixed(),K.maxValue=X.parseFixed(),X.skip("uShort",1);let Y=X.parseUShort();return K.axisNameID=Y,K.name=Y4(W,Y),K}function gQ(H,Z,W,K={}){let X=[{name:"nameID_"+H,type:"USHORT",value:Z.subfamilyNameID},{name:"flags_"+H,type:"USHORT",value:0}];for(let Y=0;Y<W.length;++Y){let R=W[Y].tag;X.push({name:"axis_"+H+" "+R,type:"FIXED",value:Z.coordinates[R]<<16})}if(K&&K.postScriptNameID)X.push({name:"postScriptNameID_",type:"USHORT",value:Z.postScriptNameID!==void 0?Z.postScriptNameID:65535});return X}function mQ(H,Z,W,K,X){let Y={},R=new n.Parser(H,Z),O=R.parseUShort();Y.subfamilyNameID=O,Y.name=Y4(K,O,[2,17]),R.skip("uShort",1),Y.coordinates={};for(let P=0;P<W.length;++P)Y.coordinates[W[P].tag]=R.parseFixed();if(R.relativeOffset===X)return Y.postScriptNameID=void 0,Y.postScriptName=void 0,Y;let A=R.parseUShort();return Y.postScriptNameID=A==65535?void 0:A,Y.postScriptName=Y.postScriptNameID!==void 0?Y4(K,A,[6]):"",Y}function pQ(H,Z){let W=new u.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:H.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:H.instances.length},{name:"instanceSize",type:"USHORT",value:4+H.axes.length*4}]);W.offsetToData=W.sizeOf();for(let X=0;X<H.axes.length;X++)W.fields=W.fields.concat(yQ(X,H.axes[X],Z));let K={};for(let X=0;X<H.instances.length;X++)if(H.instances[X].postScriptNameID!==void 0){W.instanceSize+=2,K.postScriptNameID=!0;break}for(let X=0;X<H.instances.length;X++)W.fields=W.fields.concat(gQ(X,H.instances[X],H.axes,K));return W}function uQ(H,Z,W){let K=new n.Parser(H,Z),X=K.parseULong();H0.argument(X===65536,"Unsupported fvar table version.");let Y=K.parseOffset16();K.skip("uShort",1);let R=K.parseUShort(),O=K.parseUShort(),A=K.parseUShort(),P=K.parseUShort(),D=[];for(let k=0;k<R;k++)D.push(xQ(H,Z+Y+k*O,W));let C=[],z=Z+Y+R*O;for(let k=0;k<A;k++)C.push(mQ(H,z+k*P,D,W,P));return{axes:D,instances:C}}var k8={make:pQ,parse:uQ},dQ={tag:v.tag,nameID:v.uShort,ordering:v.uShort},Q5=[,,,,,];Q5[1]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed()}},Q5[2]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),nominalValue:this.parseFixed(),rangeMinValue:this.parseFixed(),rangeMaxValue:this.parseFixed()}},Q5[3]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed(),linkedValue:this.parseFixed()}},Q5[4]=function(){let Z=this.parseUShort();return{flags:this.parseUShort(),valueNameID:this.parseUShort(),axisValues:this.parseList(Z,function(){return{axisIndex:this.parseUShort(),value:this.parseFixed()}})}};function lQ(){let H=this.parseUShort(),Z=Q5[H],W={format:H};if(Z===void 0)return console.warn(`Unknown axis value table format ${H}`),W;return Object.assign(W,this.parseStruct(Z.bind(this)))}function cQ(H,Z,W){if(!Z)Z=0;let K=new n.Parser(H,Z),X=K.parseUShort(),Y=K.parseUShort();if(X!==1)console.warn(`Unsupported STAT table version ${X}.${Y}`);let R=[X,Y],O=K.parseUShort(),A=K.parseUShort(),P=K.parseOffset32(),D=K.parseUShort(),C=K.parseOffset32(),z=X>1||Y>0?K.parseUShort():void 0;if(W!==void 0)H0.argument(A>=W.axes.length,"STAT axis count must be greater than or equal to fvar axis count");if(D>0)H0.argument(A>=0,"STAT axis count must be greater than 0 if STAT axis value count is greater than 0");let k=[];for(let g=0;g<A;g++)K.offset=Z+P,K.relativeOffset=g*O,k.push(K.parseStruct(dQ));K.offset=Z,K.relativeOffset=C;let S=K.parseUShortList(D),j=[];for(let g=0;g<D;g++)K.offset=Z+C,K.relativeOffset=S[g],j.push(lQ.apply(K));return{version:R,axes:k,values:j,elidedFallbackNameID:z}}var H5=[,,,,,];H5[1]=function(Z,W){return[{name:`format${Z}`,type:"USHORT",value:1},{name:`axisIndex${Z}`,type:"USHORT",value:W.axisIndex},{name:`flags${Z}`,type:"USHORT",value:W.flags},{name:`valueNameID${Z}`,type:"USHORT",value:W.valueNameID},{name:`value${Z}`,type:"FLOAT",value:W.value}]},H5[2]=function(Z,W){return[{name:`format${Z}`,type:"USHORT",value:2},{name:`axisIndex${Z}`,type:"USHORT",value:W.axisIndex},{name:`flags${Z}`,type:"USHORT",value:W.flags},{name:`valueNameID${Z}`,type:"USHORT",value:W.valueNameID},{name:`nominalValue${Z}`,type:"FLOAT",value:W.nominalValue},{name:`rangeMinValue${Z}`,type:"FLOAT",value:W.rangeMinValue},{name:`rangeMaxValue${Z}`,type:"FLOAT",value:W.rangeMaxValue}]},H5[3]=function(Z,W){return[{name:`format${Z}`,type:"USHORT",value:3},{name:`axisIndex${Z}`,type:"USHORT",value:W.axisIndex},{name:`flags${Z}`,type:"USHORT",value:W.flags},{name:`valueNameID${Z}`,type:"USHORT",value:W.valueNameID},{name:`value${Z}`,type:"FLOAT",value:W.value},{name:`linkedValue${Z}`,type:"FLOAT",value:W.linkedValue}]},H5[4]=function(Z,W){let K=[{name:`format${Z}`,type:"USHORT",value:4},{name:`axisCount${Z}`,type:"USHORT",value:W.axisValues.length},{name:`flags${Z}`,type:"USHORT",value:W.flags},{name:`valueNameID${Z}`,type:"USHORT",value:W.valueNameID}];for(let X=0;X<W.axisValues.length;X++)K=K.concat([{name:`format${Z}axisIndex${X}`,type:"USHORT",value:W.axisValues[X].axisIndex},{name:`format${Z}value${X}`,type:"FLOAT",value:W.axisValues[X].value}]);return K};function iQ(H,Z){return new u.Record("axisRecord_"+H,[{name:"axisTag_"+H,type:"TAG",value:Z.tag},{name:"axisNameID_"+H,type:"USHORT",value:Z.nameID},{name:"axisOrdering_"+H,type:"USHORT",value:Z.ordering}])}function nQ(H,Z){let W=Z.format,K=H5[W];H0.argument(K!==void 0,`Unknown axis value table format ${W}`);let X=K(H,Z);return new u.Table("axisValueTable_"+H,X)}function sQ(H){let Z=new u.Table("STAT",[{name:"majorVersion",type:"USHORT",value:1},{name:"minorVersion",type:"USHORT",value:2},{name:"designAxisSize",type:"USHORT",value:8},{name:"designAxisCount",type:"USHORT",value:H.axes.length},{name:"designAxesOffset",type:"ULONG",value:0},{name:"axisValueCount",type:"USHORT",value:H.values.length},{name:"offsetToAxisValueOffsets",type:"ULONG",value:0},{name:"elidedFallbackNameID",type:"USHORT",value:H.elidedFallbackNameID}]);Z.designAxesOffset=Z.offsetToAxisValueOffsets=Z.sizeOf();for(let Y=0;Y<H.axes.length;Y++){let R=iQ(Y,H.axes[Y]);Z.offsetToAxisValueOffsets+=R.sizeOf(),Z.fields=Z.fields.concat(R.fields)}let W=[],K=[],X=H.values.length*2;for(let Y=0;Y<H.values.length;Y++){let R=nQ(Y,H.values[Y]);W.push({name:"offset_"+Y,type:"USHORT",value:X}),X+=R.sizeOf(),K=K.concat(R.fields)}return Z.fields=Z.fields.concat(W),Z.fields=Z.fields.concat(K),Z}var j8={make:sQ,parse:cQ};function oQ(H,Z){return new u.Record("axisValueMap_"+H,[{name:"fromCoordinate_"+H,type:"F2DOT14",value:Z.fromCoordinate},{name:"toCoordinate_"+H,type:"F2DOT14",value:Z.toCoordinate}])}function rQ(H,Z){let W=new u.Record("segmentMap_"+H,[{name:"positionMapCount_"+H,type:"USHORT",value:Z.axisValueMaps.length}]),K=[];for(let X=0;X<Z.axisValueMaps.length;X++){let Y=oQ(`${H}_${X}`,Z.axisValueMaps[X]);K=K.concat(Y.fields)}return W.fields=W.fields.concat(K),W}function aQ(H,Z){H0.argument(H.axisSegmentMaps.length===Z.axes.length,"avar axis count must correspond to fvar axis count");let W=new u.Table("avar",[{name:"majorVersion",type:"USHORT",value:1},{name:"minorVersion",type:"USHORT",value:0},{name:"reserved",type:"USHORT",value:0},{name:"axisCount",type:"USHORT",value:H.axisSegmentMaps.length}]);for(let K=0;K<H.axisSegmentMaps.length;K++){let X=rQ(K,H.axisSegmentMaps[K]);W.fields=W.fields.concat(X.fields)}return W}function tQ(H,Z,W){if(!Z)Z=0;let K=new v(H,Z),X=K.parseUShort(),Y=K.parseUShort();if(X!==1)console.warn(`Unsupported avar table version ${X}.${Y}`);K.skip("uShort",1);let R=K.parseUShort();H0.argument(R===W.axes.length,"avar axis count must correspond to fvar axis count");let O=[];for(let A=0;A<R;A++){let P=[],D=K.parseUShort();for(let C=0;C<D;C++){let z=K.parseF2Dot14(),k=K.parseF2Dot14();P.push({fromCoordinate:z,toCoordinate:k})}O.push({axisValueMaps:P})}return{version:[X,Y],axisSegmentMaps:O}}var v8={make:aQ,parse:tQ};function eQ(H,Z,W,K){let X=new n.Parser(H,Z),Y=X.parseTupleVariationStore(X.relativeOffset,W.axes.length,"cvar",K),R=X.parseUShort(),O=X.parseUShort();if(R!==1)console.warn(`Unsupported cvar table version ${R}.${O}`);return{version:[R,O],...Y}}function JH(){console.warn("Writing of cvar tables is not yet supported.")}var h8={make:JH,parse:eQ};function QH(H,Z,W,K){let X=new n.Parser(H,Z),Y=X.parseUShort(),R=X.parseUShort();if(Y!==1)console.warn(`Unsupported gvar table version ${Y}.${R}`);let O=X.parseUShort();if(O!==W.axes.length)console.warn(`axisCount ${O} in gvar table does not match the number of axes ${W.axes.length} in the fvar table!`);let A=X.parseUShort(),P=X.parsePointer32(function(){return this.parseTupleRecords(A,O)}),D=X.parseTupleVariationStoreList(O,"gvar",K);return{version:[Y,R],sharedTuples:P,glyphVariations:D}}function HH(){console.warn("Writing of gvar tables is not yet supported.")}var f8={make:HH,parse:QH};function $H(H,Z){let W={},K=new n.Parser(H,Z);W.version=K.parseUShort(),H0.argument(W.version<=1,"Unsupported gasp table version."),W.numRanges=K.parseUShort(),W.gaspRanges=[];for(let X=0;X<W.numRanges;X++)W.gaspRanges[X]={rangeMaxPPEM:K.parseUShort(),rangeGaspBehavior:K.parseUShort()};return W}function ZH(H){let Z=new u.Table("gasp",[{name:"version",type:"USHORT",value:1},{name:"numRanges",type:"USHORT",value:H.numRanges}]);for(let W in H.gaspRanges)Z.fields.push({name:"rangeMaxPPEM",type:"USHORT",value:H.gaspRanges[W].rangeMaxPPEM}),Z.fields.push({name:"rangeGaspBehavior",type:"USHORT",value:H.gaspRanges[W].rangeGaspBehavior});return Z}var b8={parse:$H,make:ZH};function WH(H,Z){let W=new Map,K=H.buffer,X=new v(H,Z);if(X.parseUShort()!==0)return W;X.relativeOffset=X.parseOffset32();let R=H.byteOffset+Z+X.relativeOffset,O=X.parseUShort(),A=new Map;for(let P=0;P<O;P++){let D=X.parseUShort(),C=X.parseUShort(),z=R+X.parseOffset32(),k=X.parseULong(),S=A.get(z);if(S===void 0)S=new Uint8Array(K,z,k),A.set(z,S);for(let j=D;j<=C;j++)W.set(j,S)}return W}function KH(H){let Z=Array.from(H.keys()).sort(),W=[],K=[],X=new Map,Y=0,R={endGlyphID:null};for(let z=0,k=Z.length;z<k;z++){let S=Z[z],j=H.get(S),g=X.get(j);if(g===void 0)g=Y,K.push(j),X.set(j,g),Y+=j.byteLength;if(S-1===R.endGlyphID&&g===R.svgDocOffset)R.endGlyphID=S;else R={startGlyphID:S,endGlyphID:S,svgDocOffset:g,svgDocLength:j.byteLength},W.push(R)}let O=W.length,A=K.length,P=2+O*12,D=Array(4+O*4+A),C=0;D[C++]={name:"version",type:"USHORT",value:0},D[C++]={name:"svgDocumentListOffset",type:"ULONG",value:10},D[C++]={name:"reserved",type:"ULONG",value:0},D[C++]={name:"numEntries",type:"USHORT",value:O};for(let z=0;z<O;z++){let k="documentRecord_"+z,{startGlyphID:S,endGlyphID:j,svgDocOffset:g,svgDocLength:$0}=W[z];D[C++]={name:k+"_startGlyphID",type:"USHORT",value:S},D[C++]={name:k+"_endGlyphID",type:"USHORT",value:j},D[C++]={name:k+"_svgDocOffset",type:"ULONG",value:P+g},D[C++]={name:k+"_svgDocLength",type:"ULONG",value:$0}}for(let z=0;z<A;z++)D[C++]={name:"svgDoc_"+z,type:"LITERAL",value:K[z]};return new u.Table("SVG ",D)}var y8={make:KH,parse:WH};function x8(H){return Math.log(H)/Math.log(2)|0}function N6(H){while(H.length%4!==0)H.push(0);let Z=0;for(let W=0;W<H.length;W+=4)Z+=(H[W]<<24)+(H[W+1]<<16)+(H[W+2]<<8)+H[W+3];return Z%=Math.pow(2,32),Z}function g8(H,Z,W,K){return new u.Record("Table Record",[{name:"tag",type:"TAG",value:H!==void 0?H:""},{name:"checkSum",type:"ULONG",value:Z!==void 0?Z:0},{name:"offset",type:"ULONG",value:W!==void 0?W:0},{name:"length",type:"ULONG",value:K!==void 0?K:0}])}function m8(H){let Z=new u.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);Z.tables=H,Z.numTables=H.length;let W=Math.pow(2,x8(Z.numTables));Z.searchRange=16*W,Z.entrySelector=x8(W),Z.rangeShift=Z.numTables*16-Z.searchRange;let K=[],X=[],Y=Z.sizeOf()+g8().sizeOf()*Z.numTables;while(Y%4!==0)Y+=1,X.push({name:"padding",type:"BYTE",value:0});for(let R=0;R<H.length;R+=1){let O=H[R];H0.argument(O.tableName.length===4,"Table name"+O.tableName+" is invalid.");let A=O.sizeOf(),P=g8(O.tableName,N6(O.encode()),Y,A);K.push({name:P.tag+" Table Record",type:"RECORD",value:P}),X.push({name:O.tableName+" table",type:"RECORD",value:O}),Y+=A,H0.argument(!isNaN(Y),"Something went wrong calculating the offset.");while(Y%4!==0)Y+=1,X.push({name:"padding",type:"BYTE",value:0})}return K.sort(function(R,O){if(R.value.tag>O.value.tag)return 1;else return-1}),Z.fields=Z.fields.concat(K),Z.fields=Z.fields.concat(X),Z}function p8(H,Z,W){for(let K=0;K<Z.length;K+=1){let X=H.charToGlyphIndex(Z[K]);if(X>0)return H.glyphs.get(X).getMetrics()}return W}function UH(H){let Z=0;for(let W=0;W<H.length;W+=1)Z+=H[W];return Z/H.length}function XH(H){let Z=[],W=[],K=[],X=[],Y=[],R=[],O=[],A,P=0,D=0,C=0,z=0,k=0;for(let C0=0;C0<H.glyphs.length;C0+=1){let K1=H.glyphs.get(C0),P1=K1.unicode|0;if(isNaN(K1.advanceWidth))throw Error("Glyph "+K1.name+" ("+C0+"): advanceWidth is not a number.");if(A>P1||A===void 0){if(P1>0)A=P1}if(P<P1)P=P1;let h1=A6.getUnicodeRange(P1);if(h1<32)D|=1<<h1;else if(h1<64)C|=1<<h1-32;else if(h1<96)z|=1<<h1-64;else if(h1<123)k|=1<<h1-96;else throw Error("Unicode ranges bits > 123 are reserved for internal usage");if(K1.name===".notdef")continue;let a1=K1.getMetrics();Z.push(a1.xMin),W.push(a1.yMin),K.push(a1.xMax),X.push(a1.yMax),R.push(a1.leftSideBearing),O.push(a1.rightSideBearing),Y.push(K1.advanceWidth)}let S={xMin:Math.min.apply(null,Z),yMin:Math.min.apply(null,W),xMax:Math.max.apply(null,K),yMax:Math.max.apply(null,X),advanceWidthMax:Math.max.apply(null,Y),advanceWidthAvg:UH(Y),minLeftSideBearing:Math.min.apply(null,R),maxLeftSideBearing:Math.max.apply(null,R),minRightSideBearing:Math.min.apply(null,O)};S.ascender=H.ascender,S.descender=H.descender;let j=0;if(H.weightClass>=600)j|=H.macStyleValues.BOLD;if(H.italicAngle<0)j|=H.macStyleValues.ITALIC;let g=B8.make({flags:3,unitsPerEm:H.unitsPerEm,xMin:S.xMin,yMin:S.yMin,xMax:S.xMax,yMax:S.yMax,lowestRecPPEM:3,macStyle:j,createdTimestamp:H.createdTimestamp}),$0=V8.make({ascender:S.ascender,descender:S.descender,advanceWidthMax:S.advanceWidthMax,minLeftSideBearing:S.minLeftSideBearing,minRightSideBearing:S.minRightSideBearing,xMaxExtent:S.maxLeftSideBearing+(S.xMax-S.xMin),numberOfHMetrics:H.glyphs.length}),J0=w8.make(H.glyphs.length),U0=A6.make(Object.assign({xAvgCharWidth:Math.round(S.advanceWidthAvg),usFirstCharIndex:A,usLastCharIndex:P,ulUnicodeRange1:D,ulUnicodeRange2:C,ulUnicodeRange3:z,ulUnicodeRange4:k,sTypoAscender:S.ascender,sTypoDescender:S.descender,sTypoLineGap:0,usWinAscent:S.yMax,usWinDescent:Math.abs(S.yMin),ulCodePageRange1:1,sxHeight:p8(H,"xyvw",{yMax:Math.round(S.ascender/2)}).yMax,sCapHeight:p8(H,"HIKLEFJMNTZBDPRAGOQSUVWXY",S).yMax,usDefaultChar:H.hasChar(" ")?32:0,usBreakChar:H.hasChar(" ")?32:0},H.tables.os2)),O0=_8.make(H.glyphs),M0=$8.make(H.glyphs),_0=H.getEnglishName("fontFamily"),z0=H.getEnglishName("fontSubfamily"),y0=_0+" "+z0,j1=H.getEnglishName("postScriptName");if(!j1)j1=_0.replace(/\s/g,"")+"-"+z0;let q0={};for(let C0 in H.names)q0[C0]=H.names[C0];q0.unicode=q0.unicode||{},q0.macintosh=q0.macintosh||{},q0.windows=q0.windows||{};let R1=H.names.unicode||{},t0=H.names.macintosh||{},Z0=H.names.windows||{};for(let C0 in q0){if(q0[C0]=q0[C0]||{},!q0[C0].uniqueID){let K1=H.getEnglishName("manufacturer")||"";q0[C0].uniqueID={en:`${K1}: ${y0}`}}if(!q0[C0].postScriptName)q0[C0].postScriptName={en:j1}}if(!q0.unicode.preferredFamily)q0.unicode.preferredFamily=R1.fontFamily||t0.fontFamily||Z0.fontFamily;if(!q0.macintosh.preferredFamily)q0.macintosh.preferredFamily=t0.fontFamily||R1.fontFamily||Z0.fontFamily;if(!q0.windows.preferredFamily)q0.windows.preferredFamily=Z0.fontFamily||R1.fontFamily||t0.fontFamily;if(!q0.unicode.preferredSubfamily)q0.unicode.preferredSubfamily=R1.fontSubfamily||t0.fontSubfamily||Z0.fontSubfamily;if(!q0.macintosh.preferredSubfamily)q0.macintosh.preferredSubfamily=t0.fontSubfamily||R1.fontSubfamily||Z0.fontSubfamily;if(!q0.windows.preferredSubfamily)q0.windows.preferredSubfamily=Z0.fontSubfamily||R1.fontSubfamily||t0.fontSubfamily;let a=[],e=H8.make(q0,a),i0=a.length>0?z8.make(a):void 0,Y2=C8.make(H),V4=O6.make(H.glyphs,{version:H.getEnglishName("version"),fullName:y0,familyName:_0,weightName:z0,postScriptName:j1,unitsPerEm:H.unitsPerEm,fontBBox:[0,S.yMin,S.ascender,S.advanceWidthMax],topDict:H.tables.cff&&H.tables.cff.topDict||{}}),V2=H.metas&&Object.keys(H.metas).length>0?T8.make(H.metas):void 0,v1=[g,$0,J0,U0,e,M0,Y2,V4,O0];if(i0)v1.push(i0);let e0={gsub:I8,cpal:Y8,colr:S8,stat:j8,avar:v8,cvar:h8,fvar:k8,gvar:f8,gasp:b8,svg:y8},D1={avar:[H.tables.fvar],fvar:[H.names]};for(let C0 in e0){let K1=H.tables[C0];if(K1){let P1=e0[C0].make.call(H,K1,...D1[C0]||[]);if(P1)v1.push(P1)}}if(V2)v1.push(V2);let n0=m8(v1),E1=n0.encode(),J1=N6(E1),Q1=n0.fields,b0=!1;for(let C0=0;C0<Q1.length;C0+=1)if(Q1[C0].name==="head table"){Q1[C0].value.checkSumAdjustment=2981146554-J1,b0=!0;break}if(!b0)throw Error("Could not find head table with checkSum to adjust.");return n0}var YH={make:m8,fontToTable:XH,computeCheckSum:N6};function D6(H,Z){let W=0,K=H.length-1;while(W<=K){let X=W+K>>>1,Y=H[X].tag;if(Y===Z)return X;else if(Y<Z)W=X+1;else K=X-1}return-W-1}function u8(H,Z){let W=0,K=H.length-1;while(W<=K){let X=W+K>>>1,Y=H[X];if(Y===Z)return X;else if(Y<Z)W=X+1;else K=X-1}return-W-1}function d8(H,Z){let W,K=0,X=H.length-1;while(K<=X){let Y=K+X>>>1;W=H[Y];let R=W.start;if(R===Z)return W;else if(R<Z)K=Y+1;else X=Y-1}if(K>0){if(W=H[K-1],Z>W.end)return 0;return W}}function l8(H,Z){this.font=H,this.tableName=Z}l8.prototype={searchTag:D6,binSearch:u8,getTable:function(H){let Z=this.font.tables[this.tableName];if(!Z&&H)Z=this.font.tables[this.tableName]=this.createDefaultTable();return Z},getScriptNames:function(){let H=this.getTable();if(!H)return[];return H.scripts.map(function(Z){return Z.tag})},getDefaultScriptName:function(){let H=this.getTable();if(!H)return;let Z=!1;for(let W=0;W<H.scripts.length;W++){let K=H.scripts[W].tag;if(K==="DFLT")return K;if(K==="latn")Z=!0}if(Z)return"latn"},getScriptTable:function(H,Z){let W=this.getTable(Z);if(W){H=H||"DFLT";let K=W.scripts,X=D6(W.scripts,H);if(X>=0)return K[X].script;else if(Z){let Y={tag:H,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return K.splice(-1-X,0,Y),Y.script}}},getLangSysTable:function(H,Z,W){let K=this.getScriptTable(H,W);if(K){if(!Z||Z==="dflt"||Z==="DFLT")return K.defaultLangSys;let X=D6(K.langSysRecords,Z);if(X>=0)return K.langSysRecords[X].langSys;else if(W){let Y={tag:Z,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return K.langSysRecords.splice(-1-X,0,Y),Y.langSys}}},getFeatureTable:function(H,Z,W,K){let X=this.getLangSysTable(H,Z,K);if(X){let Y,R=X.featureIndexes,O=this.font.tables[this.tableName].features;for(let A=0;A<R.length;A++)if(Y=O[R[A]],Y.tag===W)return Y.feature;if(K){let A=O.length;return H0.assert(A===0||W>=O[A-1].tag,"Features must be added in alphabetical order."),Y={tag:W,feature:{params:0,lookupListIndexes:[]}},O.push(Y),R.push(A),Y.feature}}},getLookupTables:function(H,Z,W,K,X){let Y=this.getFeatureTable(H,Z,W,X),R=[];if(Y){let O,A=Y.lookupListIndexes,P=this.font.tables[this.tableName].lookups;for(let D=0;D<A.length;D++)if(O=P[A[D]],O.lookupType===K)R.push(O);if(R.length===0&&X){O={lookupType:K,lookupFlag:0,subtables:[],markFilteringSet:void 0};let D=P.length;return P.push(O),A.push(D),[O]}}return R},getGlyphClass:function(H,Z){switch(H.format){case 1:{if(H.startGlyph<=Z&&Z<H.startGlyph+H.classes.length)return H.classes[Z-H.startGlyph];return 0}case 2:{let W=d8(H.ranges,Z);return W?W.classId:0}}},getCoverageIndex:function(H,Z){switch(H.format){case 1:{let W=u8(H.glyphs,Z);return W>=0?W:-1}case 2:{let W=d8(H.ranges,Z);return W?W.index+Z-W.start:-1}}},expandCoverage:function(H){if(H.format===1)return H.glyphs;else{let Z=[],W=H.ranges;for(let K=0;K<W.length;K++){let X=W[K],Y=X.start,R=X.end;for(let O=Y;O<=R;O++)Z.push(O)}return Z}}};var O4=l8;function $5(H){O4.call(this,H,"gpos")}$5.prototype=O4.prototype,$5.prototype.init=function(){let H=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(H)},$5.prototype.getKerningValue=function(H,Z,W){for(let K=0;K<H.length;K++){let X=H[K].subtables;for(let Y=0;Y<X.length;Y++){let R=X[Y],O=this.getCoverageIndex(R.coverage,Z);if(O<0)continue;switch(R.posFormat){case 1:{let A=R.pairSets[O];for(let P=0;P<A.length;P++){let D=A[P];if(D.secondGlyph===W)return D.value1&&D.value1.xAdvance||0}break}case 2:{let A=this.getGlyphClass(R.classDef1,Z),P=this.getGlyphClass(R.classDef2,W),D=R.classRecords[A][P];return D.value1&&D.value1.xAdvance||0}}}}return 0},$5.prototype.getKerningTables=function(H,Z){if(this.font.tables.gpos)return this.getLookupTables(H,Z,"kern",2)};var FH=$5;function GH(H,Z){let W=H.length;if(W!==Z.length)return!1;for(let K=0;K<W;K++)if(H[K]!==Z[K])return!1;return!0}function RH(H,Z,W){let K=0,X=H.length-1,Y=null;while(K<=X){let R=Math.floor((K+X)/2),O=H[R],A=O[Z];if(A<W)K=R+1;else if(A>W)X=R-1;else{Y=O;break}}return Y}function EH(H,Z,W){let K=0,X=H.length-1;while(K<=X){let Y=Math.floor((K+X)/2),R=H[Y];if(R[Z]<W)K=Y+1;else if(R[Z]>W)X=Y-1;else return Y}return-1}function OH(H,Z,W){let K=0,X=H.length,Y=(R,O)=>R[Z]-O[Z];while(K<X){let R=K+X>>>1;if(Y(H[R],W)<0)K=R+1;else X=R}return H.splice(K,0,W),K}function c8(H){return H[0]===31&&H[1]===139&&H[2]===8}function qH(H){let Z=new DataView(H.buffer,H.byteOffset,H.byteLength),W=10,K=H.byteLength-8,X=Z.getInt8(3);if(X&4)W+=2+Z.getUint16(W,!0);if(X&8){while(W<K)if(H[W++]===0)break}if(X&16){while(W<K)if(H[W++]===0)break}if(X&2)W+=2;if(W>=K)throw Error("Can't find compressed blocks");let Y=Z.getUint32(Z.byteLength-4,!0);return Y1(H.subarray(W,K),new Uint8Array(Y))}function i8(H){return{x:H.x,y:H.y,onCurve:H.onCurve,lastPointOfContour:H.lastPointOfContour}}function AH(H){return{glyphIndex:H.glyphIndex,xScale:H.xScale,scale01:H.scale01,scale10:H.scale10,yScale:H.yScale,dx:H.dx,dy:H.dy}}function F1(H){O4.call(this,H,"gsub")}function P6(H,Z,W){let K=H.subtables;for(let X=0;X<K.length;X++){let Y=K[X];if(Y.substFormat===Z)return Y}if(W)return K.push(W),W;return}F1.prototype=O4.prototype,F1.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}},F1.prototype.getSingle=function(H,Z,W){let K=[],X=this.getLookupTables(Z,W,H,1);for(let Y=0;Y<X.length;Y++){let R=X[Y].subtables;for(let O=0;O<R.length;O++){let A=R[O],P=this.expandCoverage(A.coverage),D;if(A.substFormat===1){let C=A.deltaGlyphId;for(D=0;D<P.length;D++){let z=P[D];K.push({sub:z,by:z+C})}}else{let C=A.substitute;for(D=0;D<P.length;D++)K.push({sub:P[D],by:C[D]})}}}return K},F1.prototype.getMultiple=function(H,Z,W){let K=[],X=this.getLookupTables(Z,W,H,2);for(let Y=0;Y<X.length;Y++){let R=X[Y].subtables;for(let O=0;O<R.length;O++){let A=R[O],P=this.expandCoverage(A.coverage),D;for(D=0;D<P.length;D++){let C=P[D],z=A.sequences[D];K.push({sub:C,by:z})}}}return K},F1.prototype.getAlternates=function(H,Z,W){let K=[],X=this.getLookupTables(Z,W,H,3);for(let Y=0;Y<X.length;Y++){let R=X[Y].subtables;for(let O=0;O<R.length;O++){let A=R[O],P=this.expandCoverage(A.coverage),D=A.alternateSets;for(let C=0;C<P.length;C++)K.push({sub:P[C],by:D[C]})}}return K},F1.prototype.getLigatures=function(H,Z,W){let K=[],X=this.getLookupTables(Z,W,H,4);for(let Y=0;Y<X.length;Y++){let R=X[Y].subtables;for(let O=0;O<R.length;O++){let A=R[O],P=this.expandCoverage(A.coverage),D=A.ligatureSets;for(let C=0;C<P.length;C++){let z=P[C],k=D[C];for(let S=0;S<k.length;S++){let j=k[S];K.push({sub:[z].concat(j.components),by:j.ligGlyph})}}}}return K},F1.prototype.addSingle=function(H,Z,W,K){let X=this.getLookupTables(W,K,H,1,!0)[0],Y=P6(X,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});H0.assert(Y.coverage.format===1,"Single: unable to modify coverage table format "+Y.coverage.format);let R=Z.sub,O=this.binSearch(Y.coverage.glyphs,R);if(O<0)O=-1-O,Y.coverage.glyphs.splice(O,0,R),Y.substitute.splice(O,0,0);Y.substitute[O]=Z.by},F1.prototype.addMultiple=function(H,Z,W,K){H0.assert(Z.by instanceof Array&&Z.by.length>1,'Multiple: "by" must be an array of two or more ids');let X=this.getLookupTables(W,K,H,2,!0)[0],Y=P6(X,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});H0.assert(Y.coverage.format===1,"Multiple: unable to modify coverage table format "+Y.coverage.format);let R=Z.sub,O=this.binSearch(Y.coverage.glyphs,R);if(O<0)O=-1-O,Y.coverage.glyphs.splice(O,0,R),Y.sequences.splice(O,0,0);Y.sequences[O]=Z.by},F1.prototype.addAlternate=function(H,Z,W,K){let X=this.getLookupTables(W,K,H,3,!0)[0],Y=P6(X,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});H0.assert(Y.coverage.format===1,"Alternate: unable to modify coverage table format "+Y.coverage.format);let R=Z.sub,O=this.binSearch(Y.coverage.glyphs,R);if(O<0)O=-1-O,Y.coverage.glyphs.splice(O,0,R),Y.alternateSets.splice(O,0,0);Y.alternateSets[O]=Z.by},F1.prototype.addLigature=function(H,Z,W,K){let X=this.getLookupTables(W,K,H,4,!0)[0],Y=X.subtables[0];if(!Y)Y={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},X.subtables[0]=Y;H0.assert(Y.coverage.format===1,"Ligature: unable to modify coverage table format "+Y.coverage.format);let R=Z.sub[0],O=Z.sub.slice(1),A={ligGlyph:Z.by,components:O},P=this.binSearch(Y.coverage.glyphs,R);if(P>=0){let D=Y.ligatureSets[P];for(let C=0;C<D.length;C++)if(GH(D[C].components,O))return;D.push(A)}else P=-1-P,Y.coverage.glyphs.splice(P,0,R),Y.ligatureSets.splice(P,0,[A])},F1.prototype.getFeature=function(H,Z,W){if(/ss\d\d/.test(H))return this.getSingle(H,Z,W);switch(H){case"aalt":case"salt":return this.getSingle(H,Z,W).concat(this.getAlternates(H,Z,W));case"dlig":case"liga":case"rlig":return this.getLigatures(H,Z,W);case"ccmp":return this.getMultiple(H,Z,W).concat(this.getLigatures(H,Z,W));case"stch":return this.getMultiple(H,Z,W)}return},F1.prototype.add=function(H,Z,W,K){if(/ss\d\d/.test(H))return this.addSingle(H,Z,W,K);switch(H){case"aalt":case"salt":if(typeof Z.by==="number")return this.addSingle(H,Z,W,K);return this.addAlternate(H,Z,W,K);case"dlig":case"liga":case"rlig":return this.addLigature(H,Z,W,K);case"ccmp":if(Z.by instanceof Array)return this.addMultiple(H,Z,W,K);return this.addLigature(H,Z,W,K)}return};var NH=F1,n8=class{constructor(H){this.defaultValue=255,this.font=H}cpal(){if(this.font.tables&&this.font.tables.cpal)return this.font.tables.cpal;return!1}getAll(H){let Z=[],W=this.cpal();if(!W)return Z;for(let K=0;K<W.colorRecordIndices.length;K++){let X=W.colorRecordIndices[K],Y=[];for(let R=X;R<X+W.numPaletteEntries;R++)Y.push(f2(W.colorRecords[R],H||"hexa"));Z.push(Y)}return Z}toCPALcolor(H){if(Array.isArray(H))return H.map((Z)=>G4(Z,"raw"));return G4(H,"raw")}fillPalette(H,Z=[],W=this.cpal().numPaletteEntries){return H=Number.isInteger(H)?this.get(H,"raw"):H,Object.assign(Array(W).fill(this.defaultValue),this.toCPALcolor(H).concat(this.toCPALcolor(Z)))}extend(H){if(this.ensureCPAL(Array(H).fill(this.defaultValue)))return;let Z=this.cpal(),W=Z.numPaletteEntries+H,K=this.getAll().map((X)=>this.fillPalette(X,[],W));Z.numPaletteEntries=W,Z.colorRecords=this.toCPALcolor(K.flat()),this.updateIndices()}get(H,Z="hexa"){return this.getAll(Z)[H]||null}getColor(H,Z=0,W="hexa"){return X6(this.font,H,Z,W)}setColor(H,Z,W=0){H=parseInt(H),W=parseInt(W);let K=this.getAll("raw"),X=K[W];if(!X)throw Error(`paletteIndex ${W} out of range`);let Y=this.cpal(),R=Y.numPaletteEntries;if(!Array.isArray(Z))Z=[Z];if(Z.length+H>R)this.extend(Z.length+H-R),K=this.getAll("raw"),X=K[W];for(let O=0;O<Z.length;O++)X[O+H]=this.toCPALcolor(Z[O]);Y.colorRecords=K.flat(),this.updateIndices()}add(H){if(this.ensureCPAL(H))return;let Z=this.cpal(),W=Z.numPaletteEntries;if(H&&H.length){if(H=this.toCPALcolor(H),H.length>W)this.extend(H.length-W);else if(H.length<W)H=this.fillPalette(H);Z.colorRecordIndices.push(Z.colorRecords.length),Z.colorRecords.push(...H)}else Z.colorRecordIndices.push(Z.colorRecords.length),Z.colorRecords.push(...Array(W).fill(this.defaultValue))}delete(H){let Z=this.getAll("raw");delete Z[H];let W=this.cpal();W.colorRecordIndices.pop(),W.colorRecords=Z.flat()}deleteColor(H,Z){if(H===Z)throw Error("replacementIndex cannot be the same as colorIndex");let W=this.cpal(),K=this.getAll("raw"),X=[];if(Z>W.numPaletteEntries-1)throw Error(`Replacement index out of range: numPaletteEntries after deletion: ${W.numPaletteEntries-1}, replacementIndex: ${Z})`);for(let O=0;O<K.length;O++){let P=K[O].filter((D,C)=>C!==H);X.push(P)}let Y=this.font.tables.colr;if(Y){let O=Y.layerRecords;for(let A=0;A<O.length;A++){let P=O[A].paletteIndex;if(P>H)O[A].paletteIndex-=1;else if(P===H){let D=0;for(let C=0;C<K.length;C++)if(Z>H&&Z<=H+K[C].length){D++;break}O[A].paletteIndex=Z-D}}this.font.tables.colr={...Y,layerRecords:O}}let R=X.flat();for(let O=0;O<K.length;O++)W.colorRecordIndices[O]-=O;W.numPaletteEntries=Math.max(0,W.numPaletteEntries-1),W.colorRecords=this.toCPALcolor(R)}ensureCPAL(H){if(!this.cpal()){if(!H||!H.length)H=[this.defaultValue];else H=this.toCPALcolor(H);return this.font.tables.cpal={version:0,numPaletteEntries:H.length,colorRecords:H,colorRecordIndices:[0]},!0}return!1}updateIndices(){let H=this.cpal(),Z=Math.ceil(H.colorRecords.length/H.numPaletteEntries);H.colorRecordIndices=[];for(let W=0;W<Z;W++)H.colorRecordIndices.push(W*H.numPaletteEntries)}},DH=class{constructor(H){this.font=H}ensureCOLR(){if(!this.font.tables.colr)this.font.tables.colr={version:0,baseGlyphRecords:[],layerRecords:[]};return this.font}get(H){let Z=this.font,W=[],K=Z.tables.colr,X=Z.tables.cpal;if(!K||!X)return W;let Y=RH(K.baseGlyphRecords,"glyphID",H);if(!Y)return W;let{firstLayerIndex:R,numLayers:O}=Y;for(let A=0;A<O;A++){let P=K.layerRecords[R+A];W.push({glyph:Z.glyphs.get(P.glyphID),paletteIndex:P.paletteIndex})}return W}add(H,Z,W){let K=this.get(H);if(Z=Array.isArray(Z)?Z:[Z],W===void 0||W===1/0||W>K.length)W=K.length;else if(W<0){if(W=K.length+1+W%(K.length+1),W>=K.length+1)W-=K.length+1}let X=[];for(let Y=0;Y<W;Y++){let R=Number.isInteger(K[Y].glyph)?K[Y].glyph:K[Y].glyph.index;X.push({glyphID:R,paletteIndex:K[Y].paletteIndex})}for(let Y of Z){let R=Number.isInteger(Y.glyph)?Y.glyph:Y.glyph.index;X.push({glyphID:R,paletteIndex:Y.paletteIndex})}for(let Y=W;Y<K.length;Y++){let R=Number.isInteger(K[Y].glyph)?K[Y].glyph:K[Y].glyph.index;X.push({glyphID:R,paletteIndex:K[Y].paletteIndex})}this.updateColrTable(H,X)}setPaletteIndex(H,Z,W){let K=this.get(H);if(K[Z])K=K.map((X,Y)=>({glyphID:X.glyph.index,paletteIndex:Y===Z?W:X.paletteIndex})),this.updateColrTable(H,K);else console.error("Invalid layer index")}remove(H,Z,W=Z){let K=this.get(H);K=K.map((X)=>({glyphID:X.glyph.index,paletteIndex:X.paletteIndex})),K.splice(Z,W-Z+1),this.updateColrTable(H,K)}updateColrTable(H,Z){this.ensureCOLR();let K=this.font.tables.colr,X=EH(K.baseGlyphRecords,"glyphID",H);if(X===-1){let D={glyphID:H,firstLayerIndex:K.layerRecords.length,numLayers:0};X=OH(K.baseGlyphRecords,"glyphID",D)}let R=K.baseGlyphRecords[X],O=R.numLayers,A=Z.length,P=A-O;if(P>0){let D=Z.slice(O).map((C)=>({glyphID:C.glyphID,paletteIndex:C.paletteIndex}));K.layerRecords.splice(R.firstLayerIndex+O,0,...D)}else if(P<0)K.layerRecords.splice(R.firstLayerIndex+A,-P);for(let D=0;D<Math.min(O,A);D++)K.layerRecords[R.firstLayerIndex+D]={glyphID:Z[D].glyphID,paletteIndex:Z[D].paletteIndex};if(R.numLayers=A,P!==0)for(let D=0;D<K.baseGlyphRecords.length;D++){let C=K.baseGlyphRecords[D];if(D===X||C.firstLayerIndex<R.firstLayerIndex)continue;K.baseGlyphRecords[D].firstLayerIndex+=P}}},PH=class{constructor(H){this.font=H,this.cache=new WeakMap}get(H){let Z=this.getOrCreateSvgImageCacheEntry(H);return Z&&Z.image}getAsync(H){let Z=this.getOrCreateSvgImageCacheEntry(H);return Z&&Z.promise}getOrCreateSvgImageCacheEntry(H){let Z=this.font.tables.svg;if(Z===void 0)return;let W=Z.get(H);if(W===void 0)return;let K=this.cache.get(W);if(K===void 0)K=LH(W),this.cache.set(W,K);let X=K.images.get(H);if(X===void 0)X=MH(this.font,K.template,H),X.promise.then((Y)=>{if(X.image=Y,typeof this.font.onGlyphUpdated==="function")try{this.font.onGlyphUpdated(H)}catch(R){console.error("font.onGlyphUpdated",H,R)}}),K.images.set(H,X);return X}};function LH(H){return{template:BH(H).then(zH),images:new Map}}function MH(H,Z,W){return{promise:Z.then((K)=>{let X;if(typeof K==="string")X=K;else K[4]=W,X=K.join("");let Y=wH(X,H.unitsPerEm);return Y.image.decode().then(()=>Y)}),image:void 0}}var BH=typeof DecompressionStream==="function"?_H:VH;function VH(H){try{return Promise.resolve(new TextDecoder().decode(c8(H)?qH(H):H))}catch(Z){return Promise.reject(Z)}}function _H(H){if(c8(H))return new Response(new Response(H).body.pipeThrough(new DecompressionStream("gzip"))).text();try{return Promise.resolve(new TextDecoder().decode(H))}catch(Z){return Promise.reject(Z)}}function zH(H){let Z=H.indexOf("<svg"),W=H.indexOf(">",Z+4)+1;if(/ id=['"]glyph\d+['"]/.test(H.substring(Z,W)))return H;let K=H.lastIndexOf("</svg>");return[H.substring(0,W),"<defs>",H.substring(W,K),'</defs><use href="#glyph',"",'"/>',H.substring(K)]}function wH(H,Z){let K=new DOMParser().parseFromString(H,"image/svg+xml").documentElement,X=K.viewBox.baseVal,Y=K.width.baseVal,R=K.height.baseVal,O=1,A=1;if(X.width>0&&X.height>0){if(Y.unitType===1)O=Y.valueInSpecifiedUnits/X.width,A=R.unitType===1?R.valueInSpecifiedUnits/X.height:O;else if(R.unitType===1)A=R.valueInSpecifiedUnits/X.height,O=A;else if(Z)O=Z/X.width,A=Z/X.height}let P=document.createElement("div");P.style.position="fixed",P.style.visibility="hidden",P.appendChild(K),document.body.appendChild(P);let D=K.getBBox();document.body.removeChild(P);let C=(D.x-X.x)*O,z=(X.y-D.y)*A,k=D.width*O,S=D.height*A;if(K.setAttribute("viewBox",[D.x,D.y,D.width,D.height].join(" ")),O!==1)K.setAttribute("width",k);if(A!==1)K.setAttribute("height",S);let j=new Image(k,S);return j.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(K.outerHTML),{leftSideBearing:C,baseline:z,image:j}}var L6=new WeakMap;function s8(H,Z,W,K,X){let Y;if((Z&K)>0){if(Y=H.parseByte(),(Z&X)===0)Y=-Y;Y=W+Y}else if((Z&X)>0)Y=W;else Y=W+H.parseShort();return Y}function o8(H,Z,W){let K=new n.Parser(Z,W);H._numberOfContours=K.parseShort(),H._xMin=K.parseShort(),H._yMin=K.parseShort(),H._xMax=K.parseShort(),H._yMax=K.parseShort();let X,Y;if(H._numberOfContours>0){let R=H.endPointIndices=[];for(let A=0;A<H._numberOfContours;A+=1)R.push(K.parseUShort());H.instructionLength=K.parseUShort(),H.instructions=[];for(let A=0;A<H.instructionLength;A+=1)H.instructions.push(K.parseByte());let O=R[R.length-1]+1;X=[];for(let A=0;A<O;A+=1)if(Y=K.parseByte(),X.push(Y),(Y&8)>0){let P=K.parseByte();for(let D=0;D<P;D+=1)X.push(Y),A+=1}if(H0.argument(X.length===O,"Bad flags."),R.length>0){let A=[],P;if(O>0){for(let z=0;z<O;z+=1)Y=X[z],P={},P.onCurve=!!(Y&1),P.lastPointOfContour=R.indexOf(z)>=0,A.push(P);let D=0;for(let z=0;z<O;z+=1)Y=X[z],P=A[z],P.x=s8(K,Y,D,2,16),D=P.x;let C=0;for(let z=0;z<O;z+=1)Y=X[z],P=A[z],P.y=s8(K,Y,C,4,32),C=P.y}H.points=A}else H.points=[]}else if(H._numberOfContours===0)H.points=[];else{H.isComposite=!0,H.points=[],H.components=[];let R=!0;while(R){X=K.parseUShort();let O={glyphIndex:K.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};if((X&1)>0)if((X&2)>0)O.dx=K.parseShort(),O.dy=K.parseShort();else O.matchedPoints=[K.parseUShort(),K.parseUShort()];else if((X&2)>0)O.dx=K.parseChar(),O.dy=K.parseChar();else O.matchedPoints=[K.parseByte(),K.parseByte()];if((X&8)>0)O.xScale=O.yScale=K.parseF2Dot14();else if((X&64)>0)O.xScale=K.parseF2Dot14(),O.yScale=K.parseF2Dot14();else if((X&128)>0)O.xScale=K.parseF2Dot14(),O.scale01=K.parseF2Dot14(),O.scale10=K.parseF2Dot14(),O.yScale=K.parseF2Dot14();H.components.push(O),R=!!(X&32)}if(X&256){H.instructionLength=K.parseUShort(),H.instructions=[];for(let O=0;O<H.instructionLength;O+=1)H.instructions.push(K.parseByte())}}}function q4(H,Z){let W=[];for(let K=0;K<H.length;K+=1){let X=H[K],Y={x:Z.xScale*X.x+Z.scale10*X.y+Z.dx,y:Z.scale01*X.x+Z.yScale*X.y+Z.dy,onCurve:X.onCurve,lastPointOfContour:X.lastPointOfContour};W.push(Y)}return W}function CH(H){let Z=[],W=[];for(let K=0;K<H.length;K+=1){let X=H[K];if(W.push(X),X.lastPointOfContour)Z.push(W),W=[]}return H0.argument(W.length===0,"There are still points left in the current contour."),Z}function M6(H){let Z=new m1;if(!H)return Z;let W=CH(H);for(let K=0;K<W.length;++K){let X=W[K],Y=X[X.length-1],R=X[0];if(Y.onCurve)Z.moveTo(Y.x,Y.y);else if(R.onCurve)Z.moveTo(R.x,R.y);else{let O={x:(Y.x+R.x)*0.5,y:(Y.y+R.y)*0.5};Z.moveTo(O.x,O.y)}for(let O=0;O<X.length;++O)if(Y=R,R=X[(O+1)%X.length],Y.onCurve)Z.lineTo(Y.x,Y.y);else{let A=R;if(!R.onCurve)A={x:(Y.x+R.x)*0.5,y:(Y.y+R.y)*0.5};Z.quadraticCurveTo(Y.x,Y.y,A.x,A.y)}Z.closePath()}return Z}function r8(H,Z){if(Z.isComposite){if(!L6.has(H))L6.set(H,new Set);let W=L6.get(H);W.add(Z.index);try{for(let K=0;K<Z.components.length;K+=1){let X=Z.components[K];if(W.has(X.glyphIndex))continue;let Y=H.get(X.glyphIndex);if(Y.getPath(),Y.points){let R;if(X.matchedPoints===void 0)R=q4(Y.points,X);else{if(X.matchedPoints[0]>Z.points.length-1||X.matchedPoints[1]>Y.points.length-1)throw Error("Matched points out of range in "+Z.name);let O=Z.points[X.matchedPoints[0]],A=Y.points[X.matchedPoints[1]],P={xScale:X.xScale,scale01:X.scale01,scale10:X.scale10,yScale:X.yScale,dx:0,dy:0};A=q4([A],P)[0],P.dx=O.x-A.x,P.dy=O.y-A.y,R=q4(Y.points,P)}Z.points=Z.points.concat(R)}}}finally{W.delete(Z.index)}}return M6(Z.points)}function IH(H,Z,W,K){let X=new p1.GlyphSet(K);for(let Y=0;Y<W.length-1;Y+=1){let R=W[Y],O=W[Y+1];if(R!==O)X.push(Y,p1.ttfGlyphLoader(K,Y,o8,H,Z+R,r8));else X.push(Y,p1.glyphLoader(K,Y))}return X}function TH(H,Z,W,K){let X=new p1.GlyphSet(K);return K._push=function(Y){let R=W[Y],O=W[Y+1];if(R!==O)X.push(Y,p1.ttfGlyphLoader(K,Y,o8,H,Z+R,r8));else X.push(Y,p1.glyphLoader(K,Y))},X}function SH(H,Z,W,K,X){if(X.lowMemory)return TH(H,Z,W,K);else return IH(H,Z,W,K)}var a8={getPath:M6,parse:SH},kH=class{constructor(H){this.font=H}normalizeCoordTags(H){for(let Z in H)if(Z.length<4){let W=Z.padEnd(4," ");H[W]===void 0&&(H[W]=H[Z]),delete H[Z]}}getNormalizedCoords(H){if(!H)H=this.font.variation.get();let Z=[];this.normalizeCoordTags(H);for(let W=0;W<this.fvar().axes.length;W++){let K=this.fvar().axes[W],X=H[K.tag];if(X===void 0)X=K.defaultValue;if(X<K.defaultValue)Z.push((X-K.defaultValue+Number.EPSILON)/(K.defaultValue-K.minValue+Number.EPSILON));else Z.push((X-K.defaultValue+Number.EPSILON)/(K.maxValue-K.defaultValue+Number.EPSILON))}if(this.avar())for(let W=0;W<this.avar().axisSegmentMaps.length;W++){let K=this.avar().axisSegmentMaps[W];for(let X=0;X<K.axisValueMaps.length;X++){let Y=K.axisValueMaps[X];if(X>=1&&Z[W]<Y.fromCoordinate){let R=K.axisValueMaps[X-1];Z[W]=((Z[W]-R.fromCoordinate)*(Y.toCoordinate-R.toCoordinate)+Number.EPSILON)/(Y.fromCoordinate-R.fromCoordinate+Number.EPSILON)+R.toCoordinate;break}}}return Z}interpolatePoints(H,Z,W){if(H.length===0)return;let K=0;while(K<H.length){let X=K,Y=K,R=H[Y];while(!R.lastPointOfContour)R=H[++Y];while(K<=Y&&!W[K])K++;if(K>Y)continue;let O=K,A=K;K++;while(K<=Y){if(W[K])this.deltaInterpolate(A+1,K-1,A,K,Z,H),A=K;K++}if(A===O)this.deltaShift(X,Y,A,Z,H);else if(this.deltaInterpolate(A+1,Y,A,O,Z,H),O>0)this.deltaInterpolate(X,O-1,A,O,Z,H);K=Y+1}}deltaInterpolate(H,Z,W,K,X,Y){if(H>Z)return;let R=["x","y"];for(let A=0;A<R.length;A++){let P=R[A];if(X[W][P]>X[K][P]){var O=W;W=K,K=O}let D=X[W][P],C=X[K][P],z=Y[W][P],k=Y[K][P];if(D!==C||z===k){let S=D===C?0:(k-z)/(C-D);for(let j=H;j<=Z;j++){let g=X[j][P];if(g<=D)g+=z-D;else if(g>=C)g+=k-C;else g=z+(g-D)*S;Y[j][P]=g}}}}deltaShift(H,Z,W,K,X){let Y=X[W].x-K[W].x,R=X[W].y-K[W].y;if(Y===0&&R===0)return;for(let O=H;O<=Z;O++)if(O!==W)X[O].x+=Y,X[O].y+=R}transformComponents(H,Z,W,K,X,Y){let R=0;for(let O=0;O<H.components.length;O++){let A=H.components[O],P=this.font.glyphs.get(A.glyphIndex),D=AH(A),C=K.indexOf(O);if(C>-1)D.dx+=Math.round(X.deltas[C]*Y),D.dy+=Math.round(X.deltasY[C]*Y);let z=q4(this.getTransform(P,W).points,D);Z.splice(R,z.length,...z),R+=P.points.length}}applyTupleVariationStore(H,Z,W,K="gvar",X={}){if(!W)W=this.font.variation.get();let Y=this.getNormalizedCoords(W),{headers:R,sharedPoints:O}=H,A=this.fvar().axes.length,P;if(K==="gvar")P=Z.map(i8);else if(K==="cvar")P=[...Z];for(let D=0;D<R.length;D++){let C=R[D],z=1;for(let S=0;S<A;S++){let j=[0];switch(K){case"gvar":j=C.peakTuple?C.peakTuple:this.gvar().sharedTuples[C.sharedTupleRecordsIndex];break;case"cvar":j=C.peakTuple;break}if(j[S]===0)continue;if(Y[S]===0){z=0;break}if(!C.intermediateStartTuple){if(Y[S]<Math.min(0,j[S])||Y[S]>Math.max(0,j[S])){z=0;break}z=(z*Y[S]+Number.EPSILON)/(j[S]+Number.EPSILON)}else if(Y[S]<C.intermediateStartTuple[S]||Y[S]>C.intermediateEndTuple[S]){z=0;break}else if(Y[S]<j[S])z=z*(Y[S]-C.intermediateStartTuple[S]+Number.EPSILON)/(j[S]-C.intermediateStartTuple[S]+Number.EPSILON);else z=z*(C.intermediateEndTuple[S]-Y[S]+Number.EPSILON)/(C.intermediateEndTuple[S]-j[S]+Number.EPSILON)}if(z===0)continue;let k=C.privatePoints.length?C.privatePoints:O;if(K==="gvar"&&X.glyph&&X.glyph.isComposite)this.transformComponents(X.glyph,P,W,k,C,z);else if(k.length===0)for(let S=0;S<P.length;S++){let j=P[S];if(K==="gvar")P[S]={x:Math.round(j.x+C.deltas[S]*z),y:Math.round(j.y+C.deltasY[S]*z),onCurve:j.onCurve,lastPointOfContour:j.lastPointOfContour};else if(K==="cvar")P[S]=Math.round(j+C.deltas[S]*z)}else{let S;if(K==="gvar")S=P.map(i8);else if(K==="cvar")S=P;let j=Array(Z.length).fill(!1);for(let g=0;g<k.length;g++){let $0=k[g];if($0<Z.length){let J0=S[$0];if(K==="gvar")j[$0]=!0,J0.x+=C.deltas[g]*z,J0.y+=C.deltasY[g]*z;else if(K==="cvar")P[$0]=Math.round(J0+C.deltas[g]*z)}}if(K==="gvar"){this.interpolatePoints(S,P,j);for(let g=0;g<Z.length;g++){let $0=S[g].x-P[g].x,J0=S[g].y-P[g].y;P[g].x=Math.round(P[g].x+$0),P[g].y=Math.round(P[g].y+J0)}}}}return P}getTransform(H,Z){if(Number.isInteger(H))H=this.font.glyphs.get(H);let W=H.getBlendPath,K=!!(H.points&&H.points.length),X=H;if(W||K){if(!Z)Z=this.font.variation.get();if(K){let Y=this.gvar()&&this.gvar().glyphVariations[H.index];if(Y){let R=H.points,O=this.applyTupleVariationStore(Y,R,Z,"gvar",{glyph:H});X=new b2(Object.assign({},H,{points:O,path:M6(O)}))}}else if(W){let Y=H.getBlendPath(Z);X=new b2(Object.assign({},H,{path:Y}))}}if(this.font.tables.hvar)H._advanceWidth=typeof H._advanceWidth<"u"?H._advanceWidth:H.advanceWidth,H.advanceWidth=X.advanceWidth=Math.round(H._advanceWidth+this.getVariableAdjustment(X.index,"hvar","advanceWidth",Z)),H._leftSideBearing=typeof H._leftSideBearing<"u"?H._leftSideBearing:H.leftSideBearing,H.leftSideBearing=X.leftSideBearing=Math.round(H._leftSideBearing+this.getVariableAdjustment(X.index,"hvar","lsb",Z));return X}getCvarTransform(H){let Z=this.font.tables.cvt,W=this.cvar();if(!Z||!Z.length||!W||!W.headers.length)return Z;return this.applyTupleVariationStore(W,Z,H,"cvar")}getVariableAdjustment(H,Z,W,K){K=K||this.font.variation.get();let X,Y,R=this.font.tables[Z];if(!R)throw Error(`trying to get variation adjustment from non-existent table "${R}"`);if(!R.itemVariationStore)throw Error(`trying to get variation adjustment from table "${R}" which does not have an itemVariationStore`);let O=R[W]&&R[W].map.length;if(O){let A=H;if(A>=O)A=O-1;({outerIndex:X,innerIndex:Y}=R[W].map[A])}else X=0,Y=H;return this.getDelta(R.itemVariationStore,X,Y,K)}getDelta(H,Z,W,K){if(Z>=H.itemVariationSubtables.length)return 0;let X=H.itemVariationSubtables[Z];if(W>=X.deltaSets.length)return 0;let Y=X.deltaSets[W],R=this.getBlendVector(H,Z,K),O=0;for(let A=0;A<X.regionIndexes.length;A++)O+=Y[A]*R[A];return O}getBlendVector(H,Z,W){if(!W)W=this.font.variation.get();let K=H.itemVariationSubtables[Z],X=this.getNormalizedCoords(W),Y=[];for(let R=0;R<K.regionIndexes.length;R++){let O=1,A=K.regionIndexes[R],P=H.variationRegions[A].regionAxes;for(let D=0;D<P.length;D++){let C=P[D],z;if(C.startCoord>C.peakCoord||C.peakCoord>C.endCoord)z=1;else if(C.startCoord<0&&C.endCoord>0&&C.peakCoord!==0)z=1;else if(C.peakCoord===0)z=1;else if(X[D]<C.startCoord||X[D]>C.endCoord)z=0;else if(X[D]===C.peakCoord)z=1;else if(X[D]<C.peakCoord)z=(X[D]-C.startCoord+Number.EPSILON)/(C.peakCoord-C.startCoord+Number.EPSILON);else z=(C.endCoord-X[D]+Number.EPSILON)/(C.endCoord-C.peakCoord+Number.EPSILON);O*=z}Y[R]=O}return Y}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},jH=class{constructor(H){this.font=H,this.process=new kH(this.font),this.activateDefaultVariation(),this.getTransform=this.process.getTransform.bind(this.process)}activateDefaultVariation(){let H=this.getDefaultInstanceIndex();if(H>-1)this.set(H);else this.set(this.getDefaultCoordinates())}getDefaultCoordinates(){return this.fvar().axes.reduce((H,Z)=>{return H[Z.tag]=Z.defaultValue,H},{})}getDefaultInstanceIndex(){let H=this.getDefaultCoordinates(),Z=this.getInstanceIndex(H);if(Z<0)Z=this.fvar().instances.findIndex((W)=>W.name&&W.name.en==="Regular");return Z}getInstanceIndex(H){return this.fvar().instances.findIndex((Z)=>Object.keys(H).every((W)=>Z.coordinates[W]===H[W]))}getInstance(H){return this.fvar().instances&&this.fvar().instances[H]}set(H){let Z;if(Number.isInteger(H)){let W=this.getInstance(H);if(!W)throw Error(`Invalid instance index ${H}`);Z={...W.coordinates}}else Z=H,this.process.normalizeCoordTags(Z);Z=Object.assign({},this.font.defaultRenderOptions.variation,Z),this.font.defaultRenderOptions=Object.assign({},this.font.defaultRenderOptions,{variation:Z})}get(){return Object.assign({},this.font.defaultRenderOptions.variation)}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},t8=1e6,A4=64,N4=1e4,e8,M2,J7,B6;function Q7(H){this.font=H,this.getCommands=function(Z){return a8.getPath(Z).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function vH(H){return H}function H7(H){return Math.sign(H)*Math.round(Math.abs(H))}function hH(H){return Math.sign(H)*Math.round(Math.abs(H*2))/2}function fH(H){return Math.sign(H)*(Math.round(Math.abs(H)+0.5)-0.5)}function bH(H){return Math.sign(H)*Math.ceil(Math.abs(H))}function yH(H){return Math.sign(H)*Math.floor(Math.abs(H))}var $7=function(H){let Z=this.srPeriod,W=this.srPhase,K=this.srThreshold,X=1;if(H<0)H=-H,X=-1;if(H+=K-W,H=Math.trunc(H/Z)*Z,H+=W,H<0)return W*X;return H*X},d1={x:1,y:0,axis:"x",distance:function(H,Z,W,K){return(W?H.xo:H.x)-(K?Z.xo:Z.x)},interpolate:function(H,Z,W,K){let X,Y,R,O,A,P,D;if(!K||K===this){if(X=H.xo-Z.xo,Y=H.xo-W.xo,A=Z.x-Z.xo,P=W.x-W.xo,R=Math.abs(X),O=Math.abs(Y),D=R+O,D===0){H.x=H.xo+(A+P)/2;return}H.x=H.xo+(A*O+P*R)/D;return}if(X=K.distance(H,Z,!0,!0),Y=K.distance(H,W,!0,!0),A=K.distance(Z,Z,!1,!0),P=K.distance(W,W,!1,!0),R=Math.abs(X),O=Math.abs(Y),D=R+O,D===0){d1.setRelative(H,H,(A+P)/2,K,!0);return}d1.setRelative(H,H,(A*O+P*R)/D,K,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(H,Z,W,K,X){if(!K||K===this){H.x=(X?Z.xo:Z.x)+W;return}let Y=X?Z.xo:Z.x,R=X?Z.yo:Z.y,O=Y+W*K.x,A=R+W*K.y;H.x=O+(H.y-A)/K.normalSlope},slope:0,touch:function(H){H.xTouched=!0},touched:function(H){return H.xTouched},untouch:function(H){H.xTouched=!1}},o1={x:0,y:1,axis:"y",distance:function(H,Z,W,K){return(W?H.yo:H.y)-(K?Z.yo:Z.y)},interpolate:function(H,Z,W,K){let X,Y,R,O,A,P,D;if(!K||K===this){if(X=H.yo-Z.yo,Y=H.yo-W.yo,A=Z.y-Z.yo,P=W.y-W.yo,R=Math.abs(X),O=Math.abs(Y),D=R+O,D===0){H.y=H.yo+(A+P)/2;return}H.y=H.yo+(A*O+P*R)/D;return}if(X=K.distance(H,Z,!0,!0),Y=K.distance(H,W,!0,!0),A=K.distance(Z,Z,!1,!0),P=K.distance(W,W,!1,!0),R=Math.abs(X),O=Math.abs(Y),D=R+O,D===0){o1.setRelative(H,H,(A+P)/2,K,!0);return}o1.setRelative(H,H,(A*O+P*R)/D,K,!0)},normalSlope:0,setRelative:function(H,Z,W,K,X){if(!K||K===this){H.y=(X?Z.yo:Z.y)+W;return}let Y=X?Z.xo:Z.x,R=X?Z.yo:Z.y,O=Y+W*K.x,A=R+W*K.y;H.y=A+K.normalSlope*(H.x-O)},slope:Number.POSITIVE_INFINITY,touch:function(H){H.yTouched=!0},touched:function(H){return H.yTouched},untouch:function(H){H.yTouched=!1}};Object.freeze(d1),Object.freeze(o1);function Z5(H,Z){this.x=H,this.y=Z,this.axis=void 0,this.slope=Z/H,this.normalSlope=-H/Z,Object.freeze(this)}Z5.prototype.distance=function(H,Z,W,K){return this.x*d1.distance(H,Z,W,K)+this.y*o1.distance(H,Z,W,K)},Z5.prototype.interpolate=function(H,Z,W,K){let X,Y,R,O,A,P,D;if(R=K.distance(H,Z,!0,!0),O=K.distance(H,W,!0,!0),X=K.distance(Z,Z,!1,!0),Y=K.distance(W,W,!1,!0),A=Math.abs(R),P=Math.abs(O),D=A+P,D===0){this.setRelative(H,H,(X+Y)/2,K,!0);return}this.setRelative(H,H,(X*P+Y*A)/D,K,!0)},Z5.prototype.setRelative=function(H,Z,W,K,X){K=K||this;let Y=X?Z.xo:Z.x,R=X?Z.yo:Z.y,O=Y+W*K.x,A=R+W*K.y,P=K.normalSlope,D=this.slope,C=H.x,z=H.y;H.x=(D*C-P*O+A-z)/(D-P),H.y=D*(H.x-C)+z},Z5.prototype.touch=function(H){H.xTouched=!0,H.yTouched=!0};function W5(H,Z){let W=Math.sqrt(H*H+Z*Z);if(H/=W,Z/=W,H===1&&Z===0)return d1;else if(H===0&&Z===1)return o1;else return new Z5(H,Z)}function r1(H,Z,W,K){this.x=this.xo=Math.round(H*64)/64,this.y=this.yo=Math.round(Z*64)/64,this.lastPointOfContour=W,this.onCurve=K,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}r1.prototype.nextTouched=function(H){let Z=this.nextPointOnContour;while(!H.touched(Z)&&Z!==this)Z=Z.nextPointOnContour;return Z},r1.prototype.prevTouched=function(H){let Z=this.prevPointOnContour;while(!H.touched(Z)&&Z!==this)Z=Z.prevPointOnContour;return Z};var K5=Object.freeze(new r1(0,0)),xH={cvCutIn:1.0625,deltaBase:9,deltaShift:0.125,loop:1,minDis:1,autoFlip:!0};function H2(H,Z){switch(this.env=H,this.stack=[],this.prog=Z,H){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=d1,this.round=H7}}Q7.prototype.exec=function(H,Z){if(typeof Z!=="number")throw Error("Point size is not a number!");if(this._errorState>2)return;let W=this.font,K=this._prepState;if(!K||K.ppem!==Z){let X=this._fpgmState;if(!X){H2.prototype=xH,X=this._fpgmState=new H2("fpgm",W.tables.fpgm),X.funcs=[],X.font=W,X.instructionCount=0,X.callDepth=0;try{M2(X)}catch(R){console.log("Hinting error in FPGM:"+R),this._errorState=3;return}}H2.prototype=X,K=this._prepState=new H2("prep",W.tables.prep),K.ppem=Z,K.instructionCount=0,K.callDepth=0;let Y=W.variation&&W.variation.process.getCvarTransform()||W.tables.cvt;if(Y){let R=K.cvt=Array(Y.length),O=Z/W.unitsPerEm;for(let A=0;A<Y.length;A++)R[A]=Y[A]*O}else K.cvt=[];try{M2(K)}catch(R){if(this._errorState<2)console.log("Hinting error in PREP:"+R);this._errorState=2}}if(this._errorState>1)return;try{return J7(H,K)}catch(X){if(this._errorState<1)console.log("Hinting error:"+X),console.log("Note: further hinting errors are silenced");this._errorState=1;return}},J7=function(H,Z){let W=Z.ppem/Z.font.unitsPerEm,K=W,X=H.components,Y,R,O;if(H2.prototype=Z,!X)O=new H2("glyf",H.instructions),O.instructionCount=0,O.callDepth=0,B6(H,O,W,K),R=O.gZone;else{let A=Z.font;R=[],Y=[];for(let P=0;P<X.length;P++){let D=X[P],C=A.glyphs.get(D.glyphIndex);O=new H2("glyf",C.instructions),O.instructionCount=0,O.callDepth=0,B6(C,O,W,K);let z=Math.round(D.dx*W),k=Math.round(D.dy*K),S=O.gZone,j=O.contours;for(let $0=0;$0<S.length;$0++){let J0=S[$0];J0.xTouched=J0.yTouched=!1,J0.xo=J0.x=J0.x+z,J0.yo=J0.y=J0.y+k}let g=R.length;R.push.apply(R,S);for(let $0=0;$0<j.length;$0++)Y.push(j[$0]+g)}if(H.instructions&&!O.inhibitGridFit)O=new H2("glyf",H.instructions),O.gZone=O.z0=O.z1=O.z2=R,O.contours=Y,R.push(new r1(0,0),new r1(Math.round(H.advanceWidth*W),0)),M2(O),R.length-=2}return R},B6=function(H,Z,W,K){let X=H.points||[],Y=X.length,R=Z.gZone=Z.z0=Z.z1=Z.z2=[],O=Z.contours=[],A;for(let C=0;C<Y;C++)A=X[C],R[C]=new r1(A.x*W,A.y*K,A.lastPointOfContour,A.onCurve);let P,D;for(let C=0;C<Y;C++){if(A=R[C],!P)P=A,O.push(C);if(A.lastPointOfContour)A.nextPointOnContour=P,P.prevPointOnContour=A,P=void 0;else D=R[C+1],A.nextPointOnContour=D,D.prevPointOnContour=A}if(Z.inhibitGridFit)return;R.push(new r1(0,0),new r1(Math.round(H.advanceWidth*W),0)),M2(Z),R.length-=2},M2=function(H){let Z=H.prog;if(!Z)return;let W=Z.length,K;for(H.ip=0;H.ip<W;H.ip++){if(++H.instructionCount>t8)throw Error("Hinting instructions exceeded maximum of "+t8);if(K=e8[Z[H.ip]],!K)throw Error("unknown instruction: 0x"+Number(Z[H.ip]).toString(16));K(H)}};function D4(H){let Z=H.tZone=Array(H.gZone.length);for(let W=0;W<Z.length;W++)Z[W]=new r1(0,0)}function Z7(H,Z){let{prog:W,ip:K}=H,X=1,Y;do if(Y=W[++K],Y===88)X++;else if(Y===89)X--;else if(Y===64)K+=W[K+1]+1;else if(Y===65)K+=2*W[K+1]+1;else if(Y>=176&&Y<=183)K+=Y-176+1;else if(Y>=184&&Y<=191)K+=(Y-184+1)*2;else if(Z&&X===1&&Y===27)break;while(X>0);H.ip=K}function W7(H,Z){Z.fv=Z.pv=Z.dpv=H}function K7(H,Z){Z.pv=Z.dpv=H}function U7(H,Z){Z.fv=H}function X7(H,Z){let W=Z.stack,K=W.pop(),X=W.pop(),Y=Z.z2[K],R=Z.z1[X],O,A;if(!H)O=R.x-Y.x,A=R.y-Y.y;else O=Y.y-R.y,A=R.x-Y.x;Z.pv=Z.dpv=W5(O,A)}function Y7(H,Z){let W=Z.stack,K=W.pop(),X=W.pop(),Y=Z.z2[K],R=Z.z1[X],O,A;if(!H)O=R.x-Y.x,A=R.y-Y.y;else O=Y.y-R.y,A=R.x-Y.x;Z.fv=W5(O,A)}function gH(H){let Z=H.stack,W=Z.pop(),K=Z.pop();H.pv=H.dpv=W5(K,W)}function mH(H){let Z=H.stack,W=Z.pop(),K=Z.pop();H.fv=W5(K,W)}function pH(H){let{stack:Z,pv:W}=H;Z.push(W.x*16384),Z.push(W.y*16384)}function uH(H){let{stack:Z,fv:W}=H;Z.push(W.x*16384),Z.push(W.y*16384)}function dH(H){H.fv=H.pv}function lH(H){let Z=H.stack,W=Z.pop(),K=Z.pop(),X=Z.pop(),Y=Z.pop(),R=Z.pop(),O=H.z0,A=H.z1,P=O[W],D=O[K],C=A[X],z=A[Y],k=H.z2[R],S=P.x,j=P.y,g=D.x,$0=D.y,J0=C.x,U0=C.y,O0=z.x,M0=z.y,_0=(S-g)*(U0-M0)-(j-$0)*(J0-O0),z0=S*$0-j*g,y0=J0*M0-U0*O0;k.x=(z0*(J0-O0)-y0*(S-g))/_0,k.y=(z0*(U0-M0)-y0*(j-$0))/_0}function cH(H){H.rp0=H.stack.pop()}function iH(H){H.rp1=H.stack.pop()}function nH(H){H.rp2=H.stack.pop()}function sH(H){let Z=H.stack.pop();switch(H.zp0=Z,Z){case 0:if(!H.tZone)D4(H);H.z0=H.tZone;break;case 1:H.z0=H.gZone;break;default:throw Error("Invalid zone pointer")}}function oH(H){let Z=H.stack.pop();switch(H.zp1=Z,Z){case 0:if(!H.tZone)D4(H);H.z1=H.tZone;break;case 1:H.z1=H.gZone;break;default:throw Error("Invalid zone pointer")}}function rH(H){let Z=H.stack.pop();switch(H.zp2=Z,Z){case 0:if(!H.tZone)D4(H);H.z2=H.tZone;break;case 1:H.z2=H.gZone;break;default:throw Error("Invalid zone pointer")}}function aH(H){let Z=H.stack.pop();switch(H.zp0=H.zp1=H.zp2=Z,Z){case 0:if(!H.tZone)D4(H);H.z0=H.z1=H.z2=H.tZone;break;case 1:H.z0=H.z1=H.z2=H.gZone;break;default:throw Error("Invalid zone pointer")}}function tH(H){if(H.loop=H.stack.pop(),H.loop>N4)H.loop=N4}function eH(H){H.round=H7}function J$(H){H.round=fH}function Q$(H){let Z=H.stack.pop();H.minDis=Z/64}function H$(H){Z7(H,!1)}function $$(H){let Z=H.stack.pop();H.ip+=Z-1}function Z$(H){let Z=H.stack.pop();H.cvCutIn=Z/64}function W$(H){let Z=H.stack;Z.push(Z[Z.length-1])}function V6(H){H.stack.pop()}function K$(H){H.stack.length=0}function U$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(W),Z.push(K)}function X$(H){let Z=H.stack;Z.push(Z.length)}function Y$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();if(K>N4)K=N4;if(++H.callDepth>A4)throw Error("Hinting call depth exceeded maximum of "+A4);let{ip:X,prog:Y}=H;H.prog=H.funcs[W];for(let R=0;R<K;R++)M2(H);H.ip=X,H.prog=Y,H.callDepth--}function F$(H){let Z=H.stack.pop();if(++H.callDepth>A4)throw Error("Hinting call depth exceeded maximum of "+A4);let{ip:W,prog:K}=H;H.prog=H.funcs[Z],M2(H),H.ip=W,H.prog=K,H.callDepth--}function G$(H){let Z=H.stack,W=Z.pop();Z.push(Z[Z.length-W])}function R$(H){let Z=H.stack,W=Z.pop();Z.push(Z.splice(Z.length-W,1)[0])}function E$(H){if(H.env!=="fpgm")throw Error("FDEF not allowed here");let{stack:Z,prog:W,ip:K}=H,X=Z.pop(),Y=K;while(W[++K]!==45);H.ip=K,H.funcs[X]=W.slice(Y+1,K)}function F7(H,Z){let W=Z.stack.pop(),K=Z.z0[W],X=Z.fv,Y=Z.pv,R=Y.distance(K,K5);if(H)R=Z.round(R);X.setRelative(K,K5,R,Y),X.touch(K),Z.rp0=Z.rp1=W}function G7(H,Z){let W=Z.z2,K=W.length-2,X,Y,R;for(let O=0;O<K;O++){if(X=W[O],H.touched(X))continue;if(Y=X.prevTouched(H),Y===X)continue;if(R=X.nextTouched(H),Y===R)H.setRelative(X,X,H.distance(Y,Y,!1,!0),H,!0);H.interpolate(X,Y,R,H)}}function R7(H,Z){let W=Z.stack,K=H?Z.rp1:Z.rp2,X=(H?Z.z0:Z.z1)[K],Y=Z.fv,R=Z.pv,O=Z.loop,A=Z.z2;while(O--){let P=W.pop(),D=A[P],C=R.distance(X,X,!1,!0);Y.setRelative(D,D,C,R),Y.touch(D)}Z.loop=1}function E7(H,Z){let W=Z.stack,K=H?Z.rp1:Z.rp2,X=(H?Z.z0:Z.z1)[K],Y=Z.fv,R=Z.pv,O=W.pop(),A=Z.z2[Z.contours[O]],P=A,D=R.distance(X,X,!1,!0);do{if(P!==X)Y.setRelative(P,P,D,R);P=P.nextPointOnContour}while(P!==A)}function O7(H,Z){let W=Z.stack,K=H?Z.rp1:Z.rp2,X=(H?Z.z0:Z.z1)[K],Y=Z.fv,R=Z.pv,O=W.pop(),A;switch(O){case 0:A=Z.tZone;break;case 1:A=Z.gZone;break;default:throw Error("Invalid zone")}let P,D=R.distance(X,X,!1,!0),C=A.length-2;for(let z=0;z<C;z++)P=A[z],Y.setRelative(P,P,D,R)}function O$(H){let{stack:Z,loop:W,fv:K}=H,X=Z.pop()/64,Y=H.z2;while(W--){let R=Z.pop(),O=Y[R];K.setRelative(O,O,X),K.touch(O)}H.loop=1}function q$(H){let{stack:Z,rp1:W,rp2:K,loop:X}=H,Y=H.z0[W],R=H.z1[K],O=H.fv,A=H.dpv,P=H.z2;while(X--){let D=Z.pop(),C=P[D];O.interpolate(C,Y,R,A),O.touch(C)}H.loop=1}function q7(H,Z){let W=Z.stack,K=W.pop()/64,X=W.pop(),Y=Z.z1[X],R=Z.z0[Z.rp0],O=Z.fv,A=Z.pv;if(O.setRelative(Y,R,K,A),O.touch(Y),Z.rp1=Z.rp0,Z.rp2=X,H)Z.rp0=X}function A$(H){let{stack:Z,rp0:W}=H,K=H.z0[W],X=H.loop,Y=H.fv,R=H.pv,O=H.z1;while(X--){let A=Z.pop(),P=O[A];Y.setRelative(P,K,0,R),Y.touch(P)}H.loop=1}function N$(H){H.round=hH}function A7(H,Z){let W=Z.stack,K=W.pop(),X=W.pop(),Y=Z.z0[X],R=Z.fv,O=Z.pv,A=Z.cvt[K],P=O.distance(Y,K5);if(H){if(Math.abs(P-A)<Z.cvCutIn)P=A;P=Z.round(P)}if(R.setRelative(Y,K5,P,O),Z.zp0===0)Y.xo=Y.x,Y.yo=Y.y;R.touch(Y),Z.rp0=Z.rp1=X}function D$(H){let{prog:Z,ip:W,stack:K}=H,X=Z[++W];for(let Y=0;Y<X;Y++)K.push(Z[++W]);H.ip=W}function P$(H){let{ip:Z,prog:W,stack:K}=H,X=W[++Z];for(let Y=0;Y<X;Y++){let R=W[++Z]<<8|W[++Z];if(R&32768)R=-((R^65535)+1);K.push(R)}H.ip=Z}function L$(H){let{stack:Z,store:W}=H;if(!W)W=H.store=[];let K=Z.pop(),X=Z.pop();W[X]=K}function M$(H){let{stack:Z,store:W}=H,K=Z.pop(),X=W&&W[K]||0;Z.push(X)}function B$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();H.cvt[K]=W/64}function V$(H){let Z=H.stack,W=Z.pop();Z.push(H.cvt[W]*64)}function N7(H,Z){let W=Z.stack,K=W.pop(),X=Z.z2[K];W.push(Z.dpv.distance(X,K5,H,!1)*64)}function D7(H,Z){let W=Z.stack,K=W.pop(),X=W.pop(),Y=Z.z1[K],R=Z.z0[X],O=Z.dpv.distance(R,Y,H,H);Z.stack.push(Math.round(O*64))}function _$(H){H.stack.push(H.ppem)}function z$(H){H.autoFlip=!0}function w$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K<W?1:0)}function C$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K<=W?1:0)}function I$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K>W?1:0)}function T$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K>=W?1:0)}function S$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(W===K?1:0)}function k$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(W!==K?1:0)}function j$(H){let Z=H.stack,W=Z.pop();Z.push(Math.trunc(W)&1?1:0)}function v$(H){let Z=H.stack,W=Z.pop();Z.push(Math.trunc(W)&1?0:1)}function h$(H){let Z=H.stack.pop(),W;if(!Z)Z7(H,!0)}function f$(H){}function b$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(W&&K?1:0)}function y$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(W||K?1:0)}function x$(H){let Z=H.stack,W=Z.pop();Z.push(W?0:1)}function _6(H,Z){let W=Z.stack,K=W.pop(),X=Z.fv,Y=Z.pv,R=Z.ppem,O=Z.deltaBase+(H-1)*16,A=Z.deltaShift,P=Z.z0;for(let D=0;D<K;D++){let C=W.pop(),z=W.pop();if(O+((z&240)>>4)!==R)continue;let S=(z&15)-8;if(S>=0)S++;let j=P[C];X.setRelative(j,j,S*A,Y)}}function g$(H){let W=H.stack.pop();H.deltaBase=W}function m$(H){let W=H.stack.pop();H.deltaShift=Math.pow(0.5,W)}function p$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K+W)}function u$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K-W)}function d$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K*64/W)}function l$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(K*W/64)}function c$(H){let Z=H.stack,W=Z.pop();Z.push(Math.abs(W))}function i$(H){let Z=H.stack,W=Z.pop();Z.push(-W)}function n$(H){let Z=H.stack,W=Z.pop();Z.push(Math.floor(W/64)*64)}function s$(H){let Z=H.stack,W=Z.pop();Z.push(Math.ceil(W/64)*64)}function P4(H,Z){let W=Z.stack,K=W.pop();W.push(Z.round(K/64)*64)}function o$(H){let Z=H.stack,W=Z.pop(),K=Z.pop();H.cvt[K]=W*H.ppem/H.font.unitsPerEm}function z6(H,Z){let W=Z.stack,K=W.pop(),X=Z.ppem,Y=Z.deltaBase+(H-1)*16,R=Z.deltaShift;for(let O=0;O<K;O++){let A=W.pop(),P=W.pop();if(Y+((P&240)>>4)!==X)continue;let C=(P&15)-8;if(C>=0)C++;let z=C*R;Z.cvt[A]+=z}}function r$(H){let Z=H.stack.pop();H.round=$7;let W;switch(Z&192){case 0:W=0.5;break;case 64:W=1;break;case 128:W=2;break;default:throw Error("invalid SROUND value")}switch(H.srPeriod=W,Z&48){case 0:H.srPhase=0;break;case 16:H.srPhase=0.25*W;break;case 32:H.srPhase=0.5*W;break;case 48:H.srPhase=0.75*W;break;default:throw Error("invalid SROUND value")}if(Z&=15,Z===0)H.srThreshold=0;else H.srThreshold=(Z/8-0.5)*W}function a$(H){let Z=H.stack.pop();H.round=$7;let W;switch(Z&192){case 0:W=Math.sqrt(2)/2;break;case 64:W=Math.sqrt(2);break;case 128:W=2*Math.sqrt(2);break;default:throw Error("invalid S45ROUND value")}switch(H.srPeriod=W,Z&48){case 0:H.srPhase=0;break;case 16:H.srPhase=0.25*W;break;case 32:H.srPhase=0.5*W;break;case 48:H.srPhase=0.75*W;break;default:throw Error("invalid S45ROUND value")}if(Z&=15,Z===0)H.srThreshold=0;else H.srThreshold=(Z/8-0.5)*W}function t$(H){H.round=vH}function e$(H){H.round=bH}function JZ(H){H.round=yH}function QZ(H){let Z=H.stack.pop()}function P7(H,Z){let W=Z.stack,K=W.pop(),X=W.pop(),Y=Z.z2[K],R=Z.z1[X],O,A;if(!H)O=R.x-Y.x,A=R.y-Y.y;else O=Y.y-R.y,A=R.x-Y.x;Z.dpv=W5(O,A)}function HZ(H){let Z=H.stack,W=Z.pop(),K=0;if(W&1)K=35;if(W&32)K|=4096;Z.push(K)}function $Z(H){let Z=H.stack,W=Z.pop(),K=Z.pop(),X=Z.pop();Z.push(K),Z.push(W),Z.push(X)}function ZZ(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(Math.max(K,W))}function WZ(H){let Z=H.stack,W=Z.pop(),K=Z.pop();Z.push(Math.min(K,W))}function KZ(H){let Z=H.stack.pop()}function UZ(H){let Z=H.stack.pop(),W=H.stack.pop();switch(Z){case 1:H.inhibitGridFit=!!W;return;case 2:H.ignoreCvt=!!W;return;default:throw Error("invalid INSTCTRL[] selector")}}function $2(H,Z){let{stack:W,prog:K,ip:X}=Z;for(let Y=0;Y<H;Y++)W.push(K[++X]);Z.ip=X}function Z2(H,Z){let{ip:W,prog:K,stack:X}=Z;for(let Y=0;Y<H;Y++){let R=K[++W]<<8|K[++W];if(R&32768)R=-((R^65535)+1);X.push(R)}Z.ip=W}function Q0(H,Z,W,K,X,Y){let R=Y.stack,O=H&&R.pop(),A=R.pop(),P=Y.rp0,D=Y.z0[P],C=Y.z1[A],z=Y.minDis,k=Y.fv,S=Y.dpv,j,g,$0,J0;if(g=j=S.distance(C,D,!0,!0),$0=g>=0?1:-1,g=Math.abs(g),H){if(J0=Y.cvt[O],K&&Math.abs(g-J0)<Y.cvCutIn)g=J0}if(W&&g<z)g=z;if(K)g=Y.round(g);if(k.setRelative(C,D,$0*g,S),k.touch(C),Y.rp1=Y.rp0,Y.rp2=A,Z)Y.rp0=A}e8=[W7.bind(void 0,o1),W7.bind(void 0,d1),K7.bind(void 0,o1),K7.bind(void 0,d1),U7.bind(void 0,o1),U7.bind(void 0,d1),X7.bind(void 0,0),X7.bind(void 0,1),Y7.bind(void 0,0),Y7.bind(void 0,1),gH,mH,pH,uH,dH,lH,cH,iH,nH,sH,oH,rH,aH,tH,eH,J$,Q$,H$,$$,Z$,void 0,void 0,W$,V6,K$,U$,X$,G$,R$,void 0,void 0,void 0,Y$,F$,E$,void 0,F7.bind(void 0,0),F7.bind(void 0,1),G7.bind(void 0,o1),G7.bind(void 0,d1),R7.bind(void 0,0),R7.bind(void 0,1),E7.bind(void 0,0),E7.bind(void 0,1),O7.bind(void 0,0),O7.bind(void 0,1),O$,q$,q7.bind(void 0,0),q7.bind(void 0,1),A$,N$,A7.bind(void 0,0),A7.bind(void 0,1),D$,P$,L$,M$,B$,V$,N7.bind(void 0,0),N7.bind(void 0,1),void 0,D7.bind(void 0,0),D7.bind(void 0,1),_$,void 0,z$,void 0,void 0,w$,C$,I$,T$,S$,k$,j$,v$,h$,f$,b$,y$,x$,_6.bind(void 0,1),g$,m$,p$,u$,d$,l$,c$,i$,n$,s$,P4.bind(void 0,0),P4.bind(void 0,1),P4.bind(void 0,2),P4.bind(void 0,3),void 0,void 0,void 0,void 0,o$,_6.bind(void 0,2),_6.bind(void 0,3),z6.bind(void 0,1),z6.bind(void 0,2),z6.bind(void 0,3),r$,a$,void 0,void 0,t$,void 0,e$,JZ,V6,V6,void 0,void 0,void 0,void 0,void 0,QZ,P7.bind(void 0,0),P7.bind(void 0,1),HZ,void 0,$Z,ZZ,WZ,KZ,UZ,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,$2.bind(void 0,1),$2.bind(void 0,2),$2.bind(void 0,3),$2.bind(void 0,4),$2.bind(void 0,5),$2.bind(void 0,6),$2.bind(void 0,7),$2.bind(void 0,8),Z2.bind(void 0,1),Z2.bind(void 0,2),Z2.bind(void 0,3),Z2.bind(void 0,4),Z2.bind(void 0,5),Z2.bind(void 0,6),Z2.bind(void 0,7),Z2.bind(void 0,8),Q0.bind(void 0,0,0,0,0,0),Q0.bind(void 0,0,0,0,0,1),Q0.bind(void 0,0,0,0,0,2),Q0.bind(void 0,0,0,0,0,3),Q0.bind(void 0,0,0,0,1,0),Q0.bind(void 0,0,0,0,1,1),Q0.bind(void 0,0,0,0,1,2),Q0.bind(void 0,0,0,0,1,3),Q0.bind(void 0,0,0,1,0,0),Q0.bind(void 0,0,0,1,0,1),Q0.bind(void 0,0,0,1,0,2),Q0.bind(void 0,0,0,1,0,3),Q0.bind(void 0,0,0,1,1,0),Q0.bind(void 0,0,0,1,1,1),Q0.bind(void 0,0,0,1,1,2),Q0.bind(void 0,0,0,1,1,3),Q0.bind(void 0,0,1,0,0,0),Q0.bind(void 0,0,1,0,0,1),Q0.bind(void 0,0,1,0,0,2),Q0.bind(void 0,0,1,0,0,3),Q0.bind(void 0,0,1,0,1,0),Q0.bind(void 0,0,1,0,1,1),Q0.bind(void 0,0,1,0,1,2),Q0.bind(void 0,0,1,0,1,3),Q0.bind(void 0,0,1,1,0,0),Q0.bind(void 0,0,1,1,0,1),Q0.bind(void 0,0,1,1,0,2),Q0.bind(void 0,0,1,1,0,3),Q0.bind(void 0,0,1,1,1,0),Q0.bind(void 0,0,1,1,1,1),Q0.bind(void 0,0,1,1,1,2),Q0.bind(void 0,0,1,1,1,3),Q0.bind(void 0,1,0,0,0,0),Q0.bind(void 0,1,0,0,0,1),Q0.bind(void 0,1,0,0,0,2),Q0.bind(void 0,1,0,0,0,3),Q0.bind(void 0,1,0,0,1,0),Q0.bind(void 0,1,0,0,1,1),Q0.bind(void 0,1,0,0,1,2),Q0.bind(void 0,1,0,0,1,3),Q0.bind(void 0,1,0,1,0,0),Q0.bind(void 0,1,0,1,0,1),Q0.bind(void 0,1,0,1,0,2),Q0.bind(void 0,1,0,1,0,3),Q0.bind(void 0,1,0,1,1,0),Q0.bind(void 0,1,0,1,1,1),Q0.bind(void 0,1,0,1,1,2),Q0.bind(void 0,1,0,1,1,3),Q0.bind(void 0,1,1,0,0,0),Q0.bind(void 0,1,1,0,0,1),Q0.bind(void 0,1,1,0,0,2),Q0.bind(void 0,1,1,0,0,3),Q0.bind(void 0,1,1,0,1,0),Q0.bind(void 0,1,1,0,1,1),Q0.bind(void 0,1,1,0,1,2),Q0.bind(void 0,1,1,0,1,3),Q0.bind(void 0,1,1,1,0,0),Q0.bind(void 0,1,1,1,0,1),Q0.bind(void 0,1,1,1,0,2),Q0.bind(void 0,1,1,1,0,3),Q0.bind(void 0,1,1,1,1,0),Q0.bind(void 0,1,1,1,1,1),Q0.bind(void 0,1,1,1,1,2),Q0.bind(void 0,1,1,1,1,3)];var XZ=Q7;function g2(H){this.char=H,this.state={},this.activeState=null}function w6(H,Z,W){this.contextName=W,this.startIndex=H,this.endOffset=Z}function YZ(H,Z,W){this.contextName=H,this.openRange=null,this.ranges=[],this.checkStart=Z,this.checkEnd=W}function a0(H,Z){this.context=H,this.index=Z,this.length=H.length,this.current=H[Z],this.backtrack=H.slice(0,Z),this.lookahead=H.slice(Z+1)}function L4(H){this.eventId=H,this.subscribers=[]}function FZ(H){let Z=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];for(let K=0;K<Z.length;K++){let X=Z[K];Object.defineProperty(this.events,X,{value:new L4(X)})}if(H)for(let K=0;K<Z.length;K++){let X=Z[K],Y=H[X];if(typeof Y==="function")this.events[X].subscribe(Y)}let W=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];for(let K=0;K<W.length;K++){let X=W[K];this.events[X].subscribe(this.updateContextsRanges)}}function j0(H){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],FZ.call(this,H)}g2.prototype.setState=function(H,Z){return this.state[H]=Z,this.activeState={key:H,value:this.state[H]},this.activeState},g2.prototype.getState=function(H){return this.state[H]||null},j0.prototype.inboundIndex=function(H){return H>=0&&H<this.tokens.length},j0.prototype.composeRUD=function(H){let W=H.map((X)=>this[X[0]].apply(this,X.slice(1).concat(!0))),K=(X)=>typeof X==="object"&&Object.prototype.hasOwnProperty.call(X,"FAIL");if(W.every(K))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:W.filter(K)};this.dispatch("composeRUD",[W.filter((X)=>!K(X))])},j0.prototype.replaceRange=function(H,Z,W,K){Z=Z!==null?Z:this.tokens.length;let X=W.every((Y)=>Y instanceof g2);if(!isNaN(H)&&this.inboundIndex(H)&&X){let Y=this.tokens.splice.apply(this.tokens,[H,Z].concat(W));if(!K)this.dispatch("replaceToken",[H,Z,W]);return[Y,W]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}},j0.prototype.replaceToken=function(H,Z,W){if(!isNaN(H)&&this.inboundIndex(H)&&Z instanceof g2){let K=this.tokens.splice(H,1,Z);if(!W)this.dispatch("replaceToken",[H,Z]);return[K[0],Z]}else return{FAIL:"replaceToken: invalid token or index."}},j0.prototype.removeRange=function(H,Z,W){Z=!isNaN(Z)?Z:this.tokens.length;let K=this.tokens.splice(H,Z);if(!W)this.dispatch("removeRange",[K,H,Z]);return K},j0.prototype.removeToken=function(H,Z){if(!isNaN(H)&&this.inboundIndex(H)){let W=this.tokens.splice(H,1);if(!Z)this.dispatch("removeToken",[W,H]);return W}else return{FAIL:"removeToken: invalid token index."}},j0.prototype.insertToken=function(H,Z,W){if(H.every((X)=>X instanceof g2)){if(this.tokens.splice.apply(this.tokens,[Z,0].concat(H)),!W)this.dispatch("insertToken",[H,Z]);return H}else return{FAIL:"insertToken: invalid token(s)."}},j0.prototype.registerModifier=function(H,Z,W){this.events.newToken.subscribe(function(K,X){let Y=[K,X],R=Z===null||Z.apply(this,Y)===!0,O=[K,X];if(R){let A=W.apply(this,O);K.setState(H,A)}}),this.registeredModifiers.push(H)},L4.prototype.subscribe=function(H){if(typeof H==="function")return this.subscribers.push(H)-1;else return{FAIL:`invalid '${this.eventId}' event handler`}},L4.prototype.unsubscribe=function(H){this.subscribers.splice(H,1)},a0.prototype.setCurrentIndex=function(H){this.index=H,this.current=this.context[H],this.backtrack=this.context.slice(0,H),this.lookahead=this.context.slice(H+1)},a0.prototype.get=function(H){switch(!0){case H===0:return this.current;case(H<0&&Math.abs(H)<=this.backtrack.length):return this.backtrack.slice(H)[0];case(H>0&&H<=this.lookahead.length):return this.lookahead[H-1];default:return null}},j0.prototype.rangeToText=function(H){if(H instanceof w6)return this.getRangeTokens(H).map((Z)=>Z.char).join("")},j0.prototype.getText=function(){return this.tokens.map((H)=>H.char).join("")},j0.prototype.getContext=function(H){let Z=this.registeredContexts[H];return Z?Z:null},j0.prototype.on=function(H,Z){let W=this.events[H];if(W)return W.subscribe(Z);else return null},j0.prototype.dispatch=function(H,Z){let W=this.events[H];if(W instanceof L4)for(let K=0;K<W.subscribers.length;K++)W.subscribers[K].apply(this,Z||[])},j0.prototype.registerContextChecker=function(H,Z,W){if(this.getContext(H))return{FAIL:`context name '${H}' is already registered.`};if(typeof Z!=="function")return{FAIL:"missing context start check."};if(typeof W!=="function")return{FAIL:"missing context end check."};let K=new YZ(H,Z,W);return this.registeredContexts[H]=K,this.contextCheckers.push(K),K},j0.prototype.getRangeTokens=function(H){let Z=H.startIndex+H.endOffset;return[].concat(this.tokens.slice(H.startIndex,Z))},j0.prototype.getContextRanges=function(H){let Z=this.getContext(H);if(Z)return Z.ranges;else return{FAIL:`context checker '${H}' is not registered.`}},j0.prototype.resetContextsRanges=function(){let H=this.registeredContexts;for(let Z in H)if(Object.prototype.hasOwnProperty.call(H,Z)){let W=H[Z];W.ranges=[]}},j0.prototype.updateContextsRanges=function(){this.resetContextsRanges();let H=this.tokens.map((Z)=>Z.char);for(let Z=0;Z<H.length;Z++){let W=new a0(H,Z);this.runContextCheck(W)}this.dispatch("updateContextsRanges",[this.registeredContexts])},j0.prototype.setEndOffset=function(H,Z){let W=this.getContext(Z).openRange.startIndex,K=new w6(W,H,Z),X=this.getContext(Z).ranges;return K.rangeId=`${Z}.${X.length}`,X.push(K),this.getContext(Z).openRange=null,K},j0.prototype.runContextCheck=function(H){let Z=H.index;for(let W=0;W<this.contextCheckers.length;W++){let K=this.contextCheckers[W],X=K.contextName,Y=this.getContext(X).openRange;if(!Y&&K.checkStart(H))Y=new w6(Z,null,X),this.getContext(X).openRange=Y,this.dispatch("contextStart",[X,Z]);if(!!Y&&K.checkEnd(H)){let R=Z-Y.startIndex+1,O=this.setEndOffset(R,X);this.dispatch("contextEnd",[X,O])}}},j0.prototype.tokenize=function(H){this.tokens=[],this.resetContextsRanges();let Z=Array.from(H);this.dispatch("start");for(let W=0;W<Z.length;W++){let K=Z[W],X=new a0(Z,W);this.dispatch("next",[X]),this.runContextCheck(X);let Y=new g2(K);this.tokens.push(Y),this.dispatch("newToken",[Y,X])}return this.dispatch("end",[this.tokens]),this.tokens};var GZ=j0;function W2(H){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(H)}function L7(H){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(H)}function K2(H){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(H)}function M4(H){return/[\u0E00-\u0E7F]/.test(H)}function B4(H){return/[A-z]/.test(H)}function RZ(H){return/\s/.test(H)}function G1(H){this.font=H,this.features={}}function U2(H){this.id=H.id,this.tag=H.tag,this.substitution=H.substitution}function X2(H,Z){if(!H)return-1;switch(Z.format){case 1:return Z.glyphs.indexOf(H);case 2:{let W=Z.ranges;for(let K=0;K<W.length;K++){let X=W[K];if(H>=X.start&&H<=X.end){let Y=H-X.start;return X.index+Y}}break}default:return-1}return-1}function EZ(H,Z){if(X2(H,Z.coverage)===-1)return null;return H+Z.deltaGlyphId}function OZ(H,Z){let W=X2(H,Z.coverage);if(W===-1)return null;return Z.substitute[W]}function C6(H,Z){let W=[];for(let K=0;K<H.length;K++){let X=H[K],Y=Z.current;Y=Array.isArray(Y)?Y[0]:Y;let R=X2(Y,X);if(R!==-1)W.push(R)}if(W.length!==H.length)return-1;return W}function qZ(H,Z){let W=Z.inputCoverage.length+Z.lookaheadCoverage.length+Z.backtrackCoverage.length;if(H.context.length<W)return[];let K=C6(Z.inputCoverage,H);if(K===-1)return[];let X=Z.inputCoverage.length-1;if(H.lookahead.length<Z.lookaheadCoverage.length)return[];let Y=H.lookahead.slice(X);while(Y.length&&K2(Y[0].char))Y.shift();let R=new a0(Y,0),O=C6(Z.lookaheadCoverage,R),A=[].concat(H.backtrack);A.reverse();while(A.length&&K2(A[0].char))A.shift();if(A.length<Z.backtrackCoverage.length)return[];let P=new a0(A,0),D=C6(Z.backtrackCoverage,P),C=K.length===Z.inputCoverage.length&&O.length===Z.lookaheadCoverage.length&&D.length===Z.backtrackCoverage.length,z=[];if(C)for(let k=0;k<Z.lookupRecords.length;k++){let S=Z.lookupRecords[k],j=S.lookupListIndex,g=this.getLookupByIndex(j);for(let $0=0;$0<g.subtables.length;$0++){let J0=g.subtables[$0],U0,O0=this.getSubstitutionType(g,J0);if(O0==="71")O0=this.getSubstitutionType(J0,J0.extension),U0=this.getLookupMethod(J0,J0.extension),J0=J0.extension;else U0=this.getLookupMethod(g,J0);if(O0==="12"){let M0=H.get(S.sequenceIndex),_0=U0(M0);if(_0)z.push(_0)}else if(O0==="21"){let M0=H.get(S.sequenceIndex),_0=U0(M0);if(_0)z.push(_0)}else throw Error(`Substitution type ${O0} is not supported in chaining substitution`)}}return z}function AZ(H,Z){let W=H.current,K=X2(W,Z.coverage);if(K===-1)return null;let X,Y=Z.ligatureSets[K];for(let R=0;R<Y.length;R++){X=Y[R];for(let O=0;O<X.components.length;O++){let A=H.lookahead[O],P=X.components[O];if(A!==P)break;if(O===X.components.length-1)return X}}return null}function NZ(H,Z){let W=H.current;if(X2(W,Z.coverage)===-1)return null;for(let X of Z.ruleSets)for(let Y of X){let R=!0;for(let O=0;O<Y.input.length;O++)if(H.lookahead[O]!==Y.input[O]){R=!1;break}if(R){let O=[];O.push(W);for(let P=0;P<Y.input.length;P++)O.push(Y.input[P]);let A=(P,D)=>{let{lookupListIndex:C,sequenceIndex:z}=D,{subtables:k}=this.getLookupByIndex(C);for(let S of k)if(X2(P[z],S.coverage)!==-1)P[z]=S.deltaGlyphId};for(let P=0;P<Y.lookupRecords.length;P++){let D=Y.lookupRecords[P];A(O,D)}return O}}return null}function DZ(H,Z){if(H.context.length<Z.coverages.length)return[];for(let K=0;K<Z.coverages.length;K++){let X=H.get(K);if(X=Array.isArray(X)?X[0]:X,X2(X,Z.coverages[K])===-1)return[]}let W=[];for(let K=0;K<Z.lookupRecords.length;K++){let X=Z.lookupRecords[K],Y=X.lookupListIndex,R=this.getLookupByIndex(Y);for(let O=0;O<R.subtables.length;O++){let A=R.subtables[O],P,D=this.getSubstitutionType(R,A);if(D==="71")D=this.getSubstitutionType(A,A.extension),P=this.getLookupMethod(A,A.extension),A=A.extension;else P=this.getLookupMethod(R,A);if(D==="12"){let C=H.get(X.sequenceIndex),z=P(C);if(z)W.push(z)}else if(D==="21"){let C=H.get(X.sequenceIndex),z=P(C);if(z)W.push(z)}}}return W}function PZ(H,Z){let W=X2(H,Z.coverage);if(W===-1)return null;return Z.sequences[W]}G1.prototype.getDefaultScriptFeaturesIndexes=function(){let H=this.font.tables.gsub.scripts;for(let Z=0;Z<H.length;Z++){let W=H[Z];if(W.tag==="DFLT")return W.script.defaultLangSys.featureIndexes}return[]},G1.prototype.getScriptFeaturesIndexes=function(H){if(!this.font.tables.gsub)return[];if(!H)return this.getDefaultScriptFeaturesIndexes();let W=this.font.tables.gsub.scripts;for(let K=0;K<W.length;K++){let X=W[K];if(X.tag===H&&X.script.defaultLangSys)return X.script.defaultLangSys.featureIndexes;else{let Y=X.langSysRecords;if(Y)for(let R=0;R<Y.length;R++){let O=Y[R];if(O.tag===H)return O.langSys.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()},G1.prototype.mapTagsToFeatures=function(H,Z){let W={};for(let K=0;K<H.length;K++){let X=H[K].tag,Y=H[K].feature;W[X]=Y}this.features[Z].tags=W},G1.prototype.getScriptFeatures=function(H){let Z=this.features[H];if(Object.prototype.hasOwnProperty.call(this.features,H))return Z;let W=this.getScriptFeaturesIndexes(H);if(!W)return null;let K=this.font.tables.gsub;return Z=W.map((X)=>K.features[X]),this.features[H]=Z,this.mapTagsToFeatures(Z,H),Z},G1.prototype.getSubstitutionType=function(H,Z){let W=H.lookupType.toString(),K=Z.substFormat.toString();return W+K},G1.prototype.getLookupMethod=function(H,Z){let W=this.getSubstitutionType(H,Z);switch(W){case"11":return(K)=>EZ.apply(this,[K,Z]);case"12":return(K)=>OZ.apply(this,[K,Z]);case"63":return(K)=>qZ.apply(this,[K,Z]);case"41":return(K)=>AZ.apply(this,[K,Z]);case"21":return(K)=>PZ.apply(this,[K,Z]);case"51":return(K)=>NZ.apply(this,[K,Z]);case"53":return(K)=>DZ.apply(this,[K,Z]);default:throw Error(`substitutionType : ${W} lookupType: ${H.lookupType} - substFormat: ${Z.substFormat} is not yet supported`)}},G1.prototype.lookupFeature=function(H){let Z=H.contextParams,W=Z.index,K=this.getFeature({tag:H.tag,script:H.script});if(!K)return Error(`font '${(this.font.names.unicode||this.font.names.windows||this.font.names.macintosh).fullName.en}' doesn't support feature '${H.tag}' for script '${H.script}'.`);let X=this.getFeatureLookups(K),Y=[].concat(Z.context);for(let R=0;R<X.length;R++){let O=X[R],A=this.getLookupSubtables(O);for(let P=0;P<A.length;P++){let D=A[P],C=this.getSubstitutionType(O,D),z;if(C==="71")C=this.getSubstitutionType(D,D.extension),z=this.getLookupMethod(D,D.extension),D=D.extension;else z=this.getLookupMethod(O,D);let k;switch(C){case"11":if(k=z(Z.current),k)Y.splice(W,1,new U2({id:11,tag:H.tag,substitution:k}));break;case"12":if(k=z(Z.current),k)Y.splice(W,1,new U2({id:12,tag:H.tag,substitution:k}));break;case"63":if(k=z(Z),Array.isArray(k)&&k.length)Y.splice(W,1,new U2({id:63,tag:H.tag,substitution:k}));break;case"41":if(k=z(Z),k)Y.splice(W,1,new U2({id:41,tag:H.tag,substitution:k}));break;case"21":if(k=z(Z.current),k)Y.splice(W,1,new U2({id:21,tag:H.tag,substitution:k}));break;case"51":case"53":if(k=z(Z),Array.isArray(k)&&k.length)Y.splice(W,1,new U2({id:parseInt(C),tag:H.tag,substitution:k}));break}if(Z=new a0(Y,W),Array.isArray(k)&&!k.length)continue;k=null}}return Y.length?Y:null},G1.prototype.supports=function(H){if(!H.script)return!1;this.getScriptFeatures(H.script);let Z=Object.prototype.hasOwnProperty.call(this.features,H.script);if(!H.tag)return Z;let W=this.features[H.script].some((K)=>K.tag===H.tag);return Z&&W},G1.prototype.getLookupSubtables=function(H){return H.subtables||null},G1.prototype.getLookupByIndex=function(H){return this.font.tables.gsub.lookups[H]||null},G1.prototype.getFeatureLookups=function(H){return H.lookupListIndexes.map(this.getLookupByIndex.bind(this))},G1.prototype.getFeature=function(Z){if(!this.font)return{FAIL:"No font was found"};if(!Object.prototype.hasOwnProperty.call(this.features,Z.script))this.getScriptFeatures(Z.script);let W=this.features[Z.script];if(!W)return{FAIL:`No feature for script ${Z.script}`};if(!W.tags[Z.tag])return null;return this.features[Z.script].tags[Z.tag]};var LZ=G1;function MZ(H){let Z=H.current,W=H.get(-1);return W===null&&W2(Z)||!W2(W)&&W2(Z)}function BZ(H){let Z=H.get(1);return Z===null||!W2(Z)}var VZ={startCheck:MZ,endCheck:BZ};function _Z(H){let Z=H.current,W=H.get(-1);return(W2(Z)||K2(Z))&&!W2(W)}function zZ(H){let Z=H.get(1);switch(!0){case Z===null:return!0;case(!W2(Z)&&!K2(Z)):{let W=RZ(Z);if(!W)return!0;if(W){let K=!1;if(K=H.lookahead.some((X)=>W2(X)||K2(X)),!K)return!0}break}default:return!1}}var wZ={startCheck:_Z,endCheck:zZ};function CZ(H,Z,W){Z[W].setState(H.tag,H.substitution)}function IZ(H,Z,W){Z[W].setState(H.tag,H.substitution)}function I6(H,Z,W){for(let K=0;K<H.substitution.length;K++){let X=H.substitution[K],Y=Z[W+K];if(Array.isArray(X)){if(X.length)Y.setState(H.tag,X[0]);else Y.setState("deleted",!0);continue}Y.setState(H.tag,X)}}function TZ(H,Z,W){let K=Z[W];K.setState(H.tag,H.substitution.ligGlyph);let X=H.substitution.components.length;for(let Y=0;Y<X;Y++)K=Z[W+Y+1],K.setState("deleted",!0)}var M7={11:CZ,12:IZ,63:I6,41:TZ,51:I6,53:I6};function SZ(H,Z,W){if(H instanceof U2&&M7[H.id])M7[H.id](H,Z,W)}var B2=SZ;function kZ(H){let Z=[].concat(H.backtrack);for(let W=Z.length-1;W>=0;W--){let K=Z[W],X=L7(K),Y=K2(K);if(!X&&!Y)return!0;if(X)return!1}return!1}function jZ(H){if(L7(H.current))return!1;for(let Z=0;Z<H.lookahead.length;Z++){let W=H.lookahead[Z];if(!K2(W))return!0}return!1}function vZ(H){let W=this.featuresTags.arab,K=this.tokenizer.getRangeTokens(H);if(K.length===1)return;let X=new a0(K.map((R)=>R.getState("glyphIndex")),0),Y=new a0(K.map((R)=>R.char),0);for(let R=0;R<K.length;R++){let O=K[R];if(K2(O.char))continue;X.setCurrentIndex(R),Y.setCurrentIndex(R);let A=0;if(kZ(Y))A|=1;if(jZ(Y))A|=2;let P;switch(A){case 1:P="fina";break;case 2:P="init";break;case 3:P="medi";break}if(W.indexOf(P)===-1)continue;let D=this.query.lookupFeature({tag:P,script:"arab",contextParams:X});if(D instanceof Error){console.info(D.message);continue}for(let C=0;C<D.length;C++){let z=D[C];if(z instanceof U2)B2(z,K,C),X.context[C]=z.substitution}}}var hZ=vZ;function B7(H,Z){let W=H.map((K)=>K.activeState.value);return new a0(W,Z||0)}function fZ(H){let W=this.tokenizer.getRangeTokens(H),K=B7(W);for(let X=0;X<K.context.length;X++){K.setCurrentIndex(X);let Y=this.query.lookupFeature({tag:"rlig",script:"arab",contextParams:K});if(Y.length){for(let R=0;R<Y.length;R++){let O=Y[R];B2(O,W,X)}K=B7(W)}}}var bZ=fZ;function yZ(H){return H.index===0&&H.context.length>1}function xZ(H){return H.index===H.context.length-1}var gZ={startCheck:yZ,endCheck:xZ};function V7(H,Z){let W=H.map((K)=>K.activeState.value);return new a0(W,Z||0)}function mZ(H){let K=this.tokenizer.getRangeTokens(H),X=V7(K);for(let Y=0;Y<X.context.length;Y++){if(!this.query.getFeature({tag:"ccmp",script:"delf",contextParams:X}))continue;X.setCurrentIndex(Y);let R=this.query.lookupFeature({tag:"ccmp",script:"delf",contextParams:X});if(R.length){for(let O=0;O<R.length;O++){let A=R[O];B2(A,K,Y)}X=V7(K)}}}var pZ=mZ;function uZ(H){let Z=H.current,W=H.get(-1);return W===null&&B4(Z)||!B4(W)&&B4(Z)}function dZ(H){let Z=H.get(1);return Z===null||!B4(Z)}var lZ={startCheck:uZ,endCheck:dZ};function _7(H,Z){let W=H.map((K)=>K.activeState.value);return new a0(W,Z||0)}function cZ(H){let W=this.tokenizer.getRangeTokens(H),K=_7(W);for(let X=0;X<K.context.length;X++){K.setCurrentIndex(X);let Y=this.query.lookupFeature({tag:"liga",script:"latn",contextParams:K});if(Y.length){for(let R=0;R<Y.length;R++){let O=Y[R];B2(O,W,X)}K=_7(W)}}}var iZ=cZ;function nZ(H){let Z=H.current,W=H.get(-1);return W===null&&M4(Z)||!M4(W)&&M4(Z)}function sZ(H){let Z=H.get(1);return Z===null||!M4(Z)}var oZ={startCheck:nZ,endCheck:sZ};function z7(H,Z){let W=H.map((K)=>K.activeState.value);return new a0(W,Z||0)}function rZ(H){let W=this.tokenizer.getRangeTokens(H),K=z7(W,0);for(let X=0;X<K.context.length;X++){K.setCurrentIndex(X);let Y=this.query.lookupFeature({tag:"ccmp",script:"thai",contextParams:K});if(Y.length){for(let R=0;R<Y.length;R++){let O=Y[R];B2(O,W,X)}K=z7(W,X)}}}var aZ=rZ;function w7(H,Z){let W=H.map((K)=>K.activeState.value);return new a0(W,Z||0)}function tZ(H){let W=this.tokenizer.getRangeTokens(H),K=w7(W,0);for(let X=0;X<K.context.length;X++){K.setCurrentIndex(X);let Y=this.query.lookupFeature({tag:"liga",script:"thai",contextParams:K});if(Y.length){for(let R=0;R<Y.length;R++){let O=Y[R];B2(O,W,X)}K=w7(W,X)}}}var eZ=tZ;function C7(H,Z){let W=H.map((K)=>K.activeState.value);return new a0(W,Z||0)}function JW(H){let W=this.tokenizer.getRangeTokens(H),K=C7(W,0);for(let X=0;X<K.context.length;X++){K.setCurrentIndex(X);let Y=this.query.lookupFeature({tag:"rlig",script:"thai",contextParams:K});if(Y.length){for(let R=0;R<Y.length;R++){let O=Y[R];B2(O,W,X)}K=C7(W,X)}}}var QW=JW;function T6(H){if(H===null)return!1;let Z=H.codePointAt(0);return Z>=6155&&Z<=6157||Z>=65024&&Z<=65039||Z>=917760&&Z<=917999}function HW(H){let Z=H.current,W=H.get(1);return W===null&&T6(Z)||T6(W)}function $W(H){let Z=H.get(1);return Z===null||!T6(Z)}var ZW={startCheck:HW,endCheck:$W};function WW(H){let Z=this.query.font,W=this.tokenizer.getRangeTokens(H);if(W[1].setState("deleted",!0),Z.tables.cmap&&Z.tables.cmap.varSelectorList){let K=W[0].char.codePointAt(0),X=W[1].char.codePointAt(0),Y=Z.tables.cmap.varSelectorList[X];if(Y!==void 0){if(Y.nonDefaultUVS){let R=Y.nonDefaultUVS.uvsMappings;if(R[K]){let O=R[K].glyphID;if(Z.glyphs.glyphs[O]!==void 0)W[0].setState("glyphIndex",O)}}}}}var KW=WW;function N1(H){this.baseDir=H||"ltr",this.tokenizer=new GZ,this.featuresTags={}}N1.prototype.setText=function(H){this.text=H},N1.prototype.contextChecks={ccmpReplacementCheck:gZ,latinWordCheck:lZ,arabicWordCheck:VZ,arabicSentenceCheck:wZ,thaiWordCheck:oZ,unicodeVariationSequenceCheck:ZW};function m2(H){let Z=this.contextChecks[`${H}Check`];return this.tokenizer.registerContextChecker(H,Z.startCheck,Z.endCheck)}function UW(){return m2.call(this,"ccmpReplacement"),m2.call(this,"latinWord"),m2.call(this,"arabicWord"),m2.call(this,"arabicSentence"),m2.call(this,"thaiWord"),m2.call(this,"unicodeVariationSequence"),this.tokenizer.tokenize(this.text)}function XW(){let H=this.tokenizer.getContextRanges("arabicSentence");for(let Z=0;Z<H.length;Z++){let W=H[Z],K=this.tokenizer.getRangeTokens(W);this.tokenizer.replaceRange(W.startIndex,W.endOffset,K.reverse())}}N1.prototype.registerFeatures=function(H,Z){let W=Z.filter((K)=>this.query.supports({script:H,tag:K}));if(!Object.prototype.hasOwnProperty.call(this.featuresTags,H))this.featuresTags[H]=W;else this.featuresTags[H]=this.featuresTags[H].concat(W)},N1.prototype.applyFeatures=function(H,Z){if(!H)throw Error("No valid font was provided to apply features");if(!this.query)this.query=new LZ(H);for(let W=0;W<Z.length;W++){let K=Z[W];if(!this.query.supports({script:K.script}))continue;this.registerFeatures(K.script,K.tags)}},N1.prototype.registerModifier=function(H,Z,W){this.tokenizer.registerModifier(H,Z,W)};function U5(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw Error("glyphIndex modifier is required to apply arabic presentation features.")}function YW(){if(!Object.prototype.hasOwnProperty.call(this.featuresTags,"arab"))return;U5.call(this);let Z=this.tokenizer.getContextRanges("arabicWord");for(let W=0;W<Z.length;W++){let K=Z[W];hZ.call(this,K)}}function FW(){U5.call(this);let H=this.tokenizer.getContextRanges("ccmpReplacement");for(let Z=0;Z<H.length;Z++){let W=H[Z];pZ.call(this,W)}}function GW(){if(!this.hasFeatureEnabled("arab","rlig"))return;U5.call(this);let H=this.tokenizer.getContextRanges("arabicWord");for(let Z=0;Z<H.length;Z++){let W=H[Z];bZ.call(this,W)}}function RW(){if(!this.hasFeatureEnabled("latn","liga"))return;U5.call(this);let H=this.tokenizer.getContextRanges("latinWord");for(let Z=0;Z<H.length;Z++){let W=H[Z];iZ.call(this,W)}}function EW(){let H=this.tokenizer.getContextRanges("unicodeVariationSequence");for(let Z=0;Z<H.length;Z++){let W=H[Z];KW.call(this,W)}}function OW(){U5.call(this);let H=this.tokenizer.getContextRanges("thaiWord");for(let Z=0;Z<H.length;Z++){let W=H[Z];if(this.hasFeatureEnabled("thai","liga"))eZ.call(this,W);if(this.hasFeatureEnabled("thai","rlig"))QW.call(this,W);if(this.hasFeatureEnabled("thai","ccmp"))aZ.call(this,W)}}N1.prototype.checkContextReady=function(H){return!!this.tokenizer.getContext(H)},N1.prototype.applyFeaturesToContexts=function(){if(this.checkContextReady("ccmpReplacement"))FW.call(this);if(this.checkContextReady("arabicWord"))YW.call(this),GW.call(this);if(this.checkContextReady("latinWord"))RW.call(this);if(this.checkContextReady("arabicSentence"))XW.call(this);if(this.checkContextReady("thaiWord"))OW.call(this);if(this.checkContextReady("unicodeVariationSequence"))EW.call(this)},N1.prototype.hasFeatureEnabled=function(H,Z){return(this.featuresTags[H]||[]).indexOf(Z)!==-1},N1.prototype.processText=function(H){if(!this.text||this.text!==H)this.setText(H),UW.call(this),this.applyFeaturesToContexts()},N1.prototype.getBidiText=function(H){return this.processText(H),this.tokenizer.getText()},N1.prototype.getTextGlyphs=function(H){this.processText(H);let Z=[];for(let W=0;W<this.tokenizer.tokens.length;W++){let K=this.tokenizer.tokens[W];if(K.state.deleted)continue;let X=K.activeState.value;Z.push(Array.isArray(X)?X[0]:X)}return Z};var qW=N1;function S6(H){return{fontFamily:{en:H.familyName||" "},fontSubfamily:{en:H.styleName||" "},fullName:{en:H.fullName||H.familyName+" "+H.styleName},postScriptName:{en:H.postScriptName||(H.familyName+H.styleName).replace(/\s/g,"")},designer:{en:H.designer||" "},designerURL:{en:H.designerURL||" "},manufacturer:{en:H.manufacturer||" "},manufacturerURL:{en:H.manufacturerURL||" "},license:{en:H.license||" "},licenseURL:{en:H.licenseURL||" "},version:{en:H.version||"Version 0.1"},description:{en:H.description||" "},copyright:{en:H.copyright||" "},trademark:{en:H.trademark||" "}}}function B0(H){if(H=H||{},H.tables=H.tables||{},!H.empty){if(!H.familyName)throw Error("When creating a new Font object, familyName is required.");if(!H.styleName)throw Error("When creating a new Font object, styleName is required.");if(!H.unitsPerEm)throw Error("When creating a new Font object, unitsPerEm is required.");if(!H.ascender)throw Error("When creating a new Font object, ascender is required.");if(H.descender>0)throw Error("When creating a new Font object, negative descender value is required.");this.names={},this.names.unicode=S6(H),this.names.macintosh=S6(H),this.names.windows=S6(H),this.unitsPerEm=H.unitsPerEm||1000,this.ascender=H.ascender,this.descender=H.descender,this.createdTimestamp=H.createdTimestamp,this.italicAngle=H.italicAngle||0,this.weightClass=H.weightClass||0;let Z=0;if(H.fsSelection)Z=H.fsSelection;else{if(this.italicAngle<0)Z|=this.fsSelectionValues.ITALIC;else if(this.italicAngle>0)Z|=this.fsSelectionValues.OBLIQUE;if(this.weightClass>=600)Z|=this.fsSelectionValues.BOLD;if(Z===0)Z=this.fsSelectionValues.REGULAR}if(!H.panose||!Array.isArray(H.panose))H.panose=[0,0,0,0,0,0,0,0,0];this.tables=Object.assign(H.tables,{os2:Object.assign({usWeightClass:H.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:H.widthClass||this.usWidthClasses.MEDIUM,bFamilyType:H.panose[0]||0,bSerifStyle:H.panose[1]||0,bWeight:H.panose[2]||0,bProportion:H.panose[3]||0,bContrast:H.panose[4]||0,bStrokeVariation:H.panose[5]||0,bArmStyle:H.panose[6]||0,bLetterform:H.panose[7]||0,bMidline:H.panose[8]||0,bXHeight:H.panose[9]||0,fsSelection:Z},H.tables.os2)})}this.supported=!0,this.glyphs=new p1.GlyphSet(this,H.glyphs||[]),this.encoding=new Z8(this),this.position=new FH(this),this.substitution=new NH(this),this.tables=this.tables||{},this.tables=new Proxy(this.tables,{set:(Z,W,K)=>{if(Z[W]=K,Z.fvar&&(Z.gvar||Z.cff2)&&!this.variation)this.variation=new jH(this);return!0}}),this.palettes=new n8(this),this.layers=new DH(this),this.svgImages=new PH(this),this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new XZ(this);return null}})}B0.prototype.hasChar=function(H){return this.encoding.charToGlyphIndex(H)>0},B0.prototype.charToGlyphIndex=function(H){return this.encoding.charToGlyphIndex(H)},B0.prototype.charToGlyph=function(H){let Z=this.charToGlyphIndex(H),W=this.glyphs.get(Z);if(!W)W=this.glyphs.get(0);return W},B0.prototype.updateFeatures=function(H){return this.defaultRenderOptions.features.map((Z)=>{if(Z.script==="latn")return{script:"latn",tags:Z.tags.filter((W)=>H[W])};else return Z})},B0.prototype.stringToGlyphIndexes=function(H,Z){let W=new qW,K=(Y)=>this.charToGlyphIndex(Y.char);W.registerModifier("glyphIndex",null,K);let X=Z?this.updateFeatures(Z.features):this.defaultRenderOptions.features;return W.applyFeatures(this,X),W.getTextGlyphs(H)},B0.prototype.stringToGlyphs=function(H,Z){let W=this.stringToGlyphIndexes(H,Z),K=W.length,X=Array(K),Y=this.glyphs.get(0);for(let R=0;R<K;R+=1)X[R]=this.glyphs.get(W[R])||Y;return X},B0.prototype.nameToGlyphIndex=function(H){return this.glyphNames.nameToGlyphIndex(H)},B0.prototype.nameToGlyph=function(H){let Z=this.nameToGlyphIndex(H),W=this.glyphs.get(Z);if(!W)W=this.glyphs.get(0);return W},B0.prototype.glyphIndexToName=function(H){if(!this.glyphNames.glyphIndexToName)return"";return this.glyphNames.glyphIndexToName(H)},B0.prototype.getKerningValue=function(H,Z){H=H.index||H,Z=Z.index||Z;let W=this.position.defaultKerningTables;if(W)return this.position.getKerningValue(W,H,Z);return this.kerningPairs[H+","+Z]||0},B0.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]},{script:"thai",tags:["liga","rlig","ccmp"]}],hinting:!1,usePalette:0,drawLayers:!0,drawSVG:!0},B0.prototype.forEachGlyph=function(H,Z,W,K,X,Y){Z=Z!==void 0?Z:0,W=W!==void 0?W:0,K=K!==void 0?K:72,X=Object.assign({},this.defaultRenderOptions,X);let R=1/this.unitsPerEm*K,O=this.stringToGlyphs(H,X),A;if(X.kerning){let P=X.script||this.position.getDefaultScriptName();A=this.position.getKerningTables(P,X.language)}for(let P=0;P<O.length;P+=1){let D=O[P];if(Y.call(this,D,Z,W,K,X),D.advanceWidth)Z+=D.advanceWidth*R;if(X.kerning&&P<O.length-1){let C=A?this.position.getKerningValue(A,D.index,O[P+1].index):this.getKerningValue(D,O[P+1]);Z+=C*R}if(X.letterSpacing)Z+=X.letterSpacing*K;else if(X.tracking)Z+=X.tracking/1000*K}return Z},B0.prototype.getPath=function(H,Z,W,K,X){X=Object.assign({},this.defaultRenderOptions,X);let Y=new m1;if(Y._layers=[],A8(this,Y,K),Y.stroke){let R=1/(Y.unitsPerEm||1000)*K;Y.strokeWidth*=R}return this.forEachGlyph(H,Z,W,K,X,(R,O,A,P)=>{let D=R.getPath(O,A,P,X,this);if(X.drawSVG||X.drawLayers){let C=D._layers;if(C&&C.length){for(let z=0;z<C.length;z++){let k=C[z];Y._layers.push(k)}return}}Y.extend(D)}),Y},B0.prototype.getPaths=function(H,Z,W,K,X){X=Object.assign({},this.defaultRenderOptions,X);let Y=[];return this.forEachGlyph(H,Z,W,K,X,function(R,O,A,P){let D=R.getPath(O,A,P,X,this);Y.push(D)}),Y},B0.prototype.getAdvanceWidth=function(H,Z,W){return W=Object.assign({},this.defaultRenderOptions,W),this.forEachGlyph(H,0,0,Z,W,function(){})},B0.prototype.draw=function(H,Z,W,K,X,Y){this.getPath(Z,W,K,X,Y).draw(H)},B0.prototype.drawPoints=function(H,Z,W,K,X,Y){Y=Object.assign({},this.defaultRenderOptions,Y),this.forEachGlyph(Z,W,K,X,Y,function(R,O,A,P){R.drawPoints(H,O,A,P,Y,this)})},B0.prototype.drawMetrics=function(H,Z,W,K,X,Y){Y=Object.assign({},this.defaultRenderOptions,Y),this.forEachGlyph(Z,W,K,X,Y,function(R,O,A,P){R.drawMetrics(H,O,A,P)})},B0.prototype.getEnglishName=function(H){let Z=(this.names.unicode||this.names.macintosh||this.names.windows)[H];if(Z)return Z.en},B0.prototype.validate=function(){let H=[],Z=this;function W(X,Y){if(!X)console.warn(`[opentype.js] ${Y}`),H.push(Y)}function K(X){let Y=Z.getEnglishName(X);W(Y&&Y.trim().length>0,"No English "+X+" specified.")}if(K("fontFamily"),K("weightName"),K("manufacturer"),K("copyright"),K("version"),W(this.unitsPerEm>0,"No unitsPerEm specified."),this.tables.colr){let X=this.tables.colr.baseGlyphRecords,Y=-1;for(let R=0;R<X.length;R++){let O=X[R].glyphID;if(W(Y<X[R].glyphID,`baseGlyphs must be sorted by GlyphID in ascending order, but glyphID ${O} comes after ${Y}`),Y>X[R].glyphID)break;Y=O}}return H},B0.prototype.toTables=function(){return YH.fontToTable(this)},B0.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()},B0.prototype.toArrayBuffer=function(){let Z=this.toTables().encode(),W=new ArrayBuffer(Z.length),K=new Uint8Array(W);for(let X=0;X<Z.length;X++)K[X]=Z[X];return W},B0.prototype.download=function(){console.error("DEPRECATED: platform-specific actions are to be implemented on user-side")},B0.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},B0.prototype.macStyleValues={BOLD:1,ITALIC:2,UNDERLINE:4,OUTLINED:8,SHADOW:16,CONDENSED:32,EXTENDED:64},B0.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},B0.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};var I7=B0;function AW(H,Z){let W=new n.Parser(H,Z),K=W.parseUShort(),X=W.parseUShort();if(K!==1)console.warn(`Unsupported hvar table version ${K}.${X}`);let Y=[K,X],R=W.parsePointer32(function(){return this.parseItemVariationStore()}),O=W.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),A=W.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),P=W.parsePointer32(function(){return this.parseDeltaSetIndexMap()});return{version:Y,itemVariationStore:R,advanceWidth:O,lsb:A,rsb:P}}function NW(){console.warn("Writing of hvar tables is not yet supported.")}var DW={make:NW,parse:AW},PW=function(){return{coverage:this.parsePointer(v.coverage),attachPoints:this.parseList(v.pointer(v.uShortList))}},LW=function(){var H=this.parseUShort();if(H0.argument(H===1||H===2||H===3,"Unsupported CaretValue table version."),H===1)return{coordinate:this.parseShort()};else if(H===2)return{pointindex:this.parseShort()};else if(H===3)return{coordinate:this.parseShort()}},MW=function(){return this.parseList(v.pointer(LW))},BW=function(){return{coverage:this.parsePointer(v.coverage),ligGlyphs:this.parseList(v.pointer(MW))}},VW=function(){return this.parseUShort(),this.parseList(v.pointer(v.coverage))};function _W(H,Z){Z=Z||0;let W=new v(H,Z),K=W.parseVersion(1);H0.argument(K===1||K===1.2||K===1.3,"Unsupported GDEF table version.");var X={version:K,classDef:W.parsePointer(v.classDef),attachList:W.parsePointer(PW),ligCaretList:W.parsePointer(BW),markAttachClassDef:W.parsePointer(v.classDef)};if(K>=1.2)X.markGlyphSets=W.parsePointer(VW);return X}var zW={parse:_W},k1=[,,,,,,,,,,];k1[1]=function(){let Z=this.offset+this.relativeOffset,W=this.parseUShort();if(W===1)return{posFormat:1,coverage:this.parsePointer(v.coverage),value:this.parseValueRecord()};else if(W===2)return{posFormat:2,coverage:this.parsePointer(v.coverage),values:this.parseValueRecordList()};H0.assert(!1,"0x"+Z.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")},k1[2]=function(){let Z=this.offset+this.relativeOffset,W=this.parseUShort();H0.assert(W===1||W===2,"0x"+Z.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");let K=this.parsePointer(v.coverage),X=this.parseUShort(),Y=this.parseUShort();if(W===1)return{posFormat:W,coverage:K,valueFormat1:X,valueFormat2:Y,pairSets:this.parseList(v.pointer(v.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(X),value2:this.parseValueRecord(Y)}})))};else if(W===2){let R=this.parsePointer(v.classDef),O=this.parsePointer(v.classDef),A=this.parseUShort(),P=this.parseUShort();return{posFormat:W,coverage:K,valueFormat1:X,valueFormat2:Y,classDef1:R,classDef2:O,class1Count:A,class2Count:P,classRecords:this.parseList(A,v.list(P,function(){return{value1:this.parseValueRecord(X),value2:this.parseValueRecord(Y)}}))}}},k1[3]=function(){return{error:"GPOS Lookup 3 not supported"}},k1[4]=function(){return{error:"GPOS Lookup 4 not supported"}},k1[5]=function(){return{error:"GPOS Lookup 5 not supported"}},k1[6]=function(){return{error:"GPOS Lookup 6 not supported"}},k1[7]=function(){return{error:"GPOS Lookup 7 not supported"}},k1[8]=function(){return{error:"GPOS Lookup 8 not supported"}},k1[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function wW(H,Z){Z=Z||0;let W=new v(H,Z),K=W.parseVersion(1);if(H0.argument(K===1||K===1.1,"Unsupported GPOS table version "+K),K===1)return{version:K,scripts:W.parseScriptList(),features:W.parseFeatureList(),lookups:W.parseLookupList(k1)};else return{version:K,scripts:W.parseScriptList(),features:W.parseFeatureList(),lookups:W.parseLookupList(k1),variations:W.parseFeatureVariationsList()}}var CW=[,,,,,,,,,,];function IW(H){return new u.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new u.ScriptList(H.scripts)},{name:"features",type:"TABLE",value:new u.FeatureList(H.features)},{name:"lookups",type:"TABLE",value:new u.LookupList(H.lookups,CW)}])}var TW={parse:wW,make:IW};function SW(H){let Z={};H.skip("uShort");let W=H.parseUShort();H0.argument(W===0,"Unsupported kern sub-table version."),H.skip("uShort",2);let K=H.parseUShort();H.skip("uShort",3);for(let X=0;X<K;X+=1){let Y=H.parseUShort(),R=H.parseUShort(),O=H.parseShort();Z[Y+","+R]=O}return Z}function kW(H){let Z={};if(H.skip("uShort"),H.parseULong()>1)console.warn("Only the first kern subtable is supported.");H.skip("uLong");let X=H.parseUShort()&255;if(H.skip("uShort"),X===0){let Y=H.parseUShort();H.skip("uShort",3);for(let R=0;R<Y;R+=1){let O=H.parseUShort(),A=H.parseUShort(),P=H.parseShort();Z[O+","+A]=P}}return Z}function jW(H,Z){let W=new n.Parser(H,Z),K=W.parseUShort();if(K===0)return SW(W);else if(K===1)return kW(W);else throw Error("Unsupported kern table version ("+K+").")}var vW={parse:jW};function hW(H,Z,W,K){let X=new n.Parser(H,Z),Y=K?X.parseUShort:X.parseULong,R=[];for(let O=0;O<W+1;O+=1){let A=Y.call(X);if(K)A*=2;R.push(A)}return R}var fW={parse:hW};function T7(H,Z){let W=[],K=12;for(let X=0;X<Z;X+=1){let Y=n.getTag(H,K),R=n.getULong(H,K+4),O=n.getULong(H,K+8),A=n.getULong(H,K+12);W.push({tag:Y,checksum:R,offset:O,length:A,compression:!1}),K+=16}return W}function bW(H,Z){let W=[],K=44;for(let X=0;X<Z;X+=1){let Y=n.getTag(H,K),R=n.getULong(H,K+4),O=n.getULong(H,K+8),A=n.getULong(H,K+12),P;if(O<A)P="WOFF";else P=!1;W.push({tag:Y,offset:R,compression:P,compressedLength:O,length:A}),K+=20}return W}function L0(H,Z){if(Z.compression==="WOFF"){let W=new Uint8Array(H.buffer,Z.offset+2,Z.compressedLength-2),K=new Uint8Array(Z.length);if(Y1(W,K),K.byteLength!==Z.length)throw Error("Decompression error: "+Z.tag+" decompressed length doesn't match recorded length");return{data:new DataView(K.buffer,0),offset:0}}else return{data:H,offset:Z.offset}}function yW(H,Z={}){let W,K,X=new I7({empty:!0});if(H.constructor!==ArrayBuffer)H=new Uint8Array(H).buffer;let Y=new DataView(H,0),R,O=[],A=n.getTag(Y,0);if(A===String.fromCharCode(0,1,0,0)||A==="true"||A==="typ1")X.outlinesFormat="truetype",R=n.getUShort(Y,4),O=T7(Y,R);else if(A==="OTTO")X.outlinesFormat="cff",R=n.getUShort(Y,4),O=T7(Y,R);else if(A==="wOFF"){let Z0=n.getTag(Y,4);if(Z0===String.fromCharCode(0,1,0,0))X.outlinesFormat="truetype";else if(Z0==="OTTO")X.outlinesFormat="cff";else throw Error("Unsupported OpenType flavor "+A);R=n.getUShort(Y,12),O=bW(Y,R)}else if(A==="wOF2")throw Error("WOFF2 require an external decompressor library, see examples at: https://github.com/opentypejs/opentype.js/issues/183#issuecomment-1147228025");else throw Error("Unsupported OpenType signature "+A);let P,D,C,z,k,S,j,g,$0,J0,U0,O0,M0,_0,z0,y0,j1,q0;for(let Z0=0;Z0<R;Z0+=1){let a=O[Z0],e;switch(a.tag){case"avar":j=a;break;case"cmap":e=L0(Y,a),X.tables.cmap=$8.parse(e.data,e.offset),X.encoding=new W8(X.tables.cmap);break;case"cvt ":e=L0(Y,a),q0=new n.Parser(e.data,e.offset),X.tables.cvt=q0.parseShortList(a.length/2);break;case"fvar":C=a;break;case"STAT":z=a;break;case"gvar":k=a;break;case"cvar":S=a;break;case"fpgm":e=L0(Y,a),q0=new n.Parser(e.data,e.offset),X.tables.fpgm=q0.parseByteList(a.length);break;case"head":e=L0(Y,a),X.tables.head=B8.parse(e.data,e.offset),X.unitsPerEm=X.tables.head.unitsPerEm,W=X.tables.head.indexToLocFormat;break;case"hhea":e=L0(Y,a),X.tables.hhea=V8.parse(e.data,e.offset),X.ascender=X.tables.hhea.ascender,X.descender=X.tables.hhea.descender,X.numberOfHMetrics=X.tables.hhea.numberOfHMetrics;break;case"HVAR":M0=a;break;case"hmtx":O0=a;break;case"ltag":e=L0(Y,a),K=z8.parse(e.data,e.offset);break;case"COLR":e=L0(Y,a),X.tables.colr=S8.parse(e.data,e.offset);break;case"CPAL":e=L0(Y,a),X.tables.cpal=Y8.parse(e.data,e.offset);break;case"maxp":e=L0(Y,a),X.tables.maxp=w8.parse(e.data,e.offset),X.numGlyphs=X.tables.maxp.numGlyphs;break;case"name":y0=a;break;case"OS/2":e=L0(Y,a),X.tables.os2=A6.parse(e.data,e.offset);break;case"post":e=L0(Y,a),X.tables.post=C8.parse(e.data,e.offset),X.glyphNames=new U6(X.tables.post);break;case"prep":e=L0(Y,a),q0=new n.Parser(e.data,e.offset),X.tables.prep=q0.parseByteList(a.length);break;case"glyf":g=a;break;case"loca":z0=a;break;case"CFF ":P=a;break;case"CFF2":D=a;break;case"kern":_0=a;break;case"GDEF":$0=a;break;case"GPOS":J0=a;break;case"GSUB":U0=a;break;case"meta":j1=a;break;case"gasp":try{e=L0(Y,a),X.tables.gasp=b8.parse(e.data,e.offset)}catch(i0){console.warn("Failed to parse gasp table, skipping."),console.warn(i0)}break;case"SVG ":e=L0(Y,a),X.tables.svg=y8.parse(e.data,e.offset);break;default:break}}let R1=L0(Y,y0);if(X.tables.name=H8.parse(R1.data,R1.offset,K),X.names=X.tables.name,g&&z0){let Z0=W===0,a=L0(Y,z0),e=fW.parse(a.data,a.offset,X.numGlyphs,Z0),i0=L0(Y,g);X.glyphs=a8.parse(i0.data,i0.offset,e,X,Z)}else if(P){let Z0=L0(Y,P);O6.parse(Z0.data,Z0.offset,X,Z)}else if(D){let Z0=L0(Y,D);O6.parse(Z0.data,Z0.offset,X,Z)}else throw Error("Font doesn't contain TrueType, CFF or CFF2 outlines.");let t0=L0(Y,O0);if(_8.parse(X,t0.data,t0.offset,X.numberOfHMetrics,X.numGlyphs,X.glyphs,Z),fJ(X,Z),_0){let Z0=L0(Y,_0);X.kerningPairs=vW.parse(Z0.data,Z0.offset)}else X.kerningPairs={};if($0){let Z0=L0(Y,$0);X.tables.gdef=zW.parse(Z0.data,Z0.offset)}if(J0){let Z0=L0(Y,J0);X.tables.gpos=TW.parse(Z0.data,Z0.offset),X.position.init()}if(U0){let Z0=L0(Y,U0);X.tables.gsub=I8.parse(Z0.data,Z0.offset)}if(C){let Z0=L0(Y,C);X.tables.fvar=k8.parse(Z0.data,Z0.offset,X.names)}if(z){let Z0=L0(Y,z);X.tables.stat=j8.parse(Z0.data,Z0.offset,X.tables.fvar)}if(k){if(!C)console.warn("This font provides a gvar table, but no fvar table, which is required for variable fonts.");if(!g)console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");let Z0=L0(Y,k);X.tables.gvar=f8.parse(Z0.data,Z0.offset,X.tables.fvar,X.glyphs)}if(S){if(!C)console.warn("This font provides a cvar table, but no fvar table, which is required for variable fonts.");if(!X.tables.cvt)console.warn("This font provides a cvar table, but no cvt table which could be made variable.");if(!g)console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");let Z0=L0(Y,S);X.tables.cvar=h8.parse(Z0.data,Z0.offset,X.tables.fvar,X.tables.cvt||[])}if(j){if(!C)console.warn("This font provides an avar table, but no fvar table, which is required for variable fonts.");let Z0=L0(Y,j);X.tables.avar=v8.parse(Z0.data,Z0.offset,X.tables.fvar)}if(M0){if(!C)console.warn("This font provides an HVAR table, but no fvar table, which is required for variable fonts.");if(!O0)console.warn("This font provides an HVAR table, but no hmtx table to vary.");let Z0=L0(Y,M0);X.tables.hvar=DW.parse(Z0.data,Z0.offset,X.tables.fvar)}if(j1){let Z0=L0(Y,j1);X.tables.meta=T8.parse(Z0.data,Z0.offset),X.metas=X.tables.meta}return X.palettes=new n8(X),X}function xW(){console.error("DEPRECATED! migrate to: opentype.parse(buffer, opt) See: https://github.com/opentypejs/opentype.js/issues/675")}function gW(){console.error('DEPRECATED! migrate to: opentype.parse(require("fs").readFileSync(url), opt)')}return E(q)})();(function(J,Q){if(typeof define==="function"&&define.amd)define(Q);else if(typeof J6==="object"&&J6.exports)J6.exports=Q();else J.opentype=Q()})(typeof self<"u"?self:s9,()=>({...n9,default:n9}))});class w4{_pointer;_data;_eof;lastReadGroup;constructor(J){this._pointer=0,this._data=J,this._eof=!1}next(){if(!this.hasNext())if(!this._eof)throw Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);else throw Error("Cannot call 'next' after EOF group has been read");let J={code:parseInt(this._data[this._pointer],10)};if(isNaN(J.code))throw Error("Cannot parse group code: "+this._data[this._pointer]);if(this._pointer++,J.value=f7(J.code,this._data[this._pointer]),this._pointer++,J.code===0&&J.value==="EOF")this._eof=!0;return this.lastReadGroup=J,J}peek(){if(!this.hasNext())if(!this._eof)throw Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);else throw Error("Cannot call 'next' after EOF group has been read");let J={code:parseInt(this._data[this._pointer],10)};if(isNaN(J.code))throw Error("Cannot parse group code: "+this._data[this._pointer]);return J.value=f7(J.code,this._data[this._pointer+1]),J}rewind(J=1){this._pointer=this._pointer-J*2}hasNext(){if(this._eof)return!1;if(this._pointer>this._data.length-2)return!1;return!0}isEOF(){return this._eof}}function f7(J,Q){if(J<=9)return Q;if(J>=10&&J<=59)return parseFloat(Q.trim());if(J>=60&&J<=99)return parseInt(Q.trim(),10);if(J>=100&&J<=109)return Q;if(J>=110&&J<=149)return parseFloat(Q.trim());if(J>=160&&J<=179)return parseInt(Q.trim(),10);if(J>=210&&J<=239)return parseFloat(Q.trim());if(J>=270&&J<=289)return parseInt(Q.trim(),10);if(J>=290&&J<=299)return cW(Q.trim());if(J>=300&&J<=369)return Q;if(J>=370&&J<=389)return parseInt(Q.trim(),10);if(J>=390&&J<=399)return Q;if(J>=400&&J<=409)return parseInt(Q.trim(),10);if(J>=410&&J<=419)return Q;if(J>=420&&J<=429)return parseInt(Q.trim(),10);if(J>=430&&J<=439)return Q;if(J>=440&&J<=459)return parseInt(Q.trim(),10);if(J>=460&&J<=469)return parseFloat(Q.trim());if(J>=470&&J<=481)return Q;if(J===999)return Q;if(J>=1000&&J<=1009)return Q;if(J>=1010&&J<=1059)return parseFloat(Q.trim());if(J>=1060&&J<=1071)return parseInt(Q.trim(),10);return console.log("WARNING: Group code does not have a defined type: %j",{code:J,value:Q}),Q}function cW(J){if(J==="0")return!1;if(J==="1")return!0;throw TypeError("String '"+J+"' cannot be cast to Boolean type")}var iW=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215],u2=iW;var d2=v6(h6(),1);class I4{appName;appNameWarningShown;lastString;sectionStack;failure;constructor(){this.appName=null,this.appNameWarningShown=!1,this.lastString=null,this.sectionStack=[this._CreateSection()],this.failure=!1}Feed(J){if(!this.appName){if(J.code===1001)return this.appName=J.value,!1;if(!this.appNameWarningShown)this.appNameWarningShown=!0,d2.default.warn("XDATA section does not start with application name");return!1}if(J.code===1001)return!0;if(this.failure)return!1;if(J.code===1000){if(this.lastString)d2.default.warn("XDATA section unused string: "+this.lastString);return this.lastString=J.value,!1}let Q=this._currentSection;if(J.code===1002){if(J.value==="{"){if(!this.lastString)return d2.default.warn("Unnamed XDATA section encountered"),this.failure=!0,!1;let $=this._CreateSection();return Q[this.lastString]=$,this.lastString=null,this.sectionStack.push($),!1}if(J.value==="}"){if(this.sectionStack.length<2)return d2.default.warn("Unmatched XDATA section closing"),this.failure=!0,!1;return this.sectionStack.pop(),!1}return d2.default.warn("Bad XDATA section control string encountered: "+J.value),this.failure=!0,!1}if(this.lastString!==null)Q.values.push(this._CreateValue(1000,this.lastString)),this.lastString=null;return Q.values.push(this._CreateValue(J.code,J.value)),!1}Finish(J){if(this.failure)return;if(this.appName){let Q;if(Object.prototype.hasOwnProperty.call(J,"xdata"))Q=J.xdata;else Q={},J.xdata=Q;Q[this.appName]=this.sectionStack[0]}}get _currentSection(){return this.sectionStack[this.sectionStack.length-1]}_CreateSection(){return{values:[]}}_CreateValue(J,Q){return{code:J,value:Q}}}function nW(J){return u2[J]}function o(J){let Q={x:0,y:0};J.rewind();let $=J.next(),U=$.code;if(Q.x=$.value,U+=10,$=J.next(),$.code!==U)throw Error("Expected code for point value to be "+U+" but got "+$.code+".");if(Q.y=$.value,U+=10,$=J.next(),$.code!==U)return J.rewind(),Q;return Q.z=$.value,Q}function f1(J){J.rewind();let Q=J.next();if(Q.code!==101)throw Error("Bad call for skipEmbeddedObject()");do Q=J.next();while(Q.code!==0);J.rewind()}function A0(J,Q,$){let U=null;while(Q.code>=1000){if(U===null)U=new I4;if(U.Feed(Q))U.Finish(J),U=null;else Q=$.next()}if(U)return U.Finish(J),$.rewind(),!0;switch(Q.code){case 0:J.type=Q.value;break;case 5:J.handle=Q.value;break;case 6:J.lineType=Q.value;break;case 8:J.layer=Q.value;break;case 48:J.lineTypeScale=Q.value;break;case 60:J.hidden=Boolean(Q.value);break;case 62:J.colorIndex=Q.value,J.color=nW(Math.abs(Q.value));break;case 67:J.inPaperSpace=Q.value!==0;break;case 100:break;case 101:f1($);break;case 330:J.ownerHandle=Q.value;break;case 347:J.materialObjectHandle=Q.value;break;case 370:J.lineweight=Q.value;break;case 420:J.color=Q.value;break;default:return!1}return!0}function X5(){}X5.ForEntityName="3DFACE";X5.prototype.parseEntity=function(J,Q){var $={type:Q.value,vertices:[]};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 70:$.shape=(Q.value&1)===1,$.hasContinuousLinetypePattern=(Q.value&128)===128;break;case 10:$.vertices=sW(J,Q),Q=J.lastReadGroup;break;default:A0($,Q,J);break}Q=J.next()}return $};function sW(J,Q){var $=[],U,F=!1,G=!1,E=4;for(U=0;U<=E;U++){var q={};while(Q!=="EOF"){if(Q.code===0||G)break;switch(Q.code){case 10:case 11:case 12:case 13:if(F){G=!0;continue}q.x=Q.value,F=!0;break;case 20:case 21:case 22:case 23:q.y=Q.value;break;case 30:case 31:case 32:case 33:q.z=Q.value;break;default:return $}Q=J.next()}$.push(q),F=!1,G=!1}return J.rewind(),$}function Y5(){}Y5.ForEntityName="ARC";Y5.prototype.parseEntity=function(J,Q){var $,U;$={type:Q.value},Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.center=o(J);break;case 40:$.radius=Q.value;break;case 50:$.startAngle=Math.PI/180*Q.value;break;case 51:$.endAngle=Math.PI/180*Q.value;break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function F5(){}F5.ForEntityName="ATTDEF";F5.prototype.parseEntity=function(J,Q){var $={type:Q.value,scale:1,textStyle:"STANDARD"};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 1:$.text=Q.value;break;case 2:$.tag=Q.value;break;case 3:$.prompt=Q.value;break;case 7:$.textStyle=Q.value;break;case 10:$.startPoint=o(J);break;case 11:$.endPoint=o(J);break;case 39:$.thickness=Q.value;break;case 40:$.textHeight=Q.value;break;case 41:$.scale=Q.value;break;case 50:$.rotation=Q.value;break;case 51:$.obliqueAngle=Q.value;break;case 70:$.hidden=!!(Q.value&1),$.constant=!!(Q.value&2),$.verificationRequired=!!(Q.value&4),$.preset=!!(Q.value&8);break;case 71:$.backwards=!!(Q.value&2),$.mirrored=!!(Q.value&4);break;case 72:$.horizontalJustification=Q.value;break;case 73:$.fieldLength=Q.value;break;case 74:$.verticalJustification=Q.value;break;case 100:break;case 101:f1(J);break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function G5(){}G5.ForEntityName="ATTRIB";G5.prototype.parseEntity=function(J,Q){var $={type:Q.value,scale:1,textStyle:"STANDARD"};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 1:$.text=Q.value;break;case 2:$.tag=Q.value;break;case 3:$.prompt=Q.value;break;case 7:$.textStyle=Q.value;break;case 10:$.startPoint=o(J);break;case 11:$.endPoint=o(J);break;case 39:$.thickness=Q.value;break;case 40:$.textHeight=Q.value;break;case 41:$.scale=Q.value;break;case 44:$.lineSpacingFactor=Q.value;break;case 45:$.fillBoxScale=Q.value;break;case 46:$.annotationHeight=Q.value;break;case 50:$.rotation=Q.value;break;case 51:$.obliqueAngle=Q.value;break;case 63:$.backgroundFillColor=Q.value;break;case 70:$.hidden=!!(Q.value&1),$.constant=!!(Q.value&2),$.verificationRequired=!!(Q.value&4),$.preset=!!(Q.value&8);break;case 71:$.attachmentPoint=Q.value;break;case 72:$.horizontalJustification=Q.value;break;case 73:$.lineSpacing=Q.value;break;case 74:$.verticalJustification=Q.value;break;case 90:$.backgroundFillSetting=Q.value;break;case 100:break;case 101:f1(J);break;case 210:$.extrusionDirection=o(J);break;case 280:$.lockPositionFlag=Q.value;break;case 340:$.hardPointerId=Q.value;break;default:A0($,Q,J);break}Q=J.next()}return $};function R5(){}R5.ForEntityName="CIRCLE";R5.prototype.parseEntity=function(J,Q){var $,U;$={type:Q.value},Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.center=o(J);break;case 40:$.radius=Q.value;break;case 50:$.startAngle=Math.PI/180*Q.value;break;case 51:if(U=Math.PI/180*Q.value,U<$.startAngle)$.angleLength=U+2*Math.PI-$.startAngle;else $.angleLength=U-$.startAngle;$.endAngle=U;break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function E5(){}E5.ForEntityName="DIMENSION";E5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 2:$.block=Q.value;break;case 3:$.styleName=Q.value;break;case 10:$.anchorPoint=o(J);break;case 11:$.middleOfText=o(J);break;case 12:$.insertionPoint=o(J);break;case 13:$.linearOrAngularPoint1=o(J);break;case 14:$.linearOrAngularPoint2=o(J);break;case 15:$.diameterOrRadiusPoint=o(J);break;case 16:$.arcPoint=o(J);break;case 70:$.dimensionType=Q.value;break;case 71:$.attachmentPoint=Q.value;break;case 42:$.actualMeasurement=Q.value;break;case 1:$.text=Q.value;break;case 50:$.angle=Q.value;break;case 53:$.textRotation=Q.value;break;default:A0($,Q,J);break}Q=J.next()}return $};function O5(){}O5.ForEntityName="ELLIPSE";O5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.center=o(J);break;case 11:$.majorAxisEndPoint=o(J);break;case 40:$.axisRatio=Q.value;break;case 41:$.startAngle=Q.value;break;case 42:$.endAngle=Q.value;break;case 2:$.name=Q.value;break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function q5(){}q5.ForEntityName="INSERT";q5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 2:$.name=Q.value;break;case 41:$.xScale=Q.value;break;case 42:$.yScale=Q.value;break;case 43:$.zScale=Q.value;break;case 10:$.position=o(J);break;case 50:$.rotation=Q.value;break;case 70:$.columnCount=Q.value;break;case 71:$.rowCount=Q.value;break;case 44:$.columnSpacing=Q.value;break;case 45:$.rowSpacing=Q.value;break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function A5(){}A5.ForEntityName="LINE";A5.prototype.parseEntity=function(J,Q){var $={type:Q.value,vertices:[]};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.vertices.unshift(o(J));break;case 11:$.vertices.push(o(J));break;case 210:$.extrusionDirection=o(J);break;case 100:break;default:A0($,Q,J);break}Q=J.next()}return $};function N5(){}N5.ForEntityName="LWPOLYLINE";N5.prototype.parseEntity=function(J,Q){var $={type:Q.value,vertices:[]},U=0;Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 38:$.elevation=Q.value;break;case 39:$.depth=Q.value;break;case 70:$.shape=(Q.value&1)===1,$.hasContinuousLinetypePattern=(Q.value&128)===128;break;case 90:U=Q.value;break;case 10:$.vertices=oW(U,J);break;case 43:if(Q.value!==0)$.width=Q.value;break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function oW(J,Q){if(!J||J<=0)throw Error("n must be greater than 0 vertices");var $=[],U,F=!1,G=!1,E=Q.lastReadGroup;for(U=0;U<J;U++){var q={};while(E!=="EOF"){if(E.code===0||G)break;switch(E.code){case 10:if(F){G=!0;continue}q.x=E.value,F=!0;break;case 20:q.y=E.value;break;case 30:q.z=E.value;break;case 40:q.startWidth=E.value;break;case 41:q.endWidth=E.value;break;case 42:if(E.value!=0)q.bulge=E.value;break;case 91:q.id=E.value;break;default:if(F)$.push(q);return Q.rewind(),$}E=Q.next()}$.push(q),F=!1,G=!1}return Q.rewind(),$}function D5(){}D5.ForEntityName="MTEXT";D5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 3:case 1:$.text?$.text+=Q.value:$.text=Q.value;break;case 10:$.position=o(J);break;case 11:$.direction=o(J);break;case 40:$.height=Q.value;break;case 41:$.width=Q.value;break;case 44:$.lineSpacing=Q.value;break;case 50:$.rotation=Q.value;break;case 7:$.styleName=Q.value;break;case 71:$.attachmentPoint=Q.value;break;case 72:$.drawingDirection=Q.value;break;case 101:f1(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function P5(){}P5.ForEntityName="POINT";P5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.position=o(J);break;case 39:$.thickness=Q.value;break;case 210:$.extrusionDirection=o(J);break;case 100:break;default:A0($,Q,J);break}Q=J.next()}return $};function L5(){}L5.ForEntityName="VERTEX";L5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.x=Q.value;break;case 20:$.y=Q.value;break;case 30:$.z=Q.value;break;case 40:break;case 41:break;case 42:if(Q.value!=0)$.bulge=Q.value;break;case 70:$.curveFittingVertex=(Q.value&1)!==0,$.curveFitTangent=(Q.value&2)!==0,$.splineVertex=(Q.value&8)!==0,$.splineControlPoint=(Q.value&16)!==0,$.threeDPolylineVertex=(Q.value&32)!==0,$.threeDPolylineMesh=(Q.value&64)!==0,$.polyfaceMeshVertex=(Q.value&128)!==0;break;case 50:break;case 71:$.faces=[Q.value];break;case 72:$.faces[1]=Q.value;break;case 73:$.faces[2]=Q.value;break;case 74:$.faces[3]=Q.value;break;default:A0($,Q,J);break}Q=J.next()}return $};function M5(){}M5.ForEntityName="POLYLINE";M5.prototype.parseEntity=function(J,Q){var $={type:Q.value,vertices:[]};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:break;case 20:break;case 30:break;case 39:$.thickness=Q.value;break;case 40:break;case 41:break;case 70:$.shape=(Q.value&1)!==0,$.includesCurveFitVertices=(Q.value&2)!==0,$.includesSplineFitVertices=(Q.value&4)!==0,$.is3dPolyline=(Q.value&8)!==0,$.is3dPolygonMesh=(Q.value&16)!==0,$.is3dPolygonMeshClosed=(Q.value&32)!==0,$.isPolyfaceMesh=(Q.value&64)!==0,$.hasContinuousLinetypePattern=(Q.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $.vertices=rW(J,Q),$};function rW(J,Q){var $=new L5,U=[];while(!J.isEOF())if(Q.code===0){if(Q.value==="VERTEX")U.push($.parseEntity(J,Q)),Q=J.lastReadGroup;else if(Q.value==="SEQEND"){aW(J,Q);break}}return U}function aW(J,Q){var $={type:Q.value};Q=J.next();while(Q!="EOF"){if(Q.code==0)break;A0($,Q,J),Q=J.next()}return $}function B5(){}B5.ForEntityName="SOLID";B5.prototype.parseEntity=function(J,Q){var $={type:Q.value};$.points=[],Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.points[0]=o(J);break;case 11:$.points[1]=o(J);break;case 12:$.points[2]=o(J);break;case 13:$.points[3]=o(J);break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function V5(){}V5.ForEntityName="SPLINE";V5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:if(!$.controlPoints)$.controlPoints=[];$.controlPoints.push(o(J));break;case 11:if(!$.fitPoints)$.fitPoints=[];$.fitPoints.push(o(J));break;case 12:$.startTangent=o(J);break;case 13:$.endTangent=o(J);break;case 40:if(!$.knotValues)$.knotValues=[];$.knotValues.push(Q.value);break;case 70:if((Q.value&1)!=0)$.closed=!0;if((Q.value&2)!=0)$.periodic=!0;if((Q.value&4)!=0)$.rational=!0;if((Q.value&8)!=0)$.planar=!0;if((Q.value&16)!=0)$.planar=!0,$.linear=!0;break;case 71:$.degreeOfSplineCurve=Q.value;break;case 72:$.numberOfKnots=Q.value;break;case 73:$.numberOfControlPoints=Q.value;break;case 74:$.numberOfFitPoints=Q.value;break;case 210:$.extrusionDirection=o(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function _5(){}_5.ForEntityName="TEXT";_5.prototype.parseEntity=function(J,Q){var $={type:Q.value};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.startPoint=o(J);break;case 11:$.endPoint=o(J);break;case 40:$.textHeight=Q.value;break;case 41:$.xScale=Q.value;break;case 50:$.rotation=Q.value;break;case 7:$.styleName=Q.value;break;case 1:$.text=Q.value;break;case 72:$.halign=Q.value;break;case 73:$.valign=Q.value;break;case 100:break;case 101:f1(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function z5(){}z5.ForEntityName="HATCH";z5.prototype.parseEntity=function(J,Q){var $={type:Q.value};let U=0,F=0,G=0;Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;while(U>0){let E=tW(Q,J);if(E)$.boundaryLoops.push(E),U--,Q=J.next();else U=0}while(F>0){let E=eW(Q,J);if(E)$.definitionLines.push(E),F--,Q=J.next();else F=0}while(G>0){let E=JK(Q,J);if(E)$.seedPoints.push(E),G--,Q=J.next();else G=0}if(Q.code===0)break;switch(Q.code){case 2:$.patternName=Q.value;break;case 70:$.isSolid=Q.value!=0;break;case 91:if(U=Q.value,U>0)$.boundaryLoops=[];break;case 75:$.hatchStyle=Q.value;break;case 76:$.patternType=Q.value;break;case 52:$.patternAngle=Q.value*Math.PI/180;break;case 41:$.patternScale=Q.value;break;case 78:if(F=Q.value,F>0)$.definitionLines=[];break;case 98:if(G=Q.value,G>0)$.seedPoints=[];break;default:A0($,Q,J);break}Q=J.next()}return $};function tW(J,Q){let $=null,U=()=>{let N={vertices:[],isClosed:!1},B=!1,V=0;while(!0){if(V>0){for(let w=0;w<V;w++){if(J.code!=10)break;let _=o(Q);if(J=Q.next(),J.code==42)_.bulge=J.value,J=Q.next();N.vertices.push(_)}return N}switch(J.code){case 72:B=J.value;break;case 73:N.isClosed=J.value;break;case 93:V=J.value;break;default:return N}J=Q.next()}},F=()=>{if(J.code!=72)return null;let N={type:J.value};J=Q.next();let B=N.type==4;while(!0){switch(J.code){case 10:if(B){if(!N.controlPoints)N.controlPoints=[];N.controlPoints.push(o(Q))}else N.start=o(Q);break;case 11:if(B){if(!N.fitPoints)N.fitPoints=[];N.fitPoints.push(o(Q))}else N.end=o(Q);break;case 40:if(B){if(!N.knotValues)N.knotValues=[];N.knotValues.push(J.value)}else N.radius=J.value;break;case 50:N.startAngle=J.value*Math.PI/180;break;case 51:N.endAngle=J.value*Math.PI/180;break;case 73:if(B)N.rational=J.value;else N.isCcw=J.value;break;case 74:N.periodic=J.value;break;case 94:N.degreeOfSplineCurve=J.value;break;case 95:case 96:case 40:case 42:case 97:break;default:return N}J=Q.next()}},G=!1,E=0,q=0;while(!0){if(!$){if(J.code!=92)return null;$={type:J.value,isExternal:(J.value&1)!=0,isOutermost:(J.value&16)!=0},J=Q.next()}if($.type&2&&!G)$.polyline=U(),G=!0;while(E){let N=F();if(N)$.edges.push(N),E--;else E=0}while(q)if(J.code==330)$.sourceRefs.push(J.value),q--,J=Q.next();else q=0;switch(J.code){case 93:if(E=J.value,E>0)$.edges=[];break;case 97:if(q=J.value,q>0)$.sourceRefs=[];break;default:return Q.rewind(),$}J=Q.next()}}function eW(J,Q){if(J.code!=53)return null;let $={angle:J.value*Math.PI/180,base:{x:0,y:0},offset:{x:0,y:0}};J=Q.next();let U=0;while(!0){switch(J.code){case 43:$.base.x=J.value;break;case 44:$.base.y=J.value;break;case 45:$.offset.x=J.value;break;case 46:$.offset.y=J.value;break;case 49:if(U>0)$.dashes.push(J.value),U--;break;case 79:if(U=J.value,J.value)$.dashes=[];break;default:return Q.rewind(),$}J=Q.next()}}function JK(J,Q){if(J.code!=10)return null;return o(Q)}var QK=new Map([[140,"DIMTXT"],[142,"DIMTSZ"],[144,"DIMLFAC"],[147,"DIMGAP"],[173,"DIMSAH"],[175,"DIMSOXD"],[176,"DIMCLRD"],[177,"DIMCLRE"],[178,"DIMCLRT"],[271,"DIMDEC"],[278,"DIMDSEP"],[281,"DIMSD1"],[282,"DIMSD2"],[3,"DIMPOST"],[40,"DIMSCALE"],[41,"DIMASZ"],[42,"DIMEXO"],[44,"DIMEXE"],[45,"DIMRND"],[46,"DIMDLE"],[5,"DIMBLK"],[6,"DIMBLK1"],[7,"DIMBLK2"],[75,"DIMSE1"],[76,"DIMSE2"],[78,"DIMZIN"]]),w5=QK;var R0=v6(h6(),1);R0.default.setLevel("error");function f6(){}f6.ForEntityName="IMAGE";f6.prototype.parseEntity=function(J,Q){let $={type:Q.value,insertionPoint:{x:0,y:0,z:0},uVector:{x:1,y:0,z:0},vVector:{x:0,y:1,z:0},imageSize:{x:0,y:0},displayFlags:7,clipping:!1,brightness:50,contrast:50,fade:0,clipBoundary:[]};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.insertionPoint=o(J);break;case 11:$.uVector=o(J);break;case 12:$.vVector=o(J);break;case 13:$.imageSize.x=Q.value;break;case 23:$.imageSize.y=Q.value;break;case 340:$.imageDefHandle=Q.value;break;case 70:$.displayFlags=Q.value;break;case 280:$.clipping=Q.value!==0;break;case 281:$.brightness=Q.value;break;case 282:$.contrast=Q.value;break;case 283:$.fade=Q.value;break;case 14:{let U={x:Q.value,y:0},F=J.next();if(F&&F.code===24)U.y=F.value;$.clipBoundary.push(U);break}case 100:break;case 101:f1(J);break;default:A0($,Q,J);break}Q=J.next()}return $};function b6(){}b6.ForEntityName="VIEWPORT";b6.prototype.parseEntity=function(J,Q){let $={type:Q.value,center:{x:0,y:0,z:0},width:0,height:0,viewCenter:{x:0,y:0},viewHeight:0,viewTwistAngle:0,viewportId:0,status:0,frozenLayerHandles:[]};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.center=o(J);break;case 40:$.width=Q.value;break;case 41:$.height=Q.value;break;case 12:$.viewCenter.x=Q.value;break;case 22:$.viewCenter.y=Q.value;break;case 45:$.viewHeight=Q.value;break;case 51:$.viewTwistAngle=Q.value;break;case 68:$.status=Q.value;break;case 69:$.viewportId=Q.value;break;case 331:$.frozenLayerHandles.push(Q.value);break;default:A0($,Q,J);break}Q=J.next()}return $};function y6(){}y6.ForEntityName="OLE2FRAME";y6.prototype.parseEntity=function(J,Q){let $={type:Q.value,upperLeft:{x:0,y:0,z:0},lowerRight:{x:0,y:0,z:0},binaryData:[]};Q=J.next();while(Q!=="EOF"){if(Q.code===0)break;switch(Q.code){case 10:$.upperLeft=o(J);break;case 11:$.lowerRight=o(J);break;case 70:$.oleVersion=Q.value;break;case 72:$.aspect=Q.value;break;case 73:$.quality=Q.value;break;case 90:$.binaryDataLength=Q.value;break;case 310:$.binaryData.push(Q.value);break;case 100:break;default:A0($,Q,J);break}Q=J.next()}return $};function HK(J){J.registerEntityHandler(X5),J.registerEntityHandler(Y5),J.registerEntityHandler(F5),J.registerEntityHandler(G5),J.registerEntityHandler(R5),J.registerEntityHandler(E5),J.registerEntityHandler(O5),J.registerEntityHandler(q5),J.registerEntityHandler(A5),J.registerEntityHandler(N5),J.registerEntityHandler(D5),J.registerEntityHandler(P5),J.registerEntityHandler(M5),J.registerEntityHandler(B5),J.registerEntityHandler(V5),J.registerEntityHandler(_5),J.registerEntityHandler(z5),J.registerEntityHandler(f6),J.registerEntityHandler(b6),J.registerEntityHandler(y6)}function F2(){this._entityHandlers={},HK(this)}F2.prototype.parse=function(J,Q){throw Error("read() not implemented. Use readSync()")};F2.prototype.registerEntityHandler=function(J){var Q=new J;this._entityHandlers[J.ForEntityName]=Q};F2.prototype.parseSync=function(J){if(typeof J==="string")return this._parse(J);else return console.error("Cannot read DXF source of type `"+typeof J),null};F2.prototype.parseStream=function(J,Q){var $="",U=this;J.on("data",F),J.on("end",G),J.on("error",E);function F(q){$+=q}function G(){try{var q=U._parse($)}catch(N){return Q(N)}Q(null,q)}function E(q){Q(q)}};F2.prototype._parse=function(J){var Q,$,U={},F=0,G=J.split(/\r\n|\r|\n/g);if(Q=new w4(G),!Q.hasNext())throw Error("Empty file");var E=this,q=function(){$=Q.next();while(!Q.isEOF())if($.code===0&&$.value==="SECTION"){if($=Q.next(),$.code!==2){console.error("Unexpected code %s after 0:SECTION",y7($)),$=Q.next();continue}if($.value==="HEADER")R0.default.debug("> HEADER"),U.header=B(),R0.default.debug("<");else if($.value==="BLOCKS")R0.default.debug("> BLOCKS"),U.blocks=V(),R0.default.debug("<");else if($.value==="ENTITIES")R0.default.debug("> ENTITIES"),U.entities=t(!1),R0.default.debug("<");else if($.value==="TABLES")R0.default.debug("> TABLES"),U.tables=_(),R0.default.debug("<");else if($.value==="OBJECTS"){R0.default.debug("> OBJECTS");let b=W0();U.layouts=b.layouts,U.imageDefs=b.imageDefs,R0.default.debug("<")}else if($.value==="EOF")R0.default.debug("EOF");else R0.default.warn("Skipping section '%s'",$.value)}else $=Q.next()},N=function(b,y){return $.code===b&&$.value===y},B=function(){var b=null,y=null,c={};$=Q.next();while(!0){if(N(0,"ENDSEC")){if(b!=null)c[b]=y;break}else if($.code===9){if(b!=null)c[b]=y;b=$.value}else if($.code===10)y={x:$.value};else if($.code===20)y.y=$.value;else if($.code===30)y.z=$.value;else y=$.value;$=Q.next()}return $=Q.next(),c},V=function(){var b={},y;$=Q.next();while($.value!=="EOF"){if(N(0,"ENDSEC"))break;if(N(0,"BLOCK"))if(R0.default.debug("block {"),y=w(),R0.default.debug("}"),F0(y),!y.name)R0.default.error('block with handle "'+y.handle+'" is missing a name.');else b[y.name]=y;else t1($),$=Q.next()}return b},w=function(){var b={};$=Q.next();while($.value!=="EOF"){switch($.code){case 1:b.xrefPath=$.value,$=Q.next();break;case 2:b.name=$.value,$=Q.next();break;case 3:b.name2=$.value,$=Q.next();break;case 5:b.handle=$.value,$=Q.next();break;case 8:b.layer=$.value,$=Q.next();break;case 10:b.position=s(),$=Q.next();break;case 67:b.inPaperSpace=$.value&&$.value==1?!0:!1,$=Q.next();break;case 70:if($.value!=0)b.type=$.value;$=Q.next();break;case 100:$=Q.next();break;case 330:b.ownerHandle=$.value,$=Q.next();break;case 0:if($.value=="ENDBLK")break;b.entities=t(!0);break;default:t1($),$=Q.next()}if(N(0,"ENDBLK")){$=Q.next();break}}return b},_=function(){var b={};$=Q.next();while($.value!=="EOF"){if(N(0,"ENDSEC"))break;if(N(0,"TABLE")){$=Q.next();var y=x[$.value];if(y)R0.default.debug($.value+" Table {"),b[x[$.value].tableName]=T(),R0.default.debug("}");else R0.default.debug("Unhandled Table "+$.value)}else $=Q.next()}return $=Q.next(),b};let I="ENDTAB";var T=function(){var b=x[$.value],y={},c=0,G0;$=Q.next();while(!N(0,I))switch($.code){case 5:y.handle=$.value,$=Q.next();break;case 330:y.ownerHandle=$.value,$=Q.next();break;case 100:if($.value==="AcDbSymbolTable")$=Q.next();else t1($),$=Q.next();break;case 70:c=$.value,$=Q.next();break;case 0:if($.value===b.dxfSymbolName)y[b.tableRecordsProperty]=b.parseTableRecords();else t1($),$=Q.next();break;default:t1($),$=Q.next()}var N0=y[b.tableRecordsProperty];if(N0){if(N0.constructor===Array)G0=N0.length;else if(typeof N0==="object")G0=Object.keys(N0).length;if(c!==G0)R0.default.warn(`Parsed ${G0} ${b.dxfSymbolName}'s but expected ${c}`)}else y[b.tableRecordsProperty]=[];return $=Q.next(),y},f=function(){var b=[],y={};R0.default.debug("ViewPort {"),$=Q.next();while(!N(0,I))switch($.code){case 2:y.name=$.value,$=Q.next();break;case 10:y.lowerLeftCorner=s(),$=Q.next();break;case 11:y.upperRightCorner=s(),$=Q.next();break;case 12:y.center=s(),$=Q.next();break;case 13:y.snapBasePoint=s(),$=Q.next();break;case 14:y.snapSpacing=s(),$=Q.next();break;case 15:y.gridSpacing=s(),$=Q.next();break;case 16:y.viewDirectionFromTarget=s(),$=Q.next();break;case 17:y.viewTarget=s(),$=Q.next();break;case 42:y.lensLength=$.value,$=Q.next();break;case 43:y.frontClippingPlane=$.value,$=Q.next();break;case 44:y.backClippingPlane=$.value,$=Q.next();break;case 45:y.viewHeight=$.value,$=Q.next();break;case 50:y.snapRotationAngle=$.value,$=Q.next();break;case 51:y.viewTwistAngle=$.value,$=Q.next();break;case 79:y.orthographicType=$.value,$=Q.next();break;case 110:y.ucsOrigin=s(),$=Q.next();break;case 111:y.ucsXAxis=s(),$=Q.next();break;case 112:y.ucsYAxis=s(),$=Q.next();break;case 110:y.ucsOrigin=s(),$=Q.next();break;case 281:y.renderMode=$.value,$=Q.next();break;case 281:y.defaultLightingType=$.value,$=Q.next();break;case 292:y.defaultLightingOn=$.value,$=Q.next();break;case 330:y.ownerHandle=$.value,$=Q.next();break;case 63:case 421:case 431:y.ambientColor=$.value,$=Q.next();break;case 0:if($.value==="VPORT")R0.default.debug("}"),b.push(y),R0.default.debug("ViewPort {"),y={},$=Q.next();break;default:t1($),$=Q.next();break}return R0.default.debug("}"),b.push(y),b},h=function(){var b={},y,c={},G0;R0.default.debug("LType {"),$=Q.next();while(!N(0,"ENDTAB"))switch($.code){case 2:c.name=$.value,y=$.value,$=Q.next();break;case 3:c.description=$.value,$=Q.next();break;case 73:if(G0=$.value,G0>0)c.pattern=[];$=Q.next();break;case 40:c.patternLength=$.value,$=Q.next();break;case 49:c.pattern.push($.value),$=Q.next();break;case 0:if(R0.default.debug("}"),G0>0&&G0!==c.pattern.length)R0.default.warn("lengths do not match on LTYPE pattern");b[y]=c,c={},R0.default.debug("LType {"),$=Q.next();break;default:$=Q.next()}return R0.default.debug("}"),b[y]=c,b},p=function(){var b={},y,c={};R0.default.debug("Layer {"),$=Q.next();while(!N(0,"ENDTAB"))switch($.code){case 2:c.name=$.value,y=$.value,$=Q.next();break;case 5:c.handle=$.value,$=Q.next();break;case 62:c.visible=$.value>=0,c.colorIndex=Math.abs($.value),c.color=$K(c.colorIndex),$=Q.next();break;case 70:c.frozen=($.value&1)!==0||($.value&2)!==0,$=Q.next();break;case 290:c.plot=$.value,$=Q.next();break;case 420:c.color=$.value,$=Q.next();break;case 0:if($.value==="LAYER")R0.default.debug("}"),b[y]=c,R0.default.debug("Layer {"),c={},y=void 0,$=Q.next();break;default:t1($),$=Q.next();break}return R0.default.debug("}"),b[y]=c,b},d=function(){var b={},y,c={};R0.default.debug("DimStyle {"),$=Q.next();while(!N(0,"ENDTAB"))if(w5.has($.code))c[w5.get($.code)]=$.value,$=Q.next();else switch($.code){case 2:c.name=$.value,y=$.value,$=Q.next();break;case 0:if($.value==="DIMSTYLE")R0.default.debug("}"),b[y]=c,R0.default.debug("DimStyle {"),c={},y=void 0,$=Q.next();break;default:t1($),$=Q.next();break}return R0.default.debug("}"),b[y]=c,b},m=function(){var b={},y={},c;R0.default.debug("Style {"),$=Q.next();while(!N(0,I))switch($.code){case 100:y.subClassMarker=$.value,$=Q.next();break;case 2:y.styleName=$.value,c=$.value,$=Q.next();break;case 70:y.standardFlag=$.value,$=Q.next();break;case 40:y.fixedTextHeight=$.value,$=Q.next();break;case 41:y.widthFactor=$.value,$=Q.next();break;case 50:y.obliqueAngle=$.value,$=Q.next();break;case 71:y.textGenerationFlag=$.value,$=Q.next();break;case 42:y.lastHeight=$.value,$=Q.next();break;case 3:y.font=$.value,$=Q.next();break;case 4:y.bigFont=$.value,$=Q.next();break;case 1071:y.extendedFont=$.value,$=Q.next();break;case 0:if($.value==="STYLE")R0.default.debug("}"),b[c]=y,R0.default.debug("Style {"),y={},c=void 0,$=Q.next();break;default:t1($),$=Q.next();break}return R0.default.debug("}"),b[c]=y,b},x={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:f},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:h},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:p},DIMSTYLE:{tableRecordsProperty:"dimStyles",tableName:"dimstyle",dxfSymbolName:"DIMSTYLE",parseTableRecords:d},STYLE:{tableRecordsProperty:"styles",tableName:"style",dxfSymbolName:"STYLE",parseTableRecords:m}},t=function(b){var y=[],c=b?"ENDBLK":"ENDSEC";if(!b)$=Q.next();while(!0)if($.code===0){if($.value===c)break;var G0,N0=E._entityHandlers[$.value];if(N0!=null)R0.default.debug($.value+" {"),G0=N0.parseEntity(Q,$),$=Q.lastReadGroup,R0.default.debug("}");else{R0.default.warn("Unhandled entity "+$.value),$=Q.next();continue}F0(G0),y.push(G0)}else $=Q.next();if(c=="ENDSEC")$=Q.next();return y},s=function(){var b={},y=$.code;if(b.x=$.value,y+=10,$=Q.next(),$.code!=y)throw Error("Expected code for point value to be "+y+" but got "+$.code+".");if(b.y=$.value,y+=10,$=Q.next(),$.code!=y)return Q.rewind(),b;return b.z=$.value,b},W0=function(){var b={layouts:[],imageDefs:{}};$=Q.next();while($!=="EOF"){if(N(0,"ENDSEC"))break;if($.code===0){var y=$.value;if(y==="LAYOUT"){var c={handle:null,name:null,tabOrder:0,blockRecordHandle:null,isModel:!1,paperLimits:{minX:0,minY:0,maxX:0,maxY:0}};$=Q.next();while($.code!==0&&$!=="EOF"){switch($.code){case 5:c.handle=$.value;break;case 1:c.name=$.value;break;case 70:c.layoutFlags=$.value;break;case 71:c.tabOrder=typeof $.value==="number"?$.value:parseInt($.value,10);break;case 330:c.blockRecordHandle=$.value;break;case 10:c.paperLimits.minX=$.value;break;case 20:c.paperLimits.minY=$.value;break;case 11:c.paperLimits.maxX=$.value;break;case 21:c.paperLimits.maxY=$.value;break}$=Q.next()}if(c.name)c.isModel=c.name.toLowerCase()==="model",b.layouts.push(c);continue}else if(y==="IMAGEDEF"){var G0={handle:null,imagePath:null,imageSize:{x:0,y:0},pixelSize:{x:1,y:1},isLoaded:!0};$=Q.next();while($.code!==0&&$!=="EOF"){switch($.code){case 5:G0.handle=$.value;break;case 1:G0.imagePath=$.value;break;case 10:G0.imageSize.x=$.value;break;case 20:G0.imageSize.y=$.value;break;case 11:G0.pixelSize.x=$.value;break;case 21:G0.pixelSize.y=$.value;break;case 280:G0.isLoaded=$.value!==0;break}$=Q.next()}if(G0.handle)b.imageDefs[G0.handle]=G0;continue}}$=Q.next()}return b},F0=function(b){if(!b)throw TypeError("entity cannot be undefined or null");if(!b.handle)b.handle=F++};if(q(),!U.layouts)U.layouts=[];if(!U.imageDefs)U.imageDefs={};var P0=U.layouts.some(function(b){return b.isModel});if(!P0)U.layouts.unshift({handle:"0",name:"Model",tabOrder:0,isModel:!0});return U.layouts.sort(function(b,y){if(b.isModel!==y.isModel)return b.isModel?-1:1;return(b.tabOrder??0)-(y.tabOrder??0)}),U};function t1(J){R0.default.debug("unhandled group "+y7(J))}function y7(J){return J.code+":"+J.value}function $K(J){return u2[J]}class x6{url;encoding;constructor(J,Q="utf-8"){this.url=J,this.encoding=Q}async Fetch(J=null){let Q=await fetch(this.url),$=Q.headers.get("Content-Length"),U=$?+$:null;if(!Q.body)throw Error("Response body is null");let F=Q.body.getReader(),G=0,E="",q=new TextDecoder(this.encoding);while(!0){let{done:B,value:V}=await F.read();if(B){E+=q.decode(new ArrayBuffer(0),{stream:!1});break}if(E+=q.decode(V,{stream:!0}),G+=V.length,J!==null)J("fetch",G,U)}if(J!==null)J("parse",0,null);return new F2().parseSync(E)}}var U1={INT8:0,UINT8:1,UINT8_CLAMPED:2,INT16:3,UINT16:4,INT32:5,UINT32:6,INT64:7,UINT64:8,FLOAT32:9,FLOAT64:10};function g6(J){switch(J){case U1.INT8:return Int8Array;case U1.UINT8:return Uint8Array;case U1.UINT8_CLAMPED:return Uint8ClampedArray;case U1.INT16:return Int16Array;case U1.UINT16:return Uint16Array;case U1.INT32:return Int32Array;case U1.UINT32:return Uint32Array;case U1.FLOAT32:return Float32Array;case U1.FLOAT64:return Float64Array;default:throw Error("Unrecognized native type: "+J)}}class l2{type;capacity;size;buffer;constructor(J,Q=16){this.type=J,this.capacity=Q,this.size=0,this.buffer=new(g6(J))(Q)}GetSize(){return this.size}Push(J){this._CheckGrow();let Q=this.size;return this.buffer[Q]=J,this.size++,Q}Get(J){if(J>=this.size)throw Error(`Index out of range: ${J}/${this.size}`);return this.buffer[J]}CopyTo(J,Q,$=0,U=-1){if(U===-1)U=this.size-$;let F=new(g6(this.type))(this.buffer.buffer,$*this.buffer.BYTES_PER_ELEMENT,U);J.set(F,Q)}_CheckGrow(){if(this.size<this.capacity)return;this.capacity*=2;let J=new(g6(this.type))(this.capacity);J.set(this.buffer),this.buffer=J}}var ZK=Object.freeze({POINTS:0,LINES:1,INDEXED_LINES:2,TRIANGLES:3,INDEXED_TRIANGLES:4,BLOCK_INSTANCE:5,POINT_INSTANCE:6});class S0{static GeometryType=ZK;layerName;blockName;geometryType;color;lineType;constructor(J,Q,$,U=0,F){this.layerName=J??null,this.blockName=Q??null,this.geometryType=$??null,this.color=U,this.lineType=F??null}Compare(J){let Q=C5(this.layerName,J.layerName);if(Q!==0)return Q;if(Q=C5(this.blockName,J.blockName),Q!==0)return Q;if(Q=C5(this.geometryType,J.geometryType),Q!==0)return Q;if(Q=C5(this.color,J.color),Q!==0)return Q;return C5(this.lineType,J.lineType)}IsIndexed(){return this.geometryType===S0.GeometryType.INDEXED_LINES||this.geometryType===S0.GeometryType.INDEXED_TRIANGLES}IsInstanced(){return this.geometryType===S0.GeometryType.BLOCK_INSTANCE||this.geometryType===S0.GeometryType.POINT_INSTANCE}}function C5(J,Q){if(J===null||J===void 0){if(Q===null||Q===void 0)return 0;return-1}if(Q===null||Q===void 0)return 1;if(J<Q)return-1;if(J>Q)return 1;return 0}var Q9=1;var H9=3;var $9=0,Z9=1,W9=2;var J3=1,Q3=2,H3=3,$3=4,Z3=5,W3=6,K3=7;var K9=301,U3=302;var U9=306;function WK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function r6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}var x7={},b4=null;function X9(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function d0(...J){J=X9(J);let Q="THREE."+J.shift();if(b4)b4("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function m0(...J){J=X9(J);let Q="THREE."+J.shift();if(b4)b4("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function a6(...J){let Q=J.join(" ");if(Q in x7)return;x7[Q]=!0,d0(...J)}class y4{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let U=$[J];if(U!==void 0){let F=U.indexOf(Q);if(F!==-1)U.splice(F,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let U=$.slice(0);for(let F=0,G=U.length;F<G;F++)U[F].call(this,J);J.target=null}}}var s0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var JG=Math.PI/180,KK=180/Math.PI;function x4(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,U=Math.random()*4294967295|0;return(s0[J&255]+s0[J>>8&255]+s0[J>>16&255]+s0[J>>24&255]+"-"+s0[Q&255]+s0[Q>>8&255]+"-"+s0[Q>>16&15|64]+s0[Q>>24&255]+"-"+s0[$&63|128]+s0[$>>8&255]+"-"+s0[$>>16&255]+s0[$>>24&255]+s0[U&255]+s0[U>>8&255]+s0[U>>16&255]+s0[U>>24&255]).toLowerCase()}function w0(J,Q,$){return Math.max(Q,Math.min($,J))}function UK(J,Q){return(J%Q+Q)%Q}function m6(J,Q,$){return(1-$)*J+$*Q}class l{constructor(J=0,Q=0){l.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,U=J.elements;return this.x=U[0]*Q+U[3]*$+U[6],this.y=U[1]*Q+U[4]*$+U[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=w0(this.x,J.x,Q.x),this.y=w0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=w0(this.x,J,Q),this.y=w0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(w0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(w0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),U=Math.sin(Q),F=this.x-J.x,G=this.y-J.y;return this.x=F*$-G*U+J.x,this.y=F*U+G*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class q2{constructor(J=0,Q=0,$=0,U=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=U}static slerpFlat(J,Q,$,U,F,G,E){let q=$[U+0],N=$[U+1],B=$[U+2],V=$[U+3],w=F[G+0],_=F[G+1],I=F[G+2],T=F[G+3];if(V!==T||q!==w||N!==_||B!==I){let f=q*w+N*_+B*I+V*T;if(f<0)w=-w,_=-_,I=-I,T=-T,f=-f;let h=1-E;if(f<0.9995){let p=Math.acos(f),d=Math.sin(p);h=Math.sin(h*p)/d,E=Math.sin(E*p)/d,q=q*h+w*E,N=N*h+_*E,B=B*h+I*E,V=V*h+T*E}else{q=q*h+w*E,N=N*h+_*E,B=B*h+I*E,V=V*h+T*E;let p=1/Math.sqrt(q*q+N*N+B*B+V*V);q*=p,N*=p,B*=p,V*=p}}J[Q]=q,J[Q+1]=N,J[Q+2]=B,J[Q+3]=V}static multiplyQuaternionsFlat(J,Q,$,U,F,G){let E=$[U],q=$[U+1],N=$[U+2],B=$[U+3],V=F[G],w=F[G+1],_=F[G+2],I=F[G+3];return J[Q]=E*I+B*V+q*_-N*w,J[Q+1]=q*I+B*w+N*V-E*_,J[Q+2]=N*I+B*_+E*w-q*V,J[Q+3]=B*I-E*V-q*w-N*_,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,U){return this._x=J,this._y=Q,this._z=$,this._w=U,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:U,_z:F,_order:G}=J,E=Math.cos,q=Math.sin,N=E($/2),B=E(U/2),V=E(F/2),w=q($/2),_=q(U/2),I=q(F/2);switch(G){case"XYZ":this._x=w*B*V+N*_*I,this._y=N*_*V-w*B*I,this._z=N*B*I+w*_*V,this._w=N*B*V-w*_*I;break;case"YXZ":this._x=w*B*V+N*_*I,this._y=N*_*V-w*B*I,this._z=N*B*I-w*_*V,this._w=N*B*V+w*_*I;break;case"ZXY":this._x=w*B*V-N*_*I,this._y=N*_*V+w*B*I,this._z=N*B*I+w*_*V,this._w=N*B*V-w*_*I;break;case"ZYX":this._x=w*B*V-N*_*I,this._y=N*_*V+w*B*I,this._z=N*B*I-w*_*V,this._w=N*B*V+w*_*I;break;case"YZX":this._x=w*B*V+N*_*I,this._y=N*_*V+w*B*I,this._z=N*B*I-w*_*V,this._w=N*B*V-w*_*I;break;case"XZY":this._x=w*B*V-N*_*I,this._y=N*_*V-w*B*I,this._z=N*B*I+w*_*V,this._w=N*B*V+w*_*I;break;default:d0("Quaternion: .setFromEuler() encountered an unknown order: "+G)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,U=Math.sin($);return this._x=J.x*U,this._y=J.y*U,this._z=J.z*U,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],U=Q[4],F=Q[8],G=Q[1],E=Q[5],q=Q[9],N=Q[2],B=Q[6],V=Q[10],w=$+E+V;if(w>0){let _=0.5/Math.sqrt(w+1);this._w=0.25/_,this._x=(B-q)*_,this._y=(F-N)*_,this._z=(G-U)*_}else if($>E&&$>V){let _=2*Math.sqrt(1+$-E-V);this._w=(B-q)/_,this._x=0.25*_,this._y=(U+G)/_,this._z=(F+N)/_}else if(E>V){let _=2*Math.sqrt(1+E-$-V);this._w=(F-N)/_,this._x=(U+G)/_,this._y=0.25*_,this._z=(q+B)/_}else{let _=2*Math.sqrt(1+V-$-E);this._w=(G-U)/_,this._x=(F+N)/_,this._y=(q+B)/_,this._z=0.25*_}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(w0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let U=Math.min(1,Q/$);return this.slerp(J,U),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:U,_z:F,_w:G}=J,E=Q._x,q=Q._y,N=Q._z,B=Q._w;return this._x=$*B+G*E+U*N-F*q,this._y=U*B+G*q+F*E-$*N,this._z=F*B+G*N+$*q-U*E,this._w=G*B-$*E-U*q-F*N,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:U,_z:F,_w:G}=J,E=this.dot(J);if(E<0)$=-$,U=-U,F=-F,G=-G,E=-E;let q=1-Q;if(E<0.9995){let N=Math.acos(E),B=Math.sin(N);q=Math.sin(q*N)/B,Q=Math.sin(Q*N)/B,this._x=this._x*q+$*Q,this._y=this._y*q+U*Q,this._z=this._z*q+F*Q,this._w=this._w*q+G*Q,this._onChangeCallback()}else this._x=this._x*q+$*Q,this._y=this._y*q+U*Q,this._z=this._z*q+F*Q,this._w=this._w*q+G*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),U=Math.sqrt(1-$),F=Math.sqrt($);return this.set(U*Math.sin(J),U*Math.cos(J),F*Math.sin(Q),F*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E0{constructor(J=0,Q=0,$=0){E0.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(g7.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(g7.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,U=this.z,F=J.elements;return this.x=F[0]*Q+F[3]*$+F[6]*U,this.y=F[1]*Q+F[4]*$+F[7]*U,this.z=F[2]*Q+F[5]*$+F[8]*U,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,U=this.z,F=J.elements,G=1/(F[3]*Q+F[7]*$+F[11]*U+F[15]);return this.x=(F[0]*Q+F[4]*$+F[8]*U+F[12])*G,this.y=(F[1]*Q+F[5]*$+F[9]*U+F[13])*G,this.z=(F[2]*Q+F[6]*$+F[10]*U+F[14])*G,this}applyQuaternion(J){let Q=this.x,$=this.y,U=this.z,F=J.x,G=J.y,E=J.z,q=J.w,N=2*(G*U-E*$),B=2*(E*Q-F*U),V=2*(F*$-G*Q);return this.x=Q+q*N+G*V-E*B,this.y=$+q*B+E*N-F*V,this.z=U+q*V+F*B-G*N,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,U=this.z,F=J.elements;return this.x=F[0]*Q+F[4]*$+F[8]*U,this.y=F[1]*Q+F[5]*$+F[9]*U,this.z=F[2]*Q+F[6]*$+F[10]*U,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=w0(this.x,J.x,Q.x),this.y=w0(this.y,J.y,Q.y),this.z=w0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=w0(this.x,J,Q),this.y=w0(this.y,J,Q),this.z=w0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(w0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:U,z:F}=J,G=Q.x,E=Q.y,q=Q.z;return this.x=U*q-F*E,this.y=F*G-$*q,this.z=$*E-U*G,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return p6.copy(this).projectOnVector(J),this.sub(p6)}reflect(J){return this.sub(p6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(w0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,U=this.z-J.z;return Q*Q+$*$+U*U}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let U=Math.sin(Q)*J;return this.x=U*Math.sin($),this.y=Math.cos(Q)*J,this.z=U*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),U=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=U,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var p6=new E0,g7=new q2;class X0{constructor(J,Q,$,U,F,G,E,q,N){if(X0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,U,F,G,E,q,N)}set(J,Q,$,U,F,G,E,q,N){let B=this.elements;return B[0]=J,B[1]=U,B[2]=E,B[3]=Q,B[4]=F,B[5]=q,B[6]=$,B[7]=G,B[8]=N,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,U=Q.elements,F=this.elements,G=$[0],E=$[3],q=$[6],N=$[1],B=$[4],V=$[7],w=$[2],_=$[5],I=$[8],T=U[0],f=U[3],h=U[6],p=U[1],d=U[4],m=U[7],x=U[2],t=U[5],s=U[8];return F[0]=G*T+E*p+q*x,F[3]=G*f+E*d+q*t,F[6]=G*h+E*m+q*s,F[1]=N*T+B*p+V*x,F[4]=N*f+B*d+V*t,F[7]=N*h+B*m+V*s,F[2]=w*T+_*p+I*x,F[5]=w*f+_*d+I*t,F[8]=w*h+_*m+I*s,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],U=J[2],F=J[3],G=J[4],E=J[5],q=J[6],N=J[7],B=J[8];return Q*G*B-Q*E*N-$*F*B+$*E*q+U*F*N-U*G*q}invert(){let J=this.elements,Q=J[0],$=J[1],U=J[2],F=J[3],G=J[4],E=J[5],q=J[6],N=J[7],B=J[8],V=B*G-E*N,w=E*q-B*F,_=N*F-G*q,I=Q*V+$*w+U*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/I;return J[0]=V*T,J[1]=(U*N-B*$)*T,J[2]=(E*$-U*G)*T,J[3]=w*T,J[4]=(B*Q-U*q)*T,J[5]=(U*F-E*Q)*T,J[6]=_*T,J[7]=($*q-N*Q)*T,J[8]=(G*Q-$*F)*T,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,U,F,G,E){let q=Math.cos(F),N=Math.sin(F);return this.set($*q,$*N,-$*(q*G+N*E)+G+J,-U*N,U*q,-U*(-N*G+q*E)+E+Q,0,0,1),this}scale(J,Q){return this.premultiply(u6.makeScale(J,Q)),this}rotate(J){return this.premultiply(u6.makeRotation(-J)),this}translate(J,Q){return this.premultiply(u6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let U=0;U<9;U++)if(Q[U]!==$[U])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var u6=new X0,m7=new X0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),p7=new X0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function XK(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(F,G,E){if(this.enabled===!1||G===E||!G||!E)return F;if(this.spaces[G].transfer==="srgb")F.r=J2(F.r),F.g=J2(F.g),F.b=J2(F.b);if(this.spaces[G].primaries!==this.spaces[E].primaries)F.applyMatrix3(this.spaces[G].toXYZ),F.applyMatrix3(this.spaces[E].fromXYZ);if(this.spaces[E].transfer==="srgb")F.r=o2(F.r),F.g=o2(F.g),F.b=o2(F.b);return F},workingToColorSpace:function(F,G){return this.convert(F,this.workingColorSpace,G)},colorSpaceToWorking:function(F,G){return this.convert(F,G,this.workingColorSpace)},getPrimaries:function(F){return this.spaces[F].primaries},getTransfer:function(F){if(F==="")return"linear";return this.spaces[F].transfer},getToneMappingMode:function(F){return this.spaces[F].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(F,G=this.workingColorSpace){return F.fromArray(this.spaces[G].luminanceCoefficients)},define:function(F){Object.assign(this.spaces,F)},_getMatrix:function(F,G,E){return F.copy(this.spaces[G].toXYZ).multiply(this.spaces[E].fromXYZ)},_getDrawingBufferColorSpace:function(F){return this.spaces[F].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(F=this.workingColorSpace){return this.spaces[F].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(F,G){return a6("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(F,G)},toWorkingColorSpace:function(F,G){return a6("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(F,G)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],U=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:U,transfer:"linear",toXYZ:m7,fromXYZ:p7,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:U,transfer:"srgb",toXYZ:m7,fromXYZ:p7,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var M1=XK();function J2(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function o2(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var c2;class X3{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(c2===void 0)c2=r6("canvas");c2.width=J.width,c2.height=J.height;let U=c2.getContext("2d");if(J instanceof ImageData)U.putImageData(J,0,0);else U.drawImage(J,0,0,J.width,J.height);$=c2}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=r6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let U=$.getImageData(0,0,J.width,J.height),F=U.data;for(let G=0;G<F.length;G++)F[G]=J2(F[G]/255)*255;return $.putImageData(U,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(J2(Q[$]/255)*255);else Q[$]=J2(Q[$]);return{data:Q,width:J.width,height:J.height}}else return d0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var YK=0;class Y3{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YK++}),this.uuid=x4(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},U=this.data;if(U!==null){let F;if(Array.isArray(U)){F=[];for(let G=0,E=U.length;G<E;G++)if(U[G].isDataTexture)F.push(d6(U[G].image));else F.push(d6(U[G]))}else F=d6(U);$.url=F}if(!Q)J.images[this.uuid]=$;return $}}function d6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return X3.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return d0("Texture: Unable to serialize Texture."),{}}var FK=0,l6=new E0;class E2 extends y4{constructor(J=E2.DEFAULT_IMAGE,Q=E2.DEFAULT_MAPPING,$=1001,U=1001,F=1006,G=1008,E=1023,q=1009,N=E2.DEFAULT_ANISOTROPY,B=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:FK++}),this.uuid=x4(),this.name="",this.source=new Y3(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=U,this.magFilter=F,this.minFilter=G,this.anisotropy=N,this.format=E,this.internalFormat=null,this.type=q,this.offset=new l(0,0),this.repeat=new l(1,1),this.center=new l(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=B,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(l6).x}get height(){return this.source.getSize(l6).y}get depth(){return this.source.getSize(l6).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){d0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let U=this[Q];if(U===void 0){d0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(U&&$&&(U.isVector2&&$.isVector2))U.copy($);else if(U&&$&&(U.isVector3&&$.isVector3))U.copy($);else if(U&&$&&(U.isMatrix3&&$.isMatrix3))U.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}E2.DEFAULT_IMAGE=null;E2.DEFAULT_MAPPING=300;E2.DEFAULT_ANISOTROPY=1;class y1{constructor(J,Q,$,U,F,G,E,q,N,B,V,w,_,I,T,f){if(y1.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,U,F,G,E,q,N,B,V,w,_,I,T,f)}set(J,Q,$,U,F,G,E,q,N,B,V,w,_,I,T,f){let h=this.elements;return h[0]=J,h[4]=Q,h[8]=$,h[12]=U,h[1]=F,h[5]=G,h[9]=E,h[13]=q,h[2]=N,h[6]=B,h[10]=V,h[14]=w,h[3]=_,h[7]=I,h[11]=T,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new y1().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinant()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let Q=this.elements,$=J.elements,U=1/i2.setFromMatrixColumn(J,0).length(),F=1/i2.setFromMatrixColumn(J,1).length(),G=1/i2.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*U,Q[1]=$[1]*U,Q[2]=$[2]*U,Q[3]=0,Q[4]=$[4]*F,Q[5]=$[5]*F,Q[6]=$[6]*F,Q[7]=0,Q[8]=$[8]*G,Q[9]=$[9]*G,Q[10]=$[10]*G,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,U=J.y,F=J.z,G=Math.cos($),E=Math.sin($),q=Math.cos(U),N=Math.sin(U),B=Math.cos(F),V=Math.sin(F);if(J.order==="XYZ"){let w=G*B,_=G*V,I=E*B,T=E*V;Q[0]=q*B,Q[4]=-q*V,Q[8]=N,Q[1]=_+I*N,Q[5]=w-T*N,Q[9]=-E*q,Q[2]=T-w*N,Q[6]=I+_*N,Q[10]=G*q}else if(J.order==="YXZ"){let w=q*B,_=q*V,I=N*B,T=N*V;Q[0]=w+T*E,Q[4]=I*E-_,Q[8]=G*N,Q[1]=G*V,Q[5]=G*B,Q[9]=-E,Q[2]=_*E-I,Q[6]=T+w*E,Q[10]=G*q}else if(J.order==="ZXY"){let w=q*B,_=q*V,I=N*B,T=N*V;Q[0]=w-T*E,Q[4]=-G*V,Q[8]=I+_*E,Q[1]=_+I*E,Q[5]=G*B,Q[9]=T-w*E,Q[2]=-G*N,Q[6]=E,Q[10]=G*q}else if(J.order==="ZYX"){let w=G*B,_=G*V,I=E*B,T=E*V;Q[0]=q*B,Q[4]=I*N-_,Q[8]=w*N+T,Q[1]=q*V,Q[5]=T*N+w,Q[9]=_*N-I,Q[2]=-N,Q[6]=E*q,Q[10]=G*q}else if(J.order==="YZX"){let w=G*q,_=G*N,I=E*q,T=E*N;Q[0]=q*B,Q[4]=T-w*V,Q[8]=I*V+_,Q[1]=V,Q[5]=G*B,Q[9]=-E*B,Q[2]=-N*B,Q[6]=_*V+I,Q[10]=w-T*V}else if(J.order==="XZY"){let w=G*q,_=G*N,I=E*q,T=E*N;Q[0]=q*B,Q[4]=-V,Q[8]=N*B,Q[1]=w*V+T,Q[5]=G*B,Q[9]=_*V-I,Q[2]=I*V-_,Q[6]=E*B,Q[10]=T*V+w}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(GK,J,RK)}lookAt(J,Q,$){let U=this.elements;if(O1.subVectors(J,Q),O1.lengthSq()===0)O1.z=1;if(O1.normalize(),G2.crossVectors($,O1),G2.lengthSq()===0){if(Math.abs($.z)===1)O1.x+=0.0001;else O1.z+=0.0001;O1.normalize(),G2.crossVectors($,O1)}return G2.normalize(),T4.crossVectors(O1,G2),U[0]=G2.x,U[4]=T4.x,U[8]=O1.x,U[1]=G2.y,U[5]=T4.y,U[9]=O1.y,U[2]=G2.z,U[6]=T4.z,U[10]=O1.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,U=Q.elements,F=this.elements,G=$[0],E=$[4],q=$[8],N=$[12],B=$[1],V=$[5],w=$[9],_=$[13],I=$[2],T=$[6],f=$[10],h=$[14],p=$[3],d=$[7],m=$[11],x=$[15],t=U[0],s=U[4],W0=U[8],F0=U[12],P0=U[1],b=U[5],y=U[9],c=U[13],G0=U[2],N0=U[6],Y1=U[10],u0=U[14],Z1=U[3],C1=U[7],I0=U[11],T0=U[15];return F[0]=G*t+E*P0+q*G0+N*Z1,F[4]=G*s+E*b+q*N0+N*C1,F[8]=G*W0+E*y+q*Y1+N*I0,F[12]=G*F0+E*c+q*u0+N*T0,F[1]=B*t+V*P0+w*G0+_*Z1,F[5]=B*s+V*b+w*N0+_*C1,F[9]=B*W0+V*y+w*Y1+_*I0,F[13]=B*F0+V*c+w*u0+_*T0,F[2]=I*t+T*P0+f*G0+h*Z1,F[6]=I*s+T*b+f*N0+h*C1,F[10]=I*W0+T*y+f*Y1+h*I0,F[14]=I*F0+T*c+f*u0+h*T0,F[3]=p*t+d*P0+m*G0+x*Z1,F[7]=p*s+d*b+m*N0+x*C1,F[11]=p*W0+d*y+m*Y1+x*I0,F[15]=p*F0+d*c+m*u0+x*T0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],U=J[8],F=J[12],G=J[1],E=J[5],q=J[9],N=J[13],B=J[2],V=J[6],w=J[10],_=J[14],I=J[3],T=J[7],f=J[11],h=J[15],p=q*_-N*w,d=E*_-N*V,m=E*w-q*V,x=G*_-N*B,t=G*w-q*B,s=G*V-E*B;return Q*(T*p-f*d+h*m)-$*(I*p-f*x+h*t)+U*(I*d-T*x+h*s)-F*(I*m-T*t+f*s)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let U=this.elements;if(J.isVector3)U[12]=J.x,U[13]=J.y,U[14]=J.z;else U[12]=J,U[13]=Q,U[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],U=J[2],F=J[3],G=J[4],E=J[5],q=J[6],N=J[7],B=J[8],V=J[9],w=J[10],_=J[11],I=J[12],T=J[13],f=J[14],h=J[15],p=Q*E-$*G,d=Q*q-U*G,m=Q*N-F*G,x=$*q-U*E,t=$*N-F*E,s=U*N-F*q,W0=B*T-V*I,F0=B*f-w*I,P0=B*h-_*I,b=V*f-w*T,y=V*h-_*T,c=w*h-_*f,G0=p*c-d*y+m*b+x*P0-t*F0+s*W0;if(G0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N0=1/G0;return J[0]=(E*c-q*y+N*b)*N0,J[1]=(U*y-$*c-F*b)*N0,J[2]=(T*s-f*t+h*x)*N0,J[3]=(w*t-V*s-_*x)*N0,J[4]=(q*P0-G*c-N*F0)*N0,J[5]=(Q*c-U*P0+F*F0)*N0,J[6]=(f*m-I*s-h*d)*N0,J[7]=(B*s-w*m+_*d)*N0,J[8]=(G*y-E*P0+N*W0)*N0,J[9]=($*P0-Q*y-F*W0)*N0,J[10]=(I*t-T*m+h*p)*N0,J[11]=(V*m-B*t-_*p)*N0,J[12]=(E*F0-G*b-q*W0)*N0,J[13]=(Q*b-$*F0+U*W0)*N0,J[14]=(T*d-I*x-f*p)*N0,J[15]=(B*x-V*d+w*p)*N0,this}scale(J){let Q=this.elements,$=J.x,U=J.y,F=J.z;return Q[0]*=$,Q[4]*=U,Q[8]*=F,Q[1]*=$,Q[5]*=U,Q[9]*=F,Q[2]*=$,Q[6]*=U,Q[10]*=F,Q[3]*=$,Q[7]*=U,Q[11]*=F,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],U=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,U))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),U=Math.sin(Q),F=1-$,G=J.x,E=J.y,q=J.z,N=F*G,B=F*E;return this.set(N*G+$,N*E-U*q,N*q+U*E,0,N*E+U*q,B*E+$,B*q-U*G,0,N*q-U*E,B*q+U*G,F*q*q+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,U,F,G){return this.set(1,$,F,0,J,1,G,0,Q,U,1,0,0,0,0,1),this}compose(J,Q,$){let U=this.elements,F=Q._x,G=Q._y,E=Q._z,q=Q._w,N=F+F,B=G+G,V=E+E,w=F*N,_=F*B,I=F*V,T=G*B,f=G*V,h=E*V,p=q*N,d=q*B,m=q*V,x=$.x,t=$.y,s=$.z;return U[0]=(1-(T+h))*x,U[1]=(_+m)*x,U[2]=(I-d)*x,U[3]=0,U[4]=(_-m)*t,U[5]=(1-(w+h))*t,U[6]=(f+p)*t,U[7]=0,U[8]=(I+d)*s,U[9]=(f-p)*s,U[10]=(1-(w+T))*s,U[11]=0,U[12]=J.x,U[13]=J.y,U[14]=J.z,U[15]=1,this}decompose(J,Q,$){let U=this.elements;J.x=U[12],J.y=U[13],J.z=U[14];let F=this.determinant();if(F===0)return $.set(1,1,1),Q.identity(),this;let G=i2.set(U[0],U[1],U[2]).length(),E=i2.set(U[4],U[5],U[6]).length(),q=i2.set(U[8],U[9],U[10]).length();if(F<0)G=-G;b1.copy(this);let N=1/G,B=1/E,V=1/q;return b1.elements[0]*=N,b1.elements[1]*=N,b1.elements[2]*=N,b1.elements[4]*=B,b1.elements[5]*=B,b1.elements[6]*=B,b1.elements[8]*=V,b1.elements[9]*=V,b1.elements[10]*=V,Q.setFromRotationMatrix(b1),$.x=G,$.y=E,$.z=q,this}makePerspective(J,Q,$,U,F,G,E=2000,q=!1){let N=this.elements,B=2*F/(Q-J),V=2*F/($-U),w=(Q+J)/(Q-J),_=($+U)/($-U),I,T;if(q)I=F/(G-F),T=G*F/(G-F);else if(E===2000)I=-(G+F)/(G-F),T=-2*G*F/(G-F);else if(E===2001)I=-G/(G-F),T=-G*F/(G-F);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return N[0]=B,N[4]=0,N[8]=w,N[12]=0,N[1]=0,N[5]=V,N[9]=_,N[13]=0,N[2]=0,N[6]=0,N[10]=I,N[14]=T,N[3]=0,N[7]=0,N[11]=-1,N[15]=0,this}makeOrthographic(J,Q,$,U,F,G,E=2000,q=!1){let N=this.elements,B=2/(Q-J),V=2/($-U),w=-(Q+J)/(Q-J),_=-($+U)/($-U),I,T;if(q)I=1/(G-F),T=G/(G-F);else if(E===2000)I=-2/(G-F),T=-(G+F)/(G-F);else if(E===2001)I=-1/(G-F),T=-F/(G-F);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return N[0]=B,N[4]=0,N[8]=0,N[12]=w,N[1]=0,N[5]=V,N[9]=0,N[13]=_,N[2]=0,N[6]=0,N[10]=I,N[14]=T,N[3]=0,N[7]=0,N[11]=0,N[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let U=0;U<16;U++)if(Q[U]!==$[U])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var i2=new E0,b1=new y1,GK=new E0(0,0,0),RK=new E0(1,1,1),G2=new E0,T4=new E0,O1=new E0,u7=new y1,d7=new q2;class y5{constructor(J=0,Q=0,$=0,U=y5.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=U}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,U=this._order){return this._x=J,this._y=Q,this._z=$,this._order=U,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let U=J.elements,F=U[0],G=U[4],E=U[8],q=U[1],N=U[5],B=U[9],V=U[2],w=U[6],_=U[10];switch(Q){case"XYZ":if(this._y=Math.asin(w0(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(-B,_),this._z=Math.atan2(-G,F);else this._x=Math.atan2(w,N),this._z=0;break;case"YXZ":if(this._x=Math.asin(-w0(B,-1,1)),Math.abs(B)<0.9999999)this._y=Math.atan2(E,_),this._z=Math.atan2(q,N);else this._y=Math.atan2(-V,F),this._z=0;break;case"ZXY":if(this._x=Math.asin(w0(w,-1,1)),Math.abs(w)<0.9999999)this._y=Math.atan2(-V,_),this._z=Math.atan2(-G,N);else this._y=0,this._z=Math.atan2(q,F);break;case"ZYX":if(this._y=Math.asin(-w0(V,-1,1)),Math.abs(V)<0.9999999)this._x=Math.atan2(w,_),this._z=Math.atan2(q,F);else this._x=0,this._z=Math.atan2(-G,N);break;case"YZX":if(this._z=Math.asin(w0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(-B,N),this._y=Math.atan2(-V,F);else this._x=0,this._y=Math.atan2(E,_);break;case"XZY":if(this._z=Math.asin(-w0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(w,N),this._y=Math.atan2(E,F);else this._x=Math.atan2(-B,_),this._y=0;break;default:d0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return u7.makeRotationFromQuaternion(J),this.setFromRotationMatrix(u7,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return d7.setFromEuler(this),this.setFromQuaternion(d7,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}y5.DEFAULT_ORDER="XYZ";class F3{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var EK=0,l7=new E0,n2=new q2,e1=new y1,S4=new E0,I5=new E0,OK=new E0,qK=new q2,c7=new E0(1,0,0),i7=new E0(0,1,0),n7=new E0(0,0,1),s7={type:"added"},AK={type:"removed"},s2={type:"childadded",child:null},c6={type:"childremoved",child:null};class O2 extends y4{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:EK++}),this.uuid=x4(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=O2.DEFAULT_UP.clone();let J=new E0,Q=new y5,$=new q2,U=new E0(1,1,1);function F(){$.setFromEuler(Q,!1)}function G(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(F),$._onChange(G),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:U},modelViewMatrix:{value:new y1},normalMatrix:{value:new X0}}),this.matrix=new y1,this.matrixWorld=new y1,this.matrixAutoUpdate=O2.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=O2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return n2.setFromAxisAngle(J,Q),this.quaternion.multiply(n2),this}rotateOnWorldAxis(J,Q){return n2.setFromAxisAngle(J,Q),this.quaternion.premultiply(n2),this}rotateX(J){return this.rotateOnAxis(c7,J)}rotateY(J){return this.rotateOnAxis(i7,J)}rotateZ(J){return this.rotateOnAxis(n7,J)}translateOnAxis(J,Q){return l7.copy(J).applyQuaternion(this.quaternion),this.position.add(l7.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(c7,J)}translateY(J){return this.translateOnAxis(i7,J)}translateZ(J){return this.translateOnAxis(n7,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(e1.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)S4.copy(J);else S4.set(J,Q,$);let U=this.parent;if(this.updateWorldMatrix(!0,!1),I5.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)e1.lookAt(I5,S4,this.up);else e1.lookAt(S4,I5,this.up);if(this.quaternion.setFromRotationMatrix(e1),U)e1.extractRotation(U.matrixWorld),n2.setFromRotationMatrix(e1),this.quaternion.premultiply(n2.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return m0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(s7),s2.child=J,this.dispatchEvent(s2),s2.child=null;else m0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(AK),c6.child=J,this.dispatchEvent(c6),c6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),e1.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),e1.multiply(J.parent.matrixWorld);return J.applyMatrix4(e1),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(s7),s2.child=J,this.dispatchEvent(s2),s2.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,U=this.children.length;$<U;$++){let G=this.children[$].getObjectByProperty(J,Q);if(G!==void 0)return G}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let U=this.children;for(let F=0,G=U.length;F<G;F++)U[F].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(I5,J,OK),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(I5,qK,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,U=Q.length;$<U;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,U=Q.length;$<U;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:U}=J,F=this.matrix.elements;F[12]+=Q-F[0]*Q-F[4]*$-F[8]*U,F[13]+=$-F[1]*Q-F[5]*$-F[9]*U,F[14]+=U-F[2]*Q-F[6]*$-F[10]*U}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,U=Q.length;$<U;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let U=this.children;for(let F=0,G=U.length;F<G;F++)U[F].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let U={};if(U.uuid=this.uuid,U.type=this.type,this.name!=="")U.name=this.name;if(this.castShadow===!0)U.castShadow=!0;if(this.receiveShadow===!0)U.receiveShadow=!0;if(this.visible===!1)U.visible=!1;if(this.frustumCulled===!1)U.frustumCulled=!1;if(this.renderOrder!==0)U.renderOrder=this.renderOrder;if(this.static!==!1)U.static=this.static;if(Object.keys(this.userData).length>0)U.userData=this.userData;if(U.layers=this.layers.mask,U.matrix=this.matrix.toArray(),U.up=this.up.toArray(),this.pivot!==null)U.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)U.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)U.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)U.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(U.type="InstancedMesh",U.count=this.count,U.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)U.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(U.type="BatchedMesh",U.perObjectFrustumCulled=this.perObjectFrustumCulled,U.sortObjects=this.sortObjects,U.drawRanges=this._drawRanges,U.reservedRanges=this._reservedRanges,U.geometryInfo=this._geometryInfo.map((E)=>({...E,boundingBox:E.boundingBox?E.boundingBox.toJSON():void 0,boundingSphere:E.boundingSphere?E.boundingSphere.toJSON():void 0})),U.instanceInfo=this._instanceInfo.map((E)=>({...E})),U.availableInstanceIds=this._availableInstanceIds.slice(),U.availableGeometryIds=this._availableGeometryIds.slice(),U.nextIndexStart=this._nextIndexStart,U.nextVertexStart=this._nextVertexStart,U.geometryCount=this._geometryCount,U.maxInstanceCount=this._maxInstanceCount,U.maxVertexCount=this._maxVertexCount,U.maxIndexCount=this._maxIndexCount,U.geometryInitialized=this._geometryInitialized,U.matricesTexture=this._matricesTexture.toJSON(J),U.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)U.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)U.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)U.boundingBox=this.boundingBox.toJSON()}function F(E,q){if(E[q.uuid]===void 0)E[q.uuid]=q.toJSON(J);return q.uuid}if(this.isScene){if(this.background){if(this.background.isColor)U.background=this.background.toJSON();else if(this.background.isTexture)U.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)U.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){U.geometry=F(J.geometries,this.geometry);let E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){let q=E.shapes;if(Array.isArray(q))for(let N=0,B=q.length;N<B;N++){let V=q[N];F(J.shapes,V)}else F(J.shapes,q)}}if(this.isSkinnedMesh){if(U.bindMode=this.bindMode,U.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)F(J.skeletons,this.skeleton),U.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let E=[];for(let q=0,N=this.material.length;q<N;q++)E.push(F(J.materials,this.material[q]));U.material=E}else U.material=F(J.materials,this.material);if(this.children.length>0){U.children=[];for(let E=0;E<this.children.length;E++)U.children.push(this.children[E].toJSON(J).object)}if(this.animations.length>0){U.animations=[];for(let E=0;E<this.animations.length;E++){let q=this.animations[E];U.animations.push(F(J.animations,q))}}if(Q){let E=G(J.geometries),q=G(J.materials),N=G(J.textures),B=G(J.images),V=G(J.shapes),w=G(J.skeletons),_=G(J.animations),I=G(J.nodes);if(E.length>0)$.geometries=E;if(q.length>0)$.materials=q;if(N.length>0)$.textures=N;if(B.length>0)$.images=B;if(V.length>0)$.shapes=V;if(w.length>0)$.skeletons=w;if(_.length>0)$.animations=_;if(I.length>0)$.nodes=I}return $.object=U,$;function G(E){let q=[];for(let N in E){let B=E[N];delete B.metadata,q.push(B)}return q}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),J.pivot!==null)this.pivot=J.pivot.clone();if(this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let U=J.children[$];this.add(U.clone())}return this}}O2.DEFAULT_UP=new E0(0,1,0);O2.DEFAULT_MATRIX_AUTO_UPDATE=!0;O2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Y9={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},R2={h:0,s:0,l:0},k4={h:0,s:0,l:0};function i6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class p0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let U=J;if(U&&U.isColor)this.copy(U);else if(typeof U==="number")this.setHex(U);else if(typeof U==="string")this.setStyle(U)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,M1.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,U=M1.workingColorSpace){return this.r=J,this.g=Q,this.b=$,M1.colorSpaceToWorking(this,U),this}setHSL(J,Q,$,U=M1.workingColorSpace){if(J=UK(J,1),Q=w0(Q,0,1),$=w0($,0,1),Q===0)this.r=this.g=this.b=$;else{let F=$<=0.5?$*(1+Q):$+Q-$*Q,G=2*$-F;this.r=i6(G,F,J+0.3333333333333333),this.g=i6(G,F,J),this.b=i6(G,F,J-0.3333333333333333)}return M1.colorSpaceToWorking(this,U),this}setStyle(J,Q="srgb"){function $(F){if(F===void 0)return;if(parseFloat(F)<1)d0("Color: Alpha component of "+J+" will be ignored.")}let U;if(U=/^(\w+)\(([^\)]*)\)/.exec(J)){let F,G=U[1],E=U[2];switch(G){case"rgb":case"rgba":if(F=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return $(F[4]),this.setRGB(Math.min(255,parseInt(F[1],10))/255,Math.min(255,parseInt(F[2],10))/255,Math.min(255,parseInt(F[3],10))/255,Q);if(F=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return $(F[4]),this.setRGB(Math.min(100,parseInt(F[1],10))/100,Math.min(100,parseInt(F[2],10))/100,Math.min(100,parseInt(F[3],10))/100,Q);break;case"hsl":case"hsla":if(F=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return $(F[4]),this.setHSL(parseFloat(F[1])/360,parseFloat(F[2])/100,parseFloat(F[3])/100,Q);break;default:d0("Color: Unknown color model "+J)}}else if(U=/^\#([A-Fa-f\d]+)$/.exec(J)){let F=U[1],G=F.length;if(G===3)return this.setRGB(parseInt(F.charAt(0),16)/15,parseInt(F.charAt(1),16)/15,parseInt(F.charAt(2),16)/15,Q);else if(G===6)return this.setHex(parseInt(F,16),Q);else d0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=Y9[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else d0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=J2(J.r),this.g=J2(J.g),this.b=J2(J.b),this}copyLinearToSRGB(J){return this.r=o2(J.r),this.g=o2(J.g),this.b=o2(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return M1.workingToColorSpace(o0.copy(this),J),Math.round(w0(o0.r*255,0,255))*65536+Math.round(w0(o0.g*255,0,255))*256+Math.round(w0(o0.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=M1.workingColorSpace){M1.workingToColorSpace(o0.copy(this),Q);let{r:$,g:U,b:F}=o0,G=Math.max($,U,F),E=Math.min($,U,F),q,N,B=(E+G)/2;if(E===G)q=0,N=0;else{let V=G-E;switch(N=B<=0.5?V/(G+E):V/(2-G-E),G){case $:q=(U-F)/V+(U<F?6:0);break;case U:q=(F-$)/V+2;break;case F:q=($-U)/V+4;break}q/=6}return J.h=q,J.s=N,J.l=B,J}getRGB(J,Q=M1.workingColorSpace){return M1.workingToColorSpace(o0.copy(this),Q),J.r=o0.r,J.g=o0.g,J.b=o0.b,J}getStyle(J="srgb"){M1.workingToColorSpace(o0.copy(this),J);let{r:Q,g:$,b:U}=o0;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${U.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(U*255)})`}offsetHSL(J,Q,$){return this.getHSL(R2),this.setHSL(R2.h+J,R2.s+Q,R2.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(R2),J.getHSL(k4);let $=m6(R2.h,k4.h,Q),U=m6(R2.s,k4.s,Q),F=m6(R2.l,k4.l,Q);return this.setHSL($,U,F),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,U=this.b,F=J.elements;return this.r=F[0]*Q+F[3]*$+F[6]*U,this.g=F[1]*Q+F[4]*$+F[7]*U,this.b=F[2]*Q+F[5]*$+F[8]*U,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var o0=new p0;p0.NAMES=Y9;class B1{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){d0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,U=this.getPoint(0),F=0;Q.push(0);for(let G=1;G<=J;G++)$=this.getPoint(G/J),F+=$.distanceTo(U),Q.push(F),U=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),U=0,F=$.length,G;if(Q)G=Q;else G=J*$[F-1];let E=0,q=F-1,N;while(E<=q)if(U=Math.floor(E+(q-E)/2),N=$[U]-G,N<0)E=U+1;else if(N>0)q=U-1;else{q=U;break}if(U=q,$[U]===G)return U/(F-1);let B=$[U],w=$[U+1]-B,_=(G-B)/w;return(U+_)/(F-1)}getTangent(J,Q){let U=J-0.0001,F=J+0.0001;if(U<0)U=0;if(F>1)F=1;let G=this.getPoint(U),E=this.getPoint(F),q=Q||(G.isVector2?new l:new E0);return q.copy(E).sub(G).normalize(),q}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new E0,U=[],F=[],G=[],E=new E0,q=new y1;for(let _=0;_<=J;_++){let I=_/J;U[_]=this.getTangentAt(I,new E0)}F[0]=new E0,G[0]=new E0;let N=Number.MAX_VALUE,B=Math.abs(U[0].x),V=Math.abs(U[0].y),w=Math.abs(U[0].z);if(B<=N)N=B,$.set(1,0,0);if(V<=N)N=V,$.set(0,1,0);if(w<=N)$.set(0,0,1);E.crossVectors(U[0],$).normalize(),F[0].crossVectors(U[0],E),G[0].crossVectors(U[0],F[0]);for(let _=1;_<=J;_++){if(F[_]=F[_-1].clone(),G[_]=G[_-1].clone(),E.crossVectors(U[_-1],U[_]),E.length()>Number.EPSILON){E.normalize();let I=Math.acos(w0(U[_-1].dot(U[_]),-1,1));F[_].applyMatrix4(q.makeRotationAxis(E,I))}G[_].crossVectors(U[_],F[_])}if(Q===!0){let _=Math.acos(w0(F[0].dot(F[J]),-1,1));if(_/=J,U[0].dot(E.crossVectors(F[0],F[J]))>0)_=-_;for(let I=1;I<=J;I++)F[I].applyMatrix4(q.makeRotationAxis(U[I],_*I)),G[I].crossVectors(U[I],F[I])}return{tangents:U,normals:F,binormals:G}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class x5 extends B1{constructor(J=0,Q=0,$=1,U=1,F=0,G=Math.PI*2,E=!1,q=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=U,this.aStartAngle=F,this.aEndAngle=G,this.aClockwise=E,this.aRotation=q}getPoint(J,Q=new l){let $=Q,U=Math.PI*2,F=this.aEndAngle-this.aStartAngle,G=Math.abs(F)<Number.EPSILON;while(F<0)F+=U;while(F>U)F-=U;if(F<Number.EPSILON)if(G)F=0;else F=U;if(this.aClockwise===!0&&!G)if(F===U)F=-U;else F=F-U;let E=this.aStartAngle+J*F,q=this.aX+this.xRadius*Math.cos(E),N=this.aY+this.yRadius*Math.sin(E);if(this.aRotation!==0){let B=Math.cos(this.aRotation),V=Math.sin(this.aRotation),w=q-this.aX,_=N-this.aY;q=w*B-_*V+this.aX,N=w*V+_*B+this.aY}return $.set(q,N)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class G3 extends x5{constructor(J,Q,$,U,F,G){super(J,Q,$,$,U,F,G);this.isArcCurve=!0,this.type="ArcCurve"}}function R3(){let J=0,Q=0,$=0,U=0;function F(G,E,q,N){J=G,Q=q,$=-3*G+3*E-2*q-N,U=2*G-2*E+q+N}return{initCatmullRom:function(G,E,q,N,B){F(E,q,B*(q-G),B*(N-E))},initNonuniformCatmullRom:function(G,E,q,N,B,V,w){let _=(E-G)/B-(q-G)/(B+V)+(q-E)/V,I=(q-E)/V-(N-E)/(V+w)+(N-q)/w;_*=V,I*=V,F(E,q,_,I)},calc:function(G){let E=G*G,q=E*G;return J+Q*G+$*E+U*q}}}var j4=new E0,n6=new R3,s6=new R3,o6=new R3;class E3 extends B1{constructor(J=[],Q=!1,$="centripetal",U=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=U}getPoint(J,Q=new E0){let $=Q,U=this.points,F=U.length,G=(F-(this.closed?0:1))*J,E=Math.floor(G),q=G-E;if(this.closed)E+=E>0?0:(Math.floor(Math.abs(E)/F)+1)*F;else if(q===0&&E===F-1)E=F-2,q=1;let N,B;if(this.closed||E>0)N=U[(E-1)%F];else j4.subVectors(U[0],U[1]).add(U[0]),N=j4;let V=U[E%F],w=U[(E+1)%F];if(this.closed||E+2<F)B=U[(E+2)%F];else j4.subVectors(U[F-1],U[F-2]).add(U[F-1]),B=j4;if(this.curveType==="centripetal"||this.curveType==="chordal"){let _=this.curveType==="chordal"?0.5:0.25,I=Math.pow(N.distanceToSquared(V),_),T=Math.pow(V.distanceToSquared(w),_),f=Math.pow(w.distanceToSquared(B),_);if(T<0.0001)T=1;if(I<0.0001)I=T;if(f<0.0001)f=T;n6.initNonuniformCatmullRom(N.x,V.x,w.x,B.x,I,T,f),s6.initNonuniformCatmullRom(N.y,V.y,w.y,B.y,I,T,f),o6.initNonuniformCatmullRom(N.z,V.z,w.z,B.z,I,T,f)}else if(this.curveType==="catmullrom")n6.initCatmullRom(N.x,V.x,w.x,B.x,this.tension),s6.initCatmullRom(N.y,V.y,w.y,B.y,this.tension),o6.initCatmullRom(N.z,V.z,w.z,B.z,this.tension);return $.set(n6.calc(q),s6.calc(q),o6.calc(q)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let U=J.points[Q];this.points.push(U.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let U=this.points[Q];J.points.push(U.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let U=J.points[Q];this.points.push(new E0().fromArray(U))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function o7(J,Q,$,U,F){let G=(U-Q)*0.5,E=(F-$)*0.5,q=J*J,N=J*q;return(2*$-2*U+G+E)*N+(-3*$+3*U-2*G-E)*q+G*J+$}function NK(J,Q){let $=1-J;return $*$*Q}function DK(J,Q){return 2*(1-J)*J*Q}function PK(J,Q){return J*J*Q}function S5(J,Q,$,U){return NK(J,Q)+DK(J,$)+PK(J,U)}function LK(J,Q){let $=1-J;return $*$*$*Q}function MK(J,Q){let $=1-J;return 3*$*$*J*Q}function BK(J,Q){return 3*(1-J)*J*J*Q}function VK(J,Q){return J*J*J*Q}function k5(J,Q,$,U,F){return LK(J,Q)+MK(J,$)+BK(J,U)+VK(J,F)}class g4 extends B1{constructor(J=new l,Q=new l,$=new l,U=new l){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=U}getPoint(J,Q=new l){let $=Q,U=this.v0,F=this.v1,G=this.v2,E=this.v3;return $.set(k5(J,U.x,F.x,G.x,E.x),k5(J,U.y,F.y,G.y,E.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class O3 extends B1{constructor(J=new E0,Q=new E0,$=new E0,U=new E0){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=U}getPoint(J,Q=new E0){let $=Q,U=this.v0,F=this.v1,G=this.v2,E=this.v3;return $.set(k5(J,U.x,F.x,G.x,E.x),k5(J,U.y,F.y,G.y,E.y),k5(J,U.z,F.z,G.z,E.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class m4 extends B1{constructor(J=new l,Q=new l){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new l){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new l){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class q3 extends B1{constructor(J=new E0,Q=new E0){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new E0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new E0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class p4 extends B1{constructor(J=new l,Q=new l,$=new l){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new l){let $=Q,U=this.v0,F=this.v1,G=this.v2;return $.set(S5(J,U.x,F.x,G.x),S5(J,U.y,F.y,G.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class A3 extends B1{constructor(J=new E0,Q=new E0,$=new E0){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new E0){let $=Q,U=this.v0,F=this.v1,G=this.v2;return $.set(S5(J,U.x,F.x,G.x),S5(J,U.y,F.y,G.y),S5(J,U.z,F.z,G.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class u4 extends B1{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new l){let $=Q,U=this.points,F=(U.length-1)*J,G=Math.floor(F),E=F-G,q=U[G===0?G:G-1],N=U[G],B=U[G>U.length-2?U.length-1:G+1],V=U[G>U.length-3?U.length-1:G+2];return $.set(o7(E,q.x,N.x,B.x,V.x),o7(E,q.y,N.y,B.y,V.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let U=J.points[Q];this.points.push(U.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let U=this.points[Q];J.points.push(U.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let U=J.points[Q];this.points.push(new l().fromArray(U))}return this}}var r7=Object.freeze({__proto__:null,ArcCurve:G3,CatmullRomCurve3:E3,CubicBezierCurve:g4,CubicBezierCurve3:O3,EllipseCurve:x5,LineCurve:m4,LineCurve3:q3,QuadraticBezierCurve:p4,QuadraticBezierCurve3:A3,SplineCurve:u4});class N3 extends B1{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new r7[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),U=this.getCurveLengths(),F=0;while(F<U.length){if(U[F]>=$){let G=U[F]-$,E=this.curves[F],q=E.getLength(),N=q===0?0:1-G/q;return E.getPointAt(N,Q)}F++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,U=this.curves.length;$<U;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let U=0,F=this.curves;U<F.length;U++){let G=F[U],E=G.isEllipseCurve?J*2:G.isLineCurve||G.isLineCurve3?1:G.isSplineCurve?J*G.points.length:J,q=G.getPoints(E);for(let N=0;N<q.length;N++){let B=q[N];if($&&$.equals(B))continue;Q.push(B),$=B}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let U=J.curves[Q];this.curves.push(U.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let U=this.curves[Q];J.curves.push(U.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let U=J.curves[Q];this.curves.push(new r7[U.type]().fromJSON(U))}return this}}class v5 extends N3{constructor(J){super();if(this.type="Path",this.currentPoint=new l,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new m4(this.currentPoint.clone(),new l(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,U){let F=new p4(this.currentPoint.clone(),new l(J,Q),new l($,U));return this.curves.push(F),this.currentPoint.set($,U),this}bezierCurveTo(J,Q,$,U,F,G){let E=new g4(this.currentPoint.clone(),new l(J,Q),new l($,U),new l(F,G));return this.curves.push(E),this.currentPoint.set(F,G),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new u4(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,U,F,G){let E=this.currentPoint.x,q=this.currentPoint.y;return this.absarc(J+E,Q+q,$,U,F,G),this}absarc(J,Q,$,U,F,G){return this.absellipse(J,Q,$,$,U,F,G),this}ellipse(J,Q,$,U,F,G,E,q){let N=this.currentPoint.x,B=this.currentPoint.y;return this.absellipse(J+N,Q+B,$,U,F,G,E,q),this}absellipse(J,Q,$,U,F,G,E,q){let N=new x5(J,Q,$,U,F,G,E,q);if(this.curves.length>0){let V=N.getPoint(0);if(!V.equals(this.currentPoint))this.lineTo(V.x,V.y)}this.curves.push(N);let B=N.getPoint(1);return this.currentPoint.copy(B),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class j5 extends v5{constructor(J){super(J);this.uuid=x4(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,U=this.holes.length;$<U;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let U=J.holes[Q];this.holes.push(U.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let U=this.holes[Q];J.holes.push(U.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let U=J.holes[Q];this.holes.push(new v5().fromJSON(U))}return this}}function _K(J,Q,$=2){let U=Q&&Q.length,F=U?Q[0]*$:J.length,G=F9(J,0,F,$,!0),E=[];if(!G||G.next===G.prev)return E;let q,N,B;if(U)G=TK(J,Q,G,$);if(J.length>80*$){q=J[0],N=J[1];let V=q,w=N;for(let _=$;_<F;_+=$){let I=J[_],T=J[_+1];if(I<q)q=I;if(T<N)N=T;if(I>V)V=I;if(T>w)w=T}B=Math.max(V-q,w-N),B=B!==0?32767/B:0}return h5(G,E,$,q,N,B,0),E}function F9(J,Q,$,U,F){let G;if(F===mK(J,Q,$,U)>0)for(let E=Q;E<$;E+=U)G=a7(E/U|0,J[E],J[E+1],G);else for(let E=$-U;E>=Q;E-=U)G=a7(E/U|0,J[E],J[E+1],G);if(G&&r2(G,G.next))b5(G),G=G.next;return G}function z2(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,U;do if(U=!1,!$.steiner&&(r2($,$.next)||k0($.prev,$,$.next)===0)){if(b5($),$=Q=$.prev,$===$.next)break;U=!0}else $=$.next;while(U||$!==Q);return Q}function h5(J,Q,$,U,F,G,E){if(!J)return;if(!E&&G)hK(J,U,F,G);let q=J;while(J.prev!==J.next){let{prev:N,next:B}=J;if(G?wK(J,U,F,G):zK(J)){Q.push(N.i,J.i,B.i),b5(J),J=B.next,q=B.next;continue}if(J=B,J===q){if(!E)h5(z2(J),Q,$,U,F,G,1);else if(E===1)J=CK(z2(J),Q),h5(J,Q,$,U,F,G,2);else if(E===2)IK(J,Q,$,U,F,G);break}}}function zK(J){let Q=J.prev,$=J,U=J.next;if(k0(Q,$,U)>=0)return!1;let F=Q.x,G=$.x,E=U.x,q=Q.y,N=$.y,B=U.y,V=Math.min(F,G,E),w=Math.min(q,N,B),_=Math.max(F,G,E),I=Math.max(q,N,B),T=U.next;while(T!==Q){if(T.x>=V&&T.x<=_&&T.y>=w&&T.y<=I&&T5(F,q,G,N,E,B,T.x,T.y)&&k0(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function wK(J,Q,$,U){let F=J.prev,G=J,E=J.next;if(k0(F,G,E)>=0)return!1;let q=F.x,N=G.x,B=E.x,V=F.y,w=G.y,_=E.y,I=Math.min(q,N,B),T=Math.min(V,w,_),f=Math.max(q,N,B),h=Math.max(V,w,_),p=t6(I,T,Q,$,U),d=t6(f,h,Q,$,U),m=J.prevZ,x=J.nextZ;while(m&&m.z>=p&&x&&x.z<=d){if(m.x>=I&&m.x<=f&&m.y>=T&&m.y<=h&&m!==F&&m!==E&&T5(q,V,N,w,B,_,m.x,m.y)&&k0(m.prev,m,m.next)>=0)return!1;if(m=m.prevZ,x.x>=I&&x.x<=f&&x.y>=T&&x.y<=h&&x!==F&&x!==E&&T5(q,V,N,w,B,_,x.x,x.y)&&k0(x.prev,x,x.next)>=0)return!1;x=x.nextZ}while(m&&m.z>=p){if(m.x>=I&&m.x<=f&&m.y>=T&&m.y<=h&&m!==F&&m!==E&&T5(q,V,N,w,B,_,m.x,m.y)&&k0(m.prev,m,m.next)>=0)return!1;m=m.prevZ}while(x&&x.z<=d){if(x.x>=I&&x.x<=f&&x.y>=T&&x.y<=h&&x!==F&&x!==E&&T5(q,V,N,w,B,_,x.x,x.y)&&k0(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function CK(J,Q){let $=J;do{let U=$.prev,F=$.next.next;if(!r2(U,F)&&R9(U,$,$.next,F)&&f5(U,F)&&f5(F,U))Q.push(U.i,$.i,F.i),b5($),b5($.next),$=J=F;$=$.next}while($!==J);return z2($)}function IK(J,Q,$,U,F,G){let E=J;do{let q=E.next.next;while(q!==E.prev){if(E.i!==q.i&&yK(E,q)){let N=E9(E,q);E=z2(E,E.next),N=z2(N,N.next),h5(E,Q,$,U,F,G,0),h5(N,Q,$,U,F,G,0);return}q=q.next}E=E.next}while(E!==J)}function TK(J,Q,$,U){let F=[];for(let G=0,E=Q.length;G<E;G++){let q=Q[G]*U,N=G<E-1?Q[G+1]*U:J.length,B=F9(J,q,N,U,!1);if(B===B.next)B.steiner=!0;F.push(bK(B))}F.sort(SK);for(let G=0;G<F.length;G++)$=kK(F[G],$);return $}function SK(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let U=(J.next.y-J.y)/(J.next.x-J.x),F=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=U-F}}return $}function kK(J,Q){let $=jK(J,Q);if(!$)return Q;let U=E9($,J);return z2(U,U.next),z2($,$.next)}function jK(J,Q){let $=Q,U=J.x,F=J.y,G=-1/0,E;if(r2(J,$))return $;do{if(r2(J,$.next))return $.next;else if(F<=$.y&&F>=$.next.y&&$.next.y!==$.y){let w=$.x+(F-$.y)*($.next.x-$.x)/($.next.y-$.y);if(w<=U&&w>G){if(G=w,E=$.x<$.next.x?$:$.next,w===U)return E}}$=$.next}while($!==Q);if(!E)return null;let q=E,N=E.x,B=E.y,V=1/0;$=E;do{if(U>=$.x&&$.x>=N&&U!==$.x&&G9(F<B?U:G,F,N,B,F<B?G:U,F,$.x,$.y)){let w=Math.abs(F-$.y)/(U-$.x);if(f5($,J)&&(w<V||w===V&&($.x>E.x||$.x===E.x&&vK(E,$))))E=$,V=w}$=$.next}while($!==q);return E}function vK(J,Q){return k0(J.prev,J,Q.prev)<0&&k0(Q.next,J,J.next)<0}function hK(J,Q,$,U){let F=J;do{if(F.z===0)F.z=t6(F.x,F.y,Q,$,U);F.prevZ=F.prev,F.nextZ=F.next,F=F.next}while(F!==J);F.prevZ.nextZ=null,F.prevZ=null,fK(F)}function fK(J){let Q,$=1;do{let U=J,F;J=null;let G=null;Q=0;while(U){Q++;let E=U,q=0;for(let B=0;B<$;B++)if(q++,E=E.nextZ,!E)break;let N=$;while(q>0||N>0&&E){if(q!==0&&(N===0||!E||U.z<=E.z))F=U,U=U.nextZ,q--;else F=E,E=E.nextZ,N--;if(G)G.nextZ=F;else J=F;F.prevZ=G,G=F}U=E}G.nextZ=null,$*=2}while(Q>1);return J}function t6(J,Q,$,U,F){return J=(J-$)*F|0,Q=(Q-U)*F|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function bK(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function G9(J,Q,$,U,F,G,E,q){return(F-E)*(Q-q)>=(J-E)*(G-q)&&(J-E)*(U-q)>=($-E)*(Q-q)&&($-E)*(G-q)>=(F-E)*(U-q)}function T5(J,Q,$,U,F,G,E,q){return!(J===E&&Q===q)&&G9(J,Q,$,U,F,G,E,q)}function yK(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!xK(J,Q)&&(f5(J,Q)&&f5(Q,J)&&gK(J,Q)&&(k0(J.prev,J,Q.prev)||k0(J,Q.prev,Q))||r2(J,Q)&&k0(J.prev,J,J.next)>0&&k0(Q.prev,Q,Q.next)>0)}function k0(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function r2(J,Q){return J.x===Q.x&&J.y===Q.y}function R9(J,Q,$,U){let F=h4(k0(J,Q,$)),G=h4(k0(J,Q,U)),E=h4(k0($,U,J)),q=h4(k0($,U,Q));if(F!==G&&E!==q)return!0;if(F===0&&v4(J,$,Q))return!0;if(G===0&&v4(J,U,Q))return!0;if(E===0&&v4($,J,U))return!0;if(q===0&&v4($,Q,U))return!0;return!1}function v4(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function h4(J){return J>0?1:J<0?-1:0}function xK(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&R9($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function f5(J,Q){return k0(J.prev,J,J.next)<0?k0(J,Q,J.next)>=0&&k0(J,J.prev,Q)>=0:k0(J,Q,J.prev)<0||k0(J,J.next,Q)<0}function gK(J,Q){let $=J,U=!1,F=(J.x+Q.x)/2,G=(J.y+Q.y)/2;do{if($.y>G!==$.next.y>G&&$.next.y!==$.y&&F<($.next.x-$.x)*(G-$.y)/($.next.y-$.y)+$.x)U=!U;$=$.next}while($!==J);return U}function E9(J,Q){let $=e6(J.i,J.x,J.y),U=e6(Q.i,Q.x,Q.y),F=J.next,G=Q.prev;return J.next=Q,Q.prev=J,$.next=F,F.prev=$,U.next=$,$.prev=U,G.next=U,U.prev=G,U}function a7(J,Q,$,U){let F=e6(J,Q,$);if(!U)F.prev=F,F.next=F;else F.next=U.next,F.prev=U,U.next.prev=F,U.next=F;return F}function b5(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function e6(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mK(J,Q,$,U){let F=0;for(let G=Q,E=$-U;G<$;G+=U)F+=(J[E]-J[G])*(J[G+1]+J[E+1]),E=G;return F}class O9{static triangulate(J,Q,$=2){return _K(J,Q,$)}}class A2{static area(J){let Q=J.length,$=0;for(let U=Q-1,F=0;F<Q;U=F++)$+=J[U].x*J[F].y-J[F].x*J[U].y;return $*0.5}static isClockWise(J){return A2.area(J)<0}static triangulateShape(J,Q){let $=[],U=[],F=[];t7(J),e7($,J);let G=J.length;Q.forEach(t7);for(let q=0;q<Q.length;q++)U.push(G),G+=Q[q].length,e7($,Q[q]);let E=O9.triangulate($,U);for(let q=0;q<E.length;q+=3)F.push(E.slice(q,q+3));return F}}function t7(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function e7(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}function q9(J){let Q={};for(let $ in J){Q[$]={};for(let U in J[$]){let F=J[$][U];if(F&&(F.isColor||F.isMatrix3||F.isMatrix4||F.isVector2||F.isVector3||F.isVector4||F.isTexture||F.isQuaternion))if(F.isRenderTargetTexture)d0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][U]=null;else Q[$][U]=F.clone();else if(Array.isArray(F))Q[$][U]=F.slice();else Q[$][U]=F}}return Q}function H1(J){let Q={};for(let $=0;$<J.length;$++){let U=q9(J[$]);for(let F in U)Q[F]=U[F]}return Q}function f4(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class w2{constructor(J,Q,$,U){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=U!==void 0?U:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,U=Q[$],F=Q[$-1];J:{Q:{let G;H:{$:if(!(J<U)){for(let E=$+2;;){if(U===void 0){if(J<F)break $;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===E)break;if(F=U,U=Q[++$],J<U)break Q}G=Q.length;break H}if(!(J>=F)){let E=Q[1];if(J<E)$=2,F=E;for(let q=$-2;;){if(F===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===q)break;if(U=F,F=Q[--$-1],J>=F)break Q}G=$,$=0;break H}break J}while($<G){let E=$+G>>>1;if(J<Q[E])G=E;else $=E+1}if(U=Q[$],F=Q[$-1],F===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(U===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,F,U)}return this.interpolate_($,F,J,U)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,U=this.valueSize,F=J*U;for(let G=0;G!==U;++G)Q[G]=$[F+G];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class D3 extends w2{constructor(J,Q,$,U){super(J,Q,$,U);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let U=this.parameterPositions,F=J-2,G=J+1,E=U[F],q=U[G];if(E===void 0)switch(this.getSettings_().endingStart){case 2401:F=J,E=2*Q-$;break;case 2402:F=U.length-2,E=Q+U[F]-U[F+1];break;default:F=J,E=$}if(q===void 0)switch(this.getSettings_().endingEnd){case 2401:G=J,q=2*$-Q;break;case 2402:G=1,q=$+U[1]-U[0];break;default:G=J-1,q=Q}let N=($-Q)*0.5,B=this.valueSize;this._weightPrev=N/(Q-E),this._weightNext=N/(q-$),this._offsetPrev=F*B,this._offsetNext=G*B}interpolate_(J,Q,$,U){let F=this.resultBuffer,G=this.sampleValues,E=this.valueSize,q=J*E,N=q-E,B=this._offsetPrev,V=this._offsetNext,w=this._weightPrev,_=this._weightNext,I=($-Q)/(U-Q),T=I*I,f=T*I,h=-w*f+2*w*T-w*I,p=(1+w)*f+(-1.5-2*w)*T+(-0.5+w)*I+1,d=(-1-_)*f+(1.5+_)*T+0.5*I,m=_*f-_*T;for(let x=0;x!==E;++x)F[x]=h*G[B+x]+p*G[N+x]+d*G[q+x]+m*G[V+x];return F}}class P3 extends w2{constructor(J,Q,$,U){super(J,Q,$,U)}interpolate_(J,Q,$,U){let F=this.resultBuffer,G=this.sampleValues,E=this.valueSize,q=J*E,N=q-E,B=($-Q)/(U-Q),V=1-B;for(let w=0;w!==E;++w)F[w]=G[N+w]*V+G[q+w]*B;return F}}class L3 extends w2{constructor(J,Q,$,U){super(J,Q,$,U)}interpolate_(J){return this.copySampleValue_(J-1)}}class M3 extends w2{interpolate_(J,Q,$,U){let F=this.resultBuffer,G=this.sampleValues,E=this.valueSize,q=J*E,N=q-E,B=this.settings||this.DefaultSettings_,V=B.inTangents,w=B.outTangents;if(!V||!w){let T=($-Q)/(U-Q),f=1-T;for(let h=0;h!==E;++h)F[h]=G[N+h]*f+G[q+h]*T;return F}let _=E*2,I=J-1;for(let T=0;T!==E;++T){let f=G[N+T],h=G[q+T],p=I*_+T*2,d=w[p],m=w[p+1],x=J*_+T*2,t=V[x],s=V[x+1],W0=($-Q)/(U-Q),F0,P0,b,y,c;for(let G0=0;G0<8;G0++){F0=W0*W0,P0=F0*W0,b=1-W0,y=b*b,c=y*b;let Y1=c*Q+3*y*W0*d+3*b*F0*t+P0*U-$;if(Math.abs(Y1)<0.0000000001)break;let u0=3*y*(d-Q)+6*b*W0*(t-d)+3*F0*(U-t);if(Math.abs(u0)<0.0000000001)break;W0=W0-Y1/u0,W0=Math.max(0,Math.min(1,W0))}F[T]=c*f+3*y*W0*m+3*b*F0*s+P0*h}return F}}class V1{constructor(J,Q,$,U){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=f4(Q,this.TimeBufferType),this.values=f4($,this.ValueBufferType),this.setInterpolation(U||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:f4(J.times,Array),values:f4(J.values,Array)};let U=J.getInterpolation();if(U!==J.DefaultInterpolation)$.interpolation=U}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new L3(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new P3(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new D3(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new M3(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.settings=this.settings;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return d0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,U=Q.length;$!==U;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,U=Q.length;$!==U;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,U=$.length,F=0,G=U-1;while(F!==U&&$[F]<J)++F;while(G!==-1&&$[G]>Q)--G;if(++G,F!==0||G!==U){if(F>=G)G=Math.max(G,1),F=G-1;let E=this.getValueSize();this.times=$.slice(F,G),this.values=this.values.slice(F*E,G*E)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)m0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,U=this.values,F=$.length;if(F===0)m0("KeyframeTrack: Track is empty.",this),J=!1;let G=null;for(let E=0;E!==F;E++){let q=$[E];if(typeof q==="number"&&isNaN(q)){m0("KeyframeTrack: Time is not a valid number.",this,E,q),J=!1;break}if(G!==null&&G>q){m0("KeyframeTrack: Out of order keys.",this,E,q,G),J=!1;break}G=q}if(U!==void 0){if(WK(U))for(let E=0,q=U.length;E!==q;++E){let N=U[E];if(isNaN(N)){m0("KeyframeTrack: Value is not a valid number.",this,E,N),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),U=this.getInterpolation()===2302,F=J.length-1,G=1;for(let E=1;E<F;++E){let q=!1,N=J[E],B=J[E+1];if(N!==B&&(E!==1||N!==J[0]))if(!U){let V=E*$,w=V-$,_=V+$;for(let I=0;I!==$;++I){let T=Q[V+I];if(T!==Q[w+I]||T!==Q[_+I]){q=!0;break}}}else q=!0;if(q){if(E!==G){J[G]=J[E];let V=E*$,w=G*$;for(let _=0;_!==$;++_)Q[w+_]=Q[V+_]}++G}}if(F>0){J[G]=J[F];for(let E=F*$,q=G*$,N=0;N!==$;++N)Q[q+N]=Q[E+N];++G}if(G!==J.length)this.times=J.slice(0,G),this.values=Q.slice(0,G*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),U=new this.constructor(this.name,J,Q);return U.createInterpolant=this.createInterpolant,U}}V1.prototype.ValueTypeName="";V1.prototype.TimeBufferType=Float32Array;V1.prototype.ValueBufferType=Float32Array;V1.prototype.DefaultInterpolation=2301;class C2 extends V1{constructor(J,Q,$){super(J,Q,$)}}C2.prototype.ValueTypeName="bool";C2.prototype.ValueBufferType=Array;C2.prototype.DefaultInterpolation=2300;C2.prototype.InterpolantFactoryMethodLinear=void 0;C2.prototype.InterpolantFactoryMethodSmooth=void 0;class B3 extends V1{constructor(J,Q,$,U){super(J,Q,$,U)}}B3.prototype.ValueTypeName="color";class V3 extends V1{constructor(J,Q,$,U){super(J,Q,$,U)}}V3.prototype.ValueTypeName="number";class _3 extends w2{constructor(J,Q,$,U){super(J,Q,$,U)}interpolate_(J,Q,$,U){let F=this.resultBuffer,G=this.sampleValues,E=this.valueSize,q=($-Q)/(U-Q),N=J*E;for(let B=N+E;N!==B;N+=4)q2.slerpFlat(F,0,G,N-E,G,N,q);return F}}class d4 extends V1{constructor(J,Q,$,U){super(J,Q,$,U)}InterpolantFactoryMethodLinear(J){return new _3(this.times,this.values,this.getValueSize(),J)}}d4.prototype.ValueTypeName="quaternion";d4.prototype.InterpolantFactoryMethodSmooth=void 0;class I2 extends V1{constructor(J,Q,$){super(J,Q,$)}}I2.prototype.ValueTypeName="string";I2.prototype.ValueBufferType=Array;I2.prototype.DefaultInterpolation=2300;I2.prototype.InterpolantFactoryMethodLinear=void 0;I2.prototype.InterpolantFactoryMethodSmooth=void 0;class z3 extends V1{constructor(J,Q,$,U){super(J,Q,$,U)}}z3.prototype.ValueTypeName="vector";class w3{constructor(J,Q,$){let U=this,F=!1,G=0,E=0,q=void 0,N=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(B){if(E++,F===!1){if(U.onStart!==void 0)U.onStart(B,G,E)}F=!0},this.itemEnd=function(B){if(G++,U.onProgress!==void 0)U.onProgress(B,G,E);if(G===E){if(F=!1,U.onLoad!==void 0)U.onLoad()}},this.itemError=function(B){if(U.onError!==void 0)U.onError(B)},this.resolveURL=function(B){if(q)return q(B);return B},this.setURLModifier=function(B){return q=B,this},this.addHandler=function(B,V){return N.push(B,V),this},this.removeHandler=function(B){let V=N.indexOf(B);if(V!==-1)N.splice(V,2);return this},this.getHandler=function(B){for(let V=0,w=N.length;V<w;V+=2){let _=N[V],I=N[V+1];if(_.global)_.lastIndex=0;if(_.test(B))return I}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var A9=new w3;class C3{constructor(J){if(this.manager=J!==void 0?J:A9,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(U,F){$.load(J,U,Q,F)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}C3.DEFAULT_MATERIAL_NAME="__DEFAULT";var I3="\\[\\]\\.:\\/",pK=new RegExp("["+I3+"]","g"),T3="[^"+I3+"]",uK="[^"+I3.replace("\\.","")+"]",dK=/((?:WC+[\/:])*)/.source.replace("WC",T3),lK=/(WCOD+)?/.source.replace("WCOD",uK),cK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",T3),iK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",T3),nK=new RegExp("^"+dK+lK+cK+iK+"$"),sK=["material","materials","bones","map"];class N9{constructor(J,Q,$){let U=$||V0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,U)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,U=this._bindings[$];if(U!==void 0)U.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let U=this._targetGroup.nCachedObjects_,F=$.length;U!==F;++U)$[U].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class V0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||V0.parseTrackName(Q),this.node=V0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new V0(J,Q,$);else return new V0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(pK,"")}static parseTrackName(J){let Q=nK.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},U=$.nodeName&&$.nodeName.lastIndexOf(".");if(U!==void 0&&U!==-1){let F=$.nodeName.substring(U+1);if(sK.indexOf(F)!==-1)$.nodeName=$.nodeName.substring(0,U),$.objectName=F}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(F){for(let G=0;G<F.length;G++){let E=F[G];if(E.name===Q||E.uuid===Q)return E;let q=$(E.children);if(q)return q}return null},U=$(J.children);if(U)return U}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let U=0,F=$.length;U!==F;++U)J[Q++]=$[U]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let U=0,F=$.length;U!==F;++U)$[U]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let U=0,F=$.length;U!==F;++U)$[U]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let U=0,F=$.length;U!==F;++U)$[U]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,U=Q.propertyName,F=Q.propertyIndex;if(!J)J=V0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){d0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let N=Q.objectIndex;switch($){case"materials":if(!J.material){m0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){m0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){m0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let B=0;B<J.length;B++)if(J[B].name===N){N=B;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){m0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){m0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){m0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(N!==void 0){if(J[N]===void 0){m0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[N]}}let G=J[U];if(G===void 0){let N=Q.nodeName;m0("PropertyBinding: Trying to update property for track: "+N+"."+U+" but it wasn't found.",J);return}let E=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)E=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)E=this.Versioning.MatrixWorldNeedsUpdate;let q=this.BindingType.Direct;if(F!==void 0){if(U==="morphTargetInfluences"){if(!J.geometry){m0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){m0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[F]!==void 0)F=J.morphTargetDictionary[F]}q=this.BindingType.ArrayElement,this.resolvedProperty=G,this.propertyIndex=F}else if(G.fromArray!==void 0&&G.toArray!==void 0)q=this.BindingType.HasFromToArray,this.resolvedProperty=G;else if(Array.isArray(G))q=this.BindingType.EntireArray,this.resolvedProperty=G;else this.propertyName=U;this.getValue=this.GetterByBindingType[q],this.setValue=this.SetterByBindingTypeAndVersioning[q][E]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}V0.Composite=N9;V0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};V0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};V0.prototype.GetterByBindingType=[V0.prototype._getValue_direct,V0.prototype._getValue_array,V0.prototype._getValue_arrayElement,V0.prototype._getValue_toArray];V0.prototype.SetterByBindingTypeAndVersioning=[[V0.prototype._setValue_direct,V0.prototype._setValue_direct_setNeedsUpdate,V0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[V0.prototype._setValue_array,V0.prototype._setValue_array_setNeedsUpdate,V0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[V0.prototype._setValue_arrayElement,V0.prototype._setValue_arrayElement_setNeedsUpdate,V0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[V0.prototype._setValue_fromArray,V0.prototype._setValue_fromArray_setNeedsUpdate,V0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QG=new Float32Array(1);var J9=new l;class l4{constructor(J=new l(1/0,1/0),Q=new l(-1/0,-1/0)){this.isBox2=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=J9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(J){return this.isEmpty()?J.set(0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,J9).distanceTo(J)}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}class c4{constructor(){this.type="ShapePath",this.color=new p0,this.subPaths=[],this.currentPath=null}moveTo(J,Q){return this.currentPath=new v5,this.subPaths.push(this.currentPath),this.currentPath.moveTo(J,Q),this}lineTo(J,Q){return this.currentPath.lineTo(J,Q),this}quadraticCurveTo(J,Q,$,U){return this.currentPath.quadraticCurveTo(J,Q,$,U),this}bezierCurveTo(J,Q,$,U,F,G){return this.currentPath.bezierCurveTo(J,Q,$,U,F,G),this}splineThru(J){return this.currentPath.splineThru(J),this}toShapes(J){function Q(h){let p=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],t=new j5;t.curves=x.curves,p.push(t)}return p}function $(h,p){let d=p.length,m=!1;for(let x=d-1,t=0;t<d;x=t++){let s=p[x],W0=p[t],F0=W0.x-s.x,P0=W0.y-s.y;if(Math.abs(P0)>Number.EPSILON){if(P0<0)s=p[t],F0=-F0,W0=p[x],P0=-P0;if(h.y<s.y||h.y>W0.y)continue;if(h.y===s.y){if(h.x===s.x)return!0}else{let b=P0*(h.x-s.x)-F0*(h.y-s.y);if(b===0)return!0;if(b<0)continue;m=!m}}else{if(h.y!==s.y)continue;if(W0.x<=h.x&&h.x<=s.x||s.x<=h.x&&h.x<=W0.x)return!0}}return m}let U=A2.isClockWise,F=this.subPaths;if(F.length===0)return[];let G,E,q,N=[];if(F.length===1)return E=F[0],q=new j5,q.curves=E.curves,N.push(q),N;let B=!U(F[0].getPoints());B=J?!B:B;let V=[],w=[],_=[],I=0,T;w[I]=void 0,_[I]=[];for(let h=0,p=F.length;h<p;h++)if(E=F[h],T=E.getPoints(),G=U(T),G=J?!G:G,G){if(!B&&w[I])I++;if(w[I]={s:new j5,p:T},w[I].s.curves=E.curves,B)I++;_[I]=[]}else _[I].push({h:E,p:T[0]});if(!w[0])return Q(F);if(w.length>1){let h=!1,p=0;for(let d=0,m=w.length;d<m;d++)V[d]=[];for(let d=0,m=w.length;d<m;d++){let x=_[d];for(let t=0;t<x.length;t++){let s=x[t],W0=!0;for(let F0=0;F0<w.length;F0++)if($(s.p,w[F0].p)){if(d!==F0)p++;if(W0)W0=!1,V[F0].push(s);else h=!0}if(W0)V[d].push(s)}}if(p>0&&h===!1)_=V}let f;for(let h=0,p=w.length;h<p;h++){q=w[h].s,N.push(q),f=_[h];for(let d=0,m=f.length;d<m;d++)q.holes.push(f[d].h)}return N}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));if(typeof window<"u")if(window.__THREE__)d0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="183";var oK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rK=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$U=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ZU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LU=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_U=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zU="gl_FragColor = linearToOutputTexel( gl_FragColor );",wU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,IU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nU=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sU=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rU=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JX=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$X=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZX=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WX=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KX=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UX=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XX=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YX=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FX=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GX=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RX=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EX=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AX=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NX=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DX=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PX=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LX=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MX=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BX=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VX=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_X=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zX=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wX=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CX=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IX=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TX=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SX=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kX=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jX=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vX=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hX=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fX=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bX=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yX=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xX=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gX=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mX=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pX=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uX=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dX=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sX=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oX=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aX=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QY=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HY=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$Y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KY=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UY=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YY=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FY=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GY=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RY=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EY=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OY=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qY=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AY=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NY=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DY=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PY=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LY=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MY=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BY=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_Y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zY=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wY=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D0={alphahash_fragment:oK,alphahash_pars_fragment:rK,alphamap_fragment:aK,alphamap_pars_fragment:tK,alphatest_fragment:eK,alphatest_pars_fragment:JU,aomap_fragment:QU,aomap_pars_fragment:HU,batching_pars_vertex:$U,batching_vertex:ZU,begin_vertex:WU,beginnormal_vertex:KU,bsdfs:UU,iridescence_fragment:XU,bumpmap_pars_fragment:YU,clipping_planes_fragment:FU,clipping_planes_pars_fragment:GU,clipping_planes_pars_vertex:RU,clipping_planes_vertex:EU,color_fragment:OU,color_pars_fragment:qU,color_pars_vertex:AU,color_vertex:NU,common:DU,cube_uv_reflection_fragment:PU,defaultnormal_vertex:LU,displacementmap_pars_vertex:MU,displacementmap_vertex:BU,emissivemap_fragment:VU,emissivemap_pars_fragment:_U,colorspace_fragment:zU,colorspace_pars_fragment:wU,envmap_fragment:CU,envmap_common_pars_fragment:IU,envmap_pars_fragment:TU,envmap_pars_vertex:SU,envmap_physical_pars_fragment:pU,envmap_vertex:kU,fog_vertex:jU,fog_pars_vertex:vU,fog_fragment:hU,fog_pars_fragment:fU,gradientmap_pars_fragment:bU,lightmap_pars_fragment:yU,lights_lambert_fragment:xU,lights_lambert_pars_fragment:gU,lights_pars_begin:mU,lights_toon_fragment:uU,lights_toon_pars_fragment:dU,lights_phong_fragment:lU,lights_phong_pars_fragment:cU,lights_physical_fragment:iU,lights_physical_pars_fragment:nU,lights_fragment_begin:sU,lights_fragment_maps:oU,lights_fragment_end:rU,logdepthbuf_fragment:aU,logdepthbuf_pars_fragment:tU,logdepthbuf_pars_vertex:eU,logdepthbuf_vertex:JX,map_fragment:QX,map_pars_fragment:HX,map_particle_fragment:$X,map_particle_pars_fragment:ZX,metalnessmap_fragment:WX,metalnessmap_pars_fragment:KX,morphinstance_vertex:UX,morphcolor_vertex:XX,morphnormal_vertex:YX,morphtarget_pars_vertex:FX,morphtarget_vertex:GX,normal_fragment_begin:RX,normal_fragment_maps:EX,normal_pars_fragment:OX,normal_pars_vertex:qX,normal_vertex:AX,normalmap_pars_fragment:NX,clearcoat_normal_fragment_begin:DX,clearcoat_normal_fragment_maps:PX,clearcoat_pars_fragment:LX,iridescence_pars_fragment:MX,opaque_fragment:BX,packing:VX,premultiplied_alpha_fragment:_X,project_vertex:zX,dithering_fragment:wX,dithering_pars_fragment:CX,roughnessmap_fragment:IX,roughnessmap_pars_fragment:TX,shadowmap_pars_fragment:SX,shadowmap_pars_vertex:kX,shadowmap_vertex:jX,shadowmask_pars_fragment:vX,skinbase_vertex:hX,skinning_pars_vertex:fX,skinning_vertex:bX,skinnormal_vertex:yX,specularmap_fragment:xX,specularmap_pars_fragment:gX,tonemapping_fragment:mX,tonemapping_pars_fragment:pX,transmission_fragment:uX,transmission_pars_fragment:dX,uv_pars_fragment:lX,uv_pars_vertex:cX,uv_vertex:iX,worldpos_vertex:nX,background_vert:sX,background_frag:oX,backgroundCube_vert:rX,backgroundCube_frag:aX,cube_vert:tX,cube_frag:eX,depth_vert:JY,depth_frag:QY,distance_vert:HY,distance_frag:$Y,equirect_vert:ZY,equirect_frag:WY,linedashed_vert:KY,linedashed_frag:UY,meshbasic_vert:XY,meshbasic_frag:YY,meshlambert_vert:FY,meshlambert_frag:GY,meshmatcap_vert:RY,meshmatcap_frag:EY,meshnormal_vert:OY,meshnormal_frag:qY,meshphong_vert:AY,meshphong_frag:NY,meshphysical_vert:DY,meshphysical_frag:PY,meshtoon_vert:LY,meshtoon_frag:MY,points_vert:BY,points_frag:VY,shadow_vert:_Y,shadow_frag:zY,sprite_vert:wY,sprite_frag:CY},r={common:{diffuse:{value:new p0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X0},alphaMap:{value:null},alphaMapTransform:{value:new X0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X0}},envmap:{envMap:{value:null},envMapRotation:{value:new X0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X0},normalScale:{value:new l(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new p0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new p0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X0},alphaTest:{value:0},uvTransform:{value:new X0}},sprite:{diffuse:{value:new p0(16777215)},opacity:{value:1},center:{value:new l(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X0},alphaMap:{value:null},alphaMapTransform:{value:new X0},alphaTest:{value:0}}},D9={basic:{uniforms:H1([r.common,r.specularmap,r.envmap,r.aomap,r.lightmap,r.fog]),vertexShader:D0.meshbasic_vert,fragmentShader:D0.meshbasic_frag},lambert:{uniforms:H1([r.common,r.specularmap,r.envmap,r.aomap,r.lightmap,r.emissivemap,r.bumpmap,r.normalmap,r.displacementmap,r.fog,r.lights,{emissive:{value:new p0(0)},envMapIntensity:{value:1}}]),vertexShader:D0.meshlambert_vert,fragmentShader:D0.meshlambert_frag},phong:{uniforms:H1([r.common,r.specularmap,r.envmap,r.aomap,r.lightmap,r.emissivemap,r.bumpmap,r.normalmap,r.displacementmap,r.fog,r.lights,{emissive:{value:new p0(0)},specular:{value:new p0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:D0.meshphong_vert,fragmentShader:D0.meshphong_frag},standard:{uniforms:H1([r.common,r.envmap,r.aomap,r.lightmap,r.emissivemap,r.bumpmap,r.normalmap,r.displacementmap,r.roughnessmap,r.metalnessmap,r.fog,r.lights,{emissive:{value:new p0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:D0.meshphysical_vert,fragmentShader:D0.meshphysical_frag},toon:{uniforms:H1([r.common,r.aomap,r.lightmap,r.emissivemap,r.bumpmap,r.normalmap,r.displacementmap,r.gradientmap,r.fog,r.lights,{emissive:{value:new p0(0)}}]),vertexShader:D0.meshtoon_vert,fragmentShader:D0.meshtoon_frag},matcap:{uniforms:H1([r.common,r.bumpmap,r.normalmap,r.displacementmap,r.fog,{matcap:{value:null}}]),vertexShader:D0.meshmatcap_vert,fragmentShader:D0.meshmatcap_frag},points:{uniforms:H1([r.points,r.fog]),vertexShader:D0.points_vert,fragmentShader:D0.points_frag},dashed:{uniforms:H1([r.common,r.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:D0.linedashed_vert,fragmentShader:D0.linedashed_frag},depth:{uniforms:H1([r.common,r.displacementmap]),vertexShader:D0.depth_vert,fragmentShader:D0.depth_frag},normal:{uniforms:H1([r.common,r.bumpmap,r.normalmap,r.displacementmap,{opacity:{value:1}}]),vertexShader:D0.meshnormal_vert,fragmentShader:D0.meshnormal_frag},sprite:{uniforms:H1([r.sprite,r.fog]),vertexShader:D0.sprite_vert,fragmentShader:D0.sprite_frag},background:{uniforms:{uvTransform:{value:new X0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:D0.background_vert,fragmentShader:D0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X0}},vertexShader:D0.backgroundCube_vert,fragmentShader:D0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:D0.cube_vert,fragmentShader:D0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:D0.equirect_vert,fragmentShader:D0.equirect_frag},distance:{uniforms:H1([r.common,r.displacementmap,{referencePosition:{value:new E0},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:D0.distance_vert,fragmentShader:D0.distance_frag},shadow:{uniforms:H1([r.lights,r.fog,{color:{value:new p0(0)},opacity:{value:1}}]),vertexShader:D0.shadow_vert,fragmentShader:D0.shadow_frag}};D9.physical={uniforms:H1([D9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X0},clearcoatNormalScale:{value:new l(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X0},sheen:{value:0},sheenColor:{value:new p0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X0},transmissionSamplerSize:{value:new l},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X0},attenuationDistance:{value:0},attenuationColor:{value:new p0(0)},specularColor:{value:new p0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X0},anisotropyVector:{value:new l},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X0}}]),vertexShader:D0.meshphysical_vert,fragmentShader:D0.meshphysical_frag};var aN={[J3]:"LINEAR_TONE_MAPPING",[Q3]:"REINHARD_TONE_MAPPING",[H3]:"CINEON_TONE_MAPPING",[$3]:"ACES_FILMIC_TONE_MAPPING",[W3]:"AGX_TONE_MAPPING",[K3]:"NEUTRAL_TONE_MAPPING",[Z3]:"CUSTOM_TONE_MAPPING"};var tN=new Float32Array(16),eN=new Float32Array(9),JD=new Float32Array(4);var QD={[J3]:"Linear",[Q3]:"Reinhard",[H3]:"Cineon",[$3]:"ACESFilmic",[W3]:"AgX",[K3]:"Neutral",[Z3]:"Custom"};var HD={[Q9]:"SHADOWMAP_TYPE_PCF",[H9]:"SHADOWMAP_TYPE_VSM"};var $D={[K9]:"ENVMAP_TYPE_CUBE",[U3]:"ENVMAP_TYPE_CUBE",[U9]:"ENVMAP_TYPE_CUBE_UV"};var ZD={[U3]:"ENVMAP_MODE_REFRACTION"};var WD={[$9]:"ENVMAP_BLENDING_MULTIPLY",[Z9]:"ENVMAP_BLENDING_MIX",[W9]:"ENVMAP_BLENDING_ADD"};var KD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var v0=Object.freeze({TEXT:0,ESCAPE:1,SKIP_FORMAT:2,PARAGRAPH1:3,PARAGRAPH2:4,PARAGRAPH3:5,COLOR:6}),Q2=Object.freeze({TEXT:0,SCOPE:1,PARAGRAPH:2,NON_BREAKING_SPACE:3,PARAGRAPH_ALIGNMENT:4,COLOR:5}),IY=new Set(["L","l","O","o","K","k","P","X","~"]),TY=new Set(["f","F","p","Q","H","W","S","A","C","T"]),SY=new Set(["\\","{","}"]);class x1{static EntityType=Q2;entities;constructor(){this.entities=[]}Parse(J){let Q=J.length,$=0,U=v0.TEXT,F=[],G=this.entities,E=0,q=this;function N(){if(U!==v0.TEXT||$===E)return;G.push({type:Q2.TEXT,content:J.slice($,E)}),$=E}function B(I){G.push({type:I})}function V(){let I=J.slice($,E),T=parseInt(I,10);if(isNaN(T))return;if(T<1||T>255)return;G.push({type:Q2.COLOR,color:u2[T]})}function w(){let I={type:Q2.SCOPE,content:[]};G.push(I),G=I.content,F.push(I)}function _(){if(F.length===0)return;if(F.pop(),F.length===0)G=q.entities;else G=F[F.length-1].content}for(;E<Q;E++){let I=J.charAt(E);switch(U){case v0.TEXT:if(I==="{"){N(),w(),$=E+1;continue}if(I==="}"){N(),_(),$=E+1;continue}if(I==="\\"){N(),U=v0.ESCAPE;continue}continue;case v0.ESCAPE:if(IY.has(I)){switch(I){case"P":B(Q2.PARAGRAPH);break;case"~":B(Q2.NON_BREAKING_SPACE);break}U=v0.TEXT,$=E+1;continue}if(TY.has(I)){switch(I){case"p":U=v0.PARAGRAPH1;continue;case"C":U=v0.COLOR,$=E+1;continue}U=v0.SKIP_FORMAT;continue}if(SY.has(I))$=E;else $=E-1;U=v0.TEXT;continue;case v0.PARAGRAPH1:U=I==="x"?v0.PARAGRAPH2:v0.SKIP_FORMAT;continue;case v0.PARAGRAPH2:U=I==="q"?v0.PARAGRAPH3:v0.SKIP_FORMAT;continue;case v0.PARAGRAPH3:G.push({type:Q2.PARAGRAPH_ALIGNMENT,alignment:I}),U=v0.SKIP_FORMAT;continue;case v0.SKIP_FORMAT:if(I===";")$=E+1,U=v0.TEXT;continue;case v0.COLOR:if(I===";")V(),$=E+1,U=v0.TEXT;continue;default:throw Error("Unhandled state")}}N()}GetContent(){return this.entities}*GetText(){function*J(Q){for(let $ of Q)if($.type===Q2.TEXT)yield $.content;else if($.type===Q2.SCOPE&&Array.isArray($.content))yield*J($.content)}yield*J(this.GetContent())}}var kY=/(?:%%([dpcou%]))|(?:\\U\+([0-9a-f]{4}))/gi;function g5(J){if(!J)return null;let Q=String(J).trim().replaceAll("\\","/").split("/").pop();if(!Q)return null;return Q.toLowerCase().replace(/\.(?:ttf|otf|ttc|shx)$/i,"").replace(/(?:[-\s](?:regular|normal))+$/i,"")}function i1(J){return J.replaceAll(kY,(Q,$,U)=>{if($!==void 0)switch($.toLowerCase()){case"d":return"°";case"p":return"±";case"c":return"∅";case"o":return"";case"u":return"";case"%":return"%"}else if(U!==void 0){let F=parseInt(U,16);if(isNaN(F))return Q;return String.fromCharCode(F)}return Q})}var X1=Object.freeze({LEFT:0,CENTER:1,RIGHT:2,ALIGNED:3,MIDDLE:4,FIT:5}),c1=Object.freeze({BASELINE:0,BOTTOM:1,MIDDLE:2,TOP:3}),r0=Object.freeze({TOP_LEFT:1,TOP_CENTER:2,TOP_RIGHT:3,MIDDLE_LEFT:4,MIDDLE_CENTER:5,MIDDLE_RIGHT:6,BOTTOM_LEFT:7,BOTTOM_CENTER:8,BOTTOM_RIGHT:9});class P9{data;charMap;scale;constructor(J){this.data=J,this.charMap=new Map;for(let Q of Object.values(J.glyphs.glyphs)){if(Q.unicode===void 0)continue;this.charMap.set(String.fromCodePoint(Q.unicode),Q)}this.scale=100/((this.data.unitsPerEm||2048)*72)}HasChar(J){return this.charMap.has(J)}GetCharPath(J){let Q=this.charMap.get(J);if(!Q)return null;let $=this.scale,U=new c4;for(let F of Q.path.commands)switch(F.type){case"M":U.moveTo(F.x*$,F.y*$);break;case"L":U.lineTo(F.x*$,F.y*$);break;case"Q":U.quadraticCurveTo(F.x1*$,F.y1*$,F.x*$,F.y*$);break;case"C":U.bezierCurveTo(F.x1*$,F.y1*$,F.x2*$,F.y2*$,F.x*$,F.y*$);break}return{advance:Q.advanceWidth*$,path:U,bounds:{xMin:Q.xMin*$,xMax:Q.xMax*$,yMin:Q.yMin*$,yMax:Q.yMax*$}}}GetKerning(J,Q){let $=this.data.charToGlyphIndex(J);if($===0)return 0;let U=this.data.charToGlyphIndex(Q);if(U===0)return 0;return this.data.getKerningValue($,U)*this.scale}}class L9{font;advance;bounds;vertices=null;indices=[];constructor(J,Q,$){if(this.font=J,this.advance=Q.advance,this.bounds=Q.bounds,Q.path){let U=Q.path.toShapes(!1);this.vertices=[],this.indices=[];for(let F of U){let G=F.extractPoints($.curveSubdivision??2);if(!A2.isClockWise(G.shape)){G.shape=G.shape.reverse();for(let N of G.holes)if(A2.isClockWise(N))N.reverse()}let E=A2.triangulateShape(G.shape,G.holes),q=this.vertices.length;for(let N of G.shape)this.vertices.push(N);for(let N of G.holes)for(let B of N)this.vertices.push(B);for(let N of E)for(let B of N)this.indices.push(q+B)}}else this.vertices=null}GetVertices(J,Q){if(!this.vertices)return null;return this.vertices.map(($)=>$.clone().multiplyScalar(Q).add(J))}}class n4{fontSize;color;glyphs;bounds;curX;prevChar;prevFont;constructor(J,Q){this.fontSize=J,this.color=Q,this.glyphs=[],this.bounds=null,this.curX=0,this.prevChar=null,this.prevFont=null}PushChar(J,Q){let $;if(this.prevChar!==null&&this.prevFont===Q.font)$=this.prevFont.GetKerning(this.prevChar,J);else $=0;let U=this.curX+$*this.fontSize,F;if(Q.vertices&&Q.vertices.length>0){F=Q.GetVertices({x:U,y:0},this.fontSize);let G=U+Q.bounds.xMin*this.fontSize,E=U+Q.bounds.xMax*this.fontSize,q=Q.bounds.yMin*this.fontSize,N=Q.bounds.yMax*this.fontSize;if(this.bounds===null)this.bounds={xMin:G,xMax:E,yMin:q,yMax:N};else{if(G<this.bounds.xMin)this.bounds.xMin=G;if(q<this.bounds.yMin)this.bounds.yMin=q;if(E>this.bounds.xMax)this.bounds.xMax=E;if(N>this.bounds.yMax)this.bounds.yMax=N}}else F=null;this.curX=U+Q.advance*this.fontSize,this.glyphs.push({shape:Q,vertices:F}),this.prevChar=J,this.prevFont=Q.font}GetCurrentPosition(){return this.curX}*Render(J,Q,$=0,U=1,F=X1.LEFT,G=c1.BASELINE,E,q=null){if(this.bounds===null)return;let N=Q??J,B=$?$*-Math.PI/180:0,V=U??1,w=F??X1.LEFT,_=G??c1.BASELINE,I=new l,T=new l(V,1),f=w===X1.LEFT&&_===c1.BASELINE||w===X1.FIT||w===X1.ALIGNED?new l(J.x,J.y):new l(N.x,N.y),h=()=>{let m=N.x-J.x;if(m<Number.MIN_VALUE*2)return V;return m/(this.bounds.xMax-this.bounds.xMin)},p=()=>{return-Math.atan2(N.y-J.y,N.x-J.x)};switch(w){case X1.LEFT:I.x=this.bounds.xMin;break;case X1.CENTER:I.x=(this.bounds.xMax-this.bounds.xMin)/2;break;case X1.RIGHT:I.x=this.bounds.xMax;break;case X1.MIDDLE:I.x=(this.bounds.xMax-this.bounds.xMin)/2,I.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case X1.ALIGNED:{let m=h();T.x=m,T.y=m,B=p();break}case X1.FIT:T.x=h(),B=p();break;default:console.warn("Unrecognized hAlign value: "+w)}switch(_){case c1.BASELINE:break;case c1.BOTTOM:I.y=this.bounds.yMin;break;case c1.MIDDLE:I.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case c1.TOP:I.y=this.bounds.yMax;break;default:console.warn("Unrecognized vAlign value: "+_)}let d=new X0().translate(-I.x,-I.y).scale(T.x,T.y).rotate(B).translate(f.x,f.y);for(let m of this.glyphs)if(m.vertices){for(let x of m.vertices)x.applyMatrix3(d);yield new K0({type:K0.Type.TRIANGLES,vertices:m.vertices,indices:m.shape.indices,layer:q,color:this.color??E})}}}class M9{paragraph;fontSize;color;prevChunk;lastChar=null;lastShape=null;leadingSpaces=0;spaceStartKerning=null;spaceEndKerning=null;block=null;position=0;constructor(J,Q,$,U){this.paragraph=J,this.fontSize=Q,this.color=$,this.prevChunk=U}PushSpace(){if(this.block)throw Error("Illegal operation");this.leadingSpaces++}PushChar(J,Q){if(this.spaceStartKerning===null)if(this.leadingSpaces===0)this.spaceStartKerning=0,this.spaceEndKerning=0;else{if(this.prevChunk&&this.prevChunk.lastShape&&this.prevChunk.fontSize===this.fontSize&&this.prevChunk.lastShape.font===this.paragraph.textBox.spaceShape?.font)this.spaceStartKerning=this.prevChunk.lastShape.font.GetKerning(this.prevChunk.lastChar," ");else this.spaceStartKerning=0;if(Q.font===this.paragraph.textBox.spaceShape?.font)this.spaceEndKerning=Q.font.GetKerning(" ",J);else this.spaceEndKerning=0}if(this.block===null)this.block=new n4(this.fontSize,this.color);this.block.PushChar(J,Q),this.lastChar=J,this.lastShape=Q}GetSpacingWidth(){let J=this.paragraph.textBox.spaceShape?.advance??0;return(this.leadingSpaces*J+(this.spaceStartKerning??0)+(this.spaceEndKerning??0))*this.fontSize}GetWidth(J){if(this.block===null)return 0;let Q=this.block.GetCurrentPosition();if(J)Q+=this.GetSpacingWidth();return Q}}class S3{paragraph;startChunkIdx;numChunks;width;constructor(J,Q,$,U){this.paragraph=J,this.startChunkIdx=Q,this.numChunks=$,this.width=U}ApplyAlignment(J,Q){switch(this.paragraph.alignment??Q){case _1.LEFT:break;case _1.CENTER:{let U=(J-this.width)/2;this.ForEachChunk((F)=>F.position+=U);break}case _1.RIGHT:{let U=J-this.width;this.ForEachChunk((F)=>F.position+=U);break}case _1.JUSTIFY:{let U=J-this.width;if(U<=0||this.numChunks===1)break;let F=U/(this.numChunks-1),G=0;this.ForEachChunk((E)=>{E.position+=G,G+=F});break}default:throw Error("Unhandled alignment: "+this.paragraph.alignment)}}ForEachChunk(J){for(let Q=0;Q<this.numChunks;Q++)J(this.paragraph.chunks[this.startChunkIdx+Q])}}var _1=Object.freeze({LEFT:0,CENTER:1,RIGHT:2,JUSTIFY:3});class i4{static Alignment=_1;textBox;chunks;curChunk;alignment;lines;color;constructor(J){this.textBox=J,this.chunks=[],this.curChunk=null,this.alignment=null,this.lines=null,this.color=null}FeedChar(J){let Q=this.textBox.charShapeProvider(J);if(Q===null)return;if(this.curChunk===null)this._AddChunk();this.curChunk.PushChar(J,Q)}FeedSpace(){if(this.curChunk===null||this.curChunk.lastChar!==null)this._AddChunk();this.curChunk.PushSpace()}SetAlignment(J){this.alignment=J}SetColor(J){this.color=J}BuildLines(J){if(this.curChunk===null)return;this.lines=[];let Q=0,$=0,U=0,F=()=>{this.lines.push(new S3(this,Q,$-Q,U)),Q=$,U=0};for(;$<this.chunks.length;$++){let G=this.chunks[$],E=G.GetWidth(Q===0||$!==Q);if(J!==null&&J!==0){if(U+E>J){if($===0&&G.leadingSpaces>0)this.lines.push(new S3(this,Q,Q,0)),G.leadingSpaces=0,E=G.GetWidth(!1);if(U!==0)F()}}G.position=U,U+=E}if(Q!==$&&U!==0)F()}GetMaxLineWidth(){if(this.lines===null)return 0;let J=0;for(let Q of this.lines)if(Q.width>J)J=Q.width;return J}ApplyAlignment(J,Q){if(this.lines)for(let $ of this.lines)$.ApplyAlignment(J,Q)}_AddChunk(){this.curChunk=new M9(this,this.textBox.fontSize,this.color,this.curChunk),this.chunks.push(this.curChunk)}}class B9{static Paragraph=i4;fontSize;charShapeProvider;curParagraph;paragraphs;spaceShape;constructor(J,Q){this.fontSize=J,this.charShapeProvider=Q,this.curParagraph=new i4(this),this.paragraphs=[this.curParagraph],this.spaceShape=Q(" ")}FeedText(J){function*Q(F){for(let G of F)if(G.type===x1.EntityType.SCOPE&&Array.isArray(G.content))yield*Q(G.content);else yield G}let $=null,U=null;for(let F of Q(J))switch(F.type){case x1.EntityType.TEXT:for(let G of F.content)if(G===" ")this.curParagraph.FeedSpace();else this.curParagraph.FeedChar(G);break;case x1.EntityType.PARAGRAPH:this.curParagraph=new i4(this),this.curParagraph.SetAlignment($),this.curParagraph.SetColor(U),this.paragraphs.push(this.curParagraph);break;case x1.EntityType.NON_BREAKING_SPACE:this.curParagraph.FeedChar(" ");break;case x1.EntityType.PARAGRAPH_ALIGNMENT:{let G=null;switch(F.alignment){case"l":G=_1.LEFT;break;case"c":G=_1.CENTER;break;case"r":G=_1.RIGHT;break;case"d":G=_1.JUSTIFY;break;case"j":G=null;break}this.curParagraph.SetAlignment(G),$=G;break}case x1.EntityType.COLOR:U=F.color??null,this.curParagraph.SetColor(U);break}}*Render(J,Q,$,U,F,G=1,E,q=null){for(let p of this.paragraphs)p.BuildLines(Q);let N=Q;if(N===null||N===0){N=0;for(let p of this.paragraphs){let d=p.GetMaxLineWidth();if(d>N)N=d}}let B=F||r0.TOP_LEFT,V=_1.LEFT;switch(B){case r0.TOP_CENTER:case r0.MIDDLE_CENTER:case r0.BOTTOM_CENTER:V=_1.CENTER;break;case r0.TOP_RIGHT:case r0.MIDDLE_RIGHT:case r0.BOTTOM_RIGHT:V=_1.RIGHT;break}for(let p of this.paragraphs)p.ApplyAlignment(N,V);let w=$;if(U!==null)w=Math.atan2(U.y,U.x)*180/Math.PI;let _=G*5*this.fontSize/3,I=0;for(let p of this.paragraphs)if(p.lines===null)I++;else I+=p.lines.length;I*=_;let T=new l;switch(B){case r0.TOP_LEFT:break;case r0.TOP_CENTER:T.x=N/2;break;case r0.TOP_RIGHT:T.x=N;break;case r0.MIDDLE_LEFT:T.y=-I/2;break;case r0.MIDDLE_CENTER:T.x=N/2,T.y=-I/2;break;case r0.MIDDLE_RIGHT:T.x=N,T.y=-I/2;break;case r0.BOTTOM_LEFT:T.y=-I;break;case r0.BOTTOM_CENTER:T.x=N/2,T.y=-I;break;case r0.BOTTOM_RIGHT:T.x=N,T.y=-I;break;default:break}let f=new X0().translate(-T.x,-T.y).rotate(-w*Math.PI/180).translate(J.x,J.y),h=-this.fontSize;for(let p of this.paragraphs){if(p.lines===null){h-=_;continue}for(let d of p.lines){for(let m=d.startChunkIdx;m<d.startChunkIdx+d.numChunks;m++){let x=p.chunks[m],t=x.position;if(m===0||m!==d.startChunkIdx)t+=x.GetSpacingWidth();let s=new l(t,h);if(s.applyMatrix3(f),x.block)yield*x.block.Render(s,null,w,null,X1.LEFT,c1.BASELINE,E,q)}h-=_}}}}class a2{static DefaultOptions={curveSubdivision:2,fallbackChar:"�?"};fontFetchers;fonts;preferredFontFetchers;preferredFonts;options;shapes;stubShapeLoaded;stubShape;constructor(J,Q=null){this.fontFetchers=J?[...J]:[],this.fonts=[],this.preferredFontFetchers=new Map,this.preferredFonts=new Map;for(let $ of this.fontFetchers)for(let U of $.fontNames??[]){let F=g5(U);if(F)this.preferredFontFetchers.set(F,$)}this.options={...a2.DefaultOptions,...Q||{}},this.shapes=new Map,this.stubShapeLoaded=!1,this.stubShape=null}async FetchFonts(J,Q=null){if(await this._FetchPreferredFont(Q),!this.stubShapeLoaded){this.stubShapeLoaded=!0;for(let U of Array.from(this.options.fallbackChar))if(await this.FetchFonts(U)){this.stubShape=this._CreateCharShape(U,null);break}}let $=!1;for(let U of J){if(U.codePointAt(0)<32)continue;let F=!1;for(let G of this._GetFonts(Q))if(G.HasChar(U)){F=!0;break}if(F)continue;if(!this.fontFetchers)return!1;while(this.fontFetchers.length>0){let G=this.fontFetchers.shift(),E=await this._FetchFont(G);if(this._RegisterFont(E,G),E.HasChar(U)){F=!0;break}}if(!F)$=!0}return!$}get canRender(){return this.fonts!==null&&this.fonts.length>0}GetLineWidth(J,Q,$=null){let U=new n4(Q);for(let F of J){let G=this._GetCharShape(F,$);if(!G)continue;U.PushChar(F,G)}return U.GetCurrentPosition()}*Render({text:J,startPos:Q,endPos:$=null,rotation:U=0,widthFactor:F=1,hAlign:G=0,vAlign:E=0,color:q,layer:N=null,fontSize:B,fontName:V=null}){let w=new n4(B);for(let _ of J){let I=this._GetCharShape(_,V);if(!I)continue;w.PushChar(_,I)}yield*w.Render(Q,$,U??0,F,G??0,E??0,q,N)}*RenderMText({formattedText:J,position:Q,fontSize:$,width:U=null,rotation:F=0,direction:G=null,attachment:E,lineSpacing:q=1,color:N,layer:B=null,fontName:V=null}){let _=new B9($||1,(I)=>this._GetCharShape(I,V));_.FeedText(J),yield*_.Render(Q,U,F??0,G,E,q??1,N,B)}_GetCharShape(J,Q=null){let $=`${g5(Q)??""}\x00${J}`,U=this.shapes.get($);if(U!==void 0)return U;return U=this._CreateCharShape(J,Q),this.shapes.set($,U),U}_CreateCharShape(J,Q=null){for(let $ of this._GetFonts(Q)){let U=$.GetCharPath(J);if(U)return new L9($,U,this.options)}return this.stubShape}async _FetchFont(J){return new P9(await J())}async _FetchPreferredFont(J){let Q=g5(J);if(!Q||this.preferredFonts.has(Q))return;let $=this.preferredFontFetchers.get(Q);if(!$)return;let U=this.fontFetchers.indexOf($);if(U>=0)this.fontFetchers.splice(U,1);this._RegisterFont(await this._FetchFont($),$)}_RegisterFont(J,Q){if(!this.fonts.includes(J))this.fonts.push(J);for(let $ of Q.fontNames??[]){let U=g5($);if(U)this.preferredFonts.set(U,J)}}_GetFonts(J){let Q=this.preferredFonts.get(g5(J)??"");if(!Q)return this.fonts;return[Q,...this.fonts.filter(($)=>$!==Q)]}}class m5{data;left=null;right=null;red=!0;constructor(J){this.data=J}get_child(J){return J?this.right:this.left}set_child(J,Q){if(J)this.right=Q;else this.left=Q}}class _9{_tree;_ancestors;_cursor;constructor(J){this._tree=J,this._ancestors=[],this._cursor=null}data(){return this._cursor!==null?this._cursor.data:null}next(){if(this._cursor===null){let J=this._tree._root;if(J!==null)this._minNode(J)}else if(this._cursor.right===null){let J;do if(J=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.right===J)}else this._ancestors.push(this._cursor),this._minNode(this._cursor.right);return this._cursor!==null?this._cursor.data:null}prev(){if(this._cursor===null){let J=this._tree._root;if(J!==null)this._maxNode(J)}else if(this._cursor.left===null){let J;do if(J=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.left===J)}else this._ancestors.push(this._cursor),this._maxNode(this._cursor.left);return this._cursor!==null?this._cursor.data:null}_minNode(J){while(J.left!==null)this._ancestors.push(J),J=J.left;this._cursor=J}_maxNode(J){while(J.right!==null)this._ancestors.push(J),J=J.right;this._cursor=J}}class z9{_root=null;size=0;clear(){this._root=null,this.size=0}find(J){let Q=this._root;while(Q!==null){let $=this._comparator(J,Q.data);if($===0)return Q.data;else Q=Q.get_child($>0)}return null}findIter(J){let Q=this._root,$=this.iterator();while(Q!==null){let U=this._comparator(J,Q.data);if(U===0)return $._cursor=Q,$;else $._ancestors.push(Q),Q=Q.get_child(U>0)}return null}lowerBound(J){let Q=this._root,$=this.iterator(),U=this._comparator;while(Q!==null){let F=U(J,Q.data);if(F===0)return $._cursor=Q,$;$._ancestors.push(Q),Q=Q.get_child(F>0)}for(let F=$._ancestors.length-1;F>=0;--F)if(Q=$._ancestors[F],U(J,Q.data)<0)return $._cursor=Q,$._ancestors.length=F,$;return $._ancestors.length=0,$}upperBound(J){let Q=this.lowerBound(J),$=this._comparator;while(Q.data()!==null&&$(Q.data(),J)===0)Q.next();return Q}min(){let J=this._root;if(J===null)return null;while(J.left!==null)J=J.left;return J.data}max(){let J=this._root;if(J===null)return null;while(J.right!==null)J=J.right;return J.data}iterator(){return new _9(this)}each(J){let Q=this.iterator(),$;while(($=Q.next())!==null)J($)}reach(J){let Q=this.iterator(),$;while(($=Q.prev())!==null)J($)}}function z1(J){return J!==null&&J.red}function p5(J,Q){let $=!Q,U=J.get_child($);return J.set_child($,U.get_child(Q)),U.set_child(Q,J),J.red=!0,U.red=!1,U}function V9(J,Q){let $=!Q;return J.set_child($,p5(J.get_child($),$)),p5(J,Q)}class k3 extends z9{_comparator;constructor(J){super();this._root=null,this._comparator=J,this.size=0}insert(J){let Q=!1;if(this._root===null)this._root=new m5(J),Q=!0,this.size++;else{let $=new m5(void 0),U=0,F=0,G=null,E=$,q=null,N=this._root;E.right=this._root;while(!0){if(N===null)N=new m5(J),q.set_child(U,N),Q=!0,this.size++;else if(z1(N.left)&&z1(N.right))N.red=!0,N.left.red=!1,N.right.red=!1;if(z1(N)&&z1(q)){let V=E.right===G;if(N===q.get_child(F))E.set_child(V,p5(G,!F));else E.set_child(V,V9(G,!F))}let B=this._comparator(N.data,J);if(B===0)break;if(F=U,U=B<0,G!==null)E=G;G=q,q=N,N=N.get_child(U)}this._root=$.right}return this._root.red=!1,Q}remove(J){if(this._root===null)return!1;let Q=new m5(void 0),$=Q;$.right=this._root;let U=null,F=null,G=null,E=1;while($.get_child(E)!==null){let q=E;F=U,U=$,$=$.get_child(E);let N=this._comparator(J,$.data);if(E=N>0,N===0)G=$;if(!z1($)&&!z1($.get_child(E))){if(z1($.get_child(!E))){let B=p5($,E);U.set_child(q,B),U=B}else if(!z1($.get_child(!E))){let B=U.get_child(!q);if(B!==null)if(!z1(B.get_child(!q))&&!z1(B.get_child(q)))U.red=!1,B.red=!0,$.red=!0;else{let V=F.right===U;if(z1(B.get_child(q)))F.set_child(V,V9(U,q));else if(z1(B.get_child(!q)))F.set_child(V,p5(U,q));let w=F.get_child(V);w.red=!0,$.red=!0,w.left.red=!1,w.right.red=!1}}}}if(G!==null)G.data=$.data,U.set_child(U.right===$,$.get_child($.left===null)),this.size--;if(this._root=Q.right,this._root!==null)this._root.red=!1;return G!==null}}class C9{lines;triangles;texts;constructor(){this.lines=[],this.triangles=[],this.texts=[]}AddLine(J,Q,$=null){this.lines.push({start:J,end:Q,color:$})}AddTriangles(J,Q,$=null){this.triangles.push({vertices:J,indices:Q,color:$})}AddText(J,Q,$,U,F){this.texts.push({text:J,size:Q,angle:$,color:U,position:F})}}var w9={vertices:[new l(0,0),new l(1,-0.25),new l(1,0.25)],indices:[0,1,2]};class j3{params;styleResolver;textWidthCalculator;isValid;vBase;vDim;vDimNorm;d1;d2;constructor(J,Q,$){this.params=J,this.styleResolver=Q,this.textWidthCalculator=$,this.isValid=!0,this._CalculateGeometry()}IsValid(){return this.isValid}GetTexts(){return[this._GetText()]}GenerateLayout(){let J=new C9,Q=this.d1.distanceTo(this.d2),$=this.styleResolver("DIMCLRD"),U=this.styleResolver("DIMSCALE")??1;if(U===0)U=1;let F=this._GetText(),G=(this.styleResolver("DIMTXT")??1)*U,E=this.styleResolver("DIMCLRT"),q=(this.styleResolver("DIMASZ")??1)*U,N=(this.styleResolver("DIMTSZ")??0)*U,B=this.params.textAnchor,V=!1,w=this.d1.clone(),_=(this.styleResolver("DIMDLE")??0)*U;if(_!==0)w.add(this.vDim.clone().multiplyScalar(-_));let I=this.d2.clone();if(_!==0)I.add(this.vDim.clone().multiplyScalar(_));if(J.AddLine(w,I,$),Q<q*2)V=!0;if(!B)B=this.vDim.clone().multiplyScalar(this.d1.distanceTo(this.d2)/2).add(this.d1).add(this.vDimNorm.clone().multiplyScalar(G*0.75));let T=this.vDimNorm.angle()*180/Math.PI-90+(this.params.textRotation??0);J.AddText(F,G,T,E,B);let f=this.styleResolver("DIMCLRE"),h=(this.styleResolver("DIMEXO")??0)*U,p=(this.styleResolver("DIMEXE")??0)*U,d=(m,x)=>{let t=x.clone().sub(m);if(t.length()===0)return;t.normalize();let W0=m.clone();if(h!==0)W0.add(t.clone().multiplyScalar(h));let F0=x.clone();if(p!==0)F0.add(t.clone().multiplyScalar(p));J.AddLine(W0,F0,f)};if(!(this.styleResolver("DIMSE1")??0))d(this.params.p1,this.d1);if(!(this.styleResolver("DIMSE2")??0))d(this.params.p2,this.d2);for(let m=0;m<2;m++){let x=m===0?this.d1:this.d2,t=m===1;if(V)t=!t;let s=new X0().identity();if(N>0)s.scale(N,N);else if(s.scale(q,q),t)s.scale(-1,1);let W0=-this.vDim.angle();if(s.rotate(W0),s.translate(x.x,x.y),N>0)this._CreateTick(J,s,$);else this._CreateArrowShape(J,s,$)}return J}_CreateArrowShape(J,Q,$){let U=[];for(let F of w9.vertices)U.push(F.clone().applyMatrix3(Q));J.AddTriangles(U,w9.indices,$)}_CreateTick(J,Q,$){J.AddLine(new l(0.5,0.5).applyMatrix3(Q),new l(-0.5,-0.5).applyMatrix3(Q),$)}_CalculateGeometry(){if(this.vBase=this.params.p2.clone().sub(this.params.p1).normalize(),this.params.isAligned)this.vDim=this.vBase;else{let J=(this.params.angle??0)*Math.PI/180;this.vDim=new l(Math.cos(J),Math.sin(J))}if(this.d1=this.vDim.clone().multiplyScalar(this.params.p1.clone().sub(this.params.anchor).dot(this.vDim)).add(this.params.anchor),this.d2=this.vDim.clone().multiplyScalar(this.params.p2.clone().sub(this.params.anchor).dot(this.vDim)).add(this.params.anchor),this.d1.distanceTo(this.d2)===0)this.isValid=!1;if(this.vDim.copy(this.d2).sub(this.d1).normalize(),this.vDim.y<-this.vDim.x)this.vDimNorm=new l(this.vDim.y,-this.vDim.x);else this.vDimNorm=new l(-this.vDim.y,this.vDim.x)}_GetText(){if(this.params.text===" ")return"";if((this.params.text??"")!==""&&this.params.text.indexOf("<>")===-1)return i1(this.params.text);let J=this.d2.distanceTo(this.d1);J*=this.styleResolver("DIMLFAC")??1;let Q=this.styleResolver("DIMRND")??0;if(Q>0){let N=Math.round(J/Q);J=Q*N}let $=this.styleResolver("DIMZIN")??0,U=($&4)!==0,F=($&8)!==0,G=J.toFixed(this.styleResolver("DIMDEC")??2);if(F)G=G.replace(/\.0+$/,"");if(U)G=G.replace(/^0+/,"");if(G.startsWith("."))G="0"+G;else if(G==="")G="0";if(G.endsWith("."))G=G.substring(0,G.length-1);let E=this.styleResolver("DIMDSEP")??".";if(typeof E==="number"&&!isNaN(E))E=String.fromCharCode(E);if(E!==".")G=G.replace(".",String(E));let q=this.styleResolver("DIMPOST")??"";if(q!=="")if(q.indexOf("<>")!==-1)G=q.replaceAll("<>",G);else G+=q;if((this.params.text??"")!=="")G=this.params.text.replaceAll("<>",G);return i1(G)}}function I9(J,Q,$,U,F=!1){let G=Q.clone().sub(J),E=U.clone().sub($);if(G.lengthSq()===0||E.lengthSq()===0)return null;let q=G.cross(E);if(Math.abs(q)<=Number.EPSILON)return null;let N=$.clone().sub(J),B=N.cross(E)/q;if(!F&&(B<0||B>1))return null;let V=N.cross(G)/q;if(!F&&(V<0||V>1))return null;return[B,V,q]}var o4=Object.freeze({ODD_PARITY:0,OUTERMOST:1,THROUGH_ENTIRE_AREA:2}),s4=0.0001;function T9(J,Q){if(!J.intersection||!Q.intersection)return!1;return J.intersection[2]>0&&Q.intersection[2]>0||J.intersection[2]<0&&Q.intersection[2]<0}class S9{style;line;lineDir;loops;nodes=[];constructor(J,Q,$){this.style=Q,this.line=$,this.lineDir=$[1].clone().sub($[0]).normalize(),this.loops=[];for(let U=0;U<J.length;U++){let F=J[U],G=[];for(let E=0;E<F.length;E++)G.push({idx:E,start:F[E],end:F[E===F.length-1?0:E+1],loopIdx:U});this.loops.push(G)}}Calculate(){if(this._ProcessEdges(),this._CreateNodes(),this.nodes.sort((J,Q)=>J.intersection[0]-Q.intersection[0]),this.style===o4.THROUGH_ENTIRE_AREA)return this._GenerateThroughAllSegments();return this._GenerateOddParitySegments()}_ProcessEdges(){for(let J of this.loops)for(let Q of J){let $=Q.end.clone().sub(Q.start),U=$.length();if(Q.isZero=U<=Number.EPSILON,Q.isZero)continue;$.divideScalar(U);let F=$.cross(this.lineDir);if(Q.isParallel=Math.abs(F)<=0.000001,Q.isParallel)continue;if(Q.intersection=I9(this.line[0],this.line[1],Q.start,Q.end,!0),!Q.intersection)Q.isParallel=!0}}_CreateNodes(){this.nodes=[];for(let J of this.loops)for(let Q of J){if(Q.isZero||Q.isParallel||Q.isProcessed||!Q.intersection)continue;if(Q.intersection[1]<-s4||Q.intersection[1]>1+s4)continue;let $=Q.intersection[1]<=s4;if($||Q.intersection[1]>=1-s4){let[U,F]=this._GetConnectedEdge(Q,$);if(!U)continue;if(Q.isProcessed=!0,U.isProcessed=!0,F){if(T9(Q,U))Q.toggle=!0,this.nodes.push(Q)}else{if(Q.intersection[0]>U.intersection[0]){let G=U;U=Q,Q=G}if(Q.suppress=!0,U.unsuppress=!0,this.nodes.push(Q),T9(Q,U))U.toggle=!0;this.nodes.push(U)}}else Q.isProcessed=!0,Q.toggle=!0,this.nodes.push(Q)}}_GetConnectedEdge(J,Q){let $=this.loops[J.loopIdx],U=J.idx,F=!0;do{if(Q)if(U===0)U=$.length-1;else U--;else if(U===$.length-1)U=0;else U++;let G=$[U];if(G.isZero||G.isParallel)F=!1;else return[G,F]}while(U!==J.idx);return[null,!1]}_GenerateOddParitySegments(){let J=[],Q=!1,$=0,U=null;for(let F of this.nodes){if(F.suppress)$++;if(F.unsuppress)$--;if(F.toggle)Q=!Q;if($===0&&Q&&(F.unsuppress||F.toggle))U=F;else if(($||!Q)&&U){if(F.intersection[0]-U.intersection[0]>Number.EPSILON)J.push([U.intersection[0],F.intersection[0]]);U=null}}return J}_GenerateThroughAllSegments(){let J=[],Q=0,$=null,U=Array(this.loops.length).fill(0);function F(){for(let G of U)if(G!==0)return!1;return!0}for(let G of this.nodes){if(G.suppress)Q++;if(G.unsuppress)Q--;let E=F();if(G.toggle)if(G.intersection[2]>0)U[G.loopIdx]++;else U[G.loopIdx]--;if(Q===0&&!F()&&(G.unsuppress||E))$=G;else if((Q||F())&&$){if(G.intersection[0]-$.intersection[0]>Number.EPSILON)J.push([$.intersection[0],G.intersection[0]]);$=null}}return J}}class v3{boundaryLoops;style;constructor(J,Q){this.boundaryLoops=J,this.style=Q}ClipLine(J){return new S9(this.boundaryLoops,this.style,J).Calculate()}GetPatternTransform({seedPoint:J,angle:Q,scale:$}){let U=new X0().makeTranslation(-J.x,-J.y);if(Q)U.rotate(Q);if(($??1)!==1)U.scale(1/$,1/$);return U}GetLineTransform({patTransform:J,basePoint:Q,angle:$}){let U=J.clone();if(Q)U.translate(-Q.x,-Q.y);if($)U.rotate($);return U}GetBoundingBox(J){let Q=new l4;for(let $ of this.boundaryLoops)for(let U of $)Q.expandByPoint(U.clone().applyMatrix3(J));return Q}}class L{lines;name;offsetInLineSpace;constructor(J,Q=null,$=!0){this.lines=J,this.name=Q,this.offsetInLineSpace=$}get isQcadDefault(){if(this.lines.length!==1)return!1;let J=this.lines[0];if(J.dashes)return!1;if(Math.abs(J.angle-Math.PI/4)>0.0000000000001)return!1;return!0}static ParsePatFile(J){let Q=J.split(/\r?\n/);if(Q.length<2)throw Error("Invalid .pat file content");let $=null,U=[];for(let F of Q){if(F=F.trim(),F==="")continue;if(F.startsWith(";"))continue;if($===null){let B=F.match(/\*([^,]+)(?:,.*)?/);if(!B)throw Error("Bad header for .pat file content");$=B[1];continue}let G=F.indexOf(";");if(G!==-1)F=F.substring(0,G).trim();let E=F.split(/\s*,\s*/);if(E[E.length-1]==="")E.length=E.length-1;let q=E.map((B)=>{let V=parseFloat(B);if(isNaN(V))throw Error("Failed to parse number in .pat file: "+B);return V}),N={angle:q[0]*Math.PI/180,base:new l(q[1],q[2]),offset:new l(q[3],q[4])};if(q.length>5)N.dashes=q.slice(5);U.push(N)}return new L(U,$)}}var k9=new Map,j9=new Map;function M(J,Q=!0){if(!J.name)throw Error("Anonymous pattern cannot be registered");let $=J.name.toUpperCase(),U=Q?k9:j9;if(U.has($)){console.warn(`Pattern with name ${$} is already registered`);return}U.set($,J)}function h3(J,Q=!0){return(Q?k9:j9).get(J.toUpperCase())??null}M(L.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`));M(L.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`));M(L.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`));M(L.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`));M(L.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`));M(L.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`));M(L.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,6.985, 5.08,-1.905
90, 0,0, 0,6.985, 5.08,-1.905
`));M(L.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,3.175
`));M(L.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,9.525
45, 4.49013,0, 0,9.525
`));M(L.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 3.175,-1.5875
`));M(L.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,19.05
45, 4.49013,0, 0,19.05
45, 8.98026,0, 0,19.05
45, 13.4704,0, 0,19.05
`));M(L.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 7.9375,-1.5875,0,-1.5875
`));M(L.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, 5.55625,3.175, 7.9375,-1.5875,0,-1.5875
`));M(L.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,3.175
135, 0,0, 0,3.175
`));M(L.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,3.175
135, 0,0, 6.35,3.175, 7.9375,-4.7625
`));M(L.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,203.2
90, 0,0, 203.2,203.2, 203.2,-203.2
`));M(L.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 203.2,203.2, 396.875,-9.525
0, -203.2,9.525, 203.2,203.2, 396.875,-9.525
90, 0,0, 203.2,203.2, -212.725,193.675
90, -9.525,0, 203.2,203.2, -212.725,193.675
`));M(L.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,203.2
90, 0,0, 203.2,101.6, 203.2,-203.2
`));M(L.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,135.484, 193.675,-9.525
0, 0,57.15, 0,135.484, 193.675,-9.525
0, 50.8,67.7418, 0,135.484, 92.075,-9.525
0, 50.8,124.892, 0,135.484, 92.075,-9.525
90, 0,0, 0,203.2, 57.15,-78.3336
90, -9.525,0, 0,203.2, 57.15,-78.3336
90, 50.8,67.7418, 0,101.6, 57.15,-78.3336
90, 41.275,67.7418, 0,101.6, 57.15,-78.3336
`));M(L.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,67.7418
90, 0,0, 67.7418,101.6, 67.7418,-67.7418
`));M(L.ParsePatFile(`
*AR-CONC-01,AR-CONC-01
;Optimize to replace existing AR-CONC Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
243.434949,7.62,20.32,227.18450626,113.5922544,5.67961272,-562.2816542
90,7.62,15.24,0,254,5.08,-248.92
0,5.08,15.24,0,254,2.54,-251.46
315,2.54,2.54,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,7.62,5.08,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,5.08,0,227.18450626,113.5922544,5.67961272,-562.2816542
45,50.8,10.16,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,58.42,7.62,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,55.88,15.24,562.25296744,80.32185358,8.03218612,-795.18633952
315,58.42,22.86,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,63.5,25.4,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,60.96,20.32,227.18450626,113.5922544,5.67961272,-562.2816542
270,104.14,15.24,0,254,5.08,-248.92
45,99.06,10.16,179.60512212,179.60512212,7.18420458,-352.02603966
180,104.14,10.16,0,254,5.08,-248.92
333.434949,99.06,5.08,227.18450626,113.5922544,5.67961272,-562.2816542
225,101.6,7.62,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,104.14,2.54,340.77676066,113.5922544,5.67961272,-562.2816542
198.434949,160.02,20.32,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,157.48,15.24,227.18450626,113.5922544,5.67961272,-562.2816542
333.434949,152.4,17.78,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,144.78,0,340.77676066,113.5922544,5.67961272,-562.2816542
251.565051,147.32,7.62,240.9655582,80.32185358,8.03218612,-795.18633952
116.565051,149.86,2.54,340.77676066,113.5922544,5.67961272,-562.2816542
45,170.18,2.54,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,177.8,0,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,175.26,7.62,562.25296744,80.32185358,8.03218612,-795.18633952
315,76.2,71.12,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,81.28,73.66,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,78.74,68.58,227.18450626,113.5922544,5.67961272,-562.2816542
45,27.94,20.32,179.60512212,179.60512212,7.18420458,-352.02603966
180,33.02,20.32,0,254,5.08,-248.92
270,33.02,25.4,0,254,5.08,-248.92
225,45.72,60.96,179.60512212,179.60512212,3.59210356,-355.61814322
270,45.72,66.04,0,254,5.08,-248.92
71.565051,43.18,58.42,240.9655582,80.32185358,8.03218612,-795.18633952
198.434949,25.4,53.34,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,22.86,48.26,227.18450626,113.5922544,5.67961272,-562.2816542
333.434949,17.78,50.8,227.18450626,113.5922544,5.67961272,-562.2816542
0,88.9,55.88,0,254,5.08,-248.92
225,93.98,60.96,179.60512212,179.60512212,7.18420458,-352.02603966
90,93.98,55.88,0,254,5.08,-248.92
315,114.3,43.18,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,119.38,45.72,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,116.84,40.64,227.18450626,113.5922544,5.67961272,-562.2816542
315,139.7,53.34,179.60512212,179.60512212,3.59210356,-355.61814322
270,139.7,58.42,0,254,5.08,-248.92
108.434949,142.24,50.8,562.25296744,80.32185358,8.03218612,-795.18633952
206.565051,175.26,68.58,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,172.72,63.5,227.18450626,113.5922544,5.67961272,-562.2816542
315,170.18,66.04,179.60512212,179.60512212,3.59210356,-355.61814322
333.434949,185.42,48.26,227.18450626,113.5922544,5.67961272,-562.2816542
225,187.96,50.8,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,190.5,45.72,340.77676066,113.5922544,5.67961272,-562.2816542
26.565051,208.28,38.1,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,213.36,35.56,227.18450626,113.5922544,5.67961272,-562.2816542
270,213.36,40.64,0,254,5.08,-248.92
180,236.22,43.18,0,254,2.54,-251.46
270,236.22,45.72,0,254,2.54,-251.46
45,233.68,43.18,179.60512212,179.60512212,3.59210356,-355.61814322
153.434949,236.22,60.96,227.18450626,113.5922544,5.67961272,-562.2816542
270,236.22,68.58,0,254,7.62,-246.38
45,231.14,63.5,179.60512212,179.60512212,7.18420458,-352.02603966
206.565051,231.14,88.9,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,228.6,83.82,227.18450626,113.5922544,5.67961272,-562.2816542
315,226.06,86.36,179.60512212,179.60512212,3.59210356,-355.61814322
180,165.1,73.66,0,254,5.08,-248.92
270,165.1,81.28,0,254,7.62,-246.38
56.309932,160.02,73.66,563.57539812,70.4469254,9.15809954,-906.65192304
198.434949,137.16,96.52,562.25296744,80.32185358,8.03218612,-795.18633952
71.565051,134.62,88.9,240.9655582,80.32185358,8.03218612,-795.18633952
315,129.54,93.98,179.60512212,179.60512212,7.18420458,-352.02603966
180,96.52,83.82,0,254,7.62,-246.38
270,96.52,91.44,0,254,7.62,-246.38
45,88.9,83.82,179.60512212,179.60512212,10.77630814,-348.43393864
225,83.82,109.22,179.60512212,179.60512212,7.18420458,-352.02603966
90,83.82,104.14,0,254,5.08,-248.92
0,78.74,104.14,0,254,5.08,-248.92
206.565051,40.64,99.06,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,38.1,93.98,227.18450626,113.5922544,5.67961272,-562.2816542
315,35.56,96.52,179.60512212,179.60512212,3.59210356,-355.61814322
108.434949,25.4,93.98,562.25296744,80.32185358,8.03218612,-795.18633952
341.565051,17.78,96.52,240.9655582,80.32185358,8.03218612,-795.18633952
225,22.86,101.6,179.60512212,179.60512212,7.18420458,-352.02603966
270,38.1,114.3,0,254,5.08,-248.92
45,33.02,109.22,179.60512212,179.60512212,7.18420458,-352.02603966
180,38.1,109.22,0,254,5.08,-248.92
315,91.44,119.38,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,96.52,121.92,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,93.98,116.84,227.18450626,113.5922544,5.67961272,-562.2816542
0,129.54,101.6,0,254,2.54,-251.46
225,132.08,104.14,179.60512212,179.60512212,3.59210356,-355.61814322
90,132.08,101.6,0,254,2.54,-251.46
0,175.26,96.52,0,254,5.08,-248.92
243.434949,177.8,101.6,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,180.34,96.52,340.77676066,113.5922544,5.67961272,-562.2816542
26.565051,185.42,114.3,340.77676066,113.5922544,5.67961272,-562.2816542
116.565051,187.96,109.22,340.77676066,113.5922544,5.67961272,-562.2816542
251.565051,190.5,116.84,240.9655582,80.32185358,8.03218612,-795.18633952
63.434949,223.52,91.44,227.18450626,113.5922544,5.67961272,-562.2816542
180,228.6,91.44,0,254,5.08,-248.92
296.565051,226.06,96.52,340.77676066,113.5922544,5.67961272,-562.2816542
180,228.6,137.16,0,254,7.62,-246.38
270,228.6,144.78,0,254,7.62,-246.38
45,220.98,137.16,179.60512212,179.60512212,10.77630814,-348.43393864
180,218.44,142.24,0,254,5.08,-248.92
270,218.44,147.32,0,254,5.08,-248.92
45,213.36,142.24,179.60512212,179.60512212,7.18420458,-352.02603966
243.434949,208.28,165.1,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,203.2,162.56,340.77676066,113.5922544,5.67961272,-562.2816542
135,205.74,160.02,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,170.18,152.4,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,172.72,147.32,340.77676066,113.5922544,5.67961272,-562.2816542
0,167.64,147.32,0,254,5.08,-248.92
225,157.48,154.94,179.60512212,179.60512212,7.18420458,-352.02603966
108.434949,160.02,147.32,562.25296744,80.32185358,8.03218612,-795.18633952
341.565051,152.4,149.86,240.9655582,80.32185358,8.03218612,-795.18633952
135,149.86,137.16,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,152.4,142.24,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,147.32,139.7,340.77676066,113.5922544,5.67961272,-562.2816542
180,121.92,152.4,0,254,2.54,-251.46
270,121.92,154.94,0,254,2.54,-251.46
45,119.38,152.4,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,111.76,170.18,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,109.22,165.1,227.18450626,113.5922544,5.67961272,-562.2816542
315,106.68,167.64,179.60512212,179.60512212,3.59210356,-355.61814322
225,86.36,165.1,179.60512212,179.60512212,7.18420458,-352.02603966
90,86.36,157.48,0,254,7.62,-246.38
333.434949,81.28,160.02,227.18450626,113.5922544,5.67961272,-562.2816542
180,76.2,154.94,0,254,5.08,-248.92
270,76.2,160.02,0,254,5.08,-248.92
45,71.12,154.94,179.60512212,179.60512212,7.18420458,-352.02603966
135,53.34,142.24,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,55.88,147.32,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,50.8,144.78,340.77676066,113.5922544,5.67961272,-562.2816542
180,27.94,160.02,0,254,5.08,-248.92
270,27.94,165.1,0,254,5.08,-248.92
45,22.86,160.02,179.60512212,179.60512212,7.18420458,-352.02603966
270,15.24,177.8,0,254,7.62,-246.38
45,10.16,172.72,179.60512212,179.60512212,7.18420458,-352.02603966
153.434949,15.24,170.18,227.18450626,113.5922544,5.67961272,-562.2816542
243.434949,208.28,198.12,227.18450626,113.5922544,5.67961272,-562.2816542
90,208.28,193.04,0,254,5.08,-248.92
0,205.74,193.04,0,254,2.54,-251.46
135,220.98,208.28,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,223.52,213.36,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,218.44,210.82,340.77676066,113.5922544,5.67961272,-562.2816542
180,218.44,213.36,0,254,5.08,-248.92
251.565051,220.98,220.98,240.9655582,80.32185358,8.03218612,-795.18633952
45,213.36,213.36,179.60512212,179.60512212,10.77630814,-348.43393864
153.434949,182.88,233.68,227.18450626,113.5922544,5.67961272,-562.2816542
135,165.1,185.42,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,167.64,190.5,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,162.56,187.96,340.77676066,113.5922544,5.67961272,-562.2816542
135,160.02,195.58,179.60512212,179.60512212,3.59210356,-355.61814322
251.565051,162.56,203.2,240.9655582,80.32185358,8.03218612,-795.18633952
45,157.48,198.12,179.60512212,179.60512212,7.18420458,-352.02603966
26.565051,66.04,193.04,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,71.12,190.5,227.18450626,113.5922544,5.67961272,-562.2816542
270,71.12,195.58,0,254,5.08,-248.92
90,114.3,200.66,0,254,5.08,-248.92
0,109.22,200.66,0,254,5.08,-248.92
225,114.3,205.74,179.60512212,179.60512212,7.18420458,-352.02603966
63.434949,124.46,210.82,227.18450626,113.5922544,5.67961272,-562.2816542
315,121.92,213.36,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,127,215.9,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,147.32,223.52,227.18450626,113.5922544,5.67961272,-562.2816542
270,147.32,231.14,0,254,7.62,-246.38
45,142.24,226.06,179.60512212,179.60512212,7.18420458,-352.02603966
0,71.12,236.22,0,254,7.62,-246.38
135,66.04,203.2,179.60512212,179.60512212,3.59210356,-355.61814322
270,66.04,208.28,0,254,5.08,-248.92
45,63.5,205.74,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,20.32,208.28,340.77676066,113.5922544,5.67961272,-562.2816542
333.434949,15.24,210.82,227.18450626,113.5922544,5.67961272,-562.2816542
225,17.78,213.36,179.60512212,179.60512212,3.59210356,-355.61814322
135,30.48,218.44,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,33.02,223.52,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,27.94,220.98,340.77676066,113.5922544,5.67961272,-562.2816542
0,222.21825,218.170506,0,254,0,-254
0,206.330804,232.72877,0,254,0,-254
0,208.872836,188.32957,0,254,0,-254
0,183.55056,211.532978,0,254,0,-254
0,167.663114,226.091242,0,254,0,-254
0,222.022924,134.20979,0,254,0,-254
0,206.135224,148.768054,0,254,0,-254
0,170.205146,181.692042,0,254,0,-254
0,144.88287,204.895704,0,254,0,-254
0,128.99517,219.453968,0,254,0,-254
0,208.677256,104.368854,0,254,0,-254
0,183.35498,127.572516,0,254,0,-254
0,167.467534,142.13078,0,254,0,-254
0,131.537202,175.054768,0,254,0,-254
0,106.214926,198.258176,0,254,0,-254
0,90.32748,212.81644,0,254,0,-254
0,221.827344,50.249328,0,254,0,-254
0,205.939898,64.807592,0,254,0,-254
0,170.009566,97.73158,0,254,0,-254
0,144.68729,120.934988,0,254,0,-254
0,128.799844,135.493252,0,254,0,-254
0,92.869512,168.41724,0,254,0,-254
0,67.547236,191.620902,0,254,0,-254
0,51.65979,206.179166,0,254,0,-254
0,208.48193,20.408392,0,254,0,-254
0,183.159654,43.6118,0,254,0,-254
0,167.271954,58.170064,0,254,0,-254
0,131.341876,91.094052,0,254,0,-254
0,106.0196,114.297714,0,254,0,-254
0,90.1319,128.855978,0,254,0,-254
0,54.201822,161.779966,0,254,0,-254
0,28.879546,184.983628,0,254,0,-254
0,12.991846,199.541638,0,254,0,-254
0,169.813986,13.770864,0,254,0,-254
0,144.49171,36.974526,0,254,0,-254
0,128.604264,51.53279,0,254,0,-254
0,89.821004,81.952846,0,254,0,-254
0,67.351656,107.660186,0,254,0,-254
0,51.46421,122.21845,0,254,0,-254
0,15.533878,155.142438,0,254,0,-254
0,131.146296,7.13359,0,254,0,-254
0,105.82402,30.336998,0,254,0,-254
0,89.936574,44.895262,0,254,0,-254
0,54.006242,77.81925,0,254,0,-254
0,28.683966,101.022912,0,254,0,-254
0,12.79652,115.581176,0,254,0,-254
0,92.478606,0.496062,0,254,0,-254
0,67.15633,23.699724,0,254,0,-254
0,51.26863,38.257988,0,254,0,-254
0,15.338552,71.181976,0,254,0,-254
0,28.488386,17.062196,0,254,0,-254
0,12.60094,31.62046,0,254,0,-254
0,232.573576,212.125814,0,254,0,-254
0,211.15909,204.714856,0,254,0,-254
0,197.17893,213.621112,0,254,0,-254
0,219.38234,178.422554,0,254,0,-254
0,175.76419,206.210408,0,254,0,-254
0,161.78403,215.116664,0,254,0,-254
0,183.98744,179.918106,0,254,0,-254
0,140.369544,207.705706,0,254,0,-254
0,126.389384,216.612216,0,254,0,-254
0,220.450664,135.634984,0,254,0,-254
0,206.470504,144.541494,0,254,0,-254
0,148.592794,181.413658,0,254,0,-254
0,104.974898,209.201258,0,254,0,-254
0,90.994738,218.107514,0,254,0,-254
0,228.673914,109.342936,0,254,0,-254
0,185.055764,137.130536,0,254,0,-254
0,171.075858,146.036792,0,254,0,-254
0,113.198148,182.908956,0,254,0,-254
0,69.579998,210.69681,0,254,0,-254
0,55.599838,219.603066,0,254,0,-254
0,193.279268,110.838234,0,254,0,-254
0,149.661118,138.626088,0,254,0,-254
0,135.680958,147.532344,0,254,0,-254
0,77.803248,184.404508,0,254,0,-254
0,34.185352,212.192362,0,254,0,-254
0,20.205192,221.098618,0,254,0,-254
0,229.742238,66.555366,0,254,0,-254
0,215.762078,75.461622,0,254,0,-254
0,157.884368,112.333786,0,254,0,-254
0,114.266472,140.12164,0,254,0,-254
0,100.286312,149.027896,0,254,0,-254
0,42.408602,185.90006,0,254,0,-254
0,237.965488,40.263064,0,254,0,-254
0,194.347592,68.050918,0,254,0,-254
0,180.367432,76.957174,0,254,0,-254
0,122.489722,113.829338,0,254,0,-254
0,78.871572,141.616938,0,254,0,-254
0,64.891666,150.523448,0,254,0,-254
0,7.013702,187.395612,0,254,0,-254
0,202.570842,41.758616,0,254,0,-254
0,158.952692,69.546216,0,254,0,-254
0,144.972532,78.452726,0,254,0,-254
0,87.094822,115.32489,0,254,0,-254
0,43.476926,143.11249,0,254,0,-254
0,29.496766,152.018746,0,254,0,-254
0,225.053652,6.38175,0,254,0,-254
0,167.175942,43.254168,0,254,0,-254
0,123.558046,71.041768,0,254,0,-254
0,109.577886,79.948024,0,254,0,-254
0,51.700176,116.820188,0,254,0,-254
0,8.08228,144.608042,0,254,0,-254
0,189.659006,7.877302,0,254,0,-254
0,131.781296,44.749466,0,254,0,-254
0,88.1634,72.53732,0,254,0,-254
0,74.18324,81.443576,0,254,0,-254
0,16.30553,118.31574,0,254,0,-254
0,168.24452,0.466598,0,254,0,-254
0,154.26436,9.372854,0,254,0,-254
0,96.38665,46.245018,0,254,0,-254
0,52.7685,74.032872,0,254,0,-254
0,38.78834,82.939128,0,254,0,-254
0,132.84962,1.961896,0,254,0,-254
0,118.86946,10.868406,0,254,0,-254
0,60.99175,47.74057,0,254,0,-254
0,17.373854,75.52817,0,254,0,-254
0,3.393694,84.43468,0,254,0,-254
0,97.454974,3.457448,0,254,0,-254
0,83.474814,12.363704,0,254,0,-254
0,25.597104,49.235868,0,254,0,-254
0,62.060074,4.953,0,254,0,-254
0,48.080168,13.859256,0,254,0,-254
0,26.665428,6.448552,0,254,0,-254
0,12.685268,15.354808,0,254,0,-254
0,163.20897,236.374178,0,254,0,-254
0,121.33453,230.861362,0,254,0,-254
0,96.22282,227.555298,0,254,0,-254
0,79.624174,225.370136,0,254,0,-254
0,37.749734,219.85732,0,254,0,-254
0,12.638278,216.551256,0,254,0,-254
0,229.351078,221.227142,0,254,0,-254
0,187.476638,215.714326,0,254,0,-254
0,162.364928,212.408262,0,254,0,-254
0,145.766282,210.2231,0,254,0,-254
0,103.891842,204.710284,0,254,0,-254
0,78.780132,201.40422,0,254,0,-254
0,62.18174,199.219058,0,254,0,-254
0,20.307046,193.705988,0,254,0,-254
0,228.507036,197.261226,0,254,0,-254
0,211.90839,195.076064,0,254,0,-254
0,170.03395,189.563248,0,254,0,-254
0,144.92224,186.257184,0,254,0,-254
0,128.323594,184.071768,0,254,0,-254
0,86.449154,178.558952,0,254,0,-254
0,61.337698,175.252888,0,254,0,-254
0,44.739052,173.067726,0,254,0,-254
0,2.864358,167.55491,0,254,0,-254
0,236.176058,174.415958,0,254,0,-254
0,211.064348,171.110148,0,254,0,-254
0,194.465702,168.924732,0,254,0,-254
0,152.591262,163.411916,0,254,0,-254
0,127.479552,160.105852,0,254,0,-254
0,110.88116,157.92069,0,254,0,-254
0,69.006466,152.407874,0,254,0,-254
0,43.89501,149.10181,0,254,0,-254
0,27.296364,146.916648,0,254,0,-254
0,218.73337,148.26488,0,254,0,-254
0,193.62166,144.958816,0,254,0,-254
0,177.023014,142.773654,0,254,0,-254
0,135.148574,137.260838,0,254,0,-254
0,110.037118,133.954774,0,254,0,-254
0,93.438472,131.769358,0,254,0,-254
0,51.563778,126.256542,0,254,0,-254
0,26.452322,122.950478,0,254,0,-254
0,9.853676,120.765316,0,254,0,-254
0,201.290682,122.113548,0,254,0,-254
0,176.178972,118.807738,0,254,0,-254
0,159.58058,116.622322,0,254,0,-254
0,117.705886,111.109506,0,254,0,-254
0,92.59443,107.803442,0,254,0,-254
0,75.995784,105.61828,0,254,0,-254
0,34.121344,100.105464,0,254,0,-254
0,9.009634,96.7994,0,254,0,-254
0,225.722434,101.475286,0,254,0,-254
0,183.847994,95.96247,0,254,0,-254
0,158.736538,92.656406,0,254,0,-254
0,142.137892,90.471244,0,254,0,-254
0,100.263198,84.958428,0,254,0,-254
0,75.151742,81.652364,0,254,0,-254
0,58.553096,79.466948,0,254,0,-254
0,16.678656,73.954132,0,254,0,-254
0,224.878392,77.50937,0,254,0,-254
0,208.279746,75.324208,0,254,0,-254
0,166.405306,69.811138,0,254,0,-254
0,141.29385,66.505328,0,254,0,-254
0,124.695204,64.319912,0,254,0,-254
0,82.82051,58.807096,0,254,0,-254
0,57.709054,55.501032,0,254,0,-254
0,41.110408,53.31587,0,254,0,-254
0,232.547414,54.664102,0,254,0,-254
0,207.435704,51.358038,0,254,0,-254
0,190.837312,49.172876,0,254,0,-254
0,148.962618,43.66006,0,254,0,-254
0,123.851162,40.353996,0,254,0,-254
0,107.252516,38.168834,0,254,0,-254
0,65.378076,32.656018,0,254,0,-254
0,40.266366,29.349954,0,254,0,-254
0,23.66772,27.164538,0,254,0,-254
0,215.104726,28.513024,0,254,0,-254
0,189.99327,25.20696,0,254,0,-254
0,173.394624,23.021798,0,254,0,-254
0,131.51993,17.508728,0,254,0,-254
0,106.408474,14.202918,0,254,0,-254
0,89.809828,12.017502,0,254,0,-254
0,47.935388,6.504686,0,254,0,-254
0,22.823678,3.198622,0,254,0,-254
0,6.225032,1.01346,0,254,0,-254
0,197.662038,2.361692,0,254,0,-254
0,31.866332,226.2124,0,254,0,-254
0,65.909444,230.88092,0,254,0,-254
0,31.060136,204.140054,0,254,0,-254
0,99.400106,235.125768,0,254,0,-254
0,65.103248,208.808574,0,254,0,-254
0,30.253686,182.067962,0,254,0,-254
0,98.59391,213.053422,0,254,0,-254
0,64.296798,186.736482,0,254,0,-254
0,29.44749,159.995616,0,254,0,-254
0,133.031484,218.02471,0,254,0,-254
0,97.787714,190.981076,0,254,0,-254
0,63.490602,164.664136,0,254,0,-254
0,28.641294,137.92327,0,254,0,-254
0,167.074596,222.69323,0,254,0,-254
0,132.225288,195.952364,0,254,0,-254
0,96.981264,168.90873,0,254,0,-254
0,62.684406,142.59179,0,254,0,-254
0,27.835098,115.850924,0,254,0,-254
0,200.565258,226.937824,0,254,0,-254
0,166.2684,200.620884,0,254,0,-254
0,131.419092,173.880018,0,254,0,-254
0,96.175068,146.836384,0,254,0,-254
0,61.87821,120.519444,0,254,0,-254
0,27.028902,93.778578,0,254,0,-254
0,235.002832,231.909112,0,254,0,-254
0,199.759062,204.865478,0,254,0,-254
0,165.46195,178.548538,0,254,0,-254
0,130.612642,151.807672,0,254,0,-254
0,95.368872,124.764292,0,254,0,-254
0,61.07176,98.447098,0,254,0,-254
0,26.222452,71.706232,0,254,0,-254
0,234.196636,209.836766,0,254,0,-254
0,198.952866,182.793386,0,254,0,-254
0,164.655754,156.476192,0,254,0,-254
0,129.806446,129.735326,0,254,0,-254
0,94.562676,102.691946,0,254,0,-254
0,60.265564,76.374752,0,254,0,-254
0,25.416256,49.63414,0,254,0,-254
0,233.39044,187.76442,0,254,0,-254
0,198.14667,160.72104,0,254,0,-254
0,163.849558,134.403846,0,254,0,-254
0,129.00025,107.663234,0,254,0,-254
0,93.75648,80.6196,0,254,0,-254
0,59.459368,54.30266,0,254,0,-254
0,24.61006,27.561794,0,254,0,-254
0,232.584244,165.692328,0,254,0,-254
0,197.34022,138.648694,0,254,0,-254
0,163.043362,112.331754,0,254,0,-254
0,128.194054,85.590888,0,254,0,-254
0,58.653172,32.230314,0,254,0,-254
0,23.803864,5.489448,0,254,0,-254
0,231.777794,143.619982,0,254,0,-254
0,196.534024,116.576348,0,254,0,-254
0,162.237166,90.259408,0,254,0,-254
0,127.387858,63.518542,0,254,0,-254
0,92.143834,36.474908,0,254,0,-254
0,57.846976,10.157968,0,254,0,-254
0,230.971598,121.547636,0,254,0,-254
0,195.727828,94.504002,0,254,0,-254
0,161.430716,68.187062,0,254,0,-254
0,126.581408,41.446196,0,254,0,-254
0,91.337638,14.402562,0,254,0,-254
0,230.165402,99.47529,0,254,0,-254
0,194.921632,72.431656,0,254,0,-254
0,160.62452,46.114716,0,254,0,-254
0,125.775212,19.37385,0,254,0,-254
0,229.359206,77.402944,0,254,0,-254
0,194.115436,50.359564,0,254,0,-254
0,159.818324,24.04237,0,254,0,-254
0,228.55301,55.330598,0,254,0,-254
0,193.308986,28.287218,0,254,0,-254
0,159.012128,1.970024,0,254,0,-254
0,227.74656,33.258506,0,254,0,-254
0,192.50279,6.214872,0,254,0,-254
0,226.940364,11.18616,0,254,0,-254
206.565051,254,15.24,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,251.46,10.16,227.18450626,113.5922544,5.67961272,-562.2816542
315,248.92,12.7,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,246.38,137.16,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,243.84,132.08,227.18450626,113.5922544,5.67961272,-562.2816542
315,241.3,134.62,179.60512212,179.60512212,3.59210356,-355.61814322
153.434949,254,182.88,227.18450626,113.5922544,5.67961272,-562.2816542
288.434949,251.46,190.5,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,248.92,185.42,227.18450626,113.5922544,5.67961272,-562.2816542
135,246.38,236.22,179.60512212,179.60512212,3.59210356,-355.61814322
270,246.38,241.3,0,254,5.08,-248.92
45,243.84,238.76,179.60512212,179.60512212,3.59210356,-355.61814322
0,195.58,243.84,0,254,5.08,-248.92
270,182.88,238.76,0,254,5.08,-248.92
26.565051,177.8,236.22,340.77676066,113.5922544,5.67961272,-562.2816542
0,241.457734,241.2111,0,254,0,-254
0,247.540526,194.966844,0,254,0,-254
0,244.803168,155.405582,0,254,0,-254
0,247.3452,111.006382,0,254,0,-254
0,244.607588,71.444866,0,254,0,-254
0,247.14962,27.045666,0,254,0,-254
0,246.553736,203.219304,0,254,0,-254
0,241.86515,143.045942,0,254,0,-254
0,251.156978,73.96607,0,254,0,-254
0,204.919072,241.865658,0,254,0,-254
0,179.807616,238.559594,0,254,0,-254
0,245.949724,223.412558,0,254,0,-254
0,253.618492,200.56729,0,254,0,-254
0,243.165122,127.626618,0,254,0,-254
0,242.32108,103.660448,0,254,0,-254
0,249.990102,80.815434,0,254,0,-254
0,239.536732,7.874762,0,254,0,-254
243.434949,198.12,248.92,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,200.66,243.84,340.77676066,113.5922544,5.67961272,-562.2816542
180,152.4,246.38,0,254,5.08,-248.92
270,152.4,251.46,0,254,5.08,-248.92
45,147.32,246.38,179.60512212,179.60512212,7.18420458,-352.02603966
296.565051,104.14,254,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,101.6,248.92,227.18450626,113.5922544,5.67961272,-562.2816542
180,106.68,248.92,0,254,5.08,-248.92
135,86.36,238.76,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,88.9,243.84,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,83.82,241.3,340.77676066,113.5922544,5.67961272,-562.2816542
116.565051,78.74,236.22,340.77676066,113.5922544,5.67961272,-562.2816542
225,76.2,241.3,179.60512212,179.60512212,7.18420458,-352.02603966
45,0,246.38,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,7.62,243.84,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,5.08,251.46,562.25296744,80.32185358,8.03218612,-795.18633952
0,93.065092,252.377956,0,254,0,-254
0,54.397148,245.740428,0,254,0,-254
0,15.729458,239.103154,0,254,0,-254
0,174.695866,248.997978,0,254,0,-254
0,139.30122,250.493276,0,254,0,-254
0,68.511674,253.48438,0,254,0,-254
0,113.665508,253.70663,0,254,0,-254
0,97.066862,251.521468,0,254,0,-254
0,55.192422,246.008398,0,254,0,-254
0,30.080966,242.702588,0,254,0,-254
0,13.48232,240.517172,0,254,0,-254
0,32.672528,248.284746,0,254,0,-254
0,66.71564,252.953266,0,254,0,-254
0,133.83768,240.097056,0,254,0,-254
0,167.880792,244.765576,0,254,0,-254
0,201.371454,249.01017,0,254,0,-254
0,245.485412,246.006874,0,254,0,-254
0,210.090512,247.502426,0,254,0,-254
0,246.793766,247.378474,0,254,0,-254
0,235.809282,253.981458,0,254,0,-254
`));M(L.ParsePatFile(`
*AR-CONC,AR-CONC
50, 0,0, 104.896,-149.807, 19.05,-209.55
355, 0,0, -51.7604,187.258, 15.24,-167.64
100.451, 15.182,-1.32825, 145.557,-176.27, 16.19,-178.09
46.1842, 0,50.8, 157.343,-224.71, 28.575,-314.325
96.6356, 22.5899,47.2965, 218.335,-264.405, 24.285,-267.135
351.184, 0,50.8, 196.679,280.887, 22.86,-251.46
21, 25.4,38.1, 104.896,-149.807, 19.05,-209.55
326, 25.4,38.1, -51.7604,187.258, 15.24,-167.64
71.4514, 38.0345,29.5779, 145.557,-176.27, 16.19,-178.09
37.5, 0,0, 53.9242,65.2018, 0,-165.608,0,-170.18,0,-168.275
7.5, 0,0, 79.3242,90.6018, 0,-97.028,0,-161.798,0,-64.135
-32.5, -56.642,0, 117.434,68.0212, 0,-63.5,0,-198.12,0,-262.89
-42.5, -82.042,0, 92.0344,118.821, 0,-82.55,0,-131.572,0,-186.69
`));M(L.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 101.6,101.6, 304.8,-101.6
135, 71.842,71.842, 101.6,-101.6, 304.8,-101.6
`));M(L.ParsePatFile(`
*AR-PARQ1,AR-PARQ1
90, 0,0, 304.8,304.8, 304.8,-304.8
90, 50.8,0, 304.8,304.8, 304.8,-304.8
90, 101.6,0, 304.8,304.8, 304.8,-304.8
90, 152.4,0, 304.8,304.8, 304.8,-304.8
90, 203.2,0, 304.8,304.8, 304.8,-304.8
90, 254,0, 304.8,304.8, 304.8,-304.8
90, 304.8,0, 304.8,304.8, 304.8,-304.8
0, 0,304.8, 304.8,-304.8, 304.8,-304.8
0, 0,355.6, 304.8,-304.8, 304.8,-304.8
0, 0,406.4, 304.8,-304.8, 304.8,-304.8
0, 0,457.2, 304.8,-304.8, 304.8,-304.8
0, 0,508, 304.8,-304.8, 304.8,-304.8
0, 0,558.8, 304.8,-304.8, 304.8,-304.8
0, 0,609.6, 304.8,-304.8, 304.8,-304.8
`));M(L.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 55.88,25.4, 381,-50.8,127,-25.4
0, 33.782,12.7, -25.4,33.782, 76.2,-8.382,152.4,-19.05
0, 12.7,21.59, 132.08,17.018, 203.2,-35.56,101.6,-25.4
`));M(L.ParsePatFile(`
*AR-RSHKE,AR-RSHKE
0, 0,0, 647.7,304.8, 152.4,-127,177.8,-76.2,228.6,-101.6
0, 152.4,12.7, 647.7,304.8, 127,-482.6,101.6,-152.4
0, 457.2,-19.05, 647.7,304.8, 76.2,-787.4
90, 0,0, 304.8,215.9, 292.1,-927.1
90, 152.4,0, 304.8,215.9, 285.75,-933.45
90, 279.4,0, 304.8,215.9, 266.7,-952.5
90, 457.2,-19.05, 304.8,215.9, 292.1,-927.1
90, 533.4,-19.05, 304.8,215.9, 292.1,-927.1
90, 762,0, 304.8,215.9, 279.4,-939.8
`));M(L.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 28.5242,39.8018, 0,-38.608,0,-43.18,0,-41.275
7.5, 0,0, 53.9242,65.2018, 0,-20.828,0,-34.798,0,-13.335
-32.5, -31.242,0, 66.6344,42.6212, 0,-12.7,0,-45.72,0,-59.69
-42.5, -31.242,0, 41.2344,68.0212, 0,-6.35,0,-29.972,0,-34.29
`));M(L.ParsePatFile(`
*BARBWIRE,BARBWIRE
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
315,7.62,14.224,17.960512212,17.960512212,0.359210356,-35.561814322
288.434949,6.604,17.272,56.225296744,8.032185358,3.212874194,-77.10897837
158.198591,7.874,16.764,80.18324705,4.716661636,1.36783191,-135.415354264
116.565051,8.128,16.256,34.077676066,11.35922544,0.567961272,-56.22816542
116.565051,8.636,15.24,34.077676066,11.35922544,1.135922544,-55.660204148
111.801409,11.176,9.906,56.599939124,4.716661636,1.36783191,-135.415354264
156.801409,12.954,9.144,136.74251925,3.335183322,1.934406342,-191.506230398
289.653824,11.684,12.7,297.294468148,1.708588912,3.775981526,-373.822164724
194.036243,7.874,9.144,80.085263502,6.160405002,1.047268924,-103.679614078
251.565051,8.128,9.906,24.09655582,8.032185358,0.803218612,-79.518633952
254.054604,8.636,11.684,104.668749768,3.488958224,1.84914794,-183.065643266
74.744881,8.636,11.684,104.703186326,2.22772732,2.896045516,-286.708512434
135,9.144,11.176,17.960512212,17.960512212,0.718420458,-35.202603966
180,9.906,11.176,0,25.4,0.762,-24.638
270,9.906,11.43,0,25.4,0.254,-25.146
74.054604,9.906,11.43,104.668749768,3.488958224,3.69829588,-181.216495326
161.565051,10.668,11.176,24.09655582,8.032185358,0.803218612,-79.518633952
198.434949,11.43,11.43,56.225296744,8.032185358,0.803218612,-79.518633952
258.231711,12.7,17.526,129.51095129,1.03608759,6.226886454,-616.461767582
21.801409,11.43,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
75.963757,10.922,14.986,24.6416195,6.160405002,2.094537594,-102.632345154
341.565051,10.16,15.24,24.09655582,8.032185358,0.803218612,-79.518633952
45,9.398,14.478,17.960512212,17.960512212,1.077630814,-34.843393864
288.434949,9.144,15.24,56.225296744,8.032185358,0.803218612,-79.518633952
0,8.636,15.24,0,25.4,0.508,-24.892
26.565051,8.128,14.986,34.077676066,11.35922544,0.567961272,-56.22816542
78.231711,6.858,8.89,129.51095129,1.03608759,6.226886454,-616.461767582
4.085617,19.812,12.192,331.17053781,1.80967507,3.565059926,-352.940928864
0,17.526,12.192,0,25.4,2.286,-23.114
354.289407,14.986,12.446,25.273944626,2.527394488,2.552668504,-252.714172244
356.185925,11.938,13.97,25.343743064,1.689582854,3.818457184,-378.027270614
351.469234,20.32,13.97,179.600730968,1.255949228,5.136831992,-508.546377622
0,16.764,13.97,0,25.4,3.556,-21.844
14.036243,11.684,12.7,80.085263502,6.160405002,5.236344112,-99.490538636
189.865807,17.78,12.954,438.470633344,1.088016366,5.92968969,-587.039280834
180,20.32,12.954,0,25.4,2.54,-22.86
171.469234,25.4,12.192,179.600730968,1.255949228,5.136831992,-508.546377622
186.115504,25.4,14.224,230.005013954,0.901980416,3.973724844,-711.296769428
5.52754,3.499555612,13.546666582,255.265537982,0.815544724,4.394880466,-786.683623734
3.691386,0,12.192,381.844852514,0.817654956,3.84896106,-785.188047096
348.310631,0,13.208,129.51225558,0.85769704,7.522003244,-744.678315822
348.690068,0,14.224,24.906749272,4.981349956,7.770905718,-121.744189836
`));M(L.ParsePatFile(`
*BLOCKS-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,7.874,16.764,25.4,25.4,5.588,-19.812
180,2.032,2.286,0,25.4,14.478,-10.922
270,2.032,2.286,25.4,25.4,5.334,-20.066
180,2.032,22.352,0,25.4,14.478,-10.922
270,12.954,2.286,25.4,25.4,5.334,-20.066
270,22.606,8.128,25.4,25.4,5.08,-20.32
0,12.446,8.128,0,25.4,10.16,-15.24
90,12.446,3.048,25.4,25.4,5.08,-20.32
180,22.606,3.048,0,25.4,10.16,-15.24
270,17.526,21.336,25.4,25.4,12.192,-13.208
0,12.192,21.336,0,25.4,5.334,-20.066
90,12.192,9.144,25.4,25.4,12.192,-13.208
180,17.526,9.144,0,25.4,5.334,-20.066
270,3.048,0.762,25.4,25.4,8.382,-17.018
0,3.048,17.78,0,25.4,8.128,-17.272
270,11.176,0.762,25.4,25.4,8.382,-17.018
0,3.048,0.762,0,25.4,8.128,-17.272
270,11.43,17.018,25.4,25.4,6.096,-19.304
0,9.144,17.018,0,25.4,2.286,-23.114
90,9.144,10.922,25.4,25.4,6.096,-19.304
180,11.43,10.922,0,25.4,2.286,-23.114
270,11.43,10.16,25.4,25.4,8.382,-17.018
0,2.794,10.16,0,25.4,8.636,-16.764
90,2.794,1.778,25.4,25.4,8.382,-17.018
180,11.43,1.778,0,25.4,8.636,-16.764
270,22.606,10.414,25.4,25.4,1.524,-23.876
0,18.542,10.414,0,25.4,4.064,-21.336
90,18.542,8.89,25.4,25.4,1.524,-23.876
180,22.606,8.89,0,25.4,4.064,-21.336
180,1.778,10.16,0,25.4,3.556,-21.844
270,23.622,10.16,25.4,25.4,6.858,-18.542
180,1.778,3.302,0,25.4,3.556,-21.844
270,1.778,10.16,25.4,25.4,6.858,-18.542
180,2.032,20.574,0,25.4,8.636,-16.764
270,18.796,20.574,25.4,25.4,2.54,-22.86
180,2.032,18.034,0,25.4,8.636,-16.764
270,2.032,20.574,25.4,25.4,2.54,-22.86
180,7.874,16.764,0,25.4,14.986,-10.414
270,18.288,16.764,25.4,25.4,5.588,-19.812
180,7.874,11.176,0,25.4,14.986,-10.414
`));M(L.ParsePatFile(`
*BLOCKS-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,8.128,4.572,0,25.4,12.446,-12.954
270,8.128,13.97,25.4,25.4,9.398,-16.002
0,9.398,24.384,0,25.4,10.668,-14.732
0,4.318,24.892,0,25.4,4.318,-21.082
90,20.828,0,25.4,25.4,3.81,-21.59
180,23.368,0,0,25.4,2.54,-22.86
180,8.128,13.97,0,25.4,12.446,-12.954
270,21.082,13.97,25.4,25.4,9.398,-16.002
180,3.302,20.32,0,25.4,4.572,-20.828
90,3.556,14.986,25.4,25.4,4.318,-21.082
270,3.302,3.81,25.4,25.4,8.89,-16.51
180,18.034,14.986,0,25.4,14.478,-10.922
270,23.368,3.81,25.4,25.4,3.81,-21.59
0,20.828,3.81,0,25.4,2.54,-22.86
270,18.034,19.304,25.4,25.4,4.318,-21.082
0,3.556,19.304,0,25.4,14.478,-10.922
180,2.032,14.986,0,25.4,8.128,-17.272
270,2.032,19.304,25.4,25.4,4.318,-21.082
180,3.302,3.81,0,25.4,4.572,-20.828
270,24.13,3.81,25.4,25.4,8.89,-16.51
90,4.572,20.32,25.4,25.4,3.302,-22.098
180,23.114,20.32,0,25.4,18.542,-6.858
180,2.032,19.304,0,25.4,8.128,-17.272
270,19.304,19.304,25.4,25.4,4.318,-21.082
270,8.636,3.81,25.4,25.4,4.318,-21.082
0,4.318,3.81,0,25.4,4.318,-21.082
270,23.114,23.622,25.4,25.4,3.302,-22.098
0,4.572,23.622,0,25.4,18.542,-6.858
0,9.398,13.97,0,25.4,10.668,-14.732
270,9.398,13.97,25.4,25.4,14.986,-10.414
270,4.318,3.81,25.4,25.4,4.318,-21.082
270,20.066,13.97,25.4,25.4,14.986,-10.414
`));M(L.ParsePatFile(`
*BOX-OVERLAP
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,5.08,17.78,0,25.4,10.16,-15.24
90,5.08,5.08,25.4,25.4,15.24,-10.16
270,7.62,5.08,25.4,25.4,10.16,-15.24
180,5.08,7.62,0,25.4,10.16,-15.24
0,5.08,20.32,0,25.4,15.24,-10.16
180,20.32,5.08,0,25.4,15.24,-10.16
270,20.32,20.32,25.4,25.4,15.24,-10.16
270,17.78,5.08,25.4,25.4,10.16,-15.24
`));M(L.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,25.4
90, 6.35,0, 0,25.4
0, 0,0, 0,25.4, -6.35,6.35
0, 0,6.35, 0,25.4, -6.35,6.35
0, 0,12.7, 0,25.4, 6.35,-6.35
0, 0,19.05, 0,25.4, 6.35,-6.35
90, 12.7,0, 0,25.4, 6.35,-6.35
90, 19.05,0, 0,25.4, 6.35,-6.35
`));M(L.ParsePatFile(`
*BOXJOIN-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
90,3.810000254,3.81,25.4,25.4,17.78,-7.62
0,3.810000254,21.59,0,25.4,17.78,-7.62
270,11.430000254,3.81,25.4,25.4,7.62,-17.78
180,3.810000254,11.43,0,25.4,7.62,-17.78
270,13.970000254,3.81,25.4,25.4,7.62,-17.78
180,21.590000254,3.81,0,25.4,17.78,-7.62
270,21.590000254,21.59,25.4,25.4,17.78,-7.62
180,3.810000254,13.97,0,25.4,7.62,-17.78
`));M(L.ParsePatFile(`
*BOXJOIN-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
90,3.810000254,13.97,25.4,25.4,7.62,-17.78
270,21.590000254,21.59,25.4,25.4,7.62,-17.78
0,13.970000254,21.59,0,25.4,7.62,-17.78
180,3.810000254,13.97,0,25.4,7.62,-17.78
90,3.810000254,3.81,25.4,25.4,7.62,-17.78
180,11.430000254,3.81,0,25.4,7.62,-17.78
180,3.810000254,11.43,0,25.4,7.62,-17.78
180,21.590000254,3.81,0,25.4,7.62,-17.78
270,21.590000254,11.43,25.4,25.4,7.62,-17.78
270,11.430000254,3.81,25.4,25.4,7.62,-17.78
270,13.970000254,3.81,25.4,25.4,7.62,-17.78
0,3.810000254,21.59,0,25.4,7.62,-17.78
`));M(L.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-1.5875
`));M(L.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,6.35
90, 0,0, 0,12.7, 6.35,-6.35
90, 6.35,0, 0,12.7, -6.35,6.35
`));M(L.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,8.382
90, 22.86,0, 8.382,12.7, 8.382,-8.382
90, 20.32,0, 8.382,12.7, 8.382,-8.382
0, 22.86,1.397, 12.7,8.382, -22.86,2.54
0, 22.86,2.794, 12.7,8.382, -22.86,2.54
0, 22.86,4.191, 12.7,8.382, -22.86,2.54
0, 22.86,5.588, 12.7,8.382, -22.86,2.54
0, 22.86,6.985, 12.7,8.382, -22.86,2.54
`));M(L.ParsePatFile(`
*BUBBLES-01,BUBBLES-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,1.4976856,0.4251706,0,25.4,0,-25.4
0,1.5807944,0.8431022,0,25.4,0,-25.4
0,1.7177766,1.2465812,0,25.4,0,-25.4
0,1.9062192,1.6287242,0,25.4,0,-25.4
0,2.1429472,1.9830034,0,25.4,0,-25.4
0,2.4238966,2.3033736,0,25.4,0,-25.4
0,2.7442414,2.584323,0,25.4,0,-25.4
0,3.098546,2.821051,0,25.4,0,-25.4
0,3.480689,3.0094936,0,25.4,0,-25.4
0,3.884168,3.1464504,0,25.4,0,-25.4
0,4.3020742,3.2295846,0,25.4,0,-25.4
0,4.7272702,3.2574484,0,25.4,0,-25.4
0,5.1524408,3.2295846,0,25.4,0,-25.4
0,5.570347,3.1464504,0,25.4,0,-25.4
0,5.973826,3.0094936,0,25.4,0,-25.4
0,6.3559944,2.821051,0,25.4,0,-25.4
0,6.7102736,2.584323,0,25.4,0,-25.4
0,7.0306184,2.3033736,0,25.4,0,-25.4
0,7.3115678,1.9830034,0,25.4,0,-25.4
0,7.5482958,1.6287242,0,25.4,0,-25.4
0,7.7367638,1.2465812,0,25.4,0,-25.4
0,7.8737206,0.8431022,0,25.4,0,-25.4
0,7.9568548,0.4251706,0,25.4,0,-25.4
0,3.0482032,5.5942992,0,25.4,0,-25.4
0,2.9839412,5.1610768,0,25.4,0,-25.4
0,2.8775152,4.7362618,0,25.4,0,-25.4
0,2.729992,4.3239182,0,25.4,0,-25.4
0,2.5427432,3.9280338,0,25.4,0,-25.4
0,2.3175976,3.5523932,0,25.4,0,-25.4
0,2.0567142,3.2006286,0,25.4,0,-25.4
0,1.7626076,2.8761436,0,25.4,0,-25.4
0,1.4380972,2.582037,0,25.4,0,-25.4
0,1.086358,2.3211536,0,25.4,0,-25.4
0,0.7107174,2.096008,0,25.4,0,-25.4
0,0.3148076,1.9087592,0,25.4,0,-25.4
0,0.3148076,10.154666,0,25.4,0,-25.4
0,0.7107174,9.9674172,0,25.4,0,-25.4
0,1.086358,9.7422716,0,25.4,0,-25.4
0,1.4380972,9.4813882,0,25.4,0,-25.4
0,1.7626076,9.1872816,0,25.4,0,-25.4
0,2.0567142,8.8627966,0,25.4,0,-25.4
0,2.3175976,8.511032,0,25.4,0,-25.4
0,2.5427432,8.1353914,0,25.4,0,-25.4
0,2.729992,7.7394816,0,25.4,0,-25.4
0,2.8775152,7.327138,0,25.4,0,-25.4
0,2.9839412,6.902323,0,25.4,0,-25.4
0,3.0482032,6.469126,0,25.4,0,-25.4
0,3.0696916,6.0317126,0,25.4,0,-25.4
0,18.7471304,9.4569026,0,25.4,0,-25.4
0,18.6083702,9.0603324,0,25.4,0,-25.4
0,18.3848248,8.70458,0,25.4,0,-25.4
0,18.0877464,8.4074762,0,25.4,0,-25.4
0,17.731994,8.1839562,0,25.4,0,-25.4
0,17.3354238,8.0451706,0,25.4,0,-25.4
0,16.9178986,7.9981298,0,25.4,0,-25.4
0,16.5003988,8.0451706,0,25.4,0,-25.4
0,16.1038286,8.1839562,0,25.4,0,-25.4
0,15.7480762,8.4074762,0,25.4,0,-25.4
0,15.4509724,8.70458,0,25.4,0,-25.4
0,15.2274524,9.0603324,0,25.4,0,-25.4
0,15.0886668,9.4569026,0,25.4,0,-25.4
0,15.041626,9.8744024,0,25.4,0,-25.4
0,15.0886668,10.2919276,0,25.4,0,-25.4
0,15.2274524,10.6884978,0,25.4,0,-25.4
0,15.4509724,11.0442502,0,25.4,0,-25.4
0,15.7480762,11.341354,0,25.4,0,-25.4
0,16.1038286,11.564874,0,25.4,0,-25.4
0,16.5003988,11.7036342,0,25.4,0,-25.4
0,16.9178986,11.750675,0,25.4,0,-25.4
0,17.3354238,11.7036342,0,25.4,0,-25.4
0,17.731994,11.564874,0,25.4,0,-25.4
0,18.0877464,11.341354,0,25.4,0,-25.4
0,18.3848248,11.0442502,0,25.4,0,-25.4
0,18.6083702,10.6884978,0,25.4,0,-25.4
0,18.7471304,10.2919276,0,25.4,0,-25.4
0,18.7941712,9.8744024,0,25.4,0,-25.4
0,21.2068664,21.1084414,0,25.4,0,-25.4
0,20.8647792,21.3569804,0,25.4,0,-25.4
0,20.5818486,21.6712292,0,25.4,0,-25.4
0,11.7541802,19.0603632,0,25.4,0,-25.4
0,11.6505482,18.6510676,0,25.4,0,-25.4
0,11.480927,18.264378,0,25.4,0,-25.4
0,11.2499902,17.9108862,0,25.4,0,-25.4
0,10.9640116,17.6002442,0,25.4,0,-25.4
0,10.6308144,17.3409102,0,25.4,0,-25.4
0,10.2594664,17.1399454,0,25.4,0,-25.4
0,9.8601022,17.0028362,0,25.4,0,-25.4
0,9.4436184,16.9333418,0,25.4,0,-25.4
0,9.0213688,16.9333418,0,25.4,0,-25.4
0,8.6049104,17.0028362,0,25.4,0,-25.4
0,8.2055462,17.1399454,0,25.4,0,-25.4
0,7.8341982,17.3409102,0,25.4,0,-25.4
0,7.5009756,17.6002442,0,25.4,0,-25.4
0,7.2150224,17.9108862,0,25.4,0,-25.4
0,6.9840602,18.264378,0,25.4,0,-25.4
0,6.8144644,18.6510676,0,25.4,0,-25.4
0,6.710807,19.0603632,0,25.4,0,-25.4
0,6.6759328,19.481165,0,25.4,0,-25.4
0,6.710807,19.9019668,0,25.4,0,-25.4
0,6.8144644,20.3112878,0,25.4,0,-25.4
0,6.9840602,20.697952,0,25.4,0,-25.4
0,7.2150224,21.0514438,0,25.4,0,-25.4
0,7.5009756,21.3620858,0,25.4,0,-25.4
0,7.8341982,21.6214452,0,25.4,0,-25.4
0,8.2055462,21.82241,0,25.4,0,-25.4
0,10.2594664,21.82241,0,25.4,0,-25.4
0,10.6308144,21.6214452,0,25.4,0,-25.4
0,10.9640116,21.3620858,0,25.4,0,-25.4
0,11.2499902,21.0514438,0,25.4,0,-25.4
0,11.480927,20.697952,0,25.4,0,-25.4
0,11.6505482,20.3112878,0,25.4,0,-25.4
0,11.7541802,19.9019668,0,25.4,0,-25.4
0,11.7890544,19.481165,0,25.4,0,-25.4
0,20.8583784,16.4692076,0,25.4,0,-25.4
0,20.7913224,16.0457896,0,25.4,0,-25.4
0,20.6803752,15.6317442,0,25.4,0,-25.4
0,20.5267306,15.2315418,0,25.4,0,-25.4
0,20.3321158,14.8495766,0,25.4,0,-25.4
0,20.0986644,14.490065,0,25.4,0,-25.4
0,19.828891,14.1569186,0,25.4,0,-25.4
0,19.5257674,13.853795,0,25.4,0,-25.4
0,19.192621,13.5840216,0,25.4,0,-25.4
0,18.8331094,13.3505448,0,25.4,0,-25.4
0,18.4511442,13.15593,0,25.4,0,-25.4
0,18.0509418,13.0023108,0,25.4,0,-25.4
0,17.636871,12.8913636,0,25.4,0,-25.4
0,17.2134784,12.8243076,0,25.4,0,-25.4
0,16.7853868,12.8018794,0,25.4,0,-25.4
0,16.3573206,12.8243076,0,25.4,0,-25.4
0,15.9339026,12.8913636,0,25.4,0,-25.4
0,15.5198572,13.0023108,0,25.4,0,-25.4
0,15.1196548,13.15593,0,25.4,0,-25.4
0,14.7376896,13.3505448,0,25.4,0,-25.4
0,14.378178,13.5840216,0,25.4,0,-25.4
0,14.0450316,13.853795,0,25.4,0,-25.4
0,13.741908,14.1569186,0,25.4,0,-25.4
0,13.4721346,14.490065,0,25.4,0,-25.4
0,13.2386578,14.8495766,0,25.4,0,-25.4
0,13.044043,15.2315418,0,25.4,0,-25.4
0,12.8904238,15.6317442,0,25.4,0,-25.4
0,12.7794766,16.0457896,0,25.4,0,-25.4
0,12.7124206,16.4692076,0,25.4,0,-25.4
0,12.6899924,16.8972738,0,25.4,0,-25.4
0,12.7124206,17.3253654,0,25.4,0,-25.4
0,12.7794766,17.748758,0,25.4,0,-25.4
0,12.8904238,18.1628288,0,25.4,0,-25.4
0,13.044043,18.5630312,0,25.4,0,-25.4
0,13.2386578,18.9449964,0,25.4,0,-25.4
0,13.4721346,19.304508,0,25.4,0,-25.4
0,13.741908,19.6376544,0,25.4,0,-25.4
0,14.0450316,19.9407526,0,25.4,0,-25.4
0,14.378178,20.2105514,0,25.4,0,-25.4
0,14.7376896,20.4440028,0,25.4,0,-25.4
0,15.1196548,20.6386176,0,25.4,0,-25.4
0,15.5198572,20.7922368,0,25.4,0,-25.4
0,15.9339026,20.9032094,0,25.4,0,-25.4
0,16.3573206,20.9702654,0,25.4,0,-25.4
0,16.7853868,20.9926936,0,25.4,0,-25.4
0,17.2134784,20.9702654,0,25.4,0,-25.4
0,17.636871,20.9032094,0,25.4,0,-25.4
0,18.0509418,20.7922368,0,25.4,0,-25.4
0,18.4511442,20.6386176,0,25.4,0,-25.4
0,18.8331094,20.4440028,0,25.4,0,-25.4
0,19.192621,20.2105514,0,25.4,0,-25.4
0,19.5257674,19.9407526,0,25.4,0,-25.4
0,19.828891,19.6376544,0,25.4,0,-25.4
0,20.0986644,19.304508,0,25.4,0,-25.4
0,20.3321158,18.9449964,0,25.4,0,-25.4
0,20.5267306,18.5630312,0,25.4,0,-25.4
0,20.6803752,18.1628288,0,25.4,0,-25.4
0,20.7913224,17.748758,0,25.4,0,-25.4
0,20.8583784,17.3253654,0,25.4,0,-25.4
0,20.8808066,16.8972738,0,25.4,0,-25.4
0,13.3174994,9.6961452,0,25.4,0,-25.4
0,13.2480558,9.2577158,0,25.4,0,-25.4
0,13.1331716,8.8289638,0,25.4,0,-25.4
0,12.9740914,8.4145628,0,25.4,0,-25.4
0,12.7725932,8.0190594,0,25.4,0,-25.4
0,12.530836,7.6467716,0,25.4,0,-25.4
0,12.2514868,7.3018142,0,25.4,0,-25.4
0,11.9375936,6.9879464,0,25.4,0,-25.4
0,11.5926362,6.7085972,0,25.4,0,-25.4
0,11.2203738,6.46684,0,25.4,0,-25.4
0,10.824845,6.2653164,0,25.4,0,-25.4
0,10.410444,6.1062362,0,25.4,0,-25.4
0,9.981692,5.991352,0,25.4,0,-25.4
0,9.5432626,5.9219084,0,25.4,0,-25.4
0,9.0999818,5.8986928,0,25.4,0,-25.4
0,8.6567264,5.9219084,0,25.4,0,-25.4
0,8.218297,5.991352,0,25.4,0,-25.4
0,7.7895196,6.1062362,0,25.4,0,-25.4
0,7.3751186,6.2653164,0,25.4,0,-25.4
0,6.9796152,6.46684,0,25.4,0,-25.4
0,6.6073528,6.7085972,0,25.4,0,-25.4
0,6.2623954,6.9879464,0,25.4,0,-25.4
0,5.9485022,7.3018142,0,25.4,0,-25.4
0,5.669153,7.6467716,0,25.4,0,-25.4
0,5.4273958,8.0190594,0,25.4,0,-25.4
0,5.2258722,8.4145628,0,25.4,0,-25.4
0,5.0668174,8.8289638,0,25.4,0,-25.4
0,4.9519332,9.2577158,0,25.4,0,-25.4
0,4.8824896,9.6961452,0,25.4,0,-25.4
0,4.8592486,10.139426,0,25.4,0,-25.4
0,4.8824896,10.5827068,0,25.4,0,-25.4
0,4.9519332,11.0211362,0,25.4,0,-25.4
0,5.0668174,11.4498882,0,25.4,0,-25.4
0,5.2258722,11.8642892,0,25.4,0,-25.4
0,5.4273958,12.2597926,0,25.4,0,-25.4
0,5.669153,12.6320804,0,25.4,0,-25.4
0,5.9485022,12.9770378,0,25.4,0,-25.4
0,6.2623954,13.2909056,0,25.4,0,-25.4
0,6.6073528,13.5702548,0,25.4,0,-25.4
0,6.9796152,13.812012,0,25.4,0,-25.4
0,7.3751186,14.0135356,0,25.4,0,-25.4
0,7.7895196,14.1726158,0,25.4,0,-25.4
0,8.218297,14.2875,0,25.4,0,-25.4
0,8.6567264,14.3569436,0,25.4,0,-25.4
0,9.0999818,14.3801592,0,25.4,0,-25.4
0,9.5432626,14.3569436,0,25.4,0,-25.4
0,9.981692,14.2875,0,25.4,0,-25.4
0,10.410444,14.1726158,0,25.4,0,-25.4
0,10.824845,14.0135356,0,25.4,0,-25.4
0,11.2203738,13.812012,0,25.4,0,-25.4
0,11.5926362,13.5702548,0,25.4,0,-25.4
0,11.9375936,13.2909056,0,25.4,0,-25.4
0,12.2514868,12.9770378,0,25.4,0,-25.4
0,12.530836,12.6320804,0,25.4,0,-25.4
0,12.7725932,12.2597926,0,25.4,0,-25.4
0,12.9740914,11.8642892,0,25.4,0,-25.4
0,13.1331716,11.4498882,0,25.4,0,-25.4
0,13.2480558,11.0211362,0,25.4,0,-25.4
0,13.3174994,10.5827068,0,25.4,0,-25.4
0,13.3407404,10.139426,0,25.4,0,-25.4
0,21.5277192,2.3211536,0,25.4,0,-25.4
0,21.1759546,2.582037,0,25.4,0,-25.4
0,20.8514442,2.8761436,0,25.4,0,-25.4
0,20.557363,3.2006286,0,25.4,0,-25.4
0,20.2964796,3.5523932,0,25.4,0,-25.4
0,20.0713086,3.9280338,0,25.4,0,-25.4
0,19.8840852,4.3239182,0,25.4,0,-25.4
0,19.7365366,4.7362618,0,25.4,0,-25.4
0,19.630136,5.1610768,0,25.4,0,-25.4
0,19.565874,5.5942992,0,25.4,0,-25.4
0,19.5443856,6.0317126,0,25.4,0,-25.4
0,19.565874,6.469126,0,25.4,0,-25.4
0,19.630136,6.902323,0,25.4,0,-25.4
0,19.7365366,7.327138,0,25.4,0,-25.4
0,19.8840852,7.7394816,0,25.4,0,-25.4
0,20.0713086,8.1353914,0,25.4,0,-25.4
0,20.2964796,8.511032,0,25.4,0,-25.4
0,20.557363,8.8627966,0,25.4,0,-25.4
0,20.8514442,9.1872816,0,25.4,0,-25.4
0,21.1759546,9.4813882,0,25.4,0,-25.4
0,21.5277192,9.7422716,0,25.4,0,-25.4
0,6.1278008,16.064738,0,25.4,0,-25.4
0,6.0612782,15.6162756,0,25.4,0,-25.4
0,5.9511438,15.1765,0,25.4,0,-25.4
0,5.7983882,14.749653,0,25.4,0,-25.4
0,5.6045608,14.339824,0,25.4,0,-25.4
0,5.3714904,13.95095,0,25.4,0,-25.4
0,5.1014122,13.5868156,0,25.4,0,-25.4
0,4.7969678,13.2509006,0,25.4,0,-25.4
0,4.4610528,12.9464308,0,25.4,0,-25.4
0,4.0969184,12.676378,0,25.4,0,-25.4
0,3.7080444,12.4433076,0,25.4,0,-25.4
0,3.2982154,12.2494548,0,25.4,0,-25.4
0,2.8713684,12.0967246,0,25.4,0,-25.4
0,2.4315928,11.9865648,0,25.4,0,-25.4
0,1.9831304,11.9200422,0,25.4,0,-25.4
0,1.5303246,11.8977918,0,25.4,0,-25.4
0,1.0774934,11.9200422,0,25.4,0,-25.4
0,0.6290564,11.9865648,0,25.4,0,-25.4
0,0.1892808,12.0967246,0,25.4,0,-25.4
0,0.1892808,20.938363,0,25.4,0,-25.4
0,0.6290564,21.0485228,0,25.4,0,-25.4
0,1.0774934,21.1150454,0,25.4,0,-25.4
0,1.5303246,21.1372958,0,25.4,0,-25.4
0,1.9831304,21.1150454,0,25.4,0,-25.4
0,2.4315928,21.0485228,0,25.4,0,-25.4
0,2.8713684,20.938363,0,25.4,0,-25.4
0,3.2982154,20.7856328,0,25.4,0,-25.4
0,3.7080444,20.59178,0,25.4,0,-25.4
0,4.0969184,20.3587096,0,25.4,0,-25.4
0,4.4610528,20.0886568,0,25.4,0,-25.4
0,4.7969678,19.784187,0,25.4,0,-25.4
0,5.1014122,19.448272,0,25.4,0,-25.4
0,5.3714904,19.0841376,0,25.4,0,-25.4
0,5.6045608,18.6952636,0,25.4,0,-25.4
0,5.7983882,18.2854346,0,25.4,0,-25.4
0,5.9511438,17.8585876,0,25.4,0,-25.4
0,6.0612782,17.418812,0,25.4,0,-25.4
0,6.1278008,16.9703496,0,25.4,0,-25.4
0,6.1500512,16.5175438,0,25.4,0,-25.4
0,19.5946268,1.221359,0,25.4,0,-25.4
0,19.5242688,0.7469886,0,25.4,0,-25.4
0,19.4077336,0.281813,0,25.4,0,-25.4
0,10.055352,0.281813,0,25.4,0,-25.4
0,9.9388168,0.7469886,0,25.4,0,-25.4
0,9.8684588,1.221359,0,25.4,0,-25.4
0,9.844913,1.7003268,0,25.4,0,-25.4
0,9.8684588,2.1792946,0,25.4,0,-25.4
0,9.9388168,2.653665,0,25.4,0,-25.4
0,10.055352,3.1188406,0,25.4,0,-25.4
0,10.216896,3.570351,0,25.4,0,-25.4
0,10.4219248,4.0038528,0,25.4,0,-25.4
0,10.6684572,4.4151804,0,25.4,0,-25.4
0,10.954131,4.800346,0,25.4,0,-25.4
0,11.2761776,5.155692,0,25.4,0,-25.4
0,11.6314982,5.4777386,0,25.4,0,-25.4
0,12.0166892,5.763387,0,25.4,0,-25.4
0,12.4280168,6.0099448,0,25.4,0,-25.4
0,12.8615186,6.2149736,0,25.4,0,-25.4
0,13.313029,6.3765176,0,25.4,0,-25.4
0,13.7782046,6.4930528,0,25.4,0,-25.4
0,14.252575,6.5634108,0,25.4,0,-25.4
0,14.7315428,6.5869312,0,25.4,0,-25.4
0,15.2105106,6.5634108,0,25.4,0,-25.4
0,15.684881,6.4930528,0,25.4,0,-25.4
0,16.1500566,6.3765176,0,25.4,0,-25.4
0,16.601567,6.2149736,0,25.4,0,-25.4
0,17.0350688,6.0099448,0,25.4,0,-25.4
0,17.4463964,5.763387,0,25.4,0,-25.4
0,17.8315874,5.4777386,0,25.4,0,-25.4
0,18.186908,5.155692,0,25.4,0,-25.4
0,18.5089546,4.800346,0,25.4,0,-25.4
0,18.794603,4.4151804,0,25.4,0,-25.4
0,19.0411608,4.0038528,0,25.4,0,-25.4
0,19.2461896,3.570351,0,25.4,0,-25.4
0,19.4077336,3.1188406,0,25.4,0,-25.4
0,19.5242688,2.653665,0,25.4,0,-25.4
0,19.5946268,2.1792946,0,25.4,0,-25.4
0,19.6181472,1.7003268,0,25.4,0,-25.4
0,25.1624084,12.2494548,0,25.4,0,-25.4
0,24.7525794,12.4433076,0,25.4,0,-25.4
0,24.3637308,12.676378,0,25.4,0,-25.4
0,23.9995964,12.9464308,0,25.4,0,-25.4
0,23.663656,13.2509006,0,25.4,0,-25.4
0,23.3592116,13.5868156,0,25.4,0,-25.4
0,23.0891334,13.95095,0,25.4,0,-25.4
0,22.856063,14.339824,0,25.4,0,-25.4
0,22.6622356,14.749653,0,25.4,0,-25.4
0,22.5095054,15.1765,0,25.4,0,-25.4
0,22.3993456,15.6162756,0,25.4,0,-25.4
0,22.332823,16.064738,0,25.4,0,-25.4
0,22.3105726,16.5175438,0,25.4,0,-25.4
0,22.332823,16.9703496,0,25.4,0,-25.4
0,22.3993456,17.418812,0,25.4,0,-25.4
0,22.5095054,17.8585876,0,25.4,0,-25.4
0,22.6622356,18.2854346,0,25.4,0,-25.4
0,22.856063,18.6952636,0,25.4,0,-25.4
0,23.0891334,19.0841376,0,25.4,0,-25.4
0,23.3592116,19.448272,0,25.4,0,-25.4
0,23.663656,19.784187,0,25.4,0,-25.4
0,23.9995964,20.0886568,0,25.4,0,-25.4
0,24.3637308,20.3587096,0,25.4,0,-25.4
0,24.7525794,20.59178,0,25.4,0,-25.4
0,25.1624084,20.7856328,0,25.4,0,-25.4
0,24.0659412,22.037421,0,25.4,0,-25.4
0,23.854537,21.6712292,0,25.4,0,-25.4
0,23.571581,21.3569804,0,25.4,0,-25.4
0,23.2294938,21.1084414,0,25.4,0,-25.4
0,22.8432106,20.936458,0,25.4,0,-25.4
0,22.429597,20.8485486,0,25.4,0,-25.4
0,22.0067632,20.8485486,0,25.4,0,-25.4
0,21.5931496,20.936458,0,25.4,0,-25.4
0,20.370419,22.037421,0,25.4,0,-25.4
0,25.302464,1.7612106,0,25.4,0,-25.4
0,24.877649,1.65481,0,25.4,0,-25.4
0,24.444452,1.590548,0,25.4,0,-25.4
0,24.0070386,1.5690596,0,25.4,0,-25.4
0,23.5696252,1.590548,0,25.4,0,-25.4
0,23.1364028,1.65481,0,25.4,0,-25.4
0,22.7115878,1.7612106,0,25.4,0,-25.4
0,22.2992442,1.9087592,0,25.4,0,-25.4
0,21.9033598,2.096008,0,25.4,0,-25.4
0,21.9033598,9.9674172,0,25.4,0,-25.4
0,22.2992442,10.154666,0,25.4,0,-25.4
0,22.7115878,10.3022146,0,25.4,0,-25.4
0,23.1364028,10.4086152,0,25.4,0,-25.4
0,23.5696252,10.4728772,0,25.4,0,-25.4
0,24.0070386,10.4943656,0,25.4,0,-25.4
0,24.444452,10.4728772,0,25.4,0,-25.4
0,24.877649,10.4086152,0,25.4,0,-25.4
0,25.302464,10.3022146,0,25.4,0,-25.4
0,19.2461896,25.2303026,0,25.4,0,-25.4
0,19.0411608,24.7967754,0,25.4,0,-25.4
0,18.794603,24.3854732,0,25.4,0,-25.4
0,18.5089546,24.0002822,0,25.4,0,-25.4
0,18.186908,23.6449616,0,25.4,0,-25.4
0,17.8315874,23.322915,0,25.4,0,-25.4
0,17.4463964,23.0372412,0,25.4,0,-25.4
0,17.0350688,22.7907088,0,25.4,0,-25.4
0,16.601567,22.58568,0,25.4,0,-25.4
0,16.1500566,22.4241106,0,25.4,0,-25.4
0,15.684881,22.3076008,0,25.4,0,-25.4
0,15.2105106,22.2372428,0,25.4,0,-25.4
0,14.7315428,22.213697,0,25.4,0,-25.4
0,14.252575,22.2372428,0,25.4,0,-25.4
0,13.7782046,22.3076008,0,25.4,0,-25.4
0,13.313029,22.4241106,0,25.4,0,-25.4
0,12.8615186,22.58568,0,25.4,0,-25.4
0,12.4280168,22.7907088,0,25.4,0,-25.4
0,12.0166892,23.0372412,0,25.4,0,-25.4
0,11.6314982,23.322915,0,25.4,0,-25.4
0,11.2761776,23.6449616,0,25.4,0,-25.4
0,10.954131,24.0002822,0,25.4,0,-25.4
0,10.6684572,24.3854732,0,25.4,0,-25.4
0,10.4219248,24.7967754,0,25.4,0,-25.4
0,10.216896,25.2303026,0,25.4,0,-25.4
0,20.2397614,22.4395792,0,25.4,0,-25.4
0,20.1955654,22.8601016,0,25.4,0,-25.4
0,20.2397614,23.280624,0,25.4,0,-25.4
0,20.370419,23.6827822,0,25.4,0,-25.4
0,20.5818486,24.048974,0,25.4,0,-25.4
0,20.8647792,24.3631974,0,25.4,0,-25.4
0,21.2068664,24.6117364,0,25.4,0,-25.4
0,8.6049104,21.9594938,0,25.4,0,-25.4
0,9.0213688,22.0289882,0,25.4,0,-25.4
0,9.4436184,22.0289882,0,25.4,0,-25.4
0,9.8601022,21.9594938,0,25.4,0,-25.4
0,7.9568548,24.9748294,0,25.4,0,-25.4
0,7.8737206,24.5568978,0,25.4,0,-25.4
0,7.7367638,24.1534188,0,25.4,0,-25.4
0,7.5482958,23.7712758,0,25.4,0,-25.4
0,7.3115678,23.4169966,0,25.4,0,-25.4
0,7.0306184,23.0966264,0,25.4,0,-25.4
0,6.7102736,22.815677,0,25.4,0,-25.4
0,6.3559944,22.578949,0,25.4,0,-25.4
0,5.973826,22.3905064,0,25.4,0,-25.4
0,5.570347,22.2535496,0,25.4,0,-25.4
0,5.1524408,22.1704154,0,25.4,0,-25.4
0,4.7272702,22.1425516,0,25.4,0,-25.4
0,4.3020742,22.1704154,0,25.4,0,-25.4
0,3.884168,22.2535496,0,25.4,0,-25.4
0,3.480689,22.3905064,0,25.4,0,-25.4
0,3.098546,22.578949,0,25.4,0,-25.4
0,2.7442414,22.815677,0,25.4,0,-25.4
0,2.4238966,23.0966264,0,25.4,0,-25.4
0,2.1429472,23.4169966,0,25.4,0,-25.4
0,1.9062192,23.7712758,0,25.4,0,-25.4
0,1.7177766,24.1534188,0,25.4,0,-25.4
0,1.5807944,24.5568978,0,25.4,0,-25.4
0,1.4976856,24.9748294,0,25.4,0,-25.4
0,1.4697964,25.4,0,25.4,0,-25.4
0,7.9847186,25.4,0,25.4,0,-25.4
0,24.1966242,22.4395792,0,25.4,0,-25.4
0,21.5931496,24.7837452,0,25.4,0,-25.4
0,22.0067632,24.8716546,0,25.4,0,-25.4
0,22.429597,24.8716546,0,25.4,0,-25.4
0,22.8432106,24.7837452,0,25.4,0,-25.4
0,23.2294938,24.6117364,0,25.4,0,-25.4
0,23.571581,24.3631974,0,25.4,0,-25.4
0,23.854537,24.048974,0,25.4,0,-25.4
0,24.0659412,23.6827822,0,25.4,0,-25.4
0,24.1966242,23.280624,0,25.4,0,-25.4
0,24.2408202,22.8601016,0,25.4,0,-25.4
`));M(L.ParsePatFile(`
*BUBBLES-02,BUBBLES-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,0.315722,3.5481006,0,25.4,0,-25.4
0,0.1191006,3.162173,0,25.4,0,-25.4
0,0.1191006,4.7896018,0,25.4,0,-25.4
0,0.315722,4.4036742,0,25.4,0,-25.4
0,0.3834892,3.9758874,0,25.4,0,-25.4
0,0.9946386,13.9859512,0,25.4,0,-25.4
0,0.840232,13.5788146,0,25.4,0,-25.4
0,0.5928614,13.220446,0,25.4,0,-25.4
0,0.2669286,12.9316988,0,25.4,0,-25.4
0,0.2669286,15.9047688,0,25.4,0,-25.4
0,0.5928614,15.6160216,0,25.4,0,-25.4
0,0.840232,15.257653,0,25.4,0,-25.4
0,0.9946386,14.8505164,0,25.4,0,-25.4
0,1.0471404,14.4182338,0,25.4,0,-25.4
0,0.321437,1.5549118,0,25.4,0,-25.4
0,0.7453122,1.6269208,0,25.4,0,-25.4
0,1.1745976,1.6510254,0,25.4,0,-25.4
0,1.6039084,1.6269208,0,25.4,0,-25.4
0,2.0277836,1.5549118,0,25.4,0,-25.4
0,2.44094,1.435862,0,25.4,0,-25.4
0,2.838196,1.2713208,0,25.4,0,-25.4
0,3.214497,1.0633456,0,25.4,0,-25.4
0,3.5651694,0.8145526,0,25.4,0,-25.4
0,3.8857682,0.5280406,0,25.4,0,-25.4
0,4.1722802,0.2074418,0,25.4,0,-25.4
0,5.3785008,15.8337504,0,25.4,0,-25.4
0,5.1644804,15.4630628,0,25.4,0,-25.4
0,4.8365664,15.1879046,0,25.4,0,-25.4
0,4.434332,15.041499,0,25.4,0,-25.4
0,4.0062658,15.041499,0,25.4,0,-25.4
0,3.6040314,15.1879046,0,25.4,0,-25.4
0,3.2761174,15.4630628,0,25.4,0,-25.4
0,3.062097,15.8337504,0,25.4,0,-25.4
0,2.9877512,16.2553142,0,25.4,0,-25.4
0,3.062097,16.676878,0,25.4,0,-25.4
0,3.2761174,17.0475656,0,25.4,0,-25.4
0,3.6040314,17.3227238,0,25.4,0,-25.4
0,4.0062658,17.4691294,0,25.4,0,-25.4
0,4.434332,17.4691294,0,25.4,0,-25.4
0,4.8365664,17.3227238,0,25.4,0,-25.4
0,5.1644804,17.0475656,0,25.4,0,-25.4
0,5.3785008,16.676878,0,25.4,0,-25.4
0,5.4528212,16.2553142,0,25.4,0,-25.4
0,1.6039084,19.4068192,0,25.4,0,-25.4
0,1.1745976,19.3827146,0,25.4,0,-25.4
0,0.7453122,19.4068192,0,25.4,0,-25.4
0,8.07212,6.3135002,0,25.4,0,-25.4
0,7.9904082,5.9026552,0,25.4,0,-25.4
0,7.8557628,5.5059834,0,25.4,0,-25.4
0,7.6704952,5.130292,0,25.4,0,-25.4
0,7.437755,4.7820072,0,25.4,0,-25.4
0,7.1615554,4.4670472,0,25.4,0,-25.4
0,6.8466208,4.1908476,0,25.4,0,-25.4
0,6.4983106,3.9581328,0,25.4,0,-25.4
0,6.1226192,3.7728652,0,25.4,0,-25.4
0,5.7259474,3.6382198,0,25.4,0,-25.4
0,5.3151024,3.5564826,0,25.4,0,-25.4
0,4.89712,3.5291014,0,25.4,0,-25.4
0,4.4791122,3.5564826,0,25.4,0,-25.4
0,4.0682672,3.6382198,0,25.4,0,-25.4
0,3.6715954,3.7728652,0,25.4,0,-25.4
0,3.295904,3.9581328,0,25.4,0,-25.4
0,2.9475938,4.1908476,0,25.4,0,-25.4
0,2.6326592,4.4670472,0,25.4,0,-25.4
0,2.3564596,4.7820072,0,25.4,0,-25.4
0,2.1237448,5.130292,0,25.4,0,-25.4
0,1.9384772,5.5059834,0,25.4,0,-25.4
0,1.8038064,5.9026552,0,25.4,0,-25.4
0,1.7220946,6.3135002,0,25.4,0,-25.4
0,1.694688,6.731508,0,25.4,0,-25.4
0,1.7220946,7.1495158,0,25.4,0,-25.4
0,1.8038064,7.5603608,0,25.4,0,-25.4
0,1.9384772,7.9570072,0,25.4,0,-25.4
0,2.1237448,8.332724,0,25.4,0,-25.4
0,2.3564596,8.6810088,0,25.4,0,-25.4
0,2.6326592,8.9959434,0,25.4,0,-25.4
0,2.9475938,9.272143,0,25.4,0,-25.4
0,3.295904,9.5048832,0,25.4,0,-25.4
0,3.6715954,9.6901508,0,25.4,0,-25.4
0,4.0682672,9.8247962,0,25.4,0,-25.4
0,4.4791122,9.9065334,0,25.4,0,-25.4
0,4.89712,9.9339146,0,25.4,0,-25.4
0,5.3151024,9.9065334,0,25.4,0,-25.4
0,5.7259474,9.8247962,0,25.4,0,-25.4
0,6.1226192,9.6901508,0,25.4,0,-25.4
0,6.4983106,9.5048832,0,25.4,0,-25.4
0,6.8466208,9.272143,0,25.4,0,-25.4
0,7.1615554,8.9959434,0,25.4,0,-25.4
0,7.437755,8.6810088,0,25.4,0,-25.4
0,7.6704952,8.332724,0,25.4,0,-25.4
0,7.8557628,7.9570072,0,25.4,0,-25.4
0,7.9904082,7.5603608,0,25.4,0,-25.4
0,8.07212,7.1495158,0,25.4,0,-25.4
0,8.0995266,6.731508,0,25.4,0,-25.4
0,18.0404516,13.0813048,0,25.4,0,-25.4
0,17.9789836,12.6669292,0,25.4,0,-25.4
0,17.8771804,12.2606054,0,25.4,0,-25.4
0,17.736058,11.8661942,0,25.4,0,-25.4
0,17.5569626,11.4875056,0,25.4,0,-25.4
0,17.3416214,11.1282226,0,25.4,0,-25.4
0,17.0920664,10.7917488,0,25.4,0,-25.4
0,16.8107614,10.4813862,0,25.4,0,-25.4
0,16.5003734,10.2000558,0,25.4,0,-25.4
0,16.163925,9.9505262,0,25.4,0,-25.4
0,15.8046166,9.7351596,0,25.4,0,-25.4
0,15.4259534,9.5560642,0,25.4,0,-25.4
0,15.0315422,9.4149418,0,25.4,0,-25.4
0,14.625193,9.313164,0,25.4,0,-25.4
0,14.2108428,9.251696,0,25.4,0,-25.4
0,13.792454,9.2311474,0,25.4,0,-25.4
0,13.3740652,9.251696,0,25.4,0,-25.4
0,12.9596896,9.313164,0,25.4,0,-25.4
0,12.5533404,9.4149418,0,25.4,0,-25.4
0,12.1589292,9.5560642,0,25.4,0,-25.4
0,11.780266,9.7351596,0,25.4,0,-25.4
0,11.4209576,9.9505262,0,25.4,0,-25.4
0,11.0845092,10.2000558,0,25.4,0,-25.4
0,10.7741212,10.4813862,0,25.4,0,-25.4
0,10.4928162,10.7917488,0,25.4,0,-25.4
0,10.2432866,11.1282226,0,25.4,0,-25.4
0,10.02792,11.4875056,0,25.4,0,-25.4
0,9.8488246,11.8661942,0,25.4,0,-25.4
0,9.7077022,12.2606054,0,25.4,0,-25.4
0,9.6059244,12.6669292,0,25.4,0,-25.4
0,9.5444564,13.0813048,0,25.4,0,-25.4
0,9.5239078,13.4996936,0,25.4,0,-25.4
0,9.5444564,13.9180824,0,25.4,0,-25.4
0,9.6059244,14.332458,0,25.4,0,-25.4
0,9.7077022,14.7387818,0,25.4,0,-25.4
0,9.8488246,15.133193,0,25.4,0,-25.4
0,10.02792,15.5118816,0,25.4,0,-25.4
0,10.2432866,15.8711646,0,25.4,0,-25.4
0,10.4928162,16.2076384,0,25.4,0,-25.4
0,10.7741212,16.518001,0,25.4,0,-25.4
0,11.0845092,16.7993314,0,25.4,0,-25.4
0,11.4209576,17.048861,0,25.4,0,-25.4
0,11.780266,17.2642276,0,25.4,0,-25.4
0,12.1589292,17.443323,0,25.4,0,-25.4
0,12.5533404,17.5844454,0,25.4,0,-25.4
0,12.9596896,17.6862232,0,25.4,0,-25.4
0,13.3740652,17.7476912,0,25.4,0,-25.4
0,13.792454,17.7682398,0,25.4,0,-25.4
0,14.2108428,17.7476912,0,25.4,0,-25.4
0,14.625193,17.6862232,0,25.4,0,-25.4
0,15.0315422,17.5844454,0,25.4,0,-25.4
0,15.4259534,17.443323,0,25.4,0,-25.4
0,15.8046166,17.2642276,0,25.4,0,-25.4
0,16.163925,17.048861,0,25.4,0,-25.4
0,16.5003734,16.7993314,0,25.4,0,-25.4
0,16.8107614,16.518001,0,25.4,0,-25.4
0,17.0920664,16.2076384,0,25.4,0,-25.4
0,17.3416214,15.8711646,0,25.4,0,-25.4
0,17.5569626,15.5118816,0,25.4,0,-25.4
0,17.736058,15.133193,0,25.4,0,-25.4
0,17.8771804,14.7387818,0,25.4,0,-25.4
0,17.9789836,14.332458,0,25.4,0,-25.4
0,18.0404516,13.9180824,0,25.4,0,-25.4
0,18.0610002,13.4996936,0,25.4,0,-25.4
0,8.9792048,0.3298444,0,25.4,0,-25.4
0,8.9318846,0.7497064,0,25.4,0,-25.4
0,8.9160858,1.1719306,0,25.4,0,-25.4
0,8.9318846,1.5941294,0,25.4,0,-25.4
0,8.9792048,2.0139914,0,25.4,0,-25.4
0,9.0577416,2.429129,0,25.4,0,-25.4
0,9.1670886,2.8372562,0,25.4,0,-25.4
0,9.3066362,3.2360616,0,25.4,0,-25.4
0,9.475597,3.62331,0,25.4,0,-25.4
0,9.6730312,3.9968424,0,25.4,0,-25.4
0,9.8978212,4.3546014,0,25.4,0,-25.4
0,10.1487224,4.694555,0,25.4,0,-25.4
0,10.4243124,5.0147982,0,25.4,0,-25.4
0,10.7230672,5.3135784,0,25.4,0,-25.4
0,11.0433104,5.5891684,0,25.4,0,-25.4
0,11.383264,5.8400696,0,25.4,0,-25.4
0,11.741023,6.0648596,0,25.4,0,-25.4
0,12.1145554,6.2622684,0,25.4,0,-25.4
0,12.5018292,6.4312292,0,25.4,0,-25.4
0,12.9006346,6.5707768,0,25.4,0,-25.4
0,13.3087364,6.6801238,0,25.4,0,-25.4
0,13.723874,6.758686,0,25.4,0,-25.4
0,14.143736,6.8059808,0,25.4,0,-25.4
0,14.5659602,6.8217796,0,25.4,0,-25.4
0,14.988159,6.8059808,0,25.4,0,-25.4
0,15.408021,6.758686,0,25.4,0,-25.4
0,15.8231586,6.6801238,0,25.4,0,-25.4
0,16.2312858,6.5707768,0,25.4,0,-25.4
0,16.6300658,6.4312292,0,25.4,0,-25.4
0,17.0173396,6.2622684,0,25.4,0,-25.4
0,17.390872,6.0648596,0,25.4,0,-25.4
0,17.748631,5.8400696,0,25.4,0,-25.4
0,18.0885846,5.5891684,0,25.4,0,-25.4
0,18.4088278,5.3135784,0,25.4,0,-25.4
0,18.7075826,5.0147982,0,25.4,0,-25.4
0,18.983198,4.694555,0,25.4,0,-25.4
0,19.2340992,4.3546014,0,25.4,0,-25.4
0,19.4588892,3.9968424,0,25.4,0,-25.4
0,19.656298,3.62331,0,25.4,0,-25.4
0,19.8252588,3.2360616,0,25.4,0,-25.4
0,23.5769404,0.2074418,0,25.4,0,-25.4
0,23.8634524,0.5280406,0,25.4,0,-25.4
0,24.1840512,0.8145526,0,25.4,0,-25.4
0,24.5347236,1.0633456,0,25.4,0,-25.4
0,24.9110246,1.2713208,0,25.4,0,-25.4
0,25.3082552,1.435862,0,25.4,0,-25.4
0,25.2128274,2.8558998,0,25.4,0,-25.4
0,24.8269252,2.6592784,0,25.4,0,-25.4
0,24.399113,2.5915112,0,25.4,0,-25.4
0,23.9713262,2.6592784,0,25.4,0,-25.4
0,23.5853986,2.8558998,0,25.4,0,-25.4
0,23.2791508,3.162173,0,25.4,0,-25.4
0,23.082504,3.5481006,0,25.4,0,-25.4
0,23.0147622,3.9758874,0,25.4,0,-25.4
0,23.082504,4.4036742,0,25.4,0,-25.4
0,23.2791508,4.7896018,0,25.4,0,-25.4
0,23.5853986,5.095875,0,25.4,0,-25.4
0,23.9713262,5.2924964,0,25.4,0,-25.4
0,24.399113,5.3602636,0,25.4,0,-25.4
0,24.8269252,5.2924964,0,25.4,0,-25.4
0,25.2128274,5.095875,0,25.4,0,-25.4
0,25.2813566,12.729337,0,25.4,0,-25.4
0,24.8585736,12.6251208,0,25.4,0,-25.4
0,24.423116,12.6251208,0,25.4,0,-25.4
0,24.000333,12.729337,0,25.4,0,-25.4
0,23.614761,12.9316988,0,25.4,0,-25.4
0,23.2888028,13.220446,0,25.4,0,-25.4
0,23.0414576,13.5788146,0,25.4,0,-25.4
0,22.887051,13.9859512,0,25.4,0,-25.4
0,22.8345492,14.4182338,0,25.4,0,-25.4
0,22.887051,14.8505164,0,25.4,0,-25.4
0,23.0414576,15.257653,0,25.4,0,-25.4
0,23.2888028,15.6160216,0,25.4,0,-25.4
0,23.614761,15.9047688,0,25.4,0,-25.4
0,24.000333,16.1071306,0,25.4,0,-25.4
0,24.423116,16.2113468,0,25.4,0,-25.4
0,24.8585736,16.2113468,0,25.4,0,-25.4
0,25.2813566,16.1071306,0,25.4,0,-25.4
0,20.2000104,0.7497064,0,25.4,0,-25.4
0,20.1527156,0.3298444,0,25.4,0,-25.4
0,19.9648064,2.8372562,0,25.4,0,-25.4
0,20.0741534,2.429129,0,25.4,0,-25.4
0,20.1527156,2.0139914,0,25.4,0,-25.4
0,20.2000104,1.5941294,0,25.4,0,-25.4
0,20.2158092,1.1719306,0,25.4,0,-25.4
0,20.0741534,25.3147068,0,25.4,0,-25.4
0,19.9648064,24.906605,0,25.4,0,-25.4
0,19.8252588,24.5077996,0,25.4,0,-25.4
0,19.656298,24.1205512,0,25.4,0,-25.4
0,19.4588892,23.7469934,0,25.4,0,-25.4
0,19.2340992,23.3892344,0,25.4,0,-25.4
0,18.983198,23.0492808,0,25.4,0,-25.4
0,18.7075826,22.7290376,0,25.4,0,-25.4
0,18.4088278,22.4302828,0,25.4,0,-25.4
0,18.0885846,22.1546928,0,25.4,0,-25.4
0,17.748631,21.9037916,0,25.4,0,-25.4
0,17.390872,21.6790016,0,25.4,0,-25.4
0,17.0173396,21.4815674,0,25.4,0,-25.4
0,16.6300658,21.3126066,0,25.4,0,-25.4
0,16.2312858,21.173059,0,25.4,0,-25.4
0,15.8231586,21.063712,0,25.4,0,-25.4
0,15.408021,20.9851752,0,25.4,0,-25.4
0,14.988159,20.937855,0,25.4,0,-25.4
0,14.5659602,20.9220562,0,25.4,0,-25.4
0,14.143736,20.937855,0,25.4,0,-25.4
0,13.723874,20.9851752,0,25.4,0,-25.4
0,13.3087364,21.063712,0,25.4,0,-25.4
0,12.9006346,21.173059,0,25.4,0,-25.4
0,12.5018292,21.3126066,0,25.4,0,-25.4
0,12.1145554,21.4815674,0,25.4,0,-25.4
0,11.741023,21.6790016,0,25.4,0,-25.4
0,11.383264,21.9037916,0,25.4,0,-25.4
0,11.0433104,22.1546928,0,25.4,0,-25.4
0,10.7230672,22.4302828,0,25.4,0,-25.4
0,10.4243124,22.7290376,0,25.4,0,-25.4
0,10.1487224,23.0492808,0,25.4,0,-25.4
0,9.8978212,23.3892344,0,25.4,0,-25.4
0,9.6730312,23.7469934,0,25.4,0,-25.4
0,9.475597,24.1205512,0,25.4,0,-25.4
0,9.3066362,24.5077996,0,25.4,0,-25.4
0,9.1670886,24.906605,0,25.4,0,-25.4
0,9.0577416,25.3147068,0,25.4,0,-25.4
0,4.9846484,22.7875846,0,25.4,0,-25.4
0,4.9126394,22.3637094,0,25.4,0,-25.4
0,4.793615,21.9505276,0,25.4,0,-25.4
0,4.6290738,21.553297,0,25.4,0,-25.4
0,4.4210732,21.176996,0,25.4,0,-25.4
0,4.1722802,20.8263236,0,25.4,0,-25.4
0,3.8857682,20.5057248,0,25.4,0,-25.4
0,3.5651694,20.2192128,0,25.4,0,-25.4
0,3.214497,19.9703944,0,25.4,0,-25.4
0,2.838196,19.7624192,0,25.4,0,-25.4
0,2.44094,19.597878,0,25.4,0,-25.4
0,2.0277836,19.4788536,0,25.4,0,-25.4
0,0.321437,19.4788536,0,25.4,0,-25.4
0,4.4210732,25.2567694,0,25.4,0,-25.4
0,4.6290738,24.880443,0,25.4,0,-25.4
0,4.793615,24.4832124,0,25.4,0,-25.4
0,4.9126394,24.070056,0,25.4,0,-25.4
0,4.9846484,23.6461554,0,25.4,0,-25.4
0,5.008753,23.21687,0,25.4,0,-25.4
0,25.3082552,19.597878,0,25.4,0,-25.4
0,24.9110246,19.7624192,0,25.4,0,-25.4
0,24.5347236,19.9703944,0,25.4,0,-25.4
0,24.1840512,20.2192128,0,25.4,0,-25.4
0,23.8634524,20.5057248,0,25.4,0,-25.4
0,23.5769404,20.8263236,0,25.4,0,-25.4
0,23.3281474,21.176996,0,25.4,0,-25.4
0,23.1201468,21.553297,0,25.4,0,-25.4
0,22.9556056,21.9505276,0,25.4,0,-25.4
0,22.8365812,22.3637094,0,25.4,0,-25.4
0,22.7645722,22.7875846,0,25.4,0,-25.4
0,22.7404422,23.21687,0,25.4,0,-25.4
0,22.7645722,23.6461554,0,25.4,0,-25.4
0,22.8365812,24.070056,0,25.4,0,-25.4
0,22.9556056,24.4832124,0,25.4,0,-25.4
0,23.1201468,24.880443,0,25.4,0,-25.4
0,23.3281474,25.2567694,0,25.4,0,-25.4
`));M(L.ParsePatFile(`
*BUBBLES-03,BUBBLES-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,10.1887274,4.1559734,0,25.4,0,-25.4
0,10.0855526,3.6595304,0,25.4,0,-25.4
0,9.9157536,3.181731,0,25.4,0,-25.4
0,9.68248,2.7315414,0,25.4,0,-25.4
0,9.3900752,2.3172928,0,25.4,0,-25.4
0,9.0439748,1.9467068,0,25.4,0,-25.4
0,8.6506558,1.6267176,0,25.4,0,-25.4
0,8.217408,1.3632688,0,25.4,0,-25.4
0,7.752334,1.1612372,0,25.4,0,-25.4
0,7.2640952,1.0244582,0,25.4,0,-25.4
0,6.7617594,0.9553956,0,25.4,0,-25.4
0,6.2546992,0.9553956,0,25.4,0,-25.4
0,5.7523634,1.0244582,0,25.4,0,-25.4
0,5.2641246,1.1612372,0,25.4,0,-25.4
0,4.7990252,1.3632688,0,25.4,0,-25.4
0,4.3658028,1.6267176,0,25.4,0,-25.4
0,3.9724838,1.9467068,0,25.4,0,-25.4
0,3.6263834,2.3172928,0,25.4,0,-25.4
0,3.3339786,2.7315414,0,25.4,0,-25.4
0,3.100705,3.181731,0,25.4,0,-25.4
0,2.9308806,3.6595304,0,25.4,0,-25.4
0,2.8277312,4.1559734,0,25.4,0,-25.4
0,2.7931364,4.6618398,0,25.4,0,-25.4
0,2.8277312,5.1677062,0,25.4,0,-25.4
0,2.9308806,5.6641746,0,25.4,0,-25.4
0,3.100705,6.1419486,0,25.4,0,-25.4
0,3.3339786,6.5921382,0,25.4,0,-25.4
0,3.6263834,7.0063868,0,25.4,0,-25.4
0,3.9724838,7.3769728,0,25.4,0,-25.4
0,4.3658028,7.696962,0,25.4,0,-25.4
0,4.7990252,7.9604362,0,25.4,0,-25.4
0,5.2641246,8.1624424,0,25.4,0,-25.4
0,5.7523634,8.2992468,0,25.4,0,-25.4
0,6.2546992,8.368284,0,25.4,0,-25.4
0,6.7617594,8.368284,0,25.4,0,-25.4
0,7.2640952,8.2992468,0,25.4,0,-25.4
0,7.752334,8.1624424,0,25.4,0,-25.4
0,8.217408,7.9604362,0,25.4,0,-25.4
0,8.6506558,7.696962,0,25.4,0,-25.4
0,9.0439748,7.3769728,0,25.4,0,-25.4
0,9.3900752,7.0063868,0,25.4,0,-25.4
0,9.68248,6.5921382,0,25.4,0,-25.4
0,9.9157536,6.1419486,0,25.4,0,-25.4
0,10.0855526,5.6641746,0,25.4,0,-25.4
0,10.1887274,5.1677062,0,25.4,0,-25.4
0,10.2233222,4.6618398,0,25.4,0,-25.4
0,18.2143908,14.7408138,0,25.4,0,-25.4
0,17.687036,14.9496018,0,25.4,0,-25.4
0,17.1900342,15.222855,0,25.4,0,-25.4
0,16.7311578,15.55623,0,25.4,0,-25.4
0,16.317722,15.9444944,0,25.4,0,-25.4
0,15.9561784,16.3815014,0,25.4,0,-25.4
0,15.6522674,16.860393,0,25.4,0,-25.4
0,15.4107896,17.3736,0,25.4,0,-25.4
0,15.2355042,17.9130198,0,25.4,0,-25.4
0,15.1292306,18.4701434,0,25.4,0,-25.4
0,15.0936198,19.0362078,0,25.4,0,-25.4
0,15.1292306,19.6022722,0,25.4,0,-25.4
0,15.2355042,20.1593958,0,25.4,0,-25.4
0,15.4107896,20.6988156,0,25.4,0,-25.4
0,18.1163722,0.530352,0,25.4,0,-25.4
0,17.4814484,0.5615432,0,25.4,0,-25.4
0,16.8526714,0.654812,0,25.4,0,-25.4
0,16.236061,0.8092694,0,25.4,0,-25.4
0,15.6375354,1.0234168,0,25.4,0,-25.4
0,15.0629112,1.2951968,0,25.4,0,-25.4
0,14.5176748,1.6219932,0,25.4,0,-25.4
0,14.0071094,2.0006564,0,25.4,0,-25.4
0,13.5361172,2.4275542,0,25.4,0,-25.4
0,13.1092194,2.8985464,0,25.4,0,-25.4
0,12.7305562,3.4091372,0,25.4,0,-25.4
0,12.4037598,3.9543482,0,25.4,0,-25.4
0,12.1319798,4.5289978,0,25.4,0,-25.4
0,11.9178324,5.127498,0,25.4,0,-25.4
0,11.763375,5.7441084,0,25.4,0,-25.4
0,11.6701062,6.3729108,0,25.4,0,-25.4
0,11.638915,7.0078092,0,25.4,0,-25.4
0,11.6701062,7.6427076,0,25.4,0,-25.4
0,11.763375,8.2714846,0,25.4,0,-25.4
0,11.9178324,8.8881204,0,25.4,0,-25.4
0,12.1319798,9.4866206,0,25.4,0,-25.4
0,12.4037598,10.0612702,0,25.4,0,-25.4
0,12.7305562,10.6064812,0,25.4,0,-25.4
0,13.1092194,11.117072,0,25.4,0,-25.4
0,13.5361172,11.5880642,0,25.4,0,-25.4
0,14.0071094,12.0149366,0,25.4,0,-25.4
0,14.5176748,12.3936252,0,25.4,0,-25.4
0,15.0629112,12.7204216,0,25.4,0,-25.4
0,15.6375354,12.9922016,0,25.4,0,-25.4
0,16.236061,13.206349,0,25.4,0,-25.4
0,16.8526714,13.3608064,0,25.4,0,-25.4
0,17.4814484,13.4540752,0,25.4,0,-25.4
0,18.1163722,13.4852664,0,25.4,0,-25.4
0,14.3025876,16.7496744,0,25.4,0,-25.4
0,14.1946122,16.0217104,0,25.4,0,-25.4
0,14.0157962,15.3078434,0,25.4,0,-25.4
0,13.7678668,14.6149568,0,25.4,0,-25.4
0,13.453237,13.94968,0,25.4,0,-25.4
0,13.0748786,13.3184646,0,25.4,0,-25.4
0,12.6365,12.7273558,0,25.4,0,-25.4
0,12.1422922,12.1820686,0,25.4,0,-25.4
0,11.597005,11.6878608,0,25.4,0,-25.4
0,11.0058962,11.2494822,0,25.4,0,-25.4
0,10.3746808,10.8711492,0,25.4,0,-25.4
0,9.7094294,10.556494,0,25.4,0,-25.4
0,9.0165174,10.3085646,0,25.4,0,-25.4
0,8.3026504,10.1297486,0,25.4,0,-25.4
0,7.5746864,10.0217732,0,25.4,0,-25.4
0,6.8396612,9.9856544,0,25.4,0,-25.4
0,6.1046106,10.0217732,0,25.4,0,-25.4
0,5.376672,10.1297486,0,25.4,0,-25.4
0,4.662805,10.3085646,0,25.4,0,-25.4
0,3.969893,10.556494,0,25.4,0,-25.4
0,3.3046416,10.8711492,0,25.4,0,-25.4
0,2.6734008,11.2494822,0,25.4,0,-25.4
0,2.0823174,11.6878608,0,25.4,0,-25.4
0,1.5370302,12.1820686,0,25.4,0,-25.4
0,1.0428224,12.7273558,0,25.4,0,-25.4
0,0.6044184,13.3184646,0,25.4,0,-25.4
0,0.2260854,13.94968,0,25.4,0,-25.4
0,13.7678668,20.3544678,0,25.4,0,-25.4
0,14.0157962,19.6615558,0,25.4,0,-25.4
0,14.1946122,18.9476888,0,25.4,0,-25.4
0,14.3025876,18.2197502,0,25.4,0,-25.4
0,14.3387064,17.4846996,0,25.4,0,-25.4
0,25.3114302,14.6149568,0,25.4,0,-25.4
0,25.0635262,15.3078434,0,25.4,0,-25.4
0,24.8847102,16.0217104,0,25.4,0,-25.4
0,24.7767094,16.7496744,0,25.4,0,-25.4
0,24.740616,17.4846996,0,25.4,0,-25.4
0,24.7767094,18.2197502,0,25.4,0,-25.4
0,24.8847102,18.9476888,0,25.4,0,-25.4
0,25.0635262,19.6615558,0,25.4,0,-25.4
0,25.3114302,20.3544678,0,25.4,0,-25.4
0,24.090884,18.4701434,0,25.4,0,-25.4
0,23.984585,17.9130198,0,25.4,0,-25.4
0,23.809325,17.3736,0,25.4,0,-25.4
0,23.5678472,16.860393,0,25.4,0,-25.4
0,23.2639362,16.3815014,0,25.4,0,-25.4
0,22.9023926,15.9444944,0,25.4,0,-25.4
0,22.4889314,15.55623,0,25.4,0,-25.4
0,22.0300804,15.222855,0,25.4,0,-25.4
0,21.5330532,14.9496018,0,25.4,0,-25.4
0,21.0056984,14.7408138,0,25.4,0,-25.4
0,20.4563472,14.5997676,0,25.4,0,-25.4
0,19.8936356,14.528673,0,25.4,0,-25.4
0,19.3264536,14.528673,0,25.4,0,-25.4
0,18.7637674,14.5997676,0,25.4,0,-25.4
0,15.6522674,21.2120226,0,25.4,0,-25.4
0,15.9561784,21.6908888,0,25.4,0,-25.4
0,16.317722,22.1279212,0,25.4,0,-25.4
0,16.7311578,22.5161856,0,25.4,0,-25.4
0,17.1900342,22.8495606,0,25.4,0,-25.4
0,17.687036,23.1227884,0,25.4,0,-25.4
0,18.2143908,23.3315764,0,25.4,0,-25.4
0,18.7637674,23.472648,0,25.4,0,-25.4
0,19.3264536,23.5437172,0,25.4,0,-25.4
0,19.8936356,23.5437172,0,25.4,0,-25.4
0,20.4563472,23.472648,0,25.4,0,-25.4
0,21.0056984,23.3315764,0,25.4,0,-25.4
0,21.5330532,23.1227884,0,25.4,0,-25.4
0,22.0300804,22.8495606,0,25.4,0,-25.4
0,22.4889314,22.5161856,0,25.4,0,-25.4
0,22.9023926,22.1279212,0,25.4,0,-25.4
0,23.2639362,21.6908888,0,25.4,0,-25.4
0,23.5678472,21.2120226,0,25.4,0,-25.4
0,23.809325,20.6988156,0,25.4,0,-25.4
0,23.984585,20.1593958,0,25.4,0,-25.4
0,24.090884,19.6022722,0,25.4,0,-25.4
0,24.1264948,19.0362078,0,25.4,0,-25.4
0,24.5626128,6.3729108,0,25.4,0,-25.4
0,24.469344,5.7441084,0,25.4,0,-25.4
0,24.3148866,5.127498,0,25.4,0,-25.4
0,24.1007392,4.5289978,0,25.4,0,-25.4
0,23.8289592,3.9543482,0,25.4,0,-25.4
0,23.5021628,3.4091372,0,25.4,0,-25.4
0,23.1234996,2.8985464,0,25.4,0,-25.4
0,22.6966018,2.4275542,0,25.4,0,-25.4
0,22.2256096,2.0006564,0,25.4,0,-25.4
0,21.7150442,1.6219932,0,25.4,0,-25.4
0,21.1698078,1.2951968,0,25.4,0,-25.4
0,20.5951836,1.0234168,0,25.4,0,-25.4
0,19.996658,0.8092694,0,25.4,0,-25.4
0,19.3800476,0.654812,0,25.4,0,-25.4
0,18.7512706,0.5615432,0,25.4,0,-25.4
0,18.7512706,13.4540752,0,25.4,0,-25.4
0,19.3800476,13.3608064,0,25.4,0,-25.4
0,19.996658,13.206349,0,25.4,0,-25.4
0,20.5951836,12.9922016,0,25.4,0,-25.4
0,21.1698078,12.7204216,0,25.4,0,-25.4
0,21.7150442,12.3936252,0,25.4,0,-25.4
0,22.2256096,12.0149366,0,25.4,0,-25.4
0,22.6966018,11.5880642,0,25.4,0,-25.4
0,23.1234996,11.117072,0,25.4,0,-25.4
0,23.5021628,10.6064812,0,25.4,0,-25.4
0,23.8289592,10.0612702,0,25.4,0,-25.4
0,24.1007392,9.4866206,0,25.4,0,-25.4
0,24.3148866,8.8881204,0,25.4,0,-25.4
0,24.469344,8.2714846,0,25.4,0,-25.4
0,24.5626128,7.6427076,0,25.4,0,-25.4
0,24.593804,7.0078092,0,25.4,0,-25.4
0,12.6365,22.2420434,0,25.4,0,-25.4
0,13.0748786,21.65096,0,25.4,0,-25.4
0,13.453237,21.0197446,0,25.4,0,-25.4
0,0.2260854,21.0197446,0,25.4,0,-25.4
0,0.6044184,21.65096,0,25.4,0,-25.4
0,1.0428224,22.2420434,0,25.4,0,-25.4
0,1.5370302,22.7873306,0,25.4,0,-25.4
0,2.0823174,23.2815638,0,25.4,0,-25.4
0,2.6734008,23.7199424,0,25.4,0,-25.4
0,3.3046416,24.0982754,0,25.4,0,-25.4
0,3.969893,24.4129306,0,25.4,0,-25.4
0,4.662805,24.66086,0,25.4,0,-25.4
0,5.376672,24.839676,0,25.4,0,-25.4
0,6.1046106,24.9476514,0,25.4,0,-25.4
0,6.8396612,24.9837448,0,25.4,0,-25.4
0,7.5746864,24.9476514,0,25.4,0,-25.4
0,8.3026504,24.839676,0,25.4,0,-25.4
0,9.0165174,24.66086,0,25.4,0,-25.4
0,9.7094294,24.4129306,0,25.4,0,-25.4
0,10.3746808,24.0982754,0,25.4,0,-25.4
0,11.0058962,23.7199424,0,25.4,0,-25.4
0,11.597005,23.2815638,0,25.4,0,-25.4
0,12.1422922,22.7873306,0,25.4,0,-25.4
`));M(L.ParsePatFile(`
*CELTIC-01,CELTIC PATTERN 01
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
135,9.144,10.72444439,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.72444439,9.934222194,17.96051221,17.96051221,6.565564974,-29.35545945
315,9.934222194,14.67555561,17.96051221,17.96051221,2.235085954,-33.68593847
315,7.662333418,16.15722219,17.96051221,17.96051221,6.565564974,-29.35545945
225,19.31811122,10.82322219,17.96051221,17.96051221,2.235085954,-33.68593847
225,21.98511122,12.7,17.96051221,17.96051221,7.124336526,-28.7966879
225,21.68877781,8.452555612,17.96051221,17.96051221,2.235085954,-33.68593847
225,25.146,12.7,17.96051221,17.96051221,9.35942248,-26.56160194
225,19.31811122,18.52788878,17.96051221,17.96051221,2.235085954,-33.68593847
225,21.68877781,16.15722219,17.96051221,17.96051221,2.235085954,-33.68593847
90,25.146,22.91091405,0,25.4,2.235085954,-23.16491405
0,22.91091405,22.35214249,0,25.4,2.235085954,-23.16491405
0,21.33046966,22.91091405,0,25.4,3.815530342,-21.58446966
0,20.40466658,25.146,0,25.4,4.741333418,-20.65866658
90,22.91091405,21.33046966,0,25.4,1.021672836,-24.37832716
90,25.146,20.40466658,0,25.4,1.947475912,-23.45252409
180,2.489085954,25.146,0,25.4,2.235085954,-23.16491405
90,3.047857506,22.91091405,0,25.4,2.235085954,-23.16491405
90,2.489085954,21.33046966,0,25.4,3.815530342,-21.58446966
90,0.254,20.40466658,0,25.4,4.741333418,-20.65866658
180,4.069530342,22.91091405,0,25.4,1.021672836,-24.37832716
180,4.995333418,25.146,0,25.4,1.947475912,-23.45252409
270,0.254,2.489085954,0,25.4,2.235085954,-23.16491405
180,2.489085954,3.047857506,0,25.4,2.235085954,-23.16491405
180,4.069530342,2.489085954,0,25.4,3.815530342,-21.58446966
180,4.995333418,0.254,0,25.4,4.741333418,-20.65866658
270,2.489085954,4.069530342,0,25.4,1.021672836,-24.37832716
270,0.254,4.995333418,0,25.4,1.947475912,-23.45252409
45,17.83644439,13.09511122,17.96051221,17.96051221,10.3372727,-25.58375198
45,13.09511122,7.563555612,17.96051221,17.96051221,2.235085954,-33.68593847
45,10.82322219,6.081888776,17.96051221,17.96051221,6.565564974,-29.35545945
45,4.995333418,0.254,17.96051221,17.96051221,4.889250572,-31.03177385
45,16.256,14.67555561,17.96051221,17.96051221,9.41146962,-26.5095548
45,10.72444439,9.934222194,17.96051221,17.96051221,2.235085954,-33.68593847
45,9.242777806,7.662333418,17.96051221,17.96051221,6.565564974,-29.35545945
45,4.069530342,2.489085954,17.96051221,17.96051221,3.96344775,-31.95757693
45,16.94744439,21.68877781,17.96051221,17.96051221,4.889250572,-31.03177385
45,10.72444439,16.256,17.96051221,17.96051221,2.235085954,-33.68593847
45,3.711222194,9.242777806,17.96051221,17.96051221,2.235085954,-33.68593847
45,9.934222194,14.67555561,17.96051221,17.96051221,6.565564974,-29.35545945
45,0.254,4.995333418,17.96051221,17.96051221,10.3372727,-25.58375198
45,18.52788878,20.10833342,17.96051221,17.96051221,3.96344775,-31.95757693
45,6.081888776,6.872111224,17.96051221,17.96051221,2.235085954,-33.68593847
45,13.09511122,13.88533342,17.96051221,17.96051221,2.235085954,-33.68593847
45,11.51466658,13.09511122,17.96051221,17.96051221,6.565564974,-29.35545945
45,2.489085954,4.069530342,17.96051221,17.96051221,9.41146962,-26.5095548
0,22.91091405,0.254,0,25.4,2.235085954,-23.16491405
135,17.83644439,13.09511122,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.82322219,20.10833342,17.96051221,17.96051221,2.235085954,-33.68593847
135,12.30488878,17.83644439,17.96051221,17.96051221,10.3372727,-25.58375198
135,19.31811122,10.82322219,17.96051221,17.96051221,6.565564974,-29.35545945
135,25.146,4.995333418,17.96051221,17.96051221,4.889250572,-31.03177385
135,8.452555612,17.73766658,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.72444439,16.256,17.96051221,17.96051221,9.41146962,-26.5095548
135,15.46577781,10.72444439,17.96051221,17.96051221,2.235085954,-33.68593847
135,17.73766658,9.242777806,17.96051221,17.96051221,6.565564974,-29.35545945
135,22.91091405,4.069530342,17.96051221,17.96051221,3.96344775,-31.95757693
135,16.15722219,3.711222194,17.96051221,17.96051221,2.235085954,-33.68593847
135,3.711222194,16.94744439,17.96051221,17.96051221,4.889250572,-31.03177385
135,20.40466658,0.254,17.96051221,17.96051221,10.3372727,-25.58375198
135,18.52788878,6.081888776,17.96051221,17.96051221,2.235085954,-33.68593847
135,5.291666582,18.52788878,17.96051221,17.96051221,3.96344775,-31.95757693
135,21.33046966,2.489085954,17.96051221,17.96051221,9.41146962,-26.5095548
270,22.35214249,2.489085954,0,25.4,2.235085954,-23.16491405
270,22.91091405,4.069530342,0,25.4,3.815530342,-21.58446966
270,25.146,4.995333418,0,25.4,4.741333418,-20.65866658
0,21.33046966,2.489085954,0,25.4,1.021672836,-24.37832716
0,20.40466658,0.254,0,25.4,1.947475912,-23.45252409
135,25.146,12.7,17.96051221,17.96051221,4.889250572,-31.03177385
45,12.7,0.254,17.96051221,17.96051221,4.889250572,-31.03177385
315,6.872111224,5.291666582,17.96051221,17.96051221,2.235085954,-33.68593847
315,6.081888776,6.872111224,17.96051221,17.96051221,9.35942248,-26.56160194
315,0.254,12.7,17.96051221,17.96051221,4.889250572,-31.03177385
225,5.291666582,18.52788878,17.96051221,17.96051221,2.235085954,-33.68593847
225,6.872111224,19.31811122,17.96051221,17.96051221,9.35942248,-26.56160194
225,12.7,25.146,17.96051221,17.96051221,4.889250572,-31.03177385
135,18.52788878,20.10833342,17.96051221,17.96051221,2.235085954,-33.68593847
135,19.31811122,18.52788878,17.96051221,17.96051221,9.35942248,-26.56160194
135,21.98511122,12.7,17.96051221,17.96051221,2.654164618,-33.26685981
45,12.7,3.414888776,17.96051221,17.96051221,2.654164618,-33.26685981
315,9.242777806,7.662333418,17.96051221,17.96051221,2.235085954,-33.68593847
315,7.662333418,8.452555612,17.96051221,17.96051221,7.124336526,-28.7966879
315,3.414888776,12.7,17.96051221,17.96051221,2.654164618,-33.26685981
225,7.662333418,16.15722219,17.96051221,17.96051221,2.235085954,-33.68593847
225,8.452555612,17.73766658,17.96051221,17.96051221,7.124336526,-28.7966879
225,12.7,21.98511122,17.96051221,17.96051221,2.654164618,-33.26685981
135,16.15722219,17.73766658,17.96051221,17.96051221,2.235085954,-33.68593847
135,17.73766658,16.94744439,17.96051221,17.96051221,7.124336526,-28.7966879
`));M(L.ParsePatFile(`
*CELTIC-02,CELTIC PATTERN 02
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern,,,,,,
180,11.1371634,0.392662664,0,25.4,3.125672946,-22.27432705
270,25.00733734,11.1371634,0,25.4,3.125672946,-22.27432705
270,0.392662664,17.38850955,0,25.4,3.125672946,-22.27432705
180,17.38850955,25.00733734,0,25.4,3.125672946,-22.27432705
90,25.00733734,11.9185817,0,25.4,13.08875564,-12.31124436
270,25.00733734,7.230072408,0,25.4,6.837409744,-18.56259026
180,11.1371634,7.230072408,0,25.4,3.125672946,-22.27432705
180,13.4814183,8.011490454,0,25.4,9.18166439,-16.21833561
0,8.011490454,11.9185817,0,25.4,3.125672946,-22.27432705
0,4.29975391,11.1371634,0,25.4,9.18166439,-16.21833561
270,21.10024609,17.38850955,0,25.4,3.125672946,-22.27432705
270,21.88166439,21.88166439,0,25.4,9.96308269,-15.43691731
270,13.4814183,25.00733734,0,25.4,3.125672946,-22.27432705
270,18.16992759,25.00733734,0,25.4,3.125672946,-22.27432705
90,17.38850955,18.16992759,0,25.4,6.837409744,-18.56259026
90,18.16992759,8.011490454,0,25.4,3.125672946,-22.27432705
90,17.38850955,4.29975391,0,25.4,9.18166439,-16.21833561
90,14.2628366,18.16992759,0,25.4,6.837409744,-18.56259026
90,13.4814183,8.011490454,0,25.4,3.125672946,-22.27432705
90,14.2628366,4.29975391,0,25.4,9.18166439,-16.21833561
90,7.230072408,14.2628366,0,25.4,3.125672946,-22.27432705
90,7.230072408,0.392662664,0,25.4,3.125672946,-22.27432705
90,8.011490454,11.9185817,0,25.4,9.18166439,-16.21833561
90,8.011490454,0.392662664,0,25.4,6.837409744,-18.56259026
90,11.9185817,0.392662664,0,25.4,3.125672946,-22.27432705
90,11.9185817,14.2628366,0,25.4,3.125672946,-22.27432705
90,11.1371634,11.9185817,0,25.4,9.18166439,-16.21833561
90,11.1371634,0.392662664,0,25.4,6.837409744,-18.56259026
180,17.38850955,18.16992759,0,25.4,3.125672946,-22.27432705
180,3.51833561,18.16992759,0,25.4,3.125672946,-22.27432705
180,7.230072408,17.38850955,0,25.4,6.837409744,-18.56259026
180,21.10024609,17.38850955,0,25.4,9.18166439,-16.21833561
180,3.51833561,13.4814183,0,25.4,3.125672946,-22.27432705
180,7.230072408,14.2628366,0,25.4,6.837409744,-18.56259026
180,17.38850955,13.4814183,0,25.4,3.125672946,-22.27432705
180,21.10024609,14.2628366,0,25.4,9.18166439,-16.21833561
180,25.00733734,7.230072408,0,25.4,3.125672946,-22.27432705
180,25.00733734,8.011490454,0,25.4,6.837409744,-18.56259026
180,25.00733734,11.9185817,0,25.4,3.125672946,-22.27432705
180,25.00733734,11.1371634,0,25.4,6.837409744,-18.56259026
180,25.00733734,25.00733734,0,25.4,6.837409744,-18.56259026
0,11.9185817,0.392662664,0,25.4,13.08875564,-12.31124436
0,0.392662664,0.392662664,0,25.4,6.837409744,-18.56259026
270,0.392662664,13.4814183,0,25.4,13.08875564,-12.31124436
270,0.392662664,25.00733734,0,25.4,6.837409744,-18.56259026
180,13.4814183,25.00733734,0,25.4,13.08875564,-12.31124436
180,21.88166439,21.88166439,0,25.4,3.711736544,-21.68826346
90,21.88166439,3.51833561,0,25.4,3.711736544,-21.68826346
0,14.2628366,4.29975391,0,25.4,3.125672946,-22.27432705
0,11.9185817,3.51833561,0,25.4,9.96308269,-15.43691731
0,3.51833561,3.51833561,0,25.4,3.711736544,-21.68826346
270,4.29975391,11.1371634,0,25.4,3.125672946,-22.27432705
270,3.51833561,13.4814183,0,25.4,9.96308269,-15.43691731
270,3.51833561,21.88166439,0,25.4,3.711736544,-21.68826346
180,11.1371634,21.10024609,0,25.4,3.125672946,-22.27432705
180,13.4814183,21.88166439,0,25.4,9.96308269,-15.43691731
`));M(L.ParsePatFile(`
*CELTIC-03,CELTIC-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,6.35,13.97,0,25.4,5.08,-20.32
90,19.05,6.35,0,25.4,5.08,-20.32
0,6.35,6.35,0,25.4,12.7,-12.7
270,6.35,11.43,0,25.4,5.08,-20.32
90,3.81,3.81,0,25.4,7.62,-17.78
180,21.59,3.81,0,25.4,17.78,-7.62
270,21.59,11.43,0,25.4,7.62,-17.78
270,21.59,21.59,0,25.4,7.62,-17.78
0,3.81,21.59,0,25.4,17.78,-7.62
90,3.81,13.97,0,25.4,7.62,-17.78
270,19.05,19.05,0,25.4,5.08,-20.32
0,6.35,19.05,0,25.4,12.7,-12.7
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`));M(L.ParsePatFile(`
*CELTIC-04,CELTIC-04
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,3.81,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
135,21.59,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
45,12.7,2.54,17.960512212,17.960512212,12.57235865,-23.348666028
315,3.81,11.43,17.960512212,17.960512212,12.57235865,-23.348666028
135,12.7,5.08,17.960512212,17.960512212,8.980256106,-26.940768318
225,19.05,11.43,17.960512212,17.960512212,8.980256106,-26.940768318
315,12.7,20.32,17.960512212,17.960512212,8.980256106,-26.940768318
45,6.35,13.97,17.960512212,17.960512212,8.980256106,-26.940768318
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`));M(L.ParsePatFile(`
*CIRCLES-02,CIRCLES-02
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,24.3609368,11.9663464,0,25.4,0,-25.4
0,24.2918742,11.2356138,0,25.4,0,-25.4
0,24.1770408,10.510647,0,25.4,0,-25.4
0,24.0169192,9.7943162,0,25.4,0,-25.4
0,23.8121444,9.0894408,0,25.4,0,-25.4
0,23.5635038,8.3988402,0,25.4,0,-25.4
0,23.271988,7.7252068,0,25.4,0,-25.4
0,22.9387654,7.0711822,0,25.4,0,-25.4
0,22.5651314,6.439408,0,25.4,0,-25.4
0,22.1525592,5.8323226,0,25.4,0,-25.4
0,21.7026744,5.252339,0,25.4,0,-25.4
0,21.2172804,4.7017432,0,25.4,0,-25.4
0,20.6982568,4.1827196,0,25.4,0,-25.4
0,20.147661,3.6973256,0,25.4,0,-25.4
0,19.5676774,3.2474408,0,25.4,0,-25.4
0,18.960592,2.8348686,0,25.4,0,-25.4
0,18.3288178,2.4612346,0,25.4,0,-25.4
0,17.6747932,2.128012,0,25.4,0,-25.4
0,17.0011598,1.8364962,0,25.4,0,-25.4
0,16.3105592,1.5878556,0,25.4,0,-25.4
0,15.6056838,1.3830808,0,25.4,0,-25.4
0,14.889353,1.2229592,0,25.4,0,-25.4
0,14.1643862,1.1081258,0,25.4,0,-25.4
0,13.4336536,1.0390632,0,25.4,0,-25.4
0,12.7,1.016,0,25.4,0,-25.4
0,11.9663464,1.0390632,0,25.4,0,-25.4
0,11.2356138,1.1081258,0,25.4,0,-25.4
0,10.510647,1.2229592,0,25.4,0,-25.4
0,9.7943162,1.3830808,0,25.4,0,-25.4
0,9.0894408,1.5878556,0,25.4,0,-25.4
0,8.3988402,1.8364962,0,25.4,0,-25.4
0,7.7252068,2.128012,0,25.4,0,-25.4
0,7.0711822,2.4612346,0,25.4,0,-25.4
0,6.439408,2.8348686,0,25.4,0,-25.4
0,5.8323226,3.2474408,0,25.4,0,-25.4
0,5.252339,3.6973256,0,25.4,0,-25.4
0,4.7017432,4.1827196,0,25.4,0,-25.4
0,4.1827196,4.7017432,0,25.4,0,-25.4
0,3.6973256,5.252339,0,25.4,0,-25.4
0,3.2474408,5.8323226,0,25.4,0,-25.4
0,2.8348686,6.439408,0,25.4,0,-25.4
0,2.4612346,7.0711822,0,25.4,0,-25.4
0,2.128012,7.7252068,0,25.4,0,-25.4
0,1.8364962,8.3988402,0,25.4,0,-25.4
0,1.5878556,9.0894408,0,25.4,0,-25.4
0,1.3830808,9.7943162,0,25.4,0,-25.4
0,1.2229592,10.510647,0,25.4,0,-25.4
0,1.1081258,11.2356138,0,25.4,0,-25.4
0,1.0390632,11.9663464,0,25.4,0,-25.4
0,1.016,12.7,0,25.4,0,-25.4
0,1.0390632,13.4336536,0,25.4,0,-25.4
0,1.1081258,14.1643862,0,25.4,0,-25.4
0,1.2229592,14.889353,0,25.4,0,-25.4
0,1.3830808,15.6056838,0,25.4,0,-25.4
0,1.5878556,16.3105592,0,25.4,0,-25.4
0,1.8364962,17.0011598,0,25.4,0,-25.4
0,2.128012,17.6747932,0,25.4,0,-25.4
0,2.4612346,18.3288178,0,25.4,0,-25.4
0,2.8348686,18.960592,0,25.4,0,-25.4
0,3.2474408,19.5676774,0,25.4,0,-25.4
0,3.6973256,20.147661,0,25.4,0,-25.4
0,4.1827196,20.6982568,0,25.4,0,-25.4
0,4.7017432,21.2172804,0,25.4,0,-25.4
0,5.252339,21.7026744,0,25.4,0,-25.4
0,5.8323226,22.1525592,0,25.4,0,-25.4
0,6.439408,22.5651314,0,25.4,0,-25.4
0,7.0711822,22.9387654,0,25.4,0,-25.4
0,7.7252068,23.271988,0,25.4,0,-25.4
0,8.3988402,23.5635038,0,25.4,0,-25.4
0,9.0894408,23.8121444,0,25.4,0,-25.4
0,9.7943162,24.0169192,0,25.4,0,-25.4
0,10.510647,24.1770408,0,25.4,0,-25.4
0,11.2356138,24.2918742,0,25.4,0,-25.4
0,11.9663464,24.3609368,0,25.4,0,-25.4
0,12.7,24.384,0,25.4,0,-25.4
0,13.4336536,24.3609368,0,25.4,0,-25.4
0,14.1643862,24.2918742,0,25.4,0,-25.4
0,14.889353,24.1770408,0,25.4,0,-25.4
0,15.6056838,24.0169192,0,25.4,0,-25.4
0,16.3105592,23.8121444,0,25.4,0,-25.4
0,17.0011598,23.5635038,0,25.4,0,-25.4
0,17.6747932,23.271988,0,25.4,0,-25.4
0,18.3288178,22.9387654,0,25.4,0,-25.4
0,18.960592,22.5651314,0,25.4,0,-25.4
0,19.5676774,22.1525592,0,25.4,0,-25.4
0,20.147661,21.7026744,0,25.4,0,-25.4
0,20.6982568,21.2172804,0,25.4,0,-25.4
0,21.2172804,20.6982568,0,25.4,0,-25.4
0,21.7026744,20.147661,0,25.4,0,-25.4
0,22.1525592,19.5676774,0,25.4,0,-25.4
0,22.5651314,18.960592,0,25.4,0,-25.4
0,22.9387654,18.3288178,0,25.4,0,-25.4
0,23.271988,17.6747932,0,25.4,0,-25.4
0,23.5635038,17.0011598,0,25.4,0,-25.4
0,23.8121444,16.3105592,0,25.4,0,-25.4
0,24.0169192,15.6056838,0,25.4,0,-25.4
0,24.1770408,14.889353,0,25.4,0,-25.4
0,24.2918742,14.1643862,0,25.4,0,-25.4
0,24.3609368,13.4336536,0,25.4,0,-25.4
0,24.384,12.7,0,25.4,0,-25.4
`));M(L.ParsePatFile(`
*CIRCLES,CIRCLES
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,23.7384082,10.9516926,0,25.4,0,-25.4
0,23.329011,9.2464382,0,25.4,0,-25.4
0,22.6578922,7.6261976,0,25.4,0,-25.4
0,21.7415618,6.1308996,0,25.4,0,-25.4
0,20.6026258,4.7973742,0,25.4,0,-25.4
0,19.2691004,3.6584382,0,25.4,0,-25.4
0,17.7738024,2.7421078,0,25.4,0,-25.4
0,16.1535618,2.070989,0,25.4,0,-25.4
0,14.4483074,1.6615918,0,25.4,0,-25.4
0,12.7,1.524,0,25.4,0,-25.4
0,10.9516926,1.6615918,0,25.4,0,-25.4
0,9.2464382,2.070989,0,25.4,0,-25.4
0,7.6261976,2.7421078,0,25.4,0,-25.4
0,6.1308996,3.6584382,0,25.4,0,-25.4
0,4.7973742,4.7973742,0,25.4,0,-25.4
0,3.6584382,6.1308996,0,25.4,0,-25.4
0,2.7421078,7.6261976,0,25.4,0,-25.4
0,2.070989,9.2464382,0,25.4,0,-25.4
0,1.6615918,10.9516926,0,25.4,0,-25.4
0,1.524,12.7,0,25.4,0,-25.4
0,1.6615918,14.4483074,0,25.4,0,-25.4
0,2.070989,16.1535618,0,25.4,0,-25.4
0,2.7421078,17.7738024,0,25.4,0,-25.4
0,3.6584382,19.2691004,0,25.4,0,-25.4
0,4.7973742,20.6026258,0,25.4,0,-25.4
0,6.1308996,21.7415618,0,25.4,0,-25.4
0,7.6261976,22.6578922,0,25.4,0,-25.4
0,9.2464382,23.329011,0,25.4,0,-25.4
0,10.9516926,23.7384082,0,25.4,0,-25.4
0,12.7,23.876,0,25.4,0,-25.4
0,14.4483074,23.7384082,0,25.4,0,-25.4
0,16.1535618,23.329011,0,25.4,0,-25.4
0,17.7738024,22.6578922,0,25.4,0,-25.4
0,19.2691004,21.7415618,0,25.4,0,-25.4
0,20.6026258,20.6026258,0,25.4,0,-25.4
0,21.7415618,19.2691004,0,25.4,0,-25.4
0,22.6578922,17.7738024,0,25.4,0,-25.4
0,23.329011,16.1535618,0,25.4,0,-25.4
0,23.7384082,14.4483074,0,25.4,0,-25.4
0,23.876,12.7,0,25.4,0,-25.4
`));M(L.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,4.7625
0, 0,.79375, 0,4.7625
0, 0,1.5875, 0,4.7625
0, 0,3.175, 0,4.7625, 4.7625,-3.175
`));M(L.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,3.175
135, 1.5875,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 2.38125,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 3.175,-1.5875, 0,8.98026, 4.49013,-4.49013
`));M(L.ParsePatFile(`
*CROSS,CROSS
0, 0,0, 6.35,6.35, 3.175,-9.525
90, 1.5875,-1.5875, 6.35,6.35, 3.175,-9.525
`));M(L.ParsePatFile(`
*DASH,DASH
0, 0,0, 3.175,3.175, 3.175,-3.175
`));M(L.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,6.35
45, 0,0, 0,17.9605, 8.98026,-17.9605
`));M(L.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .79375,1.5875, 0,-1.5875
`));M(L.ParsePatFile(`
*EARTH,EARTH
0, 0,0, 6.35,6.35, 6.35,-6.35
0, 0,2.38125, 6.35,6.35, 6.35,-6.35
0, 0,4.7625, 6.35,6.35, 6.35,-6.35
90, .79375,5.55625, 6.35,6.35, 6.35,-6.35
90, 3.175,5.55625, 6.35,6.35, 6.35,-6.35
90, 5.55625,5.55625, 6.35,6.35, 6.35,-6.35
`));M(L.ParsePatFile(`
*ESCHER,ESCHER
60, 0,0, -15.24,26.3965, 27.94,-2.54
180, 0,0, -15.24,26.3965, 27.94,-2.54
300, 0,0, 15.24,26.3965, 27.94,-2.54
60, 2.54,0, -15.24,26.3965, 5.08,-25.4
300, 2.54,0, 15.24,26.3965, 5.08,-25.4
60, -1.27,2.1997, -15.24,26.3965, 5.08,-25.4
180, -1.27,2.1997, -15.24,26.3965, 5.08,-25.4
300, -1.27,-2.1997, 15.24,26.3965, 5.08,-25.4
180, -1.27,-2.1997, -15.24,26.3965, 5.08,-25.4
60, -10.16,0, -15.24,26.3965, 5.08,-25.4
300, -10.16,0, 15.24,26.3965, 5.08,-25.4
60, 5.08,-8.79882, -15.24,26.3965, 5.08,-25.4
180, 5.08,-8.79882, -15.24,26.3965, 5.08,-25.4
300, 5.08,8.79882, 15.24,26.3965, 5.08,-25.4
180, 5.08,8.79882, -15.24,26.3965, 5.08,-25.4
0, 5.08,4.39941, -15.24,26.3965, 17.78,-12.7
0, 5.08,-4.39941, -15.24,26.3965, 17.78,-12.7
120, 1.27,6.59911, 15.24,26.3965, 17.78,-12.7
120, -6.35,2.1997, 15.24,26.3965, 17.78,-12.7
240, -6.35,-2.1997, 15.24,26.3965, 17.78,-12.7
240, 1.27,-6.59911, 15.24,26.3965, 17.78,-12.7
`));M(L.ParsePatFile(`
*EXPLOSION,EXPLOSION
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
270,11.43,2.794,0,25.4,2.794,-22.606
143.130102,12.446,2.032,91.44,5.08,1.27,-125.73
270,12.446,4.318,0,25.4,2.286,-23.114
112.380135,14.224,0,330.1971097,1.381577882,4.669733104,-462.3035852
75.256437,12.954,20.574,104.7189028,1.292825964,4.990308282,-494.0405126
287.525568,11.43,25.4,80.31173574,1.274789424,5.060914186,-501.0305006
135,1.524,12.446,17.96051221,17.96051221,2.155261374,-33.76576305
26.565051,0,11.684,34.07767607,11.35922544,1.703883816,-55.09224288
353.884496,18.288,12.446,485.2654803,0.901980416,7.152705024,-708.1177892
192.094757,25.4,13.97,234.1697095,1.774012962,7.273453068,-356.3992019
3.691386,17.526,9.652,381.8448525,0.817654956,7.890370046,-781.1466379
136.080924,24.384,3.048,916.1619403,0.677634662,9.52076582,-942.5558068
336.037511,22.098,4.064,193.4234445,2.578979348,2.501609932,-247.6593782
123.690068,24.638,0.254,35.22346245,7.04469254,4.579050024,-87.00195223
324.462322,15.748,6.604,91.53339072,2.952690056,10.924953,-207.5741086
117.645975,18.542,1.27,545.3600756,1.07143423,6.021460906,-596.1246343
326.309932,13.97,4.318,56.35753981,7.04469254,5.494860232,-86.08614228
106.38954,15.24,0,265.1799113,1.433404804,4.50089143,-445.5882554
153.434949,3.048,8.636,22.71845063,11.35922544,3.407767632,-53.38835906
64.798876,1.016,4.318,420.4426387,1.351905602,4.772226676,-472.4504468
202.619865,4.064,5.588,193.4307693,1.953846232,3.302,-326.898
59.036243,2.54,3.048,56.62883289,4.356064186,2.962123616,-145.1440546
211.75948,7.874,6.35,239.620914,1.028416028,6.273337212,-621.0603858
79.215702,6.858,1.016,413.4803361,1.188161962,5.429899732,-537.5600816
212.471192,9.652,2.794,91.56028043,1.9480911,3.31175487,-327.8637273
63.434949,8.89,1.27,22.71845063,11.35922544,1.703883816,-55.09224288
135,10.16,0,17.96051221,17.96051221,1.796051272,-34.12497315
74.357754,8.382,19.05,474.5101503,0.978371424,6.59422354,-652.8281297
333.434949,0.762,22.86,22.71845063,11.35922544,8.51941908,-48.27670761
110.556045,4.572,12.7,136.7508764,2.97284521,10.85088483,-206.1668104
330.945396,0,15.24,56.74251999,2.467066186,5.23018004,-256.2788255
99.462322,16.002,20.828,129.4477627,4.175734346,4.635065152,-149.8671031
222.70939,19.304,23.876,35.89232217,1.435692836,4.493718724,-444.8781539
74.744881,18.542,21.082,104.7031863,2.22772732,2.896045516,-286.7085124
208.61046,24.13,24.13,261.5011486,2.027140726,6.365221712,-311.8958659
62.744672,19.812,15.748,56.79200478,0.684240948,9.428841188,-933.4552873
212.275644,24.638,18.796,331.1735533,1.130285268,5.70794007,-565.0860682
55.00798,22.86,16.256,91.55735943,2.080849026,3.100465224,-306.9460475
158.198591,25.4,15.24,80.18324705,4.716661636,2.73566382,-134.0475224
51.911227,14.986,12.954,741.8363621,0.540303212,11.9407018,-1182.12948
153.434949,16.51,12.192,22.71845063,11.35922544,1.703883816,-55.09224288
35.537678,14.732,10.922,126.9656711,2.952690056,2.18499055,-216.3140711
129.289407,19.304,5.334,198.3722919,1.78713765,7.220036614,-353.7817918
322.30576,13.716,9.652,416.5899728,0.9135745,7.061931012,-699.1311588
77.905243,12.954,6.096,129.5029455,1.774012962,3.636726534,-360.0359284
282.994617,12.192,9.398,104.709577,1.903810518,3.388782656,-335.4894845
62.525568,8.89,3.048,56.78897304,0.901412218,7.157213524,-708.564129
267.137595,9.144,8.128,25.36830944,1.268415548,5.086345936,-503.5482576
12.994617,2.54,6.604,104.709577,1.903810518,6.777565312,-332.1007018
211.75948,7.874,9.906,239.620914,1.028416028,6.273337212,-621.0603858
318.366461,5.588,11.938,269.9974641,2.109355192,3.05856513,-302.7979372
189.462322,7.112,12.192,129.4477627,4.175734346,1.545021802,-152.9571465
297.299572,3.048,20.066,829.3009284,0.728095572,8.860923858,-877.231464
132.273689,8.128,14.478,35.8803669,1.708588912,7.551962798,-370.0461832
282.994617,7.366,17.78,104.709577,1.903810518,3.388782656,-335.4894845
140.194429,10.414,15.24,162.6068376,3.252136752,3.967606746,-194.4127349
268.363423,10.668,24.13,25.38963909,0.725418158,8.893627882,-880.4691552
102.200469,12.7,14.732,597.8446202,0.67098164,9.615166444,-951.9014896
250.016893,14.732,20.32,80.29253258,2.170068558,5.9459876,-291.3533901
84.559668,14.224,14.986,280.549586,1.20407557,5.358135842,-530.4554512
222.184443,22.352,22.352,377.597688,0.588158336,10.96915408,-1085.946248
`));M(L.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,6.35, 6.35,-6.35
45, 6.35,0, 4.49013,4.49013, 1.5875,-5.80526,1.5875,-8.98026
`));M(L.ParsePatFile(`
*GRASS,GRASS
90, 0,0, 17.9605,17.9605, 4.7625,-31.1585
45, 0,0, 0,25.4, 4.7625,-20.6375
135, 0,0, 0,25.4, 4.7625,-20.6375
`));M(L.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.79375
90, 0,0, 0,3.175
`));M(L.ParsePatFile(`
*GRAVEL-01,GRAVEL-01
;Optimize to replace existing GRAVEL Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
159.443955,4.064,3.302,80.266818638,2.97284521,4.340353778,-212.677341218
114.775141,5.588,0,56.76841453,1.774012962,3.636726534,-360.03592839
249.443955,8.128,2.032,80.266818638,2.97284521,2.170177016,-214.847518234
186.009006,12.954,2.54,230.002940044,1.329496706,4.852663142,-480.413655376
165.963757,18.034,1.27,24.6416195,6.160405002,5.236344112,-99.490538636
101.309932,18.288,0,104.608346536,4.981349956,1.29515108,-128.219944728
243.434949,21.336,3.556,22.718450626,11.35922544,3.975728904,-52.820397788
355.426079,12.446,3.302,331.173933536,1.012764294,6.370287488,-630.658471472
300.256437,10.668,6.35,148.094892532,1.828332132,3.528680776,-349.33939657
228.012788,15.24,11.43,305.850675318,1.887967014,6.834440992,-334.887609878
180,21.844,11.43,0,25.4,6.604,-18.796
303.690068,15.748,15.748,35.223462446,7.04469254,3.66324007,-87.917762188
225,18.288,18.288,17.960512212,17.960512212,3.592102544,-32.328922134
110.224859,2.032,5.842,217.014069654,1.254416592,5.143108078,-509.167692864
177.273689,7.366,5.588,25.371250756,1.20815481,5.340044184,-528.664375232
217.69424,12.954,9.906,289.603117008,0.9135745,7.061931012,-699.131158758
252.255328,14.986,16.256,586.403737782,0.967663038,6.667197486,-660.05256356
301.429566,12.192,20.828,387.712303314,1.20407557,5.358135842,-530.455451152
355.236358,6.096,21.336,25.312262304,2.109355192,6.117130006,-299.739372326
43.66778,0.508,16.002,35.911314766,0.83514692,7.725108502,-764.785732808
87.273689,0.254,10.668,25.371250756,1.20815481,5.340044184,-528.664375232
30.963757,15.748,18.034,91.477345366,4.356064186,4.443185424,-143.662992836
291.801409,14.732,20.574,56.599939124,4.716661636,2.73566382,-134.047522354
203.198591,16.51,21.336,56.698117744,3.335183322,1.934406342,-191.506230398
161.565051,19.558,20.32,24.09655582,8.032185358,3.212874194,-77.10897837
4.969741,10.16,22.352,280.550012686,1.100196174,5.864045422,-580.540490682
16.38954,0,20.574,265.179911346,1.433404804,4.50089143,-445.58825538
197.354025,25.4,4.826,80.307559222,1.515237,4.25781597,-421.523771378
74.054604,24.13,5.588,104.668749768,3.488958224,3.69829588,-181.216495326
27.645975,18.796,2.794,545.360075648,1.07143423,6.021460906,-596.124634266
145.304846,25.146,9.144,91.566911862,1.60643697,4.016092552,-397.593170268
353.157227,17.78,12.7,434.77679618,1.008762778,6.395556678,-633.160101724
171.469234,23.368,17.526,179.600730968,1.255949228,5.136831992,-508.546377622
138.814075,25.4,15.748,234.164238554,2.389431086,2.700057084,-267.30564649
90,25.4,14.224,0,25.4,1.524,-23.876
60.945396,24.13,11.938,56.742519992,2.467066186,2.61509002,-258.893915536
343.61046,21.082,21.844,184.909235464,1.433404804,4.50089143,-445.58825538
293.198591,19.558,25.4,56.698117744,3.335183322,3.868812684,-189.571824056
48.012788,16.002,22.86,305.850675318,1.887967014,3.417220496,-338.304830374
312.510447,7.366,25.4,35.887120758,1.560309554,4.134820534,-409.347222706
70.346176,4.318,21.844,80.303678102,1.708588912,3.775981526,-373.822164724
`));M(L.ParsePatFile(`
*GRAVEL,GRAVEL
228.0128, 18.288,25.4, 305.851,1.88796, 3.41721,-338.305
184.9697, 16.002,22.86, -305.855,1.1002, 5.86405,-580.54
132.5104, 10.16,22.352, -377.595,1.56032, 4.13482,-409.347
267.2737, .254,16.002, -508.633,1.20815, 5.34005,-528.664
292.8337, 0,10.668, -330.198,1.23208, 5.23634,-518.398
357.2737, 2.032,5.842, -508.633,1.20815, 5.34005,-528.664
37.6942, 7.366,5.588, -416.59,.913587, 7.06194,-699.131
72.2553, 12.954,9.906, 586.404,.967664, 6.6672,-660.053
121.4296, 14.986,16.256, 387.712,1.20409, 5.35813,-530.455
175.2364, 12.192,20.828, -280.544,2.10934, 6.11713,-299.739
222.3974, 6.096,21.336, 413.481,.815543, 7.91078,-783.168
138.8141, 25.4,15.748, 234.164,2.38943, 2.70005,-267.306
171.4692, 23.368,17.526, -334.082,1.25595, 5.13682,-508.546
225, 18.288,18.288, 17.9605,17.9605, 3.59209,-32.3289
203.1986, 16.51,21.336, -136.743,3.33517, 1.93441,-191.506
291.8014, 14.732,20.574, -80.1833,4.71665, 2.73566,-134.048
30.9638, 15.748,18.034, 91.4773,4.35607, 4.4432,-143.663
161.5651, 19.558,20.32, -56.2253,8.03219, 3.21287,-77.109
16.3895, 0,20.574, 265.18,1.4334, 4.50088,-445.588
70.3462, 4.318,21.844, -297.294,1.70858, 3.77599,-373.822
293.1986, 19.558,25.4, -136.743,3.33517, 3.8688,-189.572
343.6105, 21.082,21.844, -265.18,1.4334, 4.50088,-445.588
339.444, 0,4.826, -136.751,2.97284, 4.34035,-212.677
294.7751, 4.064,3.302, -306.904,1.77401, 3.63672,-360.036
66.8014, 19.812,0, 136.743,3.33517, 3.8688,-189.572
17.354, 21.336,3.556, -345.474,1.51524, 4.25783,-421.524
69.444, 7.366,0, -136.751,2.97284, 2.17018,-214.848
101.3099, 18.288,0, 104.608,4.98135, 1.29515,-128.22
165.9638, 18.034,1.27, -80.0853,6.16041, 5.23634,-99.4905
186.009, 12.954,2.54, -255.263,1.32949, 4.85267,-480.414
303.6901, 15.748,15.748, -56.3575,7.04469, 3.66324,-87.9178
353.1572, 17.78,12.7, 434.777,1.00876, 6.39557,-633.16
60.9454, 24.13,11.938, -204.766,2.46708, 2.61508,-258.894
90, 25.4,14.224, 25.4,25.4, 1.524,-23.876
120.2564, 12.446,3.302, -204.773,1.82834, 3.52867,-349.339
48.0128, 10.668,6.35, 305.851,1.88796, 6.83443,-334.888
0, 15.24,11.43, 25.4,25.4, 6.604,-18.796
325.3048, 21.844,11.43, -310.042,1.60645, 4.0161,-397.593
254.0546, 25.146,9.144, 104.669,3.48897, 3.69829,-181.217
207.646, 24.13,5.588, 545.36,1.07142, 6.02145,-596.125
175.4261, 18.796,2.794, 331.174,1.01277, 6.37029,-630.658
175.4261, 18.796,2.794, 331.174,1.01277, 6.37029,-630.658
`));M(L.ParsePatFile(`
*HATCH-DOTS
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
225,14.364914374,2.934914374,17.960512212,17.960512212,11.492295278,-24.428729146
225,6.359242552,5.089242552,17.960512212,17.960512212,16.19060262,-19.730421804
225,3.281299762,9.631299762,17.960512212,17.960512212,18.261173282,-17.659851142
225,19.161365538,5.191365538,17.960512212,17.960512212,11.492295278,-24.428729146
225,7.864421914,4.054421914,17.960512212,17.960512212,16.85579052,-19.065234158
225,2.841461932,11.731461932,17.960512212,17.960512212,20.609227006,-15.311797418
225,9.631299762,3.281299762,17.960512212,17.960512212,18.261173282,-17.659851142
225,2.934914374,14.364914374,17.960512212,17.960512212,11.492295278,-24.428729146
225,5.089242552,6.359242552,17.960512212,17.960512212,16.19060262,-19.730421804
225,11.731462186,2.841462186,17.960512212,17.960512212,20.60922726,-15.311797164
225,5.191365538,19.161365538,17.960512212,17.960512212,11.492295278,-24.428729146
225,4.054421914,7.864421914,17.960512212,17.960512212,16.85579052,-19.065234158
`));M(L.ParsePatFile(`
*HATCH-SQRS
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
225,2.794,9.144,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,21.844,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,6.604,17.960512212,17.960512212,13.290779108,-22.630245316
225,19.304,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,14.224,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,11.684,17.960512212,17.960512212,7.902625292,-28.018399132
225,6.604,2.794,17.960512212,17.960512212,13.290779108,-22.630245316
225,2.794,19.304,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,4.064,17.960512212,17.960512212,9.698676564,-26.22234786
225,4.064,2.794,17.960512212,17.960512212,9.698676564,-26.22234786
225,11.684,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,14.224,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,9.144,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,21.844,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,16.764,17.960512212,17.960512212,7.902625292,-28.018399132
225,16.764,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
`));M(L.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,5.49926, 3.175,-6.35
120, 0,0, 0,5.49926, 3.175,-6.35
60, 3.175,0, 0,5.49926, 3.175,-6.35
`));M(L.ParsePatFile(`
*HEXAGONS
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
239.931417,5.587999746,25.399999492,204.778078632,1.15693825,5.576441984,-552.067817376
239.931417,22.606,4.826,204.778078632,1.15693825,5.576441984,-552.067817376
300.068583,19.812000254,25.399999492,352.866180728,1.15693825,5.576441984,-552.067817376
60.068488,3.048,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
119.931512,7.874,4.318,762.42292397,0.667036766,9.67203171,-957.531152498
300.068583,2.794,4.826,352.866180728,1.15693825,5.576441984,-552.067817376
180,2.794,4.826,0,25.4,5.587998984,-19.812001016
299.931512,17.526,21.082,762.42292397,0.667036766,9.67203171,-957.531152498
0,7.874,21.082,0,25.4,9.652,-15.748
180,17.526,4.318,0,25.4,9.652,-15.748
240.068488,22.352,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
180,2.794,20.574,0,25.4,5.587998984,-19.812001016
`));M(L.ParsePatFile(`
*HEXJOIN-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
45,3.81,16.51,17.960512212,17.960512212,7.184204834,-28.73681959
270,21.59,16.51,25.4,25.4,7.62,-17.78
315,16.51,21.59,17.960512212,17.960512212,7.184204834,-28.73681959
180,16.51,3.81,0,25.4,7.62,-17.78
270,13.97,3.81,25.4,25.4,7.62,-17.78
90,3.81,8.89,25.4,25.4,7.62,-17.78
135,8.89,3.81,17.960512212,17.960512212,7.184204834,-28.73681959
180,3.81,13.97,0,25.4,7.62,-17.78
270,11.43,3.81,25.4,25.4,7.62,-17.78
180,3.81,11.43,0,25.4,7.62,-17.78
225,21.59,8.89,17.960512212,17.960512212,7.184204834,-28.73681959
0,8.89,21.59,0,25.4,7.62,-17.78
`));M(L.ParsePatFile(`
*HEXJOIN-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,21.59,11.43,25.4,25.4,2.54,-22.86
315,16.51,21.59,17.960512212,17.960512212,7.184204834,-28.73681959
270,13.97,3.81,25.4,25.4,7.62,-17.78
180,3.81,13.97,0,25.4,7.62,-17.78
180,16.51,3.81,0,25.4,2.54,-22.86
45,3.81,16.51,17.960512212,17.960512212,7.184204834,-28.73681959
90,3.81,13.97,25.4,25.4,2.54,-22.86
180,3.81,11.43,0,25.4,7.62,-17.78
180,11.43,3.81,0,25.4,2.54,-22.86
270,11.43,3.81,25.4,25.4,7.62,-17.78
90,3.81,8.89,25.4,25.4,2.54,-22.86
0,13.97,21.59,0,25.4,2.54,-22.86
135,8.89,3.81,17.960512212,17.960512212,7.184204834,-28.73681959
0,8.89,21.59,0,25.4,2.54,-22.86
225,21.59,8.89,17.960512212,17.960512212,7.184204834,-28.73681959
270,21.59,16.51,25.4,25.4,2.54,-22.86
`));M(L.ParsePatFile(`
*HOLLY,HOLLY
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
99.462322,20.32,2.794,129.4477627,4.175734346,1.545021802,-152.9571465
74.744881,17.018,2.032,104.7031863,2.22772732,2.896045516,-286.7085124
68.198591,13.462,3.81,80.18324705,4.716661636,2.73566382,-134.0475224
270,14.732,9.398,0,25.4,1.778,-23.622
248.198591,19.05,8.89,80.18324705,4.716661636,2.73566382,-134.0475224
45,20.32,5.08,17.96051221,17.96051221,2.155261374,-33.76576305
351.869898,22.86,3.302,25.14471705,3.592102544,1.796051272,-177.8090711
0,21.844,3.302,0,25.4,1.016,-24.384
26.565051,20.828,2.794,34.07767607,11.35922544,1.135922544,-55.66020415
45,20.32,2.286,17.96051221,17.96051221,0.718420458,-35.20260397
341.565051,19.558,2.54,24.09655582,8.032185358,0.803218612,-79.51863395
0,18.542,2.54,0,25.4,1.016,-24.384
26.565051,18.034,2.286,34.07767607,11.35922544,0.567961272,-56.22816542
26.565051,17.526,2.032,34.07767607,11.35922544,0.567961272,-56.22816542
53.130102,16.764,1.016,91.44,5.08,1.27,-125.73
270,16.764,2.032,0,25.4,1.016,-24.384
303.690068,16.256,2.794,35.22346245,7.04469254,0.915809954,-90.6651923
315,15.748,3.302,17.96051221,17.96051221,0.718420458,-35.20260397
345.963757,14.732,3.556,24.6416195,6.160405002,1.047268924,-103.6796141
0,13.716,3.556,0,25.4,1.016,-24.384
33.690068,12.954,3.048,35.22346245,7.04469254,0.915809954,-90.6651923
255.963757,13.208,4.064,24.6416195,6.160405002,1.047268924,-103.6796141
281.309932,12.954,5.334,104.6083465,4.981349956,1.29515108,-128.2199447
284.036243,12.7,6.35,80.0852635,6.160405002,1.047268924,-103.6796141
296.565051,12.192,7.366,34.07767607,11.35922544,1.135922544,-55.66020415
303.690068,11.684,8.128,35.22346245,7.04469254,0.915809954,-90.6651923
180,12.7,8.128,0,25.4,1.016,-24.384
180,13.462,8.128,0,25.4,0.762,-24.638
213.690068,14.224,8.636,35.22346245,7.04469254,0.915809954,-90.6651923
243.434949,14.478,9.144,22.71845063,11.35922544,0.567961272,-56.22816542
251.565051,14.732,9.906,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,14.986,9.144,56.22529674,8.032185358,0.803218612,-79.51863395
135,15.494,8.636,17.96051221,17.96051221,0.718420458,-35.20260397
153.434949,16.002,8.382,22.71845063,11.35922544,0.567961272,-56.22816542
161.565051,16.764,8.128,24.09655582,8.032185358,0.803218612,-79.51863395
180,17.526,8.128,0,25.4,0.762,-24.638
198.434949,18.288,8.382,56.22529674,8.032185358,0.803218612,-79.51863395
225,18.796,8.89,17.96051221,17.96051221,0.718420458,-35.20260397
251.565051,19.05,9.652,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,19.304,8.89,56.22529674,8.032185358,0.803218612,-79.51863395
116.565051,19.812,7.874,34.07767607,11.35922544,1.135922544,-55.66020415
135,20.574,7.112,17.96051221,17.96051221,1.077630814,-34.84339386
161.565051,21.336,6.858,24.09655582,8.032185358,0.803218612,-79.51863395
180,22.098,6.858,0,25.4,0.762,-24.638
90,22.098,6.096,0,25.4,0.762,-24.638
111.801409,22.606,4.826,56.59993912,4.716661636,1.36783191,-135.4153543
126.869898,23.368,3.81,35.56,5.08,1.27,-125.73
149.036243,24.638,3.048,56.62883289,4.356064186,1.481061808,-146.6251165
338.587031,11.684,8.128,627.3335515,0.463661252,13.91447154,-1377.532674
338.198591,20.32,17.526,80.18324705,4.716661636,1.36783191,-135.4153543
323.972627,18.034,15.748,218.4910814,1.867445084,3.454773634,-342.0225773
315,15.24,13.462,17.96051221,17.96051221,2.873681832,-33.04734259
135,14.732,13.97,17.96051221,17.96051221,1.796051272,-34.12497315
126.869898,17.272,16.51,35.56,5.08,2.54,-124.46
105.945396,19.558,18.288,80.24604144,3.488958224,1.84914794,-183.0656433
30.963757,22.098,20.32,91.47734537,4.356064186,1.481061808,-146.6251165
14.036243,21.082,20.066,80.0852635,6.160405002,1.047268924,-103.6796141
0,20.32,20.066,0,25.4,0.762,-24.638
341.565051,19.558,20.32,24.09655582,8.032185358,0.803218612,-79.51863395
333.434949,19.05,20.574,22.71845063,11.35922544,0.567961272,-56.22816542
63.434949,18.796,20.066,22.71845063,11.35922544,0.567961272,-56.22816542
45,18.288,19.558,17.96051221,17.96051221,0.718420458,-35.20260397
33.690068,17.526,19.05,35.22346245,7.04469254,0.915809954,-90.6651923
18.434949,16.764,18.796,56.22529674,8.032185358,0.803218612,-79.51863395
0,16.002,18.796,0,25.4,0.762,-24.638
341.565051,15.24,19.05,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,15.494,18.288,56.22529674,8.032185358,0.803218612,-79.51863395
90,15.494,17.526,0,25.4,0.762,-24.638
75.963757,15.24,16.51,24.6416195,6.160405002,1.047268924,-103.6796141
45,14.478,15.748,17.96051221,17.96051221,1.077630814,-34.84339386
14.036243,13.462,15.494,80.0852635,6.160405002,1.047268924,-103.6796141
0,12.7,15.494,0,25.4,0.762,-24.638
126.869898,13.462,14.478,35.56,5.08,1.27,-125.73
90,13.462,13.716,0,25.4,0.762,-24.638
75.963757,13.208,12.7,24.6416195,6.160405002,1.047268924,-103.6796141
56.309932,12.7,11.938,56.35753981,7.04469254,0.915809954,-90.6651923
191.309932,13.97,12.192,104.6083465,4.981349956,1.29515108,-128.2199447
168.690068,15.24,11.938,24.90674927,4.981349956,1.29515108,-128.2199447
161.565051,16.764,11.43,24.09655582,8.032185358,1.60643697,-78.71541559
143.130102,17.78,10.668,91.44,5.08,1.27,-125.73
270,17.78,10.922,0,25.4,0.254,-25.146
270,17.78,11.684,0,25.4,0.762,-24.638
243.434949,18.288,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
213.690068,19.05,13.208,35.22346245,7.04469254,0.915809954,-90.6651923
198.434949,19.812,13.462,56.22529674,8.032185358,0.803218612,-79.51863395
180,20.828,13.462,0,25.4,1.016,-24.384
146.309932,21.59,12.954,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,21.082,13.716,35.22346245,7.04469254,0.915809954,-90.6651923
270,21.082,14.478,0,25.4,0.762,-24.638
270,21.082,15.494,0,25.4,1.016,-24.384
243.434949,21.59,16.51,22.71845063,11.35922544,1.135922544,-55.66020415
225,22.098,17.018,17.96051221,17.96051221,0.718420458,-35.20260397
296.565051,21.844,17.526,34.07767607,11.35922544,0.567961272,-56.22816542
270,21.844,18.034,0,25.4,0.508,-24.892
255.963757,22.098,19.05,24.6416195,6.160405002,1.047268924,-103.6796141
243.434949,22.606,20.066,22.71845063,11.35922544,1.135922544,-55.66020415
233.130102,23.368,21.082,91.44,5.08,1.27,-125.73
40.601295,12.7,11.938,35.81521869,2.755016842,14.05058582,-220.1258435
195.945396,6.604,13.716,80.24604144,3.488958224,1.84914794,-183.0656433
5.194429,7.366,13.97,255.2564824,2.29960805,2.805521694,-277.7466482
19.983107,7.112,17.272,217.0068451,2.170068558,2.9729938,-294.3263839
185.710593,5.842,17.272,229.9928961,2.527394488,2.552668504,-252.7141722
164.054604,5.588,20.066,104.6687498,3.488958224,1.84914794,-183.0656433
45,6.858,20.066,17.96051221,17.96051221,1.436840916,-34.48418351
90,5.334,23.368,0,25.4,1.016,-24.384
75.963757,5.08,22.352,24.6416195,6.160405002,1.047268924,-103.6796141
243.434949,7.874,11.938,22.71845063,11.35922544,1.135922544,-55.66020415
236.309932,8.382,12.7,56.35753981,7.04469254,0.915809954,-90.6651923
225,9.144,13.462,17.96051221,17.96051221,1.077630814,-34.84339386
213.690068,9.906,13.97,35.22346245,7.04469254,0.915809954,-90.6651923
189.462322,11.43,14.224,129.4477627,4.175734346,1.545021802,-152.9571465
333.434949,10.922,14.478,22.71845063,11.35922544,0.567961272,-56.22816542
326.309932,10.16,14.986,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,9.652,15.748,35.22346245,7.04469254,0.915809954,-90.6651923
270,9.652,16.764,0,25.4,1.016,-24.384
251.565051,9.906,17.526,24.09655582,8.032185358,0.803218612,-79.51863395
236.309932,10.414,18.288,56.35753981,7.04469254,0.915809954,-90.6651923
213.690068,11.176,18.796,35.22346245,7.04469254,0.915809954,-90.6651923
0,10.16,18.796,0,25.4,1.016,-24.384
333.434949,9.144,19.304,22.71845063,11.35922544,1.135922544,-55.66020415
306.869898,8.382,20.32,35.56,5.08,1.27,-125.73
284.036243,8.128,21.336,80.0852635,6.160405002,1.047268924,-103.6796141
341.565051,7.366,21.59,24.09655582,8.032185358,0.803218612,-79.51863395
326.309932,6.604,22.098,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,6.096,22.86,35.22346245,7.04469254,0.915809954,-90.6651923
296.565051,5.334,24.384,34.07767607,11.35922544,1.703883816,-55.09224288
56.309932,4.572,21.59,56.35753981,7.04469254,0.915809954,-90.6651923
45,4.064,21.082,17.96051221,17.96051221,0.718420458,-35.20260397
33.690068,3.302,20.574,35.22346245,7.04469254,0.915809954,-90.6651923
116.565051,3.556,20.066,34.07767607,11.35922544,0.567961272,-56.22816542
108.434949,3.81,19.304,56.22529674,8.032185358,0.803218612,-79.51863395
90,3.81,18.288,0,25.4,1.016,-24.384
63.434949,3.302,17.272,22.71845063,11.35922544,1.135922544,-55.66020415
33.690068,2.54,16.764,35.22346245,7.04469254,0.915809954,-90.6651923
165.963757,3.556,16.51,24.6416195,6.160405002,1.047268924,-103.6796141
143.130102,4.572,15.748,91.44,5.08,1.27,-125.73
116.565051,5.08,14.732,34.07767607,11.35922544,1.135922544,-55.66020415
75.963757,4.826,13.716,24.6416195,6.160405002,1.047268924,-103.6796141
63.434949,4.318,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
180,5.334,12.7,0,25.4,1.016,-24.384
165.963757,6.35,12.446,24.6416195,6.160405002,1.047268924,-103.6796141
135,6.858,11.938,17.96051221,17.96051221,0.718420458,-35.20260397
116.565051,7.366,10.922,34.07767607,11.35922544,1.135922544,-55.66020415
278.583621,5.334,24.384,847.7664863,0.473877386,13.61449474,-1347.834983
104.036243,7.62,5.08,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,8.128,4.318,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,9.144,3.81,22.71845063,11.35922544,1.135922544,-55.66020415
180,9.906,3.81,0,25.4,0.762,-24.638
206.565051,10.922,4.318,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,11.43,5.08,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,11.684,6.096,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,11.43,6.858,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,10.922,7.62,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,9.906,8.128,22.71845063,11.35922544,1.135922544,-55.66020415
0,9.144,8.128,0,25.4,0.762,-24.638
26.565051,8.128,7.62,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,7.62,6.858,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,7.366,6.096,24.09655582,8.032185358,0.803218612,-79.51863395
104.036243,4.064,7.874,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,4.572,7.112,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,5.588,6.604,22.71845063,11.35922544,1.135922544,-55.66020415
180,6.35,6.604,0,25.4,0.762,-24.638
206.565051,7.366,7.112,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,7.874,7.874,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,8.128,8.89,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,7.874,9.652,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,7.366,10.414,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,6.35,10.922,22.71845063,11.35922544,1.135922544,-55.66020415
0,5.588,10.922,0,25.4,0.762,-24.638
26.565051,4.572,10.414,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,4.064,9.652,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,3.81,8.89,24.09655582,8.032185358,0.803218612,-79.51863395
104.036243,8.636,9.652,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,9.144,8.89,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,10.16,8.382,22.71845063,11.35922544,1.135922544,-55.66020415
180,10.922,8.382,0,25.4,0.762,-24.638
206.565051,11.938,8.89,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,12.446,9.652,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,12.7,10.668,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,12.446,11.43,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,11.938,12.192,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,10.922,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
0,10.16,12.7,0,25.4,0.762,-24.638
26.565051,9.144,12.192,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,8.636,11.43,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,8.382,10.668,24.09655582,8.032185358,0.803218612,-79.51863395
`));M(L.ParsePatFile(`
*HONEY,HONEY
0, 0,0, 4.7625,2.74963, 3.175,-6.35
120, 0,0, 4.7625,2.74963, 3.175,-6.35
60, 0,0, 4.7625,2.74963, -6.35,3.175
`));M(L.ParsePatFile(`
*HOUND,HOUND
0, 0,0, 6.35,1.5875, 25.4,-12.7
90, 0,0, -6.35,1.5875, 25.4,-12.7
`));M(L.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,9.525
0, 0,3.175, 0,9.525, 3.175,-3.175
0, 0,6.35, 0,9.525, 3.175,-3.175
`));M(L.ParsePatFile(`
*JIS_LC_20,JIS_LC_20
45, 0,0, 0,20
45, .4,0, 0,20
`));M(L.ParsePatFile(`
*JIS_LC_20A,JIS_LC_20A
45, 0,0, 0,20
45, 1,0, 0,20
`));M(L.ParsePatFile(`
*JIS_LC_8,JIS_LC_8
45, 0,0, 0,7.8
45, .4,0, 0,7.8
`));M(L.ParsePatFile(`
*JIS_LC_8A,JIS_LC_8A
45, 0,0, 0,7.8
45, 1,0, 0,7.8
`));M(L.ParsePatFile(`
*JIS_RC_10,JIS_RC_10
45, 0,0, 0,10
45, .725,0, 0,10
45, 1.45,0, 0,10
`));M(L.ParsePatFile(`
*JIS_RC_15,JIS_RC_15
45, 0,0, 0,15
45, .725,0, 0,15
45, 1.45,0, 0,15
`));M(L.ParsePatFile(`
*JIS_RC_18,JIS_RC_18
45, 0,0, 0,18
45, 1,0, 0,18
45, 2,0, 0,18
`));M(L.ParsePatFile(`
*JIS_RC_30,JIS_RC_30
45, 0,0, 0,30
45, 1,0, 0,30
45, 2,0, 0,30
`));M(L.ParsePatFile(`
*JIS_STN_1E,JIS_STN_1E
45, 0,0, 0,1
45, .705,0, 0,1, 1,-.5
`));M(L.ParsePatFile(`
*JIS_STN_2.5,JIS_STN_2.5
45, 0,0, 0,2.5
45, 1.765,0, 0,2.5, 1.2,-.5
`));M(L.ParsePatFile(`
*JIS_WOOD,JIS_WOOD
45, 0,0, 0,.70710678
`));M(L.ParsePatFile(`
*LATTICE-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,2.162738626,10.16,0,25.4,4.325477252,-21.074522748
270,15.24,2.162738626,25.4,25.4,4.325477252,-21.074522748
270,10.16,2.162738626,25.4,25.4,4.325477252,-21.074522748
135,12.7,6.80694346,17.960512212,17.960512212,8.334040482,-27.586983942
225,18.59305654,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
45,2.162738626,15.24,17.960512212,17.960512212,11.309835394,-24.61118903
180,2.162738626,15.24,0,25.4,4.325477252,-21.074522748
315,12.7,18.59305654,17.960512212,17.960512212,8.334040482,-27.586983942
45,6.80694346,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
315,15.24,23.237261374,17.960512212,17.960512212,11.309835394,-24.61118903
45,15.24,2.162738626,17.960512212,17.960512212,11.309835394,-24.61118903
315,2.162738626,10.16,17.960512212,17.960512212,11.309835394,-24.61118903
`));M(L.ParsePatFile(`
*LATTICE-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
270,15.663333418,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,9.736666582,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
`));M(L.ParsePatFile(`
*LATTICE-03
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,15.663333418,9.736666582,25.4,25.4,19.473333164,-5.926666836
270,9.736666582,9.736666582,25.4,25.4,19.473333164,-5.926666836
`));M(L.ParsePatFile(`
*LATTICE-04
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
296.565051,3.894666582,11.684,34.077676066,11.35922544,28.776704194,-28.019422498
296.565051,8.636000254,14.054666582,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,11.684,21.505333418,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,14.054666582,16.763999746,34.077676066,11.35922544,28.776704194,-28.019422498
`));M(L.ParsePatFile(`
*LATTICE-05,LATTICE-05
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,19.685,1.905,0,25.4,3.81,-21.59
180,5.715,23.495,0,25.4,3.81,-21.59
180,15.875,5.715,0,25.4,10.16,-15.24
180,15.875,1.905,0,25.4,13.97,-11.43
270,15.875,5.715,0,25.4,3.81,-21.59
270,19.685,19.685,0,25.4,17.78,-7.62
270,23.495,23.495,0,25.4,21.59,-3.81
0,9.525,19.685,0,25.4,10.16,-15.24
0,9.525,23.495,0,25.4,13.97,-11.43
90,9.525,19.685,0,25.4,3.81,-21.59
90,5.715,5.715,0,25.4,17.78,-7.62
90,1.905,1.905,0,25.4,21.59,-3.81
`));M(L.ParsePatFile(`
*LATTICE-06,LATTICE-06
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
180,15.875,9.525,0,25.4,6.35,-19.05
270,15.875,15.875,0,25.4,6.35,-19.05
0,9.525,15.875,0,25.4,6.35,-19.05
90,9.525,9.525,0,25.4,6.35,-19.05
0,19.685,1.905,0,25.4,3.81,-21.59
180,5.715,23.495,0,25.4,3.81,-21.59
180,15.875,5.715,0,25.4,10.16,-15.24
180,15.875,1.905,0,25.4,13.97,-11.43
270,15.875,5.715,0,25.4,3.81,-21.59
270,19.685,19.685,0,25.4,17.78,-7.62
270,23.495,23.495,0,25.4,21.59,-3.81
0,9.525,19.685,0,25.4,10.16,-15.24
0,9.525,23.495,0,25.4,13.97,-11.43
90,9.525,19.685,0,25.4,3.81,-21.59
90,5.715,5.715,0,25.4,17.78,-7.62
90,1.905,1.905,0,25.4,21.59,-3.81
`));M(L.ParsePatFile(`
*LATTICE-07
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,17.568333418,17.568333164,25.4,25.4,22.436666582,-2.963333418
270,20.531666836,17.568333164,25.4,25.4,22.436666582,-2.963333418
270,4.868333164,4.868333418,25.4,25.4,22.436666582,-2.963333418
270,7.831666582,4.868333418,25.4,25.4,22.436666582,-2.963333418
180,17.568333418,7.831666582,0,25.4,22.436666582,-2.963333418
180,17.568333418,4.868333164,0,25.4,22.436666582,-2.963333418
180,4.868333418,20.531666836,0,25.4,22.436666582,-2.963333418
180,4.868333418,17.568333418,0,25.4,22.436666582,-2.963333418
`));M(L.ParsePatFile(`
*LEAF-01,LEAF-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
83.659808,22.86,5.08,25.244646742,2.804960862,2.30006779,-227.706714766
26.565051,22.352,4.826,34.077676066,11.35922544,0.567961272,-56.22816542
14.036243,21.336,4.572,80.085263502,6.160405002,1.047268924,-103.679614078
315,21.336,4.572,17.960512212,17.960512212,1.436840916,-34.484183508
83.659808,21.336,4.572,25.244646742,2.804960862,2.30006779,-227.706714766
0,20.066,4.572,0,25.4,1.27,-24.13
345.963757,20.828,3.048,24.6416195,6.160405002,1.047268924,-103.679614078
326.309932,20.066,3.556,56.357539812,7.04469254,0.915809954,-90.665192304
303.690068,19.558,4.318,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,18.796,4.064,56.225296744,8.032185358,0.803218612,-79.518633952
288.434949,18.542,4.826,56.225296744,8.032185358,0.803218612,-79.518633952
180,19.558,4.826,0,25.4,1.016,-24.384
258.690068,19.812,6.096,24.906749272,4.981349956,1.29515108,-128.219944728
243.434949,20.066,6.604,22.718450626,11.35922544,0.567961272,-56.22816542
225,20.828,7.366,17.960512212,17.960512212,1.077630814,-34.843393864
213.690068,21.59,7.874,35.223462446,7.04469254,0.915809954,-90.665192304
191.309932,22.86,8.128,104.608346536,4.981349956,1.29515108,-128.219944728
128.659808,7.62,10.668,35.701322044,3.966813504,1.626393496,-161.0129622
143.130102,8.636,9.906,91.44,5.08,1.27,-125.73
153.434949,9.652,9.398,22.718450626,11.35922544,1.135922544,-55.660204148
192.528808,9.652,9.398,104.69063898,2.755016842,2.341764176,-231.834664854
105.945396,9.652,9.398,80.246041438,3.488958224,1.84914794,-183.065643266
153.434949,10.668,8.89,22.718450626,11.35922544,1.135922544,-55.660204148
149.036243,11.938,8.128,56.628832894,4.356064186,1.481061808,-146.625116452
95.710593,11.938,8.128,229.992896122,2.527394488,2.552668504,-252.714172244
194.931417,11.938,8.128,289.599936166,1.636157764,3.94314045,-390.37089693
135,12.954,7.112,17.960512212,17.960512212,1.436840916,-34.484183508
123.690068,13.462,6.35,35.223462446,7.04469254,0.915809954,-90.665192304
199.653824,13.462,6.35,297.294468148,1.708588912,3.775981526,-373.822164724
71.565051,13.462,6.35,24.09655582,8.032185358,2.409655582,-77.912196982
119.054604,14.732,4.064,204.766485564,2.467066186,2.61509002,-258.893915536
288.434949,14.732,3.556,56.225296744,8.032185358,1.60643697,-78.715415594
21.801409,13.462,3.048,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,12.192,2.794,104.608346536,4.981349956,1.29515108,-128.219944728
0,11.43,2.794,0,25.4,0.762,-24.638
341.565051,9.906,3.302,24.09655582,8.032185358,1.60643697,-78.715415594
326.309932,8.382,4.318,56.357539812,7.04469254,1.831620162,-89.74938235
308.659808,7.366,5.588,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,6.604,6.858,91.477345366,4.356064186,1.481061808,-146.625116452
285.945396,6.096,8.636,80.246041438,3.488958224,1.84914794,-183.065643266
270,6.096,10.414,0,25.4,1.778,-23.622
279.462322,5.842,11.938,129.447762694,4.175734346,1.545021802,-152.95714646
285.945396,5.334,13.716,80.246041438,3.488958224,1.84914794,-183.065643266
123.690068,5.842,12.954,35.223462446,7.04469254,0.915809954,-90.665192304
161.565051,6.604,12.7,24.09655582,8.032185358,0.803218612,-79.518633952
171.869898,8.382,12.446,25.144717046,3.592102544,1.796051272,-177.809071102
171.869898,10.16,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
161.565051,11.684,11.684,24.09655582,8.032185358,1.60643697,-78.715415594
161.565051,13.208,11.176,24.09655582,8.032185358,1.60643697,-78.715415594
146.309932,14.732,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
119.744881,15.748,8.382,148.072666262,3.150482142,2.047813532,-202.733533318
111.801409,16.256,7.112,56.599939124,4.716661636,1.36783191,-135.415354264
90,16.256,6.096,0,25.4,1.016,-24.384
75.963757,16.002,5.08,24.6416195,6.160405002,1.047268924,-103.679614078
56.309932,15.494,4.318,56.357539812,7.04469254,0.915809954,-90.665192304
63.434949,15.24,3.81,22.718450626,11.35922544,0.567961272,-56.22816542
126.869898,16.002,2.794,35.56,5.08,1.27,-125.73
45,15.24,2.032,17.960512212,17.960512212,1.077630814,-34.843393864
233.130102,22.606,1.016,91.44,5.08,1.27,-125.73
258.690068,1.778,1.27,24.906749272,4.981349956,1.29515108,-128.219944728
258.690068,3.556,1.27,24.906749272,4.981349956,1.29515108,-128.219944728
198.434949,6.604,0.508,56.225296744,8.032185358,1.60643697,-78.715415594
225,7.874,0.508,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,8.636,0.762,56.225296744,8.032185358,0.803218612,-79.518633952
348.690068,7.366,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
345.963757,6.35,1.27,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,5.334,1.778,22.718450626,11.35922544,1.135922544,-55.660204148
333.434949,3.81,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,2.54,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
0,1.778,2.794,0,25.4,0.762,-24.638
8.130102,0,2.54,154.460405328,3.592102544,1.796051272,-177.809071102
236.309932,0.508,5.842,56.357539812,7.04469254,0.915809954,-90.665192304
236.309932,1.016,6.604,56.357539812,7.04469254,0.915809954,-90.665192304
213.690068,1.778,7.112,35.223462446,7.04469254,0.915809954,-90.665192304
0,0.762,7.112,0,25.4,1.016,-24.384
326.309932,0,7.62,56.357539812,7.04469254,0.915809954,-90.665192304
18.434949,0,6.604,56.225296744,8.032185358,0.803218612,-79.518633952
0,0,13.97,0,25.4,1.778,-23.622
14.036243,2.54,15.494,80.085263502,6.160405002,1.047268924,-103.679614078
21.801409,1.27,14.986,56.599939124,4.716661636,1.36783191,-135.415354264
30.963757,0,14.224,91.477345366,4.356064186,1.481061808,-146.625116452
254.054604,0.508,16.764,104.668749768,3.488958224,1.84914794,-183.065643266
158.198591,1.27,17.526,80.18324705,4.716661636,1.36783191,-135.415354264
153.434949,2.794,16.764,22.718450626,11.35922544,1.703883816,-55.092242876
158.198591,4.064,16.256,80.18324705,4.716661636,1.36783191,-135.415354264
180,5.334,16.256,0,25.4,1.27,-24.13
33.690068,4.572,15.748,35.223462446,7.04469254,0.915809954,-90.665192304
45,4.064,15.24,17.960512212,17.960512212,0.718420458,-35.202603966
53.130102,3.302,14.224,91.44,5.08,1.27,-125.73
56.309932,2.286,12.7,56.357539812,7.04469254,1.831620162,-89.74938235
51.340192,1.27,11.43,126.938033652,3.966813504,1.626393496,-161.0129622
38.659808,0,10.414,35.701322044,3.966813504,1.626393496,-161.0129622
180,20.828,12.192,0,25.4,2.54,-22.86
310.601295,20.828,12.192,35.815218692,2.755016842,2.341764176,-231.834664854
82.405357,20.828,12.192,204.774468022,1.678479244,3.843717484,-380.528029646
180,21.336,12.192,0,25.4,0.508,-24.892
194.036243,22.352,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
198.434949,23.114,12.7,56.225296744,8.032185358,0.803218612,-79.518633952
0,21.082,9.398,0,25.4,2.032,-23.368
348.690068,19.812,9.652,24.906749272,4.981349956,1.29515108,-128.219944728
321.340192,18.542,10.668,126.938033652,3.966813504,1.626393496,-161.0129622
300.963757,17.78,11.938,91.477345366,4.356064186,1.481061808,-146.625116452
21.801409,16.51,11.43,56.599939124,4.716661636,1.36783191,-135.415354264
284.036243,16.256,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
180,17.78,12.446,0,25.4,1.524,-23.876
261.869898,18.034,14.224,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,18.542,15.494,80.18324705,4.716661636,1.36783191,-135.415354264
225,19.558,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
216.869898,20.574,17.272,35.56,5.08,1.27,-125.73
198.434949,22.86,18.034,56.225296744,8.032185358,2.409655582,-77.912196982
153.434949,9.144,16.51,22.718450626,11.35922544,1.703883816,-55.092242876
170.537678,10.668,16.256,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,12.446,16.51,154.460405328,3.592102544,1.796051272,-177.809071102
201.801409,13.716,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
219.805571,15.24,18.288,35.773504272,3.252136752,1.9838035,-196.396538372
18.434949,24.638,6.35,56.225296744,8.032185358,0.803218612,-79.518633952
33.690068,23.876,5.842,35.223462446,7.04469254,0.915809954,-90.665192304
0,23.876,5.842,0,25.4,1.016,-24.384
80.537678,23.876,5.842,25.054405568,4.175734346,1.545021802,-152.95714646
36.869898,22.86,5.08,35.56,5.08,1.27,-125.73
341.565051,22.86,5.08,24.09655582,8.032185358,1.60643697,-78.715415594
53.130102,24.638,4.064,91.44,5.08,1.27,-125.73
38.659808,23.368,3.048,35.701322044,3.966813504,1.626393496,-161.0129622
9.462322,21.844,2.794,129.447762694,4.175734346,1.545021802,-152.95714646
180,24.13,8.128,0,25.4,1.27,-24.13
158.198591,25.4,7.62,80.18324705,4.716661636,1.36783191,-135.415354264
216.869898,23.622,1.778,35.56,5.08,1.27,-125.73
206.565051,24.638,2.286,34.077676066,11.35922544,1.135922544,-55.660204148
198.434949,25.4,2.54,56.225296744,8.032185358,0.803218612,-79.518633952
90,24.638,0,0,25.4,0.508,-24.892
26.565051,24.384,13.462,34.077676066,11.35922544,1.135922544,-55.660204148
56.309932,24.384,13.462,56.357539812,7.04469254,1.831620162,-89.74938235
36.869898,24.384,13.462,35.56,5.08,1.27,-125.73
30.963757,23.114,12.7,91.477345366,4.356064186,1.481061808,-146.625116452
78.690068,23.114,12.7,24.906749272,4.981349956,3.885452986,-125.629642822
156.037511,25.4,11.684,193.423444496,2.578979348,2.501609932,-247.659378188
30.963757,24.13,9.652,91.477345366,4.356064186,1.481061808,-146.625116452
14.036243,23.114,9.398,80.085263502,6.160405002,1.047268924,-103.679614078
180,25.4,18.034,0,25.4,2.54,-22.86
0,21.844,22.098,0,25.4,2.286,-23.114
11.309932,24.13,22.098,104.608346536,4.981349956,1.29515108,-128.219944728
135,25.4,20.828,17.960512212,17.960512212,1.796051272,-34.124973152
0,24.384,19.304,0,25.4,1.016,-24.384
345.963757,23.368,19.558,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,22.352,20.066,22.718450626,11.35922544,1.135922544,-55.660204148
315,21.844,20.574,17.960512212,17.960512212,0.718420458,-35.202603966
306.869898,21.082,21.59,35.56,5.08,1.27,-125.73
11.309932,19.812,21.336,104.608346536,4.981349956,1.29515108,-128.219944728
284.036243,19.558,22.352,80.085263502,6.160405002,1.047268924,-103.679614078
180,21.082,22.352,0,25.4,1.524,-23.876
14.036243,16.51,22.606,80.085263502,6.160405002,1.047268924,-103.679614078
18.434949,15.748,22.352,56.225296744,8.032185358,0.803218612,-79.518633952
33.690068,14.986,21.844,35.223462446,7.04469254,0.915809954,-90.665192304
230.194429,16.51,19.812,162.6068376,3.252136752,1.9838035,-196.396538372
239.036243,17.272,21.082,56.628832894,4.356064186,1.481061808,-146.625116452
236.309932,18.288,22.606,56.357539812,7.04469254,1.831620162,-89.74938235
213.690068,19.05,23.114,35.223462446,7.04469254,0.915809954,-90.665192304
198.434949,19.812,23.368,56.225296744,8.032185358,0.803218612,-79.518633952
0,18.796,23.368,0,25.4,1.016,-24.384
345.963757,17.78,23.622,24.6416195,6.160405002,1.047268924,-103.679614078
261.869898,21.336,24.13,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,21.844,25.4,80.18324705,4.716661636,1.36783191,-135.415354264
36.869898,13.97,21.082,35.56,5.08,1.27,-125.73
0,13.97,21.082,0,25.4,2.032,-23.368
78.690068,13.97,21.082,24.906749272,4.981349956,2.590301906,-126.924793648
33.690068,13.208,20.574,35.223462446,7.04469254,0.915809954,-90.665192304
30.963757,11.938,19.812,91.477345366,4.356064186,1.481061808,-146.625116452
336.037511,11.938,19.812,193.423444496,2.578979348,2.501609932,-247.659378188
79.380345,11.938,19.812,283.976346702,1.560309554,4.134820534,-409.347222706
26.565051,10.922,19.304,34.077676066,11.35922544,1.135922544,-55.660204148
9.462322,9.398,19.05,129.447762694,4.175734346,1.545021802,-152.95714646
318.814075,9.398,19.05,234.164238554,2.389431086,2.700057084,-267.30564649
82.405357,9.398,19.05,204.774468022,1.678479244,3.843717484,-380.528029646
0,8.382,19.05,0,25.4,1.016,-24.384
0,7.366,19.05,0,25.4,1.016,-24.384
0,5.08,19.304,0,25.4,1.524,-23.876
104.036243,5.334,18.288,80.085263502,6.160405002,1.047268924,-103.679614078
201.801409,6.604,18.796,56.599939124,4.716661636,1.36783191,-135.415354264
123.690068,7.62,17.272,35.223462446,7.04469254,1.831620162,-89.74938235
338.198591,16.51,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,14.986,24.892,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,13.716,25.146,24.906749272,4.981349956,1.29515108,-128.219944728
0,11.684,25.146,0,25.4,2.032,-23.368
18.434949,10.16,24.638,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,8.636,23.876,34.077676066,11.35922544,1.703883816,-55.092242876
45,7.366,22.606,17.960512212,17.960512212,1.796051272,-34.124973152
71.565051,6.858,21.082,24.09655582,8.032185358,1.60643697,-78.715415594
81.869898,6.604,19.304,25.144717046,3.592102544,1.796051272,-177.809071102
;0,5.08,19.304,0,25.4,1.524,-23.876
315,0,20.828,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,0.762,22.606,56.225296744,8.032185358,0.803218612,-79.518633952
343.300756,0.762,22.606,184.898786158,2.432878802,2.651837978,-262.531947376
74.744881,0.762,22.606,104.703186326,2.22772732,2.896045516,-286.708512434
206.565051,1.27,22.86,34.077676066,11.35922544,0.567961272,-56.22816542
213.690068,2.032,23.368,35.223462446,7.04469254,0.915809954,-90.665192304
216.869898,3.048,24.13,35.56,5.08,1.27,-125.73
352.874984,3.048,24.13,25.203858152,3.150482142,2.047813532,-202.733533318
78.690068,3.048,24.13,24.906749272,4.981349956,1.29515108,-128.219944728
213.690068,3.81,24.638,35.223462446,7.04469254,0.915809954,-90.665192304
213.690068,4.572,25.146,35.223462446,7.04469254,0.915809954,-90.665192304
206.565051,5.08,25.4,34.077676066,11.35922544,0.567961272,-56.22816542
45,7.112,25.146,17.960512212,17.960512212,0.359210356,-35.561814322
56.309932,6.604,24.384,56.357539812,7.04469254,0.915809954,-90.665192304
56.309932,5.588,22.86,56.357539812,7.04469254,1.831620162,-89.74938235
53.130102,4.826,21.844,91.44,5.08,1.27,-125.73
45,3.556,20.574,17.960512212,17.960512212,1.796051272,-34.124973152
36.869898,2.54,19.812,35.56,5.08,1.27,-125.73
18.434949,1.016,19.304,56.225296744,8.032185358,1.60643697,-78.715415594
0,0,19.304,0,25.4,1.016,-24.384
81.253838,24.13,22.098,179.594740378,1.931126186,3.340848284,-330.743991038
`));M(L.ParsePatFile(`
*LEAF-02,LEAF-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
303.690068,19.558,4.318,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,18.796,4.064,56.225296744,8.032185358,0.803218612,-79.518633952
288.434949,18.542,4.826,56.225296744,8.032185358,0.803218612,-79.518633952
180,19.558,4.826,0,25.4,1.016,-24.384
258.690068,19.812,6.096,24.906749272,4.981349956,1.29515108,-128.219944728
243.434949,20.066,6.604,22.718450626,11.35922544,0.567961272,-56.22816542
288.434949,14.732,3.556,56.225296744,8.032185358,1.60643697,-78.715415594
21.801409,13.462,3.048,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,12.192,2.794,104.608346536,4.981349956,1.29515108,-128.219944728
0,11.43,2.794,0,25.4,0.762,-24.638
341.565051,9.906,3.302,24.09655582,8.032185358,1.60643697,-78.715415594
326.309932,8.382,4.318,56.357539812,7.04469254,1.831620162,-89.74938235
308.659808,7.366,5.588,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,6.604,6.858,91.477345366,4.356064186,1.481061808,-146.625116452
285.945396,6.096,8.636,80.246041438,3.488958224,1.84914794,-183.065643266
270,6.096,10.414,0,25.4,1.778,-23.622
279.462322,5.842,11.938,129.447762694,4.175734346,1.545021802,-152.95714646
285.945396,5.334,13.716,80.246041438,3.488958224,1.84914794,-183.065643266
123.690068,5.842,12.954,35.223462446,7.04469254,0.915809954,-90.665192304
161.565051,6.604,12.7,24.09655582,8.032185358,0.803218612,-79.518633952
171.869898,8.382,12.446,25.144717046,3.592102544,1.796051272,-177.809071102
171.869898,10.16,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
161.565051,11.684,11.684,24.09655582,8.032185358,1.60643697,-78.715415594
161.565051,13.208,11.176,24.09655582,8.032185358,1.60643697,-78.715415594
146.309932,14.732,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
119.744881,15.748,8.382,148.072666262,3.150482142,2.047813532,-202.733533318
111.801409,16.256,7.112,56.599939124,4.716661636,1.36783191,-135.415354264
90,16.256,6.096,0,25.4,1.016,-24.384
75.963757,16.002,5.08,24.6416195,6.160405002,1.047268924,-103.679614078
56.309932,15.494,4.318,56.357539812,7.04469254,0.915809954,-90.665192304
63.434949,15.24,3.81,22.718450626,11.35922544,0.567961272,-56.22816542
126.869898,16.002,2.794,35.56,5.08,1.27,-125.73
45,15.24,2.032,17.960512212,17.960512212,1.077630814,-34.843393864
225,7.874,0.508,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,8.636,0.762,56.225296744,8.032185358,0.803218612,-79.518633952
348.690068,7.366,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
345.963757,6.35,1.27,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,5.334,1.778,22.718450626,11.35922544,1.135922544,-55.660204148
333.434949,3.81,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,2.54,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
0,1.778,2.794,0,25.4,0.762,-24.638
8.130102,0,2.54,154.460405328,3.592102544,1.796051272,-177.809071102
236.309932,0.508,5.842,56.357539812,7.04469254,0.915809954,-90.665192304
236.309932,1.016,6.604,56.357539812,7.04469254,0.915809954,-90.665192304
213.690068,1.778,7.112,35.223462446,7.04469254,0.915809954,-90.665192304
0,0.762,7.112,0,25.4,1.016,-24.384
326.309932,0,7.62,56.357539812,7.04469254,0.915809954,-90.665192304
158.198591,1.27,17.526,80.18324705,4.716661636,1.36783191,-135.415354264
153.434949,2.794,16.764,22.718450626,11.35922544,1.703883816,-55.092242876
158.198591,4.064,16.256,80.18324705,4.716661636,1.36783191,-135.415354264
180,5.334,16.256,0,25.4,1.27,-24.13
33.690068,4.572,15.748,35.223462446,7.04469254,0.915809954,-90.665192304
45,4.064,15.24,17.960512212,17.960512212,0.718420458,-35.202603966
53.130102,3.302,14.224,91.44,5.08,1.27,-125.73
56.309932,2.286,12.7,56.357539812,7.04469254,1.831620162,-89.74938235
51.340192,1.27,11.43,126.938033652,3.966813504,1.626393496,-161.0129622
38.659808,0,10.414,35.701322044,3.966813504,1.626393496,-161.0129622
321.340192,18.542,10.668,126.938033652,3.966813504,1.626393496,-161.0129622
300.963757,17.78,11.938,91.477345366,4.356064186,1.481061808,-146.625116452
21.801409,16.51,11.43,56.599939124,4.716661636,1.36783191,-135.415354264
284.036243,16.256,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
180,17.78,12.446,0,25.4,1.524,-23.876
261.869898,18.034,14.224,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,18.542,15.494,80.18324705,4.716661636,1.36783191,-135.415354264
225,19.558,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
284.036243,19.558,22.352,80.085263502,6.160405002,1.047268924,-103.679614078
0,5.08,19.304,0,25.4,1.524,-23.876
104.036243,5.334,18.288,80.085263502,6.160405002,1.047268924,-103.679614078
201.801409,6.604,18.796,56.599939124,4.716661636,1.36783191,-135.415354264
123.690068,7.62,17.272,35.223462446,7.04469254,1.831620162,-89.74938235
153.434949,9.144,16.51,22.718450626,11.35922544,1.703883816,-55.092242876
170.537678,10.668,16.256,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,12.446,16.51,154.460405328,3.592102544,1.796051272,-177.809071102
201.801409,13.716,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
219.805571,15.24,18.288,35.773504272,3.252136752,1.9838035,-196.396538372
230.194429,16.51,19.812,162.6068376,3.252136752,1.9838035,-196.396538372
239.036243,17.272,21.082,56.628832894,4.356064186,1.481061808,-146.625116452
236.309932,18.288,22.606,56.357539812,7.04469254,1.831620162,-89.74938235
213.690068,19.05,23.114,35.223462446,7.04469254,0.915809954,-90.665192304
198.434949,19.812,23.368,56.225296744,8.032185358,0.803218612,-79.518633952
0,18.796,23.368,0,25.4,1.016,-24.384
345.963757,17.78,23.622,24.6416195,6.160405002,1.047268924,-103.679614078
338.198591,16.51,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
45,7.366,22.606,17.960512212,17.960512212,1.796051272,-34.124973152
71.565051,6.858,21.082,24.09655582,8.032185358,1.60643697,-78.715415594
81.869898,6.604,19.304,25.144717046,3.592102544,1.796051272,-177.809071102
;0,5.08,19.304,0,25.4,1.524,-23.876
53.130102,4.826,21.844,91.44,5.08,1.27,-125.73
45,3.556,20.574,17.960512212,17.960512212,1.796051272,-34.124973152
36.869898,2.54,19.812,35.56,5.08,1.27,-125.73
18.434949,1.016,19.304,56.225296744,8.032185358,1.60643697,-78.715415594
0,0,19.304,0,25.4,1.016,-24.384
0,24.384,19.304,0,25.4,1.016,-24.384
345.963757,23.368,19.558,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,22.352,20.066,22.718450626,11.35922544,1.135922544,-55.660204148
315,21.844,20.574,17.960512212,17.960512212,0.718420458,-35.202603966
306.869898,21.082,21.59,35.56,5.08,1.27,-125.73
11.309932,19.812,21.336,104.608346536,4.981349956,1.29515108,-128.219944728
180,21.082,22.352,0,25.4,1.524,-23.876
261.869898,21.336,24.13,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,21.844,25.4,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,14.986,24.892,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,13.716,25.146,24.906749272,4.981349956,1.29515108,-128.219944728
0,11.684,25.146,0,25.4,2.032,-23.368
18.434949,10.16,24.638,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,8.636,23.876,34.077676066,11.35922544,1.703883816,-55.092242876
45,7.112,25.146,17.960512212,17.960512212,0.359210356,-35.561814322
56.309932,6.604,24.384,56.357539812,7.04469254,0.915809954,-90.665192304
56.309932,5.588,22.86,56.357539812,7.04469254,1.831620162,-89.74938235
53.130102,24.638,4.064,91.44,5.08,1.27,-125.73
38.659808,23.368,3.048,35.701322044,3.966813504,1.626393496,-161.0129622
9.462322,21.844,2.794,129.447762694,4.175734346,1.545021802,-152.95714646
345.963757,20.828,3.048,24.6416195,6.160405002,1.047268924,-103.679614078
326.309932,20.066,3.556,56.357539812,7.04469254,0.915809954,-90.665192304
225,20.828,7.366,17.960512212,17.960512212,1.077630814,-34.843393864
213.690068,21.59,7.874,35.223462446,7.04469254,0.915809954,-90.665192304
191.309932,22.86,8.128,104.608346536,4.981349956,1.29515108,-128.219944728
180,24.13,8.128,0,25.4,1.27,-24.13
158.198591,25.4,7.62,80.18324705,4.716661636,1.36783191,-135.415354264
233.130102,22.606,1.016,91.44,5.08,1.27,-125.73
216.869898,23.622,1.778,35.56,5.08,1.27,-125.73
206.565051,24.638,2.286,34.077676066,11.35922544,1.135922544,-55.660204148
198.434949,25.4,2.54,56.225296744,8.032185358,0.803218612,-79.518633952
30.963757,24.13,9.652,91.477345366,4.356064186,1.481061808,-146.625116452
14.036243,23.114,9.398,80.085263502,6.160405002,1.047268924,-103.679614078
0,21.082,9.398,0,25.4,2.032,-23.368
348.690068,19.812,9.652,24.906749272,4.981349956,1.29515108,-128.219944728
216.869898,20.574,17.272,35.56,5.08,1.27,-125.73
198.434949,22.86,18.034,56.225296744,8.032185358,2.409655582,-77.912196982
180,25.4,18.034,0,25.4,2.54,-22.86
`));M(L.ParsePatFile(`
*LEAF-03,LEAF-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
344.054604,21.844,9.652,104.668749768,3.488958224,1.84914794,-183.065643266
338.198591,20.574,10.16,80.18324705,4.716661636,1.36783191,-135.415354264
326.309932,19.05,11.176,56.357539812,7.04469254,1.831620162,-89.74938235
320.194429,17.526,12.446,162.6068376,3.252136752,1.9838035,-196.396538372
308.659808,16.51,13.716,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,15.748,14.986,91.477345366,4.356064186,1.481061808,-146.625116452
293.198591,14.986,16.764,56.698117744,3.335183322,1.934406342,-191.506230398
281.309932,14.732,18.034,104.608346536,4.981349956,1.29515108,-128.219944728
276.340192,14.478,20.32,204.76213556,2.804960862,2.30006779,-227.706714766
270,14.478,21.59,0,25.4,1.27,-24.13
257.471192,14.986,23.876,129.485790304,2.755016842,2.341764176,-231.834664854
164.054604,16.764,23.368,104.668749768,3.488958224,1.84914794,-183.065643266
158.198591,18.034,22.86,80.18324705,4.716661636,1.36783191,-135.415354264
146.309932,19.558,21.844,56.357539812,7.04469254,1.831620162,-89.74938235
140.194429,21.082,20.574,162.6068376,3.252136752,1.9838035,-196.396538372
125.537678,22.352,18.796,126.965671138,2.952690056,2.18499055,-216.314071054
116.565051,23.368,16.764,34.077676066,11.35922544,2.271845088,-54.524281604
105.945396,23.876,14.986,80.246041438,3.488958224,1.84914794,-183.065643266
97.125016,24.13,12.954,179.577488698,3.150482142,2.047813532,-202.733533318
90,24.13,11.43,0,25.4,1.524,-23.876
77.471192,23.622,9.144,129.485790304,2.755016842,2.341764176,-231.834664854
195.945396,3.556,9.652,80.246041438,3.488958224,1.84914794,-183.065643266
201.801409,4.826,10.16,56.599939124,4.716661636,1.36783191,-135.415354264
213.690068,6.35,11.176,35.223462446,7.04469254,1.831620162,-89.74938235
219.805571,7.874,12.446,35.773504272,3.252136752,1.9838035,-196.396538372
231.340192,8.89,13.716,126.938033652,3.966813504,1.626393496,-161.0129622
239.036243,9.652,14.986,56.628832894,4.356064186,1.481061808,-146.625116452
246.801409,10.414,16.764,136.74251925,3.335183322,1.934406342,-191.506230398
258.690068,10.668,18.034,24.906749272,4.981349956,1.29515108,-128.219944728
263.659808,10.922,20.32,25.244646742,2.804960862,2.30006779,-227.706714766
270,10.922,21.59,0,25.4,1.27,-24.13
282.528808,10.414,23.876,104.69063898,2.755016842,2.341764176,-231.834664854
15.945396,8.636,23.368,80.246041438,3.488958224,1.84914794,-183.065643266
21.801409,7.366,22.86,56.599939124,4.716661636,1.36783191,-135.415354264
33.690068,5.842,21.844,35.223462446,7.04469254,1.831620162,-89.74938235
39.805571,4.318,20.574,35.773504272,3.252136752,1.9838035,-196.396538372
54.462322,3.048,18.796,91.53339072,2.952690056,2.18499055,-216.314071054
63.434949,2.032,16.764,22.718450626,11.35922544,2.271845088,-54.524281604
74.054604,1.524,14.986,104.668749768,3.488958224,1.84914794,-183.065643266
82.874984,1.27,12.954,25.203858152,3.150482142,2.047813532,-202.733533318
90,1.27,11.43,0,25.4,1.524,-23.876
102.528808,1.778,9.144,104.69063898,2.755016842,2.341764176,-231.834664854
128.659808,5.334,3.81,35.701322044,3.966813504,1.626393496,-161.0129622
146.309932,6.858,2.794,56.357539812,7.04469254,1.831620162,-89.74938235
153.434949,8.382,2.032,22.718450626,11.35922544,1.703883816,-55.092242876
164.054604,10.16,1.524,104.668749768,3.488958224,1.84914794,-183.065643266
171.869898,11.938,1.27,25.144717046,3.592102544,1.796051272,-177.809071102
180,13.462,1.27,0,25.4,1.524,-23.876
188.130102,15.24,1.524,154.460405328,3.592102544,1.796051272,-177.809071102
195.945396,17.018,2.032,80.246041438,3.488958224,1.84914794,-183.065643266
206.565051,18.542,2.794,34.077676066,11.35922544,1.703883816,-55.092242876
218.659808,19.812,3.81,35.701322044,3.966813504,1.626393496,-161.0129622
225,21.082,5.08,17.960512212,17.960512212,1.796051272,-34.124973152
315,19.812,6.35,17.960512212,17.960512212,1.796051272,-34.124973152
321.340192,18.542,7.366,126.938033652,3.966813504,1.626393496,-161.0129622
336.801409,16.764,8.128,136.74251925,3.335183322,1.934406342,-191.506230398
341.565051,15.24,8.636,24.09655582,8.032185358,1.60643697,-78.715415594
351.869898,13.462,8.89,25.144717046,3.592102544,1.796051272,-177.809071102
0,11.938,8.89,0,25.4,1.524,-23.876
8.130102,10.16,8.636,154.460405328,3.592102544,1.796051272,-177.809071102
18.434949,8.636,8.128,56.225296744,8.032185358,1.60643697,-78.715415594
23.198591,6.858,7.366,56.698117744,3.335183322,1.934406342,-191.506230398
38.659808,5.588,6.35,35.701322044,3.966813504,1.626393496,-161.0129622
45,4.318,5.08,17.960512212,17.960512212,1.796051272,-34.124973152
`));M(L.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,3.175
`));M(L.ParsePatFile(`
*LOOPLINKS,LOOPLINKS
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
206.565051,13.462,17.018,34.077676066,11.35922544,0.567961272,-56.22816542
243.434949,13.716,17.526,22.718450626,11.35922544,0.567961272,-56.22816542
116.565051,11.938,17.018,34.077676066,11.35922544,0.567961272,-56.22816542
153.434949,12.446,16.764,22.718450626,11.35922544,0.567961272,-56.22816542
180,12.954,16.764,0,25.4,0.508,-24.892
258.690068,4.826,14.986,24.906749272,4.981349956,1.29515108,-128.219944728
251.565051,5.08,15.748,24.09655582,8.032185358,0.803218612,-79.518633952
243.434949,5.588,16.764,22.718450626,11.35922544,1.135922544,-55.660204148
230.194429,6.858,18.288,162.6068376,3.252136752,1.9838035,-196.396538372
225,7.874,19.304,17.960512212,17.960512212,1.436840916,-34.484183508
209.744881,9.652,20.32,148.072666262,3.150482142,2.047813532,-202.733533318
194.036243,11.684,20.828,80.085263502,6.160405002,2.094537594,-102.632345154
251.565051,7.112,15.24,24.09655582,8.032185358,1.60643697,-78.715415594
239.036243,7.874,16.51,56.628832894,4.356064186,1.481061808,-146.625116452
225,8.89,17.526,17.960512212,17.960512212,1.436840916,-34.484183508
210.963757,10.16,18.288,91.477345366,4.356064186,1.481061808,-146.625116452
198.434949,11.684,18.796,56.225296744,8.032185358,1.60643697,-78.715415594
116.565051,17.018,11.938,34.077676066,11.35922544,0.567961272,-56.22816542
153.434949,17.526,11.684,22.718450626,11.35922544,0.567961272,-56.22816542
26.565051,17.018,13.462,34.077676066,11.35922544,0.567961272,-56.22816542
63.434949,16.764,12.954,22.718450626,11.35922544,0.567961272,-56.22816542
90,16.764,12.446,0,25.4,0.508,-24.892
168.690068,14.986,20.574,24.906749272,4.981349956,1.29515108,-128.219944728
161.565051,15.748,20.32,24.09655582,8.032185358,0.803218612,-79.518633952
153.434949,16.764,19.812,22.718450626,11.35922544,1.135922544,-55.660204148
140.194429,18.288,18.542,162.6068376,3.252136752,1.9838035,-196.396538372
135,19.304,17.526,17.960512212,17.960512212,1.436840916,-34.484183508
119.744881,20.32,15.748,148.072666262,3.150482142,2.047813532,-202.733533318
104.036243,20.828,13.716,80.085263502,6.160405002,2.094537594,-102.632345154
161.565051,15.24,18.288,24.09655582,8.032185358,1.60643697,-78.715415594
149.036243,16.51,17.526,56.628832894,4.356064186,1.481061808,-146.625116452
135,17.526,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
120.963757,18.288,15.24,91.477345366,4.356064186,1.481061808,-146.625116452
108.434949,18.796,13.716,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,11.938,8.382,34.077676066,11.35922544,0.567961272,-56.22816542
63.434949,11.684,7.874,22.718450626,11.35922544,0.567961272,-56.22816542
296.565051,13.462,8.382,34.077676066,11.35922544,0.567961272,-56.22816542
333.434949,12.954,8.636,22.718450626,11.35922544,0.567961272,-56.22816542
0,12.446,8.636,0,25.4,0.508,-24.892
78.690068,20.574,10.414,24.906749272,4.981349956,1.29515108,-128.219944728
71.565051,20.32,9.652,24.09655582,8.032185358,0.803218612,-79.518633952
63.434949,19.812,8.636,22.718450626,11.35922544,1.135922544,-55.660204148
50.194429,18.542,7.112,162.6068376,3.252136752,1.9838035,-196.396538372
45,17.526,6.096,17.960512212,17.960512212,1.436840916,-34.484183508
29.744881,15.748,5.08,148.072666262,3.150482142,2.047813532,-202.733533318
14.036243,13.716,4.572,80.085263502,6.160405002,2.094537594,-102.632345154
71.565051,18.288,10.16,24.09655582,8.032185358,1.60643697,-78.715415594
59.036243,17.526,8.89,56.628832894,4.356064186,1.481061808,-146.625116452
45,16.51,7.874,17.960512212,17.960512212,1.436840916,-34.484183508
30.963757,15.24,7.112,91.477345366,4.356064186,1.481061808,-146.625116452
18.434949,13.716,6.604,56.225296744,8.032185358,1.60643697,-78.715415594
296.565051,8.382,13.462,34.077676066,11.35922544,0.567961272,-56.22816542
333.434949,7.874,13.716,22.718450626,11.35922544,0.567961272,-56.22816542
206.565051,8.382,11.938,34.077676066,11.35922544,0.567961272,-56.22816542
243.434949,8.636,12.446,22.718450626,11.35922544,0.567961272,-56.22816542
270,8.636,12.954,0,25.4,0.508,-24.892
348.690068,10.414,4.826,24.906749272,4.981349956,1.29515108,-128.219944728
341.565051,9.652,5.08,24.09655582,8.032185358,0.803218612,-79.518633952
333.434949,8.636,5.588,22.718450626,11.35922544,1.135922544,-55.660204148
320.194429,7.112,6.858,162.6068376,3.252136752,1.9838035,-196.396538372
315,6.096,7.874,17.960512212,17.960512212,1.436840916,-34.484183508
299.744881,5.08,9.652,148.072666262,3.150482142,2.047813532,-202.733533318
284.036243,4.572,11.684,80.085263502,6.160405002,2.094537594,-102.632345154
341.565051,10.16,7.112,24.09655582,8.032185358,1.60643697,-78.715415594
329.036243,8.89,7.874,56.628832894,4.356064186,1.481061808,-146.625116452
315,7.874,8.89,17.960512212,17.960512212,1.436840916,-34.484183508
300.963757,7.112,10.16,91.477345366,4.356064186,1.481061808,-146.625116452
288.434949,6.604,11.684,56.225296744,8.032185358,1.60643697,-78.715415594
90,11.684,-7.874,0,25.4,15.748,-9.652
270,13.716,7.874,0,25.4,15.748,-9.652
180,7.874,11.684,0,25.4,15.748,-9.652
0,-7.874,13.716,0,25.4,15.748,-9.652
`));M(L.ParsePatFile(`
*MAZE-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,24.13,23.368,0,25.4,6.35,-19.05
90,24.13,13.97,25.4,25.4,9.398,-16.002
90,21.082,13.97,25.4,25.4,6.35,-19.05
0,17.78,10.668,0,25.4,2.794,-22.606
180,14.478,20.32,0,25.4,9.652,-15.748
270,14.478,23.368,25.4,25.4,3.048,-22.352
0,1.778,23.368,0,25.4,12.7,-12.7
90,24.13,7.366,25.4,25.4,3.302,-22.098
180,11.43,1.27,0,25.4,9.652,-15.748
0,17.78,7.366,0,25.4,6.35,-19.05
270,11.43,4.318,25.4,25.4,3.048,-22.352
0,4.826,4.318,0,25.4,6.604,-18.796
90,17.78,4.318,25.4,25.4,3.048,-22.352
270,4.826,20.32,25.4,25.4,16.002,-9.398
0,7.874,7.366,0,25.4,6.604,-18.796
270,7.874,17.272,25.4,25.4,9.906,-15.494
180,17.78,17.272,0,25.4,9.906,-15.494
270,17.78,23.368,25.4,25.4,6.096,-19.304
180,24.13,4.318,0,25.4,6.35,-19.05
90,24.13,1.27,25.4,25.4,3.048,-22.352
0,14.478,1.27,0,25.4,9.652,-15.748
270,14.478,10.668,25.4,25.4,9.398,-16.002
270,17.78,13.97,25.4,25.4,3.302,-22.098
0,11.43,13.97,0,25.4,6.35,-19.05
90,11.43,10.668,25.4,25.4,3.302,-22.098
90,1.778,1.27,25.4,25.4,22.098,-3.302
`));M(L.ParsePatFile(`
*MAZE-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,22.859999746,2.54,25.4,25.4,2.54,-22.86
0,17.779999746,2.54,0,25.4,5.08,-20.32
90,0,7.62,25.4,25.4,12.7,-12.7
270,22.859999746,22.86,25.4,25.4,12.7,-12.7
270,7.619999746,22.86,25.4,25.4,2.54,-22.86
180,7.619999746,22.86,0,25.4,10.16,-15.24
0,5.079999746,5.08,0,25.4,3.81,-21.59
90,5.079999746,7.62,25.4,25.4,5.08,-20.32
180,12.699999746,7.62,0,25.4,7.62,-17.78
90,12.699999746,2.54,25.4,25.4,5.08,-20.32
270,17.779999746,5.08,25.4,25.4,2.54,-22.86
0,15.239999746,5.08,0,25.4,2.54,-22.86
270,15.239999746,7.62,25.4,25.4,2.54,-22.86
180,17.779999746,7.62,0,25.4,2.54,-22.86
270,15.239999746,15.24,25.4,25.4,2.54,-22.86
0,7.619999746,15.24,0,25.4,7.62,-17.78
90,7.619999746,10.16,25.4,25.4,5.08,-20.32
180,17.779999746,10.16,0,25.4,10.16,-15.24
180,15.239999746,12.7,0,25.4,5.08,-20.32
270,20.319999746,20.32,25.4,25.4,12.7,-12.7
0,2.539999746,2.54,0,25.4,10.16,-15.24
0,2.539999746,20.32,0,25.4,17.78,-7.62
270,2.539999746,5.08,25.4,25.4,2.54,-22.86
90,2.539999746,7.62,25.4,25.4,12.7,-12.7
180,2.539999746,5.08,0,25.4,7.62,-17.78
180,0,7.62,0,25.4,5.080000254,-20.319999746
180,7.619999746,0,0,25.4,7.62,-17.78
270,17.779999746,17.78,25.4,25.4,5.08,-20.32
0,10.159999746,0,0,25.4,10.16,-15.24
0,5.079999746,17.78,0,25.4,12.7,-12.7
90,5.079999746,15.24,25.4,25.4,2.54,-22.86
270,15.239999746,2.54,25.4,25.4,2.54,-22.86
0,10.159999746,22.86,0,25.4,10.16,-15.24
270,10.159999746,25.4,25.4,25.4,2.54,-22.86
`));M(L.ParsePatFile(`
*MUDST,MUDST
0, 0,0, 12.7,6.35, 6.35,-6.35,0,-6.35,0,-6.35
`));M(L.ParsePatFile(`
*NET,NET
0, 0,0, 0,3.175
90, 0,0, 0,3.175
`));M(L.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,3.175
60, 0,0, 0,3.175
120, 0,0, 0,3.175
`));M(L.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
`));M(L.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
0, 0,3.96875, 0,6.35
`));M(L.ParsePatFile(`
*QCAD-LOGO
;By John Hyslop,    Line 101 modified by CVH to fix left side of pencil drift when hatching far from Origin
;Developed in mm as metric QCAD3 pattern
243.434949,20.32,9.144,22.718450626,11.35922544,0.567961272,-56.22816542
248.198591,20.828,10.414,80.18324705,4.716661636,1.36783191,-135.415354264
263.659808,21.082,12.7,25.244646742,2.804960862,2.30006779,-227.706714766
276.340192,20.828,14.986,204.76213556,2.804960862,2.30006779,-227.706714766
290.556045,20.066,17.018,136.750876358,2.97284521,2.170177016,-214.847518234
310.601295,18.542,18.796,35.815218692,2.755016842,2.341764176,-231.834664854
324.462322,16.764,20.066,91.53339072,2.952690056,2.18499055,-216.314071054
336.801409,14.986,20.828,136.74251925,3.335183322,1.934406342,-191.506230398
351.869898,13.208,21.082,25.144717046,3.592102544,1.796051272,-177.809071102
26.565051,15.494,4.572,34.077676066,11.35922544,1.703883816,-55.092242876
7.125016,13.462,4.318,179.577488698,3.150482142,2.047813532,-202.733533318
0,11.43,4.318,0,25.4,2.032,-23.368
344.054604,9.652,4.826,104.668749768,3.488958224,1.84914794,-183.065643266
336.801409,7.874,5.588,136.74251925,3.335183322,1.934406342,-191.506230398
320.194429,6.35,6.858,162.6068376,3.252136752,1.9838035,-196.396538372
308.659808,5.334,8.128,35.701322044,3.966813504,1.626393496,-161.0129622
293.198591,4.572,9.906,56.698117744,3.335183322,1.934406342,-191.506230398
285.945396,4.064,11.684,80.246041438,3.488958224,1.84914794,-183.065643266
270,4.064,13.208,0,25.4,1.524,-23.876
261.869898,4.318,14.986,25.144717046,3.592102544,1.796051272,-177.809071102
246.801409,5.08,16.764,136.74251925,3.335183322,1.934406342,-191.506230398
234.462322,6.35,18.542,91.53339072,2.952690056,2.18499055,-216.314071054
219.805571,7.874,19.812,35.773504272,3.252136752,1.9838035,-196.396538372
206.565051,9.398,20.574,34.077676066,11.35922544,1.703883816,-55.092242876
195.945396,11.176,21.082,80.246041438,3.488958224,1.84914794,-183.065643266
180,12.192,21.082,0,25.4,1.016,-24.384
180,13.208,21.082,0,25.4,1.016,-24.384
233.130102,23.368,6.858,91.44,5.08,1.27,-125.73
248.198591,23.876,8.128,80.18324705,4.716661636,1.36783191,-135.415354264
248.198591,24.384,9.398,80.18324705,4.716661636,1.36783191,-135.415354264
260.537678,24.638,10.922,25.054405568,4.175734346,1.545021802,-152.95714646
261.869898,24.892,12.7,25.144717046,3.592102544,1.796051272,-177.809071102
278.130102,24.638,14.478,154.460405328,3.592102544,1.796051272,-177.809071102
279.462322,24.384,16.002,129.447762694,4.175734346,1.545021802,-152.95714646
288.434949,23.876,17.526,56.225296744,8.032185358,1.60643697,-78.715415594
299.744881,22.86,19.304,148.072666262,3.150482142,2.047813532,-202.733533318
308.659808,21.844,20.574,35.701322044,3.966813504,1.626393496,-161.0129622
315,20.574,21.844,17.960512212,17.960512212,1.796051272,-34.124973152
321.340192,19.304,22.86,126.938033652,3.966813504,1.626393496,-161.0129622
329.036243,18.034,23.622,56.628832894,4.356064186,1.481061808,-146.625116452
338.198591,16.764,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
338.198591,15.494,24.638,80.18324705,4.716661636,1.36783191,-135.415354264
350.537678,13.97,24.892,25.054405568,4.175734346,1.545021802,-152.95714646
0,12.7,24.892,0,25.4,1.27,-24.13
0,11.43,24.892,0,25.4,1.27,-24.13
11.309932,10.16,24.638,104.608346536,4.981349956,1.29515108,-128.219944728
14.036243,9.144,24.384,80.085263502,6.160405002,1.047268924,-103.679614078
21.801409,7.874,23.876,56.599939124,4.716661636,1.36783191,-135.415354264
21.801409,6.604,23.368,56.599939124,4.716661636,1.36783191,-135.415354264
36.869898,5.588,22.606,35.56,5.08,1.27,-125.73
36.869898,4.572,21.844,35.56,5.08,1.27,-125.73
33.690068,19.05,2.286,35.223462446,7.04469254,0.915809954,-90.665192304
26.565051,17.526,1.524,34.077676066,11.35922544,1.703883816,-55.092242876
21.801409,16.256,1.016,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,14.986,0.762,104.608346536,4.981349956,1.29515108,-128.219944728
8.130102,13.208,0.508,154.460405328,3.592102544,1.796051272,-177.809071102
0,11.684,0.508,0,25.4,1.524,-23.876
350.537678,10.16,0.762,25.054405568,4.175734346,1.545021802,-152.95714646
348.690068,8.89,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
338.198591,7.62,1.524,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,6.604,2.032,22.718450626,11.35922544,1.135922544,-55.660204148
323.130102,5.588,2.794,91.44,5.08,1.27,-125.73
323.130102,4.572,3.556,91.44,5.08,1.27,-125.73
315,3.556,4.572,17.960512212,17.960512212,1.436840916,-34.484183508
306.869898,2.794,5.588,35.56,5.08,1.27,-125.73
306.869898,2.032,6.604,35.56,5.08,1.27,-125.73
296.565051,1.524,7.62,34.077676066,11.35922544,1.135922544,-55.660204148
291.801409,1.016,8.89,56.599939124,4.716661636,1.36783191,-135.415354264
281.309932,0.762,10.16,104.608346536,4.981349956,1.29515108,-128.219944728
281.309932,0.508,11.43,104.608346536,4.981349956,1.29515108,-128.219944728
270,0.508,12.7,0,25.4,1.27,-24.13
270,0.508,13.97,0,25.4,1.27,-24.13
258.690068,0.762,15.24,24.906749272,4.981349956,1.29515108,-128.219944728
258.690068,1.016,16.51,24.906749272,4.981349956,1.29515108,-128.219944728
248.198591,1.524,17.78,80.18324705,4.716661636,1.36783191,-135.415354264
243.434949,2.032,18.796,22.718450626,11.35922544,1.135922544,-55.660204148
233.130102,2.794,19.812,91.44,5.08,1.27,-125.73
233.130102,3.556,20.828,91.44,5.08,1.27,-125.73
225,4.572,21.844,17.960512212,17.960512212,1.436840916,-34.484183508
0,8.89,5.334,0,25.4,7.366,-18.034
180,14.224,9.906,0,25.4,1.016,-24.384
270,14.224,11.176,0,25.4,1.27,-24.13
180,15.748,11.176,0,25.4,1.524,-23.876
270,15.748,12.192,0,25.4,1.016,-24.384
270,24.892,2.794,0,25.4,0.254,-25.146
270,24.892,3.302,0,25.4,0.508,-24.892
45,20.828,2.032,17.960512212,17.960512212,3.592102544,-32.328922134
225,22.86,5.08,17.960512212,17.960512212,3.592102544,-32.328922134
45,20.066,2.794,17.960512212,17.960512212,3.592102544,-32.328922134
0,13.8209782,14.218285,0,25.4,0,-25.4
0,14.9935692,16.1227008,0,25.4,0,-25.4
0,16.2642042,18.3038496,0,25.4,0,-25.4
135,24.892,3.302,17.960512212,17.960512212,12.57235865,-23.348666028
56.309932,24.384,1.778,56.357539812,7.04469254,0.915809954,-90.665192304
45,23.876,1.27,17.960512212,17.960512212,0.718420458,-35.202603966
33.690068,23.114,0.762,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,22.352,0.508,56.225296744,8.032185358,0.803218612,-79.518633952
135.806929,22.352,0.508,-35.917462074,0.505879862,12.753228494,-1262.569616842
289.983107,12.192,12.192,217.006845132,2.170068558,2.9729938,-294.326383914
338.198591,13.462,13.208,80.18324705,4.716661636,2.73566382,-134.047522354
105.945396,12.192,12.192,80.246041438,3.488958224,1.84914794,-183.065643266
218.659808,13.462,13.208,35.701322044,3.966813504,1.626393496,-161.0129622
336.801409,11.684,13.97,136.74251925,3.335183322,1.934406342,-191.506230398
56.309932,16.764,19.177,56.357539812,7.04469254,0.457905104,-91.123097408
239.036243,12.065,11.049,56.628832894,4.356064186,0.740530904,-147.365647356
236.309932,14.478,15.24,56.357539812,7.04469254,0.457905104,-91.123097408
236.309932,15.748,17.272,56.357539812,7.04469254,0.457905104,-91.123097408
0,11.684,10.414,0,25.4,0,-25.4
0,12.446,8.636,0,25.4,0.508,-24.892
0,13.716,8.636,0,25.4,0,-25.4
0,11.43,8.636,0,25.4,0,-25.4
0,9.144,8.636,0,25.4,0,-25.4
0,6.858,8.636,0,25.4,0,-25.4
180,6.096,8.636,0,25.4,0.762,-24.638
180,8.382,8.636,0,25.4,0.762,-24.638
180,10.668,8.636,0,25.4,0.762,-24.638
239.036243,11.43,9.906,56.628832894,4.356064186,1.481061808,-146.625116452
0,11.176,11.176,0,25.4,1.27,-24.13
341.565051,10.414,11.43,24.09655582,8.032185358,0.803218612,-79.518633952
315,9.906,11.938,17.960512212,17.960512212,0.718420458,-35.202603966
296.565051,9.652,12.446,34.077676066,11.35922544,0.567961272,-56.22816542
180,9.652,12.446,0,25.4,5.334,-20.066
240.068488,14.478,20.828,204.780260492,0.667036766,9.672031964,-957.531152498
0,16.002,12.446,0,25.4,4.572,-20.828
240.255119,19.05,17.78,56.708680588,3.150482142,6.143440342,-198.637906508
`));M(L.ParsePatFile(`
*REDBACK,REDBACK
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
63.434949,18.542,19.812,22.71845063,11.35922544,0.567961272,-56.22816542
33.690068,17.78,19.304,35.22346245,7.04469254,0.915809954,-90.6651923
75.963757,17.526,18.288,24.6416195,6.160405002,1.047268924,-103.6796141
0,16.764,18.288,0,25.4,0.762,-24.638
108.434949,17.018,17.526,56.22529674,8.032185358,0.803218612,-79.51863395
90,17.018,17.272,0,25.4,0.254,-25.146
0,13.716,14.478,0,25.4,0.254,-25.146
270,13.716,14.732,0,25.4,0.254,-25.146
225,13.97,14.986,17.96051221,17.96051221,0.359210356,-35.56181432
180,14.224,14.986,0,25.4,0.254,-25.146
315,13.97,15.24,17.96051221,17.96051221,0.359210356,-35.56181432
15.524111,9.398,13.97,184.9097925,1.359630758,4.745111668,-469.7660475
0,8.89,13.97,0,25.4,0.508,-24.892
45,8.636,13.716,17.96051221,17.96051221,0.359210356,-35.56181432
0,7.874,13.716,0,25.4,0.762,-24.638
26.565051,4.826,12.192,34.07767607,11.35922544,3.407767632,-53.38835906
0,4.572,12.192,0,25.4,0.254,-25.146
33.690068,3.81,11.684,35.22346245,7.04469254,0.915809954,-90.6651923
32.005383,1.778,10.414,91.54141687,2.692394666,2.396231174,-237.2268895
45,1.524,10.16,17.96051221,17.96051221,0.359210356,-35.56181432
270,1.524,10.414,0,25.4,0.254,-25.146
225,1.778,10.668,17.96051221,17.96051221,0.359210356,-35.56181432
213.690068,4.064,12.192,35.22346245,7.04469254,2.747430116,-88.8335724
243.434949,4.318,12.7,22.71845063,11.35922544,0.567961272,-56.22816542
205.016893,8.128,14.478,56.77539445,1.534470134,4.20444803,-416.2403639
189.462322,9.652,14.732,129.4477627,4.175734346,1.545021802,-152.9571465
194.036243,10.668,14.986,80.0852635,6.160405002,1.047268924,-103.6796141
194.036243,12.7,15.494,80.0852635,6.160405002,2.094537594,-102.6323452
198.434949,14.224,16.002,56.22529674,8.032185358,1.60643697,-78.71541559
6.340192,11.938,15.748,204.7621356,2.804960862,2.30006779,-227.7067148
315,11.684,16.002,17.96051221,17.96051221,0.359210356,-35.56181432
45,11.43,15.748,17.96051221,17.96051221,0.359210356,-35.56181432
23.198591,9.652,14.986,56.69811774,3.335183322,1.934406342,-191.5062304
0,8.89,14.986,0,25.4,0.762,-24.638
45,8.128,14.224,17.96051221,17.96051221,1.077630814,-34.84339386
236.309932,8.636,14.986,56.35753981,7.04469254,0.915809954,-90.6651923
206.565051,9.144,15.24,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,10.668,16.002,34.07767607,11.35922544,1.703883816,-55.09224288
206.565051,11.176,16.256,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,11.684,16.51,34.07767607,11.35922544,0.567961272,-56.22816542
180,14.478,16.51,0,25.4,2.794,-22.606
225,14.732,16.764,17.96051221,17.96051221,0.359210356,-35.56181432
321.340192,13.462,17.78,126.9380337,3.966813504,1.626393496,-161.0129622
296.565051,13.208,18.288,34.07767607,11.35922544,0.567961272,-56.22816542
285.945396,12.7,20.066,80.24604144,3.488958224,1.84914794,-183.0656433
254.054604,13.208,21.844,104.6687498,3.488958224,1.84914794,-183.0656433
135,13.462,21.59,17.96051221,17.96051221,0.359210356,-35.56181432
90,13.462,20.828,0,25.4,0.762,-24.638
71.565051,13.208,20.066,24.09655582,8.032185358,0.803218612,-79.51863395
105.945396,13.716,18.288,80.24604144,3.488958224,1.84914794,-183.0656433
135,14.732,17.272,17.96051221,17.96051221,1.436840916,-34.48418351
180,14.986,17.272,0,25.4,0.254,-25.146
270,14.986,17.526,0,25.4,0.254,-25.146
270,14.986,18.034,0,25.4,0.508,-24.892
296.565051,14.732,18.542,34.07767607,11.35922544,0.567961272,-56.22816542
278.130102,14.478,20.32,154.4604053,3.592102544,1.796051272,-177.8090711
251.565051,14.732,21.082,24.09655582,8.032185358,0.803218612,-79.51863395
225,14.986,21.336,17.96051221,17.96051221,0.359210356,-35.56181432
225,15.24,21.59,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,15.494,22.098,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,16.002,23.114,22.71845063,11.35922544,1.135922544,-55.66020415
243.434949,16.51,24.13,22.71845063,11.35922544,1.135922544,-55.66020415
225,16.764,24.384,17.96051221,17.96051221,0.359210356,-35.56181432
168.690068,20.574,23.622,24.90674927,4.981349956,3.885452986,-125.6296428
355.601295,17.272,23.876,25.32518405,1.9480911,3.31175487,-327.8637273
56.309932,16.764,23.114,56.35753981,7.04469254,0.915809954,-90.6651923
56.309932,16.256,22.352,56.35753981,7.04469254,0.915809954,-90.6651923
63.434949,16.002,21.844,22.71845063,11.35922544,0.567961272,-56.22816542
56.309932,15.494,21.082,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,15.24,20.32,24.09655582,8.032185358,0.803218612,-79.51863395
90,15.24,20.066,0,25.4,0.254,-25.146
90,15.24,19.558,0,25.4,0.508,-24.892
90,15.24,18.796,0,25.4,0.762,-24.638
225,15.494,19.05,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,15.748,19.558,22.71845063,11.35922544,0.567961272,-56.22816542
225,16.002,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,16.51,20.066,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,17.018,20.32,34.07767607,11.35922544,0.567961272,-56.22816542
180,17.526,20.32,0,25.4,0.508,-24.892
180,18.034,20.32,0,25.4,0.508,-24.892
180,18.796,20.32,0,25.4,0.762,-24.638
153.434949,19.304,20.066,22.71845063,11.35922544,0.567961272,-56.22816542
135,19.558,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
135,14.224,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
26.565051,19.558,18.796,34.07767607,11.35922544,0.567961272,-56.22816542
56.309932,19.05,18.034,56.35753981,7.04469254,0.915809954,-90.6651923
14.036243,18.034,17.78,80.0852635,6.160405002,1.047268924,-103.6796141
90,18.034,17.018,0,25.4,0.762,-24.638
341.565051,17.272,17.272,24.09655582,8.032185358,0.803218612,-79.51863395
0,17.018,17.272,0,25.4,0.254,-25.146
90,14.224,13.97,0,25.4,0.254,-25.146
180,14.478,13.97,0,25.4,0.254,-25.146
225,14.732,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
270,14.732,14.478,0,25.4,0.254,-25.146
135,14.986,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
74.475889,13.716,9.652,289.6013664,1.359630758,4.745111668,-469.7660475
90,13.716,9.144,0,25.4,0.508,-24.892
45,13.462,8.89,17.96051221,17.96051221,0.359210356,-35.56181432
90,13.462,8.128,0,25.4,0.762,-24.638
63.434949,11.938,5.08,22.71845063,11.35922544,3.407767632,-53.38835906
90,11.938,4.826,0,25.4,0.254,-25.146
56.309932,11.43,4.064,56.35753981,7.04469254,0.915809954,-90.6651923
57.994617,10.16,2.032,148.0817038,2.692394666,2.396231174,-237.2268895
45,9.906,1.778,17.96051221,17.96051221,0.359210356,-35.56181432
180,10.16,1.778,0,25.4,0.254,-25.146
225,10.414,2.032,17.96051221,17.96051221,0.359210356,-35.56181432
236.309932,11.938,4.318,56.35753981,7.04469254,2.747430116,-88.8335724
206.565051,12.446,4.572,34.07767607,11.35922544,0.567961272,-56.22816542
244.983107,14.224,8.382,363.6694177,1.534470134,4.20444803,-416.2403639
260.537678,14.478,9.906,25.05440557,4.175734346,1.545021802,-152.9571465
255.963757,14.732,10.922,24.6416195,6.160405002,1.047268924,-103.6796141
255.963757,15.24,12.954,24.6416195,6.160405002,2.094537594,-102.6323452
251.565051,15.748,14.478,24.09655582,8.032185358,1.60643697,-78.71541559
83.659808,15.494,12.192,25.24464674,2.804960862,2.30006779,-227.7067148
135,15.748,11.938,17.96051221,17.96051221,0.359210356,-35.56181432
45,15.494,11.684,17.96051221,17.96051221,0.359210356,-35.56181432
66.801409,14.732,9.906,136.7425193,3.335183322,1.934406342,-191.5062304
90,14.732,9.144,0,25.4,0.762,-24.638
45,13.97,8.382,17.96051221,17.96051221,1.077630814,-34.84339386
213.690068,14.732,8.89,35.22346245,7.04469254,0.915809954,-90.6651923
243.434949,14.986,9.398,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,15.748,10.922,22.71845063,11.35922544,1.703883816,-55.09224288
243.434949,16.002,11.43,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,16.256,11.938,22.71845063,11.35922544,0.567961272,-56.22816542
270,16.256,14.732,0,25.4,2.794,-22.606
225,16.51,14.986,17.96051221,17.96051221,0.359210356,-35.56181432
128.659808,17.526,13.716,35.70132204,3.966813504,1.626393496,-161.0129622
153.434949,18.034,13.462,22.71845063,11.35922544,0.567961272,-56.22816542
164.054604,19.812,12.954,104.6687498,3.488958224,1.84914794,-183.0656433
195.945396,21.59,13.462,80.24604144,3.488958224,1.84914794,-183.0656433
315,21.336,13.716,17.96051221,17.96051221,0.359210356,-35.56181432
0,20.574,13.716,0,25.4,0.762,-24.638
18.434949,19.812,13.462,56.22529674,8.032185358,0.803218612,-79.51863395
344.054604,18.034,13.97,104.6687498,3.488958224,1.84914794,-183.0656433
315,17.018,14.986,17.96051221,17.96051221,1.436840916,-34.48418351
270,17.018,15.24,0,25.4,0.254,-25.146
180,17.272,15.24,0,25.4,0.254,-25.146
180,17.78,15.24,0,25.4,0.508,-24.892
153.434949,18.288,14.986,22.71845063,11.35922544,0.567961272,-56.22816542
171.869898,20.066,14.732,25.14471705,3.592102544,1.796051272,-177.8090711
198.434949,20.828,14.986,56.22529674,8.032185358,0.803218612,-79.51863395
225,21.082,15.24,17.96051221,17.96051221,0.359210356,-35.56181432
225,21.336,15.494,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,21.844,15.748,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,22.86,16.256,34.07767607,11.35922544,1.135922544,-55.66020415
206.565051,23.876,16.764,34.07767607,11.35922544,1.135922544,-55.66020415
225,24.13,17.018,17.96051221,17.96051221,0.359210356,-35.56181432
281.309932,23.368,20.828,104.6083465,4.981349956,3.885452986,-125.6296428
94.398705,23.622,17.526,305.8502981,1.9480911,3.31175487,-327.8637273
33.690068,22.86,17.018,35.22346245,7.04469254,0.915809954,-90.6651923
33.690068,22.098,16.51,35.22346245,7.04469254,0.915809954,-90.6651923
26.565051,21.59,16.256,34.07767607,11.35922544,0.567961272,-56.22816542
33.690068,20.828,15.748,35.22346245,7.04469254,0.915809954,-90.6651923
18.434949,20.066,15.494,56.22529674,8.032185358,0.803218612,-79.51863395
0,19.812,15.494,0,25.4,0.254,-25.146
0,19.304,15.494,0,25.4,0.508,-24.892
0,18.542,15.494,0,25.4,0.762,-24.638
225,18.796,15.748,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,19.304,16.002,34.07767607,11.35922544,0.567961272,-56.22816542
225,19.558,16.256,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,19.812,16.764,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,20.066,17.272,22.71845063,11.35922544,0.567961272,-56.22816542
270,20.066,17.78,0,25.4,0.508,-24.892
270,20.066,18.288,0,25.4,0.508,-24.892
270,20.066,19.05,0,25.4,0.762,-24.638
296.565051,19.812,19.558,34.07767607,11.35922544,0.567961272,-56.22816542
315,19.558,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
`));M(L.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,2.38125
45, 1.6838,0, 0,2.38125, 0,-2.38125
`));M(L.ParsePatFile(`
*SCAFFOLD
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,19.304,21.336,25.4,25.4,0.508,-24.892
326.3099325,6.604,4.064,56.357539812,7.04469254,14.652960026,-76.928042486
90,6.096,12.446,25.4,25.4,0.508,-24.892
270,6.35,4.064,25.4,25.4,8.128,-17.272
146.3099325,6.096,21.336,56.357539812,7.04469254,14.65296028,-76.928041978
180,19.304,12.446,0,25.4,0.508,-24.892
270,18.796,4.572,25.4,25.4,0.508,-24.892
0,18.796,21.336,0,25.4,0.508,-24.892
90,6.35,12.954,25.4,25.4,7.874,-17.526
270,19.304,12.954,25.4,25.4,0.508,-24.892
0,6.604,4.318,0,25.4,12.192,-13.208
0,6.096,12.954,0,25.4,0.508,-24.892
180,19.304,4.572,0,25.4,0.508,-24.892
90,18.796,20.828,25.4,25.4,0.508,-24.892
212.855722,6.096,12.446,514.310608918,0.444520828,14.513605212,-1436.846928942
147.144278,6.096,4.572,937.049925236,0.444520828,14.513605212,-1436.846928942
213.6900675,6.096,4.064,35.223462446,7.04469254,14.652959772,-76.928042486
180,6.096,4.318,0,25.4,12.192,-13.208
0,6.604,21.082,0,25.4,12.192,-13.208
90,6.604,4.064,25.4,25.4,0.508,-24.892
180,19.304,20.828,0,25.4,0.508,-24.892
90,18.796,12.446,25.4,25.4,0.508,-24.892
147.144278,18.796,4.572,937.049925236,0.444520828,14.513605466,-1436.846928688
0,6.096,4.064,0,25.4,0.508,-24.892
0,6.604,12.7,0,25.4,12.192,-13.208
270,6.604,21.336,25.4,25.4,0.508,-24.892
90,19.05,4.572,25.4,25.4,7.874,-17.526
212.855722,18.796,20.828,514.310608918,0.444520828,14.513605466,-1436.846928688
180,6.604,12.446,0,25.4,0.508,-24.892
270,6.096,4.572,25.4,25.4,0.508,-24.892
0,6.096,21.336,0,25.4,0.508,-24.892
270,6.604,12.954,25.4,25.4,0.508,-24.892
270,19.05,20.828,25.4,25.4,7.874,-17.526
32.855722,6.604,4.572,514.310608918,0.444520828,14.513605466,-1436.846928688
180,6.604,4.572,0,25.4,0.508,-24.892
0,18.796,12.954,0,25.4,0.508,-24.892
90,19.304,4.064,25.4,25.4,0.508,-24.892
90,6.096,20.828,25.4,25.4,0.508,-24.892
180,6.096,21.082,0,25.4,12.192,-13.208
147.144278,6.096,12.954,937.049925236,0.444520828,14.513605212,-1436.846928942
180,6.096,12.7,0,25.4,12.192,-13.208
270,6.35,12.446,25.4,25.4,7.874,-17.526
212.855722,6.096,20.828,514.310608918,0.444520828,14.513605466,-1436.846928688
0,18.796,4.064,0,25.4,0.508,-24.892
270,19.05,4.064,25.4,25.4,8.128,-17.272
180,6.604,20.828,0,25.4,0.508,-24.892
213.6900675,18.796,4.064,35.223462446,7.04469254,14.652960026,-76.928042486
327.144278,6.604,20.828,937.049925236,0.444520828,14.513605466,-1436.846928688
`));M(L.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,3.175, 3.175,-3.175
90, 0,0, 0,3.175, 3.175,-3.175
`));M(L.ParsePatFile(`
*SQUIGGLE-01,SQUIGGLE-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,2.794,-9.906,17.960512212,17.960512212,28.377609234,-7.54341519
56.309932,1.778,13.97,56.357539812,7.04469254,1.831620162,-89.74938235
81.869898,1.524,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
99.462322,1.778,10.668,129.447762694,4.175734346,1.545021802,-152.95714646
123.690068,2.794,9.144,35.223462446,7.04469254,1.831620162,-89.74938235
146.309932,4.318,8.128,56.357539812,7.04469254,1.831620162,-89.74938235
170.537678,5.842,7.874,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,7.62,8.128,154.460405328,3.592102544,1.796051272,-177.809071102
213.690068,9.144,9.144,35.223462446,7.04469254,1.831620162,-89.74938235
225,16.51,16.51,17.960512212,17.960512212,10.417097022,-25.503927402
213.690068,18.034,17.526,35.223462446,7.04469254,1.831620162,-89.74938235
189.462322,19.558,17.78,129.447762694,4.175734346,1.545021802,-152.95714646
171.869898,21.336,17.526,25.144717046,3.592102544,1.796051272,-177.809071102
146.309932,22.86,16.51,56.357539812,7.04469254,1.831620162,-89.74938235
123.690068,23.876,14.986,35.223462446,7.04469254,1.831620162,-89.74938235
99.462322,24.13,13.462,129.447762694,4.175734346,1.545021802,-152.95714646
81.869898,23.876,11.684,25.144717046,3.592102544,1.796051272,-177.809071102
56.309932,22.86,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
`));M(L.ParsePatFile(`
*SQUIGGLE-02,SQUIGGLE-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
75.963757,25.146,4.064,24.6416195,6.160405002,1.047268924,-103.679614078
63.434949,24.638,3.048,22.718450626,11.35922544,1.135922544,-55.660204148
45,23.876,2.286,17.960512212,17.960512212,1.077630814,-34.843393864
14.036243,22.86,2.032,80.085263502,6.160405002,1.047268924,-103.679614078
0,21.59,2.032,0,25.4,1.27,-24.13
345.963757,20.574,2.286,24.6416195,6.160405002,1.047268924,-103.679614078
315,19.812,3.048,17.960512212,17.960512212,1.077630814,-34.843393864
296.565051,19.304,4.064,34.077676066,11.35922544,1.135922544,-55.660204148
284.036243,19.05,5.08,80.085263502,6.160405002,1.047268924,-103.679614078
281.309932,18.796,21.59,104.608346536,4.981349956,1.29515108,-128.219944728
303.690068,18.288,22.352,35.223462446,7.04469254,0.915809954,-90.665192304
315,17.526,23.114,17.960512212,17.960512212,1.077630814,-34.843393864
345.963757,16.51,23.368,24.6416195,6.160405002,1.047268924,-103.679614078
0,15.24,23.368,0,25.4,1.27,-24.13
14.036243,14.224,23.114,80.085263502,6.160405002,1.047268924,-103.679614078
45,13.462,22.352,17.960512212,17.960512212,1.077630814,-34.843393864
56.309932,12.954,21.59,56.357539812,7.04469254,0.915809954,-90.665192304
78.690068,12.7,20.32,24.906749272,4.981349956,1.29515108,-128.219944728
75.963757,12.446,4.064,24.6416195,6.160405002,1.047268924,-103.679614078
63.434949,11.938,3.048,22.718450626,11.35922544,1.135922544,-55.660204148
45,11.176,2.286,17.960512212,17.960512212,1.077630814,-34.843393864
14.036243,10.16,2.032,80.085263502,6.160405002,1.047268924,-103.679614078
0,8.89,2.032,0,25.4,1.27,-24.13
345.963757,7.874,2.286,24.6416195,6.160405002,1.047268924,-103.679614078
315,7.112,3.048,17.960512212,17.960512212,1.077630814,-34.843393864
296.565051,6.604,4.064,34.077676066,11.35922544,1.135922544,-55.660204148
284.036243,6.35,5.08,80.085263502,6.160405002,1.047268924,-103.679614078
281.309932,6.096,21.59,104.608346536,4.981349956,1.29515108,-128.219944728
303.690068,5.588,22.352,35.223462446,7.04469254,0.915809954,-90.665192304
315,4.826,23.114,17.960512212,17.960512212,1.077630814,-34.843393864
345.963757,3.81,23.368,24.6416195,6.160405002,1.047268924,-103.679614078
0,2.54,23.368,0,25.4,1.27,-24.13
14.036243,1.524,23.114,80.085263502,6.160405002,1.047268924,-103.679614078
45,0.762,22.352,17.960512212,17.960512212,1.077630814,-34.843393864
56.309932,0.254,21.59,56.357539812,7.04469254,0.915809954,-90.665192304
78.690068,0,20.32,24.906749272,4.981349956,1.29515108,-128.219944728
270,19.05,20.32,0,25.4,15.24,-10.16
270,12.7,20.32,0,25.4,15.24,-10.16
270,6.35,20.32,0,25.4,15.24,-10.16
270,0,20.32,0,25.4,15.24,-10.16
`));M(L.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,5.49926, 3.175,-3.175
60, 0,0, 0,5.49926, 3.175,-3.175
120, 1.5875,2.74963, 0,5.49926, 3.175,-3.175
`));M(L.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,3.175
45, 0,1.5875, 0,3.175
`));M(L.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, 12.7,21.997, 3.175,-22.225
90, 1.5875,0, 21.997,12.7, 1.5875,-42.4066
90, 1.98438,0, 21.997,12.7, 1.27,-42.7241
90, 1.19062,0, 21.997,12.7, 1.27,-42.7241
60, 2.38125,0, 12.7,21.997, 1.016,-24.384
120, .79375,0, 12.7,21.997, 1.016,-24.384
`));M(L.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-3.175
`));M(L.ParsePatFile(`
*TRI-OVERLAP
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
59.641885,2.286000254,3.81,1206.700468992,0.313103514,20.605334202,-2039.928082188
300.358115,12.7,21.590000254,853.832947398,0.313103514,20.605334202,-2039.928082188
180,9.129485678,15.494,0,25.4,18.258981262,-7.141018738
59.036243,22.737590288,4.452650734,56.628832894,4.356064186,5.17479407,-142.931383936
180,23.114,3.81,0,25.4,20.827999746,-4.572000254
300.963757,0,8.89,91.477345366,4.356064186,5.174794324,-142.931383682
300.784147,3.048,3.81,148.105450296,0.464280504,13.89591328,-1375.695350204
239.215853,22.352,3.81,1241.485813188,0.464280504,13.89591328,-1375.695350204
`));M(L.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, 4.7625,8.24889, 4.7625,-4.7625
120, 0,0, 4.76250001,8.24889, 4.7625,-4.7625
0, -2.38125,4.12445, 4.7625,8.24889, 4.7625,-4.7625
`));M(L.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in mm as metric QCAD3 pattern
; Metric Hatch Scale 1 Makes 152mm horizontally placed boards
; with a 13mm offset line to simulate a rounded edge
0,0,0,0,152
0,0,13,0,152
`));M(L.ParsePatFile(`
*WEAVING,WEAVING
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
90,22.86,5.08,0,25.4,1.27,-24.13
75.963757,22.352,3.048,24.6416195,6.160405002,2.094537594,-102.632345154
66.801409,21.59,1.27,136.74251925,3.335183322,1.934406342,-191.506230398
54.462322,20.32,-0.508,91.53339072,2.952690056,2.18499055,-216.314071054
56.309932,19.304,-2.032,56.357539812,7.04469254,1.831620162,-89.74938235
90,20.066,5.588,0,25.4,1.778,-23.622
80.537678,19.812,4.064,25.054405568,4.175734346,1.545021802,-152.95714646
63.434949,19.05,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
56.309932,18.034,1.016,56.357539812,7.04469254,1.831620162,-89.74938235
56.309932,17.018,-0.508,56.357539812,7.04469254,1.831620162,-89.74938235
333.434949,21.844,6.858,22.718450626,11.35922544,1.703883816,-55.092242876
344.054604,20.066,7.366,104.668749768,3.488958224,1.84914794,-183.065643266
0,18.034,7.366,0,25.4,2.032,-23.368
9.462322,16.51,7.112,129.447762694,4.175734346,1.545021802,-152.95714646
26.565051,14.986,6.35,34.077676066,11.35922544,1.703883816,-55.092242876
38.659808,13.716,5.334,35.701322044,3.966813504,1.626393496,-161.0129622
36.869898,11.684,3.81,35.56,5.08,2.54,-124.46
20.556045,9.652,3.048,136.750876358,2.97284521,2.170177016,-214.847518234
330.255119,23.114,9.398,56.708680588,3.150482142,2.047813532,-202.733533318
344.054604,21.336,9.906,104.668749768,3.488958224,1.84914794,-183.065643266
352.874984,19.304,10.16,25.203858152,3.150482142,2.047813532,-202.733533318
0,17.526,10.16,0,25.4,1.778,-23.622
14.036243,15.494,9.652,80.085263502,6.160405002,2.094537594,-102.632345154
26.565051,13.462,8.636,34.077676066,11.35922544,2.271845088,-54.524281604
33.690068,11.938,7.62,35.223462446,7.04469254,1.831620162,-89.74938235
35.537678,10.16,6.35,126.965671138,2.952690056,2.18499055,-216.314071054
0,5.08,2.54,0,25.4,1.27,-24.13
348.690068,3.81,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
341.565051,3.048,3.048,24.09655582,8.032185358,0.803218612,-79.518633952
336.801409,1.27,3.81,136.74251925,3.335183322,1.934406342,-191.506230398
326.309932,-0.254,4.826,56.357539812,7.04469254,1.831620162,-89.74938235
324.462322,-2.032,6.096,91.53339072,2.952690056,2.18499055,-216.314071054
0,5.588,5.334,0,25.4,1.778,-23.622
350.537678,4.064,5.588,25.054405568,4.175734346,1.545021802,-152.95714646
333.434949,2.54,6.35,22.718450626,11.35922544,1.703883816,-55.092242876
326.309932,1.016,7.366,56.357539812,7.04469254,1.831620162,-89.74938235
326.309932,-0.508,8.382,56.357539812,7.04469254,1.831620162,-89.74938235
60.255119,16.002,23.114,56.708680588,3.150482142,2.047813532,-202.733533318
180,20.066,20.066,0,25.4,2.032,-23.368
164.054604,21.844,19.558,104.668749768,3.488958224,1.84914794,-183.065643266
153.434949,23.368,18.796,22.718450626,11.35922544,1.703883816,-55.092242876
330.255119,23.114,22.098,56.708680588,3.150482142,2.047813532,-202.733533318
345.963757,21.082,22.606,24.6416195,6.160405002,2.094537594,-102.632345154
352.874984,19.05,22.86,25.203858152,3.150482142,2.047813532,-202.733533318
60.255119,18.288,21.59,56.708680588,3.150482142,2.047813532,-202.733533318
80.537678,18.034,20.066,25.054405568,4.175734346,1.545021802,-152.95714646
90,18.034,18.034,0,25.4,2.032,-23.368
104.036243,18.542,16.002,80.085263502,6.160405002,2.094537594,-102.632345154
116.565051,19.304,14.478,34.077676066,11.35922544,1.703883816,-55.092242876
129.805571,20.574,12.954,35.773504272,3.252136752,1.9838035,-196.396538372
123.690068,21.59,11.43,35.223462446,7.04469254,1.831620162,-89.74938235
113.198591,22.352,9.652,56.698117744,3.335183322,1.934406342,-191.506230398
309.805571,18.034,11.684,35.773504272,3.252136752,1.9838035,-196.396538372
305.537678,16.764,13.462,126.965671138,2.952690056,2.18499055,-216.314071054
299.744881,15.748,15.24,148.072666262,3.150482142,2.047813532,-202.733533318
285.945396,15.24,17.018,80.246041438,3.488958224,1.84914794,-183.065643266
270,15.24,19.304,0,25.4,2.286,-23.114
74.054604,15.494,21.336,104.668749768,3.488958224,1.84914794,-183.065643266
82.874984,15.24,19.304,25.203858152,3.150482142,2.047813532,-202.733533318
39.805571,13.716,18.034,35.773504272,3.252136752,1.9838035,-196.396538372
35.537678,11.938,16.764,126.965671138,2.952690056,2.18499055,-216.314071054
33.690068,10.414,15.748,35.223462446,7.04469254,1.831620162,-89.74938235
15.945396,8.636,15.24,80.246041438,3.488958224,1.84914794,-183.065643266
6.340192,6.35,14.986,204.76213556,2.804960862,2.30006779,-227.706714766
350.537678,4.826,15.24,25.054405568,4.175734346,1.545021802,-152.95714646
344.054604,3.048,15.748,104.668749768,3.488958224,1.84914794,-183.065643266
23.198591,13.97,21.59,56.698117744,3.335183322,1.934406342,-191.506230398
29.744881,12.192,20.574,148.072666262,3.150482142,2.047813532,-202.733533318
39.805571,10.668,19.304,35.773504272,3.252136752,1.9838035,-196.396538372
29.744881,8.89,18.288,148.072666262,3.150482142,2.047813532,-202.733533318
7.125016,6.858,18.034,179.577488698,3.150482142,2.047813532,-202.733533318
0,5.334,18.034,0,25.4,1.524,-23.876
344.054604,3.556,18.542,104.668749768,3.488958224,1.84914794,-183.065643266
333.434949,2.54,19.05,22.718450626,11.35922544,1.135922544,-55.660204148
234.462322,7.874,-0.254,91.53339072,2.952690056,2.18499055,-216.314071054
240.255119,8.89,1.524,56.708680588,3.150482142,2.047813532,-202.733533318
243.434949,9.906,3.556,22.718450626,11.35922544,2.271845088,-54.524281604
262.874984,10.16,5.588,25.203858152,3.150482142,2.047813532,-202.733533318
270,10.16,7.62,0,25.4,2.032,-23.368
282.528808,9.652,9.906,104.69063898,2.755016842,2.341764176,-231.834664854
293.198591,8.89,11.684,56.698117744,3.335183322,1.934406342,-191.506230398
309.805571,7.62,13.208,35.773504272,3.252136752,1.9838035,-196.396538372
305.537678,6.35,14.986,126.965671138,2.952690056,2.18499055,-216.314071054
270,5.334,19.812,0,25.4,1.778,-23.622
254.054604,5.842,21.59,104.668749768,3.488958224,1.84914794,-183.065643266
246.801409,6.604,23.368,136.74251925,3.335183322,1.934406342,-191.506230398
236.309932,5.334,1.016,56.357539812,7.04469254,1.831620162,-89.74938235
234.462322,6.604,2.794,91.53339072,2.952690056,2.18499055,-216.314071054
249.443955,7.366,4.826,80.266818638,2.97284521,2.170177016,-214.847518234
270,7.366,6.858,0,25.4,2.032,-23.368
278.130102,7.112,8.636,154.460405328,3.592102544,1.796051272,-177.809071102
296.565051,6.096,10.668,34.077676066,11.35922544,2.271845088,-54.524281604
309.805571,4.826,12.192,35.773504272,3.252136752,1.9838035,-196.396538372
303.690068,3.81,13.716,35.223462446,7.04469254,1.831620162,-89.74938235
290.556045,3.048,15.748,136.750876358,2.97284521,2.170177016,-214.847518234
341.565051,1.524,16.256,24.09655582,8.032185358,1.60643697,-78.715415594
324.462322,-0.254,17.526,91.53339072,2.952690056,2.18499055,-216.314071054
324.462322,-2.032,18.796,91.53339072,2.952690056,2.18499055,-216.314071054
146.309932,1.016,20.066,56.357539812,7.04469254,1.831620162,-89.74938235
146.309932,2.54,19.05,56.357539812,7.04469254,1.831620162,-89.74938235
262.874984,2.794,21.082,25.203858152,3.150482142,2.047813532,-202.733533318
255.963757,3.302,23.114,24.6416195,6.160405002,2.094537594,-102.632345154
240.255119,4.318,24.892,56.708680588,3.150482142,2.047813532,-202.733533318
`));M(L.ParsePatFile(`
*WIRE-FENCE
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
315,11.684,12.7,17.960512212,17.960512212,1.186955462,-34.734068962
315,13.353142966,14.332857034,17.960512212,17.960512212,1.231577928,-34.689446496
3.731397,12.767918076,14.294690232,381.845330542,0.55100347,0.586467966,-1170.2956782
183.17983,11.77579941,14.229987034,432.544118908,1.408938508,23.016097986,-434.888914066
183.17983,11.714581854,13.209697736,432.544118908,1.408938508,23.012451308,-434.892560744
153.434949,13.208,12.954,22.718450626,11.35922544,0.567961272,-56.22816542
266.593556,13.208,12.954,432.546308388,0.301846742,25.69937837,-2111.67704156
266.593556,14.224,13.462,432.546308388,0.301846742,25.69937837,-2111.67704156
2.602562,12.523304392,11.860695608,534.003174054,1.153354564,0.622066574,-558.754908396
`));M(L.ParsePatFile(`
*XMASTREE-01,XMASTREE-01
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
180,1.016,24.13,0,25.4,1.016,-24.384
90,1.016,20.828,0,25.4,3.302,-22.098
180,8.382,20.828,0,25.4,7.366,-18.034
49.763642,5.588,17.526,198.374734568,1.491539308,4.325464044,-428.2209495
180,7.112,17.526,0,25.4,1.524,-23.876
51.340192,4.064,13.716,126.938033652,3.966813504,4.879180742,-157.760174954
180,5.588,13.716,0,25.4,1.524,-23.876
52.431408,3.048,10.414,126.990557296,1.548665432,4.165909626,-412.425064658
180,4.318,10.414,0,25.4,1.27,-24.13
53.130102,2.032,7.366,91.44,5.08,3.81,-123.19
180,3.302,7.366,0,25.4,1.27,-24.13
53.972627,1.27,4.572,218.491081432,1.867445084,3.454773634,-342.02257732
180,2.54,4.572,0,25.4,1.27,-24.13
54.462322,0,1.016,91.53339072,2.952690056,4.369981354,-214.129080504
0,24.384,24.13,0,25.4,1.016,-24.384
90,24.384,20.828,0,25.4,3.302,-22.098
0,17.018,20.828,0,25.4,7.366,-18.034
130.236358,19.812,17.526,234.17167923,1.491539308,4.325464044,-428.2209495
0,18.288,17.526,0,25.4,1.524,-23.876
128.659808,21.336,13.716,35.701322044,3.966813504,4.879180742,-157.760174954
0,19.812,13.716,0,25.4,1.524,-23.876
127.568592,22.352,10.414,289.600417242,1.548665432,4.165909626,-412.425064658
0,21.082,10.414,0,25.4,1.27,-24.13
126.869898,23.368,7.366,35.56,5.08,3.81,-123.19
0,22.098,7.366,0,25.4,1.27,-24.13
126.027373,24.13,4.572,126.986269522,1.867445084,3.454773634,-342.02257732
0,22.86,4.572,0,25.4,1.27,-24.13
125.537678,25.4,1.016,126.965671138,2.952690056,4.369981354,-214.129080504
0,11.684,1.016,0,25.4,1.016,-24.384
270,11.684,4.318,0,25.4,3.302,-22.098
0,4.318,4.318,0,25.4,7.366,-18.034
229.763642,7.112,7.62,198.374734568,1.491539308,4.325464044,-428.2209495
0,5.588,7.62,0,25.4,1.524,-23.876
231.340192,8.636,11.43,126.938033652,3.966813504,4.879180742,-157.760174954
0,7.112,11.43,0,25.4,1.524,-23.876
232.431408,9.652,14.732,126.990557296,1.548665432,4.165909626,-412.425064658
0,8.382,14.732,0,25.4,1.27,-24.13
233.130102,10.668,17.78,91.44,5.08,3.81,-123.19
0,9.398,17.78,0,25.4,1.27,-24.13
233.972627,11.43,20.574,218.491081432,1.867445084,3.454773634,-342.02257732
0,10.16,20.574,0,25.4,1.27,-24.13
234.462322,12.7,24.13,91.53339072,2.952690056,4.369981354,-214.129080504
180,13.716,1.016,0,25.4,1.016,-24.384
270,13.716,4.318,0,25.4,3.302,-22.098
180,21.082,4.318,0,25.4,7.366,-18.034
310.236358,18.288,7.62,234.17167923,1.491539308,4.325464044,-428.2209495
180,19.812,7.62,0,25.4,1.524,-23.876
308.659808,16.764,11.43,35.701322044,3.966813504,4.879180742,-157.760174954
180,18.288,11.43,0,25.4,1.524,-23.876
307.568592,15.748,14.732,289.600417242,1.548665432,4.165909626,-412.425064658
180,17.018,14.732,0,25.4,1.27,-24.13
306.869898,14.732,17.78,35.56,5.08,3.81,-123.19
180,16.002,17.78,0,25.4,1.27,-24.13
306.027373,13.97,20.574,126.986269522,1.867445084,3.454773634,-342.02257732
180,15.24,20.574,0,25.4,1.27,-24.13
305.537678,12.7,24.13,126.965671138,2.952690056,4.369981354,-214.129080504
`));M(L.ParsePatFile(`
*XMASTREE-02,XMASTREE-02
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
180,1.016,6.604,0,25.4,1.016,-24.384
90,1.016,3.302,0,25.4,3.302,-22.098
180,8.382,3.302,0,25.4,7.366,-18.034
49.763642,5.588,0,198.374734568,1.491539308,4.325464044,-428.2209495
180,7.112,25.4,0,25.4,1.524,-23.876
51.340192,4.064,21.59,126.938033652,3.966813504,4.879180742,-157.760174954
180,5.588,21.59,0,25.4,1.524,-23.876
52.431408,3.048,18.288,126.990557296,1.548665432,4.165909626,-412.425064658
180,4.318,18.288,0,25.4,1.27,-24.13
53.130102,2.032,15.24,91.44,5.08,3.81,-123.19
180,3.302,15.24,0,25.4,1.27,-24.13
53.972627,1.27,12.446,218.491081432,1.867445084,3.454773634,-342.02257732
180,2.54,12.446,0,25.4,1.27,-24.13
54.462322,0,8.89,91.53339072,2.952690056,4.369981354,-214.129080504
0,24.384,6.604,0,25.4,1.016,-24.384
90,24.384,3.302,0,25.4,3.302,-22.098
0,17.018,3.302,0,25.4,7.366,-18.034
130.236358,19.812,0,234.17167923,1.491539308,4.325464044,-428.2209495
0,18.288,25.4,0,25.4,1.524,-23.876
128.659808,21.336,21.59,35.701322044,3.966813504,4.879180742,-157.760174954
0,19.812,21.59,0,25.4,1.524,-23.876
127.568592,22.352,18.288,289.600417242,1.548665432,4.165909626,-412.425064658
0,21.082,18.288,0,25.4,1.27,-24.13
126.869898,23.368,15.24,35.56,5.08,3.81,-123.19
0,22.098,15.24,0,25.4,1.27,-24.13
126.027373,24.13,12.446,126.986269522,1.867445084,3.454773634,-342.02257732
0,22.86,12.446,0,25.4,1.27,-24.13
125.537678,25.4,8.89,126.965671138,2.952690056,4.369981354,-214.129080504
0,11.684,2.286,0,25.4,1.016,-24.384
270,11.684,5.588,0,25.4,3.302,-22.098
0,4.318,5.588,0,25.4,7.366,-18.034
229.763642,7.112,8.89,198.374734568,1.491539308,4.325464044,-428.2209495
0,5.588,8.89,0,25.4,1.524,-23.876
231.340192,8.636,12.7,126.938033652,3.966813504,4.879180742,-157.760174954
0,7.112,12.7,0,25.4,1.524,-23.876
232.431408,9.652,16.002,126.990557296,1.548665432,4.165909626,-412.425064658
0,8.382,16.002,0,25.4,1.27,-24.13
233.130102,10.668,19.05,91.44,5.08,3.81,-123.19
0,9.398,19.05,0,25.4,1.27,-24.13
233.972627,11.43,21.844,218.491081432,1.867445084,3.454773634,-342.02257732
0,10.16,21.844,0,25.4,1.27,-24.13
234.462322,12.7,25.4,91.53339072,2.952690056,4.369981354,-214.129080504
180,13.716,2.286,0,25.4,1.016,-24.384
270,13.716,5.588,0,25.4,3.302,-22.098
180,21.082,5.588,0,25.4,7.366,-18.034
310.236358,18.288,8.89,234.17167923,1.491539308,4.325464044,-428.2209495
180,19.812,8.89,0,25.4,1.524,-23.876
308.659808,16.764,12.7,35.701322044,3.966813504,4.879180742,-157.760174954
180,18.288,12.7,0,25.4,1.524,-23.876
307.568592,15.748,16.002,289.600417242,1.548665432,4.165909626,-412.425064658
180,17.018,16.002,0,25.4,1.27,-24.13
306.869898,14.732,19.05,35.56,5.08,3.81,-123.19
180,16.002,19.05,0,25.4,1.27,-24.13
306.027373,13.97,21.844,126.986269522,1.867445084,3.454773634,-342.02257732
180,15.24,21.844,0,25.4,1.27,-24.13
305.537678,12.7,25.4,126.965671138,2.952690056,4.369981354,-214.129080504
`));M(L.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, 3.175,3.175, 3.175,-3.175
90, 3.175,0, 3.175,3.175, 3.175,-3.175
`));M(L.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`),!1);M(L.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`),!1);M(L.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`),!1);M(L.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,.275, .2,-.075
90, 0,0, 0,.275, .2,-.075
`),!1);M(L.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,.125
`),!1);M(L.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,.375
45, .1767767,0, 0,.375
`),!1);M(L.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .125,-.0625
`),!1);M(L.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,.75
45, .1767767,0, 0,.75
45, .35355339,0, 0,.75
45, .53033009,0, 0,.75
`),!1);M(L.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .3125,-.0625,0,-.0625
`),!1);M(L.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, .21875,.125, .3125,-.0625,0,-.0625
`),!1);M(L.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,.125
135, 0,0, 0,.125
`),!1);M(L.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,.125
135, 0,0, .25,.125, .3125,-.1875
`),!1);M(L.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 8,8, 15.625,-.375
0, -8,.375, 8,8, 15.625,-.375
90, 0,0, 8,8, -8.375,7.625
90, -.375,0, 8,8, -8.375,7.625
`),!1);M(L.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,8
90, 0,0, 8,8, 8,-8
`),!1);M(L.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,8
90, 0,0, 8,4, 8,-8
`),!1);M(L.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,5.334, 7.625,-.375
0, 0,2.25, 0,5.334, 7.625,-.375
0, 2,2.667, 0,5.334, 3.625,-.375
0, 2,4.917, 0,5.334, 3.625,-.375
90, 0,0, 0,8, 2.25,-3.084
90, -.375,0, 0,8, 2.25,-3.084
90, 2,2.667, 0,4, 2.25,-3.084
90, 1.625,2.667, 0,4, 2.25,-3.084
`),!1);M(L.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,2.667
90, 0,0, 2.667,4, 2.667,-2.667
`),!1);M(L.ParsePatFile(`
*AR-CONC-01,AR-CONC-01
;Optimize to replace existing AR-CONC Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
243.434949,0.3,0.8,8.9442719,4.472136,0.2236068,-22.137073
90,0.3,0.6,0,10,0.2,-9.8
0,0.2,0.6,0,10,0.1,-9.9
315,0.1,0.1,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,0.3,0.2,13.4164079,4.472136,0.2236068,-22.137073
63.434949,0.2,0,8.9442719,4.472136,0.2236068,-22.137073
45,2,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,2.3,0.3,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,2.2,0.6,22.1359436,3.1622777,0.3162278,-31.3065488
315,2.3,0.9,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,2.5,1,13.4164079,4.472136,0.2236068,-22.137073
63.434949,2.4,0.8,8.9442719,4.472136,0.2236068,-22.137073
270,4.1,0.6,0,10,0.2,-9.8
45,3.9,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
180,4.1,0.4,0,10,0.2,-9.8
333.434949,3.9,0.2,8.9442719,4.472136,0.2236068,-22.137073
225,4,0.3,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,4.1,0.1,13.4164079,4.472136,0.2236068,-22.137073
198.434949,6.3,0.8,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,6.2,0.6,8.9442719,4.472136,0.2236068,-22.137073
333.434949,6,0.7,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.7,0,13.4164079,4.472136,0.2236068,-22.137073
251.565051,5.8,0.3,9.486833,3.1622777,0.3162278,-31.3065488
116.565051,5.9,0.1,13.4164079,4.472136,0.2236068,-22.137073
45,6.7,0.1,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,7,0,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,6.9,0.3,22.1359436,3.1622777,0.3162278,-31.3065488
315,3,2.8,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.2,2.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.1,2.7,8.9442719,4.472136,0.2236068,-22.137073
45,1.1,0.8,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.3,0.8,0,10,0.2,-9.8
270,1.3,1,0,10,0.2,-9.8
225,1.8,2.4,7.0710678,7.0710678,0.1414214,-14.0007143
270,1.8,2.6,0,10,0.2,-9.8
71.565051,1.7,2.3,9.486833,3.1622777,0.3162278,-31.3065488
198.434949,1,2.1,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,0.9,1.9,8.9442719,4.472136,0.2236068,-22.137073
333.434949,0.7,2,8.9442719,4.472136,0.2236068,-22.137073
0,3.5,2.2,0,10,0.2,-9.8
225,3.7,2.4,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.7,2.2,0,10,0.2,-9.8
315,4.5,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.7,1.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.6,1.6,8.9442719,4.472136,0.2236068,-22.137073
315,5.5,2.1,7.0710678,7.0710678,0.1414214,-14.0007143
270,5.5,2.3,0,10,0.2,-9.8
108.434949,5.6,2,22.1359436,3.1622777,0.3162278,-31.3065488
206.565051,6.9,2.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,6.8,2.5,8.9442719,4.472136,0.2236068,-22.137073
315,6.7,2.6,7.0710678,7.0710678,0.1414214,-14.0007143
333.434949,7.3,1.9,8.9442719,4.472136,0.2236068,-22.137073
225,7.4,2,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,7.5,1.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,8.2,1.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,8.4,1.4,8.9442719,4.472136,0.2236068,-22.137073
270,8.4,1.6,0,10,0.2,-9.8
180,9.3,1.7,0,10,0.1,-9.9
270,9.3,1.8,0,10,0.1,-9.9
45,9.2,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,9.3,2.4,8.9442719,4.472136,0.2236068,-22.137073
270,9.3,2.7,0,10,0.3,-9.7
45,9.1,2.5,7.0710678,7.0710678,0.2828427,-13.8592929
206.565051,9.1,3.5,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9,3.3,8.9442719,4.472136,0.2236068,-22.137073
315,8.9,3.4,7.0710678,7.0710678,0.1414214,-14.0007143
180,6.5,2.9,0,10,0.2,-9.8
270,6.5,3.2,0,10,0.3,-9.7
56.309932,6.3,2.9,22.1880078,2.773501,0.3605551,-35.6949576
198.434949,5.4,3.8,22.1359436,3.1622777,0.3162278,-31.3065488
71.565051,5.3,3.5,9.486833,3.1622777,0.3162278,-31.3065488
315,5.1,3.7,7.0710678,7.0710678,0.2828427,-13.8592929
180,3.8,3.3,0,10,0.3,-9.7
270,3.8,3.6,0,10,0.3,-9.7
45,3.5,3.3,7.0710678,7.0710678,0.4242641,-13.7178716
225,3.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.3,4.1,0,10,0.2,-9.8
0,3.1,4.1,0,10,0.2,-9.8
206.565051,1.6,3.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,1.5,3.7,8.9442719,4.472136,0.2236068,-22.137073
315,1.4,3.8,7.0710678,7.0710678,0.1414214,-14.0007143
108.434949,1,3.7,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,0.7,3.8,9.486833,3.1622777,0.3162278,-31.3065488
225,0.9,4,7.0710678,7.0710678,0.2828427,-13.8592929
270,1.5,4.5,0,10,0.2,-9.8
45,1.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.5,4.3,0,10,0.2,-9.8
315,3.6,4.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.8,4.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.7,4.6,8.9442719,4.472136,0.2236068,-22.137073
0,5.1,4,0,10,0.1,-9.9
225,5.2,4.1,7.0710678,7.0710678,0.1414214,-14.0007143
90,5.2,4,0,10,0.1,-9.9
0,6.9,3.8,0,10,0.2,-9.8
243.434949,7,4,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.1,3.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,7.3,4.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,7.4,4.3,13.4164079,4.472136,0.2236068,-22.137073
251.565051,7.5,4.6,9.486833,3.1622777,0.3162278,-31.3065488
63.434949,8.8,3.6,8.9442719,4.472136,0.2236068,-22.137073
180,9,3.6,0,10,0.2,-9.8
296.565051,8.9,3.8,13.4164079,4.472136,0.2236068,-22.137073
180,9,5.4,0,10,0.3,-9.7
270,9,5.7,0,10,0.3,-9.7
45,8.7,5.4,7.0710678,7.0710678,0.4242641,-13.7178716
180,8.6,5.6,0,10,0.2,-9.8
270,8.6,5.8,0,10,0.2,-9.8
45,8.4,5.6,7.0710678,7.0710678,0.2828427,-13.8592929
243.434949,8.2,6.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8,6.4,13.4164079,4.472136,0.2236068,-22.137073
135,8.1,6.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.7,6,8.9442719,4.472136,0.2236068,-22.137073
116.565051,6.8,5.8,13.4164079,4.472136,0.2236068,-22.137073
0,6.6,5.8,0,10,0.2,-9.8
225,6.2,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
108.434949,6.3,5.8,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,6,5.9,9.486833,3.1622777,0.3162278,-31.3065488
135,5.9,5.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6,5.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.8,5.5,13.4164079,4.472136,0.2236068,-22.137073
180,4.8,6,0,10,0.1,-9.9
270,4.8,6.1,0,10,0.1,-9.9
45,4.7,6,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.4,6.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.3,6.5,8.9442719,4.472136,0.2236068,-22.137073
315,4.2,6.6,7.0710678,7.0710678,0.1414214,-14.0007143
225,3.4,6.5,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.4,6.2,0,10,0.3,-9.7
333.434949,3.2,6.3,8.9442719,4.472136,0.2236068,-22.137073
180,3,6.1,0,10,0.2,-9.8
270,3,6.3,0,10,0.2,-9.8
45,2.8,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
135,2.1,5.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,2.2,5.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,2,5.7,13.4164079,4.472136,0.2236068,-22.137073
180,1.1,6.3,0,10,0.2,-9.8
270,1.1,6.5,0,10,0.2,-9.8
45,0.9,6.3,7.0710678,7.0710678,0.2828427,-13.8592929
270,0.6,7,0,10,0.3,-9.7
45,0.4,6.8,7.0710678,7.0710678,0.2828427,-13.8592929
153.434949,0.6,6.7,8.9442719,4.472136,0.2236068,-22.137073
243.434949,8.2,7.8,8.9442719,4.472136,0.2236068,-22.137073
90,8.2,7.6,0,10,0.2,-9.8
0,8.1,7.6,0,10,0.1,-9.9
135,8.7,8.2,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,8.8,8.4,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8.6,8.3,13.4164079,4.472136,0.2236068,-22.137073
180,8.6,8.4,0,10,0.2,-9.8
251.565051,8.7,8.7,9.486833,3.1622777,0.3162278,-31.3065488
45,8.4,8.4,7.0710678,7.0710678,0.4242641,-13.7178716
153.434949,7.2,9.2,8.9442719,4.472136,0.2236068,-22.137073
135,6.5,7.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.6,7.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,6.4,7.4,13.4164079,4.472136,0.2236068,-22.137073
135,6.3,7.7,7.0710678,7.0710678,0.1414214,-14.0007143
251.565051,6.4,8,9.486833,3.1622777,0.3162278,-31.3065488
45,6.2,7.8,7.0710678,7.0710678,0.2828427,-13.8592929
26.565051,2.6,7.6,13.4164079,4.472136,0.2236068,-22.137073
153.434949,2.8,7.5,8.9442719,4.472136,0.2236068,-22.137073
270,2.8,7.7,0,10,0.2,-9.8
90,4.5,7.9,0,10,0.2,-9.8
0,4.3,7.9,0,10,0.2,-9.8
225,4.5,8.1,7.0710678,7.0710678,0.2828427,-13.8592929
63.434949,4.9,8.3,8.9442719,4.472136,0.2236068,-22.137073
315,4.8,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,5,8.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,5.8,8.8,8.9442719,4.472136,0.2236068,-22.137073
270,5.8,9.1,0,10,0.3,-9.7
45,5.6,8.9,7.0710678,7.0710678,0.2828427,-13.8592929
0,2.8,9.3,0,10,0.3,-9.7
135,2.6,8,7.0710678,7.0710678,0.1414214,-14.0007143
270,2.6,8.2,0,10,0.2,-9.8
45,2.5,8.1,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,0.8,8.2,13.4164079,4.472136,0.2236068,-22.137073
333.434949,0.6,8.3,8.9442719,4.472136,0.2236068,-22.137073
225,0.7,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
135,1.2,8.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,1.3,8.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,1.1,8.7,13.4164079,4.472136,0.2236068,-22.137073
0,8.74875,8.58939,0,10,0,-10
0,8.12326,9.16255,0,10,0,-10
0,8.22334,7.41455,0,10,0,-10
0,7.2264,8.32807,0,10,0,-10
0,6.60091,8.90123,0,10,0,-10
0,8.74106,5.28385,0,10,0,-10
0,8.11556,5.85701,0,10,0,-10
0,6.70099,7.15323,0,10,0,-10
0,5.70405,8.06676,0,10,0,-10
0,5.07855,8.63992,0,10,0,-10
0,8.21564,4.10901,0,10,0,-10
0,7.2187,5.02254,0,10,0,-10
0,6.59321,5.5957,0,10,0,-10
0,5.17863,6.89192,0,10,0,-10
0,4.18169,7.80544,0,10,0,-10
0,3.5562,8.3786,0,10,0,-10
0,8.73336,1.97832,0,10,0,-10
0,8.10787,2.55148,0,10,0,-10
0,6.69329,3.8477,0,10,0,-10
0,5.69635,4.76122,0,10,0,-10
0,5.07086,5.33438,0,10,0,-10
0,3.65628,6.6306,0,10,0,-10
0,2.65934,7.54413,0,10,0,-10
0,2.03385,8.11729,0,10,0,-10
0,8.20795,0.80348,0,10,0,-10
0,7.21101,1.717,0,10,0,-10
0,6.58551,2.29016,0,10,0,-10
0,5.17094,3.58638,0,10,0,-10
0,4.174,4.49991,0,10,0,-10
0,3.5485,5.07307,0,10,0,-10
0,2.13393,6.36929,0,10,0,-10
0,1.13699,7.28282,0,10,0,-10
0,0.51149,7.85597,0,10,0,-10
0,6.68559,0.54216,0,10,0,-10
0,5.68865,1.45569,0,10,0,-10
0,5.06316,2.02885,0,10,0,-10
0,3.53626,3.22649,0,10,0,-10
0,2.65164,4.23859,0,10,0,-10
0,2.02615,4.81175,0,10,0,-10
0,0.61157,6.10797,0,10,0,-10
0,5.16324,0.28085,0,10,0,-10
0,4.1663,1.19437,0,10,0,-10
0,3.54081,1.76753,0,10,0,-10
0,2.12623,3.06375,0,10,0,-10
0,1.12929,3.97728,0,10,0,-10
0,0.5038,4.55044,0,10,0,-10
0,3.64089,0.01953,0,10,0,-10
0,2.64395,0.93306,0,10,0,-10
0,2.01845,1.50622,0,10,0,-10
0,0.60388,2.80244,0,10,0,-10
0,1.12159,0.67174,0,10,0,-10
0,0.4961,1.2449,0,10,0,-10
0,9.15644,8.35141,0,10,0,-10
0,8.31335,8.05964,0,10,0,-10
0,7.76295,8.41028,0,10,0,-10
0,8.6371,7.02451,0,10,0,-10
0,6.91985,8.11852,0,10,0,-10
0,6.36945,8.46916,0,10,0,-10
0,7.2436,7.08339,0,10,0,-10
0,5.52636,8.17739,0,10,0,-10
0,4.97596,8.52804,0,10,0,-10
0,8.67916,5.33996,0,10,0,-10
0,8.12876,5.69061,0,10,0,-10
0,5.85011,7.14227,0,10,0,-10
0,4.13287,8.23627,0,10,0,-10
0,3.58247,8.58691,0,10,0,-10
0,9.00291,4.30484,0,10,0,-10
0,7.28566,5.39884,0,10,0,-10
0,6.73527,5.74948,0,10,0,-10
0,4.45662,7.20114,0,10,0,-10
0,2.73937,8.29515,0,10,0,-10
0,2.18897,8.64579,0,10,0,-10
0,7.60942,4.36371,0,10,0,-10
0,5.89217,5.45772,0,10,0,-10
0,5.34177,5.80836,0,10,0,-10
0,3.06312,7.26002,0,10,0,-10
0,1.34588,8.35403,0,10,0,-10
0,0.79548,8.70467,0,10,0,-10
0,9.04497,2.62029,0,10,0,-10
0,8.49457,2.97093,0,10,0,-10
0,6.21592,4.42259,0,10,0,-10
0,4.49868,5.5166,0,10,0,-10
0,3.94828,5.86724,0,10,0,-10
0,1.66963,7.3189,0,10,0,-10
0,9.36872,1.58516,0,10,0,-10
0,7.65148,2.67917,0,10,0,-10
0,7.10108,3.02981,0,10,0,-10
0,4.82243,4.48147,0,10,0,-10
0,3.10518,5.57547,0,10,0,-10
0,2.55479,5.92612,0,10,0,-10
0,0.27613,7.37778,0,10,0,-10
0,7.97523,1.64404,0,10,0,-10
0,6.25798,2.73804,0,10,0,-10
0,5.70758,3.08869,0,10,0,-10
0,3.42893,4.54035,0,10,0,-10
0,1.71169,5.63435,0,10,0,-10
0,1.16129,5.98499,0,10,0,-10
0,8.86038,0.25125,0,10,0,-10
0,6.58173,1.70292,0,10,0,-10
0,4.86449,2.79692,0,10,0,-10
0,4.31409,3.14756,0,10,0,-10
0,2.03544,4.59922,0,10,0,-10
0,0.3182,5.69323,0,10,0,-10
0,7.46689,0.31013,0,10,0,-10
0,5.18824,1.76179,0,10,0,-10
0,3.471,2.8558,0,10,0,-10
0,2.9206,3.20644,0,10,0,-10
0,0.64195,4.6581,0,10,0,-10
0,6.6238,0.01837,0,10,0,-10
0,6.0734,0.36901,0,10,0,-10
0,3.79475,1.82067,0,10,0,-10
0,2.0775,2.91468,0,10,0,-10
0,1.5271,3.26532,0,10,0,-10
0,5.2303,0.07724,0,10,0,-10
0,4.6799,0.42789,0,10,0,-10
0,2.40125,1.87955,0,10,0,-10
0,0.68401,2.97355,0,10,0,-10
0,0.13361,3.3242,0,10,0,-10
0,3.83681,0.13612,0,10,0,-10
0,3.28641,0.48676,0,10,0,-10
0,1.00776,1.93842,0,10,0,-10
0,2.44331,0.195,0,10,0,-10
0,1.89292,0.54564,0,10,0,-10
0,1.04982,0.25388,0,10,0,-10
0,0.49942,0.60452,0,10,0,-10
0,6.42555,9.30607,0,10,0,-10
0,4.77695,9.08903,0,10,0,-10
0,3.7883,8.95887,0,10,0,-10
0,3.13481,8.87284,0,10,0,-10
0,1.48621,8.6558,0,10,0,-10
0,0.49757,8.52564,0,10,0,-10
0,9.02957,8.70973,0,10,0,-10
0,7.38097,8.49269,0,10,0,-10
0,6.39232,8.36253,0,10,0,-10
0,5.73883,8.2765,0,10,0,-10
0,4.09023,8.05946,0,10,0,-10
0,3.10158,7.9293,0,10,0,-10
0,2.4481,7.84327,0,10,0,-10
0,0.79949,7.62622,0,10,0,-10
0,8.99634,7.76619,0,10,0,-10
0,8.34285,7.68016,0,10,0,-10
0,6.69425,7.46312,0,10,0,-10
0,5.7056,7.33296,0,10,0,-10
0,5.05211,7.24692,0,10,0,-10
0,3.40351,7.02988,0,10,0,-10
0,2.41487,6.89972,0,10,0,-10
0,1.76138,6.81369,0,10,0,-10
0,0.11277,6.59665,0,10,0,-10
0,9.29827,6.86677,0,10,0,-10
0,8.30962,6.73662,0,10,0,-10
0,7.65613,6.65058,0,10,0,-10
0,6.00753,6.43354,0,10,0,-10
0,5.01888,6.30338,0,10,0,-10
0,4.3654,6.21735,0,10,0,-10
0,2.71679,6.00031,0,10,0,-10
0,1.72815,5.87015,0,10,0,-10
0,1.07466,5.78412,0,10,0,-10
0,8.61155,5.8372,0,10,0,-10
0,7.6229,5.70704,0,10,0,-10
0,6.96941,5.62101,0,10,0,-10
0,5.32081,5.40397,0,10,0,-10
0,4.33217,5.27381,0,10,0,-10
0,3.67868,5.18777,0,10,0,-10
0,2.03007,4.97073,0,10,0,-10
0,1.04143,4.84057,0,10,0,-10
0,0.38794,4.75454,0,10,0,-10
0,7.92483,4.80762,0,10,0,-10
0,6.93618,4.67747,0,10,0,-10
0,6.2827,4.59143,0,10,0,-10
0,4.63409,4.37439,0,10,0,-10
0,3.64545,4.24423,0,10,0,-10
0,2.99196,4.1582,0,10,0,-10
0,1.34336,3.94116,0,10,0,-10
0,0.35471,3.811,0,10,0,-10
0,8.88671,3.99509,0,10,0,-10
0,7.23811,3.77805,0,10,0,-10
0,6.24947,3.64789,0,10,0,-10
0,5.59598,3.56186,0,10,0,-10
0,3.94737,3.34482,0,10,0,-10
0,2.95873,3.21466,0,10,0,-10
0,2.30524,3.12862,0,10,0,-10
0,0.65664,2.91158,0,10,0,-10
0,8.85348,3.05155,0,10,0,-10
0,8.19999,2.96552,0,10,0,-10
0,6.55139,2.74847,0,10,0,-10
0,5.56275,2.61832,0,10,0,-10
0,4.90926,2.53228,0,10,0,-10
0,3.26065,2.31524,0,10,0,-10
0,2.27201,2.18508,0,10,0,-10
0,1.61852,2.09905,0,10,0,-10
0,9.15541,2.15213,0,10,0,-10
0,8.16676,2.02197,0,10,0,-10
0,7.51328,1.93594,0,10,0,-10
0,5.86467,1.7189,0,10,0,-10
0,4.87603,1.58874,0,10,0,-10
0,4.22254,1.50271,0,10,0,-10
0,2.57394,1.28567,0,10,0,-10
0,1.58529,1.15551,0,10,0,-10
0,0.9318,1.06947,0,10,0,-10
0,8.46869,1.12256,0,10,0,-10
0,7.48005,0.9924,0,10,0,-10
0,6.82656,0.90637,0,10,0,-10
0,5.17795,0.68932,0,10,0,-10
0,4.18931,0.55917,0,10,0,-10
0,3.53582,0.47313,0,10,0,-10
0,1.88722,0.25609,0,10,0,-10
0,0.89857,0.12593,0,10,0,-10
0,0.24508,0.0399,0,10,0,-10
0,7.78197,0.09298,0,10,0,-10
0,1.25458,8.906,0,10,0,-10
0,2.59486,9.0898,0,10,0,-10
0,1.22284,8.03701,0,10,0,-10
0,3.91339,9.25692,0,10,0,-10
0,2.56312,8.22081,0,10,0,-10
0,1.19109,7.16803,0,10,0,-10
0,3.88165,8.38793,0,10,0,-10
0,2.53137,7.35183,0,10,0,-10
0,1.15935,6.29904,0,10,0,-10
0,5.23746,8.58365,0,10,0,-10
0,3.84991,7.51894,0,10,0,-10
0,2.49963,6.48284,0,10,0,-10
0,1.12761,5.43005,0,10,0,-10
0,6.57774,8.76745,0,10,0,-10
0,5.20572,7.71466,0,10,0,-10
0,3.81816,6.64995,0,10,0,-10
0,2.46789,5.61385,0,10,0,-10
0,1.09587,4.56106,0,10,0,-10
0,7.89627,8.93456,0,10,0,-10
0,6.546,7.89846,0,10,0,-10
0,5.17398,6.84567,0,10,0,-10
0,3.78642,5.78096,0,10,0,-10
0,2.43615,4.74486,0,10,0,-10
0,1.06413,3.69207,0,10,0,-10
0,9.25208,9.13028,0,10,0,-10
0,7.86453,8.06557,0,10,0,-10
0,6.51425,7.02947,0,10,0,-10
0,5.14223,5.97668,0,10,0,-10
0,3.75468,4.91198,0,10,0,-10
0,2.4044,3.87587,0,10,0,-10
0,1.03238,2.82308,0,10,0,-10
0,9.22034,8.26129,0,10,0,-10
0,7.83279,7.19659,0,10,0,-10
0,6.48251,6.16048,0,10,0,-10
0,5.11049,5.10769,0,10,0,-10
0,3.72294,4.04299,0,10,0,-10
0,2.37266,3.00688,0,10,0,-10
0,1.00064,1.9541,0,10,0,-10
0,9.1886,7.3923,0,10,0,-10
0,7.80105,6.3276,0,10,0,-10
0,6.45077,5.29149,0,10,0,-10
0,5.07875,4.23871,0,10,0,-10
0,3.6912,3.174,0,10,0,-10
0,2.34092,2.1379,0,10,0,-10
0,0.9689,1.08511,0,10,0,-10
0,9.15686,6.52332,0,10,0,-10
0,7.7693,5.45861,0,10,0,-10
0,6.41903,4.42251,0,10,0,-10
0,5.04701,3.36972,0,10,0,-10
0,2.30918,1.26891,0,10,0,-10
0,0.93716,0.21612,0,10,0,-10
0,9.12511,5.65433,0,10,0,-10
0,7.73756,4.58962,0,10,0,-10
0,6.38729,3.55352,0,10,0,-10
0,5.01527,2.50073,0,10,0,-10
0,3.62771,1.43602,0,10,0,-10
0,2.27744,0.39992,0,10,0,-10
0,9.09337,4.78534,0,10,0,-10
0,7.70582,3.72063,0,10,0,-10
0,6.35554,2.68453,0,10,0,-10
0,4.98352,1.63174,0,10,0,-10
0,3.59597,0.56703,0,10,0,-10
0,9.06163,3.91635,0,10,0,-10
0,7.67408,2.85164,0,10,0,-10
0,6.3238,1.81554,0,10,0,-10
0,4.95178,0.76275,0,10,0,-10
0,9.02989,3.04736,0,10,0,-10
0,7.64234,1.98266,0,10,0,-10
0,6.29206,0.94655,0,10,0,-10
0,8.99815,2.17837,0,10,0,-10
0,7.61059,1.11367,0,10,0,-10
0,6.26032,0.07756,0,10,0,-10
0,8.9664,1.30939,0,10,0,-10
0,7.57885,0.24468,0,10,0,-10
0,8.93466,0.4404,0,10,0,-10
206.565051,10,0.6,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.9,0.4,8.9442719,4.472136,0.2236068,-22.137073
315,9.8,0.5,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,9.7,5.4,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.6,5.2,8.9442719,4.472136,0.2236068,-22.137073
315,9.5,5.3,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,10,7.2,8.9442719,4.472136,0.2236068,-22.137073
288.434949,9.9,7.5,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,9.8,7.3,8.9442719,4.472136,0.2236068,-22.137073
135,9.7,9.3,7.0710678,7.0710678,0.1414214,-14.0007143
270,9.7,9.5,0,10,0.2,-9.8
45,9.6,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
0,7.7,9.6,0,10,0.2,-9.8
270,7.2,9.4,0,10,0.2,-9.8
26.565051,7,9.3,13.4164079,4.472136,0.2236068,-22.137073
0,9.50621,9.4965,0,10,0,-10
0,9.74569,7.67586,0,10,0,-10
0,9.63792,6.11833,0,10,0,-10
0,9.738,4.37033,0,10,0,-10
0,9.63022,2.81279,0,10,0,-10
0,9.7303,1.06479,0,10,0,-10
0,9.70684,8.00076,0,10,0,-10
0,9.52225,5.63173,0,10,0,-10
0,9.88807,2.91205,0,10,0,-10
0,8.06768,9.52227,0,10,0,-10
0,7.07904,9.39211,0,10,0,-10
0,9.68306,8.79577,0,10,0,-10
0,9.98498,7.89635,0,10,0,-10
0,9.57343,5.02467,0,10,0,-10
0,9.5402,4.08112,0,10,0,-10
0,9.84213,3.18171,0,10,0,-10
0,9.43058,0.31003,0,10,0,-10
243.434949,7.8,9.8,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.9,9.6,13.4164079,4.472136,0.2236068,-22.137073
180,6,9.7,0,10,0.2,-9.8
270,6,9.9,0,10,0.2,-9.8
45,5.8,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
296.565051,4.1,10,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4,9.8,8.9442719,4.472136,0.2236068,-22.137073
180,4.2,9.8,0,10,0.2,-9.8
135,3.4,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,3.5,9.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,3.3,9.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,3.1,9.3,13.4164079,4.472136,0.2236068,-22.137073
225,3,9.5,7.0710678,7.0710678,0.2828427,-13.8592929
45,0,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,0.3,9.6,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,0.2,9.9,22.1359436,3.1622777,0.3162278,-31.3065488
0,3.66398,9.93614,0,10,0,-10
0,2.14162,9.67482,0,10,0,-10
0,0.61927,9.41351,0,10,0,-10
0,6.87779,9.80307,0,10,0,-10
0,5.4843,9.86194,0,10,0,-10
0,2.69731,9.9797,0,10,0,-10
0,4.47502,9.98845,0,10,0,-10
0,3.82153,9.90242,0,10,0,-10
0,2.17293,9.68537,0,10,0,-10
0,1.18429,9.55522,0,10,0,-10
0,0.5308,9.46918,0,10,0,-10
0,1.28632,9.77499,0,10,0,-10
0,2.6266,9.95879,0,10,0,-10
0,5.2692,9.45264,0,10,0,-10
0,6.60948,9.63644,0,10,0,-10
0,7.92801,9.80355,0,10,0,-10
0,9.66478,9.68531,0,10,0,-10
0,8.27128,9.74419,0,10,0,-10
0,9.71629,9.73931,0,10,0,-10
0,9.28383,9.99927,0,10,0,-10
`),!1);M(L.ParsePatFile(`
*AR-CONC,AR-CONC
50, 0,0, 4.12975034,-5.89789472, .75,-8.25
355, 0,0, -2.03781207,7.3723684, .6,-6.6
100.4514, .5977168,-.0522934, 5.7305871,-6.9397673, .6374019,-7.01142112
46.1842, 0,2, 6.19462551,-8.84684208, 1.125,-12.375
96.6356, .88936745,1.86206693, 8.59588071,-10.40965104, .95610288,-10.51713
351.1842, 0,2, 7.74328189,11.0585526, .9,-9.9
21, 1,1.5, 4.12975034,-5.89789472, .75,-8.25
326, 1,1.5, -2.03781207,7.3723684, .6,-6.6
71.4514, 1.49742233,1.16448394, 5.7305871,-6.9397673, .6374019,-7.01142112
37.5, 0,0, 2.123,2.567, 0,-6.52,0,-6.7,0,-6.625
7.5, 0,0, 3.123,3.567, 0,-3.82,0,-6.37,0,-2.525
-32.5, -2.23,0, 4.6234,2.678, 0,-2.5,0,-7.8,0,-10.35
-42.5, -3.23,0, 3.6234,4.678, 0,-3.25,0,-5.18,0,-7.35
`),!1);M(L.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 4,4, 12,-4
135, 2.82842713,2.82842713, 4,-4, 12,-4
`),!1);M(L.ParsePatFile(`
*AR-PARQ1,AR-PARQ1
90, 0,0, 12,12, 12,-12
90, 2,0, 12,12, 12,-12
90, 4,0, 12,12, 12,-12
90, 6,0, 12,12, 12,-12
90, 8,0, 12,12, 12,-12
90, 10,0, 12,12, 12,-12
90, 12,0, 12,12, 12,-12
0, 0,12, 12,-12, 12,-12
0, 0,14, 12,-12, 12,-12
0, 0,16, 12,-12, 12,-12
0, 0,18, 12,-12, 12,-12
0, 0,20, 12,-12, 12,-12
0, 0,22, 12,-12, 12,-12
0, 0,24, 12,-12, 12,-12
`),!1);M(L.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 2.2,1, 15,-2,5,-1
0, 1.33,.5, -1,1.33, 3,-.33,6,-.75
0, .5,.85, 5.2,.67, 8,-1.4,4,-1
`),!1);M(L.ParsePatFile(`
*AR-RSHKE,AR-RSHKE
0, 0,0, 25.5,12, 6,-5,7,-3,9,-4
0, 6,.5, 25.5,12, 5,-19,4,-6
0, 18,-.75, 25.5,12, 3,-31
90, 0,0, 12,8.5, 11.5,-36.5
90, 6,0, 12,8.5, 11.25,-36.75
90, 11,0, 12,8.5, 10.5,-37.5
90, 18,-.75, 12,8.5, 11.5,-36.5
90, 21,-.75, 12,8.5, 11.5,-36.5
90, 30,0, 12,8.5, 11,-37
`),!1);M(L.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 1.123,1.567, 0,-1.52,0,-1.7,0,-1.625
7.5, 0,0, 2.123,2.567, 0,-.82,0,-1.37,0,-.525
-32.5, -1.23,0, 2.6234,1.678, 0,-.5,0,-1.8,0,-2.35
-42.5, -1.23,0, 1.6234,2.678, 0,-.25,0,-1.18,0,-1.35
`),!1);M(L.ParsePatFile(`
*BARBWIRE,BARBWIRE
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
315,0.3,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
288.434949,0.26,0.68,2.21359436,0.31622777,0.12649111,-3.03578655
158.198591,0.31,0.66,3.15682075,0.18569534,0.05385165,-5.33131316
116.565051,0.32,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
116.565051,0.34,0.6,1.34164079,0.4472136,0.04472136,-2.19134662
111.801409,0.44,0.39,2.22834406,0.18569534,0.05385165,-5.33131316
156.801409,0.51,0.36,5.38356375,0.13130643,0.07615773,-7.53961537
289.653824,0.46,0.5,11.70450662,0.06726728,0.14866069,-14.71740806
194.036243,0.31,0.36,3.15296313,0.24253563,0.04123106,-4.08187457
251.565051,0.32,0.39,0.9486833,0.31622777,0.03162278,-3.13065488
254.054604,0.34,0.46,4.12081692,0.13736056,0.0728011,-7.20730879
74.744881,0.34,0.46,4.12217269,0.0877058,0.11401754,-11.28773671
135,0.36,0.44,0.70710678,0.70710678,0.02828427,-1.38592929
180,0.39,0.44,0,1,0.03,-0.97
270,0.39,0.45,0,1,0.01,-0.99
74.054604,0.39,0.45,4.12081692,0.13736056,0.1456022,-7.13450769
161.565051,0.42,0.44,0.9486833,0.31622777,0.03162278,-3.13065488
198.434949,0.45,0.45,2.21359436,0.31622777,0.03162278,-3.13065488
258.231711,0.5,0.69,5.09885635,0.04079085,0.24515301,-24.27014833
21.801409,0.45,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
75.963757,0.43,0.59,0.9701425,0.24253563,0.08246211,-4.04064351
341.565051,0.4,0.6,0.9486833,0.31622777,0.03162278,-3.13065488
45,0.37,0.57,0.70710678,0.70710678,0.04242641,-1.37178716
288.434949,0.36,0.6,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.34,0.6,0,1,0.02,-0.98
26.565051,0.32,0.59,1.34164079,0.4472136,0.02236068,-2.2137073
78.231711,0.27,0.35,5.09885635,0.04079085,0.24515301,-24.27014833
4.085617,0.78,0.48,13.03821015,0.07124705,0.14035669,-13.89531216
0,0.69,0.48,0,1,0.09,-0.91
354.289407,0.59,0.49,0.99503719,0.09950372,0.10049876,-9.94937686
356.185925,0.47,0.55,0.99778516,0.06651901,0.15033296,-14.88296341
351.469234,0.8,0.55,7.07089492,0.04944682,0.20223748,-20.02151093
0,0.66,0.55,0,1,0.14,-0.86
14.036243,0.46,0.5,3.15296313,0.24253563,0.20615528,-3.91695034
189.865807,0.7,0.51,17.26262336,0.04283529,0.23345235,-23.11178271
180,0.8,0.51,0,1,0.1,-0.9
171.469234,1,0.48,7.07089492,0.04944682,0.20223748,-20.02151093
186.115504,1,0.56,9.05531551,0.03551104,0.15644586,-28.00380982
5.52754,0.13777778,0.53333333,10.04982433,0.03210806,0.17302679,-30.97179621
3.691386,0,0.48,15.03326191,0.03219114,0.1515339,-30.91291524
348.310631,0,0.52,5.0989077,0.0337676,0.29614186,-29.31804393
348.690068,0,0.56,0.98058068,0.19611614,0.30594117,-4.79307834
`),!1);M(L.ParsePatFile(`
*BLOCKS-01,BLOCKS-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.31,0.66,1,1,0.22,-0.78
180,0.08,0.09,0,1,0.57,-0.43
270,0.08,0.09,1,1,0.21,-0.79
180,0.08,0.88,0,1,0.57,-0.43
270,0.51,0.09,1,1,0.21,-0.79
270,0.89,0.32,1,1,0.2,-0.8
0,0.49,0.32,0,1,0.4,-0.6
90,0.49,0.12,1,1,0.2,-0.8
180,0.89,0.12,0,1,0.4,-0.6
270,0.69,0.84,1,1,0.48,-0.52
0,0.48,0.84,0,1,0.21,-0.79
90,0.48,0.36,1,1,0.48,-0.52
180,0.69,0.36,0,1,0.21,-0.79
270,0.12,0.03,1,1,0.33,-0.67
0,0.12,0.7,0,1,0.32,-0.68
270,0.44,0.03,1,1,0.33,-0.67
0,0.12,0.03,0,1,0.32,-0.68
270,0.45,0.67,1,1,0.24,-0.76
0,0.36,0.67,0,1,0.09,-0.91
90,0.36,0.43,1,1,0.24,-0.76
180,0.45,0.43,0,1,0.09,-0.91
270,0.45,0.4,1,1,0.33,-0.67
0,0.11,0.4,0,1,0.34,-0.66
90,0.11,0.07,1,1,0.33,-0.67
180,0.45,0.07,0,1,0.34,-0.66
270,0.89,0.41,1,1,0.06,-0.94
0,0.73,0.41,0,1,0.16,-0.84
90,0.73,0.35,1,1,0.06,-0.94
180,0.89,0.35,0,1,0.16,-0.84
180,0.07,0.4,0,1,0.14,-0.86
270,0.93,0.4,1,1,0.27,-0.73
180,0.07,0.13,0,1,0.14,-0.86
270,0.07,0.4,1,1,0.27,-0.73
180,0.08,0.81,0,1,0.34,-0.66
270,0.74,0.81,1,1,0.1,-0.9
180,0.08,0.71,0,1,0.34,-0.66
270,0.08,0.81,1,1,0.1,-0.9
180,0.31,0.66,0,1,0.59,-0.41
270,0.72,0.66,1,1,0.22,-0.78
180,0.31,0.44,0,1,0.59,-0.41
`),!1);M(L.ParsePatFile(`
*BLOCKS-02,BLOCKS-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.32,0.18,0,1,0.49,-0.51
270,0.32,0.55,1,1,0.37,-0.63
0,0.37,0.96,0,1,0.42,-0.58
0,0.17,0.98,0,1,0.17,-0.83
90,0.82,0,1,1,0.15,-0.85
180,0.92,0,0,1,0.1,-0.9
180,0.32,0.55,0,1,0.49,-0.51
270,0.83,0.55,1,1,0.37,-0.63
180,0.13,0.8,0,1,0.18,-0.82
90,0.14,0.59,1,1,0.17,-0.83
270,0.13,0.15,1,1,0.35,-0.65
180,0.71,0.59,0,1,0.57,-0.43
270,0.92,0.15,1,1,0.15,-0.85
0,0.82,0.15,0,1,0.1,-0.9
270,0.71,0.76,1,1,0.17,-0.83
0,0.14,0.76,0,1,0.57,-0.43
180,0.08,0.59,0,1,0.32,-0.68
270,0.08,0.76,1,1,0.17,-0.83
180,0.13,0.15,0,1,0.18,-0.82
270,0.95,0.15,1,1,0.35,-0.65
90,0.18,0.8,1,1,0.13,-0.87
180,0.91,0.8,0,1,0.73,-0.27
180,0.08,0.76,0,1,0.32,-0.68
270,0.76,0.76,1,1,0.17,-0.83
270,0.34,0.15,1,1,0.17,-0.83
0,0.17,0.15,0,1,0.17,-0.83
270,0.91,0.93,1,1,0.13,-0.87
0,0.18,0.93,0,1,0.73,-0.27
0,0.37,0.55,0,1,0.42,-0.58
270,0.37,0.55,1,1,0.59,-0.41
270,0.17,0.15,1,1,0.17,-0.83
270,0.79,0.55,1,1,0.59,-0.41
`),!1);M(L.ParsePatFile(`
*BOXJOIN-01,BOXJOIN-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
90,0.15000001,0.15,1,1,0.7,-0.3
0,0.15000001,0.85,0,1,0.7,-0.3
270,0.45000001,0.15,1,1,0.3,-0.7
180,0.15000001,0.45,0,1,0.3,-0.7
270,0.55000001,0.15,1,1,0.3,-0.7
180,0.85000001,0.15,0,1,0.7,-0.3
270,0.85000001,0.85,1,1,0.7,-0.3
180,0.15000001,0.55,0,1,0.3,-0.7
`),!1);M(L.ParsePatFile(`
*BOXJOIN-02,BOXJOIN-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
90,0.15000001,0.55,1,1,0.3,-0.7
270,0.85000001,0.85,1,1,0.3,-0.7
0,0.55000001,0.85,0,1,0.3,-0.7
180,0.15000001,0.55,0,1,0.3,-0.7
90,0.15000001,0.15,1,1,0.3,-0.7
180,0.45000001,0.15,0,1,0.3,-0.7
180,0.15000001,0.45,0,1,0.3,-0.7
180,0.85000001,0.15,0,1,0.3,-0.7
270,0.85000001,0.45,1,1,0.3,-0.7
270,0.45000001,0.15,1,1,0.3,-0.7
270,0.55000001,0.15,1,1,0.3,-0.7
0,0.15000001,0.85,0,1,0.3,-0.7
`),!1);M(L.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,1
90, .25,0, 0,1
0, 0,0, 0,1, -.25,.25
0, 0,.25, 0,1, -.25,.25
0, 0,.5, 0,1, .25,-.25
0, 0,.75, 0,1, .25,-.25
90, .5,0, 0,1, .25,-.25
90, .75,0, 0,1, .25,-.25
`),!1);M(L.ParsePatFile(`
*BOX-OVERLAP,BOX-OVERLAP verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.2,0.7,0,1,0.4,-0.6
90,0.2,0.2,1,1,0.6,-0.4
270,0.3,0.2,1,1,0.4,-0.6
180,0.2,0.3,0,1,0.4,-0.6
0,0.2,0.8,0,1,0.6,-0.4
180,0.8,0.2,0,1,0.6,-0.4
270,0.8,0.8,1,1,0.6,-0.4
270,0.7,0.2,1,1,0.4,-0.6
`),!1);M(L.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.0625
`),!1);M(L.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,.25
90, 0,0, 0,.5, .25,-.25
90, .25,0, 0,.5, -.25,.25
`),!1);M(L.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,.33
90, .9,0, .33,.5, .33,-.33
90, .8,0, .33,.5, .33,-.33
0, .9,.055, .5,.33, -.9,.1
0, .9,.11, .5,.33, -.9,.1
0, .9,.165, .5,.33, -.9,.1
0, .9,.22, .5,.33, -.9,.1
0, .9,.275, .5,.33, -.9,.1
`),!1);M(L.ParsePatFile(`
*BUBBLES-01,BUBBLES-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.058964,0.016739,0,1,0,-1
0,0.062236,0.033193,0,1,0,-1
0,0.067629,0.049078,0,1,0,-1
0,0.075048,0.064123,0,1,0,-1
0,0.084368,0.078071,0,1,0,-1
0,0.095429,0.090684,0,1,0,-1
0,0.108041,0.101745,0,1,0,-1
0,0.12199,0.111065,0,1,0,-1
0,0.137035,0.118484,0,1,0,-1
0,0.15292,0.123876,0,1,0,-1
0,0.169373,0.127149,0,1,0,-1
0,0.186113,0.128246,0,1,0,-1
0,0.202852,0.127149,0,1,0,-1
0,0.219305,0.123876,0,1,0,-1
0,0.23519,0.118484,0,1,0,-1
0,0.250236,0.111065,0,1,0,-1
0,0.264184,0.101745,0,1,0,-1
0,0.276796,0.090684,0,1,0,-1
0,0.287857,0.078071,0,1,0,-1
0,0.297177,0.064123,0,1,0,-1
0,0.304597,0.049078,0,1,0,-1
0,0.309989,0.033193,0,1,0,-1
0,0.313262,0.016739,0,1,0,-1
0,0.120008,0.220248,0,1,0,-1
0,0.117478,0.203192,0,1,0,-1
0,0.113288,0.186467,0,1,0,-1
0,0.10748,0.170233,0,1,0,-1
0,0.100108,0.154647,0,1,0,-1
0,0.091244,0.139858,0,1,0,-1
0,0.080973,0.126009,0,1,0,-1
0,0.069394,0.113234,0,1,0,-1
0,0.056618,0.101655,0,1,0,-1
0,0.04277,0.091384,0,1,0,-1
0,0.027981,0.08252,0,1,0,-1
0,0.012394,0.075148,0,1,0,-1
0,0.012394,0.39979,0,1,0,-1
0,0.027981,0.392418,0,1,0,-1
0,0.04277,0.383554,0,1,0,-1
0,0.056618,0.373283,0,1,0,-1
0,0.069394,0.361704,0,1,0,-1
0,0.080973,0.348929,0,1,0,-1
0,0.091244,0.33508,0,1,0,-1
0,0.100108,0.320291,0,1,0,-1
0,0.10748,0.304704,0,1,0,-1
0,0.113288,0.28847,0,1,0,-1
0,0.117478,0.271745,0,1,0,-1
0,0.120008,0.25469,0,1,0,-1
0,0.120854,0.237469,0,1,0,-1
0,0.738076,0.372319,0,1,0,-1
0,0.732613,0.356706,0,1,0,-1
0,0.723812,0.3427,0,1,0,-1
0,0.712116,0.331003,0,1,0,-1
0,0.69811,0.322203,0,1,0,-1
0,0.682497,0.316739,0,1,0,-1
0,0.666059,0.314887,0,1,0,-1
0,0.649622,0.316739,0,1,0,-1
0,0.634009,0.322203,0,1,0,-1
0,0.620003,0.331003,0,1,0,-1
0,0.608306,0.3427,0,1,0,-1
0,0.599506,0.356706,0,1,0,-1
0,0.594042,0.372319,0,1,0,-1
0,0.59219,0.388756,0,1,0,-1
0,0.594042,0.405194,0,1,0,-1
0,0.599506,0.420807,0,1,0,-1
0,0.608306,0.434813,0,1,0,-1
0,0.620003,0.44651,0,1,0,-1
0,0.634009,0.45531,0,1,0,-1
0,0.649622,0.460773,0,1,0,-1
0,0.666059,0.462625,0,1,0,-1
0,0.682497,0.460773,0,1,0,-1
0,0.69811,0.45531,0,1,0,-1
0,0.712116,0.44651,0,1,0,-1
0,0.723812,0.434813,0,1,0,-1
0,0.732613,0.420807,0,1,0,-1
0,0.738076,0.405194,0,1,0,-1
0,0.739928,0.388756,0,1,0,-1
0,0.834916,0.831041,0,1,0,-1
0,0.821448,0.840826,0,1,0,-1
0,0.810309,0.853198,0,1,0,-1
0,0.462763,0.750408,0,1,0,-1
0,0.458683,0.734294,0,1,0,-1
0,0.452005,0.71907,0,1,0,-1
0,0.442913,0.705153,0,1,0,-1
0,0.431654,0.692923,0,1,0,-1
0,0.418536,0.682713,0,1,0,-1
0,0.403916,0.674801,0,1,0,-1
0,0.388193,0.669403,0,1,0,-1
0,0.371796,0.666667,0,1,0,-1
0,0.355172,0.666667,0,1,0,-1
0,0.338776,0.669403,0,1,0,-1
0,0.323053,0.674801,0,1,0,-1
0,0.308433,0.682713,0,1,0,-1
0,0.295314,0.692923,0,1,0,-1
0,0.284056,0.705153,0,1,0,-1
0,0.274963,0.71907,0,1,0,-1
0,0.268286,0.734294,0,1,0,-1
0,0.264205,0.750408,0,1,0,-1
0,0.262832,0.766975,0,1,0,-1
0,0.264205,0.783542,0,1,0,-1
0,0.268286,0.799657,0,1,0,-1
0,0.274963,0.81488,0,1,0,-1
0,0.284056,0.828797,0,1,0,-1
0,0.295314,0.841027,0,1,0,-1
0,0.308433,0.851238,0,1,0,-1
0,0.323053,0.85915,0,1,0,-1
0,0.403916,0.85915,0,1,0,-1
0,0.418536,0.851238,0,1,0,-1
0,0.431654,0.841027,0,1,0,-1
0,0.442913,0.828797,0,1,0,-1
0,0.452005,0.81488,0,1,0,-1
0,0.458683,0.799657,0,1,0,-1
0,0.462763,0.783542,0,1,0,-1
0,0.464136,0.766975,0,1,0,-1
0,0.821196,0.648394,0,1,0,-1
0,0.818556,0.631724,0,1,0,-1
0,0.814188,0.615423,0,1,0,-1
0,0.808139,0.599667,0,1,0,-1
0,0.800477,0.584629,0,1,0,-1
0,0.791286,0.570475,0,1,0,-1
0,0.780665,0.557359,0,1,0,-1
0,0.768731,0.545425,0,1,0,-1
0,0.755615,0.534804,0,1,0,-1
0,0.741461,0.525612,0,1,0,-1
0,0.726423,0.51795,0,1,0,-1
0,0.710667,0.511902,0,1,0,-1
0,0.694365,0.507534,0,1,0,-1
0,0.677696,0.504894,0,1,0,-1
0,0.660842,0.504011,0,1,0,-1
0,0.643989,0.504894,0,1,0,-1
0,0.627319,0.507534,0,1,0,-1
0,0.611018,0.511902,0,1,0,-1
0,0.595262,0.51795,0,1,0,-1
0,0.580224,0.525612,0,1,0,-1
0,0.56607,0.534804,0,1,0,-1
0,0.552954,0.545425,0,1,0,-1
0,0.54102,0.557359,0,1,0,-1
0,0.530399,0.570475,0,1,0,-1
0,0.521207,0.584629,0,1,0,-1
0,0.513545,0.599667,0,1,0,-1
0,0.507497,0.615423,0,1,0,-1
0,0.503129,0.631724,0,1,0,-1
0,0.500489,0.648394,0,1,0,-1
0,0.499606,0.665247,0,1,0,-1
0,0.500489,0.682101,0,1,0,-1
0,0.503129,0.69877,0,1,0,-1
0,0.507497,0.715072,0,1,0,-1
0,0.513545,0.730828,0,1,0,-1
0,0.521207,0.745866,0,1,0,-1
0,0.530399,0.76002,0,1,0,-1
0,0.54102,0.773136,0,1,0,-1
0,0.552954,0.785069,0,1,0,-1
0,0.56607,0.795691,0,1,0,-1
0,0.580224,0.804882,0,1,0,-1
0,0.595262,0.812544,0,1,0,-1
0,0.611018,0.818592,0,1,0,-1
0,0.627319,0.822961,0,1,0,-1
0,0.643989,0.825601,0,1,0,-1
0,0.660842,0.826484,0,1,0,-1
0,0.677696,0.825601,0,1,0,-1
0,0.694365,0.822961,0,1,0,-1
0,0.710667,0.818592,0,1,0,-1
0,0.726423,0.812544,0,1,0,-1
0,0.741461,0.804882,0,1,0,-1
0,0.755615,0.795691,0,1,0,-1
0,0.768731,0.785069,0,1,0,-1
0,0.780665,0.773136,0,1,0,-1
0,0.791286,0.76002,0,1,0,-1
0,0.800477,0.745866,0,1,0,-1
0,0.808139,0.730828,0,1,0,-1
0,0.814188,0.715072,0,1,0,-1
0,0.818556,0.69877,0,1,0,-1
0,0.821196,0.682101,0,1,0,-1
0,0.822079,0.665247,0,1,0,-1
0,0.524311,0.381738,0,1,0,-1
0,0.521577,0.364477,0,1,0,-1
0,0.517054,0.347597,0,1,0,-1
0,0.510791,0.331282,0,1,0,-1
0,0.502858,0.315711,0,1,0,-1
0,0.49334,0.301054,0,1,0,-1
0,0.482342,0.287473,0,1,0,-1
0,0.469984,0.275116,0,1,0,-1
0,0.456403,0.264118,0,1,0,-1
0,0.441747,0.2546,0,1,0,-1
0,0.426175,0.246666,0,1,0,-1
0,0.40986,0.240403,0,1,0,-1
0,0.39298,0.23588,0,1,0,-1
0,0.375719,0.233146,0,1,0,-1
0,0.358267,0.232232,0,1,0,-1
0,0.340816,0.233146,0,1,0,-1
0,0.323555,0.23588,0,1,0,-1
0,0.306674,0.240403,0,1,0,-1
0,0.290359,0.246666,0,1,0,-1
0,0.274788,0.2546,0,1,0,-1
0,0.260132,0.264118,0,1,0,-1
0,0.246551,0.275116,0,1,0,-1
0,0.234193,0.287473,0,1,0,-1
0,0.223195,0.301054,0,1,0,-1
0,0.213677,0.315711,0,1,0,-1
0,0.205743,0.331282,0,1,0,-1
0,0.199481,0.347597,0,1,0,-1
0,0.194958,0.364477,0,1,0,-1
0,0.192224,0.381738,0,1,0,-1
0,0.191309,0.39919,0,1,0,-1
0,0.192224,0.416642,0,1,0,-1
0,0.194958,0.433903,0,1,0,-1
0,0.199481,0.450783,0,1,0,-1
0,0.205743,0.467098,0,1,0,-1
0,0.213677,0.482669,0,1,0,-1
0,0.223195,0.497326,0,1,0,-1
0,0.234193,0.510907,0,1,0,-1
0,0.246551,0.523264,0,1,0,-1
0,0.260132,0.534262,0,1,0,-1
0,0.274788,0.54378,0,1,0,-1
0,0.290359,0.551714,0,1,0,-1
0,0.306674,0.557977,0,1,0,-1
0,0.323555,0.5625,0,1,0,-1
0,0.340816,0.565234,0,1,0,-1
0,0.358267,0.566148,0,1,0,-1
0,0.375719,0.565234,0,1,0,-1
0,0.39298,0.5625,0,1,0,-1
0,0.40986,0.557977,0,1,0,-1
0,0.426175,0.551714,0,1,0,-1
0,0.441747,0.54378,0,1,0,-1
0,0.456403,0.534262,0,1,0,-1
0,0.469984,0.523264,0,1,0,-1
0,0.482342,0.510907,0,1,0,-1
0,0.49334,0.497326,0,1,0,-1
0,0.502858,0.482669,0,1,0,-1
0,0.510791,0.467098,0,1,0,-1
0,0.517054,0.450783,0,1,0,-1
0,0.521577,0.433903,0,1,0,-1
0,0.524311,0.416642,0,1,0,-1
0,0.525226,0.39919,0,1,0,-1
0,0.847548,0.091384,0,1,0,-1
0,0.833699,0.101655,0,1,0,-1
0,0.820923,0.113234,0,1,0,-1
0,0.809345,0.126009,0,1,0,-1
0,0.799074,0.139858,0,1,0,-1
0,0.790209,0.154647,0,1,0,-1
0,0.782838,0.170233,0,1,0,-1
0,0.777029,0.186467,0,1,0,-1
0,0.77284,0.203192,0,1,0,-1
0,0.77031,0.220248,0,1,0,-1
0,0.769464,0.237469,0,1,0,-1
0,0.77031,0.25469,0,1,0,-1
0,0.77284,0.271745,0,1,0,-1
0,0.777029,0.28847,0,1,0,-1
0,0.782838,0.304704,0,1,0,-1
0,0.790209,0.320291,0,1,0,-1
0,0.799074,0.33508,0,1,0,-1
0,0.809345,0.348929,0,1,0,-1
0,0.820923,0.361704,0,1,0,-1
0,0.833699,0.373283,0,1,0,-1
0,0.847548,0.383554,0,1,0,-1
0,0.241252,0.63247,0,1,0,-1
0,0.238633,0.614814,0,1,0,-1
0,0.234297,0.5975,0,1,0,-1
0,0.228283,0.580695,0,1,0,-1
0,0.220652,0.56456,0,1,0,-1
0,0.211476,0.54925,0,1,0,-1
0,0.200843,0.534914,0,1,0,-1
0,0.188857,0.521689,0,1,0,-1
0,0.175632,0.509702,0,1,0,-1
0,0.161296,0.49907,0,1,0,-1
0,0.145986,0.489894,0,1,0,-1
0,0.129851,0.482262,0,1,0,-1
0,0.113046,0.476249,0,1,0,-1
0,0.095732,0.471912,0,1,0,-1
0,0.078076,0.469293,0,1,0,-1
0,0.060249,0.468417,0,1,0,-1
0,0.042421,0.469293,0,1,0,-1
0,0.024766,0.471912,0,1,0,-1
0,0.007452,0.476249,0,1,0,-1
0,0.007452,0.824345,0,1,0,-1
0,0.024766,0.828682,0,1,0,-1
0,0.042421,0.831301,0,1,0,-1
0,0.060249,0.832177,0,1,0,-1
0,0.078076,0.831301,0,1,0,-1
0,0.095732,0.828682,0,1,0,-1
0,0.113046,0.824345,0,1,0,-1
0,0.129851,0.818332,0,1,0,-1
0,0.145986,0.8107,0,1,0,-1
0,0.161296,0.801524,0,1,0,-1
0,0.175632,0.790892,0,1,0,-1
0,0.188857,0.778905,0,1,0,-1
0,0.200843,0.76568,0,1,0,-1
0,0.211476,0.751344,0,1,0,-1
0,0.220652,0.736034,0,1,0,-1
0,0.228283,0.719899,0,1,0,-1
0,0.234297,0.703094,0,1,0,-1
0,0.238633,0.68578,0,1,0,-1
0,0.241252,0.668124,0,1,0,-1
0,0.242128,0.650297,0,1,0,-1
0,0.771442,0.048085,0,1,0,-1
0,0.768672,0.029409,0,1,0,-1
0,0.764084,0.011095,0,1,0,-1
0,0.39588,0.011095,0,1,0,-1
0,0.391292,0.029409,0,1,0,-1
0,0.388522,0.048085,0,1,0,-1
0,0.387595,0.066942,0,1,0,-1
0,0.388522,0.085799,0,1,0,-1
0,0.391292,0.104475,0,1,0,-1
0,0.39588,0.122789,0,1,0,-1
0,0.40224,0.140565,0,1,0,-1
0,0.410312,0.157632,0,1,0,-1
0,0.420018,0.173826,0,1,0,-1
0,0.431265,0.18899,0,1,0,-1
0,0.443944,0.20298,0,1,0,-1
0,0.457933,0.215659,0,1,0,-1
0,0.473098,0.226905,0,1,0,-1
0,0.489292,0.236612,0,1,0,-1
0,0.506359,0.244684,0,1,0,-1
0,0.524135,0.251044,0,1,0,-1
0,0.542449,0.255632,0,1,0,-1
0,0.561125,0.258402,0,1,0,-1
0,0.579982,0.259328,0,1,0,-1
0,0.598839,0.258402,0,1,0,-1
0,0.617515,0.255632,0,1,0,-1
0,0.635829,0.251044,0,1,0,-1
0,0.653605,0.244684,0,1,0,-1
0,0.670672,0.236612,0,1,0,-1
0,0.686866,0.226905,0,1,0,-1
0,0.702031,0.215659,0,1,0,-1
0,0.71602,0.20298,0,1,0,-1
0,0.728699,0.18899,0,1,0,-1
0,0.739945,0.173826,0,1,0,-1
0,0.749652,0.157632,0,1,0,-1
0,0.757724,0.140565,0,1,0,-1
0,0.764084,0.122789,0,1,0,-1
0,0.768672,0.104475,0,1,0,-1
0,0.771442,0.085799,0,1,0,-1
0,0.772368,0.066942,0,1,0,-1
0,0.990646,0.482262,0,1,0,-1
0,0.974511,0.489894,0,1,0,-1
0,0.959202,0.49907,0,1,0,-1
0,0.944866,0.509702,0,1,0,-1
0,0.93164,0.521689,0,1,0,-1
0,0.919654,0.534914,0,1,0,-1
0,0.909021,0.54925,0,1,0,-1
0,0.899845,0.56456,0,1,0,-1
0,0.892214,0.580695,0,1,0,-1
0,0.886201,0.5975,0,1,0,-1
0,0.881864,0.614814,0,1,0,-1
0,0.879245,0.63247,0,1,0,-1
0,0.878369,0.650297,0,1,0,-1
0,0.879245,0.668124,0,1,0,-1
0,0.881864,0.68578,0,1,0,-1
0,0.886201,0.703094,0,1,0,-1
0,0.892214,0.719899,0,1,0,-1
0,0.899845,0.736034,0,1,0,-1
0,0.909021,0.751344,0,1,0,-1
0,0.919654,0.76568,0,1,0,-1
0,0.93164,0.778905,0,1,0,-1
0,0.944866,0.790892,0,1,0,-1
0,0.959202,0.801524,0,1,0,-1
0,0.974511,0.8107,0,1,0,-1
0,0.990646,0.818332,0,1,0,-1
0,0.947478,0.867615,0,1,0,-1
0,0.939155,0.853198,0,1,0,-1
0,0.928015,0.840826,0,1,0,-1
0,0.914547,0.831041,0,1,0,-1
0,0.899339,0.82427,0,1,0,-1
0,0.883055,0.820809,0,1,0,-1
0,0.866408,0.820809,0,1,0,-1
0,0.850124,0.82427,0,1,0,-1
0,0.801985,0.867615,0,1,0,-1
0,0.99616,0.069339,0,1,0,-1
0,0.979435,0.06515,0,1,0,-1
0,0.96238,0.06262,0,1,0,-1
0,0.945159,0.061774,0,1,0,-1
0,0.927938,0.06262,0,1,0,-1
0,0.910882,0.06515,0,1,0,-1
0,0.894157,0.069339,0,1,0,-1
0,0.877923,0.075148,0,1,0,-1
0,0.862337,0.08252,0,1,0,-1
0,0.862337,0.392418,0,1,0,-1
0,0.877923,0.39979,0,1,0,-1
0,0.894157,0.405599,0,1,0,-1
0,0.910882,0.409788,0,1,0,-1
0,0.927938,0.412318,0,1,0,-1
0,0.945159,0.413164,0,1,0,-1
0,0.96238,0.412318,0,1,0,-1
0,0.979435,0.409788,0,1,0,-1
0,0.99616,0.405599,0,1,0,-1
0,0.757724,0.993319,0,1,0,-1
0,0.749652,0.976251,0,1,0,-1
0,0.739945,0.960058,0,1,0,-1
0,0.728699,0.944893,0,1,0,-1
0,0.71602,0.930904,0,1,0,-1
0,0.702031,0.918225,0,1,0,-1
0,0.686866,0.906978,0,1,0,-1
0,0.670672,0.897272,0,1,0,-1
0,0.653605,0.8892,0,1,0,-1
0,0.635829,0.882839,0,1,0,-1
0,0.617515,0.878252,0,1,0,-1
0,0.598839,0.875482,0,1,0,-1
0,0.579982,0.874555,0,1,0,-1
0,0.561125,0.875482,0,1,0,-1
0,0.542449,0.878252,0,1,0,-1
0,0.524135,0.882839,0,1,0,-1
0,0.506359,0.8892,0,1,0,-1
0,0.489292,0.897272,0,1,0,-1
0,0.473098,0.906978,0,1,0,-1
0,0.457933,0.918225,0,1,0,-1
0,0.443944,0.930904,0,1,0,-1
0,0.431265,0.944893,0,1,0,-1
0,0.420018,0.960058,0,1,0,-1
0,0.410312,0.976251,0,1,0,-1
0,0.40224,0.993319,0,1,0,-1
0,0.796841,0.883448,0,1,0,-1
0,0.795101,0.900004,0,1,0,-1
0,0.796841,0.91656,0,1,0,-1
0,0.801985,0.932393,0,1,0,-1
0,0.810309,0.94681,0,1,0,-1
0,0.821448,0.959181,0,1,0,-1
0,0.834916,0.968966,0,1,0,-1
0,0.338776,0.864547,0,1,0,-1
0,0.355172,0.867283,0,1,0,-1
0,0.371796,0.867283,0,1,0,-1
0,0.388193,0.864547,0,1,0,-1
0,0.313262,0.983261,0,1,0,-1
0,0.309989,0.966807,0,1,0,-1
0,0.304597,0.950922,0,1,0,-1
0,0.297177,0.935877,0,1,0,-1
0,0.287857,0.921929,0,1,0,-1
0,0.276796,0.909316,0,1,0,-1
0,0.264184,0.898255,0,1,0,-1
0,0.250236,0.888935,0,1,0,-1
0,0.23519,0.881516,0,1,0,-1
0,0.219305,0.876124,0,1,0,-1
0,0.202852,0.872851,0,1,0,-1
0,0.186113,0.871754,0,1,0,-1
0,0.169373,0.872851,0,1,0,-1
0,0.15292,0.876124,0,1,0,-1
0,0.137035,0.881516,0,1,0,-1
0,0.12199,0.888935,0,1,0,-1
0,0.108041,0.898255,0,1,0,-1
0,0.095429,0.909316,0,1,0,-1
0,0.084368,0.921929,0,1,0,-1
0,0.075048,0.935877,0,1,0,-1
0,0.067629,0.950922,0,1,0,-1
0,0.062236,0.966807,0,1,0,-1
0,0.058964,0.983261,0,1,0,-1
0,0.057866,1,0,1,0,-1
0,0.314359,1,0,1,0,-1
0,0.952623,0.883448,0,1,0,-1
0,0.850124,0.975738,0,1,0,-1
0,0.866408,0.979199,0,1,0,-1
0,0.883055,0.979199,0,1,0,-1
0,0.899339,0.975738,0,1,0,-1
0,0.914547,0.968966,0,1,0,-1
0,0.928015,0.959181,0,1,0,-1
0,0.939155,0.94681,0,1,0,-1
0,0.947478,0.932393,0,1,0,-1
0,0.952623,0.91656,0,1,0,-1
0,0.954363,0.900004,0,1,0,-1
`),!1);M(L.ParsePatFile(`
*BUBBLES-02,BUBBLES-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.01243,0.139689,0,1,0,-1
0,0.004689,0.124495,0,1,0,-1
0,0.004689,0.188567,0,1,0,-1
0,0.01243,0.173373,0,1,0,-1
0,0.015098,0.156531,0,1,0,-1
0,0.039159,0.550628,0,1,0,-1
0,0.03308,0.534599,0,1,0,-1
0,0.023341,0.52049,0,1,0,-1
0,0.010509,0.509122,0,1,0,-1
0,0.010509,0.626172,0,1,0,-1
0,0.023341,0.614804,0,1,0,-1
0,0.03308,0.600695,0,1,0,-1
0,0.039159,0.584666,0,1,0,-1
0,0.041226,0.567647,0,1,0,-1
0,0.012655,0.061217,0,1,0,-1
0,0.029343,0.064052,0,1,0,-1
0,0.046244,0.065001,0,1,0,-1
0,0.063146,0.064052,0,1,0,-1
0,0.079834,0.061217,0,1,0,-1
0,0.0961,0.05653,0,1,0,-1
0,0.11174,0.050052,0,1,0,-1
0,0.126555,0.041864,0,1,0,-1
0,0.140361,0.032069,0,1,0,-1
0,0.152983,0.020789,0,1,0,-1
0,0.164263,0.008167,0,1,0,-1
0,0.211752,0.623376,0,1,0,-1
0,0.203326,0.608782,0,1,0,-1
0,0.190416,0.597949,0,1,0,-1
0,0.17458,0.592185,0,1,0,-1
0,0.157727,0.592185,0,1,0,-1
0,0.141891,0.597949,0,1,0,-1
0,0.128981,0.608782,0,1,0,-1
0,0.120555,0.623376,0,1,0,-1
0,0.117628,0.639973,0,1,0,-1
0,0.120555,0.65657,0,1,0,-1
0,0.128981,0.671164,0,1,0,-1
0,0.141891,0.681997,0,1,0,-1
0,0.157727,0.687761,0,1,0,-1
0,0.17458,0.687761,0,1,0,-1
0,0.190416,0.681997,0,1,0,-1
0,0.203326,0.671164,0,1,0,-1
0,0.211752,0.65657,0,1,0,-1
0,0.214678,0.639973,0,1,0,-1
0,0.063146,0.764048,0,1,0,-1
0,0.046244,0.763099,0,1,0,-1
0,0.029343,0.764048,0,1,0,-1
0,0.3178,0.248563,0,1,0,-1
0,0.314583,0.232388,0,1,0,-1
0,0.309282,0.216771,0,1,0,-1
0,0.301988,0.20198,0,1,0,-1
0,0.292825,0.188268,0,1,0,-1
0,0.281951,0.175868,0,1,0,-1
0,0.269552,0.164994,0,1,0,-1
0,0.255839,0.155832,0,1,0,-1
0,0.241048,0.148538,0,1,0,-1
0,0.225431,0.143237,0,1,0,-1
0,0.209256,0.140019,0,1,0,-1
0,0.1928,0.138941,0,1,0,-1
0,0.176343,0.140019,0,1,0,-1
0,0.160168,0.143237,0,1,0,-1
0,0.144551,0.148538,0,1,0,-1
0,0.12976,0.155832,0,1,0,-1
0,0.116047,0.164994,0,1,0,-1
0,0.103648,0.175868,0,1,0,-1
0,0.092774,0.188268,0,1,0,-1
0,0.083612,0.20198,0,1,0,-1
0,0.076318,0.216771,0,1,0,-1
0,0.071016,0.232388,0,1,0,-1
0,0.067799,0.248563,0,1,0,-1
0,0.06672,0.26502,0,1,0,-1
0,0.067799,0.281477,0,1,0,-1
0,0.071016,0.297652,0,1,0,-1
0,0.076318,0.313268,0,1,0,-1
0,0.083612,0.32806,0,1,0,-1
0,0.092774,0.341772,0,1,0,-1
0,0.103648,0.354171,0,1,0,-1
0,0.116047,0.365045,0,1,0,-1
0,0.12976,0.374208,0,1,0,-1
0,0.144551,0.381502,0,1,0,-1
0,0.160168,0.386803,0,1,0,-1
0,0.176343,0.390021,0,1,0,-1
0,0.1928,0.391099,0,1,0,-1
0,0.209256,0.390021,0,1,0,-1
0,0.225431,0.386803,0,1,0,-1
0,0.241048,0.381502,0,1,0,-1
0,0.255839,0.374208,0,1,0,-1
0,0.269552,0.365045,0,1,0,-1
0,0.281951,0.354171,0,1,0,-1
0,0.292825,0.341772,0,1,0,-1
0,0.301988,0.32806,0,1,0,-1
0,0.309282,0.313268,0,1,0,-1
0,0.314583,0.297652,0,1,0,-1
0,0.3178,0.281477,0,1,0,-1
0,0.318879,0.26502,0,1,0,-1
0,0.710254,0.515012,0,1,0,-1
0,0.707834,0.498698,0,1,0,-1
0,0.703826,0.482701,0,1,0,-1
0,0.69827,0.467173,0,1,0,-1
0,0.691219,0.452264,0,1,0,-1
0,0.682741,0.438119,0,1,0,-1
0,0.672916,0.424872,0,1,0,-1
0,0.661841,0.412653,0,1,0,-1
0,0.649621,0.401577,0,1,0,-1
0,0.636375,0.391753,0,1,0,-1
0,0.622229,0.383274,0,1,0,-1
0,0.607321,0.376223,0,1,0,-1
0,0.591793,0.370667,0,1,0,-1
0,0.575795,0.36666,0,1,0,-1
0,0.559482,0.36424,0,1,0,-1
0,0.54301,0.363431,0,1,0,-1
0,0.526538,0.36424,0,1,0,-1
0,0.510224,0.36666,0,1,0,-1
0,0.494226,0.370667,0,1,0,-1
0,0.478698,0.376223,0,1,0,-1
0,0.46379,0.383274,0,1,0,-1
0,0.449644,0.391753,0,1,0,-1
0,0.436398,0.401577,0,1,0,-1
0,0.424178,0.412653,0,1,0,-1
0,0.413103,0.424872,0,1,0,-1
0,0.403279,0.438119,0,1,0,-1
0,0.3948,0.452264,0,1,0,-1
0,0.387749,0.467173,0,1,0,-1
0,0.382193,0.482701,0,1,0,-1
0,0.378186,0.498698,0,1,0,-1
0,0.375766,0.515012,0,1,0,-1
0,0.374957,0.531484,0,1,0,-1
0,0.375766,0.547956,0,1,0,-1
0,0.378186,0.56427,0,1,0,-1
0,0.382193,0.580267,0,1,0,-1
0,0.387749,0.595795,0,1,0,-1
0,0.3948,0.610704,0,1,0,-1
0,0.403279,0.624849,0,1,0,-1
0,0.413103,0.638096,0,1,0,-1
0,0.424178,0.650315,0,1,0,-1
0,0.436398,0.661391,0,1,0,-1
0,0.449644,0.671215,0,1,0,-1
0,0.46379,0.679694,0,1,0,-1
0,0.478698,0.686745,0,1,0,-1
0,0.494226,0.692301,0,1,0,-1
0,0.510224,0.696308,0,1,0,-1
0,0.526538,0.698728,0,1,0,-1
0,0.54301,0.699537,0,1,0,-1
0,0.559482,0.698728,0,1,0,-1
0,0.575795,0.696308,0,1,0,-1
0,0.591793,0.692301,0,1,0,-1
0,0.607321,0.686745,0,1,0,-1
0,0.622229,0.679694,0,1,0,-1
0,0.636375,0.671215,0,1,0,-1
0,0.649621,0.661391,0,1,0,-1
0,0.661841,0.650315,0,1,0,-1
0,0.672916,0.638096,0,1,0,-1
0,0.682741,0.624849,0,1,0,-1
0,0.691219,0.610704,0,1,0,-1
0,0.69827,0.595795,0,1,0,-1
0,0.703826,0.580267,0,1,0,-1
0,0.707834,0.56427,0,1,0,-1
0,0.710254,0.547956,0,1,0,-1
0,0.711063,0.531484,0,1,0,-1
0,0.353512,0.012986,0,1,0,-1
0,0.351649,0.029516,0,1,0,-1
0,0.351027,0.046139,0,1,0,-1
0,0.351649,0.062761,0,1,0,-1
0,0.353512,0.079291,0,1,0,-1
0,0.356604,0.095635,0,1,0,-1
0,0.360909,0.111703,0,1,0,-1
0,0.366403,0.127404,0,1,0,-1
0,0.373055,0.14265,0,1,0,-1
0,0.380828,0.157356,0,1,0,-1
0,0.389678,0.171441,0,1,0,-1
0,0.399556,0.184825,0,1,0,-1
0,0.410406,0.197433,0,1,0,-1
0,0.422168,0.209196,0,1,0,-1
0,0.434776,0.220046,0,1,0,-1
0,0.44816,0.229924,0,1,0,-1
0,0.462245,0.238774,0,1,0,-1
0,0.476951,0.246546,0,1,0,-1
0,0.492198,0.253198,0,1,0,-1
0,0.507899,0.258692,0,1,0,-1
0,0.523966,0.262997,0,1,0,-1
0,0.54031,0.26609,0,1,0,-1
0,0.55684,0.267952,0,1,0,-1
0,0.573463,0.268574,0,1,0,-1
0,0.590085,0.267952,0,1,0,-1
0,0.606615,0.26609,0,1,0,-1
0,0.622959,0.262997,0,1,0,-1
0,0.639027,0.258692,0,1,0,-1
0,0.654727,0.253198,0,1,0,-1
0,0.669974,0.246546,0,1,0,-1
0,0.68468,0.238774,0,1,0,-1
0,0.698765,0.229924,0,1,0,-1
0,0.712149,0.220046,0,1,0,-1
0,0.724757,0.209196,0,1,0,-1
0,0.736519,0.197433,0,1,0,-1
0,0.74737,0.184825,0,1,0,-1
0,0.757248,0.171441,0,1,0,-1
0,0.766098,0.157356,0,1,0,-1
0,0.77387,0.14265,0,1,0,-1
0,0.780522,0.127404,0,1,0,-1
0,0.928226,0.008167,0,1,0,-1
0,0.939506,0.020789,0,1,0,-1
0,0.952128,0.032069,0,1,0,-1
0,0.965934,0.041864,0,1,0,-1
0,0.980749,0.050052,0,1,0,-1
0,0.996388,0.05653,0,1,0,-1
0,0.992631,0.112437,0,1,0,-1
0,0.977438,0.104696,0,1,0,-1
0,0.960595,0.102028,0,1,0,-1
0,0.943753,0.104696,0,1,0,-1
0,0.928559,0.112437,0,1,0,-1
0,0.916502,0.124495,0,1,0,-1
0,0.90876,0.139689,0,1,0,-1
0,0.906093,0.156531,0,1,0,-1
0,0.90876,0.173373,0,1,0,-1
0,0.916502,0.188567,0,1,0,-1
0,0.928559,0.200625,0,1,0,-1
0,0.943753,0.208366,0,1,0,-1
0,0.960595,0.211034,0,1,0,-1
0,0.977438,0.208366,0,1,0,-1
0,0.992631,0.200625,0,1,0,-1
0,0.995329,0.501155,0,1,0,-1
0,0.978684,0.497052,0,1,0,-1
0,0.96154,0.497052,0,1,0,-1
0,0.944895,0.501155,0,1,0,-1
0,0.929715,0.509122,0,1,0,-1
0,0.916882,0.52049,0,1,0,-1
0,0.907144,0.534599,0,1,0,-1
0,0.901065,0.550628,0,1,0,-1
0,0.898998,0.567647,0,1,0,-1
0,0.901065,0.584666,0,1,0,-1
0,0.907144,0.600695,0,1,0,-1
0,0.916882,0.614804,0,1,0,-1
0,0.929715,0.626172,0,1,0,-1
0,0.944895,0.634139,0,1,0,-1
0,0.96154,0.638242,0,1,0,-1
0,0.978684,0.638242,0,1,0,-1
0,0.995329,0.634139,0,1,0,-1
0,0.795276,0.029516,0,1,0,-1
0,0.793414,0.012986,0,1,0,-1
0,0.786016,0.111703,0,1,0,-1
0,0.790321,0.095635,0,1,0,-1
0,0.793414,0.079291,0,1,0,-1
0,0.795276,0.062761,0,1,0,-1
0,0.795898,0.046139,0,1,0,-1
0,0.790321,0.996642,0,1,0,-1
0,0.786016,0.980575,0,1,0,-1
0,0.780522,0.964874,0,1,0,-1
0,0.77387,0.949628,0,1,0,-1
0,0.766098,0.934921,0,1,0,-1
0,0.757248,0.920836,0,1,0,-1
0,0.74737,0.907452,0,1,0,-1
0,0.736519,0.894844,0,1,0,-1
0,0.724757,0.883082,0,1,0,-1
0,0.712149,0.872232,0,1,0,-1
0,0.698765,0.862354,0,1,0,-1
0,0.68468,0.853504,0,1,0,-1
0,0.669974,0.845731,0,1,0,-1
0,0.654727,0.839079,0,1,0,-1
0,0.639027,0.833585,0,1,0,-1
0,0.622959,0.82928,0,1,0,-1
0,0.606615,0.826188,0,1,0,-1
0,0.590085,0.824325,0,1,0,-1
0,0.573463,0.823703,0,1,0,-1
0,0.55684,0.824325,0,1,0,-1
0,0.54031,0.826188,0,1,0,-1
0,0.523966,0.82928,0,1,0,-1
0,0.507899,0.833585,0,1,0,-1
0,0.492198,0.839079,0,1,0,-1
0,0.476951,0.845731,0,1,0,-1
0,0.462245,0.853504,0,1,0,-1
0,0.44816,0.862354,0,1,0,-1
0,0.434776,0.872232,0,1,0,-1
0,0.422168,0.883082,0,1,0,-1
0,0.410406,0.894844,0,1,0,-1
0,0.399556,0.907452,0,1,0,-1
0,0.389678,0.920836,0,1,0,-1
0,0.380828,0.934921,0,1,0,-1
0,0.373055,0.949628,0,1,0,-1
0,0.366403,0.964874,0,1,0,-1
0,0.360909,0.980575,0,1,0,-1
0,0.356604,0.996642,0,1,0,-1
0,0.196246,0.897149,0,1,0,-1
0,0.193411,0.880461,0,1,0,-1
0,0.188725,0.864194,0,1,0,-1
0,0.182247,0.848555,0,1,0,-1
0,0.174058,0.83374,0,1,0,-1
0,0.164263,0.819934,0,1,0,-1
0,0.152983,0.807312,0,1,0,-1
0,0.140361,0.796032,0,1,0,-1
0,0.126555,0.786236,0,1,0,-1
0,0.11174,0.778048,0,1,0,-1
0,0.0961,0.77157,0,1,0,-1
0,0.079834,0.766884,0,1,0,-1
0,0.012655,0.766884,0,1,0,-1
0,0.174058,0.994361,0,1,0,-1
0,0.182247,0.979545,0,1,0,-1
0,0.188725,0.963906,0,1,0,-1
0,0.193411,0.94764,0,1,0,-1
0,0.196246,0.930951,0,1,0,-1
0,0.197195,0.91405,0,1,0,-1
0,0.996388,0.77157,0,1,0,-1
0,0.980749,0.778048,0,1,0,-1
0,0.965934,0.786236,0,1,0,-1
0,0.952128,0.796032,0,1,0,-1
0,0.939506,0.807312,0,1,0,-1
0,0.928226,0.819934,0,1,0,-1
0,0.918431,0.83374,0,1,0,-1
0,0.910242,0.848555,0,1,0,-1
0,0.903764,0.864194,0,1,0,-1
0,0.899078,0.880461,0,1,0,-1
0,0.896243,0.897149,0,1,0,-1
0,0.895293,0.91405,0,1,0,-1
0,0.896243,0.930951,0,1,0,-1
0,0.899078,0.94764,0,1,0,-1
0,0.903764,0.963906,0,1,0,-1
0,0.910242,0.979545,0,1,0,-1
0,0.918431,0.994361,0,1,0,-1
`),!1);M(L.ParsePatFile(`
*BUBBLES-03,BUBBLES-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.401131,0.163621,0,1,0,-1
0,0.397069,0.144076,0,1,0,-1
0,0.390384,0.125265,0,1,0,-1
0,0.3812,0.107541,0,1,0,-1
0,0.369688,0.091232,0,1,0,-1
0,0.356062,0.076642,0,1,0,-1
0,0.340577,0.064044,0,1,0,-1
0,0.32352,0.053672,0,1,0,-1
0,0.30521,0.045718,0,1,0,-1
0,0.285988,0.040333,0,1,0,-1
0,0.266211,0.037614,0,1,0,-1
0,0.246248,0.037614,0,1,0,-1
0,0.226471,0.040333,0,1,0,-1
0,0.207249,0.045718,0,1,0,-1
0,0.188938,0.053672,0,1,0,-1
0,0.171882,0.064044,0,1,0,-1
0,0.156397,0.076642,0,1,0,-1
0,0.142771,0.091232,0,1,0,-1
0,0.131259,0.107541,0,1,0,-1
0,0.122075,0.125265,0,1,0,-1
0,0.115389,0.144076,0,1,0,-1
0,0.111328,0.163621,0,1,0,-1
0,0.109966,0.183537,0,1,0,-1
0,0.111328,0.203453,0,1,0,-1
0,0.115389,0.222999,0,1,0,-1
0,0.122075,0.241809,0,1,0,-1
0,0.131259,0.259533,0,1,0,-1
0,0.142771,0.275842,0,1,0,-1
0,0.156397,0.290432,0,1,0,-1
0,0.171882,0.30303,0,1,0,-1
0,0.188938,0.313403,0,1,0,-1
0,0.207249,0.321356,0,1,0,-1
0,0.226471,0.326742,0,1,0,-1
0,0.246248,0.32946,0,1,0,-1
0,0.266211,0.32946,0,1,0,-1
0,0.285988,0.326742,0,1,0,-1
0,0.30521,0.321356,0,1,0,-1
0,0.32352,0.313403,0,1,0,-1
0,0.340577,0.30303,0,1,0,-1
0,0.356062,0.290432,0,1,0,-1
0,0.369688,0.275842,0,1,0,-1
0,0.3812,0.259533,0,1,0,-1
0,0.390384,0.241809,0,1,0,-1
0,0.397069,0.222999,0,1,0,-1
0,0.401131,0.203453,0,1,0,-1
0,0.402493,0.183537,0,1,0,-1
0,0.717102,0.580347,0,1,0,-1
0,0.69634,0.588567,0,1,0,-1
0,0.676773,0.599325,0,1,0,-1
0,0.658707,0.61245,0,1,0,-1
0,0.64243,0.627736,0,1,0,-1
0,0.628196,0.644941,0,1,0,-1
0,0.616231,0.663795,0,1,0,-1
0,0.606724,0.684,0,1,0,-1
0,0.599823,0.705237,0,1,0,-1
0,0.595639,0.727171,0,1,0,-1
0,0.594237,0.749457,0,1,0,-1
0,0.595639,0.771743,0,1,0,-1
0,0.599823,0.793677,0,1,0,-1
0,0.606724,0.814914,0,1,0,-1
0,0.713243,0.02088,0,1,0,-1
0,0.688246,0.022108,0,1,0,-1
0,0.663491,0.02578,0,1,0,-1
0,0.639215,0.031861,0,1,0,-1
0,0.615651,0.040292,0,1,0,-1
0,0.593028,0.050992,0,1,0,-1
0,0.571562,0.063858,0,1,0,-1
0,0.551461,0.078766,0,1,0,-1
0,0.532918,0.095573,0,1,0,-1
0,0.516111,0.114116,0,1,0,-1
0,0.501203,0.134218,0,1,0,-1
0,0.488337,0.155683,0,1,0,-1
0,0.477637,0.178307,0,1,0,-1
0,0.469206,0.20187,0,1,0,-1
0,0.463125,0.226146,0,1,0,-1
0,0.459453,0.250902,0,1,0,-1
0,0.458225,0.275898,0,1,0,-1
0,0.459453,0.300894,0,1,0,-1
0,0.463125,0.325649,0,1,0,-1
0,0.469206,0.349926,0,1,0,-1
0,0.477637,0.373489,0,1,0,-1
0,0.488337,0.396113,0,1,0,-1
0,0.501203,0.417578,0,1,0,-1
0,0.516111,0.43768,0,1,0,-1
0,0.532918,0.456223,0,1,0,-1
0,0.551461,0.473029,0,1,0,-1
0,0.571562,0.487938,0,1,0,-1
0,0.593028,0.500804,0,1,0,-1
0,0.615651,0.511504,0,1,0,-1
0,0.639215,0.519935,0,1,0,-1
0,0.663491,0.526016,0,1,0,-1
0,0.688246,0.529688,0,1,0,-1
0,0.713243,0.530916,0,1,0,-1
0,0.563094,0.659436,0,1,0,-1
0,0.558843,0.630776,0,1,0,-1
0,0.551803,0.602671,0,1,0,-1
0,0.542042,0.575392,0,1,0,-1
0,0.529655,0.5492,0,1,0,-1
0,0.514759,0.524349,0,1,0,-1
0,0.4975,0.501077,0,1,0,-1
0,0.478043,0.479609,0,1,0,-1
0,0.456575,0.460152,0,1,0,-1
0,0.433303,0.442893,0,1,0,-1
0,0.408452,0.427998,0,1,0,-1
0,0.382261,0.41561,0,1,0,-1
0,0.354981,0.405849,0,1,0,-1
0,0.326876,0.398809,0,1,0,-1
0,0.298216,0.394558,0,1,0,-1
0,0.269278,0.393136,0,1,0,-1
0,0.240339,0.394558,0,1,0,-1
0,0.21168,0.398809,0,1,0,-1
0,0.183575,0.405849,0,1,0,-1
0,0.156295,0.41561,0,1,0,-1
0,0.130104,0.427998,0,1,0,-1
0,0.105252,0.442893,0,1,0,-1
0,0.081981,0.460152,0,1,0,-1
0,0.060513,0.479609,0,1,0,-1
0,0.041056,0.501077,0,1,0,-1
0,0.023796,0.524349,0,1,0,-1
0,0.008901,0.5492,0,1,0,-1
0,0.542042,0.801357,0,1,0,-1
0,0.551803,0.774077,0,1,0,-1
0,0.558843,0.745972,0,1,0,-1
0,0.563094,0.717313,0,1,0,-1
0,0.564516,0.688374,0,1,0,-1
0,0.996513,0.575392,0,1,0,-1
0,0.986753,0.602671,0,1,0,-1
0,0.979713,0.630776,0,1,0,-1
0,0.975461,0.659436,0,1,0,-1
0,0.97404,0.688374,0,1,0,-1
0,0.975461,0.717313,0,1,0,-1
0,0.979713,0.745972,0,1,0,-1
0,0.986753,0.774077,0,1,0,-1
0,0.996513,0.801357,0,1,0,-1
0,0.94846,0.727171,0,1,0,-1
0,0.944275,0.705237,0,1,0,-1
0,0.937375,0.684,0,1,0,-1
0,0.927868,0.663795,0,1,0,-1
0,0.915903,0.644941,0,1,0,-1
0,0.901669,0.627736,0,1,0,-1
0,0.885391,0.61245,0,1,0,-1
0,0.867326,0.599325,0,1,0,-1
0,0.847758,0.588567,0,1,0,-1
0,0.826996,0.580347,0,1,0,-1
0,0.805368,0.574794,0,1,0,-1
0,0.783214,0.571995,0,1,0,-1
0,0.760884,0.571995,0,1,0,-1
0,0.738731,0.574794,0,1,0,-1
0,0.616231,0.835119,0,1,0,-1
0,0.628196,0.853972,0,1,0,-1
0,0.64243,0.871178,0,1,0,-1
0,0.658707,0.886464,0,1,0,-1
0,0.676773,0.899589,0,1,0,-1
0,0.69634,0.910346,0,1,0,-1
0,0.717102,0.918566,0,1,0,-1
0,0.738731,0.92412,0,1,0,-1
0,0.760884,0.926918,0,1,0,-1
0,0.783214,0.926918,0,1,0,-1
0,0.805368,0.92412,0,1,0,-1
0,0.826996,0.918566,0,1,0,-1
0,0.847758,0.910346,0,1,0,-1
0,0.867326,0.899589,0,1,0,-1
0,0.885391,0.886464,0,1,0,-1
0,0.901669,0.871178,0,1,0,-1
0,0.915903,0.853972,0,1,0,-1
0,0.927868,0.835119,0,1,0,-1
0,0.937375,0.814914,0,1,0,-1
0,0.944275,0.793677,0,1,0,-1
0,0.94846,0.771743,0,1,0,-1
0,0.949862,0.749457,0,1,0,-1
0,0.967032,0.250902,0,1,0,-1
0,0.96336,0.226146,0,1,0,-1
0,0.957279,0.20187,0,1,0,-1
0,0.948848,0.178307,0,1,0,-1
0,0.938148,0.155683,0,1,0,-1
0,0.925282,0.134218,0,1,0,-1
0,0.910374,0.114116,0,1,0,-1
0,0.893567,0.095573,0,1,0,-1
0,0.875024,0.078766,0,1,0,-1
0,0.854923,0.063858,0,1,0,-1
0,0.833457,0.050992,0,1,0,-1
0,0.810834,0.040292,0,1,0,-1
0,0.78727,0.031861,0,1,0,-1
0,0.762994,0.02578,0,1,0,-1
0,0.738239,0.022108,0,1,0,-1
0,0.738239,0.529688,0,1,0,-1
0,0.762994,0.526016,0,1,0,-1
0,0.78727,0.519935,0,1,0,-1
0,0.810834,0.511504,0,1,0,-1
0,0.833457,0.500804,0,1,0,-1
0,0.854923,0.487938,0,1,0,-1
0,0.875024,0.473029,0,1,0,-1
0,0.893567,0.456223,0,1,0,-1
0,0.910374,0.43768,0,1,0,-1
0,0.925282,0.417578,0,1,0,-1
0,0.938148,0.396113,0,1,0,-1
0,0.948848,0.373489,0,1,0,-1
0,0.957279,0.349926,0,1,0,-1
0,0.96336,0.325649,0,1,0,-1
0,0.967032,0.300894,0,1,0,-1
0,0.96826,0.275898,0,1,0,-1
0,0.4975,0.875671,0,1,0,-1
0,0.514759,0.8524,0,1,0,-1
0,0.529655,0.827549,0,1,0,-1
0,0.008901,0.827549,0,1,0,-1
0,0.023796,0.8524,0,1,0,-1
0,0.041056,0.875671,0,1,0,-1
0,0.060513,0.897139,0,1,0,-1
0,0.081981,0.916597,0,1,0,-1
0,0.105252,0.933856,0,1,0,-1
0,0.130104,0.948751,0,1,0,-1
0,0.156295,0.961139,0,1,0,-1
0,0.183575,0.9709,0,1,0,-1
0,0.21168,0.97794,0,1,0,-1
0,0.240339,0.982191,0,1,0,-1
0,0.269278,0.983612,0,1,0,-1
0,0.298216,0.982191,0,1,0,-1
0,0.326876,0.97794,0,1,0,-1
0,0.354981,0.9709,0,1,0,-1
0,0.382261,0.961139,0,1,0,-1
0,0.408452,0.948751,0,1,0,-1
0,0.433303,0.933856,0,1,0,-1
0,0.456575,0.916597,0,1,0,-1
0,0.478043,0.897139,0,1,0,-1
`),!1);M(L.ParsePatFile(`
*CELTIC-01,CELTIC PATTERN 01
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
135,0.36,0.42222222,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42222222,0.39111111,0.70710678,0.70710678,0.25848681,-1.15572675
315,0.39111111,0.57777778,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.30166667,0.63611111,0.70710678,0.70710678,0.25848681,-1.15572675
225,0.76055556,0.42611111,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.86555556,0.5,0.70710678,0.70710678,0.28048569,-1.13372787
225,0.85388889,0.33277778,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.99,0.5,0.70710678,0.70710678,0.3684812,-1.04573236
225,0.76055556,0.72944444,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.85388889,0.63611111,0.70710678,0.70710678,0.08799551,-1.32621805
90,0.99,0.90200449,0,1,0.08799551,-0.91200449
0,0.90200449,0.88000561,0,1,0.08799551,-0.91200449
0,0.83978227,0.90200449,0,1,0.15021773,-0.84978227
0,0.80333333,0.99,0,1,0.18666667,-0.81333333
90,0.90200449,0.83978227,0,1,0.04022334,-0.95977666
90,0.99,0.80333333,0,1,0.07667228,-0.92332772
180,0.09799551,0.99,0,1,0.08799551,-0.91200449
90,0.11999439,0.90200449,0,1,0.08799551,-0.91200449
90,0.09799551,0.83978227,0,1,0.15021773,-0.84978227
90,0.01,0.80333333,0,1,0.18666667,-0.81333333
180,0.16021773,0.90200449,0,1,0.04022334,-0.95977666
180,0.19666667,0.99,0,1,0.07667228,-0.92332772
270,0.01,0.09799551,0,1,0.08799551,-0.91200449
180,0.09799551,0.11999439,0,1,0.08799551,-0.91200449
180,0.16021773,0.09799551,0,1,0.15021773,-0.84978227
180,0.19666667,0.01,0,1,0.18666667,-0.81333333
270,0.09799551,0.16021773,0,1,0.04022334,-0.95977666
270,0.01,0.19666667,0,1,0.07667228,-0.92332772
45,0.70222222,0.51555556,0.70710678,0.70710678,0.40697924,-1.00723433
45,0.51555556,0.29777778,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.42611111,0.23944444,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.19666667,0.01,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.64,0.57777778,0.70710678,0.70710678,0.3705303,-1.04368326
45,0.42222222,0.39111111,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.36388889,0.30166667,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.16021773,0.09799551,0.70710678,0.70710678,0.15604125,-1.25817232
45,0.66722222,0.85388889,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.42222222,0.64,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.14611111,0.36388889,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.39111111,0.57777778,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.01,0.19666667,0.70710678,0.70710678,0.40697924,-1.00723433
45,0.72944444,0.79166667,0.70710678,0.70710678,0.15604125,-1.25817232
45,0.23944444,0.27055556,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.51555556,0.54666667,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.45333333,0.51555556,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.09799551,0.16021773,0.70710678,0.70710678,0.3705303,-1.04368326
0,0.90200449,0.01,0,1,0.08799551,-0.91200449
135,0.70222222,0.51555556,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42611111,0.79166667,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.48444444,0.70222222,0.70710678,0.70710678,0.40697924,-1.00723433
135,0.76055556,0.42611111,0.70710678,0.70710678,0.25848681,-1.15572675
135,0.99,0.19666667,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.33277778,0.69833333,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42222222,0.64,0.70710678,0.70710678,0.3705303,-1.04368326
135,0.60888889,0.42222222,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.69833333,0.36388889,0.70710678,0.70710678,0.25848681,-1.15572675
135,0.90200449,0.16021773,0.70710678,0.70710678,0.15604125,-1.25817232
135,0.63611111,0.14611111,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.14611111,0.66722222,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.80333333,0.01,0.70710678,0.70710678,0.40697924,-1.00723433
135,0.72944444,0.23944444,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.20833333,0.72944444,0.70710678,0.70710678,0.15604125,-1.25817232
135,0.83978227,0.09799551,0.70710678,0.70710678,0.3705303,-1.04368326
270,0.88000561,0.09799551,0,1,0.08799551,-0.91200449
270,0.90200449,0.16021773,0,1,0.15021773,-0.84978227
270,0.99,0.19666667,0,1,0.18666667,-0.81333333
0,0.83978227,0.09799551,0,1,0.04022334,-0.95977666
0,0.80333333,0.01,0,1,0.07667228,-0.92332772
135,0.99,0.5,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.5,0.01,0.70710678,0.70710678,0.19249018,-1.22172338
315,0.27055556,0.20833333,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.23944444,0.27055556,0.70710678,0.70710678,0.3684812,-1.04573236
315,0.01,0.5,0.70710678,0.70710678,0.19249018,-1.22172338
225,0.20833333,0.72944444,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.27055556,0.76055556,0.70710678,0.70710678,0.3684812,-1.04573236
225,0.5,0.99,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.72944444,0.79166667,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.76055556,0.72944444,0.70710678,0.70710678,0.3684812,-1.04573236
135,0.86555556,0.5,0.70710678,0.70710678,0.10449467,-1.30971889
45,0.5,0.13444444,0.70710678,0.70710678,0.10449467,-1.30971889
315,0.36388889,0.30166667,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.30166667,0.33277778,0.70710678,0.70710678,0.28048569,-1.13372787
315,0.13444444,0.5,0.70710678,0.70710678,0.10449467,-1.30971889
225,0.30166667,0.63611111,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.33277778,0.69833333,0.70710678,0.70710678,0.28048569,-1.13372787
225,0.5,0.86555556,0.70710678,0.70710678,0.10449467,-1.30971889
135,0.63611111,0.69833333,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.69833333,0.66722222,0.70710678,0.70710678,0.28048569,-1.13372787
`),!1);M(L.ParsePatFile(`
*CELTIC-02,CELTIC PATTERN 02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.438471,0.01545916,0,1,0.12305799,-0.87694201
270,0.98454084,0.438471,0,1,0.12305799,-0.87694201
270,0.01545916,0.68458699,0,1,0.12305799,-0.87694201
180,0.68458699,0.98454084,0,1,0.12305799,-0.87694201
90,0.98454084,0.4692355,0,1,0.51530534,-0.48469466
270,0.98454084,0.28464852,0,1,0.26918936,-0.73081064
180,0.438471,0.28464852,0,1,0.12305799,-0.87694201
180,0.5307645,0.31541301,0,1,0.36148285,-0.63851715
0,0.31541301,0.4692355,0,1,0.12305799,-0.87694201
0,0.16928165,0.438471,0,1,0.36148285,-0.63851715
270,0.83071835,0.68458699,0,1,0.12305799,-0.87694201
270,0.86148285,0.86148285,0,1,0.39224735,-0.60775265
270,0.5307645,0.98454084,0,1,0.12305799,-0.87694201
270,0.71535148,0.98454084,0,1,0.12305799,-0.87694201
90,0.68458699,0.71535148,0,1,0.26918936,-0.73081064
90,0.71535148,0.31541301,0,1,0.12305799,-0.87694201
90,0.68458699,0.16928165,0,1,0.36148285,-0.63851715
90,0.561529,0.71535148,0,1,0.26918936,-0.73081064
90,0.5307645,0.31541301,0,1,0.12305799,-0.87694201
90,0.561529,0.16928165,0,1,0.36148285,-0.63851715
90,0.28464852,0.561529,0,1,0.12305799,-0.87694201
90,0.28464852,0.01545916,0,1,0.12305799,-0.87694201
90,0.31541301,0.4692355,0,1,0.36148285,-0.63851715
90,0.31541301,0.01545916,0,1,0.26918936,-0.73081064
90,0.4692355,0.01545916,0,1,0.12305799,-0.87694201
90,0.4692355,0.561529,0,1,0.12305799,-0.87694201
90,0.438471,0.4692355,0,1,0.36148285,-0.63851715
90,0.438471,0.01545916,0,1,0.26918936,-0.73081064
180,0.68458699,0.71535148,0,1,0.12305799,-0.87694201
180,0.13851715,0.71535148,0,1,0.12305799,-0.87694201
180,0.28464852,0.68458699,0,1,0.26918936,-0.73081064
180,0.83071835,0.68458699,0,1,0.36148285,-0.63851715
180,0.13851715,0.5307645,0,1,0.12305799,-0.87694201
180,0.28464852,0.561529,0,1,0.26918936,-0.73081064
180,0.68458699,0.5307645,0,1,0.12305799,-0.87694201
180,0.83071835,0.561529,0,1,0.36148285,-0.63851715
180,0.98454084,0.28464852,0,1,0.12305799,-0.87694201
180,0.98454084,0.31541301,0,1,0.26918936,-0.73081064
180,0.98454084,0.4692355,0,1,0.12305799,-0.87694201
180,0.98454084,0.438471,0,1,0.26918936,-0.73081064
180,0.98454084,0.98454084,0,1,0.26918936,-0.73081064
0,0.4692355,0.01545916,0,1,0.51530534,-0.48469466
0,0.01545916,0.01545916,0,1,0.26918936,-0.73081064
270,0.01545916,0.5307645,0,1,0.51530534,-0.48469466
270,0.01545916,0.98454084,0,1,0.26918936,-0.73081064
180,0.5307645,0.98454084,0,1,0.51530534,-0.48469466
180,0.86148285,0.86148285,0,1,0.14613136,-0.85386864
90,0.86148285,0.13851715,0,1,0.14613136,-0.85386864
0,0.561529,0.16928165,0,1,0.12305799,-0.87694201
0,0.4692355,0.13851715,0,1,0.39224735,-0.60775265
0,0.13851715,0.13851715,0,1,0.14613136,-0.85386864
270,0.16928165,0.438471,0,1,0.12305799,-0.87694201
270,0.13851715,0.5307645,0,1,0.39224735,-0.60775265
270,0.13851715,0.86148285,0,1,0.14613136,-0.85386864
180,0.438471,0.83071835,0,1,0.12305799,-0.87694201
180,0.5307645,0.86148285,0,1,0.39224735,-0.60775265
`),!1);M(L.ParsePatFile(`
*CELTIC-03,CELTIC-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,6.35,13.97,0,25.4,5.08,-20.32
90,19.05,6.35,0,25.4,5.08,-20.32
0,6.35,6.35,0,25.4,12.7,-12.7
270,6.35,11.43,0,25.4,5.08,-20.32
90,3.81,3.81,0,25.4,7.62,-17.78
180,21.59,3.81,0,25.4,17.78,-7.62
270,21.59,11.43,0,25.4,7.62,-17.78
270,21.59,21.59,0,25.4,7.62,-17.78
0,3.81,21.59,0,25.4,17.78,-7.62
90,3.81,13.97,0,25.4,7.62,-17.78
270,19.05,19.05,0,25.4,5.08,-20.32
0,6.35,19.05,0,25.4,12.7,-12.7
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`),!1);M(L.ParsePatFile(`
*CELTIC-04,CELTIC-04
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,3.81,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
135,21.59,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
45,12.7,2.54,17.960512212,17.960512212,12.57235865,-23.348666028
315,3.81,11.43,17.960512212,17.960512212,12.57235865,-23.348666028
135,12.7,5.08,17.960512212,17.960512212,8.980256106,-26.940768318
225,19.05,11.43,17.960512212,17.960512212,8.980256106,-26.940768318
315,12.7,20.32,17.960512212,17.960512212,8.980256106,-26.940768318
45,6.35,13.97,17.960512212,17.960512212,8.980256106,-26.940768318
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`),!1);M(L.ParsePatFile(`
*CIRCLES-02,CIRCLES-02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.959092,0.471116,0,1,0,-1
0,0.956373,0.442347,0,1,0,-1
0,0.951852,0.413805,0,1,0,-1
0,0.945548,0.385603,0,1,0,-1
0,0.937486,0.357852,0,1,0,-1
0,0.927697,0.330663,0,1,0,-1
0,0.91622,0.304142,0,1,0,-1
0,0.903101,0.278393,0,1,0,-1
0,0.888391,0.25352,0,1,0,-1
0,0.872148,0.229619,0,1,0,-1
0,0.854436,0.206785,0,1,0,-1
0,0.835326,0.185108,0,1,0,-1
0,0.814892,0.164674,0,1,0,-1
0,0.793215,0.145564,0,1,0,-1
0,0.770381,0.127852,0,1,0,-1
0,0.74648,0.111609,0,1,0,-1
0,0.721607,0.096899,0,1,0,-1
0,0.695858,0.08378,0,1,0,-1
0,0.669337,0.072303,0,1,0,-1
0,0.642148,0.062514,0,1,0,-1
0,0.614397,0.054452,0,1,0,-1
0,0.586195,0.048148,0,1,0,-1
0,0.557653,0.043627,0,1,0,-1
0,0.528884,0.040908,0,1,0,-1
0,0.5,0.04,0,1,0,-1
0,0.471116,0.040908,0,1,0,-1
0,0.442347,0.043627,0,1,0,-1
0,0.413805,0.048148,0,1,0,-1
0,0.385603,0.054452,0,1,0,-1
0,0.357852,0.062514,0,1,0,-1
0,0.330663,0.072303,0,1,0,-1
0,0.304142,0.08378,0,1,0,-1
0,0.278393,0.096899,0,1,0,-1
0,0.25352,0.111609,0,1,0,-1
0,0.229619,0.127852,0,1,0,-1
0,0.206785,0.145564,0,1,0,-1
0,0.185108,0.164674,0,1,0,-1
0,0.164674,0.185108,0,1,0,-1
0,0.145564,0.206785,0,1,0,-1
0,0.127852,0.229619,0,1,0,-1
0,0.111609,0.25352,0,1,0,-1
0,0.096899,0.278393,0,1,0,-1
0,0.08378,0.304142,0,1,0,-1
0,0.072303,0.330663,0,1,0,-1
0,0.062514,0.357852,0,1,0,-1
0,0.054452,0.385603,0,1,0,-1
0,0.048148,0.413805,0,1,0,-1
0,0.043627,0.442347,0,1,0,-1
0,0.040908,0.471116,0,1,0,-1
0,0.04,0.5,0,1,0,-1
0,0.040908,0.528884,0,1,0,-1
0,0.043627,0.557653,0,1,0,-1
0,0.048148,0.586195,0,1,0,-1
0,0.054452,0.614397,0,1,0,-1
0,0.062514,0.642148,0,1,0,-1
0,0.072303,0.669337,0,1,0,-1
0,0.08378,0.695858,0,1,0,-1
0,0.096899,0.721607,0,1,0,-1
0,0.111609,0.74648,0,1,0,-1
0,0.127852,0.770381,0,1,0,-1
0,0.145564,0.793215,0,1,0,-1
0,0.164674,0.814892,0,1,0,-1
0,0.185108,0.835326,0,1,0,-1
0,0.206785,0.854436,0,1,0,-1
0,0.229619,0.872148,0,1,0,-1
0,0.25352,0.888391,0,1,0,-1
0,0.278393,0.903101,0,1,0,-1
0,0.304142,0.91622,0,1,0,-1
0,0.330663,0.927697,0,1,0,-1
0,0.357852,0.937486,0,1,0,-1
0,0.385603,0.945548,0,1,0,-1
0,0.413805,0.951852,0,1,0,-1
0,0.442347,0.956373,0,1,0,-1
0,0.471116,0.959092,0,1,0,-1
0,0.5,0.96,0,1,0,-1
0,0.528884,0.959092,0,1,0,-1
0,0.557653,0.956373,0,1,0,-1
0,0.586195,0.951852,0,1,0,-1
0,0.614397,0.945548,0,1,0,-1
0,0.642148,0.937486,0,1,0,-1
0,0.669337,0.927697,0,1,0,-1
0,0.695858,0.91622,0,1,0,-1
0,0.721607,0.903101,0,1,0,-1
0,0.74648,0.888391,0,1,0,-1
0,0.770381,0.872148,0,1,0,-1
0,0.793215,0.854436,0,1,0,-1
0,0.814892,0.835326,0,1,0,-1
0,0.835326,0.814892,0,1,0,-1
0,0.854436,0.793215,0,1,0,-1
0,0.872148,0.770381,0,1,0,-1
0,0.888391,0.74648,0,1,0,-1
0,0.903101,0.721607,0,1,0,-1
0,0.91622,0.695858,0,1,0,-1
0,0.927697,0.669337,0,1,0,-1
0,0.937486,0.642148,0,1,0,-1
0,0.945548,0.614397,0,1,0,-1
0,0.951852,0.586195,0,1,0,-1
0,0.956373,0.557653,0,1,0,-1
0,0.959092,0.528884,0,1,0,-1
0,0.96,0.5,0,1,0,-1
`),!1);M(L.ParsePatFile(`
*CIRCLES,CIRCLES
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.934583,0.431169,0,1,0,-1
0,0.918465,0.364033,0,1,0,-1
0,0.892043,0.300244,0,1,0,-1
0,0.855967,0.241374,0,1,0,-1
0,0.811127,0.188873,0,1,0,-1
0,0.758626,0.144033,0,1,0,-1
0,0.699756,0.107957,0,1,0,-1
0,0.635967,0.081535,0,1,0,-1
0,0.568831,0.065417,0,1,0,-1
0,0.5,0.06,0,1,0,-1
0,0.431169,0.065417,0,1,0,-1
0,0.364033,0.081535,0,1,0,-1
0,0.300244,0.107957,0,1,0,-1
0,0.241374,0.144033,0,1,0,-1
0,0.188873,0.188873,0,1,0,-1
0,0.144033,0.241374,0,1,0,-1
0,0.107957,0.300244,0,1,0,-1
0,0.081535,0.364033,0,1,0,-1
0,0.065417,0.431169,0,1,0,-1
0,0.06,0.5,0,1,0,-1
0,0.065417,0.568831,0,1,0,-1
0,0.081535,0.635967,0,1,0,-1
0,0.107957,0.699756,0,1,0,-1
0,0.144033,0.758626,0,1,0,-1
0,0.188873,0.811127,0,1,0,-1
0,0.241374,0.855967,0,1,0,-1
0,0.300244,0.892043,0,1,0,-1
0,0.364033,0.918465,0,1,0,-1
0,0.431169,0.934583,0,1,0,-1
0,0.5,0.94,0,1,0,-1
0,0.568831,0.934583,0,1,0,-1
0,0.635967,0.918465,0,1,0,-1
0,0.699756,0.892043,0,1,0,-1
0,0.758626,0.855967,0,1,0,-1
0,0.811127,0.811127,0,1,0,-1
0,0.855967,0.758626,0,1,0,-1
0,0.892043,0.699756,0,1,0,-1
0,0.918465,0.635967,0,1,0,-1
0,0.934583,0.568831,0,1,0,-1
0,0.94,0.5,0,1,0,-1
`),!1);M(L.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,.1875
0, 0,.03125, 0,.1875
0, 0,.0625, 0,.1875
0, 0,.125, 0,.1875, .1875,-.125
`),!1);M(L.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,.125
135, .0625,-.0625, 0,.35355339, .1767767,-.1767767
135, .09375,-.0625, 0,.35355339, .1767767,-.1767767
135, .125,-.0625, 0,.35355339, .1767767,-.1767767
`),!1);M(L.ParsePatFile(`
*CROSS,CROSS
0, 0,0, .25,.25, .125,-.375
90, .0625,-.0625, .25,.25, .125,-.375
`),!1);M(L.ParsePatFile(`
*DASH,DASH
0, 0,0, .125,.125, .125,-.125
`),!1);M(L.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,.25
45, 0,0, 0,.70710678, .35355339,-.70710768
`),!1);M(L.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .03125,.0625, 0,-.0625
`),!1);M(L.ParsePatFile(`
*EARTH,EARTH
0, 0,0, .25,.25, .25,-.25
0, 0,.09375, .25,.25, .25,-.25
0, 0,.1875, .25,.25, .25,-.25
90, .03125,.21875, .25,.25, .25,-.25
90, .125,.21875, .25,.25, .25,-.25
90, .21875,.21875, .25,.25, .25,-.25
`),!1);M(L.ParsePatFile(`
*ESCHER,ESCHER
60, 0,0, -.6,1.03923048, 1.1,-.1
180, 0,0, -.6,1.03923048, 1.1,-.1
300, 0,0, .6,1.03923048, 1.1,-.1
60, .1,0, -.6,1.03923048, .2,-1
300, .1,0, .6,1.03923048, .2,-1
60, -.05,.08660254, -.6,1.03923048, .2,-1
180, -.05,.08660254, -.6,1.03923048, .2,-1
300, -.05,-.08660254, .6,1.03923048, .2,-1
180, -.05,-.08660254, -.6,1.03923048, .2,-1
60, -.4,0, -.6,1.03923048, .2,-1
300, -.4,0, .6,1.03923048, .2,-1
60, .2,-.34641016, -.6,1.03923048, .2,-1
180, .2,-.34641016, -.6,1.03923048, .2,-1
300, .2,.34641016, .6,1.03923048, .2,-1
180, .2,.34641016, -.6,1.03923048, .2,-1
0, .2,.17320508, -.6,1.03923048, .7,-.5
0, .2,-.17320508, -.6,1.03923048, .7,-.5
120, .05,.25980762, .6,1.03923048, .7,-.5
120, -.25,.08660254, .6,1.03923048, .7,-.5
240, -.25,-.08660254, .6,1.03923048, .7,-.5
240, .05,-.25980762, .6,1.03923048, .7,-.5
`),!1);M(L.ParsePatFile(`
*EXPLOSION,EXPLOSION
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
270,0.45,0.11,0,1,0.11,-0.89
143.130102,0.49,0.08,3.6,0.2,0.05,-4.95
270,0.49,0.17,0,1,0.09,-0.91
112.380135,0.56,0,12.99988621,0.05439283,0.18384776,-18.20092855
75.256437,0.51,0.81,4.12279145,0.05089866,0.19646883,-19.45041388
287.525568,0.45,1,3.16187936,0.05018856,0.19924859,-19.72561026
135,0.06,0.49,0.70710678,0.70710678,0.08485281,-1.32936075
26.565051,0,0.46,1.34164079,0.4472136,0.06708204,-2.16898594
353.884496,0.72,0.49,19.10494017,0.03551104,0.28160256,-27.87865312
192.094757,1,0.55,9.2192799,0.06984303,0.28635642,-14.03146464
3.691386,0.69,0.38,15.03326191,0.03219114,0.31064449,-30.75380464
136.080924,0.96,0.12,36.06936773,0.02667853,0.3748333,-37.10849633
336.037511,0.87,0.16,7.61509624,0.10153462,0.09848858,-9.75036922
123.690068,0.97,0.01,1.38675049,0.2773501,0.18027756,-3.42527371
324.462322,0.62,0.26,3.6036768,0.11624764,0.43011626,-8.172209
117.645975,0.73,0.05,21.47086912,0.04218245,0.23706539,-23.46947379
326.309932,0.55,0.17,2.21880078,0.2773501,0.21633308,-3.3892182
106.38954,0.6,0,10.44015399,0.05643326,0.17720045,-17.5428447
153.434949,0.12,0.34,0.89442719,0.4472136,0.13416408,-2.1019039
64.798876,0.04,0.17,16.55285979,0.05322463,0.18788294,-18.60041129
202.619865,0.16,0.22,7.61538462,0.07692308,0.13,-12.87
59.036243,0.1,0.12,2.22948161,0.17149859,0.11661904,-5.71433286
211.75948,0.31,0.25,9.43389425,0.04048882,0.24698178,-24.45119629
79.215702,0.27,0.04,16.27875339,0.04677803,0.21377558,-21.16378274
212.471192,0.38,0.11,3.60473545,0.0766965,0.13038405,-12.90802076
63.434949,0.35,0.05,0.89442719,0.4472136,0.06708204,-2.16898594
135,0.4,0,0.70710678,0.70710678,0.07071068,-1.34350288
74.357754,0.33,0.75,18.68150198,0.03851856,0.2596151,-25.70189487
333.434949,0.03,0.9,0.89442719,0.4472136,0.3354102,-1.90065778
110.556045,0.18,0.5,5.38389277,0.11704115,0.42720019,-8.11680356
330.945396,0,0.6,2.23395748,0.09712859,0.2059126,-10.08971754
99.462322,0.63,0.82,5.09636861,0.16439899,0.18248288,-5.90027965
222.70939,0.76,0.94,1.41308355,0.05652334,0.17691806,-17.51488795
74.744881,0.73,0.83,4.12217269,0.0877058,0.11401754,-11.28773671
208.61046,0.95,0.95,10.29532081,0.07980869,0.25059928,-12.2793648
62.744672,0.78,0.62,2.2359057,0.02693862,0.37121422,-36.75020816
212.275644,0.97,0.74,13.03832887,0.04449942,0.22472205,-22.247483
55.00798,0.9,0.64,3.60462045,0.08192319,0.12206556,-12.08449006
158.198591,1,0.6,3.15682075,0.18569534,0.1077033,-5.27746151
51.911227,0.59,0.51,29.20615599,0.02127178,0.47010637,-46.54053072
153.434949,0.65,0.48,0.89442719,0.4472136,0.06708204,-2.16898594
35.537678,0.58,0.43,4.99864847,0.11624764,0.08602325,-8.51630201
129.289407,0.76,0.21,7.80993275,0.07035975,0.28425341,-13.928417
322.30576,0.54,0.38,16.40118003,0.0359675,0.27802878,-27.52484877
77.905243,0.51,0.24,5.09854116,0.06984303,0.14317821,-14.17464285
282.994617,0.48,0.37,4.12242429,0.07495317,0.13341664,-13.20824742
62.525568,0.35,0.12,2.23578634,0.03548867,0.28178006,-27.89622555
267.137595,0.36,0.32,0.99875234,0.04993762,0.20024984,-19.82473455
12.994617,0.1,0.26,4.12242429,0.07495317,0.26683328,-13.07483078
211.75948,0.31,0.39,9.43389425,0.04048882,0.24698178,-24.45119629
318.366461,0.22,0.47,10.62982142,0.08304548,0.12041595,-11.92117863
189.462322,0.28,0.48,5.09636861,0.16439899,0.06082763,-6.0219349
297.299572,0.12,0.79,32.64964285,0.02866518,0.34885527,-34.53667181
132.273689,0.32,0.57,1.41261287,0.06726728,0.29732137,-14.56874737
282.994617,0.29,0.7,4.12242429,0.07495317,0.13341664,-13.20824742
140.194429,0.41,0.6,6.401844,0.12803688,0.15620499,-7.65404468
268.363423,0.42,0.95,0.99959209,0.02855977,0.35014283,-34.66413997
102.200469,0.5,0.58,23.53718977,0.0264166,0.37854986,-37.4764366
250.016893,0.58,0.8,3.16112333,0.08543577,0.234094,-11.47060591
84.559668,0.56,0.59,11.04525929,0.04740455,0.21095023,-20.88407288
222.184443,0.88,0.88,14.86605071,0.02315584,0.43185646,-42.75378931
`),!1);M(L.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,.25, .25,-.25
45, .25,0, .1767767,.1767767, .0625,-.22855339,.0625,-.35355339
`),!1);M(L.ParsePatFile(`
*GRASS,GRASS
90, 0,0, .70710678,.70710678, .1875,-1.22671356
45, 0,0, 0,1, .1875,-.8125
135, 0,0, 0,1, .1875,-.8125
`),!1);M(L.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.03125
90, 0,0, 0,.125
`),!1);M(L.ParsePatFile(`
*GRAVEL-01,GRAVEL-01
;Optimize to replace existing GRAVEL Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
159.443955,0.16,0.13,3.16011097,0.11704115,0.17088007,-8.37312367
114.775141,0.22,0,2.23497695,0.06984303,0.14317821,-14.17464285
249.443955,0.32,0.08,3.16011097,0.11704115,0.08544004,-8.45856371
186.009006,0.51,0.1,9.05523386,0.05234239,0.19104973,-18.91392344
165.963757,0.71,0.05,0.9701425,0.24253563,0.20615528,-3.91695034
101.309932,0.72,0,4.11843884,0.19611614,0.0509902,-5.04802932
243.434949,0.84,0.14,0.89442719,0.4472136,0.15652476,-2.07954322
355.426079,0.49,0.13,13.03834384,0.03987261,0.25079872,-24.82907368
300.256437,0.42,0.25,5.83050758,0.07198158,0.13892444,-13.75351955
228.012788,0.6,0.45,12.04136517,0.07432941,0.26907248,-13.18455157
180,0.86,0.45,0,1,0.26,-0.74
303.690068,0.62,0.62,1.38675049,0.2773501,0.14422205,-3.46132922
225,0.72,0.72,0.70710678,0.70710678,0.14142136,-1.27279221
110.224859,0.08,0.23,8.54386101,0.04938648,0.20248457,-20.04597216
177.273689,0.29,0.22,0.99886814,0.04756515,0.21023796,-20.81355808
217.69424,0.51,0.39,11.40169752,0.0359675,0.27802878,-27.52484877
252.255328,0.59,0.64,23.08676133,0.03809697,0.26248809,-25.9863214
301.429566,0.48,0.82,15.26426391,0.04740455,0.21095023,-20.88407288
355.236358,0.24,0.84,0.99654576,0.08304548,0.24083189,-11.80076269
43.66778,0.02,0.63,1.41383129,0.0328798,0.30413813,-30.10967452
87.273689,0.01,0.42,0.99886814,0.04756515,0.21023796,-20.81355808
30.963757,0.62,0.71,3.60147029,0.17149859,0.17492856,-5.65602334
291.801409,0.58,0.81,2.22834406,0.18569534,0.1077033,-5.27746151
203.198591,0.65,0.84,2.23220936,0.13130643,0.07615773,-7.53961537
161.565051,0.77,0.8,0.9486833,0.31622777,0.12649111,-3.03578655
4.969741,0.4,0.88,11.04527609,0.04331481,0.23086793,-22.85592483
16.38954,0,0.81,10.44015399,0.05643326,0.17720045,-17.5428447
197.354025,1,0.19,3.16171493,0.059655,0.16763055,-16.59542407
74.054604,0.95,0.22,4.12081692,0.13736056,0.1456022,-7.13450769
27.645975,0.74,0.11,21.47086912,0.04218245,0.23706539,-23.46947379
145.304846,0.99,0.36,3.60499653,0.06324555,0.15811388,-15.65327442
353.157227,0.7,0.5,17.1171967,0.03971507,0.25179357,-24.92756306
171.469234,0.92,0.69,7.07089492,0.04944682,0.20223748,-20.02151093
138.814075,1,0.62,9.21906451,0.09407209,0.10630146,-10.52384435
90,1,0.56,0,1,0.06,-0.94
60.945396,0.95,0.47,2.23395748,0.09712859,0.1029563,-10.19267384
343.61046,0.83,0.86,7.27989116,0.05643326,0.17720045,-17.5428447
293.198591,0.77,1,2.23220936,0.13130643,0.15231546,-7.46345764
48.012788,0.63,0.9,12.04136517,0.07432941,0.13453624,-13.31908781
312.510447,0.29,1,1.41287877,0.06142951,0.16278821,-16.11603239
70.346176,0.17,0.86,3.16156213,0.06726728,0.14866069,-14.71740806
`),!1);M(L.ParsePatFile(`
*GRAVEL,GRAVEL
228.0128, .72,1, 12.041365,.074329, .134536,-13.319088
184.9697, .63,.9, -12.041517,.043315, .230868,-22.855925
132.5104, .4,.88, -14.865942,.06143, .162788,-16.116032
267.2737, .01,.63, -20.024928,.047565, .210238,-20.813558
292.8337, 0,.42, -12.99991,.048507, .206155,-20.409373
357.2737, .08,.23, -20.024928,.047565, .210238,-20.813558
37.6942, .29,.22, -16.40118,.035968, .278029,-27.524849
72.2553, .51,.39, 23.086761,.038097, .262488,-25.986321
121.4296, .59,.64, 15.264264,.047405, .21095,-20.884073
175.2364, .48,.82, -11.045049,.083045, .240832,-11.800763
222.3974, .24,.84, 16.278789,.032108, .311448,-30.833375
138.8141, 1,.62, 9.219065,.094072, .106301,-10.523844
171.4692, .92,.69, -13.152853,.049447, .202237,-20.021511
225, .72,.72, .707107,.707107, .141421,-1.272792
203.1986, .65,.84, -5.383564,.131306, .076158,-7.539615
291.8014, .58,.81, -3.156821,.185695, .107703,-5.277462
30.9638, .62,.71, 3.60147,.171499, .174929,-5.656023
161.5651, .77,.8, -2.213594,.316228, .126491,-3.035787
16.3895, 0,.81, 10.440154,.056433, .1772,-17.542845
70.3462, .17,.86, -11.704507,.067267, .148661,-14.717408
293.1986, .77,1, -5.383564,.131306, .152315,-7.463458
343.6105, .83,.86, -10.440154,.056433, .1772,-17.542845
339.444, 0,.19, -5.383893,.117041, .17088,-8.373124
294.7751, .16,.13, -12.082844,.069843, .143178,-14.174643
66.8014, .78,0, 5.383564,.131306, .152315,-7.463458
17.354, .84,.14, -13.60134,.059655, .167631,-16.595424
69.444, .29,0, -5.383893,.117041, .08544,-8.458564
101.3099, .72,0, 4.118439,.196116, .05099,-5.048029
165.9638, .71,.05, -3.152963,.242536, .206155,-3.91695
186.009, .51,.1, -10.049739,.052342, .19105,-18.913923
303.6901, .62,.62, -2.218801,.27735, .144222,-3.461329
353.1572, .7,.5, 17.117197,.039715, .251794,-24.927563
60.9454, .95,.47, -8.061673,.097129, .102956,-10.192674
90, 1,.56, 1,1, .06,-.94
120.2564, .49,.13, -8.061936,.071982, .138924,-13.75352
48.0128, .42,.25, 12.041365,.074329, .269072,-13.184552
0, .6,.45, 1,1, .26,-.74
325.3048, .86,.45, -12.206392,.063246, .158114,-15.653274
254.0546, .99,.36, 4.120817,.137361, .145602,-7.134508
207.646, .95,.22, 21.470869,.042182, .237065,-23.469474
175.4261, .74,.11, 13.038344,.039873, .250799,-24.829074
`),!1);M(L.ParsePatFile(`
*HATCH-DOTS,HATCH-DOTS verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
225,0.56554781,0.11554781,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.25036388,0.20036388,0.70710678,0.70710678,0.6374253,-0.77678826
225,0.12918503,0.37918503,0.70710678,0.70710678,0.71894383,-0.69526973
225,0.75438447,0.20438447,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.30962291,0.15962291,0.70710678,0.70710678,0.6636138,-0.75059977
225,0.11186858,0.46186858,0.70710678,0.70710678,0.81138689,-0.60282667
225,0.37918503,0.12918503,0.70710678,0.70710678,0.71894383,-0.69526973
225,0.11554781,0.56554781,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.20036388,0.25036388,0.70710678,0.70710678,0.6374253,-0.77678826
225,0.46186859,0.11186859,0.70710678,0.70710678,0.8113869,-0.60282666
225,0.20438447,0.75438447,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.15962291,0.30962291,0.70710678,0.70710678,0.6636138,-0.75059977
`),!1);M(L.ParsePatFile(`
*HATCH-SQRS,HATCH-SQRS verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
225,0.11,0.36,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.86,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.26,0.70710678,0.70710678,0.52325902,-0.89095454
225,0.76,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.56,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.46,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.26,0.11,0.70710678,0.70710678,0.52325902,-0.89095454
225,0.11,0.76,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.16,0.70710678,0.70710678,0.38183766,-1.0323759
225,0.16,0.11,0.70710678,0.70710678,0.38183766,-1.0323759
225,0.46,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.56,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.36,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.86,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.66,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.66,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
`),!1);M(L.ParsePatFile(`
*HEXAGONS,HEXAGONS verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
239.931417,0.21999999,0.99999998,8.06212908,0.04554875,0.21954496,-21.73495344
239.931417,0.89,0.19,8.06212908,0.04554875,0.21954496,-21.73495344
300.068583,0.78000001,0.99999998,13.89236932,0.04554875,0.21954496,-21.73495344
60.068488,0.12,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
119.931512,0.31,0.17,30.01665055,0.02626129,0.38078865,-37.69807687
300.068583,0.11,0.19,13.89236932,0.04554875,0.21954496,-21.73495344
180,0.11,0.19,0,1,0.21999996,-0.78000004
299.931512,0.69,0.83,30.01665055,0.02626129,0.38078865,-37.69807687
0,0.31,0.83,0,1,0.38,-0.62
180,0.69,0.17,0,1,0.38,-0.62
240.068488,0.88,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
180,0.11,0.81,0,1,0.21999996,-0.78000004
`),!1);M(L.ParsePatFile(`
*HEXJOIN-01,HEXJOIN-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
45,0.15,0.65,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.85,0.65,1,1,0.3,-0.7
315,0.65,0.85,0.70710678,0.70710678,0.28284271,-1.13137085
180,0.65,0.15,0,1,0.3,-0.7
270,0.55,0.15,1,1,0.3,-0.7
90,0.15,0.35,1,1,0.3,-0.7
135,0.35,0.15,0.70710678,0.70710678,0.28284271,-1.13137085
180,0.15,0.55,0,1,0.3,-0.7
270,0.45,0.15,1,1,0.3,-0.7
180,0.15,0.45,0,1,0.3,-0.7
225,0.85,0.35,0.70710678,0.70710678,0.28284271,-1.13137085
0,0.35,0.85,0,1,0.3,-0.7
`),!1);M(L.ParsePatFile(`
*HEXJOIN-02,HEXJOIN-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.85,0.45,1,1,0.1,-0.9
315,0.65,0.85,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.55,0.15,1,1,0.3,-0.7
180,0.15,0.55,0,1,0.3,-0.7
180,0.65,0.15,0,1,0.1,-0.9
45,0.15,0.65,0.70710678,0.70710678,0.28284271,-1.13137085
90,0.15,0.55,1,1,0.1,-0.9
180,0.15,0.45,0,1,0.3,-0.7
180,0.45,0.15,0,1,0.1,-0.9
270,0.45,0.15,1,1,0.3,-0.7
90,0.15,0.35,1,1,0.1,-0.9
0,0.55,0.85,0,1,0.1,-0.9
135,0.35,0.15,0.70710678,0.70710678,0.28284271,-1.13137085
0,0.35,0.85,0,1,0.1,-0.9
225,0.85,0.35,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.85,0.65,1,1,0.1,-0.9
`),!1);M(L.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,.21650635, .125,-.25
120, 0,0, 0,.21650635, .125,-.25
60, .125,0, 0,.21650635, .125,-.25
`),!1);M(L.ParsePatFile(`
*HOLLY,HOLLY
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
99.462322,0.8,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
74.744881,0.67,0.08,4.12217269,0.0877058,0.11401754,-11.28773671
68.198591,0.53,0.15,3.15682075,0.18569534,0.1077033,-5.27746151
270,0.58,0.37,0,1,0.07,-0.93
248.198591,0.75,0.35,3.15682075,0.18569534,0.1077033,-5.27746151
45,0.8,0.2,0.70710678,0.70710678,0.08485281,-1.32936075
351.869898,0.9,0.13,0.98994949,0.14142136,0.07071068,-7.00035713
0,0.86,0.13,0,1,0.04,-0.96
26.565051,0.82,0.11,1.34164079,0.4472136,0.04472136,-2.19134662
45,0.8,0.09,0.70710678,0.70710678,0.02828427,-1.38592929
341.565051,0.77,0.1,0.9486833,0.31622777,0.03162278,-3.13065488
0,0.73,0.1,0,1,0.04,-0.96
26.565051,0.71,0.09,1.34164079,0.4472136,0.02236068,-2.2137073
26.565051,0.69,0.08,1.34164079,0.4472136,0.02236068,-2.2137073
53.130102,0.66,0.04,3.6,0.2,0.05,-4.95
270,0.66,0.08,0,1,0.04,-0.96
303.690068,0.64,0.11,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.62,0.13,0.70710678,0.70710678,0.02828427,-1.38592929
345.963757,0.58,0.14,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.54,0.14,0,1,0.04,-0.96
33.690068,0.51,0.12,1.38675049,0.2773501,0.03605551,-3.56949576
255.963757,0.52,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
281.309932,0.51,0.21,4.11843884,0.19611614,0.0509902,-5.04802932
284.036243,0.5,0.25,3.15296313,0.24253563,0.04123106,-4.08187457
296.565051,0.48,0.29,1.34164079,0.4472136,0.04472136,-2.19134662
303.690068,0.46,0.32,1.38675049,0.2773501,0.03605551,-3.56949576
180,0.5,0.32,0,1,0.04,-0.96
180,0.53,0.32,0,1,0.03,-0.97
213.690068,0.56,0.34,1.38675049,0.2773501,0.03605551,-3.56949576
243.434949,0.57,0.36,0.89442719,0.4472136,0.02236068,-2.2137073
251.565051,0.58,0.39,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.59,0.36,2.21359436,0.31622777,0.03162278,-3.13065488
135,0.61,0.34,0.70710678,0.70710678,0.02828427,-1.38592929
153.434949,0.63,0.33,0.89442719,0.4472136,0.02236068,-2.2137073
161.565051,0.66,0.32,0.9486833,0.31622777,0.03162278,-3.13065488
180,0.69,0.32,0,1,0.03,-0.97
198.434949,0.72,0.33,2.21359436,0.31622777,0.03162278,-3.13065488
225,0.74,0.35,0.70710678,0.70710678,0.02828427,-1.38592929
251.565051,0.75,0.38,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.76,0.35,2.21359436,0.31622777,0.03162278,-3.13065488
116.565051,0.78,0.31,1.34164079,0.4472136,0.04472136,-2.19134662
135,0.81,0.28,0.70710678,0.70710678,0.04242641,-1.37178716
161.565051,0.84,0.27,0.9486833,0.31622777,0.03162278,-3.13065488
180,0.87,0.27,0,1,0.03,-0.97
90,0.87,0.24,0,1,0.03,-0.97
111.801409,0.89,0.19,2.22834406,0.18569534,0.05385165,-5.33131316
126.869898,0.92,0.15,1.4,0.2,0.05,-4.95
149.036243,0.97,0.12,2.22948161,0.17149859,0.05830952,-5.77264238
338.587031,0.46,0.32,24.69817132,0.01825438,0.54781384,-54.23356986
338.198591,0.8,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
323.972627,0.71,0.62,8.60201108,0.07352146,0.13601471,-13.4654558
315,0.6,0.53,0.70710678,0.70710678,0.11313708,-1.30107648
135,0.58,0.55,0.70710678,0.70710678,0.07071068,-1.34350288
126.869898,0.68,0.65,1.4,0.2,0.1,-4.9
105.945396,0.77,0.72,3.15929297,0.13736056,0.0728011,-7.20730879
30.963757,0.87,0.8,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.83,0.79,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.8,0.79,0,1,0.03,-0.97
341.565051,0.77,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
333.434949,0.75,0.81,0.89442719,0.4472136,0.02236068,-2.2137073
63.434949,0.74,0.79,0.89442719,0.4472136,0.02236068,-2.2137073
45,0.72,0.77,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.69,0.75,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.66,0.74,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.63,0.74,0,1,0.03,-0.97
341.565051,0.6,0.75,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.61,0.72,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.61,0.69,0,1,0.03,-0.97
75.963757,0.6,0.65,0.9701425,0.24253563,0.04123106,-4.08187457
45,0.57,0.62,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.53,0.61,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.5,0.61,0,1,0.03,-0.97
126.869898,0.53,0.57,1.4,0.2,0.05,-4.95
90,0.53,0.54,0,1,0.03,-0.97
75.963757,0.52,0.5,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.5,0.47,2.21880078,0.2773501,0.03605551,-3.56949576
191.309932,0.55,0.48,4.11843884,0.19611614,0.0509902,-5.04802932
168.690068,0.6,0.47,0.98058068,0.19611614,0.0509902,-5.04802932
161.565051,0.66,0.45,0.9486833,0.31622777,0.06324555,-3.09903211
143.130102,0.7,0.42,3.6,0.2,0.05,-4.95
270,0.7,0.43,0,1,0.01,-0.99
270,0.7,0.46,0,1,0.03,-0.97
243.434949,0.72,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
213.690068,0.75,0.52,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.53,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.82,0.53,0,1,0.04,-0.96
146.309932,0.85,0.51,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.83,0.54,1.38675049,0.2773501,0.03605551,-3.56949576
270,0.83,0.57,0,1,0.03,-0.97
270,0.83,0.61,0,1,0.04,-0.96
243.434949,0.85,0.65,0.89442719,0.4472136,0.04472136,-2.19134662
225,0.87,0.67,0.70710678,0.70710678,0.02828427,-1.38592929
296.565051,0.86,0.69,1.34164079,0.4472136,0.02236068,-2.2137073
270,0.86,0.71,0,1,0.02,-0.98
255.963757,0.87,0.75,0.9701425,0.24253563,0.04123106,-4.08187457
243.434949,0.89,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
233.130102,0.92,0.83,3.6,0.2,0.05,-4.95
40.601295,0.5,0.47,1.41004798,0.10846523,0.55317267,-8.66637179
195.945396,0.26,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
5.194429,0.29,0.55,10.04946781,0.09053575,0.11045361,-10.93490741
19.983107,0.28,0.68,8.54357658,0.08543577,0.117047,-11.58765291
185.710593,0.23,0.68,9.05483843,0.09950372,0.10049876,-9.94937686
164.054604,0.22,0.79,4.12081692,0.13736056,0.0728011,-7.20730879
45,0.27,0.79,0.70710678,0.70710678,0.05656854,-1.35764502
90,0.21,0.92,0,1,0.04,-0.96
75.963757,0.2,0.88,0.9701425,0.24253563,0.04123106,-4.08187457
243.434949,0.31,0.47,0.89442719,0.4472136,0.04472136,-2.19134662
236.309932,0.33,0.5,2.21880078,0.2773501,0.03605551,-3.56949576
225,0.36,0.53,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.39,0.55,1.38675049,0.2773501,0.03605551,-3.56949576
189.462322,0.45,0.56,5.09636861,0.16439899,0.06082763,-6.0219349
333.434949,0.43,0.57,0.89442719,0.4472136,0.02236068,-2.2137073
326.309932,0.4,0.59,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.38,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
270,0.38,0.66,0,1,0.04,-0.96
251.565051,0.39,0.69,0.9486833,0.31622777,0.03162278,-3.13065488
236.309932,0.41,0.72,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.44,0.74,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.4,0.74,0,1,0.04,-0.96
333.434949,0.36,0.76,0.89442719,0.4472136,0.04472136,-2.19134662
306.869898,0.33,0.8,1.4,0.2,0.05,-4.95
284.036243,0.32,0.84,3.15296313,0.24253563,0.04123106,-4.08187457
341.565051,0.29,0.85,0.9486833,0.31622777,0.03162278,-3.13065488
326.309932,0.26,0.87,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.24,0.9,1.38675049,0.2773501,0.03605551,-3.56949576
296.565051,0.21,0.96,1.34164079,0.4472136,0.06708204,-2.16898594
56.309932,0.18,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
45,0.16,0.83,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.13,0.81,1.38675049,0.2773501,0.03605551,-3.56949576
116.565051,0.14,0.79,1.34164079,0.4472136,0.02236068,-2.2137073
108.434949,0.15,0.76,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.15,0.72,0,1,0.04,-0.96
63.434949,0.13,0.68,0.89442719,0.4472136,0.04472136,-2.19134662
33.690068,0.1,0.66,1.38675049,0.2773501,0.03605551,-3.56949576
165.963757,0.14,0.65,0.9701425,0.24253563,0.04123106,-4.08187457
143.130102,0.18,0.62,3.6,0.2,0.05,-4.95
116.565051,0.2,0.58,1.34164079,0.4472136,0.04472136,-2.19134662
75.963757,0.19,0.54,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.17,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.21,0.5,0,1,0.04,-0.96
165.963757,0.25,0.49,0.9701425,0.24253563,0.04123106,-4.08187457
135,0.27,0.47,0.70710678,0.70710678,0.02828427,-1.38592929
116.565051,0.29,0.43,1.34164079,0.4472136,0.04472136,-2.19134662
278.583621,0.21,0.96,33.37663332,0.01865659,0.53600373,-53.0643694
104.036243,0.3,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.32,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.36,0.15,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.39,0.15,0,1,0.03,-0.97
206.565051,0.43,0.17,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.45,0.2,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.46,0.24,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.45,0.27,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.43,0.3,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.39,0.32,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.36,0.32,0,1,0.03,-0.97
26.565051,0.32,0.3,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.3,0.27,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.29,0.24,0.9486833,0.31622777,0.03162278,-3.13065488
104.036243,0.16,0.31,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.18,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.22,0.26,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.25,0.26,0,1,0.03,-0.97
206.565051,0.29,0.28,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.31,0.31,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.32,0.35,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.31,0.38,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.29,0.41,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.25,0.43,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.22,0.43,0,1,0.03,-0.97
26.565051,0.18,0.41,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.16,0.38,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.15,0.35,0.9486833,0.31622777,0.03162278,-3.13065488
104.036243,0.34,0.38,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.36,0.35,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.4,0.33,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.43,0.33,0,1,0.03,-0.97
206.565051,0.47,0.35,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.49,0.38,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.5,0.42,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.49,0.45,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.47,0.48,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.43,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.4,0.5,0,1,0.03,-0.97
26.565051,0.36,0.48,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.34,0.45,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.33,0.42,0.9486833,0.31622777,0.03162278,-3.13065488
`),!1);M(L.ParsePatFile(`
*HONEY,HONEY
0, 0,0, .1875,.10825317, .125,-.25
120, 0,0, .1875,.10825317, .125,-.25
60, 0,0, .1875,.10825317, -.25,.125
`),!1);M(L.ParsePatFile(`
*HOUND,HOUND
0, 0,0, .25,.0625, 1,-.5
90, 0,0, -.25,.0625, 1,-.5
`),!1);M(L.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,.375
0, 0,.125, 0,.375, .125,-.125
0, 0,.25, 0,.375, .125,-.125
`),!1);M(L.ParsePatFile(`
*LATTICE-01,LATTICE-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.08514719,0.4,0,1,0.17029438,-0.82970562
270,0.6,0.08514719,1,1,0.17029438,-0.82970562
270,0.4,0.08514719,1,1,0.17029438,-0.82970562
135,0.5,0.2679899,0.70710678,0.70710678,0.32811183,-1.08610173
225,0.7320101,0.5,0.70710678,0.70710678,0.32811183,-1.08610173
45,0.08514719,0.6,0.70710678,0.70710678,0.44526911,-0.96894445
180,0.08514719,0.6,0,1,0.17029438,-0.82970562
315,0.5,0.7320101,0.70710678,0.70710678,0.32811183,-1.08610173
45,0.2679899,0.5,0.70710678,0.70710678,0.32811183,-1.08610173
315,0.6,0.91485281,0.70710678,0.70710678,0.44526911,-0.96894445
45,0.6,0.08514719,0.70710678,0.70710678,0.44526911,-0.96894445
315,0.08514719,0.4,0.70710678,0.70710678,0.44526911,-0.96894445
`),!1);M(L.ParsePatFile(`
*LATTICE-02,LATTICE-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
270,0.61666667,1,1,1,1;,0 Removed 0 IT RENDERS A POINT
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.38333333,1,1,1,1,;0 Removed 0 IT RENDERS A POINT
`),!1);M(L.ParsePatFile(`
*LATTICE-03,LATTICE-03 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.61666667,0.38333333,1,1,0.76666666,-0.23333334
270,0.38333333,0.38333333,1,1,0.76666666,-0.23333334
`),!1);M(L.ParsePatFile(`
*LATTICE-04,LATTICE-04 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
296.565051,0.15333333,0.46,1.34164079,0.4472136,1.13294111,-1.10312687
296.565051,0.34000001,0.55333333,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.46,0.84666667,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.55333333,0.65999999,1.34164079,0.4472136,1.13294111,-1.10312687
`),!1);M(L.ParsePatFile(`
*LATTICE-05,LATTICE-05
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.775,0.075,0,1,0.15,-0.85
180,0.225,0.925,0,1,0.15,-0.85
180,0.625,0.225,0,1,0.4,-0.6
180,0.625,0.075,0,1,0.55,-0.45
270,0.625,0.225,0,1,0.15,-0.85
270,0.775,0.775,0,1,0.7,-0.3
270,0.925,0.925,0,1,0.85,-0.15
0,0.375,0.775,0,1,0.4,-0.6
0,0.375,0.925,0,1,0.55,-0.45
90,0.375,0.775,0,1,0.15,-0.85
90,0.225,0.225,0,1,0.7,-0.3
90,0.075,0.075,0,1,0.85,-0.15
`),!1);M(L.ParsePatFile(`
*LATTICE-06,LATTICE-06
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.625,0.375,0,1,0.25,-0.75
270,0.625,0.625,0,1,0.25,-0.75
0,0.375,0.625,0,1,0.25,-0.75
90,0.375,0.375,0,1,0.25,-0.75
0,0.775,0.075,0,1,0.15,-0.85
180,0.225,0.925,0,1,0.15,-0.85
180,0.625,0.225,0,1,0.4,-0.6
180,0.625,0.075,0,1,0.55,-0.45
270,0.625,0.225,0,1,0.15,-0.85
270,0.775,0.775,0,1,0.7,-0.3
270,0.925,0.925,0,1,0.85,-0.15
0,0.375,0.775,0,1,0.4,-0.6
0,0.375,0.925,0,1,0.55,-0.45
90,0.375,0.775,0,1,0.15,-0.85
90,0.225,0.225,0,1,0.7,-0.3
90,0.075,0.075,0,1,0.85,-0.15
`),!1);M(L.ParsePatFile(`
*LATTICE-07, verbose comment
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.69166667,0.69166666,1,1,0.88333333,-0.11666667
270,0.80833334,0.69166666,1,1,0.88333333,-0.11666667
270,0.19166666,0.19166667,1,1,0.88333333,-0.11666667
270,0.30833333,0.19166667,1,1,0.88333333,-0.11666667
180,0.69166667,0.30833333,0,1,0.88333333,-0.11666667
180,0.69166667,0.19166666,0,1,0.88333333,-0.11666667
180,0.19166667,0.80833334,0,1,0.88333333,-0.11666667
180,0.19166667,0.69166667,0,1,0.88333333,-0.11666667
`),!1);M(L.ParsePatFile(`
*LEAF-01,LEAF-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
83.659808,0.9,0.2,0.99388373,0.11043153,0.09055385,-8.96483129
26.565051,0.88,0.19,1.34164079,0.4472136,0.02236068,-2.2137073
14.036243,0.84,0.18,3.15296313,0.24253563,0.04123106,-4.08187457
315,0.84,0.18,0.70710678,0.70710678,0.05656854,-1.35764502
83.659808,0.84,0.18,0.99388373,0.11043153,0.09055385,-8.96483129
0,0.79,0.18,0,1,0.05,-0.95
345.963757,0.82,0.12,0.9701425,0.24253563,0.04123106,-4.08187457
326.309932,0.79,0.14,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.77,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.74,0.16,2.21359436,0.31622777,0.03162278,-3.13065488
288.434949,0.73,0.19,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.77,0.19,0,1,0.04,-0.96
258.690068,0.78,0.24,0.98058068,0.19611614,0.0509902,-5.04802932
243.434949,0.79,0.26,0.89442719,0.4472136,0.02236068,-2.2137073
225,0.82,0.29,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.85,0.31,1.38675049,0.2773501,0.03605551,-3.56949576
191.309932,0.9,0.32,4.11843884,0.19611614,0.0509902,-5.04802932
128.659808,0.3,0.42,1.40556386,0.15617376,0.06403124,-6.339093
143.130102,0.34,0.39,3.6,0.2,0.05,-4.95
153.434949,0.38,0.37,0.89442719,0.4472136,0.04472136,-2.19134662
192.528808,0.38,0.37,4.1216787,0.10846523,0.09219544,-9.12734901
105.945396,0.38,0.37,3.15929297,0.13736056,0.0728011,-7.20730879
153.434949,0.42,0.35,0.89442719,0.4472136,0.04472136,-2.19134662
149.036243,0.47,0.32,2.22948161,0.17149859,0.05830952,-5.77264238
95.710593,0.47,0.32,9.05483843,0.09950372,0.10049876,-9.94937686
194.931417,0.47,0.32,11.40157229,0.06441566,0.15524175,-15.36893295
135,0.51,0.28,0.70710678,0.70710678,0.05656854,-1.35764502
123.690068,0.53,0.25,1.38675049,0.2773501,0.03605551,-3.56949576
199.653824,0.53,0.25,11.70450662,0.06726728,0.14866069,-14.71740806
71.565051,0.53,0.25,0.9486833,0.31622777,0.09486833,-3.06740933
119.054604,0.58,0.16,8.06167266,0.09712859,0.1029563,-10.19267384
288.434949,0.58,0.14,2.21359436,0.31622777,0.06324555,-3.09903211
21.801409,0.53,0.12,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.48,0.11,4.11843884,0.19611614,0.0509902,-5.04802932
0,0.45,0.11,0,1,0.03,-0.97
341.565051,0.39,0.13,0.9486833,0.31622777,0.06324555,-3.09903211
326.309932,0.33,0.17,2.21880078,0.2773501,0.07211103,-3.53344025
308.659808,0.29,0.22,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.26,0.27,3.60147029,0.17149859,0.05830952,-5.77264238
285.945396,0.24,0.34,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.24,0.41,0,1,0.07,-0.93
279.462322,0.23,0.47,5.09636861,0.16439899,0.06082763,-6.0219349
285.945396,0.21,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
123.690068,0.23,0.51,1.38675049,0.2773501,0.03605551,-3.56949576
161.565051,0.26,0.5,0.9486833,0.31622777,0.03162278,-3.13065488
171.869898,0.33,0.49,0.98994949,0.14142136,0.07071068,-7.00035713
171.869898,0.4,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
161.565051,0.46,0.46,0.9486833,0.31622777,0.06324555,-3.09903211
161.565051,0.52,0.44,0.9486833,0.31622777,0.06324555,-3.09903211
146.309932,0.58,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
119.744881,0.62,0.33,5.82963253,0.12403473,0.08062258,-7.98163517
111.801409,0.64,0.28,2.22834406,0.18569534,0.05385165,-5.33131316
90,0.64,0.24,0,1,0.04,-0.96
75.963757,0.63,0.2,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.61,0.17,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.6,0.15,0.89442719,0.4472136,0.02236068,-2.2137073
126.869898,0.63,0.11,1.4,0.2,0.05,-4.95
45,0.6,0.08,0.70710678,0.70710678,0.04242641,-1.37178716
233.130102,0.89,0.04,3.6,0.2,0.05,-4.95
258.690068,0.07,0.05,0.98058068,0.19611614,0.0509902,-5.04802932
258.690068,0.14,0.05,0.98058068,0.19611614,0.0509902,-5.04802932
198.434949,0.26,0.02,2.21359436,0.31622777,0.06324555,-3.09903211
225,0.31,0.02,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.34,0.03,2.21359436,0.31622777,0.03162278,-3.13065488
348.690068,0.29,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
345.963757,0.25,0.05,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.21,0.07,0.89442719,0.4472136,0.04472136,-2.19134662
333.434949,0.15,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.1,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.07,0.11,0,1,0.03,-0.97
8.130102,0,0.1,6.08111832,0.14142136,0.07071068,-7.00035713
236.309932,0.02,0.23,2.21880078,0.2773501,0.03605551,-3.56949576
236.309932,0.04,0.26,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.07,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.03,0.28,0,1,0.04,-0.96
326.309932,0,0.3,2.21880078,0.2773501,0.03605551,-3.56949576
18.434949,0,0.26,2.21359436,0.31622777,0.03162278,-3.13065488
0,0,0.55,0,1,0.07,-0.93
14.036243,0.1,0.61,3.15296313,0.24253563,0.04123106,-4.08187457
21.801409,0.05,0.59,2.22834406,0.18569534,0.05385165,-5.33131316
30.963757,0,0.56,3.60147029,0.17149859,0.05830952,-5.77264238
254.054604,0.02,0.66,4.12081692,0.13736056,0.0728011,-7.20730879
158.198591,0.05,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
153.434949,0.11,0.66,0.89442719,0.4472136,0.06708204,-2.16898594
158.198591,0.16,0.64,3.15682075,0.18569534,0.05385165,-5.33131316
180,0.21,0.64,0,1,0.05,-0.95
33.690068,0.18,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
45,0.16,0.6,0.70710678,0.70710678,0.02828427,-1.38592929
53.130102,0.13,0.56,3.6,0.2,0.05,-4.95
56.309932,0.09,0.5,2.21880078,0.2773501,0.07211103,-3.53344025
51.340192,0.05,0.45,4.99756038,0.15617376,0.06403124,-6.339093
38.659808,0,0.41,1.40556386,0.15617376,0.06403124,-6.339093
180,0.82,0.48,0,1,0.1,-0.9
310.601295,0.82,0.48,1.41004798,0.10846523,0.09219544,-9.12734901
82.405357,0.82,0.48,8.06198693,0.06608186,0.15132746,-14.98141849
180,0.84,0.48,0,1,0.02,-0.98
194.036243,0.88,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
198.434949,0.91,0.5,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.83,0.37,0,1,0.08,-0.92
348.690068,0.78,0.38,0.98058068,0.19611614,0.0509902,-5.04802932
321.340192,0.73,0.42,4.99756038,0.15617376,0.06403124,-6.339093
300.963757,0.7,0.47,3.60147029,0.17149859,0.05830952,-5.77264238
21.801409,0.65,0.45,2.22834406,0.18569534,0.05385165,-5.33131316
284.036243,0.64,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.7,0.49,0,1,0.06,-0.94
261.869898,0.71,0.56,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.73,0.61,3.15682075,0.18569534,0.05385165,-5.33131316
225,0.77,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
216.869898,0.81,0.68,1.4,0.2,0.05,-4.95
198.434949,0.9,0.71,2.21359436,0.31622777,0.09486833,-3.06740933
153.434949,0.36,0.65,0.89442719,0.4472136,0.06708204,-2.16898594
170.537678,0.42,0.64,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.49,0.65,6.08111832,0.14142136,0.07071068,-7.00035713
201.801409,0.54,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
219.805571,0.6,0.72,1.40840568,0.12803688,0.0781025,-7.73214718
18.434949,0.97,0.25,2.21359436,0.31622777,0.03162278,-3.13065488
33.690068,0.94,0.23,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.94,0.23,0,1,0.04,-0.96
80.537678,0.94,0.23,0.98639392,0.16439899,0.06082763,-6.0219349
36.869898,0.9,0.2,1.4,0.2,0.05,-4.95
341.565051,0.9,0.2,0.9486833,0.31622777,0.06324555,-3.09903211
53.130102,0.97,0.16,3.6,0.2,0.05,-4.95
38.659808,0.92,0.12,1.40556386,0.15617376,0.06403124,-6.339093
9.462322,0.86,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
180,0.95,0.32,0,1,0.05,-0.95
158.198591,1,0.3,3.15682075,0.18569534,0.05385165,-5.33131316
216.869898,0.93,0.07,1.4,0.2,0.05,-4.95
206.565051,0.97,0.09,1.34164079,0.4472136,0.04472136,-2.19134662
198.434949,1,0.1,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.97,0,0,1,0.02,-0.98
26.565051,0.96,0.53,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.96,0.53,2.21880078,0.2773501,0.07211103,-3.53344025
36.869898,0.96,0.53,1.4,0.2,0.05,-4.95
30.963757,0.91,0.5,3.60147029,0.17149859,0.05830952,-5.77264238
78.690068,0.91,0.5,0.98058068,0.19611614,0.15297059,-4.94604893
156.037511,1,0.46,7.61509624,0.10153462,0.09848858,-9.75036922
30.963757,0.95,0.38,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.91,0.37,3.15296313,0.24253563,0.04123106,-4.08187457
180,1,0.71,0,1,0.1,-0.9
0,0.86,0.87,0,1,0.09,-0.91
11.309932,0.95,0.87,4.11843884,0.19611614,0.0509902,-5.04802932
135,1,0.82,0.70710678,0.70710678,0.07071068,-1.34350288
0,0.96,0.76,0,1,0.04,-0.96
345.963757,0.92,0.77,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.88,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
315,0.86,0.81,0.70710678,0.70710678,0.02828427,-1.38592929
306.869898,0.83,0.85,1.4,0.2,0.05,-4.95
11.309932,0.78,0.84,4.11843884,0.19611614,0.0509902,-5.04802932
284.036243,0.77,0.88,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.83,0.88,0,1,0.06,-0.94
14.036243,0.65,0.89,3.15296313,0.24253563,0.04123106,-4.08187457
18.434949,0.62,0.88,2.21359436,0.31622777,0.03162278,-3.13065488
33.690068,0.59,0.86,1.38675049,0.2773501,0.03605551,-3.56949576
230.194429,0.65,0.78,6.401844,0.12803688,0.0781025,-7.73214718
239.036243,0.68,0.83,2.22948161,0.17149859,0.05830952,-5.77264238
236.309932,0.72,0.89,2.21880078,0.2773501,0.07211103,-3.53344025
213.690068,0.75,0.91,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.92,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.74,0.92,0,1,0.04,-0.96
345.963757,0.7,0.93,0.9701425,0.24253563,0.04123106,-4.08187457
261.869898,0.84,0.95,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.86,1,3.15682075,0.18569534,0.05385165,-5.33131316
36.869898,0.55,0.83,1.4,0.2,0.05,-4.95
0,0.55,0.83,0,1,0.08,-0.92
78.690068,0.55,0.83,0.98058068,0.19611614,0.10198039,-4.99703912
33.690068,0.52,0.81,1.38675049,0.2773501,0.03605551,-3.56949576
30.963757,0.47,0.78,3.60147029,0.17149859,0.05830952,-5.77264238
336.037511,0.47,0.78,7.61509624,0.10153462,0.09848858,-9.75036922
79.380345,0.47,0.78,11.18017113,0.06142951,0.16278821,-16.11603239
26.565051,0.43,0.76,1.34164079,0.4472136,0.04472136,-2.19134662
9.462322,0.37,0.75,5.09636861,0.16439899,0.06082763,-6.0219349
318.814075,0.37,0.75,9.21906451,0.09407209,0.10630146,-10.52384435
82.405357,0.37,0.75,8.06198693,0.06608186,0.15132746,-14.98141849
0,0.33,0.75,0,1,0.04,-0.96
0,0.29,0.75,0,1,0.04,-0.96
0,0.2,0.76,0,1,0.06,-0.94
104.036243,0.21,0.72,3.15296313,0.24253563,0.04123106,-4.08187457
201.801409,0.26,0.74,2.22834406,0.18569534,0.05385165,-5.33131316
123.690068,0.3,0.68,1.38675049,0.2773501,0.07211103,-3.53344025
338.198591,0.65,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.59,0.98,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.54,0.99,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.46,0.99,0,1,0.08,-0.92
18.434949,0.4,0.97,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.34,0.94,1.34164079,0.4472136,0.06708204,-2.16898594
45,0.29,0.89,0.70710678,0.70710678,0.07071068,-1.34350288
71.565051,0.27,0.83,0.9486833,0.31622777,0.06324555,-3.09903211
81.869898,0.26,0.76,0.98994949,0.14142136,0.07071068,-7.00035713
;0,0.2,0.76,0,1,0.06,-0.94
315,0,0.82,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.03,0.89,2.21359436,0.31622777,0.03162278,-3.13065488
343.300756,0.03,0.89,7.27947977,0.09578263,0.10440307,-10.33590344
74.744881,0.03,0.89,4.12217269,0.0877058,0.11401754,-11.28773671
206.565051,0.05,0.9,1.34164079,0.4472136,0.02236068,-2.2137073
213.690068,0.08,0.92,1.38675049,0.2773501,0.03605551,-3.56949576
216.869898,0.12,0.95,1.4,0.2,0.05,-4.95
352.874984,0.12,0.95,0.99227788,0.12403473,0.08062258,-7.98163517
78.690068,0.12,0.95,0.98058068,0.19611614,0.0509902,-5.04802932
213.690068,0.15,0.97,1.38675049,0.2773501,0.03605551,-3.56949576
213.690068,0.18,0.99,1.38675049,0.2773501,0.03605551,-3.56949576
206.565051,0.2,1,1.34164079,0.4472136,0.02236068,-2.2137073
45,0.28,0.99,0.70710678,0.70710678,0.01414214,-1.40007143
56.309932,0.26,0.96,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.22,0.9,2.21880078,0.2773501,0.07211103,-3.53344025
53.130102,0.19,0.86,3.6,0.2,0.05,-4.95
45,0.14,0.81,0.70710678,0.70710678,0.07071068,-1.34350288
36.869898,0.1,0.78,1.4,0.2,0.05,-4.95
18.434949,0.04,0.76,2.21359436,0.31622777,0.06324555,-3.09903211
0,0,0.76,0,1,0.04,-0.96
81.253838,0.95,0.87,7.07065907,0.07602859,0.13152946,-13.02141697
`),!1);M(L.ParsePatFile(`
*LEAF-02,LEAF-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
303.690068,0.77,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.74,0.16,2.21359436,0.31622777,0.03162278,-3.13065488
288.434949,0.73,0.19,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.77,0.19,0,1,0.04,-0.96
258.690068,0.78,0.24,0.98058068,0.19611614,0.0509902,-5.04802932
243.434949,0.79,0.26,0.89442719,0.4472136,0.02236068,-2.2137073
288.434949,0.58,0.14,2.21359436,0.31622777,0.06324555,-3.09903211
21.801409,0.53,0.12,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.48,0.11,4.11843884,0.19611614,0.0509902,-5.04802932
0,0.45,0.11,0,1,0.03,-0.97
341.565051,0.39,0.13,0.9486833,0.31622777,0.06324555,-3.09903211
326.309932,0.33,0.17,2.21880078,0.2773501,0.07211103,-3.53344025
308.659808,0.29,0.22,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.26,0.27,3.60147029,0.17149859,0.05830952,-5.77264238
285.945396,0.24,0.34,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.24,0.41,0,1,0.07,-0.93
279.462322,0.23,0.47,5.09636861,0.16439899,0.06082763,-6.0219349
285.945396,0.21,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
123.690068,0.23,0.51,1.38675049,0.2773501,0.03605551,-3.56949576
161.565051,0.26,0.5,0.9486833,0.31622777,0.03162278,-3.13065488
171.869898,0.33,0.49,0.98994949,0.14142136,0.07071068,-7.00035713
171.869898,0.4,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
161.565051,0.46,0.46,0.9486833,0.31622777,0.06324555,-3.09903211
161.565051,0.52,0.44,0.9486833,0.31622777,0.06324555,-3.09903211
146.309932,0.58,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
119.744881,0.62,0.33,5.82963253,0.12403473,0.08062258,-7.98163517
111.801409,0.64,0.28,2.22834406,0.18569534,0.05385165,-5.33131316
90,0.64,0.24,0,1,0.04,-0.96
75.963757,0.63,0.2,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.61,0.17,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.6,0.15,0.89442719,0.4472136,0.02236068,-2.2137073
126.869898,0.63,0.11,1.4,0.2,0.05,-4.95
45,0.6,0.08,0.70710678,0.70710678,0.04242641,-1.37178716
225,0.31,0.02,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.34,0.03,2.21359436,0.31622777,0.03162278,-3.13065488
348.690068,0.29,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
345.963757,0.25,0.05,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.21,0.07,0.89442719,0.4472136,0.04472136,-2.19134662
333.434949,0.15,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.1,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.07,0.11,0,1,0.03,-0.97
8.130102,0,0.1,6.08111832,0.14142136,0.07071068,-7.00035713
236.309932,0.02,0.23,2.21880078,0.2773501,0.03605551,-3.56949576
236.309932,0.04,0.26,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.07,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.03,0.28,0,1,0.04,-0.96
326.309932,0,0.3,2.21880078,0.2773501,0.03605551,-3.56949576
158.198591,0.05,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
153.434949,0.11,0.66,0.89442719,0.4472136,0.06708204,-2.16898594
158.198591,0.16,0.64,3.15682075,0.18569534,0.05385165,-5.33131316
180,0.21,0.64,0,1,0.05,-0.95
33.690068,0.18,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
45,0.16,0.6,0.70710678,0.70710678,0.02828427,-1.38592929
53.130102,0.13,0.56,3.6,0.2,0.05,-4.95
56.309932,0.09,0.5,2.21880078,0.2773501,0.07211103,-3.53344025
51.340192,0.05,0.45,4.99756038,0.15617376,0.06403124,-6.339093
38.659808,0,0.41,1.40556386,0.15617376,0.06403124,-6.339093
321.340192,0.73,0.42,4.99756038,0.15617376,0.06403124,-6.339093
300.963757,0.7,0.47,3.60147029,0.17149859,0.05830952,-5.77264238
21.801409,0.65,0.45,2.22834406,0.18569534,0.05385165,-5.33131316
284.036243,0.64,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.7,0.49,0,1,0.06,-0.94
261.869898,0.71,0.56,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.73,0.61,3.15682075,0.18569534,0.05385165,-5.33131316
225,0.77,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
284.036243,0.77,0.88,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.2,0.76,0,1,0.06,-0.94
104.036243,0.21,0.72,3.15296313,0.24253563,0.04123106,-4.08187457
201.801409,0.26,0.74,2.22834406,0.18569534,0.05385165,-5.33131316
123.690068,0.3,0.68,1.38675049,0.2773501,0.07211103,-3.53344025
153.434949,0.36,0.65,0.89442719,0.4472136,0.06708204,-2.16898594
170.537678,0.42,0.64,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.49,0.65,6.08111832,0.14142136,0.07071068,-7.00035713
201.801409,0.54,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
219.805571,0.6,0.72,1.40840568,0.12803688,0.0781025,-7.73214718
230.194429,0.65,0.78,6.401844,0.12803688,0.0781025,-7.73214718
239.036243,0.68,0.83,2.22948161,0.17149859,0.05830952,-5.77264238
236.309932,0.72,0.89,2.21880078,0.2773501,0.07211103,-3.53344025
213.690068,0.75,0.91,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.92,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.74,0.92,0,1,0.04,-0.96
345.963757,0.7,0.93,0.9701425,0.24253563,0.04123106,-4.08187457
338.198591,0.65,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
45,0.29,0.89,0.70710678,0.70710678,0.07071068,-1.34350288
71.565051,0.27,0.83,0.9486833,0.31622777,0.06324555,-3.09903211
81.869898,0.26,0.76,0.98994949,0.14142136,0.07071068,-7.00035713
;0,0.2,0.76,0,1,0.06,-0.94
53.130102,0.19,0.86,3.6,0.2,0.05,-4.95
45,0.14,0.81,0.70710678,0.70710678,0.07071068,-1.34350288
36.869898,0.1,0.78,1.4,0.2,0.05,-4.95
18.434949,0.04,0.76,2.21359436,0.31622777,0.06324555,-3.09903211
0,0,0.76,0,1,0.04,-0.96
0,0.96,0.76,0,1,0.04,-0.96
345.963757,0.92,0.77,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.88,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
315,0.86,0.81,0.70710678,0.70710678,0.02828427,-1.38592929
306.869898,0.83,0.85,1.4,0.2,0.05,-4.95
11.309932,0.78,0.84,4.11843884,0.19611614,0.0509902,-5.04802932
180,0.83,0.88,0,1,0.06,-0.94
261.869898,0.84,0.95,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.86,1,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.59,0.98,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.54,0.99,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.46,0.99,0,1,0.08,-0.92
18.434949,0.4,0.97,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.34,0.94,1.34164079,0.4472136,0.06708204,-2.16898594
45,0.28,0.99,0.70710678,0.70710678,0.01414214,-1.40007143
56.309932,0.26,0.96,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.22,0.9,2.21880078,0.2773501,0.07211103,-3.53344025
53.130102,0.97,0.16,3.6,0.2,0.05,-4.95
38.659808,0.92,0.12,1.40556386,0.15617376,0.06403124,-6.339093
9.462322,0.86,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
345.963757,0.82,0.12,0.9701425,0.24253563,0.04123106,-4.08187457
326.309932,0.79,0.14,2.21880078,0.2773501,0.03605551,-3.56949576
225,0.82,0.29,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.85,0.31,1.38675049,0.2773501,0.03605551,-3.56949576
191.309932,0.9,0.32,4.11843884,0.19611614,0.0509902,-5.04802932
180,0.95,0.32,0,1,0.05,-0.95
158.198591,1,0.3,3.15682075,0.18569534,0.05385165,-5.33131316
233.130102,0.89,0.04,3.6,0.2,0.05,-4.95
216.869898,0.93,0.07,1.4,0.2,0.05,-4.95
206.565051,0.97,0.09,1.34164079,0.4472136,0.04472136,-2.19134662
198.434949,1,0.1,2.21359436,0.31622777,0.03162278,-3.13065488
30.963757,0.95,0.38,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.91,0.37,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.83,0.37,0,1,0.08,-0.92
348.690068,0.78,0.38,0.98058068,0.19611614,0.0509902,-5.04802932
216.869898,0.81,0.68,1.4,0.2,0.05,-4.95
198.434949,0.9,0.71,2.21359436,0.31622777,0.09486833,-3.06740933
180,1,0.71,0,1,0.1,-0.9
`),!1);M(L.ParsePatFile(`
*LEAF-03,LEAF-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
344.054604,0.86,0.38,4.12081692,0.13736056,0.0728011,-7.20730879
338.198591,0.81,0.4,3.15682075,0.18569534,0.05385165,-5.33131316
326.309932,0.75,0.44,2.21880078,0.2773501,0.07211103,-3.53344025
320.194429,0.69,0.49,6.401844,0.12803688,0.0781025,-7.73214718
308.659808,0.65,0.54,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.62,0.59,3.60147029,0.17149859,0.05830952,-5.77264238
293.198591,0.59,0.66,2.23220936,0.13130643,0.07615773,-7.53961537
281.309932,0.58,0.71,4.11843884,0.19611614,0.0509902,-5.04802932
276.340192,0.57,0.8,8.0615014,0.11043153,0.09055385,-8.96483129
270,0.57,0.85,0,1,0.05,-0.95
257.471192,0.59,0.94,5.09786576,0.10846523,0.09219544,-9.12734901
164.054604,0.66,0.92,4.12081692,0.13736056,0.0728011,-7.20730879
158.198591,0.71,0.9,3.15682075,0.18569534,0.05385165,-5.33131316
146.309932,0.77,0.86,2.21880078,0.2773501,0.07211103,-3.53344025
140.194429,0.83,0.81,6.401844,0.12803688,0.0781025,-7.73214718
125.537678,0.88,0.74,4.99864847,0.11624764,0.08602325,-8.51630201
116.565051,0.92,0.66,1.34164079,0.4472136,0.08944272,-2.14662526
105.945396,0.94,0.59,3.15929297,0.13736056,0.0728011,-7.20730879
97.125016,0.95,0.51,7.06997987,0.12403473,0.08062258,-7.98163517
90,0.95,0.45,0,1,0.06,-0.94
77.471192,0.93,0.36,5.09786576,0.10846523,0.09219544,-9.12734901
195.945396,0.14,0.38,3.15929297,0.13736056,0.0728011,-7.20730879
201.801409,0.19,0.4,2.22834406,0.18569534,0.05385165,-5.33131316
213.690068,0.25,0.44,1.38675049,0.2773501,0.07211103,-3.53344025
219.805571,0.31,0.49,1.40840568,0.12803688,0.0781025,-7.73214718
231.340192,0.35,0.54,4.99756038,0.15617376,0.06403124,-6.339093
239.036243,0.38,0.59,2.22948161,0.17149859,0.05830952,-5.77264238
246.801409,0.41,0.66,5.38356375,0.13130643,0.07615773,-7.53961537
258.690068,0.42,0.71,0.98058068,0.19611614,0.0509902,-5.04802932
263.659808,0.43,0.8,0.99388373,0.11043153,0.09055385,-8.96483129
270,0.43,0.85,0,1,0.05,-0.95
282.528808,0.41,0.94,4.1216787,0.10846523,0.09219544,-9.12734901
15.945396,0.34,0.92,3.15929297,0.13736056,0.0728011,-7.20730879
21.801409,0.29,0.9,2.22834406,0.18569534,0.05385165,-5.33131316
33.690068,0.23,0.86,1.38675049,0.2773501,0.07211103,-3.53344025
39.805571,0.17,0.81,1.40840568,0.12803688,0.0781025,-7.73214718
54.462322,0.12,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
63.434949,0.08,0.66,0.89442719,0.4472136,0.08944272,-2.14662526
74.054604,0.06,0.59,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.05,0.51,0.99227788,0.12403473,0.08062258,-7.98163517
90,0.05,0.45,0,1,0.06,-0.94
102.528808,0.07,0.36,4.1216787,0.10846523,0.09219544,-9.12734901
128.659808,0.21,0.15,1.40556386,0.15617376,0.06403124,-6.339093
146.309932,0.27,0.11,2.21880078,0.2773501,0.07211103,-3.53344025
153.434949,0.33,0.08,0.89442719,0.4472136,0.06708204,-2.16898594
164.054604,0.4,0.06,4.12081692,0.13736056,0.0728011,-7.20730879
171.869898,0.47,0.05,0.98994949,0.14142136,0.07071068,-7.00035713
180,0.53,0.05,0,1,0.06,-0.94
188.130102,0.6,0.06,6.08111832,0.14142136,0.07071068,-7.00035713
195.945396,0.67,0.08,3.15929297,0.13736056,0.0728011,-7.20730879
206.565051,0.73,0.11,1.34164079,0.4472136,0.06708204,-2.16898594
218.659808,0.78,0.15,1.40556386,0.15617376,0.06403124,-6.339093
225,0.83,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
315,0.78,0.25,0.70710678,0.70710678,0.07071068,-1.34350288
321.340192,0.73,0.29,4.99756038,0.15617376,0.06403124,-6.339093
336.801409,0.66,0.32,5.38356375,0.13130643,0.07615773,-7.53961537
341.565051,0.6,0.34,0.9486833,0.31622777,0.06324555,-3.09903211
351.869898,0.53,0.35,0.98994949,0.14142136,0.07071068,-7.00035713
0,0.47,0.35,0,1,0.06,-0.94
8.130102,0.4,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
18.434949,0.34,0.32,2.21359436,0.31622777,0.06324555,-3.09903211
23.198591,0.27,0.29,2.23220936,0.13130643,0.07615773,-7.53961537
38.659808,0.22,0.25,1.40556386,0.15617376,0.06403124,-6.339093
45,0.17,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
`),!1);M(L.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,.125
`),!1);M(L.ParsePatFile(`
*LOOPLINKS,LOOPLINKS
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
206.565051,0.53,0.67,1.34164079,0.4472136,0.02236068,-2.2137073
243.434949,0.54,0.69,0.89442719,0.4472136,0.02236068,-2.2137073
116.565051,0.47,0.67,1.34164079,0.4472136,0.02236068,-2.2137073
153.434949,0.49,0.66,0.89442719,0.4472136,0.02236068,-2.2137073
180,0.51,0.66,0,1,0.02,-0.98
258.690068,0.19,0.59,0.98058068,0.19611614,0.0509902,-5.04802932
251.565051,0.2,0.62,0.9486833,0.31622777,0.03162278,-3.13065488
243.434949,0.22,0.66,0.89442719,0.4472136,0.04472136,-2.19134662
230.194429,0.27,0.72,6.401844,0.12803688,0.0781025,-7.73214718
225,0.31,0.76,0.70710678,0.70710678,0.05656854,-1.35764502
209.744881,0.38,0.8,5.82963253,0.12403473,0.08062258,-7.98163517
194.036243,0.46,0.82,3.15296313,0.24253563,0.08246211,-4.04064351
251.565051,0.28,0.6,0.9486833,0.31622777,0.06324555,-3.09903211
239.036243,0.31,0.65,2.22948161,0.17149859,0.05830952,-5.77264238
225,0.35,0.69,0.70710678,0.70710678,0.05656854,-1.35764502
210.963757,0.4,0.72,3.60147029,0.17149859,0.05830952,-5.77264238
198.434949,0.46,0.74,2.21359436,0.31622777,0.06324555,-3.09903211
116.565051,0.67,0.47,1.34164079,0.4472136,0.02236068,-2.2137073
153.434949,0.69,0.46,0.89442719,0.4472136,0.02236068,-2.2137073
26.565051,0.67,0.53,1.34164079,0.4472136,0.02236068,-2.2137073
63.434949,0.66,0.51,0.89442719,0.4472136,0.02236068,-2.2137073
90,0.66,0.49,0,1,0.02,-0.98
168.690068,0.59,0.81,0.98058068,0.19611614,0.0509902,-5.04802932
161.565051,0.62,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
153.434949,0.66,0.78,0.89442719,0.4472136,0.04472136,-2.19134662
140.194429,0.72,0.73,6.401844,0.12803688,0.0781025,-7.73214718
135,0.76,0.69,0.70710678,0.70710678,0.05656854,-1.35764502
119.744881,0.8,0.62,5.82963253,0.12403473,0.08062258,-7.98163517
104.036243,0.82,0.54,3.15296313,0.24253563,0.08246211,-4.04064351
161.565051,0.6,0.72,0.9486833,0.31622777,0.06324555,-3.09903211
149.036243,0.65,0.69,2.22948161,0.17149859,0.05830952,-5.77264238
135,0.69,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
120.963757,0.72,0.6,3.60147029,0.17149859,0.05830952,-5.77264238
108.434949,0.74,0.54,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.47,0.33,1.34164079,0.4472136,0.02236068,-2.2137073
63.434949,0.46,0.31,0.89442719,0.4472136,0.02236068,-2.2137073
296.565051,0.53,0.33,1.34164079,0.4472136,0.02236068,-2.2137073
333.434949,0.51,0.34,0.89442719,0.4472136,0.02236068,-2.2137073
0,0.49,0.34,0,1,0.02,-0.98
78.690068,0.81,0.41,0.98058068,0.19611614,0.0509902,-5.04802932
71.565051,0.8,0.38,0.9486833,0.31622777,0.03162278,-3.13065488
63.434949,0.78,0.34,0.89442719,0.4472136,0.04472136,-2.19134662
50.194429,0.73,0.28,6.401844,0.12803688,0.0781025,-7.73214718
45,0.69,0.24,0.70710678,0.70710678,0.05656854,-1.35764502
29.744881,0.62,0.2,5.82963253,0.12403473,0.08062258,-7.98163517
14.036243,0.54,0.18,3.15296313,0.24253563,0.08246211,-4.04064351
71.565051,0.72,0.4,0.9486833,0.31622777,0.06324555,-3.09903211
59.036243,0.69,0.35,2.22948161,0.17149859,0.05830952,-5.77264238
45,0.65,0.31,0.70710678,0.70710678,0.05656854,-1.35764502
30.963757,0.6,0.28,3.60147029,0.17149859,0.05830952,-5.77264238
18.434949,0.54,0.26,2.21359436,0.31622777,0.06324555,-3.09903211
296.565051,0.33,0.53,1.34164079,0.4472136,0.02236068,-2.2137073
333.434949,0.31,0.54,0.89442719,0.4472136,0.02236068,-2.2137073
206.565051,0.33,0.47,1.34164079,0.4472136,0.02236068,-2.2137073
243.434949,0.34,0.49,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.34,0.51,0,1,0.02,-0.98
348.690068,0.41,0.19,0.98058068,0.19611614,0.0509902,-5.04802932
341.565051,0.38,0.2,0.9486833,0.31622777,0.03162278,-3.13065488
333.434949,0.34,0.22,0.89442719,0.4472136,0.04472136,-2.19134662
320.194429,0.28,0.27,6.401844,0.12803688,0.0781025,-7.73214718
315,0.24,0.31,0.70710678,0.70710678,0.05656854,-1.35764502
299.744881,0.2,0.38,5.82963253,0.12403473,0.08062258,-7.98163517
284.036243,0.18,0.46,3.15296313,0.24253563,0.08246211,-4.04064351
341.565051,0.4,0.28,0.9486833,0.31622777,0.06324555,-3.09903211
329.036243,0.35,0.31,2.22948161,0.17149859,0.05830952,-5.77264238
315,0.31,0.35,0.70710678,0.70710678,0.05656854,-1.35764502
300.963757,0.28,0.4,3.60147029,0.17149859,0.05830952,-5.77264238
288.434949,0.26,0.46,2.21359436,0.31622777,0.06324555,-3.09903211
90,0.46,-0.31,0,1,0.62,-0.38
270,0.54,0.31,0,1,0.62,-0.38
180,0.31,0.46,0,1,0.62,-0.38
0,-0.31,0.54,0,1,0.62,-0.38
`),!1);M(L.ParsePatFile(`
*MAZE-01,MAZE-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.95,0.92,0,1,0.25,-0.75
90,0.95,0.55,1,1,0.37,-0.63
90,0.83,0.55,1,1,0.25,-0.75
0,0.7,0.42,0,1,0.11,-0.89
180,0.57,0.8,0,1,0.38,-0.62
270,0.57,0.92,1,1,0.12,-0.88
0,0.07,0.92,0,1,0.5,-0.5
90,0.95,0.29,1,1,0.13,-0.87
180,0.45,0.05,0,1,0.38,-0.62
0,0.7,0.29,0,1,0.25,-0.75
270,0.45,0.17,1,1,0.12,-0.88
0,0.19,0.17,0,1,0.26,-0.74
90,0.7,0.17,1,1,0.12,-0.88
270,0.19,0.8,1,1,0.63,-0.37
0,0.31,0.29,0,1,0.26,-0.74
270,0.31,0.68,1,1,0.39,-0.61
180,0.7,0.68,0,1,0.39,-0.61
270,0.7,0.92,1,1,0.24,-0.76
180,0.95,0.17,0,1,0.25,-0.75
90,0.95,0.05,1,1,0.12,-0.88
0,0.57,0.05,0,1,0.38,-0.62
270,0.57,0.42,1,1,0.37,-0.63
270,0.7,0.55,1,1,0.13,-0.87
0,0.45,0.55,0,1,0.25,-0.75
90,0.45,0.42,1,1,0.13,-0.87
90,0.07,0.05,1,1,0.87,-0.13
`),!1);M(L.ParsePatFile(`
*MAZE-02,MAZE-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.89999999,0.1,1,1,0.1,-0.9
0,0.69999999,0.1,0,1,0.2,-0.8
90,0,0.3,1,1,0.5,-0.5
270,0.89999999,0.9,1,1,0.5,-0.5
270,0.29999999,0.9,1,1,0.1,-0.9
180,0.29999999,0.9,0,1,0.4,-0.6
0,0.19999999,0.2,0,1,0.15,-0.85
90,0.19999999,0.3,1,1,0.2,-0.8
180,0.49999999,0.3,0,1,0.3,-0.7
90,0.49999999,0.1,1,1,0.2,-0.8
270,0.69999999,0.2,1,1,0.1,-0.9
0,0.59999999,0.2,0,1,0.1,-0.9
270,0.59999999,0.3,1,1,0.1,-0.9
180,0.69999999,0.3,0,1,0.1,-0.9
270,0.59999999,0.6,1,1,0.1,-0.9
0,0.29999999,0.6,0,1,0.3,-0.7
90,0.29999999,0.4,1,1,0.2,-0.8
180,0.69999999,0.4,0,1,0.4,-0.6
180,0.59999999,0.5,0,1,0.2,-0.8
270,0.79999999,0.8,1,1,0.5,-0.5
0,0.09999999,0.1,0,1,0.4,-0.6
0,0.09999999,0.8,0,1,0.7,-0.3
270,0.09999999,0.2,1,1,0.1,-0.9
90,0.09999999,0.3,1,1,0.5,-0.5
180,0.09999999,0.2,0,1,0.3,-0.7
180,0,0.3,0,1,0.20000001,-0.79999999
180,0.29999999,0,0,1,0.3,-0.7
270,0.69999999,0.7,1,1,0.2,-0.8
0,0.39999999,0,0,1,0.4,-0.6
0,0.19999999,0.7,0,1,0.5,-0.5
90,0.19999999,0.6,1,1,0.1,-0.9
270,0.59999999,0.1,1,1,0.1,-0.9
0,0.39999999,0.9,0,1,0.4,-0.6
270,0.39999999,1,1,1,0.1,-0.9
`),!1);M(L.ParsePatFile(`
*MUDST,MUDST
0, 0,0, .5,.25, .25,-.25,0,-.25,0,-.25
`),!1);M(L.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,.125
60, 0,0, 0,.125
120, 0,0, 0,.125
`),!1);M(L.ParsePatFile(`
*NET,NET
0, 0,0, 0,.125
90, 0,0, 0,.125
`),!1);M(L.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
0, 0,.15625, 0,.25
`),!1);M(L.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
`),!1);M(L.ParsePatFile(`
*QCAD-LOGO,QCAD-LOGO
;By John Hyslop, Line 101 modified by CVH to fix left side of pencil drift when hatching far from Origin
;Developed in inch as imperial QCAD3 pattern
243.434949,0.8,0.36,0.89442719,0.4472136,0.02236068,-2.2137073
248.198591,0.82,0.41,3.15682075,0.18569534,0.05385165,-5.33131316
263.659808,0.83,0.5,0.99388373,0.11043153,0.09055385,-8.96483129
276.340192,0.82,0.59,8.0615014,0.11043153,0.09055385,-8.96483129
290.556045,0.79,0.67,5.38389277,0.11704115,0.08544004,-8.45856371
310.601295,0.73,0.74,1.41004798,0.10846523,0.09219544,-9.12734901
324.462322,0.66,0.79,3.6036768,0.11624764,0.08602325,-8.51630201
336.801409,0.59,0.82,5.38356375,0.13130643,0.07615773,-7.53961537
351.869898,0.52,0.83,0.98994949,0.14142136,0.07071068,-7.00035713
26.565051,0.61,0.18,1.34164079,0.4472136,0.06708204,-2.16898594
7.125016,0.53,0.17,7.06997987,0.12403473,0.08062258,-7.98163517
0,0.45,0.17,0,1,0.08,-0.92
344.054604,0.38,0.19,4.12081692,0.13736056,0.0728011,-7.20730879
336.801409,0.31,0.22,5.38356375,0.13130643,0.07615773,-7.53961537
320.194429,0.25,0.27,6.401844,0.12803688,0.0781025,-7.73214718
308.659808,0.21,0.32,1.40556386,0.15617376,0.06403124,-6.339093
293.198591,0.18,0.39,2.23220936,0.13130643,0.07615773,-7.53961537
285.945396,0.16,0.46,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.16,0.52,0,1,0.06,-0.94
261.869898,0.17,0.59,0.98994949,0.14142136,0.07071068,-7.00035713
246.801409,0.2,0.66,5.38356375,0.13130643,0.07615773,-7.53961537
234.462322,0.25,0.73,3.6036768,0.11624764,0.08602325,-8.51630201
219.805571,0.31,0.78,1.40840568,0.12803688,0.0781025,-7.73214718
206.565051,0.37,0.81,1.34164079,0.4472136,0.06708204,-2.16898594
195.945396,0.44,0.83,3.15929297,0.13736056,0.0728011,-7.20730879
180,0.48,0.83,0,1,0.04,-0.96
180,0.52,0.83,0,1,0.04,-0.96
233.130102,0.92,0.27,3.6,0.2,0.05,-4.95
248.198591,0.94,0.32,3.15682075,0.18569534,0.05385165,-5.33131316
248.198591,0.96,0.37,3.15682075,0.18569534,0.05385165,-5.33131316
260.537678,0.97,0.43,0.98639392,0.16439899,0.06082763,-6.0219349
261.869898,0.98,0.5,0.98994949,0.14142136,0.07071068,-7.00035713
278.130102,0.97,0.57,6.08111832,0.14142136,0.07071068,-7.00035713
279.462322,0.96,0.63,5.09636861,0.16439899,0.06082763,-6.0219349
288.434949,0.94,0.69,2.21359436,0.31622777,0.06324555,-3.09903211
299.744881,0.9,0.76,5.82963253,0.12403473,0.08062258,-7.98163517
308.659808,0.86,0.81,1.40556386,0.15617376,0.06403124,-6.339093
315,0.81,0.86,0.70710678,0.70710678,0.07071068,-1.34350288
321.340192,0.76,0.9,4.99756038,0.15617376,0.06403124,-6.339093
329.036243,0.71,0.93,2.22948161,0.17149859,0.05830952,-5.77264238
338.198591,0.66,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
338.198591,0.61,0.97,3.15682075,0.18569534,0.05385165,-5.33131316
350.537678,0.55,0.98,0.98639392,0.16439899,0.06082763,-6.0219349
0,0.5,0.98,0,1,0.05,-0.95
0,0.45,0.98,0,1,0.05,-0.95
11.309932,0.4,0.97,4.11843884,0.19611614,0.0509902,-5.04802932
14.036243,0.36,0.96,3.15296313,0.24253563,0.04123106,-4.08187457
21.801409,0.31,0.94,2.22834406,0.18569534,0.05385165,-5.33131316
21.801409,0.26,0.92,2.22834406,0.18569534,0.05385165,-5.33131316
36.869898,0.22,0.89,1.4,0.2,0.05,-4.95
36.869898,0.18,0.86,1.4,0.2,0.05,-4.95
33.690068,0.75,0.09,1.38675049,0.2773501,0.03605551,-3.56949576
26.565051,0.69,0.06,1.34164079,0.4472136,0.06708204,-2.16898594
21.801409,0.64,0.04,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.59,0.03,4.11843884,0.19611614,0.0509902,-5.04802932
8.130102,0.52,0.02,6.08111832,0.14142136,0.07071068,-7.00035713
0,0.46,0.02,0,1,0.06,-0.94
350.537678,0.4,0.03,0.98639392,0.16439899,0.06082763,-6.0219349
348.690068,0.35,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
338.198591,0.3,0.06,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.26,0.08,0.89442719,0.4472136,0.04472136,-2.19134662
323.130102,0.22,0.11,3.6,0.2,0.05,-4.95
323.130102,0.18,0.14,3.6,0.2,0.05,-4.95
315,0.14,0.18,0.70710678,0.70710678,0.05656854,-1.35764502
306.869898,0.11,0.22,1.4,0.2,0.05,-4.95
306.869898,0.08,0.26,1.4,0.2,0.05,-4.95
296.565051,0.06,0.3,1.34164079,0.4472136,0.04472136,-2.19134662
291.801409,0.04,0.35,2.22834406,0.18569534,0.05385165,-5.33131316
281.309932,0.03,0.4,4.11843884,0.19611614,0.0509902,-5.04802932
281.309932,0.02,0.45,4.11843884,0.19611614,0.0509902,-5.04802932
270,0.02,0.5,0,1,0.05,-0.95
270,0.02,0.55,0,1,0.05,-0.95
258.690068,0.03,0.6,0.98058068,0.19611614,0.0509902,-5.04802932
258.690068,0.04,0.65,0.98058068,0.19611614,0.0509902,-5.04802932
248.198591,0.06,0.7,3.15682075,0.18569534,0.05385165,-5.33131316
243.434949,0.08,0.74,0.89442719,0.4472136,0.04472136,-2.19134662
233.130102,0.11,0.78,3.6,0.2,0.05,-4.95
233.130102,0.14,0.82,3.6,0.2,0.05,-4.95
225,0.18,0.86,0.70710678,0.70710678,0.05656854,-1.35764502
0,0.35,0.21,0,1,0.29,-0.71
180,0.56,0.39,0,1,0.04,-0.96
270,0.56,0.44,0,1,0.05,-0.95
180,0.62,0.44,0,1,0.06,-0.94
270,0.62,0.48,0,1,0.04,-0.96
270,0.98,0.11,0,1,0.01,-0.99
270,0.98,0.13,0,1,0.02,-0.98
45,0.82,0.08,0.70710678,0.70710678,0.14142136,-1.27279221
225,0.9,0.2,0.70710678,0.70710678,0.14142136,-1.27279221
45,0.79,0.11,0.70710678,0.70710678,0.14142136,-1.27279221
0,0.544133,0.559775,0,1,0,-1
0,0.590298,0.634752,0,1,0,-1
0,0.640323,0.720624,0,1,0,-1
135,0.98,0.13,0.70710678,0.70710678,0.49497475,-0.91923882
56.309932,0.96,0.07,2.21880078,0.2773501,0.03605551,-3.56949576
45,0.94,0.05,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.91,0.03,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.88,0.02,2.21359436,0.31622777,0.03162278,-3.13065488
135.806929,0.88,0.02,-1.41407331,0.01991653,0.50209561,-49.70746523
289.983107,0.48,0.48,8.54357658,0.08543577,0.117047,-11.58765291
338.198591,0.53,0.52,3.15682075,0.18569534,0.1077033,-5.27746151
105.945396,0.48,0.48,3.15929297,0.13736056,0.0728011,-7.20730879
218.659808,0.53,0.52,1.40556386,0.15617376,0.06403124,-6.339093
336.801409,0.46,0.55,5.38356375,0.13130643,0.07615773,-7.53961537
56.309932,0.66,0.755,2.21880078,0.2773501,0.01802776,-3.58752352
239.036243,0.475,0.435,2.22948161,0.17149859,0.02915476,-5.80179714
236.309932,0.57,0.6,2.21880078,0.2773501,0.01802776,-3.58752352
236.309932,0.62,0.68,2.21880078,0.2773501,0.01802776,-3.58752352
0,0.46,0.41,0,1,0,-1
0,0.49,0.34,0,1,0.02,-0.98
0,0.54,0.34,0,1,0,-1
0,0.45,0.34,0,1,0,-1
0,0.36,0.34,0,1,0,-1
0,0.27,0.34,0,1,0,-1
180,0.24,0.34,0,1,0.03,-0.97
180,0.33,0.34,0,1,0.03,-0.97
180,0.42,0.34,0,1,0.03,-0.97
239.036243,0.45,0.39,2.22948161,0.17149859,0.05830952,-5.77264238
0,0.44,0.44,0,1,0.05,-0.95
341.565051,0.41,0.45,0.9486833,0.31622777,0.03162278,-3.13065488
315,0.39,0.47,0.70710678,0.70710678,0.02828427,-1.38592929
296.565051,0.38,0.49,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.38,0.49,0,1,0.21,-0.79
240.068488,0.57,0.82,8.06221498,0.02626129,0.38078866,-37.69807687
0,0.63,0.49,0,1,0.18,-0.82
240.255119,0.75,0.7,2.23262522,0.12403473,0.24186773,-7.82039002
`),!1);M(L.ParsePatFile(`
*REDBACK,REDBACK
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
63.434949,0.73,0.78,0.89442719,0.4472136,0.02236068,-2.2137073
33.690068,0.7,0.76,1.38675049,0.2773501,0.03605551,-3.56949576
75.963757,0.69,0.72,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.66,0.72,0,1,0.03,-0.97
108.434949,0.67,0.69,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.67,0.68,0,1,0.01,-0.99
0,0.54,0.57,0,1,0.01,-0.99
270,0.54,0.58,0,1,0.01,-0.99
225,0.55,0.59,0.70710678,0.70710678,0.01414214,-1.40007143
180,0.56,0.59,0,1,0.01,-0.99
315,0.55,0.6,0.70710678,0.70710678,0.01414214,-1.40007143
15.524111,0.37,0.55,7.27991309,0.05352877,0.18681542,-18.49472628
0,0.35,0.55,0,1,0.02,-0.98
45,0.34,0.54,0.70710678,0.70710678,0.01414214,-1.40007143
0,0.31,0.54,0,1,0.03,-0.97
26.565051,0.19,0.48,1.34164079,0.4472136,0.13416408,-2.1019039
0,0.18,0.48,0,1,0.01,-0.99
33.690068,0.15,0.46,1.38675049,0.2773501,0.03605551,-3.56949576
32.005383,0.07,0.41,3.60399279,0.10599979,0.09433981,-9.33964132
45,0.06,0.4,0.70710678,0.70710678,0.01414214,-1.40007143
270,0.06,0.41,0,1,0.01,-0.99
225,0.07,0.42,0.70710678,0.70710678,0.01414214,-1.40007143
213.690068,0.16,0.48,1.38675049,0.2773501,0.10816654,-3.49738474
243.434949,0.17,0.5,0.89442719,0.4472136,0.02236068,-2.2137073
205.016893,0.32,0.57,2.23525175,0.06041221,0.16552945,-16.3874159
189.462322,0.38,0.58,5.09636861,0.16439899,0.06082763,-6.0219349
194.036243,0.42,0.59,3.15296313,0.24253563,0.04123106,-4.08187457
194.036243,0.5,0.61,3.15296313,0.24253563,0.08246211,-4.04064351
198.434949,0.56,0.63,2.21359436,0.31622777,0.06324555,-3.09903211
6.340192,0.47,0.62,8.0615014,0.11043153,0.09055385,-8.96483129
315,0.46,0.63,0.70710678,0.70710678,0.01414214,-1.40007143
45,0.45,0.62,0.70710678,0.70710678,0.01414214,-1.40007143
23.198591,0.38,0.59,2.23220936,0.13130643,0.07615773,-7.53961537
0,0.35,0.59,0,1,0.03,-0.97
45,0.32,0.56,0.70710678,0.70710678,0.04242641,-1.37178716
236.309932,0.34,0.59,2.21880078,0.2773501,0.03605551,-3.56949576
206.565051,0.36,0.6,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.42,0.63,1.34164079,0.4472136,0.06708204,-2.16898594
206.565051,0.44,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.46,0.65,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.57,0.65,0,1,0.11,-0.89
225,0.58,0.66,0.70710678,0.70710678,0.01414214,-1.40007143
321.340192,0.53,0.7,4.99756038,0.15617376,0.06403124,-6.339093
296.565051,0.52,0.72,1.34164079,0.4472136,0.02236068,-2.2137073
285.945396,0.5,0.79,3.15929297,0.13736056,0.0728011,-7.20730879
254.054604,0.52,0.86,4.12081692,0.13736056,0.0728011,-7.20730879
135,0.53,0.85,0.70710678,0.70710678,0.01414214,-1.40007143
90,0.53,0.82,0,1,0.03,-0.97
71.565051,0.52,0.79,0.9486833,0.31622777,0.03162278,-3.13065488
105.945396,0.54,0.72,3.15929297,0.13736056,0.0728011,-7.20730879
135,0.58,0.68,0.70710678,0.70710678,0.05656854,-1.35764502
180,0.59,0.68,0,1,0.01,-0.99
270,0.59,0.69,0,1,0.01,-0.99
270,0.59,0.71,0,1,0.02,-0.98
296.565051,0.58,0.73,1.34164079,0.4472136,0.02236068,-2.2137073
278.130102,0.57,0.8,6.08111832,0.14142136,0.07071068,-7.00035713
251.565051,0.58,0.83,0.9486833,0.31622777,0.03162278,-3.13065488
225,0.59,0.84,0.70710678,0.70710678,0.01414214,-1.40007143
225,0.6,0.85,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.61,0.87,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.63,0.91,0.89442719,0.4472136,0.04472136,-2.19134662
243.434949,0.65,0.95,0.89442719,0.4472136,0.04472136,-2.19134662
225,0.66,0.96,0.70710678,0.70710678,0.01414214,-1.40007143
168.690068,0.81,0.93,0.98058068,0.19611614,0.15297059,-4.94604893
355.601295,0.68,0.94,0.99705449,0.0766965,0.13038405,-12.90802076
56.309932,0.66,0.91,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.64,0.88,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.63,0.86,0.89442719,0.4472136,0.02236068,-2.2137073
56.309932,0.61,0.83,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.6,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
90,0.6,0.79,0,1,0.01,-0.99
90,0.6,0.77,0,1,0.02,-0.98
90,0.6,0.74,0,1,0.03,-0.97
225,0.61,0.75,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.62,0.77,0.89442719,0.4472136,0.02236068,-2.2137073
225,0.63,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.65,0.79,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.67,0.8,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.69,0.8,0,1,0.02,-0.98
180,0.71,0.8,0,1,0.02,-0.98
180,0.74,0.8,0,1,0.03,-0.97
153.434949,0.76,0.79,0.89442719,0.4472136,0.02236068,-2.2137073
135,0.77,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
135,0.56,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
26.565051,0.77,0.74,1.34164079,0.4472136,0.02236068,-2.2137073
56.309932,0.75,0.71,2.21880078,0.2773501,0.03605551,-3.56949576
14.036243,0.71,0.7,3.15296313,0.24253563,0.04123106,-4.08187457
90,0.71,0.67,0,1,0.03,-0.97
341.565051,0.68,0.68,0.9486833,0.31622777,0.03162278,-3.13065488
0,0.67,0.68,0,1,0.01,-0.99
90,0.56,0.55,0,1,0.01,-0.99
180,0.57,0.55,0,1,0.01,-0.99
225,0.58,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
270,0.58,0.57,0,1,0.01,-0.99
135,0.59,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
74.475889,0.54,0.38,11.4016286,0.05352877,0.18681542,-18.49472628
90,0.54,0.36,0,1,0.02,-0.98
45,0.53,0.35,0.70710678,0.70710678,0.01414214,-1.40007143
90,0.53,0.32,0,1,0.03,-0.97
63.434949,0.47,0.2,0.89442719,0.4472136,0.13416408,-2.1019039
90,0.47,0.19,0,1,0.01,-0.99
56.309932,0.45,0.16,2.21880078,0.2773501,0.03605551,-3.56949576
57.994617,0.4,0.08,5.82998834,0.10599979,0.09433981,-9.33964132
45,0.39,0.07,0.70710678,0.70710678,0.01414214,-1.40007143
180,0.4,0.07,0,1,0.01,-0.99
225,0.41,0.08,0.70710678,0.70710678,0.01414214,-1.40007143
236.309932,0.47,0.17,2.21880078,0.2773501,0.10816654,-3.49738474
206.565051,0.49,0.18,1.34164079,0.4472136,0.02236068,-2.2137073
244.983107,0.56,0.33,14.31769361,0.06041221,0.16552945,-16.3874159
260.537678,0.57,0.39,0.98639392,0.16439899,0.06082763,-6.0219349
255.963757,0.58,0.43,0.9701425,0.24253563,0.04123106,-4.08187457
255.963757,0.6,0.51,0.9701425,0.24253563,0.08246211,-4.04064351
251.565051,0.62,0.57,0.9486833,0.31622777,0.06324555,-3.09903211
83.659808,0.61,0.48,0.99388373,0.11043153,0.09055385,-8.96483129
135,0.62,0.47,0.70710678,0.70710678,0.01414214,-1.40007143
45,0.61,0.46,0.70710678,0.70710678,0.01414214,-1.40007143
66.801409,0.58,0.39,5.38356375,0.13130643,0.07615773,-7.53961537
90,0.58,0.36,0,1,0.03,-0.97
45,0.55,0.33,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.58,0.35,1.38675049,0.2773501,0.03605551,-3.56949576
243.434949,0.59,0.37,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.62,0.43,0.89442719,0.4472136,0.06708204,-2.16898594
243.434949,0.63,0.45,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.64,0.47,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.64,0.58,0,1,0.11,-0.89
225,0.65,0.59,0.70710678,0.70710678,0.01414214,-1.40007143
128.659808,0.69,0.54,1.40556386,0.15617376,0.06403124,-6.339093
153.434949,0.71,0.53,0.89442719,0.4472136,0.02236068,-2.2137073
164.054604,0.78,0.51,4.12081692,0.13736056,0.0728011,-7.20730879
195.945396,0.85,0.53,3.15929297,0.13736056,0.0728011,-7.20730879
315,0.84,0.54,0.70710678,0.70710678,0.01414214,-1.40007143
0,0.81,0.54,0,1,0.03,-0.97
18.434949,0.78,0.53,2.21359436,0.31622777,0.03162278,-3.13065488
344.054604,0.71,0.55,4.12081692,0.13736056,0.0728011,-7.20730879
315,0.67,0.59,0.70710678,0.70710678,0.05656854,-1.35764502
270,0.67,0.6,0,1,0.01,-0.99
180,0.68,0.6,0,1,0.01,-0.99
180,0.7,0.6,0,1,0.02,-0.98
153.434949,0.72,0.59,0.89442719,0.4472136,0.02236068,-2.2137073
171.869898,0.79,0.58,0.98994949,0.14142136,0.07071068,-7.00035713
198.434949,0.82,0.59,2.21359436,0.31622777,0.03162278,-3.13065488
225,0.83,0.6,0.70710678,0.70710678,0.01414214,-1.40007143
225,0.84,0.61,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.86,0.62,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.9,0.64,1.34164079,0.4472136,0.04472136,-2.19134662
206.565051,0.94,0.66,1.34164079,0.4472136,0.04472136,-2.19134662
225,0.95,0.67,0.70710678,0.70710678,0.01414214,-1.40007143
281.309932,0.92,0.82,4.11843884,0.19611614,0.15297059,-4.94604893
94.398705,0.93,0.69,12.04135032,0.0766965,0.13038405,-12.90802076
33.690068,0.9,0.67,1.38675049,0.2773501,0.03605551,-3.56949576
33.690068,0.87,0.65,1.38675049,0.2773501,0.03605551,-3.56949576
26.565051,0.85,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
33.690068,0.82,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.79,0.61,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.78,0.61,0,1,0.01,-0.99
0,0.76,0.61,0,1,0.02,-0.98
0,0.73,0.61,0,1,0.03,-0.97
225,0.74,0.62,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.76,0.63,1.34164079,0.4472136,0.02236068,-2.2137073
225,0.77,0.64,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.78,0.66,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.79,0.68,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.79,0.7,0,1,0.02,-0.98
270,0.79,0.72,0,1,0.02,-0.98
270,0.79,0.75,0,1,0.03,-0.97
296.565051,0.78,0.77,1.34164079,0.4472136,0.02236068,-2.2137073
315,0.77,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
`),!1);M(L.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,.09375
45, .06629126,0, 0,.09375, 0,-.09375
`),!1);M(L.ParsePatFile(`
*SCAFFOLD, verbose comment
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.76,0.84,1,1,0.02,-0.98
326.3099325,0.26,0.16,2.21880078,0.2773501,0.57688819,-3.02866309
90,0.24,0.49,1,1,0.02,-0.98
270,0.25,0.16,1,1,0.32,-0.68
146.3099325,0.24,0.84,2.21880078,0.2773501,0.5768882,-3.02866307
180,0.76,0.49,0,1,0.02,-0.98
270,0.74,0.18,1,1,0.02,-0.98
0,0.74,0.84,0,1,0.02,-0.98
90,0.25,0.51,1,1,0.31,-0.69
270,0.76,0.51,1,1,0.02,-0.98
0,0.26,0.17,0,1,0.48,-0.52
0,0.24,0.51,0,1,0.02,-0.98
180,0.76,0.18,0,1,0.02,-0.98
90,0.74,0.82,1,1,0.02,-0.98
212.855722,0.24,0.49,20.24844917,0.01750082,0.57140178,-56.56877673
147.144278,0.24,0.18,36.89172934,0.01750082,0.57140178,-56.56877673
213.6900675,0.24,0.16,1.38675049,0.2773501,0.57688818,-3.02866309
180,0.24,0.17,0,1,0.48,-0.52
0,0.26,0.83,0,1,0.48,-0.52
90,0.26,0.16,1,1,0.02,-0.98
180,0.76,0.82,0,1,0.02,-0.98
90,0.74,0.49,1,1,0.02,-0.98
147.144278,0.74,0.18,36.89172934,0.01750082,0.57140179,-56.56877672
0,0.24,0.16,0,1,0.02,-0.98
0,0.26,0.5,0,1,0.48,-0.52
270,0.26,0.84,1,1,0.02,-0.98
90,0.75,0.18,1,1,0.31,-0.69
212.855722,0.74,0.82,20.24844917,0.01750082,0.57140179,-56.56877672
180,0.26,0.49,0,1,0.02,-0.98
270,0.24,0.18,1,1,0.02,-0.98
0,0.24,0.84,0,1,0.02,-0.98
270,0.26,0.51,1,1,0.02,-0.98
270,0.75,0.82,1,1,0.31,-0.69
32.855722,0.26,0.18,20.24844917,0.01750082,0.57140179,-56.56877672
180,0.26,0.18,0,1,0.02,-0.98
0,0.74,0.51,0,1,0.02,-0.98
90,0.76,0.16,1,1,0.02,-0.98
90,0.24,0.82,1,1,0.02,-0.98
180,0.24,0.83,0,1,0.48,-0.52
147.144278,0.24,0.51,36.89172934,0.01750082,0.57140178,-56.56877673
180,0.24,0.5,0,1,0.48,-0.52
270,0.25,0.49,1,1,0.31,-0.69
212.855722,0.24,0.82,20.24844917,0.01750082,0.57140179,-56.56877672
0,0.74,0.16,0,1,0.02,-0.98
270,0.75,0.16,1,1,0.32,-0.68
180,0.26,0.82,0,1,0.02,-0.98
213.6900675,0.74,0.16,1.38675049,0.2773501,0.57688819,-3.02866309
327.144278,0.26,0.82,36.89172934,0.01750082,0.57140179,-56.56877672
`),!1);M(L.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,.125, .125,-.125
90, 0,0, 0,.125, .125,-.125
`),!1);M(L.ParsePatFile(`
*SQUIGGLE-01,SQUIGGLE-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
45,0.11,-0.39,0.70710678,0.70710678,1.11722871,-0.29698485
56.309932,0.07,0.55,2.21880078,0.2773501,0.07211103,-3.53344025
81.869898,0.06,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
99.462322,0.07,0.42,5.09636861,0.16439899,0.06082763,-6.0219349
123.690068,0.11,0.36,1.38675049,0.2773501,0.07211103,-3.53344025
146.309932,0.17,0.32,2.21880078,0.2773501,0.07211103,-3.53344025
170.537678,0.23,0.31,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.3,0.32,6.08111832,0.14142136,0.07071068,-7.00035713
213.690068,0.36,0.36,1.38675049,0.2773501,0.07211103,-3.53344025
225,0.65,0.65,0.70710678,0.70710678,0.41012193,-1.00409163
213.690068,0.71,0.69,1.38675049,0.2773501,0.07211103,-3.53344025
189.462322,0.77,0.7,5.09636861,0.16439899,0.06082763,-6.0219349
171.869898,0.84,0.69,0.98994949,0.14142136,0.07071068,-7.00035713
146.309932,0.9,0.65,2.21880078,0.2773501,0.07211103,-3.53344025
123.690068,0.94,0.59,1.38675049,0.2773501,0.07211103,-3.53344025
99.462322,0.95,0.53,5.09636861,0.16439899,0.06082763,-6.0219349
81.869898,0.94,0.46,0.98994949,0.14142136,0.07071068,-7.00035713
56.309932,0.9,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
`),!1);M(L.ParsePatFile(`
*SQUIGGLE-02,SQUIGGLE-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
75.963757,0.99,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.97,0.12,0.89442719,0.4472136,0.04472136,-2.19134662
45,0.94,0.09,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.9,0.08,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.85,0.08,0,1,0.05,-0.95
345.963757,0.81,0.09,0.9701425,0.24253563,0.04123106,-4.08187457
315,0.78,0.12,0.70710678,0.70710678,0.04242641,-1.37178716
296.565051,0.76,0.16,1.34164079,0.4472136,0.04472136,-2.19134662
284.036243,0.75,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
281.309932,0.74,0.85,4.11843884,0.19611614,0.0509902,-5.04802932
303.690068,0.72,0.88,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.69,0.91,0.70710678,0.70710678,0.04242641,-1.37178716
345.963757,0.65,0.92,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.6,0.92,0,1,0.05,-0.95
14.036243,0.56,0.91,3.15296313,0.24253563,0.04123106,-4.08187457
45,0.53,0.88,0.70710678,0.70710678,0.04242641,-1.37178716
56.309932,0.51,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
78.690068,0.5,0.8,0.98058068,0.19611614,0.0509902,-5.04802932
75.963757,0.49,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.47,0.12,0.89442719,0.4472136,0.04472136,-2.19134662
45,0.44,0.09,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.4,0.08,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.35,0.08,0,1,0.05,-0.95
345.963757,0.31,0.09,0.9701425,0.24253563,0.04123106,-4.08187457
315,0.28,0.12,0.70710678,0.70710678,0.04242641,-1.37178716
296.565051,0.26,0.16,1.34164079,0.4472136,0.04472136,-2.19134662
284.036243,0.25,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
281.309932,0.24,0.85,4.11843884,0.19611614,0.0509902,-5.04802932
303.690068,0.22,0.88,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.19,0.91,0.70710678,0.70710678,0.04242641,-1.37178716
345.963757,0.15,0.92,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.1,0.92,0,1,0.05,-0.95
14.036243,0.06,0.91,3.15296313,0.24253563,0.04123106,-4.08187457
45,0.03,0.88,0.70710678,0.70710678,0.04242641,-1.37178716
56.309932,0.01,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
78.690068,0,0.8,0.98058068,0.19611614,0.0509902,-5.04802932
270,0.75,0.8,0,1,0.6,-0.4
270,0.5,0.8,0,1,0.6,-0.4
270,0.25,0.8,0,1,0.6,-0.4
270,0,0.8,0,1,0.6,-0.4
`),!1);M(L.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,.21650635, .125,-.125
60, 0,0, 0,.21650635, .125,-.125
120, .0625,.10825318, 0,.21650635, .125,-.125
`),!1);M(L.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,.125
45, 0,.0625, 0,.125
`),!1);M(L.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, .5,.8660254, .125,-.875
90, .0625,0, .8660254,.5, .0625,-1.66955081
90, .078125,0, .8660254,.5, .05,-1.68205081
90, .046875,0, .8660254,.5, .05,-1.68205081
60, .09375,0, .5,.8660254, .04,-.96
120, .03125,0, .5,.8660254, .04,-.96
`),!1);M(L.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.125
`),!1);M(L.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, .1875,.32475953, .1875,-.1875
120, 0,0, .1875,.32475953, .1875,-.1875
0, -.09375,.16237976, .1875,.32475953, .1875,-.1875
`),!1);M(L.ParsePatFile(`
*TRI-OVERLAP,TRI-OVERLAP verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
59.641885,0.09000001,0.15,47.50789248,0.01232691,0.81123363,-80.31212922
300.358115,0.5,0.85000001,33.61547037,0.01232691,0.81123363,-80.31212922
180,0.35942857,0.61,0,1,0.71885753,-0.28114247
59.036243,0.89518072,0.17530121,2.22948161,0.17149859,0.20373205,-5.62721984
180,0.91,0.15,0,1,0.81999999,-0.18000001
300.963757,0,0.35,3.60147029,0.17149859,0.20373206,-5.62721983
300.784147,0.12,0.15,5.83092324,0.01827876,0.5470832,-54.16123426
239.215853,0.88,0.15,48.87739422,0.01827876,0.5470832,-54.16123426
`),!1);M(L.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in inch as imperial QCAD3 pattern
; Imperial Hatch Scale 1 Makes 6inch horizontally placed boards
; with a 0.5in offset line to simulate a rounded edge
0,0,0,0,6
0,0,0.5,0,6
`),!1);M(L.ParsePatFile(`
*WEAVING,WEAVING
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,0.9,0.2,0,1,0.05,-0.95
75.963757,0.88,0.12,0.9701425,0.24253563,0.08246211,-4.04064351
66.801409,0.85,0.05,5.38356375,0.13130643,0.07615773,-7.53961537
54.462322,0.8,-0.02,3.6036768,0.11624764,0.08602325,-8.51630201
56.309932,0.76,-0.08,2.21880078,0.2773501,0.07211103,-3.53344025
90,0.79,0.22,0,1,0.07,-0.93
80.537678,0.78,0.16,0.98639392,0.16439899,0.06082763,-6.0219349
63.434949,0.75,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
56.309932,0.71,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
56.309932,0.67,-0.02,2.21880078,0.2773501,0.07211103,-3.53344025
333.434949,0.86,0.27,0.89442719,0.4472136,0.06708204,-2.16898594
344.054604,0.79,0.29,4.12081692,0.13736056,0.0728011,-7.20730879
0,0.71,0.29,0,1,0.08,-0.92
9.462322,0.65,0.28,5.09636861,0.16439899,0.06082763,-6.0219349
26.565051,0.59,0.25,1.34164079,0.4472136,0.06708204,-2.16898594
38.659808,0.54,0.21,1.40556386,0.15617376,0.06403124,-6.339093
36.869898,0.46,0.15,1.4,0.2,0.1,-4.9
20.556045,0.38,0.12,5.38389277,0.11704115,0.08544004,-8.45856371
330.255119,0.91,0.37,2.23262522,0.12403473,0.08062258,-7.98163517
344.054604,0.84,0.39,4.12081692,0.13736056,0.0728011,-7.20730879
352.874984,0.76,0.4,0.99227788,0.12403473,0.08062258,-7.98163517
0,0.69,0.4,0,1,0.07,-0.93
14.036243,0.61,0.38,3.15296313,0.24253563,0.08246211,-4.04064351
26.565051,0.53,0.34,1.34164079,0.4472136,0.08944272,-2.14662526
33.690068,0.47,0.3,1.38675049,0.2773501,0.07211103,-3.53344025
35.537678,0.4,0.25,4.99864847,0.11624764,0.08602325,-8.51630201
0,0.2,0.1,0,1,0.05,-0.95
348.690068,0.15,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
341.565051,0.12,0.12,0.9486833,0.31622777,0.03162278,-3.13065488
336.801409,0.05,0.15,5.38356375,0.13130643,0.07615773,-7.53961537
326.309932,-0.01,0.19,2.21880078,0.2773501,0.07211103,-3.53344025
324.462322,-0.08,0.24,3.6036768,0.11624764,0.08602325,-8.51630201
0,0.22,0.21,0,1,0.07,-0.93
350.537678,0.16,0.22,0.98639392,0.16439899,0.06082763,-6.0219349
333.434949,0.1,0.25,0.89442719,0.4472136,0.06708204,-2.16898594
326.309932,0.04,0.29,2.21880078,0.2773501,0.07211103,-3.53344025
326.309932,-0.02,0.33,2.21880078,0.2773501,0.07211103,-3.53344025
60.255119,0.63,0.91,2.23262522,0.12403473,0.08062258,-7.98163517
180,0.79,0.79,0,1,0.08,-0.92
164.054604,0.86,0.77,4.12081692,0.13736056,0.0728011,-7.20730879
153.434949,0.92,0.74,0.89442719,0.4472136,0.06708204,-2.16898594
330.255119,0.91,0.87,2.23262522,0.12403473,0.08062258,-7.98163517
345.963757,0.83,0.89,0.9701425,0.24253563,0.08246211,-4.04064351
352.874984,0.75,0.9,0.99227788,0.12403473,0.08062258,-7.98163517
60.255119,0.72,0.85,2.23262522,0.12403473,0.08062258,-7.98163517
80.537678,0.71,0.79,0.98639392,0.16439899,0.06082763,-6.0219349
90,0.71,0.71,0,1,0.08,-0.92
104.036243,0.73,0.63,3.15296313,0.24253563,0.08246211,-4.04064351
116.565051,0.76,0.57,1.34164079,0.4472136,0.06708204,-2.16898594
129.805571,0.81,0.51,1.40840568,0.12803688,0.0781025,-7.73214718
123.690068,0.85,0.45,1.38675049,0.2773501,0.07211103,-3.53344025
113.198591,0.88,0.38,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.71,0.46,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.66,0.53,4.99864847,0.11624764,0.08602325,-8.51630201
299.744881,0.62,0.6,5.82963253,0.12403473,0.08062258,-7.98163517
285.945396,0.6,0.67,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.6,0.76,0,1,0.09,-0.91
74.054604,0.61,0.84,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.6,0.76,0.99227788,0.12403473,0.08062258,-7.98163517
39.805571,0.54,0.71,1.40840568,0.12803688,0.0781025,-7.73214718
35.537678,0.47,0.66,4.99864847,0.11624764,0.08602325,-8.51630201
33.690068,0.41,0.62,1.38675049,0.2773501,0.07211103,-3.53344025
15.945396,0.34,0.6,3.15929297,0.13736056,0.0728011,-7.20730879
6.340192,0.25,0.59,8.0615014,0.11043153,0.09055385,-8.96483129
350.537678,0.19,0.6,0.98639392,0.16439899,0.06082763,-6.0219349
344.054604,0.12,0.62,4.12081692,0.13736056,0.0728011,-7.20730879
23.198591,0.55,0.85,2.23220936,0.13130643,0.07615773,-7.53961537
29.744881,0.48,0.81,5.82963253,0.12403473,0.08062258,-7.98163517
39.805571,0.42,0.76,1.40840568,0.12803688,0.0781025,-7.73214718
29.744881,0.35,0.72,5.82963253,0.12403473,0.08062258,-7.98163517
7.125016,0.27,0.71,7.06997987,0.12403473,0.08062258,-7.98163517
0,0.21,0.71,0,1,0.06,-0.94
344.054604,0.14,0.73,4.12081692,0.13736056,0.0728011,-7.20730879
333.434949,0.1,0.75,0.89442719,0.4472136,0.04472136,-2.19134662
234.462322,0.31,-0.01,3.6036768,0.11624764,0.08602325,-8.51630201
240.255119,0.35,0.06,2.23262522,0.12403473,0.08062258,-7.98163517
243.434949,0.39,0.14,0.89442719,0.4472136,0.08944272,-2.14662526
262.874984,0.4,0.22,0.99227788,0.12403473,0.08062258,-7.98163517
270,0.4,0.3,0,1,0.08,-0.92
282.528808,0.38,0.39,4.1216787,0.10846523,0.09219544,-9.12734901
293.198591,0.35,0.46,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.3,0.52,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.25,0.59,4.99864847,0.11624764,0.08602325,-8.51630201
270,0.21,0.78,0,1,0.07,-0.93
254.054604,0.23,0.85,4.12081692,0.13736056,0.0728011,-7.20730879
246.801409,0.26,0.92,5.38356375,0.13130643,0.07615773,-7.53961537
236.309932,0.21,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
234.462322,0.26,0.11,3.6036768,0.11624764,0.08602325,-8.51630201
249.443955,0.29,0.19,3.16011097,0.11704115,0.08544004,-8.45856371
270,0.29,0.27,0,1,0.08,-0.92
278.130102,0.28,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
296.565051,0.24,0.42,1.34164079,0.4472136,0.08944272,-2.14662526
309.805571,0.19,0.48,1.40840568,0.12803688,0.0781025,-7.73214718
303.690068,0.15,0.54,1.38675049,0.2773501,0.07211103,-3.53344025
290.556045,0.12,0.62,5.38389277,0.11704115,0.08544004,-8.45856371
341.565051,0.06,0.64,0.9486833,0.31622777,0.06324555,-3.09903211
324.462322,-0.01,0.69,3.6036768,0.11624764,0.08602325,-8.51630201
324.462322,-0.08,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
146.309932,0.04,0.79,2.21880078,0.2773501,0.07211103,-3.53344025
146.309932,0.1,0.75,2.21880078,0.2773501,0.07211103,-3.53344025
262.874984,0.11,0.83,0.99227788,0.12403473,0.08062258,-7.98163517
255.963757,0.13,0.91,0.9701425,0.24253563,0.08246211,-4.04064351
240.255119,0.17,0.98,2.23262522,0.12403473,0.08062258,-7.98163517
`),!1);M(L.ParsePatFile(`
*WIRE-FENCE,WIRE-FENCE verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
315,0.46,0.5,0.70710678,0.70710678,0.04673053,-1.36748303
315,0.52571429,0.56428571,0.70710678,0.70710678,0.04848732,-1.36572624
3.731397,0.50267394,0.56278308,15.03328073,0.02169305,0.02308929,-46.074633
183.17983,0.46361415,0.56023571,17.02929602,0.05547002,0.90614559,-17.12161079
183.17983,0.46120401,0.52006684,17.02929602,0.05547002,0.90600202,-17.12175436
153.434949,0.52,0.51,0.89442719,0.4472136,0.02236068,-2.2137073
266.593556,0.52,0.51,17.02938222,0.01188373,1.01178655,-83.1368914
266.593556,0.56,0.53,17.02938222,0.01188373,1.01178655,-83.1368914
2.602562,0.49304348,0.46695652,21.02374701,0.04540766,0.02449081,-21.99822474
`),!1);M(L.ParsePatFile(`
*XMASTREE-01,XMASTREE-01
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.04,0.95,0,1,0.04,-0.96
90,0.04,0.82,0,1,0.13,-0.87
180,0.33,0.82,0,1,0.29,-0.71
49.763642,0.22,0.69,7.81002892,0.05872202,0.17029386,-16.8590925
180,0.28,0.69,0,1,0.06,-0.94
51.340192,0.16,0.54,4.99756038,0.15617376,0.19209373,-6.21103051
180,0.22,0.54,0,1,0.06,-0.94
52.431408,0.12,0.41,4.99962824,0.06097108,0.16401219,-16.23720727
180,0.17,0.41,0,1,0.05,-0.95
53.130102,0.08,0.29,3.6,0.2,0.15,-4.85
180,0.13,0.29,0,1,0.05,-0.95
53.972627,0.05,0.18,8.60201108,0.07352146,0.13601471,-13.4654558
180,0.1,0.18,0,1,0.05,-0.95
54.462322,0,0.04,3.6036768,0.11624764,0.17204651,-8.43027876
0,0.96,0.95,0,1,0.04,-0.96
90,0.96,0.82,0,1,0.13,-0.87
0,0.67,0.82,0,1,0.29,-0.71
130.236358,0.78,0.69,9.21935745,0.05872202,0.17029386,-16.8590925
0,0.72,0.69,0,1,0.06,-0.94
128.659808,0.84,0.54,1.40556386,0.15617376,0.19209373,-6.21103051
0,0.78,0.54,0,1,0.06,-0.94
127.568592,0.88,0.41,11.40159123,0.06097108,0.16401219,-16.23720727
0,0.83,0.41,0,1,0.05,-0.95
126.869898,0.92,0.29,1.4,0.2,0.15,-4.85
0,0.87,0.29,0,1,0.05,-0.95
126.027373,0.95,0.18,4.99945943,0.07352146,0.13601471,-13.4654558
0,0.9,0.18,0,1,0.05,-0.95
125.537678,1,0.04,4.99864847,0.11624764,0.17204651,-8.43027876
0,0.46,0.04,0,1,0.04,-0.96
270,0.46,0.17,0,1,0.13,-0.87
0,0.17,0.17,0,1,0.29,-0.71
229.763642,0.28,0.3,7.81002892,0.05872202,0.17029386,-16.8590925
0,0.22,0.3,0,1,0.06,-0.94
231.340192,0.34,0.45,4.99756038,0.15617376,0.19209373,-6.21103051
0,0.28,0.45,0,1,0.06,-0.94
232.431408,0.38,0.58,4.99962824,0.06097108,0.16401219,-16.23720727
0,0.33,0.58,0,1,0.05,-0.95
233.130102,0.42,0.7,3.6,0.2,0.15,-4.85
0,0.37,0.7,0,1,0.05,-0.95
233.972627,0.45,0.81,8.60201108,0.07352146,0.13601471,-13.4654558
0,0.4,0.81,0,1,0.05,-0.95
234.462322,0.5,0.95,3.6036768,0.11624764,0.17204651,-8.43027876
180,0.54,0.04,0,1,0.04,-0.96
270,0.54,0.17,0,1,0.13,-0.87
180,0.83,0.17,0,1,0.29,-0.71
310.236358,0.72,0.3,9.21935745,0.05872202,0.17029386,-16.8590925
180,0.78,0.3,0,1,0.06,-0.94
308.659808,0.66,0.45,1.40556386,0.15617376,0.19209373,-6.21103051
180,0.72,0.45,0,1,0.06,-0.94
307.568592,0.62,0.58,11.40159123,0.06097108,0.16401219,-16.23720727
180,0.67,0.58,0,1,0.05,-0.95
306.869898,0.58,0.7,1.4,0.2,0.15,-4.85
180,0.63,0.7,0,1,0.05,-0.95
306.027373,0.55,0.81,4.99945943,0.07352146,0.13601471,-13.4654558
180,0.6,0.81,0,1,0.05,-0.95
305.537678,0.5,0.95,4.99864847,0.11624764,0.17204651,-8.43027876
`),!1);M(L.ParsePatFile(`
*XMASTREE-02,XMASTREE-02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.04,0.26,0,1,0.04,-0.96
90,0.04,0.13,0,1,0.13,-0.87
180,0.33,0.13,0,1,0.29,-0.71
49.763642,0.22,0,7.81002892,0.05872202,0.17029386,-16.8590925
180,0.28,1,0,1,0.06,-0.94
51.340192,0.16,0.85,4.99756038,0.15617376,0.19209373,-6.21103051
180,0.22,0.85,0,1,0.06,-0.94
52.431408,0.12,0.72,4.99962824,0.06097108,0.16401219,-16.23720727
180,0.17,0.72,0,1,0.05,-0.95
53.130102,0.08,0.6,3.6,0.2,0.15,-4.85
180,0.13,0.6,0,1,0.05,-0.95
53.972627,0.05,0.49,8.60201108,0.07352146,0.13601471,-13.4654558
180,0.1,0.49,0,1,0.05,-0.95
54.462322,0,0.35,3.6036768,0.11624764,0.17204651,-8.43027876
0,0.96,0.26,0,1,0.04,-0.96
90,0.96,0.13,0,1,0.13,-0.87
0,0.67,0.13,0,1,0.29,-0.71
130.236358,0.78,0,9.21935745,0.05872202,0.17029386,-16.8590925
0,0.72,1,0,1,0.06,-0.94
128.659808,0.84,0.85,1.40556386,0.15617376,0.19209373,-6.21103051
0,0.78,0.85,0,1,0.06,-0.94
127.568592,0.88,0.72,11.40159123,0.06097108,0.16401219,-16.23720727
0,0.83,0.72,0,1,0.05,-0.95
126.869898,0.92,0.6,1.4,0.2,0.15,-4.85
0,0.87,0.6,0,1,0.05,-0.95
126.027373,0.95,0.49,4.99945943,0.07352146,0.13601471,-13.4654558
0,0.9,0.49,0,1,0.05,-0.95
125.537678,1,0.35,4.99864847,0.11624764,0.17204651,-8.43027876
0,0.46,0.09,0,1,0.04,-0.96
270,0.46,0.22,0,1,0.13,-0.87
0,0.17,0.22,0,1,0.29,-0.71
229.763642,0.28,0.35,7.81002892,0.05872202,0.17029386,-16.8590925
0,0.22,0.35,0,1,0.06,-0.94
231.340192,0.34,0.5,4.99756038,0.15617376,0.19209373,-6.21103051
0,0.28,0.5,0,1,0.06,-0.94
232.431408,0.38,0.63,4.99962824,0.06097108,0.16401219,-16.23720727
0,0.33,0.63,0,1,0.05,-0.95
233.130102,0.42,0.75,3.6,0.2,0.15,-4.85
0,0.37,0.75,0,1,0.05,-0.95
233.972627,0.45,0.86,8.60201108,0.07352146,0.13601471,-13.4654558
0,0.4,0.86,0,1,0.05,-0.95
234.462322,0.5,1,3.6036768,0.11624764,0.17204651,-8.43027876
180,0.54,0.09,0,1,0.04,-0.96
270,0.54,0.22,0,1,0.13,-0.87
180,0.83,0.22,0,1,0.29,-0.71
310.236358,0.72,0.35,9.21935745,0.05872202,0.17029386,-16.8590925
180,0.78,0.35,0,1,0.06,-0.94
308.659808,0.66,0.5,1.40556386,0.15617376,0.19209373,-6.21103051
180,0.72,0.5,0,1,0.06,-0.94
307.568592,0.62,0.63,11.40159123,0.06097108,0.16401219,-16.23720727
180,0.67,0.63,0,1,0.05,-0.95
306.869898,0.58,0.75,1.4,0.2,0.15,-4.85
180,0.63,0.75,0,1,0.05,-0.95
306.027373,0.55,0.86,4.99945943,0.07352146,0.13601471,-13.4654558
180,0.6,0.86,0,1,0.05,-0.95
305.537678,0.5,1,4.99864847,0.11624764,0.17204651,-8.43027876
`),!1);M(L.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, .125,.125, .125,-.125
90, .125,0, .125,.125, .125,-.125
`),!1);var c5=new Set,f3=!1;function u3(J,Q,$=2){let U=Q&&Q.length,F=U?Q[0]*$:J.length;if(c5.size)c5.clear();let G=b9(J,0,F,$,!0),E=[];if(!G||G.next===G.prev)return E;let q=0,N=0,B=0;if(U)G=bY(J,Q,G,$);if(J.length>80*$){q=J[0],N=J[1];let V=q,w=N;for(let _=$;_<F;_+=$){let I=J[_],T=J[_+1];if(I<q)q=I;if(T<N)N=T;if(I>V)V=I;if(T>w)w=T}B=Math.max(V-q,w-N),B=B!==0?32767/B:0}return b3(G,E,q,N,B),E}function b9(J,Q,$,U,F){let G=null;if(F===oY(J,Q,$,U)>0)for(let E=Q;E<$;E+=U)G=f9(E/U|0,J[E],J[E+1],G);else for(let E=$-U;E>=Q;E-=U)G=f9(E/U|0,J[E],J[E+1],G);if(G&&i5(G,G.next))s5(G),G=G.next;return G}function S2(J,Q=J){let $=Q===J,U=J,F;do if(F=!1,U!==U.next&&(c5.size===0||!c5.has(U))&&(i5(U,U.next)||x0(U.prev,U,U.next)===0)){if($||U===Q)Q=U.prev;f3=!0,s5(U),U=U.prev,F=!0}else if($||U!==Q)U=U.next,F=!$;while(F||U!==Q);return Q}function b3(J,Q,$,U,F){if(F)dY(J,$,U,F);let G=J,E=!1;while(J.prev!==J.next){let{prev:q,next:N}=J;if(x0(q,J,N)<0&&(F?vY(J,$,U,F):jY(J))){Q.push(q.i,J.i,N.i),s5(J),J=N,G=N;continue}if(J=N,J===G){if(f3=!1,J=S2(J),f3){G=J;continue}if(!E){J=hY(J,Q),G=J,E=!0;continue}fY(J,Q,$,U,F);break}}}function jY(J){let Q=J.prev,$=J,U=J.next,F=Q.x,G=$.x,E=U.x,q=Q.y,N=$.y,B=U.y,V=Math.min(F,G,E),w=Math.min(q,N,B),_=Math.max(F,G,E),I=Math.max(q,N,B),T=U.next;while(T!==Q){if(T.x>=V&&T.x<=_&&T.y>=w&&T.y<=I&&!(F===T.x&&q===T.y)&&e4(F,q,G,N,E,B,T.x,T.y)&&x0(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function vY(J,Q,$,U){let F=J.prev,G=J,E=J.next,q=F.x,N=G.x,B=E.x,V=F.y,w=G.y,_=E.y,I=Math.min(q,N,B),T=Math.min(V,w,_),f=Math.max(q,N,B),h=Math.max(V,w,_),p=m3(I,T,Q,$,U),d=m3(f,h,Q,$,U),m=J.prevZ;while(m&&m.z>=p){if(m.x>=I&&m.x<=f&&m.y>=T&&m.y<=h&&m!==E&&!(q===m.x&&V===m.y)&&e4(q,V,N,w,B,_,m.x,m.y)&&x0(m.prev,m,m.next)>=0)return!1;m=m.prevZ}let x=J.nextZ;while(x&&x.z<=d){if(x.x>=I&&x.x<=f&&x.y>=T&&x.y<=h&&x!==E&&!(q===x.x&&V===x.y)&&e4(q,V,N,w,B,_,x.x,x.y)&&x0(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function hY(J,Q){let $=J,U=!1;do{let F=$.prev,G=$.next.next;if(g9(F,$,$.next,G,!1)&&n5(F,G)&&n5(G,F))Q.push(F.i,$.i,G.i),s5($),s5($.next),$=J=G,U=!0;$=$.next}while($!==J);return U?S2($):$}function fY(J,Q,$,U,F){let G=J;do{let E=G.next.next;while(E!==G.prev){if(G.i!==E.i&&iY(G,E)){let q=m9(G,E);G=S2(G,G.next),q=S2(q,q.next),b3(G,Q,$,U,F),b3(q,Q,$,U,F);return}E=E.next}G=G.next}while(G!==J)}var y3=!1;function bY(J,Q,$,U){let F=[];for(let G=0,E=Q.length;G<E;G++){let q=Q[G]*U,N=G<E-1?Q[G+1]*U:J.length,B=b9(J,q,N,U,!1);if(B===B.next)c5.add(B);F.push(cY(B))}F.sort(yY),gY(J.length/U,Q.length),x9($,$),y3=!0;for(let G=0;G<F.length;G++)$=xY(F[G],$);return y3=!1,S2($)}function yY(J,Q){return J.x-Q.x||J.y-Q.y||(J.next.y-J.y)/(J.next.x-J.x)-(Q.next.y-Q.y)/(Q.next.x-Q.x)}function xY(J,Q){let $=pY(J,Q);if(!$)return Q;let U=m9($,J),F=U.next;return x9($,F.next),S2(U,U.next),S2($,$.next)}var y9=16,h0=new Float64Array(0),t4=0,x3=[],g3=[];function gY(J,Q){let $=Math.ceil((J+2*Q)/y9)+Q+2;if(h0.length<$*4)h0=new Float64Array($*4);t4=0}function x9(J,Q){let $=J;do{let U=t4++;x3[U]=$;let F=1/0,G=1/0,E=-1/0,q=-1/0,N=0;do{let V=$.next;if($.z=U,$.x<F)F=$.x;if($.x>E)E=$.x;if($.y<G)G=$.y;if($.y>q)q=$.y;if(V.x<F)F=V.x;if(V.x>E)E=V.x;if(V.y<G)G=V.y;if(V.y>q)q=V.y;$=V}while(++N<y9&&$!==Q);g3[U]=$;let B=U*4;h0[B]=F,h0[B+1]=G,h0[B+2]=E,h0[B+3]=q}while($!==Q)}function mY(J,Q){let $=J.z*4;if(Q.x<h0[$])h0[$]=Q.x;if(Q.y<h0[$+1])h0[$+1]=Q.y;if(Q.x>h0[$+2])h0[$+2]=Q.x;if(Q.y>h0[$+3])h0[$+3]=Q.y}function v9(J){let Q=g3[J];while(Q.prev.next!==Q)Q=Q.next;return g3[J]=Q,Q}function h9(J){let Q=x3[J];while(Q.prev.next!==Q)Q=Q.next;return x3[J]=Q,Q}function pY(J,Q){let $=Q,U=J.x,F=J.y,G=-1/0,E;if(i5(J,$))return $;for(let _=0,I=0;_<t4;_++,I+=4){if(F<h0[I+1]||F>h0[I+3]||h0[I]>U||h0[I+2]<=G)continue;let T=v9(_);$=h9(_);do{if($.prev.next===$){if(i5(J,$.next))return $.next;else if(F<=$.y&&F>=$.next.y&&$.next.y!==$.y){let f=$.x+(F-$.y)*($.next.x-$.x)/($.next.y-$.y);if(f<=U&&f>G){if(G=f,E=$.x<$.next.x?$:$.next,f===U)return E}}}$=$.next}while($!==T)}if(!E)return null;let{x:q,y:N}=E,B=Math.min(F,N),V=Math.max(F,N),w=1/0;for(let _=0,I=0;_<t4;_++,I+=4){if(h0[I+2]<q||h0[I]>U||h0[I+3]<B||h0[I+1]>V)continue;let T=v9(_);$=h9(_);do{if($.prev.next===$&&U>=$.x&&$.x>=q&&U!==$.x&&e4(F<N?U:G,F,q,N,F<N?G:U,F,$.x,$.y)){let f=Math.abs(F-$.y)/(U-$.x);if((n5($,J)||$.y===F&&$.next.y===F&&$.next.x>U)&&(f<w||f===w&&($.x>E.x||$.x===E.x&&uY(E,$))))E=$,w=f}$=$.next}while($!==T)}return E}function uY(J,Q){return x0(J.prev,J,Q.prev)<0&&x0(Q.next,J,J.next)<0}var w1=[],u5=[],T2=new Uint32Array(0),d5=new Uint32Array(0),l5=new Uint32Array(256);function dY(J,Q,$,U){let F=J,G=0;do F.z=m3(F.x,F.y,Q,$,U),w1[G++]=F,F=F.next;while(F!==J);lY(G);let E=null;for(let q=0;q<G;q++){let N=w1[q];if(N.prevZ=E,E)E.nextZ=N;E=N}E.nextZ=null}function lY(J){if(J<=32){for(let Q=1;Q<J;Q++){let $=w1[Q],U=$.z,F=Q-1;while(F>=0&&w1[F].z>U)w1[F+1]=w1[F],F--;w1[F+1]=$}return}if(T2.length<J)T2=new Uint32Array(J),d5=new Uint32Array(J),u5=Array(J);for(let Q=0;Q<J;Q++)T2[Q]=w1[Q].z;r4(J,w1,T2,u5,d5,0),r4(J,u5,d5,w1,T2,8),r4(J,w1,T2,u5,d5,16),r4(J,u5,d5,w1,T2,24)}function r4(J,Q,$,U,F,G){l5.fill(0);for(let q=0;q<J;q++)l5[$[q]>>>G&255]++;let E=0;for(let q=0;q<256;q++){let N=l5[q];l5[q]=E,E+=N}for(let q=0;q<J;q++){let N=$[q],B=l5[N>>>G&255]++;U[B]=Q[q],F[B]=N}}function m3(J,Q,$,U,F){return J=(J-$)*F|0,Q=(Q-U)*F|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function cY(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function e4(J,Q,$,U,F,G,E,q){return(F-E)*(Q-q)>=(J-E)*(G-q)&&(J-E)*(U-q)>=($-E)*(Q-q)&&($-E)*(G-q)>=(F-E)*(U-q)}function iY(J,Q){let $=i5(J,Q)&&x0(J.prev,J,J.next)>0&&x0(Q.prev,Q,Q.next)>0;return J.next.i!==Q.i&&($||n5(J,Q)&&n5(Q,J)&&(x0(J.prev,J,Q.prev)!==0||x0(J,Q.prev,Q)!==0))&&!nY(J,Q)&&($||sY(J,Q))}function x0(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function i5(J,Q){return J.x===Q.x&&J.y===Q.y}function g9(J,Q,$,U,F=!0){let G=x0(J,Q,$),E=x0(J,Q,U),q=x0($,U,J),N=x0($,U,Q);if((G>0&&E<0||G<0&&E>0)&&(q>0&&N<0||q<0&&N>0))return!0;if(!F)return!1;if(G===0&&a4(J,$,Q))return!0;if(E===0&&a4(J,U,Q))return!0;if(q===0&&a4($,J,U))return!0;if(N===0&&a4($,Q,U))return!0;return!1}function a4(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function nY(J,Q){let $=Math.min(J.x,Q.x),U=Math.max(J.x,Q.x),F=Math.min(J.y,Q.y),G=Math.max(J.y,Q.y),E=J;do{let q=E.next;if(E.x>U&&q.x>U||E.x<$&&q.x<$||E.y>G&&q.y>G||E.y<F&&q.y<F){E=q;continue}if(E.i!==J.i&&q.i!==J.i&&E.i!==Q.i&&q.i!==Q.i&&g9(E,q,J,Q))return!0;E=q}while(E!==J);return!1}function n5(J,Q){return x0(J.prev,J,J.next)<0?x0(J,Q,J.next)>=0&&x0(J,J.prev,Q)>=0:x0(J,Q,J.prev)<0||x0(J,J.next,Q)<0}function sY(J,Q){let $=J,U=!1,F=(J.x+Q.x)/2,G=(J.y+Q.y)/2;do{let E=$.next;if($.y>G!==E.y>G&&F<(E.x-$.x)*(G-$.y)/(E.y-$.y)+$.x)U=!U;$=E}while($!==J);return U}function m9(J,Q){let $=p3(J.i,J.x,J.y),U=p3(Q.i,Q.x,Q.y),F=J.next,G=Q.prev;return J.next=Q,Q.prev=J,$.next=F,F.prev=$,U.next=$,$.prev=U,G.next=U,U.prev=G,U}function f9(J,Q,$,U){let F=p3(J,Q,$);if(!U)F.prev=F,F.next=F;else F.next=U.next,F.prev=U,U.next.prev=F,U.next=F;return F}function s5(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ;if(y3)mY(J.prev,J.next)}function p3(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function oY(J,Q,$,U){let F=0;for(let G=Q,E=$-U;G<$;G+=U)F+=(J[E]-J[G])*(J[G+1]+J[E+1]),E=G;return F}var k2=65536,rY=15*Math.PI/180,p9="__point_shape",aY=1024,u9=4,tY=20000,eY=20000,d9={DIMTXT:function(){return 2.5},DIMASZ:2.5,DIMCLRD:0,DIMCLRE:0,DIMCLRT:0,DIMDEC:2,DIMDLE:0,DIMDSEP:46,DIMEXE:1.25,DIMEXO:0.625,DIMFXL:1,DIMFXLON:!1,DIMGAP:0.625,DIMLFAC:1,DIMRND:0,DIMSAH:0,DIMSCALE:1,DIMSD1:0,DIMSD2:0,DIMSE1:0,DIMSE2:0,DIMSOXD:!1,DIMTSZ:0,DIMZIN:8};class t2{static DefaultOptions;options;origin;batches;layers;blocks;dimStyles;vars;fontStyles;inserts;bounds;pointShapeBlock;numBlocksFlattened;numEntitiesFiltered;images;oleFrames;scene;angBase=0;angDir=0;pdMode=0;pdSize=0;isMetric=!0;imageDefs;layouts;activeLayout;activeLayoutInfo;textRenderer;hasMissingChars=!1;pointShapeHasDot=!1;constructor(J){this.options={...t2.DefaultOptions,...J?.sceneOptions||{},textOptions:{...a2.DefaultOptions,...J?.sceneOptions?.textOptions||{}}},this.origin=null,this.batches=new k3((Q,$)=>Q.key.Compare($.key)),this.layers=new Map,this.blocks=new Map,this.dimStyles=new Map,this.vars=new Map,this.fontStyles=new Map,this.inserts=new Map,this.bounds=null,this.pointShapeBlock=null,this.numBlocksFlattened=0,this.numEntitiesFiltered=0,this.images=[],this.oleFrames=[]}async Build(J,Q){let $=J.header||{};for(let[U,F]of Object.entries($))if(U.startsWith("$"))this.vars.set(U.slice(1),F);if(this.angBase=this.vars.get("ANGBASE")??0,this.angDir=this.vars.get("ANGDIR")??0,this.pdMode=this.vars.get("PDMODE")??0,this.pdSize=this.vars.get("PDSIZE")??0,this.isMetric=(this.vars.get("MEASUREMENT")??1)==1,J.tables&&J.tables.layer)for(let[,U]of Object.entries(J.tables.layer.layers))U.displayName=i1(U.name),this.layers.set(U.name,U);if(J.tables&&J.tables.dimstyle)for(let[,U]of Object.entries(J.tables.dimstyle.dimStyles))this.dimStyles.set(U.name,U);if(J.tables&&J.tables.style)for(let[,U]of Object.entries(J.tables.style.styles))this.fontStyles.set(U.styleName,U);if(J.blocks)for(let[,U]of Object.entries(J.blocks))this.blocks.set(U.name,new l3(U));this.imageDefs=J.imageDefs||{},this.layouts=J.layouts||[],this.activeLayout=this.options.layout||(this.layouts.find((U)=>!U.isModel)?.name??"Model"),this.activeLayoutInfo=this.layouts.find((U)=>U.name===this.activeLayout)??null,this.textRenderer=new a2(Q,this.options.textOptions),this.hasMissingChars=!1,await this._FetchFonts(J);for(let U of J.entities){if(!this._FilterEntity(U))continue;if(U.type==="INSERT")this.inserts.set(U.handle,U),this.blocks.get(U.name)?.RegisterInsert(U);else if(U.type=="DIMENSION"){if((U.block??null)!==null)this.blocks.get(U.block)?.RegisterInsert(U)}}for(let U of this.blocks.values()){if(U.data.hasOwnProperty("entities")){let F=U.DefinitionContext();for(let G of U.data.entities){if(!this._FilterEntity(G,!0))continue;this._ProcessDxfEntity(G,F)}}if(U.SetFlatten())this.numBlocksFlattened++}console.log(`${this.numBlocksFlattened} blocks flattened`);for(let U of J.entities){if(!this._FilterEntity(U)){this.numEntitiesFiltered++;continue}this._ProcessDxfEntity(U)}console.log(`${this.numEntitiesFiltered} entities filtered`),this.scene=this._BuildScene(),delete this.batches,delete this.layers,delete this.blocks,delete this.textRenderer}_FilterEntity(J,Q=!1){if(J.hidden)return!1;let $=this._GetEntityLayer(J),U=this.layers.get($);if(U?.frozen||U?.visible===!1||this.options.suppressNonPlotLayers&&U?.plot===!1)return!1;if(Q)return!0;if(this.activeLayoutInfo?.isModel??this.activeLayout==="Model")return!J.inPaperSpace;if(!J.inPaperSpace)return!1;let G=this.activeLayoutInfo?.blockRecordHandle;return!G||!J.ownerHandle||J.ownerHandle===G}async _FetchFonts(J){function Q(U){return U.type==="TEXT"||U.type==="MTEXT"||U.type==="DIMENSION"||U.type==="ATTDEF"||U.type==="ATTRIB"}let $=async(U,F=!1)=>{if(!this._FilterEntity(U,F))return!0;let G,E=this._GetEntityTextStyle(U)?.font??null;if(U.type==="TEXT"||U.type==="ATTRIB"||U.type==="ATTDEF")G=await this.textRenderer.FetchFonts(i1(U.text),E);else if(U.type==="MTEXT"){let q=new x1;q.Parse(U.text),G=!0;for(let N of q.GetText())if(!await this.textRenderer.FetchFonts(i1(N),E)){G=!1;break}}else if(U.type==="DIMENSION"){G=!0;let q=this._CreateLinearDimension(U);if(q){for(let N of q.GetTexts())if(!await this.textRenderer.FetchFonts(N)){G=!1;break}}}else throw Error("Bad entity type");if(!G)this.hasMissingChars=!0;return G};for(let U of J.entities)if(Q(U)){if(!await $(U))return}for(let U of this.blocks.values())if(U.data.hasOwnProperty("entities")){for(let F of U.data.entities)if(Q(F)){if(!await $(F,!0))return}}}_ProcessDxfEntity(J,Q=null){let $;switch(J.type){case"LINE":$=this._DecomposeLine(J,Q);break;case"POLYLINE":case"LWPOLYLINE":$=this._DecomposePolyline(J,Q);break;case"ARC":$=this._DecomposeArc(J,Q);break;case"CIRCLE":$=this._DecomposeCircle(J,Q);break;case"ELLIPSE":$=this._DecomposeEllipse(J,Q);break;case"POINT":$=this._DecomposePoint(J,Q);break;case"SPLINE":$=this._DecomposeSpline(J,Q);break;case"INSERT":this._ProcessInsert(J,Q);return;case"TEXT":$=this._DecomposeText(J,Q);break;case"MTEXT":$=this._DecomposeMText(J,Q);break;case"3DFACE":$=this._Decompose3DFace(J,Q);break;case"SOLID":$=this._DecomposeSolid(J,Q);break;case"DIMENSION":$=this._DecomposeDimension(J,Q);break;case"ATTRIB":$=this._DecomposeAttribute(J,Q);break;case"ATTDEF":if(!Q||J.constant)$=this._DecomposeAttribute(J,Q);else return;break;case"HATCH":$=this._DecomposeHatch(J,Q);break;case"IMAGE":this._ProcessImage(J,Q);return;case"OLE2FRAME":this._ProcessOle2Frame(J,Q);return;case"VIEWPORT":$=this._DecomposeViewport(J,Q);break;default:console.log("Unhandled entity type: "+J.type);return}for(let U of $)this._ProcessEntity(U,Q)}_ProcessEntity(J,Q=null){switch(J.type){case K0.Type.POINTS:this._ProcessPoints(J,Q);break;case K0.Type.LINE_SEGMENTS:this._ProcessLineSegments(J,Q);break;case K0.Type.POLYLINE:this._ProcessPolyline(J,Q);break;case K0.Type.TRIANGLES:this._ProcessTriangles(J,Q);break;default:throw Error("Unhandled entity type: "+J.type)}}_GetLineType(J,Q=null,$=null){return 0}_IsPlainLine(J){return!0}*_DecomposeLine(J,Q){if(J.vertices.length!==2)return;let $=this._GetEntityLayer(J,Q),U=this._GetEntityColor(J,Q);yield new K0({type:K0.Type.LINE_SEGMENTS,vertices:J.vertices,layer:$,color:U,lineType:this._GetLineType(J,J.vertices[0])})}_GenerateBulgeVertices(J,Q,$,U){let F=4*Math.atan(U),G=Math.abs(F);if(G<this.options.arcTessellationAngle){J.push(new l($.x,$.y));return}let E=F/2,q=Math.sin(E),N=Math.cos(E),B={x:$.x-Q.x,y:$.y-Q.y},V=B.x*B.x+B.y*B.y;if(V<Number.MIN_VALUE*2)return;let w=Math.sqrt(V),_=w/2/q;B.x/=w,B.y/=w;let I={x:(B.x*q-B.y*N)*_+Q.x,y:(B.x*N+B.y*q)*_+Q.y},T=Math.floor(G/this.options.arcTessellationAngle);if(T<this.options.minArcTessellationSubdivisions)T=this.options.minArcTessellationSubdivisions;if(T>1){let f=Math.atan2(Q.y-I.y,Q.x-I.x),h=F/T;if(F<0)_=-_;for(let p=1;p<T;p++){let d=f+p*h,m=new l(I.x+_*Math.cos(d),I.y+_*Math.sin(d));J.push(m)}}J.push(new l($.x,$.y))}_GenerateArcVertices({vertices:J,center:Q,radius:$,startAngle:U=null,endAngle:F=null,tessellationAngle:G=null,yRadius:E=null,transform:q=null,rotation:N=null,ccwAngleDir:B=!0}){if(!Q||!$)return;if(!G)G=this.options.arcTessellationAngle;if(E===null)E=$;if(U===void 0||U===null)U=0;else U+=this.angBase;let V=!1;if(F===void 0||F===null)F=U+2*Math.PI,V=!0;else F+=this.angBase;if(!B){let f=U;U=-F,F=-f}while(F<=U)F+=Math.PI*2;let w=F-U,_=Math.floor(w/G);if(_===0)_=1;let I=w/_,T=null;if(N)T=new X0().makeRotation(N);for(let f=0;f<=_;f++){if(f===_&&V)break;let h;if(B)h=U+f*I;else h=U+(_-f)*I;let p=new l($*Math.cos(h),E*Math.sin(h));if(T)p.applyMatrix3(T);if(p.add(Q),q)p.applyMatrix3(q);J.push(p)}}*_DecomposeArc(J,Q){let $=this._GetEntityColor(J,Q),U=this._GetEntityLayer(J,Q),F=this._GetLineType(J,null,Q),G=[];this._GenerateArcVertices({vertices:G,center:J.center,radius:J.radius,startAngle:J.startAngle,endAngle:J.endAngle,transform:this._GetEntityExtrusionTransform(J)}),yield new K0({type:K0.Type.POLYLINE,vertices:G,layer:U,color:$,lineType:F,shape:J.endAngle===void 0})}*_DecomposeCircle(J,Q){let $=this._GetEntityColor(J,Q),U=this._GetEntityLayer(J,Q),F=this._GetLineType(J,null,Q),G=[];this._GenerateArcVertices({vertices:G,center:J.center,radius:J.radius,transform:this._GetEntityExtrusionTransform(J)}),yield new K0({type:K0.Type.POLYLINE,vertices:G,layer:U,color:$,lineType:F,shape:!0})}*_DecomposeEllipse(J,Q){let $=this._GetEntityColor(J,Q),U=this._GetEntityLayer(J,Q),F=this._GetLineType(J,null,Q),G=[],E=Math.sqrt(J.majorAxisEndPoint.x*J.majorAxisEndPoint.x+J.majorAxisEndPoint.y*J.majorAxisEndPoint.y),q=E*J.axisRatio,N=Math.atan2(J.majorAxisEndPoint.y,J.majorAxisEndPoint.x),B=J.startAngle??0,V=J.endAngle??B+2*Math.PI;while(V<=B)V+=Math.PI*2;let w=(J.endAngle??null)===null||Math.abs(V-B-2*Math.PI)<0.000001;this._GenerateArcVertices({vertices:G,center:J.center,radius:E,startAngle:J.startAngle,endAngle:w?null:J.endAngle,yRadius:q,rotation:N,ccwAngleDir:!this._GetEntityExtrusionTransform(J)}),yield new K0({type:K0.Type.POLYLINE,vertices:G,layer:U,color:$,lineType:F,shape:w})}*_DecomposePoint(J,Q){if(this.pdMode===$1.NONE)return;if(this.pdMode!==$1.DOT&&this.pdSize<=0)return;let $=this._GetEntityColor(J,Q),U=this._GetEntityLayer(J,Q),F=this.pdMode&$1.MARK_MASK;if((this.pdMode&$1.SHAPE_MASK)!==0){let q=new S0(U,p9,S0.GeometryType.POINT_INSTANCE,$,0);this._GetBatch(q).PushVertex(this._TransformVertex(J.position)),this._CreatePointShapeBlock();return}if(F===$1.DOT){yield new K0({type:K0.Type.POINTS,vertices:[J.position],layer:U,color:$,lineType:null});return}let E=[];this._CreatePointMarker(E,F,J.position),yield new K0({type:K0.Type.LINE_SEGMENTS,vertices:E,layer:U,color:$,lineType:null})}*_DecomposeAttribute(J,Q){if(!this.textRenderer.canRender)return;let $=J.ownerHandle?this.inserts.get(J.ownerHandle):null,U=this._GetEntityLayer(J.layer!=null?J:$??J,Q),F;if(J.colorIndex===0&&$)F=this._GetEntityColor($,Q);else F=this._GetEntityColor(J,Q);let G=this._GetEntityTextStyle(J),E=G?.fixedTextHeight===0?null:G?.fixedTextHeight,q=J.textHeight||(E??1),N=J.scale??J.xScale??G?.widthFactor??1;yield*this.textRenderer.Render({text:i1(J.text),fontSize:q,startPos:J.startPoint,endPos:J.endPoint,rotation:J.rotation,hAlign:J.horizontalJustification,vAlign:J.verticalJustification,widthFactor:N,color:F,layer:U,fontName:G?.font??null})}_CreatePointMarker(J,Q,$=null){let U=this;function F(G,E){J.push({x:($?.x??0)+G*U.pdSize*0.5,y:($?.y??0)+E*U.pdSize*0.5})}switch(Q){case $1.PLUS:F(0,1.5),F(0,-1.5),F(-1.5,0),F(1.5,0);break;case $1.CROSS:F(-1,1),F(1,-1),F(1,1),F(-1,-1);break;case $1.TICK:F(0,1),F(0,0);break;default:console.warn("Unsupported point display type: "+Q)}}_CreatePointShapeBlock(){if(this.pointShapeBlock)return;this.pointShapeBlock=new l3({name:p9,position:{x:0,y:0}}),this.pointShapeBlock.offset=new l(0,0);let J=this.pointShapeBlock.DefinitionContext(),Q=this.pdMode&$1.MARK_MASK;if(Q!==$1.DOT&&Q!==$1.NONE){let $=[];this._CreatePointMarker($,Q);let U=new K0({type:K0.Type.LINE_SEGMENTS,vertices:$,color:n1.BY_BLOCK});this._ProcessEntity(U,J)}if(this.pdMode&$1.SQUARE){let $=this.pdSize*0.5,U=[{x:-$,y:$},{x:$,y:$},{x:$,y:-$},{x:-$,y:-$}],F=new K0({type:K0.Type.POLYLINE,vertices:U,color:n1.BY_BLOCK,shape:!0});this._ProcessEntity(F,J)}if(this.pdMode&$1.CIRCLE){let $=[];this._GenerateArcVertices({vertices:$,center:{x:0,y:0},radius:this.pdSize*0.5,tessellationAngle:rY});let U=new K0({type:K0.Type.POLYLINE,vertices:$,color:n1.BY_BLOCK,shape:!0});this._ProcessEntity(U,J)}}*_Decompose3DFace(J,Q){yield*this._DecomposeFace(J,J.vertices,Q,this.options.wireframeMesh)}*_DecomposeSolid(J,Q){yield*this._DecomposeFace(J,J.points,Q,!1,this._GetEntityExtrusionTransform(J))}*_DecomposeFace(J,Q,$,U,F=null){let G=this._GetEntityLayer(J,$),E=this._GetEntityColor(J,$);function q(T,f,h){let p=new l().subVectors(f,T),d=new l().subVectors(h,T);return Math.abs(p.cross(d))>Number.EPSILON}let N=new l(Q[0].x,Q[0].y),B=new l(Q[1].x,Q[1].y),V=new l(Q[2].x,Q[2].y),w=null,_=q(N,B,V),I=!1;if(Q.length>3){if(w=new l(Q[3].x,Q[3].y),I=q(B,w,V),F)w.applyMatrix3(F)}if(F)N.applyMatrix3(F),B.applyMatrix3(F),V.applyMatrix3(F);if(!_&&!I)return;if(U){let T=[];if(_&&!I)T.push(N,B,V);else if(!_&&I)T.push(B,w,V);else T.push(N,B,w,V);yield new K0({type:K0.Type.POLYLINE,vertices:T,layer:G,color:E,shape:!0})}else{let T=[],f=[];if(_)T.push(N,B,V),f.push(0,1,2);if(I){if(!_)T.push(B,V),f.push(0,1,2);else f.push(1,2,3);T.push(w)}yield new K0({type:K0.Type.TRIANGLES,vertices:T,indices:f,layer:G,color:E})}}*_DecomposeText(J,Q){if(!this.textRenderer.canRender)return;let $=this._GetEntityLayer(J,Q),U=this._GetEntityColor(J,Q),F=this._GetEntityTextStyle(J),G=F?.fixedTextHeight===0?null:F?.fixedTextHeight;yield*this.textRenderer.Render({text:i1(J.text),fontSize:J.textHeight||(G??1),startPos:J.startPoint,endPos:J.endPoint,rotation:J.rotation,hAlign:J.halign,vAlign:J.valign,widthFactor:J.xScale??F?.widthFactor??1,color:U,layer:$,fontName:F?.font??null})}*_DecomposeMText(J,Q){if(!this.textRenderer.canRender)return;let $=this._GetEntityLayer(J,Q),U=this._GetEntityColor(J,Q),F=this._GetEntityTextStyle(J),G=F?.fixedTextHeight===0?null:F?.fixedTextHeight,E=new x1;E.Parse(i1(J.text)),yield*this.textRenderer.RenderMText({formattedText:E.GetContent(),fontSize:J.height??G,position:J.position,rotation:J.rotation,direction:J.direction,attachment:J.attachmentPoint,lineSpacing:J.lineSpacing,width:J.width,color:U,layer:$,fontName:F?.font??null})}_ProcessImage(J,Q){let $=this.imageDefs&&J.imageDefHandle?this.imageDefs[J.imageDefHandle]:null,U=$?.imagePath??"",F=J.insertionPoint||{x:0,y:0,z:0},G=J.uVector||{x:1,y:0,z:0},E=J.vVector||{x:0,y:1,z:0},q=J.imageSize?.x??$?.imageSize?.x??0,N=J.imageSize?.y??$?.imageSize?.y??0,B={x:F.x,y:F.y,z:F.z||0},V={x:F.x+q*G.x,y:F.y+q*G.y,z:(F.z||0)+q*(G.z||0)},w={x:F.x+q*G.x+N*E.x,y:F.y+q*G.y+N*E.y,z:(F.z||0)+q*(G.z||0)+N*(E.z||0)},_={x:F.x+N*E.x,y:F.y+N*E.y,z:(F.z||0)+N*(E.z||0)};if(Q)return;this.images.push({imagePath:U,imageDefHandle:J.imageDefHandle??null,vertices:[B,V,w,_].map((I)=>this._TransformVertex(I)),layer:this._GetEntityLayer(J),displayFlags:J.displayFlags??7,brightness:J.brightness??50,contrast:J.contrast??50,fade:J.fade??0,clipping:J.clipping??!1,clipBoundary:J.clipBoundary??[]})}_ProcessOle2Frame(J,Q){if(Q||!J.upperLeft||!J.lowerRight)return;let $=JF(J.binaryData),U=QF($);if(!U)return;let{upperLeft:F,lowerRight:G}=J,E=[F,{x:G.x,y:F.y,z:F.z||0},G,{x:F.x,y:G.y,z:G.z||0}].map((q)=>this._TransformVertex(q));this.oleFrames.push({vertices:E,layer:this._GetEntityLayer(J),oleData:$,emfData:U})}*_DecomposeViewport(J,Q){if(!J.width||!J.height||!J.center)return;if((J.viewportId||0)<=1)return;let $=J.center.x||0,U=J.center.y||0,F=J.center.z||0,G=J.width/2,E=J.height/2,q={x:$-G,y:U-E,z:F},N={x:$+G,y:U-E,z:F},B={x:$+G,y:U+E,z:F},V={x:$-G,y:U+E,z:F},w=this._GetEntityLayer(J,Q),_=this._GetEntityColor(J,Q);yield new K0({type:K0.Type.LINE_SEGMENTS,vertices:[q,N,N,B,B,V,V,q],indices:null,color:_,layer:w})}_CreateLinearDimension(J){let Q=(J.dimensionType||0)&15;if(Q!=0&&Q!=1||!J.linearOrAngularPoint1||!J.linearOrAngularPoint2||!J.anchorPoint)return null;let $=null;if(J.hasOwnProperty("styleName"))$=this.dimStyles.get(J.styleName);let U=new j3({p1:new l().copy(J.linearOrAngularPoint1),p2:new l().copy(J.linearOrAngularPoint2),anchor:new l().copy(J.anchorPoint),isAligned:Q==1,angle:J.angle,text:J.text,textAnchor:J.middleOfText?new l().copy(J.middleOfText):null,textRotation:J.textRotation},(F)=>{return this._GetDimStyleValue(F,J,$)},(F,G)=>{return this.textRenderer.GetLineWidth(F,G)});if(!U.IsValid)return console.warn("Invalid dimension geometry detected for "+J.handle),null;return U}*_DecomposeDimension(J,Q){if((J.block??null)!==null&&this.blocks.has(J.block)){let q={name:J.block,position:{x:0,y:0},layer:J.layer,color:J.color,colorIndex:J.colorIndex};this._ProcessInsert(q,Q);return}let $=this._CreateLinearDimension(J);if(!$)return;let U=this._GetEntityLayer(J,Q),F=this._GetEntityColor(J,Q),G=this._GetEntityExtrusionTransform(J),E=$.GenerateLayout();for(let q of E.lines){let N=[];if(G)q.start.applyMatrix3(G),q.end.applyMatrix3(G);N.push(q.start,q.end),yield new K0({type:K0.Type.LINE_SEGMENTS,vertices:N,layer:U,color:q.color??F})}for(let q of E.triangles){if(G)for(let N of q.vertices)N.applyMatrix3(G);yield new K0({type:K0.Type.TRIANGLES,vertices:q.vertices,indices:q.indices,layer:U,color:q.color??F})}if(this.textRenderer.canRender)for(let q of E.texts){if(G)q.position.applyMatrix3(G);yield*this.textRenderer.Render({text:q.text,fontSize:q.size,startPos:q.position,rotation:q.angle,hAlign:X1.CENTER,vAlign:c1.MIDDLE,color:q.color??F,layer:U})}}_TransformBoundaryLoop(J,Q,$=[]){if(!$)$=[];for(let U of J){if(Q)U.applyMatrix3(Q);$.push(U.x),$.push(U.y)}return $}*_DecomposeHatch(J,Q){let $=this._GetHatchBoundaryLoops(J);if($.length==0){console.warn("HATCH entity with empty boundary loops array (perhaps some loop types are not implemented yet)");return}let U=J.hatchStyle??0,F=this._GetEntityLayer(J,Q),G=this._GetEntityColor(J,Q),E=this._GetEntityExtrusionTransform(J),q=null;if($.sort((w,_)=>{if(w.isExternal!=_.isExternal)return w.isExternal?-1:1;if(w.isOutermost!=_.isOutermost)return w.isOutermost?-1:1;return 0}),U==o4.THROUGH_ENTIRE_AREA)q=[$[0].vertices];else if(U==o4.OUTERMOST){q=[];for(let w of $)if(w.isExternal||w.isOutermost)q.push(w.vertices);if(q.length==0)q=null}if(!q)q=$.map((w)=>w.vertices);if(J.isSolid){let w=this._TransformBoundaryLoop(q[0],E),_=[];for(let f=1;f<q.length;f++)_.push(w.length/2),this._TransformBoundaryLoop(q[f],E,w);let I=u3(w,_),T=[];for(let f of q)T.push(...f);yield new K0({type:K0.Type.TRIANGLES,vertices:T,indices:I,layer:F,color:G});return}let N=new v3(q,U),B=null;if(J.definitionLines)B=new L(J.definitionLines,J.patternName,!1);if((B==null||B.isQcadDefault)&&J.patternName){let w=h3(J.patternName,this.isMetric);if(!w)console.log(`Hatch pattern with name ${J.patternName} not found (metric: ${this.isMetric})`);else B=w}if(B==null)B=h3("ANSI31");if(!B)return;let V=J.seedPoints?J.seedPoints:[{x:0,y:0}];for(let w of V){let _=B.offsetInLineSpace?N.GetPatternTransform({seedPoint:w,angle:J.patternAngle,scale:J.patternScale}):new X0;for(let I of B.lines){let T,f;if(B.offsetInLineSpace)T=I.offset.x,f=I.offset.y;else{let W0=Math.sin(-(I.angle??0)),F0=Math.cos(-(I.angle??0));T=I.offset.x*F0-I.offset.y*W0,f=I.offset.x*W0+I.offset.y*F0}if(f<0)f=-f,T=-T;let h=N.GetLineTransform({patTransform:_,basePoint:I.base,angle:I.angle??0}),p=N.GetBoundingBox(h),d=(p.max.x-p.min.x)*0.05,m,x;if(f==0)m=0,x=0;else m=Math.ceil(p.min.y/f),x=Math.floor(p.max.y/f);if(x-m>tY){console.warn("Too many lines produced by hatching pattern");continue}let t;if(I.dashes&&I.dashes.length>1){t=0;for(let W0 of I.dashes)if(W0<0)t-=W0;else t+=W0}else t=null;let s=h.clone().invert();for(let W0=m;W0<=x;W0++){let Z1=function(T0){return(T0-b)/c},C1=function(T0){let A1=Y1.clone().multiplyScalar(T0[0]).add(G0),W1=Y1.clone().multiplyScalar(T0[1]).add(G0);if(E)A1.applyMatrix3(E),W1.applyMatrix3(E);if(T0[1]-T0[0]<=Number.EPSILON)return new K0({type:K0.Type.POINTS,vertices:[A1],layer:F,color:G});return new K0({type:K0.Type.LINE_SEGMENTS,vertices:[A1,W1],layer:F,color:G})},F0=W0*f,P0=W0*T,b=p.min.x-d,y=p.max.x+d,c=y-b,G0=new l(b,F0).applyMatrix3(s),N0=new l(y,F0).applyMatrix3(s),Y1=N0.clone().sub(G0),u0=N.ClipLine([G0,N0]);function*I0(T0,A1){for(let W1 of u0){if(W1[0]>=A1)return;if(W1[1]<=T0)continue;let N2=Math.max(T0,W1[0]),s1=Math.min(A1,W1[1]);yield[N2,s1],T0=s1}}if(t!==null){let T0=Math.floor((b-P0)/t),A1=Math.floor((y-P0)/t);if(A1-T0>=eY){console.warn("Too many segments produced by hatching pattern line");continue}for(let W1=T0;W1<=A1;W1++){let N2=Z1(P0+W1*t);for(let s1 of I.dashes){let m1=s1<0;if(m1)s1=-s1;let e2=s1/c;if(!m1)for(let r5 of I0(N2,N2+e2))yield C1(r5);N2+=e2}}}else for(let T0 of u0)yield C1(T0)}}}}_GetHatchBoundaryLoops(J){if(!J.boundaryLoops)return[];let Q=[],$=(U,F)=>{let G=F.length;if(G==0)return;if(U.length==0)U.push(F[0]);else{let E=U[U.length-1];if(E.x!=F[0].x||E.y!=F[0].y)U.push(F[0])}for(let E=1;E<G;E++)U.push(F[E])};for(let U of J.boundaryLoops){let F=[];if(U.type&2)for(let G=0;G<U.polyline.vertices.length;G++){let E=U.polyline.vertices[G];if((E.bulge??0)==0)F.push(new l(E.x,E.y));else{if((U.polyline.vertices[G==0?U.polyline.vertices.length-1:G-1].bulge??0)==0)F.push(new l(E.x,E.y));let N=U.polyline.vertices[G==U.polyline.vertices.length-1?0:G+1];this._GenerateBulgeVertices(F,E,N,E.bulge)}}else if(U.edges&&U.edges.length>0)for(let G of U.edges)switch(G.type){case 1:$(F,[new l(G.start.x,G.start.y),new l(G.end.x,G.end.y)]);break;case 2:{let B=[];this._GenerateArcVertices({vertices:B,center:G.start,radius:G.radius,startAngle:G.startAngle,endAngle:G.endAngle,ccwAngleDir:G.isCcw}),$(F,B);break}case 3:{let{start:B,end:V}=G,w=Math.sqrt(V.x*V.x+V.y*V.y),_=G.radius,I=w*_,T=Math.atan2(V.y,V.x),f=[];if(this._GenerateArcVertices({vertices:f,center:B,radius:w,startAngle:G.startAngle,endAngle:G.endAngle,yRadius:I,ccwAngleDir:G.isCcw}),T!==0){let h=Math.cos(T),p=Math.sin(T);for(let d of f){let m=d.x-B.x,x=d.y-B.y;d.x=m*h-x*p+B.x,d.y=m*p+x*h+B.y}}$(F,f);break}case 4:let E=G.controlPoints.map((B)=>[B.x,B.y]),q=E.length*u9,N=1/q;for(let B=0;B<=q;B++){let V=this._InterpolateSpline(B*N,G.degreeOfSplineCurve,E,G.knotValues);F.push(new l(V[0],V[1]))}break;default:console.warn("Unhandled hatch boundary loop edge type: "+G.type)}if(F.length>2){let G=F[0],E=F[F.length-1];if(E.x==G.x&&E.y==G.y)F.length=F.length-1}if(F.length>2)Q.push({vertices:F,isExternal:U.isExternal,isOutermost:U.isOutermost})}return Q}_GetDimStyleValue(J,Q,$){let U=Q?.xdata?.ACAD?.DSTYLE?.values;if(U){let F=!0,G=!1;for(let E of U){if(F){if(E.code!=1070)break;if(w5.get(E.value)==J)G=!0}else if(G)return E.value;F=!F}}if($&&$.hasOwnProperty(J))return $[J];if(this.vars.has(J))return this.vars.get(J);if(d9.hasOwnProperty(J)){let F=d9[J];if(F instanceof Function)return F.call(this);return F}return null}_ProcessInsert(J,Q=null){if(Q){if(Q.name===J.name){console.warn("Recursive block reference: "+Q.name);return}let N=this.blocks.get(J.name);if(!N){console.warn("Unresolved nested block reference: "+J.name);return}let B=Q.NestedBlockContext(N,J);if(N.data.entities)for(let V of N.data.entities)this._ProcessDxfEntity(V,B);return}let $=this.blocks.get(J.name);if(!$){console.warn("Unresolved block reference in INSERT: "+J.name);return}if(!$.HasGeometry())return;let U=this._GetEntityLayer(J,null),F=this._GetEntityColor(J,null),G=this._GetLineType(J,null,null),E=$.InstantiationContext().GetInsertionTransform(J),q=$.bounds;if(this._UpdateBounds(new l(q.minX,q.minY).applyMatrix3(E)),this._UpdateBounds(new l(q.maxX,q.maxY).applyMatrix3(E)),this._UpdateBounds(new l(q.minX,q.maxY).applyMatrix3(E)),this._UpdateBounds(new l(q.maxX,q.minY).applyMatrix3(E)),E.translate(-this.origin.x,-this.origin.y),$.flatten)for(let N of $.batches)this._FlattenBatch(N,U,F,G,E);else{let N=new S0(U,J.name,S0.GeometryType.BLOCK_INSTANCE,F,G);this._GetBatch(N).PushInstanceTransform(E)}}_FlattenBatch(J,Q,$,U,F){Q??=J.key.layerName;let G=Q?this.layers.get(Q):null,E,q=0;if(J.key.color===n1.BY_BLOCK)E=$;else if(J.key.color===n1.BY_LAYER)E=G?.color??0;else E=J.key.color;let N=new S0(Q,null,J.key.geometryType,E,q);this._GetBatch(N).Merge(J,F)}*_GenerateShapedPolyline(J,Q,$,U,F){yield new K0({type:K0.Type.POLYLINE,vertices:J,layer:Q,color:$,lineType:U,shape:F})}_MirrorEntityVertices(J,Q=null){if(!J.extrusionDirection||J.extrusionDirection.z>=0)return Q??J.vertices;if(!Q||Q===J.vertices)Q=J.vertices.slice();let $=Q.length;for(let U=0;U<$;U++){let F=Q[U],G={x:-F.x};for(let E in F){if(!F.hasOwnProperty(E))continue;if(E!=="x")G[E]=F[E]}Q[U]=G}return Q}*_DecomposePolyline(J,Q=null){if(J.isPolyfaceMesh){yield*this._DecomposePolyfaceMesh(J,Q);return}let $,U;if(J.includesCurveFitVertices||J.includesSplineFitVertices)$=J.vertices.filter((_)=>_.splineVertex||_.curveFittingVertex),U=$.length;else $=J.vertices,U=J.vertices.length;if(U<2)return;$=this._MirrorEntityVertices(J,$);let F=this._GetEntityColor(J,Q),G=this._GetEntityLayer(J,Q),E=this,q=0,N=this._IsPlainLine($[0]),B=this._GetLineType(J,$[0],Q),V=null;function*w(_){if(_===q)return;let I=!1,T=V;if(_===U&&q===0){if(I=!0,T===null)T=$}else if(_===U-1&&q===0){if(T===null)T=$}else if(_===U){if(T===null)T=$.slice(q,_),T.push($[0])}else if(T===null)T=$.slice(q,_+1);if(N)yield new K0({type:K0.Type.POLYLINE,vertices:T,layer:G,color:F,lineType:B,shape:I});else yield*E._GenerateShapedPolyline(T,G,F,B,I);if(q=_,_!==U)N=E._IsPlainLine($[_]),B=E._GetLineType(J,$[_]);V=null}for(let _=1;_<=U;_++){let I=$[_-1],T;if(_===U){if(!J.shape){yield*w(_-1);break}T=$[0]}else T=$[_];if(Boolean(I.bulge)&&N){if(V===null)V=$.slice(q,_);this._GenerateBulgeVertices(V,I,T,I.bulge)}else if(V!==null)V.push(T);if(_===U){yield*w(_);break}let f=this._IsPlainLine(T),h=this._GetLineType(J,T);if(f!==N||N&&h!==B)yield*w(_)}}*_DecomposePolyfaceMesh(J,Q=null){let $=this._GetEntityLayer(J,Q),U=this._GetEntityColor(J,Q),F=[],G=[];for(let N of J.vertices)if(N.faces){let B={indices:[],hiddenEdges:[]};for(let V of N.faces){if(V==0)break;if(V>F.length){if(65536-V>F.length)continue;V=V-65536}B.indices.push(V<0?-V-1:V-1),B.hiddenEdges.push(V<0)}if(B.indices.length==3||B.indices.length==4)G.push(B)}else F.push(new l(N.x,N.y));let E=[],q=(N,B)=>{if(E.length>0){let V=E[E.length-1];if(V.indices[V.indices.length-1]==N){V.indices.push(B);return}if(V.indices[0]==V.indices[V.indices.length-1])V.isClosed=!0}E.push({indices:[N,B],isClosed:!1})};for(let N of G)if(this.options.wireframeMesh)for(let B=0;B<N.indices.length;B++){if(N.hiddenEdges[B])continue;let V=B<N.indices.length-1?B+1:0;q(N.indices[B],N.indices[V])}else{let B;if(N.indices.length==3)B=N.indices;else B=[N.indices[0],N.indices[1],N.indices[2],N.indices[0],N.indices[2],N.indices[3]];yield new K0({type:K0.Type.TRIANGLES,vertices:F,indices:B,layer:$,color:U})}if(this.options.wireframeMesh)for(let N of E)if(N.length==2)yield new K0({type:K0.Type.LINE_SEGMENTS,vertices:[F[N.indices[0]],F[N.indices[1]]],layer:$,color:U});else{let B=[];for(let V of N.indices)B.push(F[V]);yield new K0({type:K0.Type.POLYLINE,vertices:B,layer:$,color:U,shape:N.isClosed})}}*_DecomposeSpline(J,Q=null){let $=this._GetEntityColor(J,Q),U=this._GetEntityLayer(J,Q),F=this._GetLineType(J,null,Q);if(!J.controlPoints)return;let G=J.controlPoints.map((B)=>[B.x,B.y]),E=[],q=G.length*u9,N=1/q;for(let B=0;B<=q;B++){let V=this._InterpolateSpline(B*N,J.degreeOfSplineCurve,G,J.knotValues);E.push({x:V[0],y:V[1]})}yield new K0({type:K0.Type.POLYLINE,vertices:E,layer:U,color:$,lineType:F})}_InterpolateSpline(J,Q,$,U=null,F=null){let G,E,q,N,B=$.length,V=$[0].length;if(Q<1)throw Error("Degree must be at least 1 (linear)");if(Q>B-1)throw Error("Degree must be less than or equal to point count - 1");if(!F){F=[];for(G=0;G<B;G++)F[G]=1}if(!U){U=[];for(G=0;G<B+Q+1;G++)U[G]=G}else if(U.length!==B+Q+1)throw Error("Bad knot vector length");let w=[Q,U.length-1-Q],_=U[w[0]],I=U[w[1]];if(J=J*(I-_)+_,J<_)J=_;else if(J>I)J=I;for(q=w[0];q<w[1];q++)if(J>=U[q]&&J<=U[q+1])break;let T=[];for(G=0;G<B;G++){T[G]=[];for(E=0;E<V;E++)T[G][E]=$[G][E]*F[G];T[G][V]=F[G]}let f;for(N=1;N<=Q+1;N++)for(G=q;G>q-Q-1+N;G--){f=(J-U[G])/(U[G+Q+1-N]-U[G]);for(E=0;E<V+1;E++)T[G][E]=(1-f)*T[G-1][E]+f*T[G][E]}let h=[];for(G=0;G<V;G++)h[G]=T[q][G]/T[q][V];return h}_ProcessPoints(J,Q=null){let $=new S0(J.layer,Q?.name,S0.GeometryType.POINTS,J.color,0),U=this._GetBatch($);for(let F of J.vertices)U.PushVertex(this._TransformVertex(F,Q))}_ProcessLineSegments(J,Q=null){if(J.vertices.length%2!==0)throw Error("Even number of vertices expected");let $=new S0(J.layer,Q?.name,S0.GeometryType.LINES,J.color,J.lineType),U=this._GetBatch($);for(let F of J.vertices)U.PushVertex(this._TransformVertex(F,Q))}_ProcessPolyline(J,Q=null){if(J.vertices.length<2)return;let $=J.vertices.length;if($<=3){let G=new S0(J.layer,Q?.name,S0.GeometryType.LINES,J.color,J.lineType),E=this._GetBatch(G),q=null;for(let N of J.vertices){if(q!==null)E.PushVertex(this._TransformVertex(q,Q)),E.PushVertex(this._TransformVertex(N,Q));q=N}if(J.shape&&$>2)E.PushVertex(this._TransformVertex(J.vertices[$-1],Q)),E.PushVertex(this._TransformVertex(J.vertices[0],Q));return}let U=new S0(J.layer,Q?.name,S0.GeometryType.INDEXED_LINES,J.color,J.lineType),F=this._GetBatch(U);for(let G of J._IterateLineChunks()){let E=F.PushChunk(G.verticesCount);for(let q of G.vertices)E.PushVertex(this._TransformVertex(q,Q));for(let q of G.indices)E.PushIndex(q);E.Finish()}}_ProcessTriangles(J,Q=null){if(J.vertices.length<3)return;if(J.indices.length%3!==0){console.error("Unexpected size of indices array: "+J.indices.length);return}let $=new S0(J.layer,Q?.name,S0.GeometryType.INDEXED_TRIANGLES,J.color,0),F=this._GetBatch($).PushChunk(J.vertices.length);for(let G of J.vertices)F.PushVertex(this._TransformVertex(G,Q));for(let G of J.indices)F.PushIndex(G);F.Finish()}_GetEntityColor(J,Q=null){let $=n1.BY_LAYER;if(J.colorIndex===0)$=n1.BY_BLOCK;else if(J.colorIndex===256){if(J.hasOwnProperty("layer")){let U=this.layers.get(J.layer);if(U)return U.color}$=n1.BY_LAYER}else if(J.hasOwnProperty("color")&&J.color!=null)$=J.color;if(Q)return $;if($===n1.BY_BLOCK)return 16777215;if($===n1.BY_LAYER){if(J.hasOwnProperty("layer")){let U=this.layers.get(J.layer);if(U&&U.color!=null)return U.color}}else return $;return 0}_GetEntityLayer(J,Q=null){if(J.hasOwnProperty("layer")&&J.layer!=null)return J.layer;return Q?null:"0"}_GetEntityTextStyle(J){let Q=J.styleName??J.textStyle;if(Q)return this.fontStyles.get(Q)??null;return null}_GetEntityExtrusionTransform(J){if(!J.hasOwnProperty("extrusionDirection"))return null;if(J.extrusionDirection.z>0)return null;return new X0().scale(-1,1)}_GetBatch(J){let Q=this.batches.find({key:J});if(Q!==null)return Q;if(Q=new l9(J),this.batches.insert(Q),J.blockName!==null&&!J.IsInstanced()){let $=this.blocks.get(J.blockName);if($)$.batches.push(Q)}return Q}_TransformVertex(J,Q=null){if(Q)return Q.TransformVertex(J);return this._UpdateBounds(J),{x:J.x-this.origin.x,y:J.y-this.origin.y}}_UpdateBounds(J){if(this.bounds===null)this.bounds={minX:J.x,maxX:J.x,minY:J.y,maxY:J.y};else{if(J.x<this.bounds.minX)this.bounds.minX=J.x;else if(J.x>this.bounds.maxX)this.bounds.maxX=J.x;if(J.y<this.bounds.minY)this.bounds.minY=J.y;else if(J.y>this.bounds.maxY)this.bounds.maxY=J.y}if(this.origin===null)this.origin={x:J.x,y:J.y}}_BuildScene(){let J=0,Q=0,$=0;this.batches.each((G)=>{J+=G.GetVerticesBufferSize(),Q+=G.GetIndicesBufferSize(),$+=G.GetTransformsSize()});let U={vertices:new ArrayBuffer(J),indices:new ArrayBuffer(Q),transforms:new ArrayBuffer($),batches:[],layers:[],origin:this.origin,bounds:this.bounds,hasMissingChars:this.hasMissingChars},F={vertices:new Float32Array(U.vertices),verticesOffset:0,indices:new Uint16Array(U.indices),indicesOffset:0,transforms:new Float32Array(U.transforms),transformsOffset:0};this.batches.each((G)=>{U.batches.push(G.Serialize(F))});for(let G of this.layers.values()){if(G.frozen)continue;U.layers.push({name:G.name,displayName:G.displayName,color:G.color})}return U.pointShapeHasDot=(this.pdMode&$1.MARK_MASK)===$1.DOT,U.layouts=this.layouts,U.activeLayout=this.activeLayout,U.imageDefs=this.imageDefs,U.images=this.images,U.oleFrames=this.oleFrames,U}}class l9{key;chunks;transforms;vertices;constructor(J){if(this.key=J,J.IsIndexed())this.chunks=[];else if(J.geometryType===S0.GeometryType.BLOCK_INSTANCE)this.transforms=new l2(U1.FLOAT32);else this.vertices=new l2(U1.FLOAT32)}PushVertex(J){let Q=this.vertices.Push(J.x);return this.vertices.Push(J.y),Q}PushInstanceTransform(J){for(let Q=0;Q<2;Q++)for(let $=0;$<3;$++)this.transforms.Push(J.elements[$*3+Q])}PushChunk(J){if(J>k2)throw Error("Vertices count exceeds chunk limit: "+J);let Q=null,$=0;for(let U of this.chunks){let F=k2-U.vertices.GetSize()/2;if(F<J)continue;if(Q===null||F<$)Q=U,$=F}if(Q===null)Q=this._NewChunk(J);return new i9(Q,J)}Merge(J,Q=null){if(this.key.geometryType!==J.key.geometryType)throw Error(`Rendering batch merging geometry type mismatch: ${this.key.geometryType} !== ${J.key.geometryType}`);if(this.key.IsInstanced())throw Error("Attempted to merge instanced batch");if(this.key.IsIndexed())for(let $ of J.chunks){let U=$.vertices.size,F=this.PushChunk(U/2);for(let E=0;E<U;E+=2){let q=new l($.vertices.Get(E),$.vertices.Get(E+1));if(Q)q.applyMatrix3(Q);F.PushVertex(q)}let G=$.indices.size;for(let E=0;E<G;E++)F.PushIndex($.indices.Get(E));F.Finish()}else{let $=J.vertices.size;for(let U=0;U<$;U+=2){let F=new l(J.vertices.Get(U),J.vertices.Get(U+1));if(Q)F.applyMatrix3(Q);this.PushVertex(F)}}}GetVerticesBufferSize(){if(this.key.IsIndexed()){let J=0;for(let Q of this.chunks)J+=Q.vertices.GetSize();return J*Float32Array.BYTES_PER_ELEMENT}else if(this.key.geometryType===S0.GeometryType.BLOCK_INSTANCE)return 0;else return this.vertices.GetSize()*Float32Array.BYTES_PER_ELEMENT}GetIndicesBufferSize(){if(this.key.IsIndexed()){let J=0;for(let Q of this.chunks)J+=Q.indices.GetSize();return J*Uint16Array.BYTES_PER_ELEMENT}else return 0}GetTransformsSize(){if(this.key.geometryType===S0.GeometryType.BLOCK_INSTANCE)return this.transforms.GetSize()*Float32Array.BYTES_PER_ELEMENT;else return 0}Serialize(J){if(this.key.IsIndexed()){let Q={key:this.key,chunks:[]};for(let $ of this.chunks)Q.chunks.push($.Serialize(J));return Q}else if(this.key.geometryType===S0.GeometryType.BLOCK_INSTANCE){let Q=this.transforms.GetSize(),$={key:this.key,transformsOffset:J.transformsOffset,transformsSize:Q};return this.transforms.CopyTo(J.transforms,J.transformsOffset),J.transformsOffset+=Q,$}else{let Q=this.vertices.GetSize(),$={key:this.key,verticesOffset:J.verticesOffset,verticesSize:Q};return this.vertices.CopyTo(J.vertices,J.verticesOffset),J.verticesOffset+=Q,$}}_NewChunk(J){let Q=new c9(J);return this.chunks.push(Q),Q}}class l3{data;useCount;nestedUseCount;verticesCount;offset;batches;flatten;bounds;constructor(J){this.data=J,this.useCount=0,this.nestedUseCount=0,this.verticesCount=0,this.offset=null,this.batches=[],this.flatten=!1,this.bounds=null}SetFlatten(){if(!this.HasGeometry())return!1;return this.flatten=this.useCount===1||this.useCount*this.verticesCount<=aY,this.flatten}HasGeometry(){return this.offset!==null}RegisterInsert(J){this.useCount++}RegisterNestedUse(J){this.nestedUseCount++}DefinitionContext(){return new q1(this,q1.Type.DEFINITION)}InstantiationContext(){return new q1(this,q1.Type.INSTANTIATION)}UpdateBounds(J){if(this.bounds===null)this.bounds={minX:J.x,maxX:J.x,minY:J.y,maxY:J.y};else{if(J.x<this.bounds.minX)this.bounds.minX=J.x;else if(J.x>this.bounds.maxX)this.bounds.maxX=J.x;if(J.y<this.bounds.minY)this.bounds.minY=J.y;else if(J.y>this.bounds.maxY)this.bounds.maxY=J.y}}}class q1{static Type={DEFINITION:0,NESTED_DEFINITION:1,INSTANTIATION:2};block;type;origin;transform;constructor(J,Q){this.block=J,this.type=Q,this.origin=this.block.data.position,this.transform=new X0}get name(){return this.block.data.name}TransformVertex(J){let Q=new l(J.x,J.y).applyMatrix3(this.transform);if(this.type!==q1.Type.DEFINITION&&this.type!==q1.Type.NESTED_DEFINITION)throw Error("Unexpected transform type");if(this.block.verticesCount++,this.block.offset===null){this.block.offset=Q;let $=new l;return this.block.UpdateBounds($),$}return Q.sub(this.block.offset),this.block.UpdateBounds(Q),Q}GetInsertionTransform(J){let Q=new X0().translate(-this.origin.x,-this.origin.y),$=J.yScale||1,U=J.xScale||1,F=-(J.rotation||0)*Math.PI/180,G=J.position.x,E=J.position.y;if(Q.scale(U,$),Q.rotate(F),Q.translate(G,E),J.extrusionDirection&&J.extrusionDirection.z<0)Q.scale(-1,1);if(this.type!==q1.Type.INSTANTIATION)return Q;let q=new X0().translate(this.block.offset.x,this.block.offset.y);return Q.multiply(q)}NestedBlockContext(J,Q){J.RegisterNestedUse(this.block);let U=new q1(J,q1.Type.NESTED_DEFINITION).GetInsertionTransform(Q),F=new q1(this.block,q1.Type.NESTED_DEFINITION);return F.transform=new X0().multiplyMatrices(this.transform,U),F}}q1.Type=Object.freeze({DEFINITION:0,NESTED_DEFINITION:1,INSTANTIATION:2});class c9{indices;vertices;constructor(J){if(J<16)J=16;this.indices=new l2(U1.UINT16,J*2),this.vertices=new l2(U1.FLOAT32,J*2)}Serialize(J){let Q={};{let $=this.vertices.GetSize();Q.verticesOffset=J.verticesOffset,Q.verticesSize=$,this.vertices.CopyTo(J.vertices,J.verticesOffset),J.verticesOffset+=$}{let $=this.indices.GetSize();Q.indicesOffset=J.indicesOffset,Q.indicesSize=$,this.indices.CopyTo(J.indices,J.indicesOffset),J.indicesOffset+=$}return Q}}class i9{chunk;verticesCount;verticesOffset;numVerticesPushed;constructor(J,Q){this.chunk=J,this.verticesCount=Q,this.verticesOffset=this.chunk.vertices.GetSize()/2,this.numVerticesPushed=0}PushVertex(J){if(this.numVerticesPushed===this.verticesCount)throw Error();this.chunk.vertices.Push(J.x),this.chunk.vertices.Push(J.y),this.numVerticesPushed++}PushIndex(J){if(J<0||J>=this.verticesCount)throw Error(`Index out of range: ${J}/${this.verticesCount}`);this.chunk.indices.Push(J+this.verticesOffset)}Finish(){if(this.numVerticesPushed!==this.verticesCount)throw Error(`Not all vertices pushed: ${this.numVerticesPushed}/${this.verticesCount}`)}}class K0{static Type={POINTS:0,LINE_SEGMENTS:1,POLYLINE:2,TRIANGLES:3};type;vertices;indices;layer;color;lineType;shape;constructor({type:J,vertices:Q,indices:$=null,layer:U=null,color:F,lineType:G=0,shape:E=!1}){this.type=J,this.vertices=Q,this.indices=$,this.layer=U,this.color=F,this.lineType=G,this.shape=E}*_IterateVertices(J,Q){for(let $=J;$<J+Q;$++)yield this.vertices[$]}*_IterateLineChunks(){let J=this.vertices.length;if(J<2)return;let Q=this;for(let $=0;$<=J;$+=k2){let U=J-$,F;if(U>k2)U=k2,F=!1;else F=!0;if(F&&this.shape&&$>0&&U===k2)F=!1;if($===J&&!this.shape)break;let G,E,q;if(U<2){if(U===1&&this.shape)G=function*(){yield this.vertices[$],yield this.vertices[0]}();else if(U===1)G=function*(){yield this.vertices[$-1],yield this.vertices[$]}();else G=function*(){yield this.vertices[J-1],yield this.vertices[0]}();E=d3(2,!1),q=2}else if(F&&this.shape&&$>0&&U<k2)G=function*(){yield*Q._IterateVertices($,U),yield this.vertices[0]}(),E=d3(U+1,!1),q=U+1;else G=this._IterateVertices($,U),E=d3(U,F&&$===0&&this.shape),q=U;yield{verticesCount:q,vertices:G,indices:E}}}}K0.Type=Object.freeze({POINTS:0,LINE_SEGMENTS:1,POLYLINE:2,TRIANGLES:3});function*d3(J,Q){for(let $=0;$<J-1;$++)yield $,yield $+1;if(Q&&J>2)yield J-1,yield 0}var $1=Object.freeze({DOT:0,NONE:1,PLUS:2,CROSS:3,TICK:4,MARK_MASK:15,CIRCLE:32,SQUARE:64,SHAPE_MASK:240}),n1=Object.freeze({BY_LAYER:-1,BY_BLOCK:-2});t2.DefaultOptions={arcTessellationAngle:0.05555555555555555*Math.PI,minArcTessellationSubdivisions:8,wireframeMesh:!1,suppressPaperSpace:!1,suppressNonPlotLayers:!0,textOptions:a2.DefaultOptions};function JF(J){if(!Array.isArray(J)||J.length===0)return null;let Q="";for(let U of J)Q+=String(U).replace(/\s/g,"");if(Q.length<176||Q.length%2!==0)return null;let $=new Uint8Array(Q.length/2);for(let U=0;U<$.length;U++){let F=Number.parseInt(Q.slice(U*2,U*2+2),16);if(!Number.isFinite(F))return null;$[U]=F}return $.buffer}function QF(J){if(!(J instanceof ArrayBuffer))return null;let Q=new Uint8Array(J),$=new DataView(J);for(let U=40;U+48<=Q.length;U++){if($.getUint32(U,!0)!==1179469088)continue;let F=U-40,G=$.getUint32(F+4,!0),E=$.getUint32(F+48,!0);if($.getUint32(F,!0)!==1||G<88||E<G||F+E>Q.length)continue;return Q.slice(F,F+E).buffer}return null}var r9=v6(o9(),1),o5="DxfWorkerMsg";class a9{seq;progressCbk;promise;_Resolve;_Reject;constructor(J,Q=null){this.seq=J,this.progressCbk=Q,this.promise=new Promise(($,U)=>{this._Resolve=$,this._Reject=U})}async GetResponse(){return await this.promise}SetResponse(J){this._Resolve(J)}SetError(J){this._Reject(J)}}var HF={LOAD:"LOAD",PROGRESS:"PROGRESS",DESTROY:"DESTROY"};class g1{static WorkerMsg=HF;static Request=a9;worker;reqSeq=1;requests=new Map;progressCbk=null;constructor(J,Q=!1){if(this.worker=J,Q)J.onmessage=this._ProcessRequest.bind(this);else if(J)J.addEventListener("message",this._ProcessResponse.bind(this),!1),J.addEventListener("error",this._OnError.bind(this),!1),this.reqSeq=1,this.requests=new Map,this.progressCbk=null}async Load(J,Q,$,U){if(this.worker)return this._SendRequest(g1.WorkerMsg.LOAD,{url:J,fonts:Q,options:this._CloneOptions($)},U);else return this._Load(J,Q,$,U)}async Destroy(J=!1){if(this.worker){if(!J)await this._SendRequest(g1.WorkerMsg.DESTROY);this.worker.terminate()}}async _ProcessRequest(J){let Q=J.data;if(Q.signature!==o5){console.log("Message with bad signature",Q);return}let $={seq:Q.seq,type:Q.type,signature:o5},U=[];try{$.data=await this._ProcessRequestMessage(Q.type,Q.data,U,Q.seq)}catch(F){console.error(F),$.error=String(F)}if(this.worker.postMessage($,U),Q.type===g1.WorkerMsg.DESTROY)this.worker.onmessage=null,this.worker.close(),this.worker=null}async _ProcessRequestMessage(J,Q,$,U){switch(J){case g1.WorkerMsg.LOAD:{let{scene:F,dxf:G}=await this._Load(Q.url,Q.fonts,Q.options,(E,q,N)=>this._SendProgress(U,E,q,N));$.push(F.vertices),$.push(F.indices),$.push(F.transforms);for(let E of F.oleFrames||[])$.push(E.oleData),$.push(E.emfData);if(F.modelScene){$.push(F.modelScene.vertices),$.push(F.modelScene.indices),$.push(F.modelScene.transforms);for(let E of F.modelScene.oleFrames||[])$.push(E.oleData),$.push(E.emfData)}return{scene:F,dxf:G}}case g1.WorkerMsg.DESTROY:return null;default:throw Error("Unknown message type: "+J)}}async _ProcessResponse(J){let Q=J.data;if(Q.signature!==o5){console.log("Message with bad signature",Q);return}let $=Q.seq,U=this.requests.get($);if(!U){console.error("Unmatched message sequence: ",$);return}let F=Q.data;if(Q.type===g1.WorkerMsg.PROGRESS){if(U.progressCbk)U.progressCbk(F.phase,F.size,F.totalSize);return}if(this.requests.delete($),Object.prototype.hasOwnProperty.call(Q,"error"))U.SetError(Q.error);else U.SetResponse(F)}async _OnError(J){console.error("DxfWorker worker error",J);let Q=Array.from(this.requests.values());this.requests.clear(),Q.forEach(($)=>$.SetError(J))}async _SendRequest(J,Q=null,$=null){let U=this.reqSeq++,F=new g1.Request(U,$);return this.requests.set(U,F),this.worker.postMessage({seq:U,type:J,data:Q,signature:o5}),await F.GetResponse()}_SendProgress(J,Q,$,U){this.worker.postMessage({seq:J,type:g1.WorkerMsg.PROGRESS,data:{phase:Q,size:$,totalSize:U},signature:o5})}async _Load(J,Q,$={},U){let F;if(Q)F=this._CreateFontFetchers(Q,U);else F=[];let G=await new x6(J,$.fileEncoding).Fetch(U);if(U)U("prepare",0,null);if(!$.sceneOptions)$.sceneOptions={};if($.sceneOptions.suppressPaperSpace===void 0&&$.sceneOptions.layout===void 0){let N=(G.layouts||[]).filter((B)=>!B.isModel);if(N.length>0)$.sceneOptions.suppressPaperSpace=!1,$.sceneOptions.layout=N[0].name;else $.sceneOptions.suppressPaperSpace=!0,$.sceneOptions.layout="Model"}let E=new t2($);await E.Build(G,F);let q=(G.layouts||[]).find((N)=>N.name===E.scene.activeLayout);if(q&&!q.isModel){let N=this._CloneOptions($);N.sceneOptions={...N.sceneOptions||{},suppressPaperSpace:!0,layout:"Model"};let B=new t2(N);await B.Build(G,F),E.scene.modelScene=B.scene;let V=new Map(Object.values(G.tables?.layer?.layers||{}).filter((w)=>w.handle).map((w)=>[w.handle,w.name]));E.scene.viewports=G.entities.filter((w)=>w.type==="VIEWPORT"&&w.inPaperSpace&&w.ownerHandle===q.blockRecordHandle&&(w.viewportId??0)>1&&(w.status??0)>0&&(w.width??0)>0&&(w.height??0)>0&&(w.viewHeight??0)>0).map((w)=>({...w,frozenLayers:(w.frozenLayerHandles||[]).map((_)=>V.get(_)).filter(Boolean)}))}return{scene:E.scene,dxf:$.retainParsedDxf===!0?G:void 0}}_CreateFontFetchers(J,Q){function $(F){let G=typeof F==="string"?F:F.url,E=null,q=async function(){if(!E){if(Q)Q("font",0,null);E=fetch(G).then((B)=>B.arrayBuffer()).then((B)=>r9.parse(B))}let N=await E;if(Q)Q("prepare",0,null);return N};return q.fontNames=typeof F==="string"?[]:F.names??[],q}let U=[];for(let F of J)U.push($(F));return U}_CloneOptions(J){if(Array.isArray(J))return J.map((Q)=>this._CloneOptions(Q));else if(typeof J==="object"&&J!==null){let Q={};for(let $ in J)Q[$]=this._CloneOptions(J[$]);return Q}else return J}}function t9(){new g1(self,!0)}t9();
