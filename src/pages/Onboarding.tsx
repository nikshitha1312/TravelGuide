import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [destination, setDestination] = useState('tokyo'); // Set default value
  const [duration, setDuration] = useState('');
  const [groupType, setGroupType] = useState('');

  const destinations = [
    { value: 'tokyo', label: 'Tokyo, Japan' },
    { value: 'bali', label: 'Bali, Indonesia' },
    { value: 'seoul', label: 'Seoul, South Korea' },
    { value: 'bangkok', label: 'Bangkok, Thailand' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'dubai', label: 'Dubai, UAE' },
    { value: 'paris', label: 'Paris, France' },
    { value: 'newyork', label: 'New York, USA' },
    { value: 'london', label: 'London, UK' },
    { value: 'sydney', label: 'Sydney, Australia' }
  ];

  const handleContinue = () => {
    if (userName && destination && duration && groupType) {
      // Store user selections in localStorage
      localStorage.setItem('userData', JSON.stringify({
        name: userName,
        destination,
        duration,
        groupType,
        dateSelected: new Date().toISOString()
      }));
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto pt-12">
        <h1 className="text-2xl font-bold mb-2">Plan Your Journey, Your Way!</h1>
        <p className="text-gray-400 mb-8">Let's create your personalized travel experience</p>

        <div className="space-y-6">
          <div>
            <label className="block mb-2">What's your name?</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2">Where would you like to go?</label>
            <select
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              {destinations.map((dest) => (
                <option key={dest.value} value={dest.value}>
                  {dest.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">How long will you stay?</label>
            <select
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">Select Duration</option>
              <option value="3-5">3-5 days</option>
              <option value="6-10">6-10 days</option>
              <option value="11-15">11-15 days</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Who are you traveling with?</label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { type: 'solo', label: 'Solo' },
                { type: 'couple', label: 'Couple' },
                { type: 'family', label: 'Family' },
                { type: 'friends', label: 'Friends' }
              ].map((option) => (
                <button
                  key={option.type}
                  className={`p-3 rounded-lg ${
                    groupType === option.type ? 'bg-blue-600' : 'bg-gray-800'
                  }`}
                  onClick={() => setGroupType(option.type)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-8"
            onClick={handleContinue}
            disabled={!userName || !destination || !duration || !groupType}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding; 