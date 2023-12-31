// Imports
const express = require("express");
const cors = require('cors');
const morgan = require("morgan"); // Morgan documents network traffic to console.
const http = require("http");
const { startWebSocket } = require('./websocket');

// Create app, websocket and db instances
const port = process.env.PORT || 8001; // Define our base URL as http:\\localhost:8001
const app = express();
const server = http.createServer(app);
startWebSocket(server);

// Middleware
// Morgan documents network traffic to console.
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// console.log('heyserver')
//EXPRESS
// Separated Routes for each Resource
const regimenRoutes = require("./routes/regimens");
const categoryRoutes = require("./routes/categories");
const shopRoutes = require("./routes/shop");
const cartRoutes = require("./routes/cart");
const accountRoutes = require("./routes/account");
const signUpRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const userRoutes = require("./routes/user");
// const exploreRoutes = require("./routes/explore");
// const profileRoutes = require("./routes/profile");
// const searchRoutes = require("./routes/search");
// const voteRoutes = require("./routes/vote");
// const notificationRoutes = require("./routes/notifications");



// //Endpoints:
app.use("/regimens", regimenRoutes);
app.use("/categories", categoryRoutes);
app.use("/shop", shopRoutes);
app.use("/cart", cartRoutes);
app.use("/account", accountRoutes);
app.use("/signup", signUpRoutes);
app.use("/login", loginRoutes);
app.use("/user", userRoutes);
// app.use("/explore", exploreRoutes);
// app.use("/profile", profileRoutes);
// app.use("/search", searchRoutes);
// app.use("/vote", voteRoutes)
// app.use("/notifications", notificationRoutes)


// PORT LISTEN
server.listen(port, () => {
  console.log(`app is listening on ${port}`);
});