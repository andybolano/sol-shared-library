import { AxiosError, InternalAxiosRequestConfig } from "axios"

export const authInterceptor = (
	config: InternalAxiosRequestConfig<any>,
	token: string
) => {
	config.headers.access_token = token
	return config
}

export const errorInterceptor = (error: AxiosError) => Promise.reject(error)
