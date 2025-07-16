require("dotenv").config();

const welcomeNote = {
  title: "Code Duniya API",
  Owner: "Mahmood Hassan Rameem",
  developer: "ROL Studio Bangladesh",
  author: "Mahmood Hassan Rameem",
  server_ip: `http://localhost:${process.env.PORT || 5000}`,
};

const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_MONTH = 30;
const DAYS_PER_WEEK = 7;

const ACCESS_TOKEN_EXPIRY = 15 * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND; // 15 minutes

const REFRESH_TOKEN_EXPIRY =
  DAYS_PER_WEEK *
  HOURS_PER_DAY *
  MINUTES_PER_HOUR *
  SECONDS_PER_MINUTE *
  MILLISECONDS_PER_SECOND; // 7 days

const OAUTH_EXCHANGE_EXPIRY = 10 * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;

module.exports = {
  welcomeNote,
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE,
  MINUTES_PER_HOUR,
  HOURS_PER_DAY,
  DAYS_PER_MONTH,
  DAYS_PER_WEEK,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
  OAUTH_EXCHANGE_EXPIRY,
};
