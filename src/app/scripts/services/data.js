'use strict';
/* globals _, moment*/

angular.module('kamaydApp')
    .factory('data', function data() {
        function m(date){
            return moment(date, 'DD-MM-YYYY');
        }
        function ImgLink(className, url){
            this.className = className;
            this.url = url;
        }
        function Category(name, skills){
            this.name = name;
            this.skills = skills;
            var thisCategory = this;
            _(skills).forEach(function(skill) {
                    skill.changeCategory(thisCategory);
                }
            );
        }
        function Company(name, shortName, location, startDate, endDate, role, url, socialLinks, projects, team){
            this.name = name;
            this.shortName = shortName;
            this.location = location;
            this.startDate = startDate;
            this.endDate = endDate;
            this.role = role;
            this.url = url;
            this.socialLinks = socialLinks;
            var thisCompany = this;
            this.projects = projects;
            this.team = team || [];
            _(projects).forEach(function(project) {
                    project.setCompany(thisCompany);
                }
            );
        }
        function Skill(name, url, info, isWeaponOfChoice, shortName){
            this.name = name;
            this.url = url;
            this.info = info;
            this.weapon = isWeaponOfChoice || false;
            this.projects = [];
            this.category = this.emptyCategory;
            this.shortName = shortName || name;
            if(!_.contains(this.all, this))
            {
                this.all.push(this);
            }
        }
        Skill.prototype = {
            emptyCategory : new Category('', []),
            all:[],
            addProject: function(project)
            {
                if(!_.contains(this.projects, project))
                {
                    this.projects.push(project);
                }
            },
            changeCategory: function(category)
            {
                this.category = category;
            }
        };

        function Project(name, skills, startDate, members, description, url){
            this.name = name;
            this.skills = skills;
            this.startDate = startDate;
            this.members = members || [];
            this.description = description;
            this.url = url;
            this.company = this.emptyCompany;

            //team members and company
            var thisProject = this;
            _(skills).forEach(function(skill) {
                    skill.addProject(thisProject);
                }
            );
            if(!_.contains(this.all, this))
            {
                this.all.push(this);
            }
        }
        Project.prototype = {
            emptyCompany : new Company('', '', '', null, null),
            all:[],
            setCompany: function(company)
            {
                this.company = company;
            }
        };

        function Person(name, title , shortName, linkedInURL){
            this.name = name;
            this.title = title;
            this.shortName = shortName || 'person';
            this.linkedInURL = linkedInURL;
            if(!_.contains(this.all, this))
            {
                this.all.push(this);
            }
        }
        Person.prototype = {
            all:[]
        };

        function Education(location, startDate, endDate) {
            this.location = location;
            this.startDate = startDate;
            this.endDate = endDate;
        }

        function Recomendation(person, company, text) {
            this.person = person;
            this.company = company;
            this.text = text;
        }

        function Course(name, location, startDate, endDate, info, socialLinks) {
            this.name = name;
            this.location = location;
            this.startDate = startDate;
            this.endDate = endDate;
            this.info = info;
            this.socialLinks = socialLinks || [];
        }

        //skills
        var angular = new Skill('AngularJS', 'https://angularjs.org/', 'Angular is what HTML would have been had it been designed for applications', true),
            grunt = new Skill('Grunt', 'http://gruntjs.com/', 'The JavaScript Task Runner' , true),
            bower = new Skill('Bower', 'http://bower.io/', 'The Package manager for the front-end.' , true),
            sass = new Skill('Sass', 'http://sass-lang.com/', 'A CSS extension language.' , true),
            npm = new Skill('Npm', 'https://www.npmjs.com/', 'The Package manager for JavaScript', true),

            nancy  = new Skill('NancyFx', 'http://nancyfx.org/', 'Lightweight, low-ceremony, framework for building HTTP based services on .Net and Mono.', true),
            aspnet = new Skill('ASP.NET MVC', 'http://www.asp.net/mvc', 'MVC WEB framework.', true, 'mvc'),

            postgres = new Skill('Postgres', 'http://www.postgresql.org/', 'A Powerful, open source object-relational database system.', true),
            redis = new Skill('Redis', 'http://redis.io/', 'It is often referred to as a data structure server.', true),
            sql = new Skill('SQL', 'http://www.tsql.info/', 'In all the flavors (TSQL, PL/SQL & MySQL)'),

            entityFramework = new Skill('EntityFramework', 'http://www.asp.net/entity-framework', 'it\'s an object-relational mapper that enables .NET developers to work with relational data using domain-specific objects', true),

            svn = new Skill('SVN', 'http://subversion.apache.org/', 'A version control system.'),
            git = new Skill('GIT', 'http://git-scm.com/', 'A Distributed version control system.', true),

            wpf = new Skill('WPF', 'http://msdn.microsoft.com/en-us/library/aa970268(v=vs.110).aspx','Windows Presentation Foundation is a .Net presentation system for building Windows applications.');
        //members
        var miguel = new Person('Miguel Gutierrez Kamayd', 'Senior Software Developer', 'migue' , 'https://www.linkedin.com/in/miguelgutierrezkamayd'),
            catherine = new Person('Catherine Keble', 'Lead Systems Tester', 'catherine', 'https://www.linkedin.com/pub/catherine-keble/0/747/615'),
            garth = new Person('Garth Hinkel', 'Software Development Manager', 'garth', 'https://www.linkedin.com/in/garthhinkel'),
            dan = new Person('Dan Barua', 'Lead Developer', 'dan', 'https://www.linkedin.com/pub/dan-barua/30/442/89'),
            ahmed = new Person('Ahmed Yaslem', 'Systems Tester', 'ahmed', 'https://www.linkedin.com/in/ayaslem'),
            tom = new Person('Thomas Mutton', 'Software Developer', 'tom', 'https://www.linkedin.com/in/tmutton1'),
            ro = new Person('Rohan Mohindra', 'Inside Pre-Sales Consultant', 'ro', 'https://www.linkedin.com/pub/rohan-mohindra/37/7a9/890'),
            simon = new Person('Simon Bill', 'Lead Developer', 'simon', 'https://www.linkedin.com/pub/simon-bill/12/6b/b92');
        //projects
        var projectsBSL = [
            new Project('WordWatch v5', [angular, grunt, bower, npm, sass, nancy, postgres, git], m('1-3-2014'), [miguel, garth, simon, dan, tom, catherine, ahmed], 'Latest digital call recording platform from BSL'),
            new Project('Digivoice', [angular, redis, git], m('1-11-2012'), [miguel, garth, dan, catherine], 'This digital call recording platform provides an objective record of inbound and outbound phone activity which can be used to develop your team’s telephone communication skills.  It helps to identify areas where there is a clear training or coaching need as well as assessing the effectiveness of the system as a whole.','https://www.digivoice.co.uk'),
            new Project('CODES', [aspnet, wpf, sql, svn], m('1-10-2012'), [miguel, garth, catherine], 'CODES is an interview recording product incorporating audio and video recording used by organisations conducting investigative interviews for evidence gathering. In the world of law enforcement, commercial investigations and disciplinary hearings audio&video recordings provide an accurate and impartial record to benefit all parties.'),
            new Project('Callcraft', [sql, svn], m('1-1-2013'), [miguel, garth, dan, ro, catherine], 'OPEX Callcraft provides hosted telephony applications for general businesses and contact centres thereby relieving you of the need to install and maintain expensive capital equipment on your own premises.','http://www.opexhosting.co.uk/')
        ];
        var projectsICID = [
         new Project('Galaxy Plus', [ wpf, sql, svn], m('1-09-2010'), [miguel], ' A system that provides centralized information obtained from different physiological parameters monitors in an intensive-care unit. This project focuses on the program that is running on a PC showing all the data and alarms obtained from each physiological parameters monitor in real time.'),
         new Project('Continuous Monitoring of ECG signal', [aspnet, wpf, sql, svn], m('1-05-2011'), [miguel], 'A system for monitoring the electrocardiogram signal of a patient, while he performs normal life activities in order to make an accurate diagnosis. It consists of a device that captures ECG signal directly from the patient and sends it to his smartphone. The application on the phone can show that data like in an ECG graph paper, classify the signal and sends it to a server. It also has a website in which the obtained signal is analyzed by medical specialists who can diagnose and treat the patient by sending information back to his smartphone and a desktop application where the data in the smartphone can be upload and analyzed without the need of ever be send to the server mentioned before.')
        ];
        //categories
        var categories = [
            new Category('Client Side', [angular, grunt, bower, sass, npm]),
            new Category('Server Side', [nancy, aspnet]),
            new Category('Data Base', [postgres, redis, sql]),
            new Category('ORM', [entityFramework]),
            new Category('Windows Applications', [wpf]),
            new Category('Version control', [git, svn])
        ];
        //companies
        var bsl = new Company('Business Systems', 'BSL', 'London, United Kingdom', m('19-03-2013'), m('2-01-2015'), 'Senior Software Developer', 'http://www.businesssystemsuk.co.uk/', [new ImgLink('si-linkedin', 'https://www.linkedin.com/company/business-systems-uk-ltd'), new ImgLink('si-twitter', 'https://twitter.com/BSLHQ'), new ImgLink('si-facebook', 'https://www.facebook.com/businessystemsuk')], projectsBSL, Person.prototype.all);
        var icid = new Company('Central Institute of Digital Research', 'ICID', 'Havana, Cuba', m('1-09-2010'), m('1-09-2012'), 'Software Developer', 'http://www.ecured.cu/index.php/Instituto_Central_de_Investigaci%C3%B3n_Digital', [], projectsICID, []);
        var companies = [ bsl, icid ];

        //education
        var education = new Education('Havana, Cuba', m('1-09-2005'), m('5-07-2010'));

        //recomendations
        var recomendations = [
            new Recomendation(catherine, bsl, 'I have worked with Miguel in the Development Team at Business Systems (UK) ltd for the past couple of years. Miguel is a resourceful and competent Senior Developer. He has worked on technically demanding projects and has demonstrated that he is capable of meeting and overcoming challenges that he faced. Miguel is an easily approachable, knowledgeable Senior Developer and he is always ready to help others. He is very dedicated and hard-working. His good work is always well recognized. It would be a pleasure to work with Miguel again in the future and I have no hesitation in recommending Miguel to potential employers.'),
            new Recomendation(garth, bsl, 'Miguel is a quick learner. He has a strong computer science background, and easily extends this to learn new technologies. He has worked full stack, but with a leaning towards UI (via AngularJS). Miguel is a productive, valued member of our team and is willing to get his hands dirty for the teams benefit.')
        ];

        //courses
        var courses = [
            new Course('Mark Rendle\'s Single Page Applications with Angular JS & .NET', 'London, UK', m('2-10-2013'), m('5-10-2013'), 'TDD, Angular JS, Typescript & .Net workshop', [new ImgLink('si-linkedin', 'https://www.linkedin.com/in/markrendle'), new ImgLink('si-twitter', 'https://twitter.com/markrendle'), new ImgLink('si-github', 'https://github.com/markrendle')])
        ];

        var service = {
            getSkills: function () {
                return Skill.prototype.all;
            },
            getProjects: function () {
                return Project.prototype.all;
            },
            getCategories: function () {
                return categories;
            },
            getCompanies: function(){
                return companies;
            },
            getPersons: function () {
                return Person.prototype.all;
            },
            findSkill:function(name){
                return _.find(this.getSkills(), {'name': name});
            },
            findProject:function(name){
                return _.find(this.getProjects(), {'name': name});
            },
            getEducation: function () {
                return education;
            },
            getRecomendations: function () {
                return recomendations;
            },
            getCourses: function () {
                return courses;
            }

        };
        return service;
    });
