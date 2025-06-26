const axios = require("axios");

const API_TOKEN = "tok_yxa2lqxp6g22ydsy7o3dcvwv7i";
const APP_PUBLIC_KEY = "b_6zyrlzvqqzk54nmo3k4qt354iu";

// Adjust these X, Y values based on visual location of LOGIN button (trial values)
const TAP_X = 540; // Middle of screen
const TAP_Y = 1700; // Just above the bottom

async function tapLogin() {
  try {
    await axios.post(
      `https://appetize.io/api/v1/apps/${APP_PUBLIC_KEY}/session`,
      {
        actions: [{ type: "tap", x: TAP_X, y: TAP_Y }]
      },
      {
        auth: { username: API_TOKEN, password: "" },
        headers: { "Content-Type": "application/json" }
      }
    );
    console.log("✅ Login button tapped");
  } catch (error) {
    console.error("❌ Failed:", error.response?.data || error.message);
  }
}

setInterval(tapLogin, 1000); // Every 1 second
