import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import MainDashboard from './pages/MainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
    </Router>
  );
}

export default App; 