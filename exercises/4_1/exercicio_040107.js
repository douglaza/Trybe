let note = 10;
if (note >=0 && note <=100){
    if (note >= 90){
    note = "A";
    } else if (note >=80){
        note = "B";
    } else if (note >=70){
        note = "c";
    } else if (note >=60){
        note = "D";
    } else if (note >=50){
        note = "E";
    } else if (note <=50){
        note = "F";
    }
} else note = "Nota Inválida";
console.log(note);