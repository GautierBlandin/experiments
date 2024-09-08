import { Route, Routes } from 'react-router-dom';
import { ValtioPage } from '@experiments/model-hook-state';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ValtioPage />} />
    </Routes>
  );
}

export default App;
