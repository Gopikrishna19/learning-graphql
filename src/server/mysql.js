import fs from 'fs';
import mysql from 'mysql';
import {resolve} from 'path';

const mysqlrc = fs.readFileSync(resolve('.mysqlrc'));

const connection = mysql.createConnection(JSON.parse(mysqlrc));

export const dbConnect = () => new Promise((resolve, reject) => {
  connection.connect(err => {
    if (err) {
      reject(err);
    } else {
      resolve(connection);
    }
  });
});
