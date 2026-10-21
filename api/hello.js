export default function handler(request, response) {
  const name = request.query.name || 'World';
  return response.status(200).json({
    message: `Hello, ${name}! This is your serverless function deployed on Vercel.`
  });
}