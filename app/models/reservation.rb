class Reservation < ApplicationRecord

	belongs_to :group
	belongs_to :user

	validates :start, presence: true, uniqueness: {scope: :group_id}
	validates :choose, presence: {message: "시간이 선택되지 않았습니다."}
	validates :group_id, presence: {message: "세미나실이 선택되지 않았습니다."}
	validates_time :end, :between => ['9:00am', '10:00pm']
	before_validation :endsetting
	before_validation :titlesetting
	before_validation :colorsetting

	private

	def endsetting
	   	self.end = self.start+1.hours
	end

	def titlesetting
		  self.title = self.user.username
	end

	def colorsetting
			self.color = self.group.color
	end
end
