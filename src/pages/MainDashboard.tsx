import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { destinationData } from '../data/destinationData';

function MainDashboard() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('27');
  const [activeTab, setActiveTab] = useState('activities');
  const [userData, setUserData] = useState<any>(null);
  const [destinationInfo, setDestinationInfo] = useState<any>(null);

  useEffect(() => {
    // Set default data if nothing in localStorage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      setDestinationInfo(destinationData[parsedData.destination || 'tokyo']);
    } else {
      // Set default data
      const defaultData = {
        name: 'Guest',
        destination: 'tokyo',
        duration: '6-10',
        groupType: 'solo'
      };
      setUserData(defaultData);
      setDestinationInfo(destinationData['tokyo']);
      localStorage.setItem('userData', JSON.stringify(defaultData));
    }
  }, []);

  // Add a loading state with better UI
  if (!userData || !destinationInfo) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl mb-4">Loading your travel plans...</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-400 underline"
          >
            Return to Onboarding
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-lg">Hello {userData.name}!</h1>
            <p className="text-sm text-gray-400">Ready for the trip?</p>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>

        {/* Destination Banner */}
        <div className="relative rounded-xl overflow-hidden mb-4 h-48">
          <img
            src={destinationInfo.image}
            alt={destinationInfo.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80">
            <h2 className="text-2xl font-bold">{destinationInfo.name}</h2>
            <p className="text-sm text-gray-300">27/02/2024 - 05/03/2024</p>
          </div>
        </div>

        {/* Flight Details */}
        <div className="bg-blue-600 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Flight Details</p>
              <p className="font-semibold">26/01/2024, 10:50 am</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{destinationInfo.flight.from} → {destinationInfo.flight.to}</p>
              <p className="text-sm opacity-80">Delhi to {destinationInfo.flight.city}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'activities' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            Activities
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'hotels' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            Hotels
          </button>
        </div>

        {activeTab === 'activities' ? (
          <>
            {/* Date Selector */}
            <div className="flex space-x-3 mb-4 overflow-x-auto py-2">
              {['26', '27', '28', '29', '30'].map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`min-w-[40px] h-10 rounded-full flex items-center justify-center ${
                    selectedDate === date 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            {/* Activity Cards */}
            <div className="space-y-3">
              {destinationInfo.activities.map((activity: any) => (
                <div
                  key={activity.id}
                  className="bg-gray-900 rounded-xl p-3 flex items-center space-x-3"
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{activity.title}</h4>
                    <p className="text-sm text-gray-400">{activity.location}</p>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Hotels View */
          <div className="space-y-4">
            {destinationInfo.hotels.map((hotel: any, index: number) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{hotel.name}</h3>
                  <p className="text-gray-400">{hotel.location}</p>
                  <p className="text-blue-400 mt-2">{hotel.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainDashboard;