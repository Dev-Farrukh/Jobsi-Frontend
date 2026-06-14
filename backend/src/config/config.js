import "dotenv/config"

const requiredEnvVars = ['MONGO_URI' , 'BACKEND_PORT']

requiredEnvVars.forEach((varName )=> {
    if(!process.env[varName]){
    throw new Error( `${varName} is missing"`);
    
}
})

const variables = {
    MONGO_URI : process.env.MONGO_URI,
    BACKEND_PORT : process.env.BACKEND_PORT
}

Object.freeze(variables)
export default variables