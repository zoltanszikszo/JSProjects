const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers(){
      return this.appetizers;
    },
    set appetizers(appetizers){
      this.appetizers.push(appetizers);
    },
    get mains(){
      return this.mains;
    },
    set mains(mains){
      this.mains.push(mains);
    },
    get desserts(){
      return this.desserts;
    },
    set desserts(desserts){
      this.desserts.push(desserts);
    },
    get courses(){
      return{
        appetizers: this.appetziers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
  
      return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}, ... The price is $${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Fried Mozzarella', 6.00);
  menu.addDishToCourse('appetizers', 'Fried Pickles', 5.50);
  menu.addDishToCourse('appetizers', 'Barbecue Chicken Flatbread', 8.25);
  
  menu.addDishToCourse('mains', 'Chicken Piccata', 15.00);
  menu.addDishToCourse('mains', 'Shrimp Scampi', 18.50);
  menu.addDishToCourse('mains', 'Penne alla Vodka', 14.50);
  
  menu.addDishToCourse('desserts', 'Brownie Sundae', 6.50);
  menu.addDishToCourse('desserts', 'Tiramisu', 5.00);
  menu.addDishToCourse('desserts', 'Pecan Pie', 5.25);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);