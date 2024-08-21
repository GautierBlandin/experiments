import { Route, Routes, Link } from 'react-router-dom';
import { SimplePage } from '@experiments/lib-hook-store';

export function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<SimplePage />} />
      </Routes>
    </div>
  );
}

export default App;
