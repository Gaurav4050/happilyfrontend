class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (message.trim() !== "") {
      localStorage.setItem("name", message);
      return this.actionProvider.handleAgeAction();
    }
  }
}

export default MessageParser;
