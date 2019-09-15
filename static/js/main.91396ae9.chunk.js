(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),c=(a(15),a(2)),o=a(3),s=a(6),m=a(4),d=a(1),u=a(5);var f=function(e){var t=e.isScreenWide?"":"collapse";return l.a.createElement("li",{className:"nav-item text-center","data-toggle":t,"data-target":"#collapsibleNavbar"},l.a.createElement("a",{className:"navbar__link nav-link text-light",href:e.link},e.name))},g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={navBackground:"",isScreenWide:!0},e.toggleNavBackgroundColor=e.toggleNavBackgroundColor.bind(Object(d.a)(e)),e.backgroundColorOn=e.backgroundColorOn.bind(Object(d.a)(e)),e.backgroundColorOff=e.backgroundColorOff.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggleNavBackgroundColor",value:function(){window.scrollY>5?this.backgroundColorOn():this.backgroundColorOff()}},{key:"backgroundColorOn",value:function(){this.setState({navBackground:"navbar--scrolled"})}},{key:"backgroundColorOff",value:function(){!!document.getElementById("navbar-toggler").classList.contains("collapsed")&&this.setState({navBackground:""})}},{key:"checkWidth",value:function(){window.innerWidth>992?this.setState({isScreenWide:!0}):this.setState({isScreenWide:!1})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){e.toggleNavBackgroundColor()}),window.addEventListener("resize",function(){e.checkWidth()}),this.checkWidth()}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar ".concat(this.state.navBackground," navbar-expand-lg fixed-top navbar-dark")},l.a.createElement("a",{className:"navbar__logo navbar-brand col-lg-1 text-lg-center col-1 text-center text-light",href:"#"},"Sandman"),l.a.createElement("button",{id:"navbar-toggler",className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",onClick:this.backgroundColorOn},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"col-lg-7 offset-lg-4 collapse navbar-collapse",id:"collapsibleNavbar"},l.a.createElement("ul",{className:"navbar-nav col-lg-12 justify-content-between"},l.a.createElement(f,{name:"Intro",link:"#intro",isScreenWide:this.state.isScreenWide}),l.a.createElement(f,{name:"Gallery",link:"#gallery",isScreenWide:this.state.isScreenWide}),l.a.createElement(f,{name:"Statistics",link:"#statistics",isScreenWide:this.state.isScreenWide}),l.a.createElement(f,{name:"Footer",link:"#footer",isScreenWide:this.state.isScreenWide}))))}}]),t}(n.Component);var p=function(){return l.a.createElement("header",{className:"header col-lg-12",id:"#"},l.a.createElement("div",{className:"header__nav-container"},l.a.createElement(g,null)),l.a.createElement("section",{className:"header__title-container offset-1 col-md-3 col-sm-5 col-9"},l.a.createElement("h1",{className:"header__title"},"Wonderful World Of Desert Templates")),l.a.createElement("div",{className:"header__scrolldown"},l.a.createElement("a",{className:"header__link",href:"#intro"},l.a.createElement("span",{className:"header__arrow"}))))},_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={tileModifier:"gallery-tile--invisible"},a.fadeIn=a.fadeIn.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"fadeIn",value:function(){var e=this.props.place,t=document.getElementById(e).getBoundingClientRect().top;window.innerHeight>t&&"gallery-tile--invisible"===this.state.tileModifier&&this.setState({tileModifier:""})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){e.fadeIn()})}},{key:"render",value:function(){return l.a.createElement("div",{className:"gallery-tile ".concat(this.state.tileModifier," col-lg-3 col-md-6"),id:this.props.place},l.a.createElement("figure",{className:"gallery-tile__image-container"},l.a.createElement("img",{className:"gallery-tile__image",src:"images/".concat(this.props.src),alt:this.props.place,title:this.props.credit})),l.a.createElement("h3",{className:"gallery-tile__title"},this.props.place),l.a.createElement("p",{className:"gallery-tile__description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}}]),t}(n.Component);var E=function(){return l.a.createElement("section",{className:"gallery container-fluid",id:"gallery"},l.a.createElement("h2",{className:"gallery__title text-center"},"Gallery"),l.a.createElement("p",{className:"gallery__description text-center"},"Lorem ipsum dolor sit amet consectetur"),l.a.createElement("div",{className:"gallery__content row"},l.a.createElement(_,{src:"MexicoTile.jpg",credit:"Photo by Andr\xe9s Sanz on Unsplash",place:"Mexico"}),l.a.createElement(_,{src:"AtacamaTile.jpg",credit:"Photo by Jared Verdi on Unsplash",place:"Chile"}),l.a.createElement(_,{src:"MoroccoTile.jpg",credit:"Photo by Fernando Paredes Murillo on Unsplash",place:"Morocco"}),l.a.createElement(_,{src:"GobiTile.jpg",credit:"Photo by Patrick Schneider on Unsplash",place:"Mongolia"})))};var h=function(){return l.a.createElement("section",{className:"read-more"},l.a.createElement("div",{className:"read-more__container text-container col-lg-6 offset-lg-5"},l.a.createElement("h2",{className:"read-more__title text-lg-left text-center"},"Sahara Desert"),l.a.createElement("p",{className:"read-more__content text-lg-left text-center"},"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.a.createElement("button",{className:"read-more__button col-10 offset-1 col-lg-4 offset-lg-8"},"Read More")))},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={counter:a.props.beginning,iteration:1,isCounterTriggered:!1},a.countUp=a.countUp.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"countUp",value:function(){var e=this.props,t=e.countedNumber,a=e.duration,n=e.beginning,l=this.state.iteration/a;this.setState(function(e){return{counter:Math.round(-t*l*(l-2)+n),iteration:e.iteration+1}}),this.state.counter<t&&setTimeout(this.countUp,3)}},{key:"counterTrigger",value:function(){var e="counter"+this.props.id,t=document.getElementById(e).getBoundingClientRect().top;window.innerHeight>t&&!this.state.isCounterTriggered&&(this.setState({isCounterTriggered:!0}),this.countUp())}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){e.counterTrigger()})}},{key:"render",value:function(){return l.a.createElement("div",{className:"counter col-lg-4"},l.a.createElement("p",{className:"counter__value text-center",id:"counter".concat(this.props.id)},this.state.counter.toLocaleString()),l.a.createElement("p",{className:"text-center"},this.props.unit))}}]),t}(n.Component);var b=function(){return l.a.createElement("section",{className:"statistics container-fluid",id:"statistics"},l.a.createElement("h2",{className:"statistics__title text-center"},"Gobi Desert"),l.a.createElement("div",{className:"statistics__counter-container row"},l.a.createElement(v,{countedNumber:122,duration:500,beginning:0,id:1,unit:"\xb0F"}),l.a.createElement(v,{countedNumber:5184,duration:600,beginning:0,id:2,unit:"ft above sea level"}),l.a.createElement(v,{countedNumber:498259,duration:700,beginning:0,id:3,unit:"sqare miles"})))};var N=function(){return l.a.createElement("section",{className:"intro container-fluid",id:"intro"},l.a.createElement("div",{className:"intro__container row"},l.a.createElement("div",{className:"intro__description col-lg-6 "},l.a.createElement("h2",{className:"intro__title text-center text-md-left"},l.a.createElement("span",{className:"intro__title--underline"},"World "),"of",l.a.createElement("span",{className:"intro__title--color"}," Deserts")),l.a.createElement("p",{className:"intro__content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.a.createElement("p",{className:"intro__content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:"intro__image-container col-lg-6"},l.a.createElement("figure",{className:"intro__figure"},l.a.createElement("img",{className:"intro__image",src:"./images/Mexico1200x800.jpg",alt:""})))))};var k=function(){return l.a.createElement("main",null,l.a.createElement(N,null),l.a.createElement(h,null),l.a.createElement(E,null),l.a.createElement(b,null))};var x=function(){return l.a.createElement("div",{className:"footer__about col-md-5"},l.a.createElement("h3",{className:"footer__title text-center text-md-left"},"About"),l.a.createElement("p",null,"This site is example template, it was created using React and Bootstrap. It's purpose was to be training task for me so I could improve my styling skills and usage of Bootstrap. Feel free to use it as you please."))};var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-3 offset-md-1 col-6 text-md-left text-center"},l.a.createElement("h3",{className:"footer__title"},"Links"),l.a.createElement("ul",{className:"footer__list"},l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 1")),l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 2")),l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 3")),l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 4")))),l.a.createElement("div",{className:"col-md-3 col-6 text-md-left text-center"},l.a.createElement("h3",{className:"footer__title"},"Links"),l.a.createElement("ul",{className:"footer__list"},l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 1")),l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 2")),l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 3")),l.a.createElement("li",{className:"footer__list-item"},l.a.createElement("a",{className:"footer__link",href:"#placeholder"},"example link 4")))))};var w=function(){return l.a.createElement("div",{className:"footer__author"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"footer__signature col-md-9 col-12 d-flex flex-row justify-content-md-start justify-content-center"},l.a.createElement("p",{className:"footer__signature-description"},"Site created by\xa0"),l.a.createElement("a",{className:"footer__signature-link",href:"https://github.com/DomLJ"},"Dominik J\xf3zefiak")),l.a.createElement("ul",{className:"footer__social col-md-3 col-12 d-flex justify-content-md-end justify-content-center"},l.a.createElement("li",{className:"footer__social-list"},l.a.createElement("a",{href:"https://github.com/DomLJ/Sandman"},l.a.createElement("span",{className:"footer__github fab fa-github"}))))))};var j=function(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement("div",{className:"footer__container container"},l.a.createElement("div",{className:"row"},l.a.createElement(x,null),l.a.createElement(y,null)),l.a.createElement(w,null)))};var O=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(k,null),l.a.createElement(j,null))};a(16);i.a.render(l.a.createElement(O,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.91396ae9.chunk.js.map