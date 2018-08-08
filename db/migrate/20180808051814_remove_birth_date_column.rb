class RemoveBirthDateColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birth_date
  end
end
