(this["webpackJsonppostsignal-landing"]=this["webpackJsonppostsignal-landing"]||[]).push([[0],{35:function(e){e.exports=JSON.parse('[{"id":"imago","title":"\u0418\u043c\u0430\u0433\u043e","img":"logo.jpg","description":"TBD","links":[{"name":"Spotify","url":"https://www.spotify.com/","logoImg":"Spotify.png"},{"name":"YouTube","url":"https://www.youtube.com/","logoImg":"YouTube.png"},{"name":"YandexMusic","url":"https://music.yandex.com","logoImg":"YandexMusic.png"}]},{"id":"craters","title":"\u041a\u0440\u0430\u0442\u0435\u0440\u044b","img":"logo.jpg","description":"TBD","links":[{"name":"Spotify","url":"https://www.spotify.com/","logoImg":"Spotify.png"}]},{"id":"nbs","title":"\u041d.\u0411.\u0421.","img":"logo.jpg","description":"TBD","links":[{"name":"YouTube","url":"https://www.youtube.com/","logoImg":"YouTube.png"}]},{"id":"signal","title":"\u0421\u0438\u0433\u043d\u0430\u043b","img":"logo.jpg","description":"TBD","links":[{"name":"YandexMusic","url":"https://music.yandex.com","logoImg":"YandexMusic.png"}]}]')},62:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),i=a(7),l=a(6),s=a(9),m=a(8),p=a(37),u=a(11),g=a(55),b=a(102),d=a(88),h=a(4),f=a(46),E=a.n(f),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(g.a,{key:this.props.id,className:e.image,href:"".concat("/postsignal","/releases/").concat(this.props.id)},r.a.createElement(b.a,{component:"span",className:e.imageSrc,style:{backgroundImage:'url("'.concat("/postsignal","/img/covers/").concat(this.props.img,'")')}}),r.a.createElement(b.a,{component:"span",className:e.imageBackdrop}),r.a.createElement(b.a,{component:"span",className:e.imageButton},r.a.createElement(d.a,{component:"span",variant:"h5",className:e.imageTitle},r.a.createElement(b.a,{className:e.imageMarked},r.a.createElement(E.a,{fontSize:"large"})),r.a.createElement(b.a,{className:e.imageMarked},"\u0441\u043b\u0443\u0448\u0430\u0442\u044c"))))}}]),a}(r.a.Component),j=Object(h.a)((function(e){return{image:{borderRadius:4,boxShadow:"10px 5px 10px -1px rgba(0,0,0,0.2)",width:"100%","&:hover":{zIndex:1,"& $imageBackdrop":{opacity:.3},"& $imageMarked":{opacity:1}}},imageButton:{position:"absolute"},imageSrc:{width:"100%",paddingBottom:"100%",backgroundSize:"cover",borderRadius:"inherit"},imageBackdrop:{borderRadius:"inherit",position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:0,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",textAlign:"center"},imageMarked:{opacity:0,transition:e.transitions.create("opacity")},imageMarkedText:{}}}))(y),k=a(89),O=a(77),v=a(35),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(k.a,{container:!0,spacing:8,justify:"center",className:e.gridContainer},r.a.createElement(k.a,{item:!0,key:"releasesHeader",xs:12,style:{padding:0}},r.a.createElement(O.a,{variant:"text",style:{width:"100%"}},r.a.createElement(d.a,{variant:"h4"},"\u0440\u0435\u043b\u0438\u0437\u044b"))),v.map((function(e){return r.a.createElement(k.a,{item:!0,key:e.id,xs:12,sm:6,style:{maxWidth:450}},r.a.createElement(j,{id:e.id,title:e.title,img:e.img,description:e.description}))})))}}]),a}(r.a.Component),w=Object(h.a)((function(e){return{gridContainer:{width:"100%",margin:0}}}))(x),C=a(93),M=a(94),S=a(52),I=a(92),N=a(12),T=a(49),B=a.n(T),Y=a(47),_=a.n(Y),z=a(48),D=a.n(z),W=a(51),R=a.n(W),F=a(50),H=a.n(F),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,{classes:e},r.a.createElement(O.a,{href:"https://www.instagram.com/postsignal.band/","aria-label":"instagram link",target:"_blank",rel:"noopener"},r.a.createElement(_.a,null)),r.a.createElement(O.a,{href:"https://www.youtube.com/channel/UCK4jMcojhUlS_zEAPg2Gldg","aria-label":"youtube link",target:"_blank",rel:"noopener"},r.a.createElement(D.a,null)),r.a.createElement(O.a,{href:"https://vk.com/postsignal",target:"_blank",rel:"noopener"},"vk"),r.a.createElement(O.a,{href:"https://www.facebook.com/postsignal","aria-label":"facebook link",target:"_blank",rel:"noopener"},r.a.createElement(B.a,null)),r.a.createElement(O.a,{href:"https://soundcloud.com/postsignal","aria-label":"soundcloud link",target:"_blank",rel:"noopener"},r.a.createElement(H.a,null)),r.a.createElement(O.a,{href:"mailto:postsignal.band@gmail.com","aria-label":"mailto link"},r.a.createElement(R.a,null)))}}]),a}(r.a.Component),A=Object(h.a)((function(e){return{root:{"& a":{minWidth:40}}}}))(J),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,{href:"".concat("/postsignal","/")},r.a.createElement(d.a,{variant:"h4",style:{textTransform:"lowercase"}},"postsignal"))}}]),a}(r.a.Component),U=a(90),$=a(91),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{position:"sticky",className:e.root},r.a.createElement($.a,null,r.a.createElement(k.a,{container:!0,justify:"space-between",alignItems:"center",className:e.gridcontainer},r.a.createElement(k.a,{item:!0,key:"releasesHeader"},r.a.createElement(P,null)),r.a.createElement(k.a,{item:!0,key:"links"},r.a.createElement(A,null))))),r.a.createElement($.a,null))}}]),a}(r.a.Component),K=Object(h.a)((function(e){return{root:{backgroundColor:e.palette.background.paper},gridcontainer:Object(N.a)({},e.breakpoints.down("xs"),{justifyContent:"center"})}}))(G),q=Object(S.a)({palette:{type:"dark"}}),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(I.a,{theme:q},r.a.createElement(b.a,{className:e.root},r.a.createElement(C.a,null),r.a.createElement(K,null),r.a.createElement(M.a,null,this.props.children),r.a.createElement("footer",{className:e.footer},r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"\xa9 ".concat((new Date).getFullYear()," postsignal")))))}}]),a}(r.a.Component),Q=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},footer:{padding:e.spacing(3,2),marginTop:"auto"}}}))(L),V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement(w,null))}}]),a}(r.a.Component),X=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{style:{backgroundImage:'url("'.concat("/postsignal","/img/covers/").concat(this.props.img,'")'),filter:"blur(25px)",WebkitFilter:"blur(25px)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",opacity:.7,height:"100%",zIndex:-1,position:"absolute",top:0,left:0,right:0}})}}]),a}(n.Component),Z=a(95),ee=a(96),te=a(97),ae=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(Z.a,null,r.a.createElement(ee.a,{orientation:"vertical",variant:"text",style:{width:"100%"}},this.props.links.map((function(e){return r.a.createElement(O.a,{href:e.url,target:"_blank",key:e.name,style:{padding:20}},r.a.createElement(k.a,{container:!0,spacing:1,justify:"space-around",alignItems:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(te.a,{component:"img",alt:e.name,image:"".concat("/postsignal","/img/logos/").concat(e.logoImg),style:{maxWidth:130}})),r.a.createElement(k.a,{item:!0},"c\u043b\u0443\u0448\u0430\u0442\u044c")))}))))}}]),a}(n.Component),ne=a(98),re=a(99),oe=a(100),ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ne.a,{className:e.root},r.a.createElement(re.a,null,r.a.createElement(te.a,{component:"img",alt:"Cover",image:"".concat("/postsignal","/img/covers/").concat(this.props.releaseMetadata.img)}),r.a.createElement(oe.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.releaseMetadata.title),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.releaseMetadata.description))),r.a.createElement(ae,{links:this.props.releaseMetadata.links}))}}]),a}(n.Component),ie=Object(h.a)((function(e){return{root:{maxWidth:350,boxShadow:"10px 5px 10px -1px rgba(0,0,0,0.2)"}}}))(ce),le=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.match.params.id,t=v.find((function(t){return t.id===e}));return r.a.createElement(Q,null,r.a.createElement(X,{img:t.img}),r.a.createElement(k.a,{container:!0,justify:"center"},r.a.createElement(ie,{releaseMetadata:t})))}}]),a}(n.Component),se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:V}),r.a.createElement(u.a,{path:"/releases/:id",component:le}),r.a.createElement(u.a,{component:V}))}}]),a}(r.a.Component),me=Object(u.f)(se),pe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/postsignal"},r.a.createElement(me,null))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6bebbbe0.chunk.js.map