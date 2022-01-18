import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Note Taker',
            category: 'study project',
            description:
                'An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.'
        },
        {
            name: 'Budget Tracker',
            category: 'study project',
            description:
                'A budget tracker application that allows offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a internet connection.'
        }
    ]);

    
  const currentPhotos = photos.filter(photo => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }
  

  return (
    <div>
      {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;