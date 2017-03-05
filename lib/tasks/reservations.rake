namespace :reservations do
  desc "TODO"
  task delete_every_monday: :environment do
	Reservation.delete_all
  end
end
