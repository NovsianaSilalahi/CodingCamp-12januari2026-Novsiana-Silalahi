document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let message = document.getElementById("messageText").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let time = new Date().toString();

    document.getElementById("result").innerHTML = `
        <p><b>Current time:</b> ${time}</p>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Tanggal Lahir:</b> ${dob}</p>
        <p><b>Jenis Kelamin:</b> ${gender}</p>
        <p><b>Pesan:</b> ${message}</p>
    `;
});
