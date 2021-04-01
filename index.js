var express =require('express');
var expressHbs=require('express-handlebars');
var app= express();
app.engine('handlebars',expressHbs({
    layoutsDir:__dirname+'/views/layouts',
    defaultLayout: 'appweb'
}));

app.set('view engine','handlebars');
app.use(express.static(  'assets'));

app.get('/',function(req,res){
res.render('index',{layout:'indexmain'});
});
app.get('/fiend.handlebars',function (req,res) {
    res.render("friend");

});
app.get('/friend.handlebars',function (req,res) {
    res.render("friend");
});
app.get('/appweb.handlebars',function (req,res) {
    res.render("friend",{layout:'appweb'});
});

app.get('/login.handlebars',function (req,res) {
    res.render("login",{layout: 'main',});

});
app.get('/profile.handlebars',function (req,res)  {
    res.render('profile');
})

app.listen(process.env.PORT || '2222');
