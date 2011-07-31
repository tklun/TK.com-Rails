window.Modernizr=function(au,at,ar){function L(){ap.input=function(e){for(var d=0,f=e.length;d<f;d++){aa[e[d]]=e[d] in ai}return aa}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ap.inputtypes=function(b){for(var l=0,k,j,g,c=b.length;l<c;l++){ai.setAttribute("type",j=b[l]),k=ai.type!=="text",k&&(ai.value=ah,ai.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(j)&&ai.style.WebkitAppearance!==ar?(an.appendChild(ai),g=at.defaultView,k=g.getComputedStyle&&g.getComputedStyle(ai,null).WebkitAppearance!=="textfield"&&ai.offsetHeight!==0,an.removeChild(ai)):/^(search|tel)$/.test(j)||(/^(url|email)$/.test(j)?k=ai.checkValidity&&ai.checkValidity()===!1:/^color$/.test(j)?(an.appendChild(ai),an.offsetWidth,k=ai.value!=ah,an.removeChild(ai)):k=ai.value!=ah)),ab[b[l]]=!!k}return ab}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function N(f,e){var h=f.charAt(0).toUpperCase()+f.substr(1),g=(f+" "+ae.join(h+" ")+h).split(" ");return O(g,e)}function O(e,c){for(var f in e){if(aj[e[f]]!==ar){return c=="pfx"?e[f]:!0}}return !1}function P(d,c){return !!~(""+d).indexOf(c)}function Q(d,c){return typeof d===c}function R(d,c){return S(af.join(d+";")+(c||""))}function S(b){aj.cssText=b}var aq="2.0.6",ap={},ao=!0,an=at.documentElement,am=at.head||at.getElementsByTagName("head")[0],al="modernizr",ak=at.createElement(al),aj=ak.style,ai=at.createElement("input"),ah=":)",ag=Object.prototype.toString,af=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),ae="Webkit Moz O ms Khtml".split(" "),ad={svg:"http://www.w3.org/2000/svg"},ac={},ab={},aa={},Z=[],Y=function(b,p,o,n){var m,l,i,g=at.createElement("div");if(parseInt(o,10)){while(o--){i=at.createElement("div"),i.id=n?n[o]:al+(o+1),g.appendChild(i)}}m=["&shy;","<style>",b,"</style>"].join(""),g.id=al,g.innerHTML+=m,an.appendChild(g),l=p(g,b),g.parentNode.removeChild(g);return !!l},X=function(a){if(au.matchMedia){return matchMedia(a).matches}var d;Y("@media "+a+" { #"+al+" { position: absolute; } }",function(c){d=(au.getComputedStyle?getComputedStyle(c,null):c.currentStyle).position=="absolute"});return d},W=function(){function c(h,g){g=g||at.createElement(b[h]||"div"),h="on"+h;var a=h in g;a||(g.setAttribute||(g=at.createElement("div")),g.setAttribute&&g.removeAttribute&&(g.setAttribute(h,""),a=Q(g[h],"function"),Q(g[h],ar)||(g[h]=ar),g.removeAttribute(h))),g=null;return a}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return c}(),V,U={}.hasOwnProperty,T;!Q(U,ar)&&!Q(U.call,ar)?T=function(d,c){return U.call(d,c)}:T=function(d,c){return c in d&&Q(d.constructor.prototype[c],ar)};var M=function(b,h){var g=b.join(""),e=h.length;Y(g,function(f,n){var m=at.styleSheets[at.styleSheets.length-1],l=m.cssRules&&m.cssRules[0]?m.cssRules[0].cssText:m.cssText||"",k=f.childNodes,j={};while(e--){j[k[e].id]=k[e]}ap.csstransforms3d=j.csstransforms3d.offsetLeft===9,ap.generatedcontent=j.generatedcontent.offsetHeight>=1,ap.fontface=/src/i.test(l)&&l.indexOf(n.split(" ")[0])===0},e,h)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",af.join("transform-3d),("),al,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',ah,'";visibility:hidden}'].join("")],["fontface","csstransforms3d","generatedcontent"]);ac.flexbox=function(){function j(f,e,l,k){f.style.cssText=af.join(e+":"+l+";")+(k||"")}function b(f,e,l,k){e+=":",f.style.cssText=(e+af.join(l+";"+e)).slice(0,-e.length)+(k||"")}var i=at.createElement("div"),h=at.createElement("div");b(i,"display","box","width:42px;padding:0;"),j(h,"box-flex","1","width:10px;"),i.appendChild(h),an.appendChild(i);var g=h.offsetWidth===42;i.removeChild(h),an.removeChild(i);return g},ac.canvas=function(){var b=at.createElement("canvas");return !!b.getContext&&!!b.getContext("2d")},ac.canvastext=function(){return !!ap.canvas&&!!Q(at.createElement("canvas").getContext("2d").fillText,"function")},ac.history=function(){return !!au.history&&!!history.pushState},ac.rgba=function(){S("background-color:rgba(150,255,150,.5)");return P(aj.backgroundColor,"rgba")},ac.hsla=function(){S("background-color:hsla(120,40%,100%,.5)");return P(aj.backgroundColor,"rgba")||P(aj.backgroundColor,"hsla")},ac.multiplebgs=function(){S("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(aj.background)},ac.backgroundsize=function(){return N("backgroundSize")},ac.borderimage=function(){return N("borderImage")},ac.borderradius=function(){return N("borderRadius")},ac.boxshadow=function(){return N("boxShadow")},ac.textshadow=function(){return at.createElement("div").style.textShadow===""},ac.opacity=function(){R("opacity:.55");return/^0.55$/.test(aj.opacity)},ac.cssanimations=function(){return N("animationName")},ac.csscolumns=function(){return N("columnCount")},ac.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";S((e+af.join(d+e)+af.join(f+e)).slice(0,-e.length));return P(aj.backgroundImage,"gradient")},ac.cssreflections=function(){return N("boxReflect")},ac.csstransforms=function(){return !!O(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},ac.csstransforms3d=function(){var b=!!O(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);b&&"webkitPerspective" in an.style&&(b=ap.csstransforms3d);return b},ac.csstransitions=function(){return N("transitionProperty")},ac.fontface=function(){return ap.fontface},ac.generatedcontent=function(){return ap.generatedcontent},ac.video=function(){var b=at.createElement("video"),h=!1;try{if(h=!!b.canPlayType){h=new Boolean(h),h.ogg=b.canPlayType('video/ogg; codecs="theora"');var g='video/mp4; codecs="avc1.42E01E';h.h264=b.canPlayType(g+'"')||b.canPlayType(g+', mp4a.40.2"'),h.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(f){}return h},ac.audio=function(){var b=at.createElement("audio"),f=!1;try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('audio/ogg; codecs="vorbis"'),f.mp3=b.canPlayType("audio/mpeg;"),f.wav=b.canPlayType('audio/wav; codecs="1"'),f.m4a=b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")}}catch(e){}return f},ac.localstorage=function(){try{return !!localStorage.getItem}catch(b){return !1}},ac.applicationcache=function(){return !!au.applicationCache},ac.svg=function(){return !!at.createElementNS&&!!at.createElementNS(ad.svg,"svg").createSVGRect},ac.inlinesvg=function(){var b=at.createElement("div");b.innerHTML="<svg/>";return(b.firstChild&&b.firstChild.namespaceURI)==ad.svg},ac.svgclippaths=function(){return !!at.createElementNS&&/SVG/.test(ag.call(at.createElementNS(ad.svg,"clipPath")))};for(var K in ac){T(ac,K)&&(V=K.toLowerCase(),ap[V]=ac[K](),Z.push((ap[V]?"":"no-")+V))}ap.input||L(),ap.addTest=function(e,c){if(typeof e=="object"){for(var f in e){T(e,f)&&ap.addTest(f,e[f])}}else{e=e.toLowerCase();if(ap[e]!==ar){return}c=typeof c=="boolean"?c:!!c(),an.className+=" "+(c?"":"no-")+e,ap[e]=c}return ap},S(""),ak=ai=null,au.attachEvent&&function(){var b=at.createElement("div");b.innerHTML="<elem></elem>";return b.childNodes.length!==1}()&&function(J,I){function c(e){var d=-1;while(++d<E){e.createElement(F[d])}}J.iepp=J.iepp||{};var H=J.iepp,G=H.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",F=G.split("|"),E=F.length,D=new RegExp("(^|\\s)("+G+")","gi"),C=new RegExp("<(/*)("+G+")","gi"),B=/^\s*[\{\}]\s*$/,A=new RegExp("(^|[^\\n]*?\\s)("+G+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),z=I.createDocumentFragment(),y=I.documentElement,x=y.firstChild,w=I.createElement("body"),v=I.createElement("style"),u=/print|all/,t;H.getCSS=function(i,d){if(i+""===ar){return""}var m=-1,l=i.length,k,j=[];while(++m<l){k=i[m];if(k.disabled){continue}d=k.media||d,u.test(d)&&j.push(H.getCSS(k.imports,d),k.cssText),d="all"}return j.join("")},H.parseCSS=function(e){var d=[],f;while((f=A.exec(e))!=null){d.push(((B.exec(f[1])?"\n":f[1])+f[2]+f[3]).replace(D,"$1.iepp_$2")+f[4])}return d.join("\n")},H.writeHTML=function(){var b=-1;t=t||I.body;while(++b<E){var h=I.getElementsByTagName(F[b]),g=h.length,f=-1;while(++f<g){h[f].className.indexOf("iepp_")<0&&(h[f].className+=" iepp_"+F[b])}}z.appendChild(t),y.appendChild(w),w.className=t.className,w.id=t.id,w.innerHTML=t.innerHTML.replace(C,"<$1font")},H._beforePrint=function(){v.styleSheet.cssText=H.parseCSS(H.getCSS(I.styleSheets,"all")),H.writeHTML()},H.restoreHTML=function(){w.innerHTML="",y.removeChild(w),y.appendChild(t)},H._afterPrint=function(){H.restoreHTML(),v.styleSheet.cssText=""},c(I),c(z);H.disablePP||(x.insertBefore(v,x.firstChild),v.media="print",v.className="iepp-printshim",J.attachEvent("onbeforeprint",H._beforePrint),J.attachEvent("onafterprint",H._afterPrint))}(au,at),ap._version=aq,ap._prefixes=af,ap._domPrefixes=ae,ap.mq=X,ap.hasEvent=W,ap.testProp=function(b){return O([b])},ap.testAllProps=N,ap.testStyles=Y,an.className=an.className.replace(/\bno-js\b/,"")+(ao?" js "+Z.join(" "):"");return ap}(this,this.document),function(ap,ao,an){function af(b){return !b||b=="loaded"||b=="complete"}function ag(){var d=1,c=-1;while(aa.length- ++c){if(aa[c].s&&!(d=aa[c].r)){break}}d&&aj()}function ah(b){var f=ao.createElement("script"),e;f.src=b.s,f.onreadystatechange=f.onload=function(){!e&&af(f.readyState)&&(e=1,ag(),f.onload=f.onreadystatechange=null)},ad(function(){e||(e=1,ag())},L.errorTimeout),b.e?f.onload():ac.parentNode.insertBefore(f,ac)}function ai(b){var h=ao.createElement("link"),g;h.href=b.s,h.rel="stylesheet",h.type="text/css";if(!b.e&&(M||W)){var f=function(c){ad(function(){if(!g){try{c.sheet.cssRules.length?(g=1,ag()):f(c)}catch(a){a.code==1000||a.message=="security"||a.message=="denied"?(g=1,ad(function(){ag()},0)):f(c)}}},0)};f(h)}else{h.onload=function(){g||(g=1,ad(function(){ag()},0))},b.e&&h.onload()}ad(function(){g||(g=1,ag())},L.errorTimeout),!b.e&&ac.parentNode.insertBefore(h,ac)}function aj(){var b=aa.shift();Y=1,b?b.t?ad(function(){b.t=="c"?ai(b):ah(b)},0):(b(),ag()):Y=0}function ak(t,s,q,p,n,m){function k(){!g&&af(j.readyState)&&(b.r=g=1,!Y&&ag(),j.onload=j.onreadystatechange=null,ad(function(){Q.removeChild(j)},0))}var j=ao.createElement(t),g=0,b={t:q,s:s,e:m};j.src=j.data=s,!U&&(j.style.display="none"),j.width=j.height="0",t!="object"&&(j.type=q),j.onload=j.onreadystatechange=k,t=="img"?j.onerror=k:t=="script"&&(j.onerror=function(){b.e=b.r=1,aj()}),aa.splice(p,0,b),Q.insertBefore(j,U?null:ac),ad(function(){g||(Q.removeChild(j),b.r=b.e=g=1,ag())},L.errorTimeout)}function al(f,e,h){var g=e=="c"?I:J;Y=0,e=e||"j",V(f)?ak(g,f,e,this.i++,ae,h):(aa.splice(this.i++,0,f),aa.length==1&&aj());return this}function am(){var b=L;b.loader={load:al,i:0};return b}var ae=ao.documentElement,ad=ap.setTimeout,ac=ao.getElementsByTagName("script")[0],ab={}.toString,aa=[],Y=0,W="MozAppearance" in ae.style,U=W&&!!ao.createRange().compareNode,S=W&&!U,Q=U?ae:ac.parentNode,O=ap.opera&&ab.call(ap.opera)=="[object Opera]",M="webkitAppearance" in ae.style,K=M&&"async" in ao.createElement("script"),J=W?"object":O||K?"img":"script",I=M?"img":J,Z=Array.isArray||function(b){return ab.call(b)=="[object Array]"},X=function(b){return Object(b)===b},V=function(b){return typeof b=="string"},T=function(b){return ab.call(b)=="[object Function]"},R=[],P={},N,L;L=function(d){function m(o){var i=o.split("!"),u=R.length,t=i.pop(),s=i.length,r={url:t,origUrl:t,prefixes:i},q,p;for(p=0;p<s;p++){q=P[i[p]],q&&(r=q(r))}for(p=0;p<u;p++){r=R[p](r)}return r}function n(o,f,t,s,r){var q=m(o),p=q.autoCallback;if(!q.bypass){f&&(f=T(f)?f:f[o]||f[s]||f[o.split("/").pop().split("?")[0]]);if(q.instead){return q.instead(o,f,t,s,r)}t.load(q.url,q.forceCSS||!q.forceJS&&/css$/.test(q.url)?"c":an,q.noexec),(T(f)||T(p))&&t.load(function(){am(),f&&f(q.origUrl,r,s),p&&p(q.origUrl,r,s)})}}function c(o,e){function u(b){if(V(b)){n(b,q,e,0,t)}else{if(X(b)){for(p in b){b.hasOwnProperty(p)&&n(b[p],q,e,p,t)}}}}var t=!!o.test,s=t?o.yep:o.nope,r=o.load||o.both,q=o.callback,p;u(s),u(r),o.complete&&e.load(o.complete)}var l,k,j=this.yepnope.loader;if(V(d)){n(d,0,j,0)}else{if(Z(d)){for(l=0;l<d.length;l++){k=d[l],V(k)?n(k,0,j,0):Z(k)?L(k):X(k)&&c(k,j)}}else{X(d)&&c(d,j)}}},L.addPrefix=function(d,c){P[d]=c},L.addFilter=function(b){R.push(b)},L.errorTimeout=10000,ao.readyState==null&&ao.addEventListener&&(ao.readyState="loading",ao.addEventListener("DOMContentLoaded",N=function(){ao.removeEventListener("DOMContentLoaded",N,0),ao.readyState="complete"},0)),ap.yepnope=am()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};$(document).ready(function(){postScroll();lastFM.toggle("#last-fm");contactForm.showForm("#contact");$("#contact_message_submit").click(function(){})});var postScroll=function(){var b=91;var a="scroll";if($("body").hasClass("posts-long")||$("body").hasClass("work")){$(window).scroll(function(){var c=$(window).scrollTop();if(c>=b){$("html").addClass(a)}else{if(c<=b){$("html").removeClass(a)}}})}};var lastFM={toggle:function(a){$(".last-fm a, #last-fm").click(function(b){b.preventDefault();$(a).fadeToggle()})}};var contactForm={showForm:function(a){$("li a.nav-contact").click(function(b){b.preventDefault();$(a).slideToggle()})}};(function(b){var a;b.rails=a={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",CSRFProtection:function(d){var c=b('meta[name="csrf-token"]').attr("content");if(c){d.setRequestHeader("X-CSRF-Token",c)}},fire:function(f,c,e){var d=b.Event(c);f.trigger(d,e);return d.result!==false},confirm:function(c){return confirm(c)},ajax:function(c){return b.ajax(c)},handleRemote:function(f){var h,d,g,c=f.data("type")||(b.ajaxSettings&&b.ajaxSettings.dataType);if(a.fire(f,"ajax:before")){if(f.is("form")){h=f.attr("method");d=f.attr("action");g=f.serializeArray();var e=f.data("ujs:submit-button");if(e){g.push(e);f.data("ujs:submit-button",null)}}else{h=f.data("method");d=f.attr("href");g=f.data("params")||null}a.ajax({url:d,type:h||"GET",data:g,dataType:c,beforeSend:function(j,i){if(i.dataType===undefined){j.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script)}return a.fire(f,"ajax:beforeSend",[j,i])},success:function(j,i,k){f.trigger("ajax:success",[j,i,k])},complete:function(j,i){f.trigger("ajax:complete",[j,i])},error:function(k,i,j){f.trigger("ajax:error",[k,i,j])}})}},handleMethod:function(g){var d=g.attr("href"),i=g.data("method"),e=b("meta[name=csrf-token]").attr("content"),h=b("meta[name=csrf-param]").attr("content"),f=b('<form method="post" action="'+d+'"></form>'),c='<input name="_method" value="'+i+'" type="hidden" />';if(h!==undefined&&e!==undefined){c+='<input name="'+h+'" value="'+e+'" type="hidden" />'}f.hide().append(c).appendTo("body");f.submit()},disableFormElements:function(c){c.find(a.disableSelector).each(function(){var d=b(this),e=d.is("button")?"html":"val";d.data("ujs:enable-with",d[e]());d[e](d.data("disable-with"));d.attr("disabled","disabled")})},enableFormElements:function(c){c.find(a.enableSelector).each(function(){var d=b(this),e=d.is("button")?"html":"val";if(d.data("ujs:enable-with")){d[e](d.data("ujs:enable-with"))}d.removeAttr("disabled")})},allowAction:function(c){var d=c.data("confirm"),e=false,f;if(!d){return true}if(a.fire(c,"confirm")){e=a.confirm(d);f=a.fire(c,"confirm:complete",[e])}return e&&f},blankInputs:function(h,e,g){var d=b(),f,c=e||"input,textarea";h.find(c).each(function(){f=b(this);if(g?f.val():!f.val()){d=d.add(f)}});return d.length?d:false},nonBlankInputs:function(d,c){return a.blankInputs(d,c,true)},stopEverything:function(c){b(c.target).trigger("ujs:everythingStopped");c.stopImmediatePropagation();return false},callFormSubmitBindings:function(d){var c=d.data("events"),e=true;if(c!==undefined&&c.submit!==undefined){b.each(c.submit,function(f,g){if(typeof g.handler==="function"){return e=g.handler(g.data)}})}return e}};if("ajaxPrefilter" in b){b.ajaxPrefilter(function(c,e,d){a.CSRFProtection(d)})}else{b(document).ajaxSend(function(c,d){a.CSRFProtection(d)})}b(a.linkClickSelector).live("click.rails",function(d){var c=b(this);if(!a.allowAction(c)){return a.stopEverything(d)}if(c.data("remote")!==undefined){a.handleRemote(c);return false}else{if(c.data("method")){a.handleMethod(c);return false}}});b(a.formSubmitSelector).live("submit.rails",function(h){var f=b(this),g=f.data("remote")!==undefined,d=a.blankInputs(f,a.requiredInputSelector),c=a.nonBlankInputs(f,a.fileInputSelector);if(!a.allowAction(f)){return a.stopEverything(h)}if(d&&a.fire(f,"ajax:aborted:required",[d])){return a.stopEverything(h)}if(g){if(c){return a.fire(f,"ajax:aborted:file",[c])}if(!b.support.submitBubbles&&a.callFormSubmitBindings(f)===false){return a.stopEverything(h)}a.handleRemote(f);return false}else{setTimeout(function(){a.disableFormElements(f)},13)}});b(a.formInputClickSelector).live("click.rails",function(e){var d=b(this);if(!a.allowAction(d)){return a.stopEverything(e)}var c=d.attr("name"),f=c?{name:c,value:d.val()}:null;d.closest("form").data("ujs:submit-button",f)});b(a.formSubmitSelector).live("ajax:beforeSend.rails",function(c){if(this==c.target){a.disableFormElements(b(this))}});b(a.formSubmitSelector).live("ajax:complete.rails",function(c){if(this==c.target){a.enableFormElements(b(this))}})})(jQuery);