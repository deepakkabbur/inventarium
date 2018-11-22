webpackJsonp([47],{248:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return o});var a={success_add:"Successfully created",form_verify:"Please verify following errors"},i={pending:"PENDING",complete:"COMPLETE",initiate:"INITIATE"},o={cash:"Cash",cheque:"Cheque",bank:"Bank"}},250:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var a=function(){return r.e(49).then(r.bind(null,254))}},300:function(t,e,r){"use strict";var a=r(27),i=r.n(a),o=r(15),s=r(250),n=r(248);e.a={name:"production-create",components:{Autocomplete:s.a},mounted:function(){window.componentHandler.upgradeAllRegistered()},computed:i()({},Object(o.c)({products:"getProducts"}),{productionParams:function(){return this.params},selectedProduct:{get:function(){return this.product},set:function(t){this.product=t,this.productionParams.product=t.id,this.validProductSelected=!0,window.componentHandler.upgradeAllRegistered()}},numberOfHours:{get:function(){return this.params.number_of_hours/3600},set:function(t){this.params.number_of_hours=3600*t}}}),methods:i()({},Object(o.b)(["fetchProducts","createProduction"]),{addProduction:function(){var t=this;this.$validator.validateAll().then(function(e){e&&t.createProduction(t.params).then(function(){t.$toastr.s(n.a.success_add),t.$emit("added",!0)}).catch(function(e){t.$toastr.e(e)})})}}),data:function(){return{product:{},validProductSelected:!1,hrs:0,minutes:0,params:{product:void 0,number_of_hours:"",product_quantity:0,apprx_raw_material_weight:0}}}}},365:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(300),i=r(366),o=r(26),s=o(a.a,i.a,!1,null,null,null);e.default=s.exports},366:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mdl-cell--4-col-phone text-center"},[r("h3",[t._v("Production")]),t._v(" "),r("form",{attrs:{method:"post",novalidate:""}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.validProductSelected,expression:"!validProductSelected"}]},[t.validProductSelected?r("p",[t._v(t._s(t.product.name))]):r("autocomplete",{attrs:{data:t.products.data,action:t.fetchProducts,field:"name",multiSelect:!1,placeholder:"Select Product"},on:{selected:function(e){t.selectedProduct=e}}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.validProductSelected,expression:"validProductSelected"}]},[r("div",[r("h5",[t._v(t._s(t.product.name))])]),t._v(" "),r("div",[r("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:t.errors.has("number_of_hours")}},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|integer|min_value:1",expression:"'required|integer|min_value:1'"},{name:"model",rawName:"v-model",value:t.numberOfHours,expression:"numberOfHours"}],staticClass:"mdl-textfield__input",attrs:{name:"number_of_hours",id:"number_of_hours"},domProps:{value:t.numberOfHours},on:{input:function(e){e.target.composing||(t.numberOfHours=e.target.value)}}}),t._v(" "),r("label",{staticClass:"mdl-textfield__label",attrs:{for:"number_of_hours"}},[t._v("Number of Hours")]),t._v(" "),r("span",{staticClass:"mdl-textfield__error"},[t._v(t._s(t.errors.first("number_of_hours")))])])]),t._v(" "),r("div",[r("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:t.errors.has("product_quantity")}},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|integer|min_value:1",expression:"'required|integer|min_value:1'"},{name:"model",rawName:"v-model",value:t.productionParams.product_quantity,expression:"productionParams.product_quantity"}],staticClass:"mdl-textfield__input",attrs:{name:"product_quantity",id:"product_quantity"},domProps:{value:t.productionParams.product_quantity},on:{input:function(e){e.target.composing||t.$set(t.productionParams,"product_quantity",e.target.value)}}}),t._v(" "),r("label",{staticClass:"mdl-textfield__label",attrs:{for:"product_quantity"}},[t._v("Product")]),t._v(" "),r("span",{staticClass:"mdl-textfield__error"},[t._v(t._s(t.errors.first("product_quantity")))])])]),t._v(" "),r("div",[r("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:t.errors.has("apprx_raw_material_weight")}},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|integer|min_value:1",expression:"'required|integer|min_value:1'"},{name:"model",rawName:"v-model",value:t.productionParams.apprx_raw_material_weight,expression:"productionParams.apprx_raw_material_weight"}],staticClass:"mdl-textfield__input",attrs:{name:"apprx_raw_material_weight",id:"apprx_raw_material_weight"},domProps:{value:t.productionParams.apprx_raw_material_weight},on:{input:function(e){e.target.composing||t.$set(t.productionParams,"apprx_raw_material_weight",e.target.value)}}}),t._v(" "),r("label",{staticClass:"mdl-textfield__label",attrs:{for:"apprx_raw_material_weight"}},[t._v("Apprx Raw Material Weight")]),t._v(" "),r("span",{staticClass:"mdl-textfield__error"},[t._v(t._s(t.errors.first("apprx_raw_material_weight")))])])]),t._v(" "),r("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored custom-button--primary",attrs:{type:"button"},on:{click:t.addProduction}},[t._v("Add\n        ")])])])])},i=[],o={render:a,staticRenderFns:i};e.a=o}});
//# sourceMappingURL=47.b580078bf417967b2787.js.map