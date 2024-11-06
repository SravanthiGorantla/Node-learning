const { Message } = require("../model");

const createMessage = async (req, res) => {
  console.log("req", req.body);
  try {
    const message = Message.create(req.body);
    console.log("message created ", message);

    //   creating websocket connection
    req.app.get("wss").clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: "new_message", data: message }));
      }
    });
    return res.status(200).send("message created succesfully");
  } catch (error) {
    console.log("errror", error);
    return res.status(error.status).send(error.message);
  }
};

const getMessages = async (req, res) => {
  console.log("req,", req.params);
  const userId = req.params.userId;
  try {
    const messages = Message.findAll({ where: { senderId: userId } });

    return res.status(200).send(messages);
  } catch (error) {
    return res.status(error.status).send(error.message);
  }
};

module.exports = { createMessage, getMessages };
