const Intern = require("../models/intern");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const createToken = (_id) => {
  const jwtSecretKey = process.env.JWT_SECRET || "TopSecret";

  return jwt.sign({ _id }, jwtSecretKey, { expiresIn: "3d" });
};

module.exports.registerIntern = async (req, res) => {
  try {
    const {
      name,
      whatsapp,
      collegeName,
      semester,
      state,
      internship,
      availability6Months,
      paidInternship,
      password,
      username,
      source,
    } = req.body;

    if (
      !name ||
      !whatsapp ||
      !collegeName ||
      !semester ||
      !state ||
      !internship ||
      !availability6Months ||
      !paidInternship ||
      !password ||
      !username ||
      !source
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingUsername = await Intern.findOne({ username });

    if (existingUsername)
      return res.status(400).json({ message: "Email already exists!" });

    const newIntern = new Intern({
      name,
      whatsapp,
      collegeName,
      semester,
      state,
      internship,
      availability6Months,
      paidInternship,
      username,
      source,
      emailToken: crypto.randomBytes(64).toString("hex"),
    });

    const registeredIntern = await Intern.register(newIntern, password);
    req.login(registeredIntern, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Some error occured while registering", err });
      } else {
        const token = jwt.sign(
          {
            id: registeredIntern._id,
            name: registeredIntern.name,
            type: "intern",
          },
          "secretkey",
          { algorithm: "HS256" }
        );

        return res
          .status(200)
          .json({ message: "Intern Registered Successfully", token });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const intern = Intern.findOne({ username });
    const payload = { id: intern._id, type: "intern", name: intern.name };
    const token = jwt.sign(payload, "secretkey", { expiresIn: "1h" });

    return res.status(200).json({ message: "Signed in successfully", token });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.logout = async (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      return res.status(200).json({ message: "Logged out successfully" });
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.verifyEmail = async (req, res) => {
  try {
    const emailToken = req.body.emailToken;

    if (!emailToken) {
      return res.status(404).json("EmailToken not found.....!");
    }

    const intern = await Intern.findOne({ emailToken });

    if (intern) {
      intern.emailToken = null;
      intern.isVerified = true;

      await intern.save();

      const token = createToken(intern._id);

      res.status(200).json({
        _id: intern._id,
        name: _intern.name,
        token,
        isVerified: intern.isVerified,
      });
    } else {
      res.status(404).json("Email verification failed,invalid token!!!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
