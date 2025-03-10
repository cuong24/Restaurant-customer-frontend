# Software Architecture
This project is to develop a Restaurant website applying modern, scalable, high available architecture by implementing OAuth2, micro-service, Redis, Kafka message queue, Docker, Kubernetes and AWS cloud.
This repo is the frontend for user webpage.
 * The IPs for all the URLs might change in the future since we reboot the EC2 instances.

## Link to the webpage
http://34.219.211.13:3000/

## Components   
### Menu
All images of the menu are save in the with a predefined name. At this point, the only way to add new, change the image or edit the image name is to edit directly in the server.
    
Dishes are displayed into categories and be fetched from the url: http://54.214.208.194:8989/menu/{category}

Pagination is implemented to display 3 dishes per page.
### Tables
List of tables are assumed to be fixed physcially regarding number of tables, their locations and their seats.

Unavailable tables are disabled after checking the input date from the user via this url: http://54.214.208.194:8989/users/tables

User can not select date from the past and can only select within a specified time frame.

User can click multiple tables to select and unselect.
### Reservation Form 
Submit button is disabled until at least one table is selected.

User is required to fill in name and phone to submit a new reservation.
    
### How to launch the service
1. Run npm install
2. Run docker-compose up --build command 
 * The service is using Nginx as web server and deployed in production mode.
 * IP for all URL calls, including URL to set webpage after deployed has to be checked and modified manually to make sure it is up-to-date.
