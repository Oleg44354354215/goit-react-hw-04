import styles from "./FriendListItem.module.css"

const FriendListItem = ({avatar,name,isOnline}) => {
    return <div className={styles.options}>
    <img src={avatar} alt="Avatar" width="48" className={styles.avat}/>
    <p className={styles.name}>{name}</p>
    <p className={`${styles.isOnline} ${isOnline ? styles.online : styles.offline }`}>{isOnline ? "Online" : "Offline"}</p>
  </div>
}
export default FriendListItem;