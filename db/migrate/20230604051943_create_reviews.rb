class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.bigint :user_id, null: false
      t.bigint :business_id, null: false

      t.timestamps
    end
  end
end
