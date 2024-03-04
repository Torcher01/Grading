import noUiSlider from 'nouislider/src/nouislider.js';

const sliderElement = document.querySelector('.price-sorting__range');
const valueElements = [
  document.getElementById('min-price'),
  document.getElementById('max-price')
];

noUiSlider.create(sliderElement, {
  start: [0, 900],
  connect: [false, true, false],
  range: {
    'min': [0],
    'max': [1000]
  },
  step: 100,
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update',(values, handle) => {
  valueElements[handle].value = values[handle];
});
