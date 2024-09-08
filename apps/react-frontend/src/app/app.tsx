import { Route, Routes } from 'react-router-dom';
import { View } from '@experiments/model-hook-state';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<View />} />
    </Routes>
  );
}

export default App;
