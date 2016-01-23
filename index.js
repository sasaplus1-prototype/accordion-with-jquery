(function(){
  'use strict';

  $('.js-accordion').on('click.accordion', function(event) {
    var target = $(this).attr('data-target');

    $(target).stop(true, false).animate({ height: 'toggle' });
  });
}());
