const { expect } = require('chai');
const { calculateBMR } = require('./bmr'); // Import the function you want to test

describe('BMR Calculator', function () {
  it('should calculate BMR for a male', function () {
    const bmr1= calculateBMR(70, 175, 30, 'male');
    expect(bmr1).to.equal(1695.6670000000001);
  });

  it('should calculate BMR for a female', function () {
    const bmr2 = calculateBMR(60, 160, 25, 'female');
    expect(bmr2).to.equal(1389.8429999999998);
  });

});


