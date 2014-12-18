'use strict';
/* globals _ */

angular.module('kamaydApp')
    .factory('data', function data() {
        function Skill(name, url, info, isWeaponOfChoice)
        {
            this.name = name;
            this.url = url;
            this.info = info;
            this.weapon = isWeaponOfChoice || false;
            this.projects = [];
            this.category = new Category('', []);
        }
        Skill.prototype = {
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
        function Project(name, skills)
        {
            this.name = name;
            this.skills = skills;
            var thisProject = this;
            _(skills).forEach(function(skill) {
                    skill.addProject(thisProject);
                }
            );
        }
        function Category(name, skills)
        {
            this.name = name;
            this.skills = skills;
            var thisCategory = this;
            _(skills).forEach(function(skill) {
                    skill.changeCategory(thisCategory);
                }
            );
        }
        //skills
        var angular = new Skill('AngularJS', 'https://angularjs.org/', 'Angular is what HTML would have been had it been designed for applications', true),
            grunt = new Skill('Grunt', 'http://gruntjs.com/', 'The JavaScript Task Runner' , true),
            bower = new Skill('Bower', 'http://bower.io/', 'The Package manager for the front-end.' , true),
            sass = new Skill('Sass', 'http://sass-lang.com/', 'A CSS extension language.' , true),
            npm = new Skill('Npm', 'https://www.npmjs.com/', 'The Package manager for JavaScript', true),

            nancy  = new Skill('NancyFx', 'http://nancyfx.org/', 'Lightweight, low-ceremony, framework for building HTTP based services on .Net and Mono.', true),
            aspnet = new Skill('ASP.NET MVC', 'http://www.asp.net/mvc', 'MVC WEB framework.', true),

            postgres = new Skill('Postgres', 'http://www.postgresql.org/', 'A Powerful, open source object-relational database system.', true),
            redis = new Skill('Redis', 'http://redis.io/', 'It is often referred to as a data structure server.', true),
            sql = new Skill('SQL', 'http://www.tsql.info/', 'In all the flavors (TSQL, PL/SQL & MySQL)'),

            svn = new Skill('SVN', 'http://subversion.apache.org/', 'A version control system.'),
            git = new Skill('GIT', 'http://git-scm.com/', 'A Distributed version control system.', true),

            wpf = new Skill('WPF', 'http://msdn.microsoft.com/en-us/library/aa970268(v=vs.110).aspx','Windows Presentation Foundation is a .Net presentation system for building Windows applications.')
            ;

        //projects
        var projects = [
            new Project('ww5', [angular, grunt, bower, npm, nancy]),
            new Project('CODES', [aspnet])
        ];
        //categories
        var categories = [
            new Category('Client Side', [angular, grunt, bower, sass, npm]),
            new Category('Server Side', [nancy, aspnet]),
            new Category('Data Base', [postgres, redis, sql]),
            new Category('Windows Applications', [wpf]),
            new Category('Version control', [git, svn])
        ];
        var skills = [  angular, grunt, bower, sass, npm,
                        nancy, aspnet,
                        postgres, redis, sql,
                        git, svn,
                        wpf];

        var service = {
            getSkills: function () {
                return skills;
            },
            getProjects: function () {
                return projects;
            },
            getCategories: function () {
                return categories;
            }
        };
        return service;
    });
