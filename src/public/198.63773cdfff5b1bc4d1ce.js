"use strict";(self.webpackChunkfenix_app=self.webpackChunkfenix_app||[]).push([[198],{2198:(qe,q,l)=>{l.r(q),l.d(q,{ComprasModule:()=>Ue});var s=l(8583),N=l(4655),m=l(8984),u=l(8390),d=l(3679),Y=l(9761),y=l(4395),S=l(8002),Q=l(7519),j=l(8259),p=l.n(j),Z=l(9692),c=l(2789),t=l(7716),f=l(2340),R=l(1841);let C=(()=>{class e{constructor(o){this.httpClient=o,this.urlO=`${f.N.baseUrl}/api/orden/`,this.urlOD=`${f.N.baseUrl}/api/ordencompradetalle/`,this.urlb_p=`${f.N.baseUrl}/api/b_p/`,this.urlI=`${f.N.baseUrl}/api/inventario_general/`,this.urlU=`${f.N.baseUrl}/api/ubicacion/`}getb_p(o){return this.httpClient.get(this.urlb_p+o)}getinventario(o,i,a,r){return this.httpClient.get(this.urlI+i+`?ubi=${o}&tipo=${a}&consulta=${r}`)}actualizarinventario(o){return this.httpClient.put(this.urlI+o._id,o)}getubicaciones(){return this.httpClient.get(this.urlU)}getubicacion(o){return this.httpClient.get(this.urlU+o)}getordend(o){return this.httpClient.get(this.urlOD+o)}guardardetalle(o,i){return this.httpClient.post(this.urlOD+`?id=${i}`,o)}eliminarordenD(o){return this.httpClient.delete(this.urlOD+o)}guardarorden(o){return this.httpClient.post(this.urlO,o)}getordenes(){return this.httpClient.get(this.urlO)}getorden(o,i){return this.httpClient.get(this.urlO+i+`?ubi=${o}`)}eliminarorden(o){return this.httpClient.delete(this.urlO+o)}actualizarorden(o,i){return this.httpClient.put(this.urlO+i.id_orden+`?ubi=${o}`,i)}obtenerubicacion(o){return this.httpClient.get(this.urlU+o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(R.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=l(6518),b=l(8382),A=l(3241),g=l(3738),J=l(5618),h=l(8295),x=l(6627),v=l(9983),D=l(5781),U=l(1095),k=l(2458);function O(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"mat-option",37),t.NdJ("click",function(){return t.CHM(o),t.oxw().inventarioseleccionado()}),t._uU(1),t.qZA()}if(2&e){const o=n.$implicit;t.Q6J("value",o),t.xp6(1),t.hij(" ",o," ")}}function $(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1," # "),t.qZA())}function H(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const o=n.index;t.xp6(1),t.hij(" ",o+1," ")}}function M(e,n){1&e&&(t.TgZ(0,"th",40),t._uU(1," N\xfamero de Producto/Material "),t.qZA())}function F(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.producto," ")}}function L(e,n){1&e&&(t.TgZ(0,"th",40),t._uU(1," Descripci\xf3n"),t.qZA())}function z(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.descripcion)," ")}}function E(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1," Cantidad "),t.qZA())}function P(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.cantidad," ")}}function I(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1," Costo "),t.qZA())}function G(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.costo),"")}}function V(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1," Subtotal "),t.qZA())}function X(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.importe),"")}}function W(e,n){1&e&&t._UZ(0,"th",41)}function K(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",39),t.TgZ(1,"a",42),t.NdJ("click",function(){const r=t.CHM(o).index;return t.oxw().eliminarordenD(r)}),t.TgZ(2,"mat-icon",43),t._uU(3,"delete"),t.qZA(),t.qZA(),t.qZA()}}function tt(e,n){1&e&&t._UZ(0,"tr",44)}function et(e,n){1&e&&t._UZ(0,"tr",45)}const ot=function(){return[5,10,20]};let nt=(()=>{class e{constructor(o,i,a){this.http=o,this.authService=i,this.servimenu=a,this.socio="",this.filter="",this.myControl=new d.NI(""),this.options=[],this.prod="",this.filterValue="",this.ordenvalor=0,this.descripcion=[],this.estado=!0,this.ordendetalle=[],this.total=0,this.nombreb_p="",this.orden={id_orden:"",rfc:"",id_b_p:"",ubicacion:this.authService.usuario.ubicacion,fecha:new Date},this.ordenD={id_orden:"",producto:"",descripcion:"",cantidad:1,costo:0,importe:0},this.ubicaciones=[],this.ubicacion="",this.existencias=0,this.cantidad=new d.NI(""),this.displayedColumns=["index","producto","descripcion","cantidad","costo","importe","borrar"],this.dataSource=new c.by}ngOnInit(){this.servimenu.setencabezado("Orden de compras"),this.ubicacionusuario(this.authService.usuario.ubicacion),console.log(this.authService.usuario.ubicacion),this.filteredOptions=this.myControl.valueChanges.pipe((0,Y.O)(""),(0,y.b)(200),(0,S.U)(o=>this._filter(o||""))),this.cantidad.valueChanges.pipe((0,y.b)(500),(0,Q.x)()).subscribe(o=>{console.log(o),this.ordenD.cantidad=o,this.Subtotal()})}_filter(o){return this.filterValue=o.toLowerCase(),this.filterValue?(this.obtenerinventario(),this.options.filter(i=>i.toLowerCase().includes(this.filterValue))):this.options.filter(i=>i.toLowerCase().includes(this.filterValue))}obtenerinventario(){this.http.getinventario(this.ubicacion,this.filterValue,"Producto","").subscribe(o=>{console.log(o),this.options=[];for(const i in o)this.options.push(o[i].productos_servicios.descripcion),this.options.push(o[i].productos_servicios.codigo_barra),console.log("encontrado")})}clienteseleccionado(o){this.socio=o,""!==this.socio&&this.http.getb_p(this.socio).subscribe(i=>{this.orden.rfc=i[0].rfc,this.orden.id_b_p=i[0].id_b_p,this.nombreb_p=i[0].nombre})}agregarorden(){this.http.guardarorden(this.orden).subscribe(o=>{console.log("Pedido agregado"),this.ordenvalor=this.ordenvalor+1,p().fire({position:"center",icon:"success",title:"Orden creado",html:`Su n\xfamero de orden es <b>${this.orden.id_orden}</b> `,showConfirmButton:!0}).then(i=>{i.isConfirmed&&(this.orden.rfc="",this.orden.id_b_p="",this.nombreb_p="",this.ordendetalle=[],this.dataSource=new c.by,this.total=0)})},o=>{console.log(o)})}agregarordend(){""!==this.prod&&(this.ordendetalle.push({descripcion:this.ordenD.descripcion,producto:this.ordenD.producto,cantidad:this.ordenD.cantidad,costo:this.ordenD.costo,importe:this.ordenD.importe}),this.dataSource=new c.by(this.ordendetalle),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina",console.log("detalles",this.ordendetalle),this.ordenD.cantidad=1,this.ordenD.importe=0,this.ordenD.costo=0,this.prod="",this.myControl.patchValue(""),this.estado=!1,this.existencias=0,this.totalorden())}inventarioseleccionado(){this.prod=this.myControl.value,this.http.getinventario(this.ubicacion,this.myControl.value,"Producto","").subscribe(i=>{for(const a in i)this.ordenD.producto=i[a].id_prod_serv,this.ordenD.costo=i[a].costo,this.ordenD.importe=this.ordenD.costo,this.existencias=i[a].cantidad,this.ordenD.descripcion=i[a].productos_servicios.descripcion}),this.estado=!1}Subtotal(){this.ordenD.importe=this.ordenD.costo*this.ordenD.cantidad}ubicacionusuario(o){this.http.getubicacion(o).subscribe(a=>{for(const r in a)this.ubicacion=a[r].id_ubicacion}),this.obtenerinventario(),this.estado=!1}eliminarordenD(o){console.log(o),this.ordendetalle.splice(o,1),this.totalorden(),this.dataSource=new c.by(this.ordendetalle),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina"}totalorden(){this.total=0;for(const o in this.ordendetalle)this.total+=this.ordendetalle[o].importe}terminarorden(){this.ordendetalle.length>0&&""!==this.nombreb_p?this.http.getordenes().subscribe(o=>{this.ordenvalor=o+1,this.orden.id_orden="O"+String(1e9+this.ordenvalor).slice(1),console.log(this.orden),this.agregarorden();for(const a in this.ordendetalle)this.http.guardardetalle(this.ordendetalle[a],this.orden.id_orden).subscribe(r=>{console.log("agregado")},r=>{console.log(r)})}):p().fire({position:"center",icon:"error",title:"Ups!!",html:"No ha seleccionado un socio o agregado un producto",showConfirmButton:!0})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(C),t.Y36(T.e),t.Y36(b.h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-alta"]],viewQuery:function(o,i){if(1&o&&t.Gf(Z.NW,5),2&o){let a;t.iGM(a=t.CRH())&&(i.paginator=a.first)}},decls:115,vars:23,consts:[[3,"messageEvent"],[1,"custom"],[1,"row"],["fxLayoutAlign","space-between",1,"col-sm-auto"],["appearance","fill"],["matInput","","placeholder","","readonly","",3,"value"],["appearance","fill",2,"width","300px"],["matInput","","placeholder","nombre o razon social","readonly","",3,"value"],[1,"col-sm-auto"],["matInput","","placeholder","rfc","readonly","",3,"value"],["appearance","fill",1,"example-full-width",2,"width","250px"],["type","text","placeholder","","aria-label","Nombre","matInput","",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],["appearance","fill",2,"width","130px"],["matInput","","placeholder","","type","number","min","1","max","","name","cantidad","value","",3,"ngModel","formControl","ngModelChange","change"],[1,"col-sm"],[1,"example-button-row"],["mat-raised-button","","color","accent",2,"margin-top","15px",3,"disabled","click"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","","width","10%",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","producto"],["mat-header-cell","","width","30%",4,"matHeaderCellDef"],["matColumnDef","descripcion"],["matColumnDef","cantidad"],["matColumnDef","costo"],["matColumnDef","importe"],["matColumnDef","borrar"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],[1,"example-button-row",2,"margin-right","1px"],["mat-raised-button","","color","azul",2,"margin-top","15px",3,"click"],[3,"value","click"],["mat-header-cell","","width","10%"],["mat-cell",""],["mat-header-cell","","width","30%"],["mat-header-cell",""],["type","button",3,"click"],["color","warn",1,"icon"],["mat-header-row",""],["mat-row",""]],template:function(o,i){if(1&o&&(t._UZ(0,"br"),t.TgZ(1,"app-buscador",0),t.NdJ("messageEvent",function(r){return i.clienteseleccionado(r)}),t.qZA(),t.TgZ(2,"mat-card",1),t.TgZ(3,"h3"),t._uU(4,"Datos del Socio/proveedor "),t.qZA(),t.TgZ(5,"mat-card-content"),t.TgZ(6,"div",2),t.TgZ(7,"div",3),t.TgZ(8,"mat-form-field",4),t.TgZ(9,"mat-label"),t._uU(10,"Fecha "),t.TgZ(11,"mat-icon"),t._uU(12,"locked"),t.qZA(),t.qZA(),t._UZ(13,"input",5),t.ALo(14,"date"),t.qZA(),t.qZA(),t.TgZ(15,"div",3),t.TgZ(16,"mat-form-field",6),t.TgZ(17,"mat-label"),t._uU(18,"Nombre"),t.TgZ(19,"mat-icon"),t._uU(20,"locked"),t.qZA(),t.qZA(),t._UZ(21,"input",7),t.qZA(),t.qZA(),t.TgZ(22,"div",8),t.TgZ(23,"mat-form-field",4),t.TgZ(24,"mat-label"),t._uU(25,"RFC socio/proveedor "),t.TgZ(26,"mat-icon"),t._uU(27,"locked"),t.qZA(),t.qZA(),t._UZ(28,"input",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(29,"br"),t.TgZ(30,"mat-card",1),t.TgZ(31,"h3"),t._uU(32,"Ingrese el producto"),t.qZA(),t.TgZ(33,"mat-card-content"),t.TgZ(34,"div",2),t.TgZ(35,"div",3),t.TgZ(36,"mat-form-field",10),t.TgZ(37,"mat-label"),t._uU(38,"Nombre del producto"),t.qZA(),t._UZ(39,"input",11),t.TgZ(40,"mat-autocomplete",null,12),t.YNc(42,O,2,2,"mat-option",13),t.ALo(43,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",3),t.TgZ(45,"mat-form-field",14),t.TgZ(46,"mat-label"),t._uU(47,"Costo por Unidad "),t.TgZ(48,"mat-icon"),t._uU(49,"locked"),t.qZA(),t.qZA(),t._UZ(50,"input",5),t.qZA(),t.qZA(),t.TgZ(51,"div",8),t.TgZ(52,"mat-form-field",14),t.TgZ(53,"mat-label"),t._uU(54,"Seleccionar cantidad"),t.qZA(),t.TgZ(55,"input",15),t.NdJ("ngModelChange",function(r){return i.ordenD.cantidad=r})("change",function(){return i.Subtotal()}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(56,"div",8),t.TgZ(57,"mat-form-field",14),t.TgZ(58,"mat-label"),t._uU(59,"Subtotal "),t.TgZ(60,"mat-icon"),t._uU(61,"locked"),t.qZA(),t.qZA(),t._UZ(62,"input",5),t.qZA(),t.qZA(),t.TgZ(63,"div",16),t.TgZ(64,"div",17),t.TgZ(65,"button",18),t.NdJ("click",function(){return i.agregarordend()}),t._uU(66,"Agregar "),t.TgZ(67,"mat-icon"),t._uU(68,"add"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(69,"br"),t.TgZ(70,"div",2),t.TgZ(71,"div",19),t.TgZ(72,"mat-card"),t.TgZ(73,"h2"),t._uU(74,"Detalles"),t.qZA(),t.TgZ(75,"table",20),t.ynx(76,21),t.YNc(77,$,2,0,"th",22),t.YNc(78,H,2,1,"td",23),t.BQk(),t.ynx(79,24),t.YNc(80,M,2,0,"th",25),t.YNc(81,F,2,1,"td",23),t.BQk(),t.ynx(82,26),t.YNc(83,L,2,0,"th",25),t.YNc(84,z,3,3,"td",23),t.BQk(),t.ynx(85,27),t.YNc(86,E,2,0,"th",22),t.YNc(87,P,2,1,"td",23),t.BQk(),t.ynx(88,28),t.YNc(89,I,2,0,"th",22),t.YNc(90,G,3,3,"td",23),t.BQk(),t.ynx(91,29),t.YNc(92,V,2,0,"th",22),t.YNc(93,X,3,3,"td",23),t.BQk(),t.ynx(94,30),t.YNc(95,W,1,0,"th",31),t.YNc(96,K,4,0,"td",23),t.BQk(),t.YNc(97,tt,1,0,"tr",32),t.YNc(98,et,1,0,"tr",33),t.qZA(),t._UZ(99,"mat-paginator",34),t.TgZ(100,"div",2),t.TgZ(101,"div",3),t.TgZ(102,"mat-form-field",4),t.TgZ(103,"mat-label"),t._uU(104,"Total a pagar "),t.TgZ(105,"mat-icon"),t._uU(106,"locked"),t.qZA(),t.qZA(),t._UZ(107,"input",5),t.ALo(108,"currency"),t.qZA(),t.qZA(),t.TgZ(109,"div",16),t.TgZ(110,"div",35),t.TgZ(111,"button",36),t.NdJ("click",function(){return i.terminarorden()}),t._uU(112,"Guardar orden"),t.TgZ(113,"mat-icon"),t._uU(114,"check"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const a=t.MAs(41);t.xp6(13),t.Q6J("value",t.lcZ(14,16,i.orden.fecha)),t.xp6(8),t.Q6J("value",i.nombreb_p),t.xp6(7),t.Q6J("value",i.orden.rfc),t.xp6(11),t.Q6J("formControl",i.myControl)("matAutocomplete",a),t.xp6(3),t.Q6J("ngForOf",t.lcZ(43,18,i.filteredOptions)),t.xp6(8),t.Q6J("value",i.ordenD.costo),t.xp6(5),t.Q6J("ngModel",i.ordenD.cantidad)("formControl",i.cantidad),t.xp6(7),t.Q6J("value",i.ordenD.importe),t.xp6(3),t.Q6J("disabled",i.estado),t.xp6(10),t.Q6J("dataSource",i.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(22,ot)),t.xp6(8),t.Q6J("value",t.lcZ(108,20,i.total))}},directives:[A.a,g.a8,g.dn,J.Wh,h.KE,h.hX,x.Hw,v.Nt,d.Fj,D.ZL,d.JJ,d.oH,D.XC,s.sg,d.qQ,d.Fd,d.wV,U.lW,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,Z.NW,k.ey,c.ge,c.ev,c.XQ,c.Gk],pipes:[s.uU,s.Ov,s.H9,s.rS],styles:[".mat-azul[_ngcontent-%COMP%]{background-color:#00f;color:#fff}table[_ngcontent-%COMP%]{width:100%;display:block;overflow-x:auto}"]}),e})();const it=["paginator"],at=["paginator2"];function ct(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," N\xfamero de orden "),t.qZA())}function rt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.id_orden," ")}}function lt(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," Socio/proveedor"),t.qZA())}function st(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.socio," ")}}function dt(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," Rfc del proveedor "),t.qZA())}function pt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.rfc," ")}}function mt(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1,"Fecha de la orden"),t.qZA())}function ut(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.fecha)," ")}}function ht(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1," Estatus"),t.qZA())}function _t(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.status,"")}}function ft(e,n){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Ubicaci\xf3n"),t.qZA())}function Zt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.ubicacion,"")}}function gt(e,n){1&e&&t._UZ(0,"th",35)}function Ct(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",33),t.TgZ(1,"a",36),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw().cancelacion(r._id,r.id_orden)}),t.TgZ(2,"button",37),t.TgZ(3,"mat-icon"),t._uU(4,"delete_forever"),t.qZA(),t._uU(5,"Cancelar"),t.qZA(),t.qZA(),t.qZA()}}function Tt(e,n){1&e&&t._UZ(0,"th",38)}function bt(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",33),t.TgZ(1,"a",36),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw().ordendetalle(r.id_orden)}),t.TgZ(2,"button",39),t.TgZ(3,"mat-icon"),t._uU(4,"visibility"),t.qZA(),t._uU(5,"Ver detalles"),t.qZA(),t.qZA(),t.qZA()}}function At(e,n){1&e&&t._UZ(0,"tr",40)}function xt(e,n){1&e&&t._UZ(0,"tr",41)}function vt(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1," # "),t.qZA())}function Ut(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.index;t.xp6(1),t.hij(" ",o+1," ")}}function qt(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1," N\xfamero de orden "),t.qZA())}function Nt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.id_orden," ")}}function yt(e,n){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Producto/Material "),t.qZA())}function Dt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.productos_servicios.descripcion)," ")}}function wt(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1," Cantidad "),t.qZA())}function Bt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.cantidad," ")}}function Yt(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1," Costo "),t.qZA())}function St(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.costo),"")}}function Qt(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1," Subtotal "),t.qZA())}function jt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.importe),"")}}function Rt(e,n){1&e&&t._UZ(0,"tr",40)}function Jt(e,n){1&e&&t._UZ(0,"tr",41)}const w=function(){return[5,10,20]};let kt=(()=>{class e{constructor(o,i,a){this.http=o,this.authService=i,this.servimenu=a,this.filter="",this.myControl=new d.NI(""),this.options=[],this.filterValue="",this.id_b_p="",this.ordenes=[],this.detalles=[],this.total=0,this.bandera=0,this.id_ubicacion="",this.socio="",this.displayedColumns=["id_orden","socio","rfc","fecha","status","ubicacion","recibido","detalles"],this.dataSource=new c.by,this.displayedColumns2=["index","id_orden","productos","cantidad","costo","importe"],this.dataSource2=new c.by,this.messageEvent=new t.vpe}ngOnInit(){this.servimenu.setencabezado("Cancelaci\xf3n de compras"),this.ubicacionusuario(this.authService.usuario.ubicacion)}ordenseleccionado(o){this.ordenes=[],""!==o?this.http.getb_p(o).subscribe(i=>{console.log(i),this.id_b_p=i[0].id_b_p,this.socio=i[0].nombre,this.http.getorden(this.authService.usuario.ubicacion,this.id_b_p).subscribe(a=>{this.ordenes=a,this.dataSource=new c.by(this.ordenes),this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina"})}):(this.dataSource=new c.by,this.bandera=0),this.dataSource2=new c.by,this.bandera=0}cancelacion(o,i){p().fire({title:"Cancelar compra",html:"\xbfEstas seguro de cancelar la orden de compra?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si"}).then(a=>{a.isConfirmed&&(this.http.eliminarorden(o).subscribe(r=>{console.log("orden cancelado")}),this.http.eliminarordenD(i).subscribe(r=>{console.log("detalles cancelados")}),p().fire("Compra cancelada!","La orden de compra fue cancelada correctamente.","success").then(r=>{r.isConfirmed&&(this.dataSource=new c.by,this.bandera=0)}))})}ordendetalle(o){this.total=0,this.http.getordend(o).subscribe(i=>{this.detalles=i,this.dataSource2=new c.by(this.detalles),this.dataSource2.paginator=this.paginator2,this.dataSource2.paginator._intl.itemsPerPageLabel="Filas por pagina";for(const a in i)this.total+=i[a].importe;this.bandera=1})}ubicacionusuario(o){this.http.obtenerubicacion(o).subscribe(a=>{for(const r in a)this.id_ubicacion=a[r].id_ubicacion})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(C),t.Y36(T.e),t.Y36(b.h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-baja"]],viewQuery:function(o,i){if(1&o&&(t.Gf(it,5),t.Gf(at,5)),2&o){let a;t.iGM(a=t.CRH())&&(i.paginator=a.first),t.iGM(a=t.CRH())&&(i.paginator2=a.first)}},outputs:{messageEvent:"messageEvent"},decls:68,vars:14,consts:[[3,"messageEvent"],[1,"row"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id_orden"],["mat-header-cell","","width","15%",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","socio"],["matColumnDef","rfc"],["matColumnDef","fecha"],["mat-header-cell","","width","10%",4,"matHeaderCellDef"],["matColumnDef","status"],["matColumnDef","ubicacion"],["mat-header-cell","","width","20%",4,"matHeaderCellDef"],["matColumnDef","recibido"],["matColumnDef","detalles"],["mat-header-cell","","width","22%",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["paginator","matPaginator"],[1,"example-containere",3,"hidden"],["matColumnDef","index"],["mat-header-cell","","width","12%",4,"matHeaderCellDef"],["matColumnDef","productos"],["mat-header-cell","","width","25%",4,"matHeaderCellDef"],["matColumnDef","cantidad"],["matColumnDef","costo"],["matColumnDef","importe"],["paginator2","matPaginator"],["appearance","fill"],["matInput","","placeholder","","readonly","",3,"value"],["mat-header-cell","","width","15%"],["mat-cell",""],["mat-header-cell","","width","10%"],["mat-header-cell","","width","20%"],["type","button",3,"click"],["mat-raised-button","","color","warn"],["mat-header-cell","","width","22%"],["mat-raised-button","","color","basic"],["mat-header-row",""],["mat-row",""],["mat-header-cell","","width","12%"],["mat-header-cell","","width","25%"]],template:function(o,i){1&o&&(t._UZ(0,"br"),t.TgZ(1,"app-buscador",0),t.NdJ("messageEvent",function(r){return i.ordenseleccionado(r)}),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"mat-card"),t.TgZ(5,"table",3),t.ynx(6,4),t.YNc(7,ct,2,0,"th",5),t.YNc(8,rt,2,1,"td",6),t.BQk(),t.ynx(9,7),t.YNc(10,lt,2,0,"th",5),t.YNc(11,st,2,1,"td",6),t.BQk(),t.ynx(12,8),t.YNc(13,dt,2,0,"th",5),t.YNc(14,pt,2,1,"td",6),t.BQk(),t.ynx(15,9),t.YNc(16,mt,2,0,"th",10),t.YNc(17,ut,3,3,"td",6),t.BQk(),t.ynx(18,11),t.YNc(19,ht,2,0,"th",10),t.YNc(20,_t,2,1,"td",6),t.BQk(),t.ynx(21,12),t.YNc(22,ft,2,0,"th",13),t.YNc(23,Zt,2,1,"td",6),t.BQk(),t.ynx(24,14),t.YNc(25,gt,1,0,"th",13),t.YNc(26,Ct,6,0,"td",6),t.BQk(),t.ynx(27,15),t.YNc(28,Tt,1,0,"th",16),t.YNc(29,bt,6,0,"td",6),t.BQk(),t.YNc(30,At,1,0,"tr",17),t.YNc(31,xt,1,0,"tr",18),t.qZA(),t._UZ(32,"mat-paginator",19,20),t.qZA(),t.qZA(),t.qZA(),t._UZ(34,"br"),t.TgZ(35,"div",1),t.TgZ(36,"div",21),t.TgZ(37,"mat-card"),t.TgZ(38,"h3"),t._uU(39,"Detalles de la orden"),t.qZA(),t.TgZ(40,"table",3),t.ynx(41,22),t.YNc(42,vt,2,0,"th",10),t.YNc(43,Ut,2,1,"td",6),t.BQk(),t.ynx(44,4),t.YNc(45,qt,2,0,"th",23),t.YNc(46,Nt,2,1,"td",6),t.BQk(),t.ynx(47,24),t.YNc(48,yt,2,0,"th",25),t.YNc(49,Dt,3,3,"td",6),t.BQk(),t.ynx(50,26),t.YNc(51,wt,2,0,"th",23),t.YNc(52,Bt,2,1,"td",6),t.BQk(),t.ynx(53,27),t.YNc(54,Yt,2,0,"th",23),t.YNc(55,St,3,3,"td",6),t.BQk(),t.ynx(56,28),t.YNc(57,Qt,2,0,"th",23),t.YNc(58,jt,3,3,"td",6),t.BQk(),t.YNc(59,Rt,1,0,"tr",17),t.YNc(60,Jt,1,0,"tr",18),t.qZA(),t._UZ(61,"mat-paginator",19,29),t.TgZ(63,"mat-form-field",30),t.TgZ(64,"mat-label"),t._uU(65,"Total"),t.qZA(),t._UZ(66,"input",31),t.ALo(67,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(5),t.Q6J("dataSource",i.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(12,w)),t.xp6(4),t.Q6J("hidden",0==i.bandera),t.xp6(4),t.Q6J("dataSource",i.dataSource2),t.xp6(19),t.Q6J("matHeaderRowDef",i.displayedColumns2),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns2),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(13,w)),t.xp6(5),t.Q6J("value",t.lcZ(67,10,i.total)))},directives:[A.a,g.a8,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,Z.NW,h.KE,h.hX,v.Nt,c.ge,c.ev,U.lW,x.Hw,c.XQ,c.Gk],pipes:[s.H9,s.uU,s.rS],styles:["table[_ngcontent-%COMP%]{width:100%;display:block;overflow-x:auto}"]}),e})();const Ot=["paginator"],$t=["paginator2"];function Ht(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," N\xfamero de orden "),t.qZA())}function Mt(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.id_orden," ")}}function Ft(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," Socio/proveedor"),t.qZA())}function Lt(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.socio," ")}}function zt(e,n){1&e&&(t.TgZ(0,"th",35),t._uU(1," Rfc del proveedor "),t.qZA())}function Et(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.rfc," ")}}function Pt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1,"Fecha de la orden"),t.qZA())}function It(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.fecha)," ")}}function Gt(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1," Estatus"),t.qZA())}function Vt(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.status,"")}}function Xt(e,n){1&e&&(t.TgZ(0,"th",37),t._uU(1,"Ubicaci\xf3n"),t.qZA())}function Wt(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.ubicacion,"")}}function Kt(e,n){1&e&&t._UZ(0,"th",37)}function te(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",34),t.TgZ(1,"a",38),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw().recepcion(r.id_orden)}),t.TgZ(2,"button",39),t.TgZ(3,"mat-icon"),t._uU(4,"check"),t.qZA(),t._uU(5,"Compra recibida"),t.qZA(),t.qZA(),t.qZA()}}function ee(e,n){1&e&&t._UZ(0,"th",40)}function oe(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",34),t.TgZ(1,"a",38),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw().ordendetalle(r.id_orden)}),t.TgZ(2,"button",41),t.TgZ(3,"mat-icon"),t._uU(4,"visibility"),t.qZA(),t._uU(5,"Ver detalles"),t.qZA(),t.qZA(),t.qZA()}}function ne(e,n){1&e&&t._UZ(0,"tr",42)}function ie(e,n){1&e&&t._UZ(0,"tr",43)}function ae(e,n){1&e&&(t.TgZ(0,"th",36),t._uU(1," # "),t.qZA())}function ce(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.index;t.xp6(1),t.hij(" ",o+1," ")}}function re(e,n){1&e&&(t.TgZ(0,"th",35),t._uU(1," N\xfamero de orden "),t.qZA())}function le(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.id_orden," ")}}function se(e,n){1&e&&(t.TgZ(0,"th",44),t._uU(1,"Producto/Material "),t.qZA())}function de(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.productos_servicios.descripcion)," ")}}function pe(e,n){1&e&&(t.TgZ(0,"th",35),t._uU(1," Cantidad "),t.qZA())}function me(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.cantidad," ")}}function ue(e,n){1&e&&(t.TgZ(0,"th",35),t._uU(1," Costo "),t.qZA())}function he(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.costo),"")}}function _e(e,n){1&e&&(t.TgZ(0,"th",35),t._uU(1," Subtotal "),t.qZA())}function fe(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o.importe),"")}}function Ze(e,n){1&e&&t._UZ(0,"tr",42)}function ge(e,n){1&e&&t._UZ(0,"tr",43)}const B=function(){return[5,10,20]},Te=[{path:"",children:[{path:"alta",component:nt,data:{Transaccion:"COMPRAS-ALTA"},canActivate:[u.z,m._],canLoad:[u.z,m._]},{path:"recepcion",component:(()=>{class e{constructor(o,i,a){this.http=o,this.authService=i,this.servimenu=a,this.filter="",this.myControl=new d.NI(""),this.options=[],this.filterValue="",this.id_b_p="",this.ordenes=[],this.detalles=[],this.total=0,this.bandera=0,this.id_ubicacion="",this.socio="",this.displayedColumns=["id_orden","socio","rfc","fecha","status","ubicacion","recibido","detalles"],this.dataSource=new c.by,this.displayedColumns2=["index","id_orden","productos","cantidad","costo","importe"],this.dataSource2=new c.by,this.messageEvent=new t.vpe}ngOnInit(){this.servimenu.setencabezado("Recepci\xf3n de compras"),this.ubicacionusuario(this.authService.usuario.ubicacion)}ordenseleccionado(o){this.ordenes=[],""!==o?this.http.getb_p(o).subscribe(i=>{console.log(i),this.id_b_p=i[0].id_b_p,this.socio=i[0].nombre,this.http.getorden(this.authService.usuario.ubicacion,this.id_b_p).subscribe(a=>{this.ordenes=a,this.dataSource.data=this.ordenes,this.dataSource.paginator=this.paginator,this.dataSource.paginator._intl.itemsPerPageLabel="Filas por pagina"})}):(this.dataSource.data=[],this.bandera=0),this.dataSource2.data=[]}recepcion(o){const i={id_orden:o,status:"recibido",fecha_recibido:new Date,recibido_por:this.authService.usuario.nombre};p().fire({title:"Compra finalizada",html:"\xbfLa orden  fue recibida?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si"}).then(a=>{a.isConfirmed&&this.http.actualizarorden(this.id_ubicacion,i).subscribe(r=>{p().fire("Compra finalizada!","Orden de compra recibida.","success").then(_=>{_.isConfirmed&&(this.dataSource=new c.by,this.bandera=0)})},r=>{p().fire({title:"Ups!!",text:"Error al recibir la orden",icon:"success",confirmButtonText:"ok"}),console.log(r)})})}ordendetalle(o){this.total=0,this.http.getordend(o).subscribe(i=>{this.detalles=i,console.log(i),this.dataSource2.data=this.detalles,this.dataSource2.paginator=this.paginator2,this.dataSource2.paginator._intl.itemsPerPageLabel="Filas por pagina";for(const a in i)this.total+=i[a].importe;this.bandera=1})}ubicacionusuario(o){this.http.obtenerubicacion(o).subscribe(a=>{for(const r in a)this.id_ubicacion=a[r].id_ubicacion})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(C),t.Y36(T.e),t.Y36(b.h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-recepcion"]],viewQuery:function(o,i){if(1&o&&(t.Gf(Ot,5),t.Gf($t,5)),2&o){let a;t.iGM(a=t.CRH())&&(i.paginator=a.first),t.iGM(a=t.CRH())&&(i.paginator2=a.first)}},outputs:{messageEvent:"messageEvent"},decls:68,vars:14,consts:[[3,"messageEvent"],[1,"row"],[1,"container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id_orden"],["mat-header-cell","","width","15%",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","socio"],["matColumnDef","rfc"],["mat-header-cell","","width","12%",4,"matHeaderCellDef"],["matColumnDef","fecha"],["mat-header-cell","","width","10%",4,"matHeaderCellDef"],["matColumnDef","status"],["matColumnDef","ubicacion"],["mat-header-cell","","width","20%",4,"matHeaderCellDef"],["matColumnDef","recibido"],["matColumnDef","detalles"],["mat-header-cell","","width","22%",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","label","seleccione",3,"pageSizeOptions"],["paginator","matPaginator"],[1,"example-containere"],[3,"hidden"],["matColumnDef","index"],["matColumnDef","productos"],["mat-header-cell","","width","25%",4,"matHeaderCellDef"],["matColumnDef","cantidad"],["matColumnDef","costo"],["matColumnDef","importe"],["paginator2","matPaginator"],["appearance","fill"],["matInput","","placeholder","","readonly","",3,"value"],["mat-header-cell","","width","15%"],["mat-cell",""],["mat-header-cell","","width","12%"],["mat-header-cell","","width","10%"],["mat-header-cell","","width","20%"],["type","button",3,"click"],["mat-raised-button","","color","verde"],["mat-header-cell","","width","22%"],["mat-raised-button","","color","basic"],["mat-header-row",""],["mat-row",""],["mat-header-cell","","width","25%"]],template:function(o,i){1&o&&(t._UZ(0,"br"),t.TgZ(1,"app-buscador",0),t.NdJ("messageEvent",function(r){return i.ordenseleccionado(r)}),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"mat-card"),t.TgZ(5,"table",3),t.ynx(6,4),t.YNc(7,Ht,2,0,"th",5),t.YNc(8,Mt,2,1,"td",6),t.BQk(),t.ynx(9,7),t.YNc(10,Ft,2,0,"th",5),t.YNc(11,Lt,2,1,"td",6),t.BQk(),t.ynx(12,8),t.YNc(13,zt,2,0,"th",9),t.YNc(14,Et,2,1,"td",6),t.BQk(),t.ynx(15,10),t.YNc(16,Pt,2,0,"th",11),t.YNc(17,It,3,3,"td",6),t.BQk(),t.ynx(18,12),t.YNc(19,Gt,2,0,"th",11),t.YNc(20,Vt,2,1,"td",6),t.BQk(),t.ynx(21,13),t.YNc(22,Xt,2,0,"th",14),t.YNc(23,Wt,2,1,"td",6),t.BQk(),t.ynx(24,15),t.YNc(25,Kt,1,0,"th",14),t.YNc(26,te,6,0,"td",6),t.BQk(),t.ynx(27,16),t.YNc(28,ee,1,0,"th",17),t.YNc(29,oe,6,0,"td",6),t.BQk(),t.YNc(30,ne,1,0,"tr",18),t.YNc(31,ie,1,0,"tr",19),t.qZA(),t._UZ(32,"mat-paginator",20,21),t.qZA(),t.qZA(),t.qZA(),t._UZ(34,"br"),t.TgZ(35,"div",1),t.TgZ(36,"div",22),t.TgZ(37,"mat-card",23),t.TgZ(38,"h3"),t._uU(39,"Detalles de la orden"),t.qZA(),t.TgZ(40,"table",3),t.ynx(41,24),t.YNc(42,ae,2,0,"th",11),t.YNc(43,ce,2,1,"td",6),t.BQk(),t.ynx(44,4),t.YNc(45,re,2,0,"th",9),t.YNc(46,le,2,1,"td",6),t.BQk(),t.ynx(47,25),t.YNc(48,se,2,0,"th",26),t.YNc(49,de,3,3,"td",6),t.BQk(),t.ynx(50,27),t.YNc(51,pe,2,0,"th",9),t.YNc(52,me,2,1,"td",6),t.BQk(),t.ynx(53,28),t.YNc(54,ue,2,0,"th",9),t.YNc(55,he,3,3,"td",6),t.BQk(),t.ynx(56,29),t.YNc(57,_e,2,0,"th",9),t.YNc(58,fe,3,3,"td",6),t.BQk(),t.YNc(59,Ze,1,0,"tr",18),t.YNc(60,ge,1,0,"tr",19),t.qZA(),t._UZ(61,"mat-paginator",20,30),t.TgZ(63,"mat-form-field",31),t.TgZ(64,"mat-label"),t._uU(65,"Total"),t.qZA(),t._UZ(66,"input",32),t.ALo(67,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(5),t.Q6J("dataSource",i.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(12,B)),t.xp6(5),t.Q6J("hidden",0==i.bandera),t.xp6(3),t.Q6J("dataSource",i.dataSource2),t.xp6(19),t.Q6J("matHeaderRowDef",i.displayedColumns2),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns2),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(13,B)),t.xp6(5),t.Q6J("value",t.lcZ(67,10,i.total)))},directives:[A.a,g.a8,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,Z.NW,h.KE,h.hX,v.Nt,c.ge,c.ev,U.lW,x.Hw,c.XQ,c.Gk],pipes:[s.H9,s.uU,s.rS],styles:["table[_ngcontent-%COMP%]{width:100%;display:block;overflow-x:auto}.mat-verde[_ngcontent-%COMP%]{background-color:green;color:#fff}"]}),e})(),data:{Transaccion:"COMPRAS-RECEPCION"},canActivate:[u.z,m._],canLoad:[u.z,m._]},{path:"cancelacion",component:kt,data:{Transaccion:"COMPRAS-CANCELACION"},canActivate:[u.z,m._],canLoad:[u.z,m._]},{path:"**",redirectTo:"/menu/tr"}]}];let be=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[N.Bz.forChild(Te)],N.Bz]}),e})();var Ae=l(5939),xe=l(206),ve=l(6715);let Ue=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,be,xe.q,d.u5,d.UX,Ae.Nh,ve.B_pModule]]}),e})()}}]);