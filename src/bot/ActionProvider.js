class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleGotit = () => {
    const message = this.createClientMessage("Got it!");

    this.addMessageToState(message);

    const msg = this.createChatBotMessage("Enter your name");

    this.addMessageToState(msg);
  };

  handleAgeAction = () => {
    const msg = this.createChatBotMessage("Enter your Age", {
      widget: "age",
    });

    this.addMessageToState(msg);
  };

  PrintAge = (selectedAge) => {
    console.log(selectedAge);
    const msg = this.createClientMessage(`${selectedAge}`);

    this.addMessageToState(msg);

    const message = this.createChatBotMessage("Thank you", {
      widget: "counter",
    });

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
