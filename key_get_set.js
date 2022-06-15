var redis = require("redis");
var client = redis.createClient();

client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

// single value write & read
client.set("my_key", "Hello World!");
client.get("my_key", function (err, reply) {
  if (err) console.log(err);
  console.log(reply);
});
// multiple value write & read
client.mSet("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);
client.mGet(
  ["header", "left", "article", "right", "footer"],
  function (err, value) {
    if (err) console.log(err);
    console.log(value);
  }
);

client.quit();
