import React from 'react';
import Photo from './photo.jpg';
function Profile() {
    return (
      <div className="Profile">
   <img src={Photo} className="photodeprofil" alt="profil" />

      </div>
    );
  }
  
  export default Profile;