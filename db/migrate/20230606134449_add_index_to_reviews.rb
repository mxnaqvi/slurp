class AddIndexToReviews < ActiveRecord::Migration[7.0]
  def change
    add_index :reviews, [:business_id, :user_id], unique: true, name: "index_reviews_on_business_id_and_user_id"
    add_index :reviews, :business_id, name: "index_reviews_on_business_id"
    add_index :reviews, :user_id, name: "index_reviews_on_user_id"
  end
end
