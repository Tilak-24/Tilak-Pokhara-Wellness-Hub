function sendEmailToTrainer() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const goal = document.querySelector('input[name="goal"]').value;
    const time = document.querySelector('input[name="time"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const body =
        "Name: " + name + "%0D%0A" +
        "Email: " + email + "%0D%0A" +
        "Fitness Goal: " + goal + "%0D%0A" +
        "Preferred Training Time: " + time + "%0D%0A" +
        "Message: " + message;

    window.location.href =
        "mailto:tilakbahadurb100@gmail.com?subject=New Trainer Request&body=" + body;
}
