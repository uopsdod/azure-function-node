const blob_service = require("./blob.js");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request2.');
    const {data, sensor, sailCourseSlug, sendTime, dataVersion} = req.body;

    const containerName = sailCourseSlug;
    const blobName = sendTime.substring(0, 10);
    const content = JSON.stringify(req.body);
    var res_status;
    await blob_service.execute_new(containerName, blobName, content)
    .then(function(result) {
        res_status = result;
        console.log("Done");
    })
    .catch((e) => console.log(e));

    if (sailCourseSlug) {
        console.log("upload to blob storage for specific courses");
    }else {
        console.log("upload to blob storage for general course");
    }

    var responseMessage = {"result":"done"};

    context.res = {
        status: res_status, 
        body: responseMessage
    };
}