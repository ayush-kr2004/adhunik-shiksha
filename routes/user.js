import express from "express";
const userRouter = express.Router();

userRouter.post('/signup', function (req, res) {
  res.send('POST request to the homepage')
});

userRouter.post('/signin', function (req, res) {
  res.send('POST request to the homepage')
})

userRouter.get('/purchases', function (req, res) {
  res.send('POST request to the homepage')
})

export default userRouter;