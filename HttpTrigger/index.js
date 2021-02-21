module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request2.');
    const {data, sensor, sailCourseSlug, sendTime, dataVersion} = req.body;

    if (sailCourseSlug) {
        console.log("upload to blob storage for specific courses");
    }else {
        console.log("upload to blob storage for general course");
    }


//    "dataVersion": "http://purl.imsglobal.org/ctx/caliper/v1p1",
//    "sendTime": "2020-09-06T04:00:00.777Z",
//    "sensor": "http://theproject.zone/caliper/",
//    "sailCourseSlug": "f20-15619"

//    var data_array;
//    if (req.body) {
//        data_array = req.body.data;
//    }
    var responseMessage = "res: "
    responseMessage += "\nsensor: " + sensor
    responseMessage += "\nsailCourseSlug: " + sailCourseSlug

//    const name = (req.query.name || (req.body && req.body.name));
//    const responseMessage = name
//        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}