window.KnackInit = function($) {
  $(document).on('knack-page-render.any', function(event, page) {
    var numericFields = [
      '#field_38',
      '#field_39',
      '#field_40'
    ];

    /**********************************
    /* Only allow Mondays to be selected
    /***********************************/
    $('#view_1-field_41').datepicker('option', {
      beforeShowDay: function (date) {
        //console.debug(date);
        return [date.getDay() == 1, ''];
      }
    });

    // Verify that numeric fields have a number in them
    $(numericFields.join(',')).each(function(i, el) {
      $(el).attr('pattern', '[0-9]*');
    });
  });
};