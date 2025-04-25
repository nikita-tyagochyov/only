import { createRoot } from 'react-dom/client';

import { App } from './ui';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
