let assert = require('assert');
let growingKeys = require('./index.js')

describe('Growing Keys', function() {
    it('should return an object with a growing key and a value of true', function() {
      assert.deepEqual({ 'hello': true, 'hellohello': true }, growingKeys(2,'hello'));
    });
    it('should return "invalid string" if second input does not equal a string', function() {
      assert.equal('invalid string', growingKeys(3,3))
    })
    it('should return "false" if input number is equal to or less than 0', function() {
      assert.equal('false', growingKeys(0,'myth'))
    })
    it('should return "invalid number" if first input does not equal a number', function(){
      assert.equal('invalid number', growingKeys([0],'hello'))
    })
});
