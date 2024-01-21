import axios, { AxiosRequestConfig } from "axios"

const requestConfig: AxiosRequestConfig = {
	headers: {
		accept: "application/json",
	},
}

export const createAxiosInstance = (baseURL: string) => {
	return axios.create({ ...requestConfig, baseURL })
}
