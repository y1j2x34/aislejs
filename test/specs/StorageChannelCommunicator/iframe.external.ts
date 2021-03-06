import { Channel, StorageChannelCommunicator } from '../../../src';
import { CHANNEL_ID } from './common';

const channel = new Channel(CHANNEL_ID, new StorageChannelCommunicator(localStorage, CHANNEL_ID));

channel.lmethod('hello', () => 'world');

channel.lmethod('receive-buffer', (arr: Uint8Array) => {
    return arr.length === 16 && arr instanceof Uint8Array && !arr.some(it => it !== 0xf0);
});
channel.lmethod('get-coverage', () => {
    return __coverage__;
});
channel.lmethod('callback', <T>(data: T, callback: (data) => void) => {
    callback(data);
});
