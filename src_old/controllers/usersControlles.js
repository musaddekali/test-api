const users = [
  {
    name: "mahid",
    age: 25,
  },
  {
    name: "maher",
    age: 20,
  },
  {
    name: "mahin",
    age: 18,
  },
];

export default class UserControllers {
  static getAllUsers(req, res) {
    res.json(users);
  }

  static createUser(req, res) {
    const { name, age } = req.body;
    if (!name || !age) {
      res.status(404).send("Please insert valid data!");
      return;
    }
    res.send(`User created. Name: ${name} age: ${age}`);
    console.log("User created ", req.body);
  }
}
