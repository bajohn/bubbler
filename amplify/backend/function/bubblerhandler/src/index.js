/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

let response;

exports.handler = async (event, context) => {
    console.log({event, context})
    try {
        response = "Test response";
    } catch (err) {
        console.log({err})
        console.log(err);
        return err;
    }

    return response
};