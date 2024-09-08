import { Route, Routes } from 'react-router-dom';
import { Page } from '@experiments/model-hook-state';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  );
}

export default App;
