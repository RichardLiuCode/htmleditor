function uploadAFile() {
    if (document.getElementById("input").value != "") {
        var ifTheUserSureToUpload = confirm("Upload a file will replace all your work here! Do you want to continue?")
        if (ifTheUserSureToUpload) {
            document.getElementById("uploadArea").style.display = "revert";
        }
    } else {
        document.getElementById("uploadArea").style.display = "revert";
    }
}
document.getElementById("dropFileArea").addEventListener("dragover", function (e) {
    e.preventDefault();
    document.getElementById("dropFileArea").style = "background-color:lightblue";
});
document.getElementById("dropFileArea").addEventListener("dragleave", function () {
    document.getElementById("dropFileArea").style = "background-color:white;";
});
document.getElementById("dropFileArea").addEventListener("drop", function (e) {
    e.preventDefault();
    document.getElementById("dropFileArea").style = "background-color:white;";
    console.log(e);
    var file = e.dataTransfer.files[0];
    document.getElementById("fileNameDisplay").value = file.name;
    var reader2 = new FileReader();
    reader2.onload = function (event) {
        document.getElementById("input").value = event.target.result;
        document.getElementById("display").srcdoc = event.target.result;
        document.getElementById("uploadArea").style.display = "none"
        localStorage.setItem("code", event.target.result);
    }
    reader2.readAsText(file);
});