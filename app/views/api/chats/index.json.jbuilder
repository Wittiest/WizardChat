json.array! @chats do |chat|
  json.extract! chat, :name, :is_group_chat, :id
  first_message = chat.first_message
  json.first_message do
    json.body first_message.body
    json.author first_message.author.first_name
  end
end
