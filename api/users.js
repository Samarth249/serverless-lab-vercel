// api/users.js

// In-memory array to simulate a database for this serverless lab
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

module.exports = (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Return the list of users
      return res.status(200).json({
        success: true,
        count: users.length,
        data: users,
      });

    case 'POST':
      // Extract name from the incoming JSON body
      const { name } = req.body || {};
      
      if (!name) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a name in the request body.',
        });
      }

      const newUser = {
        id: users.length + 1,
        name: name,
      };

      users.push(newUser);

      return res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser,
      });

    default:
      // Handle unsupported HTTP methods
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
