const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json()); // needed for PUT/POST

app.get('/Course_Enrollment_API', (req, res) => {
  res.send('GET working');
});

app.put('/Course_Enrollment_API', (req, res) => {
  res.send('PUT working');
});

app.delete('/Course_Enrollment_API',(req, res) => {
    res.send('DELETE Working')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
