import { render } from '@testing-library/vue';
import GMap from '../GMap.vue';

const API_KEY = 'YLzo6G7hJxAg55x/EvkEaPTvoO/PhQ9ASxzZ5A6OsNJLE4dxq+zK2lJ5Ta7/z5bbtQ9C2f2jDRRW6JyUArVIpQ==';

describe('<GMap />', () => {
  it('Should Match Snapshot', () => {
    const { container } = render(GMap, { props: { apiKey: API_KEY } });
    expect(container).toMatchSnapshot();
  });

  it('Should Renders MNML Element', () => {
    const { container } = render(GMap, { props: { apiKey: API_KEY } });
    expect(container.querySelector('#mnml-gmap')).toBeInTheDocument();
  });
});
