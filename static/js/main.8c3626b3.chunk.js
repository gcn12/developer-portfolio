(this["webpackJsonpdeveloper-portfolio"]=this["webpackJsonpdeveloper-portfolio"]||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/16.f6d9eb4d.png"},28:function(e,t,n){e.exports=n(44)},33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),o=n.n(r),c=(n(33),n(5)),l=n(6),u=n(8),s=n(7),p=n(1),d=n(2);function m(){var e=Object(p.a)(["\n    text-decoration: none;\n    color: rgb(90,170,90);\n    font-weight: 700;\n    &:hover{\n        color: rgb(30, 30, 30);\n    }\n"]);return m=function(){return e},e}function f(){var e=Object(p.a)(["\n    @media (max-width: 700px){\n        font-size: 20px;\n    }\n    max-width: 400px;\n    font-size: 25px;\n"]);return f=function(){return e},e}function h(){var e=Object(p.a)(["\n    min-width: 200px;\n    max-width: 300px;\n    width: 40vw;\n    padding-right: 3vw;\n"]);return h=function(){return e},e}function g(){var e=Object(p.a)(["\n    @media (max-width: 700px){\n        flex-direction: column;\n        margin: 0 4%;\n    }\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 65vh;\n"]);return g=function(){return e},e}var b=d.a.div(g()),v=(d.a.img(h()),d.a.div(f())),x=d.a.a(m()),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.updateIsAboutPage(!0),this.props.updateIsContactPage(!1),this.props.updateIsCV(!1)}},{key:"render",value:function(){return i.a.createElement(b,null,i.a.createElement(v,null,i.a.createElement("p",null,"Gareth Ng is a front-end developer who specializes in React.js."),i.a.createElement("p",null,"He previously worked in the film industry as a camera assistant and ",i.a.createElement(x,{href:"https://gcn12.github.io/film-portfolio/films"},"cinematographer"),".")))}}]),n}(a.Component),j=n(26),w=n.n(j),k="user_PaxsPBydmZqHY0b5SQp7W",E="template_dc51aro";function C(){var e=Object(p.a)(["\n    font-size: 20px;\n    color: rgb(70,70,70);\n    font-weight: 900;\n"]);return C=function(){return e},e}function O(){var e=Object(p.a)(["\n    font-size: 20px;\n    color: red;\n    font-weight: 900;\n"]);return O=function(){return e},e}function I(){var e=Object(p.a)(["\n    max-width: 150px;\n    height: 50px;\n    font-size: 20px;\n    color: white;\n    border: none;\n    background-color: rgb(10,10,10);\n    &:hover{\n        background-color: rgb(50,50,50);\n    }\n"]);return I=function(){return e},e}function P(){var e=Object(p.a)(["\n    color: rgb(80, 80, 80);\n    width: 55vw;\n    min-width: 300px;\n    height: 140px;\n    border: none;\n    border-radius: 5px;\n    font-size: 20px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n"]);return P=function(){return e},e}function z(){var e=Object(p.a)(["\n    width: 55vw;\n    min-width: 300px;\n    height: 50px;\n    color: rgb(80, 80, 80);\n    font-size: 20px;\n    border: none;\n    border-radius: 5px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n"]);return z=function(){return e},e}function _(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return _=function(){return e},e}function A(){var e=Object(p.a)(["\n    width: 100%;\n    min-height: 55vh;\n    display: flex;\n    justify-content: center;\n"]);return A=function(){return e},e}var S=d.a.form(A()),V=d.a.div(_()),M=d.a.input(z()),W=d.a.textarea(P()),B=d.a.button(I()),L=d.a.div(O()),R=d.a.div(C()),N=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",subject:"",message:"",allFields:!0,isSent:!1},e.sendEmail=function(t){t.preventDefault(),e.state.email.length>0&&e.state.subject.length>0&&e.state.message.length>0?(w.a.sendForm("service_xfb4n3g",E,t.target,k).then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),document.getElementById("form-subject").value="",document.getElementById("form-email").value="",document.getElementById("form-message").value="",e.setState({allFields:!0,isSent:!0,message:"",email:"",subject:""})):e.setState({allFields:!1})},e.updateEmail=function(t){e.setState({email:t.target.value})},e.updateSubject=function(t){e.setState({subject:t.target.value})},e.updateMessage=function(t){e.setState({message:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(S,{className:"contact-form",onSubmit:this.sendEmail},i.a.createElement(V,null,i.a.createElement("br",null),i.a.createElement("label",null,"Email"),i.a.createElement(M,{onChange:this.updateEmail,value:this.state.email,id:"form-email",type:"email",name:"reply_to"}),i.a.createElement("br",null),i.a.createElement("label",null,"Subject"),i.a.createElement(M,{onChange:this.updateSubject,value:this.state.subject,id:"form-subject",type:"text",name:"subject"}),i.a.createElement("br",null),i.a.createElement("label",null,"Message"),i.a.createElement(W,{onChange:this.updateMessage,value:this.state.message,id:"form-message",name:"message"}),i.a.createElement("br",null),this.state.allFields?null:i.a.createElement(L,null,"All fields must be filled"),this.state.isSent?i.a.createElement(R,null,"Message has been sent"):null,i.a.createElement(B,{type:"submit"},"SEND")))}}]),n}(a.Component);function D(){var e=Object(p.a)(["\n    -webkit-touch-callout: none; \n    -webkit-user-select: none; \n    -khtml-user-select: none; \n    -moz-user-select: none; \n    -ms-user-select: none; \n    user-select: none;\n"]);return D=function(){return e},e}function T(){var e=Object(p.a)(["\n    padding-left: 5px;\n"]);return T=function(){return e},e}function F(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n    font-size: 20px;\n"]);return F=function(){return e},e}var H=d.a.div(F()),G=d.a.div(T()),Q=d.a.div(D()),Z=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.updateIsContactPage(!0),this.props.updateIsAboutPage(!1),this.props.updateIsCV(!1)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(H,null,i.a.createElement(Q,null,"e:"),i.a.createElement(G,null,"garethcng@gmail.com")),i.a.createElement(N,null))}}]),n}(a.Component),J=n(12),q={cubeclock:{icon:"https://live.staticflickr.com/65535/50428255193_e8c0d54b4c.jpg",title:"CubeClock Rubik's Cube Timer",link:"https://www.cubeclock.net"},filmportfolio:{icon:"https://live.staticflickr.com/65535/50428964021_b4eb5dca9c.jpg",title:"Cinematography Portfolio",link:"https://gcn12.github.io/film-portfolio/"},messaging:{icon:"https://live.staticflickr.com/65535/50428262003_bed21ef9a6.jpg",title:"Messaging App",link:"https://gcn12.github.io/messaging-app/"}};function U(){var e=Object(p.a)(["\n    @media (min-width: 700px){\n        font-size: 17px;\n    }\n    font-size: 20px;\n    padding-bottom: 20px;\n"]);return U=function(){return e},e}function Y(){var e=Object(p.a)(["\n    @media(min-width: 1100px){\n        width: 20vw;\n        height: 20vw;\n    }\n    @media(max-width: 1100px){\n        width: 30vw;\n        height: 30vw;\n        min-height: 200px;\n        min-width: 200px;\n    }\n    @media(max-width: 700px){\n        width: 70vw;\n        height: 70vw;\n        min-height: 310px;\n        min-width: 310px;\n    }\n"]);return Y=function(){return e},e}function $(){var e=Object(p.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    @media (max-width: 700px) {\n        justify-content: center;\n    }\n    @media (min-width: 1100px) {\n        padding-top: 50px;\n    }\n"]);return $=function(){return e},e}var K=d.a.div($()),X=d.a.img(Y()),ee=d.a.div(U()),te=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.updateIsContactPage(!1),this.props.updateIsAboutPage(!1),this.props.updateIsCV(!1)}},{key:"render",value:function(){return i.a.createElement(K,null,Object.values(q).map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(J.b,{to:"work/".concat(Object.keys(q)[t])},i.a.createElement(X,{key:t,src:e.icon,alt:"project icons"})),i.a.createElement(ee,null,e.title))})))}}]),n}(a.Component),ne=n(27),ae=n.n(ne);function ie(){var e=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return ie=function(){return e},e}function re(){var e=Object(p.a)(["\n    /* height: 75vh; */\n    width: 60vw;\n    min-width: 400px;\n"]);return re=function(){return e},e}var oe=d.a.img(re()),ce=d.a.div(ie()),le=function(){return i.a.createElement(ce,null,i.a.createElement(oe,{alt:"404",src:ae.a}))},ue={cubeclock:{type:"container",index:0,value:[{type:"title",index:1,value:"CubeClock: Rubik's Cube Timer"},{type:"topImage",index:2,src:"https://live.staticflickr.com/65535/50429619721_8737db8502_k.jpg"},{type:"createdWithContainer",index:3,value:[{type:"createdWith",index:14,value:"Created with React.js, PostgresQL, Chart.js."}]},{type:"line",index:4},{type:"linkContainer",index:5,value:[{type:"div",index:6,value:"App:"},{type:"url",index:7,href:"https://cubeclock.net",value:"https://cubeclock.net"}]},{type:"linkContainer",index:8,value:[{type:"div",index:9,value:"Code:"},{type:"url",index:10,href:"https://github.com/gcn12/cubeclock",value:"https://github.com/gcn12/cubeclock"}]},{type:"line",index:11},{type:"paragraph",index:12,value:"\n                CubeClock is a Rubik's Cube timer that supports all World Cube Association puzzles. \n                It was created with extensive input from cube solving enthusiasts and sets out to \n                include features missing in other timers. CubeClock utilizes a username and password\n                system, which syncs solve data across all devices. It's a progessive web app that can\n                work offline, and update to the database when internet access is available. The timer\n                also offers a number of analytic charts to help users visualize their progress. \n                "},{type:"imgMobile",index:13,src:"https://live.staticflickr.com/65535/50429793552_84481b7ecc_h.jpg"},{type:"imgMobile",index:15,src:"https://live.staticflickr.com/65535/50429619486_8ff5fe9dd9_h.jpg"},{type:"img",index:16,src:"https://live.staticflickr.com/65535/50429787637_5e84f8d872_b.jpg"},{type:"img",index:17,load:!0,src:"https://live.staticflickr.com/65535/50428920648_783169ce58_b.jpg"}]},filmportfolio:{type:"container",index:0,value:[{type:"title",index:1,value:"Cinematography Portfolio"},{type:"topImage",index:2,src:"https://live.staticflickr.com/65535/50429616091_b8f5e8bfa1_k.jpg"},{type:"createdWith",index:3,value:"Created with React.js, Redux, React-Router"},{type:"line",index:4},{type:"linkContainer",index:5,value:[{type:"div",index:6,value:"App:"},{type:"url",index:7,href:"http://gcn12.github.io/film-portfolio/",value:"http://gcn12.github.io/film-portfolio/"}]},{type:"linkContainer",index:8,value:[{type:"div",index:9,value:"Code:"},{type:"url",index:10,href:"https://github.com/gcn12/film-portfolio",value:"https://github.com/gcn12/film-portfolio"}]},{type:"line",index:11},{type:"img",index:12,src:"https://live.staticflickr.com/65535/50429793522_de68b4dc61_k.jpg"},{type:"img",index:13,src:"https://live.staticflickr.com/65535/50428925133_aff1d73e22_k.jpg"},{type:"img",index:14,src:"https://live.staticflickr.com/65535/50428922328_df8e96c10a_h.jpg"},{type:"imgMobile",index:15,load:!0,src:"https://live.staticflickr.com/65535/50429616256_ecb2d20ee4_h.jpg"}]},messaging:{type:"container",index:0,value:[{type:"title",index:1,value:"Messaging App"},{type:"topImage",index:2,src:"https://live.staticflickr.com/65535/50429619531_fa24d90740_k.jpg"},{type:"paragraph",index:3,value:"Created with React.js, Firebase, Styled Components, Redux"},{type:"line",index:4},{type:"linkContainer",index:5,value:[{type:"div",index:6,value:"App:"},{type:"url",index:7,href:"http://gcn12.github.io/messaging-app/",value:"http://gcn12.github.io/messaging-app/"}]},{type:"linkContainer",index:8,value:[{type:"div",index:9,value:"Code:"},{type:"url",index:10,href:"https://github.com/gcn12/messaging-app",value:"https://github.com/gcn12/messaging-app"}]},{type:"line",index:11},{type:"imgMobile",index:12,src:"https://live.staticflickr.com/65535/50429793872_2bb25b3573_h.jpg"},{type:"imgMobile",index:13,load:!0,src:"https://live.staticflickr.com/65535/50429793832_48d33bb960_h.jpg"}]}};n(42);function se(){var e=Object(p.a)(["\n    @media (min-width: 817px) {\n        padding: 0 10%;\n        font-size: 20px;\n    }\n    padding: 0 2%;\n"]);return se=function(){return e},e}function pe(){var e=Object(p.a)(["\n    border: 1px solid rgba(40, 40, 40, .4);\n    border-style: none none solid none;\n    margin: 2% 0;\n"]);return pe=function(){return e},e}function de(){var e=Object(p.a)(["\n    @media (min-width: 817px) {\n        padding: 0 20% 0 20%;\n        font-size: 30px;\n    }\n"]);return de=function(){return e},e}function me(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n"]);return me=function(){return e},e}function fe(){var e=Object(p.a)(["\n    margin-left: 15px;\n    background-color: rgb(25, 25, 25);\n    color: white;\n    border: none;\n    width: 170px;\n    height: 80px;\n    font-size: 20px;\n    cursor: pointer;\n    &:hover {\n        background-color: rgb(70, 70, 70)\n    }\n    text-transform: uppercase;\n"]);return fe=function(){return e},e}function he(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n"]);return he=function(){return e},e}function ge(){var e=Object(p.a)(["\n    @media (max-width: 820px){\n        padding-left: 5px;\n    }\n    padding-left: 10px;\n    text-decoration: none;\n    color: rgb(90,170,90);\n    font-weight: 700;\n    &:hover{\n        color: rgb(30, 30, 30);\n    }\n"]);return ge=function(){return e},e}function be(){var e=Object(p.a)(["\n    @media (max-width: 820px){\n        font-size: 18px;\n        justify-content: center;\n        margin-left: 0%;\n    }\n    @media (max-width: 550px){\n        font-size: 14px;\n    }\n    margin-left: 10%;\n    font-size: 25px;\n    display: flex;\n    "]);return be=function(){return e},e}function ve(){var e=Object(p.a)(["\n    box-shadow: 5px 10px 15px rgba(40, 40, 40, .8);\n    align-self: center;\n    width: 70%; \n    margin: 15px 0;\n    @media (max-width: 820px) {\n        margin: 10px 0;\n        width: 80%;\n    }\n"]);return ve=function(){return e},e}function xe(){var e=Object(p.a)(["\n    align-self: center;\n    width: 100%; \n    box-shadow: 5px 10px 15px rgba(40, 40, 40, .8);\n    margin: 15px 0;\n    @media (max-width: 820px) {\n        margin: 10px 0;\n        width: 95%;\n    }\n"]);return xe=function(){return e},e}function ye(){var e=Object(p.a)(["\n    align-self: center;\n    width: 130%; \n    box-shadow: 5px 10px 15px rgba(40, 40, 40, .8);\n    margin: 20px 0;\n    @media (max-width: 820px) {\n        width: 95%;\n    }\n"]);return ye=function(){return e},e}function je(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n"]);return je=function(){return e},e}function we(){var e=Object(p.a)(["\n    @media (min-width: 817px){\n        font-size: 30px;\n    }\n    @media (max-width: 817px){\n        font-size: 5vw;\n    }\n    text-transform: uppercase;\n    align-self: center;\n    /* padding-bottom: 25px; */\n"]);return we=function(){return e},e}var ke=d.a.div(we()),Ee=d.a.div(je()),Ce=d.a.img(ye()),Oe=d.a.img(xe()),Ie=d.a.img(ve()),Pe=d.a.div(be()),ze=d.a.a(ge()),_e=d.a.div(he()),Ae={title:ke,container:Ee,div:"div",img:Oe,imgMobile:Ie,a:"a",linkContainer:Pe,url:ze,linkButton:d.a.button(fe()),linkButtonContainer:_e,topImage:Ce,createdWithContainer:d.a.div(me()),createdWith:d.a.div(de()),line:d.a.div(pe()),paragraph:d.a.div(se())},Se=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderer=function(t){return i.a.createElement(Ae[t.type],{key:t.index,src:t.src,href:t.href,onLoad:t.load?function(){return t.index,void e.props.workItemLoaded()}:null},t.value&&("string"===typeof t.value?t.value:t.value.map((function(t){return e.renderer(t)}))))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.isWorkItemLoaded?"fade-in":"hidden"},this.renderer(ue[this.props.match.params.workname]))}}]),n}(a.Component);n(43);function Ve(){var e=Object(p.a)(['\n    display: inline-block;\n    padding: 10px 3px 0px 3px;\n    position: relative;\n\n    &:after {\n        background: none repeat scroll 0 0 transparent;\n        bottom: 0;\n        content: "";\n        display: block;\n        height: 1px;\n        left: 50%;\n        position: absolute;\n        background: rgb(30,30,30);\n        transition: width 0.3s ease 0s, left 0.3s ease 0s;\n        width: 0;\n        width: 100%; \n        left: 0; \n    }\n']);return Ve=function(){return e},e}function Me(){var e=Object(p.a)(["\n    padding: 0;\n"]);return Me=function(){return e},e}function We(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n"]);return We=function(){return e},e}function Be(){var e=Object(p.a)(["\n    font-size: 20px;\n    color: rgb(30,30,30);\n    margin: 15px;\n"]);return Be=function(){return e},e}function Le(){var e=Object(p.a)(["\n    @media (max-width: 815px){\n        display: none;\n    }\n    font-size: 20px;\n    font-weight: 500;\n    padding-left: 5px;\n"]);return Le=function(){return e},e}function Re(){var e=Object(p.a)(["\n    @media (max-width: 815px) {\n        font-size: 40px;\n    }\n    @media (max-width: 360px) {\n        font-size: 30px;\n    }\n    font-size: 50px;\n    color: rgb(30,30,30);\n    text-decoration: none;\n    &:hover {\n        color: rgb(120,120,120)\n    }\n"]);return Re=function(){return e},e}var Ne=d.a.div(Re()),De=d.a.div(Le()),Te=d.a.div(Be()),Fe=d.a.div(We()),He=d.a.ul(Me()),Ge=(d.a.div(Ve()),function(e){return i.a.createElement(Q,null,i.a.createElement(He,{id:"header-container"},i.a.createElement("div",{className:"flex"},i.a.createElement("li",null,i.a.createElement(J.b,{to:"/developer-portfolio/",style:{textDecoration:"none"}},i.a.createElement(Ne,null,"GARETH NG"))),i.a.createElement(Fe,{id:"options-container"},i.a.createElement("li",null,i.a.createElement(J.b,{to:"/developer-portfolio/about"},i.a.createElement(Te,{className:"underline ".concat(e.isAboutPage?"underline2":null)},"ABOUT"))),i.a.createElement("li",null,i.a.createElement(J.b,{to:"/developer-portfolio/contact"},i.a.createElement(Te,{className:"underline ".concat(e.isContactPage?"underline2":null)},"CONTACT"))),i.a.createElement("li",null,i.a.createElement(J.b,{to:"/developer-portfolio/cv"},i.a.createElement(Te,{className:"underline ".concat(e.isCV?"underline2":null)},"CV"))))),i.a.createElement(De,null,"WEB DEVELOPER")))});function Qe(){var e=Object(p.a)(["\n    height: calc(100vh - 220px);\n    min-height: 400px;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    "]);return Ze=function(){return e},e}var Je=d.a.div(Ze()),qe=d.a.iframe(Qe()),Ue=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.updateIsCV(!0),this.props.updateIsAboutPage(!1),this.props.updateIsContactPage(!1)}},{key:"render",value:function(){return i.a.createElement(Je,null,i.a.createElement(qe,{title:"resume",frameborder:"0",scrolling:"no",width:"640",height:"480",src:"https://drive.google.com/file/d/1PHkCTHBZ4PZBmVsb4yQBhMh2uAvISg-L/preview"}))}}]),n}(a.Component),Ye=n(3),$e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isContactPage:!1,isAboutPage:!1,isCV:!1,isWorkItemLoaded:!1},e.workItemLoaded=function(){e.setState({isWorkItemLoaded:!0})},e.updateIsContactPage=function(t){e.setState({isContactPage:t})},e.updateIsAboutPage=function(t){e.setState({isAboutPage:t})},e.updateIsCV=function(t){e.setState({isCV:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(Ge,{isCV:this.state.isCV,isContactPage:this.state.isContactPage,isAboutPage:this.state.isAboutPage}),i.a.createElement(Ye.c,null,i.a.createElement(Ye.a,{exact:!0,path:"/developer-portfolio",render:function(){return i.a.createElement(te,{updateIsCV:e.updateIsCV,updateIsAboutPage:e.updateIsAboutPage,updateIsContactPage:e.updateIsContactPage})}}),i.a.createElement(Ye.a,{exact:!0,path:"/developer-portfolio/about",render:function(){return i.a.createElement(y,{updateIsCV:e.updateIsCV,updateIsAboutPage:e.updateIsAboutPage,updateIsContactPage:e.updateIsContactPage})}}),i.a.createElement(Ye.a,{exact:!0,path:"/developer-portfolio/contact",render:function(){return i.a.createElement(Z,{updateIsCV:e.updateIsCV,updateIsContactPage:e.updateIsContactPage,updateIsAboutPage:e.updateIsAboutPage})}}),i.a.createElement(Ye.a,{exact:!0,path:"/developer-portfolio/cv",render:function(){return i.a.createElement(Ue,{updateIsCV:e.updateIsCV,updateIsContactPage:e.updateIsContactPage,updateIsAboutPage:e.updateIsAboutPage})}}),i.a.createElement(Ye.a,{path:"/developer-portfolio/work/:workname",render:function(t){return i.a.createElement(Se,Object.assign({},t,{isWorkItemLoaded:e.state.isWorkItemLoaded,workItemLoaded:e.workItemLoaded}))}}),i.a.createElement(Ye.a,{path:"/",component:le})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ke(){var e=Object(p.a)(["\n    // margin: 2% 12% 2% 12%\n"]);return Ke=function(){return e},e}var Xe=d.a.div(Ke());o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(J.a,null,i.a.createElement(Xe,null,i.a.createElement($e,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.8c3626b3.chunk.js.map