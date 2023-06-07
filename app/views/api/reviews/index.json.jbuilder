@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :rating, :body, :user_id, :business_id, :created_at, :updated_at

        json.user_fname review.user.fname
        json.user_lname review.user.lname
    end
end