import { defineComponent, onMounted, ref } from "vue"
import Mapboxgl from "mapbox-gl"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

import { LocationMap } from "./interfaces/LocationMap"

Mapboxgl.accessToken =
	"pk.eyJ1IjoiYW5keWJvbGFubyIsImEiOiJjandjNHhvdzkwNWFlNGFvdWVvMjYyajVhIn0.0Bb7Pjf8yJPO5icxbfglyQ"

export default defineComponent({
	name: "CusMap",
	props: {
		location: {
			type: Object as () => LocationMap,
			required: true,
		},
	},

	setup() {
		const mapElement = ref<HTMLDivElement>()

		const initMap = () => {
			if (!mapElement.value) throw new Error("Div Element no exist")

			const map = new Mapboxgl.Map({
				container: mapElement.value,
				style: "mapbox://styles/mapbox/streets-v12",
				center: [-74.063644, 4.624335], //[lng, lat]
				zoom: 5,
			})

			/*
			map.addControl(
				new MapboxGeocoder({
					accessToken: Mapboxgl.accessToken,
					mapboxgl: Mapboxgl,
				})
			)*/

			//initGeoCoder("1600 Amphitheatre Parkway, Mountain View, CA")
		}

		/*const initGeoCoder = (address: string) => {
			const geocoder = new MapboxGeocoder({
				accessToken: Mapboxgl.accessToken,
				mapboxgl: Mapboxgl,
			})

			geocoder.on("result", function (e) {
				const latitud = e.result.center[1]
				const longitud = e.result.center[0]

				console.log("Latitud:", latitud)
				console.log("Longitud:", longitud)
			})

			console.log(address)
			geocoder.query(address)
		}*/

		onMounted(() => {
			initMap()
		})

		return {
			mapElement,
		}
	},
})
