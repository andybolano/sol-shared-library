import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { requestParams } from "./config/request-params"
import { createAxiosInstance } from "./config/axios-config"
import { authInterceptor, errorInterceptor } from "./config/interceptors"

type IConfig = AxiosRequestConfig

//TODO share class type https://github.com/jherr/mf-five-mistakes
class HttpRequest {
	api: ReturnType<typeof axios.create>

	constructor(api: ReturnType<typeof axios.create>) {
		this.api = api
	}

	async get<T>(url: string, conf?: IConfig): Promise<AxiosResponse<T>> {
		try {
			const response = await this.api.get<T>(url, conf)
			return response
		} catch (error) {
			return Promise.reject(error)
		}
	}

	async post<T, Y>(
		url: string,
		data: Y,
		conf?: IConfig
	): Promise<AxiosResponse<T>> {
		try {
			const response = await this.api.post<T>(url, data, conf)
			return response
		} catch (error) {
			return Promise.reject(error)
		}
	}

	async patch<T, Y>(
		url: string,
		data: Y,
		conf?: IConfig
	): Promise<AxiosResponse<T>> {
		try {
			const response = await this.api.patch<T>(url, data, conf) //TODO add type Y
			return response
		} catch (error) {
			return Promise.reject(error)
		}
	}
}

const serverApi = createAxiosInstance(requestParams.server.url)
serverApi.interceptors.request.use((config) =>
	authInterceptor(config, requestParams.server.access_token)
)

serverApi.interceptors.response.use(
	(response) => response.data,
	errorInterceptor
)

export const httpClient = new HttpRequest(serverApi)

const mapApi = createAxiosInstance(requestParams.mapbox.url)
mapApi.interceptors.request.use((config) =>
	authInterceptor(config, requestParams.mapbox.access_token)
)
mapApi.interceptors.response.use((response) => response.data, errorInterceptor)

export const httpClientMap = new HttpRequest(mapApi)
