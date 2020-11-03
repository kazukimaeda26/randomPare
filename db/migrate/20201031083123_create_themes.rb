class CreateThemes < ActiveRecord::Migration[6.0]
  def change
    create_table :themes do |t|
      t.text :content
      t.string :week
      t.string :span
      t.timestamps
    end
  end
end
