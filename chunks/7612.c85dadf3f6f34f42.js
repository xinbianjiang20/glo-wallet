"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7612],{57612:function(e,t,i){i.r(t),i.d(t,{AppKitModal:function(){return be},W3mModal:function(){return fe},W3mModalBase:function(){return ye}});var o=i(33834),r=i(18794),a=i(77513),n=i(68314),s=i(77500),c=i(48121),l=i(59757),d=i(9793),w=i(48113),p=i(4511),u=i(85589);const m={isUnsupportedChainView:()=>"UnsupportedChain"===p.RouterController.state.view||"SwitchNetwork"===p.RouterController.state.view&&p.RouterController.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void c.I.shake();await u.w.isSIWXCloseDisabled()?c.I.shake():c.I.close()}};var h=i(12858),v=i(64368),g=i(83241),y=i(80446),f=i(34615),b=i(21521),C=i(25729),k=f.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,x=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let S=class extends f.oi{render(){return f.dy`<slot></slot>`}};S.styles=[b.ET,k],S=x([(0,C.M)("wui-card")],S);i(82100);var R=i(56008),N=i(38895),O=(i(65766),i(79556),i(76630),f.iv`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`),T=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let A=class extends f.oi{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,f.dy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){R.AlertController.close()}};A.styles=[b.ET,O],T([(0,N.Cb)()],A.prototype,"message",void 0),T([(0,N.Cb)()],A.prototype,"backgroundColor",void 0),T([(0,N.Cb)()],A.prototype,"iconColor",void 0),T([(0,N.Cb)()],A.prototype,"icon",void 0),A=T([(0,C.M)("wui-alertbar")],A);var I=o.iv`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,E=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const W={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let $=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=R.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(R.AlertController.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=R.AlertController.state,i=W[t];return o.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};$.styles=I,E([(0,r.SB)()],$.prototype,"open",void 0),$=E([(0,y.Mo)("w3m-alertbar")],$);var P=i(83966),B=i(44639),j=i(87374),D=i(51440),L=f.iv`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,z=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let M=class extends f.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,f.dy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};M.styles=[b.ET,b.ZM,b.Bp,L],z([(0,N.Cb)()],M.prototype,"size",void 0),z([(0,N.Cb)({type:Boolean})],M.prototype,"disabled",void 0),z([(0,N.Cb)()],M.prototype,"icon",void 0),z([(0,N.Cb)()],M.prototype,"iconColor",void 0),M=z([(0,C.M)("wui-icon-link")],M);i(31059),i(25004);var U=f.iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,H=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let K=class extends f.oi{constructor(){super(...arguments),this.imageSrc=""}render(){return f.dy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?f.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:f.dy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};K.styles=[b.ET,b.ZM,b.Bp,U],H([(0,N.Cb)()],K.prototype,"imageSrc",void 0),K=H([(0,C.M)("wui-select")],K);i(85185),i(68390);var X=i(72134),V=o.iv`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,_=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const Y=["SmartSessionList"];function G(){const e=p.RouterController.state.data?.connector?.name,t=p.RouterController.state.data?.wallet?.name,i=p.RouterController.state.data?.network?.name,o=t??e,r=d.ConnectorController.getConnectors();return{Connect:`Connect ${1===r.length&&"w3m-email"===r[0]?.id?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:i??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:P.N.state.socialProvider?P.N.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let q=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.heading=G()[p.RouterController.state.view],this.network=l.R.state.activeCaipNetwork,this.networkImage=B.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=p.RouterController.state.view,this.viewDirection="",this.headerText=G()[p.RouterController.state.view],this.unsubscribe.push(j.W.subscribeNetworkImages((()=>{this.networkImage=B.f.getNetworkImage(this.network)})),p.RouterController.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.headerText=G()[e]}),X.b.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),l.R.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=B.f.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){D.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),p.RouterController.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){const e=s.OptionsController?.state?.features?.smartSessions;return"Account"===p.RouterController.state.view&&e?o.dy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>p.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.dy`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=Y.includes(this.view);return o.dy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?o.dy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=p.RouterController.state,t="Connect"===e,i=s.OptionsController.state.enableEmbedded,r="ApproveTransaction"===e,n="ConnectingSiwe"===e,c="Account"===e,l=s.OptionsController.state.enableNetworkSwitch,d=r||n||t&&i;return c&&l?o.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,a.o)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,a.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?o.dy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:o.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(D.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.RouterController.push("Networks"))}isAllowedNetworkSwitch(){const e=l.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find((({id:e})=>e===this.network?.id));return t||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=p.RouterController.state;let t=X.b.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=X.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=p.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){p.RouterController.goBack()}};q.styles=V,_([(0,r.SB)()],q.prototype,"heading",void 0),_([(0,r.SB)()],q.prototype,"network",void 0),_([(0,r.SB)()],q.prototype,"networkImage",void 0),_([(0,r.SB)()],q.prototype,"showBack",void 0),_([(0,r.SB)()],q.prototype,"prevHistoryLength",void 0),_([(0,r.SB)()],q.prototype,"view",void 0),_([(0,r.SB)()],q.prototype,"viewDirection",void 0),_([(0,r.SB)()],q.prototype,"headerText",void 0),q=_([(0,y.Mo)("w3m-header")],q);i(51243);var F=f.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,Z=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let J=class extends f.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return f.dy`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?f.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?f.dy`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:f.dy`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};J.styles=[b.ET,F],Z([(0,N.Cb)()],J.prototype,"backgroundColor",void 0),Z([(0,N.Cb)()],J.prototype,"iconColor",void 0),Z([(0,N.Cb)()],J.prototype,"icon",void 0),Z([(0,N.Cb)()],J.prototype,"message",void 0),Z([(0,N.Cb)()],J.prototype,"loading",void 0),Z([(0,N.Cb)()],J.prototype,"iconType",void 0),J=Z([(0,C.M)("wui-snackbar")],J);var Q=o.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,ee=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const te={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ie=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=v.SnackController.state.open,this.unsubscribe.push(v.SnackController.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t,svg:i}=v.SnackController.state,r=te[t],{icon:a,iconColor:n}=i??r??{};return o.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r?.backgroundColor}
        iconColor=${n}
        icon=${a}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),v.SnackController.state.autoClose&&(this.timeout=setTimeout((()=>v.SnackController.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ie.styles=Q,ee([(0,r.SB)()],ie.prototype,"open",void 0),ie=ee([(0,y.Mo)("w3m-snackbar")],ie);var oe=i(49630),re=i(376),ae=i(68343);const ne=(0,oe.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),se={state:ne,subscribe:e=>(0,oe.Ld)(ne,(()=>e(ne))),subscribeKey:(e,t)=>(0,re.VW)(ne,e,t),showTooltip({message:e,triggerRect:t,variant:i}){ne.open=!0,ne.message=e,ne.triggerRect=t,ne.variant=i},hide(){ne.open=!1,ne.message="",ne.triggerRect={width:0,height:0,top:0,left:0}}},ce=(0,ae.P)(se);i(85642);var le=o.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,de=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let we=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=ce.state.open,this.message=ce.state.message,this.triggerRect=ce.state.triggerRect,this.variant=ce.state.variant,this.unsubscribe.push(ce.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.dy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};we.styles=[le],de([(0,r.SB)()],we.prototype,"open",void 0),de([(0,r.SB)()],we.prototype,"message",void 0),de([(0,r.SB)()],we.prototype,"triggerRect",void 0),de([(0,r.SB)()],we.prototype,"variant",void 0),we=de([(0,y.Mo)("w3m-tooltip"),(0,y.Mo)("w3m-tooltip")],we);var pe=o.iv`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,ue=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let me=class extends o.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=p.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(p.RouterController.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=t,this.style.animation="unset"}),X.b.ANIMATION_DURATIONS.ModalHeight)})),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return o.dy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return o.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.dy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.dy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.dy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return o.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.dy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return o.dy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return o.dy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return o.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o.dy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.dy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.dy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.dy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.dy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.dy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.dy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.dy`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(e){ce.hide();let t=X.b.VIEW_DIRECTION.Next;const{history:i}=p.RouterController.state;i.length<this.prevHistoryLength&&(t=X.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=t,setTimeout((()=>{this.view=e}),X.b.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};me.styles=pe,ue([(0,r.SB)()],me.prototype,"view",void 0),ue([(0,r.SB)()],me.prototype,"viewDirection",void 0),me=ue([(0,y.Mo)("w3m-router")],me);var he=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,ve=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const ge="scroll-lock";class ye extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=s.OptionsController.state.enableEmbedded,this.open=c.I.state.open,this.caipAddress=l.R.state.activeCaipAddress,this.caipNetwork=l.R.state.activeCaipNetwork,this.shake=c.I.state.shake,this.filterByNamespace=d.ConnectorController.state.filterByNamespace,this.initializeTheming(),w.ApiController.prefetchAnalyticsConfig(),this.unsubscribe.push(c.I.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),c.I.subscribeKey("shake",(e=>this.shake=e)),l.R.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),l.R.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),s.OptionsController.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),d.ConnectorController.subscribeKey("filterByNamespace",(e=>{this.filterByNamespace===e||l.R.getAccountData(e)?.caipAddress||(w.ApiController.fetchRecommendedWallets(),this.filterByNamespace=e)})))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded)return c.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?o.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,a.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=h.ThemeController.state,i=y.Hg.getColorTheme(t);(0,y.n)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),v.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=ge,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${ge}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=l.R.state.isSwitchingNamespace,i=g.j.getPlainAddress(e),o=t&&i;!i&&!t?c.I.close():o&&p.RouterController.goBack(),await u.w.initializeIfEnabled(),this.caipAddress=e,l.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){const t=this.caipNetwork,i=t?.caipNetworkId?.toString(),o=t?.chainNamespace,r=e?.caipNetworkId?.toString(),a=e?.chainNamespace,s=i!==r,d=s&&!(o!==a),w=t?.name===n.b.UNSUPPORTED_NETWORK_NAME,u="ConnectingExternal"===p.RouterController.state.view,m=!l.R.getAccountData(e?.chainNamespace)?.caipAddress,h="UnsupportedChain"===p.RouterController.state.view;let v=!1;c.I.state.open&&!u&&(m?s&&(v=!0):(h||d&&!w)&&(v=!0)),v&&"SIWXSignMessage"!==p.RouterController.state.view&&p.RouterController.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(w.ApiController.prefetch(),w.ApiController.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}ye.styles=he,ve([(0,r.Cb)({type:Boolean})],ye.prototype,"enableEmbedded",void 0),ve([(0,r.SB)()],ye.prototype,"open",void 0),ve([(0,r.SB)()],ye.prototype,"caipAddress",void 0),ve([(0,r.SB)()],ye.prototype,"caipNetwork",void 0),ve([(0,r.SB)()],ye.prototype,"shake",void 0),ve([(0,r.SB)()],ye.prototype,"filterByNamespace",void 0);let fe=class extends ye{};fe=ve([(0,y.Mo)("w3m-modal")],fe);let be=class extends ye{};be=ve([(0,y.Mo)("appkit-modal")],be)}}]);