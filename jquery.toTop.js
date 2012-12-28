/**
 * Adds a "Scroll to Top" button to the page after the user has scrolled down a specified amount
 * Requires: jquery.noSelect
 *
 */

jQuery.toTop = function(options) {
  var defaults = {
    buttonText : 'Scroll to Top',
    icon       : true,
    scrollSpeed: 650,
    showSpeed  : 200,
    showMargin : .1
  };
  var settings = jQuery.extend(defaults, options);
  var container = jQuery('<div id="scrollTop" class="ui-corner-all ui-state-default ui-widget ui-priority-primary"></div>');
  if ( settings.icon ) {
    container.append('<span id="scrollTopIcon" class="ui-icon ui-icon-circle-triangle-n"></span>');
  }
  if ( settings.buttonText ) {
    container.append('<span id="scrollTopText"> ' + settings.buttonText + '</span>');
  }
  jQuery('body').append(container);
  var $scrollTop = jQuery('#scrollTop');
  var $window = jQuery(window);
  //Bind to the window's scroll event
  $window.scroll(function() {
    if ( $window.scrollTop() > (settings.showMargin * $window.height()) ) {
      //Safety net to make sure the function exists before calling it
      if ( jQuery.disableTextSelect ) {
        $scrollTop.disableTextSelect();
      }
      $scrollTop.fadeIn(settings.showSpeed);
    }
    else {
      $scrollTop.fadeOut(settings.showSpeed);
    }
  });
  //Bind button events
  $scrollTop.bind({
    click    : function() {
      jQuery('body,html').animate({scrollTop: 0}, settings.scrollSpeed);
    },
    mousedown: function() {
      jQuery(this).css({'box-shadow': 'inset 2px 2px 1px 1px rgba(0, 0, 0, .5)'}).addClass('ui-state-active');
    },
    mouseup  : function() {
      jQuery(this).css({'box-shadow': '2px 2px 1px 1px rgba(0, 0, 0, .5)'}).removeClass('ui-state-active');
    },
    mouseover: function() {
      jQuery(this).addClass('ui-state-hover');
    },
    mouseout : function() {
      jQuery(this).removeClass('ui-state-hover');
    }})
};
