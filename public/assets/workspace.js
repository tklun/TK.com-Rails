window.Modernizr=function(au,at,ar){function L(){ap.input=function(e){for(var d=0,f=e.length;d<f;d++){aa[e[d]]=e[d] in ai}return aa}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ap.inputtypes=function(b){for(var l=0,k,j,g,c=b.length;l<c;l++){ai.setAttribute("type",j=b[l]),k=ai.type!=="text",k&&(ai.value=ah,ai.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(j)&&ai.style.WebkitAppearance!==ar?(an.appendChild(ai),g=at.defaultView,k=g.getComputedStyle&&g.getComputedStyle(ai,null).WebkitAppearance!=="textfield"&&ai.offsetHeight!==0,an.removeChild(ai)):/^(search|tel)$/.test(j)||(/^(url|email)$/.test(j)?k=ai.checkValidity&&ai.checkValidity()===!1:/^color$/.test(j)?(an.appendChild(ai),an.offsetWidth,k=ai.value!=ah,an.removeChild(ai)):k=ai.value!=ah)),ab[b[l]]=!!k}return ab}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function N(f,e){var h=f.charAt(0).toUpperCase()+f.substr(1),g=(f+" "+ae.join(h+" ")+h).split(" ");return O(g,e)}function O(e,c){for(var f in e){if(aj[e[f]]!==ar){return c=="pfx"?e[f]:!0}}return !1}function P(d,c){return !!~(""+d).indexOf(c)}function Q(d,c){return typeof d===c}function R(d,c){return S(af.join(d+";")+(c||""))}function S(b){aj.cssText=b}var aq="2.0.6",ap={},ao=!0,an=at.documentElement,am=at.head||at.getElementsByTagName("head")[0],al="modernizr",ak=at.createElement(al),aj=ak.style,ai=at.createElement("input"),ah=":)",ag=Object.prototype.toString,af=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),ae="Webkit Moz O ms Khtml".split(" "),ad={svg:"http://www.w3.org/2000/svg"},ac={},ab={},aa={},Z=[],Y=function(b,p,o,n){var m,l,i,g=at.createElement("div");if(parseInt(o,10)){while(o--){i=at.createElement("div"),i.id=n?n[o]:al+(o+1),g.appendChild(i)}}m=["&shy;","<style>",b,"</style>"].join(""),g.id=al,g.innerHTML+=m,an.appendChild(g),l=p(g,b),g.parentNode.removeChild(g);return !!l},X=function(a){if(au.matchMedia){return matchMedia(a).matches}var d;Y("@media "+a+" { #"+al+" { position: absolute; } }",function(c){d=(au.getComputedStyle?getComputedStyle(c,null):c.currentStyle).position=="absolute"});return d},W=function(){function c(h,g){g=g||at.createElement(b[h]||"div"),h="on"+h;var a=h in g;a||(g.setAttribute||(g=at.createElement("div")),g.setAttribute&&g.removeAttribute&&(g.setAttribute(h,""),a=Q(g[h],"function"),Q(g[h],ar)||(g[h]=ar),g.removeAttribute(h))),g=null;return a}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return c}(),V,U={}.hasOwnProperty,T;!Q(U,ar)&&!Q(U.call,ar)?T=function(d,c){return U.call(d,c)}:T=function(d,c){return c in d&&Q(d.constructor.prototype[c],ar)};var M=function(b,h){var g=b.join(""),e=h.length;Y(g,function(f,n){var m=at.styleSheets[at.styleSheets.length-1],l=m.cssRules&&m.cssRules[0]?m.cssRules[0].cssText:m.cssText||"",k=f.childNodes,j={};while(e--){j[k[e].id]=k[e]}ap.csstransforms3d=j.csstransforms3d.offsetLeft===9,ap.generatedcontent=j.generatedcontent.offsetHeight>=1,ap.fontface=/src/i.test(l)&&l.indexOf(n.split(" ")[0])===0},e,h)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",af.join("transform-3d),("),al,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',ah,'";visibility:hidden}'].join("")],["fontface","csstransforms3d","generatedcontent"]);ac.flexbox=function(){function j(f,e,l,k){f.style.cssText=af.join(e+":"+l+";")+(k||"")}function b(f,e,l,k){e+=":",f.style.cssText=(e+af.join(l+";"+e)).slice(0,-e.length)+(k||"")}var i=at.createElement("div"),h=at.createElement("div");b(i,"display","box","width:42px;padding:0;"),j(h,"box-flex","1","width:10px;"),i.appendChild(h),an.appendChild(i);var g=h.offsetWidth===42;i.removeChild(h),an.removeChild(i);return g},ac.canvas=function(){var b=at.createElement("canvas");return !!b.getContext&&!!b.getContext("2d")},ac.canvastext=function(){return !!ap.canvas&&!!Q(at.createElement("canvas").getContext("2d").fillText,"function")},ac.history=function(){return !!au.history&&!!history.pushState},ac.rgba=function(){S("background-color:rgba(150,255,150,.5)");return P(aj.backgroundColor,"rgba")},ac.hsla=function(){S("background-color:hsla(120,40%,100%,.5)");return P(aj.backgroundColor,"rgba")||P(aj.backgroundColor,"hsla")},ac.multiplebgs=function(){S("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(aj.background)},ac.backgroundsize=function(){return N("backgroundSize")},ac.borderimage=function(){return N("borderImage")},ac.borderradius=function(){return N("borderRadius")},ac.boxshadow=function(){return N("boxShadow")},ac.textshadow=function(){return at.createElement("div").style.textShadow===""},ac.opacity=function(){R("opacity:.55");return/^0.55$/.test(aj.opacity)},ac.cssanimations=function(){return N("animationName")},ac.csscolumns=function(){return N("columnCount")},ac.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";S((e+af.join(d+e)+af.join(f+e)).slice(0,-e.length));return P(aj.backgroundImage,"gradient")},ac.cssreflections=function(){return N("boxReflect")},ac.csstransforms=function(){return !!O(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},ac.csstransforms3d=function(){var b=!!O(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);b&&"webkitPerspective" in an.style&&(b=ap.csstransforms3d);return b},ac.csstransitions=function(){return N("transitionProperty")},ac.fontface=function(){return ap.fontface},ac.generatedcontent=function(){return ap.generatedcontent},ac.video=function(){var b=at.createElement("video"),h=!1;try{if(h=!!b.canPlayType){h=new Boolean(h),h.ogg=b.canPlayType('video/ogg; codecs="theora"');var g='video/mp4; codecs="avc1.42E01E';h.h264=b.canPlayType(g+'"')||b.canPlayType(g+', mp4a.40.2"'),h.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(f){}return h},ac.audio=function(){var b=at.createElement("audio"),f=!1;try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('audio/ogg; codecs="vorbis"'),f.mp3=b.canPlayType("audio/mpeg;"),f.wav=b.canPlayType('audio/wav; codecs="1"'),f.m4a=b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")}}catch(e){}return f},ac.localstorage=function(){try{return !!localStorage.getItem}catch(b){return !1}},ac.applicationcache=function(){return !!au.applicationCache},ac.svg=function(){return !!at.createElementNS&&!!at.createElementNS(ad.svg,"svg").createSVGRect},ac.inlinesvg=function(){var b=at.createElement("div");b.innerHTML="<svg/>";return(b.firstChild&&b.firstChild.namespaceURI)==ad.svg},ac.svgclippaths=function(){return !!at.createElementNS&&/SVG/.test(ag.call(at.createElementNS(ad.svg,"clipPath")))};for(var K in ac){T(ac,K)&&(V=K.toLowerCase(),ap[V]=ac[K](),Z.push((ap[V]?"":"no-")+V))}ap.input||L(),ap.addTest=function(e,c){if(typeof e=="object"){for(var f in e){T(e,f)&&ap.addTest(f,e[f])}}else{e=e.toLowerCase();if(ap[e]!==ar){return}c=typeof c=="boolean"?c:!!c(),an.className+=" "+(c?"":"no-")+e,ap[e]=c}return ap},S(""),ak=ai=null,au.attachEvent&&function(){var b=at.createElement("div");b.innerHTML="<elem></elem>";return b.childNodes.length!==1}()&&function(J,I){function c(e){var d=-1;while(++d<E){e.createElement(F[d])}}J.iepp=J.iepp||{};var H=J.iepp,G=H.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",F=G.split("|"),E=F.length,D=new RegExp("(^|\\s)("+G+")","gi"),C=new RegExp("<(/*)("+G+")","gi"),B=/^\s*[\{\}]\s*$/,A=new RegExp("(^|[^\\n]*?\\s)("+G+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),z=I.createDocumentFragment(),y=I.documentElement,x=y.firstChild,w=I.createElement("body"),v=I.createElement("style"),u=/print|all/,t;H.getCSS=function(i,d){if(i+""===ar){return""}var m=-1,l=i.length,k,j=[];while(++m<l){k=i[m];if(k.disabled){continue}d=k.media||d,u.test(d)&&j.push(H.getCSS(k.imports,d),k.cssText),d="all"}return j.join("")},H.parseCSS=function(e){var d=[],f;while((f=A.exec(e))!=null){d.push(((B.exec(f[1])?"\n":f[1])+f[2]+f[3]).replace(D,"$1.iepp_$2")+f[4])}return d.join("\n")},H.writeHTML=function(){var b=-1;t=t||I.body;while(++b<E){var h=I.getElementsByTagName(F[b]),g=h.length,f=-1;while(++f<g){h[f].className.indexOf("iepp_")<0&&(h[f].className+=" iepp_"+F[b])}}z.appendChild(t),y.appendChild(w),w.className=t.className,w.id=t.id,w.innerHTML=t.innerHTML.replace(C,"<$1font")},H._beforePrint=function(){v.styleSheet.cssText=H.parseCSS(H.getCSS(I.styleSheets,"all")),H.writeHTML()},H.restoreHTML=function(){w.innerHTML="",y.removeChild(w),y.appendChild(t)},H._afterPrint=function(){H.restoreHTML(),v.styleSheet.cssText=""},c(I),c(z);H.disablePP||(x.insertBefore(v,x.firstChild),v.media="print",v.className="iepp-printshim",J.attachEvent("onbeforeprint",H._beforePrint),J.attachEvent("onafterprint",H._afterPrint))}(au,at),ap._version=aq,ap._prefixes=af,ap._domPrefixes=ae,ap.mq=X,ap.hasEvent=W,ap.testProp=function(b){return O([b])},ap.testAllProps=N,ap.testStyles=Y,an.className=an.className.replace(/\bno-js\b/,"")+(ao?" js "+Z.join(" "):"");return ap}(this,this.document),function(ap,ao,an){function af(b){return !b||b=="loaded"||b=="complete"}function ag(){var d=1,c=-1;while(aa.length- ++c){if(aa[c].s&&!(d=aa[c].r)){break}}d&&aj()}function ah(b){var f=ao.createElement("script"),e;f.src=b.s,f.onreadystatechange=f.onload=function(){!e&&af(f.readyState)&&(e=1,ag(),f.onload=f.onreadystatechange=null)},ad(function(){e||(e=1,ag())},L.errorTimeout),b.e?f.onload():ac.parentNode.insertBefore(f,ac)}function ai(b){var h=ao.createElement("link"),g;h.href=b.s,h.rel="stylesheet",h.type="text/css";if(!b.e&&(M||W)){var f=function(c){ad(function(){if(!g){try{c.sheet.cssRules.length?(g=1,ag()):f(c)}catch(a){a.code==1000||a.message=="security"||a.message=="denied"?(g=1,ad(function(){ag()},0)):f(c)}}},0)};f(h)}else{h.onload=function(){g||(g=1,ad(function(){ag()},0))},b.e&&h.onload()}ad(function(){g||(g=1,ag())},L.errorTimeout),!b.e&&ac.parentNode.insertBefore(h,ac)}function aj(){var b=aa.shift();Y=1,b?b.t?ad(function(){b.t=="c"?ai(b):ah(b)},0):(b(),ag()):Y=0}function ak(t,s,q,p,n,m){function k(){!g&&af(j.readyState)&&(b.r=g=1,!Y&&ag(),j.onload=j.onreadystatechange=null,ad(function(){Q.removeChild(j)},0))}var j=ao.createElement(t),g=0,b={t:q,s:s,e:m};j.src=j.data=s,!U&&(j.style.display="none"),j.width=j.height="0",t!="object"&&(j.type=q),j.onload=j.onreadystatechange=k,t=="img"?j.onerror=k:t=="script"&&(j.onerror=function(){b.e=b.r=1,aj()}),aa.splice(p,0,b),Q.insertBefore(j,U?null:ac),ad(function(){g||(Q.removeChild(j),b.r=b.e=g=1,ag())},L.errorTimeout)}function al(f,e,h){var g=e=="c"?I:J;Y=0,e=e||"j",V(f)?ak(g,f,e,this.i++,ae,h):(aa.splice(this.i++,0,f),aa.length==1&&aj());return this}function am(){var b=L;b.loader={load:al,i:0};return b}var ae=ao.documentElement,ad=ap.setTimeout,ac=ao.getElementsByTagName("script")[0],ab={}.toString,aa=[],Y=0,W="MozAppearance" in ae.style,U=W&&!!ao.createRange().compareNode,S=W&&!U,Q=U?ae:ac.parentNode,O=ap.opera&&ab.call(ap.opera)=="[object Opera]",M="webkitAppearance" in ae.style,K=M&&"async" in ao.createElement("script"),J=W?"object":O||K?"img":"script",I=M?"img":J,Z=Array.isArray||function(b){return ab.call(b)=="[object Array]"},X=function(b){return Object(b)===b},V=function(b){return typeof b=="string"},T=function(b){return ab.call(b)=="[object Function]"},R=[],P={},N,L;L=function(d){function m(o){var i=o.split("!"),u=R.length,t=i.pop(),s=i.length,r={url:t,origUrl:t,prefixes:i},q,p;for(p=0;p<s;p++){q=P[i[p]],q&&(r=q(r))}for(p=0;p<u;p++){r=R[p](r)}return r}function n(o,f,t,s,r){var q=m(o),p=q.autoCallback;if(!q.bypass){f&&(f=T(f)?f:f[o]||f[s]||f[o.split("/").pop().split("?")[0]]);if(q.instead){return q.instead(o,f,t,s,r)}t.load(q.url,q.forceCSS||!q.forceJS&&/css$/.test(q.url)?"c":an,q.noexec),(T(f)||T(p))&&t.load(function(){am(),f&&f(q.origUrl,r,s),p&&p(q.origUrl,r,s)})}}function c(o,e){function u(b){if(V(b)){n(b,q,e,0,t)}else{if(X(b)){for(p in b){b.hasOwnProperty(p)&&n(b[p],q,e,p,t)}}}}var t=!!o.test,s=t?o.yep:o.nope,r=o.load||o.both,q=o.callback,p;u(s),u(r),o.complete&&e.load(o.complete)}var l,k,j=this.yepnope.loader;if(V(d)){n(d,0,j,0)}else{if(Z(d)){for(l=0;l<d.length;l++){k=d[l],V(k)?n(k,0,j,0):Z(k)?L(k):X(k)&&c(k,j)}}else{X(d)&&c(d,j)}}},L.addPrefix=function(d,c){P[d]=c},L.addFilter=function(b){R.push(b)},L.errorTimeout=10000,ao.readyState==null&&ao.addEventListener&&(ao.readyState="loading",ao.addEventListener("DOMContentLoaded",N=function(){ao.removeEventListener("DOMContentLoaded",N,0),ao.readyState="complete"},0)),ap.yepnope=am()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};(function(d){var c=function(F,E){var D=d.extend({},d.fn.nivoSlider.defaults,E);var C={currentSlide:0,currentImage:"",totalSlides:0,running:false,paused:false,stop:false};var B=d(F);B.data("nivo:vars",C);B.css("position","relative");B.addClass("nivoSlider");var A=B.children();A.each(function(){var e=d(this);var i="";if(!e.is("img")){if(e.is("a")){e.addClass("nivo-imageLink");i=e}e=e.find("img:first")}var h=e.width();if(h==0){h=e.attr("width")}var f=e.height();if(f==0){f=e.attr("height")}if(h>B.width()){B.width(h)}if(f>B.height()){B.height(f)}if(i!=""){i.css("display","none")}e.css("display","none");C.totalSlides++});if(D.randomStart){D.startSlide=Math.floor(Math.random()*C.totalSlides)}if(D.startSlide>0){if(D.startSlide>=C.totalSlides){D.startSlide=C.totalSlides-1}C.currentSlide=D.startSlide}if(d(A[C.currentSlide]).is("img")){C.currentImage=d(A[C.currentSlide])}else{C.currentImage=d(A[C.currentSlide]).find("img:first")}if(d(A[C.currentSlide]).is("a")){d(A[C.currentSlide]).css("display","block")}B.css("background",'url("'+C.currentImage.attr("src")+'") no-repeat');B.append(d('<div class="nivo-caption"><p></p></div>').css({display:"none",opacity:D.captionOpacity}));var z=function(e){var g=d(".nivo-caption",B);if(C.currentImage.attr("title")!=""&&C.currentImage.attr("title")!=undefined){var f=C.currentImage.attr("title");if(f.substr(0,1)=="#"){f=d(f).html()}if(g.css("display")=="block"){g.find("p").stop().fadeOut(e.animSpeed,function(){d(this).html(f);d(this).stop().fadeIn(e.animSpeed)})}else{g.find("p").html(f)}g.stop().fadeIn(e.animSpeed)}else{g.stop().fadeOut(e.animSpeed)}};z(D);var y=0;if(!D.manualAdvance&&A.length>1){y=setInterval(function(){s(B,A,D,false)},D.pauseTime)}if(D.directionNav){B.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+D.prevText+'</a><a class="nivo-nextNav">'+D.nextText+"</a></div>");if(D.directionNavHide){d(".nivo-directionNav",B).hide();B.hover(function(){d(".nivo-directionNav",B).show()},function(){d(".nivo-directionNav",B).hide()})}d("a.nivo-prevNav",B).live("click",function(){if(C.running){return false}clearInterval(y);y="";C.currentSlide-=2;s(B,A,D,"prev")});d("a.nivo-nextNav",B).live("click",function(){if(C.running){return false}clearInterval(y);y="";s(B,A,D,"next")})}if(D.controlNav){var x=d('<div class="nivo-controlNav"></div>');B.append(x);for(var w=0;w<A.length;w++){if(D.controlNavThumbs){var v=A.eq(w);if(!v.is("img")){v=v.find("img:first")}if(D.controlNavThumbsFromRel){x.append('<a class="nivo-control" rel="'+w+'"><img src="'+v.attr("rel")+'" alt="" /></a>')}else{x.append('<a class="nivo-control" rel="'+w+'"><img src="'+v.attr("src").replace(D.controlNavThumbsSearch,D.controlNavThumbsReplace)+'" alt="" /></a>')}}else{x.append('<a class="nivo-control" rel="'+w+'">'+(w+1)+"</a>")}}d(".nivo-controlNav a:eq("+C.currentSlide+")",B).addClass("active");d(".nivo-controlNav a",B).live("click",function(){if(C.running){return false}if(d(this).hasClass("active")){return false}clearInterval(y);y="";B.css("background",'url("'+C.currentImage.attr("src")+'") no-repeat');C.currentSlide=d(this).attr("rel")-1;s(B,A,D,"control")})}if(D.keyboardNav){d(window).keypress(function(b){if(b.keyCode=="37"){if(C.running){return false}clearInterval(y);y="";C.currentSlide-=2;s(B,A,D,"prev")}if(b.keyCode=="39"){if(C.running){return false}clearInterval(y);y="";s(B,A,D,"next")}})}if(D.pauseOnHover){B.hover(function(){C.paused=true;clearInterval(y);y=""},function(){C.paused=false;if(y==""&&!D.manualAdvance){y=setInterval(function(){s(B,A,D,false)},D.pauseTime)}})}B.bind("nivo:animFinished",function(){C.running=false;d(A).each(function(){if(d(this).is("a")){d(this).css("display","none")}});if(d(A[C.currentSlide]).is("a")){d(A[C.currentSlide]).css("display","block")}if(y==""&&!C.paused&&!D.manualAdvance){y=setInterval(function(){s(B,A,D,false)},D.pauseTime)}D.afterChange.call(this)});var u=function(g,k,j){for(var i=0;i<k.slices;i++){var h=Math.round(g.width()/k.slices);if(i==k.slices-1){g.append(d('<div class="nivo-slice"></div>').css({left:h*i+"px",width:g.width()-h*i+"px",height:"0px",opacity:"0",background:'url("'+j.currentImage.attr("src")+'") no-repeat -'+(h+i*h-h)+"px 0%"}))}else{g.append(d('<div class="nivo-slice"></div>').css({left:h*i+"px",width:h+"px",height:"0px",opacity:"0",background:'url("'+j.currentImage.attr("src")+'") no-repeat -'+(h+i*h-h)+"px 0%"}))}}};var t=function(i,o,n){var m=Math.round(i.width()/o.boxCols);var l=Math.round(i.height()/o.boxRows);for(var k=0;k<o.boxRows;k++){for(var j=0;j<o.boxCols;j++){if(j==o.boxCols-1){i.append(d('<div class="nivo-box"></div>').css({opacity:0,left:m*j+"px",top:l*k+"px",width:i.width()-m*j+"px",height:l+"px",background:'url("'+n.currentImage.attr("src")+'") no-repeat -'+(m+j*m-m)+"px -"+(l+k*l-l)+"px"}))}else{i.append(d('<div class="nivo-box"></div>').css({opacity:0,left:m*j+"px",top:l*k+"px",width:m+"px",height:l+"px",background:'url("'+n.currentImage.attr("src")+'") no-repeat -'+(m+j*m-m)+"px -"+(l+k*l-l)+"px"}))}}}};var s=function(V,U,T,S){var R=V.data("nivo:vars");if(R&&R.currentSlide==R.totalSlides-1){T.lastSlide.call(this)}if((!R||R.stop)&&!S){return false}T.beforeChange.call(this);if(!S){V.css("background",'url("'+R.currentImage.attr("src")+'") no-repeat')}else{if(S=="prev"){V.css("background",'url("'+R.currentImage.attr("src")+'") no-repeat')}if(S=="next"){V.css("background",'url("'+R.currentImage.attr("src")+'") no-repeat')}}R.currentSlide++;if(R.currentSlide==R.totalSlides){R.currentSlide=0;T.slideshowEnd.call(this)}if(R.currentSlide<0){R.currentSlide=R.totalSlides-1}if(d(U[R.currentSlide]).is("img")){R.currentImage=d(U[R.currentSlide])}else{R.currentImage=d(U[R.currentSlide]).find("img:first")}if(T.controlNav){d(".nivo-controlNav a",V).removeClass("active");d(".nivo-controlNav a:eq("+R.currentSlide+")",V).addClass("active")}z(T);d(".nivo-slice",V).remove();d(".nivo-box",V).remove();var Q=T.effect;if(T.effect=="random"){var P=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");Q=P[Math.floor(Math.random()*(P.length+1))];if(Q==undefined){Q="fade"}}if(T.effect.indexOf(",")!=-1){var P=T.effect.split(",");Q=P[Math.floor(Math.random()*P.length)];if(Q==undefined){Q="fade"}}if(R.currentImage.attr("data-transition")){Q=R.currentImage.attr("data-transition")}R.running=true;if(Q=="sliceDown"||Q=="sliceDownRight"||Q=="sliceDownLeft"){u(V,T,R);var O=0;var N=0;var M=d(".nivo-slice",V);if(Q=="sliceDownLeft"){M=d(".nivo-slice",V)._reverse()}M.each(function(){var b=d(this);b.css({top:"0px"});if(N==T.slices-1){setTimeout(function(){b.animate({height:"100%",opacity:"1.0"},T.animSpeed,"",function(){V.trigger("nivo:animFinished")})},100+O)}else{setTimeout(function(){b.animate({height:"100%",opacity:"1.0"},T.animSpeed)},100+O)}O+=50;N++})}else{if(Q=="sliceUp"||Q=="sliceUpRight"||Q=="sliceUpLeft"){u(V,T,R);var O=0;var N=0;var M=d(".nivo-slice",V);if(Q=="sliceUpLeft"){M=d(".nivo-slice",V)._reverse()}M.each(function(){var b=d(this);b.css({bottom:"0px"});if(N==T.slices-1){setTimeout(function(){b.animate({height:"100%",opacity:"1.0"},T.animSpeed,"",function(){V.trigger("nivo:animFinished")})},100+O)}else{setTimeout(function(){b.animate({height:"100%",opacity:"1.0"},T.animSpeed)},100+O)}O+=50;N++})}else{if(Q=="sliceUpDown"||Q=="sliceUpDownRight"||Q=="sliceUpDownLeft"){u(V,T,R);var O=0;var N=0;var L=0;var M=d(".nivo-slice",V);if(Q=="sliceUpDownLeft"){M=d(".nivo-slice",V)._reverse()}M.each(function(){var b=d(this);if(N==0){b.css("top","0px");N++}else{b.css("bottom","0px");N=0}if(L==T.slices-1){setTimeout(function(){b.animate({height:"100%",opacity:"1.0"},T.animSpeed,"",function(){V.trigger("nivo:animFinished")})},100+O)}else{setTimeout(function(){b.animate({height:"100%",opacity:"1.0"},T.animSpeed)},100+O)}O+=50;L++})}else{if(Q=="fold"){u(V,T,R);var O=0;var N=0;d(".nivo-slice",V).each(function(){var f=d(this);var b=f.width();f.css({top:"0px",height:"100%",width:"0px"});if(N==T.slices-1){setTimeout(function(){f.animate({width:b,opacity:"1.0"},T.animSpeed,"",function(){V.trigger("nivo:animFinished")})},100+O)}else{setTimeout(function(){f.animate({width:b,opacity:"1.0"},T.animSpeed)},100+O)}O+=50;N++})}else{if(Q=="fade"){u(V,T,R);var K=d(".nivo-slice:first",V);K.css({height:"100%",width:V.width()+"px"});K.animate({opacity:"1.0"},T.animSpeed*2,"",function(){V.trigger("nivo:animFinished")})}else{if(Q=="slideInRight"){u(V,T,R);var K=d(".nivo-slice:first",V);K.css({height:"100%",width:"0px",opacity:"1"});K.animate({width:V.width()+"px"},T.animSpeed*2,"",function(){V.trigger("nivo:animFinished")})}else{if(Q=="slideInLeft"){u(V,T,R);var K=d(".nivo-slice:first",V);K.css({height:"100%",width:"0px",opacity:"1",left:"",right:"0px"});K.animate({width:V.width()+"px"},T.animSpeed*2,"",function(){K.css({left:"0px",right:""});V.trigger("nivo:animFinished")})}else{if(Q=="boxRandom"){t(V,T,R);var J=T.boxCols*T.boxRows;var N=0;var O=0;var I=r(d(".nivo-box",V));I.each(function(){var b=d(this);if(N==J-1){setTimeout(function(){b.animate({opacity:"1"},T.animSpeed,"",function(){V.trigger("nivo:animFinished")})},100+O)}else{setTimeout(function(){b.animate({opacity:"1"},T.animSpeed)},100+O)}O+=20;N++})}else{if(Q=="boxRain"||Q=="boxRainReverse"||Q=="boxRainGrow"||Q=="boxRainGrowReverse"){t(V,T,R);var J=T.boxCols*T.boxRows;var N=0;var O=0;var H=0;var G=0;var p=new Array;p[H]=new Array;var I=d(".nivo-box",V);if(Q=="boxRainReverse"||Q=="boxRainGrowReverse"){I=d(".nivo-box",V)._reverse()}I.each(function(){p[H][G]=d(this);G++;if(G==T.boxCols){H++;G=0;p[H]=new Array}});for(var n=0;n<T.boxCols*2;n++){var m=n;for(var h=0;h<T.boxRows;h++){if(m>=0&&m<T.boxCols){(function(Z,Y,X,W,q){var o=d(p[Z][Y]);var g=o.width();var b=o.height();if(Q=="boxRainGrow"||Q=="boxRainGrowReverse"){o.width(0).height(0)}if(W==q-1){setTimeout(function(){o.animate({opacity:"1",width:g,height:b},T.animSpeed/1.3,"",function(){V.trigger("nivo:animFinished")})},100+X)}else{setTimeout(function(){o.animate({opacity:"1",width:g,height:b},T.animSpeed/1.3)},100+X)}})(h,m,O,N,J);N++}m--}O+=100}}}}}}}}}}};var r=function(f){for(var e,h,g=f.length;g;e=parseInt(Math.random()*g),h=f[--g],f[g]=f[e],f[e]=h){}return f};var a=function(b){if(this.console&&typeof console.log!="undefined"){console.log(b)}};this.stop=function(){if(!d(F).data("nivo:vars").stop){d(F).data("nivo:vars").stop=true;a("Stop Slider")}};this.start=function(){if(d(F).data("nivo:vars").stop){d(F).data("nivo:vars").stop=false;a("Start Slider")}};D.afterLoad.call(this);return this};d.fn.nivoSlider=function(a){return this.each(function(j,i){var h=d(this);if(h.data("nivoslider")){return h.data("nivoslider")}var b=new c(this,a);h.data("nivoslider",b)})};d.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:".jpg",controlNavThumbsReplace:"_thumb.jpg",keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,prevText:"Prev",nextText:"Next",randomStart:false,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};d.fn._reverse=[].reverse})(jQuery);$(document).ready(function(){postScroll();changeOffset();setOffset();imageGallery.init();lastFM.toggle("#last-fm");contactForm.showForm("#contact");$("#contact_message_submit").click(function(){})});var postScroll=function(){var b=91;var a="scroll";if($("body").hasClass("posts-long")||$("body").hasClass("work")){$(window).scroll(function(){var c=$(window).scrollTop();if(c>=b){$("html").addClass(a)}else{if(c<=b){$("html").removeClass(a)}}})}};var calculateBottomOffset=function(){var a=739;var b=window.innerHeight-a;return b};var setOffset=function(){var a=$("#post");var b=calculateBottomOffset();a.css("padding-bottom",b.toString()+"px");console.log(b)};var changeOffset=function(){var a=$("#post");$(window).resize(function(){setOffset()})};var lastFM={toggle:function(a){$(".last-fm a").click(function(b){b.preventDefault();$(this).toggleClass("active");$(a).fadeToggle()})}};var imageGallery={init:function(){var a=$("#slider img").length;if(a>1){$("#slider").nivoSlider({effect:"sliceDownLeft",slices:25,pauseTime:5000,controlNav:false,})}}};var contactForm={showForm:function(a){$("li a.nav-contact, #contact .close, #contact #cancel").click(function(b){b.preventDefault();$(a).slideToggle()})}};(function(b){var a;b.rails=a={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",CSRFProtection:function(d){var c=b('meta[name="csrf-token"]').attr("content");if(c){d.setRequestHeader("X-CSRF-Token",c)}},fire:function(f,c,e){var d=b.Event(c);f.trigger(d,e);return d.result!==false},confirm:function(c){return confirm(c)},ajax:function(c){return b.ajax(c)},handleRemote:function(f){var h,d,g,c=f.data("type")||(b.ajaxSettings&&b.ajaxSettings.dataType);if(a.fire(f,"ajax:before")){if(f.is("form")){h=f.attr("method");d=f.attr("action");g=f.serializeArray();var e=f.data("ujs:submit-button");if(e){g.push(e);f.data("ujs:submit-button",null)}}else{h=f.data("method");d=f.attr("href");g=f.data("params")||null}a.ajax({url:d,type:h||"GET",data:g,dataType:c,beforeSend:function(j,i){if(i.dataType===undefined){j.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script)}return a.fire(f,"ajax:beforeSend",[j,i])},success:function(j,i,k){f.trigger("ajax:success",[j,i,k])},complete:function(j,i){f.trigger("ajax:complete",[j,i])},error:function(k,i,j){f.trigger("ajax:error",[k,i,j])}})}},handleMethod:function(g){var d=g.attr("href"),i=g.data("method"),e=b("meta[name=csrf-token]").attr("content"),h=b("meta[name=csrf-param]").attr("content"),f=b('<form method="post" action="'+d+'"></form>'),c='<input name="_method" value="'+i+'" type="hidden" />';if(h!==undefined&&e!==undefined){c+='<input name="'+h+'" value="'+e+'" type="hidden" />'}f.hide().append(c).appendTo("body");f.submit()},disableFormElements:function(c){c.find(a.disableSelector).each(function(){var d=b(this),e=d.is("button")?"html":"val";d.data("ujs:enable-with",d[e]());d[e](d.data("disable-with"));d.attr("disabled","disabled")})},enableFormElements:function(c){c.find(a.enableSelector).each(function(){var d=b(this),e=d.is("button")?"html":"val";if(d.data("ujs:enable-with")){d[e](d.data("ujs:enable-with"))}d.removeAttr("disabled")})},allowAction:function(c){var d=c.data("confirm"),e=false,f;if(!d){return true}if(a.fire(c,"confirm")){e=a.confirm(d);f=a.fire(c,"confirm:complete",[e])}return e&&f},blankInputs:function(h,e,g){var d=b(),f,c=e||"input,textarea";h.find(c).each(function(){f=b(this);if(g?f.val():!f.val()){d=d.add(f)}});return d.length?d:false},nonBlankInputs:function(d,c){return a.blankInputs(d,c,true)},stopEverything:function(c){b(c.target).trigger("ujs:everythingStopped");c.stopImmediatePropagation();return false},callFormSubmitBindings:function(d){var c=d.data("events"),e=true;if(c!==undefined&&c.submit!==undefined){b.each(c.submit,function(f,g){if(typeof g.handler==="function"){return e=g.handler(g.data)}})}return e}};if("ajaxPrefilter" in b){b.ajaxPrefilter(function(c,e,d){a.CSRFProtection(d)})}else{b(document).ajaxSend(function(c,d){a.CSRFProtection(d)})}b(a.linkClickSelector).live("click.rails",function(d){var c=b(this);if(!a.allowAction(c)){return a.stopEverything(d)}if(c.data("remote")!==undefined){a.handleRemote(c);return false}else{if(c.data("method")){a.handleMethod(c);return false}}});b(a.formSubmitSelector).live("submit.rails",function(h){var f=b(this),g=f.data("remote")!==undefined,d=a.blankInputs(f,a.requiredInputSelector),c=a.nonBlankInputs(f,a.fileInputSelector);if(!a.allowAction(f)){return a.stopEverything(h)}if(d&&a.fire(f,"ajax:aborted:required",[d])){return a.stopEverything(h)}if(g){if(c){return a.fire(f,"ajax:aborted:file",[c])}if(!b.support.submitBubbles&&a.callFormSubmitBindings(f)===false){return a.stopEverything(h)}a.handleRemote(f);return false}else{setTimeout(function(){a.disableFormElements(f)},13)}});b(a.formInputClickSelector).live("click.rails",function(e){var d=b(this);if(!a.allowAction(d)){return a.stopEverything(e)}var c=d.attr("name"),f=c?{name:c,value:d.val()}:null;d.closest("form").data("ujs:submit-button",f)});b(a.formSubmitSelector).live("ajax:beforeSend.rails",function(c){if(this==c.target){a.disableFormElements(b(this))}});b(a.formSubmitSelector).live("ajax:complete.rails",function(c){if(this==c.target){a.enableFormElements(b(this))}})})(jQuery);