var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
    title: 'About me ',
    heading: 'About me',
    date: 'Nov 17, 2016',
    content: `<p>
                Glad you came all the way here to know more about me! </p>
                <p>
                Well, let me start up by telling you, I'm just an ordinary guy. But then i'm this ordinary guys who thinks he can do extra ordinary or rather ordinary things in exra ordinary ways. </p>
                <p>
                How cliched would it be if i started off about me with my name?! </p>
                <p>
                This ordinary guy hails from this city named Kochi in the district of Ernakulam in what is called God's own Country Kerala. I am fortunate to be part of the College of Engineering Trivandrum family to do my B.Tech in Computer Science and Engineering. Web App developement is a new area for me, but equally intriguing as well. What you see here is my first Web App - Humble in all senses. You can call this ordinary guy Nikhil. </p>
                <p>
                                                                                                                    -Nikhil Joji
                </p>`
},
'article-two' : {
     title: 'Article two',
    heading: 'Article two',
    date: 'Oct 9, 2016',
    content: `<p>
This is article two.
</p>`
},
'article-three' : {
     title: 'Article three ',
    heading: 'Article three',
    date: 'Oct 9, 2016',
    content: `<p>
This is article three.
            </p>`
}
};

function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate =`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
   
    
    </head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
    <div>
    ${date}
        </div>
        <div>
            ${content}
        </div>
    
    </div>
</body>

</html>`;
return htmlTemplate;
}


var counter=0;
app.get('/counter',function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName= req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
