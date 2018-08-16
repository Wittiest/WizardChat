json.extract! user, :id, :email, :first_name, :last_name
json.image_url url_for(user.profile_image)
