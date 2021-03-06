import dotenv from 'dotenv';
import * as AWS from 'aws-sdk';

dotenv.config();

const region = process.env.AWS_DEFAULT_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

export const db = (): any => {
  AWS.config.update({
    region,
    accessKeyId,
    secretAccessKey,
  });

  const dynamoClient = new AWS.DynamoDB.DocumentClient();

  return dynamoClient;
};
