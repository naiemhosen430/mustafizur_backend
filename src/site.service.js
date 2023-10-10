import siteModel from "./site.model.js";

export const loginService = async (email) => {
  const result = await siteModel.findOne({ email: email });
  return result;
};
