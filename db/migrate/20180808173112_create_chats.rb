class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.string :name, null: false
      t.boolean :is_group_chat, null: false

      t.timestamps
    end
  end
end
