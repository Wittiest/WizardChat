# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
user1 = User.new(email: "harry@hogwarts.edu", first_name: "Harry",
          last_name: "Potter", password: "123456")
user2 = User.new(email: "draco@hogwarts.edu", first_name: "Draco",
          last_name: "Malfoy", password: "123456")
user1.save!
user2.save!
