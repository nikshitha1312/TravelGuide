import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CalendarIcon, MapIcon, UserIcon } from '@heroicons/react/24/outline';

function BottomNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
      <div className="flex justify-around items-center p-4">
        <Link to="/dashboard" className={`${location.pathname === '/dashboard' ? 'text-blue-500' : 'text-gray-400'}`}>
          <HomeIcon className="w-6 h-6" />
        </Link>
        <Link to="/itinerary" className={`${location.pathname === '/itinerary' ? 'text-blue-500' : 'text-gray-400'}`}>
          <CalendarIcon className="w-6 h-6" />
        </Link>
        <Link to="/map" className={`${location.pathname === '/map' ? 'text-blue-500' : 'text-gray-400'}`}>
          <MapIcon className="w-6 h-6" />
        </Link>
        <Link to="/profile" className={`${location.pathname === '/profile' ? 'text-blue-500' : 'text-gray-400'}`}>
          <UserIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

export default BottomNav; 