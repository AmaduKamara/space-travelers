import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/Missions/missions';
import Mission from './Mission';
import spinner from '../../Images/spinner.gif';

const Missions = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.missionsData);
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Mission
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Description
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Status
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      {' '}
                    </th>
                  </tr>
                </thead>
                {selector.isLoading ? (
                  <span>
                    <img src={spinner} alt="spinner" />
                    {' '}
                    Loading ...
                  </span>
                ) : (selector.missions.map((items) => {
                  const { mission_id: missionID, mission_name: missionName, description } = items;
                  return (
                    <Mission
                      key={missionID}
                      id={missionID}
                      description={description}
                      missionName={missionName}
                    />
                  );
                })) }
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Missions;
