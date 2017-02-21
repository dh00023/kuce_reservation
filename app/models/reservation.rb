class Reservation < ApplicationRecord
	belongs_to :group
	belongs_to :user

	validates :starttime, presence: true, uniqueness: {scope: :group_id}
	validates :choose, presence: {message: "시간이 선택되지 않았습니다."}
	validates :group_id, presence: {message: "세미나실이 선택되지 않았습니다."}
	before_validation :endtimesetting

	private

	def endtimesetting
	   	self.endtime = self.starttime+1.hours
	end	
end
