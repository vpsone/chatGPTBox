"use strict";(self.webpackChunkchatgptbox=self.webpackChunkchatgptbox||[]).push([[42],{462:(e,t,n)=>{var a=n(5861),r=n(4687),o=n.n(r),i=n(6400),c=n(4942),u=n(3324),l=n(5248),s=n(294),p=n(340),d=n(5529),h=n(3150),g=n.n(h),f=n(2215),v=n(9923),b=n(1072),m=n(5434),y=n(5697),C=n.n(y),k=n(3638),Z=n(6584);function w(e){var t=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(a)}function x(e,t){return A.apply(this,arguments)}function A(){return(A=(0,a.Z)(o().mark((function e(t,n){var a,r,i,c,u,l,s,p,d,h,g,f,v;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,r=new Date(a-7776e6),i=new Date(a.getTime()+864e5),(c=new Date(a)).setDate(1),u="".concat(n,"/v1/dashboard/billing/subscription"),l="".concat(n,"/v1/dashboard/billing/usage?start_date=").concat(w(r),"&end_date=").concat(w(i)),s={Authorization:"Bearer "+t,"Content-Type":"application/json"},e.prev=8,e.next=11,fetch(u,{headers:s});case 11:if((p=e.sent).ok){e.next=15;break}return console.log("Your account has been suspended. Please log in to OpenAI to check."),e.abrupt("return",[null,null,null]);case 15:return e.next=17,p.json();case 17:return d=e.sent,(h=d.hard_limit_usd)>20&&(r=c),l="".concat(n,"/v1/dashboard/billing/usage?start_date=").concat(w(r),"&end_date=").concat(w(i)),e.next=23,fetch(l,{headers:s});case 23:return p=e.sent,e.next=26,p.json();case 26:return g=e.sent,f=g.total_usage/100,v=h-f,e.abrupt("return",[h,f,v]);case 32:return e.prev=32,e.t0=e.catch(8),console.error(e.t0),e.abrupt("return",[null,null,null]);case 36:case"end":return e.stop()}}),e,null,[[8,32]])})))).apply(this,arguments)}function P(e){var t=e.config,n=e.updateConfig,r=(0,b.$G)(),i=r.t,c=r.i18n,p=(0,l.useState)(null),d=(0,u.Z)(p,2),h=d[0],f=d[1],y=(0,l.useState)(null),C=(0,u.Z)(y,2),w=C[0],A=C[1],P=(0,l.useMemo)((function(){return(0,s.eI)(t)}),[t]),B=function(){var e=(0,a.Z)(o().mark((function e(){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.customOpenAiApiUrl,"/dashboard/billing/credit_grants"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.apiKey)}});case 2:if(!(n=e.sent).ok){e.next=11;break}return e.t0=f,e.next=7,n.json();case 7:e.t1=e.sent.total_available.toFixed(2),(0,e.t0)(e.t1),e.next=15;break;case 11:return e.next=13,x(t.apiKey,t.customOpenAiApiUrl);case 13:(a=e.sent)&&a.length>2&&a[2]?f("".concat(a[2].toFixed(2))):(0,v.Yo)("https://platform.openai.com/account/usage");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.BX)(Z.HY,{children:[(0,Z.BX)("label",{children:[(0,Z.tZ)("legend",{children:i("Triggers")}),(0,Z.tZ)("select",{required:!0,onChange:function(e){var t=e.target.value;n({triggerMode:t})},children:Object.entries(s.FE).map((function(e){var n=(0,u.Z)(e,2),a=n[0],r=n[1];return(0,Z.tZ)("option",{value:a,selected:a===t.triggerMode,children:i(r)},a)}))})]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("legend",{children:i("Theme")}),(0,Z.tZ)("select",{required:!0,onChange:function(e){var t=e.target.value;n({themeMode:t})},children:Object.entries(s.hY).map((function(e){var n=(0,u.Z)(e,2),a=n[0],r=n[1];return(0,Z.tZ)("option",{value:a,selected:a===t.themeMode,children:i(r)},a)}))})]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("legend",{children:i("API Mode")}),(0,Z.BX)("span",{style:"display: flex; gap: 15px;",children:[(0,Z.tZ)("select",{style:(0,s.Rh)(t)||(0,s.PZ)(t)||(0,s.M6)(t)||(0,s.bi)(t)||(0,s.k$)(t)||(0,s.zZ)(t)?"width: 50%;":void 0,required:!0,onChange:function(e){var t=e.target.value;n({modelName:t}),A(s.kk[t])},children:t.activeApiModes.map((function(e){var n;if(e.includes("-")){var a=e.split("-");a[0]in s.kk&&(n="".concat(i(s.kk[a[0]].desc)," (").concat(i(s.JI[a[1]]),")"))}else e in s.kk&&(n=i(s.kk[e].desc));if(n)return(0,Z.tZ)("option",{value:e,selected:e===t.modelName,children:n},e)}))}),(0,s.PZ)(t)&&(0,Z.tZ)("select",{style:"width: 50%;",required:!0,onChange:function(e){var t=e.target.value;n({modelMode:t})},children:Object.entries(s.JI).map((function(e){var n=(0,u.Z)(e,2),a=n[0],r=n[1];return(0,Z.tZ)("option",{value:a,selected:a===t.modelMode,children:i(r)},a)}))}),(0,s.Rh)(t)&&(0,Z.BX)("span",{style:"width: 50%; display: flex; gap: 5px;",children:[(0,Z.tZ)("input",{type:"password",value:t.apiKey,placeholder:i("API Key"),onChange:function(e){var t=e.target.value;n({apiKey:t})}}),0===t.apiKey.length?(0,Z.tZ)("a",{href:w&&"keyGenerateUrl"in w?w.keyGenerateUrl:"https://platform.openai.com/account/api-keys",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,Z.tZ)("button",{style:"white-space: nowrap;",type:"button",children:i("Get")})}):P?h?(0,Z.tZ)("button",{type:"button",onClick:B,children:h}):(0,Z.tZ)("button",{type:"button",onClick:B,children:i("Balance")}):null]}),(0,s.M6)(t)&&(0,Z.tZ)("input",{style:"width: 50%;",type:"text",value:t.customModelName,placeholder:i("Model Name"),onChange:function(e){var t=e.target.value;n({customModelName:t})}}),(0,s.zZ)(t)&&(0,Z.tZ)("input",{style:"width: 50%;",type:"text",value:t.poeCustomBotName,placeholder:i("Bot Name"),onChange:function(e){var t=e.target.value;n({poeCustomBotName:t})}}),(0,s.bi)(t)&&(0,Z.tZ)("input",{type:"password",style:"width: 50%;",value:t.azureApiKey,placeholder:i("Azure API Key"),onChange:function(e){var t=e.target.value;n({azureApiKey:t})}}),(0,s.k$)(t)&&(0,Z.tZ)("input",{type:"password",style:"width: 50%;",value:t.claudeApiKey,placeholder:i("Claude API Key"),onChange:function(e){var t=e.target.value;n({claudeApiKey:t})}}),(0,s.js)(t)&&(0,Z.tZ)("input",{type:"password",style:"width: 50%;",value:t.chatglmApiKey,placeholder:i("ChatGLM API Key"),onChange:function(e){var t=e.target.value;n({chatglmApiKey:t})}})]}),(0,s.M6)(t)&&(0,Z.tZ)("input",{type:"text",value:t.customModelApiUrl,placeholder:i("Custom Model API Url"),onChange:function(e){var t=e.target.value;n({customModelApiUrl:t})}}),(0,s.M6)(t)&&(0,Z.tZ)("input",{type:"password",value:t.customApiKey,placeholder:i("API Key"),onChange:function(e){var t=e.target.value;n({customApiKey:t})}}),(0,s.bi)(t)&&(0,Z.tZ)("input",{type:"password",value:t.azureEndpoint,placeholder:i("Azure Endpoint"),onChange:function(e){var t=e.target.value;n({azureEndpoint:t})}}),(0,s.bi)(t)&&(0,Z.tZ)("input",{type:"text",value:t.azureDeploymentName,placeholder:i("Azure Deployment Name"),onChange:function(e){var t=e.target.value;n({azureDeploymentName:t})}}),(0,s.nH)(t)&&(0,Z.tZ)("input",{type:"text",value:t.githubThirdPartyUrl,placeholder:i("API Url"),onChange:function(e){var t=e.target.value;n({githubThirdPartyUrl:t})}})]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("legend",{children:i("Preferred Language")}),(0,Z.tZ)("select",{required:!0,onChange:function(e){var a,r=e.target.value;n({preferredLanguage:r}),a="auto"===r?t.userLanguage:r,c.changeLanguage(a),g().tabs.query({}).then((function(e){e.forEach((function(e){g().tabs.sendMessage(e.id,{type:"CHANGE_LANG",data:{lang:a}}).catch((function(){}))}))}))},children:Object.entries(m.s0).map((function(e){var n=(0,u.Z)(e,2),a=n[0],r=n[1];return(0,Z.tZ)("option",{value:a,selected:a===t.preferredLanguage,children:r.native},a)}))})]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("legend",{children:i("When Icon Clicked")}),(0,Z.BX)("select",{required:!0,onChange:function(e){var t=e.target.value;n({clickIconAction:t})},children:[(0,Z.tZ)("option",{value:"popup",selected:"popup"===t.clickIconAction,children:i("Open Settings")},"popup"),Object.entries(k.v).map((function(e){var n=(0,u.Z)(e,2),a=n[0],r=n[1];return(0,Z.tZ)("option",{value:a,selected:a===t.clickIconAction,children:i(r.label)},a)}))]})]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.insertAtTop,onChange:function(e){var t=e.target.checked;n({insertAtTop:t})}}),i("Insert ChatGPT at the top of search results")]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.lockWhenAnswer,onChange:function(e){var t=e.target.checked;n({lockWhenAnswer:t})}}),i("Lock scrollbar while answering")]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.autoRegenAfterSwitchModel,onChange:function(e){var t=e.target.checked;n({autoRegenAfterSwitchModel:t})}}),i("Regenerate the answer after switching model")]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.selectionToolsNextToInputBox,onChange:function(e){var t=e.target.checked;n({selectionToolsNextToInputBox:t})}}),i("Display selection tools next to input box to avoid blocking")]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.alwaysPinWindow,onChange:function(e){var t=e.target.checked;n({alwaysPinWindow:t})}}),i("Always pin the floating window")]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.focusAfterAnswer,onChange:function(e){var t=e.target.checked;n({focusAfterAnswer:t})}}),i("Focus to input box after answering")]}),(0,Z.tZ)("br",{})]})}function B(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t,r=(0,l.useState)(!1),o=(0,u.Z)(r,2),i=o[0],c=o[1];return(0,v.tq)()||(0,v.vU)()||(0,v.G6)()||g().permissions.contains({permissions:["background"]}).then((function(e){c(e)})),(0,Z.BX)("div",{style:"display:flex;flex-direction:column;align-items:left;",children:[!(0,v.tq)()&&!(0,v.vU)()&&!(0,v.G6)()&&(0,Z.tZ)("button",{type:"button",onClick:function(){(0,v.un)()?(0,v.Yo)("edge://extensions/shortcuts"):(0,v.Yo)("chrome://extensions/shortcuts")},children:a("Keyboard Shortcuts")}),(0,Z.tZ)("button",{type:"button",onClick:function(){g().runtime.sendMessage({type:"OPEN_URL",data:{url:g().runtime.getURL("IndependentPanel.html")}})},children:a("Open Conversation Page")}),!(0,v.tq)()&&(0,Z.tZ)("button",{type:"button",onClick:function(){g().runtime.sendMessage({type:"OPEN_CHAT_WINDOW",data:{}})},children:a("Open Conversation Window")}),!(0,v.tq)()&&!(0,v.vU)()&&!(0,v.G6)()&&(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:i,onChange:function(e){e.target.checked?g().permissions.request({permissions:["background"]}).then((function(e){c(e)})):g().permissions.remove({permissions:["background"]}).then((function(e){c(e)}))}}),a("Keep Conversation Window in Background")]}),!(0,v.tq)()&&(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.alwaysCreateNewConversationWindow,onChange:function(e){var t=e.target.checked;n({alwaysCreateNewConversationWindow:t})}}),a("Always Create New Conversation Window")]})]})}function O(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t;return(0,Z.BX)(Z.HY,{children:[(0,Z.BX)("label",{children:[a("Max Response Token Length")+": ".concat(t.maxResponseTokenLength),(0,Z.tZ)("input",{type:"range",min:"100",max:"40000",step:"100",value:t.maxResponseTokenLength,onChange:function(e){var t=(0,v.kk)(e.target.value,1e3,100,4e4);n({maxResponseTokenLength:t})}})]}),(0,Z.BX)("label",{children:[a("Max Conversation Length")+": ".concat(t.maxConversationContextLength),(0,Z.tZ)("input",{type:"range",min:"0",max:"100",step:"1",value:t.maxConversationContextLength,onChange:function(e){var t=(0,v.kk)(e.target.value,9,0,100);n({maxConversationContextLength:t})}})]}),(0,Z.BX)("label",{children:[a("Temperature")+": ".concat(t.temperature),(0,Z.tZ)("input",{type:"range",min:"0",max:"2",step:"0.1",value:t.temperature,onChange:function(e){var t=(0,v.JJ)(e.target.value,1,0,2);n({temperature:t})}})]})]})}function T(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t;return(0,Z.BX)(Z.HY,{children:[(0,Z.BX)("label",{children:[a("Custom ChatGPT Web API Url"),(0,Z.tZ)("input",{type:"text",value:t.customChatGptWebApiUrl,onChange:function(e){var t=e.target.value;n({customChatGptWebApiUrl:t})}})]}),(0,Z.BX)("label",{children:[a("Custom ChatGPT Web API Path"),(0,Z.tZ)("input",{type:"text",value:t.customChatGptWebApiPath,onChange:function(e){var t=e.target.value;n({customChatGptWebApiPath:t})}})]}),(0,Z.BX)("label",{children:[a("Custom OpenAI API Url"),(0,Z.tZ)("input",{type:"text",value:t.customOpenAiApiUrl,onChange:function(e){var t=e.target.value;n({customOpenAiApiUrl:t})}})]})]})}function M(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t;return(0,Z.BX)(Z.HY,{children:[(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.disableWebModeHistory,onChange:function(e){var t=e.target.checked;n({disableWebModeHistory:t})}}),a("Disable web mode history for better privacy protection, but it will result in unavailable conversations after a period of time")]}),(0,Z.tZ)("br",{}),(0,Z.BX)("label",{children:[a("Custom Site Regex"),(0,Z.tZ)("input",{type:"text",value:t.siteRegex,onChange:function(e){var t=e.target.value;n({siteRegex:t})}})]}),(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.useSiteRegexOnly,onChange:function(e){var t=e.target.checked;n({useSiteRegexOnly:t})}}),a("Exclusively use Custom Site Regex for website matching, ignoring built-in rules")]}),(0,Z.tZ)("br",{}),(0,Z.BX)("label",{children:[a("Input Query"),(0,Z.tZ)("input",{type:"text",value:t.inputQuery,onChange:function(e){var t=e.target.value;n({inputQuery:t})}})]}),(0,Z.BX)("label",{children:[a("Append Query"),(0,Z.tZ)("input",{type:"text",value:t.appendQuery,onChange:function(e){var t=e.target.value;n({appendQuery:t})}})]}),(0,Z.BX)("label",{children:[a("Prepend Query"),(0,Z.tZ)("input",{type:"text",value:t.prependQuery,onChange:function(e){var t=e.target.value;n({prependQuery:t})}})]})]})}function I(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t;return(0,Z.tZ)(Z.HY,{children:(0,Z.BX)(p.mQ,{selectedTabClassName:"popup-tab--selected",children:[(0,Z.BX)(p.td,{children:[(0,Z.tZ)(p.OK,{className:"popup-tab",children:a("API Params")}),(0,Z.tZ)(p.OK,{className:"popup-tab",children:a("API Url")}),(0,Z.tZ)(p.OK,{className:"popup-tab",children:a("Others")})]}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(O,{config:t,updateConfig:n})}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(T,{config:t,updateConfig:n})}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(M,{config:t,updateConfig:n})})]})})}function X(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t;return(0,Z.tZ)(Z.HY,{children:t.apiModes.map((function(e){var r;if(e.includes("-")){var o=e.split("-");o[0]in s.kk&&(r="".concat(a(s.kk[o[0]].desc)," (").concat(a(s.JI[o[1]]),")"))}else e in s.kk&&(r=a(s.kk[e].desc));if(r)return(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.activeApiModes.includes(e),onChange:function(a){var r=a.target.checked,o=t.activeApiModes.filter((function(t){return t!==e}));r&&o.push(e),n({activeApiModes:o})}}),r]},e)}))})}P.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},B.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},O.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},T.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},M.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},I.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},X.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired};var N=n(5433);function R(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t;return(0,Z.tZ)(Z.HY,{children:t.selectionTools.map((function(e){return(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.activeSelectionTools.includes(e),onChange:function(a){var r=a.target.checked,o=t.activeSelectionTools.filter((function(t){return t!==e}));r&&o.push(e),n({activeSelectionTools:o})}}),a(N.v[e].label)]},e)}))})}function q(e){var t=e.config,n=e.updateConfig;return(0,Z.tZ)(Z.HY,{children:t.siteAdapters.map((function(e){return(0,Z.BX)("label",{children:[(0,Z.tZ)("input",{type:"checkbox",checked:t.activeSiteAdapters.includes(e),onChange:function(a){var r=a.target.checked,o=t.activeSiteAdapters.filter((function(t){return t!==e}));r&&o.push(e),n({activeSiteAdapters:o})}}),e]},e)}))})}function S(e){var t=e.config,n=e.updateConfig,a=(0,b.$G)().t;return(0,Z.tZ)(Z.HY,{children:(0,Z.BX)(p.mQ,{selectedTabClassName:"popup-tab--selected",children:[(0,Z.BX)(p.td,{children:[(0,Z.tZ)(p.OK,{className:"popup-tab",children:a("API Modes")}),(0,Z.tZ)(p.OK,{className:"popup-tab",children:a("Selection Tools")}),(0,Z.tZ)(p.OK,{className:"popup-tab",children:a("Sites")})]}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(X,{config:t,updateConfig:n})}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(R,{config:t,updateConfig:n})}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(q,{config:t,updateConfig:n})})]})})}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e){var t=e.currentVersion,n=e.latestVersion,a=(0,b.$G)().t;return(0,Z.BX)("div",{className:"footer",children:[(0,Z.BX)("div",{children:["".concat(a("Current Version"),": ").concat(t," "),t>=n?"(".concat(a("Latest"),")"):(0,Z.BX)(Z.HY,{children:["(","".concat(a("Latest"),": "),(0,Z.tZ)("a",{href:"https://github.com/josStorer/chatGPTBox/releases/tag/v"+n,target:"_blank",rel:"nofollow noopener noreferrer",children:n}),")"]})]}),(0,Z.tZ)("div",{children:(0,Z.BX)("a",{href:"https://github.com/josStorer/chatGPTBox",target:"_blank",rel:"nofollow noopener noreferrer",children:[(0,Z.tZ)("span",{children:a("Help | Changelog ")}),(0,Z.tZ)(d.g_Y,{})]})})]})}R.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},q.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired},S.propTypes={config:C().object.isRequired,updateConfig:C().func.isRequired};const L=function(){var e=(0,b.$G)(),t=e.t,n=e.i18n,a=(0,l.useState)(s.u_),r=(0,u.Z)(a,2),o=r[0],i=r[1],c=(0,l.useState)(""),d=(0,u.Z)(c,2),h=d[0],m=d[1],y=(0,l.useState)(""),C=(0,u.Z)(y,2),k=C[0],w=C[1],x=(0,f.N)(),A=function(e){i(G(G({},o),e)),(0,s.T_)(e)};(0,l.useEffect)((function(){(0,s.vq)().then((function(e){n.changeLanguage(e)})),(0,s._4)().then((function(e){i(e),m(g().runtime.getManifest().version.replace("v","")),fetch("https://api.github.com/repos/josstorer/chatGPTBox/releases/latest").then((function(e){return e.json().then((function(e){w(e.tag_name.replace("v",""))}))}))}))}),[]),(0,l.useEffect)((function(){document.documentElement.dataset.theme="auto"===o.themeMode?x:o.themeMode}),[o.themeMode,x]);var O=new URLSearchParams(window.location.search),T=!(0,v.tq)()&&O.get("popup");return(0,Z.BX)("div",{className:"true"===T?"container-popup-mode":"container-page-mode",children:[(0,Z.tZ)("form",{style:"width:100%;",children:(0,Z.BX)(p.mQ,{selectedTabClassName:"popup-tab--selected",children:[(0,Z.BX)(p.td,{children:[(0,Z.tZ)(p.OK,{className:"popup-tab",children:t("General")}),(0,Z.tZ)(p.OK,{className:"popup-tab",children:t("Feature Pages")}),(0,Z.tZ)(p.OK,{className:"popup-tab",children:t("Modules")}),(0,Z.tZ)(p.OK,{className:"popup-tab",children:t("Advanced")})]}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(P,{config:o,updateConfig:A})}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(B,{config:o,updateConfig:A})}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(S,{config:o,updateConfig:A})}),(0,Z.tZ)(p.x4,{children:(0,Z.tZ)(I,{config:o,updateConfig:A})})]})}),(0,Z.tZ)("br",{}),(0,Z.tZ)(K,{currentVersion:h,latestVersion:k})]})};n(5024);(0,s._4)().then(function(){var e=(0,a.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("popup"===t.clickIconAction||window.innerWidth>100&&window.innerHeight>100)){e.next=4;break}(0,i.sY)((0,Z.tZ)(L,{}),document.getElementById("app")),e.next=13;break;case 4:if(n={itemId:t.clickIconAction,selectionText:"",useMenuPosition:!1},console.debug("custom icon action triggered",n),!(t.clickIconAction in k.v)){e.next=12;break}return e.next=9,g().tabs.query({active:!0,currentWindow:!0});case 9:a=e.sent[0],k.v[t.clickIconAction].action&&k.v[t.clickIconAction].action(!1,a),k.v[t.clickIconAction].genPrompt&&g().tabs.sendMessage(a.id,{type:"CREATE_CHAT",data:n});case 12:window.close();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},3638:(e,t,n)=>{n.d(t,{v:()=>f});var a,r,o,i,c,u,l=n(5861),s=n(4687),p=n(752),d=n(3150),h=n(294),g=n(9616),f={newChat:{label:"New Chat",genPrompt:(u=(0,l.Z)(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","");case 1:case"end":return e.stop()}}),e)}))),function(){return u.apply(this,arguments)})},summarizePage:{label:"Summarize Page",genPrompt:(c=(0,l.Z)(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","The following is the text content of a web page, analyze the core content and summarize:\n".concat((0,p.i)()));case 1:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})},openConversationPage:{label:"Open Conversation Page",action:(i=(0,l.Z)(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("action is from background",t),t?(0,g.Y)(d.runtime.getURL("IndependentPanel.html")):d.runtime.sendMessage({type:"OPEN_URL",data:{url:d.runtime.getURL("IndependentPanel.html")}});case 2:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},openConversationWindow:{label:"Open Conversation Window",action:(o=(0,l.Z)(s.mark((function e(t){var n,a,r;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.debug("action is from background",t),!t){e.next=18;break}return e.next=4,(0,h._4)();case 4:return n=e.sent,a=d.runtime.getURL("IndependentPanel.html"),e.next=8,d.tabs.query({url:a,windowType:"popup"});case 8:if(r=e.sent,n.alwaysCreateNewConversationWindow||!(r.length>0)){e.next=14;break}return e.next=12,d.windows.update(r[0].windowId,{focused:!0});case 12:e.next=16;break;case 14:return e.next=16,d.windows.create({url:a,type:"popup",width:500,height:650});case 16:e.next=19;break;case 18:d.runtime.sendMessage({type:"OPEN_CHAT_WINDOW",data:{}});case 19:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},openSidePanel:{label:"Open Side Panel",action:(r=(0,l.Z)(s.mark((function e(t,n){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("action is from background",t),t&&chrome.sidePanel.open({windowId:n.windowId,tabId:n.id});case 2:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},closeAllChats:{label:"Close All Chats In This Page",action:(a=(0,l.Z)(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("action is from background",t),d.tabs.query({active:!0,currentWindow:!0}).then((function(e){d.tabs.sendMessage(e[0].id,{type:"CLOSE_CHATS",data:{}})}));case 2:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}}},2215:(e,t,n)=>{n.d(t,{N:()=>o});var a=n(3324),r=n(5248);function o(){var e=(0,r.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),t=(0,a.Z)(e,2),n=t[0],o=t[1];return(0,r.useEffect)((function(){if(window.matchMedia){var e=function(e){o(e.matches?"dark":"light")};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),function(){return window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}}}),[]),n}}},e=>{var t;t=462,e(e.s=t)}]);