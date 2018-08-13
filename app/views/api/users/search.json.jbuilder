json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :first_name, :last_name, :id
    end
  end
end
