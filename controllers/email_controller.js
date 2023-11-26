const { addemail, useremail } = require("../services/email_service");
const { ErrorResponse, SuccessResponse } = require("../utils/response");

exports.AddEmail = async (req, res) => {
  try {
    const add_email = await addemail(req.body);
    return SuccessResponse(res, 201, {
      message: "Email Added.",
      budget: add_email,
    });
  } catch (e) {
    return ErrorResponse(res, 400, e.message);
  }
};
