// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const { env } = process;
export const config = () => ({
  host: env.HOST || 'localhost',
  port: +env.PORT || 3000,
  prod: !!+env.PROD || false,
  secure: {
    jwtSecret: env.JWT_SECRET || 'secret',
  },
});
