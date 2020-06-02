const redis = require('redis');

class PubSub {
	constructor() {
		this.publisher = redis.createClient(xxxx,'xx.xx.xx.xx');
		this.subscriber = redis.createClient(xxxx,'xx.xx.xx.xx');

		this.publisher.on('error', (error) => this.handleError(error));
		this.subscriber.on('message', (channel, message) => this.handleMessage(channel, message));
		this.subscriber.on('error', (error) => this.handleError(error));

	}

	handleMessage(channel, message) {
		console.log(`Message received: ${channel} ${message}`);
	}

	handleError(error) {
		console.log(`Error ${error}`);
	}

	subscribeToChannels(channels) {
		Object.values(channels).forEach((channel) => {
			this.subscriber.subscribe(channel);
		});
	}

	publish({ channel, message }) {
		this.publisher.publish(channel, message);
    }
    
	subscribe(channel) {
		this.subscriber.subscribe(channel);
	}
}

module.exports = PubSub;
