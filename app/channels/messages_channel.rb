class MessagesChannel < ApplicationCable::Channel
  def subscribed
    streamer = "chat-#{params['chatId']}:messages"
    stream_from streamer
  end
end
