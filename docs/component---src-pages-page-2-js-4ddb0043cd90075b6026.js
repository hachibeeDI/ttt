(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(135),o=n(142);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(134),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(136),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(29);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},136:function(e,t,n){var a;e.exports=(a=n(141))&&a.default||a},139:function(e){e.exports={data:{site:{siteMetadata:{title:"ホーム｜株式会社 AI-dea"}}}}},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(46),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},142:function(e,t,n){"use strict";var a=n(139),r=(n(143),n(140),n(0)),i=n.n(r),o=n(144),u=n.n(o),c=n(135),l=n(137),d=n.n(l),s=n(138),m=1280;function f(){var e=d()(["\n  color: var(--color-primary);\n  margin: 0;\n"]);return f=function(){return e},e}function p(){var e=d()(["\n  max-width: ","px;\n  padding: 16px;\n  margin: auto;\n"]);return p=function(){return e},e}function h(){var e=d()(["\n  width: 100%;\n  margin-bottom: 16px;\n"]);return h=function(){return e},e}var g=s.a.header(h()),v=s.a.div(p(),m),y=s.a.h1(f());function E(e){var t=e.title,n=e.children;return i.a.createElement(g,null,i.a.createElement(v,null,i.a.createElement(y,null,i.a.createElement(c.Link,{to:"/",style:{color:"inherit"}},t)),n))}function w(){var e=d()(["\n  margin: 0;\n"]);return w=function(){return e},e}function x(){var e=d()(["\n  max-width: ","px;\n  padding: 16px;\n  margin: auto;\n"]);return x=function(){return e},e}function b(){var e=d()(["\n  width: 100%;\n  margin-bottom: 16px;\n"]);return b=function(){return e},e}var q=s.a.footer(b()),k=s.a.div(x(),m),R=s.a.h3(w());function G(e){var t=e.title,n=e.children;return i.a.createElement(q,null,i.a.createElement(k,null,i.a.createElement(R,null,i.a.createElement(c.Link,{to:"/",style:{color:"inherit"}},t)),n))}n.d(t,"a",function(){return L});var I=[{name:"description",content:"AIの開発やコンサルティングを受け持つ株式会社AI-deaのホームページ。"},{name:"keywords",content:"AI,人工知能,機械学習,コンサルティング,教育"},{name:"viewport",content:"width=device-width,initial-scale=1"},{name:"format-detection",content:"telephone=no, email=no"}];function L(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"2994927498",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:I},i.a.createElement("html",{lang:"ja"})),i.a.createElement(E,{title:e.site.siteMetadata.title}),i.a.createElement("main",{style:{margin:"0 auto",maxWidth:m,paddingTop:0}},t),i.a.createElement(G,{title:e.site.siteMetadata.title}))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-4ddb0043cd90075b6026.js.map