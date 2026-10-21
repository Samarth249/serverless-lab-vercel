module.exports = (req, res) => {
  const name = req.query.name || 'World';
  res.status(200).json({
    message: `Hello, ${name}! This is your serverless function deployed on Vercel.`
  });
};
