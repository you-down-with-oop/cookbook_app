(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"74381a66"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e),i=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[e]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/test"}},[e._v("Test")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/signup"}},[e._v("Signup")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/logout"}},[e._v("Logout")])],1),e._m(0),n("router-view")],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Navbar")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("\n            Home\n            "),n("span",{staticClass:"sr-only"},[e._v("(current)")])])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Link")])]),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n            Dropdown\n          ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Action")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Another action")]),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Something else here")])])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[e._v("Disabled")])])]),n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),n("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[e._v("Search")])])])])}],o=(n("034f"),n("2877")),s={},l=Object(o["a"])(s,r,i,!1,null,null,null),c=l.exports,u=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container home"},[n("h1",[e._v("New Recipe")]),e._v("\n  Title:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v("\n  Chef:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.chef,expression:"chef"}],attrs:{type:"text"},domProps:{value:e.chef},on:{input:function(t){t.target.composing||(e.chef=t.target.value)}}}),e._v("\n  Prep time:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.prepTime,expression:"prepTime"}],attrs:{type:"text"},domProps:{value:e.prepTime},on:{input:function(t){t.target.composing||(e.prepTime=t.target.value)}}}),e._v("\n  Ingredients:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredients,expression:"ingredients"}],attrs:{type:"text"},domProps:{value:e.ingredients},on:{input:function(t){t.target.composing||(e.ingredients=t.target.value)}}}),e._v("\n  Directions:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.directions,expression:"directions"}],attrs:{type:"text"},domProps:{value:e.directions},on:{input:function(t){t.target.composing||(e.directions=t.target.value)}}}),e._v("\n  Image url:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.imageUrl,expression:"imageUrl"}],attrs:{type:"text"},domProps:{value:e.imageUrl},on:{input:function(t){t.target.composing||(e.imageUrl=t.target.value)}}}),n("button",{on:{click:function(t){return e.createRecipe()}}},[e._v("Create")]),n("h1",[e._v(e._s(e.message))]),e._l(e.recipes,function(t){return n("div",[n("h2",[e._v(e._s(t.title))]),n("img",{attrs:{src:t.image_url,alt:""}}),n("div",[n("button",{on:{click:function(n){return e.showRecipe(t)}}},[e._v("More info")])]),t===e.currentRecipe?n("div",[n("p",[e._v("Ingredients: "+e._s(t.ingredients))]),n("p",[e._v("Directions: "+e._s(t.directions))]),n("p",[e._v("Prep time: "+e._s(t.prep_time))]),n("h4",[e._v("Edit recipe")]),n("div",[e._v("\n        Title:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"recipe.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(n){n.target.composing||e.$set(t,"title",n.target.value)}}}),e._v("\n        Chef:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.chef,expression:"recipe.chef"}],attrs:{type:"text"},domProps:{value:t.chef},on:{input:function(n){n.target.composing||e.$set(t,"chef",n.target.value)}}}),e._v("\n        Prep time:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.prep_time,expression:"recipe.prep_time"}],attrs:{type:"text"},domProps:{value:t.prep_time},on:{input:function(n){n.target.composing||e.$set(t,"prep_time",n.target.value)}}}),e._v("\n        Ingredients:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredients,expression:"recipe.ingredients"}],attrs:{type:"text"},domProps:{value:t.ingredients},on:{input:function(n){n.target.composing||e.$set(t,"ingredients",n.target.value)}}}),e._v("\n        Directions:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.directions,expression:"recipe.directions"}],attrs:{type:"text"},domProps:{value:t.directions},on:{input:function(n){n.target.composing||e.$set(t,"directions",n.target.value)}}}),n("button",{on:{click:function(n){return e.updateRecipe(t)}}},[e._v("Update")])]),n("button",{on:{click:function(n){return e.destroyRecipe(t)}}},[e._v("Destroy recipe")])]):e._e()])})],2)},d=[],m=n("bc3a"),v=n.n(m),f={data:function(){return{message:"Welcome to Vue.js!",recipes:[],currentRecipe:{},title:"",chef:"",prepTime:"",ingredients:"",directions:"",imageUrl:""}},created:function(){var e=this;v.a.get("/api/recipes").then(function(t){e.recipes=t.data,console.log(e.recipes)})},methods:{createRecipe:function(){var e=this;console.log("Create the recipe...");var t={title:this.title,chef:this.chef,prep_time:this.prepTime,ingredients:this.ingredients,directions:this.directions,image_url:this.imageUrl};v.a.post("/api/recipes",t).then(function(t){console.log("Success",t.data),e.recipes.push(t.data),e.title="",e.chef="",e.prepTime="",e.ingredients="",e.directions="",e.imageUrl=""}).catch(function(e){return console.log(e.response)})},showRecipe:function(e){this.currentRecipe===e?this.currentRecipe={}:this.currentRecipe=e},updateRecipe:function(e){var t={title:e.title,chef:e.chef,prep_time:e.prep_time,ingredients:e.ingredients,directions:e.directions};v.a.patch("/api/recipes/"+e.id,t).then(function(t){console.log("Update successful",t.data),e.title=t.data.title,e.chef=t.data.chef,e.prep_time=t.data.prep_time,e.ingredients=t.data.ingredients,e.directions=t.data.directions})},destroyRecipe:function(e){var t=this;v.a.delete("/api/recipes/"+e.id).then(function(n){console.log("Delete successful",n.data);var a=t.recipes.indexOf(e);t.recipes.splice(a,1)})}}},g=f,h=(n("cccb"),Object(o["a"])(g,p,d,!1,null,null,null)),_=h.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container test"},[n("h1",[e._v("This is a test page")])])}],C={},y=Object(o["a"])(C,b,w,!1,null,null,null),x=y.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signup"},[n("div",{staticClass:"container"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[n("h1",[e._v("Signup")]),n("ul",e._l(e.errors,function(t){return n("li",{staticClass:"text-danger"},[e._v(e._s(t))])}),0),n("div",{staticClass:"form-group"},[n("label",[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[e._v("Password confirmation:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}})]),n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},j=[],N=(n("7f7f"),{data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};v.a.post("/api/users",t).then(function(t){e.$router.push("/login")}).catch(function(t){e.errors=t.response.data.errors})}}}),S=N,k=Object(o["a"])(S,P,j,!1,null,null,null),T=k.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"container"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[n("h1",[e._v("Login")]),n("ul",e._l(e.errors,function(t){return n("li",{staticClass:"text-danger"},[e._v(e._s(t))])}),0),n("div",{staticClass:"form-group"},[n("label",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},O=[],R={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e=this,t={email:this.email,password:this.password};v.a.post("/api/sessions",t).then(function(t){v.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),e.$router.push("/")}).catch(function(t){e.errors=["Invalid email or password."],e.email="",e.password=""})}}},E=R,D=Object(o["a"])(E,$,O,!1,null,null,null),U=D.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logout"})},A=[],L={created:function(){delete v.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/")}},M=L,z=Object(o["a"])(M,I,A,!1,null,null,null),B=z.exports;a["a"].use(u["a"]);var H=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/test",name:"test",component:x},{path:"/signup",name:"signup",component:T},{path:"/login",name:"login",component:U},{path:"/logout",name:"logout",component:B}]});v.a.defaults.baseURL="/";var J=localStorage.getItem("jwt");J&&(v.a.defaults.headers.common["Authorization"]="Bearer "+J),a["a"].config.productionTip=!1,new a["a"]({router:H,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},cccb:function(e,t,n){"use strict";var a=n("d563"),r=n.n(a);r.a},d563:function(e,t,n){}});
//# sourceMappingURL=app.f7e4c316.js.map