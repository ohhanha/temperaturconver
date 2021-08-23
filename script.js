const d = new Date();
document.getElementById("date").innerHTML = d;


function chgCol(){
    let color = document.getElementById("inCol").value;
    document.body.style.backgroundColor = color;
}