const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

const requireWriteAuth = (req, res, next) => {
  const mutatingMethods = ['POST', 'PUT', 'DELETE', 'PATCH'];

  if (!mutatingMethods.includes(req.method)) {
    return next();
  }

  const configuredApiKey = process.env.API_KEY;
  const providedApiKey = req.get('x-api-key');

  if (!configuredApiKey) {
    return res.status(500).json({ error: 'API key not configured on server.' });
  }

  if (!providedApiKey || providedApiKey !== configuredApiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return next();
};

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(requireWriteAuth);

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
