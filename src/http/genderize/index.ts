import { request } from "../axios";

const endpoint = "https://api.genderize.io/";

type GenderizeResponse = {
    name: string;
    gender: string;
    probability: number;
    count: number;
}

export const requestGender = async (name: string): Promise<GenderizeResponse> => {
    const axiosResponse = await request<GenderizeResponse>({ url: endpoint, method: "GET", params: { name } })
    return axiosResponse.data
}