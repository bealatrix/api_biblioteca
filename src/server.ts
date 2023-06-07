import { App } from "./app";

const port = process.env.PORT || 3002;

const app = new App(port);

app.start();