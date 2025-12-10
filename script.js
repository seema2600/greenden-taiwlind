// -------------------------------------
// SIDEBAR MENU
// -------------------------------------
const menuBtn = document.querySelector("nav button");
const sideNav = document.getElementById("sideNav");
const closeBtn = document.getElementById("closeBtn");

if (menuBtn && sideNav && closeBtn) {
    menuBtn.addEventListener("click", () => {
        sideNav.classList.remove("-translate-x-full");
    });

    closeBtn.addEventListener("click", () => {
        sideNav.classList.add("-translate-x-full");
    });
}



// -------------------------------------
// PRODUCT SEARCH
// -------------------------------------

const products = [
    "Rose Plant",
    "Lily Plant",
    "Hibiscus Rose",
    "Snake Plant"
];

const searchInput = document.getElementById("searchBar");
const suggestionBox = document.getElementById("suggestions");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();
        suggestionBox.innerHTML = "";

        if (value === "") {
            suggestionBox.classList.add("hidden");
            showAll();
            return;
        }

        const matched = products.filter(p =>
            p.toLowerCase().includes(value)
        );

        matched.forEach(item => {
            const div = document.createElement("div");
            div.className = "p-2 hover:bg-gray-200 cursor-pointer";
            div.textContent = item;

            div.addEventListener("click", () => {
                searchInput.value = item;
                suggestionBox.classList.add("hidden");
                filter(item);
            });

            suggestionBox.appendChild(div);
        });

        suggestionBox.classList.remove("hidden");
    });
}


function filter(keyword) {
    document.querySelectorAll(".product-card").forEach(card => {
        const name = card.querySelector("h2").textContent.toLowerCase();
        card.classList.toggle("hidden", !name.includes(keyword.toLowerCase()));
    });
}

function showAll() {
    document.querySelectorAll(".product-card").forEach(card =>
        card.classList.remove("hidden")
    );
}