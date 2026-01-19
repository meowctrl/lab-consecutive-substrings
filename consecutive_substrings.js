function consecutiveSubstrings(string) {
  const substrings = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      substrings.push(string.slice(i, j + 1));
    };
  };
  return substrings;
};

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

  console.log("Expecting: ['p','ph','pho','phon','phone','h','ho','hon','hone','o','on','one','n','ne','e']");
  console.log("=>", consecutiveSubstrings('phone'));

module.exports = consecutiveSubstrings;


