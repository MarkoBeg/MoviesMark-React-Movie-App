(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{56:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},68:function(e,t,i){},69:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){},79:function(e,t,i){"use strict";i.r(t);var n=i(2),o=i.n(n),a=i(30),c=i.n(a),s=(i(56),i(57),i(13)),r=i(48),l=i.n(r),d=(i(58),i(91)),v=i(19),u=i(36),j=Object(u.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),b=j.actions,p=b.login,m=b.logout,h=function(e){return e.user.user},g=j.reducer,f=i(3);function O(e){var t=e.displayBtns,i=Object(n.useState)(!1),o=Object(s.a)(i,2),a=o[0],c=o[1],r=Object(v.c)(h),u=Object(v.b)(),j=function(){window.scrollY>60?c(!0):c(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",j),function(){window.removeEventListener("scroll",j)}}),[]),Object(f.jsxs)("div",{className:a?"home-nav-section":"home-nav-scroll",children:[Object(f.jsx)("div",{className:"home-nav-logo",children:Object(f.jsx)("h1",{children:"MoviesMark"})}),t?Object(f.jsxs)("div",{className:"home-nav-buttons",children:[Object(f.jsx)(l.a,{}),Object(f.jsxs)("select",{children:[Object(f.jsx)("option",{children:"\ud83c\udfacEnglish"}),Object(f.jsx)("option",{children:"\ud83c\udfacCroatian"})]}),Object(f.jsx)("button",{className:"home-nav-button",children:"MoviesMark"})]}):Object(f.jsx)(d.a,{style:{cursor:"pointer",border:"1px solid var(--main-color)",backgroundColor:"var(--main-color)",color:"#fff"},onClick:function(){u(m())},children:r.displayName[0]})]})}i(68);function x(e){e.img;return Object(f.jsx)("div",{className:"hero-banner-section",style:{backgroundImage:"url(\n            https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"},children:Object(f.jsxs)("div",{className:"hero-banner-section-info",children:[Object(f.jsxs)("div",{className:"hero-banner-info-left",children:[Object(f.jsx)("h1",{children:"MoviesMark provides a lot of great Movies Check it out."}),Object(f.jsx)("button",{children:"MoviesMark"})]}),Object(f.jsx)("div",{className:"hero-banner-info-right",children:Object(f.jsx)("h4",{children:"Every type movie genre... Provided by MoviesMark"})})]})})}i(69);var y=i(43),M=(y.a.initializeApp({apiKey:"AIzaSyDetjJQW4Uiy5vLJYOwN3FGfshRYFg3wwo",authDomain:"netflix-5a8dc.firebaseapp.com",projectId:"netflix-5a8dc",storageBucket:"netflix-5a8dc.appspot.com",messagingSenderId:"610847779765",appId:"1:610847779765:web:59540bac6b3639aeccc7fc"}).firestore(),y.a.auth());function w(){var e=Object(v.b)(),t=function(t){t.preventDefault(),M.signInWithEmailAndPassword(u,m).then((function(t){e(g({email:t.user.email,uid:t.user.uid,displayName:t.user.displayName}))})).catch((function(e){return console.log(e.message)}))},i=function(t){t.preventDefault(),M.createUserWithEmailAndPassword(u,m).then((function(t){t.user.updateProfile({displayName:c}).then((function(){e(g({displayName:c,uid:t.user.uid,email:t.user.email,password:t.user.password}))}))})).catch((function(e){return console.log(e.message)}))};console.log(i),console.log(t);var o=Object(n.useState)(""),a=Object(s.a)(o,2),c=a[0],r=a[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),u=d[0],j=d[1],b=Object(n.useState)(""),p=Object(s.a)(b,2),m=p[0],h=p[1];return Object(f.jsx)("div",{className:"login",children:Object(f.jsx)("div",{className:"login-section",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"name",placeholder:"Your Name",value:c,onChange:function(e){return r(e.target.value)}}),Object(f.jsx)("input",{type:"email",placeholder:"Your Email",value:u,onChange:function(e){return j(e.target.value)}}),Object(f.jsx)("input",{type:"password",placeholder:"Your Password",value:m,onChange:function(e){return h(e.target.value)}}),Object(f.jsx)("button",{className:"login-btn",onClick:t,children:"Login"}),Object(f.jsx)("span",{className:"register-btn",onClick:i,children:"Register"})]})})})}function k(){return Object(f.jsx)("div",{style:{backgroundColor:"var(--main-color)",padding:"25px",textAlign:"center"},children:Object(f.jsxs)("p",{style:{fontFamily:"Poppins",color:"#fff",fontSize:"24px"},children:["All rights reserved by MoviesMark"," ",Object(f.jsx)("span",{style:{fontFamily:"Lato",fontWeight:"400",fontSize:"22px"},children:(new Date).getFullYear()})]})})}function N(){return Object(f.jsxs)("div",{className:"login",children:[Object(f.jsx)(O,{displayBtns:!0}),Object(f.jsx)(x,{}),Object(f.jsx)(w,{}),Object(f.jsx)(k,{})]})}var S=i(23),_=i.n(S),U=i(34);i(76);function R(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),i=t[0],o=t[1],a=function(e,t){for(var i="",n=0;n<e;n++)i+=t;return i};console.log(a(2,"M"));var c="c3d4ca9e26c843f6cb1c652d96c167dc";return Object(n.useEffect)((function(){function e(){return(e=Object(U.a)(_.a.mark((function e(){var t,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,o(i.results[Math.floor(Math.random()*i.results.length)]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(f.jsx)("div",{className:"movie-banner",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat((null===i||void 0===i?void 0:i.backdrop_path)||(null===i||void 0===i?void 0:i.poster_path),")"),backgorundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"},children:Object(f.jsxs)("div",{className:"movie-banner-info",children:[Object(f.jsxs)("div",{className:"movie-banner-title",children:[Object(f.jsx)("h1",{children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)}),Object(f.jsx)("h4",{children:"All the Movies you Love in one place...."}),Object(f.jsxs)("p",{children:["Rating: ",a(Math.floor(null===i||void 0===i?void 0:i.vote_average),"\u2b50")]})]}),Object(f.jsxs)("div",{className:"movie-banner-btns",children:[Object(f.jsx)("button",{children:"Play Me"}),Object(f.jsx)("button",{children:"Add to my List"})]})]})})}i(77);var C=i.p+"static/media/video.10643810.mp4";function L(e){var t=e.title,i=e.movieURL,o=e.cardSize,a=(e.video,Object(n.useState)([])),c=Object(s.a)(a,2),r=c[0],l=c[1];Object(n.useEffect)((function(){function e(){return(e=Object(U.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),console.log(r);var d=function(e,t){for(var i="",n=0;n<e;n++)i+=t;return i};console.log(d(4,"n"));return Object(f.jsxs)("div",{className:"movie-row-section",children:[Object(f.jsx)("h1",{children:t}),Object(f.jsx)("div",{className:"movie-row",children:r.map((function(e){return Object(f.jsxs)("div",{className:"movie-card ".concat(o&&"movieCardSize"),children:[Object(f.jsx)("img",{onClick:function(){return function(e){return window.open(e,"_blank","noopener,noreferrer")}("".concat(C))},className:"movie-img ".concat(o&&"movieImgSize"),src:"".concat("https://image.tmdb.org/t/p/original/").concat((null===e||void 0===e?void 0:e.poster_path)||(null===e||void 0===e?void 0:e.backdrop_path)),alt:null===e||void 0===e?void 0:e.name},e.id),Object(f.jsx)("p",{className:"movieTitle",children:e.title||e.name}),Object(f.jsxs)("p",{className:"movieDate",children:[null===e||void 0===e?void 0:e.release_date,Object(f.jsx)("span",{className:"movieDateSpan",children:" Release Date"})]}),Object(f.jsxs)("p",{className:"movieVote",children:[Math.floor(null===e||void 0===e?void 0:e.popularity)," Popularity"]}),Object(f.jsxs)("span",{className:"movieAverage",children:["Rating:",d(Math.floor(null===e||void 0===e?void 0:e.vote_average),"\u2b50")]})]})}))})]})}var A="c3d4ca9e26c843f6cb1c652d96c167dc",T={PopularMovies:"https://api.themoviedb.org/3/movie/popular?api_key=".concat(A,"&language=en-US&page=1"),CrimeMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=80"),HorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=27"),ThrillerMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=53"),ComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=35"),FamilyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=10751"),AnimationMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=16"),AdventureMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=12"),HistoryMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&language=en-US&with_genres=36"),TopRatedMovies:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(A,"&language=en-US&page=1"),TopRatedTV:"https://api.themoviedb.org/3/tv/popular?api_key=".concat(A,"&language=en-US&page=1")};function E(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(L,{title:"Popular Movies",movieURL:T.PopularMovies}),Object(f.jsx)(L,{title:"Crime Movies",movieURL:T.CrimeMovies}),Object(f.jsx)(L,{title:"Horror Movies",movieURL:T.HorrorMovies}),Object(f.jsx)(L,{title:"Thriller Movies",movieURL:T.ThrillerMovies}),Object(f.jsx)(L,{title:"ComedyMovies",movieURL:T.ComedyMovies}),Object(f.jsx)(L,{title:"TV Rated TV",cardSize:!0,movieURL:T.TopRatedTV}),Object(f.jsx)(L,{title:"FamilyMovies",movieURL:T.FamilyMovies}),Object(f.jsx)(L,{title:"Animation Movies",movieURL:T.AnimationMovies}),Object(f.jsx)(L,{title:"Adventure Movies",movieURL:T.AdventureMovies}),Object(f.jsx)(L,{title:"History Movies",movieURL:T.HistoryMovies}),Object(f.jsx)(L,{title:"TopRated Movies",movieURL:T.TopRatedMovies})]})}var P=function(){var e=Object(v.c)(h),t=Object(v.b)();return Object(n.useEffect)((function(){M.onAuthStateChanged((function(e){t(e?p({email:e.email,uid:e.uid,displayName:e.displayName}):m)}))}),[t]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"App",children:e?Object(f.jsxs)("div",{className:"movies-page",children:[Object(f.jsx)(O,{}),Object(f.jsx)(R,{}),Object(f.jsx)(E,{}),Object(f.jsx)(k,{})]}):Object(f.jsx)("div",{className:"login-page",children:Object(f.jsx)(N,{})})})})},D=Object(u.a)({reducer:{user:g}});c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(v.a,{store:D,children:Object(f.jsx)(P,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.a21c724c.chunk.js.map