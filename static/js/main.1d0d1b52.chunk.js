(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=(a(15),a(2)),o=a(3),s=a(5),m=a(4),u=a(1),d=a(6);var p=function(e){return l.a.createElement("li",{className:"nav-item text-center","data-toggle":"collapse","data-target":"#collapsibleNavbar"},l.a.createElement("a",{className:"nav-link text-light",href:e.link},e.name))},g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={navBackground:""},e.toggleNavBackgroundColor=e.toggleNavBackgroundColor.bind(Object(u.a)(e)),e.backgroundColorOn=e.backgroundColorOn.bind(Object(u.a)(e)),e.backgroundColorOff=e.backgroundColorOff.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggleNavBackgroundColor",value:function(){window.scrollY>5?this.backgroundColorOn():this.backgroundColorOff()}},{key:"backgroundColorOn",value:function(){this.setState({navBackground:"nav-scrolled"})}},{key:"backgroundColorOff",value:function(){this.setState({navBackground:""})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){e.toggleNavBackgroundColor()})}},{key:"render",value:function(){return l.a.createElement("header",{className:"col-lg-12",id:"#"},l.a.createElement("div",{className:"header-container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark ".concat(this.state.navBackground)},l.a.createElement("a",{className:"navbar-brand col-lg-1 text-lg-center col-1 text-center text-light",href:"#"},"Logo"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",onClick:this.backgroundColorOn},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:" col-lg-7 offset-lg-4 collapse navbar-collapse",id:"collapsibleNavbar"},l.a.createElement("ul",{className:"navbar-nav col-lg-12 justify-content-between"},l.a.createElement(p,{name:"Intro",link:"#intro"}),l.a.createElement(p,{name:"Gallery",link:"#gallery"}),l.a.createElement(p,{name:"Statistics",link:"#statistics"}),l.a.createElement(p,{name:"Footer",link:"#footer"}))))),l.a.createElement("section",{className:"offset-sm-1 col-sm-3"},l.a.createElement("h1",null,"Wonderful World Of Desert Templates")),l.a.createElement("div",{className:"header-arrow"},l.a.createElement("a",{href:"#intro"},l.a.createElement("i",{className:"fa fa-angle-down"}))))}}]),t}(n.Component);var E=function(){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"footer-about col-md-5"},l.a.createElement("h5",{className:"text-center text-md-left"},"About"),l.a.createElement("p",{className:"text-justify "},"This site is example template, it was created using React and Bootstrap. It's purpose was to be training task for me so I could improve my styling skills and usage of Bootstrap. Feel free to use it as you please.")),l.a.createElement("div",{className:"col-md-3 offset-md-1 col-6 text-md-left text-center"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 1")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 3")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 4")))),l.a.createElement("div",{className:"col-md-3 col-6 text-md-left text-center"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 1")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 3")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"example link 4"))))),l.a.createElement("div",{className:"footer-ending"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"signature col-md-9 col-12 d-flex flex-row justify-content-md-start justify-content-center"},l.a.createElement("p",null,"Site created by\xa0"),l.a.createElement("a",{href:"https://github.com/DomLJ",target:"_blank",rel:"noopener noreferrer"},"Dominik J\xf3zefiak")),l.a.createElement("ul",{className:"social col-md-3 col-12 d-flex justify-content-md-end justify-content-center"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/DomLJ/Sandman",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"}))))))))},f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={visibility:"invisible"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"fadeIn",value:function(){var e=this.props.place,t=document.getElementById(e).getBoundingClientRect().top;window.innerHeight>t&&"invisible"===this.state.visibility&&this.setState({visibility:"visible"})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){e.fadeIn()})}},{key:"render",value:function(){return l.a.createElement("div",{className:"tile-".concat(this.state.visibility," col-lg-3 col-md-6"),id:this.props.place},l.a.createElement("figure",null,l.a.createElement("img",{src:"images/".concat(this.props.src),alt:"",title:this.props.credit})),l.a.createElement("h3",null,this.props.place),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}}]),t}(n.Component);var h=function(){return l.a.createElement("section",{className:"gallery container-fluid",id:"gallery"},l.a.createElement("h2",null,"Gallery"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur"),l.a.createElement("div",{className:"row"},l.a.createElement(f,{src:"andres-sanz-100047-unsplash.jpg",credit:"Photo by Andr\xe9s Sanz on Unsplash",place:"Mexico"}),l.a.createElement(f,{src:"jared-verdi-420154-unsplash.jpg",credit:"Photo by Jared Verdi on Unsplash",place:"Chile"}),l.a.createElement(f,{src:"fernando-paredes-murillo-462122-unsplash.jpg",credit:"Photo by Fernando Paredes Murillo on Unsplash",place:"Morocco"}),l.a.createElement(f,{src:"patrick-schneider-1062220-unsplash.jpg",credit:"Photo by Patrick Schneider on Unsplash",place:"Mongolia"})))};var b=function(){return l.a.createElement("section",{className:"read-more"},l.a.createElement("div",{className:"text-container col-lg-6 offset-lg-5"},l.a.createElement("h3",{className:"text-lg-left text-center"},"Sahara Desert"),l.a.createElement("p",{className:"text-lg-left text-center"},"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.a.createElement("div",{className:"col-12 button-container"},l.a.createElement("button",{className:"col-10 offset-1 col-lg-4 offset-lg-8"},"Read More"))))},v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={counter:a.props.beginning,iteration:1,isCounterTriggered:!1},a.countUp=a.countUp.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"countUp",value:function(){var e=this.props,t=e.countedNumber,a=e.duration,n=e.beginning,l=this.state.iteration/a;this.setState(function(e){return{counter:Math.round(-t*l*(l-2)+n),iteration:e.iteration+1}}),this.state.counter<t&&setTimeout(this.countUp,3)}},{key:"counterTrigger",value:function(){var e="counter"+this.props.id,t=document.getElementById(e).getBoundingClientRect().top;window.innerHeight>t&&!this.state.isCounterTriggered&&(this.setState({isCounterTriggered:!0}),this.countUp())}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){e.counterTrigger()})}},{key:"render",value:function(){return l.a.createElement("div",{className:"counter col-lg-4"},l.a.createElement("h3",{className:"value text-center",id:"counter".concat(this.props.id)},this.state.counter.toLocaleString()),l.a.createElement("p",{className:"text-center"},this.props.unit))}}]),t}(n.Component);var N=function(){return l.a.createElement("section",{className:"statistics container-fluid",id:"statistics"},l.a.createElement("h1",{className:"text-center"},"Gobi Desert"),l.a.createElement("div",{className:"counter-container row"},l.a.createElement(v,{countedNumber:122,duration:500,beginning:0,id:1,unit:"\xb0F"}),l.a.createElement(v,{countedNumber:5184,duration:600,beginning:0,id:2,unit:"ft above sea level"}),l.a.createElement(v,{countedNumber:498259,duration:700,beginning:0,id:3,unit:"sqare miles"})))};var k=function(){return l.a.createElement("section",{className:"intro container-fluid",id:"intro"},l.a.createElement("div",{className:"intro-container row"},l.a.createElement("div",{className:"intro-theme col-lg-6 "},l.a.createElement("h2",{className:"text-center text-md-left"},l.a.createElement("span",{className:"span-underline"},"World")," of ",l.a.createElement("span",{className:"span-color"},"Deserts")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:"intro-photo col-lg-6 "},l.a.createElement("figure",{className:"img-container"},l.a.createElement("img",{src:"./images/andres-sanz-100047-unsplash.jpg",alt:""})))))};var x=function(){return l.a.createElement("main",null,l.a.createElement(k,null),l.a.createElement(b,null),l.a.createElement(h,null),l.a.createElement(N,null))};var y=function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(x,null),l.a.createElement(E,null))};a(16);c.a.render(l.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1d0d1b52.chunk.js.map