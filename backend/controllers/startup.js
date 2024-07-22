const Startup = require ('../models/startup');
const jwt = require('jsonwebtoken');

module.exports.registerStartup = async (req,res) =>{
    try {
        const {name , companyName , workEmail , regPhoneNo , password , username} = req.body;

        if(!name || !companyName || !workEmail || !regPhoneNo || !password || !username) return res.status(400).json({message:"Required Details are not added"});
        
        const existingStartup = await Startup.findOne({companyName});

        if(existingStartup) return res.status(400).json({message:"Company Already registered!"});

        const clone = req.body;
        delete clone.password;

        console.log(clone);

        const newStartup = new Startup(clone);

        const registeredStartup=await Startup.register(newStartup,password);
        console.log(registeredStartup);
        req.login(registeredStartup , (err) =>{
            if(err){
                console.log(err);
                return res.status(500).json({message:'Some error occured while registering',err});
            }
            else{
                console.log(registeredStartup);
                const token = jwt.sign({ id : registeredStartup._id , type : 'startup' }, 'secretkey', { algorithm: 'HS256' });  
                return res.status(200).json({message:'Intern Registered Successfully',token});
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error!" });
    }
};


module.exports.login = async (req,res) => {
    try {
        const startup = await Startup.find({username : req.body.username});

        
        const payload = { id: startup[0]._id , type : 'startup' }; 
        const token = jwt.sign(payload, 'secretkey' , { expiresIn: '1h' });

        return res.status(200).json({message:'Signed in successfully',token});
      } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
  };
  
module.exports.logout = async (req,res) =>{
    try {
        req.logout((err) => {
              if (err) {
                return res.status(500).json({ message: 'Internal server error' });
              }
              return res.status(200).json({ message: 'Logged out successfully' });
            });
  
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  };