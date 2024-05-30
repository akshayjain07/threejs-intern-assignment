import logo from './logo.svg';
import './App.css';
import RoomScene from './RoomScene';

function App() {
  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <div className="w-4/5 h-4/5 border-4 border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <RoomScene />
      </div>
    </div>
  );
}

export default App;
