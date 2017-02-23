class CheckController < ApplicationController
	def reservation
	  if current_user.try(:admin?)
        @reservations = Reservation.all
      else
        @reservations = Reservation.where(user_id: current_user)
      end
	end
end
