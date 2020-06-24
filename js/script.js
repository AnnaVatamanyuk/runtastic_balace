
jQuery('.nav-opener').click(function () {
    jQuery('.your-parameters').show()
})

jQuery('.form-control').click(function () {
    jQuery('.form-control').attr('placeholder', '')
})

jQuery('.your-parameters .arrow-back').click(function () {
    jQuery('.your-parameters').hide()
})

jQuery('.arrow-btn_style').click(function () {
    jQuery('.your-parameters').show()
})

jQuery('.social-reg').click(function () {
    jQuery('.registration-popup').show()
})

jQuery('.registration-popup .arrow-back').click(function () {
    jQuery('.registration-popup').hide()
})

jQuery('.registration-photo input').change(function () {
    jQuery('.registration-photo #blah').show()
    jQuery('.registration-photo label').hide()
})

jQuery('.registration-text a').click(function () {
    jQuery('.authorization-popup').show()
})

jQuery('.authorization-popup .arrow-back').click(function () {
    jQuery('.authorization-popup').hide()
})

jQuery('.choose-eat_detail').click(function () {
    jQuery('.choose-day').show()
})

jQuery('.choose-day li').click(function () {
    jQuery('.choose-day').hide()
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


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);

            var widthImg = $('#blah').width();
            console.log("widthImg = " + widthImg);
            var widthContent = 342;

            // //если ширина картинки больше, чем наш контент, то добавляем коеффициент сжатия
            // if (+widthImg > +widthContent) {
            //     var koef = +widthImg / +widthContent;
            //
            //     $("#koef").val(Math.round(koef*1000));
            //     $('#blah').attr('src', e.target.result).css('width', '100%');
            // }
            // else {
            //
            // }
            //addJCrop(1);
            //jcrop_api.animateTo(getRandom());
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#AddImage").change(function () {
    $('#blah').attr('src', "~/Content/nophoto.png");
    readURL(this);

    //$('input[type="file"]').hide();
    //$('.buttonSubmitImg').show();
    //CropResult.isUpload = true;
});

function handle_fb_data(response){
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        console.log('Прилитело из ФБ: '+JSON.stringify(response));
//            alert('Прилитело из ФБ: '+JSON.stringify(response));

        $.ajax({
            type: 'post',
            url: '/do/reg/fb',
            data: response,
            success: function(msg) {
                console.log(msg);
                if ((msg=='зарегались')||(msg=='залогинились')){window.location.reload();}
            },
            error: function(){}
        })
    });
}

function fb_login(){
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            handle_fb_data(response);
        } else {
            console.log('Юзер был не залогинен в самом ФБ, запускаем окно логинизирования');
            FB.login(function(response){
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    handle_fb_data(response);
                } else {
                    console.log('Походу пользователь передумал логиниться через ФБ');
                }
            });
        }
    }, {
        scope: 'email,id'
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '573467520199855',
        cookie     : true,  // enable cookies to allow the server to access
        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
    });
};
// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


let name = jQuery('#name');
let firstName = jQuery('#first-name')
let email = jQuery('.email')
let password = jQuery('.password')
let submit = jQuery('.submit')
let formAuthorization_a = jQuery('.form-authorization a')


submit.click(function (event) {
    let rez =0;
    if(name.value.length <= 2){
        name.classList.add('invalid');
        name.classList.remove('valid');
        document.querySelector('span.error-name').classList.add('active');
    } else {
        name.classList.remove('invalid');
        document.querySelector('span.error-name').classList.remove('active');
        name.classList.add('valid');
        rez++;
    }
    if(firstName.value.length <= 2){
        firstName.classList.add('invalid');
        firstName.classList.remove('valid');
        document.querySelector('span.error-first_name').classList.add('active');
    } else {
        firstName.classList.remove('invalid');
        document.querySelector('span.error-name').classList.remove('active');
        firstName.classList.add('valid');
        rez++;
    }
    if (email.value.length == '' || email.value.match(/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/)){
        email.classList.add('invalid');
        email.classList.remove('valid');
        document.querySelector('span.error-email').classList.add('active');
    }else {
        email.classList.remove('invalid');
        document.querySelector('span.error-email').classList.remove('active');
        email.classList.add('valid');
        rez++
    }
    if ( password.value.length > 8 && password.value.match(/[0-9]/) && password.value.match(/[a-z]/) && password.value.match(/[A-Z]/)){
        password.classList.remove('invalid');
        document.querySelector('span.error-password').classList.remove('active');
        password.classList.add('valid');
    }else {
        password.classList.add('invalid');
        password.classList.remove('valid');
        document.querySelector('span.error-password').classList.add('active');
        rez++;
    }
    if (rez !== 5){
        formAuthorization_a.style.pointerEvents = 'auto';
    }
});

$(function () {
    $('#tabs-block_holder').tabs({
        activate: function (event, ui) {
            ui.oldTab.removeClass('active-tab');
            ui.newTab.addClass('active-tab');
        },
     });
});

$(function () {
    $('#tabs-days').tabs({
        activate: function (event, ui) {
            ui.oldTab.removeClass('active-tab_day');
            ui.newTab.addClass('active-tab_day');
        },
    });
});
