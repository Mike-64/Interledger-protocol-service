require("dotenv").config();
var axios = require("axios").default;

function checkBalance() {
    var options = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.RIPPLEX_TOKEN}`,
        },
    };
    axios
        .get(
            "https://ripplex.io/portal/ilp/hermes/accounts/mike-64/balance",
            options
        )
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function pay() {
    var options = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                `Bearer ${process.env.RIPPLEX_TOKEN}`,
        },
    };
    var data = {
        amount: "1000000",
        destinationPaymentPointer: "$rafiki.money/p/mike.95.f@gmail.com",
    };

    axios.post("https://ripplex.io/portal/ilp/hermes/accounts/mike-64/pay",data,options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}

module.exports = {
    checkBalance,
    pay
}