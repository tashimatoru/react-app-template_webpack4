(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{336:function(t,e,n){"use strict";var r=n(1),o=n.n(r),c=n(7),i=n(354),u=n(337);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var e,n,r,c=s(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=c.call(this,t)).state={},e}return e=f,(n=[{key:"render",value:function(){var t,e=this;return o.a.createElement(i.a,{href:this.props.href,style:this.props.style,onClick:function(t){e.props.onClick(t),t.ctrlKey||t.altKey||t.shiftKey||e.props.href.match(/^\w+:\/\//)||(t.preventDefault(),e.props.disabled||function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o={ctrlKey:null==n?void 0:n.ctrlKey,altKey:null==n?void 0:n.altKey,shiftKey:null==n?void 0:n.shiftKey},c=function(t,e,n){var r,o,c,i,u,f,l=document.body.appendChild(document.createElement("form")),a=navigator.userAgent.toLowerCase(),s=a.indexOf("msie")>=0||a.indexOf("trident")>=0;return r=function(t){return window.screenTop!==t.screenTop&&window.screenLeft!==t.screenLeft},i=function(){l.setAttribute("method","GET"),l.setAttribute("action",t),l.setAttribute("target",e),l.submit(),l.parentNode.removeChild(l)},c=(o=function(){return window.open(t||"",e,n)})(),!s||r(c)?(i(),c.focus(),c):(c.close(),c.closed?(c=o(),i(),c):(f=0,u=setInterval((function(){(c&&c.closed||f++>100)&&(clearInterval(u),o(),i())}),10),null))};o.ctrlKey||o.shiftKey?c(e,"uri".concat(e).concat(Object(u.a)())):(t?t.history.push(e):window.location.href=e,r&&location.reload(!0))}(e.props,e.props.href))},color:this.props.color,underline:this.props.underline},null===(t=this.props)||void 0===t?void 0:t.children)}}])&&l(e.prototype,n),r&&l(e,r),f}(o.a.Component);h.defaultProps={href:"/",onClick:function(){},color:"inherit",underline:"none",disabled:!1,style:{}};e.a=Object(c.f)(h)},353:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(7),i=n(336);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var e,n,r,c=a(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this,t)).state={},e}return e=u,(n=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,"Search",o.a.createElement("hr",null),o.a.createElement("p",null,o.a.createElement(i.a,{href:"/"},"index")),o.a.createElement("p",null,o.a.createElement(i.a,{href:"/hoge"},"hoge")))}}])&&f(e.prototype,n),r&&f(e,r),u}(o.a.Component);y.defaultProps={},e.default=Object(c.f)(y)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9tdWkvTGluay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RyYW5zaXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZW50cy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIkxpbmsiLCJwcm9wcyIsInN0YXRlIiwiaHJlZiIsInRoaXMiLCJzdHlsZSIsIm9uQ2xpY2siLCJldmVudCIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1hdGNoIiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlZCIsInVyaSIsInJlbG9hZCIsImtleSIsIm9wZW5fbmV3dGFiIiwidXJsIiwibmFtZSIsIm9wdCIsImlzUG9wdXAiLCJyZW9wZW4iLCJ3IiwiYWN0IiwidGlkIiwiYyIsImZvcm0iLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiaXNJRSIsImluZGV4T2YiLCJ3aW4iLCJ3aW5kb3ciLCJzY3JlZW5Ub3AiLCJzY3JlZW5MZWZ0Iiwic2V0QXR0cmlidXRlIiwic3VibWl0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwib3BlbiIsImZvY3VzIiwiY2xvc2UiLCJjbG9zZWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJOYW5vSUQiLCJoaXN0b3J5IiwicHVzaCIsImxvY2F0aW9uIiwidHJhbnNpdGlvbiIsImNvbG9yIiwidW5kZXJsaW5lIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIndpdGhSb3V0ZXIiLCJTZWFyY2giLCJGcmFnbWVudCJdLCJtYXBwaW5ncyI6Im8xQ0FLTUEsRSxzUUFDSixXQUFZQyxHQUFPLGEsNEZBQUEsVUFDakIsY0FBTUEsSUFDREMsTUFBUSxHQUZJLEUsOENBTVYsYUFDUCxPQUNFLGtCQUFDLElBQUQsQ0FDRUMsS0FBTUMsS0FBS0gsTUFBTUUsS0FDakJFLE1BQU9ELEtBQUtILE1BQU1JLE1BQ2xCQyxRQUFTLFNBQUNDLEdBRVIsRUFBS04sTUFBTUssUUFBUUMsR0FHakJBLEVBQU1DLFNBQ0hELEVBQU1FLFFBQ05GLEVBQU1HLFVBQ04sRUFBS1QsTUFBTUUsS0FBS1EsTUFBTSxlQU8zQkosRUFBTUssaUJBR0YsRUFBS1gsTUFBTVksVUNqQ1YsU0FBVVosRUFBT2EsR0FBK0IsSUFBMUJQLEVBQTBCLHVEQUFwQixLQUFNUSxFQUFjLHdEQUN6REMsRUFBTSxDQUNSUixRQUFTRCxhQUFGLEVBQUVBLEVBQU9DLFFBQ2hCQyxPQUFRRixhQUFGLEVBQUVBLEVBQU9FLE9BQ2ZDLFNBQVVILGFBQUYsRUFBRUEsRUFBT0csVUFJZk8sRUFBYyxTQUFTQyxFQUFLQyxFQUFNQyxHQUVwQyxJQUdFQyxFQUFTQyxFQUFRQyxFQUFHQyxFQUFLQyxFQUFLQyxFQUg1QkMsRUFBT0MsU0FBU0MsS0FBS0MsWUFBWUYsU0FBU0csY0FBYyxTQUMxREMsRUFBS0MsVUFBVUMsVUFBVUMsY0FDekJDLEVBQU9KLEVBQUdLLFFBQVEsU0FBUyxHQUFLTCxFQUFHSyxRQUFRLFlBQVksRUFjekQsT0FaQWhCLEVBQVUsU0FBU2lCLEdBQ2pCLE9BQU9DLE9BQU9DLFlBQWNGLEVBQUlFLFdBQWFELE9BQU9FLGFBQWVILEVBQUlHLFlBR3pFakIsRUFBTSxXQUNKRyxFQUFLZSxhQUFhLFNBQVUsT0FDNUJmLEVBQUtlLGFBQWEsU0FBVXhCLEdBQzVCUyxFQUFLZSxhQUFhLFNBQVV2QixHQUM1QlEsRUFBS2dCLFNBQ0xoQixFQUFLaUIsV0FBV0MsWUFBWWxCLElBRTlCSixHQVJBRCxFQUFTLFdBQVksT0FBT2lCLE9BQU9PLEtBQUs1QixHQUFLLEdBQUlDLEVBQU1DLFFBU2xEZ0IsR0FBUWYsRUFBUUUsSUFBS0MsSUFBTUQsRUFBRXdCLFFBQWV4QixJQUNqREEsRUFBRXlCLFFBQ0V6QixFQUFFMEIsUUFBUzFCLEVBQUVELElBQVNFLElBQWFELElBQ3ZDRyxFQUFJLEVBQ0pELEVBQU15QixhQUFZLFlBQ1ozQixHQUFLQSxFQUFFMEIsUUFBVXZCLElBQUksT0FBTXlCLGNBQWMxQixHQUFLSCxJQUFTRSxPQUMxRCxJQUNJLFFBTUxSLEVBQUlSLFNBQVdRLEVBQUlOLFNBRXJCTyxFQUFZSCxFQUFELGFBQVlBLEdBQVosT0FBa0JzQyxpQkFJM0JuRCxFQUVGQSxFQUFNb0QsUUFBUUMsS0FBS3hDLEdBSW5CeUIsT0FBT2dCLFNBQVNwRCxLQUFPVyxFQUlyQkMsR0FDRndDLFNBQVN4QyxRQUFPLElEbEJWeUMsQ0FBVyxFQUFLdkQsTUFBTyxFQUFLQSxNQUFNRSxRQUVwQ3NELE1BQU9yRCxLQUFLSCxNQUFNd0QsTUFDbEJDLFVBQVd0RCxLQUFLSCxNQUFNeUQsV0E3QnhCLFVBK0JHdEQsS0FBS0gsYUEvQlIsYUErQkcsRUFBWTBELGUsOEJBeENGQyxJQUFNQyxXQStDekI3RCxFQUFLOEQsYUFBZSxDQUVsQjNELEtBQVcsSUFFWEcsUUFBVyxhQUVYbUQsTUFBVyxVQUVYQyxVQUFXLE9BRVg3QyxVQUFXLEVBRVhSLE1BQVcsSUFHRTBELGdCQUFXL0QsSSx5eENFL0RwQmdFLEUsc1FBQ0osV0FBWS9ELEdBQU8sYSw0RkFBQSxVQUNqQixjQUFNQSxJQUNEQyxNQUFRLEdBRkksRSw4Q0FPakIsT0FDRSxrQkFBQyxJQUFNK0QsU0FBUCxjQUVFLDZCQUNBLDJCQUNFLGtCQUFDLElBQUQsQ0FBTTlELEtBQUssS0FBWCxVQUVGLDJCQUNFLGtCQUFDLElBQUQsQ0FBTUEsS0FBSyxTQUFYLGUsOEJBaEJXeUQsSUFBTUMsV0F3QjNCRyxFQUFPRixhQUFlLEdBR1BDLHNCQUFXQyIsImZpbGUiOiJjaHVuay81ZDIxMDJhMjE4YzYzODVjNmI3MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgTXVpTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJ3V0aWxzL3RyYW5zaXRpb24nO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TXVpTGlua1xuICAgICAgICBocmVmPXt0aGlzLnByb3BzLmhyZWZ9XG4gICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5jdHJsS2V5XG4gICAgICAgICAgICB8fCBldmVudC5hbHRLZXlcbiAgICAgICAgICAgIHx8IGV2ZW50LnNoaWZ0S2V5XG4gICAgICAgICAgICB8fCB0aGlzLnByb3BzLmhyZWYubWF0Y2goL15cXHcrOlxcL1xcLy8pXG4gICAgICAgICAgKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDpgJrluLjjga7jgq/jg6rjg4Pjgq/jgafjgYLjgozjgbDjgIHpgbfnp7vjgqTjg5njg7Pjg4jjgpLjgq3jg6Pjg7Pjgrvjg6tcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgLy8gZGlzYWJsZWTliKTlrppcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOmBt+enu1xuICAgICAgICAgIHRyYW5zaXRpb24odGhpcy5wcm9wcywgdGhpcy5wcm9wcy5ocmVmKTtcbiAgICAgICAgfX1cbiAgICAgICAgY29sb3I9e3RoaXMucHJvcHMuY29sb3J9XG4gICAgICAgIHVuZGVybGluZT17dGhpcy5wcm9wcy51bmRlcmxpbmV9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzPy5jaGlsZHJlbn1cbiAgICAgIDwvTXVpTGluaz5cbiAgICApO1xuICB9XG59O1xuXG4vLyBkZWZhdWx0UHJvcHNcbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICAvLyDpgbfnp7vlhYhcbiAgaHJlZjogICAgICBcIi9cIixcbiAgLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OIXG4gIG9uQ2xpY2s6ICAgKCkgPT4ge30sXG4gIC8vIOODhuOCreOCueODiOOCq+ODqeODvFxuICBjb2xvcjogICAgIFwiaW5oZXJpdFwiLFxuICAvLyDkuIvnt5pcbiAgdW5kZXJsaW5lOiBcIm5vbmVcIiwgLy8gbm9uZSwgaG92ZXIsIGFsd2F5c1xuICAvLyDnlLvpnaLpgbfnp7vnhKHlirlcbiAgZGlzYWJsZWQ6ICBmYWxzZSxcbiAgLy8gc3R5bGVcbiAgc3R5bGU6ICAgICB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGluayk7XG4iLCJpbXBvcnQgeyBuYW5vaWQgYXMgTmFub0lEIH0gZnJvbSAnbmFub2lkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIHVyaSwgZXZlbnQ9bnVsbCwgcmVsb2FkPWZhbHNlKSB7XG4gIGxldCBrZXkgPSB7XG4gICAgY3RybEtleTogZXZlbnQ/LmN0cmxLZXksXG4gICAgYWx0S2V5OiBldmVudD8uYWx0S2V5LFxuICAgIHNoaWZ0S2V5OiBldmVudD8uc2hpZnRLZXksXG4gIH07XG5cbiAgLy8gb3BlbiBuZXd0YWJcbiAgbGV0IG9wZW5fbmV3dGFiID0gZnVuY3Rpb24odXJsLCBuYW1lLCBvcHQpXG4gIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpKSxcbiAgICAgIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFxuICAgICAgaXNJRSA9IHVhLmluZGV4T2YoJ21zaWUnKT49MCB8fCB1YS5pbmRleE9mKCd0cmlkZW50Jyk+PTAsXG4gICAgICBpc1BvcHVwLCByZW9wZW4sIHcsIGFjdCwgdGlkLCBjO1xuICAgIGlzUG9wdXAgPSBmdW5jdGlvbih3aW4pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuc2NyZWVuVG9wICE9PSB3aW4uc2NyZWVuVG9wICYmIHdpbmRvdy5zY3JlZW5MZWZ0ICE9PSB3aW4uc2NyZWVuTGVmdDtcbiAgICB9O1xuICAgIHJlb3BlbiA9IGZ1bmN0aW9uKCkge3JldHVybiB3aW5kb3cub3Blbih1cmx8fFwiXCIsIG5hbWUsIG9wdCk7fTtcbiAgICBhY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnR0VUJyk7XG4gICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgdXJsKTtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCBuYW1lKTtcbiAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICBmb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgfTtcbiAgICB3ID0gcmVvcGVuKHVybCk7XG4gICAgaWYgKCFpc0lFIHx8IGlzUG9wdXAodykpIHthY3QoKTt3LmZvY3VzKCk7cmV0dXJuIHc7fVxuICAgIHcuY2xvc2UoKTtcbiAgICBpZiAody5jbG9zZWQpIHt3PXJlb3BlbigpO2FjdCgpO3JldHVybiB3O31cbiAgICBjID0gMDtcbiAgICB0aWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3ICYmIHcuY2xvc2VkIHx8IGMrKz4xMDApIHtjbGVhckludGVydmFsKHRpZCk7cmVvcGVuKCk7YWN0KCk7fVxuICAgIH0sIDEwKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuXG5cbiAgLy8gbmV3IHRhYlxuICBpZiAoa2V5LmN0cmxLZXkgfHwga2V5LnNoaWZ0S2V5KVxuICB7XG4gICAgb3Blbl9uZXd0YWIodXJpLCBgdXJpJHt1cml9JHtOYW5vSUQoKX1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocHJvcHMpXG4gIHtcbiAgICBwcm9wcy5oaXN0b3J5LnB1c2godXJpKTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVyaTtcbiAgfVxuXG4gIC8vIHJlbG9hZFxuICBpZiAocmVsb2FkKVxuICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICdtb2R1bGVzL211aS9MaW5rJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIFNlYXJjaFxuICAgICAgICA8aHIvPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPmluZGV4PC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9nZVwiPmhvZ2U8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufTtcblxuLy8gZGVmYXVsdFByb3BzXG5TZWFyY2guZGVmYXVsdFByb3BzID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==