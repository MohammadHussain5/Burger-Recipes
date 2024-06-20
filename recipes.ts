import inquirer from "inquirer";
import chalk from "chalk";

let condition = true;

while (condition) {
  const input = await inquirer.prompt([
    {
      name: "recipes",
      type: "list",
      message: chalk.yellow.bold(
        "Which type of burger would you like to make?"
      ),
      choices: [
        "Zinger Burger",
        "Cheese Burger",
        "Veggie Burger",
        "Mushroom Swiss Burger",
        "BBQ Bacon Burger",
      ],
    },
  ]);

  if (input.recipes === "Zinger Burger") {
    console.log(chalk.greenBright.bold("Zinger Burger:"));
    console.log(
      chalk.greenBright(
        "To make a Zinger Burger, start by flattening chicken breast fillets to an even thickness. Season them with salt, pepper, paprika, and garlic powder. Prepare three bowls: one with flour, another with beaten egg mixed with milk, and the third with breadcrumbs. Coat each fillet in flour, then dip in the egg mixture, and coat with breadcrumbs. Fry the chicken fillets in hot oil until golden brown and cooked through. Toast burger buns, and assemble the burgers with lettuce leaves, tomato slices, fried chicken fillet, and mayonnaise."
      )
    );
  } else if (input.recipes === "Cheese Burger") {
    console.log(chalk.greenBright.bold("Cheese Burger:"));
    console.log(
      chalk.greenBright(
        "For a classic Cheese Burger, season ground beef with salt and pepper and form into patties. Cook the patties on a grill or in a pan until they reach your desired level of doneness. During the last minute of cooking, top each patty with a slice of cheese to melt. Toast burger buns and assemble the burgers with lettuce leaves, tomato slices, pickles, onion slices, ketchup, and mustard."
      )
    );
  } else if (input.recipes === "Veggie Burger") {
    console.log(chalk.greenBright.bold("Veggie Burger:"));
    console.log(
      chalk.greenBright(
        "To prepare a Veggie Burger, mash cooked black beans or chickpeas in a bowl. Mix in breadcrumbs, finely chopped onion, minced garlic, chopped parsley or cilantro, cumin powder, salt, and pepper. Form the mixture into patties and cook them in a pan with oil until golden brown and heated through. Toast burger buns and assemble the burgers with lettuce leaves, tomato slices, avocado slices, and a mayo or yogurt sauce."
      )
    );
  } else if (input.recipes === "Mushroom Swiss Burger") {
    console.log(chalk.greenBright.bold("Mushroom Swiss Burger:"));
    console.log(
      chalk.greenBright(
        "For a Mushroom Swiss Burger, season ground beef with salt and pepper and shape into patties. Cook the patties on a grill or in a pan until done. In a separate pan, sauté sliced mushrooms until tender. Top each patty with Swiss cheese slices during the last minute of cooking to melt. Toast burger buns and assemble the burgers with lettuce leaves, tomato slices, sautéed mushrooms, and your choice of mayo or mustard."
      )
    );
  } else if (input.recipes === "BBQ Bacon Burger") {
    console.log(chalk.greenBright.bold("BBQ Bacon Burger:"));
    console.log(
      chalk.greenBright(
        "To make a BBQ Bacon Burger, season ground beef with salt and pepper and form into patties. Cook the patties on a grill or in a pan until they reach your desired level of doneness. Cook bacon slices until crispy. Brush the patties with BBQ sauce during the last minute of cooking. Top each patty with cheddar cheese slices to melt. Toast burger buns and assemble the burgers with lettuce leaves, tomato slices, crispy bacon, and onion slices."
      )
    );
  } else {
    console.log(chalk.redBright("Select the valid type"));
  }

  let condition1 = await inquirer.prompt({
    name: "again",
    type: "confirm",
    message: chalk.yellowBright.bold(
      "Would you like to see any other recipes?"
    ),
    default: false,
  });

  condition = condition1.again;
}
