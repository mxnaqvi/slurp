# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  phone_number :string           not null
#  price_range  :float            not null
#  rating       :float            not null
#  latitude     :float            not null
#  longitude    :float            not null
#  hours        :json             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Business < ApplicationRecord
    validates :name, presence: true
    validates :latitude, presence: true
    validates :longitude, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :state, presence: true, length: { is: 2 }
    validates :zip_code, presence: true, length: { is: 5 }
    validates :phone_number, presence: true, length: { is: 10 }
    validates :price_range, presence: true

    has_one_attached :photo

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review
    
    has_many :reviewers,
        through: :reviews,
        source: :user

    def update_rating
        count = reviewers.count
        return update(rating: 0) if count == 0
        sum = reviewers.sum(:rating)
        update(rating: sum / count)
    end

end
