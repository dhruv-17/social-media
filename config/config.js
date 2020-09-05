const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://user_01:Lionking123@cluster0.aur8e.mongodb.net/socialmediaapp?retryWrites=true&w=majority"
}

export default config
