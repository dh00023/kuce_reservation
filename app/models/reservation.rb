class Reservation < ApplicationRecord
	belongs_to :group
	belongs_to :user

	validates :start, presence: true, uniqueness: {scope: :group_id}
	validates :choose, presence: {message: "시간이 선택되지 않았습니다."}
	validates :group_id, presence: {message: "세미나실이 선택되지 않았습니다."}
	validates_datetime :end, :on_or_before => '10:00pm',:on_or_before_message => '10PM이후의 시간은 예약할 수 없습니다.'

	before_validation :endsetting
	before_validation :titlesetting
	before_validation :colorsetting

	private

	def endsetting
	   	self.end = self.start+1.hours
	end

	def titlesetting
		  self.title = self.user.studentid
	end

	def colorsetting
			self.color = self.group.color
	end
end
