import express from "express";
const adminRouter = express.Router();

adminRouter.post('/signup', function (req, res) {
  res.send('POST request to the homepage')
});

adminRouter.post('/signin', function (req, res) {
  res.send('POST request to the homepage')
})

adminRouter.post('/course', function (req, res) {
  res.send('POST request to the homepage')
})

adminRouter.put('/course', function (req, res) {
  res.send('POST request to the homepage')
})

adminRouter.get('/course/bulk', function (req, res) {
  res.send('POST request to the homepage')
})

export default adminRouter;