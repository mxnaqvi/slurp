@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :address, :city, :state, :zip_code, :phone_number, :hours, :price_range, :rating, :latitude, :longitude
    end
end