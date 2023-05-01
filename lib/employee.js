// Import connection
const connection = require('../db/connection');
// Employee class
class Employee {
    constructor({id, first_name, last_name, role_id, manger_id}) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manger_id = manger_id;
    }
    // Static method, get all employees
    static getAll() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM employees', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    const employees = rows.map((row) => new Employee (row));
                    resolve(employees);
                }
            });
        });
    }
    // Static method, get employee id
    static getById(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows) => {
                if (err) {
                    reject(err);
                } else if (rows.length === 0) {
                    resolve(null);
                } else {
                    const employee = new Employee(rows[0]);
                    resolve(employee);
                }
            });
        });
    }
    // Static method, get employee role id
    static getByRole(roleId) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM employees WHERE role_id = ?', [roleId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                  const employees = row.map((row) => new Employee(row));
                  resolve(employees);  
                }
            });
        });
    }
    // Static method, get employee manager id
    static getByManager(managerId) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM employees WHERE manager_id = ?', [managerId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    const employees = rows.map((row) => new Employee(row));
                    resolve(employees);
                }
            });
        });
    }
    // Save function
    save() {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO employees (first_name, last_name, role_id, manger_id) VALUES (?,?,?,?)', [this.first_name, this.last_name, this.role_id, this.manger_id], (err, result) => {
                if (err) {
                    reject(err);
                    } else {
                        this.id = result.insertId;
                        resolve(this);
                    }
            });
        });
    }
    // Update function
    update() {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE employees SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?, WHERE id = ?', [this.first_name, this.last_name, this.role_id, this.manger_id, this.id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this);
                }
            });
        });
    }
}
module.exports = Employee;