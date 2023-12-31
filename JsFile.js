
const start = document.getElementById("start");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const end1 = document.getElementById("end-1");
const end2 = document.getElementById("end-2");
const end3 = document.getElementById("end-3");
const end4 = document.getElementById("end-4");
const end5 = document.getElementById("end-5");

function nextPage(event) {
    let firstname = document.getElementById("firstname").value;
    switch (event) {
        case 'next1':
            start.style.display = "none";
            q1.style.display = "block";
            break;
        case 'next2':
            if (!firstname) {
                alert("Name must be filled out!");
            }
            else {
                q1.style.display = "none";
                q2.style.display = "block";
            }
            break;
        case 'next3':
            q2.style.display = "none";
            q3.style.display = "block";
            break;
        case 'next4':
            q3.style.display = "none";
            q4.style.display = "block";
            break;
        default:
            q4.style.display = "none";
            q5.style.display = "block";
            break;
    }
}

function inputPopUp(x) {
    let radio = document.getElementById("optionalInput");
    if (x == 'T') {
        radio.style.display = "block";
    }
    else {
        radio.style.display = "none";
    }
}

function finalPage() {
    let mark = document.getElementById("customRange1").value;
    let span1 = document.getElementsByClassName("span1");
    let firstname = document.getElementById("firstname").value;

    switch (mark) {
        case '1':
            q5.style.display = "none";
            span1[0].innerHTML = firstname;
            end1.style.display = "block";
            break;
        case '2':
            q5.style.display = "none";
            span1[1].innerHTML = firstname;
            end2.style.display = "block";
            break;
        case '3':
            q5.style.display = "none";
            span1[2].innerHTML = firstname;
            end3.style.display = "block";
            break;
        case '4':
            q5.style.display = "none";
            span1[3].innerHTML = firstname;
            end4.style.display = "block";
            break;
        default:
            q5.style.display = "none";
            span1[4].innerHTML = firstname;
            end5.style.display = "block";
            break;
    }
}