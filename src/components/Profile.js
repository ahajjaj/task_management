import React from 'react';
import '../styles/Profile.scss';
const imageProfile = 'https://3.bp.blogspot.com/-LJFnn6JL23E/Uuf5wO4jzxI/AAAAAAAACCQ/r49QjeJikYI/s1600/ghost_person_60x60_v1.png';

const Profile = (props) => {
  return (
    <div className="card">
      <img src={imageProfile} alt="Profile" className="profile" />
      <h4 className="name-profile">{props.name}</h4>
      <p>{props.userName}</p>
      <button onClick={props.click} className="btn">{props.title}</button>
    </div>
  );
}

export default Profile;