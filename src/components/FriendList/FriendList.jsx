import FriendListItem from "../FriendListItem/FriendListItem"
import styles from "./FriendList.module.css"
const FriendList = ({friends}) =>{
    return <ul className={styles.list}>
	{friends.map(({avatar,name,isOnline,id}) =>(
        <li key={id} className={styles.item}>
		<FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
	</li>
    ))}
</ul>
}
export default FriendList;