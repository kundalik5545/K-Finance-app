const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // Only secure in production
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Set expiration for 30 days
  sameSite: "lax", // Adjust if needed based on your setup
  path: "/", // Make sure the path is root
};

export default options;
