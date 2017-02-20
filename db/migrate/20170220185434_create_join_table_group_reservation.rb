class CreateJoinTableGroupReservation < ActiveRecord::Migration[5.0]
  def change
    create_join_table :groups, :reservations do |t|
      # t.index [:group_id, :reservation_id]
      # t.index [:reservation_id, :group_id]
    end
  end
end
