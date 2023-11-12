const usersControllers = (req, res) => {
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
  res.json(users);
};

export { usersControllers };
