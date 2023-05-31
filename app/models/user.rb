class User < ApplicationRecord

    validates :zipcode,
        length: {is: 5}

    validates :password, 
        length: { minimum: 6 }, 
        allow_nil: true

    validates :email,
        uniqueness: true,
        presence: true,
        length: { in: 3..255 },
        format: { with: URI::MailTo::EMAIL_REGEXP }

    has_secure_password
    before_validation :ensure_session_token

        def self.find_by_credentials(email, password)
            # debugger
        user = User.find_by(email: email)
    #    debugger
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end