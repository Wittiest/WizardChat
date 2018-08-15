# == Schema Information
#
# Table name: chats
#
#  id            :bigint(8)        not null, primary key
#  name          :string           not null
#  is_group_chat :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Chat < ApplicationRecord
  validates :is_group_chat, inclusion: { in: [ true, false ] }

  has_one_attached :chat_image

  has_many :messages
  has_many :chat_users
  has_many :users,
  through: :chat_users,
  source: :user

  def first_message
    messages.sort {|m1, m2| m2.id <=> m1.id}.first
  end
end
