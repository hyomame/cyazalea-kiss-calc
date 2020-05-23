'use strict'

const $ = require('jquery')

const $app = $(() => {
  let inputedNumber = 0
  let storedNumber = 0
  let func = ''
  let powerCount = 0

  const updateDisplayedNumber = (number) => {
    $('#number').text(number)
  }

  const updateNumbers = (number) => {
    storedNumber = number
    inputedNumber = 0
  }

  $('.num-key').on('click', function() {
    const id = this.id
    inputedNumber = Number(inputedNumber) * 10 + Number(id)
    updateDisplayedNumber(inputedNumber)
  })

  $('.func-key').on('click', function() {
    const id = this.id
    let result = Number(inputedNumber)

    switch (func) {
      case 'add':
        result = Number(storedNumber) + Number(inputedNumber)
        break
      case 'substract':
        result = Number(storedNumber) - Number(inputedNumber)
        break
      case 'multiply':
        result = Number(storedNumber) * Number(inputedNumber)
        break
      case 'divide':
        result = Math.floor(Number(storedNumber) / Number(inputedNumber))
        break
    }

    switch (id) {
      case 'add':
        if (inputedNumber === 3) {
          powerCount += 1
        } else {
          powerCount = 0
        }
        func = 'add'
        updateNumbers(result)
        updateDisplayedNumber(result)
        break
      case 'substract':
        powerCount = 0
        func = 'substract'
        updateNumbers(result)
        updateDisplayedNumber(result)
        break
      case 'multiply':
        powerCount = 0
        func = 'multiply'
        updateNumbers(result)
        updateDisplayedNumber(result)
        break
      case 'divide':
        powerCount = 0
        func = 'divide'
        updateNumbers(result)
        updateDisplayedNumber(result)
        break
      case 'equal':
        if (powerCount === 2 & inputedNumber === 3) {
          $('img').attr("src", 'img/3+3+3.png')
          setTimeout(() => {
            $('img').attr("src", 'img/9000000000000000.png')
          }, 3000)
          setTimeout(() => {
            $('img').attr("src", '')
            $('body').css('background-image', 'url(img/9000000000000000.png)')
            $('footer p').text('')
          }, 6000)
          result = 900000000000000
        } 
        func = ''
        inputedNumber = 0
        storedNumber = 0
        powerCount = 0
        updateDisplayedNumber(result)
        break
      case 'ca':
        $('body').css('background-image', 'url(img/background.png)')
        $('footer p').html('3+3+3は9千兆パワー!!!<br>君はもう、あの輝きを見たか...?')
        func = ''
        inputedNumber = 0
        storedNumber = 0
        powerCount = 0
        updateDisplayedNumber(0)
        break
    }
  })
})