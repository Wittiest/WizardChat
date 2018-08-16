json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :first_name, :last_name, :id
      json.image_url url_for(user.profile_image)
    end
  end
end

json.chat_users do
  fake_id = -1
  @users.each do |user|
    json.set! fake_id do
      json.user_id user.id
      json.chat_id -2
      json.id fake_id
    end
    fake_id -= 1
  end
end
