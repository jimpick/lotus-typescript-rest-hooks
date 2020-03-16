import {
  Resource,
  Method,
} from 'rest-hooks';

export default class VersionResource extends Resource {
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
        return this.fetch('post', 'https://lotus.testground.ipfs.team/api/0/node/rpc/v0', body);
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
    const jsonResponse = await super.fetch(method, url, body)
    const {
      Version: version,
      APIVersion: apiVersion,
      BlockDelay: blockDelay,
    } = JSON.parse(jsonResponse).result
    return {version, apiVersion, blockDelay}
  }
}