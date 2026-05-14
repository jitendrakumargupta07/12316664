const axios = require("axios");
require("dotenv").config();

const fetchData = async () => {
    try {

        const headers = {
            Authorization: process.env.ACCESS_TOKEN
        };

        const depots = await axios.get(
            `${process.env.BASE_URL}/depots`,
            { headers }
        );

        const vehicles = await axios.get(
            `${process.env.BASE_URL}/vehicles`,
            { headers }
        );

        console.log("Depots Data:");
        console.log(depots.data);

        console.log("Vehicles Data:");
        console.log(vehicles.data);

    } catch (error) {
        console.log("Error fetching data");
        console.log(error.response?.data || error.message);
    }
};

fetchData();