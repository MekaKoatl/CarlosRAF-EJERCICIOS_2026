import { response, Router } from "express";
import bcrypt from "bcrypt";

const router = Router();

router.get("/ver-todos", async (req, res) => {
  const users = await req.app.locals.db.collection("users").find().toArray();
  res.send(users);
});

router.post("/create-user", async (req, res) => {
  const newUser = req.body;
  const hashPassword = await bcrypt.hash(newUser.password, 12);
  newUser.password = hashPassword;

  const user = await req.app.locals.db.collection('users').findOne({
    $or: [{ username: newUser.username }, { email: newUser.email }]
  });

  let result;
  if (!user) {
    result = await req.app.locals.db.collection('users').insertOne(newUser);
  } else {
    result = 'user already exists';
  }

  res.send({ data: result });
});

router.get("/login", async (req, res) => {
  const users = req.body;

  const userDB = await req.app.locals.db
    .collection("users")
    .findOne({ email: users.email });

  const passwordIsCorrect = await bcrypt.compare(
    userDB.password,
    userDB.password,
  );
  if(passwordIsCorrect){
    responde = 'credentials correct'
  } else {
    response = 'credentials are incorrect';
  }
  res.send({data: response});
});

export default router;
