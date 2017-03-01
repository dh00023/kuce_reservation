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

    $('.fc-left').append('<hr>');
    $('.fc-left').append('<div class="displaycolor"></div>');
    $('.fc-left').children('.displaycolor').append('<p id="room205" class="room btn">205</p>');
    $('.fc-left').children('.displaycolor').append('<p id="room206" class="room btn">206</p>');
    $('.fc-left').children('.displaycolor').append('<p id="room207" class="room btn">207</p>');
  });
};

mobile_cal=function(){
  $('.calendar').each(function(){
    var fc = $(this);
    var options = {
      header: {
              left: 'title',
              center: false,
              right: 'prev,next'
      },
      eventOverlap: false,
      firstDay: 1,
      height: 866,
      defaultView: 'agendaDay',
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

    $('.fc-left').append('<hr>');
    $('.fc-left').append('<div class="displaycolor"></div>');
    $('.fc-left').children('.displaycolor').append('<p id="room205" class="room btn">205</p>');
    $('.fc-left').children('.displaycolor').append('<p id="room206" class="room btn">206</p>');
    $('.fc-left').children('.displaycolor').append('<p id="room207" class="room btn">207</p>');
  });
};
$(document).ready(function(){
  if($(window).width()<700){
      mobile_cal();
  }
  else{
      init_cal();
  }
});
if($(window).width()<700){
    $(document).on('page:load', mobile_cal);
}
else{
    $(document).on('page:load', init_cal);
}
