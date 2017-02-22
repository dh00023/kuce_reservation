class RenameStarttimeToStart < ActiveRecord::Migration[5.0]
  def change
    rename_column :reservations, :starttime, :start
  end
end
