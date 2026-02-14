import express from "express";
const courseRouter = express.Router();

courseRouter.post('/purchase', function (req, res) {
  res.send('POST request to the homepage')
})

courseRouter.get('/preview', function (req, res) {
  res.send('get post from course router')
})

export default courseRouter;