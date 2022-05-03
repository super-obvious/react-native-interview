import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export const request = async <T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return axios.request<T>(options);
};
