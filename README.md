# employeeTracker

The Employee Tracker is a command-line application that allows a user to manage a company's employee data. It provides the user with options to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. The application uses the Inquirer package to prompt the user for input and the MySQL2 package to connect to a MySQL database. The console.table package is also used to print MySQL rows to the console in a readable format.


## Installation and Usage

Clone the repository to your local machine.
Navigate to the root directory of the project in your terminal.
Run the command npm install to install the required dependencies (Inquirer, MySQL2, and console.table).
Create a '.env' file in the root directory of the project with the following content:
DB_USER=<your MySQL username>
DB_PASSWORD=<your MySQL password>
DB_NAME=employee_management
Replace <your MySQL username> and <your MySQL password> with your actual MySQL username and password. This file will be used to connect to the database.
Import the employee_management.sql file in your MySQL workbench to create the database and tables needed for the application to function.

### Contribution

Note: The "Add Role" and "Add Employee" functions are not yet functional and will be implemented in a future update. The application is open-source and contributions are welcome from developers who may be interested in helping to fix the broken code and implement the missing functionality.

### Dependencies

The application uses the following dependencies:

Inquirer.js: For collecting user input from the command line interface.
MySQL2: For connecting to a MySQL database.
Console.table: For printing MySQL rows to the console in a formatted table.

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Find a Demo Video here:
https://youtu.be/CIv2zzR6VyU