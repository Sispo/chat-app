var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 34.234232;
    var longitude = 35.31234;
    var locationObject = generateLocationMessage(from,latitude,longitude);
    expect(locationObject).toInclude({from});
    expect(locationObject.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(locationObject.createdAt).toBeA('number');
  });
});
