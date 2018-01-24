	/*global jQuery:false */
jQuery.noConflict();
//dropdown script
jQuery(document).ready(
  function() {

		var submenu = jQuery("ul.sub-menu");
		submenu.parent().addClass('dropdown');
		submenu.addClass('dropdown-menu');
		var submenu1 = jQuery("dropdown-menu.children");
		submenu1.parent().addClass('dropdown');
		submenu1.addClass('dropdown-menu');
		var children =  jQuery("dropdown-menu.children");
		children.parent().addClass('dropdown');
		var menuul = jQuery(".menu ul");
		menuul.parent().addClass('dropdown');
		var child = jQuery(".dropdown .dropdown-menu");
		child.removeClass("children");

		var link = jQuery(".dropdown > a");
		link.append('<b class="caret"></b>');

		children.hover(
           function(){
               jQuery(this).parent().addClass('active');
           }, function(){
               jQuery(this).parent().removeClass('active');
           }
        );
        submenu.hover(
           function(){
               jQuery(this).parent().addClass('active');
           }, function(){
                 jQuery(this).parent().removeClass('active');
           }
        );

		var menu = jQuery(".menu ul");
       menu.addClass('nav');
       submenu1.removeClass("nav");

		var mainm = jQuery('.menu-main-container');

		mainm.css('display', 'block');

  }
);

jQuery.noConflict();
jQuery(document).ready(
  function() {
  "use strict";
//toggles
var toggleheading = jQuery(".block_toggles_wrapper .accordion-heading");
toggleheading.click(function() {
        if( jQuery(this).hasClass("open") ) {
            jQuery(this).removeClass("open").addClass("closed");
            jQuery(this).find('.fa-arrow-up').remove();
            jQuery(this).prepend('<i class="fa fa-arrow-down"></i>');
        }else{
            // if other menus are open remove open class and add closed
           jQuery(this).siblings().removeClass("open").addClass("closed");
            jQuery(this).removeClass("closed").addClass("open");
            jQuery(this).find('.fa-arrow-down').remove();
            jQuery(this).prepend('<i class="fa fa-arrow-up"></i>');
        }
});
//accordion
var accordionheading  = jQuery(".ui-accordion .ui-accordion-header");
accordionheading.click(function() {
        if( jQuery(this).hasClass("ui-accordion-header-active") ) {
            jQuery(this).removeClass("ui-accordion-header-active").addClass("ui-accordion-header");
            jQuery(this).find('.fa-arrow-up').remove();
            jQuery(this).prepend('<i class="fa fa-arrow-down"></i>');
        }else{
            // if other menus are open remove open class and add closed
           jQuery(this).siblings().removeClass("ui-accordion-header-active").addClass("ui-accordion-header");
            jQuery(this).removeClass("ui-accordion-header").addClass("ui-accordion-header-active");
            jQuery(this).find('.fa-arrow-down').remove();
            jQuery(this).prepend('<i class="fa fa-arrow-up"></i>');
        }
});
  }
);

jQuery.noConflict();
jQuery(document).ready(
  function() {
		"use strict";
		var searchsumb = jQuery('#searchform #searchsubmit');
		searchsumb.remove();
		var screenreader = jQuery('#searchform .screen-reader-text');
		screenreader.remove();
		var searchdiv = jQuery('#searchform div');
		searchdiv.append('<input type="hidden" value="post" name="post_type">');
		var searchtitle = jQuery('#searchform div h3');
		searchtitle.remove();
  }
);

jQuery.noConflict();
 jQuery(function () {
"use strict";
jQuery('[data-toggle=tooltip]').tooltip();
 });


jQuery.noConflict();
jQuery(document).ready(
  function() {
  "use strict";
jQuery().UItoTop({ easingType: 'easeOutQuart' });
  }
);


//hide lost password in modal
jQuery(document).ready(function($){
	"use strict";
	$('#LoginWithAjax_Remember').hide();$('#LoginWithAjax_Links_Remember').click(function(event){event.preventDefault();
		$('#LoginWithAjax_Remember').show('slow');});$('#LoginWithAjax_Links_Remember_Cancel').click(function(event){event.preventDefault();
			$('#LoginWithAjax_Remember').hide('slow');});});

jQuery.noConflict();
jQuery('.widget .title-wrapper').each(function(){
"use strict";
jQuery(this).nextAll().wrapAll('<div class="wcontainer" />');});
jQuery('.widget .wcontainer dl').after('<div class="clear"></div>');
jQuery('.widget .wcontainer').append('<div class="clear"></div>');

var topicwidgeticon = jQuery('.widget ul li .bbp-forum-title[href*="topic"]');
var forumwidgeticon = jQuery('.widget ul li .bbp-forum-title:not([href*="topic"])');
topicwidgeticon.prepend('<i class="fa fa-comment"></i>');
forumwidgeticon.prepend('<i class="fa fa-comments"></i>');
var topicwidgeticonfooter = jQuery('.footer_widget ul li .bbp-forum-title[href*="topic"]');
var forumwidgeticonfooter = jQuery('.footer_widget ul li .bbp-forum-title:not([href*="topic"])');
topicwidgeticonfooter.prepend('<i class="fa fa-comment"></i>');
forumwidgeticonfooter.prepend('<i class="fa fa-comments"></i>');

/***************** Image with Animation *******************/

jQuery('img.img-with-animation').each(function() {

	jQuery(this).appear(function() {
		if(jQuery(this).attr('data-animation') == 'fade-in-from-left'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'left' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in-from-right'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'right' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in-from-bottom'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'bottom' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in') {
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'grow-in') {
			var jQuerythat = jQuery(this);
			setTimeout(function(){
				jQuerythat.transition({ scale: 1, 'opacity':1 },900,'cubic-bezier(0.15, 0.84, 0.35, 1.25)');
			},jQuerythat.attr('data-delay'));
		}

	},{accX: 0, accY: -105},'easeInCubic');

});

/***************** Span with Animation *******************/

jQuery('span.i-with-animation').each(function() {

	jQuery(this).appear(function() {
		if(jQuery(this).attr('data-animation') == 'fade-in-from-left'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'left' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in-from-right'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'right' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in-from-bottom'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'bottom' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in') {
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'grow-in') {
			var jQuerythat = jQuery(this);
			setTimeout(function(){
				jQuerythat.transition({ scale: 1, 'opacity':1 },900,'cubic-bezier(0.15, 0.84, 0.35, 1.25)');
			},jQuerythat.attr('data-delay'));
		}

	},{accX: 0, accY: -105},'easeInCubic');

});


/***************** Skill with Animation *******************/

jQuery('div.b-with-animation').each(function() {

	jQuery(this).appear(function() {
		if(jQuery(this).attr('data-animation') == 'fade-in-from-left'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'left' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in-from-right'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'right' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in-from-bottom'){
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1,
				'bottom' : '0px'
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'fade-in') {
			jQuery(this).delay(jQuery(this).attr('data-delay')).animate({
				'opacity' : 1
			},800,'easeOutSine');
		} else if(jQuery(this).attr('data-animation') == 'grow-in') {
			var jQuerythat = jQuery(this);
			setTimeout(function(){
				jQuerythat.transition({ scale: 1, 'opacity':1 },900,'cubic-bezier(0.15, 0.84, 0.35, 1.25)');
			},jQuerythat.attr('data-delay'));
		}

	},{accX: 0, accY: -105},'easeInCubic');

});

/******************** Isotope portfolio ***********************/
if(jQuery.isFunction(jQuery.fn.imagesLoaded)){

	//isotope
	var container = jQuery('.iso');

	container.imagesLoaded( function(){
	// initialize Isotope
	container.isotope({
		// options...
		layoutMode : 'fitRows',
		resizable: false, // disable normal resizing
		// set columnWidth to a percentage of container width
		masonry: {
			columnWidth: container.width() / 4
		}
	});
	});
	// start new block
	jQuery('.cat a').click(function(){
		var selector = jQuery(this).attr('href');
		container.isotope({ filter: selector });
		return false;
	});
	// end new block

	// update columnWidth on window resize
	jQuery(window).smartresize(function(){
		//console.log(container.width());
		// set the widths on resize
		setWidths();
		container.isotope({
			// update columnWidth to a percentage of container width
			masonry: {
				columnWidth: getUnitWidth()
			}
		});
	}).resize();


/*  Isotope utility GetUnitWidth
    ========================================================================== */
function getUnitWidth() {
	var width;
	if (container.width() <= 320) {
		//console.log("320");
		width = Math.floor((container.width() - 40) / 1);
	} else if (container.width() >= 321 && container.width() <= 480) {
		//console.log("321 - 480");
		width = Math.floor((container.width() - 40) / 1);
	} else if (container.width() >= 481 && container.width() <= 662) {
		//console.log("481 - 768");
		width = Math.floor((container.width() - 40) / 2);
	} else if (container.width() >= 663 && container.width() <= 768) {
		//console.log("481 - 768");
		width = Math.floor((container.width() - 40) / 3);
	} else if (container.width() >= 769 && container.width() <= 979) {
		//console.log("769 - 979");
		width = Math.floor((container.width() - 40) / 4);
	} else if (container.width() >= 980 && container.width() <= 1200) {
		//console.log("980 - 1200");
		width = Math.floor((container.width() - 40) / 4);
	} else if (container.width() >= 1201 && container.width() <= 1600) {
		//console.log("1201 - 1600");
		width = Math.floor((container.width() - 40) / 7);
	} else if (container.width() >= 1601 && container.width() <= 1824) {
		//console.log("1601 - 1824");
		width = Math.floor((container.width() - 40) / 8);
	} else if (container.width() >= 1825) {
		//console.log("1825");
		width = Math.floor((container.width() - 40) / 10);
	}
	return width;
}


/*  Isotope utility SetWidths
    ========================================================================== */
function setWidths() {
	var unitWidth = getUnitWidth() - 0;
	container.children(":not(.width2)").css({
		width: unitWidth
	});

	if (container.width() >= 321 && container.width() <= 480) {
		 //console.log("eccoci 321");
		container.children(".width2").css({
			width: unitWidth * 1
		});
		container.children(".width4").css({
			width: unitWidth * 2
		});
		container.children(".width6").css({
			width: unitWidth * 3
		});
	}
	if (container.width() >= 481) {
		 //console.log("480");
		container.children(".width6").css({
			width: unitWidth * 4
		});
		container.children(".width4").css({
			width: unitWidth * 3
		});
		container.children(".width2").css({
			width: unitWidth * 2
		});
	} else {
		container.children(".width2").css({
			width: unitWidth
		});
	}
}

}


/******************** Isotope blog ***********************/
var blog = jQuery(".blog.normal-page");
if(blog.length != 0){
// Modified Isotope methods for gutters in masonry

jQuery.Isotope.prototype._getMasonryGutterColumns = function() {
	var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
	containerWidth = this.element.width();

	this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
	// Or use the size of the first item
	this.jQueryfilteredAtoms.outerWidth(true) ||
	// If there's no items, use size of container
	containerWidth;

	this.masonry.columnWidth += gutter;

	this.masonry.cols = Math.floor((containerWidth + gutter) / this.masonry.columnWidth);
	this.masonry.cols = Math.max(this.masonry.cols, 1);
};

jQuery.Isotope.prototype._masonryReset = function() {
	// Layout-specific props
	this.masonry = {};
	// FIXME shouldn't have to call this again
	this._getMasonryGutterColumns();
	var i = this.masonry.cols;
	this.masonry.colYs = [];
	while (i--) {
		this.masonry.colYs.push(0);
	}
};

jQuery.Isotope.prototype._masonryResizeChanged = function() {
	var prevSegments = this.masonry.cols;
	// Update cols/rows
	this._getMasonryGutterColumns();
	// Return if updated cols/rows is not equal to previous
	return (this.masonry.cols !== prevSegments);
};
// modified Isotope methods for gutters in masonry
if(jQuery.isFunction(jQuery.fn.imagesLoaded)){

	//isotope
	var containerblog = jQuery('.isoblog');

	containerblog.imagesLoaded( function(){
	// initialize Isotope
	containerblog.isotope({
		// options...
		layoutMode : 'masonry',
		resizable: false, // disable normal resizing
		// set columnWidth to a percentage of container width
		masonry: {
			columnWidth: (containerblog.width() - 40) / 3,
			gutterWidth: 20
		}
	});
	});

	// start new block
	jQuery('.cat a').click(function(){
		var selector = jQuery(this).attr('href');
		containerblog.isotope({ filter: selector });
		return false;
	});
	// end new block

	// update columnWidth on window resize
	jQuery(window).smartresize(function(){
		//console.log(container.width());
		// set the widths on resize
		setWidthsBlog();
		containerblog.isotope({
			// update columnWidth to a percentage of container width
			masonry: {
				columnWidth: getUnitWidthBlog(),
				gutterWidth: 20
			}
		});
	}).resize();


/*  Isotope utility GetUnitWidth
    ========================================================================== */
function getUnitWidthBlog() {
	var width;
	if (containerblog.width() <= 320) {
		//console.log("320");
		width = Math.floor((containerblog.width())  / 1);
	} else if (containerblog.width() >= 321 && containerblog.width() <= 480) {
		//console.log("321 - 480");
		width = Math.floor((containerblog.width())  / 1);
	} else if (containerblog.width() >= 481 && containerblog.width() <= 662) {
		//console.log("481 - 768");
		width = Math.floor((containerblog.width()) / 1);
	} else if (containerblog.width() >= 663 && containerblog.width() <= 768) {
		//console.log("663 - 768");
		width = Math.floor((containerblog.width())  / 2);
	} else if (containerblog.width() >= 769 && containerblog.width() <= 979) {
		//console.log("769 - 979");
		width = Math.floor((containerblog.width())  / 3);
	} else if (containerblog.width() >= 980 && containerblog.width() <= 1200) {
		//console.log("980 - 1200");
		width = Math.floor((containerblog.width())  / 3);
	} else if (containerblog.width() >= 1201 && containerblog.width() <= 1600) {
		//console.log("1201 - 1600");
		width = Math.floor((containerblog.width())  / 5);
	} else if (containerblog.width() >= 1601 && containerblog.width() <= 1824) {
		//console.log("1601 - 1824");
		width = Math.floor((containerblog.width())  / 8);
	} else if (containerblog.width() >= 1825) {
		//console.log("1825");
		width = Math.floor((containerblog.width())  / 10);
	}
	return width;
}


/*  Isotope utility SetWidths
    ========================================================================== */
function setWidthsBlog() {
	var unitWidth = getUnitWidthBlog() - 0;
	containerblog.children(":not(.width2)").css({
		width: unitWidth
	});

	if (containerblog.width() >= 321 && containerblog.width() <= 480) {
		 //console.log("eccoci 321");
		containerblog.children(".width2").css({
			width: unitWidth * 1
		});
		containerblog.children(".width4").css({
			width: unitWidth * 2
		});
		containerblog.children(".width6").css({
			width: unitWidth * 3
		});
	}
	if (containerblog.width() >= 481) {
		 //console.log("480");
		containerblog.children(".width6").css({
			width: unitWidth * 4
		});
		containerblog.children(".width4").css({
			width: unitWidth * 3
		});
		containerblog.children(".width2").css({
			width: unitWidth * 2
		});
	} else {
		containerblog.children(".width2").css({
			width: unitWidth
		});
	}
}

}}



/***************** WooCommerce Cart *****************/
var timeout;
var productToAdd;

//notification
jQuery('.product-wrap .add_to_cart_button').click(function(){
	productToAdd = jQuery(this).parents('li').find('h3').text();
	jQuery('.container .cart-notification span.item-name').html(productToAdd);
});

//notification hover
jQuery('.container .cart-notification').hover(function(){
	jQuery(this).fadeOut(400);
	jQuery('.container .widget_shopping_cart').stop(true,true).fadeIn(400);
	jQuery('.container .cart_list').stop(true,true).fadeIn(400);
	clearTimeout(timeout);
});

//cart dropdown
jQuery('.container div.cart-outer').hover(function(){
	jQuery('.container .widget_shopping_cart').stop(true,true).fadeIn(400);
	jQuery('.container .cart_list').stop(true,true).fadeIn(400);
	clearTimeout(timeout);
	jQuery('.container .cart-notification').fadeOut(300);
},function(e){
	jQuery('.container .widget_shopping_cart').stop(true,true).fadeOut(300);
	jQuery('.container .cart_list').stop(true,true).fadeOut(300);
});

jQuery('body').bind('added_to_cart', shopping_cart_dropdown_show);
jQuery('body').bind('added_to_cart', shopping_cart_dropdown);

function shopping_cart_dropdown() {

		if(!jQuery('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && jQuery('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 ) {
			jQuery('.cart-menu-wrap').addClass('has_products');
		}
}

function shopping_cart_dropdown_show(e) {

		clearTimeout(timeout);

		if(!jQuery('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && jQuery('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 && typeof e.type != 'undefined' ) {
			//before cart has slide in
			if(!jQuery('.container .cart-menu-wrap').hasClass('has_products')) {
				setTimeout(function(){ jQuery('.container .cart-notification').fadeIn(400); },400);
			}
			else if(!jQuery('.container .cart-notification').is(':visible')) {
				jQuery('.container .cart-notification').fadeIn(400);
			} else {
				jQuery('.container .cart-notification').show();
			}
			timeout = setTimeout(hideCart,2700);
		}
}

function hideCart() {
	jQuery('.container .cart-notification').stop(true,true).fadeOut();
}

setTimeout(shopping_cart_dropdown,550);
setTimeout(shopping_cart_dropdown,650);
setTimeout(shopping_cart_dropdown,950);

/*Mobile menu parent click with submenu fix*/
if (jQuery(window).width() < 960) {
jQuery('.nav li a').click(function(e){
    if(!jQuery(this).parent().hasClass('active')) {
        jQuery('.nav li').removeClass('active');
        jQuery(this).parent().addClass('active');
        e.preventDefault();
    } else {
        return true;
    }
});
}

var mcontainer = jQuery(".mcontainer script");
mcontainer.unwrap();

/*remove bbpress ips*/
var bbip = jQuery(".bbp-author-ip");
bbip.remove();

/*put search bar inside menu ul*/
var searchlogin = jQuery(".search-login");

jQuery(document).ready(function() {
searchlogin.css('display', 'block');
});

/*layerslider admin bar white fix*/
jQuery(document).ready(function() {
var adminbr = jQuery("footer #wpadminbar");
var footer =  jQuery("footer");
var bar = jQuery("#wpadminbar");
if(adminbr.length != 0){
	footer.after(bar);
}
});



 jQuery(document).ready(function() {
    "use strict";
    var t = jQuery(".tab-inner");
    if (0 !== t.length) {
        var e = jQuery('.tab-inner a[href="#tab-1"]').parent().index();
        t.tabs().tabs("option", "active", e)
    }
})

/******************** Search form ***********************/
var src = jQuery("#header-searchform");
var src_input = jQuery("#header-searchform input[type=search]");
var src_all = jQuery("#header-searchform input[type=search], #header-searchform i.fa");
src_all.click(function() {
src_input.css('width', '130px');
src_input.css('cursor', 'auto');
});

src.bind( "clickoutside", function(event){
src_input.css('width', '15px');
src_input.css('cursor', 'pointer');
src_input.val('');
});