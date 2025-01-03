// v1/functions/hello-world.js
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, World!" })
    };
};
