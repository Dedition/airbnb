<!-- npx sequelize model:generate --name Spot --attributes userId:integer,address:string,city:string,state:string,country:string,name:string,price:decimal

npx sequelize model:generate --name Booking --attributes spotId:integer,userId:integer,startDate:date,endDate:date

npx sequelize model:generate --name Review --attributes userId:integer,spotId:integer,review:string,rating:integer

npx sequelize model:generate --name Image --attributes spotId:integer,url:string -->

npx sequelize seed:generate --name SpotData
npx sequelize seed:generate --name BookingData
npx sequelize seed:generate --name ReviewData
npx sequelize seed:generate --name ImageData
