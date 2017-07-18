const express = require('express'),
      app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/index.html')
})

app.listen(process.env.PORT || 3000)
