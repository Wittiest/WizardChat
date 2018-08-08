class RemoveChatNameConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :chats, :name, true
  end
end
