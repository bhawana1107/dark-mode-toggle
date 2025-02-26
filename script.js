const toggleButton = document.getElementById("darkModeToggle");

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    }

    // Event Listener to toggle dark mode
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

            // Save preference in localStorage
                if (document.body.classList.contains("dark-mode")) {
                        localStorage.setItem("darkMode", "enabled");
                            } else {
                                    localStorage.setItem("darkMode", "disabled");
                                        }
                                        });