class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.datetime :starttime
      t.datetime :endtime
      t.string :choose

      t.timestamps
    end
  end
end
