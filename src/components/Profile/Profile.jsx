// import React from "react";
import styles from "./Profile.module.css";

const Profile = ({username,tag,location,avatar,stats}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.subs}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatarim}
        />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li>
          <span className={styles.labe}>Followers</span>
          <span className={styles.ku}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.labe}>Views</span>
          <span className={styles.ku}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.labe}>Likes</span>
          <span className={styles.ku}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
