(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c516a74"],{"0af9":function(e,t,a){"use strict";a.r(t);var c=a("f2bf");function n(e,t,a,n,o,s){const r=Object(c["P"])("FormUpdate"),l=Object(c["P"])("Layout");return Object(c["I"])(),Object(c["k"])(l,null,{default:Object(c["cb"])(()=>[Object(c["q"])(r)]),_:1})}var o=a("32e9");const s={class:"row text-center custom__form"},r={class:"col-md-8 col-lg-6 form__inputs"},l={class:"form-group"},b={class:"form-group"},u={class:"form-group"};function d(e,t,a,n,o,d){const i=Object(c["P"])("a-alert"),O=Object(c["P"])("UserOutlined"),f=Object(c["P"])("a-avatar");return Object(c["I"])(),Object(c["m"])("div",s,[Object(c["n"])("div",r,[t[5]||(t[5]=Object(c["n"])("p",null,[Object(c["n"])("span",{class:"title"},"UPDATE PROFILE")],-1)),o.updateSuccess?(Object(c["I"])(),Object(c["k"])(i,{key:0,message:"Profile updated successfully",type:"success",class:"my-3"})):Object(c["l"])("",!0),Object(c["q"])(f,{shape:"square",size:64},{icon:Object(c["cb"])(()=>[Object(c["q"])(O)]),_:1}),Object(c["n"])("form",{onSubmit:t[3]||(t[3]=Object(c["eb"])((...e)=>d.handleSubmit&&d.handleSubmit(...e),["prevent"]))},[Object(c["n"])("div",l,[Object(c["db"])(Object(c["n"])("input",{type:"text",class:"form-control",placeholder:"FIRST NAME","onUpdate:modelValue":t[0]||(t[0]=e=>o.formState.firstName=e)},null,512),[[c["Y"],o.formState.firstName]])]),Object(c["n"])("div",b,[Object(c["db"])(Object(c["n"])("textarea",{class:"form-control",placeholder:"ADDRESS","onUpdate:modelValue":t[1]||(t[1]=e=>o.formState.address=e)},null,512),[[c["Y"],o.formState.address]])]),Object(c["n"])("div",u,[Object(c["db"])(Object(c["n"])("input",{type:"text",class:"form-control",placeholder:"CONTACT NUMBER","onUpdate:modelValue":t[2]||(t[2]=e=>o.formState.contactNumber=e)},null,512),[[c["Y"],o.formState.contactNumber]])]),t[4]||(t[4]=Object(c["n"])("button",{type:"submit",class:"btn btn-primary custom__button"},"UPDATE",-1))],32)])])}var i=a("5502"),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},f=O,j=a("b3f0");function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},c=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),c.forEach((function(t){v(e,t,a[t])}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=function(e,t){var a=p({},e,t.attrs);return Object(c["q"])(j["a"],p({},a,{icon:f}),null)};m.displayName="UserOutlined",m.inheritAttrs=!1;var g=m,y={name:"FormUpdate",components:{UserOutlined:g},data(){return{formState:{},updateSuccess:!1}},computed:{...Object(i["b"])({userInfo:"get_user_info"})},methods:{handleSubmit(){this.$store.dispatch("updateInfo",this.formState).then(()=>{this.updateSuccess=!0,setTimeout(()=>{this.updateSuccess=!1},2500)})}},mounted(){this.formState={...this.userInfo}}},h=(a("9ab3"),a("6b0d")),_=a.n(h);const I=_()(y,[["render",d],["__scopeId","data-v-77a5a25c"]]);var k=I,P={name:"UpdateProfile",components:{Layout:o["a"],FormUpdate:k}};const S=_()(P,[["render",n]]);t["default"]=S},"0ff3":function(e,t,a){},"32e9":function(e,t,a){"use strict";var c=a("f2bf");const n={class:"container",style:{"flex-grow":"1"}};function o(e,t,a,o,s,r){const l=Object(c["P"])("NavbarPage"),b=Object(c["P"])("FooterPage");return Object(c["I"])(),Object(c["m"])(c["b"],null,[Object(c["q"])(l),Object(c["n"])("div",n,[Object(c["O"])(e.$slots,"default",{},void 0,!0)]),Object(c["q"])(b)],64)}const s={class:"container-fluid"};function r(e,t,a,n,o,r){return Object(c["I"])(),Object(c["m"])("div",s,t[0]||(t[0]=[Object(c["o"])('<div class="row" data-v-71410280><div class="col-md-12" data-v-71410280><footer data-v-71410280><div class="row justify-content-around mb-0 pt-5 mx-4" data-v-71410280><div class="col-md-12 d-flex justify-content-between" data-v-71410280><ul class="list-unstyled mt-md-3 mt-5" data-v-71410280><li data-v-71410280>Job Portal</li><li class="social" data-v-71410280><span data-v-71410280><i class="fa fa-facebook" aria-hidden="true" data-v-71410280></i></span> <span data-v-71410280><i class="fa fa-instagram" aria-hidden="true" data-v-71410280></i></span> <span data-v-71410280><i class="fa fa-twitter" aria-hidden="true" data-v-71410280></i></span></li></ul><ul class="list-unstyled my-xl-4 my-md-3" data-v-71410280><li data-v-71410280>Copyright</li><li data-v-71410280>Ⓒ Job Portal 2022</li></ul></div></div><div class="row justify-content-center px-3 py-3 pt-5" data-v-71410280><div class="col text-center" data-v-71410280><p class="mb-0" data-v-71410280>“I never dreamed about success. I worked for it.” — Estee Lauder</p></div></div></footer></div></div>',1)]))}var l={name:"FooterPage"},b=(a("71a5"),a("6b0d")),u=a.n(b);const d=u()(l,[["render",r],["__scopeId","data-v-71410280"]]);var i=d;const O={class:"container-fluid"},f={class:"row bg-light"},j={class:"col-md-12"},p={class:"navbar navbar-expand-lg navbar-light bg-light navbar__custom"},v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},m={class:"navbar-nav",style:{"margin-left":"auto"}},g={style:{margin:"0px 25px"}},y={key:0},h={key:1},_={key:0,class:"d-flex"};function I(e,t,a,n,o,s){const r=Object(c["P"])("router-link"),l=Object(c["P"])("DownOutlined"),b=Object(c["P"])("a-menu-item"),u=Object(c["P"])("a-menu-divider"),d=Object(c["P"])("a-menu"),i=Object(c["P"])("a-dropdown");return Object(c["I"])(),Object(c["m"])("div",O,[Object(c["n"])("div",f,[Object(c["n"])("div",j,[Object(c["n"])("nav",p,[Object(c["q"])(r,{class:"navbar-brand",to:"/"},{default:Object(c["cb"])(()=>t[2]||(t[2]=[Object(c["p"])("Home")])),_:1}),t[9]||(t[9]=Object(c["n"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["n"])("span",{class:"navbar-toggler-icon"})],-1)),Object(c["n"])("div",v,[Object(c["n"])("div",m,[Object(c["n"])("div",g,[e.userInfo?(Object(c["I"])(),Object(c["k"])(i,{key:0},{overlay:Object(c["cb"])(()=>[Object(c["q"])(d,null,{default:Object(c["cb"])(()=>[Object(c["q"])(b,{key:"0"},{default:Object(c["cb"])(()=>[Object(c["q"])(r,{rel:"noopener noreferrer",to:"/profile"},{default:Object(c["cb"])(()=>t[3]||(t[3]=[Object(c["p"])(" Profile ")])),_:1})]),_:1}),"employer"===e.userInfo.type?(Object(c["I"])(),Object(c["m"])("div",y,[Object(c["q"])(b,{key:"1"},{default:Object(c["cb"])(()=>[Object(c["q"])(r,{rel:"noopener noreferrer",to:"/manage-jobs"},{default:Object(c["cb"])(()=>t[4]||(t[4]=[Object(c["p"])(" Manage Jobs ")])),_:1})]),_:1})])):(Object(c["I"])(),Object(c["m"])("div",h,[Object(c["q"])(b,{key:"1"},{default:Object(c["cb"])(()=>[Object(c["q"])(r,{rel:"noopener noreferrer",to:"/jobs"},{default:Object(c["cb"])(()=>t[5]||(t[5]=[Object(c["p"])(" Job Offers ")])),_:1})]),_:1}),Object(c["q"])(b,{key:"1"},{default:Object(c["cb"])(()=>[Object(c["q"])(r,{rel:"noopener noreferrer",to:"/jobs-applied"},{default:Object(c["cb"])(()=>t[6]||(t[6]=[Object(c["p"])(" Jobs Applied ")])),_:1})]),_:1})])),Object(c["q"])(u),Object(c["q"])(b,{key:"3"},{default:Object(c["cb"])(()=>[Object(c["n"])("a",{onClick:t[1]||(t[1]=(...e)=>s.logout&&s.logout(...e))},"Logout")]),_:1})]),_:1})]),default:Object(c["cb"])(()=>{var a;return[Object(c["n"])("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=Object(c["eb"])(()=>{},["prevent"]))},[Object(c["p"])(Object(c["S"])(null===(a=e.userInfo)||void 0===a?void 0:a.surname)+" ",1),Object(c["q"])(l)])]}),_:1})):Object(c["l"])("",!0)]),e.userInfo?Object(c["l"])("",!0):(Object(c["I"])(),Object(c["m"])("div",_,[Object(c["q"])(r,{class:"nav-item nav-link",to:"/register"},{default:Object(c["cb"])(()=>t[7]||(t[7]=[Object(c["p"])("Register")])),_:1}),Object(c["q"])(r,{class:"nav-item nav-link",to:"/login"},{default:Object(c["cb"])(()=>t[8]||(t[8]=[Object(c["p"])("Sign In")])),_:1})]))])])])])])])}var k=a("5502"),P=a("35c8"),S={name:"Navbar",components:{DownOutlined:P["a"]},methods:{logout(){this.$store.dispatch("logout").then(()=>{this.$router.push("/")})}},computed:{...Object(k["b"])({user:"get_user",userInfo:"get_user_info"})},mounted(){console.log("Component mounted, user state:",this.user),console.log("Component mounted, userInfo state:",this.userInfo),setTimeout(()=>{console.log("Delayed check, user state:",this.user),console.log("Delayed check, userInfo state:",this.userInfo)},500)},watch:{user(e){console.log("User state updated in Navbar:",e)},userInfo(e){console.log("UserInfo state updated in Navbar:",e)}}};a("d8bd");const w=u()(S,[["render",I]]);var q=w,x={name:"Layout",components:{FooterPage:i,NavbarPage:q}};a("f84a");const N=u()(x,[["render",o],["__scopeId","data-v-47063d2e"]]);t["a"]=N},3871:function(e,t,a){},"5f66":function(e,t,a){},"71a5":function(e,t,a){"use strict";a("3871")},"9ab3":function(e,t,a){"use strict";a("f09b")},d8bd:function(e,t,a){"use strict";a("5f66")},f09b:function(e,t,a){},f84a:function(e,t,a){"use strict";a("0ff3")}}]);
//# sourceMappingURL=chunk-5c516a74.f6586215.js.map