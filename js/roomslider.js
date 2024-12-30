// JavaScript to handle the section switching logic
    let activeSection = "Rooms";

    const roomsButton = document.getElementById("roomsButton");
    const suitesButton = document.getElementById("suitesButton");
    const roomsSection = document.getElementById("roomsSection");
    const suitesSection = document.getElementById("suitesSection");

    // Function to show Rooms section
    const showRooms = () => {
      activeSection = "Rooms";
      updateSections();
    };

    // Function to show Suites section
    const showSuites = () => {
      activeSection = "Suites";
      updateSections();
    };

    // Function to update the visible section based on activeSection
    const updateSections = () => {
      if (activeSection === "Rooms") {
        roomsSection.style.display = "block";
        suitesSection.style.display = "none";
        roomsButton.classList.add("border-b-2", "border-[#be9343]");
        suitesButton.classList.remove("border-b-2", "border-[#be9343]");
      } else {
        roomsSection.style.display = "none";
        suitesSection.style.display = "block";
        suitesButton.classList.add("border-b-2", "border-[#be9343]");
        roomsButton.classList.remove("border-b-2", "border-[#be9343]");
      }
    };

    // Event listeners for buttons
    roomsButton.addEventListener("click", showRooms);
    suitesButton.addEventListener("click", showSuites);

    // Initialize section
    updateSections();