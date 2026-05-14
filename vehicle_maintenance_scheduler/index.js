require("dotenv").config();

const axios = require("axios");

async function fetchVehicles() {

    try {

        const response = await axios.get(
            `${process.env.BASE_URL}/vehicles`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                },
                timeout: 20000
            }
        );

        console.log("SUCCESS");
        console.log(response.data);

    } catch (error) {

        console.log("ERROR");

        if (error.response) {
            console.log("Status:", error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

fetchVehicles();