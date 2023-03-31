const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const uname = req.query.uname;

  if (uname) {
    req.username = uname.trim().toLowerCase();
  } else {
    req.username = null;
  }

  if (req.username) {
    res.send(`Hello, ${req.username}!`);
  } else {
    res.send('Hello, guest!');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
