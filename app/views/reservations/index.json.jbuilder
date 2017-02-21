json.array! @reservations do |reservation|
  date_format = '%Y-%m-%d'

  json.id reservation.id
  json.title reservation.title
  json.starttime reservation.starttime.strftime(date_format)
  json.endtime reservation.endtime.strftime(date_format)
  json.color reservation.group.color unless event.color.blank?
  json.allDay reservation.all_day_event? ? true : false
  json.update_url reservation_path(reservation, method: :patch)
  json.edit_url edit_reservation_path(reservation)
end
