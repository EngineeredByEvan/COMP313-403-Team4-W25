import{a as U}from"./chunk-5QXS5R2B.js";import{a as P}from"./chunk-MSLL6LOD.js";import{a as M}from"./chunk-YCHOBINP.js";import{A as g,Ba as b,K as S,M as r,N as w,Ta as I,Ua as y,Va as H,W as x,Y as a,Ya as D,ab as z,ba as o,ca as i,da as p,fb as V,ha as v,ia as m,ja as d,ra as c,rb as O,sa as k,ta as _,u as h,v as C,vb as F,z as f,za as E}from"./chunk-WZJY7RPV.js";var T=n=>({color:n});function N(n,l){if(n&1&&(o(0,"div",18)(1,"p",19),c(2),i(),o(3,"p",19),c(4),i()()),n&2){let e,t,s=d();r(2),k((e=s.userService.getLoggedInUser())==null?null:e.name),r(2),k((t=s.userService.getLoggedInUser())==null?null:t.role)}}function $(n,l){n&1&&(o(0,"div",20)(1,"p"),c(2,"No tickets available to display."),i()())}function j(n,l){if(n&1){let e=v();o(0,"button",32),m("click",function(){f(e);let s=d().$implicit,u=d(2);return g(u.deleteTicket(s.id))}),p(1,"i",33),c(2," Delete "),i()}}function L(n,l){if(n&1){let e=v();o(0,"div",23)(1,"h4",24),p(2,"i",25),c(3),i(),o(4,"p",26),c(5),i(),o(6,"p",27),c(7),i(),o(8,"div",28)(9,"button",29),m("click",function(){let s=f(e).$implicit,u=d(2);return g(u.editTicket(s))}),p(10,"i",30),c(11," Update "),i(),x(12,j,3,0,"button",31),i()()}if(n&2){let e=l.$implicit,t=d(2);r(3),_(" ",e.title," "),r(2),k(e.description),r(),a("ngStyle",b(5,T,e.status===t.StatusEnum.Open?"blue":e.status===t.StatusEnum.Closed?"red":e.status===t.StatusEnum.InProgress?"green":"black")),r(),_(" Status: ",e.status," "),r(5),a("ngIf",e.id)}}function q(n,l){if(n&1&&(o(0,"div")(1,"h3",21),c(2),i(),x(3,L,13,7,"div",22),i()),n&2){let e=d();r(2),_("Open Tickets (",e.openTickets.length,")"),r(),a("ngForOf",e.openTickets)}}function A(n,l){if(n&1){let e=v();o(0,"button",32),m("click",function(){f(e);let s=d().$implicit,u=d(2);return g(u.deleteTicket(s.id))}),p(1,"i",33),c(2," Delete "),i()}}function B(n,l){if(n&1){let e=v();o(0,"div",23)(1,"h4",24),p(2,"i",25),c(3),i(),o(4,"p",26),c(5),i(),o(6,"p",27),c(7),i(),o(8,"div",28)(9,"button",29),m("click",function(){let s=f(e).$implicit,u=d(2);return g(u.editTicket(s))}),p(10,"i",30),c(11," Update "),i(),x(12,A,3,0,"button",31),i()()}if(n&2){let e=l.$implicit,t=d(2);r(3),_(" ",e.title," "),r(2),k(e.description),r(),a("ngStyle",b(5,T,e.status===t.StatusEnum.Open?"blue":e.status===t.StatusEnum.Closed?"red":e.status===t.StatusEnum.InProgress?"green":"black")),r(),_(" Status: ",e.status," "),r(5),a("ngIf",e.id)}}function Y(n,l){if(n&1&&(o(0,"div")(1,"h3",21),c(2),i(),x(3,B,13,7,"div",22),i()),n&2){let e=d();r(2),_("In Progress Tickets (",e.inProgressTickets.length,")"),r(),a("ngForOf",e.inProgressTickets)}}function G(n,l){if(n&1){let e=v();o(0,"button",32),m("click",function(){f(e);let s=d().$implicit,u=d(2);return g(u.deleteTicket(s.id))}),p(1,"i",33),c(2," Delete "),i()}}function J(n,l){if(n&1){let e=v();o(0,"div",23)(1,"h4",24),p(2,"i",25),c(3),i(),o(4,"p",26),c(5),i(),o(6,"p",27),c(7),i(),o(8,"div",28)(9,"button",29),m("click",function(){let s=f(e).$implicit,u=d(2);return g(u.editTicket(s))}),p(10,"i",30),c(11," Update "),i(),x(12,G,3,0,"button",31),i()()}if(n&2){let e=l.$implicit,t=d(2);r(3),_(" ",e.title," "),r(2),k(e.description),r(),a("ngStyle",b(5,T,e.status===t.StatusEnum.Open?"blue":e.status===t.StatusEnum.Closed?"red":e.status===t.StatusEnum.InProgress?"green":"black")),r(),_(" Status: ",e.status," "),r(5),a("ngIf",e.id)}}function K(n,l){if(n&1&&(o(0,"div")(1,"h3",21),c(2),i(),x(3,J,13,7,"div",22),i()),n&2){let e=d();r(2),_("Resolved Tickets (",e.resolvedTickets.length,")"),r(),a("ngForOf",e.resolvedTickets)}}function Q(n,l){n&1&&(o(0,"div",34),p(1,"iframe",35),i())}function W(n,l){if(n&1){let e=v();o(0,"div",36)(1,"div",37)(2,"h3"),c(3,"Confirm Deletion"),i(),o(4,"p"),c(5,"Are you sure you want to delete this ticket?"),i(),o(6,"button",38),m("click",function(){f(e);let s=d();return g(s.confirmDelete())}),c(7,"Yes"),i(),o(8,"button",38),m("click",function(){f(e);let s=d();return g(s.cancelDelete())}),c(9,"No"),i()()()}}var R=class n{constructor(l){this.router=l}routerService=h(F);ticketService=h(P);userService=h(U);tickets=[];filteredTickets=[];currentUser=null;showDeleteModal=!1;ticketToDelete=null;openTickets=[];inProgressTickets=[];resolvedTickets=[];closedTickets=[];StatusEnum=M;showChatbot=!1;ngOnInit(){this.loadUser(),this.loadTickets()}loadUser(){this.currentUser=this.userService.getLoggedInUser()}loadTickets(){if(!this.currentUser){console.error("No user is logged in.");return}this.ticketService.loadTickets().subscribe(l=>{let e=l;this.filteredTickets=e,this.openTickets=e.filter(t=>t.status==="Open"),this.inProgressTickets=e.filter(t=>t.status==="In Progress"),this.resolvedTickets=e.filter(t=>t.status==="Resolved"),this.closedTickets=e.filter(t=>t.status==="Closed")})}openUserEdit(){this.routerService.navigateToUserEdit()}editTicket(l){this.ticketService.currentTicket=l,typeof window<"u"&&window.localStorage&&localStorage.setItem("currentTicketId",l.id||""),this.routerService.navigateToTicketEdit()}deleteTicket(l){this.showDeleteModal=!0,this.ticketToDelete=l}confirmDelete(){if(this.ticketToDelete!==null){this.filteredTickets=this.filteredTickets.filter(e=>e.id?.toString()!==this.ticketToDelete);let l=this.ticketService.tickets.findIndex(e=>e.id?.toString()===this.ticketToDelete);l>-1&&this.ticketService.tickets.splice(l,1)}this.closeModal()}cancelDelete(){this.closeModal()}closeModal(){this.showDeleteModal=!1,this.ticketToDelete=null}addTicket(){this.routerService.navigateToTicketCreation()}navigateToHRDashboard(){this.routerService.navigateToHRDashboard()}static \u0275fac=function(e){return new(e||n)(w(V))};static \u0275cmp=C({type:n,selectors:[["app-home"]],standalone:!0,features:[E],decls:25,vars:7,consts:[[1,"surface-card","shadow-2","border-round","my-5","mx-6","p-4","flex","flex-column","justify-content-between",2,"min-height","92vh"],["id","Header"],["id","buttonContainer",1,"surface-card","shadow-2","flex","justify-content-end","flex-wrap","m-2"],[2,"background-color","rgb(140, 80, 220)","color","white","border","1px solid rgb(255, 255, 255)","padding","10px 20px","font-size","16px","border-radius","5px","cursor","pointer","margin-right","5px",3,"click"],[1,"pi","pi-th-large",2,"font-size","20px","margin-right","5px"],["style","padding: 5px; font-size: 10px; align-content: center;",4,"ngIf"],[2,"background-color","rgb(59, 130, 246)","color","white","border","1px solid rgb(255, 255, 255)","padding","10px 20px","font-size","16px","border-radius","5px","cursor","pointer","margin-left","5px",3,"click"],[1,"pi","pi-cog",2,"font-size","20px","margin-right","5px"],["id","ticketListContainer",1,"shadow-2","text-center","mt-4"],[2,"color","black","font-size","24px"],["style","color: #6c757d; margin-top: 20px; font-size: 18px;",4,"ngIf"],[4,"ngIf"],["id","bottomButtonControlBar",2,"display","flex","justify-content","center","margin-top","20px"],[2,"background-color","#6C63FF","color","white","border","none","padding","12px 24px","font-size","16px","border-radius","8px","cursor","pointer",3,"click"],[1,"pi","pi-plus",2,"margin-right","5px"],[2,"position","fixed","bottom","25px","right","25px","z-index","1000","background-color","#6C63FF","color","white","border","none","padding","16px 20px","font-size","16px","border-radius","50px","box-shadow","0 4px 8px rgba(0,0,0,0.2)","cursor","pointer",3,"click"],["style",`
    position: fixed;
    bottom: 90px;
    right: 25px;
    width: 400px;
    height: 600px;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    border-radius: 10px;
    overflow: hidden;
    background: white;
  `,4,"ngIf"],["class","modal",4,"ngIf"],[2,"padding","5px","font-size","10px","align-content","center"],[2,"margin","2px"],[2,"color","#6c757d","margin-top","20px","font-size","18px"],[1,"ticket-section-header"],["class","ticket-card",4,"ngFor","ngForOf"],[1,"ticket-card"],[2,"color","#34495e","font-size","20px","display","flex","align-items","center"],[1,"pi","pi-ticket",2,"font-size","20px","margin-right","10px"],[2,"color","#6c757d","font-size","16px"],[2,"font-size","16px","font-weight","bold","margin-top","10px",3,"ngStyle"],[2,"margin-top","15px","display","flex","justify-content","space-between"],[2,"background-color","#007bff","color","white","border","none","padding","10px 20px","font-size","14px","border-radius","5px","cursor","pointer",3,"click"],[1,"pi","pi-pencil",2,"margin-right","5px"],["style",`
              background-color: #dc3545;
              color: white;
              border: none;
              padding: 10px 20px;
              font-size: 14px;
              border-radius: 5px;
              cursor: pointer;
            `,3,"click",4,"ngIf"],[2,"background-color","#dc3545","color","white","border","none","padding","10px 20px","font-size","14px","border-radius","5px","cursor","pointer",3,"click"],[1,"pi","pi-trash",2,"margin-right","5px"],[2,"position","fixed","bottom","90px","right","25px","width","400px","height","600px","z-index","999","box-shadow","0 4px 12px rgba(0,0,0,0.3)","border-radius","10px","overflow","hidden","background","white"],["width","100%","height","100%","allow","microphone *","src",S`https://www.gptbots.ai/widget/eeq5jnc8zz3glsfgnw7t8mq/chat.html`,2,"border","none"],[1,"modal"],[1,"modal-content"],[3,"click"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),m("click",function(){return t.navigateToHRDashboard()}),p(4,"i",4),c(5," HR Dashboard "),i(),x(6,N,5,2,"div",5),o(7,"button",6),m("click",function(){return t.openUserEdit()}),p(8,"i",7),c(9," Profile "),i()()(),o(10,"div",8)(11,"h2",9),c(12,"Ticket List"),i(),x(13,$,3,0,"div",10)(14,q,4,2,"div",11)(15,Y,4,2,"div",11)(16,K,4,2,"div",11),i(),o(17,"div",12)(18,"button",13),m("click",function(){return t.addTicket()}),p(19,"i",14),c(20," Create New Ticket "),i()()(),o(21,"div",15),m("click",function(){return t.showChatbot=!t.showChatbot}),c(22,` \u{1F4AC} Chat
`),i(),x(23,Q,2,0,"div",16)(24,W,10,0,"div",17)),e&2&&(r(6),a("ngIf",t.userService.getLoggedInUser()),r(7),a("ngIf",t.filteredTickets.length===0),r(),a("ngIf",t.openTickets.length>0),r(),a("ngIf",t.inProgressTickets.length>0),r(),a("ngIf",t.resolvedTickets.length>0),r(7),a("ngIf",t.showChatbot),r(),a("ngIf",t.showDeleteModal))},dependencies:[D,I,y,H,O,z],styles:[".modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:8px;text-align:center}.ticket-section-header[_ngcontent-%COMP%]{background-color:#6c63ff;color:#fff;padding:10px;border-radius:5px;margin-top:20px;margin-bottom:10px}.ticket-card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px;padding:15px;margin:10px;text-align:left;background-color:#f8f9fa}.status-open[_ngcontent-%COMP%]{border-left:5px solid #dc3545}.status-inprogress[_ngcontent-%COMP%]{border-left:5px solid #ffc107}.status-resolved[_ngcontent-%COMP%]{border-left:5px solid #28a745}"]})};export{R as HomeComponent};
