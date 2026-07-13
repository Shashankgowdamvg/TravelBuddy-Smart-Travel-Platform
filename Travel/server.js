const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'database.json');

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from the current directory, auto-appending .html extensions
app.use(express.static(__dirname, { extensions: ['html'] }));

// Initialize local JSON database if it doesn't exist
function initDb() {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = {
      users: [],
      bookings: [],
      contacts: [],
      newsletter: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
  }
}

// Helper to read DB
function readDb() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [], bookings: [], contacts: [], newsletter: [] };
  }
}

// Helper to write DB
function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing to database:', error);
    return false;
  }
}

initDb();

// ===== API ENDPOINTS =====

// 1. Newsletter Signup
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const db = readDb();
  
  // Check if already subscribed
  if (db.newsletter.some(sub => sub.email === email)) {
    return res.status(400).json({ error: 'Email already subscribed' });
  }
  
  db.newsletter.push({ email, date: new Date().toISOString() });
  
  if (writeDb(db)) {
    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } else {
    res.status(500).json({ error: 'Failed to save subscription' });
  }
});

// 2. Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const db = readDb();
  
  db.contacts.push({ 
    id: Date.now().toString(),
    name, 
    email, 
    subject, 
    message,
    status: 'new',
    date: new Date().toISOString() 
  });
  
  if (writeDb(db)) {
    res.status(201).json({ message: 'Message sent successfully' });
  } else {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// 3. User Registration (Signup)
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required' });
  }

  const db = readDb();
  
  if (db.users.some(u => u.email === email)) {
    return res.status(400).json({ error: 'User with this email already exists' });
  }
  
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password, // In a real app, hash this password!
    date: new Date().toISOString()
  };
  
  db.users.push(newUser);
  
  if (writeDb(db)) {
    res.status(201).json({ message: 'User created successfully', user: { id: newUser.id, name, email } });
  } else {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// 4. User Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const db = readDb();
  const user = db.users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  
  res.status(200).json({ 
    message: 'Login successful', 
    user: { id: user.id, name: user.name, email: user.email } 
  });
});

// 5. Booking a Trip
app.post('/api/bookings', (req, res) => {
  const { destinationId, destinationName, checkinDate, guests, totalAmount, userId } = req.body;
  
  if (!destinationId || !checkinDate || !guests) {
    return res.status(400).json({ error: 'Missing required booking details' });
  }

  const db = readDb();
  
  const newBooking = {
    id: 'BKG-' + Date.now().toString().substring(5),
    destinationId,
    destinationName,
    checkinDate,
    guests,
    totalAmount,
    userId: userId || 'guest',
    status: 'confirmed',
    bookingDate: new Date().toISOString()
  };
  
  db.bookings.push(newBooking);
  
  if (writeDb(db)) {
    res.status(201).json({ message: 'Booking confirmed!', booking: newBooking });
  } else {
    res.status(500).json({ error: 'Failed to process booking' });
  }
});

// 6. Cancelling a Booking
app.post('/api/bookings/:id/cancel', (req, res) => {
  const bookingId = req.params.id;
  const db = readDb();
  
  const bookingIndex = db.bookings.findIndex(b => b.id === bookingId);
  
  if (bookingIndex === -1) {
    return res.status(404).json({ error: 'Booking not found' });
  }
  
  // Update status to cancelled
  db.bookings[bookingIndex].status = 'cancelled';
  db.bookings[bookingIndex].cancelledDate = new Date().toISOString();
  
  if (writeDb(db)) {
    res.status(200).json({ message: 'Booking cancelled successfully', booking: db.bookings[bookingIndex] });
  } else {
    res.status(500).json({ error: 'Failed to cancel booking' });
  }
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/*`);
});
