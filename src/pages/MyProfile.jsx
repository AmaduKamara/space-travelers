import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="container mx-auto flex">
      <div className="w-1/2 mx-5 mt-10 p-5">
        <h1 className="mb-4 text-xl font-semibold">My Mission</h1>
        <p>Place your reserved missions here...</p>
      </div>
      <div className="w-1/2 mx-5 mt-10 pt-5">
        <h1 className="mb-4 text-xl font-semibold">My Rockets</h1>
        {filteredRockets.map((rocket) => (
          <div key={rocket.id} className="border px-6 py-5">
            {rocket.rocket_name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProfile;
