class ChangeUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :email, :string, unique: true, null: false
    add_column :users, :zipcode, :string, null: false

    remove_column :users, :username

  end
end
