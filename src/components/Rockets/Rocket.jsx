import React from 'react';
import PropTypes from 'prop-types';

function Rocket({
  id,
  rocket_name: name,
  rocket_image: rocketImage,
  description,
  reserved,
  handleToggleClick,
}) {
  return (
    <div className="flex mb-6">
      <img src={rocketImage} alt="rocket" width="250" />
      <div className="mx-5">
        <h2 className="text-xl font-semibold pt-2">{name}</h2>
        <p className="my-4">
          {reserved && (
            <span className="bg-green-600 text-white py-1 px-3 rounded-full">
              Reserved
            </span>
          )}
          {' '}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            className="py-2 px-5 rounded text-red-500 border border-red-400"
            onClick={() => handleToggleClick(id)}
          >
            Cancel Reserve
          </button>
        ) : (
          <button
            type="button"
            className="py-2 px-5 rounded text-white bg-blue-500 "
            onClick={() => handleToggleClick(id)}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocket_name: PropTypes.string.isRequired,
  rocket_image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};
export default Rocket;
