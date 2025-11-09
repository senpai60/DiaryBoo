export const setCookies = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true, // Security: only accessible by server
    secure: process.env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "strict", // CSRF protection
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
};
