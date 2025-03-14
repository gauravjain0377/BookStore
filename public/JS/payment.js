const paymentForm = document.getElementById("payment-form");
        const paymentSection = document.getElementById("payment-section");
        const confirmationSection = document.getElementById("confirmation-section");
        const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
        const cardDetails = document.querySelector(".card-details");
        const upiDetails = document.querySelector(".upi-details");

        // Handle Payment Method Switching
        paymentMethods.forEach((radio) => {
            radio.addEventListener("change", function () {
                if (this.value === "card") {
                    cardDetails.classList.remove("hidden");
                    upiDetails.classList.add("hidden");
                } else {
                    cardDetails.classList.add("hidden");
                    upiDetails.classList.remove("hidden");
                }
            });
        });

        // Handle Payment Submission
        paymentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh

            console.log("Payment submitted!"); // Debugging check

            // Hide payment section & show confirmation
            paymentSection.style.display = "none";
            confirmationSection.classList.remove("hidden");
        });