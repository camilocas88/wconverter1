const expect = require('chai').expect
const kgToPounds = require('..').kgToPounds
const poundsToKg = require('..').poundsToKg

describe('#weight-converter', function () {
  it('Una medida de kilogramos a libras por vez', function () {
    const conversion = kgToPounds(1)
    expect(conversion).to.equal(2.20462)

    const conversion2 = kgToPounds(2.5)
    expect(conversion2).to.equal(5.51155)

    const conversion3 = kgToPounds(5)
    expect(conversion3).to.equal(11.0231)
  })

  it('Varias medidas de kilogramos a libras por vez', function () {
    const conversion = kgToPounds(1, 2.5, 5)
    const expected = [2.20462, 5.51155, 11.0231]

    conversion.forEach((conv, index) => expect(conv).to.equal(expected[index]))
  })

  it('Una medida de libras a kilogramos por vez', function () {
    const conversion = poundsToKg(1)
    expect(conversion).to.equal(0.453592)

    const conversion2 = poundsToKg(2.5)
    expect(conversion2).to.equal(1.13398)

    const conversion3 = poundsToKg(5)
    expect(conversion3).to.equal(2.26796)
  })

  it('Varias medidas de libras a kilogramos por vez', function () {
    const conversion = poundsToKg(1, 2.5, 5)
    const expected = [0.453592, 1.13398, 2.26796]

    conversion.forEach((conv, index) => expect(conv).to.equal(expected[index]))
  })
})
