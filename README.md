# Express-employees

## Show a specific object 

Show the result of find in file employess.csv the object with a specific id: 1
```
http://localhost:3000/employee/1
```
Result:  {"id":"1","first_name":"Giorgia","last_name":"Tyne","email":"gtyne0@deliciousdays.com","ip_address":"176.146.145.226"}


## Show a specific argument

Show the result of find in file employess.csv the argument with a specific id: 1 and argument first_name
```
http://localhost:3000/employee/1/fist_name
```
Result: {"id":"1","first_name":"Giorgia"}