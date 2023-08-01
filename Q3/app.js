const readline = require("readline");
const { handleUserInput } = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startChat() {
  rl.question(
    "Chatbot: Hi there! Please type in whatever you want to ask me. ",
    (userInput) => {
      if (userInput.trim() === "exit") {
        console.log("Chatbot: Bye! Have a great day!");
        rl.close();
      } else {
        const response = handleUserInput(userInput);
        console.log(`Chatbot: ${response}`);
        startChat();
      }
    }
  );
}

startChat();