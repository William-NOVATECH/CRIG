export default class Compra {
  constructor({ id, title, description, price, createdBy }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.createdBy = createdBy;
  }
}
