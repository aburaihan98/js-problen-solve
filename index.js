function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || expenses > income) {
    return "Invalid Input";
  }

  const result = income - expenses;

  const tax = result * 0.2;

  return tax;
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  const etIndex = email.indexOf("@");
  const start = email.slice(0, etIndex);
  const end = email.slice(etIndex).slice(1);
  return start + " sent you an email from " + end;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  let number = [];
  for (let i of name) {
    if (!isNaN(i)) {
      number.push(Number(i));
    }
  }

  if (number.length > 0) {
    return true;
  } else {
    return false;
  }
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) === true) {
    return "Invalid Input";
  }

  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean" ||
    isNaN(obj.testScore) === true ||
    isNaN(obj.schoolGrade) === true ||
    obj.testScore > 50 ||
    obj.schoolGrade > 30
  ) {
    return "Invalid Input";
  }

  let totalScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    totalScore += totalScore * 0.2;
  }

  if ((totalScore) => 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) === false ||
    typeof serialNumber !== "number" ||
    isNaN(serialNumber) === true
  ) {
    return "Invalid Input";
  }

  const peoples = serialNumber - 1;
  const exPeoples = waitingTimes.length;
  const remainingPeoples = peoples - exPeoples;

  let times = 0;
  for (let time of waitingTimes) {
    times += time;
  }

  let averageTimes = times / exPeoples;
  let remainingTimes = Math.round(averageTimes) * remainingPeoples;

  return remainingTimes;
}
