import React, {FC} from "react";
import getInitials from "../../../helpers/getInitials";
import './Tweet.css'
import getUserName from "../../../helpers/getUserName";

const Tweet: FC<{
  authorId: string,
  text: string,
  id: string
}> = (props) => {
  const userName = getUserName(props.authorId)

  return (
    <div
      className='tweet__container'
    >
      <div
        className='tweet__avatar-section'
      >
        <div
          className='tweet__avatar'
        >
          {getInitials(userName)}
        </div>
      </div>
      <div
        className='tweet__content-section'
      >
        <p
          className='tweet__full-name'
        >
          {userName}
        </p>
        <p
          className='tweet__text'
          dangerouslySetInnerHTML={{__html: props.text}}
        />
      </div>
    </div>
  )
}

export default Tweet
