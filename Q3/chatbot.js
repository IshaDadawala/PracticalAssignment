function handleUserInput(userInput) {
    const input = userInput.toLowerCase();
  
    if (input.indexOf("hello") !== -1 || input.indexOf("hi") !== -1) {
      return "Hi there! Please type in whatever you want to ask me.";
    } else if (input.indexOf("bye") !== -1 || input.indexOf("exit") !== -1) {
      return "Bye! Have a great day!";
    } else if (input.indexOf("what is your name") !== -1) {
      return "I am Chatbot";
    } else if (input.indexOf("what time is it") !== -1) {
      const currentTime = new Date().toLocaleTimeString();
      return `The current time is: ${currentTime}`;
    } else if (input.indexOf("how are you") !== -1) {
      return "I am a chatbot & i don't feel anything, but thanks for asking!";
    } else if (input.indexOf("tell me a joke") !== -1) {
      return "Why did a scarecrow win a Nobel? He was outstanding in his field!";
    } else {
      return "I'm sorry, I didn't understand that.";
    }
  }
  
  module.exports = {
    handleUserInput,
  };