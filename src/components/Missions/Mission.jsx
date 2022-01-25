import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ id, description, missionName }) => (
  <>
    <tbody key={id}>
      <tr className="bg-gray-100 border">
        <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-gray-900">{missionName}</td>
        <td className="text-sm border text-gray-900 font-light px-6 py-4 ">
          {description}
        </td>
        <td className="text-sm border text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Active Member</button>
        </td>
        <td className="text-sm border text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Join Mission</button>
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

};
