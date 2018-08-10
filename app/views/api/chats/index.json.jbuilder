first_messages = []
json.chats do
  @chats.each do |chat|
    json.set! chat.id do
      json.extract! chat, :name, :is_group_chat, :id
      first_message = chat.first_message
      first_messages.push(first_message)
      json.firstMessageId first_message.id
    end
  end
end
json.messages do
  first_messages.each do |msg|
    json.set! msg.id do
      json.extract! msg, :body, :created_at, :chat_id
      json.author msg.author.first_name
    end
  end
end