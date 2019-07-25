(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e88f8"],{"8a92":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"q-pa-md doc-container"},[t("div",{staticClass:"column items-center justify-center"},[e._m(0),t("div",{staticClass:"col"},[t("q-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"min-width":"250px","max-width":"350px"},attrs:{options:e.companies,label:"Select Company","option-value":"ID","option-label":"name","options-cover":"","stack-label":"",name:"company","data-vv-as":"selected","error-message":e.errors.first("company"),error:!!e.errors.first("company"),"bottom-slots":""},model:{value:e.seatData.company,callback:function(a){e.$set(e.seatData,"company",a)},expression:"seatData.company"}})],1),t("div",{staticClass:"col"},[t("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"min-width":"250px","max-width":"350px"},attrs:{color:"primary",name:"seatType",label:"Seat Type","error-message":e.errors.first("seatType"),error:!!e.errors.first("seatType"),"bottom-slots":""},model:{value:e.seatData.seatType,callback:function(a){e.$set(e.seatData,"seatType",a)},expression:"seatData.seatType"}})],1),t("div",{staticClass:"col"},[t("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"min-width":"250px","max-width":"350px"},attrs:{color:"primary",name:"name",label:"Name","error-message":e.errors.first("name"),error:!!e.errors.first("name"),"bottom-slots":""},model:{value:e.seatData.name,callback:function(a){e.$set(e.seatData,"name",a)},expression:"seatData.name"}})],1),t("div",{staticClass:"col"},[t("q-btn",{attrs:{loading:e.loading,type:"button",label:"Add",color:"secondary"},on:{click:function(a){return a.preventDefault(),e.validateForm(a)}}})],1)])])},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col"},[t("h3",{attrs:{color:"primary"}},[e._v("Add Seat")])])}],i=(t("7f7f"),t("3c93")),r=t.n(i),o=t("2f62"),c=t("3552"),l={data:function(){return{params:{name:null,company:null,seatType:null},loading:!1}},computed:r()({},Object(o["c"])({companies:"seatCompanies",seatTypes:"seatTypes",warehouses:"warehouses"}),{seatData:function(){return this.params},getSeatCode:function(){return this.seatData.name||this.generateCode},generateCode:function(){return this.params.company&&this.params.seatType?"".concat(this.params.company.name,"-").concat(this.params.seatType,"-"):null},getParams:function(){return{code:this.params.name,name:this.params.name,seat_type:this.params.seatType,testing_section_id:1,storage_location_id:1,company_id:this.params.company.ID,warehouse_id:1}}}),watch:{"seatData.company":function(){this.setCode()},"seatData.seatType":function(){this.setCode()}},methods:{setCode:function(){var e=this.generateCode;e&&(this.seatData.name=e)},validateForm:function(){var e=this;this.$validator.validateAll().then(function(a){if(e.loading=!0,!a)return e.loading=!1,!1;Object(c["b"])(e.getParams).then(function(a){var t=a.data.data;e.$q.notify({message:"Successfully Added",type:"positive",timeout:3e3,color:"positive"}),setTimeout(function(){this.$router.push({name:"home.seatsUpdate",params:{id:t.id}})}.bind(e),1e3)}).catch(function(a){e.$q.notify({message:a,type:"negative",timeout:3e3,color:"negative"})}).then(function(){e.loading=!1})})}}},m=l,p=t("2877"),d=Object(p["a"])(m,s,n,!1,null,null,null);a["default"]=d.exports}}]);