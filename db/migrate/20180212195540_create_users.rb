class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :current_city
      t.text :description
      t.string :user_photo
      t.string :gender
      t.string :relationship_status

      t.timestamps
    end
  end
end
