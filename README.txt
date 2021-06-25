nodejs for CRUD operations

//server
Run the server in localhost with port number 3000


//connection mongodb
Add the current ip address in mongobd keep it active run the server which connects to mongobd 



//Modeling the schema 
Database with name user contains 

1.Name
2.email
3.password
4.phone number

//post operation register
for registration body should contain name password email and phonenumber is validated using joi

//login post 
login post sends token if user alredy exists in DB

//Update the phone_number and name
auth-token which received in login post is used to update data