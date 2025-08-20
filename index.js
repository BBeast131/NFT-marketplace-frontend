
// async function connect() {
//   if (typeof window.ethereum !== "undefined") {
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//     document.getElementById("connectButton").innerHTML = "Connected";
//   }
// }

const {ethers} = require("ethers");

async function connect(){
    if(typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({method: "eth_requestAccounts"});
            document.getElementById("connectButton").innerHTML = "Connected";
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
}

// Make connect function available globally
window.connect = connect;

module.exports = {
    connect,
}