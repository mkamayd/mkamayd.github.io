"use strict";angular.module("kamaydApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router","ui.select"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("home",{url:"/",controller:"HomeCtrl",templateUrl:"views/main.html"}).state("skills",{url:"/skills",params:{selected:{value:"Angular JS"}},controller:"SkillsCtrl",templateUrl:"views/skills.html"}).state("experience",{url:"/experience",params:{selected:{value:"WordWatch v5"}},controller:"ExperienceCtrl",templateUrl:"views/experience.html"}).state("recomendations",{url:"/recomendations",controller:"RecomendationsCtrl",templateUrl:"views/recomendations.html"}).state("about",{url:"/about",templateUrl:"views/about.html"}),b.otherwise("/")}]),angular.module("kamaydApp").factory("data",function(){function a(a){return a?moment(a,"DD-MM-YYYY"):moment()}function b(a,b){this.className=a,this.url=b}function c(a,b){this.name=a,this.skills=b;var c=this;_(b).forEach(function(a){a.changeCategory(c)})}function d(a,b,c,d,e,f,g,h,i){this.name=a,this.shortName=b,this.location=c,this.startDate=d,this.endDate=e,this.url=f,this.socialLinks=g;var j=this;this.projects=h,this.team=i||[],_(h).forEach(function(a){a.setCompany(j)})}function e(a,b,c,d,e){this.name=a,this.url=b,this.info=c,this.weapon=d||!1,this.projects=[],this.category=this.emptyCategory,this.shortName=e||a,_.contains(this.all,this)||this.all.push(this)}function f(a,b,c,d,e,f){this.name=a,this.skills=b,this.startDate=c,this.members=d||[],this.description=e,this.url=f,this.company=this.emptyCompany;var g=this;_(b).forEach(function(a){a.addProject(g)}),_.contains(this.all,this)||this.all.push(this)}function g(a,b,c){this.name=a,this.shortName=b||"person",this.linkedInURL=c,_.contains(this.all,this)||this.all.push(this)}function h(a,b){_.defaults(this,a),this.position=b}function i(a,b,c){this.location=a,this.startDate=b,this.endDate=c}function j(a,b,c){this.member=a,this.company=b,this.text=c}function k(a,b,c,d,e,f){this.name=a,this.location=b,this.startDate=c,this.endDate=d,this.info=e,this.socialLinks=f||[]}e.prototype={emptyCategory:new c("",[]),all:[],addProject:function(a){_.contains(this.projects,a)||this.projects.push(a)},changeCategory:function(a){this.category=a}},f.prototype={emptyCompany:new d("","","",null,null),all:[],setCompany:function(a){this.company=a}},g.prototype={all:[]};var l=new e("AngularJS","https://angularjs.org/","Angular is what HTML would have been had it been designed for applications",!0),m=new e("Grunt","http://gruntjs.com/","The JavaScript Task Runner",!0),n=new e("Bower","http://bower.io/","The Package manager for the front-end.",!0),o=new e("Sass","http://sass-lang.com/","A CSS extension language.",!0),p=new e("Npm","https://www.npmjs.com/","The Package manager for JavaScript",!0),q=new e("NancyFx","http://nancyfx.org/","Lightweight, low-ceremony, framework for building HTTP based services on .Net and Mono.",!0),r=new e("ASP.NET MVC","http://www.asp.net/mvc","MVC WEB framework.",!0,"mvc"),s=new e("Postgres","http://www.postgresql.org/","A Powerful, open source object-relational database system.",!0),t=new e("Redis","http://redis.io/","It is often referred to as a data structure server.",!0),u=new e("SQL","http://www.tsql.info/","In all the flavors (TSQL, PL/SQL & MySQL)"),v=new e("EntityFramework","http://www.asp.net/entity-framework","it's an object-relational mapper that enables .NET developers to work with relational data using domain-specific objects",!0),w=new e("SVN","http://subversion.apache.org/","A version control system."),x=new e("GIT","http://git-scm.com/","A Distributed version control system.",!0),y=new e("WPF","http://msdn.microsoft.com/en-us/library/aa970268(v=vs.110).aspx","Windows Presentation Foundation is a .Net presentation system for building Windows applications."),z=new g("Miguel Gutierrez Kamayd","migue","https://www.linkedin.com/in/miguelgutierrezkamayd"),A=new g("Catherine Keble","catherine","https://www.linkedin.com/pub/catherine-keble/0/747/615"),B=new g("Garth Hinkel","garth","https://www.linkedin.com/in/garthhinkel"),C=new g("Dan Barua","dan","https://www.linkedin.com/pub/dan-barua/30/442/89"),D=new g("Ahmed Yaslem","ahmed","https://www.linkedin.com/in/ayaslem"),E=new g("Thomas Mutton","tom","https://www.linkedin.com/in/tmutton1"),F=new g("Rohan Mohindra","ro","https://www.linkedin.com/pub/rohan-mohindra/37/7a9/890"),G=new g("Simon Bill","simon","https://www.linkedin.com/pub/simon-bill/12/6b/b92"),H=new h(z,"Senior Software Developer"),I=new h(z,"Senior Web Developer Consultant"),J=new h(z,"Software Developer"),K=new h(A,"Lead Systems Tester"),L=new h(B,"Software Development Manager"),M=new h(C,"Lead Developer"),N=new h(D,"Systems Tester"),O=new h(E,"Jr Software Developer"),P=new h(F,"Inside Pre-Sales Consultant"),Q=new h(G,"Lead Developer"),R=[new f("WordWatch v5",[l,m,n,p,o,q,s,x],a("1-3-2014"),[H,L,Q,M,O,K,N],"Latest digital call recording platform from BSL"),new f("Digivoice",[l,t,x],a("1-11-2012"),[H,L,M,K],"This digital call recording platform provides an objective record of inbound and outbound phone activity which can be used to develop your team’s telephone communication skills.  It helps to identify areas where there is a clear training or coaching need as well as assessing the effectiveness of the system as a whole.","https://www.digivoice.co.uk"),new f("CODES",[r,y,u,w],a("1-10-2012"),[H,L,K],"CODES is an interview recording product incorporating audio and video recording used by organisations conducting investigative interviews for evidence gathering. In the world of law enforcement, commercial investigations and disciplinary hearings audio&video recordings provide an accurate and impartial record to benefit all parties."),new f("Callcraft",[u,w],a("1-1-2013"),[H,L,M,P,K],"OPEX Callcraft provides hosted telephony applications for general businesses and contact centres thereby relieving you of the need to install and maintain expensive capital equipment on your own premises.","http://www.opexhosting.co.uk/")],S=[new f("Galaxy Plus",[y,u,w],a("1-09-2010"),[J]," A system that provides centralized information obtained from different physiological parameters monitors in an intensive-care unit. This project focuses on the program that is running on a PC showing all the data and alarms obtained from each physiological parameters monitor in real time."),new f("Continuous Monitoring of ECG signal",[r,y,u,w],a("1-05-2011"),[J],"A system for monitoring the electrocardiogram signal of a patient, while he performs normal life activities in order to make an accurate diagnosis. It consists of a device that captures ECG signal directly from the patient and sends it to his smartphone. The application on the phone can show that data like in an ECG graph paper, classify the signal and sends it to a server. It also has a website in which the obtained signal is analyzed by medical specialists who can diagnose and treat the patient by sending information back to his smartphone and a desktop application where the data in the smartphone can be upload and analyzed without the need of ever be send to the server mentioned before.")],T=[new c("Client Side",[l,m,n,o,p]),new c("Server Side",[q,r]),new c("Data Base",[s,t,u]),new c("ORM",[v]),new c("Windows Applications",[y]),new c("Version control",[x,w])],U=new d("Business Systems","BSL","London, United Kingdom",a("19-03-2013"),a("2-01-2015"),"http://www.businesssystemsuk.co.uk/",[new b("si-linkedin","https://www.linkedin.com/company/business-systems-uk-ltd"),new b("si-twitter","https://twitter.com/BSLHQ"),new b("si-facebook","https://www.facebook.com/businessystemsuk")],R,[H,K,L,M,N,O,P,Q]),V=new d("Central Institute of Digital Research","ICID","Havana, Cuba",a("1-09-2010"),a("1-09-2012"),"http://www.ecured.cu/index.php/Instituto_Central_de_Investigaci%C3%B3n_Digital",[],S,[J]),W=new d("Carnival Cruise Lines","Carnival","Miami, U.S.A",a("27-07-2015"),a(),"http://www.carnival.com/",[],[],[I]),X=[W,U,V],Y=new i("Havana, Cuba",a("1-09-2005"),a("5-07-2010")),Z=[new j(K,U,"I have worked with Miguel in the Development Team at Business Systems (UK) ltd for the past couple of years. Miguel is a resourceful and competent Senior Developer. He has worked on technically demanding projects and has demonstrated that he is capable of meeting and overcoming challenges that he faced. Miguel is an easily approachable, knowledgeable Senior Developer and he is always ready to help others. He is very dedicated and hard-working. His good work is always well recognized. It would be a pleasure to work with Miguel again in the future and I have no hesitation in recommending Miguel to potential employers."),new j(L,U,"Miguel is a quick learner. He has a strong computer science background, and easily extends this to learn new technologies. He has worked full stack, but with a leaning towards UI (via AngularJS). Miguel is a productive, valued member of our team and is willing to get his hands dirty for the teams benefit.")],$=[new k("Mark Rendle's Single Page Applications with Angular JS & .NET","London, UK",a("2-10-2013"),a("5-10-2013"),"TDD, Angular JS, Typescript & .Net workshop",[new b("si-linkedin","https://www.linkedin.com/in/markrendle"),new b("si-twitter","https://twitter.com/markrendle"),new b("si-github","https://github.com/markrendle")])],aa={getSkills:function(){return e.prototype.all},getProjects:function(){return f.prototype.all},getCategories:function(){return T},getCompanies:function(){return X},getPersons:function(){return g.prototype.all},findSkill:function(a){return _.find(this.getSkills(),{name:a})},findProject:function(a){return _.find(this.getProjects(),{name:a})},getEducation:function(){return Y},getRecomendations:function(){return Z},getCourses:function(){return $}};return aa}),angular.module("kamaydApp").controller("HomeCtrl",["$scope","data","$state",function(a,b,c){a.skills=b.getSkills(),a.uni=b.getEducation(),a.courses=b.getCourses(),a.selected={skill:null},a.navigate=function(a){c.go("skills",{selected:a.name})}}]),angular.module("kamaydApp").controller("SkillsCtrl",["$scope","data","$stateParams",function(a,b,c){a.categories=b.getCategories(),a.skills=b.getSkills(),a.selected={skill:b.findSkill(c.selected)||a.categories[0].skills[0]},a.filter={onlyWeapons:a.selected.skill.weapon},a.selectSkill=function(b){a.selected.skill===b?a.selected.skill=null:a.selected.skill=b},a.skillFilter=function(b){return a.filter.onlyWeapons?b.weapon:!0},a.$watch("filter.onlyWeapons",function(b){b&&a.selected.skill&&!a.selected.skill.weapon&&(a.selected.skill=null)})}]),angular.module("kamaydApp").controller("ExperienceCtrl",["$scope","data","$stateParams",function(a,b,c){a.companies=b.getCompanies(),a.selectedProject=b.findProject(c.selected),a.selectProject=function(b){a.selectedProject===b?a.selectedProject=null:a.selectedProject=b}}]),angular.module("kamaydApp").controller("RecomendationsCtrl",["$scope","data",function(a,b){a.recomendations=b.getRecomendations()}]),angular.module("kamaydApp").directive("mgkInterval",["$interval",function(a){return{scope:{startDate:"=",endDate:"=?"},template:'<div><small ng-show="showDates">{{startDate.format("MMMM  YYYY")}} - {{endDate.format("MMMM  YYYY")}}</small><em ng-hide="showDates">{{interval}}</em></div>',restrict:"E",link:function(b,c){var d;angular.isUndefined(b.endDate)&&(b.endDate=moment()),b.showDates=!0,b.interval=moment.duration(b.endDate-b.startDate).humanize(),d=a(function(){b.showDates=!b.showDates},5e3),c.on("$destroy",function(){a.cancel(d)})}}}]);