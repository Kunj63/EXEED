import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors package

const app = express();
const port = 4000;

const uri = "mongodb+srv://kunjdb:mongoindeed@clusterindeed.q3ujnq2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to yourDB-indeedDB');
  })
  .catch((err) => {
    console.log('Error connecting to database:', err);
  });

// Define User schema(model)
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


// Create User model
const User = mongoose.model('users', UserSchema);

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

      // API endpoint for user registration
app.post('/register', async (req, res) => {
  try {
    const { name, password } = req.body;

           // Check if user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
  
      res.json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  });



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});