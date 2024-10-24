import React from 'react';

import edificio from '../assets/edificio-home.jpg'
import columpios from '../assets/columpios-home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding} from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={edificio} alt="Imagen edificio" />
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl id egestas quam facilisi sollicitudin fusce ultrices iaculis dictum. Parturient proin etiam justo habitasse vel. Fermentum hendrerit cras felis magnis feugiat. Class massa non parturient mattis nullam sapien mi torquent. Finibus justo erat phasellus blandit molestie faucibus. Nisl id egestas quam facilisi sollicitudin fusce ultrices iaculis dictum. Finibus auctor sodales dapibus posuere curabitur magnis elementum nulla. Parturient proin etiam justo habitasse vel. Fermentum hendrerit cras felis magnis feugiat. Finibus justo erat phasellus blandit molestie faucibus. Ipsum leo tincidunt nibh massa parturient erat sapien.</p>
      </div>
      <div className="home-right">
      <h1>
        <FontAwesomeIcon icon={faBuilding} size="sm" style={{ marginRight: '10px' }} />
        COMUNIDAD EDIFICIO
        <br />
        <span> *PLACE HOLDER* </span>
      </h1>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Fermentum hendrerit cras felis magnis feugiat. Class massa non parturient mattis nullam sapien mi torquent. Nisl id egestas quam facilisi sollicitudin fusce ultrices iaculis dictum. Finibus auctor sodales dapibus posuere curabitur magnis elementum nulla. Parturient proin etiam justo habitasse vel. Finibus justo erat phasellus blandit molestie faucibus. Ipsum leo tincidunt nibh massa parturient erat sapien.</p>
        <img src={columpios} alt="Imagen columpios" />
      </div>
    </div>
  );
};

export default HomePage;