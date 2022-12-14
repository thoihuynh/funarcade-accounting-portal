import lazyload from 'utils/loadable';
import { HEADER_HEIGHT } from 'styles/variables';

export default lazyload(() => import('./index'), {
  fallback: (
    <div
      style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'var(--global--background-color)',
      }}
    />
  ),
});
