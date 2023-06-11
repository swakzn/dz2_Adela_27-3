let Starbucks={
    coffee: {
        latte : "Seriously smooth and subtly sweet Starbucks® Blonde Espresso, milk, ice and vanilla syrup come together to create a delightful twist on a beloved espresso classic.",
        macchiato : "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with a caramel drizzle for an oh-so-sweet finish.",
        americano : "Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance.",
    },
    tea : {
        matcha: "Smooth and creamy matcha sweetened just right and served with milk over ice. Green has never tasted so good. ",
        black: "Premium black tea sweetened just right and shaken with ice to create an ideal iced tea—a rich and flavorful black tea journey awaits you.",
        peach: "Green tea is layered together with flavors of spearmint, lemon verbena and lemongrass for a taste that’s really peachy keen."
    }
}
let drink = prompt("coffee or tea")
    if (drink === "coffee"){
    let coffee = prompt("please choose a coffee from the menu: latte, macchiato, americano");
switch (coffee){
    case "latte":
        console.log(Starbucks.coffee.latte)
        console.log("It's $4.99.")
        break
    case "macchiato":
        console.log(Starbucks.coffee.macchiato)
        console.log("It's $6.00.")
        break
    case "americano":
        console.log(Starbucks.coffee.americano)
        console.log("It's $5.00.")
        break
    default:
        console.log("Sorry, this coffee is not available")
}
}else if (drink === "tea" ){
let tea = prompt("please choose tea from the menu: matcha, black, peach");
switch (tea){
        case "matcha":
            console.log(Starbucks.tea.matcha)
            console.log ("It's $4.00.")
            break
        case "black":
            console.log(Starbucks.tea.black)
            console.log ("It's $2.00.")
            break
        case "peach":
            console.log(Starbucks.tea.peach)
            console.log ("It's $2.99.")
            break
        default:
            console.log("Sorry, this tea is not available")
}
}else (console.log("Error!"))