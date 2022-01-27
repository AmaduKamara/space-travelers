import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../../redux/Missions/missions';
import Mission from './Mission';
import MissionTableHead from './MissionTableHead';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer.missions);

  const missionHandler = (e) => {
    const elementId = e.target.id;
    dispatch(joinMission(elementId));
  };

  return (
    <>
      <div className="flex flex-col mb-16">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border">
                <MissionTableHead />
                {missions.map((items) => {
                  const {
                    mission_id: missionID,
                    mission_name: missionName,
                    description,
                    reserved,
                  } = items;
                  return (
                    <Mission
                      key={missionID}
                      id={missionID}
                      description={description}
                      reserved={reserved}
                      missionName={missionName}
                      toggleMission={missionHandler}
                    />
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Missions;
