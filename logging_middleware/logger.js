const axios = require("axios");
require("dotenv").config();

const Log = async (stack, level, packageName, message) => {
  try {
    await axios.post(
      `${process.env.BASE_URL}/logs`,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.log("Logging failed");
  }
};

module.exports = Log;