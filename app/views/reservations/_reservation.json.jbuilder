date_format = '%Y-%m-%d'

json.title reservation.user_id
json.start reservation.start.strftime(date_format)
json.end reservation.end.strftime(date_format)
json.allDay reservation.all_day_event? ? true : false
json.color reservation.color unless reservation.color.blank?
