import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="container mx-auto flex">
      <div className="w-1/2 border mx-5 mt-10 p-5">
        <h1>My Mission</h1>
        <p>Place your reserved missions here...</p>
      </div>
      <div className="w-1/2 border mx-5 mt-10 p-5">
        <h1>My Rockets</h1>
        {filteredRockets.map((rocket) => (
          <div key={rocket.id}>{rocket.rocket_name}</div>
        ))}
      </div>
    </div>
  );
}

export default MyProfile;
