# Supply-Chain-Management-System

## Description

This is a system for monitoring and analytics of a production company. The company has several products and customers (wholesalers, retailers and end customers). The company has a supply chain that uses the railway system to distribute their products to the customers islandwide. 

Our system has the ability to generate:
• Quarterly sales report for a given year <br>
• Items with most orders <br>
• Sales report categorized according to main cities and routes <br>
• Working Hours of Drivers/ Driver Assistants and Used hours of Trucks <br>
• Customer - order report

We have implemented this as a web app.

## Requirements

React Version: version 17 <br>
Node Version: 16.x <br>
NPM Version: 6.14.13 or higher <br>
Nodemon Version: v14.17.0 or higher <br>
MySQL Version: 8.0.x

## Installing Dependencies

The system is built on Node server, React app and MySQL database, therefore these 3 main foremost tools need to be installed with specified version.

### Installing Node.js and NPM

Node run time environment is used to run the back-end server of the system and handle the HTTP request. Go to https://nodejs.org/en/download/ URL and download the specified Node.js installer suitable for you operating system and install it. When you install Node, it automatically installs NPM (Node Package Manager). If you want to install packages and dependencies using yarn, you are free to do that, but we recommend using NPM.
To check the installation, go to the terminal and type node --version or node -v to check the version of the node environment installed and type npm --version or npm -v to check the packages manager version. If the NPM version is 5.2.0 or higher you are finished with Node.js installation but if you have installed an older version run npm install -g npm to install NPX (Node Package Executor) globally.

### Installing React

React is basically not a tool but a library, therefore we don’t have to install a separate tool for
to run react on the browser. If you have installed NPM version 5.2.0 or higher you can run
the node executor directly from the terminal.

### Installing MySQL

Go to https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/ and install MySQL
database which is compatible to you operating system. After installation open a terminal and
type mysql --version to check the successful completion of the installation.

### Installing nodemon

nodemon helps to automatically restart the server even if some error or some changes
happens in the server. To install nodemon globally open the terminal and type npm install -g
nodemon (or yarn global add nodemon, if you are using yarn package manager). Visit
https://www.npmjs.com/package//nodemon if you need more information.


## Compiling

### Installing Dependencies

Go to the GitHub repository (https://github.com/kajanan1212/Supply-Chain-Management-System) of the project and download the current version. Download the files in the local directory and go to the /backend directory and check if it contains package.json and package-lock.json files are included. Open a terminal and go to /backend directory location and run npm install to install dependencies and libraries for the server side. Next go to /frontend directory and run npm install to install dependencies and libraries for the front-end development.

### Setting up the database

Create a database with a desired name (assume ‘db_buymore’). Open the mysql command line client or MySQL workbench and execute CREATE DATABASE db_buymore; to create the database with the name ‘db_buymore’. Then execute the given sql file in this database.


## Program Execution

1.	After Compiling, open the terminal and go to /backend directory and type “npm start” to run the backend server in the localhost. 
2.	In the terminal, go to /frontend directory and type “npm start” to open the program in your default browser. 

•	Terminal must be running throughout the process. If the terminal crashes for any reason restart the terminal again and “npm start”.

•	If the server takes too long to respond or some undesired error occurs, close the running server in the terminal, and go to /backend directory and type “npm restart” to rerun the backend server. Then go to /frontend directory and type “npm start” to start the program again.

## Contributors
• Sivakajan Sivaparan <br>
• Sakeerthan Thijakarasa <br>
• Kajanan Selvanesan <br>
• Laksika Tharmalingam 
