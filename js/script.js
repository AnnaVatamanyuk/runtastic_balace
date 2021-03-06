(function(a){a.fn.circliful=function(b,d){var c=a.extend({fgcolor:"#556b2f",bgcolor:"#eee",fill:false,width:15,dimension:200,fontsize:15,percent:50,animationstep:1,iconsize:"20px",iconcolor:"#999",border:"default",complete:null},b);return this.each(function(){var w=["fgcolor","bgcolor","fill","width","dimension","fontsize","animationstep","endPercent","icon","iconcolor","iconsize","border"];var f={};var F="";var n=0;var t=a(this);var A=false;var v,G;t.addClass("circliful");e(t);if(t.data("text")!=undefined){v=t.data("text");if(t.data("icon")!=undefined){F=a("<i></i>").addClass("fa "+a(this).data("icon")).css({color:f.iconcolor,"font-size":f.iconsize})}if(t.data("type")!=undefined){j=a(this).data("type");if(j=="half"){s(t,"circle-text-half",(f.dimension/1.45))}else{s(t,"circle-text",f.dimension)}}else{s(t,"circle-text",f.dimension)}}if(a(this).data("total")!=undefined&&a(this).data("part")!=undefined){var I=a(this).data("total")/100;percent=((a(this).data("part")/I)/100).toFixed(3);n=(a(this).data("part")/I).toFixed(3)}else{if(a(this).data("percent")!=undefined){percent=a(this).data("percent")/100;n=a(this).data("percent")}else{percent=c.percent/100}}if(a(this).data("info")!=undefined){G=a(this).data("info");if(a(this).data("type")!=undefined){j=a(this).data("type");if(j=="half"){D(t,0.9)}else{D(t,1.25)}}else{D(t,1.25)}}a(this).width(f.dimension+"px");var i=a("<canvas></canvas>").attr({width:f.dimension,height:f.dimension}).appendTo(a(this)).get(0);var g=i.getContext("2d");var r=i.width/2;var q=i.height/2;var C=f.percent*360;var H=C*(Math.PI/180);var l=i.width/2.5;var B=2.3*Math.PI;var z=0;var E=false;var o=f.animationstep===0?n:0;var p=Math.max(f.animationstep,0);var u=Math.PI*2;var h=Math.PI/2;var j="";var k=true;if(a(this).data("type")!=undefined){j=a(this).data("type");if(j=="half"){B=2*Math.PI;z=3.13;u=Math.PI*1;h=Math.PI/0.996}}function s(J,x,y){a("<span></span>").appendTo(J).addClass(x).text(v).prepend(F).css({"line-height":y+"px","font-size":f.fontsize+"px"})}function D(y,x){a("<span></span>").appendTo(y).addClass("circle-info-half").css("line-height",(f.dimension*x)+"px")}function e(x){a.each(w,function(y,J){if(x.data(J)!=undefined){f[J]=x.data(J)}else{f[J]=a(c).attr(J)}if(J=="fill"&&x.data("fill")!=undefined){A=true}})}function m(x){g.clearRect(0,0,i.width,i.height);g.beginPath();g.arc(r,q,l,z,B,false);g.lineWidth=f.width+1;g.strokeStyle=f.bgcolor;g.stroke();if(A){g.fillStyle=f.fill;g.fill()}g.beginPath();g.arc(r,q,l,-(h),((u)*x)-h,false);if(f.border=="outline"){g.lineWidth=f.width+13}else{if(f.border=="inline"){g.lineWidth=f.width-13}}g.strokeStyle=f.fgcolor;g.stroke();if(o<n){o+=p;requestAnimationFrame(function(){m(Math.min(o,n)/100)},t)}if(o==n&&k&&typeof(b)!="undefined"){if(a.isFunction(b.complete)){b.complete();k=false}}}m(o/100)})}}(jQuery));
//!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

!function (t) {
    var n = t.event.dispatch || t.event.handle,
        e = t.event.special,
        a = "D" + +new Date,
        l = "D" + (+new Date + 1);
    e.scrollstart = {
        setup: function (l) {
            var c, s = t.extend({
                    latency: e.scrollstop.latency
                }, l),
                i = function (t) {
                    var e = this,
                        a = arguments;
                    c ? clearTimeout(c) : (t.type = "scrollstart", n.apply(e, a)), c = setTimeout(function () {
                        c = null
                    }, s.latency)
                };
            t(this).bind("scroll", i).data(a, i)
        },
        teardown: function () {
            t(this).unbind("scroll", t(this).data(a))
        }
    }, e.scrollstop = {
        latency: 250,
        setup: function (a) {
            var c, s = t.extend({
                    latency: e.scrollstop.latency
                }, a),
                i = function (t) {
                    var e = this,
                        a = arguments;
                    c && clearTimeout(c), c = setTimeout(function () {
                        c = null, t.type = "scrollstop", n.apply(e, a)
                    }, s.latency)
                };
            t(this).bind("scroll", i).data(l, i)
        },
        teardown: function () {
            t(this).unbind("scroll", t(this).data(l))
        }
    }
}(jQuery);

(function ($) {

    $.fn.picker = function (json, callback) {
        var options = json.data;
        var lineHeight = 30;
        var $ele = $(this);
        $ele.empty();
        $ele.addClass("picker-wrapper");
        $ele.append('<div class="clone-scroller"></div>');
        $ele.append('<div class="picker-up"></div>');
        $ele.append('<div class="picker-down"></div>');
        $ele.append('<div class="picker-scroller"></div>');

        if (typeof json.lineHeight != "undefined") {
            lineHeight = json.lineHeight;
        }
        $.each(options, function (index, option) {
            $ele.find('.clone-scroller').append('<div class="option">' + option + '</div>');
            $ele.find('.picker-scroller').append('<div class="option">' + option + '</div>');
        });
        $ele.find('.clone-scroller').bind("scroll", function () {
            clockWise(lineHeight, $ele, callback);
        });
        $ele.find(".clone-scroller").bind("scrollstop", function () {
            var scrollAmount = Math.round($(this).scrollTop() / lineHeight) * lineHeight;
            $(this).parent().find(".clone-scroller").animate({
                scrollTop: scrollAmount
            }, 100);

            var eIndex = Math.round(unit / 22.5);
            var $scroller = $ele.find(".picker-scroller");
            var $cloneScrollTop = $ele.find(".clone-scroller").scrollTop();
            var $options = $scroller.find(".option");
            var $optionsNo = $options.length;
            var $cloneHeight = lineHeight * $optionsNo;
            var totalDeg = 22.5 * $optionsNo;
            var unit = totalDeg / $cloneHeight * $cloneScrollTop;

            unit = Math.round(unit / 22.5) * 22.5;
            $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit + "deg)");

        });

        /*setting css*/
        if (typeof json.lineHeight != "undefined") {
            $ele.css("height", (lineHeight * 7) + "px");
            $ele.css("line-height", lineHeight + "px");
            $ele.find('.clone-scroller').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find('.picker-scroller').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find(".picker-up").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down").css("top", (lineHeight * 4) + "px");
        }
        // default selected
        if (typeof json.selected != "undefined") {
            $ele.find('.clone-scroller').scrollTop(lineHeight * json.selected);
            $ele.find('.picker-scroller').scrollTop(lineHeight * json.selected);
        }

        $ele.find('.picker-scroller').find(".option").each(function (index, $option) {
            $option = $($option);
            $option.css("-webkit-transform", "rotateX(-" + (22.5 * index) + "deg) translateZ(90px)");
            if (index > 7) {
                $option.hide();
            }
        });

    };
}(jQuery));

function clockWise(lineHeight, $ele, callback) {
    var $scroller = $ele.find(".picker-scroller");
    var $cloneScrollTop = $ele.find(".clone-scroller").scrollTop();
    var $options = $scroller.find(".option");
    var $optionsNo = $options.length;
    var $cloneHeight = lineHeight * $optionsNo;
    var totalDeg = 22.5 * $optionsNo;
    var unit = totalDeg / $cloneHeight * $cloneScrollTop;
    $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit + "deg)");

    var eIndex = Math.round(unit / 22.5);
    $(".output").html(eIndex);
    if (typeof callback === 'function') {
        callback(eIndex);
    }
    $($options).hide();
    $($options.get(eIndex)).show();
    for (i = eIndex; i < (eIndex + 7); i++) {
        $($options.get(i)).show();
    }
    if (eIndex > 7) {
        for (i = eIndex; i >= (eIndex - 7); i--) {
            $($options.get(i)).show();
        }
    } else {
        for (i = 0; i < 8; i++) {
            $($options.get(i)).show();
        }
    }
}


// JS for project
jQuery(document).ready(function() {
    var CLIENT_ID = '66126975871-52kguv9dnrlt24l8rc46thadbd4ll50f';
    var SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];

    if (document.querySelector('.nav-opener')) {
        for (let i = 0; i < document.querySelectorAll('.nav-opener').length; i++) {
            document.querySelectorAll('.nav-opener')[i].addEventListener('click', function () {
                document.querySelector('.your-parameters').style.display = 'block'
            })
        }
    }

    if (document.querySelector('.form-control')) {
        document.querySelector('.form-control').addEventListener('click', function (){
            document.querySelector('.form-control').style.placeholder = ''
        })
    }

    if (document.querySelector('.your-parameters .arrow-back')) {
        document.querySelector('.your-parameters .arrow-back').addEventListener('click', function () {
            document.querySelector('.your-parameters').style.display = 'none'
        })
    }

    if (document.querySelector('.arrow-btn_style')) {
        document.querySelector('.arrow-btn_style').addEventListener('click', function () {
            document.querySelector('.your-parameters').style.display = 'block'
        })
    }

    if (document.querySelector('.social-reg')) {
        document.querySelector('.social-reg').addEventListener('click', function () {
            document.querySelector('.registration-popup').style.display = 'block'
        })
    }

    if (document.querySelector('.registration-popup .arrow-back')) {
        document.querySelector('.registration-popup .arrow-back').addEventListener('click', function () {
            document.querySelector('.registration-popup').style.display = 'none'
        })
    }

    if (document.querySelector('.registration-photo input')) {
        document.querySelector('.registration-photo input').addEventListener('change', function () {
            document.querySelector('.registration-photo #blah').style.display = 'block';
            document.querySelector('.registration-photo label').style.display = 'none';
        })
    }

    if (document.querySelector('.registration-text a')) {
        document.querySelector('.registration-text a').addEventListener('click', function (){
            document.querySelector('.authorization-popup').style.display = 'block'
        })
    }

    if (document.querySelector('.authorization-popup .arrow-back')) {
        document.querySelector('.authorization-popup .arrow-back').addEventListener('click', function () {
            document.querySelector('.authorization-popup').style.display = 'none'
        })
    }

    if (document.querySelector('.choose-eat_detail')) {
        document.querySelector('.choose-eat_detail').addEventListener('click', function () {
            document.querySelector('.choose-day').style.display = 'block'
        })
    }

    if (document.querySelector('.friends .container')) {
        document.querySelector('.friends .container').addEventListener('click', function () {
            document.querySelector('.add-friends').style.display = 'block'
        })
    }

    if (document.querySelector('.add-friends .arrow-back')) {
        document.querySelector('.add-friends .arrow-back').addEventListener('click', function () {
            document.querySelector('.add-friends').style.display = 'none'
        })
    }

    for (let i = 0; i <= document.querySelectorAll('.choose-day li').length; i++) {
        if (document.querySelectorAll('.choose-day li')[i]) {
            document.querySelectorAll('.choose-day li')[i].addEventListener('click', function (){
                document.querySelector('.choose-day').style.display = 'none'
            })
        }
    }

    const addEat = document.querySelectorAll('.add-eat a')
    for (let i = 0; i <= addEat.length; i++) {
        if (addEat[i]) {
            addEat[i].addEventListener('click', function () {
                $("#tabs-block_holder").tabs({active: 2});
            })
        }
    }

    const weightGr = document.querySelector('#g-picker');

    //const btnChancelAll = document.querySelectorAll('.button-cancel');
    //console.log(btnChancelAll)
    //if (btnChancelAll) {
        //btnChancelAll.forEach(function (element) {
            jQuery('.button-cancel').on('click', function (e) {
                e.preventDefault();
                console.log('dng');
                jQuery(this).parents('.overlay').hide();
                console.log('dng');
            });
        //});
    //}
    const inpPersonBirthday = document.querySelector('[ name="person-birthday"]');
    if (inpPersonBirthday) {
        inpPersonBirthday.addEventListener('click', function () {
            document.querySelector('.modal-data-birthday').style.display = 'block';
        })
    }

    const btnBirth = document.querySelector('.button-birthday');
    let objCcal = {};

    var birthDate = {
        day: 1,
        month: 1,
        year: new Date().getFullYear() - 18
    };

    $(document).ready(function () {
        var days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }

        $("#day-picker").picker({
            data: days,
            lineHeight: 30,
            selected: birthDate.day
        }, function (s) {
            birthDate.day = s + 1;
        });
        var months = [
            'jan',
            'feb',
            'mar',
            'apr',
            'may',
            'jun',
            'jul',
            'aug',
            'sep',
            'okt',
            'nov',
            'dec'
        ];
        $("#month-picker").picker({
            data: months,
            lineHeight: 30,
            selected: birthDate.month
        }, function (s) {
            birthDate.month = s + 1;
        });
        var years = [];
        for (let i = new Date().getFullYear() - 100; i <= new Date().getFullYear() + 100; i++) {
            years.push(i);
        }
        $("#year-picker").picker({
            data: years,
            lineHeight: 30,
            selected: birthDate.year
        }, function (s) {
            birthDate.year = years[s];
        });
    });
    if (btnBirth) {
        btnBirth.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonBirthday.value = '';
            if (String(birthDate.day).length === 1) {
                birthDate.day = '0' + birthDate.day;
            }
            if (String(birthDate.month).length === 1) {
                birthDate.month = '0' + birthDate.month;
            }
            inpPersonBirthday.value = birthDate.day + '-' + birthDate.month + '-' + birthDate.year;
            inpPersonBirthday.classList.remove('error');
            if (inpPersonBirthday.value !== '') {
                document.querySelector('.modal-data-birthday').style.display = 'none'
            }
        });
    }

    const buttonHeight = document.querySelector('.button-height');
    const inpPersonHeight = document.querySelector('[name="person-height"]');
    const fut = document.querySelector('.metrics-fut');
    const futText = document.querySelector('.metrics-sm');

    let heightPerson = {
        yourHeight: 100,
    };

    $(document).ready(function () {
        let yourHeight = [];
        for (let i = 100; i <= 250; i++) {
            yourHeight.push(i);
        }

        $("#height-picker").picker({
            data: yourHeight,
            lineHeight: 30,
            selected: heightPerson.yourHeight
        }, function (k) {
            heightPerson.yourHeight = yourHeight[k];
        });
    });

    let chooseHeight = 'см';
    if (inpPersonHeight) {
        inpPersonHeight.addEventListener('click', function () {
            document.querySelector('.modal-data-height').style.display = 'block'
            if (fut) {
                fut.addEventListener('click', function () {

                    if (chooseHeight === 'см') {
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
            inpPersonHeight.value = heightPerson.yourHeight + ' ' + chooseHeight;
            // objCcal.height = +selectHeight.value;
            inpPersonHeight.classList.remove('error');
            if (heightPerson.yourHeight !== '') {
                document.querySelector('.modal-data-height').style.display = 'none'
            }
        });
    }
    const funt = document.querySelector('.metrics-funt');
    const funtText = document.querySelector('.metrics-kg');
    const gText = document.querySelector('.metrics-g');
    const inpPersonWeight = document.querySelector('[name="person-weight"]');
    const buttonWeight = document.querySelector('.button-weight');

    let weightPerson = {
        kgWeight: 40,
        gWeight: 100,
    };

    $(document).ready(function () {
        let kgWeight = [];
        let gWeight = [];

        for (let i = 40; i <= 300; i++) {
            kgWeight.push(i);
        }

        for (let j = 100; j <= 999; j++) {
            gWeight.push(j);
        }

        $("#kg-picker").picker({
            data: kgWeight,
            lineHeight: 30,
            selected: weightPerson.kgWeight
        }, function (k) {
            weightPerson.kgWeight = kgWeight[k];
        });
        $("#g-picker").picker({
            data: gWeight,
            lineHeight: 30,
            selected: weightPerson.gWeight
        }, function (k) {
            weightPerson.gWeight = gWeight[k];
        });
    });

    let units = 'kg';
    if (inpPersonWeight) {
        inpPersonWeight.addEventListener('click', function () {
            document.querySelector('.modal-data-weight').style.display = 'block'
            if (funt) {
                funt.addEventListener('click', function () {
                    if (units === 'kg') {
                        units = 'bl';
                        funtText.textContent = 'bl';
                        gText.style.display = 'none'
                        weightGr.style.display = 'none';
                    } else {
                        units = 'kg';
                        funtText.textContent = 'kg';
                        weightGr.style.display = 'block';
                        gText.style.display = 'block'
                    }

                })
            }
        })
    }

    if (buttonWeight) {
        buttonWeight.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonWeight.value = '';
            if (units === 'kg') {
                inpPersonWeight.value = weightPerson.kgWeight +'.'+ weightPerson.gWeight+' '+units;
            } else {
                inpPersonWeight.value = weightPerson.kgWeight +' '+units;
            }
            //objCcal.weight = +selectWeight.value;
            inpPersonWeight.classList.remove('error');
            if (weightPerson.value !== '') {
                document.querySelector('.modal-data-weight').style.display = 'none'
            }
        });
    }

    const inpPersonTime = document.querySelector('[ name="person-time"]');
    if (inpPersonTime) {
        inpPersonTime.addEventListener('click', function (){
            document.querySelector('.modal-time').style.display = 'block';
        })
    }
    const inpPersonTimer = document.querySelector('[ name="person-timer"]');
    if (inpPersonTimer) {
        inpPersonTimer.addEventListener('click', function () {
            document.querySelector('.modal-timer').style.display = 'block';
        })
    }

    const buttonTime = document.querySelector('.button-time');
    const buttonTimeDone = document.querySelector('.button-time_done');

    let timeTraining = {
        hour: 0,
        minute: 40,
        second: 0
    };

    $(document).ready(function () {
        let hourTraining = [];
        let minuteTraining = [];
        let secondTraining = [];

        for (let i = 0; i <= 10; i++) {
            hourTraining.push(i);
        }

        for (let j = 0; j <= 59; j++) {
            minuteTraining.push(j);
        }

        for (let l = 0; l <= 59; l++) {
            secondTraining.push(l);
        }

        $("#hour-picker").picker({
            data: hourTraining,
            lineHeight: 30,
            selected: timeTraining.hourTraining = '00'
        }, function (k) {
            if (hourTraining[k] <= 9){
                timeTraining.hourTraining = '0' + hourTraining[k];
            }else
            timeTraining.hourTraining = hourTraining[k];
        });

        $("#minute-picker").picker({
            data: minuteTraining,
            lineHeight: 30,
            selected: timeTraining.minuteTraining = '00'
        }, function (k) {
            if (minuteTraining[k] <= 9){
                timeTraining.minuteTraining = '0' + minuteTraining[k];
            }else
                timeTraining.minuteTraining = minuteTraining[k];
        });

        $("#second-picker").picker({
            data: secondTraining,
            lineHeight: 30,
            selected: timeTraining.secondTraining = '00'
        }, function (k) {
            if (secondTraining[k] <= 9){
                timeTraining.secondTraining = '0' + secondTraining[k];
            }else
                timeTraining.secondTraining = secondTraining[k];
        });

        $("#minute-picker_time").picker({
            data: minuteTraining,
            lineHeight: 30,
            selected: timeTraining.minuteTraining = '00'
        }, function (k) {
            if (minuteTraining[k] <=9){
                timeTraining.minuteTraining = '0' + minuteTraining[k];
            }else
                timeTraining.minuteTraining = minuteTraining[k];
        });

        $("#second-picker_time").picker({
            data: secondTraining,
            lineHeight: 30,
            selected: timeTraining.secondTraining = '00'
        }, function (k) {
            if (secondTraining[k] <= 9){
                timeTraining.secondTraining = '0' + secondTraining[k];
            }else
                timeTraining.secondTraining = secondTraining[k];
        });
    });


    if (buttonTime) {
        buttonTime.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonTime.value = '';
            inpPersonTime.value = timeTraining.hourTraining +':'+ timeTraining.minuteTraining +':'+ timeTraining.secondTraining;
            //objCcal.weight = +selectWeight.value;
            inpPersonTime.classList.remove('error');
            if (timeTraining.value !== '') {
                document.querySelector('.modal-time').style.display = 'none'
            }
        });
    }


    if (buttonTimeDone) {
        buttonTimeDone.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonTimer.value = '';
            inpPersonTimer.value = timeTraining.minuteTraining+':'+timeTraining.secondTraining;
            //objCcal.weight = +selectWeight.value;
            inpPersonTimer.classList.remove('error');
            if (timeTraining.value !== '') {
                document.querySelector('.modal-timer').style.display = 'none'
            }
        });
    }

    const inpPersonDistance = document.querySelector('[ name="person-distance"]');
    if (inpPersonDistance) {
        inpPersonDistance.addEventListener('click', function () {
            document.querySelector('.modal-distance').style.display = 'block';
        })
    }
    const buttonDistance = document.querySelector('.button-distance');

    let distanceTraining = {
        kmTraining: 0,
        mTraining: 0
    };

    $(document).ready(function () {
        let kmTraining = [];
        let mTraining = [];

        for (let i = 0; i <= 100; i++) {
            kmTraining.push(i);
        }

        for (let j = 0; j <= 999; j++) {
            mTraining.push(j);
        }

        $("#km-picker").picker({
            data: kmTraining,
            lineHeight: 30,
            selected: distanceTraining.kmTraining
        }, function (k) {
                distanceTraining.kmTraining = kmTraining[k];
        });

        $("#m-picker").picker({
            data: mTraining,
            lineHeight: 30,
            selected: distanceTraining.mTraining
        }, function (k) {
            if (mTraining[k] <= 9){
                distanceTraining.mTraining = '0' + mTraining[k];
            }else
            distanceTraining.mTraining = mTraining[k];
        });
    });


    if (buttonDistance) {
        buttonDistance.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonDistance.value = '';
            inpPersonDistance.value = distanceTraining.kmTraining+'.'+distanceTraining.mTraining+'km';
            //objCcal.weight = +selectWeight.value;
            inpPersonDistance.classList.remove('error');
            if (distanceTraining.value !== '') {
                document.querySelector('.modal-distance').style.display = 'none'
            }
        });
    }

    const inpPersonCalories = document.querySelector('[ name="person-calories"]');
    if (inpPersonCalories) {
        inpPersonCalories.addEventListener('click', function () {
            document.querySelector('.modal-calories').style.display = 'block';
        })
    }
    const buttonCalories = document.querySelector('.button-calories');

    let caloriesTraining = {
        calories: 0
    };

    $(document).ready(function () {
        let calories = [];

        for (let i = 0; i <= 2000; i++) {
            calories.push(i);
        }

        $("#calories-picker").picker({
            data: calories,
            lineHeight: 30,
            selected: caloriesTraining.calories
        }, function (k) {
            caloriesTraining.calories = calories[k];
        });
    });


    if (buttonCalories) {
        buttonCalories.addEventListener('click', function (e) {
            e.preventDefault();
            inpPersonCalories.value = '';
            inpPersonCalories.value = caloriesTraining.calories + ' '+ 'cal';
            //objCcal.weight = +selectWeight.value;
            inpPersonCalories.classList.remove('error');
            if (caloriesTraining.value !== '') {
                document.querySelector('.modal-calories').style.display = 'none'
            }
        });
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
        fbLogin.addEventListener('click', function (){
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

    if ($('#tabs-block_holder').length) {
        $('#tabs-block_holder').tabs({
            activate: function (ui, e) {
                if (jQuery(e.newTab).hasClass('programs')){
                    $(".regular").not('.slick-initialized').slick({
                        dots: false,
                        arrows: false,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 925,
                                settings: {
                                    slidesToShow: 2
                                }
                            },
                            {
                                breakpoint: 530,
                                settings: {
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });
                }
                if (jQuery(e.newTab).hasClass('magazine')){
                    let i;
                    jQuery('.scroll-container').empty();
                    for (i = 1; i <= 31; i++) {
                        jQuery('.scroll-container').append('<div class="part" id="day-' + i + '">' +
                            '<a href="#content-day-' + i + '" class="yesterday">' + i + ' июня</a>' +
                            '</div>');
                    }
                    let count = 31;
                    let width = jQuery('.scroll-container > .part').last().outerWidth();
                    jQuery('.scroll-container').width(count * width);
                }
            }
        });
    }

    $(function () {
        $('.circlestat').circliful();
    });

    var myCanvas = document.getElementById("myCanvas");
    if (myCanvas) {
        myCanvas.width = 200;
        myCanvas.height = 200;


        var ctx = myCanvas.getContext("2d");

        function drawLine(ctx, startX, startY, endX, endY) {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }

        function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.stroke();
        }

        function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fill();
        }

        drawLine(ctx, 100, 100, 100, 100);
        drawArc(ctx, 150, 150, 150, 0, Math.PI / 3);
        drawPieSlice(ctx, 150, 150, 150, Math.PI / 2, Math.PI / 2 + Math.PI / 4, '#fff');

        var myVinyls = {
            "55% углеводов": 15,
            "15% белков": 5,
            "30% жиров": 10,
        };

        var Piechart = function (options) {
            this.options = options;
            this.canvas = options.canvas;
            this.ctx = this.canvas.getContext("2d");
            this.colors = options.colors;

            this.draw = function () {
                var total_value = 0;
                var color_index = 0;
                for (var categ in this.options.data) {
                    var val = this.options.data[categ];
                    total_value += val;
                }

                var start_angle = 0;
                for (categ in this.options.data) {
                    val = this.options.data[categ];
                    var slice_angle = 2 * Math.PI * val / total_value;

                    drawPieSlice(
                        this.ctx,
                        this.canvas.width / 2,
                        this.canvas.height / 2,
                        Math.min(this.canvas.width / 2, this.canvas.height / 2),
                        start_angle,
                        start_angle + slice_angle,
                        this.colors[color_index % this.colors.length]
                    );

                    start_angle += slice_angle;
                    color_index++;
                }

            }
        }
        var myPiechart = new Piechart(
            {
                canvas: myCanvas,
                data: myVinyls,
                colors: ["#e04a5f", "#68397d", "#f28618"]
            }
        );
        myPiechart.draw();

        var Piechart = function (options) {
            this.options = options;
            this.canvas = options.canvas;
            this.ctx = this.canvas.getContext("2d");
            this.colors = options.colors;

            this.draw = function () {
                var total_value = 0;
                var color_index = 0;
                for (var categ in this.options.data) {
                    var val = this.options.data[categ];
                    total_value += val;
                }

                var start_angle = 0;
                for (categ in this.options.data) {
                    val = this.options.data[categ];
                    var slice_angle = 2 * Math.PI * val / total_value;

                    drawPieSlice(
                        this.ctx,
                        this.canvas.width / 2,
                        this.canvas.height / 2,
                        Math.min(this.canvas.width / 2, this.canvas.height / 2),
                        start_angle,
                        start_angle + slice_angle,
                        this.colors[color_index % this.colors.length]
                    );

                    start_angle += slice_angle;
                    color_index++;
                }

                //drawing a white circle over the chart
                //to create the doughnut chart
                if (this.options.doughnutHoleSize) {
                    drawPieSlice(
                        this.ctx,
                        this.canvas.width / 2,
                        this.canvas.height / 2,
                        this.options.doughnutHoleSize * Math.min(this.canvas.width / 2, this.canvas.height / 2),
                        0,
                        2 * Math.PI,
                        "#fff"
                    );
                }

                if (this.options.legend) {
                    color_index = 0;
                    var legendHTML = "";
                    for (categ in this.options.data) {
                        legendHTML += "<div><span style='display:inline-block;width:20px;background-color:" + this.colors[color_index++] + ";'>&nbsp;</span> " + categ + "</div>";
                    }
                    this.options.legend.innerHTML = legendHTML;
                }
            }
        }

        var myDougnutChart = new Piechart(
            {
                canvas: myCanvas,
                data: myVinyls,
                colors: ["#e04a5f", "#68397d", "#f28618"],
                doughnutHoleSize: 0.5,
                legend: myLegend

            }
        );
        myDougnutChart.draw();
    }



    $('.ui-tabs-tab').on('click', function () {

    })

    const settingsProfile = document.querySelector('.settings')
    if (settingsProfile) {
        settingsProfile.addEventListener('click', function () {
            document.querySelector('.settings-menu').style.display = 'block'
        })
    }

    const backToSettings = document.querySelector('.settings-menu .arrow-back')
    if (backToSettings) {
        backToSettings.addEventListener('click', function () {
            document.querySelector('.settings-menu').style.display = 'none'
        })
    }

    const notificationButton = document.querySelector('.notification-button')
    if (notificationButton) {
        notificationButton.addEventListener('click', function () {
            document.querySelector('.notifications-block').style.display = 'block'
        })
    }

    const closeNotification = document.querySelector('.notifications-block .arrow-back')
    if (closeNotification) {
        closeNotification.addEventListener('click', function () {
            document.querySelector('.notifications-block').style.display = 'none'
        })
    }

    const chooseWorkout = document.querySelectorAll('.choose-workout')
    if (chooseWorkout) {
        for (let i = 0; i < chooseWorkout.length; i++) {
            chooseWorkout[i].addEventListener('click', function () {
                document.querySelector('.choose-training').style.display = 'block';
            })
        }
    }

    const closeChooseWorkout = document.querySelector('.choose-training .arrow-back')
    if (closeChooseWorkout) {
        closeChooseWorkout.addEventListener('click', function () {
            document.querySelector('.choose-training').style.display = 'none'
        })
    }
    const addTraining = document.querySelector('.add-training')
    if (addTraining) {
        addTraining.addEventListener('click', function () {
            document.querySelector('.choose-training').style.display = 'none'
        })
    }

    const moreTraining = document.querySelector('.more-training')
    if (moreTraining) {
        moreTraining.addEventListener('click', function () {
            document.querySelector('.training-list').style.display = 'block'
        })
    }

    const closeTraining = document.querySelector('.training-list .arrow-back')
    if (closeTraining) {
        closeTraining.addEventListener('click', function () {
            document.querySelector('.training-list').style.display = 'none'
        })
    }

    const searchTraining = document.querySelector('.button-search-training')
    if (searchTraining) {
        searchTraining.addEventListener('click', function () {
            document.querySelector('.search-training').style.display = 'block'
        })
    }

    const openProfile = document.querySelector('.profile')
    if (openProfile) {
        openProfile.addEventListener('click', function () {
            document.querySelector('.profile-block').style.display = 'block'
        })
    }

    const closeProfile = document.querySelector('.profile-block .arrow-back')
    if (closeProfile) {
        closeProfile.addEventListener('click', function () {
            document.querySelector('.profile-block').style.display = 'none'
        })
    }

    const openUnits = document.querySelector('.unit')
    if (openUnits) {
        openUnits.addEventListener('click', function () {
            document.querySelector('.units-block').style.display = 'block'
        })
    }

    const closeUnits = document.querySelector('.units-block .arrow-back')
    if (closeUnits) {
        closeUnits.addEventListener('click', function () {
            document.querySelector('.units-block').style.display = 'none'
        })
    }

    const openConf = document.querySelector('.confidentiality')
    if (openConf) {
        openConf.addEventListener('click', function () {
            document.querySelector('.confidentiality-block').style.display = 'block'
        })
    }

    const closeConf = document.querySelector('.confidentiality-block .arrow-back')
    if (closeConf) {
        closeConf.addEventListener('click', function () {
            document.querySelector('.confidentiality-block').style.display = 'none'
        })
    }

    const openFeedback = document.querySelector('.support-feedback')
    if (openFeedback) {
        openFeedback.addEventListener('click', function () {
            document.querySelector('.support-feedback_block').style.display = 'block'
        })
    }

    const closeFeedback = document.querySelector('.support-feedback_block .arrow-back')
    if (closeFeedback) {
        closeFeedback.addEventListener('click', function () {
            document.querySelector('.support-feedback_block').style.display = 'none'
        })
    }

    const openRules = document.querySelector('.terms-conditions')
    if (openRules) {
        openRules.addEventListener('click', function () {
            document.querySelector('.terms-conditions_block').style.display = 'block'
        })
    }

    const closeRules = document.querySelector('.terms-conditions_block .arrow-back')
    if (closeRules) {
        closeRules.addEventListener('click', function () {
            document.querySelector('.terms-conditions_block').style.display = 'none'
        })
    }

    const openExit = document.querySelector('.exit')
    if (openExit) {
        openExit.addEventListener('click', function () {
            document.querySelector('.exit-block').style.display = 'block'
        })
    }

    const closeExit = document.querySelector('.exit-block .arrow-back')
    if (closeExit) {
        closeExit.addEventListener('click', function () {
            document.querySelector('.exit-block').style.display = 'none'
        })
    }

    const blog = document.querySelector('.runtastic-blog')
    if (blog) {
        blog.addEventListener('click', function () {
            document.querySelector('.blog').style.display = 'block'
        })
    }

    const closeBlog = document.querySelector('.blog .arrow-back')
    if (closeBlog) {
        closeBlog.addEventListener('click', function () {
            document.querySelector('.blog').style.display = 'none'
        })
    }

    const normaCalories = document.querySelector('.calories-norma-title p');
    if (normaCalories) {
        normaCalories.addEventListener('click', function () {
            document.querySelector('.change-norma-blog').style.display = 'block'
        })
    }

    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function () {
            document.querySelector('.change-norma-blog').style.display = 'none'
        })
    }

    let changeNormaBlog = document.querySelector('.change-norma-blog input[type=range]'),
        changeNormaOutput = document.querySelector('.change-norma-blog output');

    if (changeNormaOutput) {
        changeNormaOutput.innerHTML = changeNormaBlog.value;
    }

    if (changeNormaBlog) {
        changeNormaBlog.addEventListener('change', function () {
            changeNormaOutput.innerHTML = changeNormaBlog.value;
        }, false);
    }

    // const rangeColor = document.querySelector('.change-range input[type=range]::-webkit-slider-thumb')
    let inputRange = document.getElementsByClassName('range-norma')[0],
        maxValue = 3000,
        speed = 5,
        currValue, rafID;
    if (inputRange) {
        inputRange.min = 0;
        inputRange.max = maxValue;

// handle range animation
        function animateHandler() {
            var transX = currValue - maxValue;
            inputRange.value = currValue;
            if (this.value < 1029) {
                inputRange.classList.remove('red');
                inputRange.classList.remove('yellow');
                inputRange.classList.add('green');
            }
            if (this.value > 1029 && this.value < 2223) {
                inputRange.classList.remove('green');
                inputRange.classList.remove('red');
                inputRange.classList.add('yellow');
            }
            if (this.value > 2223 && this.value < 3000) {
                inputRange.classList.remove('green');
                inputRange.classList.add('red');
                inputRange.classList.remove('yellow');
            }
            if (currValue > -1) {
                window.requestAnimationFrame(animateHandler);
            }
            currValue = currValue - speed;
        }

        inputRange.addEventListener('change', function () {
            //Change slide thumb color on way down
            if (this.value < 1029) {
                inputRange.classList.remove('red');
                inputRange.classList.remove('yellow');
                inputRange.classList.add('green');
            }
            if (this.value > 1029 && this.value < 2223) {
                inputRange.classList.remove('green');
                inputRange.classList.remove('red');
                inputRange.classList.add('yellow');
            }
            if (this.value > 2223 && this.value < 3000) {
                inputRange.classList.remove('green');
                inputRange.classList.add('red');
                inputRange.classList.remove('yellow');
            }
        });
    }
    const searchTrainingInput = document.querySelector('.search-training')
    const trainingListBlock = jQuery('.training-list-block ul')
    if (searchTrainingInput) {
        let trainingName = [
            {
                id: 'skiing',
                name: 'лыжи',
                image: './../images/Skiing.png'
            },
            {
                id: 'motor-sport',
                name: 'мотоспорт',
                image: './../images/motor-sport.png'
            },
            {
                id: 'table-tennis',
                name: 'настольный тенис',
                image: './../images/table-tennis.png'
            },
            {
                id: 'paraglider',
                name: 'параплан',
                image: './../images/paraglider.png'
            },
            {
                id: 'sailing',
                name: 'парусный спорт',
                image: './../images/Sailing.png'
            },
            {
                id: 'pilates',
                name: 'пилатес',
                image: './../images/Pilates.png'
            },
            {
                id: 'swimming',
                name: 'плавание',
                image: './../images/swimming.png'
            },
            {
                id: 'hike',
                name: 'поход',
                image: './../images/hike.png'
            },
            {
                id: 'rugby',
                name: 'регби',
                image: './../images/rugby.png'
            },
            {
                id: 'roller-skis',
                name: 'роликовые лыжи',
                image: './../images/roller-skis.png'
            },
            {
                id: 'hand-bike',
                name: 'ручной велосипед',
                image: './../images/hand-bike.png'
            },
            {
                id: 'fishing',
                name: 'рыбная ловля со спинигом',
                image: './../images/fishing.png'
            },
            {
                id: 'power-training',
                name: 'силовая тренировка',
                image: './../images/power-training.png'
            },
            {
                id: 'rock-climbing',
                name: 'скалолазание',
                image: './../images/rock-climbing.png'
            },
            {
                id: 'squash',
                name: 'сквош',
                image: './../images/squash.png'
            }
        ];

        function autocompleteTraining(param) {
            let trainingFilter = [];
            if (param && param !== '') {
                param.toLowerCase();
                for (let i = 0; i < trainingName.length; i++) {
                    if (trainingName[i].name.includes(param)) {
                        trainingFilter.push(trainingName[i])
                    }
                }
            } else {
                trainingFilter = trainingName;
            }
            trainingListBlock.empty();

            for (let j = 0; j < trainingFilter.length; j++) {
                let li = jQuery('<li></li>').addClass('box d-f ai-c');
                li.append(jQuery('<input>').attr('type','checkbox').attr('id',trainingFilter[j].id));
                li.append(jQuery('<span></span>').addClass('check').append(
                    jQuery('<label></label>')
                        .attr('for', trainingFilter[j].id)
                        .append(jQuery('<img>')
                            .attr('src', trainingFilter[j].image).attr('alt', 'image description'))));
                li.append(jQuery('<span></span>').text(trainingFilter[j].name));
                trainingListBlock.append(li);
                // trainingListBlock.append('<li class="box d-f ai-c">
                //                         <input type="checkbox" id="${trainingFilter[j].id}">
                //                         <span class="check"></span>
                //                         <label for="${trainingFilter[j].id}"><img src="${trainingFilter[j].image}" alt="image description"></label>
                //                         <span>${trainingFilter[j].name}</span>
                //                         </li>`)
            }
        }

        autocompleteTraining();

        document.querySelector('.search-training').oninput = function () {
            autocompleteTraining(searchTrainingInput.value)
        }
    }

    const searchFriends = document.querySelector('#search-friends');
    const friendsList = jQuery('.add-friends ul')

    let friendsArray = [
        {
            name: 'Евгений',
            firstName: 'Иваненко'
        },
        {
            name: 'Олег',
            firstName: 'Пренткович'
        },
        {
            name: 'Виктор',

            firstName: 'Френдий'
        },
        {
            name: 'Алла',
            firstName: 'Мельник'
        },
        {
            name: 'Лариса',
            firstName: 'Куфлей'
        }
    ];

    function autocompleteFriends(param) {
        let friendsFilter = [];
        if (param && param !== '') {
            param.toLowerCase();
            for (let i = 0; i < friendsArray.length; i++) {
                if (friendsArray[i].name.includes(param) || friendsArray[i].firstName.includes(param)) {
                    friendsFilter.push(friendsArray[i])
                }
            }
        } else {
            friendsFilter = friendsArray;
        }
        friendsList.empty();

        for (let j = 0; j < friendsFilter.length; j++) {
            let li = jQuery('<li></li>').addClass('friends-info d-f ai-c');
            li.append(jQuery('<div></div>').addClass('friends-img'));
            li.append(jQuery('<div></div>').addClass('friends-text').html(friendsFilter[j].firstName + ' ' + friendsFilter[j].name));
            friendsList.append(li);
            // friendsList.append(`<li class="friends-info d-f ai-c">
            //                         <div class="friends-img"></div>
            //                         <div class="friends-text">${friendsFilter[j].firstName} ${friendsFilter[j].name}</div>
            //                     </li>`)
        }
    }

    autocompleteFriends();
    if (document.querySelector('#search-friends')) {
        document.querySelector('#search-friends').oninput = function () {
            autocompleteFriends(searchFriends.value)
        }
    }

    if (document.querySelector('#news .tab-background img')) {
        document.querySelector('#news .tab-background img').addEventListener('click', function () {
            $("#tabs-block_holder").tabs({
                active: 4,
                activate: jQuery('.add-friends').show()
            })
        })
    }

    if (document.querySelector('.news-text span')) {
        document.querySelector('.news-text span').addEventListener('click', function () {
            $("#tabs-block_holder").tabs({
                active: 4,
                activate: jQuery('.add-friends').show()
            })
        })
    }

    let monthNames = [ "Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Ауг", "Сент", "Окт", "Нояб", "Дек" ];

    $(function () {
        $("#datepicker").datepicker({
            showOn: "button",
            buttonImage: "./../images/calendar-alt-regular.svg",
            buttonImageOnly: true,
            buttonText: "Select date",
            dateFormat: 'dd-mm-yy',
            onSelect: function(value, date) {
                if (jQuery(window).width() <= 625){
                    console.log(jQuery('#makeMeScrollable').scrollLeft())
                    console.log(jQuery('#day-'+ date.selectedDay).offset())
                    jQuery('#makeMeScrollable').scrollLeft(jQuery('#makeMeScrollable').scrollLeft() + jQuery('#day-'+ date.selectedDay).offset().left - 50)
                } else{
                    console.log(jQuery('#day-'+ date.selectedDay).offset());
                    jQuery('#makeMeScrollable').scrollLeft(jQuery('#makeMeScrollable').scrollLeft() + jQuery('#day-'+ date.selectedDay).offset().left - 520);
                }
            },
            todayBtn: "linked",
            startView: 0, maxViewMode: 0,minViewMode:0
        })
    });

})
