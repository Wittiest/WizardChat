User.delete_all
user1 = User.new(email: "harry@hogwarts.edu", first_name: "Harry",
          last_name: "Potter", password: "123456")
user2 = User.new(email: "draco@hogwarts.edu", first_name: "Draco",
          last_name: "Malfoy", password: "123456")
user1.save!
user2.save!

Chat.delete_all

chat1 = Chat.create!(name: "Dumbledore's Army", is_group_chat: true)
chat2 = Chat.create!(name: "Death Eaters", is_group_chat: true)
chat3 = Chat.create!(is_group_chat: false)

chat_user1 = ChatUser.create!(user_id: user1.id, chat_id: chat1.id,
  user_nickname: "The Boy Who Lived")
chat_user2 = ChatUser.create!(user_id: user2.id, chat_id: chat2.id,
  user_nickname: "Elite Pureblooded Wizard")
chat_user3 = ChatUser.create!(user_id: user1.id, chat_id: chat3.id,
  user_nickname: "Harry Potter")
chat_user3 = ChatUser.create!(user_id: user2.id, chat_id: chat3.id,
  user_nickname: "Draco Malfoy")

message1 = Message.create!(author_id: user1.id, chat_id: chat1.id,
  body: "Snape is such a plebe. I'd duel him any day")
message2 = Message.create!(author_id: user2.id, chat_id: chat2.id,
  body: "Guys, I'm kinda afraid to kill Dumbledore!!")
message3 = Message.create!(author_id: user1.id, chat_id: chat3.id,
  body: "BRO, YOU CAN'T JUST CALL PEOPLE MUD-BLOODS!")
message4 = Message.create!(author_id: user2.id, chat_id: chat3.id,
  body: "What are you going to do, potter?")
