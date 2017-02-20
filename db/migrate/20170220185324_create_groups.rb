class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :color
      t.string :name

      t.timestamps
    end
  end
end
