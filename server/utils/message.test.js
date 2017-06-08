var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Admin';
    var text = 'Yey polo';
    var generatedMessage = generateMessage(from,text);

    expect(generatedMessage.from).toEqual(from);
    expect(generatedMessage.text).toEqual(text);
    expect(generatedMessage.createdAt).toBeA('number');

  });
});
