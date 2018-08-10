json.extract! @message, :body, :created_at, :id, :chat_id
json.author @message.author.first_name
