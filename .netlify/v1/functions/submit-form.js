// v1/functions/submit-form.js
exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    const formData = JSON.parse(event.body);

    console.log("Form Data:", formData);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submission successful!" })
    };
};
