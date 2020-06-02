# MemoryStore for Redis pubsub demo

## Provision

1. Create MemoryStore for Redis deployment in GCP console

2. View the service information

```
gcloud redis instances describe my-redis --region=us-central1
```

3. Make notes of the IP address along with port number

```
host: xx.xx.xx.xx
port: xxxx
connectMode: DIRECT_PEERING
```

4. By default Memorystore provides direct peering.When using the direct peering mode, Memorystore creates a VPC peering between the customer VPC network and the VPC network in the Google managed project. So you could create GCE to access the Memorystore for Redis. Please go to [Memorystore networking](https://cloud.google.com/memorystore/docs/redis/networking) to have more information.

5. Set up the authentication on the GCE when necessary

```
export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
```

## Run the demo

1. Google Cloud does not provide offical Redis driver for CRUD and other data operations. But Google Cloud does provide the official [driver](https://cloud.google.com/memorystore/docs/redis/apis) for Memorystore management.

2. In the demo, the standard Node.js driver for Redis is used. The demo gives the basic idea how pubsub functionality works in Memorystore for Redis.

3. Prepare the node.js enviroment by using [nvm](https://github.com/nvm-sh/nvm), and run the demo as below.

```
npm install
Change pubsub.js to specify the host and port for the Memorystore for Redis
node app.js
```

4. Also, Redis tools provies command line tool for pubsub as well.

```
redis-cli -h xx.xx.xx.xx -p xxxx
>publish channel:test "hello,test"
>subscribe channel:test
```

5. The demo is originally from this [github](https://github.com/andreimititelu/node-pubsub-redis), and is changed for the demo.

