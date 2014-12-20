"use strict";angular.module("kamaydApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("home",{url:"/",controller:"HomeCtrl",templateUrl:"views/main.html"}).state("skills",{url:"/skills",params:{selected:{value:"Angular JS"}},controller:"SkillsCtrl",templateUrl:"views/skills.html"}).state("projects",{url:"/projects",params:{selected:{value:"WordWatch v5"}},controller:"ProjectsCtrl",templateUrl:"views/projects.html"}).state("about",{url:"/about",templateUrl:"views/about.html"}),b.otherwise("/")}]),angular.module("kamaydApp").factory("data",function(){function a(a){return moment(a,"DD-MM-YYYY")}function b(a,b){this.className=a,this.url=b}function c(a,b){this.name=a,this.skills=b;var c=this;_(b).forEach(function(a){a.changeCategory(c)})}function d(a,b,c,d,e,f,g,h,i){this.name=a,this.shortName=b,this.location=c,this.startDate=d,this.endDate=e,this.role=f,this.url=g,this.socialLinks=h;var j=this;this.projects=i,_(i).forEach(function(a){a.setCompany(j)})}function e(a,b,c,d){this.name=a,this.url=b,this.info=c,this.weapon=d||!1,this.projects=[],this.category=this.emptyCategory,_.contains(this.all,this)||this.all.push(this)}function f(a,b,c,d,e,f){this.name=a,this.skills=b,this.startDate=c,this.members=d||[],this.description=e,this.url=f,this.company=this.emptyCompany;var g=this;_(b).forEach(function(a){a.addProject(g)}),_.contains(this.all,this)||this.all.push(this)}function g(a,b,c,d){this.name=a,this.title=b,this.shortName=c||"person",this.linkedInURL=d}e.prototype={emptyCategory:new c("",[]),all:[],addProject:function(a){_.contains(this.projects,a)||this.projects.push(a)},changeCategory:function(a){this.category=a}},f.prototype={emptyCompany:new d("","","",null,null),all:[],setCompany:function(a){this.company=a}};var h=new e("AngularJS","https://angularjs.org/","Angular is what HTML would have been had it been designed for applications",!0),i=new e("Grunt","http://gruntjs.com/","The JavaScript Task Runner",!0),j=new e("Bower","http://bower.io/","The Package manager for the front-end.",!0),k=new e("Sass","http://sass-lang.com/","A CSS extension language.",!0),l=new e("Npm","https://www.npmjs.com/","The Package manager for JavaScript",!0),m=new e("NancyFx","http://nancyfx.org/","Lightweight, low-ceremony, framework for building HTTP based services on .Net and Mono.",!0),n=new e("ASP.NET MVC","http://www.asp.net/mvc","MVC WEB framework.",!0),o=new e("Postgres","http://www.postgresql.org/","A Powerful, open source object-relational database system.",!0),p=new e("Redis","http://redis.io/","It is often referred to as a data structure server.",!0),q=new e("SQL","http://www.tsql.info/","In all the flavors (TSQL, PL/SQL & MySQL)"),r=new e("SVN","http://subversion.apache.org/","A version control system."),s=new e("GIT","http://git-scm.com/","A Distributed version control system.",!0),t=new e("WPF","http://msdn.microsoft.com/en-us/library/aa970268(v=vs.110).aspx","Windows Presentation Foundation is a .Net presentation system for building Windows applications."),u=new g("Miguel Gutierrez Kamayd","Senior Software Developer","migue","https://www.linkedin.com/in/miguelgutierrezkamayd"),v=new g("Catherine Keble","Lead Systems Tester","catherine","https://www.linkedin.com/pub/catherine-keble/0/747/615"),w=new g("Garth Hinkel","Software Development Manager","garth","https://www.linkedin.com/in/garthhinkel"),x=new g("Dan Barua","Lead Developer","dan","https://www.linkedin.com/pub/dan-barua/30/442/89"),y=new g("Ahmed Yaslem","Systems Tester","ahmed","https://www.linkedin.com/in/ayaslem"),z=new g("Thomas Mutton","Software Developer","tom","https://www.linkedin.com/in/tmutton1"),A=new g("Rohan Mohindra","Inside Pre-Sales Consultant","ro","https://www.linkedin.com/pub/rohan-mohindra/37/7a9/890"),B=new g("Simon Bill","Lead Developer","simon","https://www.linkedin.com/pub/simon-bill/12/6b/b92"),C=[new f("WordWatch v5",[h,i,j,l,k,m,o,s],a("1-3-2014"),[u,w,B,x,z,v,y],"Latest digital call recording platform from BSL"),new f("Digivoice",[h,p,s],a("1-11-2012"),[u,w,x,v],"This digital call recording platform provides an objective record of inbound and outbound phone activity which can be used to develop your team’s telephone communication skills.  It helps to identify areas where there is a clear training or coaching need as well as assessing the effectiveness of the system as a whole.","https://www.digivoice.co.uk"),new f("CODES",[n,t,q,r],a("1-10-2012"),[u,v],"Tailored recording applications relevant to the police and associated law enforcement agencies, Business Systems have developed the next generation of interview and evidence recording technology, incorporating digital audio and video - suitable for those organisations which require secure and accurate evidence as part of their interview process."),new f("Callcraft",[q,r],a("1-1-2013"),[u,w,x,A,v],"OPEX Callcraft provides hosted telephony applications for general businesses and contact centres thereby relieving you of the need to install and maintain expensive capital equipment on your own premises.","http://www.opexhosting.co.uk/")],D=[new c("Client Side",[h,i,j,k,l]),new c("Server Side",[m,n]),new c("Data Base",[o,p,q]),new c("Windows Applications",[t]),new c("Version control",[s,r])],E=[new d("Business Systems","BSL","London, United Kingdom",a("19-03-2013"),a("2-01-2015"),"Senior Software Developer","http://www.businesssystemsuk.co.uk/",[new b("si-linkedin","https://www.linkedin.com/company/business-systems-uk-ltd"),new b("si-twitter","https://twitter.com/BSLHQ"),new b("si-facebook","https://www.facebook.com/businessystemsuk")],C)],F={getSkills:function(){return e.prototype.all},getProjects:function(){return f.prototype.all},getCategories:function(){return D},getCompanies:function(){return E},findSkill:function(a){return _.find(this.getSkills(),{name:a})},findProject:function(a){return _.find(this.getProjects(),{name:a})}};return F}),angular.module("kamaydApp").controller("HomeCtrl",["$scope","data",function(a,b){a.companies=b.getCompanies(),a.skills=b.getSkills()}]),angular.module("kamaydApp").controller("SkillsCtrl",["$scope","data","$stateParams",function(a,b,c){a.categories=b.getCategories(),a.selectedSkill=b.findSkill(c.selected)||a.categories[0].skills[0],a.filter={onlyWeapons:a.selectedSkill.weapon},a.selectSkill=function(b){a.selectedSkill=a.selectedSkill===b?null:b},a.skillFilter=function(b){return a.filter.onlyWeapons?b.weapon:!0}}]),angular.module("kamaydApp").controller("ProjectsCtrl",["$scope","data","$stateParams",function(a,b,c){a.projects=b.getProjects(),a.selectedProject=b.findProject(c.selected)||a.projects[0],a.selectProject=function(b){a.selectedProject=a.selectedProject===b?null:b}}]);