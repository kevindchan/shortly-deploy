module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['./*.js', 'app/collections/*.js', 'app/models/*.js', 'lib/*.js', 'public/client/*.js'],
        dest: 'concatMain.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      dist: {
        src: 'concatMain.js',
        dest: 'uglyCattedMain.min.js'
      }
    },

    eslint: {
      target: ['./*.js', 'app/collections/*.js', 'app/models/*.js', 'lib/*.js', 'public/client/*.js']
    },

    cssmin: {
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
  ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    // add your deploy tasks here
    'concat', 'uglify', 'mochaTest', 'nodemon', 'watch'
  ]);


};
;module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['./*.js', 'app/collections/*.js', 'app/models/*.js', 'lib/*.js', 'public/client/*.js'],
        dest: 'concatMain.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      dist: {
        src: 'concatMain.js',
        dest: 'uglyCattedMain.min.js'
      }
    },

    eslint: {
      target: ['./*.js', 'app/collections/*.js', 'app/models/*.js', 'lib/*.js', 'public/client/*.js']
    },

    cssmin: {
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
  ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    // add your deploy tasks here
    'concat', 'uglify', 'mochaTest', 'nodemon', 'watch'
  ]);


};
;module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['./*.js', 'app/collections/*.js', 'app/models/*.js', 'lib/*.js', 'public/client/*.js'],
        dest: 'concatMain.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      dist: {
        src: 'concatMain.js',
        dest: 'uglyCattedMain.min.js'
      }
    },

    eslint: {
      target: ['./*.js', 'app/collections/*.js', 'app/models/*.js', 'lib/*.js', 'public/client/*.js']
    },

    cssmin: {
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
  ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    // add your deploy tasks here
    'concat', 'eslint', 'uglify', 'mochaTest', 'nodemon', 'watch'
  ]);


};
;var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var util = require('./lib/utility');

var handler = require('./lib/request-handler');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('shhhh, very secret'));
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/', util.checkUser, handler.renderIndex);
app.get('/create', util.checkUser, handler.renderIndex);

app.get('/links', util.checkUser, handler.fetchLinks);
app.post('/links', handler.saveLink);

app.get('/login', handler.loginUserForm);
app.post('/login', handler.loginUser);
app.get('/logout', handler.logoutUser);

app.get('/signup', handler.signupUserForm);
app.post('/signup', handler.signupUser);

app.get('/*', handler.navToLink);

module.exports = app;
;var app = require('./server-config.js');

var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
;// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var Link = require('../models/link');

var Links = new db.Collection();

Links.model = Link;

module.exports = Links;;// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;;var db = require('../config');
var crypto = require('crypto');

var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }
});

module.exports = Link;
;var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }
});

module.exports = User;
;var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var util = require('../lib/utility');

var db = require('../app/config');
var User = require('../app/models/user');
var Link = require('../app/models/link');
var Users = require('../app/collections/users');
var Links = require('../app/collections/links');

exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

exports.loginUserForm = function(req, res) {
  res.render('login');
};

exports.logoutUser = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
};

exports.fetchLinks = function(req, res) {
  Links.reset().fetch().then(function(links) {
    res.status(200).send(links.models);
  });
};

exports.saveLink = function(req, res) {
  var uri = req.body.url;

  if (!util.isValidUrl(uri)) {
    console.log('Not a valid url: ', uri);
    return res.sendStatus(404);
  }

  new Link({ url: uri }).fetch().then(function(found) {
    if (found) {
      res.status(200).send(found.attributes);
    } else {
      util.getUrlTitle(uri, function(err, title) {
        if (err) {
          console.log('Error reading URL heading: ', err);
          return res.sendStatus(404);
        }
        var newLink = new Link({
          url: uri,
          title: title,
          baseUrl: req.headers.origin
        });
        newLink.save().then(function(newLink) {
          Links.add(newLink);
          res.status(200).send(newLink);
        });
      });
    }
  });
};

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        res.redirect('/login');
      } else {
        user.comparePassword(password, function(match) {
          if (match) {
            util.createSession(req, res, user);
          } else {
            res.redirect('/login');
          }
        });
      }
    });
};

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save()
          .then(function(newUser) {
            Users.add(newUser);
            util.createSession(req, res, newUser);
          });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
};

exports.navToLink = function(req, res) {
  new Link({ code: req.params[0] }).fetch().then(function(link) {
    if (!link) {
      res.redirect('/');
    } else {
      link.set({ visits: link.get('visits') + 1 })
        .save()
        .then(function() {
          return res.redirect(link.get('url'));
        });
    }
  });
};;var request = require('request');

exports.getUrlTitle = function(url, cb) {
  request(url, function(err, res, html) {
    if (err) {
      console.log('Error reading url heading: ', err);
      return cb(err);
    } else {
      var tag = /<title>(.*)<\/title>/;
      var match = html.match(tag);
      var title = match ? match[1] : url;
      return cb(err, title);
    }
  });
};

var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

exports.isValidUrl = function(url) {
  return url.match(rValidUrl);
};

exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });
};
;window.Shortly = Backbone.View.extend({
  template: Templates.layout,

  events: {
    'click li a.index': 'renderIndexView',
    'click li a.create': 'renderCreateView'
  },

  initialize: function() {
    console.log( 'Shortly is running' );
    $('body').append(this.render().el);

    this.router = new Shortly.Router({ el: this.$el.find('#container') });
    this.router.on('route', this.updateNav, this);

    Backbone.history.start({ pushState: true });
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },

  renderCreateView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/create', { trigger: true });
  },

  updateNav: function(routeName) {
    this.$el.find('.navigation li a')
      .removeClass('selected')
      .filter('.' + routeName)
      .addClass('selected');
  }
});
;Shortly.createLinkView = Backbone.View.extend({
  className: 'creator',

  template: Templates.create,

  events: {
    'submit': 'shortenUrl'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  shortenUrl: function(e) {
    e.preventDefault();
    var $form = this.$el.find('form .text');
    var link = new Shortly.Link({ url: $form.val() });
    link.on('request', this.startSpinner, this);
    link.on('sync', this.success, this);
    link.on('error', this.failure, this);
    link.save({});
    $form.val('');
  },

  success: function(link) {
    this.stopSpinner();
    var view = new Shortly.LinkView({ model: link });
    this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  },

  failure: function(model, res) {
    this.stopSpinner();
    this.$el.find('.message')
      .html('Please enter a valid URL')
      .addClass('error');
    return this;
  },

  startSpinner: function() {
    this.$el.find('img').show();
    this.$el.find('form input[type=submit]').attr('disabled', 'true');
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  },

  stopSpinner: function() {
    this.$el.find('img').fadeOut('fast');
    this.$el.find('form input[type=submit]').attr('disabled', null);
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  }
});
;Shortly.Link = Backbone.Model.extend({
  urlRoot: '/links'
});
;Shortly.LinkView = Backbone.View.extend({
  className: 'link',

  template: Templates.link,

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model);
    return this;
  }
});
;Shortly.Links = Backbone.Collection.extend({
  model: Shortly.Link,
  url: '/links'
});
;Shortly.LinksView = Backbone.View.extend({
  className: 'links',

  initialize: function() {
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  render: function() {
    this.$el.empty();
    return this;
  },

  addAll: function() {
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(item) {
    var view = new Shortly.LinkView({ model: item });
    this.$el.append(view.render().el);
  }
});
;Shortly.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'create': 'create'
  },

  swapView: function(view) {
    this.$el.html(view.render().el);
  },

  index: function() {
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });
    this.swapView(linksView);
  },

  create: function() {
    this.swapView(new Shortly.createLinkView());
  }
});
;var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var util = require('./lib/utility');

var handler = require('./lib/request-handler');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('shhhh, very secret'));
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/', util.checkUser, handler.renderIndex);
app.get('/create', util.checkUser, handler.renderIndex);

app.get('/links', util.checkUser, handler.fetchLinks);
app.post('/links', handler.saveLink);

app.get('/login', handler.loginUserForm);
app.post('/login', handler.loginUser);
app.get('/logout', handler.logoutUser);

app.get('/signup', handler.signupUserForm);
app.post('/signup', handler.signupUser);

app.get('/*', handler.navToLink);

module.exports = app;
;var app = require('./server-config.js');

var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
;// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var Link = require('../models/link');

var Links = new db.Collection();

Links.model = Link;

module.exports = Links;;// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;;var db = require('../config');
var crypto = require('crypto');

var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }
});

module.exports = Link;
;var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }
});

module.exports = User;
;var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var util = require('../lib/utility');

var db = require('../app/config');
var User = require('../app/models/user');
var Link = require('../app/models/link');
var Users = require('../app/collections/users');
var Links = require('../app/collections/links');

exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

exports.loginUserForm = function(req, res) {
  res.render('login');
};

exports.logoutUser = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
};

exports.fetchLinks = function(req, res) {
  Links.reset().fetch().then(function(links) {
    res.status(200).send(links.models);
  });
};

exports.saveLink = function(req, res) {
  var uri = req.body.url;

  if (!util.isValidUrl(uri)) {
    console.log('Not a valid url: ', uri);
    return res.sendStatus(404);
  }

  new Link({ url: uri }).fetch().then(function(found) {
    if (found) {
      res.status(200).send(found.attributes);
    } else {
      util.getUrlTitle(uri, function(err, title) {
        if (err) {
          console.log('Error reading URL heading: ', err);
          return res.sendStatus(404);
        }
        var newLink = new Link({
          url: uri,
          title: title,
          baseUrl: req.headers.origin
        });
        newLink.save().then(function(newLink) {
          Links.add(newLink);
          res.status(200).send(newLink);
        });
      });
    }
  });
};

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        res.redirect('/login');
      } else {
        user.comparePassword(password, function(match) {
          if (match) {
            util.createSession(req, res, user);
          } else {
            res.redirect('/login');
          }
        });
      }
    });
};

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save()
          .then(function(newUser) {
            Users.add(newUser);
            util.createSession(req, res, newUser);
          });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
};

exports.navToLink = function(req, res) {
  new Link({ code: req.params[0] }).fetch().then(function(link) {
    if (!link) {
      res.redirect('/');
    } else {
      link.set({ visits: link.get('visits') + 1 })
        .save()
        .then(function() {
          return res.redirect(link.get('url'));
        });
    }
  });
};;var request = require('request');

exports.getUrlTitle = function(url, cb) {
  request(url, function(err, res, html) {
    if (err) {
      console.log('Error reading url heading: ', err);
      return cb(err);
    } else {
      var tag = /<title>(.*)<\/title>/;
      var match = html.match(tag);
      var title = match ? match[1] : url;
      return cb(err, title);
    }
  });
};

var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

exports.isValidUrl = function(url) {
  return url.match(rValidUrl);
};

exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });
};
;window.Shortly = Backbone.View.extend({
  template: Templates.layout,

  events: {
    'click li a.index': 'renderIndexView',
    'click li a.create': 'renderCreateView'
  },

  initialize: function() {
    console.log( 'Shortly is running' );
    $('body').append(this.render().el);

    this.router = new Shortly.Router({ el: this.$el.find('#container') });
    this.router.on('route', this.updateNav, this);

    Backbone.history.start({ pushState: true });
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },

  renderCreateView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/create', { trigger: true });
  },

  updateNav: function(routeName) {
    this.$el.find('.navigation li a')
      .removeClass('selected')
      .filter('.' + routeName)
      .addClass('selected');
  }
});
;Shortly.createLinkView = Backbone.View.extend({
  className: 'creator',

  template: Templates.create,

  events: {
    'submit': 'shortenUrl'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  shortenUrl: function(e) {
    e.preventDefault();
    var $form = this.$el.find('form .text');
    var link = new Shortly.Link({ url: $form.val() });
    link.on('request', this.startSpinner, this);
    link.on('sync', this.success, this);
    link.on('error', this.failure, this);
    link.save({});
    $form.val('');
  },

  success: function(link) {
    this.stopSpinner();
    var view = new Shortly.LinkView({ model: link });
    this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  },

  failure: function(model, res) {
    this.stopSpinner();
    this.$el.find('.message')
      .html('Please enter a valid URL')
      .addClass('error');
    return this;
  },

  startSpinner: function() {
    this.$el.find('img').show();
    this.$el.find('form input[type=submit]').attr('disabled', 'true');
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  },

  stopSpinner: function() {
    this.$el.find('img').fadeOut('fast');
    this.$el.find('form input[type=submit]').attr('disabled', null);
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  }
});
;Shortly.Link = Backbone.Model.extend({
  urlRoot: '/links'
});
;Shortly.LinkView = Backbone.View.extend({
  className: 'link',

  template: Templates.link,

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model);
    return this;
  }
});
;Shortly.Links = Backbone.Collection.extend({
  model: Shortly.Link,
  url: '/links'
});
;Shortly.LinksView = Backbone.View.extend({
  className: 'links',

  initialize: function() {
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  render: function() {
    this.$el.empty();
    return this;
  },

  addAll: function() {
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(item) {
    var view = new Shortly.LinkView({ model: item });
    this.$el.append(view.render().el);
  }
});
;Shortly.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'create': 'create'
  },

  swapView: function(view) {
    this.$el.html(view.render().el);
  },

  index: function() {
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });
    this.swapView(linksView);
  },

  create: function() {
    this.swapView(new Shortly.createLinkView());
  }
});
;var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var util = require('./lib/utility');

var handler = require('./lib/request-handler');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('shhhh, very secret'));
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/', util.checkUser, handler.renderIndex);
app.get('/create', util.checkUser, handler.renderIndex);

app.get('/links', util.checkUser, handler.fetchLinks);
app.post('/links', handler.saveLink);

app.get('/login', handler.loginUserForm);
app.post('/login', handler.loginUser);
app.get('/logout', handler.logoutUser);

app.get('/signup', handler.signupUserForm);
app.post('/signup', handler.signupUser);

app.get('/*', handler.navToLink);

module.exports = app;
;var app = require('./server-config.js');

var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
;module.exports=function(a){a.initConfig({pkg:a.file.readJSON("package.json"),concat:{options:{separator:";"},dist:{src:["./*.js","app/collections/*.js","app/models/*.js","lib/*.js","public/client/*.js"],dest:"concatMain.js"}},mochaTest:{test:{options:{reporter:"spec"},src:["test/**/*.js"]}},nodemon:{dev:{script:"server.js"}},uglify:{dist:{src:"concatMain.js",dest:"uglyCattedMain.min.js"}},eslint:{target:["./*.js","app/collections/*.js","app/models/*.js","lib/*.js","public/client/*.js"]},cssmin:{},watch:{scripts:{files:["public/client/**/*.js","public/lib/**/*.js"],tasks:["concat","uglify"]},css:{files:"public/*.css",tasks:["cssmin"]}},shell:{prodServer:{}}}),a.loadNpmTasks("grunt-contrib-uglify"),a.loadNpmTasks("grunt-contrib-watch"),a.loadNpmTasks("grunt-contrib-concat"),a.loadNpmTasks("grunt-contrib-cssmin"),a.loadNpmTasks("grunt-eslint"),a.loadNpmTasks("grunt-mocha-test"),a.loadNpmTasks("grunt-shell"),a.loadNpmTasks("grunt-nodemon"),a.registerTask("server-dev",function(b){a.task.run(["nodemon","watch"])}),a.registerTask("test",["mochaTest"]),a.registerTask("build",[]),a.registerTask("upload",function(b){a.option("prod")||a.task.run(["server-dev"])}),a.registerTask("deploy",["concat","uglify","mochaTest","nodemon","watch"])},module.exports=function(a){a.initConfig({pkg:a.file.readJSON("package.json"),concat:{options:{separator:";"},dist:{src:["./*.js","app/collections/*.js","app/models/*.js","lib/*.js","public/client/*.js"],dest:"concatMain.js"}},mochaTest:{test:{options:{reporter:"spec"},src:["test/**/*.js"]}},nodemon:{dev:{script:"server.js"}},uglify:{dist:{src:"concatMain.js",dest:"uglyCattedMain.min.js"}},eslint:{target:["./*.js","app/collections/*.js","app/models/*.js","lib/*.js","public/client/*.js"]},cssmin:{},watch:{scripts:{files:["public/client/**/*.js","public/lib/**/*.js"],tasks:["concat","uglify"]},css:{files:"public/*.css",tasks:["cssmin"]}},shell:{prodServer:{}}}),a.loadNpmTasks("grunt-contrib-uglify"),a.loadNpmTasks("grunt-contrib-watch"),a.loadNpmTasks("grunt-contrib-concat"),a.loadNpmTasks("grunt-contrib-cssmin"),a.loadNpmTasks("grunt-eslint"),a.loadNpmTasks("grunt-mocha-test"),a.loadNpmTasks("grunt-shell"),a.loadNpmTasks("grunt-nodemon"),a.registerTask("server-dev",function(b){a.task.run(["nodemon","watch"])}),a.registerTask("test",["mochaTest"]),a.registerTask("build",[]),a.registerTask("upload",function(b){a.option("prod")||a.task.run(["server-dev"])}),a.registerTask("deploy",["concat","eslint","uglify","mochaTest","nodemon","watch"])};var express=require("express"),partials=require("express-partials"),bodyParser=require("body-parser"),cookieParser=require("cookie-parser"),session=require("express-session"),util=require("./lib/utility"),handler=require("./lib/request-handler"),app=express();app.set("views",__dirname+"/views"),app.set("view engine","ejs"),app.use(partials()),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!0})),app.use(express["static"](__dirname+"/public")),app.use(cookieParser("shhhh, very secret")),app.use(session({secret:"shhh, it's a secret",resave:!1,saveUninitialized:!0})),app.get("/",util.checkUser,handler.renderIndex),app.get("/create",util.checkUser,handler.renderIndex),app.get("/links",util.checkUser,handler.fetchLinks),app.post("/links",handler.saveLink),app.get("/login",handler.loginUserForm),app.post("/login",handler.loginUser),app.get("/logout",handler.logoutUser),app.get("/signup",handler.signupUserForm),app.post("/signup",handler.signupUser),app.get("/*",handler.navToLink),module.exports=app;var app=require("./server-config.js"),port=4568;app.listen(port),console.log("Server now listening on port "+port);var db=require("../config"),Link=require("../models/link"),Links=new db.Collection;Links.model=Link,module.exports=Links;var db=require("../config"),User=require("../models/user"),Users=new db.Collection;Users.model=User,module.exports=Users;var db=require("../config"),crypto=require("crypto"),Link=db.Model.extend({tableName:"urls",hasTimestamps:!0,defaults:{visits:0},initialize:function(){this.on("creating",function(a,b,c){var d=crypto.createHash("sha1");d.update(a.get("url")),a.set("code",d.digest("hex").slice(0,5))})}});module.exports=Link;var db=require("../config"),bcrypt=require("bcrypt-nodejs"),Promise=require("bluebird"),User=db.Model.extend({tableName:"users",hasTimestamps:!0,initialize:function(){this.on("creating",this.hashPassword)},comparePassword:function(a,b){bcrypt.compare(a,this.get("password"),function(a,c){b(c)})},hashPassword:function(){var a=Promise.promisify(bcrypt.hash);return a(this.get("password"),null,null).bind(this).then(function(a){this.set("password",a)})}});module.exports=User;var request=require("request"),crypto=require("crypto"),bcrypt=require("bcrypt-nodejs"),util=require("../lib/utility"),db=require("../app/config"),User=require("../app/models/user"),Link=require("../app/models/link"),Users=require("../app/collections/users"),Links=require("../app/collections/links");exports.renderIndex=function(a,b){b.render("index")},exports.signupUserForm=function(a,b){b.render("signup")},exports.loginUserForm=function(a,b){b.render("login")},exports.logoutUser=function(a,b){a.session.destroy(function(){b.redirect("/login")})},exports.fetchLinks=function(a,b){Links.reset().fetch().then(function(a){b.status(200).send(a.models)})},exports.saveLink=function(a,b){var c=a.body.url;return util.isValidUrl(c)?void new Link({url:c}).fetch().then(function(d){d?b.status(200).send(d.attributes):util.getUrlTitle(c,function(d,e){if(d)return console.log("Error reading URL heading: ",d),b.sendStatus(404);var f=new Link({url:c,title:e,baseUrl:a.headers.origin});f.save().then(function(a){Links.add(a),b.status(200).send(a)})})}):(console.log("Not a valid url: ",c),b.sendStatus(404))},exports.loginUser=function(a,b){var c=a.body.username,d=a.body.password;new User({username:c}).fetch().then(function(c){c?c.comparePassword(d,function(d){d?util.createSession(a,b,c):b.redirect("/login")}):b.redirect("/login")})},exports.signupUser=function(a,b){var c=a.body.username,d=a.body.password;new User({username:c}).fetch().then(function(e){if(e)console.log("Account already exists"),b.redirect("/signup");else{var f=new User({username:c,password:d});f.save().then(function(c){Users.add(c),util.createSession(a,b,c)})}})},exports.navToLink=function(a,b){new Link({code:a.params[0]}).fetch().then(function(a){a?a.set({visits:a.get("visits")+1}).save().then(function(){return b.redirect(a.get("url"))}):b.redirect("/")})};var request=require("request");exports.getUrlTitle=function(a,b){request(a,function(c,d,e){if(c)return console.log("Error reading url heading: ",c),b(c);var f=/<title>(.*)<\/title>/,g=e.match(f),h=g?g[1]:a;return b(c,h)})};var rValidUrl=/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;exports.isValidUrl=function(a){return a.match(rValidUrl)},exports.isLoggedIn=function(a,b){return!!a.session&&!!a.session.user},exports.checkUser=function(a,b,c){exports.isLoggedIn(a)?c():b.redirect("/login")},exports.createSession=function(a,b,c){return a.session.regenerate(function(){a.session.user=c,b.redirect("/")})},window.Shortly=Backbone.View.extend({template:Templates.layout,events:{"click li a.index":"renderIndexView","click li a.create":"renderCreateView"},initialize:function(){console.log("Shortly is running"),$("body").append(this.render().el),this.router=new Shortly.Router({el:this.$el.find("#container")}),this.router.on("route",this.updateNav,this),Backbone.history.start({pushState:!0})},render:function(){return this.$el.html(this.template()),this},renderIndexView:function(a){a&&a.preventDefault(),this.router.navigate("/",{trigger:!0})},renderCreateView:function(a){a&&a.preventDefault(),this.router.navigate("/create",{trigger:!0})},updateNav:function(a){this.$el.find(".navigation li a").removeClass("selected").filter("."+a).addClass("selected")}}),Shortly.createLinkView=Backbone.View.extend({className:"creator",template:Templates.create,events:{submit:"shortenUrl"},render:function(){return this.$el.html(this.template()),this},shortenUrl:function(a){a.preventDefault();var b=this.$el.find("form .text"),c=new Shortly.Link({url:b.val()});c.on("request",this.startSpinner,this),c.on("sync",this.success,this),c.on("error",this.failure,this),c.save({}),b.val("")},success:function(a){this.stopSpinner();var b=new Shortly.LinkView({model:a});this.$el.find(".message").append(b.render().$el.hide().fadeIn())},failure:function(a,b){return this.stopSpinner(),this.$el.find(".message").html("Please enter a valid URL").addClass("error"),this},startSpinner:function(){this.$el.find("img").show(),this.$el.find("form input[type=submit]").attr("disabled","true"),this.$el.find(".message").html("").removeClass("error")},stopSpinner:function(){this.$el.find("img").fadeOut("fast"),this.$el.find("form input[type=submit]").attr("disabled",null),this.$el.find(".message").html("").removeClass("error")}}),Shortly.Link=Backbone.Model.extend({urlRoot:"/links"}),Shortly.LinkView=Backbone.View.extend({className:"link",template:Templates.link,render:function(){return this.$el.html(this.template(this.model.attributes)),console.log(this.model),this}}),Shortly.Links=Backbone.Collection.extend({model:Shortly.Link,url:"/links"}),Shortly.LinksView=Backbone.View.extend({className:"links",initialize:function(){this.collection.on("sync",this.addAll,this),this.collection.fetch()},render:function(){return this.$el.empty(),this},addAll:function(){this.collection.forEach(this.addOne,this)},addOne:function(a){var b=new Shortly.LinkView({model:a});this.$el.append(b.render().el)}}),Shortly.Router=Backbone.Router.extend({initialize:function(a){this.$el=a.el},routes:{"":"index",create:"create"},swapView:function(a){this.$el.html(a.render().el)},index:function(){var a=new Shortly.Links,b=new Shortly.LinksView({collection:a});this.swapView(b)},create:function(){this.swapView(new Shortly.createLinkView)}});var express=require("express"),partials=require("express-partials"),bodyParser=require("body-parser"),cookieParser=require("cookie-parser"),session=require("express-session"),util=require("./lib/utility"),handler=require("./lib/request-handler"),app=express();app.set("views",__dirname+"/views"),app.set("view engine","ejs"),app.use(partials()),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!0})),app.use(express["static"](__dirname+"/public")),app.use(cookieParser("shhhh, very secret")),app.use(session({secret:"shhh, it's a secret",resave:!1,saveUninitialized:!0})),app.get("/",util.checkUser,handler.renderIndex),app.get("/create",util.checkUser,handler.renderIndex),app.get("/links",util.checkUser,handler.fetchLinks),app.post("/links",handler.saveLink),app.get("/login",handler.loginUserForm),app.post("/login",handler.loginUser),app.get("/logout",handler.logoutUser),app.get("/signup",handler.signupUserForm),app.post("/signup",handler.signupUser),app.get("/*",handler.navToLink),module.exports=app;var app=require("./server-config.js"),port=4568;app.listen(port),console.log("Server now listening on port "+port);var db=require("../config"),Link=require("../models/link"),Links=new db.Collection;Links.model=Link,module.exports=Links;var db=require("../config"),User=require("../models/user"),Users=new db.Collection;Users.model=User,module.exports=Users;var db=require("../config"),crypto=require("crypto"),Link=db.Model.extend({tableName:"urls",hasTimestamps:!0,defaults:{visits:0},initialize:function(){this.on("creating",function(a,b,c){var d=crypto.createHash("sha1");d.update(a.get("url")),a.set("code",d.digest("hex").slice(0,5))})}});module.exports=Link;var db=require("../config"),bcrypt=require("bcrypt-nodejs"),Promise=require("bluebird"),User=db.Model.extend({tableName:"users",hasTimestamps:!0,initialize:function(){this.on("creating",this.hashPassword)},comparePassword:function(a,b){bcrypt.compare(a,this.get("password"),function(a,c){b(c)})},hashPassword:function(){var a=Promise.promisify(bcrypt.hash);return a(this.get("password"),null,null).bind(this).then(function(a){this.set("password",a)})}});module.exports=User;var request=require("request"),crypto=require("crypto"),bcrypt=require("bcrypt-nodejs"),util=require("../lib/utility"),db=require("../app/config"),User=require("../app/models/user"),Link=require("../app/models/link"),Users=require("../app/collections/users"),Links=require("../app/collections/links");exports.renderIndex=function(a,b){b.render("index")},exports.signupUserForm=function(a,b){b.render("signup")},exports.loginUserForm=function(a,b){b.render("login")},exports.logoutUser=function(a,b){a.session.destroy(function(){b.redirect("/login")})},exports.fetchLinks=function(a,b){Links.reset().fetch().then(function(a){b.status(200).send(a.models)})},exports.saveLink=function(a,b){var c=a.body.url;return util.isValidUrl(c)?void new Link({url:c}).fetch().then(function(d){d?b.status(200).send(d.attributes):util.getUrlTitle(c,function(d,e){if(d)return console.log("Error reading URL heading: ",d),b.sendStatus(404);var f=new Link({url:c,title:e,baseUrl:a.headers.origin});f.save().then(function(a){Links.add(a),b.status(200).send(a)})})}):(console.log("Not a valid url: ",c),b.sendStatus(404))},exports.loginUser=function(a,b){var c=a.body.username,d=a.body.password;new User({username:c}).fetch().then(function(c){c?c.comparePassword(d,function(d){d?util.createSession(a,b,c):b.redirect("/login")}):b.redirect("/login")})},exports.signupUser=function(a,b){var c=a.body.username,d=a.body.password;new User({username:c}).fetch().then(function(e){if(e)console.log("Account already exists"),b.redirect("/signup");else{var f=new User({username:c,password:d});f.save().then(function(c){Users.add(c),util.createSession(a,b,c)})}})},exports.navToLink=function(a,b){new Link({code:a.params[0]}).fetch().then(function(a){a?a.set({visits:a.get("visits")+1}).save().then(function(){return b.redirect(a.get("url"))}):b.redirect("/")})};var request=require("request");exports.getUrlTitle=function(a,b){request(a,function(c,d,e){if(c)return console.log("Error reading url heading: ",c),b(c);var f=/<title>(.*)<\/title>/,g=e.match(f),h=g?g[1]:a;return b(c,h)})};var rValidUrl=/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;exports.isValidUrl=function(a){return a.match(rValidUrl)},exports.isLoggedIn=function(a,b){return!!a.session&&!!a.session.user},exports.checkUser=function(a,b,c){exports.isLoggedIn(a)?c():b.redirect("/login")},exports.createSession=function(a,b,c){return a.session.regenerate(function(){a.session.user=c,b.redirect("/")})},window.Shortly=Backbone.View.extend({template:Templates.layout,events:{"click li a.index":"renderIndexView","click li a.create":"renderCreateView"},initialize:function(){console.log("Shortly is running"),$("body").append(this.render().el),this.router=new Shortly.Router({el:this.$el.find("#container")}),this.router.on("route",this.updateNav,this),Backbone.history.start({pushState:!0})},render:function(){return this.$el.html(this.template()),this},renderIndexView:function(a){a&&a.preventDefault(),this.router.navigate("/",{trigger:!0})},renderCreateView:function(a){a&&a.preventDefault(),this.router.navigate("/create",{trigger:!0})},updateNav:function(a){this.$el.find(".navigation li a").removeClass("selected").filter("."+a).addClass("selected")}}),Shortly.createLinkView=Backbone.View.extend({className:"creator",template:Templates.create,events:{submit:"shortenUrl"},render:function(){return this.$el.html(this.template()),this},shortenUrl:function(a){a.preventDefault();var b=this.$el.find("form .text"),c=new Shortly.Link({url:b.val()});c.on("request",this.startSpinner,this),c.on("sync",this.success,this),c.on("error",this.failure,this),c.save({}),b.val("")},success:function(a){this.stopSpinner();var b=new Shortly.LinkView({model:a});this.$el.find(".message").append(b.render().$el.hide().fadeIn())},failure:function(a,b){return this.stopSpinner(),this.$el.find(".message").html("Please enter a valid URL").addClass("error"),this},startSpinner:function(){this.$el.find("img").show(),this.$el.find("form input[type=submit]").attr("disabled","true"),this.$el.find(".message").html("").removeClass("error")},stopSpinner:function(){this.$el.find("img").fadeOut("fast"),this.$el.find("form input[type=submit]").attr("disabled",null),this.$el.find(".message").html("").removeClass("error")}}),Shortly.Link=Backbone.Model.extend({urlRoot:"/links"}),Shortly.LinkView=Backbone.View.extend({className:"link",template:Templates.link,render:function(){return this.$el.html(this.template(this.model.attributes)),console.log(this.model),this}}),Shortly.Links=Backbone.Collection.extend({model:Shortly.Link,url:"/links"}),Shortly.LinksView=Backbone.View.extend({className:"links",initialize:function(){this.collection.on("sync",this.addAll,this),this.collection.fetch()},render:function(){return this.$el.empty(),this},addAll:function(){this.collection.forEach(this.addOne,this)},addOne:function(a){var b=new Shortly.LinkView({model:a});this.$el.append(b.render().el)}}),Shortly.Router=Backbone.Router.extend({initialize:function(a){this.$el=a.el},routes:{"":"index",create:"create"},swapView:function(a){this.$el.html(a.render().el)},index:function(){var a=new Shortly.Links,b=new Shortly.LinksView({collection:a});this.swapView(b)},create:function(){this.swapView(new Shortly.createLinkView)}});;// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var Link = require('../models/link');

var Links = new db.Collection();

Links.model = Link;

module.exports = Links;;// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;;var db = require('../config');
var crypto = require('crypto');

var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }
});

module.exports = Link;
;var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }
});

module.exports = User;
;var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var util = require('../lib/utility');

var db = require('../app/config');
var User = require('../app/models/user');
var Link = require('../app/models/link');
var Users = require('../app/collections/users');
var Links = require('../app/collections/links');

exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

exports.loginUserForm = function(req, res) {
  res.render('login');
};

exports.logoutUser = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
};

exports.fetchLinks = function(req, res) {
  Links.reset().fetch().then(function(links) {
    res.status(200).send(links.models);
  });
};

exports.saveLink = function(req, res) {
  var uri = req.body.url;

  if (!util.isValidUrl(uri)) {
    console.log('Not a valid url: ', uri);
    return res.sendStatus(404);
  }

  new Link({ url: uri }).fetch().then(function(found) {
    if (found) {
      res.status(200).send(found.attributes);
    } else {
      util.getUrlTitle(uri, function(err, title) {
        if (err) {
          console.log('Error reading URL heading: ', err);
          return res.sendStatus(404);
        }
        var newLink = new Link({
          url: uri,
          title: title,
          baseUrl: req.headers.origin
        });
        newLink.save().then(function(newLink) {
          Links.add(newLink);
          res.status(200).send(newLink);
        });
      });
    }
  });
};

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        res.redirect('/login');
      } else {
        user.comparePassword(password, function(match) {
          if (match) {
            util.createSession(req, res, user);
          } else {
            res.redirect('/login');
          }
        });
      }
    });
};

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save()
          .then(function(newUser) {
            Users.add(newUser);
            util.createSession(req, res, newUser);
          });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
};

exports.navToLink = function(req, res) {
  new Link({ code: req.params[0] }).fetch().then(function(link) {
    if (!link) {
      res.redirect('/');
    } else {
      link.set({ visits: link.get('visits') + 1 })
        .save()
        .then(function() {
          return res.redirect(link.get('url'));
        });
    }
  });
};;var request = require('request');

exports.getUrlTitle = function(url, cb) {
  request(url, function(err, res, html) {
    if (err) {
      console.log('Error reading url heading: ', err);
      return cb(err);
    } else {
      var tag = /<title>(.*)<\/title>/;
      var match = html.match(tag);
      var title = match ? match[1] : url;
      return cb(err, title);
    }
  });
};

var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

exports.isValidUrl = function(url) {
  return url.match(rValidUrl);
};

exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });
};
;window.Shortly = Backbone.View.extend({
  template: Templates.layout,

  events: {
    'click li a.index': 'renderIndexView',
    'click li a.create': 'renderCreateView'
  },

  initialize: function() {
    console.log( 'Shortly is running' );
    $('body').append(this.render().el);

    this.router = new Shortly.Router({ el: this.$el.find('#container') });
    this.router.on('route', this.updateNav, this);

    Backbone.history.start({ pushState: true });
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },

  renderCreateView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/create', { trigger: true });
  },

  updateNav: function(routeName) {
    this.$el.find('.navigation li a')
      .removeClass('selected')
      .filter('.' + routeName)
      .addClass('selected');
  }
});
;Shortly.createLinkView = Backbone.View.extend({
  className: 'creator',

  template: Templates.create,

  events: {
    'submit': 'shortenUrl'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  shortenUrl: function(e) {
    e.preventDefault();
    var $form = this.$el.find('form .text');
    var link = new Shortly.Link({ url: $form.val() });
    link.on('request', this.startSpinner, this);
    link.on('sync', this.success, this);
    link.on('error', this.failure, this);
    link.save({});
    $form.val('');
  },

  success: function(link) {
    this.stopSpinner();
    var view = new Shortly.LinkView({ model: link });
    this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  },

  failure: function(model, res) {
    this.stopSpinner();
    this.$el.find('.message')
      .html('Please enter a valid URL')
      .addClass('error');
    return this;
  },

  startSpinner: function() {
    this.$el.find('img').show();
    this.$el.find('form input[type=submit]').attr('disabled', 'true');
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  },

  stopSpinner: function() {
    this.$el.find('img').fadeOut('fast');
    this.$el.find('form input[type=submit]').attr('disabled', null);
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  }
});
;Shortly.Link = Backbone.Model.extend({
  urlRoot: '/links'
});
;Shortly.LinkView = Backbone.View.extend({
  className: 'link',

  template: Templates.link,

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model);
    return this;
  }
});
;Shortly.Links = Backbone.Collection.extend({
  model: Shortly.Link,
  url: '/links'
});
;Shortly.LinksView = Backbone.View.extend({
  className: 'links',

  initialize: function() {
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  render: function() {
    this.$el.empty();
    return this;
  },

  addAll: function() {
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(item) {
    var view = new Shortly.LinkView({ model: item });
    this.$el.append(view.render().el);
  }
});
;Shortly.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'create': 'create'
  },

  swapView: function(view) {
    this.$el.html(view.render().el);
  },

  index: function() {
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });
    this.swapView(linksView);
  },

  create: function() {
    this.swapView(new Shortly.createLinkView());
  }
});
