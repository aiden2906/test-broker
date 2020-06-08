const {EventEmitter} = require('events');
/**
 * sensor device
 */
class Sensor extends EventEmitter {
  constructor(id) {
    super();
    this.id = id;
    this.status = 0;
    this.moisture = 0;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setValue(moisture, status = 1) {
    this.moisture = moisture;
    this.status = status;
    this.emit('change', this.toJSON());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toJSON() {
    return {
      id: 'id1_' + String(this.id),
      value: [this.status, Math.random()],
    };
  }
}

module.exports = Sensor;
