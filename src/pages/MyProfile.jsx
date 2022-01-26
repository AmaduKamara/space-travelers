import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const missions = useSelector((state) => state.missionsData.missions);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved);
  const filteredMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="container mx-auto flex">
      <div className="container mx-auto flex-column mt-5 justify-center">
        <h1 className="w-1/2  mx-5 mt-5 font-bold">My Missions</h1>
        <div className="w-1/2 border rounded mx-5 mt-5 flex-column justify-items-start">

          {filteredMissions.map((mission) => (
            <div key={mission.id} className="border p-5">{mission.mission_name}</div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex-column mt-5">
        <h1 className="w-1/2  mx-5 mt-5 font-bold">My Rockets</h1>
        <div className="w-1/2 border rounded mx-5 mt-5 flex-column justify-items-start">

          {filteredRockets.map((rocket) => (
            <div key={rocket.id} className="border p-5">{rocket.rocket_name}</div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default MyProfile;
