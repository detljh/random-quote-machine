(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{22:function(e,t,o){e.exports=o(39)},27:function(e,t,o){},28:function(e,t,o){},29:function(e,t,o){},37:function(e){e.exports=JSON.parse('[{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"Be yourself; everyone else is already taken.","author":"Oscar Wilde"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"So many books, so little time.","author":"Frank Zappa"},{"quote":"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.","author":"Bernard M. Baruch"},{"quote":"You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.","author":"Dr. Seuss"},{"quote":"You only live once, but if you do it right, once is enough.","author":"Mae West"},{"quote":"Be the change that you wish to see in the world.","author":"Mahatma Gandhi"},{"quote":"In three words I can sum up everything I\'ve learned about life: it goes on.","author":"Robert Frost"}]')},38:function(e,t,o){},39:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(4),u=o.n(r),i=(o(27),o(6)),h=o(7),c=o(10),l=o(8),s=o(11),m=(o(28),o(29),o(12)),d=o(19),f=o(15),b=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(s.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{class:"container-fluid ".concat(this.props.theme)},n.a.createElement("div",{class:"row"},n.a.createElement("div",{id:"quote-box",className:"card mx-auto"},n.a.createElement("div",{className:"card-body"},n.a.createElement("blockquote",{className:"blockquote"},n.a.createElement("p",{id:"quote",className:"text-center col-xs-10"},n.a.createElement(m.a,{icon:f.a,id:"quote-left",className:"quote-icon"}),this.props.quote,n.a.createElement(m.a,{icon:f.b,id:"quote-right",className:"quote-icon"})),n.a.createElement("br",null),n.a.createElement("footer",{id:"author",className:"blockquote-footer text-right"},this.props.author)),n.a.createElement("div",{id:"quote-box-footer"},n.a.createElement("a",{href:"www.twitter.com/intent/tweet",id:"tweet-quote"},n.a.createElement(m.a,{icon:d.a})),n.a.createElement("button",{id:"new-quote",onClick:this.props.requestNewQuote},"New quote"))))))}}]),t}(n.a.Component),q=o(9),y="NEW_QUOTE",p=["lime-theme","red-theme","cyan-theme","purple-theme","yellow-theme","green-theme","royal-blue-theme","pink-theme","orange-theme","dark-pink-theme","forest-green-theme","crimson-theme","dark-violet-theme"],v=o(37),w=Math.floor(Math.random()*v.length),g=Math.floor(Math.random()*p.length),k={data:v,quoteIndex:w,quote:v[w],themes:p,themeIndex:g,theme:p[g]},E=function(e,t,o,a){return{type:y,quote:e,quoteIndex:t,theme:o,themeIndex:a}},x=function(){return function(e,t){var o=t().home,a=Math.floor(Math.random()*(o.data.length-1));a>=o.quoteIndex&&a++;var n=o.data[a],r=Math.floor(Math.random()*(o.themes.length-1));r>=o.themeIndex&&r++;var u=o.themes[r];e(E(n,a,u,r))}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object.assign({},e,{quote:t.quote,quoteIndex:t.quoteIndex,themeIndex:t.themeIndex,theme:t.theme});default:return e}},O=Object(q.b)((function(e){return{quote:e.home.quote.quote,author:e.home.quote.author,theme:e.home.theme}}),(function(e){return{requestNewQuote:function(){e(x())}}}))(b),j=(o(38),function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(s.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(O,null))}}]),t}(n.a.Component)),M=o(3),N=o(21),B=Object(M.c)({home:I}),W=Object(M.d)(B,Object(M.a)(N.a));u.a.render(n.a.createElement(q.a,{store:W},n.a.createElement(j,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.82d2488b.chunk.js.map