(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){e.exports={App:"App_App__grhpS","App-logo":"App_App-logo__-ljIu","App-logo-spin":"App_App-logo-spin__1xhcn","App-header":"App_App-header__1v5Zq","App-link":"App_App-link__3wFIg"}},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=n(4),i=n.n(s),l=n(15),u=n(6),p=n(7),h=n(8),d=n(10),m=n(9),j=n(11),b=n(1),g=function(e){var t=e.onSearch;return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(e.target.elements.pictureName.value.toLowerCase())},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",name:"pictureName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};function f(e){var t=e.image,n=e.onClick,a=t.webformatURL,r=t.tags;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:a,onClick:n,alt:r,className:"ImageGalleryItem-image"})})}var v=function(e){var t=e.pictures,n=e.onSelect;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){return Object(b.jsx)(f,{image:e,onClick:function(){return n(e)}},t)}))})},O=n(24),x=n.n(O);n(51);function w(){return Object(b.jsx)("div",{className:"loaderContainer",children:Object(b.jsx)(x.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})})}var S=function(e){var t=e.onClick;return Object(b.jsx)("div",{className:"btnContainer",children:Object(b.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})})},y=document.querySelector("#modal-root"),k=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackDrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,n=e.alt;return Object(c.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackDrop,children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:t,alt:n})})}),y)}}]),n}(a.Component),N=n(14),C=n.n(N);C.a.defaults.baseURL="https://pixabay.com";var A=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/?q=".concat(t,"&page=").concat(n,"&key=").concat("22553588-f2f977a115121553e22566e7d","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=(n(71),n(72),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictureName:"",pictures:[],selectedImg:null,reqStatus:"idle",page:1,showModal:!1},e.handleFormSubmit=function(t){e.setState({pictureName:t})},e.loadMoreBtnClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleSelectedImage=function(t){e.setState((function(e){return{showModal:!e.showModal,selectedImg:t}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal,selectedImg:""}}))},e}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.pictureName,r=this.state.page,n.pictureName===a&&n.page===r){e.next=18;break}return e.prev=3,this.setState({reqStatus:"pending"}),e.next=7,A(a,r);case 7:if(c=e.sent,this.setState((function(e){return{pictures:[].concat(Object(l.a)(e.pictures),Object(l.a)(c)),reqStatus:"resolved"}})),""!==a.trim()&&0!==c.length){e.next=11;break}return e.abrupt("return",j.b.error("Sorry, but there are no pictures with  ".concat(a)));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),this.setState({reqStatus:"rejected"}),j.b.error("Something went wrong");case 17:this.state.page>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 18:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pictures,n=e.reqStatus,a=e.selectedImg,r=e.showModal,c=t.length>=12;return Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{}),Object(b.jsx)(g,{onSearch:this.handleFormSubmit}),Object(b.jsx)(v,{pictures:t,onSelect:this.handleSelectedImage}),"pending"===n&&Object(b.jsx)(w,{}),c&&Object(b.jsx)(S,{onClick:this.loadMoreBtnClick}),r&&Object(b.jsx)(k,{src:a.largeImageURL,alt:a.tags,onClose:this.toggleModal})]})}}]),n}(a.Component));n(73);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.488f559c.chunk.js.map