import React from 'react';

const MissionTableHead = () => (
  <>
    <thead className="bg-white border-b">
      <tr>
        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left border">
          Mission
        </th>
        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left border">
          Description
        </th>
        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left border">
          Status
        </th>
        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left">
          {' '}
        </th>
      </tr>
    </thead>
  </>
);

export default MissionTableHead;
