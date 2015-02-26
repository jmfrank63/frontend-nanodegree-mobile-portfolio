/*
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.

There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?


Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/

Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/

// As you may have realized, this website randomly generates pizzas.
// Here are arrays of all possible pizza ingredients.
var pizzaIngredients = {};
pizzaIngredients.meats = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
pizzaIngredients.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
pizzaIngredients.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Applewood Cheese",
  "Asiago Cheese",
  "Bleu Cheese",
  "Boursin Cheese",
  "Brie Cheese",
  "Cheddar Cheese",
  "Chevre Cheese",
  "Havarti Cheese",
  "Jack Cheese",
  "Pepper Jack Cheese",
  "Gruyere Cheese",
  "Limberger Cheese",
  "Manchego Cheese",
  "Marscapone Cheese",
  "Pecorino Cheese",
  "Provolone Cheese",
  "Queso Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaIngredients.crusts = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];

// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
//
// Not needed anymore since all words have been set to upper case in source
//
// String.prototype.capitalize = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

// The adjective list
// A list of lists is used instead of a switch case
var adjectivesList = [
      ["Dark", "Morbid", "Scary", "Spooky", "Gothic", "Deviant", "Creepy", "Sadistic", "Black", "Dangerous", "Dejected", "Haunted",
      "Morose", "Tragic", "Shattered", "Broken", "Sad", "Melancholy", "Somber", "Dark", "Gloomy", "Homicidal", "Murderous", "Shady", "Misty",
      "Dusky", "Ghostly", "Shadowy", "Demented", "Cursed", "Insane", "Possessed", "Grotesque", "Obsessed"],
      ["Blue", "Green", "Purple", "Grey", "Scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "Pink", "Black", "Red",
      "Maroon", "Silver", "Golden", "Yellow", "Orange", "Mustard", "Plum", "Violet", "Cerulean", "Brown", "Lavender", "Violet", "Magenta",
      "Chestnut", "Rosy", "Copper", "Crimson", "Teal", "Indigo", "Navy", "Azure", "Periwinkle", "Brassy", "Verdigris", "Veridian", "Tan",
      "Raspberry", "Beige", "Sandy", "ElectricBlue", "White", "Champagne", "Coral", "Cyan"],
      ["Whimsical", "Silly", "Drunken", "Goofy", "Funny", "Weird", "Strange", "Odd", "Playful", "Clever", "Boastful", "Breakdancing",
      "Hilarious", "Conceited", "Happy", "Comical", "Curious", "Peculiar", "Quaint", "Quirky", "Fancy", "Wayward", "Fickle", "Yawning", "Sleepy",
      "Cockeyed", "Dizzy", "Dancing", "Absurd", "Laughing", "Hairy", "Smiling", "Perplexed", "Baffled", "Cockamamie", "Vulgar", "Hoodwinked",
      "Brainwashed"],
      ["Sapphire", "Opal", "Silver", "Gold", "Platinum", "Ruby", "Emerald", "Topaz", "Diamond", "Amethyst", "Turquoise",
      "Starlit", "Moonlit", "Bronze", "Metal", "Jade", "Amber", "Garnet", "Obsidian", "Onyx", "Pearl", "Copper", "Sunlit", "Brass", "Brassy",
      "Metallic"],
      ["Untuned", "Loud", "Soft", "Shrieking", "Melodious", "Musical", "Operatic", "Symphonic", "Dancing", "Lyrical", "Harmonic", "Orchestral",
      "Noisy", "Dissonant", "Rhythmic", "Hissing", "Singing", "Crooning", "Shouting", "Screaming", "Wailing", "Crying", "Howling", "Yelling",
      "Hollering", "Caterwauling", "Bawling", "Bellowing", "Roaring", "Squealing", "Beeping", "Knocking", "Tapping", "Rapping", "Humming",
      "Scatting", "Whispered", "Whispering", "Rasping", "Buzzing", "Whirring", "Whistling", "Whistled"],
      ["Nuclear", "Apocalyptic", "Desolate", "Atomic", "Zombie", "Collapsed", "Grim", "Fallen", "Collapsed", "Cannibalistic", "Radioactive",
      "Toxic", "Poisonous", "Venomous", "Disastrous", "Grimy", "Dirty", "Undead", "Bloodshot", "Rusty", "Glowing", "Decaying", "Rotten",
      "Deadly", "Plagued", "Decimated", "Rotting", "Putrid", "Decayed", "Deserted", "Acidic"],
      ["Stupid", "Idiotic", "Fat", "Ugly", "Hideous", "Grotesque", "Dull", "Dumb", "Lazy", "Sluggish", "Brainless", "Slow", "Gullible",
      "Obtuse", "Dense", "Dim", "Dazed", "Ridiculous", "Witless", "Daft", "Crazy", "Vapid", "Inane", "Mundane", "Hollow", "Vacuous",
      "Boring", "Insipid", "Tedious", "Monotonous", "Weird", "Bizarre", "Backward", "Moronic", "Ignorant", "Scatterbrained", "Forgetful",
      "Careless", "Lethargic", "Insolent", "Indolent", "Loitering", "Gross", "Disgusting", "Bland", "Horrid", "Unseemly", "Revolting",
      "Homely", "Deformed", "Disfigured", "Offensive", "Cowardly", "Weak", "Villainous", "Fearful", "Monstrous", "Unattractive", "Unpleasant",
      "Nasty", "Beastly", "Snide", "Horrible", "Syncophantic", "Unhelpful", "Bootlicking"],
      ["Beautiful", "Intelligent", "Smart", "Genius", "Ingenious", "Gorgeous", "Pretty", "Witty", "Angelic", "Handsome", "Graceful", "Talented",
      "Exquisite", "Enchanting", "Fascinating", "Interesting", "Divine", "Alluring", "Ravishing", "Wonderful", "Magnificient", "Marvelous",
      "Dazzling", "Cute", "Charming", "Attractive", "Nifty", "Delightful", "Superior", "Amiable", "Gentle", "Heroic", "Courageous", "Valiant",
      "Brave", "Noble", "Daring", "Fearless", "Gallant", "Adventurous", "Cool", "Enthusiastic", "Fierce", "Awesome", "Radical", "Tubular",
      "Fearsome", "Majestic", "Grand", "Stunning"],
      ["Scientific", "Technical", "Digital", "Programming", "Calculating", "Formulating", "Cyberpunk", "Mechanical", "Technological",
      "Innovative", "Brainy", "Chemical", "Quantum", "Astro", "Space", "Theoretical", "Atomic", "Electronic", "Gaseous", "Investigative",
      "Solar", "Extinct", "Galactic"]
      ];

// the nouns list of lists
// a list of list is used instead of a switch case
var nounsList = [
      ["Flamingo", "Hedgehog", "Owl", "Elephant", "Pussycat", "Alligator", "Dachsund", "Poodle", "Beagle", "Crocodile", "Kangaroo", "Wallaby",
      "Woodpecker", "Eagle", "Falcon", "Canary", "Parrot", "Parakeet", "Hamster", "Gerbil", "Squirrel", "Rat", "Dove", "Toucan", "Raccoon",
      "Vulture", "Peacock", "Goldfish", "Rook", "Koala", "Skunk", "Goat", "Rooster", "Fox", "Porcupine", "Llama", "Grasshopper", "Gorilla",
      "Monkey", "Seahorse", "Wombat", "Wolf", "Giraffe", "Badger", "Lion", "Mouse", "Beetle", "Cricket", "Nightingale", "Hawk", "Trout", "Squid",
      "Octopus", "Sloth", "Snail", "Locust", "Baboon", "Lemur", "Meerkat", "Oyster", "Frog", "Toad", "Jellyfish", "Butterfly", "Caterpillar",
      "Tiger", "Hyena", "Zebra", "Snail", "Pig", "Weasel", "Donkey", "Penguin", "Crane", "Buzzard", "Vulture", "Rhino", "Hippopotamus", "Dolphin",
      "Sparrow", "Beaver", "Moose", "Minnow", "Otter", "Bat", "Mongoose", "Swan", "Firefly", "Platypus"],
      ["Doctor", "Lawyer", "Ninja", "Writer", "Samurai", "Surgeon", "Clerk", "Artist", "Actor", "Engineer", "Mechanic", "Comedian", "Fireman",
      "Nurse", "RockStar", "Musician", "Carpenter", "Plumber", "Cashier", "Electrician", "Waiter", "President", "Governor", "Senator",
      "Scientist", "Programmer", "Singer", "Dancer", "Director", "Mayor", "Merchant", "Detective", "Investigator", "Navigator", "Pilot",
      "Priest", "Cowboy", "Stagehand", "Soldier", "Ambassador", "Pirate", "Miner", "Police"],
      ["Centaur", "Wizard", "Gnome", "Orc", "Troll", "Sword", "Fairy", "Pegasus", "Halfling", "Elf", "Changeling", "Ghost", "Knight", "Squire",
      "Magician", "Witch", "Warlock", "Unicorn", "Dragon", "Wyvern", "Princess", "Prince", "King", "Queen", "Jester", "Tower", "Castle", "Kraken",
      "Seamonster", "Mermaid", "Psychic", "Seer", "Oracle"],
      ["Violin", "Flute", "Bagpipe", "Guitar", "Symphony", "Orchestra", "Piano", "Trombone", "Tuba", "Opera", "Drums", "Harpsichord", "Harp",
      "Harmonica", "Accordion", "Tenor", "Soprano", "Baritone", "Cello", "Viola", "Piccolo", "Ukelele", "Woodwind", "Saxophone", "Bugle",
      "Trumpet", "Sousaphone", "Cornet", "Stradivarius", "Marimbas", "Bells", "Timpani", "Bongos", "Clarinet", "Recorder", "Oboe", "Conductor",
      "Singer"],
      ["Murderer", "Chainsaw", "Knife", "Sword", "Murder", "Devil", "Killer", "Psycho", "Ghost", "Monster", "Godzilla", "Werewolf", "Vampire",
      "Demon", "Graveyard", "Zombie", "Mummy", "Curse", "Death", "Grave", "Tomb", "Beast", "Nightmare", "Frankenstein", "Specter", "Poltergeist",
      "Wraith", "Corpse", "Scream", "Massacre", "Cannibal", "Skull", "Bones", "Undertaker", "Zombie", "Creature", "Mask", "Psychopath", "Fiend",
      "Satanist", "Moon", "FullMoon"],
      ["Slime", "Bug", "Roach", "Fluid", "Pus", "Booger", "Spit", "Boil", "Blister", "Orifice", "Secretion", "Mucus", "Phlegm", "Centipede",
      "Beetle", "Fart", "Snot", "Crevice", "Flatulence", "Juice", "Mold", "Mildew", "Germs", "Discharge", "Toilet", "Udder", "Odor", "Substance",
      "Fluid", "Moisture", "Garbage", "Trash", "Bug"],
      ["Mirror", "Knife", "Fork", "Spork", "Spoon", "Tupperware", "Minivan", "Suburb", "Lamp", "Desk", "Stereo", "Television", "TV", "Book",
      "Car", "Truck", "Soda", "Door", "Video", "Game", "Computer", "Calender", "Tree", "Plant", "Flower", "Chimney", "Attic", "Kitchen", "Garden",
      "School", "Wallet", "Bottle"],
      ["Earrings", "Ring", "Necklace", "Pendant", "Choker", "Brooch", "Bracelet", "Cameo", "Charm", "Bauble", "Trinket", "Jewelry", "Anklet",
      "Bangle", "Locket", "Finery", "Crown", "Tiara", "BlingBling", "Chain", "Rosary", "Jewel", "Gemstone", "Beads", "Armband", "Pin", "Costume",
      "Ornament", "Treasure"],
      ["Swamp", "Graveyard", "Cemetery", "Park", "Building", "House", "River", "Ocean", "Sea", "Field", "Forest", "Woods", "Neighborhood", "City",
      "Town", "Suburb", "Country", "Meadow", "Cliffs", "Lake", "Stream", "Creek", "School", "College", "University", "Library", "Bakery", "Shop",
      "Store", "Theater", "Garden", "Canyon", "Highway", "Restaurant", "Cafe", "Diner", "Street", "Road", "Freeway", "Alley"],
      ["Robot", "Alien", "Raygun", "Spaceship", "UFO", "Rocket", "Phaser", "Astronaut", "Spaceman", "Planet", "Star", "Galaxy", "Computer",
      "Future", "TimeMachine", "WormHole", "TimeTraveler", "Scientist", "Invention", "Martian", "Pluto", "Jupiter", "Saturn", "Mars", "Quasar",
      "BlackHole", "WarpDrive", "Laser", "Orbit", "Gears", "Molecule", "Electron", "Neutrino", "Proton", "Experiment", "Photon", "Apparatus",
      "Universe", "Gravity", "DarkMatter", "Constellation", "Circuit", "Asteroid"]
      ];


// Lookups for sizes and names of them
var sizeSwitcher = { 1: 0.25, 2: 0.3333, 3: 0.5};
var pizzaSizes = {1: "Small", 2: "Medium", 3: "Large"};

// Generate sine and cosine lookup table for values 0 to 4
var sinTable = [];
var cosTable = [];
var spread = screen.width / 3.5;
for (var idx = 0; idx < 4; idx++) {
  sinTable[idx] = spread * Math.sin(idx);
  cosTable[idx] = spread * Math.cos(idx);
}


// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
function generator(adj, noun) {
  var randomAdjective = parseInt(Math.random() * adj.length, 10);
  var randomNoun = parseInt(Math.random() * noun.length, 10);
  // removed call to capitalize()
  // var name = "The " + adj[randomAdjective].capitalize() + " " + noun[randomNoun].capitalize();
  var name = "The " + adj[randomAdjective] + " " + noun[randomNoun];
  return name;
}

// Chooses random adjective and random noun
function randomName() {
  var randomNumberAdj = parseInt(Math.random() * adjectivesList.length, 10);
  var randomNumberNoun = parseInt(Math.random() * nounsList.length, 10);
  return generator(adjectivesList[randomNumberAdj], nounsList[randomNumberNoun]);
}

// These functions return a string of a random ingredient from each respective category of ingredients.
var selectRandomMeat = function() {
  var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
  return randomMeat;
};

var selectRandomNonMeat = function() {
  var randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
  return randomNonMeat;
};

var selectRandomCheese = function() {
  var randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
  return randomCheese;
};

var selectRandomSauce = function() {
  var randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
  return randomSauce;
};

var selectRandomCrust = function() {
  var randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];
  return randomCrust;
};

var ingredientItemizer = function(string) {
  return "<li>" + string + "</li>";
};

// Returns a string with random pizza ingredients nested inside <li> tags
var makeRandomPizza = function() {
  var pizza = "";

  var numberOfMeats = Math.floor((Math.random() * 4));
  var numberOfNonMeats = Math.floor((Math.random() * 3));
  var numberOfCheeses = Math.floor((Math.random() * 2));

  for (var i = 0; i < numberOfMeats; i++) {
    pizza = pizza + ingredientItemizer(selectRandomMeat());
  }

  for (i = 0; i < numberOfNonMeats; i++) {
    pizza = pizza + ingredientItemizer(selectRandomNonMeat());
  }

  for (i = 0; i < numberOfCheeses; i++) {
    pizza = pizza + ingredientItemizer(selectRandomCheese());
  }

  pizza = pizza + ingredientItemizer(selectRandomSauce());
  pizza = pizza + ingredientItemizer(selectRandomCrust());

  return pizza;
};

// returns a DOM element for each pizza
var pizzaElementGenerator = function(i) {
  var pizzaContainer,             // contains pizza title, image and list of ingredients
      pizzaImageContainer,        // contains the pizza image
      pizzaImage,                 // the pizza image itself
      pizzaDescriptionContainer,  // contains the pizza title and list of ingredients
      pizzaName,                  // the pizza name itself
      ul;                         // the list of ingredients

  pizzaContainer = document.createElement("div");
  pizzaImageContainer = document.createElement("div");
  pizzaImage = document.createElement("img");
  pizzaDescriptionContainer = document.createElement("div");

  pizzaContainer.classList.add("randomPizzaContainer");
  pizzaContainer.style.width = "33.33%";
  pizzaContainer.style.height = "325px";
  pizzaContainer.id = "pizza" + i;  // gives each pizza element a unique id
  pizzaImageContainer.classList.add("col-md-6");

  pizzaImage.src = "images/pizza-large.png";
  pizzaImage.classList.add("img-responsive");
  pizzaImageContainer.appendChild(pizzaImage);
  pizzaContainer.appendChild(pizzaImageContainer);


  pizzaDescriptionContainer.classList.add("col-md-6");

  pizzaName = document.createElement("h4");
  pizzaName.innerHTML = randomName();
  pizzaDescriptionContainer.appendChild(pizzaName);

  ul = document.createElement("ul");
  ul.innerHTML = makeRandomPizza();
  pizzaDescriptionContainer.appendChild(ul);
  pizzaContainer.appendChild(pizzaDescriptionContainer);

  return pizzaContainer;
};

// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function(size) {
  window.performance.mark("mark_start_resize");   // User Timing API function

  // Changes the value for the size of the pizza above the slider
  document.querySelector("#pizzaSize").innerHTML = pizzaSizes[size];

  // determine window width
  var windowwidth = document.querySelector("#randomPizzas").offsetWidth;

  // Iterates through pizza elements on the page and changes their widths
  var pizzaList = document.querySelectorAll(".randomPizzaContainer");
  // Calculate dx, the size difference to change a pizza element from one size to another.
  var oldwidth = pizzaList[0].offsetWidth;
  var newsize = sizeSwitcher[size];
  var dx = newsize * windowwidth - oldwidth;
  var newwidth = (pizzaList[0].offsetWidth + dx ) + 'px';

  for (var i = 0; i < pizzaList.length; i++) {
    pizzaList[i].style.width = newwidth;
  }

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[0].duration + "ms");
};

window.performance.mark("mark_start_generating"); // collect timing data

// This for-loop actually creates and appends all of the pizzas when the page loads
for (var k = 2; k < 100; k++) {
  var pizzasDiv = document.getElementById("randomPizzas");
  pizzasDiv.appendChild(pizzaElementGenerator(k));
}

// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) {   // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position
// Inside the loop we calculate the phase using a sine function of a sum
// The sum is a constant pixel amount + an index.
// Therefore we use the addition theorem
// sin(a + b) = sin(a) * cos(b) + cos(a) * sin(b)
// a is a constant and b is the index. Since we
// reduced the number of pizzas to 4 our sin(b) and cos(b)
// values can be calculated using a lookup table.
// for small amounts of values this is the fastest way
// thus we avoid the costly sine function and replace it
// with an addition and two multiplications
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");

  // var items = document.querySelectorAll('.mover');
  // getElementsByClassName is way faster than querySelectorAll
  var items = document.getElementsByClassName('mover');
  var relScrollTop = document.body.scrollTop / 1250;
  var sinTopScroll = Math.sin(relScrollTop);
  var cosTopScroll = Math.cos(relScrollTop);
  for (var i = 0; i < items.length; i++) {
    // var phase = Math.sin((document.body.scrollTop / 1250) + (i % 4));
    // we replace the sine by the additiontheorem and have the index values
    // surved by a lookup table
    // since the memory impact is small (only four values) this is way faster
    var phase = sinTopScroll * cosTable[i % 4] + cosTopScroll * sinTable[i % 4] - 50;
    items[i].style.transform = "translateX(" + phase + "px)";
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}

// runs updatePositions on scroll
window.addEventListener("scroll", updatePositions);

// Generates the sliding pizzas when the page loads.
// We only need four columns instead of six
// we also only need four rows thus we only need
// to calculate 16 pizzas
// further replacing querySelector by getElementById
// speeds things up
document.addEventListener("DOMContentLoaded", function() {
  var cols = 4;
  var s = 256;
  // we only need 16 pizzas instead of 200 as there
  // are only 4 rows with 4 pizzas visible
  // invisible pizzas do not have to be calculated
  for (var i = 0; i < 16; i++) {
    var elem = document.createElement("img");
    elem.className = "mover";
    elem.src = "images/pizza-scroll.png";
    elem.style.height = "100px";
    elem.style.width = "77px";
    elem.style.top = (Math.floor(i / cols) * s) + "px";
    //elem.basicLeft = (i % cols) * s;
    // the user doesn't mind if pizzas are swinging around
    // four centers or just one: it is only in the background
    // document.querySelector("#movingPizzas1").appendChild(elem);
    // getElementById is way faster
    document.getElementById("movingPizzas1").appendChild(elem);
  }
  updatePositions();
});
