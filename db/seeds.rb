# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.firs
puts 'Destroying Tables...'
Review.destroy_all
Business.destroy_all
User.destroy_all

puts "Resetting primary keys..."
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('businesses')
ApplicationRecord.connection.reset_pk_sequence!('reviews')


User.create!([ email: "caffeine@addict.com", fname: "Caffeine", lname: "Addict", password: "password", zipcode: "11218" ])

# Assuming you already have the first user created
User.create!([
  { email: "user2@example.com", fname: "John", lname: "Doe", password: "password123", zipcode: "12345" },
  { email: "user3@example.com", fname: "Jane", lname: "Smith", password: "securepassword", zipcode: "67890" },
  { email: "user4@example.com", fname: "Michael", lname: "Johnson", password: "mysecretpass", zipcode: "54321" }
])


Business.create!([
name: "Steeplechase Coffee", 
address: "3013 Fort Hamilton Pkwy", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11218", 
phone_number: "1234567891", 
price_range: 1.0, 
rating: 0, 
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
rating: 0, 
latitude: 40.674246, 
longitude: -73.975202, 
hours: {"Monday"=>"7:00 am - 7:00 pm", "Tuesday"=>"7:00 am - 7:00 pm", "Wednesday"=>"7:00 am - 7:00 pm", "Thursday"=>"7:00 am - 7:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 7:00 pm"}
])

Business.create!([ name: "Cafe Madeline", 
address: "1603 Cortelyou Rd", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11226", 
phone_number: "4073513333", 
price_range: 2.0, 
rating: 0, 
latitude: 40.64184, 
longitude: -73.96338, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Devocion", 
address: "25 E 20th St", 
city: "New York", 
state: "NY", 
zip_code: "10003", 
phone_number: "4073513333", 
price_range: 4.0, 
rating: 0, 
latitude: 40.738771, 
longitude: -73.988459, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Blue Bottle Coffee", 
address: "203 7th Ave", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11215", 
phone_number: "4073513333", 
price_range: 3.0, 
rating: 0, 
latitude: 40.670647, 
longitude: -73.978283, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Lips Cafe", 
address: "1412 Nostrand Ave", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11226", 
phone_number: "4073513333", 
price_range: 1.0, 
rating: 0, 
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
price_range: 4.0, 
rating: 0, 
latitude: 40.72394, 
longitude: -74.003072, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Poetica Coffee", 
address: "622 Caton Ave", 
city: "Brooklyn", 
state: "NY", 
zip_code: "11218", 
phone_number: "3472400543", 
price_range: 2.0, 
rating: 0, 
latitude: 40.64767, 
longitude: -73.97387, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Round K by Sol", 
address: "78 Canal St", 
city: "New York", 
state: "NY", 
zip_code: "10002", 
phone_number: "4073513333", 
price_range: 2.0, 
rating: 0, 
latitude: 40.71565, 
longitude: -73.99310, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Hi-Collar", 
address: "231 E 9th St", 
city: "New York", 
state: "NY", 
zip_code: "10003", 
phone_number: "4073513333", 
price_range: 3.0, 
rating: 0, 
latitude: 40.73053, 
longitude: -73.98822, 
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Bee Cafe", 
address: "60-11 39th Ave",
city: "Queens",
state: "NY",
zip_code: "11377",
phone_number: "3473219098",
price_range: 4.0,
rating: 0,
latitude: 40.747443,
longitude: -73.903030,
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Dear Han",
address: "59-02 Woodside Ave",
city: "Queens",
state: "NY",
zip_code: "11377",
phone_number: "7184249838",
price_range: 1.0,
rating: 0,
latitude: 40.745392,
longitude: -73.905547,
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!([ name: "Outro NYC",
address: "816 Broadway",
city: "New York",
state: "NY",
zip_code: "10003",
phone_number: "2129946771",
price_range: 3.0,
rating: 0,
latitude: 40.732968,
longitude: -73.991019,
hours: {"Monday"=>"7:00 am - 8:00 pm", "Tuesday"=>"7:00 am - 8:00 pm", "Wednesday"=>"7:00 am - 8:00 pm", "Thursday"=>"7:00 am - 8:00 pm", "Friday"=>"7:00 am - 11:00 pm", "Saturday"=>"7:00 am - 11:00 pm", "Sunday"=>"7:00 am - 8:00 pm"}
])

Business.create!(
  name: "Morningside Cafe",
  address: "789 Amsterdam Ave",
  city: "New York",
  state: "NY",
  zip_code: "10025",
  phone_number: "2125556789",
  price_range: 2.5,
  rating: 0,
  latitude: 40.798697 + rand(-0.01..0.01),
  longitude: -73.968570 + rand(-0.01..0.01),
  hours: {
    "Monday" => "7:00 am - 6:00 pm",
    "Tuesday" => "7:00 am - 6:00 pm",
    "Wednesday" => "7:00 am - 6:00 pm",
    "Thursday" => "7:00 am - 6:00 pm",
    "Friday" => "7:00 am - 8:00 pm",
    "Saturday" => "8:00 am - 4:00 pm",
    "Sunday" => "8:00 am - 4:00 pm"
  }
)

Business.create!(
  name: "Java Junction",
  address: "543 Lexington Ave",
  city: "New York",
  state: "NY",
  zip_code: "10022",
  phone_number: "2125559876",
  price_range: 0,
  rating: 4.8,
  latitude: 40.757424 + rand(-0.01..0.01),
  longitude: -73.972086 + rand(-0.01..0.01),
  hours: {
    "Monday" => "6:30 am - 5:30 pm",
    "Tuesday" => "6:30 am - 5:30 pm",
    "Wednesday" => "6:30 am - 5:30 pm",
    "Thursday" => "6:30 am - 5:30 pm",
    "Friday" => "6:30 am - 6:30 pm",
    "Saturday" => "7:00 am - 4:00 pm",
    "Sunday" => "7:00 am - 4:00 pm"
  }
)

Business.create!(
  name: "Harlem Roastery",
  address: "200 Lenox Ave",
  city: "New York",
  state: "NY",
  zip_code: "10027",
  phone_number: "2125552222",
  price_range: 2.0,
  rating: 0,
  latitude: 40.804196 + rand(-0.01..0.01),
  longitude: -73.949595 + rand(-0.01..0.01),
  hours: {
    "Monday" => "8:00 am - 4:00 pm",
    "Tuesday" => "8:00 am - 4:00 pm",
    "Wednesday" => "8:00 am - 4:00 pm",
    "Thursday" => "8:00 am - 4:00 pm",
    "Friday" => "8:00 am - 6:00 pm",
    "Saturday" => "9:00 am - 3:00 pm",
    "Sunday" => "9:00 am - 3:00 pm"
  }
)

Business.create!(
  name: "Brooklyn Beans",
  address: "456 Smith St",
  city: "Brooklyn",
  state: "NY",
  zip_code: "11231",
  phone_number: "7185551111",
  price_range: 1.5,
  rating: 0,
  latitude: 40.678230 + rand(-0.01..0.01),
  longitude: -73.994222 + rand(-0.01..0.01),
  hours: {
    "Monday" => "7:00 am - 5:00 pm",
    "Tuesday" => "7:00 am - 5:00 pm",
    "Wednesday" => "7:00 am - 5:00 pm",
    "Thursday" => "7:00 am - 5:00 pm",
    "Friday" => "7:00 am - 7:00 pm",
    "Saturday" => "8:00 am - 3:00 pm",
    "Sunday" => "8:00 am - 3:00 pm"
  }
)

Business.create!(
  name: "Caffeine Corner",
  address: "789 Broadway",
  city: "New York",
  state: "NY",
  zip_code: "10003",
  phone_number: "2125553333",
  price_range: 2.5,
  rating: 0,
  latitude: 40.730284 + rand(-0.01..0.01),
  longitude: -73.993729 + rand(-0.01..0.01),
  hours: {
    "Monday" => "6:30 am - 6:00 pm",
    "Tuesday" => "6:30 am - 6:00 pm",
    "Wednesday" => "6:30 am - 6:00 pm",
    "Thursday" => "6:30 am - 6:00 pm",
    "Friday" => "6:30 am - 8:00 pm",
    "Saturday" => "7:00 am - 4:00 pm",
    "Sunday" => "7:00 am - 4:00 pm"
  }
)

Business.create!(
  name: "Uptown Brews",
  address: "123 1st Ave",
  city: "New York",
  state: "NY",
  zip_code: "10009",
  phone_number: "2125554444",
  price_range: 2.0,
  rating: 0,
  latitude: 40.727719 + rand(-0.01..0.01),
  longitude: -73.986294 + rand(-0.01..0.01),
  hours: {
    "Monday" => "7:00 am - 5:00 pm",
    "Tuesday" => "7:00 am - 5:00 pm",
    "Wednesday" => "7:00 am - 5:00 pm",
    "Thursday" => "7:00 am - 5:00 pm",
    "Friday" => "7:00 am - 6:00 pm",
    "Saturday" => "8:00 am - 4:00 pm",
    "Sunday" => "8:00 am - 4:00 pm"
  }
)

Business.create!(
  name: "Greenwich Grind",
  address: "789 Greenwich St",
  city: "New York",
  state: "NY",
  zip_code: "10014",
  phone_number: "2125555555",
  price_range: 0,
  rating: 4.4,
  latitude: 40.733496 + rand(-0.01..0.01),
  longitude: -74.005912 + rand(-0.01..0.01),
  hours: {
    "Monday" => "8:00 am - 5:00 pm",
    "Tuesday" => "8:00 am - 5:00 pm",
    "Wednesday" => "8:00 am - 5:00 pm",
    "Thursday" => "8:00 am - 5:00 pm",
    "Friday" => "8:00 am - 7:00 pm",
    "Saturday" => "9:00 am - 3:00 pm",
    "Sunday" => "9:00 am - 3:00 pm"
  }
)


Review.create!([ body: "This place is great!", rating: 5, user_id: 1, business_id: 2 ])

Review.create!(
  body: "This place is awesome! The coffee is top-notch.",
  rating: 4,
  user_id: 1,
  business_id: 3
)

Review.create!(
  body: "I love the cozy atmosphere and friendly staff.",
  rating: 5,
  user_id: 1,
  business_id: 6
)

Review.create!(
  body: "Great place to work remotely. Good Wi-Fi and ample seating.",
  rating: 4,
  user_id: 3,
  business_id: 8
)

Review.create!(
  body: "The best coffee in the area! A must-visit for coffee enthusiasts.",
  rating: 5,
  user_id: 2,
  business_id: 12
)
