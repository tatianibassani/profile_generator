const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!*/ 

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
      console.log(`Thank you for your answer: ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Thank you for your answer: ${answer}`)
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Which sport is your absolute favourite?', (answer) => {
      console.log(`Thank you for your answer: ${answer}`)
      resolve()
    })
  })
}

const question4 = () => {
    return new Promise((resolve, reject) => {
      rl.question('What is your superpower?', (answer) => {
        console.log(`Thank you for your answer: ${answer}`)
        resolve()
      })
    })
  }

const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  rl.close()
}

main()

