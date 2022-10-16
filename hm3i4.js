
document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById("author").value = name;
    }
    let link = localStorage.getItem('link');
    if (link != null) {
        document.getElementById("url").value = link;
    }
    let comm = localStorage.getItem('comm');
    if (comm != null) {
        document.getElementById("comment").value = comm;
    }

})

function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;
    let url = document.getElementById("url").value;

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }

    let getVal = {
        "login": author,
        "picture": url,
        "comment": comment

    }

    console.log(getVal)
    localStorage.setItem('LogPictCom', JSON.stringify(getVal));
}

function write() {
    let tytle = document.getElementById("h").value;
    let rem = document.getElementById("rem").value;



    let myNote = {
        "tytle": tytle,
        "text": rem
    }

    console.log(tytle, rem)
    localStorage.setItem('Notes', JSON.stringify(myNote));
}

