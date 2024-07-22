const Admin = require('../models/admin');


module.exports.registerAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const { name, username, email, contact, department, password } = req.body;

    if (!name || !username || !email || !contactNumber || !department || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists!" });
    }

   
    const newAdmin = new Admin({
      name,
      username,
      email,
      contactNumber,
      department,
      password, 
    });

    
    await newAdmin.save();

    return res.status(200).json({ message: 'Admin Registered Successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error!" });
  }
};


module.exports.loginAdmin = async (req, res) => {
  try {
    console.log('loginAdmin');
    return res.status(200).json({message:'Admin signed in successfully'});
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports.logoutAdmin = async (req, res) => {
  try {
    req.logoutAdmin((err) => {
          if (err) {
            return res.status(500).json({ message: 'Internal server error' });
          }
          return res.status(200).json({ message: 'Admin Logged out successfully' });
        });

} catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Internal server error' });
}
};
