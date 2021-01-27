/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const router = require('./router');

app.use(cors());
app.use(express.json());

app.use(express.static(PUBLIC_DIR));
app.use('/api/rooms/', router);

// app.use('/reviews/:propertyId', express.static(PUBLIC_DIR));
// app.use('/api/reviews/', router);

// app.get('/api/rooms/', (req, res) => {
//   console.log(req.params)
//   const query = Reviews.where({ listing_id: 30506107 });
//   query.findOne((err, reviews) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.send(reviews);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
