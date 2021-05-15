<template>
  <div class="container">
    <GMap
      :apiKey="apiKey"
      :defaultCenter="location"
      :defaultZoom="5"
      :markers="markers"
      :styledMap="styleArray"
      :enableUI="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GMap } from '../lib';
import styleArray from './styleArray';

const API_KEY = import.meta.env.VITE_API_KEY;
const EIFFEL_TOWER = { lat: 48.8619, lng: 2.2945 };
const BIG_BEN = { lat: 51.5021, lng: -0.1242 };
const COLISEUM = { lat: 41.8961, lng: 12.4879 };

export default defineComponent({
  name: 'App',
  components: {
    GMap
  },
  mounted() {
    console.log('App Is Running...');
  },
  computed: {
    apiKey: () => `${API_KEY}`,
    styleArray: () => styleArray
  },
  data() {
    return {
      location: { lat: EIFFEL_TOWER.lat, lng: EIFFEL_TOWER.lng },
      markers: [
        {
          ...EIFFEL_TOWER,
          onClick: () => console.log('Eiffel Tower')
        },
        {
          ...BIG_BEN,
          onClick: () => console.log('Big Ben')
        },
        {
          ...COLISEUM,
          onClick: () => console.log('Coliseum')
        }
      ]
    };
  }
});
</script>

<style>
.container {
  height: calc(100vh - 1rem);
  width: calc(100vw - 1rem);
}
</style>
