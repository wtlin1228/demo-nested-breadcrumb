import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterRoot } from './router';

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterRoot />
    </StrictMode>,
  );
}
