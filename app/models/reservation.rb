class Reservation < ApplicationRecord

    @reservations = Reservation.all
    t=Time.now
    if t.strftime("%a")=='Mon' && t.strftime("%H")=="00"
        Reservation.delete_all
    end

	belongs_to :group
	belongs_to :user

	validates :starttime, presence: true, uniqueness: {scope: :group_id}
	validates :choose, presence: {message: "시간이 선택되지 않았습니다."}
	validates :group_id, presence: {message: "세미나실이 선택되지 않았습니다."}
	validates_datetime :endtime, :on_or_before => '10:00pm',:on_or_before_message => '10PM이후의 시간은 예약할 수 없습니다.'

	before_validation :endtimesetting
	private

	def endtimesetting
	   	self.endtime = self.starttime+1.hours
	end	
end
