(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b46c04cc"],{"082f":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"app-container"},[e("el-row",[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("学件基础信息")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"80px",size:"medium"}},[e("el-row",{attrs:{gutter:"250"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"学件名称"}},[e("el-input",{staticStyle:{"{\n                        width":"'50%'"},attrs:{size:"mini",placeholder:"资源池容量预测",disabled:""}})],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"对象类型"}},[e("el-input",{attrs:{size:"mini",placeholder:"虚机资源池",disabled:""}})],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"数据粒度"}},[e("el-input",{attrs:{size:"mini",placeholder:"1天",disabled:""}})],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"指标名称"}},[e("el-input",{attrs:{size:"mini",placeholder:"虚机开通资源",disabled:""}})],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"指标单位"}},[e("el-input",{staticStyle:{"{\n                        width":"'30%'"},attrs:{size:"mini",placeholder:"C",disabled:""}})],1)],1)],1)],1)],1)])],1),e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-card",{staticClass:"box-card-four"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("训练数据接入")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"120px",size:"medium"}},[e("el-row",{attrs:{gutter:"250"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"数据源库名:","label-width":"100px"}},[e("el-select",{style:{width:"50%"},attrs:{size:"mini",disabled:"",placeholder:"请选择"},model:{value:a.formData.kuming,callback:function(t){a.$set(a.formData,"kuming",t)},expression:"formData.kuming"}},a._l(a.objectOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"数据源表名","label-width":"100px"}},[e("el-input",{staticClass:"box1",attrs:{size:"mini",disabled:!0},model:{value:a.formData.biaoming,callback:function(t){a.$set(a.formData,"biaoming",t)},expression:"formData.biaoming"}})],1)],1)],1),e("el-row",{attrs:{gutter:"50"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"数据提取SQL:","label-width":"100px"}},[e("el-input",{attrs:{disabled:"",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:a.formData.sql,callback:function(t){a.$set(a.formData,"sql",t)},expression:"formData.sql"}})],1)],1)],1)],1)],1)])],1),e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-card",{staticClass:"box-card-one"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("训练处理数据")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"120px",size:"medium"}},[e("el-row",{attrs:{gutter:"40"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"数值有效范围："}},[e("el-col",{attrs:{span:"10"}},[e("el-input",{staticStyle:{"{\n                          width":"'400%'"},attrs:{size:"mini",disabled:""},model:{value:a.formData.shuzhirRangStart,callback:function(t){a.$set(a.formData,"shuzhirRangStart",t)},expression:"formData.shuzhirRangStart"}})],1),e("el-col",{staticClass:"line",attrs:{span:2}},[a._v("-")]),e("el-col",{attrs:{span:"10"}},[e("el-input",{staticStyle:{"{\n                          width":"'40%'"},attrs:{size:"mini",disabled:""}})],1)],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:"数据保留小数位数：","label-width":"150px",size:"medium"}},[e("el-select",{style:{width:"100%"},attrs:{size:"mini",disabled:"",placeholder:"请选择"},model:{value:a.formData.weikongshuju,callback:function(t){a.$set(a.formData,"weikongshuju",t)},expression:"formData.weikongshuju"}},a._l(a.objectOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1)],1),e("el-row",{attrs:{gutter:"40"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"数据采样处理策略：","label-width":"150px",size:"medium"}},[e("el-select",{style:{width:"30%"},attrs:{size:"mini",disabled:"",placeholder:"请选择"},model:{value:a.formData.shujulidu,callback:function(t){a.$set(a.formData,"shujulidu",t)},expression:"formData.shujulidu"}},a._l(a.objectOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1),a._v(" "),e("el-radio",{attrs:{disabled:"",label:"1"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("最大值")]),e("el-radio",{attrs:{disabled:"",label:"2"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("最小值")]),e("el-radio",{attrs:{disabled:"",label:"3"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("平均值")])],1)],1)],1)],1)],1)])],1),e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-card",{staticClass:"box-card-two"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("模型训练规则")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"120px",size:"medium"}},[e("el-row",{attrs:{gutter:"50"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"基线对比类型:","label-width":"160px"}},[e("el-select",{style:{width:"50%"},attrs:{size:"mini",disabled:"",placeholder:"请选择"},model:{value:a.formData.tongbuyuanze,callback:function(t){a.$set(a.formData,"tongbuyuanze",t)},expression:"formData.tongbuyuanze"}},a._l(a.objectOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1),e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"容量基线","label-width":"75px"}},[e("el-radio",{attrs:{disabled:"",label:"2"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("基线低线")]),e("el-input",{style:{width:"20%"},attrs:{size:"mini",disabled:""}}),a._v(" "),e("el-radio",{attrs:{disabled:"",label:"1"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("基线高限")]),e("el-input",{style:{width:"30%"},attrs:{size:"mini",placeholder:"85000",disabled:""}})],1)],1)],1),e("el-row",{attrs:{gutter:"50"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"预测周期长度:","label-width":"160px"}},[e("el-select",{style:{width:"50%"},attrs:{size:"mini",disabled:"",placeholder:"请选择"},model:{value:a.formData.jidu,callback:function(t){a.$set(a.formData,"jidu",t)},expression:"formData.jidu"}},a._l(a.objectOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:"容量占比","label-width":"75px"}},[e("el-input",{staticClass:"box1",attrs:{size:"mini",disabled:!0},model:{value:a.formData.baifen,callback:function(t){a.$set(a.formData,"baifen",t)},expression:"formData.baifen"}},[e("template",{slot:"append"},[a._v("%")])],2)],1)],1),e("el-col",{attrs:{span:8}})],1)],1)],1)])],1),e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-card",{staticClass:"box-card-three"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("模型训练调度")])]),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-form",{attrs:{model:a.formData,"label-width":"80px",size:"medium"}},[e("el-row",{attrs:{gutter:"250"}},[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"执行周期:","label-width":"100px"}},[e("div",[e("el-radio",{attrs:{disabled:"",label:"4"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("小时")]),e("el-radio",{attrs:{disabled:"",label:"2"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("日")]),e("el-radio",{attrs:{disabled:"",label:"3"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("周")]),e("el-radio",{attrs:{disabled:"",label:"1"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("月")])],1)])],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"每月"}},[e("el-row",{attrs:{gutter:6}},[e("el-col",{attrs:{span:"5"}},[e("el-input",{staticStyle:{"{\n                          width":"'400%'"},attrs:{size:"mini",disabled:""},model:{value:a.formData.shuzhirRangStartWeek,callback:function(t){a.$set(a.formData,"shuzhirRangStartWeek",t)},expression:"formData.shuzhirRangStartWeek"}})],1),e("el-col",{staticClass:"line",attrs:{span:3}}),e("el-col",{attrs:{span:"10"}},[e("el-input",{staticStyle:{"{\n                          width":"'40%'"},attrs:{"suffix-icon":"el-icon-date",placeholder:"05:00",size:"mini",disabled:""}})],1)],1)],1)],1)],1)],1)],1)])],1)],1)},i=[],s={data:function(){return{formData:{objectValue:"虚拟机",xuejianName:"虚拟机扩缩容",shujulidu:"1天",zhibiaoName:"虚机性能",zhibiaodanwei:"",shuzhirRangStart:"0",shuzhirRangEnd:"100",weikongshuju:"0位",tongbuyuanze:"上限",jidu:"一年",baifen:"80",biaoming:"capacity_history_data_zj",shuzhirRangStartWeek:1,kuming:"aiops_ns3_hive_db_new",sql:"select obj_name,index_name,value,data_time from\n aiops_ns3_hive_db_new.capacity_history_data_zj where index_name ='HDFS存储'"},objectOptions:{},radio:"1",radio1:"2"}}},r=s,o=(e("d51b5"),e("2877")),n=Object(o["a"])(r,l,i,!1,null,"11407d06",null);t["default"]=n.exports},be78:function(a,t,e){},d51b5:function(a,t,e){"use strict";e("be78")}}]);