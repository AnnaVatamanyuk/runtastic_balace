let parametersSection =document.querySelector('.your-parameters')

jQuery('.nav-opener').click(function () {
    jQuery('.your-parameters').show()
})

document.querySelector('.form-control').addEventListener('click', function () {
    document.querySelector('.form-control').placeholder = '';
})

document.querySelector('.arrow-back').addEventListener('click',function () {
    parametersSection.style.display = 'none';
})

window.isMbscDemo = true;

mobiscroll.settings = {
    lang: 'ru',
    theme: 'ios',
    themeVariant: 'light'  };

mobiscroll.date('#demo-mobile', {
    display: 'bubble'
});

var instance = mobiscroll.number('#number', {
    theme: 'ios',
    themeVariant: 'light',
    layout: 'fixed',
    step: 1,
    min: 10,
    max: 220,
    width: 50
})

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

mobiscroll.mass('#demo', {
    units: ['kg']
});

mobiscroll.mass('#demo-lb', {
    units: ['lb']
});

mobiscroll.mass('#demo-conv', {
    units: ['kg', 'lb'],
    max: 100
});

mobiscroll.mass('#demo-non-form');
