(this.webpackJsonpnav2goe=this.webpackJsonpnav2goe||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(9),a=n.n(i),s=(n(14),n(3)),j=(n(4),n(1));var u=n(5),b=n.n(u),l=function(e){return Object(j.jsx)("div",{className:"ErrorPage",children:Object(j.jsxs)("div",{className:"ErrorPageTitle",children:[Object(j.jsx)("header",{className:b.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:b.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:b.a.actions,children:Object(j.jsx)("button",{onClick:e.onConfirm,children:"Zur\xfcck zur Suche"})})]})})},o=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("header",{className:"Startseite-header",children:[Object(j.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(j.jsxs)("div",{id:"endText",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("br",{}),"Vielen Dank f\xfcr die Teilnahme!"," "]}),Object(j.jsxs)("p",{children:["Klicken Sie jetzt bitte auf den Button, um zur Umfrage zu gelangen",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})]}),Object(j.jsx)("div",{id:"containerButtonEnd",children:Object(j.jsx)("a",{href:"https://www.survio.com/survey/d/C3K5I4C4W7L5R1J7O",children:"Umfrage starten"})})]})})},d=n(8),h=function(e,t,n){for(var c=e.split(":"),r=Object(s.a)(c,2),i=r[0],a=r[1],j=(t=Number(t),Number(i)+Number(t)),u=Number(a)+Number(n);u>=60;)u-=60,j+=1;return u<10&&(u="0"+u),j>=24&&(j-=24),j<10&&(j="0"+j),[j+":"+u,!1]},O=function(e){var t=e.toString().split("-"),n=Number(t[1]),c=Number(t[2]);Number(t[0]);return c+"."+n+"."},x=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(!1),u=Object(s.a)(a,2),b=u[0],l=(u[1],Object(c.useState)(!1)),x=Object(s.a)(l,2);x[0],x[1];console.log(e.departureDay,e.departureStop);var m=function(e){var t=Math.floor(e),n=Math.round(60*(e-t));return"".concat(t<10?"0":"").concat(t,":").concat(n<10?"0":"").concat(n)}(function(t){var n=t.split(":"),c=Object(s.a)(n,2),r=c[0],i=c[1],a=e.additionalRandomMinutes,j=Number(i)+Number(a);return Number(r)+Number(j)/60}(e.departureTime)),v=function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),r=Number(Math.floor(.3*c)),i=Number(Math.floor(.15*c)),a=Number(c-r-i);return[Number(r),Number(i),Number(a)]}(e.durationH,e.durationMin);!function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),r=Number(Math.floor(.3*c)),i=Number(Math.floor(.1*c)),a=Number(Math.floor(.2*c)),s=Number(Math.floor(.15*c)),j=Number(c-r-i-a-s);Number(r),Number(i),Number(a),Number(s),Number(j)}(e.durationH,e.durationMin);return r?Object(j.jsx)(o,{}):Object(j.jsx)("div",{className:"container-verbindung",children:b?null:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{className:"Verbindung-header",children:"Verbindung"}),Object(j.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 1"}),Object(j.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(j.jsx)("p",{children:"Abfahrt:"})," ",O(e.departureDay)," um ",m," "]}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 50"}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft:"})," ",O(e.departureDay)," um ",h(m,Number(0),Number(v[0]))," "," "]}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Abfahrt an Haltestelle:"})," ",e.departureStop," "]}),Object(j.jsx)("div",{className:"busIcon",children:Object(j.jsx)(d.a,{size:"3rem",color:"white"})}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft an Haltestelle:"})," Weender Stra\xdfe-Ost "," "]})]}),Object(j.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 2"}),Object(j.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(j.jsx)("p",{children:"Abfahrt:"})," ",O(e.departureDay)," um ",h(m,Number(0),Number(v[0]+v[1]))," "]}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 18"}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft:"})," ",O(e.departureDay)," um ",h(m,Number(0),Number(v[0]+v[1]+v[2]))," "]}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Abfahrt an Haltestelle:"})," Weender Stra\xdfe-Ost "," "]}),Object(j.jsx)("div",{className:"busIcon",children:Object(j.jsx)(d.a,{size:"3rem",color:"white"})}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft an Haltestelle:"})," ",e.destinationStop," "]})]}),Object(j.jsxs)("div",{className:"buttons-verbindung",children:[Object(j.jsxs)("button",{className:"button",onClick:function(){e.onGoBack()},type:"submit",children:[" ","Zur\xfcck"]}),Object(j.jsxs)("button",{className:"button",onClick:function(){i(!0),e.onSetStartFormHidden(!0)},children:[" ","Test Beenden?"]})]})]})})},m=n(7),v=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),i=n[0],a=n[1],u=Object(c.useState)(""),b=Object(s.a)(u,2),o=b[0],d=b[1],h=Object(c.useState)(""),O=Object(s.a)(h,2),v=O[0],p=O[1],f=Object(c.useState)(""),g=Object(s.a)(f,2),N=g[0],S=g[1],k=Object(c.useState)(!1),z=Object(s.a)(k,2),C=z[0],w=z[1],y=Object(c.useState)(),B=Object(s.a)(y,2),D=B[0],A=B[1],H=Object(c.useState)(!1),F=Object(s.a)(H,2),T=F[0],M=F[1],G=Object(c.useRef)(),I=Object(c.useRef)(),V=!1;return Object(j.jsxs)(r.a.Fragment,{children:[D&&Object(j.jsx)(l,{title:D.title,message:D.message,onConfirm:function(){A(!1)}}),T?null:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" Verbindungssuche "}),Object(j.jsxs)("div",{className:"container-searchpage",children:[Object(j.jsx)("input",{list:"haltestellen",type:"text",value:i,onChange:function(e){a(e.target.value)},placeholder:"Start",ref:G}),Object(j.jsx)("button",{className:"button-swap",onClick:function(){var e=G.current.value;a(I.current.value),d(e)},children:Object(j.jsx)(m.a,{size:"3rem"})}),Object(j.jsx)("input",{list:"haltestellen",type:"text",value:o,onChange:function(e){d(e.target.value)},placeholder:"Ziel",ref:I}),Object(j.jsx)("input",{type:"date",value:v,onChange:function(e){p(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"time",value:N,onChange:function(e){S(e.target.value)}})]})]}),Object(j.jsx)("div",{children:C?Object(j.jsx)(x,{onSetStartFormHidden:e.onSetStartFormHidden,onGoBack:function(){M(!1),w(!1)},departureStop:i,destinationStop:o,departureDay:v,departureTime:N,durationH:0,durationMin:42,additionalRandomMinutes:3}):Object(j.jsxs)("div",{className:"buttons-search-page",children:[Object(j.jsx)("button",{className:"button-search",onClick:function(){0===i.trim().length||0===o.trim().length?(A({title:"Falsche Daten",message:"Bitte geben Sie einen passenden Start- und Zielort ein!"}),V=!0):""===N||""===v?(A({title:"Falsche Daten",message:"Bitte geben Sie einen Abfahrtstag und eine Abfahrtszeit an!"}),V=!0):i===o&&(A({title:"Falsche Daten",message:"Start- und Zielort d\xfcrfen nicht identisch sein!"}),V=!0),V||(M(!0),w(!0))},children:"Suchen"}),Object(j.jsx)("button",{className:"button-search",onClick:function(){e.onGoBack()},type:"submit",children:"Zur\xfcck zur Startseite"})," "]})}),Object(j.jsxs)("datalist",{id:"haltestellen",children:[Object(j.jsx)("option",{value:"Hauptbahnhof"}),Object(j.jsx)("option",{value:"Auf dem Hagen"}),Object(j.jsx)("option",{value:"Tulpenweg"}),Object(j.jsx)("option",{value:"Sch\xfctzenplatz"}),Object(j.jsx)("option",{value:"Landgericht/ Bahnhof"}),Object(j.jsx)("option",{value:"B\xfcrgerstra\xdfe"}),Object(j.jsx)("option",{value:"Hiroshimaplatz"}),Object(j.jsx)("option",{value:"Schillerstra\xdfe"}),Object(j.jsx)("option",{value:"Reinholdstra\xdfe"}),Object(j.jsx)("option",{value:"Fritz-Stra\xdfe"}),Object(j.jsx)("option",{value:"Treuenhagen"}),Object(j.jsx)("option",{value:"Baumweg"}),Object(j.jsx)("option",{value:"Stadtstieg"}),Object(j.jsx)("option",{value:"Kiessee"}),Object(j.jsx)("option",{value:"Teichstra\xdfe"}),Object(j.jsx)("option",{value:"Bornbreite"}),Object(j.jsx)("option",{value:"Gehrenring"}),Object(j.jsx)("option",{value:"Hardtweg"}),Object(j.jsx)("option",{value:"Tammstra\xdfe"}),Object(j.jsx)("option",{value:"Klinikum"}),Object(j.jsx)("option",{value:"Krugstra\xdfe"}),Object(j.jsx)("option",{value:"Deisterstra\xdfe"}),Object(j.jsx)("option",{value:"Elmweg"}),Object(j.jsx)("option",{value:"Sollstra\xdfe"}),Object(j.jsx)("option",{value:"Waldstra\xdfe"}),Object(j.jsx)("option",{value:"Siekweg"}),Object(j.jsx)("option",{value:"Klosterweg"}),Object(j.jsx)("option",{value:"Lutteranger"}),Object(j.jsx)("option",{value:"An der Lutte"}),Object(j.jsx)("option",{value:"Gr\xfcner Weg"}),Object(j.jsx)("option",{value:"Kreuzbergring"})]})]})},p=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(!1),u=Object(s.a)(a,2),b=u[0],l=u[1];return Object(j.jsxs)("div",{children:[r?null:Object(j.jsx)("form",{children:Object(j.jsxs)("header",{className:"StartPage-header",children:[Object(j.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(j.jsx)("div",{id:"welcomeText",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("br",{}),"Wilkommen. ",Object(j.jsx)("br",{}),"Nutzen sie diese App um sich in folgender Situation weiterzuhelfen:",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Sie haben sich dazu entschieden, Ihre Freunde in G\xf6ttingen zu besuchen. Angekommen am Hauptbahnhof G\xf6ttingen wollen Sie die \xf6ffentlichen Verkehrsmittel nutzen, um zu Ihnen weiterfahren.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'Ihre Freunde haben Ihnen bereits mitgeteilt, dass Sie an der Haltestelle "Treuenhagen" wohnen. Da sie Ihre Freunde nun ungl\xfccklicherweise nicht mehr erreichen k\xf6nnen, haben Sie sich die lokale Mobilit\xe4ts-App \u201eNav2G\xf6\u201c heruntergeladen, um sich vor Ort zurechtzufinden. ',Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"Nutzen Sie f\xfcr die Verbindungssuche vom Hauptbahnhof nach Treuenhagen das aktuelle Datum und die aktuelle Uhrzeit.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}),Object(j.jsx)("h1",{id:"appVersionAnzeige2",children:"App-Version 2"})]})}),b?Object(j.jsx)(v,{onGoBack:function(){return l(!1)},onSetStartFormHidden:i}):Object(j.jsx)("button",{id:"welcomeTextButton",onClick:function(){l(!0)},type:"submit",children:"Weiter"})]})},f=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(j.jsx)("div",{id:"containerStartButtonPage",children:n?Object(j.jsx)(p,{}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{id:"UseCaseDescribtion",children:[Object(j.jsx)("br",{}),"Bitte testen Sie nun die zweite App-Version.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("button",{class:"buttonStartButton",disabled:n,onClick:function(){return r(!0)},children:[" ","Start Nav2G\xf6"," "]})]})})},g=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()},4:function(e,t,n){},5:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.3a05a493.chunk.js.map