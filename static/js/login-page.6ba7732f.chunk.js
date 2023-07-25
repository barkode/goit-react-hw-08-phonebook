"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[88],{8569:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(4165),a=n(5861),i=n(9439),o=n(2791),s=n(9434),u=n(9273),d=n(3736),c=n(7426),l=n(4554),m=n(9164),p=n(890),x=n(1087),f=n(184),h=function(){var e=(0,s.I0)(),t=(0,o.useState)(""),n=(0,i.Z)(t,2),h=n[0],v=n[1],b=(0,o.useState)(""),Z=(0,i.Z)(b,2),g=Z[0],w=Z[1],k=(0,o.useState)(""),W=(0,i.Z)(k,2),S=W[0],j=W[1],y=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),h&&g){t.next=4;break}return j("Please fill in all fields"),t.abrupt("return");case 4:try{e((0,u.Ib)({email:h,password:g})),v(""),w("")}catch(S){j("Invalid email or password")}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,f.jsx)(m.Z,{maxWidth:"sm",children:(0,f.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"5rem"},children:[(0,f.jsx)(p.Z,{variant:"h4",gutterBottom:!0,children:"Login"}),S&&(0,f.jsx)(p.Z,{variant:"body2",color:"error",gutterBottom:!0,children:S}),(0,f.jsxs)(l.Z,{component:"form",onSubmit:y,autoComplete:"on",sx:{display:"flex",flexDirection:"column",width:"100%",maxWidth:"400px","& .MuiTextField-root":{marginBottom:"1rem"}},children:[(0,f.jsx)(c.Z,{type:"email",name:"email",value:h,onChange:function(e){v(e.target.value)},label:"Email",placeholder:"Enter email",required:!0}),(0,f.jsx)(c.Z,{type:"password",name:"password",value:g,onChange:function(e){w(e.target.value)},label:"Password",placeholder:"Enter password",required:!0}),(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[(0,f.jsx)(d.Z,{type:"submit",variant:"outlined",sx:{width:"40%"},children:"Login"}),(0,f.jsx)(x.rU,{to:"/register",children:"Don't have an account? Sign Up"})]})]})]})})},v=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(h,{})})}},9164:function(e,t,n){n.d(t,{Z:function(){return W}});var r=n(4942),a=n(3366),i=n(7462),o=n(2791),s=n(8182),u=n(1122),d=n(1217),c=n(4419),l=n(7078),m=n(3457),p=n(5080),x=n(184),f=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,p.Z)(),v=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:h})};var Z=n(4036),g=n(6934),w=n(1402),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,l=e.useThemeProps,m=void 0===l?b:l,p=e.componentName,h=void 0===p?"MuiContainer":p,Z=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),g=o.forwardRef((function(e,t){var n=m(e),r=n.className,o=n.component,l=void 0===o?"div":o,p=n.disableGutters,v=void 0!==p&&p,b=n.fixed,g=void 0!==b&&b,w=n.maxWidth,k=void 0===w?"lg":w,W=(0,a.Z)(n,f),S=(0,i.Z)({},n,{component:l,disableGutters:v,fixed:g,maxWidth:k}),j=function(e,t){var n=e.classes,r=e.fixed,a=e.disableGutters,i=e.maxWidth,o={root:["root",i&&"maxWidth".concat((0,u.Z)(String(i))),r&&"fixed",a&&"disableGutters"]};return(0,c.Z)(o,(function(e){return(0,d.Z)(t,e)}),n)}(S,h);return(0,x.jsx)(Z,(0,i.Z)({as:l,ownerState:S,className:(0,s.Z)(j.root,r),ref:t},W))}));return g}({createStyledComponent:(0,g.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiContainer"})}}),W=k}}]);
//# sourceMappingURL=login-page.6ba7732f.chunk.js.map