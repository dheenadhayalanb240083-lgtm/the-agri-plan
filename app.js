// Run after page loads
document.addEventListener("DOMContentLoaded", function () {
    populateOptions("fishType", Object.keys(fishData));
    populateOptions("treeType", Object.keys(treeData));
    populateOptions("plantType", Object.keys(plantData));
    populateOptions("cropsType", Object.keys(cropdata));

    // Initialize first values
    updateFishInfo();
    updateTreeInfo();
    updatePlantInfo();
    updatecropInfo();
    // Ensure menu button state matches the initially active section
    const initial = document.querySelector('.section.active');
    if (initial) showSection(initial.id);
});

// Show selected section
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");

    // Update active state on menu buttons
    document.querySelectorAll('#menu button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('#menu button').forEach(btn => {
        const onclick = btn.getAttribute('onclick') || '';
        if (onclick.includes(sectionId)) btn.classList.add('active');
    });
}

/* ===================== DATA ===================== */

// Fish Data (15 types)
const fishData = {
    "Tilapia": { feed: "Pellets", period: 6 },
    "Catfish": { feed: "Insects & Pellets", period: 5 },
    "Carp": { feed: "Algae & Grains", period: 7 },
    "Salmon": { feed: "Protein Pellets", period: 12 },
    "Trout": { feed: "Aquatic Insects", period: 9 },
    "Bass": { feed: "Live Bait", period: 10 },
    "Perch": { feed: "Small Crustaceans", period: 8 },
    "Pike": { feed: "Smaller Fish", period: 11 },
    "Eel": { feed: "Worms & Crustaceans", period: 14 },
    "Cod": { feed: "Small Fish", period: 12 },
    "Snapper": { feed: "Shrimp & Squid", period: 13 },
    "Mackerel": { feed: "Plankton & Krill", period: 8 },
    "Grouper": { feed: "Crustaceans", period: 10 },
    "Haddock": { feed: "Small Fish & Worms", period: 9 },
    "Flounder": { feed: "Mollusks & Insects", period: 7 }
};

// Tree Data (15 types)
const treeData = {
    "Mango": { spacing: 10, water: "Drip", soil: "Loamy" },
    "Apple": { spacing: 5, water: "Sprinkler", soil: "Clay" },
    "Orange": { spacing: 6, water: "Flood", soil: "Sandy" },
    "Coconut": { spacing: 8, water: "Rain-fed", soil: "Sandy" },
    "Banana": { spacing: 3, water: "Drip", soil: "Fertile" },
    "Pineapple": { spacing: 1.5, water: "Sprinkler", soil: "Loamy" },
    "Papaya": { spacing: 4, water: "Drip", soil: "Well-drained" },
    "Cherry": { spacing: 5, water: "Drip", soil: "Loamy" },
    "Peach": { spacing: 6, water: "Flood", soil: "Clay" },
    "Lemon": { spacing: 7, water: "Drip", soil: "Sandy" },
    "Guava": { spacing: 4, water: "Sprinkler", soil: "Loamy" },
    "Avocado": { spacing: 8, water: "Flood", soil: "Rich" },
    "Pear": { spacing: 5, water: "Drip", soil: "Well-drained" },
    "Fig": { spacing: 6, water: "Sprinkler", soil: "Sandy" },
    "Pomegranate": { spacing: 4, water: "Drip", soil: "Loamy" }
};

// Plant Data
const plantData = {
    "Tomato": { spacing: 0.5, water: "Drip", soil: "Loamy" },
    "Potato": { spacing: 0.3, water: "Sprinkler", soil: "Sandy" },
    "Carrot": { spacing: 0.2, water: "Drip", soil: "Sandy" },
    "Lettuce": { spacing: 0.25, water: "Sprinkler", soil: "Loamy" },
    "Corn": { spacing: 0.6, water: "Flood", soil: "Rich" },
    "Wheat": { spacing: 0.5, water: "Rain-fed", soil: "Loamy" },
    "Rice": { spacing: 0.4, water: "Flood", soil: "Clay" },
    "Beans": { spacing: 0.3, water: "Drip", soil: "Fertile" },
    "Peas": { spacing: 0.35, water: "Drip", soil: "Sandy" },
    "Spinach": { spacing: 0.2, water: "Sprinkler", soil: "Loamy" }
};

// Crop Data
const cropdata = {
    "Rice": { spacing: 0.2, water: "Flood", soil: "Clayey" },
    "Wheat": { spacing: 0.3, water: "Sprinkler", soil: "Loamy" },
    "Corn": { spacing: 0.4, water: "Drip", soil: "Sandy" },
    "Sugarcane": { spacing: 0.5, water: "Drip", soil: "Well-drained" },
    "Soybean": { spacing: 0.3, water: "Sprinkler", soil: "Loamy" },
    "Groundnut": { spacing: 0.4, water: "Minimal", soil: "Sandy" }
};

/* ===================== FUNCTIONS ===================== */

// Populate dropdowns
function populateOptions(selectId, options) {
    const select = document.getElementById(selectId);
    select.innerHTML = "";
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

// Update Fish Info
function updateFishInfo() {
    const type = document.getElementById("fishType").value;
    document.getElementById("fishFeed").textContent = fishData[type].feed;
    document.getElementById("fishPeriod").textContent = fishData[type].period;
}

// Update Tree Info
function updateTreeInfo() {
    const type = document.getElementById("treeType").value;
    document.getElementById("treeSpacing").textContent = treeData[type].spacing;
    document.getElementById("treeWater").textContent = treeData[type].water;
    document.getElementById("treeSoil").textContent = treeData[type].soil;
}

// Update Plant Info
function updatePlantInfo() {
    const type = document.getElementById("plantType").value;
    document.getElementById("plantSpacing").textContent = plantData[type].spacing;
    document.getElementById("plantWater").textContent = plantData[type].water;
    document.getElementById("plantSoil").textContent = plantData[type].soil;
}

// Update Crop Info
function updatecropInfo() {
    const type = document.getElementById("cropsType").value;
    document.getElementById("cropSpacing").textContent = cropdata[type].spacing;
    document.getElementById("cropWater").textContent = cropdata[type].water;
    document.getElementById("cropSoil").textContent = cropdata[type].soil;
}

// Pond Calculation
function calculatePond() {
    const length = parseFloat(document.getElementById("pondLength").value) || 0;
    const width = parseFloat(document.getElementById("pondWidth").value) || 0;

    const area = length * width;
    const fishCount = Math.floor(area * 5); // 5 fish per sq.m

    document.getElementById("pondArea").textContent = area.toFixed(2);
    document.getElementById("fishCount").textContent = fishCount;
}

// Tree Calculation
function calculateTree() {
    const length = parseFloat(document.getElementById("treeLength").value) || 0;
    const width = parseFloat(document.getElementById("treeWidth").value) || 0;
    const spacing = parseFloat(document.getElementById("treeSpacing").textContent) || 1;

    const area = length * width;
    const count = Math.floor(area / (spacing * spacing));

    document.getElementById("treeArea").textContent = area.toFixed(2);
    document.getElementById("treeCount").textContent = count;
}

// Plant Calculation
function calculatePlant() {
    const length = parseFloat(document.getElementById("plantLength").value) || 0;
    const width = parseFloat(document.getElementById("plantWidth").value) || 0;
    const spacing = parseFloat(document.getElementById("plantSpacing").textContent) || 1;

    const area = length * width;
    const count = Math.floor(area / (spacing * spacing));

    document.getElementById("plantArea").textContent = area.toFixed(2);
    document.getElementById("plantCount").textContent = count;
}

// Crop Calculation
function calculatecrop() {
    const length = parseFloat(document.getElementById("cropLength").value) || 0;
    const width = parseFloat(document.getElementById("cropWidth").value) || 0;
    const spacing = parseFloat(document.getElementById("cropSpacing").textContent) || 1;

    const area = length * width;
    const count = Math.floor(area / (spacing * spacing));

    document.getElementById("cropArea").textContent = area.toFixed(2);
    document.getElementById("cropCount").textContent = count;
}
