# Messages sorted from most recent to least recent. Ex: newest is at index 0
@chat.messages.sort {|m1, m2| m2.id <=> m1.id}.each do |message|
  json.set! message.id do
    json.author message.author.first_name
    json.created_at message.created_at
    json.body message.body
  end
end
