(self["webpackChunk"]=self["webpackChunk"]||[]).push([[334],{70347:function(){},66535:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});a(58024);var n=a(91894),r=a(67294),c=a(67265),l=a(85893),o="5ZaW",i=e=>{var t=e.ModalRef;return(0,r.useImperativeHandle)(t,(()=>({getData:()=>[1,2,3]}))),(0,l.jsx)(l.Fragment,{children:"Children"})};class s extends r.Component{constructor(){super(...arguments),this.ModalRef=r.createRef(),this.state={}}componentDidMount(){console.log(this.ModalRef.current.getData())}render(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.ZP,{"data-inspector-line":"27","data-inspector-column":"8","data-inspector-relative-path":"src/pages/RefDemo/ClassUseHookRef/index.tsx",_nk:"".concat(o,"11"),children:(0,l.jsx)(n.Z,{"data-inspector-line":"28","data-inspector-column":"10","data-inspector-relative-path":"src/pages/RefDemo/ClassUseHookRef/index.tsx",style:{margin:24},_nk:"".concat(o,"21"),children:(0,l.jsx)(i,{"data-inspector-line":"29","data-inspector-column":"12","data-inspector-relative-path":"src/pages/RefDemo/ClassUseHookRef/index.tsx",ModalRef:this.ModalRef,_nk:"".concat(o,"31")})})})})}}},91894:function(e,t,a){"use strict";a.d(t,{Z:function(){return Z}});var n=a(96156),r=a(22122),c=a(94184),l=a.n(c),o=a(98423),i=a(67294),s=a(53124),d=a(97647),u=a(90860),p=a(47428),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},m=function(e){var t=e.prefixCls,a=e.className,c=e.hoverable,o=void 0===c||c,d=f(e,["prefixCls","className","hoverable"]);return i.createElement(s.C,null,(function(e){var c=e.getPrefixCls,s=c("card",t),u=l()("".concat(s,"-grid"),a,(0,n.Z)({},"".concat(s,"-grid-hoverable"),o));return i.createElement("div",(0,r.Z)({},d,{className:u}))}))},v=m,b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function y(e){var t=e.map((function(t,a){return i.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},i.createElement("span",null,t))}));return t}var h=i.forwardRef((function(e,t){var a,c,f,m=i.useContext(s.E_),h=m.getPrefixCls,g=m.direction,x=i.useContext(d.Z),E=function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)},C=function(){var t;return i.Children.forEach(e.children,(function(e){e&&e.type&&e.type===v&&(t=!0)})),t},O=e.prefixCls,Z=e.className,N=e.extra,j=e.headStyle,P=void 0===j?{}:j,w=e.bodyStyle,k=void 0===w?{}:w,R=e.title,S=e.loading,M=e.bordered,T=void 0===M||M,D=e.size,K=e.type,H=e.cover,I=e.actions,_=e.tabList,z=e.children,A=e.activeTabKey,B=e.defaultActiveTabKey,U=e.tabBarExtraContent,F=e.hoverable,L=e.tabProps,G=void 0===L?{}:L,W=b(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),q=h("card",O),J=i.createElement(u.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},z),Q=void 0!==A,V=(0,r.Z)((0,r.Z)({},G),(a={},(0,n.Z)(a,Q?"activeKey":"defaultActiveKey",Q?A:B),(0,n.Z)(a,"tabBarExtraContent",U),a)),X=_&&_.length?i.createElement(p.Z,(0,r.Z)({size:"large"},V,{className:"".concat(q,"-head-tabs"),onChange:E}),_.map((function(e){return i.createElement(p.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(R||N||X)&&(f=i.createElement("div",{className:"".concat(q,"-head"),style:P},i.createElement("div",{className:"".concat(q,"-head-wrapper")},R&&i.createElement("div",{className:"".concat(q,"-head-title")},R),N&&i.createElement("div",{className:"".concat(q,"-extra")},N)),X));var Y=H?i.createElement("div",{className:"".concat(q,"-cover")},H):null,$=i.createElement("div",{className:"".concat(q,"-body"),style:k},S?J:z),ee=I&&I.length?i.createElement("ul",{className:"".concat(q,"-actions")},y(I)):null,te=(0,o.Z)(W,["onTabChange"]),ae=D||x,ne=l()(q,(c={},(0,n.Z)(c,"".concat(q,"-loading"),S),(0,n.Z)(c,"".concat(q,"-bordered"),T),(0,n.Z)(c,"".concat(q,"-hoverable"),F),(0,n.Z)(c,"".concat(q,"-contain-grid"),C()),(0,n.Z)(c,"".concat(q,"-contain-tabs"),_&&_.length),(0,n.Z)(c,"".concat(q,"-").concat(ae),ae),(0,n.Z)(c,"".concat(q,"-type-").concat(K),!!K),(0,n.Z)(c,"".concat(q,"-rtl"),"rtl"===g),c),Z);return i.createElement("div",(0,r.Z)({ref:t},te,{className:ne}),f,Y,$,ee)})),g=h,x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},E=function(e){return i.createElement(s.C,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,c=e.className,o=e.avatar,s=e.title,d=e.description,u=x(e,["prefixCls","className","avatar","title","description"]),p=a("card",n),f=l()("".concat(p,"-meta"),c),m=o?i.createElement("div",{className:"".concat(p,"-meta-avatar")},o):null,v=s?i.createElement("div",{className:"".concat(p,"-meta-title")},s):null,b=d?i.createElement("div",{className:"".concat(p,"-meta-description")},d):null,y=v||b?i.createElement("div",{className:"".concat(p,"-meta-detail")},v,b):null;return i.createElement("div",(0,r.Z)({},u,{className:f}),m,y)}))},C=E,O=g;O.Grid=v,O.Meta=C;var Z=O},58024:function(e,t,a){"use strict";a(38663),a(70347),a(71748),a(18106)}}]);