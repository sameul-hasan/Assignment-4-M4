function totalFine(fare) {
    if (fare <= 0 || typeof fare !== 'number') {
        return "Invalid";
    }

    let fine = fare + (fare * 0.2) + 30;
    return fine;
}

function onlyCharacter(str){
    if (typeof str !== 'string') {
        return "Invalid";
    }
    let result = str.replace(/\s+/g, '').toUpperCase();
    return result;
}  

function bestTeam(player1, player2) {
    if(typeof player1 !== 'object' || typeof player2 !== 'object' ||player1 === null || player2 === null)
    { return "Invalid"; }
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;
    if (total1 < total2) {
        return player1.name;
    }
    else if (total2 < total1) {
        return player2.name;
    }
    else {
        return "Tie";
    }

}

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

function resultReport(marks){
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let pass = 0;
    let fail = 0;
    let total = 0;
    for (let m of marks){
        total += m;
        if (m >= 40){
            pass++;
        }
        else {
            fail++;
        }
    }
    let avg = total / marks.length;
    return { finalScore: avg, pass: pass, fail: fail };
}


console.log(totalFine("65")); 
console.log(onlyCharacter(65));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, { name: "France", foul: 5, cardY: 2, cardR: 0 }));
console.log(isSame([1, 2, 3], [1, 2, 3]));
console.log(resultReport([45, 55, 35, 60, 70]));
