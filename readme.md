#Implement Zloyadkovci 'REST API

You can make requests to the following endpoints:

## Register User (POST): http://localhost:3030/users/register
## Login User (POST): http://localhost:3030/users/login
## Logout User (GET): http://localhost:3030/users/logout
## Create Item/receipt/ (POST): http://localhost:3030/data/catalog
## All Items /receipts/ (GET): http://localhost:3030/data/catalog
## Item/receipt/ Details (GET): http://localhost:3030/data/catalog/:id
## Update Item/receipt/ (PUT): http://localhost:3030/data/catalog/:id
## Delete Item/receipt/ (DELETE): http://localhost:3030/data/catalog/:id
## My Items/receipts/ (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22

#Requirements to the client:
##Register User

You need to write the functionality for the registration of a new user. By clicking the "Register" button you have to load the registration form. Register a user inside the database with an email, username, password. Password inside the database must be hashed (use bcrypt) and both passwords must match!

When the "Register" button of the form is clicked you need to send a post request.

If the registration is successful you can redirect to the dashboard page.

##Login User

If the user has already registered, the user can login by using the login form. After successful login the user should be redirected to the dashboard page. Save the returned token in the session storage, and send it with every request.

##Logout User

The logged-in user can be logged out by clicking the logout button. Write the functionality for this action.
Create Item/Receipt/

##Validate fields:

### title - must be at least 2 symbols long
### ingredients - string
### time- must be a positive number
### description -must be more than 10 symbols
### img is required
### _ownerId
### createdAt

By valid input, you can add the "is-valid" class to the input field, and by invalidating the "is-invalid" class.

If the creation is successful show redirect to the dashboard page.

##Item Details

Get the id from the URL and display the information. If the logged user is the creator the buttons "Edit" and "Delete" should be visible (can be used), otherwise, they should not be visible.

##Delete Item

By clicking on the "Delete" button the app needs first confirmation for deleting (you can use alert or another custom-made notification) then sends a DELETE request and deletes the furniture. Then the app redirects to the dashboard.

##My Items

A logged-in user can see a list of their publications by clicking the link “My Publications” in the navigation bar. Display a page similar to the main catalog (dashboard), but only show the records that are associated with the currently logged-in user.