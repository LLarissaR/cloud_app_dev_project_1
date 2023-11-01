const userMessage = "User's input";

assistant.message(
  {
    input: { text: userMessage },
    workspaceId: 'YOUR_WORKSPACE_ID',
  },
  function (err, response) {
    if (err) {
      console.error(err);
    } else {
      // Handle and display the chatbot's response to the user.
      console.log(response.output.generic[0].text);
    }
  }
);
