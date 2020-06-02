'use strict';

// [START redis_quickstart]
/**
 * List instances in a given location.
 * @param {string} project.
 * @param {string} location, e.g., us-east-1.
 */
async function main(projectId, location) {
  const {CloudRedisClient} = require('@google-cloud/redis');
  const client = new CloudRedisClient();
  const formattedParent = client.locationPath(projectId, location);
  const request = {
    parent: formattedParent,
  };
  const resp = (await client.listInstances(request))[0];
  console.info(resp);
}
// [END redis_quickstart]

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
