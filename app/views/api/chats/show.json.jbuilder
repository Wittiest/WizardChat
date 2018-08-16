# Messages sorted from most recent to least recent. Ex: newest is at index 0
json.chat do
  name = @chat.name
  unless (@chat.is_group_chat)
    @chat.users.each do |user|
      if (user.id != current_user.id)
        name = "#{user.first_name} #{user.last_name}"
      end
    end
  end
  json.extract! @chat, :is_group_chat, :id
  json.name name
  json.firstMessageId @chat.first_message.id
end

json.messages do
  @chat.messages.sort {|m1, m2| m2.id <=> m1.id}.each do |message|
    json.set! message.id do
      json.author_id message.author_id
      json.created_at message.created_at
      json.body message.body
      json.chat_id message.chat_id
    end
  end
end

json.chat_users do
  @chat.chat_users.each do |chat_user|
    json.set! chat_user.id do
      json.extract! chat_user, :user_id, :chat_id, :id, :user_nickname
    end
  end
end

json.users do
  @chat.users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :first_name, :last_name
      json.image_url url_for(user.profile_image)
    end
  end
end
