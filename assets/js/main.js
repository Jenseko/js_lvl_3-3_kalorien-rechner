console.log("auf ein Neues!");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

// Was brauche ich?
// - input - Körpergrösse
//         - Alter
//         - Gewicht
//         - Körperbau
//         - radioBTN  
//         - Aktivitätsbox mit Vorschlägen(?) + hinterlegter Wert
// - calling - submit.btn

// Variablen - PAL-Wert - Zuweisung

// - Output - Grundumsatz kcal
//          - Grundumsatz kJ
//          - Gesamtumsatz kcal
//          - Gesamtumsatz kJ


// Grundumsatz bei Männern (Kalorien je Tag)
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz 

// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const showGrundumsatz = () => {
    const koerperGroesse = document.querySelector('#height').value;
    const aGe = document.querySelector('#age').value;
    const koerperGewicht = document.querySelector('#weight').value;
    const genderRadioFemale = document.querySelector('form input[type=radio]');
    const activityLevel = document.querySelector('form select').value;
    const outputGrundumsatz = document.querySelector('#outputGrundumsatz');
    const resultGesamtumsatz = document.querySelector('#resultGesamtumsatz');
    const outputGrundumsatz_kJ = document.querySelector('#outputGrundumsatz_kJ');
    const outputGesamtumsatz_kJ = document.querySelector('#outputGesamtumsatz_kJ');
    let grundUmsatz;
    let gesamtUmsatz;

    if (genderRadioFemale.checked) {
        console.log("genderRadioFemale.checked");
        grundUmsatz = 655.1 + (9.6 * koerperGewicht) + (1.8 * koerperGroesse) - (4.7 * aGe);
        gesamtUmsatz = grundUmsatz * activityLevel;
        outputGrundumsatz.innerHTML= grundUmsatz.toFixed(0);
        resultGesamtumsatz.innerHTML = gesamtUmsatz.toFixed(0);
        outputGrundumsatz_kJ.innerHTML = (grundUmsatz * 4.19).toFixed(0);
        outputGesamtumsatz_kJ.innerHTML = (gesamtUmsatz * 4.19).toFixed(0);
    } else {
        grundUmsatz = 664.7 + (13.7 * koerperGewicht) + (5 * koerperGroesse) - (6.8 * aGe);
        gesamtUmsatz = grundUmsatz * activityLevel;
        outputGrundumsatz.innerHTML = grundUmsatz.toFixed(0);
        resultGesamtumsatz.innerHTML = gesamtUmsatz.toFixed(0);
        outputGrundumsatz_kJ.innerHTML = (grundUmsatz * 4.19).toFixed(0).toLocaleString();
        outputGesamtumsatz_kJ.innerHTML = (gesamtUmsatz * 4.19).toFixed(0);
    }
}

console.log(outputGrundumsatz);

































// let valuePAL;

// const activityValuesPAL = () => {
    
//     switch (activityLevel) {
//         case "Schlafen":
//             let valuePAL = 0.95;
//             console.log(valuePAL);
//             activityLevel = "Schlafen";
//             break;
//         case "Nur Sitzen oder Liegen" :
//             valuePAL = 1.2;
//             console.log(valuePAL);
//             activityLevel = "Nur Sitzen oder Liegen";
//             break;
//         case "Ausschliesslich sitzende Tätigkeit":
//             valuePAL = 1.5;
//             console.log(valuePAL);
//             activityLevel = "Ausschließlich sitzende Tätigkeit mit wenig körperlicher Aktivität";
//             break;
//         case "Sitzende Tätigkeit mit zeitweilig gehender Tätigkeit" :
//             valuePAL = 1.7;
//             console.log(valuePAL);
//             activityLevel = "Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit";
//             break;
//         case "Überwiegend gehende oder stehende Tätigkeit" :
//             valuePAL = 1.9;
//             console.log(valuePAL);
//             activityLevel = "Überwiegend gehende oder stehende Tätigkeit";
//             break;
//         default:
//             valuePAL = 1.9;
//             console.log(valuePAL);
//             activityLevel = "Körperlich anstrengende berufliche Arbeit";
//             break;
//             }
// };