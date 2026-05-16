const data = [
  {
    title: "Alfrado pasta",
    desc: "Creamy fettuccine pasta served with a rich garlic parmesan white sauce.",
    img: "./img/1.jfif",
    rating: "4.9",
    reviews: "412",
    prep: "15 min",
    cook: "20 min",
    servings: "2 people",
    ingredients: [
      "Fettuccine pasta",
      "Heavy cooking cream",
      "Fresh parmesan cheese",
      "Garlic and butter",
      "Fresh parsley for garnish",
    ],
  },
  {
    title: "pizza",
    desc: "Classic thin-crust Italian pizza topped with fresh mozzarella and basil.",
    img: "./img/2.jfif",
    rating: "4.7",
    reviews: "215",
    prep: "40 min",
    cook: "10 min",
    servings: "3 people",
    ingredients: [
      "Pizza dough base",
      "Tomato basil sauce",
      "Fresh mozzarella cheese",
      "Olive oil drizzle",
      "Dried oregano",
    ],
  },
  {
    title: "creamy shrimp",
    desc: "Succulent shrimp cooked in a buttery cream sauce with a touch of lemon.",
    img: "./img/3.jfif",
    rating: "4.8",
    reviews: "180",
    prep: "15 min",
    cook: "15 min",
    servings: "1 person",
    ingredients: [
      "Fresh jumbo shrimp",
      "Minced garlic",
      "Cooking cream",
      "Butter and lemon juice",
      "Chives or parsley",
    ],
  },
  {
    title: "chicken & fries",
    desc: "Crispy breaded chicken strips served with golden seasoned french fries.",
    img: "./img/4.jfif",
    rating: "4.9",
    reviews: "560",
    prep: "20 min",
    cook: "15 min",
    servings: "4 people",
    ingredients: [
      "Chicken breast fillets",
      "Potato fries",
      "Breadcrumbs and flour",
      "Spices (salt, paprika)",
      "Frying oil",
    ],
  },
  {
    title: "lasagna",
    desc: "Layers of pasta sheets with hearty bolognese sauce and creamy bechamel.",
    img: "./img/5.jfif",
    rating: "4.5",
    reviews: "95",
    prep: "30 min",
    cook: "45 min",
    servings: "4 people",
    ingredients: [
      "Lasagna pasta sheets",
      "Ground beef bolognese",
      "Bechamel sauce",
      "Mozzarella cheese",
      "Italian herbs",
    ],
  },
  {
    title: "red sauce pasta",
    desc: "A simple and delicious pasta tossed in a tangy slow-cooked tomato sauce.",
    img: "./img/6.jfif",
    rating: "4.8",
    reviews: "310",
    prep: "10 min",
    cook: "15 min",
    servings: "2 people",
    ingredients: [
      "Penne or Spaghetti",
      "Tomato puree",
      "Onion and garlic",
      "Olive oil",
      "Fresh basil leaves",
    ],
  },
  {
    title: "Burgure",
    desc: "A juicy grilled beef burger with melted cheese and fresh garden toppings.",
    img: "./img/7.jfif",
    rating: "4.7",
    reviews: "140",
    prep: "15 min",
    cook: "12 min",
    servings: "2 people",
    ingredients: [
      "Beef burger patty",
      "Soft burger buns",
      "Cheddar cheese slices",
      "Lettuce and tomato",
      "Special burger sauce",
    ],
  },
  {
    title: "dumplings",
    desc: "Traditional steamed dumplings filled with seasoned savory meat and ginger.",
    img: "./img/8.jfif",
    rating: "4.6",
    reviews: "210",
    prep: "40 min",
    cook: "10 min",
    servings: "2 people",
    ingredients: [
      "Dumpling wrappers",
      "Minced meat filling",
      "Ginger and soy sauce",
      "Cabbage strips",
      "Sesame oil",
    ],
  },
  {
    title: "Mediterranean Quinoa Bowl",
    desc: "A healthy mix of quinoa, fresh olives, and feta cheese with lemon dressing.",
    img: "./img/9.jfif",
    rating: "4.7",
    reviews: "275",
    prep: "20 min",
    cook: "15 min",
    servings: "3 people",
    ingredients: [
      "Cooked Quinoa",
      "Kalamata olives",
      "Cucumber and tomato",
      "Feta cheese",
      "Lemon vinaigrette",
    ],
  },
  {
    title: "caesar salad",
    desc: "Fresh romaine lettuce with crunchy croutons and authentic Caesar dressing.",
    img: "./img/10.jfif",
    rating: "4.8",
    reviews: "190",
    prep: "15 min",
    cook: "0 min",
    servings: "2 people",
    ingredients: [
      "Romaine lettuce",
      "Caesar dressing",
      "Garlic croutons",
      "Parmesan cheese",
      "Lemon wedges",
    ],
  },
];

function displayRandomData() {
  const randomIndex = Math.floor(Math.random() * data.length);
  const meal = data[randomIndex];
  const container = document.getElementById("recipeContainer");

  container.innerHTML = `
    <div class="row g-0 recipe-card border position-relative shadow-sm bg-white">
        <div class="col-md-5 img-side position-relative">
            <div class="rating-badge shadow-sm">
                <i class="fa-solid fa-star text-warning"></i> ${meal.rating} 
                <span class="text-muted fw-normal ms-1">(${meal.reviews} reviews)</span>
            </div>
            <img src="${meal.img}" class="recipe-img" alt="${meal.title}">
            
            <div class="info-overlay text-center">
                <div><i class="fa-solid fa-clock text-warning"></i><br><small>Prep</small><br><b>${meal.prep}</b></div>
                <div><i class="fa-solid fa-fire text-danger"></i><br><small>Cook</small><br><b>${meal.cook}</b></div>
                <div><i class="fa-solid fa-users text-primary"></i><br><small>Serves</small><br><b>${meal.servings}</b></div>
            </div>
        </div>

        <div class="col-md-7 p-4 p-lg-5 position-relative">
            <div class="d-flex gap-2 position-absolute top-0 end-0 m-4">
                <button class="btn-action shadow-sm"><i class="fa-solid fa-bookmark"></i></button>
                <button class="btn-action shadow-sm"><i class="fa-solid fa-share-nodes"></i></button>
            </div>

            <div class="mb-2">
                <span class="badge rounded-pill bg-success-subtle text-success px-3 py-2">Easy to Cook</span>
                <span class="badge rounded-pill bg-primary-subtle text-primary px-3 py-2">Popular</span>
            </div>

            <h2 class="fw-bold mb-1 text-capitalize">${meal.title}</h2>
            <p class="text-muted mb-4">${meal.desc}</p>

            <ul class="nav nav-tabs border-0 gap-4 mb-4 custom-tabs">
                <li class="nav-item">
                    <a class="nav-link active p-0 pb-2" href="#"><i class="fa-solid fa-list-check me-2"></i>Ingredients</a>
                </li>
            </ul>

            <div class="ingredients-box mb-4">
                <ul class="list-unstyled mb-0">
                    ${meal.ingredients
                      .map(
                        (ing, i) => `
                        <li class="mb-3 d-flex align-items-center">
                            <span class="step-num">${i + 1}</span> ${ing}
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>

            <button class="btn btn-orange w-100 w-md-auto" onclick="displayRandomMeal()">
                <i class="fa-solid fa-rotate me-2"></i> Try Another Recipe
            </button>
        </div>
    </div>
  `;
}
window.onload = displayRandomData;