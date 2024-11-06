import WebSocket from "ws";
import { Server } from "socket.io";
import { addResults } from "./controllers/results";
// import { Socket } from "socket.io-client";

export const createSocketConnection = () => {
  // const io = new Server(server, {
  //   cors: {
  //     origin: "*",
  //     // methods: []
  //   },
  // });
  const io = new Server(8080, { cors: { origin: "*" } });
  io.on("connection", (socket) => {
    console.log("client conencted");
    socket.on("results", async (data) => {
      console.log("rceived data from the clinent", data);
      const response = await addResults(data);
      io.emit("resultsResponse", response);
    });

    socket.on("disconnect", () => {
      console.log("client disconnected");
    });
  });
};

export const createConnection = () => {
  const wss = new WebSocket.Server({ port: 8080 });
  // const io = new Server()
  wss.on("connection", (ws: WebSocket) => {
    console.log("new client connected");
    ws.on("message", (message: any) => {
      console.log("message", message);
      const data = JSON.parse(message);
      if (data.event === "result") {
        console.log("inside the result event", data.event);
        console.log("data in results", data);
        addResults(data);
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
      }
    });
  });
};
