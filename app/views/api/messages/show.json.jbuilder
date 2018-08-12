json.extract! @message, :body, :created_at, :id, :chat_id, :author_id
json.author @message.author.first_name
