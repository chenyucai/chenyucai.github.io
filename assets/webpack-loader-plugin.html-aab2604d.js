import{_ as l,o as a,c as o,b as e,d as c}from"./app-5b0f25a8.js";const n={},r=e("h1",{id:"webpack中loader和plugin的区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack中loader和plugin的区别","aria-hidden":"true"},"#"),c(" webpack中loader和plugin的区别")],-1),s=e("ul",null,[e("li",null,"因为webpack其实本质是一个js模块的打包器，它自身是不认识其他类型文件的，所以有了loader这个东西。"),e("li",null,"loader最主要的任务就是把那些webapck无法识别的源代码文件转换成可以识别的js模块。所以一般loader的作用是对源代码进行操作，或者对最终产物前的中间产物进行操作，如less-loader，style-loader。"),e("li",null,"而plugin能做的事情很多，可以扩展webpack的功能，对产物进行各种操作，比如html-plugin可以把js产物引入其中，而且webpack还提供了基本涵盖整个构建周期的钩子。")],-1),t=[r,s];function d(i,p){return a(),o("div",null,t)}const _=l(n,[["render",d],["__file","webpack-loader-plugin.html.vue"]]);export{_ as default};