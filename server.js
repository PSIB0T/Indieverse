const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const multer = require('multer');

const {schema} = require('./server_prod/graphql/index');

const {prepopulate} = require('./server_prod/mongooes/prepopulate')

let config = require('./config.json');

const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  onError : function(err, next) {
    console.log('error', err);
    next(err);
  },
  filename: function (req, file, cb) {
    console.log(file.mimetype)
    switch(file.mimetype) {
      case 'image/jpeg':
        cb(null, Date.now() + '.jpg')
        break;
      case 'image/png':
        cb(null, Date.now() + '.png')
        break;
      case 'audio/mp3':
        cb(null, Date.now() + '.mp3')
        break;
      case 'audio/x-m4a':
        cb(null, Date.now() + '.m4a')
        break;
      default:
        cb(null, Date.now() + '')
    }
  }
})


const upload = multer({storage});

// prepopulate();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/uploads'))

app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use(function(err, req, res, next) {
  //do logging and user-friendly error message display
  res.send(500, 'internal server error');
})

app.post('/uploadFile', upload.single('fileName'), (req, res) => {
  return res.status(200).send(res.req.file);
});
// Start the app by listening on the default
// Heroku port
app.listen(config.port, () => {
  console.log("Server is running!");
});