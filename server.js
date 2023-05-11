import {app} from './app.js';
import { connectDb } from "./data/database.js";


connectDb();

console.log()
app.listen(process.env.PORT, () => {
    console.log("server is working");
});