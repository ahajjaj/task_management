import React from 'react';
import '../styles/Profile.scss';
const imageProfile = 'https://instagram.fbdo5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119057636_168352854780878_7610243440753519703_n.jpg?_nc_ht=instagram.fbdo5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=TwModWuV7rQAX8b_6O_&oh=52b6f8c6f8d1b6eb3626482ef98acae0&oe=5F8A76A7';

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