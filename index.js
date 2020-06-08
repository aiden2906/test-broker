const mqtt = require('mqtt');
const Sensor = require('./devices/sensor')
const Fan = require('./devices/fan')

// Connect
let client = mqtt.connect('tcp://40.87.101.198/1883/mqtt');

// Subribe topic
client.subscribe('T_1', (err) => {
  if (err) {
    console.log(err);
  }
});

const sensor = new Sensor(1);
const fan = new Fan(1);

setInterval(() => {
  client.publish('T_2', JSON.stringify(sensor.toJSON()));
}, 10000);

// Puslisher
// setInterval(() => {
//   client.publish('T_2', 'Hello ' + new Date().toLocaleString());
// }, 1000);

// On Message
client.on('message', (topic, message) => {
  console.log(`${topic} : ${message}`);
});
