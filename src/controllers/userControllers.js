const users = [
  {
    id: 1,
    name: "Mahid",
    age: 25,
  },
  {
    id: 2,
    name: "Karim",
    age: 22,
  },
  {
    id: 3,
    name: "Rahim",
    age: 18,
  },
  {
    id: 4,
    name: "Joy",
    age: 17,
  },
];
export default class UserControllers {
  static getUsers(req, res) {
    res.json(users);
  }

  static getUser(req, res) {
    const { userId } = req.params;
    if (!userId) {
      res.status(403).send("user id not found.");
      return;
    }
    const signleUser = users.find((user) => user.id == userId);
    if (!signleUser) {
      res.status(404).send(`User ${userId} is not found`);
      return;
    }
    // res.send(`Hello Welcome to my page. I'm ${name} and I'm ${age} years old.`);
    res.json(signleUser);
  }

  static createUser(req, res) {
    const { name, email } = req.body || {};
    if (!name || !email) {
      res.status(303).send("Name or Email not valid.");
      return;
    }
    res.send(`New user created. User name: ${name} and email: ${email}`);
  }

  static updateUser(req, res) {
    res.send("User Updated");
  }

  static deleteUser(req, res) {
    res.send("User Deleted Successfully");
  }
}
