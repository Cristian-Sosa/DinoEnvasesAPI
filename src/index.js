import app from "./app.js";

app.listen(app.get("port"));

console.log(`App escuchando en puerto ${app.get("port")}`);

export default app;
