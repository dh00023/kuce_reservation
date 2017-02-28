var init_cal;
init_cal=function(){
  $('.calendar').each(function(){
    var fc = $(this);
    var options = {
      header: {
              left: 'title',
              center: false,
              right: false
      },
      eventOverlap: false,
      firstDay: 1,
      height: 852,
      defaultView: 'agendaWeek',
      selectable: {
          agenda: true
      },
      agendaWeek: {
        slotLabelFormat: 'hA'
      },
      selectHelper: false,
      editable: false,
      allDaySlot: false,
      events: '/reservations.json',
      eventTextColor: "#333",
      displayEventTime: false,

      minTime: "9:00:00",
      maxTime: "22:00:00",
      slotDuration: "1:00:00",

      monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      dayNamesShort: ['(일)','(월)','(화)','(수)','(목)','(금)','(토)'],
      views: {
        week: {
            columnFormat: 'Dddd'
        }
      },
      titleFormat: 'M/D ddd'
    };
    fc.fullCalendar(options);
    function recreateFC(screenWidth) { // This will destroy and recreate the FC taking into account the screen size
      if (screenWidth < 700) {
        options.header = {
                left: 'title',
                center: false,
                right: 'prev,next'
        };
        options.defaultView = 'agendaDay';
      } else {
        options.defaultView = 'agendaWeek';
      }
      fc.fullCalendar('destroy');
      fc.fullCalendar(options);
      $('.fc-left').append('<hr>');
      $('.fc-left').append('<div class="displaycolor"></div>');
      $('.fc-left').children('.displaycolor').append('<p id="room205" class="room btn">205</p>');
      $('.fc-left').children('.displaycolor').append('<p id="room206" class="room btn">206</p>');
      $('.fc-left').children('.displaycolor').append('<p id="room207" class="room btn">207</p>');
    }
    var pageWidth = $(window).width();
    $(window).resize(function (e) { //set window resize listener
      recreateFC(pageWidth); //or you can use $(document).width()
    });
    $('.fc-left').append('<hr>');
    $('.fc-left').append('<div class="displaycolor"></div>');
    $('.fc-left').children('.displaycolor').append('<p id="room205" class="room btn">205</p>');
    $('.fc-left').children('.displaycolor').append('<p id="room206" class="room btn">206</p>');
    $('.fc-left').children('.displaycolor').append('<p id="room207" class="room btn">207</p>');
  });
};
$(document).ready(function(){
  init_cal();
});
$(document).on('page:load', init_cal);
