// 1. Accept fightCount as a parameter
function willYouMarryMe(fightCount) { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fightCount > 100) return reject("I am not ready to marry you");
      resolve("I am ready to marry you");
    }, 5000); // 5-second delay
  });
}

// 2. Invoking the function with 105 fights
willYouMarryMe(105)
  .then((message) => {
    console.log(message); // If resolved
  })
  .catch((message) => {
    console.log(message); // If rejected
  });