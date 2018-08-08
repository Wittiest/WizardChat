class CreateChatUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_users do |t|
      t.integer :user_id, null: false
      t.integer :chat_id, null: false
      t.string :user_nickname, null: false

      t.timestamps
    end
    add_index :chat_users, [:chat_id, :user_id], unique: true
  end
end
