
# 🍔 Eat Da Burger!

A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them! 

# Live
[ https://kin-burger.herokuapp.com/ ]

## Functionality

Using an home-grown ORM, the app has 3 basic CRUD functions...

READ all entries from the MySQL database and display them to the DOM using Handlebars.
UPDATE a selected burger by clicking It, which...
hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database
re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
CREATE a new burger using the "Place Order" form, which...
hits a /burger/create route in Express to insert a new burger into the MySQL database
re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)
Just for Fun

The app also has a random sound effects are played to grieve a devoured burger. This feature uses jQuery click listeners.

## TECHNOLOGY
• Bootstrap
• express.js
• node.js
• handlebars.js
• MySql

