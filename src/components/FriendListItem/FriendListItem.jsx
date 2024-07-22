import clsx from 'clsx';
import css from "../FriendListItem/FriendListItem.module.css"


export function FriendListItem({friend}) {
    const containerClass = clsx(
        friend.isOnline === true ? css.online : css.offline 
    )

    return (
        <div className={containerClass}>
  <img src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
            <p>{friend.isOnline === true ? "online" : "offline"}</p>
</div>
    )
}
