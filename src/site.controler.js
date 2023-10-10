import { loginService } from "./site.service.js";

export const siteCreateControler = async (req, res) => {
  try {
    const data = await loginService(req.email);

    res.statusCode(200).json({
      statusCode: 200,
      message: "success",
      data,
    });
  } catch (error) {}
};
