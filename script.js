document.getElementById("custom-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form input values
    const email = event.target.email.value;
    const title = event.target.title.value;
    const text = event.target.text.value;
    const description = event.target.description.value;
    const approve = event.target.approve.checked;

    // Process the form data as needed, such as sending it to your server or storing it in a database
    console.log({ email, title, text, description, approve });
});
