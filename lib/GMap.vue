<template>
  <div id="mnml-gmap" ref="gMapRef" />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue';

interface LatLng {
  lat: number;
  lng: number;
  onClick?: () => void;
}

interface ColorStyler {
  color: string;
}

interface LightStyler {
  lightness: number;
}

interface SaturationStyler {
  saturation: number;
}

interface VisibilityStyler {
  visibility: string;
}

interface WeightStyler {
  weight: number;
}

type Styler = ColorStyler | LightStyler | SaturationStyler | VisibilityStyler | WeightStyler;

interface StyledMap {
  featureType?: string;
  elementType?: string;
  stylers: Styler[];
}

export default defineComponent({
  name: 'GMap',
  props: {
    apiKey: String,
    defaultCenter: {
      type: Object as PropType<LatLng>,
      default: () => ({ lat: 0, lng: 0 })
    },
    defaultZoom: {
      type: Number,
      default: 10
    },
    enableUI: {
      type: Boolean,
      default: false
    },
    markers: {
      type: Array as PropType<LatLng[]>,
      default: () => []
    },
    styledMap: {
      type: Array as PropType<StyledMap[]>,
      default: () => []
    }
  },
  setup(props) {
    const gMapRef = ref(null);

    const createMap = (divElement: HTMLDivElement) => {
      const map = new google.maps.Map(divElement, {
        center: {
          lat: props.defaultCenter.lat,
          lng: props.defaultCenter.lng
        },
        zoom: props.defaultZoom,
        disableDefaultUI: !props.enableUI
      });

      if (props.styledMap.length > 0) {
        const styledMapType = new google.maps.StyledMapType(props.styledMap);
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }

      return map;
    };

    // prettier-ignore
    const initMarker = (map: google.maps.Map) => ({ lat, lng }: LatLng) => {
      return new google.maps.Marker({
        position: { lat, lng },
        map
      });
    };

    onMounted(() => {
      if (props.apiKey) {
        const mapScript = document.createElement('script');
        mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${props.apiKey}`;
        mapScript.async = true;
        window.document.body.appendChild(mapScript);

        mapScript.addEventListener('load', () => {
          if (gMapRef.value !== null) {
            const gMap = createMap(gMapRef.value);
            const createMarker = initMarker(gMap);

            props.markers.forEach(({ lat, lng, onClick }) => {
              const marker = createMarker({ lat, lng });

              if (onClick) {
                marker.addListener('click', onClick);
              }
            });
          }
        });
      }

      if (gMapRef.value !== null) {
        gMapRef.value.style.height = '100%';
      }
    });

    return {
      gMapRef
    };
  }
});
</script>
