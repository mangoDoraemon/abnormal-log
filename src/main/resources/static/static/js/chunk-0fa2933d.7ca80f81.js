(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fa2933d"],{"3f46":function(a,l,e){},e81a:function(a,l,e){"use strict";e.r(l);var t=function(){var a=this,l=a.$createElement,e=a._self._c||l;return e("div",[e("div",{staticClass:"app-container"},[e("el-row",[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("学件基础信息")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"80px",size:"mini"}},[e("el-row",{attrs:{gutter:"250"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"学件名称:"}},[e("el-input",{staticClass:"box1",attrs:{placeholder:"业务告警根因分析",disabled:!0}})],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"对象类型:","label-width":"80px"}},[e("el-select",{style:{width:"100%"},attrs:{placeholder:"云平台告警",disabled:!0},model:{value:a.value,callback:function(l){a.value=l},expression:"value"}},a._l(a.options,(function(a){return e("el-option",{key:a.value,attrs:{placeholder:"租户队列",label:a.label,value:a.value}})})),1)],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"数据粒度:"}},[e("el-select",{style:{width:"100%"},attrs:{placeholder:"无",disabled:!0},model:{value:a.value,callback:function(l){a.value=l},expression:"value"}},a._l(a.options,(function(a){return e("el-option",{key:a.value,attrs:{placeholder:"1分钟",label:a.label,value:a.value}})})),1)],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"指标名称(中文):","label-width":"120px"}},[e("el-input",{staticClass:"box1",attrs:{disabled:!0,placeholder:"alarm"}})],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"指标单位:"}},[e("el-input",{staticClass:"box1",attrs:{disabled:!0,placeholder:""}})],1)],1)],1)],1)],1)])],1)],1),e("div",[e("el-row",[e("el-card",{staticClass:"box-card2"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("训练数据接入")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"80px",size:"mini"}},[e("el-row",{attrs:{gutter:"20"}},[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"数据源库名:","label-width":"100px"}},[e("el-select",{style:{width:"100%"},attrs:{placeholder:"ocp_resm",disabled:!0},model:{value:a.value,callback:function(l){a.value=l},expression:"value"}},a._l(a.options,(function(a){return e("el-option",{key:a.value,attrs:{placeholder:"1分钟",label:a.label,value:a.value}})})),1)],1)],1),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"数据源表名:","label-width":"310px"}},[e("el-input",{staticClass:"box1",attrs:{disabled:!0,placeholder:"sysm_rd_alarm"}})],1)],1),e("el-col",{attrs:{span:19}},[e("el-form-item",{attrs:{label:"数据提取SQL:","label-width":"110px"}},[e("el-input",{attrs:{disabled:!0,type:"textarea",rows:4,placeholder:"select alarm_id,resource_id,alarm_original_grade,alarm_first_occur_time,discharge_time,alarm_index,alarm_content from ocp_resm.sysm_rd_alarm"},model:{value:a.textarea,callback:function(l){a.textarea=l},expression:"textarea"}})],1)],1)],1)],1)],1)])],1)],1),e("div",[e("el-row",[e("el-card",{staticClass:"box-card3"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("训练数据处理")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"80px",size:"mini"}},[e("el-row",{attrs:{gutter:"5"}},[e("el-col",{attrs:{span:15}},[e("el-form-item",{attrs:{label:"训练数据提取规则:","label-width":"140px"}},[e("el-input",{staticClass:"box1",attrs:{disabled:!0,placeholder:"GROUPS=db,GROUPS=os,GROUPS=bd,DISPATCH_STATUS=1"}})],1)],1),e("el-col",{attrs:{span:7}},[e("font",{staticClass:"sub-title",staticStyle:{"font-size":"12px","margin-left":"5px"}},[a._v('"表字段=关键词“进行设置，多组规则以英文逗号分割')])],1)],1),e("el-row",{attrs:{gutter:"5"}},[e("el-col",{attrs:{span:15}},[e("el-form-item",{attrs:{label:"训练数据过滤规则:","label-width":"140px"}},[e("el-input",{staticClass:"box1",attrs:{disabled:!0,placeholder:"TECH_STACK=存储设备,TECH_STACK=大数据,TECH_STACK=应用系统监控"}})],1)],1),e("el-col",{attrs:{span:7}},[e("font",{staticClass:"sub-title",staticStyle:{"font-size":"12px","margin-left":"5px"}},[a._v('"表字段=关键词“进行设置，多组规则以英文逗号分割')])],1)],1),e("el-row",{attrs:{gutter:"250"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"时间为空处理逻辑:","label-width":"140px"}},[[e("el-checkbox",{attrs:{disabled:""},model:{value:a.checked1,callback:function(l){a.checked1=l},expression:"checked1"}},[a._v("丢弃处理")]),e("el-checkbox",{attrs:{disabled:""},model:{value:a.checked2,callback:function(l){a.checked2=l},expression:"checked2"}},[a._v("填充临近数据时间")])]],2)],1)],1)],1)],1)])],1)],1),e("div",[e("el-row",[e("el-card",{staticClass:"box-card3"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("模型训练规则")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"80px",size:"mini"}},[e("el-row",{attrs:{gutter:"5"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"训练分组策略:","label-width":"140px"}},[[e("el-radio",{attrs:{disabled:"",label:"1"},model:{value:a.radio1,callback:function(l){a.radio1=l},expression:"radio1"}},[a._v("启动")]),e("el-radio",{attrs:{disabled:"",label:"2"},model:{value:a.radio1,callback:function(l){a.radio1=l},expression:"radio1"}},[a._v("停止")])]],2)],1),e("el-col",{attrs:{span:7}},[e("el-form-item",{attrs:{label:"最长关联时间:","label-width":"100px"}},[e("el-input",{staticClass:"box1",attrs:{disabled:!0,placeholder:"10"}})],1)],1),e("el-col",{attrs:{span:7}},[e("font",{staticClass:"sub-title",staticStyle:{"font-size":"12px","margin-left":"5px"}},[a._v(" 分钟")])],1)],1),e("el-row",{attrs:{gutter:"5"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"训练模型策略:","label-width":"140px"}},[[e("el-radio",{attrs:{disabled:"",label:"2"},model:{value:a.radio1,callback:function(l){a.radio1=l},expression:"radio1"}},[a._v("全新训练")]),e("el-radio",{attrs:{disabled:"",label:"1"},model:{value:a.radio1,callback:function(l){a.radio1=l},expression:"radio1"}},[a._v("增量训练")])]],2)],1)],1)],1)],1)])],1)],1),e("div",[e("el-row",[e("el-card",{staticClass:"box-card4"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("模型训练调度")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"80px",size:"mini"}},[e("el-row",{attrs:{gutter:"250"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"执行周期:","label-width":"100px"}},[e("div",[e("el-radio",{attrs:{label:"1",disabled:!0},model:{value:a.radio3,callback:function(l){a.radio3=l},expression:"radio3"}},[a._v("小时")]),e("el-radio",{attrs:{label:"2",disabled:!0},model:{value:a.radio3,callback:function(l){a.radio3=l},expression:"radio3"}},[a._v("日")]),e("el-radio",{attrs:{label:"3",disabled:!0},model:{value:a.radio3,callback:function(l){a.radio3=l},expression:"radio3"}},[a._v("周")]),e("el-radio",{attrs:{label:"4",disabled:!0},model:{value:a.radio3,callback:function(l){a.radio3=l},expression:"radio3"}},[a._v("月")])],1)])],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"每天"}},[e("el-row",{attrs:{gutter:6}},[e("el-col",{attrs:{span:"6"}},[e("el-input",{staticStyle:{"{\n                          width":"'40%'"},attrs:{placeholder:"07:00","suffix-icon":"el-icon-date",disabled:""}})],1)],1)],1)],1)],1)],1)],1)])],1)],1)])},s=[],r={data:function(){return{input:"",formData:{},cities:[{value:"1",label:"0.5分钟"},{value:"2",label:"1分钟"},{value:"3",label:"2分钟"},{value:"4",label:"5分钟"},{value:"5",label:"10分钟"},{value:"6",label:"15分钟"},{value:"7",label:"30分钟"},{value:"8",label:"1小时"},{value:"9",label:"1天"}],value6:"",radio:"1",radio1:"1",checked1:!1,checked2:!0,radio3:"2"}}},i=r,o=(e("eded"),e("2877")),d=Object(o["a"])(i,t,s,!1,null,"39238411",null);l["default"]=d.exports},eded:function(a,l,e){"use strict";e("3f46")}}]);