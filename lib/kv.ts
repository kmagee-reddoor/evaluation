import { Redis } from '@upstash/redis';


class Kv extends Redis {
  private static _instance?: Redis

  constructor() {
    if (Kv._instance) {
      return Kv._instance;
    }

    super({
      url: process.env.KV_REST_API_URL || '',
      token: process.env.KV_REST_API_TOKEN || '',
    });
    
    Kv._instance = this;
  }

}

const kv = new Kv();

// Always export only the single instance
export default kv;
