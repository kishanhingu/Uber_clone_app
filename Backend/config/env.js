const zod = require("zod");

const env = zod
  .object({
    PORT: zod.coerce.number().default(3000),
    MONGODB_DATABASE_NAME: zod.string(),
    JWT_SECRET: zod.string(),
  })
  .parse(process.env);

module.exports = env;
