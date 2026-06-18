const destinations = [

    {
        name: "Boracay",
        category: "Beach",
        region: "Visayas",
        image: "images/boracay.webp",
        description:
        "Boracay is famous for White Beach and crystal-clear waters."
    },

    {
        name: "Palawan",
        category: "Nature",
        region: "Mimaropa",
        image: "images/palawan.webp",
        description:
        "Palawan offers lagoons, limestone cliffs, and marine biodiversity."
    },

    {
        name: "Siargao",
        category: "Beach",
        region: "Mindanao",
        image: "images/siargao.webp",
        description:
        "Siargao is the surfing capital of the Philippines."
    },

    {
        name: "Banaue Rice Terraces",
        category: "Nature",
        region: "Luzon",
        image: "images/banaue.webp",
        description:
        "Ancient rice terraces carved into the mountains."
    },

    {
        name: "Vigan",
        category: "Historic",
        region: "Luzon",
        image: "images/vigan.webp",
        description:
        "A UNESCO World Heritage city known for Spanish colonial architecture."
    }

];

const cardsContainer = document.querySelector("#destinationCards");

const favoritesContainer = document.querySelector("#favorites");

const filterButtons = document.querySelectorAll("[data-category]");

function displayDestinations(destinationList) {

    cardsContainer.innerHTML = "";

    destinationList.forEach(destination => {

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `
        <img
        src="${destination.image}"
        alt="${destination.name}"
        loading="lazy">

        <h3>${destination.name}</h3>

        <p>${destination.description}</p>

        <p>
        <strong>Region:</strong>
        ${destination.region}
        </p>

        <button
        class="favorite-btn"
        data-name="${destination.name}">
        Add to Favorites
        </button>
        `;

        cardsContainer.appendChild(card);

    });

    addFavoriteListeners();

}

function addFavoriteListeners() {

    const favoriteButtons = document.querySelectorAll(".favorite-btn");

    favoriteButtons.forEach(button => {

        button.addEventListener("click", () => {

            const destinationName =
            button.dataset.name;

            saveFavorite(destinationName);

        });

    });

}

function saveFavorite(destinationName) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(destinationName)) {

        favorites.push(destinationName);

        localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
        );

        displayFavorites();

    }

}

function displayFavorites() {

    const favorites =
    JSON.parse(
    localStorage.getItem("favorites")
    ) || [];

    if (favorites.length === 0) {

    favoritesContainer.innerHTML = `
    <p>No favorites selected yet.</p>
    `;

    return;

    }

    favoritesContainer.innerHTML = `
    <ul>
    ${favorites.map(favorite =>
    `<li>${favorite}</li>`
    ).join("")}
    </ul>
    `;

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

    const category =
    button.dataset.category;

    if (category === "All") {

    displayDestinations(destinations);

    } else {

    const filteredDestinations =
    destinations.filter(destination =>
    destination.category === category
    );

    displayDestinations(filteredDestinations);

    }

    });

});

displayDestinations(destinations);

displayFavorites();