(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(7),u=n.n(r),s=n(1),i=n(2),c=n(3),l=n(5),h=n(4),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var o;return Object(s.a)(this,n),(o=e.call(this,t)).state={},o}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{background:"white",textAlign:"center",height:"auto",boxShadow:"0px 0px 30px rgba(0, 0, 0, 0.4)",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"100vw",padding:"10px 0px 30px 0px"}},a.a.createElement("h1",null,"Quote Machine"),a.a.createElement("p",{style:{fontStyle:"italic"}},'"',this.props.quote,'"'),a.a.createElement("p",null,this.props.author),a.a.createElement("button",{onClick:this.props.handleQuoteButton},"New Quote"))}}]),n}(a.a.Component),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var o;return Object(s.a)(this,n),(o=e.call(this,t)).state={quotes:{quote:"Quote",author:"Author"},color:"#"+(16777216+16777215*Math.random()).toString(16).substr(1,6)},o.handleQuoteButton=o.handleQuoteButton.bind(Object(c.a)(o)),o}return Object(i.a)(n,[{key:"handleQuoteButton",value:function(){var t=this;fetch("http://quotes.stormconsultancy.co.uk/random.json").then((function(t){return t.json()})).then((function(e){return t.setState({quotes:e})})),this.setState({color:"#"+(16777216+16777215*Math.random()).toString(16).substr(1,6)})}},{key:"render",value:function(){var t={height:"100vh",position:"relative",background:this.state.color,transition:"all .5s ease"};return a.a.createElement("div",{style:t},a.a.createElement(p,{handleQuoteButton:this.handleQuoteButton,quote:this.state.quotes.quote,author:this.state.quotes.author}))}}]),n}(a.a.Component);u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.9e17956a.chunk.js.map