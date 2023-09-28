import Conector from '../db/connector.db';

abstract class Controller extends Conector {
  protected async executePoolQuery(
    query: string,
    params?: any[]
  ): Promise<any> {
    try {
      const response = await this.executePoolQueryConnection(query, params);
      return {
        success: true,
        message: 'OK',
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}

export default Controller;
