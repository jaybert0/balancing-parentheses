function balancingParentheses(string) {
  // type your code here
  let openCount = 0;
  let closeCount = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {++openCount}
    else if (openCount >0) {--openCount}
    else (++closeCount)
  }
  return openCount+closeCount

}
// )(
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// if '(' need to have a ')' or add to count. count of '(' === ')'. if not add to count
// And a written explanation of your solution
