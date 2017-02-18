import fs from 'fs';
import mysql from 'mysql';
import {resolve} from 'path';

const mysqlrc = fs.readFileSync(resolve('.mysqlrc'));

export const connection = mysql.createConnection(JSON.parse(mysqlrc));
