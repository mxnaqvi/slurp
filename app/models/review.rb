# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  user_id     :bigint           not null
#  business_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :body, presence: true, length: { minimum: 10 }
    validates :rating, presence: true, inclusion: { in: (1..5) }
    
  after_create :update_business_rating
  after_update :update_business_rating

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business
    
        private

        def update_business_rating
          business.update_rating
        end
    
end
