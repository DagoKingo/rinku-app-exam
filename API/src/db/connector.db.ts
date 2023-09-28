import { Pool } from 'mysql2/promise';
import Singleton from './singleton';

abstract class Connector {
  protected getPoolConnection(): Pool {
    return Singleton.getInstance().getPoolConnection();
  }

  protected async executePoolQueryConnection(
    query: string,
    params: Array<any> = []
  ): Promise<Array<any>> {
    const pool = this.getPoolConnection();
    const [rows] = await pool.execute(query, params);
    return rows[0];
  }
}

export default Connector;
