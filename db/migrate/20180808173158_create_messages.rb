class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false, index: true
      t.integer :chat_id, null: false, index: true
      t.text :body, null: false

      t.timestamps
    end
  end
end
