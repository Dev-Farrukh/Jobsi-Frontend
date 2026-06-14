import app from "./src/app.js";
import variables from "./src/config/config.js";
import config from "./src/config/config.js";

app.listen(variables.BACKEND_PORT , ()=> {
    console.log("Server is running");
    
})