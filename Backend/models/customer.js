const jwt = require('jsonwebtoken');
const db = require('../util/database.js');
const dotenv = require('dotenv');
dotenv.config();

class Customer {
    constructor(customerDetails) {
        this.id = customerDetails.customer_id;
        this.first_name = customerDetails.first_name;
        this.last_name = customerDetails.last_name;
        this.email = customerDetails.email;
        this.password = customerDetails.password;
        this.phone_num = customerDetails.phone_num;
        this.type = customerDetails.type;
        this.img = customerDetails.img;
    }

    static fetchAll() {
        return db.execute('select * from customer;');
    }

    static async findByEmail(email) {
        let sql = `select * from customer where email=?;`;
        const [users, _] = await db.execute(sql, [email]);

        if (users.length > 0) {
            return users[0];
        }
        return false;
    }

    async save() {
        let sql = 'insert into customer (`customer_id`, `email`, `first_name`, `last_name`, `phone_num`, `password`, `image`) values (?,?,?,?,?,?,?,?);';

        await db.execute(sql, [this.id, this.email, this.first_name, this.last_name, this.phone_num, this.password, this.img], (err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log(results);
            }
        });
        this.id = (await Customer.findByEmail(this.email)).id;
    }

    generateAuthToken() {
        const token = jwt.sign({ id: this.id, email: this.email, f_name: this.first_name, l_name: this.last_name, phone: this.phone_num, password: this.password, img: this.img }, process.env.jwtPrivateKey);
        return token;
    }
};

module.exports.User = Customer;
