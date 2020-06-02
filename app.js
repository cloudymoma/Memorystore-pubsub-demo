const PubSub = require('./pubsub');
const CHANNELS = require('./channels');

const testPubSub = new PubSub();

for(let i=0;i<100;i++){
setTimeout(() => testPubSub.publisher.publish(CHANNELS.name, 'message '+i), 1000);
testPubSub.subscriber.subscribe(CHANNELS.name);
};
