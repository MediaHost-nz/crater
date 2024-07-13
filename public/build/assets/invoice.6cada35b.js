import{h as a}from"./auth.931e22a9.js";import{a as n}from"./vendor.a4fe15d1.js";const{defineStore:s}=window.pinia,d=s({id:"customerInvoiceStore",state:()=>({totalInvoices:0,invoices:[],selectedViewInvoice:[]}),actions:{fetchInvoices(t,i){return new Promise((o,c)=>{n.get(`/api/v1/${i}/customer/invoices`,{params:t}).then(e=>{this.invoices=e.data.data,this.totalInvoices=e.data.meta.invoiceTotalCount,o(e)}).catch(e=>{a(e),c(e)})})},fetchViewInvoice(t,i){return new Promise((o,c)=>{n.get(`/api/v1/${i}/customer/invoices/${t.id}`,{params:t}).then(e=>{this.selectedViewInvoice=e.data.data,o(e)}).catch(e=>{a(e),c(e)})})},searchInvoice(t,i){return new Promise((o,c)=>{n.get(`/api/v1/${i}/customer/invoices`,{params:t}).then(e=>{this.invoices=e.data,o(e)}).catch(e=>{a(e),c(e)})})}}});export{d as u};