# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.firs
User.create!([ email: "caffeine@addict.com", fname: "Caffeine", lname: "Addict", password: "password", zipcode: "11218" ])

Business.create!([
name: "Steeplechase Coffee", 
address: "3013 Fort Hamilton Pkwy", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11218", 
phone_number: "1234567891", 
price_range: 1.0, 
rating: 4.5, 
latitude: 40.618715, 
longitude: -74.033196, 
hours: {"Monday"=>"7:30 am - 3:00 pm", "Tuesday"=>"7:30 am - 3:00 pm", "Wednesday"=>"7:30 am - 3:00 pm", "Thursday"=>"7:30 am - 3:00 pm", "Friday"=>"7:30 am - 7:30 pm", "Saturday"=>"7:30 am - 3:00 pm", "Sunday"=>"7:30 am - 3:00 pm"}
])

Business.create!([ name: "Velvette Black", 
address: "814 Union St", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11215", 
phone_number: "4073513333", 
price_range: 2.0, 
rating: 5, 
latitude: 28.5383, 
longitude: -81.3792, 
hours: {"Monday"=>"7:00 am - 7:00 pm", "Tuesday"=>"7:00 am - 7:00 pm", "Wednesday"=>"7:00 am - 7:00 pm", "Thursday"=>"7:00 am - 7:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 7:00 pm"}
])

Business.create!([ name: "Cafe Madeline", 
address: "1603 Cortelyou Rd", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11226", 
phone_number: "4073513333", 
price_range: 2.0, 
rating: 3, 
latitude: 28.5383, 
longitude: -81.3792, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Devocion", 
address: "25 E 20th St", 
city: "New York", 
state: "NY", 
zip_code: "10003", 
phone_number: "4073513333", 
price_range: 2.0, 
rating: 3, 
latitude: 40.738771, 
longitude: -73.988459, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Lips Cafe", 
address: "1412 Nostrand Ave", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11226", 
phone_number: "4073513333", 
price_range: 2.0, 
rating: 3, 
latitude: 40.651878, 
longitude: -73.949846, 
hours: {"Monday"=>"8:00 am - 9:00 pm", "Tuesday"=>"8:00 am - 9:00 pm", "Wednesday"=>"8:00 am - 9:00 pm", "Thursday"=>"8:00 am - 9:00 pm", "Friday"=>"8:00 am - 11:00 pm", "Saturday"=>"8:00 am - 11:00 pm", "Sunday"=>"8:00 am - 9:00 pm"}
])

Business.create!([ name: "Old Fashioned Cafe", 
address: "110 Thompson St", 
city: "New York", 
state: "NY", 
zip_code: "10012", 
phone_number: "4073513333", 
price_range: 2.0, 
rating: 3, 
latitude: 40.72394, 
longitude: -74.003072, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])