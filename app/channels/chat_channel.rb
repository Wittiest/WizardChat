class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed; end

  def create(opt)
    Message.create(
      body: opt.fetch('body'),
      author_id: opt.fetch('author_id')
    )
  end
end
