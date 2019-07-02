//timeout function to print 1 letter of a sentence at a time

const sentence = "hello there from lighthouse labs";

let initial = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, initial += 50);
}

setTimeout(() => {
  console.log('\n');
}, initial);