/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!function(n,e,s){function o(n,e){return typeof n===e}var a=[],t=[],i={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout((function(){e(s[n])}),0)},addTest:function(n,e,s){t.push({name:n,fn:e,options:s})},addAsyncTest:function(n){t.push({name:null,fn:n})}},l=function(){};l.prototype=i,l=new l;var f=e.documentElement,r="svg"===f.nodeName.toLowerCase();(function(){var n,e,s,i,f,r;for(var c in t)if(t.hasOwnProperty(c)){if(n=[],(e=t[c]).name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(i=o(e.fn,"function")?e.fn():e.fn,f=0;f<n.length;f++)1===(r=n[f].split(".")).length?l[r[0]]=i:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=i),a.push((i?"":"no-")+r.join("-"))}})(),function(n){var e=f.className,s=l._config.classPrefix||"";if(r&&(e=e.baseVal),l._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}l._config.enableClasses&&(e+=" "+s+n.join(" "+s),r?f.className.baseVal=e:f.className=e)}(a),delete i.addTest,delete i.addAsyncTest;for(var c=0;c<l._q.length;c++)l._q[c]();n.Modernizr=l}(window,document);
//# sourceMappingURL=index.6ccd2405.js.map