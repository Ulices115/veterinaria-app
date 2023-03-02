"use strict";(self.webpackChunkfenix_app=self.webpackChunkfenix_app||[]).push([[105,984],{8984:(j,A,d)=>{d.d(A,{_:()=>U});var Z=d(7574),b=d(8259),l=d.n(b),T=d(7716),p=d(6518),m=d(4655);let U=(()=>{class s{constructor(u,h){this.authService=u,this.router=h,this.transacciones=[]}canActivate(u,h){return this.permisos(u)}CanLoad(u,h){return this.permisos(u)}permisos(u){var h=this.authService.usuario.transacciones;return new Z.y(g=>{if(h){let f=h.find(_=>_===u.data.Transaccion);f==u.data.Transaccion?(console.log("acceso a:",f),g.next(!0)):(g.next(!1),console.log("sin acceso"),l().fire({title:"Acceso denegado",html:"No cuentas con el permiso",icon:"error",confirmButtonText:"ok"}))}else g.next(!1),console.log("sin permisos"),l().fire({title:"Acceso denegado",html:"No cuentas con permisos",icon:"error",confirmButtonText:"ok"})})}}return s.\u0275fac=function(u){return new(u||s)(T.LFG(p.e),T.LFG(m.F0))},s.\u0275prov=T.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},105:(j,A,d)=>{d.r(A),d.d(A,{ProductoModule:()=>xt});var Z=d(8583),b=d(206),l=d(3679),T=d(4655),p=d(8984),m=d(8390),U=d(8259),s=d.n(U),t=d(7716),u=d(2340),h=d(1841);let g=(()=>{class o{constructor(e){this.httpClient=e,this.url=`${u.N.baseUrl}/api/producto_servicio/`}guardarproducto(e){return this.httpClient.post(this.url,e)}obtenerproductos(){return this.httpClient.get(this.url)}obtenerproducto(e,n){return this.httpClient.get(this.url+e+`?tipo=${n}`)}actualizarproducto(e){return this.httpClient.put(this.url+e._id,e)}eliminarproducto(e){return this.httpClient.delete(this.url+e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(h.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=d(8382),_=d(3738),M=d(5618),C=d(8295),v=d(6627),x=d(9983),N=d(1095);let D=(()=>{class o{constructor(e,n){this.httpservi=e,this.servimenu=n,this.valorI=0,this.producto={id_prod_serv:"",descripcion:"",codigo_barra:"",tipo:"Producto",clave_prod_serv:"",clave_unidad:"",unidad:"",objeto_imp:"",impuesto:"",tipo_factor:"",tasa_cuota:""}}ngOnInit(){this.servimenu.setencabezado("Alta de productos")}formato(){this.producto.id_prod_serv="M"+String(1e9+this.valorI).slice(1)}guardar(){""!==this.producto.descripcion?this.httpservi.obtenerproductos().subscribe(e=>{this.valorI=e+1,this.formato(),this.crearproducto()}):s().fire({title:"Llene los campos",text:"Favor de llenar los campos",icon:"warning",confirmButtonText:"ok"})}crearproducto(){console.log(this.producto),this.httpservi.guardarproducto(this.producto).subscribe(e=>{console.log("agregado",e),this.modal()},e=>{s().fire({title:"Producto repetido",html:"El producto ya se encuentra en la base de datos",icon:"warning",confirmButtonText:"ok"}),console.log(e)})}modal(){s().fire({title:"Agregado",html:`Porducto <b>${this.producto.id_prod_serv}</b> dado de alta correctamente`,icon:"success",confirmButtonText:"ok"}).then(e=>{e.isConfirmed&&(this.producto.id_prod_serv="",this.producto.descripcion="",this.producto.codigo_barra="",this.producto.clave_prod_serv="",this.producto.clave_unidad="",this.producto.unidad="",this.producto.objeto_imp="",this.producto.impuesto="",this.producto.tipo_factor="",this.producto.tasa_cuota="")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(f.h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-alta"]],decls:76,vars:9,consts:[[1,"custom"],[1,"container"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill",2,"width","250px"],["matInput","","placeholder","producto","value","","required","true",3,"ngModel","ngModelChange"],["appearance","fill",2,"width","200px"],["matInput","","placeholder","","maxlength","13","value","","required","true",3,"ngModel","ngModelChange"],["matInput","","placeholder","","value","","required","true",3,"ngModel","ngModelChange"],["appearance","fill",2,"width","150px"],["appearance","fill",2,"width","100px"],[1,"col-sm"],[1,"example-button-row"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"click"]],template:function(e,n){1&e&&(t._UZ(0,"br"),t.TgZ(1,"mat-card",0),t.TgZ(2,"h3"),t._uU(3,"Ingrese los datos"),t.qZA(),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",1),t.TgZ(6,"div",2),t.TgZ(7,"div",3),t.TgZ(8,"mat-form-field",4),t.TgZ(9,"mat-label"),t._uU(10,"Descripci\xf3n del producto "),t.TgZ(11,"mat-icon"),t._uU(12,"create"),t.qZA(),t.qZA(),t.TgZ(13,"input",5),t.NdJ("ngModelChange",function(i){return n.producto.descripcion=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",3),t.TgZ(15,"mat-form-field",6),t.TgZ(16,"mat-label"),t._uU(17,"Codigo de barras "),t.TgZ(18,"mat-icon"),t._uU(19,"create"),t.qZA(),t.qZA(),t.TgZ(20,"input",7),t.NdJ("ngModelChange",function(i){return n.producto.codigo_barra=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",3),t.TgZ(22,"mat-form-field",6),t.TgZ(23,"mat-label"),t._uU(24,"Clave del producto "),t.TgZ(25,"mat-icon"),t._uU(26,"create"),t.qZA(),t.qZA(),t.TgZ(27,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.clave_prod_serv=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"div",3),t.TgZ(29,"mat-form-field",9),t.TgZ(30,"mat-label"),t._uU(31,"Clave de la unidad"),t.TgZ(32,"mat-icon"),t._uU(33,"create"),t.qZA(),t.qZA(),t.TgZ(34,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.clave_unidad=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",3),t.TgZ(36,"mat-form-field",10),t.TgZ(37,"mat-label"),t._uU(38,"Unidad "),t.TgZ(39,"mat-icon"),t._uU(40,"create"),t.qZA(),t.qZA(),t.TgZ(41,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.unidad=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",3),t.TgZ(43,"mat-form-field",10),t.TgZ(44,"mat-label"),t._uU(45,"Objeto de impuesto "),t.TgZ(46,"mat-icon"),t._uU(47,"create"),t.qZA(),t.qZA(),t.TgZ(48,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.objeto_imp=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",3),t.TgZ(50,"mat-form-field",10),t.TgZ(51,"mat-label"),t._uU(52,"impuesto "),t.TgZ(53,"mat-icon"),t._uU(54,"create"),t.qZA(),t.qZA(),t.TgZ(55,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.impuesto=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(56,"div",3),t.TgZ(57,"mat-form-field",10),t.TgZ(58,"mat-label"),t._uU(59,"Tipo de factor "),t.TgZ(60,"mat-icon"),t._uU(61,"create"),t.qZA(),t.qZA(),t.TgZ(62,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.tipo_factor=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"div",3),t.TgZ(64,"mat-form-field",10),t.TgZ(65,"mat-label"),t._uU(66,"Tasa o cuota"),t.TgZ(67,"mat-icon"),t._uU(68,"create"),t.qZA(),t.qZA(),t.TgZ(69,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.tasa_cuota=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(70,"div",11),t.TgZ(71,"div",12),t.TgZ(72,"button",13),t.NdJ("click",function(){return n.guardar()}),t._uU(73,"Guardar"),t.TgZ(74,"mat-icon"),t._uU(75,"check"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(13),t.Q6J("ngModel",n.producto.descripcion),t.xp6(7),t.Q6J("ngModel",n.producto.codigo_barra),t.xp6(7),t.Q6J("ngModel",n.producto.clave_prod_serv),t.xp6(7),t.Q6J("ngModel",n.producto.clave_unidad),t.xp6(7),t.Q6J("ngModel",n.producto.unidad),t.xp6(7),t.Q6J("ngModel",n.producto.objeto_imp),t.xp6(7),t.Q6J("ngModel",n.producto.impuesto),t.xp6(7),t.Q6J("ngModel",n.producto.tipo_factor),t.xp6(7),t.Q6J("ngModel",n.producto.tasa_cuota))},directives:[_.a8,_.dn,M.Wh,C.KE,C.hX,v.Hw,x.Nt,l.Fj,l.Q7,l.JJ,l.On,l.nD,N.lW],styles:[""]}),o})();var c=d(2789),q=d(9692),w=d(9761),J=d(4395),E=d(8002),B=d(5781),Q=d(2458);function Y(o,a){if(1&o&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}let y=(()=>{class o{constructor(e){this.httpservi=e,this.filter="",this.myControl=new l.NI(""),this.options=[],this.prod="",this.filterValue="",this.messageEvent=new t.vpe}ngOnInit(){this.filteredOptions=this.myControl.valueChanges.pipe((0,w.O)(""),(0,J.b)(150),(0,E.U)(e=>this._filter(e||"")))}_filter(e){return this.filterValue=e.toLowerCase(),this.filterValue?(this.productos(),this.options.filter(n=>n.toLowerCase().includes(this.filterValue))):this.options.filter(n=>n.toLowerCase().includes(this.filterValue))}productos(){this.httpservi.obtenerproducto(this.filterValue,"Producto").subscribe(e=>{this.options=[];for(const n in e)this.options.push(e[n].descripcion),this.options.push(e[n].codigo_barra)})}productoseleccionado(){this.prod=this.myControl.value,this.options=[],this.messageEvent.emit(this.prod),this.myControl.patchValue("")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-buscador"]],outputs:{messageEvent:"messageEvent"},decls:20,vars:5,consts:[[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill",1,"example-full-width",2,"width","250px"],["type","text","placeholder","","aria-label","Nombre","matInput","",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"click"],[3,"value"]],template:function(e,n){if(1&e&&(t._UZ(0,"br"),t.TgZ(1,"mat-card",0),t.TgZ(2,"mat-card-content"),t.TgZ(3,"div",1),t.TgZ(4,"div",2),t.TgZ(5,"mat-form-field",3),t.TgZ(6,"mat-label"),t._uU(7,"Nombre del producto"),t.qZA(),t._UZ(8,"input",4),t.TgZ(9,"mat-autocomplete",null,5),t.YNc(11,Y,2,2,"mat-option",6),t.ALo(12,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",7),t.TgZ(14,"div",8),t.TgZ(15,"button",9),t.NdJ("click",function(){return n.productoseleccionado()}),t._uU(16,"Buscar "),t.TgZ(17,"mat-icon"),t._uU(18,"search"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(19,"br")),2&e){const r=t.MAs(10);t.xp6(8),t.Q6J("formControl",n.myControl)("matAutocomplete",r),t.xp6(3),t.Q6J("ngForOf",t.lcZ(12,3,n.filteredOptions))}},directives:[_.a8,_.dn,M.Wh,C.KE,C.hX,x.Nt,l.Fj,B.ZL,l.JJ,l.oH,B.XC,Z.sg,N.lW,v.Hw,Q.ey],pipes:[Z.Ov],styles:[""]}),o})();function O(o,a){1&o&&(t.TgZ(0,"th",14),t._uU(1," # "),t.qZA())}function P(o,a){if(1&o&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&o){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function S(o,a){1&o&&(t.TgZ(0,"th",14),t._uU(1," N\xfamero de servicio"),t.qZA())}function F(o,a){if(1&o&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.id_prod_serv," ")}}function L(o,a){1&o&&(t.TgZ(0,"th",14),t._uU(1," Descripci\xf3n"),t.qZA())}function z(o,a){if(1&o&&(t.TgZ(0,"td",15),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.descripcion)," ")}}function I(o,a){1&o&&(t.TgZ(0,"th",14),t._uU(1," Codigo de barra"),t.qZA())}function R(o,a){if(1&o&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.codigo_barra," ")}}function H(o,a){1&o&&t._UZ(0,"th",14)}function $(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",15),t.TgZ(1,"a",16),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().eliminar(i._id,i.descripcion)}),t.TgZ(2,"mat-icon",17),t._uU(3,"delete"),t.qZA(),t.qZA(),t.qZA()}}function W(o,a){1&o&&t._UZ(0,"tr",18)}function k(o,a){1&o&&t._UZ(0,"tr",19)}const G=function(){return[5,10,20]};let X=(()=>{class o{constructor(e,n){this.httpservi=e,this.servimenu=n,this.prod="",this.productostabla=[],this._id="",this.displayedColumns=["index","id_prod_serv","descripcion","codigo_barra","borrar"],this.dataSource=new c.by}ngOnInit(){this.servimenu.setencabezado("Baja de productos")}productoseleccionado(e){this.prod=e,""!==this.prod&&(this.httpservi.obtenerproducto(this.prod,"Producto").subscribe(n=>{this.productostabla=[],this.productostabla=n,this.dataSource=new c.by(this.productostabla),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina";for(const r in n)this._id=n[r]._id,console.log(this._id)}),this.prod="")}eliminar(e,n){s().fire({title:"\xbfEstas seguro?",html:`Estas por dar de baja el producto <b>${n}</b>`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, dar de baja!"}).then(r=>{r.isConfirmed&&(this.httpservi.eliminarproducto(e).subscribe(i=>console.log("eliminado",i)),s().fire("Proceso correcto!","El producto fue dado de baja correctamente.","success").then(i=>{i.isConfirmed&&(this.prod="",this.productostabla=[],this.dataSource=new c.by)}))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(f.h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-baja"]],viewQuery:function(e,n){if(1&e&&t.Gf(q.NW,5),2&e){let r;t.iGM(r=t.CRH())&&(n.paginator=r.first)}},decls:25,vars:5,consts:[[3,"messageEvent"],[1,"row"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id_prod_serv"],["matColumnDef","descripcion"],["matColumnDef","codigo_barra"],["matColumnDef","borrar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["type","button",3,"click"],["color","warn",1,"icon"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"app-buscador",0),t.NdJ("messageEvent",function(i){return n.productoseleccionado(i)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-card"),t.TgZ(4,"h3"),t._uU(5,"Detalles"),t.qZA(),t.TgZ(6,"table",3),t.ynx(7,4),t.YNc(8,O,2,0,"th",5),t.YNc(9,P,2,1,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,S,2,0,"th",5),t.YNc(12,F,2,1,"td",6),t.BQk(),t.ynx(13,8),t.YNc(14,L,2,0,"th",5),t.YNc(15,z,3,3,"td",6),t.BQk(),t.ynx(16,9),t.YNc(17,I,2,0,"th",5),t.YNc(18,R,2,1,"td",6),t.BQk(),t.ynx(19,10),t.YNc(20,H,1,0,"th",5),t.YNc(21,$,4,0,"td",6),t.BQk(),t.YNc(22,W,1,0,"tr",11),t.YNc(23,k,1,0,"tr",12),t.qZA(),t._UZ(24,"mat-paginator",13),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,G)))},directives:[y,_.a8,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,q.NW,c.ge,c.ev,v.Hw,c.XQ,c.Gk],pipes:[Z.rS],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),o})();function K(o,a){1&o&&(t.TgZ(0,"th",26),t._uU(1," # "),t.qZA())}function V(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function tt(o,a){1&o&&(t.TgZ(0,"th",28),t._uU(1," N\xfamero de producto"),t.qZA())}function ot(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.id_prod_serv," ")}}function et(o,a){1&o&&(t.TgZ(0,"th",28),t._uU(1," Codigo de barra"),t.qZA())}function nt(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.codigo_barra," ")}}function at(o,a){1&o&&(t.TgZ(0,"th",29),t._uU(1," Descripci\xf3n"),t.qZA())}function it(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.descripcion)," ")}}function rt(o,a){1&o&&(t.TgZ(0,"th",30),t._uU(1," Clave del producto"),t.qZA())}function dt(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.clave_prod_serv," ")}}function ct(o,a){1&o&&(t.TgZ(0,"th",31),t._uU(1," Clave de unidad"),t.qZA())}function lt(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.clave_unidad," ")}}function st(o,a){1&o&&(t.TgZ(0,"th",31),t._uU(1,"Unidad"),t.qZA())}function ut(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.unidad," ")}}function pt(o,a){1&o&&(t.TgZ(0,"th",31),t._uU(1,"Objeto impuesto"),t.qZA())}function mt(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.objeto_imp," ")}}function _t(o,a){1&o&&(t.TgZ(0,"th",31),t._uU(1,"Impuesto"),t.qZA())}function gt(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.impuesto," ")}}function ht(o,a){1&o&&(t.TgZ(0,"th",32),t._uU(1,"Tipo factor"),t.qZA())}function Zt(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.tipo_factor," ")}}function ft(o,a){1&o&&(t.TgZ(0,"th",33),t._uU(1,"Tasa/Cuota"),t.qZA())}function Tt(o,a){if(1&o&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.tasa_cuota," ")}}function Ct(o,a){1&o&&t._UZ(0,"tr",34)}function At(o,a){1&o&&t._UZ(0,"tr",35)}const vt=function(){return[5,10,20]};let qt=(()=>{class o{constructor(e,n){this.httpservi=e,this.servimenu=n,this.prod="",this.productostabla=[],this.displayedColumns=["index","id_prod_serv","codigo_barra","descripcion","clave_prod_serv","clave_unidad","unidad","objeto_imp","impuesto","tipo_factor","tasa_cuota"],this.dataSource=new c.by}ngOnInit(){this.servimenu.setencabezado("Consulta de productos")}productoseleccionado(e){this.prod=e,""!==this.prod&&(this.httpservi.obtenerproducto(this.prod,"Producto").subscribe(n=>{this.productostabla=[],this.productostabla=n,this.dataSource=new c.by(this.productostabla),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina"}),this.prod="")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(f.h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-consulta"]],viewQuery:function(e,n){if(1&e&&t.Gf(q.NW,5),2&e){let r;t.iGM(r=t.CRH())&&(n.paginator=r.first)}},decls:43,vars:5,consts:[[3,"messageEvent"],[1,"row"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","","width","8%",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id_prod_serv"],["mat-header-cell","","width","16%",4,"matHeaderCellDef"],["matColumnDef","codigo_barra"],["matColumnDef","descripcion"],["mat-header-cell","","width","20%",4,"matHeaderCellDef"],["matColumnDef","clave_prod_serv"],["mat-header-cell","","width","14%",4,"matHeaderCellDef"],["matColumnDef","clave_unidad"],["mat-header-cell","","width","5%",4,"matHeaderCellDef"],["matColumnDef","unidad"],["matColumnDef","objeto_imp"],["matColumnDef","impuesto"],["matColumnDef","tipo_factor"],["mat-header-cell","","width","15%",4,"matHeaderCellDef"],["matColumnDef","tasa_cuota"],["mat-header-cell","","width","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["mat-header-cell","","width","8%"],["mat-cell",""],["mat-header-cell","","width","16%"],["mat-header-cell","","width","20%"],["mat-header-cell","","width","14%"],["mat-header-cell","","width","5%"],["mat-header-cell","","width","15%"],["mat-header-cell","","width",""],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"app-buscador",0),t.NdJ("messageEvent",function(i){return n.productoseleccionado(i)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-card"),t.TgZ(4,"h3"),t._uU(5,"Detalles"),t.qZA(),t.TgZ(6,"table",3),t.ynx(7,4),t.YNc(8,K,2,0,"th",5),t.YNc(9,V,2,1,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,tt,2,0,"th",8),t.YNc(12,ot,2,1,"td",6),t.BQk(),t.ynx(13,9),t.YNc(14,et,2,0,"th",8),t.YNc(15,nt,2,1,"td",6),t.BQk(),t.ynx(16,10),t.YNc(17,at,2,0,"th",11),t.YNc(18,it,3,3,"td",6),t.BQk(),t.ynx(19,12),t.YNc(20,rt,2,0,"th",13),t.YNc(21,dt,2,1,"td",6),t.BQk(),t.ynx(22,14),t.YNc(23,ct,2,0,"th",15),t.YNc(24,lt,2,1,"td",6),t.BQk(),t.ynx(25,16),t.YNc(26,st,2,0,"th",15),t.YNc(27,ut,2,1,"td",6),t.BQk(),t.ynx(28,17),t.YNc(29,pt,2,0,"th",15),t.YNc(30,mt,2,1,"td",6),t.BQk(),t.ynx(31,18),t.YNc(32,_t,2,0,"th",15),t.YNc(33,gt,2,1,"td",6),t.BQk(),t.ynx(34,19),t.YNc(35,ht,2,0,"th",20),t.YNc(36,Zt,2,1,"td",6),t.BQk(),t.ynx(37,21),t.YNc(38,ft,2,0,"th",22),t.YNc(39,Tt,2,1,"td",6),t.BQk(),t.YNc(40,Ct,1,0,"tr",23),t.YNc(41,At,1,0,"tr",24),t.qZA(),t._UZ(42,"mat-paginator",25),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("dataSource",n.dataSource),t.xp6(34),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,vt)))},directives:[y,_.a8,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,q.NW,c.ge,c.ev,c.XQ,c.Gk],pipes:[Z.rS],styles:["table[_ngcontent-%COMP%]{width:100%;display:block;overflow-x:auto}"]}),o})();const Ut=[{path:"",children:[{path:"alta",component:D,data:{Transaccion:"PRODUCTOS-ALTA"},canActivate:[m.z,p._],canLoad:[m.z,p._]},{path:"editar",component:(()=>{class o{constructor(e,n){this.httpservi=e,this.servimenu=n,this.prod="",this.producto={_id:"",id_prod_serv:"",descripcion:"",codigo_barra:"",tipo:"Producto",clave_prod_serv:"",clave_unidad:"",unidad:"",objeto_imp:"",impuesto:"",tipo_factor:"",tasa_cuota:""}}ngOnInit(){this.servimenu.setencabezado("Edici\xf3n de productos")}productoseleccionado(e){this.prod=e,""!==this.prod&&(console.log(this.prod),this.httpservi.obtenerproducto(this.prod,"Producto").subscribe(n=>{this.producto._id=n[0]._id,this.producto.id_prod_serv=n[0].id_prod_serv,this.producto.descripcion=n[0].descripcion,this.producto.codigo_barra=n[0].codigo_barra,this.producto.clave_prod_serv=n[0].clave_prod_serv,this.producto.clave_unidad=n[0].clave_unidad,this.producto.unidad=n[0].unidad,this.producto.objeto_imp=n[0].objeto_imp,this.producto.impuesto=n[0].impuesto,this.producto.tipo_factor=n[0].tipo_factor,this.producto.tasa_cuota=n[0].tasa_cuota,console.log(this.producto.descripcion),this.prod=""}))}actualizar(){this.httpservi.actualizarproducto(this.producto).subscribe(e=>{console.log("actualizado",e),this.modal()},e=>{s().fire({title:"Ups!!",text:"No se pudieron guardar los cambios",icon:"success",confirmButtonText:"ok"}),console.log(e)})}modal(){s().fire({title:"Cambios aplicados",text:"Se han guardado y aplicado los cambios correctamente",icon:"success",confirmButtonText:"ok"}).then(e=>{e.isConfirmed&&(this.producto.id_prod_serv="",this.producto.descripcion="",this.producto.codigo_barra="",this.producto.clave_prod_serv="",this.producto.clave_unidad="",this.producto.unidad="",this.producto.objeto_imp="",this.producto.impuesto="",this.producto.tipo_factor="",this.producto.tasa_cuota="")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(f.h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-editar"]],decls:82,vars:10,consts:[[3,"messageEvent"],[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill"],["matInput","","placeholder","","value","","readonly","",3,"ngModel","ngModelChange"],["matInput","","placeholder","0","value","",3,"ngModel","ngModelChange"],["appearance","fill",2,"width","200px"],["matInput","","placeholder","","maxlength","13","value","",3,"ngModel","ngModelChange"],["matInput","","placeholder","","value","",3,"ngModel","ngModelChange"],["appearance","fill",2,"width","100px"],[1,"col-sm"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","primary",2,"margin-top","15px",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-buscador",0),t.NdJ("messageEvent",function(i){return n.productoseleccionado(i)}),t.qZA(),t.TgZ(1,"mat-card",1),t.TgZ(2,"h3"),t._uU(3,"Datos del servicio"),t.qZA(),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"N\xfamero del producto "),t.TgZ(10,"mat-icon"),t._uU(11,"lock"),t.qZA(),t.qZA(),t.TgZ(12,"input",5),t.NdJ("ngModelChange",function(i){return n.producto.id_prod_serv=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"mat-form-field",4),t.TgZ(15,"mat-label"),t._uU(16,"Descripci\xf3n "),t.TgZ(17,"mat-icon"),t._uU(18,"create"),t.qZA(),t.qZA(),t.TgZ(19,"input",6),t.NdJ("ngModelChange",function(i){return n.producto.descripcion=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",3),t.TgZ(21,"mat-form-field",7),t.TgZ(22,"mat-label"),t._uU(23,"Codigo de barras "),t.TgZ(24,"mat-icon"),t._uU(25,"create"),t.qZA(),t.qZA(),t.TgZ(26,"input",8),t.NdJ("ngModelChange",function(i){return n.producto.codigo_barra=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",3),t.TgZ(28,"mat-form-field",7),t.TgZ(29,"mat-label"),t._uU(30,"Clave del producto "),t.TgZ(31,"mat-icon"),t._uU(32,"create"),t.qZA(),t.qZA(),t.TgZ(33,"input",9),t.NdJ("ngModelChange",function(i){return n.producto.clave_prod_serv=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",3),t.TgZ(35,"mat-form-field",10),t.TgZ(36,"mat-label"),t._uU(37,"Clave de la unidad"),t.TgZ(38,"mat-icon"),t._uU(39,"create"),t.qZA(),t.qZA(),t.TgZ(40,"input",9),t.NdJ("ngModelChange",function(i){return n.producto.clave_unidad=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"div",3),t.TgZ(42,"mat-form-field",10),t.TgZ(43,"mat-label"),t._uU(44,"Unidad "),t.TgZ(45,"mat-icon"),t._uU(46,"create"),t.qZA(),t.qZA(),t.TgZ(47,"input",9),t.NdJ("ngModelChange",function(i){return n.producto.unidad=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",3),t.TgZ(49,"mat-form-field",10),t.TgZ(50,"mat-label"),t._uU(51,"Objeto de impuesto "),t.TgZ(52,"mat-icon"),t._uU(53,"create"),t.qZA(),t.qZA(),t.TgZ(54,"input",9),t.NdJ("ngModelChange",function(i){return n.producto.objeto_imp=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",3),t.TgZ(56,"mat-form-field",10),t.TgZ(57,"mat-label"),t._uU(58,"impuesto "),t.TgZ(59,"mat-icon"),t._uU(60,"create"),t.qZA(),t.qZA(),t.TgZ(61,"input",9),t.NdJ("ngModelChange",function(i){return n.producto.impuesto=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(62,"div",3),t.TgZ(63,"mat-form-field",10),t.TgZ(64,"mat-label"),t._uU(65,"Tipo de factor "),t.TgZ(66,"mat-icon"),t._uU(67,"create"),t.qZA(),t.qZA(),t.TgZ(68,"input",9),t.NdJ("ngModelChange",function(i){return n.producto.tipo_factor=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(69,"div",3),t.TgZ(70,"mat-form-field",10),t.TgZ(71,"mat-label"),t._uU(72,"Tasa o cuota"),t.TgZ(73,"mat-icon"),t._uU(74,"create"),t.qZA(),t.qZA(),t.TgZ(75,"input",9),t.NdJ("ngModelChange",function(i){return n.producto.tasa_cuota=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(76,"div",11),t.TgZ(77,"div",12),t.TgZ(78,"button",13),t.NdJ("click",function(){return n.actualizar()}),t._uU(79,"Guardar"),t.TgZ(80,"mat-icon"),t._uU(81,"loop"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(12),t.Q6J("ngModel",n.producto.id_prod_serv),t.xp6(7),t.Q6J("ngModel",n.producto.descripcion),t.xp6(7),t.Q6J("ngModel",n.producto.codigo_barra),t.xp6(7),t.Q6J("ngModel",n.producto.clave_prod_serv),t.xp6(7),t.Q6J("ngModel",n.producto.clave_unidad),t.xp6(7),t.Q6J("ngModel",n.producto.unidad),t.xp6(7),t.Q6J("ngModel",n.producto.objeto_imp),t.xp6(7),t.Q6J("ngModel",n.producto.impuesto),t.xp6(7),t.Q6J("ngModel",n.producto.tipo_factor),t.xp6(7),t.Q6J("ngModel",n.producto.tasa_cuota))},directives:[y,_.a8,_.dn,M.Wh,C.KE,C.hX,v.Hw,x.Nt,l.Fj,l.JJ,l.On,l.nD,N.lW],styles:[""]}),o})(),data:{Transaccion:"PRODUCTOS-EDICION"},canActivate:[m.z,p._],canLoad:[m.z,p._]},{path:"baja",component:X,data:{Transaccion:"PRODUCTOS-BAJA"},canActivate:[m.z,p._],canLoad:[m.z,p._]},{path:"consulta",component:qt,data:{Transaccion:"PRODUCTOS-CONSULTA"},canActivate:[m.z,p._],canLoad:[m.z,p._]},{path:"**",redirectTo:"/menu/md"}]}];let Mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[T.Bz.forChild(Ut)],T.Bz]}),o})(),xt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[Z.ez,Mt,b.q,l.u5,l.UX]]}),o})()}}]);