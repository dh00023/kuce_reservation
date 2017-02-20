class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :database_authenticatable, :authentication_keys => [:studentid]
  has_many :reservations

  def email_required?
    false
  end

  def email_changed?
    false
  end
end
