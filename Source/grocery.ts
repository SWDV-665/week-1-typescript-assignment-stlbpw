//grocery class
class Grocery {
    name: string;
    quantity: number;
    category: string;
    price: number;
    unit: string;

    constructor(name: string, quantity: number, category: string, price: number, unit: string) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.price = price;
        this.unit = unit;
    }

    getName(): string {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getCategory(): string {
        return this.category;
    }

    getPrice(): number {
        return this.price;
    }

    getUnit(): string {
        return this.unit;
    }

}

//grocery list

let groceryList = [
    new Grocery("Milk", 2, "Dairy", 3.99, "gallon"),
    new Grocery("Bread", 1, "Bakery", 2.99, "loaf"),
    new Grocery("Eggs", 1, "Dairy", 1.99, "dozen"),
    new Grocery("Chicken", 2, "Meat", 5.99, "pound"),
    new Grocery("Apples", 6, "Produce", 3.99, "pieces"),
    new Grocery("Bananas", 6, "Produce", 2.99, "pieces"),
    new Grocery("Cereal - the Cap'n", 1, "Breakfast", 4.99, "box"),
    new Grocery("Pasta", 1, "Pantry", 1.99, "box"),
    new Grocery("Rice", 1, "Pantry", 2.99, "pound"),
    new Grocery("Black Beans", 1, "Pantry", 0.99, "can"),
    new Grocery("Vanilla Ice Cream", 1, "Frozen", 4.99, "pint")
];

//grocery list output

let openOutput = "<div style=\"margin-bottom: 50px;\">";
openOutput += "<h1>Grocery List</h1>";
openOutput += "</div>";


let groceryListOutput = "<div style=\"margin-bottom: 50px;\">";
groceryListOutput += "<h2>Grocery List Formatting</h2>";
groceryListOutput += "<ul>";
groceryList.forEach(grocery => {
    groceryListOutput += "<li>" + grocery.getQuantity() + " " + grocery.getUnit() + " " + grocery.getName() + " - $" + grocery.getPrice() + "</li>";
});
groceryListOutput += "</ul></div>";



let grocerTableOutput = "<div style=\"margin-bottom: 50px;\">";
grocerTableOutput += "<h2>Grocery Table Formatting</h2>";
grocerTableOutput += "<table border=\"1\">";
grocerTableOutput += "<tr>";
grocerTableOutput += "<th>Quantity</th>";
grocerTableOutput += "<th>Unit</th>";
grocerTableOutput += "<th>Name</th>";
grocerTableOutput += "<th>Category</th>";
grocerTableOutput += "<th>Price</th>";
grocerTableOutput += "</tr>";
groceryList.forEach(grocery => {
    grocerTableOutput += "<tr>";
    grocerTableOutput += "<td style=\"padding: 5px;\">" + grocery.getQuantity() + "</td>";
    grocerTableOutput += "<td style=\"padding: 5px;\">" + grocery.getUnit() + "</td>";
    grocerTableOutput += "<td style=\"padding: 5px;\">" + grocery.getName() + "</td>";
    grocerTableOutput += "<td style=\"padding: 5px;\">" + grocery.getCategory() + "</td>";
    grocerTableOutput += "<td style=\"padding: 5px;\">" + grocery.getPrice() + "</td>";
    grocerTableOutput += "</tr>";
});
grocerTableOutput += "</table></div>";


document.body.innerHTML = openOutput;
document.body.innerHTML += groceryListOutput;
document.body.innerHTML += grocerTableOutput;