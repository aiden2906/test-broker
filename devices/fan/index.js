const {EventEmitter} = require('events');
/**
 * Fan device
 */
class Fan extends EventEmitter {
  constructor(id) {
    super();
    this.id = id;
    this.level = 0;
    this.status = 0;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setValue(level, status = 1) {
    this.level = level;
    this.status = status;
    this.emit('change', this.toJSON());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toJSON() {
    return {
      id: 'id2_' + String(this.id),
      value: this.status
        ? [String(this.status), String(this.level)]
        : [String(this.status)],
    };
  }
}

module.exports = Fan;