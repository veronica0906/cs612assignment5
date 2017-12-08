var express = require("express")
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: true}))
//app.use(require('body-parser').urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname,'bower_components')))
app.use(express.static(__dirname + '/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.listen(port);

console.log('imooc started on port ' + port);

//index page
app.get('/', function (req, res) {
    var movies = [{
            title: "Avengers 3",
            _id: 1,
            poster: 'https://upload.wikimedia.org/wikipedia/zh/1/1b/Avengers_Age_of_Ultron.jpg'
        }, {
            title: "Spiderman 2",
            _id: 2,
            poster: '/bower_components/images/1.jpg'
        }, {
            title: "Transformers 2",
            _id: 3,
            poster: '/bower_components/images/2.jpg'
        }, {
            title: "Galaxy Guard",
            _id: 4,
            poster: '/bower_components/images/3.jpg'
        }];
        
    res.render('index', {
        title: 'movies shows',
        movies: movies
    })
})

//detail page
app.get('/movie/:id', function (req, res) {
    console.log(req.url);
    var movie;
    if(req.url === '/movie/1') {
        movie = {
            doctor: 'Jos Weidon',
            country: 'United States',
            title: 'Avengers 2',
            year: '2015',
            poster: '',
            language: 'English',
            flash: 'https://www.youtube.com/embed/Y5_LbbdSoOA?list=PLdRe8sRskTPVHRGrGpTZr6WzaBdAmgjvQ',
            summary: 'The movie tells me that when Iron Man tried to start a peacekeeping peacekeeping program, things went wrong. As a result, as the planet is at a critical juncture in life and death, powerful superheroes come forward and take up the task of saving the world. They will stop the terrible artificial intelligence robot "Arcat" in developing a terrorist plan.'
        };
    }
    if(req.url === '/movie/2') {
        movie = {
            doctor: 'Jos Weidon',
            country: 'United States',
            title: 'Spiderman 2',
            year: '2015',
            poster: '',
            language: 'English',
            flash: 'https://www.youtube.com/embed/mKWoZRcVb78',
            summary: 'The movie tells me that when Iron Man tried to start a peacekeeping peacekeeping program, things went wrong. As a result, as the planet is at a critical juncture in life and death, powerful superheroes come forward and take up the task of saving the world. They will stop the terrible artificial intelligence robot "Arcat" in developing a terrorist plan.'
        };
    }
    if(req.url === '/movie/3') {
        movie = {
            doctor: 'Jos Weidon',
            country: 'United States',
            title: 'Transformers 2',
            year: '2015',
            poster: '',
            language: 'English',
            flash: 'https://www.youtube.com/embed/SDeUWdNnni8',
            summary: 'The movie tells me that when Iron Man tried to start a peacekeeping peacekeeping program, things went wrong. As a result, as the planet is at a critical juncture in life and death, powerful superheroes come forward and take up the task of saving the world. They will stop the terrible artificial intelligence robot "Arcat" in developing a terrorist plan.'
        };
    }
    if(req.url === '/movie/4') {
        movie = {
            doctor: 'Jos Weidon',
            country: 'United States',
            title: 'Galaxy Guard 2',
            year: '2015',
            poster: '',
            language: 'English',
            flash: 'https://www.youtube.com/embed/dW1BIid8Osg',
            summary: 'The movie tells me that when Iron Man tried to start a peacekeeping peacekeeping program, things went wrong. As a result, as the planet is at a critical juncture in life and death, powerful superheroes come forward and take up the task of saving the world. They will stop the terrible artificial intelligence robot "Arcat" in developing a terrorist plan.'
        };
    }
    res.render('detail', {
        title: 'movie detail',
        movie: movie
    })
})

//admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'admin',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    })
})

//list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'list page',
        movies: [{
            doctor: 'Jos Weidon',
            country: 'United States',
            title: 'Galaxy Guard 2',
            year: '2015',
            poster: '',
            language: 'English',
            flash: 'https://www.youtube.com/embed/dW1BIid8Osg',
            summary: 'The movie tells me that when Iron Man tried to start a peacekeeping peacekeeping program, things went wrong. As a result, as the planet is at a critical juncture in life and death, powerful superheroes come forward and take up the task of saving the world. They will stop the terrible artificial intelligence robot "Arcat" in developing a terrorist plan.'
        }]
    })
})