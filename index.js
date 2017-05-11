const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      port       = process.env.PORT || 3000,
      data       = require("./data/free.json"),
      func       = require("./freeVod");

app.get('/', (req, res) => {
   res.sendFile(`${__dirname}/index.html`);
 });

app.get('/includes/style.css', (req, res) => {
   res.sendFile(`${__dirname}/includes/style.css`);
});

app.get('/getAllContents' ,(req,res) =>{
  let contents = func.getAllContents();
  res.json({"Free-VOD":contents});    
});

app.post('/getByCategory' ,(req,res) =>{
  let category = req.body.category,
      found    = func.getByCategory(category);
  if (found)
    res.status(200).json({"Free-VOD":found});
  else 
    res.status(200).json({"err":"contents not found"}); 
});

app.get('/getByCategoryAndViews/:category/:views' ,(req,res) =>{
  let category = req.params.category,
      views    = req.params.views,
      found    = func.getByCategoryAndViews(category,views);
  if (found)
    res.status(200).json({"Free-VOD":found});
  else 
    res.status(200).json({"err":"contents not found"}); 
});

app.all('*', (req,res) =>{
  res.json({"Free-VOD":data.free});
});

app.listen(port);
console.log(`listening on port ${port}`);