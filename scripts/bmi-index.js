const unitStanard = document.querySelector("#stanard");
const unitMetric = document.querySelector("#metric");
const heightFeet = document.querySelector("#height-feet");
const heightInches = document.querySelector("#height-inches");
const weight = document.querySelector("#weight");
const calculateBtn = document.querySelector("#calculate-btn");
const resultOutput = document.querySelector("#result-output");
const bmiRangeResult = document.querySelector("#bmi-range-result");

calculateBtn.addEventListener("click", () => {
  const feetInInch = heightFeet.value * 12;
  const totalHeightInch = feetInInch + Number(heightInches.value);
  const heightInMetre = (totalHeightInch / 39.37).toFixed(2);
  const heightSquare = heightInMetre * heightInMetre;
  const bmi = weight.value / heightSquare;

  resultOutput.innerHTML = `${bmi.toFixed(2)}`;

  if (bmi >= 40) {
    bmiRangeResult.innerHTML = "(Class 3 obesity)";
  } else if (bmi >= 35 && bmi <= 39) {
    bmiRangeResult.innerHTML = "(Class 2 obesity)";
  } else if (bmi >= 30 && bmi <= 34) {
    bmiRangeResult.innerHTML = "(Class 1 obesity)";
  } else if (bmi >= 30) {
    bmiRangeResult.innerHTML = "(Obesity)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiRangeResult.innerHTML = "(Overweight)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiRangeResult.innerHTML = "(Healthy weight)";
  } else {
    bmiRangeResult.innerHTML = "(Underweight)";
  }
});
