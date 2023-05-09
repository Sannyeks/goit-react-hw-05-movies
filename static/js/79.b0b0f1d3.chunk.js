"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[79],{79:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i,o,a,c,l,s,d,p=t(439),h=t(791),u=t(689),x=t(596),g=(t(462),t(820)),f=t(547),v=t(168),b=t(924),m=b.ZP.section(r||(r=(0,v.Z)(["\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-bottom: 3px double grey;\n"]))),j=b.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  @media screen and (min-width: 1200px) {\n    flex-direction: row;\n  }\n"]))),w=b.ZP.ul(o||(o=(0,v.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),k=t(184),Z=function(n){var e=n.original_title,t=n.overview,r=n.vote_average,i=n.genres,o=n.backdrop_path,a=o?"https://image.tmdb.org/t/p/w500/"+o:"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";return(0,k.jsx)(m,{children:(0,k.jsxs)(j,{children:[(0,k.jsx)("img",{src:a,alt:e}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{children:e}),(0,k.jsx)("h3",{children:"Rating"}),(0,k.jsx)("p",{children:r}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:t}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)(w,{children:i&&i.map((function(n){var e=n.name;return(0,k.jsx)("li",{children:e},e)}))})]})]})})},_=t(87),y=b.ZP.button(a||(a=(0,v.Z)(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 2px solid #3b5998;\n  &:hover {\n    cursor: pointer;\n    background-color: #3b5998;\n    font-weight: 500;\n  }\n  &.active {\n    background-color: #3b5998;\n    font-weight: 500;\n    color: black;\n  }\n"]))),P=b.ZP.div(c||(c=(0,v.Z)(["\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-bottom: 3px double grey;\n"]))),S=b.ZP.h3(l||(l=(0,v.Z)(["\n  margin-bottom: 20px;\n"]))),C=b.ZP.ul(s||(s=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),O=(0,b.ZP)(_.OL)(d||(d=(0,v.Z)(["\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 90px;\n  height: 40px;\n  background-color: transparent;\n  border: 3px solid #3b5998;\n  &:hover {\n    cursor: pointer;\n    background-color: #3b5998;\n    font-weight: 500;\n  }\n  &.active {\n    background-color: #3b5998;\n    font-weight: 500;\n    color: black;\n  }\n"]))),A=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}],R=function(){var n=(0,h.useState)({}),e=(0,p.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(!1),o=(0,p.Z)(i,2),a=o[0],c=o[1],l=(0,u.UO)().movieId,s=(0,u.TH)(),d=(0,u.s0)();if((0,h.useEffect)((function(){c(!0),fetch("https://api.themoviedb.org/3/movie/".concat(l,"?api_key=a1248d45d2e1e834899a3a4a26a86367&language=en-US")).then((function(n){return n.json()})).then((function(n){r(n)})).catch((function(){x.Am.error("Something went wrong")})).finally((function(){return c(!1)}))}),[l]),a)return(0,k.jsx)(f.Z,{});var v=t.original_title,b=t.overview,m=t.vote_average,j=t.genres,w=t.backdrop_path;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(y,{onClick:function(){var n,e;return d(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:(0,k.jsx)(g.kyg,{size:"20"})}),(0,k.jsx)(Z,{original_title:v,overview:b,vote_average:m,genres:j,backdrop_path:w}),(0,k.jsxs)(P,{children:[(0,k.jsx)(S,{children:"Aditional information"}),(0,k.jsx)(C,{children:A.map((function(n){var e=n.href,t=n.text;return(0,k.jsx)("li",{children:(0,k.jsx)(O,{to:e,state:s.state,children:t})},e)}))})]}),(0,k.jsx)(h.Suspense,{fallback:null,children:(0,k.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=79.b0b0f1d3.chunk.js.map