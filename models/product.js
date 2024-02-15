
const db = require('../util/database')
const Cart = require('./cart');
const path = require('path')
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title,price,imageURL,description) VALUES (?,?,?,?) ',
    [this.title,this.price,this.imageUrl,this.description])
  }

  static deleteById(id) {
   return db.execute('DELETE FROM products WHERE products.id = ?',[id])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM  products');
  }

  static findById(id) {
   return db.execute(('SELECT * FROM products WHERE products.id = ?',[id]))
  }
};
