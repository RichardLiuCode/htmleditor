document.getElementById("pasteBTNonContexMenu").addEventListener("click", function () {
    navigator.clipboard.readText()
        .then(function (text) {
            document.getElementById("input").value = document.getElementById("input").value + text;
            document.getElementById("display").srcdoc = document.getElementById("input").value;
            localStorage.setItem("code", document.getElementById("input").value);
        })
        .catch(function (error) {
            alert("Paste failed!")
        });
})
document.getElementById("insertFormTopBar").addEventListener("click", function () {
    document.getElementById("insertArea").style.display = "flex";
    document.getElementById("input").style.height = window.innerHeight - 200 + "px";
    document.getElementById("display").style.height = window.innerHeight - 200 + "px"
});
document.getElementById("cancleInsert").addEventListener("click", function () {
    document.getElementById("insertArea").style.display = "none";
    document.getElementById("input").style.height = window.innerHeight - 30 + "px";
    document.getElementById("display").style.height = window.innerHeight - 30 + "px";
})
document.getElementById("input").addEventListener("input", function () {
    localStorage.setItem("code", document.getElementById("input").value);
    document.getElementById("display").srcdoc = document.getElementById("input").value;
});
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
document.getElementById("cancleImportFromGitHub").addEventListener("click", function () {
    document.getElementById("importFromGitHubArea").style.display = "none";
    document.getElementById("input").style.height = window.innerHeight - 30 + "px";
    document.getElementById("display").style.height = window.innerHeight - 30 + "px";
})
function importFromGithub() {
    if (document.getElementById("input").value != "") {
        var ifTheUserSureToImportFromGithub = confirm("Import a website will replace all your work here! Do you want to continue?")
        if (ifTheUserSureToImportFromGithub) {
            document.getElementById("importFromGitHubArea").style.display = "revert";
            document.getElementById("input").style.height = window.innerHeight - 200 + "px";
            document.getElementById("display").style.height = window.innerHeight - 200 + "px"
        } else {
            document.getElementById("input").style.height = window.innerHeight - 30 + "px";
            document.getElementById("display").style.height = window.innerHeight - 30 + "px";
        }
    } else {
        document.getElementById("importFromGitHubArea").style.display = "revert";
        document.getElementById("input").style.height = window.innerHeight - 200 + "px";
        document.getElementById("display").style.height = window.innerHeight - 200 + "px"
    }

}

setInterval(function () {
    document.getElementById("input").style.height = window.innerHeight - 30 + "px";
    document.getElementById("display").style.height = window.innerHeight - 30 + "px"
    if (
        (document.getElementById("uploadArea").style.display == "none") &&
        (document.getElementById("insertArea").style.display == "none") &&
        (document.getElementById("importFromGitHubArea").style.display == "none")
    ) {
        document.getElementById("input").style.height = window.innerHeight - 30 + "px";
        document.getElementById("display").style.height = window.innerHeight - 30 + "px";
    } else {
        document.getElementById("input").style.height = window.innerHeight - 200 + "px";
        document.getElementById("display").style.height = window.innerHeight - 200 + "px";
    }

}, 1000);
window.addEventListener("resize", function () {
    // Change the size after the window size change
    if (
        (document.getElementById("uploadArea").style.display == "none") &&
        (document.getElementById("insertArea").style.display == "none") &&
        (document.getElementById("importFromGitHubArea").style.display == "none")
    ) {
        document.getElementById("input").style.height = window.innerHeight - 30 + "px";
        document.getElementById("display").style.height = window.innerHeight - 30 + "px";
    } else {
        document.getElementById("input").style.height = window.innerHeight - 200 + "px";
        document.getElementById("display").style.height = window.innerHeight - 200 + "px";
    }
})
window.onload = function () {
    document.getElementById("input").style.height = window.innerHeight - 30 + "px";
    document.getElementById("display").style.height = window.innerHeight - 30 + "px";
}
document.getElementById("fileInput").addEventListener("change", function () {
    document.getElementById("fileNameDisplay").value = (document.getElementById("fileInput").files[0].name)
})
document.getElementById("importOptionsDropdown").addEventListener("change", function () {
    console.log(document.getElementById("importOptionsDropdown").value)
    if (document.getElementById("importOptionsDropdown").value == "upload") {
        document.getElementById("importOptionsDropdown").value = "Import";
        uploadAFile()
    } else if (document.getElementById("importOptionsDropdown").value == "fromGitHub") {
        document.getElementById("importOptionsDropdown").value = "Import";
        importFromGithub()
    }
})
document.getElementById("previewOptionDropdown").addEventListener("change", function () {
    if (document.getElementById("previewOptionDropdown").value == "previewinnewtab") {
        document.getElementById("previewOptionDropdown").value = "Preview";
        openInNewWin();
    } else if (document.getElementById("previewOptionDropdown").value == "showCodeOnly") {
        document.getElementById("previewOptionDropdown").value = "Preview";
        showFullScreenCode();
    } else if (document.getElementById("previewOptionDropdown").value == "showPreviewOnly") {
        document.getElementById("previewOptionDropdown").value = "Preview";
        showFullScreenPreview();
    } else if (document.getElementById("previewOptionDropdown").value == "default_showBothCodeAndPreview_03457") {
        document.getElementById("previewOptionDropdown").value = "Preview";
        document.getElementById("display").style = "width:50vw"
        document.getElementById("input").style = "width:50vw"
    }
})
document.getElementById("confirmUploadFile").addEventListener("click", function () {
    var file = document.getElementById("fileInput").files[0];
    if (file) {
        var reader = new FileReader;
        reader.onload = function (event) {
            document.getElementById("input").value = event.target.result;
            document.getElementById("display").srcdoc = event.target.result;
            document.getElementById("uploadArea").style.display = "none"
            localStorage.setItem("code", document.getElementById("input").value);
        }
        reader.readAsText(file);
    }
});
document.getElementById("cancleUpload").addEventListener("click", function () {
    document.getElementById("uploadArea").style.display = "none";
    document.getElementById("input").style.height = window.innerHeight - 30 + "px";
    document.getElementById("display").style.height = window.innerHeight - 30 + "px";
})

function openInNewWin() {
    var openNewWindow = window.open("", "_blank")
    var newWindowContent = document.getElementById("display").srcdoc
    openNewWindow.document.write(newWindowContent);
}
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    document.getElementById("contextMenu").style.left = e.pageX + "px";
    document.getElementById("contextMenu").style.top = e.pageY + "px";
    document.getElementById("contextMenu").style.display = "revert"
})
document.addEventListener("click", function () {
    document.getElementById("contextMenu").style.display = "none"
})
var isSaved = 1
document.getElementById("renameProject").addEventListener("click", function () {
    if (isSaved) {
        isSaved = 0;
        document.getElementById("renameProject").innerText = "Save"
        document.getElementById("projectNameInput").readOnly = false;
        document.getElementById("projectNameInput").style = "background-color:white;color:black"
    } else {
        localStorage.setItem("name", document.getElementById("projectNameInput").value)
        isSaved = 1;
        document.getElementById("renameProject").innerText = "Rename"
        document.getElementById("projectNameInput").style = "background-color:blue;color:white"
        document.getElementById("projectNameInput").readOnly = true;
    }


});
window.onload = function () {
    document.getElementById("uploadArea").style.display = "none";
    document.getElementById("importFromGitHubArea").style.display = "none";
    document.getElementById("input").style.height = window.innerHeight - 30 + "px";
    document.getElementById("display").style.height = window.innerHeight - 30 + "px";
    document.getElementById("projectNameInput").value = localStorage.getItem("name");
    document.getElementById("input").value = localStorage.getItem("code");
    document.getElementById("display").srcdoc = localStorage.getItem("code");
    displayGitHubHint();
    console.clear();
    document.getElementById("previewOptionDropdown").value = "Preview";
}
document.getElementById("exportFile").addEventListener("click", function () {
    var blob = new Blob([document.getElementById("input").value], { type: "text/html" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    var fileName = (document.getElementById("projectNameInput").value || "code") + ".html";
    a.download = fileName;
    a.click();
});
var doubleQuotes = document.getElementById("aedirogsdfjaksdfmnaljrfjknmaslgjkadfgghjjfdsgdsjjfgsdfgsdfgjjjwrosfgsd").value;
function insertText(inputElement) {
    document.getElementById("input").value = document.getElementById("input").value + "\n" + inputElement;
    document.getElementById("display").srcdoc = document.getElementById("input").value;
    localStorage.setItem("code", document.getElementById("input").value);
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
document.addEventListener("keydown", function (e) {
    if ((e.key == "s" && e.ctrlKey == true)) {
        e.preventDefault()
        alert("Your code will be automatically save in your loaclstorage. You can also copy them to clipboard or Export them as a HTML file");
        localStorage.setItem("code", document.getElementById("input").value);
    }
    if ((e.key == "F" && e.altKey == true && e.shiftKey == true)) {
        e.preventDefault()
        formatCode()
    }
});

document.getElementById("confirmImportGithubButton").addEventListener("click", function () {
    if (document.getElementById("importGithubURLInput").value != "") {
        fetch(document.getElementById("importGithubURLInput").value)
            .then(function (response) {
                return response.text()
            })
            .then(function (html) {
                console.log("Fetch success!")
                document.getElementById("input").value = html;
                document.getElementById("display").srcdoc = html;
                localStorage.setItem("code", html);
            })
            .catch(function (error) {
                console.warn("Failed fetch, maybe bacause CORS, Now trying to use allorigns API")
                fetch("https://api.allorigins.win/raw?url=" + document.getElementById("importGithubURLInput").value).then(function (response) {
                    return response.text()
                })
                    .then(function (html) {
                        document.getElementById("input").value = html;
                        document.getElementById("display").srcdoc = html;
                        formatCode()
                    })
                    .catch(function (error) {
                        if (error.toString().includes("TypeError: Failed to fetch")) {
                            alert("There is an error occurred!\n1. Check is the URL server block the request, You can click Fn+ F12 to open developer tool to check about it.\n2. Check you URL spelling, You might type wrong\n3. Check your internet\nError code: " + error);
                        } else {
                            alert("Error: " + error)
                        }
                    })
            })
    } else {
        alert("Please Enter Your URL")
    }//

})

function displayGitHubHint() {
    fetch("GithubHint.txt").then(function (response) {
        return response.text()
    }).then(function (text) {
        document.getElementById("ImportGithubDescriptionDisplay").value = text
    })
}
function formatCode() {
    var formatted = html_beautify(document.getElementById("input").value)
    document.getElementById("input").value = formatted;
    document.getElementById("display").srcdoc = formatted;
    localStorage.setItem("code", formatted);
    console.log("Code formatted")
}
function showFullScreenCode() {
    document.getElementById("input").style = "width:100vw"
    document.getElementById("display").style.display = "none"
}
function showFullScreenPreview() {
    document.getElementById("display").style = "width:100vw"
    document.getElementById("input").style.display = "none"
}
/* ---------------------------------- */
