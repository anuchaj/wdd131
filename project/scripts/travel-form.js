// Select form elements

const travelForm =
    document.querySelector("#travelForm");

const formMessage =
    document.querySelector("#formMessage");


// Listen for form submission

travelForm.addEventListener("submit", (event) => {

    // Prevent page refresh
    event.preventDefault();

    // Get user input values

    const fullName =
        document.querySelector("#fullname").value.trim();

    const destination =
        document.querySelector("#destination").value;

    // Conditional branching

    if (fullName === "" || destination === "") {

        formMessage.innerHTML = `
            <p class="error">
                Please complete all required fields.
            </p>
        `;

        return;
    }

    // Success message using template literals

    formMessage.innerHTML = `
        <p class="success">
            Thank you, ${fullName}!
            Your inquiry about ${destination}
            has been received.
        </p>
    `;

    // Reset form

    travelForm.reset();
});