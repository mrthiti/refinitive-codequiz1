const fetch = require("node-fetch");

async function thisIsSyncFunction() {
  let { data: result } = await (fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()));

  return result;
}

(async _ => {
  const number1 = await thisIsSyncFunction();
  const calculation = number1 * 10;
  console.log(calculation);
})()