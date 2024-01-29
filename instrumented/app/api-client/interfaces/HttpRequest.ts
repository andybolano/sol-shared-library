import axios, { AxiosRequestConfig } from "axios"
import { AxiosResponse } from "axios"

interface IHttpMethods {
	get<T>(url: string, conf?: AxiosRequestConfig): Promise<AxiosResponse<T>>
	post<T, Y>(
		url: string,
		data: Y,
		conf?: AxiosRequestConfig
	): Promise<AxiosResponse<T>>
	patch<T, Y>(
		url: string,
		data: Y,
		conf?: AxiosRequestConfig
	): Promise<AxiosResponse<T>>
}

export interface IHttpRequest {
	api: ReturnType<typeof axios.create>
	get: IHttpMethods["get"]
	post: IHttpMethods["post"]
	patch: IHttpMethods["patch"]
}
