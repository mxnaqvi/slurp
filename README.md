
# Slurp
Live link: https://slurp-g4oi.onrender.com/

## Background
Slurp is a full-stack clone of Yelp, with a focus on cafes. It allows users to view cafes, leave review, update them and destroy them. Only logged-in users can create, update, and delete their own reviews.

The application was developed using JavaScript, React, and Redux for the frontend, and Ruby on Rails with PostgreSQL for the backend.

## Functionality and Features
### User Authentication & Account Management
Users can create their own accounts or log in as a demo user.
User authentication is implemented to ensure that only logged-in users can access certain features, such as creating reviews.
### Cafe Reviews
Logged-in users have full CRUD (Create, Read, Update, Delete) capability for cafe reviews.
Users can leave ratings and written reviews for cafes they have visited.
Users can view their own reviews and edit or delete them as needed.
The newest reviews will always be displayed on the homepage

## Technical Challenges
### Challenge:
Ensuring a user could only leave one comment per post and alway go back to either update or delete that comment.
### Solution: 
Designed a review form button that dynamically adjusts based on the user's actions. if a user has created a review, the button will condtionally render with either update or create.

## Technologies Used
Frontend
JavaScript
React
Redux
HTML
CSS
Backend
Ruby on Rails
PostgreSQL

## Future Directions
Implementing the Google Maps Api to render the location of the cafes. The latitude and longitude are already included in the business.
Implement image uploads for cafe banners, thumbnail images, and review images using AWS.
Develop a user profile page where users can update their personal information and access all their reviews in one place.
Other small minor visual charms and accessibility features
