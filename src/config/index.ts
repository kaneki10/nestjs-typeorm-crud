import * as dotenv from 'dotenv';

import { IConfig } from './config.interface';

dotenv.config();

export default (): IConfig => ({
  port: parseInt(process.env.PORT, 10) || 8000,

  mailer: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: process.env.HOST,
  },

  database: {
    host: process.env.DB_HOST,
    type: process.env.DB_TYPE,
    name: 'default',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    //remove after adding migrations
    synchronize: true,

    //set true for auto run before everu launch server
    migrationsRun: false,

    logging: false,
    autoLoadEntities: true,
    entities: ['./dist/**/*.entity.js'],
    // migrations: ['dist/migrations/scripts/*.js'],
    // cli: {
    //   migrationsDir: 'src/migrations/scripts',
    // },
  },

  //   awsS3: {
  //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //     region: process.env.AWS_REGION,
  //     bucket: process.env.AWS_BUCKET,
  //     acl: process.env.AWS_ACL,
  //   },

  jwt: {
    accessTokenExpiration: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    refreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  },

  newPasswordBytes: 4,
  codeBytes: 2,
});
