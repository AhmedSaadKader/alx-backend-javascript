/**
 * Process stdin
 */

const displayMessageWithName = () => {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      process.stdout.write(`Your name is: ${chunk}`);
      console.log('This important software is now closing');
    }
  });
};

displayMessageWithName();
