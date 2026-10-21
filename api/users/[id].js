// api/users/[id].js

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

module.exports = (req, res) => {
  const { id } = req.query;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({
      success: false,
      error: `User with ID ${id} not found`,
    });
  }

  return res.status(200).json({
    success: true,
    data: user,
  });
};
