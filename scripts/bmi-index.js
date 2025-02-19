const unitStandard = document.querySelector("#standard");
const unitMetric = document.querySelector("#metric");
const heightFeet = document.querySelector("#height-feet");
const heightInches = document.querySelector("#height-inches");
const heightCm = document.querySelector("#height-cm");
const weight = document.querySelector("#weight");
const calculateBtn = document.querySelector("#calculate-btn");
const resultOutput = document.querySelector("#result-output");
const bmiRangeResult = document.querySelector("#bmi-range-result");
const ageInput = document.querySelector("#age-input");

const heightInputDivMetric = document.querySelector("#height-metric");
const heightInputDivStandard = document.querySelector("#height-standard");

const weightLabel = document.querySelector("#weight-label");

unitStandard.addEventListener("click", () => {
  heightInputDivMetric.style.display = "none";
  heightInputDivStandard.style.display = "flex";
  weightLabel.innerHTML = "lbs";
});

unitMetric.addEventListener("click", () => {
  heightInputDivMetric.style.display = "flex";
  heightInputDivStandard.style.display = "none";
  weightLabel.innerHTML = "kg";
});

function getValidNumber(value) {
  try {
    if (!value || !value.trim()) {
      return null;
    }
    const number = parseInt(value.trim());
    return number;
  } catch (error) {
    return null;
  }
}

function getValidFloat(value) {
  try {
    if (!value || !value.trim()) {
      return null;
    }
    const number = parseFloat(value.trim());
    return number;
  } catch (error) {
    return null;
  }
}

function validateForm() {
  const isStandard = unitStandard.checked;
  let isValid = false;
  if (isStandard) {
    const isHeightFeetValid = getValidNumber(heightFeet.value) !== null;
    const isHeightInchesValid = getValidNumber(heightInches.value) !== null;
    const isWeightValid = getValidFloat(weight.value) !== null;
    const isAgeValid = getValidNumber(ageInput.value) !== null;
    isValid =
      isHeightFeetValid && isHeightInchesValid && isWeightValid && isAgeValid;
  } else {
    const isHeightCmValid = getValidNumber(heightCm.value) !== null;
    const isWeightValid = getValidFloat(weight.value) !== null;
    const isAgeValid = getValidNumber(ageInput.value) !== null;
    isValid = isHeightCmValid && isWeightValid && isAgeValid;
  }
  if (isValid) {
    calculateBtn.disabled = false;
  } else {
    calculateBtn.disabled = true;
  }
  return isValid;
}

heightFeet.addEventListener("input", validateForm);
heightInches.addEventListener("input", validateForm);
heightCm.addEventListener("input", validateForm);
weight.addEventListener("input", validateForm);
ageInput.addEventListener("input", validateForm);

calculateBtn.addEventListener("click", () => {
  if (!validateForm()) {
    return;
  }

  const isStandard = unitStandard.checked;
  let bmi;
  if (isStandard) {
    const weightInKg = getValidFloat(weight.value) / 2.20462;
    const heightInMetre =
      (getValidNumber(heightFeet.value) * 12 +
        getValidNumber(heightInches.value)) *
      0.0254;
    const heightSquare = heightInMetre * heightInMetre;
    bmi = weightInKg / heightSquare;
  } else {
    const weightInKg = getValidFloat(weight.value);
    const heightInMetre = getValidNumber(heightCm.value) / 100;
    const heightSquare = heightInMetre * heightInMetre;
    bmi = weightInKg / heightSquare;
  }
  resultOutput.innerHTML = `${bmi.toFixed(2)}`;

  if (bmi >= 40) {
    bmiRangeResult.innerHTML = "(Class 3 obesity)";
  } else if (bmi >= 35) {
    bmiRangeResult.innerHTML = "(Class 2 obesity)";
  } else if (bmi >= 30) {
    bmiRangeResult.innerHTML = "(Class 1 obesity)";
  } else if (bmi >= 30) {
    bmiRangeResult.innerHTML = "(Obesity)";
  } else if (bmi >= 25) {
    bmiRangeResult.innerHTML = "(Overweight)";
  } else if (bmi >= 18.5) {
    bmiRangeResult.innerHTML = "(Healthy weight)";
  } else {
    bmiRangeResult.innerHTML = "(Underweight)";
  }
});
