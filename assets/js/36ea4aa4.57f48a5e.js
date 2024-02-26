"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5244],{3946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(5893),r=t(1151);const l={sidebar_label:"llava_agent",title:"agentchat.contrib.llava_agent"},s=void 0,i={id:"reference/agentchat/contrib/llava_agent",title:"agentchat.contrib.llava_agent",description:"LLaVAAgent",source:"@site/docs/reference/agentchat/contrib/llava_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/llava_agent",permalink:"/autogen/docs/reference/agentchat/contrib/llava_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/llava_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"llava_agent",title:"agentchat.contrib.llava_agent"},sidebar:"referenceSideBar",previous:{title:"img_utils",permalink:"/autogen/docs/reference/agentchat/contrib/img_utils"},next:{title:"math_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/math_user_proxy_agent"}},c={},o=[{value:"LLaVAAgent",id:"llavaagent",level:2},{value:"__init__",id:"__init__",level:3},{value:"llava_call",id:"llava_call",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"llavaagent",children:"LLaVAAgent"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class LLaVAAgent(MultimodalConversableAgent)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def __init__(name: str,\n             system_message: Optional[Tuple[str,\n                                            List]] = DEFAULT_LLAVA_SYS_MSG,\n             *args,\n             **kwargs)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," ",(0,a.jsx)(n.em,{children:"str"})," - agent name."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"system_message"})," ",(0,a.jsx)(n.em,{children:"str"})," - system message for the ChatCompletion inference.\nPlease override this attribute if you want to reprogram the agent."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"**kwargs"})," ",(0,a.jsx)(n.em,{children:"dict"})," - Please refer to other kwargs in\n",(0,a.jsx)(n.a,{href:"../conversable_agent#__init__",children:"ConversableAgent"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"llava_call",children:"llava_call"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def llava_call(prompt: str, llm_config: dict) -> str\n"})}),"\n",(0,a.jsx)(n.p,{children:"Makes a call to the LLaVA service to generate text based on a given prompt"})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(7294);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);