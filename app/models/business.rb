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

end