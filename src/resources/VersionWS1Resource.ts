import {
  Resource,
  Method,
} from 'rest-hooks';

export default class VersionWS1Resource extends Resource {
  readonly version: string = '';
  readonly apiVersion: number = 0;
  readonly blockDelay: number = 0;
  static currentShape<T extends typeof Resource>(this: T) {
    return {
      ...this.detailShape(),
      getFetchKey: () => {
        return 'version';
      },
      fetch: () => {
        const body = {
          jsonrpc: "2.0",
          method: "Filecoin.Version",
          params: [],
          id: 1
        }
        return this.fetch('post', 'wss://lotus.testground.ipfs.team/api/0/node/rpc/v0', body);
      },
    };
  }
  pk() {
    return 'version';
  }
  static async fetch(
    method: Method = 'post',
    url: string,
    body?: Readonly<object | string>,
  ) {
    const ws = new WebSocket(url)
    const promise = new Promise((resolve, reject) => {
      ws.onopen = function () {
        ws.send(JSON.stringify(body))
      }
      ws.onmessage = function (event) {
        try {
          ws.close()
          const {
            Version: version,
            APIVersion: apiVersion,
            BlockDelay: blockDelay,
          } = JSON.parse(event.data).result
          resolve({ version, apiVersion, blockDelay })
        } catch (e) {
          console.error(e)
          reject(e)
        }
      }
    })
    return await promise
  }
}