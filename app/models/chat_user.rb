# == Schema Information
#
# Table name: chat_users
#
#  id            :bigint(8)        not null, primary key
#  user_id       :integer          not null
#  chat_id       :integer          not null
#  user_nickname :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ChatUser < ApplicationRecord
  validates :user_id, :chat_id, :user_nickname, presence: true

  belongs_to :chat
  belongs_to :user
end
