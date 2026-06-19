// menu-data.js
// Structured menu data for Mocha Art Cafe
// Declared on window for compatibility with direct file:// protocol runs.

window.menuData = [
  // --- STARTERS ---
  {
    id: "starters-nachos",
    name: "Nachos to Share",
    category: "Starters",
    price: 240,
    description: "Crispy house-made corn tortilla chips layered with warm cheese sauce, fresh jalapeños, zesty pico de gallo, and sour cream.",
    type: "veg",
    popular: true
  },
  {
    id: "starters-macho-chicken-fries",
    name: "Macho Style Chicken French Fries",
    category: "Starters",
    price: 290,
    description: "Golden fries topped with tender grilled chicken chunks, melted cheddar, smoky BBQ drizzle, and green onions.",
    type: "non-veg",
    popular: true
  },
  {
    id: "starters-loaded-garden-fries",
    name: "Loaded Garden French Fries",
    category: "Starters",
    price: 220,
    description: "Crispy fries smothered in house cheese sauce, topped with bell peppers, olives, corn, and fresh herbs.",
    type: "veg",
    popular: false
  },
  {
    id: "starters-fried-prawns",
    name: "Fried Prawns",
    category: "Starters",
    price: 360,
    description: "Crispy, golden-fried prawns seasoned with local spices, served with a tangy citrus-garlic aioli.",
    type: "non-veg",
    popular: false
  },
  {
    id: "starters-butter-garlic-prawns",
    name: "Butter Garlic Prawns",
    category: "Starters",
    price: 380,
    description: "Plump prawns sautéed in a rich, velvety butter garlic sauce, finished with fresh parsley and lemon squeeze.",
    type: "non-veg",
    popular: true
  },
  {
    id: "starters-chicken-fingers",
    name: "Chicken Fingers",
    category: "Starters",
    price: 260,
    description: "Succulent, breaded chicken breast strips fried to a crisp, served with our signature sweet honey mustard.",
    type: "non-veg",
    popular: false
  },
  {
    id: "starters-fish-fingers",
    name: "Fish Fingers",
    category: "Starters",
    price: 320,
    description: "Flaky white fish fillets breaded and deep-fried, paired with a classic creamy dill tartar sauce.",
    type: "non-veg",
    popular: false
  },
  {
    id: "starters-paneer-sticks",
    name: "Paneer Sticks",
    category: "Starters",
    price: 240,
    description: "Spiced paneer blocks breaded in herb crumbs, fried golden and served with spicy mint chutney.",
    type: "veg",
    popular: false
  },
  {
    id: "starters-chicken-popcorn",
    name: "Chicken Popcorn",
    category: "Starters",
    price: 220,
    description: "Bite-sized chicken nuggets seasoned with spicy peri-peri rub, fried to crunchy perfection.",
    type: "non-veg",
    popular: true
  },
  {
    id: "starters-paneer-popcorn",
    name: "Paneer Popcorn",
    category: "Starters",
    price: 200,
    description: "Crunchy, bite-sized spiced paneer pops served with a rich, smoky chipotle mayonnaise dip.",
    type: "veg",
    popular: false
  },
  {
    id: "starters-chilli-chicken",
    name: "Chilli Chicken",
    category: "Starters",
    price: 280,
    description: "Indo-Chinese style wok-tossed chicken cubes with bell peppers, onions, and a dark soy-chilli glaze.",
    type: "non-veg",
    popular: false
  },

  // --- SIDES ---
  {
    id: "sides-cheese-corn-balls",
    name: "Cheese Corn Balls",
    category: "Sides",
    price: 180,
    description: "Crispy golden croquettes stuffed with sweet corn kernels and gooey, melted mozzarella.",
    type: "veg",
    popular: false
  },
  {
    id: "sides-jalapeno-balls",
    name: "Jalapeno Cheese Balls",
    category: "Sides",
    price: 190,
    description: "A fiery blend of minced jalapeños and cheddar cheese rolled in breadcrumbs and deep-fried.",
    type: "veg",
    popular: true
  },
  {
    id: "sides-chicken-cheese-balls",
    name: "Chicken Cheese Balls",
    category: "Sides",
    price: 220,
    description: "Savory minced chicken balls stuffed with a cheddar cheese center that bursts with every bite.",
    type: "non-veg",
    popular: false
  },
  {
    id: "sides-chicken-strips",
    name: "Chicken Strips",
    category: "Sides",
    price: 240,
    description: "Marinated chicken breast tenderloins fried crisp and tossed in custom cajun seasoning.",
    type: "non-veg",
    popular: false
  },
  {
    id: "sides-garlic-bread",
    name: "Cheesy Garlic Bread",
    category: "Sides",
    price: 160,
    description: "Toasted baguette slices spread with garlic butter, covered in melted mozzarella and Italian herbs.",
    type: "veg",
    popular: true
  },
  {
    id: "sides-chicken-garlic-bread",
    name: "Chicken Cheesy Garlic Bread",
    category: "Sides",
    price: 200,
    description: "Garlic baguette loaded with shredded seasoned chicken, garlic butter, and fresh bubbly mozzarella.",
    type: "non-veg",
    popular: false
  },
  {
    id: "sides-onion-rings",
    name: "Onion Rings",
    category: "Sides",
    price: 140,
    description: "Thick-cut sweet onion slices double-dipped in a light beer batter and fried to crispy golden rings.",
    type: "veg",
    popular: false
  },
  {
    id: "sides-falafel",
    name: "Falafel",
    category: "Sides",
    price: 150,
    description: "Traditional Middle Eastern crispy spiced chickpea patties served with creamy sesame tahini.",
    type: "veg",
    popular: false
  },
  {
    id: "sides-fries",
    name: "French Fries",
    category: "Sides",
    price: 120,
    description: "Classic straight-cut golden potatoes, salted lightly and served hot with tomato ketchup.",
    type: "veg",
    popular: false
  },
  {
    id: "sides-tornado-fries",
    name: "Tornado Fries",
    category: "Sides",
    price: 160,
    description: "Spiral-cut whole potato on a skewer, fried and dusted with a smoky peri-peri seasoning.",
    type: "veg",
    popular: true
  },

  // --- BURRITOS & BOWLS ---
  {
    id: "bb-garden-veg-burrito",
    name: "Garden Veg Burrito",
    category: "Burritos & Bowls",
    price: 220,
    description: "Warm flour tortilla loaded with cilantro-lime rice, black beans, grilled garden veggies, salsa, and guacamole.",
    type: "veg",
    popular: false
  },
  {
    id: "bb-paneer-burrito",
    name: "Paneer Burrito",
    category: "Burritos & Bowls",
    price: 240,
    description: "Flour tortilla wrap packed with spiced grilled paneer cubes, sautéed onions, peppers, rice, and sour cream.",
    type: "veg",
    popular: true
  },
  {
    id: "bb-chicken-burrito",
    name: "Chicken Burrito",
    category: "Burritos & Bowls",
    price: 260,
    description: "Tortilla wrapped around seasoned shredded chicken breast, pinto beans, Mexican rice, cheese, and fresh salsa.",
    type: "non-veg",
    popular: true
  },
  {
    id: "bb-chicken-tinga-burrito",
    name: "Chicken Tinga Burrito",
    category: "Burritos & Bowls",
    price: 270,
    description: "Smoky and spicy chicken tinga cooked in chipotle adobo, wrapped with rice, refried beans, and cotija cheese.",
    type: "non-veg",
    popular: false
  },
  {
    id: "bb-veg-burrito-bowl",
    name: "Veg Burrito Bowl",
    category: "Burritos & Bowls",
    price: 240,
    description: "Cilantro-lime rice base topped with grilled vegetables, sweet corn, black beans, pico de gallo, and fresh lime cream.",
    type: "veg",
    popular: false
  },
  {
    id: "bb-chicken-burrito-bowl",
    name: "Chicken Burrito Bowl",
    category: "Burritos & Bowls",
    price: 280,
    description: "Deconstructed burrito featuring grilled adobo chicken, rice, beans, corn salsa, and shredded cheese over crisp lettuce.",
    type: "non-veg",
    popular: true
  },

  // --- QUESADILLAS ---
  {
    id: "q-chicken-quesadilla",
    name: "Chicken Quesadilla",
    category: "Quesadillas",
    price: 240,
    description: "Toasted flour tortilla filled with juicy seasoned chicken and a rich blend of melted Mexican cheeses.",
    type: "non-veg",
    popular: false
  },
  {
    id: "q-chicken-cheese-quesadilla",
    name: "Chicken Cheese Quesadilla",
    category: "Quesadillas",
    price: 260,
    description: "Double cheese-loaded folded tortilla packed with diced grilled chicken, green chillies, and cilantro.",
    type: "non-veg",
    popular: true
  },
  {
    id: "q-veg-quesadilla",
    name: "Veg Quesadilla",
    category: "Quesadillas",
    price: 200,
    description: "Sautéed bell peppers, onions, sweet corn, and mushrooms folded in a grilled tortilla with cheddar cheese.",
    type: "veg",
    popular: false
  },
  {
    id: "q-corn-cheese-quesadilla",
    name: "Corn & Cheese Quesadilla",
    category: "Quesadillas",
    price: 210,
    description: "A sweet and savory combination of juicy sweet corn kernels and melted mozzarella inside a crisp tortilla.",
    type: "veg",
    popular: false
  },
  {
    id: "q-paneer-quesadilla",
    name: "Paneer Quesadilla",
    category: "Quesadillas",
    price: 230,
    description: "Tandoori marinated paneer crumbles, sliced onions, and melting mozzarella in a golden grilled tortilla.",
    type: "veg",
    popular: true
  },

  // --- MOMOS ---
  {
    id: "momos-chicken",
    name: "Chicken Momos",
    category: "Momos",
    price: 180,
    description: "Steamed or fried dumplings stuffed with seasoned minced chicken and fresh scallions, served with spicy dip.",
    type: "non-veg",
    popular: true
  },
  {
    id: "momos-veg",
    name: "Veg Momos",
    category: "Momos",
    price: 150,
    description: "Delectable dumplings stuffed with finely chopped cabbage, carrots, French beans, and ginger. Steamed/Fried.",
    type: "veg",
    popular: false
  },
  {
    id: "momos-paneer",
    name: "Paneer Momos",
    category: "Momos",
    price: 170,
    description: "Plump dumplings stuffed with spiced paneer, onions, and fresh coriander. Choice of steamed or pan-fried.",
    type: "veg",
    popular: false
  },
  {
    id: "momos-corn-cheese",
    name: "Corn & Cheese Momos",
    category: "Momos",
    price: 190,
    description: "Fusion dumplings filled with sweet corn and melted cream cheese, fried until golden and crisp.",
    type: "veg",
    popular: true
  },

  // --- TACOS ---
  {
    id: "tacos-crispy-chicken",
    name: "Crispy Chicken Tacos",
    category: "Tacos",
    price: 220,
    description: "Three hard taco shells filled with crispy chicken strips, cabbage slaw, pico de gallo, and chipotle drizzle.",
    type: "non-veg",
    popular: true
  },
  {
    id: "tacos-chicken-tinga",
    name: "Chicken Tinga Tacos",
    category: "Tacos",
    price: 240,
    description: "Soft corn tortillas filled with slow-cooked shredded chicken in chipotle sauce, topped with onions and fresh cilantro.",
    type: "non-veg",
    popular: false
  },
  {
    id: "tacos-veg",
    name: "Veg Tacos",
    category: "Tacos",
    price: 180,
    description: "Warm tortillas loaded with seasoned black beans, fajita vegetables, shredded lettuce, and rich avocado crema.",
    type: "veg",
    popular: false
  },
  {
    id: "tacos-paneer",
    name: "Paneer Tacos",
    category: "Tacos",
    price: 200,
    description: "Soft flour tortillas with spiced grilled paneer, fresh salsa cruda, pickled onions, and a splash of lime juice.",
    type: "veg",
    popular: true
  },

  // --- PIZZAS ---
  {
    id: "pizza-margherita",
    name: "Margherita",
    category: "Pizzas",
    price: 290,
    description: "A classic Italian base topped with rich house marinara sauce, fresh basil, and bubbling premium mozzarella.",
    type: "veg",
    popular: true
  },
  {
    id: "pizza-corn",
    name: "Corn Pizza",
    category: "Pizzas",
    price: 320,
    description: "Golden sweet corn kernels, yellow bell peppers, and mozzarella cheese on a crisp hand-tossed thin crust.",
    type: "veg",
    popular: false
  },
  {
    id: "pizza-veg-delight",
    name: "Veg Delight Pizza",
    category: "Pizzas",
    price: 350,
    description: "Loaded with black olives, green bell peppers, red onions, mushrooms, sweet corn, and extra cheese.",
    type: "veg",
    popular: false
  },
  {
    id: "pizza-bbq-paneer",
    name: "Smoky BBQ Paneer Pizza",
    category: "Pizzas",
    price: 380,
    description: "Drizzled in sweet and smoky BBQ sauce, topped with tender paneer cubes, red onions, and fresh cilantro.",
    type: "veg",
    popular: true
  },
  {
    id: "pizza-peri-paneer",
    name: "Peri Peri Paneer Pizza",
    category: "Pizzas",
    price: 380,
    description: "Spicy peri-peri seasoned paneer cubes, roasted bell peppers, sliced jalapenos, and mozzarella.",
    type: "veg",
    popular: false
  },
  {
    id: "pizza-bbq-chicken",
    name: "Smoky BBQ Chicken Pizza",
    category: "Pizzas",
    price: 400,
    description: "Succulent shredded chicken tossed in hickory BBQ sauce, topped with red onions and aged mozzarella.",
    type: "non-veg",
    popular: true
  },
  {
    id: "pizza-peri-chicken",
    name: "Peri Peri Chicken Pizza",
    category: "Pizzas",
    price: 400,
    description: "Zesty peri-peri chicken chunks, roasted yellow capsicum, red paprika, and sliced jalapeno peppers.",
    type: "non-veg",
    popular: false
  },
  {
    id: "pizza-chicken-sausage",
    name: "Chicken Sausage Pizza",
    category: "Pizzas",
    price: 390,
    description: "Slices of premium smoked chicken sausage, caramelized onions, marinara sauce, and gooey cheese.",
    type: "non-veg",
    popular: false
  },
  {
    id: "pizza-cheese-burst",
    name: "Cheese Burst Pizza",
    category: "Pizzas",
    price: 420,
    description: "Double-decked pizza crust containing a liquid cheese center, topped with a mix of veggies and herbs.",
    type: "veg",
    popular: true
  },
  {
    id: "pizza-pesto-chicken",
    name: "Pesto Chicken Pizza",
    category: "Pizzas",
    price: 440,
    description: "Rich green basil-pesto base, grilled chicken breast strips, sun-dried tomatoes, and melted fresh mozzarella.",
    type: "non-veg",
    popular: true
  },

  // --- PASTAS ---
  {
    id: "pasta-white-sauce",
    name: "White Sauce Pasta",
    category: "Pastas",
    price: 280,
    description: "Penne pasta tossed in a rich, creamy béchamel sauce with garlic, mushrooms, broccoli, and parmesan.",
    type: "veg",
    popular: false
  },
  {
    id: "pasta-arrabbiata",
    name: "Arrabbiata Pasta",
    category: "Pastas",
    price: 270,
    description: "Spicy tomato sauce (pomodoro) pasta seasoned with garlic, dried red chilli peppers, and olive oil.",
    type: "veg",
    popular: false
  },
  {
    id: "pasta-alfredo",
    name: "Alfredo Pasta",
    category: "Pastas",
    price: 300,
    description: "Fettuccine pasta folded in a decadent, buttery cream and parmesan cheese sauce, topped with garlic.",
    type: "veg",
    popular: true
  },
  {
    id: "pasta-pesto",
    name: "Pesto Pasta",
    category: "Pastas",
    price: 310,
    description: "Penne tossed in fragrant home-made Genovese basil-pesto, toasted pine nuts, extra virgin olive oil, and parmesan.",
    type: "veg",
    popular: false
  },
  {
    id: "pasta-spinach-alfredo-spaghetti",
    name: "Spaghetti in Spinach Alfredo Sauce",
    category: "Pastas",
    price: 330,
    description: "Al dente spaghetti noodles drenched in a velvety cream sauce blended with fresh pureed baby spinach.",
    type: "veg",
    popular: true
  },

  // --- BURGERS ---
  {
    id: "burger-veg",
    name: "Veg Burger",
    category: "Burgers",
    price: 160,
    description: "Crispy mixed-vegetable patty served with tomato, onion, crisp lettuce, and dynamic burger sauce in a toasted bun.",
    type: "veg",
    popular: false
  },
  {
    id: "burger-paneer",
    name: "Paneer Burger",
    category: "Burgers",
    price: 190,
    description: "A thick slice of spiced paneer battered and fried, layered with mint mayo, tomato slice, and cheese.",
    type: "veg",
    popular: true
  },
  {
    id: "burger-falafel",
    name: "Falafel Burger",
    category: "Burgers",
    price: 170,
    description: "Golden chickpea falafel patty topped with pickled cucumber, sliced onion, tomato, and fresh tahini sauce.",
    type: "veg",
    popular: false
  },
  {
    id: "burger-crispy-chicken",
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 210,
    description: "Deep-fried buttermilk chicken thigh fillet, spicy coleslaw, gherkins, and cheddar cheese slice.",
    type: "non-veg",
    popular: true
  },
  {
    id: "burger-chicken-tinga",
    name: "Chicken Tinga Burger",
    category: "Burgers",
    price: 220,
    description: "Warm brioche bun loaded with shredded chicken in chipotle sauce, pickled jalapeños, and white cheddar.",
    type: "non-veg",
    popular: false
  },
  {
    id: "burger-double-decker",
    name: "Double Decker Burger",
    category: "Burgers",
    price: 280,
    description: "Double chicken patty, double cheese layers, crispy onion rings, fried egg, and smokey house BBQ sauce.",
    type: "non-veg",
    popular: true
  },

  // --- SANDWICHES ---
  {
    id: "sand-potato-cutlet",
    name: "Potato Cutlet Sandwich",
    category: "Sandwiches",
    price: 140,
    description: "Crispy mashed potato patty seasoned with Indian spices, grilled with butter and mint-coriander chutney.",
    type: "veg",
    popular: false
  },
  {
    id: "sand-spinach-corn",
    name: "Spinach & Corn Sandwich",
    category: "Sandwiches",
    price: 160,
    description: "Creamy white sauce spinach filling with golden corn and melted mozzarella, toasted in multi-grain bread.",
    type: "veg",
    popular: true
  },
  {
    id: "sand-bbq-paneer",
    name: "BBQ Paneer Sandwich",
    category: "Sandwiches",
    price: 180,
    description: "Diced paneer tossed in sweet and tangy BBQ sauce, layered with bell peppers and cheddar on sourdough.",
    type: "veg",
    popular: false
  },
  {
    id: "sand-peri-paneer",
    name: "Peri Peri Paneer Sandwich",
    category: "Sandwiches",
    price: 180,
    description: "Grilled cottage cheese cubes tossed in spicy peri-peri sauce, layered with lettuce and onions in focaccia.",
    type: "veg",
    popular: false
  },
  {
    id: "sand-veg-club",
    name: "Veg Club Sandwich",
    category: "Sandwiches",
    price: 190,
    description: "Double-decker bread stuffed with sliced cucumber, tomato, potato, green chutney, and melting process cheese.",
    type: "veg",
    popular: true
  },
  {
    id: "sand-egg-cheese",
    name: "Egg & Cheese Sandwich",
    category: "Sandwiches",
    price: 160,
    description: "Creamy scrambled eggs or fried egg with double cheddar cheese slices, toasted in buttered white bread.",
    type: "non-veg",
    popular: false
  },
  {
    id: "sand-bbq-chicken",
    name: "BBQ Chicken Sandwich",
    category: "Sandwiches",
    price: 210,
    description: "Pulled roasted chicken breast cooked in BBQ sauce, served with caramelized onions and melting cheese.",
    type: "non-veg",
    popular: true
  },
  {
    id: "sand-peri-chicken",
    name: "Peri Peri Chicken Sandwich",
    category: "Sandwiches",
    price: 210,
    description: "Spicy peri-peri chicken chunks, spicy house mayo, shredded lettuce, and red onion slices on grilled panini.",
    type: "non-veg",
    popular: false
  },
  {
    id: "sand-chicken-tinga",
    name: "Chicken Tinga Sandwich",
    category: "Sandwiches",
    price: 220,
    description: "Mexican style shredded chipotle chicken, avocado slices, and melted jack cheese pressed between sourdough.",
    type: "non-veg",
    popular: false
  },
  {
    id: "sand-nonveg-club",
    name: "Non-Veg Club Sandwich",
    category: "Sandwiches",
    price: 240,
    description: "Triple layered sandwich with grilled chicken breast, bacon slices, fried egg, lettuce, tomato, and garlic mayo.",
    type: "non-veg",
    popular: true
  },

  // --- WINGS ---
  {
    id: "wings-classic",
    name: "Classic Wings",
    category: "Wings",
    price: 240,
    description: "Crispy un-sauced chicken wings tossed in premium sea salt and cracked black pepper.",
    type: "non-veg",
    popular: false
  },
  {
    id: "wings-buffalo",
    name: "Hot Buffalo Wings",
    category: "Wings",
    price: 260,
    description: "Crispy chicken wings coated in a fiery, tangy Louisiana cayenne pepper sauce, served with blue cheese dip.",
    type: "non-veg",
    popular: true
  },
  {
    id: "wings-sweet-chilli",
    name: "Sweet Chilli Wings",
    category: "Wings",
    price: 250,
    description: "Wings glazed in a sweet and sticky Thai sweet chilli sauce, sprinkled with toasted sesame seeds.",
    type: "non-veg",
    popular: false
  },
  {
    id: "wings-chipotle",
    name: "Chipotle Wings",
    category: "Wings",
    price: 260,
    description: "Tossed in a rich, smoky adobo chipotle pepper sauce with a hint of honey sweetness.",
    type: "non-veg",
    popular: false
  },
  {
    id: "wings-peri-peri",
    name: "Peri Peri Wings",
    category: "Wings",
    price: 260,
    description: "Spicy chicken wings marinated in direct African bird's eye chilli glaze, grilled to perfection.",
    type: "non-veg",
    popular: true
  },
  {
    id: "wings-bbq",
    name: "BBQ Wings",
    category: "Wings",
    price: 250,
    description: "Sweet and wood-smoky glazed wings caramelized under a broiler, served with ranch dressing.",
    type: "non-veg",
    popular: false
  },

  // --- RICE & SIZZLERS ---
  {
    id: "rice-chicken-bowl",
    name: "Chicken Rice Bowl",
    category: "Rice & Sizzlers",
    price: 280,
    description: "Cajun grilled chicken breast served over a bed of herb butter rice, loaded with sautéed veggies and mushroom gravy.",
    type: "non-veg",
    popular: false
  },
  {
    id: "rice-paneer-bowl",
    name: "Paneer Rice Bowl",
    category: "Rice & Sizzlers",
    price: 260,
    description: "Cubes of pan-seared spiced cottage cheese served on garlic herb rice with roasted greens and pepper sauce.",
    type: "veg",
    popular: false
  },
  {
    id: "rice-cont-chicken",
    name: "Continental Chicken with Herb Rice",
    category: "Rice & Sizzlers",
    price: 320,
    description: "Grilled chicken breast fillets topped with rosemary cream sauce, served alongside seasoned long-grain herb rice.",
    type: "non-veg",
    popular: true
  },
  {
    id: "rice-cont-paneer",
    name: "Continental Cottage Cheese with Herb Rice",
    category: "Rice & Sizzlers",
    price: 300,
    description: "A slab of grilled cottage cheese smothered in a mushroom demi-glace, paired with butter-herb rice.",
    type: "veg",
    popular: false
  },
  {
    id: "sizzler-chicken",
    name: "Chicken Sizzler",
    category: "Rice & Sizzlers",
    price: 380,
    description: "A sizzling hot iron plate loaded with grilled chicken breast, herb rice, buttered vegetables, fries, and pepper sauce.",
    type: "non-veg",
    popular: true
  },
  {
    id: "sizzler-paneer",
    name: "Paneer Sizzler",
    category: "Rice & Sizzlers",
    price: 360,
    description: "Sizzling paneer steaks served with seasoned herb rice, French fries, steamed broccoli, carrots, and sweet-spicy brown glaze.",
    type: "veg",
    popular: true
  },

  // --- COFFEE & BEVERAGES - HOT COFFEE ---
  {
    id: "bev-espresso",
    name: "Espresso",
    category: "Coffee & Beverages",
    subCategory: "Hot Coffee",
    price: 100,
    description: "A rich, bold shot of extract from our premium dark espresso roast. Perfect kick of pure energy.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-cappuccino",
    name: "Cappuccino",
    category: "Coffee & Beverages",
    subCategory: "Hot Coffee",
    price: 150,
    description: "A balanced espresso blend under a thick cap of warm micro-foamed milk, dusted with cocoa powder.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-latte",
    name: "Latte",
    category: "Coffee & Beverages",
    subCategory: "Hot Coffee",
    price: 160,
    description: "A smooth shot of espresso combined with steamed milk and a thin layer of silky foam on top.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-mocha",
    name: "Cafe Mocha",
    category: "Coffee & Beverages",
    subCategory: "Hot Coffee",
    price: 180,
    description: "An elegant combination of espresso, premium dark chocolate sauce, steamed milk, and light chocolate shavings.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-spanish-latte",
    name: "Spanish Latte",
    category: "Coffee & Beverages",
    subCategory: "Hot Coffee",
    price: 190,
    description: "A creamy hot latte sweetened with a rich blend of condensed milk for a delightful caramel-like taste.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-flat-white",
    name: "Flat White",
    category: "Coffee & Beverages",
    subCategory: "Hot Coffee",
    price: 160,
    description: "Double ristretto shot with micro-foamed milk folded throughout, yielding a velvety coffee texture.",
    type: "veg",
    popular: false
  },

  // --- COFFEE & BEVERAGES - COLD COFFEE ---
  {
    id: "bev-frappe",
    name: "Frappe",
    category: "Coffee & Beverages",
    subCategory: "Cold Coffee",
    price: 170,
    description: "Classic blended iced coffee topped with fluffy whipped cream and a chocolate syrup drizzle.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-oreo-frappe",
    name: "Oreo Frappe",
    category: "Coffee & Beverages",
    subCategory: "Cold Coffee",
    price: 190,
    description: "Espresso, cold milk, and crushed Oreo cookies blended with ice, topped with cream and Oreo crumble.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-nutella-frappe",
    name: "Nutella Frappe",
    category: "Coffee & Beverages",
    subCategory: "Cold Coffee",
    price: 210,
    description: "Rich chocolatey hazelnut Nutella spread blended with espresso, cold milk, and ice, topped with whipped cream.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-brownie-frappe",
    name: "Brownie Frappe",
    category: "Coffee & Beverages",
    subCategory: "Cold Coffee",
    price: 220,
    description: "A chocolate lover's dream: rich espresso blended with cold milk, chocolate chunks, and a fresh fudge brownie.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-vanilla-frappe",
    name: "Vanilla Frappe",
    category: "Coffee & Beverages",
    subCategory: "Cold Coffee",
    price: 180,
    description: "Smooth blend of espresso, natural Madagascar vanilla bean syrup, milk, and ice, whipped up creamy.",
    type: "veg",
    popular: false
  },

  // --- COFFEE & BEVERAGES - MOCKTAILS ---
  {
    id: "bev-virgin-mojito",
    name: "Virgin Mojito",
    category: "Coffee & Beverages",
    subCategory: "Mocktails",
    price: 140,
    description: "Refreshing blend of muddled fresh mint leaves, lime wedges, sugar syrup, topped with sparkling soda and ice.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-mango-mojito",
    name: "Mango Mojito",
    category: "Coffee & Beverages",
    subCategory: "Mocktails",
    price: 160,
    description: "A tropical twist on the classic mojito, featuring ripe sweet mango pulp, lime, mint, and fizzy soda.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-blue-lagoon",
    name: "Blue Lagoon",
    category: "Coffee & Beverages",
    subCategory: "Mocktails",
    price: 150,
    description: "A vibrant blue mocktail blending sweet Blue Curaçao syrup, tart lemon juice, and sparkling sprite.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-cranberry-mojito",
    name: "Cranberry Mojito",
    category: "Coffee & Beverages",
    subCategory: "Mocktails",
    price: 160,
    description: "Tart cranberry juice muddled with fresh mint, lime, and sugar, topped off with crisp club soda.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-passion-cooler",
    name: "Passion Fruit Cooler",
    category: "Coffee & Beverages",
    subCategory: "Mocktails",
    price: 170,
    description: "Sweet and tangy passion fruit pulp shaken with lemon juice, fresh mint, and cold sparkling mineral water.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-lime-soda",
    name: "Fresh Lime Soda",
    category: "Coffee & Beverages",
    subCategory: "Mocktails",
    price: 90,
    description: "Classic thirst quencher made with fresh-squeezed lime juice, carbonated water. Choice of sweet, salted, or mixed.",
    type: "veg",
    popular: false
  },

  // --- COFFEE & BEVERAGES - MILKSHAKES ---
  {
    id: "bev-oreo-shake",
    name: "Oreo Shake",
    category: "Coffee & Beverages",
    subCategory: "Milkshakes",
    price: 170,
    description: "Creamy vanilla ice cream blended with cold milk, crushed Oreo cookies, and topped with chocolate fudge sauce.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-kitkat-shake",
    name: "KitKat Shake",
    category: "Coffee & Beverages",
    subCategory: "Milkshakes",
    price: 180,
    description: "Indulgent milkshake blended with crispy KitKat bars, sweet chocolate sauce, topped with grated chocolate crumbs.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-snicker-shake",
    name: "Snicker Shake",
    category: "Coffee & Beverages",
    subCategory: "Milkshakes",
    price: 190,
    description: "Creamy blend of vanilla ice cream, peanut butter, chopped Snickers bar chunks, and rich caramel syrup.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-chocolate-shake",
    name: "Chocolate Shake",
    category: "Coffee & Beverages",
    subCategory: "Milkshakes",
    price: 150,
    description: "Classic rich, chocolatey milkshake made with dark cocoa blend, vanilla ice cream, and chocolate syrup.",
    type: "veg",
    popular: false
  },
  {
    id: "bev-brownie-blast",
    name: "Brownie Blast Shake",
    category: "Coffee & Beverages",
    subCategory: "Milkshakes",
    price: 210,
    description: "A whole chocolate fudge brownie blended with vanilla ice cream and dark chocolate fudge sauce.",
    type: "veg",
    popular: true
  },

  // --- COFFEE & BEVERAGES - DESSERTS ---
  {
    id: "bev-brownie-icecream",
    name: "Brownie with Ice Cream",
    category: "Coffee & Beverages",
    subCategory: "Desserts",
    price: 180,
    description: "Warm, gooey chocolate fudge brownie topped with a scoop of premium vanilla bean ice cream and chocolate drizzle.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-brownie-sizzler",
    name: "Brownie Sizzler",
    category: "Coffee & Beverages",
    subCategory: "Desserts",
    price: 240,
    description: "A sizzling hot iron pan holding a fresh chocolate brownie, topped with cold vanilla ice cream, sizzled with hot chocolate sauce.",
    type: "veg",
    popular: true
  },
  {
    id: "bev-softy-icecream",
    name: "Softy Ice Cream",
    category: "Coffee & Beverages",
    subCategory: "Desserts",
    price: 80,
    description: "Creamy vanilla, chocolate, or swirl soft-serve ice cream served in a freshly baked waffle cone.",
    type: "veg",
    popular: false
  }
];
