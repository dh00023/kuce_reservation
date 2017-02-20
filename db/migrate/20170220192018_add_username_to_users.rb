class AddUsernameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username, :string
    add_column :users, :studentid, :integer
    add_column :users, :major, :string
    add_column :users, :phone, :string
  end
end
