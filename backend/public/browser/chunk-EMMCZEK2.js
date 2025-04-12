import{a as n,b as c,i as p,j as r,k as a,o as s,r as m,t as d,vb as u}from"./chunk-QTXEQZNE.js";var l=class o{constructor(e){this.apiService=e}tickets=[];currentTicket=null;loadTickets(){return this.apiService.get("/tickets").pipe(r(e=>e.map(t=>this.mapMongoTicket(t))),s(e=>this.tickets=e),a(e=>this.handleApiError("loading tickets",e)))}getTicketById(e){return this.apiService.get(`/tickets/${e}`).pipe(r(t=>this.mapMongoTicket(t)),a(t=>this.handleApiError("loading ticket",t)))}createTicket(e){let t=c(n({},e),{status:e.status||"Open",createdAt:new Date});return this.apiService.post("/tickets",t).pipe(r(i=>this.mapMongoTicket(i)),s(i=>this.tickets.push(i)),a(i=>this.handleApiError("creating ticket",i)))}updateTicket(e,t){return this.apiService.put(`/tickets/${e}`,t).pipe(r(i=>this.mapMongoTicket(i)),s(i=>this.updateTicketCache(e,i)),a(i=>this.handleApiError("updating ticket",i)))}deleteTicket(e){return this.apiService.delete(`/tickets/${e}`).pipe(r(()=>{}),s(()=>this.removeFromCache(e)),a(t=>this.handleApiError("deleting ticket",t)))}assignTicket(e,t){return this.apiService.patch(`/tickets/${e}/assign`,{assignedTo:t}).pipe(r(i=>this.mapMongoTicket(i)),s(i=>this.updateTicketCache(e,i)),a(i=>this.handleApiError("assigning ticket",i)))}mapMongoTicket(e){return{id:e._id,title:e.title,description:e.description,employeeNumber:e.employeeNumber,assignedTo:e.assignedTo||"",status:this.mapStatusFromBackend(e.status),priority:this.mapPriorityFromBackend(e.priority),category:this.mapCategoryFromBackend(e.category),sentiment:e.sentiment,comments:e.comments,attachments:e.attachments,createdAt:new Date(e.createdAt),updatedAt:new Date(e.updatedAt)}}mapStatusFromBackend(e){switch(e){case"Open":return"Open";case"In Progress":return"In Progress";case"Resolved":return"Resolved";case"Closed":return"Closed";default:return"Open"}}mapPriorityFromBackend(e){switch(e){case"Low":return"Low";case"Medium":return"Medium";case"High":return"High";default:return"Medium"}}mapCategoryFromBackend(e){switch(e){case"General":return"General";case"Technical":return"Technical";case"Payroll":return"Payroll";case"Benefits":return"Benefits";case"Facilities":return"Facilities";default:return"General"}}handleApiError(e,t){return console.error(`Error ${e}:`,t),p(()=>new Error(`Failed to ${e}`))}updateTicketCache(e,t){let i=this.tickets.findIndex(h=>h.id?.toString()===e.toString());i!==-1&&(this.tickets[i]=n(n({},this.tickets[i]),t))}getOpenTicketsByUserId(e){return this.apiService.getTicketsByUserId(e.toString()).pipe(r(t=>t.map(i=>this.mapMongoTicket(i))),a(t=>this.handleApiError("loading user tickets",t)))}removeFromCache(e){this.tickets=this.tickets.filter(t=>t.id?.toString()!==e.toString())}static \u0275fac=function(t){return new(t||o)(d(u))};static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})};export{l as a};
