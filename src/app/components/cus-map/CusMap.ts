import { defineComponent, onMounted, ref, watch } from "vue"
import Mapboxgl from "mapbox-gl"

import { LocationMap } from "./interfaces/LocationMap"

Mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN

const locationDefault = {
	lng: -74.063644,
	lat: 4.624335,
}

export default defineComponent({
	name: "CusMap",
	props: {
		location: {
			type: Object as () => LocationMap,
			required: false,
			default: () => ({
				lng: locationDefault.lng,
				lat: locationDefault.lat,
			}),
		},
	},

	setup(props) {
		const mapElement = ref<HTMLDivElement>()
		let map: Mapboxgl.Map | null = null
		let marker: Mapboxgl.Marker | null = null

		const initMap = () => {
			if (!mapElement.value) throw new Error("Div Element no exist")
			const { lng, lat } = parseLocation(props.location)
			map = new Mapboxgl.Map({
				container: mapElement.value,
				style: "mapbox://styles/mapbox/streets-v12",
				center: [lng, lat],
				zoom: 5,
			})

			addMarker(props.location)
		}

		const addMarker = (location: LocationMap) => {
			if (!map) {
				return
			}

			if (marker) {
				marker.remove()
			}

			flyTo(location)

			const { lng, lat } = parseLocation(location)
			marker = new Mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
		}

		const flyTo = (location: LocationMap) => {
			if (!map) {
				return
			}

			map.flyTo({
				center: parseLocation(location),
				zoom: 14,
			})
		}

		const parseLocation = (location: LocationMap): LocationMap => {
			return {
				lng: location.lng || locationDefault.lng,
				lat: location.lat || locationDefault.lat,
			}
		}

		onMounted(() => {
			initMap()
		})

		watch(
			() => props.location,
			() => {
				if (!props.location) {
					return
				}
				addMarker(props.location)
			}
		)

		return {
			mapElement,
		}
	},
})
