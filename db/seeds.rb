# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.firs
Business.create!([
name: "The Cheesecake Factory", 
address: "1000 Town Center Dr", 
city: "Orlando", 
state: "FL", 
zip_code: "32837", 
phone_number: "4073513333", 
price_range: 3.0, 
rating: 4.5, 
latitude: 28.5383, 
longitude: -81.3792, 
hours: {"Monday"=>"11:00 am - 10:00 pm", "Tuesday"=>"11:00 am - 10:00 pm", "Wednesday"=>"11:00 am - 10:00 pm", "Thursday"=>"11:00 am - 10:00 pm", "Friday"=>"11:00 am - 11:00 pm", "Saturday"=>"11:00 am - 11:00 pm", "Sunday"=>"11:00 am - 10:00 pm"}
])

Business.create!([ name: "The Poop Factory", 
address: "1000 Town Center Dr1", 
city: "Orlando", 
state: "FL", 
zip_code: "32837", 
phone_number: "4073513333", 
price_range: 3, 
rating: 4.5, 
latitude: 28.5383, 
longitude: -81.3792, 
hours: {"Monday"=>"11:00 am - 10:00 pm", "Tuesday"=>"11:00 am - 10:00 pm", "Wednesday"=>"11:00 am - 10:00 pm", "Thursday"=>"11:00 am - 10:00 pm", "Friday"=>"11:00 am - 11:00 pm", "Saturday"=>"11:00 am - 11:00 pm", "Sunday"=>"11:00 am - 10:00 pm"}
])