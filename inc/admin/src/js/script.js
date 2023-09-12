/*
 CookieConsent v2.4.5
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function(){function na(za){function oa(a,b){return a.classList?a.classList.contains(b):!!a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))}function ha(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," ")}function D(a,b){a.classList?a.classList.add(b):oa(a,b)||(a.className+=" "+b)}function Y(a){if("object"===typeof a){var b=[],c=0;for(b[c++]in a);return b}}function J(a,b,c,d){a.addEventListener?d?a.addEventListener(b,c,{passive:!0}):a.addEventListener(b,
c,!1):a.attachEvent("on"+b,c)}function ba(a,b,c){if("one"===b)var d=(d=document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))?c?d.pop():a:"";else if("all"===b)for(a=document.cookie.split(/;\s*/),d=[],b=0;b<a.length;b++)d.push(a[b].split("=")[0]);return d}function pa(){if(qa){var a=document.querySelectorAll("script[data-cookiecategory]"),b=ra,c=JSON.parse(K).level||[],d=function(f,g){if(g<f.length){var k=f[g],l=k.getAttribute("data-cookiecategory");if(-1<N(c,l)){k.type="text/javascript";k.removeAttribute("data-cookiecategory");
l=k.getAttribute("data-src");var h=e("script");h.textContent=k.innerHTML;(function(m,q){for(var y=q.attributes,C=y.length,L=0;L<C;L++)q=y[L],m.setAttribute(q.nodeName,q.nodeValue)})(h,k);l?h.src=l:l=k.src;l&&(b?h.readyState?h.onreadystatechange=function(){if("loaded"===h.readyState||"complete"===h.readyState)h.onreadystatechange=null,d(f,++g)}:h.onload=function(){h.onload=null;d(f,++g)}:l=!1);k.parentNode.replaceChild(h,k);if(l)return}d(f,++g)}};d(a,0)}}function Aa(a){function b(d,f,g,k,l,h,m){h=
h&&h.split(" ")||[];if(-1<N(f,l)&&(D(d,l),-1<N(g,h[0])))for(f=0;f<h.length;f++)D(d,h[f]);-1<N(k,m)&&D(d,m)}if("object"===typeof a){var c=a.consent_modal;a=a.settings_modal;Q&&c&&b(z,["box","bar","cloud"],["top","bottom"],["zoom","slide"],c.layout,c.position,c.transition);a&&b(E,["bar"],["left","right"],["zoom","slide"],a.layout,a.position,a.transition)}}function Ba(){var a=!1,b=!1;J(document,"keydown",function(c){c=c||window.event;"Tab"===c.key&&(r&&(c.shiftKey?document.activeElement===r[0]&&(r[1].focus(),
c.preventDefault()):document.activeElement===r[1]&&(r[0].focus(),c.preventDefault()),b||Z||(b=!0,!a&&c.preventDefault(),c.shiftKey?r[3]?r[2]?r[2].focus():r[0].focus():r[1].focus():r[3]?r[3].focus():r[0].focus())),!b&&(a=!0))});document.contains&&J(M,"click",function(c){c=c||window.event;ia?O.contains(c.target)?Z=!0:(n.hideSettings(0),Z=!1):aa&&z.contains(c.target)&&(Z=!0)},!0)}function e(a){var b=document.createElement(a);"button"===a&&b.setAttribute("type",a);return b}function N(a,b){for(var c=a.length,
d=0;d<c;d++)if(a[d]==b)return d;return-1}function Ca(a,b){if("string"!==typeof a||""==a||document.getElementById("cc--style"))b();else{var c=e("style");c.id="cc--style";var d=new XMLHttpRequest;d.onreadystatechange=function(){4==this.readyState&&200==this.status&&(c.setAttribute("type","text/css"),c.styleSheet?c.styleSheet.cssText=this.responseText:c.appendChild(document.createTextNode(this.responseText)),document.getElementsByTagName("head")[0].appendChild(c),b())};d.open("GET",a);d.send()}}function ca(a,
b){var c=document.querySelectorAll(".c-tgl")||[],d="",f=[],g=!1;if(0<c.length){switch(b){case -1:for(b=0;b<c.length;b++)c[b].checked?(d+='"'+c[b].value+'",',F[b]||(f.push(c[b].value),F[b]=!0)):F[b]&&(f.push(c[b].value),F[b]=!1);break;case 0:for(b=0;b<c.length;b++)c[b].disabled?(d+='"'+c[b].value+'",',F[b]=!0):(c[b].checked=!1,F[b]&&(f.push(c[b].value),F[b]=!1));break;case 1:for(b=0;b<c.length;b++)c[b].checked=!0,d+='"'+c[b].value+'",',F[b]||f.push(c[b].value),F[b]=!0}d=d.slice(0,-1);if(a.autoclear_cookies&&
R&&0<f.length){c=a.languages[G].settings_modal.blocks;b=c.length;for(var k=-1,l=ba("","all"),h=0;h<b;h++){var m=c[h];if(m.hasOwnProperty("toggle")&&!F[++k]&&m.hasOwnProperty("cookie_table")&&-1<N(f,m.toggle.value)){var q=m.cookie_table,y=Y(a.languages[G].settings_modal.cookie_table_headers[0])[0],C=q.length;"on_disable"===m.toggle.reload&&(g=!0);for(var L=0;L<C;L++){var u=q[L],p=[],t=u[y],A=u.path||!1;if(u.is_regex)for(u=0;u<l.length;u++)l[u].match(t)&&p.push(l[u]);else t=N(l,t),-1<t&&p.push(l[t]);
if(0<p.length){A=A?A:"/";for(t=0;t<p.length;t++)document.cookie=p[t]+"=; Path="+A+"; Domain="+da+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie=p[t]+"=; Path="+A+"; Domain=."+da+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";"on_clear"===m.toggle.reload&&(g=!0)}}}}}}K='{"level": ['+d+"]}";if(!R||0<f.length)d=ea,c=K,b=new Date,b.setTime(b.getTime()+864E5*sa),d=d+"="+(c||"")+("; expires="+b.toUTCString())+"; Path="+ta+";",d+=" SameSite="+ua+";",-1<location.hostname.indexOf(".")&&(d+=" Domain="+
da+";"),"https:"===location.protocol&&(d+=" Secure;"),document.cookie=d;pa();if("function"===typeof a.onAccept&&!R)return R=!0,a.onAccept(JSON.parse(K));if("function"===typeof a.onChange&&0<f.length)a.onChange(JSON.parse(K));g&&window.location.reload()}function Da(a,b){M=e("div");M.id="cc--main";M.style.position="fixed";M.style.zIndex="1000000";M.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e';
var c=M.children[0],d=G,f="string"===typeof S.textContent?"textContent":"innerText";if(!a){z=e("div");var g=e("div"),k=e("div"),l=e("div"),h=e("div"),m=e("div"),q=e("button"),y=e("button"),C=e("div");z.id="cm";g.id="c-inr";k.id="c-inr-i";l.id="c-ttl";h.id="c-txt";m.id="c-bns";q.id="c-p-bn";y.id="c-s-bn";C.id="cm-ov";q.className="c-bn";y.className="c-bn c_link";l.setAttribute("role","heading");l.setAttribute("aria-level","2");z.setAttribute("role","dialog");z.setAttribute("aria-modal","true");z.setAttribute("aria-hidden",
"false");z.setAttribute("aria-labelledby","c-ttl");z.setAttribute("aria-describedby","c-txt");z.style.visibility=C.style.visibility="hidden";C.style.opacity=0;l.insertAdjacentHTML("beforeend",b.languages[d].consent_modal.title);h.insertAdjacentHTML("beforeend",b.languages[d].consent_modal.description);q[f]=b.languages[d].consent_modal.primary_btn.text;y[f]=b.languages[d].consent_modal.secondary_btn.text;var L=-1;"accept_all"==b.languages[d].consent_modal.primary_btn.role&&(L=1);J(q,"click",function(){n.hide();
ca(b,L)});"accept_necessary"==b.languages[d].consent_modal.secondary_btn.role?J(y,"click",function(){n.hide();ca(b,0)}):J(y,"click",function(){n.showSettings(0)});k.appendChild(l);k.appendChild(h);m.appendChild(q);m.appendChild(y);g.appendChild(k);g.appendChild(m);z.appendChild(g);c.appendChild(z);c.appendChild(C)}E=e("div");g=e("div");k=e("div");l=e("div");O=e("div");h=e("div");m=e("div");var u=e("button");q=e("div");y=e("div");C=e("div");E.id="s-cnt";g.id="c-vln";l.id="c-s-in";k.id="cs";h.id="s-ttl";
O.id="s-inr";m.id="s-hdr";y.id="s-bl";u.id="s-c-bn";C.id="cs-ov";q.id="s-c-bnc";u.className="c-bn";u.setAttribute("aria-label",b.languages[d].settings_modal.close_btn_label||"Close");E.setAttribute("role","dialog");E.setAttribute("aria-modal","true");E.setAttribute("aria-hidden","true");E.setAttribute("aria-labelledby","s-ttl");h.setAttribute("role","heading");E.style.visibility=C.style.visibility="hidden";C.style.opacity=0;q.appendChild(u);J(g,"keydown",function(T){T=T||window.event;27==T.keyCode&&
n.hideSettings(0)},!0);J(u,"click",function(){n.hideSettings(0)});d=b.languages[G].settings_modal.blocks;u=d.length;h.insertAdjacentHTML("beforeend",b.languages[G].settings_modal.title);for(var p=0;p<u;++p){var t=e("div"),A=e("div"),H=e("div"),v=e("div");t.className="c-bl";A.className="desc";H.className="p";v.className="title";H.insertAdjacentHTML("beforeend",d[p].description);if("undefined"!==typeof d[p].toggle){var w="c-ac-"+p,P=e("button"),I=e("label"),x=e("input"),B=e("span"),U=e("span"),V=e("span"),
W=e("span");P.className="b-tl";I.className="b-tg";x.className="c-tgl";V.className="on-i";W.className="off-i";B.className="c-tg";U.className="t-lb";P.setAttribute("aria-expanded","false");P.setAttribute("aria-controls",w);x.type="checkbox";B.setAttribute("aria-hidden","true");var va=d[p].toggle.value;x.value=va;U[f]=d[p].title;P.insertAdjacentHTML("beforeend",d[p].title);v.appendChild(P);B.appendChild(V);B.appendChild(W);a?-1<N(JSON.parse(K).level,va)?(x.checked=!0,F.push(!0)):F.push(!1):d[p].toggle.enabled&&
(x.checked=!0);d[p].toggle.readonly&&(x.disabled=!0,x.setAttribute("aria-readonly","true"),D(B,"c-ro"));D(A,"b-acc");D(v,"b-bn");D(t,"b-ex");A.id=w;A.setAttribute("aria-hidden","true");I.appendChild(x);I.appendChild(B);I.appendChild(U);v.appendChild(I);(function(T,ja,wa){J(P,"click",function(){oa(ja,"act")?(ha(ja,"act"),wa.setAttribute("aria-expanded","false"),T.setAttribute("aria-hidden","true")):(D(ja,"act"),wa.setAttribute("aria-expanded","true"),T.setAttribute("aria-hidden","false"))},!1)})(A,
t,P)}else w=e("div"),w.className="b-tl",w.setAttribute("role","heading"),w.setAttribute("aria-level","3"),w.insertAdjacentHTML("beforeend",d[p].title),v.appendChild(w);t.appendChild(v);A.appendChild(H);if(!0!==b.remove_cookie_tables&&"undefined"!==typeof d[p].cookie_table){I=document.createDocumentFragment();H=b.languages[G].settings_modal.cookie_table_headers;for(x=0;x<H.length;++x)B=e("th"),v=H[x],B.setAttribute("scope","col"),v&&(w=v&&Y(v)[0],B[f]=H[x][w],I.appendChild(B));v=e("tr");v.appendChild(I);
w=e("thead");w.appendChild(v);I=e("table");I.appendChild(w);x=document.createDocumentFragment();for(B=0;B<d[p].cookie_table.length;B++){U=e("tr");for(V=0;V<H.length;++V)if(v=H[V])w=Y(v)[0],W=e("td"),W.insertAdjacentHTML("beforeend",d[p].cookie_table[B][w]),W.setAttribute("data-column",v[w]),U.appendChild(W);x.appendChild(U)}H=e("tbody");H.appendChild(x);I.appendChild(H);A.appendChild(I)}t.appendChild(A);y.appendChild(t)}a=e("div");f=e("button");d=e("button");a.id="s-bns";f.id="s-sv-bn";d.id="s-all-bn";
f.className="c-bn";d.className="c-bn";f.insertAdjacentHTML("beforeend",b.languages[G].settings_modal.save_settings_btn);d.insertAdjacentHTML("beforeend",b.languages[G].settings_modal.accept_all_btn);a.appendChild(d);a.appendChild(f);J(f,"click",function(){n.hideSettings();n.hide();ca(b,-1)});J(d,"click",function(){n.hideSettings();n.hide();ca(b,1)});m.appendChild(h);m.appendChild(q);O.appendChild(m);O.appendChild(y);O.appendChild(a);l.appendChild(O);k.appendChild(l);g.appendChild(k);E.appendChild(g);
c.appendChild(E);c.appendChild(C);(za||document.body).appendChild(M)}function Ea(){function a(c,d){var f=!1,g=!1;try{for(var k=c.querySelectorAll(b.join(':not([tabindex="-1"]), ')),l,h=k.length,m=0;m<h;)l=k[m].getAttribute("data-focus"),g||"1"!==l?"0"===l&&(f=k[m],g||"0"===k[m+1].getAttribute("data-focus")||(g=k[m+1])):g=k[m],m++}catch(q){return c.querySelectorAll(b.join(", "))}d[0]=k[0];d[1]=k[k.length-1];d[2]=f;d[3]=g}var b=["[href]","button","input","details",'[tabindex="0"]'];a(O,X);Q&&a(z,ka)}
function xa(a,b){if(b.hasOwnProperty(a))return a;if(0<Y(b).length)return b.hasOwnProperty(G)?G:Y(b)[0]}function Fa(){for(var a=document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'),b=0;b<a.length;b++)a[b].setAttribute("aria-haspopup","dialog"),J(a[b],"click",function(c){n.showSettings(0);c.preventDefault?c.preventDefault():c.returnValue=!1})}function Ga(a){"number"===typeof a.cookie_expiration&&(sa=a.cookie_expiration);"boolean"===typeof a.autorun&&(ya=a.autorun);"string"===
typeof a.cookie_domain&&(da=a.cookie_domain);"string"===typeof a.cookie_same_site&&(ua=a.cookie_same_site);"string"===typeof a.cookie_path&&(ta=a.cookie_path);"string"===typeof a.cookie_name&&(ea=a.cookie_name);qa=!0===a.page_scripts;ra=!1!==a.page_scripts_order;if(!0===a.auto_language){var b=navigator.language||navigator.browserLanguage;2<b.length&&(b=b[0]+b[1]);G=xa(b.toLowerCase(),a.languages)}else"string"===typeof a.current_lang&&(G=xa(a.current_lang,a.languages));!0===a.force_consent&&D(S,"force--consent")}
var G="en",ya=!0,ea="cc_cookie",sa=182,da=location.hostname,ta="/",ua="Lax",qa,ra,n={},K,Q=!1,R=!1,aa=!1,ia=!1,Z=!1,r,fa,la,ka=[],X=[],F=[],S=document.documentElement,M,z,E,O;n.allowedCategory=function(a){return-1<N(JSON.parse(ba(ea,"one",!0)||"{}").level||[],a)};n.run=function(a){if(!M&&(Ga(a),K=ba(ea,"one",!0),Q=""==K,Da(!Q,a),Ca(a.theme_css,function(){Ea();Aa(a.gui_options);Fa();!K&&ya&&n.show(a.delay||0);setTimeout(function(){D(M,"c--anim")},30);setTimeout(function(){Ba()},100)}),K&&(R=!0),R&&
(pa(),"function"===typeof a.onAccept)))a.onAccept(JSON.parse(K||"{}"))};n.showSettings=function(a){setTimeout(function(){D(S,"show--settings");E.setAttribute("aria-hidden","false");ia=!0;aa?la=document.activeElement:fa=document.activeElement;setTimeout(function(){0!==X.length&&(X[3]?X[3].focus():X[0].focus(),r=X)},100)},0<a?a:0)};n.loadScript=function(a,b,c){var d="function"===typeof b;if(document.querySelector('script[src="'+a+'"]'))d&&b();else{var f=e("script");if(c&&0<c.length)for(var g=0;g<c.length;++g)c[g]&&
f.setAttribute(c[g].name,c[g].value);d&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=null,b()}:f.onload=b);f.src=a;(document.head?document.head:document.getElementsByTagName("head")[0]).appendChild(f)}};n.show=function(a){Q&&setTimeout(function(){D(S,"show--consent");z.setAttribute("aria-hidden","false");aa=!0;fa=document.activeElement;r=ka},0<a?a:0)};n.hide=function(){Q&&(ha(S,"show--consent"),z.setAttribute("aria-hidden",
"true"),aa=!1,fa.focus(),r=null)};n.hideSettings=function(){ha(S,"show--settings");ia=!1;E.setAttribute("aria-hidden","true");aa?(la&&la.focus(),r=ka):(fa.focus(),r=null);Z=!1};n.validCookie=function(a){return""!=ba(a,"one",!0)};return na=window[ma]=void 0,n}var ma="initCookieConsent";"function"!==typeof window[ma]&&(window[ma]=na)})();

var cookieconsent = initCookieConsent();
cookieconsent.run({
    autorun : true,
    delay : 2000,
    current_lang : 'en',
    autoclear_cookies : true,
    cookie_expiration : 365,
    theme_css : "/wp-content/plugins/logobuilderboy/inc/admin/src/css/style.css",

    gui_options : {
        consent_modal : {
            layout : 'cloud',
            position : 'bottom right',
            transition : 'slide'
        },
        settings_modal : {
            layout : 'bar',
            transition : 'slide'
        }
    },

    onAccept: function(cookies){
        if(cookieconsent.allowedCategory('analytics_cookies')){
            cookieconsent.loadScript('https://www.googletagmanager.com/gtag/js?id=G-7WMP2VZ1EX', function(){
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-7WMP2VZ1EX');
            });
        }
    },

    languages : {
        en : {
            consent_modal : {
                title :  "COOKIES",
                description :  'This plugin uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only upon approval. <a aria-label="Cookie policy" class="cc-link" href="https://builderboy.co/privacypolicy.html">Read more</a>',
                primary_btn: {
                    text: 'Accept',
                    role: 'accept_all'				//'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text : 'Settings',
                    role : 'settings'				//'settings' or 'accept_necessary'
                }
            },
            settings_modal : {
                title : 'Cookie preferences',
                save_settings_btn : "Save settings",
                accept_all_btn : "Accept all",
                cookie_table_headers : [
                    {col1: "Name" },
                    {col2: "Domain" },
                    {col3: "Expiration" },
                    {col4: "Description" },
                    {col5: "Type" }
                ],
                blocks : [
                    {
                        title : "Cookie usage",
                        description: 'We use cookies to ensure the basic functionalities of the plugin and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
                    },
                    {
                        title : "Strictly necessary cookies",
                        description: 'These cookies are essential for the proper functioning of this plugin. Without these cookies, the plugin would not work properly.',
                        toggle : {
                            value : 'necessary_cookies',
                            enabled : true,
                            readonly: true
                        }
                    },
                    {
                        title : "Analytics cookies",
                        description: 'These cookies collect information about how you use the plugin. All of the data is anonymized and cannot be used to identify you.',
                        toggle : {
                            value : 'analytics_cookies',
                            enabled : true,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Used to distinguish users.' ,
                                col5: 'Permanent cookie'
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '24 hours',
                                col4: 'Used to distinguish users.' ,
                                col5: 'Permanent cookie'
                            },
                            {
                                col1: '_ga_<container-id>',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Used to persist session state.' ,
                                col5: 'Permanent cookie'
                            }
                        ]
                    },{
                        title : "More information",
                        description: 'For any queries in relation to this policy on cookies and your choices, please <a class="cc-link" href="https://builderboy.co/contact">contact us</a>.',
                    }
                ]
            }
        }
    }
});
