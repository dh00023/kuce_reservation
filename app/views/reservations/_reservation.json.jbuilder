json.extract! reservation, :id, :starttime, :endtime, :choose, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)