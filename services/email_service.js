const { email: Email } = require("../models/email");

exports.addemail = async (payload) => {
  try {
    // Parse JSON data from the 'data' property in the payload
    const dataArray = JSON.parse(payload.data);
    console.log(dataArray);
    // Create an array to store email documents
    const emailDocuments = [];

    // Iterate through each entry in the dataArray and create email documents
    dataArray.forEach(([from, subject]) => {
      const emailDocument = new Email({
        from,
        subject,
      });
      emailDocuments.push(emailDocument);
    });

    console.log(emailDocuments);
    // Save all email documents to MongoDB
    console.log("Before insertMany");
    const savedEmails = await Email.insertMany(emailDocuments);
    console.log("After insertMany");

    console.log("Emails saved successfully:", savedEmails);
  } catch (error) {
    console.error("Error saving emails to MongoDB:", error);
    // Handle the error as needed
  }
};
