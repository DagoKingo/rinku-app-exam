import { createPool, Pool } from 'mysql2/promise';
import * as dotenv from 'dotenv';
dotenv.config();

class Singleton {
  private static instance: Singleton = null;
  private connection: Pool;

  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public getPoolConnection(): Pool {
    if (!this.connection) {
      this.connection = createPool({
        host: process.env.HOST,
        user: process.env.DBUSER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        waitForConnections: true,
        connectionLimit: Number(process.env.POOL_CONECTIONS) || 100,
        dateStrings: true,
      });
    }

    return this.connection;
  }
}

export default Singleton;
