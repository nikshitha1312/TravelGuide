import { useState } from 'react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';
import AnimatedTransition from '../components/AnimatedTransition';

interface Activity {
  id: string;
  title: string;
  location: string;
  time: string;
  image: string;
  type: 'sightseeing' | 'food' | 'transport' | 'accommodation';
}

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState('27');
  const [selectedTab, setSelectedTab] = useState<'activities' | 'accommodation'>('activities');
  
  const activities: Activity[] = [
    {
      id: '1',
      title: 'Senso-ji Temple',
      location: 'Asakusa, Tokyo',
      time: '9:30 am',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500',
      type: 'sightseeing'
    },
    {
      id: '2',
      title: 'Tokyo Sky Tree',
      location: 'Sumida, Tokyo',
      time: '2:00 pm',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500',
      type: 'sightseeing'
    }
  ];

  const accommodations = [
    {
      id: '1',
      title: 'Shinjuku Prince Hotel',
      location: 'Shinjuku, Tokyo',
      checkIn: '27 Feb, 3:00 PM',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500'
    },
    {
      id: '2',
      title: 'Asakusa View Hotel',
      location: 'Asakusa, Tokyo',
      checkIn: '1 Mar, 2:00 PM',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500'
    }
  ];

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-black text-white pb-20">
        {/* Header */}
        <header className="p-6 bg-gradient-to-b from-gray-900">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
              <p className="text-gray-400">Ready for the trip?</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-orange-500 rounded-full cursor-pointer"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Destination Card */}
          <motion.div 
            className="relative rounded-xl overflow-hidden mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000"
              alt="Tokyo"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
              <h2 className="text-2xl font-bold">TOKYO</h2>
              <p className="text-sm text-gray-300">27/02/2024 - 05/03/2024</p>
            </div>
          </motion.div>

          {/* Flight Details */}
          <motion.div 
            className="bg-blue-600 rounded-xl p-4 mb-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Flight Details</p>
                <p className="font-bold">25/02/2024, 10:50 am</p>
              </div>
              <div className="text-right">
                <p className="font-bold">DEL → NRT</p>
                <p className="text-sm">Delhi to Tokyo, Japan</p>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedTab === 'activities' ? 'bg-blue-600' : 'bg-gray-800'
              }`}
              onClick={() => setSelectedTab('activities')}
            >
              Activities
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedTab === 'accommodation' ? 'bg-blue-600' : 'bg-gray-800'
              }`}
              onClick={() => setSelectedTab('accommodation')}
            >
              Accommodation
            </button>
          </div>

          {selectedTab === 'activities' ? (
            <>
              {/* Date Selector */}
              <div className="flex space-x-4 mb-6 overflow-x-auto">
                {['26', '27', '28', '29', '30'].map((date) => (
                  <motion.button
                    key={date}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg ${
                      selectedDate === date ? 'bg-blue-600' : 'bg-gray-800'
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date}
                  </motion.button>
                ))}
              </div>

              {/* Activity List */}
              <div className="space-y-4">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    className="bg-gray-800 rounded-xl p-4 flex items-center space-x-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{activity.title}</h4>
                      <p className="text-sm text-gray-400">{activity.location}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-4">
              {accommodations.map((hotel) => (
                <motion.div
                  key={hotel.id}
                  className="bg-gray-800 rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-40 rounded-lg object-cover mb-4"
                  />
                  <h4 className="font-bold">{hotel.title}</h4>
                  <p className="text-sm text-gray-400">{hotel.location}</p>
                  <p className="text-sm text-gray-400">Check-in: {hotel.checkIn}</p>
                </motion.div>
              ))}
            </div>
          )}
        </main>

        <BottomNav />
      </div>
    </AnimatedTransition>
  );
}

export default Dashboard; 