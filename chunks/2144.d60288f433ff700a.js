"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2144],{62144:function(t,e,o){o.r(e),o.d(e,{W3mAllWalletsView:function(){return to},W3mConnectingWcBasicView:function(){return pe},W3mDownloadsView:function(){return no}});var i=o(33834),r=o(18794),n=o(83241),a=o(48113),s=o(77500),l=o(64125),c=o(80446),d=(o(82100),o(77513)),u=o(9793),p=o(51440),h=o(4511),w=o(34615),g=o(38895),b=o(36509);const f=t=>t??b.Ld;o(65766),o(79556),o(25004);var v=o(21521),m=o(25729),y=(o(76630),o(31059),w.iv`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`),x=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let C=class extends w.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),w.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?w.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?w.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:w.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};C.styles=[v.ZM,v.ET,y],x([(0,g.Cb)()],C.prototype,"size",void 0),x([(0,g.Cb)()],C.prototype,"name",void 0),x([(0,g.Cb)()],C.prototype,"imageSrc",void 0),x([(0,g.Cb)()],C.prototype,"walletIcon",void 0),x([(0,g.Cb)({type:Boolean})],C.prototype,"installed",void 0),x([(0,g.Cb)()],C.prototype,"badgeSize",void 0),C=x([(0,m.M)("wui-wallet-image")],C);var $=w.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,k=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let R=class extends w.oi{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<4;return w.dy`${this.walletImages.slice(0,4).map((({src:t,walletName:e})=>w.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${f(e)}
            ></wui-wallet-image>
          `))}
      ${t?[...Array(4-this.walletImages.length)].map((()=>w.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};R.styles=[v.ET,$],k([(0,g.Cb)({type:Array})],R.prototype,"walletImages",void 0),R=k([(0,m.M)("wui-all-wallets-image")],R);o(85185);var j=w.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,S=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let O=class extends w.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return w.dy`
      <button ?disabled=${this.disabled} tabindex=${f(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?w.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?w.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?w.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:w.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?w.dy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?w.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?w.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};O.styles=[v.ET,v.ZM,j],S([(0,g.Cb)({type:Array})],O.prototype,"walletImages",void 0),S([(0,g.Cb)()],O.prototype,"imageSrc",void 0),S([(0,g.Cb)()],O.prototype,"name",void 0),S([(0,g.Cb)()],O.prototype,"tagLabel",void 0),S([(0,g.Cb)()],O.prototype,"tagVariant",void 0),S([(0,g.Cb)()],O.prototype,"icon",void 0),S([(0,g.Cb)()],O.prototype,"walletIcon",void 0),S([(0,g.Cb)()],O.prototype,"tabIdx",void 0),S([(0,g.Cb)({type:Boolean})],O.prototype,"installed",void 0),S([(0,g.Cb)({type:Boolean})],O.prototype,"disabled",void 0),S([(0,g.Cb)({type:Boolean})],O.prototype,"showAllWallets",void 0),S([(0,g.Cb)({type:Boolean})],O.prototype,"loading",void 0),S([(0,g.Cb)({type:String})],O.prototype,"loadingSpinnerColor",void 0),O=S([(0,m.M)("wui-list-wallet")],O);var I=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let T=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.count=a.ApiController.state.count,this.filteredCount=a.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)),a.ApiController.subscribeKey("count",(t=>this.count=t)),a.ApiController.subscribeKey("filteredWallets",(t=>this.filteredCount=t.length)),a.ApiController.subscribeKey("isFetchingRecommendedWallets",(t=>this.isFetchingRecommendedWallets=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.find((t=>"walletConnect"===t.id)),{allWallets:e}=s.OptionsController.state;if(!t||"HIDE"===e)return null;if("ONLY_MOBILE"===e&&!n.j.isMobile())return null;const o=a.ApiController.state.featured.length,r=this.count+o,l=r<10?r:10*Math.floor(r/10),c=this.filteredCount>0?this.filteredCount:l;let u=`${c}`;return this.filteredCount>0?u=`${this.filteredCount}`:c<r&&(u=`${c}+`),i.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${u}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,d.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){p.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),h.RouterController.push("AllWallets")}};I([(0,r.Cb)()],T.prototype,"tabIdx",void 0),I([(0,r.SB)()],T.prototype,"connectors",void 0),I([(0,r.SB)()],T.prototype,"count",void 0),I([(0,r.SB)()],T.prototype,"filteredCount",void 0),I([(0,r.SB)()],T.prototype,"isFetchingRecommendedWallets",void 0),T=I([(0,c.Mo)("w3m-all-wallets-widget")],T);var E=o(44639),W=o(11697),P=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let z=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"ANNOUNCED"===t.type));return t?.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(W.C.showConnector).map((t=>i.dy`
              <wui-list-wallet
                imageSrc=${(0,d.o)(E.f.getConnectorImage(t))}
                name=${t.name??"Unknown"}
                @click=${()=>this.onConnector(t)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${t.id}`}
                .installed=${!0}
                tabIdx=${(0,d.o)(this.tabIdx)}
              >
              </wui-list-wallet>
            `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){"walletConnect"===t.id?n.j.isMobile()?h.RouterController.push("AllWallets"):h.RouterController.push("ConnectingWalletConnect"):h.RouterController.push("ConnectingExternal",{connector:t})}};P([(0,r.Cb)()],z.prototype,"tabIdx",void 0),P([(0,r.SB)()],z.prototype,"connectors",void 0),z=P([(0,c.Mo)("w3m-connect-announced-widget")],z);var L=o(78859),B=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let M=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t))),n.j.isTelegram()&&n.j.isIos()&&(this.loading=!L.ConnectionController.state.wcUri,this.unsubscribe.push(L.ConnectionController.subscribeKey("wcUri",(t=>this.loading=!t))))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const{customWallets:t}=s.OptionsController.state;if(!t?.length)return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return i.dy`<wui-flex flexDirection="column" gap="xs">
      ${e.map((t=>i.dy`
          <wui-list-wallet
            imageSrc=${(0,d.o)(E.f.getWalletImage(t))}
            name=${t.name??"Unknown"}
            @click=${()=>this.onConnectWallet(t)}
            data-testid=${`wallet-selector-${t.id}`}
            tabIdx=${(0,d.o)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=l.M.getRecentWallets(),o=this.connectors.map((t=>t.info?.rdns)).filter(Boolean),i=e.map((t=>t.rdns)).filter(Boolean),r=o.concat(i);if(r.includes("io.metamask.mobile")&&n.j.isMobile()){const t=r.indexOf("io.metamask.mobile");r[t]="io.metamask"}return t.filter((t=>!r.includes(String(t?.rdns))))}onConnectWallet(t){this.loading||h.RouterController.push("ConnectingWalletConnect",{wallet:t})}};B([(0,r.Cb)()],M.prototype,"tabIdx",void 0),B([(0,r.SB)()],M.prototype,"connectors",void 0),B([(0,r.SB)()],M.prototype,"loading",void 0),M=B([(0,c.Mo)("w3m-connect-custom-widget")],M);var D=o(68314),A=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let _=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"EXTERNAL"===t.type)).filter(W.C.showConnector).filter((t=>t.id!==D.b.CONNECTOR_ID.COINBASE_SDK));return t?.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(E.f.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){h.RouterController.push("ConnectingExternal",{connector:t})}};A([(0,r.Cb)()],_.prototype,"tabIdx",void 0),A([(0,r.SB)()],_.prototype,"connectors",void 0),_=A([(0,c.Mo)("w3m-connect-external-widget")],_);var U=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let q=class extends i.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((t=>i.dy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,d.o)(E.f.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){u.ConnectorController.selectWalletConnector(t)}};U([(0,r.Cb)()],q.prototype,"tabIdx",void 0),U([(0,r.Cb)()],q.prototype,"wallets",void 0),q=U([(0,c.Mo)("w3m-connect-featured-widget")],q);var N=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let V=class extends i.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const t=this.connectors.filter(W.C.showConnector);return 0===t.length?(this.style.cssText="display: none",null):i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(E.f.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnector(t){u.ConnectorController.setActiveConnector(t),h.RouterController.push("ConnectingExternal",{connector:t})}};N([(0,r.Cb)()],V.prototype,"tabIdx",void 0),N([(0,r.Cb)()],V.prototype,"connectors",void 0),V=N([(0,c.Mo)("w3m-connect-injected-widget")],V);var H=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let K=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"MULTI_CHAIN"===t.type&&"WalletConnect"!==t.name));return t?.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(E.f.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){u.ConnectorController.setActiveConnector(t),h.RouterController.push("ConnectingMultiChain")}};H([(0,r.Cb)()],K.prototype,"tabIdx",void 0),H([(0,r.SB)()],K.prototype,"connectors",void 0),K=H([(0,c.Mo)("w3m-connect-multi-chain-widget")],K);var G=o(59757),X=o(32786),F=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Z=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t))),n.j.isTelegram()&&n.j.isIos()&&(this.loading=!L.ConnectionController.state.wcUri,this.unsubscribe.push(L.ConnectionController.subscribeKey("wcUri",(t=>this.loading=!t))))}render(){const t=l.M.getRecentWallets().filter((t=>!X.J.isExcluded(t))).filter((t=>!this.hasWalletConnector(t))).filter((t=>this.isWalletCompatibleWithCurrentChain(t)));return t.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(E.f.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,d.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||u.ConnectorController.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some((e=>e.id===t.id||e.name===t.name))}isWalletCompatibleWithCurrentChain(t){const e=G.R.state.activeChain;return!e||!t.chains||t.chains.some((t=>{const o=t.split(":")[0];return e===o}))}};F([(0,r.Cb)()],Z.prototype,"tabIdx",void 0),F([(0,r.SB)()],Z.prototype,"connectors",void 0),F([(0,r.SB)()],Z.prototype,"loading",void 0),Z=F([(0,c.Mo)("w3m-connect-recent-widget")],Z);var Y=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Q=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,n.j.isTelegram()&&n.j.isIos()&&(this.loading=!L.ConnectionController.state.wcUri,this.unsubscribe.push(L.ConnectionController.subscribeKey("wcUri",(t=>this.loading=!t))))}render(){const{connectors:t}=u.ConnectorController.state,{customWallets:e,featuredWalletIds:o}=s.OptionsController.state,r=l.M.getRecentWallets(),n=t.find((t=>"walletConnect"===t.id)),a=t.filter((t=>"INJECTED"===t.type||"ANNOUNCED"===t.type||"MULTI_CHAIN"===t.type)).filter((t=>"Browser Wallet"!==t.name));if(!n)return null;if(o||e||!this.wallets.length)return this.style.cssText="display: none",null;const c=a.length+r.length,p=Math.max(0,2-c),h=X.J.filterOutDuplicateWallets(this.wallets).slice(0,p);return h.length?i.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${h.map((t=>i.dy`
            <wui-list-wallet
              imageSrc=${(0,d.o)(E.f.getWalletImage(t))}
              name=${t?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,d.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=u.ConnectorController.getConnector(t.id,t.rdns);e?h.RouterController.push("ConnectingExternal",{connector:e}):h.RouterController.push("ConnectingWalletConnect",{wallet:t})}};Y([(0,r.Cb)()],Q.prototype,"tabIdx",void 0),Y([(0,r.Cb)()],Q.prototype,"wallets",void 0),Y([(0,r.SB)()],Q.prototype,"loading",void 0),Q=Y([(0,c.Mo)("w3m-connect-recommended-widget")],Q);var J=o(87374),tt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let et=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.connectorImages=J.W.state.connectorImages,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)),J.W.subscribeKey("connectorImages",(t=>this.connectorImages=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){if(n.j.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find((t=>"walletConnect"===t.id));if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[t?.imageId??""];return i.dy`
      <wui-list-wallet
        imageSrc=${(0,d.o)(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,d.o)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){u.ConnectorController.setActiveConnector(t),h.RouterController.push("ConnectingWalletConnect")}};tt([(0,r.Cb)()],et.prototype,"tabIdx",void 0),tt([(0,r.SB)()],et.prototype,"connectors",void 0),tt([(0,r.SB)()],et.prototype,"connectorImages",void 0),et=tt([(0,c.Mo)("w3m-connect-walletconnect-widget")],et);var ot=i.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,it=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let rt=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.recommended=a.ApiController.state.recommended,this.featured=a.ApiController.state.featured,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",(t=>this.connectors=t)),a.ApiController.subscribeKey("recommended",(t=>this.recommended=t)),a.ApiController.subscribeKey("featured",(t=>this.featured=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return i.dy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:o,injected:r,multiChain:n,recommended:a,featured:s,external:l}=W.C.getConnectorsByType(this.connectors,this.recommended,this.featured);return W.C.getConnectorTypeOrder({custom:t,recent:e,announced:o,injected:r,multiChain:n,recommended:a,featured:s,external:l}).map((t=>{switch(t){case"injected":return i.dy`
            ${n.length?i.dy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,d.o)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?i.dy`<w3m-connect-announced-widget
                  tabIdx=${(0,d.o)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?i.dy`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${(0,d.o)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return i.dy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return i.dy`<w3m-connect-recent-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return i.dy`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return i.dy`<w3m-connect-custom-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return i.dy`<w3m-connect-external-widget
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return i.dy`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${(0,d.o)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${t}`),null}}))}};rt.styles=ot,it([(0,r.Cb)()],rt.prototype,"tabIdx",void 0),it([(0,r.SB)()],rt.prototype,"connectors",void 0),it([(0,r.SB)()],rt.prototype,"recommended",void 0),it([(0,r.SB)()],rt.prototype,"featured",void 0),rt=it([(0,c.Mo)("w3m-connector-list")],rt);var nt=o(48121),at=o(64368),st=w.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,lt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ct=class extends w.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((t,e)=>{const o=e===this.activeTab;return w.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${o}
          data-testid="tab-${t.label?.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(t){return t.icon?w.dy`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const o=this.buttons[this.activeTab],i=this.buttons[t],r=o?.querySelector("wui-text"),n=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=n?.getBoundingClientRect();o&&r&&!e&&t!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&n&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};ct.styles=[v.ET,v.ZM,st],lt([(0,g.Cb)({type:Array})],ct.prototype,"tabs",void 0),lt([(0,g.Cb)()],ct.prototype,"onTabChange",void 0),lt([(0,g.Cb)({type:Array})],ct.prototype,"buttons",void 0),lt([(0,g.Cb)({type:Boolean})],ct.prototype,"disabled",void 0),lt([(0,g.Cb)()],ct.prototype,"localTabWidth",void 0),lt([(0,g.SB)()],ct.prototype,"activeTab",void 0),lt([(0,g.SB)()],ct.prototype,"isDense",void 0),ct=lt([(0,m.M)("wui-tabs")],ct);var dt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ut=class extends i.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.generateTabs();return i.dy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map((t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=t.map((({platform:t})=>t)),t}onTabChange(t){const e=this.platformTabs[t];e&&this.onSelectPlatfrom?.(e)}};dt([(0,r.Cb)({type:Array})],ut.prototype,"platforms",void 0),dt([(0,r.Cb)()],ut.prototype,"onSelectPlatfrom",void 0),ut=dt([(0,c.Mo)("w3m-connecting-header")],ut);var pt=o(12858),ht=(o(51243),w.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`),wt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};const gt={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},bt={lg:"paragraph-600",md:"small-600"},ft={lg:"md",md:"md"};let vt=class extends w.oi{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??bt[this.size];return w.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=ft[this.size],e=this.disabled?gt.disabled:gt[this.variant];return w.dy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return w.dy``}};vt.styles=[v.ET,v.ZM,ht],wt([(0,g.Cb)()],vt.prototype,"size",void 0),wt([(0,g.Cb)({type:Boolean})],vt.prototype,"disabled",void 0),wt([(0,g.Cb)({type:Boolean})],vt.prototype,"fullWidth",void 0),wt([(0,g.Cb)({type:Boolean})],vt.prototype,"loading",void 0),wt([(0,g.Cb)()],vt.prototype,"variant",void 0),wt([(0,g.Cb)({type:Boolean})],vt.prototype,"hasIconLeft",void 0),wt([(0,g.Cb)({type:Boolean})],vt.prototype,"hasIconRight",void 0),wt([(0,g.Cb)()],vt.prototype,"borderRadius",void 0),wt([(0,g.Cb)()],vt.prototype,"textVariant",void 0),vt=wt([(0,m.M)("wui-button")],vt);o(85642);var mt=w.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,yt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let xt=class extends w.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return w.dy`
      <button ?disabled=${this.disabled} tabindex=${f(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};xt.styles=[v.ET,v.ZM,mt],yt([(0,g.Cb)()],xt.prototype,"tabIdx",void 0),yt([(0,g.Cb)({type:Boolean})],xt.prototype,"disabled",void 0),yt([(0,g.Cb)()],xt.prototype,"color",void 0),xt=yt([(0,m.M)("wui-link")],xt);var Ct=w.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,$t=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let kt=class extends w.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,o=116+e,i=245+e,r=360+1.75*e;return w.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};kt.styles=[v.ET,Ct],$t([(0,g.Cb)({type:Number})],kt.prototype,"radius",void 0),kt=$t([(0,m.M)("wui-loading-thumbnail")],kt);o(68390);var Rt=w.iv`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,jt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let St=class extends w.oi{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return w.dy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?w.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};St.styles=[v.ET,v.ZM,Rt],jt([(0,g.Cb)()],St.prototype,"variant",void 0),jt([(0,g.Cb)()],St.prototype,"imageSrc",void 0),jt([(0,g.Cb)({type:Boolean})],St.prototype,"disabled",void 0),jt([(0,g.Cb)()],St.prototype,"icon",void 0),jt([(0,g.Cb)()],St.prototype,"size",void 0),jt([(0,g.Cb)()],St.prototype,"text",void 0),St=jt([(0,m.M)("wui-chip-button")],St);var Ot=w.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,It=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Tt=class extends w.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return w.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Tt.styles=[v.ET,v.ZM,Ot],It([(0,g.Cb)({type:Boolean})],Tt.prototype,"disabled",void 0),It([(0,g.Cb)()],Tt.prototype,"label",void 0),It([(0,g.Cb)()],Tt.prototype,"buttonLabel",void 0),Tt=It([(0,m.M)("wui-cta-button")],Tt);var Et=i.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,Wt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Pt=class extends i.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:o,chrome_store:r,homepage:a}=this.wallet,s=n.j.isMobile(),l=n.j.isIos(),d=n.j.isAndroid(),u=[e,o,a,r].filter(Boolean).length>1,p=c.Hg.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return u&&!s?i.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>h.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&a?i.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&l?i.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&d?i.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&n.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.j.openHref(this.wallet.homepage,"_blank")}};Pt.styles=[Et],Wt([(0,r.Cb)({type:Object})],Pt.prototype,"wallet",void 0),Pt=Wt([(0,c.Mo)("w3m-mobile-download-links")],Pt);var zt=i.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,Lt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};class Bt extends i.oi{constructor(){super(),this.wallet=h.RouterController.state.data?.wallet,this.connector=h.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=E.f.getWalletImage(this.wallet)??E.f.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=L.ConnectionController.state.wcUri,this.error=L.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(L.ConnectionController.subscribeKey("wcUri",(t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),L.ConnectionController.subscribeKey("wcError",(t=>this.error=t))),(n.j.isTelegram()||n.j.isSafari())&&n.j.isIos()&&L.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),L.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let e=`Continue in ${this.name}`;return this.error&&(e="Connection declined"),i.dy`
      <wui-flex
        data-error=${(0,d.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?i.dy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?i.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const t=this.shadowRoot?.querySelector("wui-button");t?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){L.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const t=pt.ThemeController.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return i.dy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.j.copyToClopboard(this.uri),at.SnackController.showSuccess("Link copied"))}catch{at.SnackController.showError("Failed to copy")}}}Bt.styles=zt,Lt([(0,r.SB)()],Bt.prototype,"isRetrying",void 0),Lt([(0,r.SB)()],Bt.prototype,"uri",void 0),Lt([(0,r.SB)()],Bt.prototype,"error",void 0),Lt([(0,r.SB)()],Bt.prototype,"ready",void 0),Lt([(0,r.SB)()],Bt.prototype,"showRetry",void 0),Lt([(0,r.SB)()],Bt.prototype,"secondaryBtnLabel",void 0),Lt([(0,r.SB)()],Bt.prototype,"secondaryLabel",void 0),Lt([(0,r.SB)()],Bt.prototype,"isLoading",void 0),Lt([(0,r.Cb)({type:Boolean})],Bt.prototype,"isMobile",void 0),Lt([(0,r.Cb)()],Bt.prototype,"onRetry",void 0);var Mt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Dt=class extends Bt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),p.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=u.ConnectorController.state,e=t.find((t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns||"INJECTED"===t.type||t.name===this.wallet?.name));if(!e)throw new Error("w3m-connecting-wc-browser: No connector found");await L.ConnectionController.connectExternal(e,e.chain),nt.I.close(),p.X.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(t){p.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};Dt=Mt([(0,c.Mo)("w3m-connecting-wc-browser")],Dt);var At=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let _t=class extends Bt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),p.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:e}=this.wallet,{redirect:o,href:i}=n.j.formatNativeUrl(t,this.uri);L.ConnectionController.setWcLinking({name:e,href:i}),L.ConnectionController.setRecentWallet(this.wallet),n.j.openHref(o,"_blank")}catch{this.error=!0}}};_t=At([(0,c.Mo)("w3m-connecting-wc-desktop")],_t);var Ut=o(47205),qt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Nt=class extends Bt{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=s.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:e,name:o}=this.wallet,{redirect:i,redirectUniversalLink:r,href:a}=n.j.formatNativeUrl(t,this.uri,e);this.redirectDeeplink=i,this.redirectUniversalLink=r,this.target=n.j.isIframe()?"_top":"_self",L.ConnectionController.setWcLinking({name:o,href:a}),L.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?n.j.openHref(this.redirectUniversalLink,this.target):n.j.openHref(this.redirectDeeplink,this.target)}catch(ge){p.X.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:ge instanceof Error?ge.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Ut.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(L.ConnectionController.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),p.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){L.ConnectionController.setWcError(!1),this.onConnect?.()}};qt([(0,r.SB)()],Nt.prototype,"redirectDeeplink",void 0),qt([(0,r.SB)()],Nt.prototype,"redirectUniversalLink",void 0),qt([(0,r.SB)()],Nt.prototype,"target",void 0),qt([(0,r.SB)()],Nt.prototype,"preferUniversalLinks",void 0),qt([(0,r.SB)()],Nt.prototype,"isLoading",void 0),Nt=qt([(0,c.Mo)("w3m-connecting-wc-mobile")],Nt);var Vt=o(92592);function Ht(t,e,o){if(t===e)return!1;return(t-e<0?e-t:t-e)<=o+.1}const Kt={generate({uri:t,size:e,logoSize:o,dotColor:i="#141414"}){const r=[],n=function(t,e){const o=Array.prototype.slice.call(Vt.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(o.length);return o.reduce(((t,e,o)=>(o%i===0?t.push([e]):t[t.length-1].push(e))&&t),[])}(t,"Q"),a=e/n.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach((({x:t,y:e})=>{const o=(n.length-7)*a*t,l=(n.length-7)*a*e,c=.45;for(let n=0;n<s.length;n+=1){const t=a*(7-2*n);r.push(w.YP`
            <rect
              fill=${2===n?i:"transparent"}
              width=${0===n?t-5:t}
              rx= ${0===n?(t-5)*c:t*c}
              ry= ${0===n?(t-5)*c:t*c}
              stroke=${i}
              stroke-width=${0===n?5:0}
              height=${0===n?t-5:t}
              x= ${0===n?l+a*n+2.5:l+a*n}
              y= ${0===n?o+a*n+2.5:o+a*n}
            />
          `)}}));const l=Math.floor((o+25)/a),c=n.length/2-l/2,d=n.length/2+l/2-1,u=[];n.forEach(((t,e)=>{t.forEach(((t,o)=>{if(n[e][o]&&!(e<7&&o<7||e>n.length-8&&o<7||e<7&&o>n.length-8)&&!(e>c&&e<d&&o>c&&o<d)){const t=e*a+a/2,i=o*a+a/2;u.push([t,i])}}))}));const p={};return u.forEach((([t,e])=>{p[t]?p[t]?.push(e):p[t]=[e]})),Object.entries(p).map((([t,e])=>{const o=e.filter((t=>e.every((e=>!Ht(t,e,a)))));return[Number(t),o]})).forEach((([t,e])=>{e.forEach((e=>{r.push(w.YP`<circle cx=${t} cy=${e} fill=${i} r=${a/2.5} />`)}))})),Object.entries(p).filter((([t,e])=>e.length>1)).map((([t,e])=>{const o=e.filter((t=>e.some((e=>Ht(t,e,a)))));return[Number(t),o]})).map((([t,e])=>{e.sort(((t,e)=>t<e?-1:1));const o=[];for(const i of e){const t=o.find((t=>t.some((t=>Ht(i,t,a)))));t?t.push(i):o.push([i])}return[t,o.map((t=>[t[0],t[t.length-1]]))]})).forEach((([t,e])=>{e.forEach((([e,o])=>{r.push(w.YP`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${o}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),r}};var Gt=w.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,Xt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Ft=class extends w.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,w.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return w.YP`
      <svg height=${t} width=${t}>
        ${Kt.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?w.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?w.dy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:w.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Ft.styles=[v.ET,Gt],Xt([(0,g.Cb)()],Ft.prototype,"uri",void 0),Xt([(0,g.Cb)({type:Number})],Ft.prototype,"size",void 0),Xt([(0,g.Cb)()],Ft.prototype,"theme",void 0),Xt([(0,g.Cb)()],Ft.prototype,"imageSrc",void 0),Xt([(0,g.Cb)()],Ft.prototype,"alt",void 0),Xt([(0,g.Cb)()],Ft.prototype,"color",void 0),Xt([(0,g.Cb)({type:Boolean})],Ft.prototype,"arenaClear",void 0),Xt([(0,g.Cb)({type:Boolean})],Ft.prototype,"farcaster",void 0),Ft=Xt([(0,m.M)("wui-qr-code")],Ft);var Zt=w.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Yt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Qt=class extends w.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,w.dy`<slot></slot>`}};Qt.styles=[Zt],Yt([(0,g.Cb)()],Qt.prototype,"width",void 0),Yt([(0,g.Cb)()],Qt.prototype,"height",void 0),Yt([(0,g.Cb)()],Qt.prototype,"borderRadius",void 0),Yt([(0,g.Cb)()],Qt.prototype,"variant",void 0),Qt=Yt([(0,m.M)("wui-shimmer")],Qt);var Jt=w.iv`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`,te=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ee=class extends w.oi{render(){return w.dy`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};ee.styles=[v.ET,v.ZM,Jt],ee=te([(0,m.M)("wui-ux-by-reown")],ee);var oe=i.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,ie=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let re=class extends Bt{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),p.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach((t=>t())),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return L.ConnectionController.setWcLinking(void 0),L.ConnectionController.setRecentWallet(this.wallet),i.dy` <wui-qr-code
      size=${t}
      theme=${pt.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,d.o)(E.f.getWalletImage(this.wallet))}
      color=${(0,d.o)(pt.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,d.o)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return i.dy`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};re.styles=oe,re=ie([(0,c.Mo)("w3m-connecting-wc-qrcode")],re);var ne=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ae=class extends i.oi{constructor(){if(super(),this.wallet=h.RouterController.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");p.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.o)(E.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ae=ne([(0,c.Mo)("w3m-connecting-wc-unsupported")],ae);var se=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let le=class extends Bt{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Ut.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(L.ConnectionController.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),p.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:e}=this.wallet,{redirect:o,href:i}=n.j.formatUniversalUrl(t,this.uri);L.ConnectionController.setWcLinking({name:e,href:i}),L.ConnectionController.setRecentWallet(this.wallet),n.j.openHref(o,"_blank")}catch{this.error=!0}}};se([(0,r.SB)()],le.prototype,"isLoading",void 0),le=se([(0,c.Mo)("w3m-connecting-wc-web")],le);var ce=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let de=class extends i.oi{constructor(){super(),this.wallet=h.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(s.OptionsController.state.siwx),this.remoteFeatures=s.OptionsController.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(s.OptionsController.subscribeKey("remoteFeatures",(t=>this.remoteFeatures=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return i.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?i.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(t=!1){if("browser"!==this.platform&&(!s.OptionsController.state.manualWCControl||t))try{const{wcPairingExpiry:e,status:o}=L.ConnectionController.state;(t||s.OptionsController.state.enableEmbedded||n.j.isPairingExpired(e)||"connecting"===o)&&(await L.ConnectionController.connectWalletConnect(),this.isSiwxEnabled||nt.I.close())}catch(e){p.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),L.ConnectionController.setWcError(!0),at.SnackController.showError(e.message??"Connection error"),L.ConnectionController.resetWcConnection(),h.RouterController.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:o,injected:i,rdns:r}=this.wallet,a=i?.map((({injected_id:t})=>t)).filter(Boolean),l=[...r?[r]:a??[]],c=!s.OptionsController.state.isUniversalProvider&&l.length,d=t,u=o,p=L.ConnectionController.checkInstalled(l),h=c&&p,w=e&&!n.j.isMobile();h&&!G.R.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(n.j.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),w&&this.platforms.push("desktop"),h||!c||G.R.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return i.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return i.dy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return i.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return i.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return i.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return i.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?i.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const e=this.shadowRoot?.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ce([(0,r.SB)()],de.prototype,"platform",void 0),ce([(0,r.SB)()],de.prototype,"platforms",void 0),ce([(0,r.SB)()],de.prototype,"isSiwxEnabled",void 0),ce([(0,r.SB)()],de.prototype,"remoteFeatures",void 0),de=ce([(0,c.Mo)("w3m-connecting-wc-view")],de);var ue=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let pe=class extends i.oi{constructor(){super(...arguments),this.isMobile=n.j.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=a.ApiController.state,{customWallets:o}=s.OptionsController.state,r=l.M.getRecentWallets(),n=t.length||e.length||o?.length||r.length;return i.dy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?i.dy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return i.dy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};ue([(0,r.SB)()],pe.prototype,"isMobile",void 0),pe=ue([(0,c.Mo)("w3m-connecting-wc-basic-view")],pe);var he=o(38220),we=o(89130);const ge=()=>new be;class be{}const fe=new WeakMap,ve=(0,we.XM)(class extends he.sR{render(t){return b.Ld}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),b.Ld}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let o=fe.get(e);void 0===o&&(o=new WeakMap,fe.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?fe.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var me=w.iv`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,ye=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let xe=class extends w.oi{constructor(){super(...arguments),this.inputElementRef=ge(),this.checked=void 0}render(){return w.dy`
      <label>
        <input
          ${ve(this.inputElementRef)}
          type="checkbox"
          ?checked=${f(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};xe.styles=[v.ET,v.ZM,v.Bp,me],ye([(0,g.Cb)({type:Boolean})],xe.prototype,"checked",void 0),xe=ye([(0,m.M)("wui-switch")],xe);var Ce=w.iv`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,$e=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ke=class extends w.oi{constructor(){super(...arguments),this.checked=void 0}render(){return w.dy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${f(this.checked)}></wui-switch>
      </button>
    `}};ke.styles=[v.ET,v.ZM,Ce],$e([(0,g.Cb)({type:Boolean})],ke.prototype,"checked",void 0),ke=$e([(0,m.M)("wui-certified-switch")],ke);var Re=w.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,je=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Se=class extends w.oi{constructor(){super(...arguments),this.icon="copy"}render(){return w.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Se.styles=[v.ET,v.ZM,Re],je([(0,g.Cb)()],Se.prototype,"icon",void 0),Se=je([(0,m.M)("wui-input-element")],Se);var Oe=o(21562),Ie=w.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,Te=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Ee=class extends w.oi{constructor(){super(...arguments),this.inputElementRef=ge(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:Boolean(this.inputRightPadding)};return w.dy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${ve(this.inputElementRef)}
        class=${(0,Oe.$)(e)}
        type=${this.type}
        enterkeyhint=${f(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${f(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?w.dy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Ee.styles=[v.ET,v.ZM,Ie],Te([(0,g.Cb)()],Ee.prototype,"size",void 0),Te([(0,g.Cb)()],Ee.prototype,"icon",void 0),Te([(0,g.Cb)({type:Boolean})],Ee.prototype,"disabled",void 0),Te([(0,g.Cb)()],Ee.prototype,"placeholder",void 0),Te([(0,g.Cb)()],Ee.prototype,"type",void 0),Te([(0,g.Cb)()],Ee.prototype,"keyHint",void 0),Te([(0,g.Cb)()],Ee.prototype,"value",void 0),Te([(0,g.Cb)()],Ee.prototype,"inputRightPadding",void 0),Te([(0,g.Cb)()],Ee.prototype,"tabIdx",void 0),Ee=Te([(0,m.M)("wui-input-text")],Ee);var We=w.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,Pe=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ze=class extends w.oi{constructor(){super(...arguments),this.inputComponentRef=ge()}render(){return w.dy`
      <wui-input-text
        ${ve(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,e=t?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};ze.styles=[v.ET,We],ze=Pe([(0,m.M)("wui-search-bar")],ze);const Le=w.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var Be=w.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,Me=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let De=class extends w.oi{constructor(){super(...arguments),this.type="wallet"}render(){return w.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?w.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Le}`:w.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};De.styles=[v.ET,v.ZM,Be],Me([(0,g.Cb)()],De.prototype,"type",void 0),De=Me([(0,m.M)("wui-card-select-loader")],De);var Ae=o(1512),_e=w.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,Ue=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let qe=class extends w.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Ae.H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Ae.H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Ae.H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Ae.H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Ae.H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Ae.H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Ae.H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Ae.H.getSpacingStyles(this.margin,3)};\n    `,w.dy`<slot></slot>`}};qe.styles=[v.ET,_e],Ue([(0,g.Cb)()],qe.prototype,"gridTemplateRows",void 0),Ue([(0,g.Cb)()],qe.prototype,"gridTemplateColumns",void 0),Ue([(0,g.Cb)()],qe.prototype,"justifyItems",void 0),Ue([(0,g.Cb)()],qe.prototype,"alignItems",void 0),Ue([(0,g.Cb)()],qe.prototype,"justifyContent",void 0),Ue([(0,g.Cb)()],qe.prototype,"alignContent",void 0),Ue([(0,g.Cb)()],qe.prototype,"columnGap",void 0),Ue([(0,g.Cb)()],qe.prototype,"rowGap",void 0),Ue([(0,g.Cb)()],qe.prototype,"gap",void 0),Ue([(0,g.Cb)()],qe.prototype,"padding",void 0),Ue([(0,g.Cb)()],qe.prototype,"margin",void 0),qe=Ue([(0,m.M)("wui-grid")],qe);var Ne=i.iv`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,Ve=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let He=class extends i.oi{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const t="certified"===this.wallet?.badge_type;return i.dy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,d.o)(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?i.dy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():i.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,d.o)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return i.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=E.f.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await E.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};He.styles=Ne,Ve([(0,r.SB)()],He.prototype,"visible",void 0),Ve([(0,r.SB)()],He.prototype,"imageSrc",void 0),Ve([(0,r.SB)()],He.prototype,"imageLoading",void 0),Ve([(0,r.Cb)()],He.prototype,"wallet",void 0),He=Ve([(0,c.Mo)("w3m-all-wallets-list-item")],He);var Ke=i.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,Ge=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};const Xe="local-paginator";let Fe=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.ApiController.state.wallets.length,this.wallets=a.ApiController.state.wallets,this.recommended=a.ApiController.state.recommended,this.featured=a.ApiController.state.featured,this.filteredWallets=a.ApiController.state.filteredWallets,this.unsubscribe.push(a.ApiController.subscribeKey("wallets",(t=>this.wallets=t)),a.ApiController.subscribeKey("recommended",(t=>this.recommended=t)),a.ApiController.subscribeKey("featured",(t=>this.featured=t)),a.ApiController.subscribeKey("filteredWallets",(t=>this.filteredWallets=t)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),this.paginationObserver?.disconnect()}render(){return i.dy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const t=this.shadowRoot?.querySelector("wui-grid");t&&(await a.ApiController.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map((()=>i.dy`
        <wui-card-select-loader type="wallet" id=${(0,d.o)(e)}></wui-card-select-loader>
      `))}walletsTemplate(){const t=this.filteredWallets?.length>0?n.j.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):n.j.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return X.J.markWalletsAsInstalled(t).map((t=>i.dy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:o,count:i}=a.ApiController.state,r=window.innerWidth<352?3:4,n=t.length+e.length;let s=Math.ceil(n/r)*r-n+r;return s-=t.length?o.length%r:0,0===i&&o.length>0?null:0===i||[...o,...t,...e].length<i?this.shimmerTemplate(s,Xe):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${Xe}`);t&&(this.paginationObserver=new IntersectionObserver((([t])=>{if(t?.isIntersecting&&!this.loading){const{page:t,count:e,wallets:o}=a.ApiController.state;o.length<e&&a.ApiController.fetchWalletsByPage({page:t+1})}})),this.paginationObserver.observe(t))}onConnectWallet(t){u.ConnectorController.selectWalletConnector(t)}};Fe.styles=Ke,Ge([(0,r.SB)()],Fe.prototype,"loading",void 0),Ge([(0,r.SB)()],Fe.prototype,"wallets",void 0),Ge([(0,r.SB)()],Fe.prototype,"recommended",void 0),Ge([(0,r.SB)()],Fe.prototype,"featured",void 0),Ge([(0,r.SB)()],Fe.prototype,"filteredWallets",void 0),Fe=Ge([(0,c.Mo)("w3m-all-wallets-list")],Fe);var Ze=i.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,Ye=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Qe=class extends i.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?i.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=a.ApiController.state,e=X.J.markWalletsAsInstalled(t);return t.length?i.dy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map((t=>i.dy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(t)}
              .wallet=${t}
              data-testid="wallet-search-item-${t.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:i.dy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){u.ConnectorController.selectWalletConnector(t)}};Qe.styles=Ze,Ye([(0,r.SB)()],Qe.prototype,"loading",void 0),Ye([(0,r.Cb)()],Qe.prototype,"query",void 0),Ye([(0,r.Cb)()],Qe.prototype,"badge",void 0),Qe=Ye([(0,c.Mo)("w3m-all-wallets-search")],Qe);var Je=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let to=class extends i.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=n.j.debounce((t=>{this.search=t}))}render(){const t=this.search.length>=2;return i.dy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?i.dy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,d.o)(this.badge)}
          ></w3m-all-wallets-search>`:i.dy`<w3m-all-wallets-list badge=${(0,d.o)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",at.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.j.isMobile()?i.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){h.RouterController.push("ConnectingWalletConnect")}};Je([(0,r.SB)()],to.prototype,"search",void 0),Je([(0,r.SB)()],to.prototype,"badge",void 0),to=Je([(0,c.Mo)("w3m-all-wallets-view")],to);var eo=w.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,oo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let io=class extends w.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return w.dy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${f(this.iconVariant)}
        tabindex=${f(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return w.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return w.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",o=this.iconSize?this.iconSize:e;return w.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?w.dy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:w.dy``}chevronTemplate(){return this.chevron?w.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};io.styles=[v.ET,v.ZM,eo],oo([(0,g.Cb)()],io.prototype,"icon",void 0),oo([(0,g.Cb)()],io.prototype,"iconSize",void 0),oo([(0,g.Cb)()],io.prototype,"tabIdx",void 0),oo([(0,g.Cb)()],io.prototype,"variant",void 0),oo([(0,g.Cb)()],io.prototype,"iconVariant",void 0),oo([(0,g.Cb)({type:Boolean})],io.prototype,"disabled",void 0),oo([(0,g.Cb)()],io.prototype,"imageSrc",void 0),oo([(0,g.Cb)()],io.prototype,"alt",void 0),oo([(0,g.Cb)({type:Boolean})],io.prototype,"chevron",void 0),oo([(0,g.Cb)({type:Boolean})],io.prototype,"loading",void 0),io=oo([(0,m.M)("wui-list-item")],io);var ro=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let no=class extends i.oi{constructor(){super(...arguments),this.wallet=h.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return i.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?i.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?i.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?i.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?i.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&n.j.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&n.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.j.openHref(this.wallet.homepage,"_blank")}};no=ro([(0,c.Mo)("w3m-downloads-view")],no)}}]);