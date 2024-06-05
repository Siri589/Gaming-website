const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve the HTML and CSS files

app.post('/login', (req, res) => {
  const { dob, username, password } = req.body;
  // Add your authentication logic here
  if (username === 'testuser' && password === 'testpass' && dob === '2000-01-01') {
    res.send('Login successful');
  } else {
    res.send('Invalid login');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
