import type { RequestParams } from "../interfaces/RequestParams"

export const requestParams: RequestParams = {
	mapbox: {
		url: process.env.VUE_APP_MAPBOX_URL || "",
		access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN || "",
	},
	server: {
		url: process.env.VUE_APP_API_SERVER_URL || "",
		access_token: process.env.VUE_APP_SERVER_ACCESS_TOKEN || "",
	},
}
