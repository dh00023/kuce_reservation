!function(){var e={},t=function(t){for(var n=e[t],r=n.deps,o=n.defn,a=r.length,s=new Array(a),l=0;l<a;++l)s[l]=i(r[l]);var c=o.apply(null,s);if(void 0===c)throw"module ["+t+"] returned undefined";n.instance=c},n=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===i)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:void 0}},i=function(n){var i=e[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&t(n),i.instance},r=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;++o)r.push(i(e[o]));t.apply(null,t)},o={};o.bolt={module:{api:{define:n,require:r,demand:i}}};var a=n,s=function(e,t){a(e,[],function(){return t})};s("1",tinymce.ThemeManager),s("2",tinymce.util.Delay),s("c",tinymce.util.Tools),s("d",tinymce.ui.Factory),s("e",tinymce.DOM),a("j",[],function(){var e=function(e){return function(t){return typeof t===e}},t=function(e){return Array.isArray(e)},n=function(e){return null===e},i=function(e){return function(i){return!n(i)&&!t(i)&&e(i)}};return{isString:e("string"),isNumber:e("number"),isBoolean:e("boolean"),isFunction:e("function"),isObject:i(e("object")),isNull:n,isArray:t}}),a("f",["c","d","j"],function(e,t,n){var i=function(e,t){var n=function(e,t){return{selector:e,handler:t}},i=function(e){t.active(e)},r=function(e){t.disabled(e)};return t.settings.stateSelector?n(t.settings.stateSelector,i):t.settings.disabledStateSelector?n(t.settings.disabledStateSelector,r):null},r=function(e,t,n){return function(){var r=i(t,n);null!==r&&e.selection.selectorChanged(r.selector,r.handler)}},o=function(e){return n.isArray(e)?e:n.isString(e)?e.split(/[ ,]/):[]},a=function(n,i,a){var s,l=[];if(a)return e.each(o(a),function(e){var i;"|"==e?s=null:t.has(e)?(e={type:e},l.push(e),s=null):n.buttons[e]&&(s||(s={type:"buttongroup",items:[]},l.push(s)),i=e,e=n.buttons[i],"function"==typeof e&&(e=e()),e.type=e.type||"button",e=t.create(e),e.on("postRender",r(n,i,e)),s.items.push(e))}),t.create({type:"toolbar",layout:"flow",name:i,items:l})};return{create:a}}),s("o",tinymce.util.Promise),a("p",[],function(){var e=0,t=function(){var e=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+e()+e()+e()},n=function(n){return n+e++ +t()};return{uuid:n}}),a("u",[],function(){var e=function(e,t){function n(n){var r,o,a;o=t[n?"startContainer":"endContainer"],a=t[n?"startOffset":"endOffset"],1==o.nodeType&&(r=e.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(a=Math.min(a,o.childNodes.length-1),n?o.insertBefore(r,o.childNodes[a]):e.insertAfter(r,o.childNodes[a])):o.appendChild(r),o=r,a=0),i[n?"startContainer":"endContainer"]=o,i[n?"startOffset":"endOffset"]=a}var i={};return n(!0),t.collapsed||n(),i},t=function(e,t){function n(n){function i(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t==e)return n;1==t.nodeType&&"bookmark"==t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1}var r,o,a;r=a=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],r&&(1==r.nodeType&&(o=i(r),r=r.parentNode,e.remove(a)),t[n?"startContainer":"endContainer"]=r,t[n?"startOffset":"endOffset"]=o)}n(!0),n();var i=e.createRng();return i.setStart(t.startContainer,t.startOffset),t.endContainer&&i.setEnd(t.endContainer,t.endOffset),i};return{create:e,resolve:t}}),s("v",tinymce.dom.TreeWalker),s("w",tinymce.dom.RangeUtils),a("q",["u","c","v","w"],function(e,t,n,i){var r=function(e,t,i){var r,o,a=[];for(r=new n(t,e),o=t;o&&(1===o.nodeType&&a.push(o),o!==i);o=r.next());return a},o=function(n,i){var r,o,a;o=n.dom,a=n.selection,r=e.create(o,a.getRng()),t.each(i,function(e){n.dom.remove(e,!0)}),a.setRng(e.resolve(o,r))},a=function(e){return"A"===e.nodeName&&e.hasAttribute("href")},s=function(e,t){var n=e.getParent(t,a);return n?n:t},l=function(e){var n,o,l,c,u,d,f;return u=e.selection,d=e.dom,f=u.getRng(),n=s(d,i.getNode(f.startContainer,f.startOffset)),o=i.getNode(f.endContainer,f.endOffset),l=e.getBody(),c=t.grep(r(l,n,o),a)},c=function(e){o(e,l(e))};return{unlinkSelection:c}}),a("m",["p","q"],function(e,t){var n=function(e,t){var n,i,r;for(r='<table data-mce-id="mce" style="width: 100%">',r+="<tbody>",i=0;i<t;i++){for(r+="<tr>",n=0;n<e;n++)r+="<td><br></td>";r+="</tr>"}return r+="</tbody>",r+="</table>"},i=function(e){var t=e.dom.select("*[data-mce-id]");return t[0]},r=function(e,t,r){e.undoManager.transact(function(){var o,a;e.insertContent(n(t,r)),o=i(e),o.removeAttribute("data-mce-id"),a=e.dom.select("td,th",o),e.selection.setCursorLocation(a[0],0)})},o=function(e,t){e.execCommand("FormatBlock",!1,t)},a=function(t,n,i){var r,o;r=t.editorUpload.blobCache,o=r.create(e.uuid("mceu"),i,n),r.add(o),t.insertContent(t.dom.createHTML("img",{src:o.blobUri()}))},s=function(e){e.selection.collapse(!1)},l=function(e){e.focus(),t.unlinkSelection(e),s(e)},c=function(e,t,n){e.focus(),e.dom.setAttrib(t,"href",n),s(e)},u=function(e,t){e.execCommand("mceInsertLink",!1,{href:t}),s(e)},d=function(e,t){var n=e.dom.getParent(e.selection.getStart(),"a[href]");n?c(e,n,t):u(e,t)},f=function(e,t){0===t.trim().length?l(e):d(e,t)};return{insertTable:r,formatBlock:o,insertBlob:a,createLink:f,unlink:l}}),a("r",[],function(){var e=function(e){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(e.trim())},t=function(e){return/^https?:\/\//.test(e.trim())};return{isDomainLike:e,isAbsolute:t}}),a("g",["c","d","o","m","r"],function(e,t,n,i,r){var o=function(e){e.find("textbox").eq(0).each(function(e){e.focus()})},a=function(n,i){var r=t.create(e.extend({type:"form",layout:"flex",direction:"row",padding:5,name:n,spacing:3},i));return r.on("show",function(){o(r)}),r},s=function(e,t){return t?e.show():e.hide()},l=function(e,t){return new n(function(n){e.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){var i=e===!0?"http://"+t:t;n(i)})})},c=function(e,t){return!r.isAbsolute(t)&&r.isDomainLike(t)?l(e,t):n.resolve(t)},u=function(e,t){var n={},r=function(){e.focus(),i.unlink(e),t()},o=function(e){var t=e.meta;t&&t.attach&&(n={href:this.value(),attach:t.attach})},l=function(t){if(t.control===this){var n,i="";n=e.dom.getParent(e.selection.getStart(),"a[href]"),n&&(i=e.dom.getAttrib(n,"href")),this.fromJSON({linkurl:i}),s(this.find("#unlink"),n),this.find("#linkurl")[0].focus()}};return a("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:r,tooltip:"Remove link"},{type:"filepicker",name:"linkurl",placeholder:"Paste or type a link",filetype:"file",onchange:o},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:l,onsubmit:function(r){c(e,r.data.linkurl).then(function(r){e.undoManager.transact(function(){r===n.href&&(n.attach(),n={}),i.createLink(e,r)}),t()})}})};return{createQuickLinkForm:u}}),s("s",tinymce.geom.Rect),a("t",[],function(){var e=function(e){return{x:e.left,y:e.top,w:e.width,h:e.height}},t=function(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}};return{fromClientRect:e,toClientRect:t}}),a("h",["e","s","t"],function(e,t,n){var i=function(t){var n=e.getViewPort();return{x:t.x+n.x,y:t.y+n.y,w:t.w,h:t.h}},r=function(e){var t=e.getBoundingClientRect();return i({x:t.left,y:t.top,w:Math.max(e.clientWidth,e.offsetWidth),h:Math.max(e.clientHeight,e.offsetHeight)})},o=function(e,t){return r(t)},a=function(e){return r(e.getElement().ownerDocument.body)},s=function(e){return r(e.getContentAreaContainer()||e.getBody())},l=function(e){var t=e.selection.getBoundingClientRect();return t?i(n.fromClientRect(t)):null};return{getElementRect:o,getPageAreaRect:a,getContentAreaRect:s,getSelectionRect:l}}),a("i",["s","t"],function(e,t){var n=function(e,t){return{rect:e,position:t}},i=function(e,t){return{x:t.x,y:t.y,w:e.w,h:e.h}},r=function(t,r,o,a,s){var l,c,u;return l=e.findBestRelativePosition(s,o,a,t),o=e.clamp(o,a),l?(c=e.relativePosition(s,o,l),u=i(s,c),n(u,l)):(o=e.intersect(a,o),o?(l=e.findBestRelativePosition(s,o,a,r))?(c=e.relativePosition(s,o,l),u=i(s,c),n(u,l)):(u=i(s,o),n(u,l)):null)},o=function(e,t,n){return r(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],e,t,n)},a=function(e,t,n){return r(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],e,t,n)},s=function(e,n,i,r){var o;return"function"==typeof e?(o=e({elementRect:t.toClientRect(n),contentAreaRect:t.toClientRect(i),panelRect:t.toClientRect(r)}),t.fromClientRect(o)):r},l=function(e){return e.panelRect};return{calcInsert:o,calc:a,userConstrain:s,defaultHandler:l}}),a("a",["j"],function(e){var t=function(e,t){if(t(e))return!0;throw new Error("Default value doesn't match requested type.")},n=function(e){return function(n,i,r){var o=n.settings;return t(r,e),i in o&&e(o[i])?o[i]:r}},i=function(e,t){return e.split(t).filter(function(e){return e.length>0})},r=function(t,n){var r=function(e){return"string"==typeof e?i(e,/[ ,]/):e},o=function(e,t){return e===!1?[]:t};return e.isArray(t)?t:e.isString(t)?r(t):e.isBoolean(t)?o(t,n):n},o=function(e){return function(n,i,o){var a=i in n.settings?n.settings[i]:o;return t(o,e),r(a,o)}};return{getStringOr:n(e.isString),getBoolOr:n(e.isBoolean),getNumberOr:n(e.isNumber),getHandlerOr:n(e.isFunction),getToolbarItemsOr:o(e.isArray)}}),a("3",["c","d","e","f","g","h","i","a"],function(e,t,n,i,r,o,a,s){return function(){var l,c,u=["bold","italic","|","quicklink","h2","h3","blockquote"],d=["quickimage","quicktable"],f=function(t,n){return e.map(n,function(e){return i.create(t,e.id,e.items)})},h=function(e){return s.getToolbarItemsOr(e,"selection_toolbar",u)},p=function(e){return s.getToolbarItemsOr(e,"insert_toolbar",d)},m=function(e){return e.items().length>0},g=function(n,o){var a=f(n,o).concat([i.create(n,"text",h(n)),i.create(n,"insert",p(n)),r.createQuickLinkForm(n,T)]);return t.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:e.grep(a,m),oncancel:function(){n.focus()}})},v=function(e){e&&e.show()},y=function(e,t){e.moveTo(t.x,t.y)},b=function(t,n){n=n?n.substr(0,2):"",e.each({t:"down",b:"up",c:"center"},function(e,i){t.classes.toggle("arrow-"+e,i===n.substr(0,1))}),"cr"===n?(t.classes.toggle("arrow-left",!0),t.classes.toggle("arrow-right",!1)):"cl"===n?(t.classes.toggle("arrow-left",!0),t.classes.toggle("arrow-right",!0)):e.each({l:"left",r:"right"},function(e,i){t.classes.toggle("arrow-"+e,i===n.substr(1,1))})},w=function(e,t){var n=e.items().filter("#"+t);return n.length>0&&(n[0].show(),e.reflow(),!0)},C=function(e,t,i,r){var l,u,d,f;return f=s.getHandlerOr(i,"inline_toolbar_position_handler",a.defaultHandler),l=o.getContentAreaRect(i),u=n.getRect(e.getEl()),d="insert"===t?a.calcInsert(r,l,u):a.calc(r,l,u),!!d&&(u=d.rect,c=r,y(e,a.userConstrain(f,r,l,u)),b(e,d.position),!0)},x=function(e,t,n,i){return v(e),e.items().hide(),w(e,t)?void(C(e,t,n,i)===!1&&T(e)):void T(e)},_=function(){return l.items().filter("form:visible").length>0},k=function(e,t){if(l){if(l.items().hide(),!w(l,t))return void T(l);var i,r,u,d;v(l),l.items().hide(),w(l,t),d=s.getHandlerOr(e,"inline_toolbar_position_handler",a.defaultHandler),i=o.getContentAreaRect(e),r=n.getRect(l.getEl()),u=a.calc(c,i,r),u&&(r=u.rect,y(l,a.userConstrain(d,c,i,r)),b(l,u.position))}},S=function(e,t,n,i){l||(l=g(e,i),l.renderTo(document.body).reflow().moveTo(n.x,n.y),e.nodeChanged()),x(l,t,e,n)},E=function(e,t,n){l&&C(l,t,e,n)},T=function(){l&&l.hide()},N=function(){l&&l.find("toolbar:visible").eq(0).each(function(e){e.focus(!0)})},D=function(){l&&(l.remove(),l=null)},R=function(){return l&&l.visible()&&_()};return{show:S,showForm:k,reposition:E,inForm:R,hide:T,focus:N,remove:D}}}),a("k",["o"],function(e){var t=function(t){return new e(function(e){var n=new FileReader;n.onloadend=function(){e(n.result.split(",")[1])},n.readAsDataURL(t)})};return{blobToBase64:t}}),a("l",["o"],function(e){var t=function(){return new e(function(e){var t;t=document.createElement("input"),t.type="file",t.style.position="fixed",t.style.left=0,t.style.top=0,t.style.opacity=.001,document.body.appendChild(t),t.onchange=function(t){e(Array.prototype.slice.call(t.target.files))},t.click(),t.parentNode.removeChild(t)})};return{pickFile:t}}),a("4",["3","k","l","m"],function(e,t,n,i){var r=function(e){for(var t=function(t){return function(){i.formatBlock(e,t)}},n=1;n<6;n++){var r="h"+n;e.addButton(r,{text:r.toUpperCase(),tooltip:"Heading "+n,stateSelector:r,onclick:t(r),onPostRender:function(){var e=this.getEl().firstChild.firstChild;e.style.fontWeight="bold"}})}},o=function(e,o){e.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){o.showForm(e,"quicklink")}}),e.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){n.pickFile().then(function(n){var r=n[0];t.blobToBase64(r).then(function(t){i.insertBlob(e,t,r)})})}}),e.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){o.hide(),i.insertTable(e,2,2)}}),r(e)};return{addToEditor:o}}),s("n",tinymce.EditorManager),a("5",["n","e"],function(e,t){var n=function(e,t){var n=function(){e._skinLoaded=!0,e.fire("SkinLoaded"),t()};e.initialized?n():e.on("init",n)},i=function(t){var n=e.baseURL+"/skins/";return t?n+t:n+"lightgray"},r=function(e,t){return e.documentBaseURI.toAbsolute(t)},o=function(e,o){var a=e.settings,s=a.skin_url?r(e,a.skin_url):i(a.skin),l=function(){n(e,o)};t.styleSheetLoader.load(s+"/skin.min.css",l),e.contentCSS.push(s+"/content.inline.min.css")};return{load:o}}),a("8",[],function(){var e=function(e,t){return{id:e,rect:t}},t=function(e,t){for(var n=0;n<t.length;n++){var i=t[n],r=i(e);if(r)return r}return null};return{match:t,result:e}}),a("6",["8","h"],function(e,t){var n=function(n){return function(i){return i.selection.isCollapsed()?null:e.result(n,t.getSelectionRect(i))}},i=function(n,i){return function(r){var o,a=r.schema.getTextBlockElements();for(o=0;o<n.length;o++)if("TABLE"===n[o].nodeName)return null;for(o=0;o<n.length;o++)if(n[o].nodeName in a)return r.dom.isEmpty(n[o])?e.result(i,t.getSelectionRect(r)):null;return null}};return{textSelection:n,emptyTextBlock:i}}),a("7",["8","h"],function(e,t){var n=function(n,i){return function(r){for(var o=0;o<i.length;o++)if(i[o].predicate(n))return e.result(i[o].id,t.getElementRect(r,n));return null}},i=function(n,i){return function(r){for(var o=0;o<n.length;o++)for(var a=0;a<i.length;a++)if(i[a].predicate(n[o]))return e.result(i[a].id,t.getElementRect(r,n[o]));return null}};return{element:n,parent:i}}),a("9",[],function(){var e=function(t){return t.reduce(function(t,n){return Array.isArray(n)?t.concat(e(n)):t.concat(n)},[])};return{flatten:e}}),a("b",["c"],function(e){var t=function(e,t){return{id:e,predicate:t}},n=function(n){return e.map(n,function(e){return t(e.id,e.predicate)})};return{create:t,fromContextToolbars:n}}),a("0",["1","2","3","4","5","6","7","8","9","a","b"],function(e,t,n,i,r,o,a,s,l,c,u){var d=function(e){var t=e.selection.getNode(),n=e.dom.getParents(t);return n},f=function(e,t,n,i){var r=function(n){return e.dom.is(n,t)};return{predicate:r,id:n,items:i}},h=function(e){var t=e.contextToolbars;return l.flatten([t?t:[],f(e,"img","image","alignleft aligncenter alignright")])},p=function(e,t){var n,i,r;return i=d(e),r=u.fromContextToolbars(t),n=s.match(e,[a.element(i[0],r),o.textSelection("text"),o.emptyTextBlock(i,"insert"),a.parent(i,r)]),n&&n.rect?n:null},m=function(e,t){var n=function(){var n=h(e),i=p(e,n);i?t.show(e,i.id,i.rect,n):t.hide()};return function(){e.removed||n()}},g=function(e,t){return function(){var n=h(e),i=p(e,n);i&&t.reposition(e,i.id,i.rect)}},v=function(e,t){return function(){e.inForm()||t()}},y=function(e,n){var i=t.throttle(m(e,n),0),r=t.throttle(v(n,m(e,n)),0);e.on("blur hide ObjectResizeStart",n.hide),e.on("click",i),e.on("nodeChange mouseup",r),e.on("ResizeEditor keyup",i),e.on("ResizeWindow",g(e,n)),e.on("remove",n.remove),e.shortcuts.add("Alt+F10","",n.focus)},b=function(e,t){e.shortcuts.remove("meta+k"),e.shortcuts.add("meta+k","",function(){var n=h(e),i=i=s.match(e,[o.textSelection("quicklink")]);i&&t.show(e,i.id,i.rect,n)})},w=function(e,t){return r.load(e,function(){y(e,t),b(e,t)}),{}},C=function(e){throw new Error(e)};return e.add("inlite",function(e){var t=new n;i.addToEditor(e,t);var r=function(){return e.inline?w(e,t):C("inlite theme only supports inline mode.")};return{renderUI:r}}),function(){}}),i("0")()}();