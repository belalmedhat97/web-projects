$(document).ready(function () {
    $('.menuButton').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});

window.onload = function () {
    var fileInputs = document.querySelectorAll("input[type=file]");
    if (fileInputs.length) {
        fileInputs[0].addEventListener("change", function (event) {
            if (this.files && this.files[0]) {
                var reader = new FileReader(); //returneaza un obiect abia construit
                reader.onload = function (event) {
                    document.getElementById("preview").setAttribute("src", event.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }
}

