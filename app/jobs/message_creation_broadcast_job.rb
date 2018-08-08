class MessageCreationBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      'chat_channel'
      id: message.id,
      created_at: message.created_at.strftime('%H:%M'),
      body: message.body
    )
  end
end
