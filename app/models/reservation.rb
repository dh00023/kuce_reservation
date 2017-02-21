class Reservation < ApplicationRecord
	has_and_belongs_to_many :groups
	belongs_to :user
	
	
	validates :choose, presence: {message: "시간이 선택되지 않았습니다."}
	validates :groups, presence: {message: "세미나실이 선택되지 않았습니다."}
	before_validation :endtimesetting


	private

	def endtimesetting
	   	self.endtime = self.starttime+self.choose.to_i.hours
	end
	
end
