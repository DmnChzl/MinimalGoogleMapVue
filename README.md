[![npm](https://img.shields.io/npm/v/@mrdoomy/mnml-gmap-vue.svg)](https://github.com/mrdoomy/minimalgooglemapvue) [![minified size](https://img.shields.io/bundlephobia/min/@mrdoomy/mnml-gmap-vue.svg)](https://www.npmjs.com/package/@mrdoomy/mnml-gmap-vue) [![beerware](https://img.shields.io/badge/license-beerware-orange.svg)](https://wikipedia.org/wiki/beerware)

# Minimal Google Map

**[@mrdoomy](https://www.mrdoomy.xyz)/mnml-gmap-vue** is a **Vue** component to simply inject [Google Maps](https://maps.google.com) 🌍 inside your projet.

This library is published under the Beerware license, which means you can do whatever you want with the code.

This project is powered by [ViteJS](https://vitejs.dev).

## How To Use

First of all, you need to install the package:

```
  npm install @mrdoomy/mnml-gmap-vue
```

<details>
  <summary>Equivalent with Yarn</summary>
  
  ```
    yarn add @mrdoomy/mnml-gmap-vue
  ```
</details>
<br>

Then, use the component as these samples below:

```vue
  <template>
    <div class="container">
      <GMap
        :apiKey="apiKey"
        :defaultCenter="location"
        :defaultZoom="5"
      />
    </div>
  </template>

  <script>
  import { GMap } from '@mrdoomy/mnml-gmap-vue';

  /**
   * The 'keyke' (Key + Fake = Cake) is a lie
   * NB: Worst pun ever; i know that...
   */
  const API_KEY = 'YLzo6G7hJxAg55x/EvkEaPTvoO/PhQ9ASxzZ5A6OsNJLE4dxq+zK2lJ5Ta7/z5bbtQ9C2f2jDRRW6JyUArVIpQ==';
  const EIFFEL_TOWER = { lat: 48.8619, lng: 2.2945 };

  export default {
    components: {
      GMap
    },
    computed: {
      apiKey: () => API_KEY
    },
    data() {
      return {
        location: { lat: EIFFEL_TOWER.lat, lng: EIFFEL_TOWER.lng }
      };
    }
  };
  </script>
```

<details>
  <summary>More options are also available</summary>
  
  ```vue
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

    <script>
    import { GMap } from '@mrdoomy/mnml-gmap-vue';
    import styleArray from './styleArray';

    const API_KEY = 'YLzo6G7hJxAg55x/EvkEaPTvoO/PhQ9ASxzZ5A6OsNJLE4dxq+zK2lJ5Ta7/z5bbtQ9C2f2jDRRW6JyUArVIpQ==';
    const EIFFEL_TOWER = { lat: 48.8619, lng: 2.2945 };
    const BIG_BEN = { lat: 51.5021, lng: -0.1242 };
    const COLISEUM = { lat: 41.8961, lng: 12.4879 };

    export default {
      components: {
        GMap
      },
      computed: {
        apiKey: () => API_KEY,
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
    };
    </script>
  ```
</details>
<br>

### Important

You need to create a account on [cloud.google.com](https://console.cloud.google.com), and generate an `API_KEY`, to use **Google Maps** API (and so this component).

## Local Development

If you want more,

You can clone the project:

```
git clone https://github.com/mrdoomy/minimalgooglemapvue.git
```

Install dependencies:

```
yarn install
```

Develop locally:

```
yarn dev
```

Run all unit tests:

```
yarn test
```

And finally compile the project:

```
yarn build
```

Enjoy 👍

## License

```
"THE BEER-WARE LICENSE" (Revision 42):
<phk@FreeBSD.ORG> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return. Damien Chazoule
```
