class AddColorToReservation < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :color, :string
  end
end
