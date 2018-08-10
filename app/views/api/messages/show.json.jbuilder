json.extract! @message, :body, :created_at, :id
json.author @message.author.first_name
