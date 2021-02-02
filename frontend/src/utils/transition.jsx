import { nanoid as NanoID } from 'nanoid'

export default function (props, uri, event=null, reload=false) {
  let key = {
    ctrlKey: event?.ctrlKey,
    altKey: event?.altKey,
    shiftKey: event?.shiftKey,
  };

  // open newtab
  let open_newtab = function(url, name, opt)
  {
    let form = document.body.appendChild(document.createElement('form')),
      ua = navigator.userAgent.toLowerCase(),
      isIE = ua.indexOf('msie')>=0 || ua.indexOf('trident')>=0,
      isPopup, reopen, w, act, tid, c;
    isPopup = function(win) {
      return window.screenTop !== win.screenTop && window.screenLeft !== win.screenLeft;
    };
    reopen = function() {return window.open(url||"", name, opt);};
    act = function() {
      form.setAttribute('method', 'GET');
      form.setAttribute('action', url);
      form.setAttribute('target', name);
      form.submit();
      form.parentNode.removeChild(form);
    };
    w = reopen(url);
    if (!isIE || isPopup(w)) {act();w.focus();return w;}
    w.close();
    if (w.closed) {w=reopen();act();return w;}
    c = 0;
    tid = setInterval(function() {
      if (w && w.closed || c++>100) {clearInterval(tid);reopen();act();}
    }, 10);
    return null;
  };



  // new tab
  if (key.ctrlKey || key.shiftKey)
  {
    open_newtab(uri, `uri${uri}${NanoID()}`);
    return;
  }

  if (props)
  {
    props.history.push(uri);
  }
  else
  {
    window.location.href = uri;
  }

  // reload
  if (reload)
    location.reload(true);
}
