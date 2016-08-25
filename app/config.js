// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


// make mongodb schema for urls
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shortly-deploy');

// Use connect method to connect to the server
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected!');
});

var dbase = {};

// make mongodb schema for users
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  timestamps: Date
});

var User = mongoose.model('User', userSchema);

var urlSchema = mongoose.Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timestamps: Date
});

dbase.Url = mongoose.model('Url', urlSchema);

var kevin = new User({username: "Kevin"});
console.log(kevin.username);
kevin.save(function(err, data){
  if (err) return console.error(err);
  console.log(data.username, "HOLY SHIT DID IT WORK");
});

User.find({username: "Kevin"}, function(err, username){
  if(err) return console.error(err);
  console.log(username);
});

// after that go to 

module.exports = dbase;
