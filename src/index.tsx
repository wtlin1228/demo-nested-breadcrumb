import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { RouterRoot } from './router';
import { ThemeProvider } from './theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider>
        <RouterRoot />
      </ThemeProvider>
    </StrictMode>,
  );
}
