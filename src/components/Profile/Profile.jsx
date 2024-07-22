
import css from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.containerDesign}>
      <div className={css.container}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.from}>{tag}</p>
        <p className={css.from} style={{marginBottom: 8}}>{location}</p>
      </div>

      <ul className={css.allList}>
        <li className={css.list} style={{borderRight: "1.5px solid rgba(0, 0, 0, 0.5)"}}>
          <span>Followers</span>
          <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>{stats.followers}</span>
        </li>
        <li className={css.list} style={{borderRight: "1.5px solid rgba(0, 0, 0, 0.5)"}}>
          <span>Views</span>
          <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>{stats.views}</span>
        </li>
        <li className={css.list}>
          <span>Likes</span>
          <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;