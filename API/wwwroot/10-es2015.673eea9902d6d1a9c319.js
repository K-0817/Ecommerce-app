(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6ANv":function(t,e,n){"use strict";n.r(e),n.d(e,"ShopModule",(function(){return M}));var c=n("PCNd"),i=n("ofXK"),s=n("tyNb");class r{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var o=n("fXoL"),a=n("AytR"),p=n("tk/3"),b=n("lJxs"),u=n("LRne");let d=(()=>{class t{constructor(t){this.http=t,this.baseUrl=a.a.apiUrl,this.products=[],this.brands=[],this.types=[]}getProducts(t){let e=new p.e;return 0!==t.brandId&&(e=e.append("brandId",t.brandId.toString())),0!==t.typeId&&(e=e.append("typeId",t.typeId.toString())),t.search&&(e=e.append("search",t.search)),e=e.append("sort",t.sort),e=e.append("pageIndex",t.pageNumber.toString()),e=e.append("pageSize",t.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:e}).pipe(Object(b.a)(t=>(this.products=t.body.data,t.body)))}getBrands(){return this.brands.length>0?Object(u.a)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe(Object(b.a)(t=>(this.brands=t,t)))}getTypes(){return this.types.length>0?Object(u.a)(this.types):this.http.get(this.baseUrl+"products/types").pipe(Object(b.a)(t=>(this.types=t,t)))}getProduct(t){const e=this.products.find(e=>e.id===t);return e?Object(u.a)(e):this.http.get(this.baseUrl+"products/"+t)}}return t.\u0275fac=function(e){return new(e||t)(o.Wb(p.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,e){if(1&t&&(o.Sb(0,"span"),o.Ac(1," Showing "),o.Sb(2,"strong"),o.Ac(3),o.Rb(),o.Ac(4," of "),o.Sb(5,"strong"),o.Ac(6),o.Rb(),o.Ac(7," Results"),o.Rb()),2&t){const t=o.cc();o.Bb(3),o.Dc(" ",(t.pageNumber-1)*t.pageSize+1," - ",t.pageNumber*t.pageSize>t.totalCount?t.totalCount:t.pageNumber*t.pageSize," "),o.Bb(3),o.Bc(t.totalCount)}}function h(t,e){1&t&&(o.Sb(0,"span"),o.Ac(1," There are "),o.Sb(2,"strong"),o.Ac(3,"0"),o.Rb(),o.Ac(4," results for this filter "),o.Rb())}let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(o.Sb(0,"header"),o.yc(1,l,8,3,"span",0),o.yc(2,h,5,0,"span",0),o.Rb()),2&t&&(o.Bb(1),o.ic("ngIf",e.totalCount&&e.totalCount>0),o.Bb(1),o.ic("ngIf",0===e.totalCount))},directives:[i.m],styles:[""]}),t})();var m=n("3Pt+"),f=n("cAP4");let S=(()=>{class t{constructor(t){this.basketService=t}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(f.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:8,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Nb(2,"img",2),o.Sb(3,"div",3),o.Sb(4,"button",4),o.ac("click",(function(){return e.addItemToBasket()})),o.Rb(),o.Sb(5,"button",5),o.Ac(6," View "),o.Rb(),o.Rb(),o.Rb(),o.Sb(7,"div",6),o.Sb(8,"a",7),o.Sb(9,"h6",8),o.Ac(10),o.Rb(),o.Rb(),o.Sb(11,"span",9),o.Ac(12),o.dc(13,"currency"),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Bb(2),o.jc("src",e.product.pictureUrl,o.uc),o.jc("alt",e.product.name),o.Bb(3),o.kc("routerLink","/shop/",e.product.id,""),o.Bb(3),o.kc("routerLink","/shop/",e.product.id,""),o.Bb(2),o.Bc(e.product.name),o.Bb(2),o.Bc(o.ec(13,6,e.product.price)))},directives:[s.d,s.f],pipes:[i.d],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:hsla(0,0%,100%,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translateX(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translateX(20px)}"]}),t})();var y=n("Lm2G");let v=(()=>{class t{constructor(){this.pageChanged=new o.n}ngOnInit(){}onPagerChanged(t){this.pageChanged.emit(t.page)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize"},outputs:{pageChanged:"pageChanged"},decls:1,vars:3,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","pageChanged"]],template:function(t,e){1&t&&(o.Sb(0,"pagination",0),o.ac("pageChanged",(function(t){return e.onPagerChanged(t)})),o.Rb()),2&t&&o.ic("boundaryLinks",!0)("totalItems",e.totalCount)("itemsPerPage",e.pageSize)},directives:[y.a],styles:[""]}),t})();const P=["search"];function R(t,e){if(1&t&&(o.Sb(0,"option",16),o.Ac(1),o.Rb()),2&t){const t=e.$implicit;o.ic("value",t.value),o.Bb(1),o.Cc(" ",t.name," ")}}function C(t,e){if(1&t){const t=o.Tb();o.Sb(0,"li",17),o.ac("click",(function(){o.sc(t);const n=e.$implicit;return o.cc(2).onBrandSelected(n.id)})),o.Ac(1),o.Rb()}if(2&t){const t=e.$implicit,n=o.cc(2);o.Eb("active",t.id===n.shopParams.brandId),o.ic("value",t.id),o.Bb(1),o.Cc(" ",t.name," ")}}function B(t,e){if(1&t){const t=o.Tb();o.Sb(0,"li",17),o.ac("click",(function(){o.sc(t);const n=e.$implicit;return o.cc(2).onTypeSelected(n.id)})),o.Ac(1),o.Rb()}if(2&t){const t=e.$implicit,n=o.cc(2);o.Eb("active",t.id==n.shopParams.typeId),o.ic("value",t.id),o.Bb(1),o.Cc(" ",t.name," ")}}function k(t,e){if(1&t){const t=o.Tb();o.Qb(0),o.Sb(1,"h5",10),o.Ac(2,"Sort"),o.Rb(),o.Sb(3,"select",11),o.ac("change",(function(e){return o.sc(t),o.cc().onSortSelected(e.target.value)})),o.yc(4,R,2,2,"option",12),o.Rb(),o.Sb(5,"h5",13),o.Ac(6,"Brands"),o.Rb(),o.Sb(7,"ul",14),o.yc(8,C,2,4,"li",15),o.Rb(),o.Sb(9,"h5",13),o.Ac(10,"Types"),o.Rb(),o.Sb(11,"ul",14),o.yc(12,B,2,4,"li",15),o.Rb(),o.Pb()}if(2&t){const t=o.cc();o.Bb(4),o.ic("ngForOf",t.sortOptions),o.Bb(4),o.ic("ngForOf",t.brands),o.Bb(4),o.ic("ngForOf",t.types)}}function I(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",18),o.Sb(1,"input",19,20),o.ac("keyup.enter",(function(){return o.sc(t),o.cc().onSearch()})),o.Rb(),o.Sb(3,"button",21),o.ac("click",(function(){return o.sc(t),o.cc().onSearch()})),o.Ac(4,"Search"),o.Rb(),o.Sb(5,"button",22),o.ac("click",(function(){return o.sc(t),o.cc().onReset()})),o.Ac(6,"Reset"),o.Rb(),o.Rb()}}function w(t,e){if(1&t&&(o.Sb(0,"div",23),o.Nb(1,"app-product-item",24),o.Rb()),2&t){const t=e.$implicit;o.Bb(1),o.ic("product",t)}}function A(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",25),o.Sb(1,"app-pager",26),o.ac("pageChanged",(function(e){return o.sc(t),o.cc().onPageChanged(e)})),o.Rb(),o.Rb()}if(2&t){const t=o.cc();o.Bb(1),o.ic("pageSize",t.shopParams.pageSize)("totalCount",t.totalCount)}}let O=(()=>{class t{constructor(t){this.shopService=t,this.shopParams=new r,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}]}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe(t=>{this.products=t.data,this.shopParams.pageNumber=t.pageIndex,this.shopParams.pageSize=t.pageSize,this.totalCount=t.count},t=>{console.log(t)})}getBrands(){this.shopService.getBrands().subscribe(t=>{this.brands=[{id:0,name:"All"},...t]},t=>{console.log(t)})}getTypes(){this.shopService.getTypes().subscribe(t=>{this.types=[{id:0,name:"All"},...t]},t=>{console.log(t)})}onBrandSelected(t){this.shopParams.brandId=t,this.shopParams.pageNumber=1,this.getProducts()}onTypeSelected(t){this.shopParams.typeId=t,this.shopParams.pageNumber=1,this.getProducts()}onSortSelected(t){this.shopParams.sort=t,this.getProducts()}onPageChanged(t){this.shopParams.pageNumber!==t&&(this.shopParams.pageNumber=t,this.getProducts())}onSearch(){this.shopParams.search=this.searchTerm.nativeElement.value,this.shopParams.pageNumber=1,this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new r,this.getProducts()}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(d))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-shop"]],viewQuery:function(t,e){var n;1&t&&o.Fc(P,!0),2&t&&o.qc(n=o.bc())&&(e.searchTerm=n.first)},decls:11,vars:7,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageNumber","pageSize"],["class","form-inline",4,"ngIf"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ml-3","mt-4","mb-3"],[1,"custom-select","mb-3",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"text-warning","ml-3"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"value"],[1,"list-group-item",3,"value","click"],[1,"form-inline"],["type","text","placeholder","Search",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","my-2","ml-2",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","totalCount","pageChanged"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"section",2),o.yc(3,k,13,3,"ng-container",3),o.Rb(),o.Sb(4,"section",4),o.Sb(5,"div",5),o.Nb(6,"app-paging-header",6),o.yc(7,I,7,0,"div",7),o.Rb(),o.Sb(8,"div",1),o.yc(9,w,2,1,"div",8),o.Rb(),o.yc(10,A,2,2,"div",9),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Bb(3),o.ic("ngIf",e.brands&&e.types),o.Bb(3),o.ic("totalCount",e.totalCount)("pageNumber",e.shopParams.pageNumber)("pageSize",e.shopParams.pageSize),o.Bb(1),o.ic("ngIf",e.products),o.Bb(2),o.ic("ngForOf",e.products),o.Bb(1),o.ic("ngIf",e.totalCount>0))},directives:[i.m,g,i.l,m.l,m.p,S,v],styles:[""]}),t})();var x=n("tc9g");function T(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",2),o.Sb(1,"div",3),o.Nb(2,"img",4),o.Rb(),o.Sb(3,"div",3),o.Sb(4,"h3"),o.Ac(5),o.Rb(),o.Sb(6,"p"),o.Ac(7),o.dc(8,"currency"),o.Rb(),o.Sb(9,"div",5),o.Sb(10,"i",6),o.ac("click",(function(){return o.sc(t),o.cc().decrementQuantity()})),o.Rb(),o.Sb(11,"span",7),o.Ac(12),o.Rb(),o.Sb(13,"i",8),o.ac("click",(function(){return o.sc(t),o.cc().incrementQuantity()})),o.Rb(),o.Sb(14,"button",9),o.ac("click",(function(){return o.sc(t),o.cc().addItemToBasket()})),o.Ac(15," Add to Cart "),o.Rb(),o.Rb(),o.Rb(),o.Sb(16,"div",10),o.Sb(17,"div",11),o.Sb(18,"h4"),o.Ac(19,"Description"),o.Rb(),o.Sb(20,"p"),o.Ac(21),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.cc();o.Bb(2),o.jc("src",t.product.pictureUrl,o.uc),o.jc("alt",t.product.name),o.Bb(3),o.Bc(t.product.name),o.Bb(2),o.Bc(o.ec(8,6,t.product.price)),o.Bb(5),o.Bc(t.quantity),o.Bb(9),o.Bc(t.product.description)}}const z=[{path:"",component:O},{path:":id",component:(()=>{class t{constructor(t,e,n,c){this.shopService=t,this.route=e,this.breadcrumbService=n,this.basketService=c,this.quantity=1,this.breadcrumbService.set("@productDetails","")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){this.shopService.getProduct(+this.route.snapshot.paramMap.get("id")).subscribe(t=>{this.product=t,this.breadcrumbService.set("@productDetails",t.name)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(d),o.Mb(s.a),o.Mb(x.c),o.Mb(f.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ml-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ml-3"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.yc(1,T,22,8,"div",1),o.Rb()),2&t&&(o.Bb(1),o.ic("ngIf",e.product))},directives:[i.m],pipes:[i.d],styles:[""]}),t})(),data:{breadcrumb:{alias:"productDetails"}}}];let N=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[s.g.forChild(z)],s.g]}),t})(),M=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[i.c,N,c.a]]}),t})()}}]);