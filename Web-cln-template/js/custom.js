/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.autosize=n.exports}}(this,function(e,t){"use strict";var n,o,p="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return-1<n.indexOf(e)},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);-1<t&&(n.splice(t,1),o.splice(t,1))}}),c=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){c=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(r){if(r&&r.nodeName&&"TEXTAREA"===r.nodeName&&!p.has(r)){var e,n=null,o=null,i=null,d=function(){r.clientWidth!==o&&a()},l=function(t){window.removeEventListener("resize",d,!1),r.removeEventListener("input",a,!1),r.removeEventListener("keyup",a,!1),r.removeEventListener("autosize:destroy",l,!1),r.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach(function(e){r.style[e]=t[e]}),p.delete(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",l,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",a,!1),window.addEventListener("resize",d,!1),r.addEventListener("input",a,!1),r.addEventListener("autosize:update",a,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",p.set(r,{destroy:l,update:a}),"vertical"===(e=window.getComputedStyle(r,null)).resize?r.style.resize="none":"both"===e.resize&&(r.style.resize="horizontal"),n="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(n)&&(n=0),a()}function s(e){var t=r.style.width;r.style.width="0px",r.offsetWidth,r.style.width=t,r.style.overflowY=e}function u(){if(0!==r.scrollHeight){var e=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(r),t=document.documentElement&&document.documentElement.scrollTop;r.style.height="",r.style.height=r.scrollHeight+n+"px",o=r.clientWidth,e.forEach(function(e){e.node.scrollTop=e.scrollTop}),t&&(document.documentElement.scrollTop=t)}}function a(){u();var e=Math.round(parseFloat(r.style.height)),t=window.getComputedStyle(r,null),n="content-box"===t.boxSizing?Math.round(parseFloat(t.height)):r.offsetHeight;if(n<e?"hidden"===t.overflowY&&(s("scroll"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight):"hidden"!==t.overflowY&&(s("hidden"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight),i!==n){i=n;var o=c("autosize:resized");try{r.dispatchEvent(o)}catch(e){}}}}function i(e){var t=p.get(e);t&&t.destroy()}function d(e){var t=p.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return r(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=l,e.exports=t.default});
/*!
* Debounced Resize
*/
!function(a,b){var c=function(a,b,c){var d;return function(){function h(){c||a.apply(f,g),d=null}var f=this,g=arguments;d?clearTimeout(d):c&&a.apply(f,g),d=setTimeout(h,b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}}(jQuery,"smartresize");
/*!
* Equal Heights
*/
!function(a,b,c){equalheight=function(b){var f,c=0,d=0,e=new Array;a(b).each(function(){if(f=a(this),a(f).height("auto"),topPostion=f.position().top,d!=topPostion){for(currentDiv=0;currentDiv<e.length;currentDiv++)e[currentDiv].height(c);e.length=0,d=topPostion,c=f.height(),e.push(f)}else e.push(f),c=c<f.height()?f.height():c;for(currentDiv=0;currentDiv<e.length;currentDiv++)e[currentDiv].height(c)})}}(jQuery,this);

(function ($, root, undefined) {

    $(function () {

		$('.nav-header button').on('click', function() {
			$('header .nav-t-footer').toggle();
		});

		$('.team').on('click', function() {
			var t = $(this).attr('id');
			$('#'+ t + 'c').fadeIn('slow');
		})

		$('.team-popup-close').click(function(){
			$('.team-popup').fadeOut('slow');
		});

		$(document).on('click', '.team-popup', function(e) {
			let
				//Get target
				target = $( e.target );

			//Add target parents until
			target = target.add( target.parentsUntil('.team-popup') );

			if( !target.filter('.team-popup-align').length ) {
				$('.team-popup').fadeOut('slow');
			}

		})

        'use strict';

        autosize($('textarea'));

        $('input[type="text"], input[type="email"], input[type="date"], textarea').attr('autocomplete','off').attr('autocorrect','off').attr('autocapitalize','off').attr('spellcheck','false');

/*
        $(window).load(function() {
            equalheight('.services-item');
            equalheight('.document a');
        });

        $(window).smartresize(function(){
            equalheight('.services-item');
            equalheight('.document a');
        });
*/

        $('.widget .archive h5').click(function() {
            $('.widget .archive h5').removeClass('activearch');
            if ($(this).next('ul').is(":visible")) {
                $(this).next('ul').slideDown(500);
            } else {
                $('ul.archive-list').slideUp(500);
            }
            $(this).addClass('activearch');
            $(this).next('ul').slideDown(500);
        });

        $('.search-icon a').click(function(e) {
			$('#search-popup').fadeIn(500);
			e.preventDefault();
		});

        $('.close-search').click(function(e) {
			$('#search-popup').fadeOut(500);
			e.preventDefault();
		});

		// $('.nav-holder .nav-header button').click(function() {
		// 	$('.nav-footer.nav-t-footer').toggle();
		// });

		$('.wpcf7-form-control-wrap.dob').on("click", function(e){
			e.preventDefault();
			//console.log("date is showing");
			setTimeout(function(){$('.wpcf7-form-control-wrap.dob .picker').addClass('picker--opened').addClass('picker--focused'); }, 300);
		});

		$('.wpcf7-form-control-wrap').on("click", function(e){
			//e.preventDefault();
			var currentElement = $(this);
			currentElement.focus();
			setTimeout(function(){currentElement.find('input').addClass('active'); }, 300);
		});

    });

})(jQuery, this);
