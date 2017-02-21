class AddGroupIdToReservations < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :group_id, :integer
  end
end
