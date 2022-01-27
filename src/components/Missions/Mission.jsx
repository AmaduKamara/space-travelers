import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  id, description, missionName, toggleMission, reserved,
}) => (
  <>
    <tbody className="odd:bg-white even:bg-slate-200 border-2 border-slate-100">
      <tr>
        <td className="px-6 py-4  whitespace-wrap flex align-top text-sm font-bold text-gray-900">{missionName}</td>
        <td className="text-sm border-2 border-slate-100 text-gray-900 tracking-tight font-medium px-6 py-4 ">
          {description}
        </td>
        <td className="text-sm border-2 border-slate-100 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {reserved ? <span className="text-xs px-2 py-0.5 font-bold bg-blue-500 text-white rounded">Active Member</span> : <span className="text-xs px-2 py-0.5 font-bold bg-gray-600 text-white rounded">NOT A MEMBER</span>}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {reserved ? <button type="button" id={id} onClick={toggleMission} className="bg-transparent hover:border-red-900 text-red-400 font-bold py-2 px-4 border border-red-400 rounded">Leave Mission</button> : <button type="button" id={id} onClick={toggleMission} className="bg-transparent hover:border-black font-bold py-2 px-4 border border-gray-400 text-black rounded">Join Mission</button>}

        </td>
      </tr>
    </tbody>
  </>
);

export default Mission;

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  toggleMission: PropTypes.func.isRequired,
  reserved: PropTypes.bool,

};

Mission.defaultProps = {
  reserved: false,
};
