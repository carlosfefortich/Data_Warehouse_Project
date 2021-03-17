# Data_Warehouse_Project

Full Stack Web App for a Marketing company that allows to manage all the contacts for their clients and companies for their campaigns.

## Pre-requisites
To be able to run this application, you need:
1. NodeJS: You can download it [HERE](https://nodejs.org/es/download/). You must choose between the options given according to your OS.
2. MariaDB: You can download it [HERE](https://mariadb.org/download/). You must choose between the options given according to your OS. Along with the database engine, the software its going to download HeidiSQL, which we are going to use.
 - Installation: You can just click next until they ask for the credentials. The password must be **toor**. After that you can go on until the installation is over.
3. Download or clone the files from this repository.
4. IDE: You can use whatever Integrated Development Environment that you want, but I recommend you use Visual Studio Code to avoid any mistakes. You are just going to use the console to execute some commands, so feel free to use the Command Prompt (New terminal).
5. LiveServer: For VisualStudioCode, you can implement and extension called LiveServer to run the server. If you using another IDE, check the options to mimic this.

## Running the Backend

Now that we have everything we need, we are ready to start.
1. First, you need to open HeidiSQL, click on File, Load SQL File and execute the script.sql file or simply open a blank query tab and execute CREATE DATABASE `data_warehouse`.
2. Create the environment variables according to your OS and version by using the Command Prompt (New terminal), or simply create a .env file in the root folder of the project. You'll need the following environment variables:
 - PORT = 3000
 - SECRET_KEY = 'this_is_a_secret'
 - DB_NAME = 'data_warehouse'
 - DB_USER = 'root'
 - DB_PASS = 'toor'
 - DB_HOST = 'localhost'
 For the instance variables, you can set whatever value you want. Keep in mind this is creates a root user which is going to have an "Admin" role and you'll need to use it to login for the first time.
 - INSTANCE_NAME = 'Carlos'
 - INSTANCE_LASTNAME = 'Fortich'
 - INSTANCE_EMAIL = 'carlos@acamica.com'
 - INSTANCE_PASS = 'asd123'
 - INSTANCE_ROLE = 'asd123'
 - INSTANCE_ROLE = 'admin'
3. Install the nodemon package:
- `npm i nodemon`

***NOTE: If you are using a terminal, make sure you are on the project folder before executing the commands***

4. Install all the dependencies by running npm install:
- `npm install`
5. Start the server by running npm start:
- `npm start`

Now the server is listening and ready to start!

As you are going to notice, once you start the app, **it will automatically create all the tables in the database named data_warehouse and the root user with the values of the variables provided on the instance variables**

## Running the Frontend

To run the Frontend it's pretty simple:
1. First, open up the project with VisualStudio Code.
2. If you haven't install the LiveServer extension.
3. Press the "Go Live" button on the lower right corner of VisualStudio Code.

I hope you enjoy using the website!

Best regards!
