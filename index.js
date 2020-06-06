const mqtt = require("mqtt");

// Connect
let client = mqtt.connect("tcp://40.87.101.198/1883/mqtt");

// Subribe topic
client.subscribe("test", (err) => {
    if(err){
        console.log(err);
    }
});

// Puslisher
setInterval(() => {
    client.publish("test", "Hello " + new Date().toLocaleString());
}, 1000);

// On Message
client.on("message", (topic, message) => {
    console.log(`${topic} : ${message}`);
});