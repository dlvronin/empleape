jQuery(document).ready(function($){$(window).scroll(function(e){var scrollTop=$(window).scrollTop();var winHeight=window.innerHeight;var animatedBlockFleft=$('.e-fadein--fromleft:not(.visible)').offset();if(animatedBlockFleft&&(scrollTop+winHeight/1.5)>=animatedBlockFleft.top){console.log('Animated Block position: '+animatedBlockFleft.top);$($('.e-fadein--fromleft:not(.visible)')[0]).addClass('visible')}
var animatedBlockFright=$('.e-fadein--fromright:not(.visible)').offset();if(animatedBlockFright&&(scrollTop+winHeight/1.5)>=animatedBlockFright.top){console.log('Animated Block position: '+animatedBlockFright.top);$($('.e-fadein--fromright:not(.visible)')[0]).addClass('visible')}
var animatedBlockFbottom=$('.e-fadein--frombottom:not(.visible)').offset();if(animatedBlockFbottom&&(scrollTop+winHeight/1.5)>=animatedBlockFbottom.top){console.log('Animated Block position: '+animatedBlockFbottom.top);$($('.e-fadein--frombottom:not(.visible)')[0]).addClass('visible')}})})