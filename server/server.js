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
// const imageRoutes = require("./routes/images");
// const reviewRoutes = require("./routes/ratings");
// const followingRoutes = require("./routes/following");
// const exploreRoutes = require("./routes/explore");
// const loginRoutes = require("./routes/login");
// const signUpRoutes = require("./routes/signup");
// const profileRoutes = require("./routes/profile");
// const searchRoutes = require("./routes/search");
// const voteRoutes = require("./routes/vote");
// const notificationRoutes = require("./routes/notifications");



// //Endpoints:
app.use("/regimens", regimenRoutes);
app.use("/categories", categoryRoutes);
app.use("/shop", shopRoutes);
// app.use("/images", imageRoutes);
// app.use("/reviews", reviewRoutes);
// app.use("/following", followingRoutes);
// app.use("/explore", exploreRoutes);
// app.use("/login", loginRoutes);
// app.use("/signup", signUpRoutes);
// app.use("/profile", profileRoutes);
// app.use("/search", searchRoutes);
// app.use("/vote", voteRoutes)
// app.use("/notifications", notificationRoutes)


// PORT LISTEN
server.listen(port, () => {
  console.log(`app is listening on ${port}`);
});