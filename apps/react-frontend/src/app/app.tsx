import { Route, Routes } from 'react-router-dom';
import { FunctionalUseStatePage, ValtioPage, ZustandPage } from '@experiments/model-hook-state';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ValtioPage />} />
      <Route path="/valtio" element={<ValtioPage />} />
      <Route path="/functional" element={<FunctionalUseStatePage />} />
      <Route path="/zustand" element={<ZustandPage />} />
    </Routes>
  );
}

export default App;
