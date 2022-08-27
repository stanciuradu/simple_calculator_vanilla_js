// partea de selectori
// am selectat formularul
const form = document.querySelector("#loan-form");
// am selectat cele doua inputuri
const base = document.querySelector("#base");
const exponent = document.querySelector("#exponent");
// am selectat inputul in care trebuie sa se afiseze nr ridicat la putere
const powerNumber = document.querySelector("#power-number");

const percentage = document.querySelector("#percentage");

// selectarea inputului SQRT
const radical = document.querySelector("#number");

// selectam inputul pentru afisarea radicalului
const radicalResult = document.querySelector("#radical-number");
const percentageResult = document.querySelector("#percentage-number");

// eveniment de submit
form.addEventListener("submit", getResults);
function getResults(event) {
  event.preventDefault();

  // ar trebui sa salvez continutul celor doua inpurturi intr o variabila
  const baseNumber = parseFloat(base.value);
  const exponentNumber = parseFloat(exponent.value);
  const radicalNumber = parseFloat(radical.value);
  const percentageNumber = parseFloat(percentage.value);

  // salvez intr-o variabila operatiile de ridicare la putere si radical
  const result = Math.pow(baseNumber, exponentNumber);
  const resultSecond = Math.sqrt(radicalNumber);
  const resultThree = percentageNumber / 100;

  // asociez aceste variabile cu valorile inputurilor de la iesire
  powerNumber.value = result;
  radicalResult.value = resultSecond;
  percentageResult.value = resultThree;
  console.log(resultSecond);
}
