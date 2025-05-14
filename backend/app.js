import express from "express";
import cookieParser from "cookie-parser";

import registerClientsRouter from "./src/routes/registerClients.js"
import registerEmployeesRouter from "./src/routes/registerEmployees.js"
import clientsRouter from "./src/routes/clients.js"
import employeesRouter from "./src/routes/employees.js"
import moviesRouter from "./src/routes/movies.js"
import passwordRecoveryRouter from "./src/routes/passwordRecovery.js";
import loginRouter from "./src/routes/login.js"
import logoutRouter from "./src/routes/logout.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/registerClients", registerClientsRouter)
app.use("/api/registerEmployees", registerEmployeesRouter)

app.use("/api/clients", clientsRouter)
app.use("/api/employees", employeesRouter)
app.use("/api/movies", moviesRouter)

app.use("/api/passwordRecovery", passwordRecoveryRouter)

app.use("/api/login", loginRouter)
app.use("/api/logout", logoutRouter)

export default app;