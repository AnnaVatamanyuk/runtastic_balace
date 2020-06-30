(function(a){a.fn.circliful=function(b,d){var c=a.extend({fgcolor:"#556b2f",bgcolor:"#eee",fill:false,width:15,dimension:200,fontsize:15,percent:50,animationstep:1,iconsize:"20px",iconcolor:"#999",border:"default",complete:null},b);return this.each(function(){var w=["fgcolor","bgcolor","fill","width","dimension","fontsize","animationstep","endPercent","icon","iconcolor","iconsize","border"];var f={};var F="";var n=0;var t=a(this);var A=false;var v,G;t.addClass("circliful");e(t);if(t.data("text")!=undefined){v=t.data("text");if(t.data("icon")!=undefined){F=a("<i></i>").addClass("fa "+a(this).data("icon")).css({color:f.iconcolor,"font-size":f.iconsize})}if(t.data("type")!=undefined){j=a(this).data("type");if(j=="half"){s(t,"circle-text-half",(f.dimension/1.45))}else{s(t,"circle-text",f.dimension)}}else{s(t,"circle-text",f.dimension)}}if(a(this).data("total")!=undefined&&a(this).data("part")!=undefined){var I=a(this).data("total")/100;percent=((a(this).data("part")/I)/100).toFixed(3);n=(a(this).data("part")/I).toFixed(3)}else{if(a(this).data("percent")!=undefined){percent=a(this).data("percent")/100;n=a(this).data("percent")}else{percent=c.percent/100}}if(a(this).data("info")!=undefined){G=a(this).data("info");if(a(this).data("type")!=undefined){j=a(this).data("type");if(j=="half"){D(t,0.9)}else{D(t,1.25)}}else{D(t,1.25)}}a(this).width(f.dimension+"px");var i=a("<canvas></canvas>").attr({width:f.dimension,height:f.dimension}).appendTo(a(this)).get(0);var g=i.getContext("2d");var r=i.width/2;var q=i.height/2;var C=f.percent*360;var H=C*(Math.PI/180);var l=i.width/2.5;var B=2.3*Math.PI;var z=0;var E=false;var o=f.animationstep===0?n:0;var p=Math.max(f.animationstep,0);var u=Math.PI*2;var h=Math.PI/2;var j="";var k=true;if(a(this).data("type")!=undefined){j=a(this).data("type");if(j=="half"){B=2*Math.PI;z=3.13;u=Math.PI*1;h=Math.PI/0.996}}function s(J,x,y){a("<span></span>").appendTo(J).addClass(x).text(v).prepend(F).css({"line-height":y+"px","font-size":f.fontsize+"px"})}function D(y,x){a("<span></span>").appendTo(y).addClass("circle-info-half").css("line-height",(f.dimension*x)+"px")}function e(x){a.each(w,function(y,J){if(x.data(J)!=undefined){f[J]=x.data(J)}else{f[J]=a(c).attr(J)}if(J=="fill"&&x.data("fill")!=undefined){A=true}})}function m(x){g.clearRect(0,0,i.width,i.height);g.beginPath();g.arc(r,q,l,z,B,false);g.lineWidth=f.width+1;g.strokeStyle=f.bgcolor;g.stroke();if(A){g.fillStyle=f.fill;g.fill()}g.beginPath();g.arc(r,q,l,-(h),((u)*x)-h,false);if(f.border=="outline"){g.lineWidth=f.width+13}else{if(f.border=="inline"){g.lineWidth=f.width-13}}g.strokeStyle=f.fgcolor;g.stroke();if(o<n){o+=p;requestAnimationFrame(function(){m(Math.min(o,n)/100)},t)}if(o==n&&k&&typeof(b)!="undefined"){if(a.isFunction(b.complete)){b.complete();k=false}}}m(o/100)})}}(jQuery));


window.onload = function() {
    var CLIENT_ID = '66126975871-52kguv9dnrlt24l8rc46thadbd4ll50f';
    var SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];

    if (document.querySelector('.nav-opener')) {
        for (let i = 0; i < document.querySelectorAll('.nav-opener').length; i++) {
            document.querySelectorAll('.nav-opener')[i].addEventListener('click', () => {
                document.querySelector('.your-parameters').style.display = 'block'
            })
        }
    }

    if (document.querySelector('.form-control')) {
        document.querySelector('.form-control').addEventListener('click', () => {
            document.querySelector('.form-control').style.placeholder = ''
        })
    }

    if (document.querySelector('.your-parameters .arrow-back')) {
        document.querySelector('.your-parameters .arrow-back').addEventListener('click', () => {
            document.querySelector('.your-parameters').style.display = 'none'
        })
    }

    if (document.querySelector('.arrow-btn_style')) {
        document.querySelector('.arrow-btn_style').addEventListener('click', () => {
            document.querySelector('.your-parameters').style.display = 'block'
        })
    }

    if (document.querySelector('.social-reg')) {
        document.querySelector('.social-reg').addEventListener('click', () => {
            document.querySelector('.registration-popup').style.display = 'block'
        })
    }

    if (document.querySelector('.registration-popup .arrow-back')) {
        document.querySelector('.registration-popup .arrow-back').addEventListener('click', () => {
            document.querySelector('.registration-popup').style.display = 'none'
        })
    }

    if (document.querySelector('.registration-photo input')) {
        document.querySelector('.registration-photo input').addEventListener('change', () => {
            document.querySelector('.registration-photo #blah').style.display = 'block';
            document.querySelector('.registration-photo label').style.display = 'none';
        })
    }

    if (document.querySelector('.registration-text a')) {
        document.querySelector('.registration-text a').addEventListener('click', () => {
            document.querySelector('.authorization-popup').style.display = 'block'
        })
    }

    if (document.querySelector('.authorization-popup .arrow-back')) {
        document.querySelector('.authorization-popup .arrow-back').addEventListener('click', () => {
            document.querySelector('.authorization-popup').style.display = 'none'
        })
    }

    if (document.querySelector('.choose-eat_detail')) {
        document.querySelector('.choose-eat_detail').addEventListener('click', () => {
            document.querySelector('.choose-day').style.display = 'block'
        })
    }

    if (document.querySelector('.choose-day li')) {
        document.querySelector('.choose-day li').addEventListener('click', () => {
            document.querySelector('.choose-day').style.display = 'none'
        })
    }

    const inputBirth = document.querySelector('.input-data-birthday');
    const selectHeight = document.querySelector('#input-data-height');
    const selectWeight = document.querySelector('#input-data-weight');
    const selecWeightgr = document.querySelector('#input-data-weight-gr');

    const btnChancelAll = document.querySelectorAll('.button-cancel');
    if (btnChancelAll){
        btnChancelAll.forEach(element => {
            element.addEventListener('click', function (e) {
                e.preventDefault();
                e.target.closest('.overlay').style.display = 'none'
            });
        });
    }
    const inpPersonBirthday = document.querySelector('[ name="person-birthday"]');
    if (inpPersonBirthday){
        inpPersonBirthday.addEventListener('click' , () =>{
            document.querySelector('.modal-data-birthday').style.display = 'block';
        })
    }
    const btnBirth = document.querySelector('.button-birthday');
    let objCcal = {};
    if (btnBirth) {
        btnBirth.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonBirthday.value = '';
            let str = inputBirth.value.replace(
                /(\w+)-(\w+)-(\w+)/g,
                (match, p1, p2, p3) => {
                    return `${p3}-${p2}-${p1}`;
                },
            );
            inpPersonBirthday.value = str;
            inpPersonBirthday.classList.remove('error');
            objCcal.birthday = str;
            if (inpPersonBirthday.value !== '') {
                document.querySelector('.modal-data-birthday').style.display = 'none'
            }
        });
    }

    const buttonHeight = document.querySelector('.button-height');
    const inpPersonHeight = document.querySelector('[name="person-height"]');
    const fut = document.querySelector('.metrics-fut');
    const futText = document.querySelector('.metrics-sm');

    let chooseHeight = 'см';
    if (inpPersonHeight){
        inpPersonHeight.addEventListener('click', function() {
            document.querySelector('.modal-data-height').style.display = 'block'
            if (fut) {
                fut.addEventListener('click', function () {

                    if (chooseHeight === 'см'){
                        chooseHeight = 'ʼ';
                        futText.textContent = 'фут';
                    } else {
                        chooseHeight = 'см';
                        futText.textContent = 'см';
                    }
                })
            }
        })
    }

    if (buttonHeight) {
        buttonHeight.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonHeight.value = '';
            inpPersonHeight.value = `${selectHeight.value} ${chooseHeight}`;
            objCcal.height = +selectHeight.value;
             inpPersonHeight.classList.remove('error');
            if (selectHeight.value !== '') {
                document.querySelector('.modal-data-height').style.display = 'none'
            }
        });
    }
    const funt = document.querySelector('.metrics-funt');
    const funtText = document.querySelector('.metrics-kg');
    const inpPersonWeight = document.querySelector('[name="person-weight"]');
    const buttonWeight = document.querySelector('.button-weight');

    let units = 'kg';
    if (inpPersonWeight){
        inpPersonWeight.addEventListener('click', function() {
            document.querySelector('.modal-data-weight').style.display = 'block'
            if (funt) {
                funt.addEventListener('click', function () {
                    if (units === 'kg'){
                        units = 'bl';
                        funtText.textContent = 'bl';
                        selecWeightgr.setAttribute('disabled', true);
                    } else {
                        units = 'kg';
                        funtText.textContent = 'kg';
                        selecWeightgr.removeAttribute('disabled');
                    }

                })
            }
        })
    }

    if (buttonWeight) {
        buttonWeight.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonWeight.value = '';
            if (units === 'kg'){
                inpPersonWeight.value = `${selectWeight.value}.${selecWeightgr.value} ${units}`;
            } else {
                inpPersonWeight.value = `${selectWeight.value} ${units}`;
            }
            objCcal.weight = +selectWeight.value;
            inpPersonWeight.classList.remove('error');
            if (selectHeight.value !== '') {
                document.querySelector('.modal-data-weight').style.display = 'none'
            }
        });
    }

    for (let i = 100; i < 220; i++) {
        let op = document.createElement('option');
        op.value = i;
        op.textContent = i;
        if (selectHeight) {
            selectHeight.insertAdjacentElement('afterbegin', op);
        }
    }

    for (let i = 40; i < 170; i++) {
        let op = document.createElement('option');
        op.value = i;
        op.textContent = i;
        if (selectWeight) {
            selectWeight.insertAdjacentElement('afterbegin', op);
        }
    }

    let j = 100;
    for (let i = 0; i < 9; i++) {
        let op = document.createElement('option');
        op.value = j;
        op.textContent = j;
        j += 100;
        if (selecWeightgr) {
            selecWeightgr.insertAdjacentElement('afterbegin', op);
        }
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
                var widthImg = $('#blah').width();
                var widthContent = 342;
                if (+widthImg > +widthContent) {
                    var koef = +widthImg / +widthContent;
                    $("#koef").val(Math.round(koef * 1000));
                    $('#blah').attr('src', e.target.result).css('width', '100%');
                } else {
                }
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#AddImage").change(function () {
    $('#blah').attr('src', "");
    readURL(this);
});

    function handle_fb_data(response) {
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            console.log('Прилитело из ФБ: ' + JSON.stringify(response));
        });
    }

    const fbLogin = document.querySelector('.fb-login_btn')
    if (fbLogin) {
        fbLogin.addEventListener('click', () => {
            FB.getLoginStatus(function (response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    handle_fb_data(response);
                } else {
                    console.log('Юзер был не залогинен в самом ФБ, запускаем окно логинизирования');
                    FB.login(function (response) {
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
        })
    }

    window.fbAsyncInit = function () {
        FB.init({
            appId: '573467520199855',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function authorize(event) {
        var useImmdiate = event ? false : true;
        var authData = {
            client_id: CLIENT_ID,
            scope: SCOPES,
            immediate: useImmdiate
        };
        gapi.auth.authorize(authData, function (response) {
            var authButton = document.getElementById('auth-button');
            if (response.error) {
                authButton.hidden = false;
            } else {
                authButton.hidden = true;
                queryAccounts();
            }
        });
    }

    function queryAccounts() {
        gapi.client.load('analytics', 'v3').then(function () {
            gapi.client.analytics.management.accounts.list().then(handleAccounts);
        });
    }

    const singGoogle = document.querySelector('.social-google')
    if (singGoogle) {
        singGoogle.addEventListener('click', authorize)
    }

    const name = document.querySelector('#name');
    const firstName = document.querySelector('#first-name')
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    const submit = document.querySelector('.submit')
    const formAuthorization_a = document.querySelector('.form-authorization a')
    const error = document.querySelector('span.error-name')
    const authEmail = document.querySelector('.email-auth')
    const authPassword = document.querySelector('.password-auth')
    const submitAuth = document.querySelector('.submit-auth')

    if (submit) {
        submit.addEventListener('click', function (event) {
            let rez = 0;
            if (name.value.length < 2) {
                name.classList.add('invalid');
                error.classList.add('active');
                name.classList.remove('valid');
            } else {
                name.classList.remove('invalid');
                document.querySelector('span.error-name').classList.remove('active');
                name.classList.add('valid');
                rez++;
            }
            if (firstName.value.length < 2) {
                firstName.classList.add('invalid');
                firstName.classList.remove('valid');
                document.querySelector('span.error-first_name').classList.add('active');
            } else {
                firstName.classList.remove('invalid');
                document.querySelector('span.error-name').classList.remove('active');
                firstName.classList.add('valid');
                rez++;
            }
            if (email.value !== '' || email.value.match(/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/)) {
                email.classList.add('valid');
                email.classList.remove('invalid');
                document.querySelector('span.error-email').classList.remove('active');
            } else {
                email.classList.remove('valid');
                document.querySelector('span.error-email').classList.add('active');
                email.classList.add('invalid');
                rez++
            }
            if (password.value.length > 8 && password.value.match(/[0-9]/) && password.value.match(/[a-z]/) && password.value.match(/[A-Z]/)) {
                password.classList.remove('invalid');
                document.querySelector('span.error-password').classList.remove('active');
                password.classList.add('valid');
            } else {
                password.classList.add('invalid');
                password.classList.remove('valid');
                document.querySelector('span.error-password').classList.add('active');
                rez++;
            }
            if (rez !== 5) {
                formAuthorization_a.style.pointerEvents = 'auto';
            }
        });
    }

    if (submitAuth) {
        submitAuth.addEventListener('click', function () {
            let rez = 0;
            if (authEmail.length !== '' || authEmail.value.match(/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/)) {
                authEmail.classList.add('invalid');
                authEmail.classList.remove('valid');
                document.querySelector('span.error-email').classList.add('active');
            } else {
                authEmail.classList.remove('invalid');
                document.querySelector('span.error-email').classList.remove('active');
                authEmail.classList.add('valid');
                rez++
            }
            if (authPassword.length > 8 && authPassword.value.match(/[0-9]/) && authPassword.value.match(/[a-z]/) && authPassword.value.match(/[A-Z]/)) {
                authPassword.classList.remove('invalid');
                document.querySelector('span.error-password').classList.remove('active');
                authPassword.classList.add('valid');
            } else {
                authPassword.classList.add('invalid');
                authPassword.classList.remove('valid');
                document.querySelector('span.error-password').classList.add('active');
                rez++;
            }
            if (rez !== 2) {
                formAuthorization_a.style.pointerEvents = 'auto';
            }
        })
    }

    $(function () {
        $('#tabs-block_holder').tabs({
        });
    });

    $(function () {
        $('#tabs-days').tabs({
            active: 2
        });
    });

    $(function(){
        $('.circlestat').circliful();
    });
}


