class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => [:studentid]

  has_many :reservations

  validates :studentid, uniqueness: {message: "이미 존재하는 학번입니다."}, presence: {message: "학번이 입력되지 않았습니다."},
            length: {is: 9,too_short: '학번이 잘못입력되었습니다.',too_long: '학번이 잘못입력되었습니다'}
  validates :phone, presence: {message: "전화번호가 입력되지 않았습니다."}, uniqueness: {message: "이미 존재하는 전화번호 입니다."},
            length: {is: 11,too_short: '전화번호가 잘못 입력되었습니다.(숫자만입력해주세요)',too_long: '전화번호가 잘못 입력되었습니다.(숫자만입력해주세요)'}
  validates :username, presence: { message: "이름을 입력해주세요." }
  validates :major,  presence: { message: "학과를 선택해주세요." }
  def email_required?
    false
  end

  def email_changed?
    false
  end
end
