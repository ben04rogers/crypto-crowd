(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{156:function(e,t,c){},157:function(e,t,c){},181:function(e,t,c){},588:function(e,t,c){},589:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(60),i=c.n(n),r=(c(156),c(20)),l=c(14),o=(c(157),c.p,c(0));var d=function(){var e=Object(l.g)().pathname;return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-white custom-box-shadow p-0",children:Object(o.jsxs)("div",{className:"container nav-inner-container",children:[Object(o.jsx)(r.b,{to:"/",className:"d-flex align-items-center text-decoration-none",children:Object(o.jsxs)("h3",{class:"fw-bold m-0",children:[Object(o.jsx)("span",{class:"text-black",children:"Crypto"}),"Crowd"]})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0 nav-links h-100",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/",className:"nav-link px-3 h-100 d-flex align-items-center ".concat("/"===e?"bg-primary text-white":""),children:"Home"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)(r.b,{to:"/about",className:"nav-link px-3 h-100 d-flex align-items-center ".concat("/about"===e?"bg-primary text-white":""),children:"About"})})]})})]})})},j=c(21),b=c(61),h=c.n(b),m=c(591),x=c(593),p=c(592),u=c(37),O=c.p+"static/media/home-header.ad703c54.svg",g=(c(181),function(e){var t=e.name,c=e.image,s=e.symbol,a=e.price,n=e.volume,i=e.priceChange,r=e.marketCap,d=e.background,j=Object(l.f)();return Object(o.jsxs)("tr",{className:"".concat(d," border-bottom"),children:[Object(o.jsx)("td",{children:Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("img",{className:"coin-icon",src:c,alt:"crypto"}),Object(o.jsx)("p",{children:t})]})}),Object(o.jsx)("td",{className:"text-uppercase",children:s}),Object(o.jsxs)("td",{children:["$",a.toLocaleString()]}),Object(o.jsxs)("td",{children:["$",n.toLocaleString()]}),Object(o.jsx)("td",{children:i<0?Object(o.jsx)("div",{className:"d-flex",children:Object(o.jsxs)("p",{className:"fw-bold px-2 py-1 bg-dark-red text-light-red rounded",children:[i.toFixed(2),"%"]})}):Object(o.jsx)("div",{className:"d-flex",children:Object(o.jsxs)("p",{className:"fw-bold px-2 py-1 bg-dark-green text-light-green rounded",children:[i.toFixed(2),"%"]})})}),Object(o.jsxs)("td",{children:["$",r.toLocaleString()]}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(e){return j.push({pathname:"/twitter",search:"?coin=".concat(t),state:{data:[t,s]}})},children:"Sentiment"})})]})}),f=c(143),v=c.n(f);var N=function(){var e=Object(s.useState)(!0),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(j.a)(n,2),l=i[0],d=i[1],b=Object(s.useState)([]),f=Object(j.a)(b,2),N=f[0],y=f[1];Object(s.useEffect)((function(){h.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){y(e.data),a(!1)})).catch((function(e){return console.log(e)}))}),[]);var w=N.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"particles-container",children:[Object(o.jsx)(v.a,{className:"bg-light particles-bg",params:{particles:{number:{value:12,density:{enable:!0,value_area:800}},line_linked:{enable:!1},move:{speed:1,out_mode:"out"},shape:{type:["image"],image:[{src:"https://assets.stickpng.com/images/5a521fa72f93c7a8d5137fcf.png",height:19,width:19},{src:"https://cryptologos.cc/logos/cardano-ada-logo.png",height:17,width:17},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",height:18,width:18},{src:"https://cryptologos.cc/logos/chainlink-link-logo.png",height:15,width:15},{src:"https://cryptologos.cc/logos/polkadot-new-dot-logo.png",height:14,width:14},{src:"https://assets.stickpng.com/thumbs/5a521f522f93c7a8d5137fc7.png",height:12,width:12},{src:"https://cryptologos.cc/logos/tether-usdt-logo.png",height:13,width:13},{src:"https://logo.uniswap.org/",height:15,width:15}]},color:{value:"#CCC"},size:{value:30,random:!1,anim:{enable:!0,speed:4,size_min:10,sync:!1}}},retina_detect:!1}}),Object(o.jsx)(m.a,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row align-items-center py-5",children:[Object(o.jsxs)("div",{className:"col-md-6 text-md-left jumbotron-contents",children:[Object(o.jsxs)("h1",{className:"jumbotron-heading fw-bold",children:["Twitter Sentiment Analysis for ",Object(o.jsx)("span",{className:"text-primary",children:"Cryptocurrencies"})]}),Object(o.jsx)("p",{className:"lead my-3 hero-text",children:"See what people are tweeting about cryptocurrencies online to optimise your investing."}),Object(o.jsx)(x.a,{className:"btn-rounded my-2",color:"primary",children:Object(o.jsxs)(r.b,{to:"about",className:"text-white text-decoration-none",children:["Learn More",Object(o.jsx)("i",{class:"fas fa-arrow-right"})]})})]}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("img",{className:"img-fluid",src:O,alt:"Cyptocurrency graphic"})})]})})})]}),Object(o.jsxs)("div",{className:"container custom-box-shadow p-3 my-5",children:[Object(o.jsxs)("div",{className:"coin-search mb-3 d-flex align-items-center",children:[Object(o.jsx)("form",{className:"d-flex justify-content-start",children:Object(o.jsx)("input",{type:"text",className:"p-2 rounded border",name:"search",placeholder:"Search..",onChange:function(e){d(e.target.value)}})}),0===w.length&&!1===c?Object(o.jsxs)(p.a,{className:"my-0 mx-3 p-2",color:"danger",children:['No coin matching "',l,'"']}):null]}),!1===c?Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Coin"}),Object(o.jsx)("th",{scope:"col",children:"Symbol"}),Object(o.jsx)("th",{scope:"col",children:"Buy"}),Object(o.jsx)("th",{scope:"col",children:"Volume"}),Object(o.jsx)("th",{scope:"col",children:"Price Change"}),Object(o.jsx)("th",{scope:"col",children:"Market Cap"}),Object(o.jsx)("th",{scope:"col"})]})}),Object(o.jsx)("tbody",{children:w.map((function(e,t){var c="bg-white";return t%2===1&&(c="bg-light"),Object(o.jsx)(g,{name:e.name,image:e.image,symbol:e.symbol,price:e.current_price,volume:e.total_volume,lastUpdated:e.last_updated,priceChange:e.price_change_percentage_24h,marketCap:e.market_cap,background:c},e.id)}))})]}):Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(u.ScaleLoader,{color:"#0d6efd"})})]})]})};var y=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"custom-box-shadow my-5 p-4 rounded",children:[Object(o.jsxs)("div",{className:"question my-2",children:[Object(o.jsx)("h3",{children:"What is Sentiment Analysis"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Sentiment analysis (or opinion mining) uses NLP to determine whether data is positive, negative or neutral. We use sentiment analysis on cryptocurrency related tweets to help people make better investment decisions."}),Object(o.jsx)("li",{className:"my-2",children:"AFINN is a list of words rated for valence with an integer between minus five (negative) and plus five (positive). Sentiment analysis is performed by cross-checking the string tokens (words, emojis) with the AFINN list and getting their respective scores."}),Object(o.jsx)("li",{children:"While the accuracy provided by AFINN is quite good considering it's computational performance there is always room for improvement."})]})]}),Object(o.jsxs)("div",{className:"question my-4",children:[Object(o.jsx)("h3",{children:"Technologies"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://developer.twitter.com/en/docs/twitter-api",target:"_blank",rel:"noreferrer",className:"text-decoration-none",children:"Twitter API"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/thisandagain/sentiment",target:"_blank",rel:"noreferrer",className:"text-decoration-none",children:"Sentiment Node.js module"})})]})]}),Object(o.jsxs)("div",{className:"question my-4",children:[Object(o.jsx)("h3",{children:"Interpreting Sentiment Analysis"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["If the score is ",Object(o.jsx)("span",{className:"fw-bold",children:"greater than"})," 1.0 then the sentiment is positive"]}),Object(o.jsxs)("li",{children:["If the score is ",Object(o.jsx)("span",{className:"fw-bold",children:"less than"})," 1.0 then the sentiment is negative"]}),Object(o.jsxs)("li",{children:["If the score is ",Object(o.jsx)("span",{className:"fw-bold",children:"equal to"})," 1.0 then the sentiment is neutral"]})]})]})]})})};function w(e,t){var c=Object(s.useState)(!0),a=Object(j.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)([]),l=Object(j.a)(r,2),o=l[0],d=l[1],b=Object(s.useState)(null),m=Object(j.a)(b,2),x=m[0],p=m[1];return Object(s.useEffect)((function(){"twitter"===e&&function(e){return h()("/sentiment/twitter/".concat(e)).then((function(e){return e}))}(t).then((function(e){d(e),i(!1)})).catch((function(e){p(e),i(!1)}))}),[e]),{loading:n,data:o,error:x}}var k=c(144),S=c.n(k),_=c(146),C=c.n(_),L=c(151);var T=function(e){var t=Object(s.useState)({}),c=Object(j.a)(t,2),a=c[0],n=c[1];Object(s.useEffect)((function(){var t=[];t.push(e.distributionData.positive),t.push(e.distributionData.negative),t.push(e.distributionData.neutral),n(t)}),[e.distributionData]);var i={labels:[" Positive"," Negative"," Neutral"],datasets:[{data:a,backgroundColor:["#36A2EB","#FF6384","#FDDA83"],hoverOffset:4}],borderColor:"#fff"};return Object(o.jsx)("div",{className:"chart container my-5",children:Object(o.jsx)(L.a,{data:i,width:3,height:3,options:{legend:{display:!1},title:{display:!0,text:"A\xe7\u0131lan Sand\u0131k"}}})})},A=c(149),D=c.n(A),F=c(150),E=c.n(F);var I=function(){var e,t,c,a,n=Object(l.f)(),i=Object(l.g)(),d=new URLSearchParams(Object(l.g)().search).get("coin"),b=w("twitter",d),h=b.loading,m=b.data,x=b.error,p=Object(s.useState)(0),O=Object(j.a)(p,2),g=O[0],f=O[1],v=20*g,N=Object(s.useState)(0),y=Object(j.a)(N,2),k=y[0],_=y[1];Object(s.useEffect)((function(){var e;h||_(Math.ceil((null===(e=m.data)||void 0===e?void 0:e.posts.length)/20))}),[h,m]);var L,A=null===(e=m.data)||void 0===e?void 0:e.posts.slice(v,v+20).map((function(e,t){return Object(o.jsxs)("div",{className:"border rounded my-4 p-3 d-flex",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center flex-column justify-content-center twitter-img-container",children:[Object(o.jsx)("img",{src:e.user_profile_img,alt:"twitter profile",className:"twitter-image"}),Object(o.jsx)("p",{className:"fw-bold text-center mt-2",children:e.user})]}),Object(o.jsxs)("div",{class:"twitter-info-container",children:[Object(o.jsx)("h5",{className:"my-2",children:Object(o.jsx)("a",{className:"text-decoration-none ".concat(e.tweet_url?"":"text-black link-disabled"),href:e.tweet_url?e.tweet_url:"#",target:"_blank",rel:"noreferrer",children:e.tweet_text})}),Object(o.jsxs)("p",{className:"text-capitalize my-2",children:[Object(o.jsx)("b",{children:"Posted:"})," ",Object(o.jsx)("span",{className:"mx-1",children:Object(o.jsx)(D.a,{fromNow:!0,children:new Date(Date.parse(e.created_at.replace(/( \+)/," UTC$1")))})})]}),e.sentiment_data.score>0?Object(o.jsxs)("p",{className:"text-capitalize my-2",children:[Object(o.jsx)("b",{children:"Type:"})," ",Object(o.jsx)("span",{className:"text-success mx-1",children:"Positive"}),"\ud83d\ude0a"]}):e.sentiment_data.score<0?Object(o.jsxs)("p",{className:"text-capitalize my-2",children:[Object(o.jsx)("b",{children:"Type:"})," ",Object(o.jsx)("span",{className:"text-danger mx-1",children:"Negative"}),"\u2639\ufe0f"]}):Object(o.jsxs)("p",{className:"text-capitalize my-2",children:[Object(o.jsx)("b",{children:"Type:"})," ",Object(o.jsx)("span",{className:"text-muted mx-1",children:"Neutral"}),"\ud83d\ude10"]}),Object(o.jsxs)("p",{className:"text-capitalize my-2",children:[Object(o.jsx)("b",{children:"Score:"})," ",e.sentiment_data.score]}),Object(o.jsxs)("p",{className:"my-2",children:[Object(o.jsx)("b",{children:"Comparative Score:"})," ",e.sentiment_data.comparative]}),e.sentiment_data.words.length>0?Object(o.jsxs)("p",{className:"my-2",children:[Object(o.jsx)("b",{children:"Keywords: "}),e.sentiment_data.words.map((function(e,t){return Object(o.jsx)("span",{className:"mx-1 py-2 px-3 rounded bg-light",children:e},t)}))]}):null]})]},t)}));return h||null===(L=m.data)||void 0===L||L.posts.sort((function(e,t){return new Date(Date.parse(e.created_at.replace(/( \+)/," UTC$1")))<new Date(Date.parse(t.created_at.replace(/( \+)/," UTC$1")))?1:-1})),Object(o.jsx)("div",{className:"container my-5",children:null===x?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(o.jsxs)("h1",{children:[d," ",Object(o.jsxs)("span",{className:"text-uppercase text-muted",children:["(",i.state.data[1],")"]})]})}),Object(o.jsxs)("div",{className:"row mt-3 mb-5 d-flex justify-content-between",children:[Object(o.jsxs)("div",{className:"col-3 border py-3 text-center rounded",children:[Object(o.jsx)("p",{className:"fw-bold",children:"Sentiment"}),Object(o.jsx)("div",{className:"h-75 d-flex justify-content-center align-items-center",children:!0===h?Object(o.jsx)(u.ScaleLoader,{color:"#0d6efd"}):Object(o.jsx)(T,{distributionData:null===(t=m.data)||void 0===t?void 0:t.averages.all_scores})})]}),Object(o.jsxs)("div",{className:"col-3 border py-3 text-center rounded",children:[Object(o.jsxs)("p",{className:"fw-bold",children:["Average Score"," ",Object(o.jsx)(r.b,{to:"/about",children:Object(o.jsx)("i",{className:"fas fa-info-circle"})})]}),Object(o.jsx)("div",{className:"h-75 d-flex justify-content-center align-items-center",children:!0===h?Object(o.jsx)(u.ScaleLoader,{color:"#0d6efd"}):Object(o.jsx)("h3",{className:"text-muted",children:null===(c=m.data)||void 0===c?void 0:c.averages.average_score.toFixed(3)})})]}),Object(o.jsxs)("div",{className:"col-3 border py-3 text-center rounded data-summary",children:[Object(o.jsx)("p",{className:"fw-bold p-0 m-0",children:"Keywords"}),!0===h?Object(o.jsx)(u.ScaleLoader,{color:"#0d6efd"}):Object(o.jsx)(S.a,{style:{fontFamily:"sans-serif",fontWeight:"bold",fontStyle:"italic",color:function(){return C()()},padding:5,width:"100%",height:"100%"},children:null===(a=m.data)||void 0===a?void 0:a.averages.keywords.map((function(e,t){return Object(o.jsx)("div",{style:{fontSize:Math.floor(20*Math.random())+5},children:e},t)}))})]})]}),Object(o.jsx)("div",{className:"post-container",children:Object(o.jsx)(o.Fragment,{children:h?Object(o.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(o.jsx)(u.ScaleLoader,{color:"#0d6efd"}),Object(o.jsx)("h5",{className:"my-3",children:"Loading Twitter data..."})]}):Object(o.jsxs)("div",{className:"reddit-posts",children:[Object(o.jsx)("div",{className:"d-flex justify-content-between",children:Object(o.jsxs)("h3",{children:[Object(o.jsx)("i",{className:"fab fa-twitter text-primary"}),Object(o.jsxs)("span",{class:"mx-2",children:["Top Twitter posts about ",d]})]})}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsxs)("p",{className:"my-3 fst-italic",children:["Showing ",20," of "," ",Object(o.jsx)("span",{className:"px-2 mx-1 bg-primary text-white rounded",children:m.data.posts.length})," ","results:"]}),Object(o.jsxs)("p",{className:"d-flex align-items-center justify-content-center fst-italic",children:["Page: ",g+1]})]}),A,Object(o.jsx)(E.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:k,onPageChange:function(e){var t=e.selected;f(t)},containerClassName:"paginate-btns",previousLinkClassName:"previous-btn",nextLinkClassName:"next-btn",disabledClassName:"paginate-disabled",activeClassName:"paginate-active"})]})})})]}):n.push("/503error")})};var P=function(){return Object(o.jsx)("footer",{className:"bg-light py-3 border-top",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("p",{className:"my-0",children:[Object(o.jsx)("span",{class:"mx-1",children:"Home"})," | ",Object(o.jsx)("span",{class:"mx-1",children:"About"})]})})})},z=(c(588),c.p+"static/media/server-error.b07144f7.svg");var M=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row align-items-center my-5",children:[Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("h2",{children:"Internal Server Error"}),Object(o.jsx)("p",{className:"my-2",children:"There was a problem loading the data"}),Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)(x.a,{color:"primary",className:"my-2",children:"Back to Home"})})]}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("img",{className:"img-fluid",src:z,alt:"pagenotfound"})})]})})},$=c.p+"static/media/pagenotfound.9ba286cb.svg";var q=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row align-items-center my-5",children:[Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("h2",{children:"Oh No! Error 404."}),Object(o.jsx)("p",{className:"my-2",children:"The page your looking for could not be found"}),Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)(x.a,{className:"btn-rounded my-2",color:"primary",children:"Back to Home"})})]}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("img",{className:"img-fluid",src:$,alt:"pagenotfound"})})]})})};var B=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",exact:!0,component:N}),Object(o.jsx)(l.a,{path:"/about",component:y}),Object(o.jsx)(l.a,{path:"/twitter",component:I}),Object(o.jsx)(l.a,{path:"/503error",component:M}),Object(o.jsx)(l.a,{component:q})]}),Object(o.jsx)(P,{})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root"))}},[[589,1,2]]]);
//# sourceMappingURL=main.ca82b7dd.chunk.js.map