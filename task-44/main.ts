function sandwichMake(item: string[]){
    console.log("\nMaking Your Sandwich With:");

    item.forEach(name => console.log("- " + name));
    console.log("Enjoy Your Sandwich !\n");
    
    
}
sandwichMake(["Ham", "Egg Salad", "Club"])

sandwichMake(["Roast Beef",  "Turkey"])

sandwichMake([ "Pita", "BTL"])