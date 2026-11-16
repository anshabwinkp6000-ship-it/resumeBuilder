
import axiosInstance from "./axiosinstance";

export const apiService = async (httpmethod, url, reqBody) => {

    const reqConfig = {
        method: httpmethod,
        url,
        data: reqBody
    }

    try {
        const res = await axiosInstance(reqConfig)
        return res

    } catch (err) {
        throw err
    }
}
