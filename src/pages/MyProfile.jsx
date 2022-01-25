import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="container mx-auto">
      <div>
        <h1>My Rockets</h1>
        {filteredRockets.map((rocket) => (
          <div key={rocket.id}>{rocket.rocket_name}</div>
        ))}
      </div>
    </div>
  );
}

export default MyProfile;
