(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return p}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),s=n.n(a),i=(n("yBnw"),o.a.createElement),c=function(t){var e=t.post;e.image.url;return i("div",null,i("div",{className:"uk-card uk-card-default"},i("div",{className:"uk-card-media-top"},i(s.a,{href:"/post/[id]",as:"/post/".concat(e.id)},i("a",null,i("img",{className:"img-card",src:"http://64.225.72.200".concat(e.image.url),alt:""})))),i("div",{className:"uk-card-body"},i(s.a,{href:"/post/[id]",as:"/post/".concat(e.id)},i("a",null,i("h3",{className:"uk-card-title"},e.title)))),i("div",{className:"uk-card-foot"},i("span",{className:"secondary-card-text"},"By:"," ",i("a",{className:"secondary-card-text blue-text",href:"#"},e.user.username)),i("a",{className:"secondary-card-text blue-text right",href:"#"},e.category.name))))},u=o.a.createElement,l=function(t){var e=t.posts;Math.ceil(e.length/5);return u("div",null,u("div",{className:"uk-grid uk-grid-match uk-child-width-1-3@s uk-flex-left","uk-grid":"true"},e.map((function(t,e){return u(c,{post:t,key:"post".concat(t.id)})}))))},f=o.a.createElement,p=!0;e.default=function(t){var e=t.posts;return f("div",null,f("div",{className:"uk-section home-container"},f("div",{className:"uk-container uk-container-large"},f("h2",{className:"home-title"},"\xdaltimos articulos"),f(l,{posts:e}),f("a",{href:"/articles",className:"uk-button btn-load-more"},"Ver todos"))))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),s=n("a1gu"),i=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var u=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=u(n("nOHt")),m=n("elyg");function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new Map,k=window.IntersectionObserver,w={};function N(){return f||(k?f=new k((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var b=function(t){a(n,t);var e=c(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var s=t(o,a);return e=o,n=a,r=s,s}}((function(t,e){return{href:(0,m.addBasePath)(y(t)),as:e?(0,m.addBasePath)(y(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),s=a.href,i=a.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),i=i?(0,h.resolve)(c,i):s,t.preventDefault();var u=o.props.scroll;null==u&&(u=i.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](s,i,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&k&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=N();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var a=p.Children.only(e),s={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=o||r),p.default.cloneElement(a,s)}}]),n}(p.Component);e.default=b},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);