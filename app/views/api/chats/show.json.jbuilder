json.extract! @chat, :name, :is_group_chat
json.messages do
  # Messages sorted from most recent to least recent. Ex: newest is at index 0
  json.array! @chat.messages.sort {|m1, m2| m2.id <=> m1.id} do |message|
    json.author message.author.first_name
    json.created_at message.created_at
    json.body message.body
  end
end
