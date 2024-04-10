import React, { useState } from 'react';

const AvatarSelect = ({ avatars, onSelect }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    onSelect(selectedAvatar);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            className={`w-16 h-16 rounded-full cursor-pointer ${
              selectedAvatar === avatar ? 'ring-2 ring-blue-500' : ''
            }`}
            src={avatar}
            alt={`Avatar ${index}`}
            onClick={() => handleAvatarClick(avatar)}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarSelect;
