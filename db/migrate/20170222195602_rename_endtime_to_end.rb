class RenameEndtimeToEnd < ActiveRecord::Migration[5.0]
  def change
    rename_column :reservations, :endtime, :end
  end
end
