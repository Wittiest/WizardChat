# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  chat_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :author_id, :chat_id, :body, presence: true

  belongs_to :chat
  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  after_create_commit do
    ActionCable.server.broadcast "chat-#{chat_id}:messages",
      id: id,
      body: body,
      author: author.first_name,
      chatId: chat_id,
      authorId: author_id,
      createdAt: created_at
  end
end
