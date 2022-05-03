import { request } from "../axios";

const endpoint = "https://api.agify.io/";

type AgifyResponse = {
    name: string;
    age: number;
    count: number;
}

export const requestAge = async (name: string): Promise<AgifyResponse> => {
    const axiosResponse = await request<AgifyResponse>({ url: endpoint, method: "GET", params: { name } });
    return axiosResponse.data;
}