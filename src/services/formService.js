import apiClient from "../config/axios";

const submitApi = "/api/post";
const generateApi = "/api/generate";

const submitForm = async (formData) => {
  try {
    const response = await apiClient.post(submitApi, formData);
    return response?.data;
  } catch (error) {
    console.log("Error submitting form:", error);
    throw error;
  }
};

const generateGPTText = async (prompt) => {
  try {
    const response = await apiClient.post(generateApi, { prompt });
    return response?.data;
  } catch (error) {
    console.log("Error generating GPT text:", error);
    throw error;
  }
};

export { submitForm, generateGPTText };
