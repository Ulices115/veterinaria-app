"use strict";(self.webpackChunkfenix_app=self.webpackChunkfenix_app||[]).push([[127,984],{3084:(O,v,r)=>{r.d(v,{a:()=>B});var s=r(7716),f=r(3679),h=r(9761),n=r(4395),d=r(8002),y=r(4908),l=r(3738),t=r(5618),A=r(8295),p=r(9983),g=r(5781),_=r(8583),C=r(1095),Z=r(6627),w=r(2458);function D(T,E){if(1&T&&(s.TgZ(0,"mat-option",10),s._uU(1),s.qZA()),2&T){const m=E.$implicit;s.Q6J("value",m),s.xp6(1),s.hij(" ",m," ")}}let B=(()=>{class T{constructor(m){this.servi=m,this.myControl=new f.NI(""),this.options=[],this.filterValue="",this.usuario="",this.messageEvent=new s.vpe}ngOnInit(){this.filteredOptions=this.myControl.valueChanges.pipe((0,h.O)(""),(0,n.b)(150),(0,d.U)(m=>this._filter(m||"")))}_filter(m){return this.filterValue=m.toLowerCase(),this.filterValue?(this.usuarios(),this.options.filter(b=>b.toLowerCase().includes(this.filterValue))):this.options.filter(b=>b.toLowerCase().includes(this.filterValue))}usuarios(){this.servi.obtenerusuario(this.filterValue,"activo").subscribe(m=>{this.options=[];for(const b in m)this.options.push(m[b].nombre),this.options=[...new Set(this.options)]})}usuarioseleccionado(){this.options=[],this.usuario=this.myControl.value,console.log(this.usuario),this.messageEvent.emit(this.usuario),this.usuario="",this.myControl.patchValue("")}}return T.\u0275fac=function(m){return new(m||T)(s.Y36(y.X))},T.\u0275cmp=s.Xpm({type:T,selectors:[["app-buscador"]],outputs:{messageEvent:"messageEvent"},decls:19,vars:5,consts:[[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill",1,"example-full-width",2,"width","260px"],["type","text","placeholder","Buscar...","aria-label","Nombre","matInput","",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"click"],[3,"value"]],template:function(m,b){if(1&m&&(s.TgZ(0,"mat-card",0),s.TgZ(1,"mat-card-content"),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s.TgZ(4,"mat-form-field",3),s.TgZ(5,"mat-label"),s._uU(6,"Nombre del usuario"),s.qZA(),s._UZ(7,"input",4),s.TgZ(8,"mat-autocomplete",null,5),s.YNc(10,D,2,2,"mat-option",6),s.ALo(11,"async"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(12,"div",7),s.TgZ(13,"div",8),s.TgZ(14,"button",9),s.NdJ("click",function(){return b.usuarioseleccionado()}),s._uU(15,"Buscar"),s.TgZ(16,"mat-icon"),s._uU(17,"search"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(18,"br")),2&m){const N=s.MAs(9);s.xp6(7),s.Q6J("formControl",b.myControl)("matAutocomplete",N),s.xp6(3),s.Q6J("ngForOf",s.lcZ(11,3,b.filteredOptions))}},directives:[l.a8,l.dn,t.Wh,A.KE,A.hX,p.Nt,f.Fj,g.ZL,f.JJ,f.oH,g.XC,_.sg,C.lW,Z.Hw,w.ey],pipes:[_.Ov],styles:[""]}),T})()},3127:(O,v,r)=>{r.r(v),r.d(v,{PermisosModule:()=>It});var s=r(8583),f=r(4655),h=r(8390),n=r(2789),d=r(9692),y=r(8259),l=r.n(y),t=r(7716),A=r(4908),p=r(8382),g=r(3084),_=r(3738),C=r(5618),Z=r(8295),w=r(6627),D=r(9983),B=r(1095);function T(i,a){1&i&&(t.TgZ(0,"th",21),t._uU(1," # "),t.qZA())}function E(i,a){if(1&i&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&i){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function m(i,a){1&i&&(t.TgZ(0,"th",21),t._uU(1," Modulo-Transacci\xf3n"),t.qZA())}function b(i,a){if(1&i&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.descripcion," ")}}function N(i,a){1&i&&t._UZ(0,"th",21)}function Y(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",22),t.TgZ(1,"a",23),t.NdJ("click",function(){const u=t.CHM(e).index;return t.oxw().eliminartransaccion(u)}),t.TgZ(2,"mat-icon",24),t._uU(3,"delete"),t.qZA(),t.qZA(),t.qZA()}}function k(i,a){1&i&&t._UZ(0,"tr",25)}function I(i,a){1&i&&t._UZ(0,"tr",26)}const j=function(){return[5,10,20]};let z=(()=>{class i{constructor(e,o){this.servi=e,this.servimenu=o,this.usuario="",this.Utransacciones=[],this.TransaccionUsuario={_id:"",transacciones:[""]},this.permisos=[],this.detalle=[],this.estado=!0,this.estadopermisos=!0,this.estadoguardar=!1,this.id_permiso="",this.displayedColumns=["index","descripcion","Quitar"],this.displayedColumns2=["index","descripcion"],this.dataSource=new n.by,this.dataSource2=new n.by}ngOnInit(){this.servimenu.setencabezado("Remoci\xf3n de transacciones")}usuarioseleccionado(e){this.dataSource=new n.by,this.estadopermisos=!1,this.usuario=e,this.detalle=[],this.servi.obtenerusuario(e,"activo").subscribe(o=>{this.TransaccionUsuario._id=o[0]._id,this.TransaccionUsuario._id=o[0]._id,this.Utransacciones=o[0].transacciones;for(const c in o[0].transacciones)console.log(o[0].transacciones[c]),this.detalle.push({descripcion:o[0].transacciones[c]});this.dataSource=new n.by(this.detalle),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina"})}eliminartodo(){l().fire({title:"\xbfEstas seguro?",html:`Estas por remover todos los permisos del usuario <b>${this.usuario}</b>`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, dar de baja!"}).then(e=>{e.isConfirmed&&(this.TransaccionUsuario.transacciones=[],console.log(this.TransaccionUsuario),this.servi.updateusuario(this.TransaccionUsuario,"").subscribe(o=>{console.log("eliminado",o),l().fire("Acci\xf3n completada!","El usuario ya no cuenta con permisos","success").then(c=>{c.isConfirmed&&(this.usuario="",this.dataSource=new n.by,this.estado=!0,this.estadopermisos=!0)})}))})}eliminartransaccion(e){this.estado=!1,this.detalle.splice(e,1),this.dataSource=new n.by(this.detalle)}restablecer(){this.usuarioseleccionado(this.usuario),this.estado=!0}actualizar(){if(""!==this.TransaccionUsuario._id&&this.Utransacciones.length>this.detalle.length){for(const e in this.detalle)this.permisos.push(this.detalle[e].descripcion);this.TransaccionUsuario.transacciones=this.permisos,console.log(this.TransaccionUsuario),this.servi.updateusuario(this.TransaccionUsuario,"").subscribe(e=>{console.log("actualizado"),this.modal()},e=>{0==this.TransaccionUsuario.transacciones.length?l().fire({title:"Usuario sin transacciones",html:'Si desea quitar todas las transacciones de acceso da click en el boton de "Remover todo"\'',icon:"warning",confirmButtonText:"ok"}):l().fire({title:"Ups!!",html:"Error al guardar y aplicar los cambios",icon:"warning",confirmButtonText:"ok"}),console.log(e)})}else l().fire({title:"Ups!!",html:"No se a seleccionado el usuario/algun cambio",icon:"warning",confirmButtonText:"ok"})}modal(){l().fire({title:"Cambios aplicados",html:"Se han guardado y aplicado los cambios correctamente",icon:"success",confirmButtonText:"ok"}).then(e=>{e.isConfirmed&&(this.detalle=[],this.permisos=[],this.Utransacciones=[],this.usuarioseleccionado(this.usuario),this.estado=!0)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(A.X),t.Y36(p.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-remover"]],viewQuery:function(e,o){if(1&e&&t.Gf(d.NW,5),2&e){let c;t.iGM(c=t.CRH())&&(o.paginator=c.first)}},decls:47,vars:9,consts:[[3,"messageEvent"],[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill"],["matInput","","placeholder","","readonly","",3,"value"],[1,"col-sm"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","warn",2,"margin-top","15px",3,"disabled","click"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","Quitar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"disabled","click"],["mat-raised-button","","color","azul",2,"margin-top","15px",3,"disabled","click"],["mat-header-cell",""],["mat-cell",""],["type","button",3,"click"],["color","warn",1,"icon"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t._UZ(0,"br"),t.TgZ(1,"app-buscador",0),t.NdJ("messageEvent",function(u){return o.usuarioseleccionado(u)}),t.qZA(),t.TgZ(2,"mat-card",1),t._UZ(3,"h3"),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Usuario seleccionado"),t.TgZ(10,"mat-icon"),t._uU(11,"locked"),t.qZA(),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.qZA(),t.TgZ(13,"div",6),t.TgZ(14,"div",7),t.TgZ(15,"button",8),t.NdJ("click",function(){return o.eliminartodo()}),t._uU(16,"Remover todo"),t.TgZ(17,"mat-icon"),t._uU(18,"delete_sweep"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(19,"br"),t.TgZ(20,"div",2),t.TgZ(21,"div",9),t.TgZ(22,"mat-card"),t.TgZ(23,"h3"),t._uU(24,"Permisos asignados"),t.qZA(),t.TgZ(25,"table",10),t.ynx(26,11),t.YNc(27,T,2,0,"th",12),t.YNc(28,E,2,1,"td",13),t.BQk(),t.ynx(29,14),t.YNc(30,m,2,0,"th",12),t.YNc(31,b,2,1,"td",13),t.BQk(),t.ynx(32,15),t.YNc(33,N,1,0,"th",12),t.YNc(34,Y,4,0,"td",13),t.BQk(),t.YNc(35,k,1,0,"tr",16),t.YNc(36,I,1,0,"tr",17),t.qZA(),t._UZ(37,"mat-paginator",18),t.TgZ(38,"div",7),t.TgZ(39,"button",19),t.NdJ("click",function(){return o.restablecer()}),t._uU(40,"Deshacer"),t.TgZ(41,"mat-icon"),t._uU(42,"loop"),t.qZA(),t.qZA(),t.TgZ(43,"button",20),t.NdJ("click",function(){return o.actualizar()}),t._uU(44,"Guardar cambios"),t.TgZ(45,"mat-icon"),t._uU(46,"check"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(12),t.Q6J("value",o.usuario),t.xp6(3),t.Q6J("disabled",o.estadopermisos),t.xp6(10),t.Q6J("dataSource",o.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,j)),t.xp6(2),t.Q6J("disabled",o.estado),t.xp6(4),t.Q6J("disabled",o.estadoguardar))},directives:[g.a,_.a8,_.dn,C.Wh,Z.KE,Z.hX,w.Hw,D.Nt,B.lW,n.BZ,n.w1,n.fO,n.Dz,n.as,n.nj,d.NW,n.ge,n.ev,n.XQ,n.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-azul[_ngcontent-%COMP%]{background-color:#00f;color:#fff}"]}),i})();var U=r(3679),P=r(9761),M=r(4395),R=r(8002),q=r(5781),Q=r(2458);const F=["paginator"],W=["paginator2"];function H(i,a){if(1&i&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function K(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," # "),t.qZA())}function G(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function X(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," Modulo-Transacci\xf3n"),t.qZA())}function V(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.descripcion," ")}}function $(i,a){1&i&&t._UZ(0,"th",29)}function tt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",30),t.TgZ(1,"a",31),t.NdJ("click",function(){const u=t.CHM(e).index;return t.oxw().eliminartransaccion(u)}),t.TgZ(2,"mat-icon",32),t._uU(3,"delete"),t.qZA(),t.qZA(),t.qZA()}}function et(i,a){1&i&&t._UZ(0,"tr",33)}function it(i,a){1&i&&t._UZ(0,"tr",34)}function ot(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," # "),t.qZA())}function at(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function nt(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," Transacci\xf3n"),t.qZA())}function st(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.descripcion," ")}}function ct(i,a){1&i&&t._UZ(0,"tr",33)}function rt(i,a){1&i&&t._UZ(0,"tr",34)}const J=function(){return[5,10,20]};let lt=(()=>{class i{constructor(e,o){this.servi=e,this.servimenu=o,this.usuario="",this.Utransacciones=[],this.TransaccionUsuario={_id:"",transacciones:[""]},this.transaccion="",this.options2=[],this.filterValue2="",this.myControl2=new U.NI(""),this.permisos=[],this.detalle=[],this.detallepermisos=[],this.displayedColumns=["index","descripcion","Quitar"],this.displayedColumns2=["index","descripcion"],this.dataSource=new n.by,this.dataSource2=new n.by}ngOnInit(){this.servimenu.setencabezado("Adici\xf3n de transacciones"),this.filteredOptions2=this.myControl2.valueChanges.pipe((0,P.O)(""),(0,M.b)(150),(0,R.U)(e=>this._filter2(e||"")))}_filter2(e){return this.filterValue2=e.toLowerCase(),this.filterValue2?(this.transacciones(),this.options2.filter(o=>o.toLowerCase().includes(this.filterValue2))):this.options2.filter(o=>o.toLowerCase().includes(this.filterValue2))}transacciones(){this.servi.obtenertransaccion(this.filterValue2).subscribe(e=>{this.options2=[];for(const o in e)this.options2.push(e[o].referencia)})}usuarioseleccionado(e){this.dataSource=new n.by,this.usuario=e,this.detallepermisos=[],this.dataSource2=new n.by,this.servi.obtenerusuario(e,"activo").subscribe(o=>{this.TransaccionUsuario._id=o[0]._id,this.Utransacciones=o[0].transacciones;for(const c in o[0].transacciones)console.log(o[0].transacciones[c]),this.detallepermisos.push({descripcion:o[0].transacciones[c]});this.dataSource2=new n.by(this.detallepermisos),this.dataSource2.paginator=this.paginator2,this.dataSource2.paginator._intl.itemsPerPageLabel="Filas por pagina"})}agregar(){this.transaccion=this.myControl2.value,""!==this.transaccion?(this.detalle.push({descripcion:this.transaccion}),this.dataSource=new n.by(this.detalle),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina",this.transaccion="",this.myControl2.patchValue("")):(console.log("agregue el permiso"),l().fire({title:"Campo vacio",html:"Debe agregar la transaccion",icon:"warning",confirmButtonText:"ok"}))}guardar(){if(""!==this.TransaccionUsuario._id&&this.detalle.length>0){for(const e in this.detalle)this.permisos.push(this.detalle[e].descripcion);this.TransaccionUsuario.transacciones=[...new Set(this.permisos.concat(this.Utransacciones))],this.servi.updateusuario(this.TransaccionUsuario,"").subscribe(e=>{console.log("usuario-transaccion guardado"),this.modal()},e=>{l().fire({title:"Ups!!",html:"No se han guardado los cambios",icon:"warning",confirmButtonText:"ok"}),console.log(e)})}else l().fire({title:"Ups!!",html:"No se a seleccionado usuario/transaccion",icon:"warning",confirmButtonText:"ok"})}modal(){l().fire({title:"Cambios aplicados",html:"Se han guardado y aplicado los cambios correctamente",icon:"success",confirmButtonText:"ok"}).then(e=>{e.isConfirmed&&(this.detalle=[],this.permisos=[],this.Utransacciones=[],this.dataSource=new n.by,this.usuarioseleccionado(this.usuario))})}eliminartransaccion(e){console.log(e),this.detalle.splice(e,1),this.dataSource=new n.by(this.detalle)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(A.X),t.Y36(p.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-agregar"]],viewQuery:function(e,o){if(1&e&&(t.Gf(F,5),t.Gf(W,5)),2&e){let c;t.iGM(c=t.CRH())&&(o.paginator=c.first),t.iGM(c=t.CRH())&&(o.paginator2=c.first)}},decls:70,vars:16,consts:[[3,"messageEvent"],[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill"],["matInput","","placeholder","","readonly","",3,"value"],["appearance","fill",1,"example-full-width",2,"width","260px"],["type","text","placeholder","Buscar...","aria-label","Nombre","matInput","",3,"formControl","matAutocomplete"],["auto2","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"click"],["fxLayoutAlign","space-between",1,"col-sm-6"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","Quitar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["paginator","matPaginator"],["mat-raised-button","","color","azul",2,"margin-top","15px",3,"click"],["fxLayoutAlign","space-between",1,"col-sm-4"],["paginator2","matPaginator"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["type","button",3,"click"],["color","warn",1,"icon"],["mat-header-row",""],["mat-row",""]],template:function(e,o){if(1&e&&(t._UZ(0,"br"),t.TgZ(1,"app-buscador",0),t.NdJ("messageEvent",function(u){return o.usuarioseleccionado(u)}),t.qZA(),t.TgZ(2,"mat-card",1),t._UZ(3,"h3"),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Usuario seleccionado"),t.TgZ(10,"mat-icon"),t._uU(11,"locked"),t.qZA(),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"mat-form-field",6),t.TgZ(15,"mat-label"),t._uU(16,"Modulo-Transacci\xf3n"),t.qZA(),t._UZ(17,"input",7),t.TgZ(18,"mat-autocomplete",null,8),t.YNc(20,H,2,2,"mat-option",9),t.ALo(21,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",10),t.TgZ(23,"div",11),t.TgZ(24,"button",12),t.NdJ("click",function(){return o.agregar()}),t._uU(25,"Agregar"),t.TgZ(26,"mat-icon"),t._uU(27,"add"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(28,"br"),t.TgZ(29,"mat-card",1),t.TgZ(30,"mat-card-content"),t.TgZ(31,"div",2),t.TgZ(32,"div",13),t.TgZ(33,"div",14),t.TgZ(34,"h3"),t._uU(35,"Permisos seleccionados"),t.qZA(),t.TgZ(36,"table",15),t.ynx(37,16),t.YNc(38,K,2,0,"th",17),t.YNc(39,G,2,1,"td",18),t.BQk(),t.ynx(40,19),t.YNc(41,X,2,0,"th",17),t.YNc(42,V,2,1,"td",18),t.BQk(),t.ynx(43,20),t.YNc(44,$,1,0,"th",17),t.YNc(45,tt,4,0,"td",18),t.BQk(),t.YNc(46,et,1,0,"tr",21),t.YNc(47,it,1,0,"tr",22),t.qZA(),t._UZ(48,"mat-paginator",23,24),t.TgZ(50,"div",11),t.TgZ(51,"button",25),t.NdJ("click",function(){return o.guardar()}),t._uU(52,"Guardar cambios"),t.TgZ(53,"mat-icon"),t._uU(54,"check"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",26),t.TgZ(56,"div",14),t.TgZ(57,"h3"),t._uU(58,"Permisos asignadas"),t.qZA(),t.TgZ(59,"table",15),t.ynx(60,16),t.YNc(61,ot,2,0,"th",17),t.YNc(62,at,2,1,"td",18),t.BQk(),t.ynx(63,19),t.YNc(64,nt,2,0,"th",17),t.YNc(65,st,2,1,"td",18),t.BQk(),t.YNc(66,ct,1,0,"tr",21),t.YNc(67,rt,1,0,"tr",22),t.qZA(),t._UZ(68,"mat-paginator",23,27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const c=t.MAs(19);t.xp6(12),t.Q6J("value",o.usuario),t.xp6(5),t.Q6J("formControl",o.myControl2)("matAutocomplete",c),t.xp6(3),t.Q6J("ngForOf",t.lcZ(21,12,o.filteredOptions2)),t.xp6(16),t.Q6J("dataSource",o.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(14,J)),t.xp6(11),t.Q6J("dataSource",o.dataSource2),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns2),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns2),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(15,J))}},directives:[g.a,_.a8,_.dn,C.Wh,Z.KE,Z.hX,w.Hw,D.Nt,U.Fj,q.ZL,U.JJ,U.oH,q.XC,s.sg,B.lW,n.BZ,n.w1,n.fO,n.Dz,n.as,n.nj,d.NW,Q.ey,n.ge,n.ev,n.XQ,n.Gk],pipes:[s.Ov],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-azul[_ngcontent-%COMP%]{background-color:#00f;color:#fff}"]}),i})();const ut=["paginator"],mt=["paginator2"];function dt(i,a){if(1&i&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function pt(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," # "),t.qZA())}function ht(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function _t(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," Ubicaci\xf3n"),t.qZA())}function gt(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.descripcion," ")}}function ft(i,a){1&i&&t._UZ(0,"th",29)}function Zt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",30),t.TgZ(1,"a",31),t.NdJ("click",function(){const u=t.CHM(e).index;return t.oxw().eliminartransaccion(u)}),t.TgZ(2,"mat-icon",32),t._uU(3,"delete"),t.qZA(),t.qZA(),t.qZA()}}function bt(i,a){1&i&&t._UZ(0,"tr",33)}function Tt(i,a){1&i&&t._UZ(0,"tr",34)}function Ut(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," # "),t.qZA())}function At(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function Ct(i,a){1&i&&(t.TgZ(0,"th",29),t._uU(1," Ubicaci\xf3n"),t.qZA())}function vt(i,a){if(1&i&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.descripcion," ")}}function xt(i,a){1&i&&t._UZ(0,"tr",33)}function yt(i,a){1&i&&t._UZ(0,"tr",34)}const L=function(){return[5,10,20]};let wt=(()=>{class i{constructor(e,o){this.servi=e,this.servimenu=o,this.usuario="",this.Ubicaciones=[],this.UbicacionesUsuario={_id:"",ubicaciones:[""]},this.ubicacion="",this.options2=[],this.filterValue2="",this.myControl2=new U.NI(""),this.permisos=[],this.detalle=[],this.detalleid=[],this.ubicacionid="",this.detallepermisos=[],this.displayedColumns=["index","descripcion","Quitar"],this.displayedColumns2=["index","descripcion"],this.dataSource=new n.by,this.dataSource2=new n.by}ngOnInit(){this.servimenu.setencabezado("Adici\xf3n de ubicacion"),this.filteredOptions2=this.myControl2.valueChanges.pipe((0,P.O)(""),(0,M.b)(150),(0,R.U)(e=>this._filter2(e||"")))}_filter2(e){return this.filterValue2=e.toLowerCase(),this.filterValue2?(this.ubicaciones(),this.options2.filter(o=>o.toLowerCase().includes(this.filterValue2))):this.options2.filter(o=>o.toLowerCase().includes(this.filterValue2))}ubicaciones(){this.servi.obtenerubicacion(this.filterValue2).subscribe(e=>{this.options2=[];for(const o in e)this.options2.push(e[o].descripcion)})}usuarioseleccionado(e){this.dataSource=new n.by,this.usuario=e,this.detallepermisos=[],this.dataSource2=new n.by,this.servi.obtenerusuario(e,"").subscribe(o=>{""==o?this.servi.obtenerusuario(e,"activo").subscribe(c=>{this.UbicacionesUsuario._id=c[0]._id,this.Ubicaciones=c[0].ubicaciones}):(this.UbicacionesUsuario._id=o[0]._id,this.Ubicaciones=o[0].ubicaciones);for(const c in o)this.detallepermisos.push({descripcion:o[c].Descripcion.descripcion});this.dataSource2=new n.by(this.detallepermisos),this.dataSource2.paginator=this.paginator2,this.dataSource2.paginator._intl.itemsPerPageLabel="Filas por pagina"},o=>{console.log(o)})}agregar(){this.ubicacion=this.myControl2.value,""!==this.ubicacion?(this.servi.obtenerubicacion(this.ubicacion).subscribe(o=>{console.log(o[0].id_ubicacion),this.ubicacionid=o[0].id_ubicacion,this.detalleid.push({descripcion:this.ubicacionid})}),this.detalle.push({descripcion:this.ubicacion}),this.dataSource=new n.by(this.detalle),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina",this.ubicacion="",this.myControl2.patchValue("")):(console.log("agregue el permiso"),l().fire({title:"Campo vacio",html:"Debe agregar la transaccion",icon:"warning",confirmButtonText:"ok"}))}guardar(){if(""!==this.UbicacionesUsuario._id&&this.detalle.length>0){for(const e in this.detalleid)this.permisos.push(this.detalleid[e].descripcion);this.UbicacionesUsuario.ubicaciones=[...new Set(this.permisos.concat(this.Ubicaciones))],this.servi.updateusuario(this.UbicacionesUsuario,"").subscribe(e=>{console.log("usuario-transaccion guardado"),this.modal()},e=>{l().fire({title:"Ups!!",html:"No se han guardado los cambios",icon:"warning",confirmButtonText:"ok"}),console.log(e)})}else l().fire({title:"Ups!!",html:"No se a seleccionado usuario/transaccion",icon:"warning",confirmButtonText:"ok"})}modal(){l().fire({title:"Cambios aplicados",html:"Se han guardado y aplicado los cambios correctamente",icon:"success",confirmButtonText:"ok"}).then(e=>{e.isConfirmed&&(this.detalle=[],this.permisos=[],this.Ubicaciones=[],this.dataSource=new n.by,this.usuarioseleccionado(this.usuario))})}eliminartransaccion(e){console.log(e),this.detalle.splice(e,1),this.dataSource=new n.by(this.detalle)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(A.X),t.Y36(p.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ubicacion-alta"]],viewQuery:function(e,o){if(1&e&&(t.Gf(ut,5),t.Gf(mt,5)),2&e){let c;t.iGM(c=t.CRH())&&(o.paginator=c.first),t.iGM(c=t.CRH())&&(o.paginator2=c.first)}},decls:70,vars:16,consts:[[3,"messageEvent"],[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill"],["matInput","","placeholder","","readonly","",3,"value"],["appearance","fill",1,"example-full-width",2,"width","260px"],["type","text","placeholder","Buscar...","aria-label","Nombre","matInput","",3,"formControl","matAutocomplete"],["auto2","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"click"],["fxLayoutAlign","space-between",1,"col-sm-6"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","Quitar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["paginator","matPaginator"],["mat-raised-button","","color","azul",2,"margin-top","15px",3,"click"],["fxLayoutAlign","space-between",1,"col-sm-4"],["paginator2","matPaginator"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["type","button",3,"click"],["color","warn",1,"icon"],["mat-header-row",""],["mat-row",""]],template:function(e,o){if(1&e&&(t._UZ(0,"br"),t.TgZ(1,"app-buscador",0),t.NdJ("messageEvent",function(u){return o.usuarioseleccionado(u)}),t.qZA(),t.TgZ(2,"mat-card",1),t._UZ(3,"h3"),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Usuario seleccionado"),t.TgZ(10,"mat-icon"),t._uU(11,"locked"),t.qZA(),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"mat-form-field",6),t.TgZ(15,"mat-label"),t._uU(16,"Ubicaciones"),t.qZA(),t._UZ(17,"input",7),t.TgZ(18,"mat-autocomplete",null,8),t.YNc(20,dt,2,2,"mat-option",9),t.ALo(21,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",10),t.TgZ(23,"div",11),t.TgZ(24,"button",12),t.NdJ("click",function(){return o.agregar()}),t._uU(25,"Agregar"),t.TgZ(26,"mat-icon"),t._uU(27,"add"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(28,"br"),t.TgZ(29,"mat-card",1),t.TgZ(30,"mat-card-content"),t.TgZ(31,"div",2),t.TgZ(32,"div",13),t.TgZ(33,"div",14),t.TgZ(34,"h3"),t._uU(35,"Ubicaciones seleccionados"),t.qZA(),t.TgZ(36,"table",15),t.ynx(37,16),t.YNc(38,pt,2,0,"th",17),t.YNc(39,ht,2,1,"td",18),t.BQk(),t.ynx(40,19),t.YNc(41,_t,2,0,"th",17),t.YNc(42,gt,2,1,"td",18),t.BQk(),t.ynx(43,20),t.YNc(44,ft,1,0,"th",17),t.YNc(45,Zt,4,0,"td",18),t.BQk(),t.YNc(46,bt,1,0,"tr",21),t.YNc(47,Tt,1,0,"tr",22),t.qZA(),t._UZ(48,"mat-paginator",23,24),t.TgZ(50,"div",11),t.TgZ(51,"button",25),t.NdJ("click",function(){return o.guardar()}),t._uU(52,"Guardar cambios"),t.TgZ(53,"mat-icon"),t._uU(54,"check"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",26),t.TgZ(56,"div",14),t.TgZ(57,"h3"),t._uU(58,"Ubicaciones asignadas"),t.qZA(),t.TgZ(59,"table",15),t.ynx(60,16),t.YNc(61,Ut,2,0,"th",17),t.YNc(62,At,2,1,"td",18),t.BQk(),t.ynx(63,19),t.YNc(64,Ct,2,0,"th",17),t.YNc(65,vt,2,1,"td",18),t.BQk(),t.YNc(66,xt,1,0,"tr",21),t.YNc(67,yt,1,0,"tr",22),t.qZA(),t._UZ(68,"mat-paginator",23,27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const c=t.MAs(19);t.xp6(12),t.Q6J("value",o.usuario),t.xp6(5),t.Q6J("formControl",o.myControl2)("matAutocomplete",c),t.xp6(3),t.Q6J("ngForOf",t.lcZ(21,12,o.filteredOptions2)),t.xp6(16),t.Q6J("dataSource",o.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(14,L)),t.xp6(11),t.Q6J("dataSource",o.dataSource2),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns2),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns2),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(15,L))}},directives:[g.a,_.a8,_.dn,C.Wh,Z.KE,Z.hX,w.Hw,D.Nt,U.Fj,q.ZL,U.JJ,U.oH,q.XC,s.sg,B.lW,n.BZ,n.w1,n.fO,n.Dz,n.as,n.nj,d.NW,Q.ey,n.ge,n.ev,n.XQ,n.Gk],pipes:[s.Ov],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-azul[_ngcontent-%COMP%]{background-color:#00f;color:#fff}"]}),i})();function Dt(i,a){1&i&&(t.TgZ(0,"th",22),t._uU(1," # "),t.qZA())}function Bt(i,a){if(1&i&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&i){const e=a.index;t.xp6(1),t.hij(" ",e+1," ")}}function Et(i,a){1&i&&(t.TgZ(0,"th",22),t._uU(1,"Id Ubicaci\xf3n"),t.qZA())}function Nt(i,a){if(1&i&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function qt(i,a){1&i&&(t.TgZ(0,"th",22),t._uU(1,"Descripcion"),t.qZA())}function Ot(i,a){if(1&i&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.descripcion," ")}}function St(i,a){1&i&&t._UZ(0,"th",22)}function Pt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",23),t.TgZ(1,"a",24),t.NdJ("click",function(){const u=t.CHM(e).index;return t.oxw().eliminartransaccion(u)}),t.TgZ(2,"mat-icon",25),t._uU(3,"delete"),t.qZA(),t.qZA(),t.qZA()}}function Mt(i,a){1&i&&t._UZ(0,"tr",26)}function Rt(i,a){1&i&&t._UZ(0,"tr",27)}const Qt=function(){return[5,10,20]};let Jt=(()=>{class i{constructor(e,o){this.servi=e,this.servimenu=o,this.usuario="",this.ubicaciones=[],this.UbicacionesUsuario={_id:"",ubicaciones:[""]},this.permisos=[],this.detalle=[],this.estado=!0,this.estadopermisos=!0,this.estadoguardar=!1,this.id_permiso="",this.descripcion="",this.displayedColumns=["index","id","descripcion","Quitar"],this.dataSource=new n.by,this.dataSource2=new n.by}ngOnInit(){this.servimenu.setencabezado("Remoci\xf3n de ubicaciones")}usuarioseleccionado(e){this.dataSource=new n.by,this.estadopermisos=!1,this.usuario=e,this.detalle=[],this.servi.obtenerusuario(e,"").subscribe(o=>{""==o&&(l().fire("Sin ubicaciones!","No cuenta con ubicaciones","error"),this.estadopermisos=!0),this.UbicacionesUsuario._id=o[0]._id,this.UbicacionesUsuario._id=o[0]._id,this.ubicaciones=o[0].ubicaciones;for(const c in o)console.log(o[c].Descripcion.descripcion),this.detalle.push({id:o[c].Descripcion.id_ubicacion,descripcion:o[c].Descripcion.descripcion});this.dataSource=new n.by(this.detalle),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina"})}eliminartodo(){l().fire({title:"\xbfEstas seguro?",html:`Estas por remover todas las ubicaciones del usuario <b>${this.usuario}</b>`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, dar de baja!"}).then(e=>{e.isConfirmed&&(this.UbicacionesUsuario.ubicaciones=[],console.log(this.UbicacionesUsuario),this.servi.updateusuario(this.UbicacionesUsuario,"").subscribe(o=>{console.log("eliminado",o),l().fire("Acci\xf3n completada!","El usuario ya no cuenta con ubicaciones","success").then(c=>{c.isConfirmed&&(this.usuario="",this.dataSource=new n.by,this.estado=!0,this.estadopermisos=!0)})}))})}eliminartransaccion(e){this.estado=!1,this.detalle.splice(e,1),this.dataSource=new n.by(this.detalle)}restablecer(){this.usuarioseleccionado(this.usuario),this.estado=!0}actualizar(){if(""!==this.UbicacionesUsuario._id&&this.ubicaciones.length>this.detalle.length){for(const e in this.detalle)this.permisos.push(this.detalle[e].id);this.UbicacionesUsuario.ubicaciones=this.permisos,console.log(this.UbicacionesUsuario),this.servi.updateusuario(this.UbicacionesUsuario,"").subscribe(e=>{console.log("actualizado"),this.modal()},e=>{0==this.UbicacionesUsuario.ubicaciones.length?l().fire({title:"Usuario sin transacciones",html:'Si desea quitar todas las ubicaciones de acceso da click en el boton de "Remover todo"\'',icon:"warning",confirmButtonText:"ok"}):l().fire({title:"Ups!!",html:"Error al guardar y aplicar los cambios",icon:"warning",confirmButtonText:"ok"}),console.log(e)})}else l().fire({title:"Ups!!",html:"No se a seleccionado el usuario/algun cambio",icon:"warning",confirmButtonText:"ok"})}modal(){l().fire({title:"Cambios aplicados",html:"Se han guardado y aplicado los cambios correctamente",icon:"success",confirmButtonText:"ok"}).then(e=>{e.isConfirmed&&(this.detalle=[],this.permisos=[],this.ubicaciones=[],this.usuarioseleccionado(this.usuario),this.estado=!0)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(A.X),t.Y36(p.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ubicacion-baja"]],viewQuery:function(e,o){if(1&e&&t.Gf(d.NW,5),2&e){let c;t.iGM(c=t.CRH())&&(o.paginator=c.first)}},decls:50,vars:9,consts:[[3,"messageEvent"],[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill"],["matInput","","placeholder","","readonly","",3,"value"],[1,"col-sm"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","warn",2,"margin-top","15px",3,"disabled","click"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","descripcion"],["matColumnDef","Quitar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"disabled","click"],["mat-raised-button","","color","azul",2,"margin-top","15px",3,"disabled","click"],["mat-header-cell",""],["mat-cell",""],["type","button",3,"click"],["color","warn",1,"icon"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t._UZ(0,"br"),t.TgZ(1,"app-buscador",0),t.NdJ("messageEvent",function(u){return o.usuarioseleccionado(u)}),t.qZA(),t.TgZ(2,"mat-card",1),t._UZ(3,"h3"),t.TgZ(4,"mat-card-content"),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Usuario seleccionado"),t.TgZ(10,"mat-icon"),t._uU(11,"locked"),t.qZA(),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.qZA(),t.TgZ(13,"div",6),t.TgZ(14,"div",7),t.TgZ(15,"button",8),t.NdJ("click",function(){return o.eliminartodo()}),t._uU(16,"Remover todo"),t.TgZ(17,"mat-icon"),t._uU(18,"delete_sweep"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(19,"br"),t.TgZ(20,"div",2),t.TgZ(21,"div",9),t.TgZ(22,"mat-card"),t.TgZ(23,"h3"),t._uU(24,"Ubicaciones asignados"),t.qZA(),t.TgZ(25,"table",10),t.ynx(26,11),t.YNc(27,Dt,2,0,"th",12),t.YNc(28,Bt,2,1,"td",13),t.BQk(),t.ynx(29,14),t.YNc(30,Et,2,0,"th",12),t.YNc(31,Nt,2,1,"td",13),t.BQk(),t.ynx(32,15),t.YNc(33,qt,2,0,"th",12),t.YNc(34,Ot,2,1,"td",13),t.BQk(),t.ynx(35,16),t.YNc(36,St,1,0,"th",12),t.YNc(37,Pt,4,0,"td",13),t.BQk(),t.YNc(38,Mt,1,0,"tr",17),t.YNc(39,Rt,1,0,"tr",18),t.qZA(),t._UZ(40,"mat-paginator",19),t.TgZ(41,"div",7),t.TgZ(42,"button",20),t.NdJ("click",function(){return o.restablecer()}),t._uU(43,"Deshacer"),t.TgZ(44,"mat-icon"),t._uU(45,"loop"),t.qZA(),t.qZA(),t.TgZ(46,"button",21),t.NdJ("click",function(){return o.actualizar()}),t._uU(47,"Guardar cambios"),t.TgZ(48,"mat-icon"),t._uU(49,"check"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(12),t.Q6J("value",o.usuario),t.xp6(3),t.Q6J("disabled",o.estadopermisos),t.xp6(10),t.Q6J("dataSource",o.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,Qt)),t.xp6(2),t.Q6J("disabled",o.estado),t.xp6(4),t.Q6J("disabled",o.estadoguardar))},directives:[g.a,_.a8,_.dn,C.Wh,Z.KE,Z.hX,w.Hw,D.Nt,B.lW,n.BZ,n.w1,n.fO,n.Dz,n.as,n.nj,d.NW,n.ge,n.ev,n.XQ,n.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-azul[_ngcontent-%COMP%]{background-color:#00f;color:#fff}"]}),i})();var x=r(8984);const Lt=[{path:"",children:[{path:"adicion",component:lt,data:{Transaccion:"PERMISOS-ADICION-TRANSACCION"},canActivate:[h.z,x._],canLoad:[h.z,x._]},{path:"remover",component:z,data:{Transaccion:"PERMISOS-REMOCION-TRANSACCION"},canActivate:[h.z,x._],canLoad:[h.z,x._]},{path:"adicion-ubicacion",component:wt,data:{Transaccion:"PERMISOS-ADICION-UBICACION"},canActivate:[h.z,x._],canLoad:[h.z,x._]},{path:"remover-ubicacion",component:Jt,data:{Transaccion:"PERMISOS-REMOCION-UBICACION"},canActivate:[h.z,x._],canLoad:[h.z,x._]},{path:"**",redirectTo:"/menu/tr"}]}];let Yt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.Bz.forChild(Lt)],f.Bz]}),i})();var kt=r(206);let It=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[s.ez,Yt,kt.q,U.u5,U.UX]]}),i})()},4908:(O,v,r)=>{r.d(v,{X:()=>n});var s=r(2340),f=r(7716),h=r(1841);let n=(()=>{class d{constructor(l){this.httpClient=l,this.url=`${s.N.baseUrl}/api/Utransaccion/`,this.urlU=`${s.N.baseUrl}/api/usuarios/`,this.urlT=`${s.N.baseUrl}/api/transaccion/`,this.urlUbi=`${s.N.baseUrl}/api/ubicacion/`}guardarpermiso(l){return this.httpClient.post(this.url,l)}obtenerpermiso(l){return this.httpClient.get(this.url+l)}actualizarpermisos(l){return this.httpClient.put(this.url+l._id,l)}obtenerusuario(l,t){return this.httpClient.get(this.urlU+l+`?tipo=${t}`)}updateusuario(l,t){return this.httpClient.put(this.urlU+l._id+`?tipo=${t}`,l)}obtenertransaccion(l){return this.httpClient.get(this.urlT+l)}eliminarpermisos(l){return this.httpClient.delete(this.url+l)}obtenerubicacion(l){return this.httpClient.get(this.urlUbi+l)}}return d.\u0275fac=function(l){return new(l||d)(f.LFG(h.eN))},d.\u0275prov=f.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},8984:(O,v,r)=>{r.d(v,{_:()=>l});var s=r(7574),f=r(8259),h=r.n(f),n=r(7716),d=r(6518),y=r(4655);let l=(()=>{class t{constructor(p,g){this.authService=p,this.router=g,this.transacciones=[]}canActivate(p,g){return this.permisos(p)}CanLoad(p,g){return this.permisos(p)}permisos(p){var g=this.authService.usuario.transacciones;return new s.y(_=>{if(g){let C=g.find(Z=>Z===p.data.Transaccion);C==p.data.Transaccion?(console.log("acceso a:",C),_.next(!0)):(_.next(!1),console.log("sin acceso"),h().fire({title:"Acceso denegado",html:"No cuentas con el permiso",icon:"error",confirmButtonText:"ok"}))}else _.next(!1),console.log("sin permisos"),h().fire({title:"Acceso denegado",html:"No cuentas con permisos",icon:"error",confirmButtonText:"ok"})})}}return t.\u0275fac=function(p){return new(p||t)(n.LFG(d.e),n.LFG(y.F0))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);