import React from 'react';
import PropTypes from 'prop-types';

function Rocket({ rocket_name: name, rocket_image: rocketImage, description }) {
  return (
    <div className="flex mb-6">
      <img src={rocketImage} alt="rocket" width="250" />
      <div className="mx-5">
        <h2 className="text-xl font-semibold pt-2">{name}</h2>
        <p className="my-4">{description}</p>
        <button
          type="button"
          className="py-2 px-5 rounded text-white bg-blue-600"
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket_name: PropTypes.string.isRequired,
  rocket_image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
