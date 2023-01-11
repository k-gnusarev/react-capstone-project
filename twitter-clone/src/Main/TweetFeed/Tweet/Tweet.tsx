import React, {FC} from "react";
import getInitials from "../../../helpers/getInitials";
import './Tweet.css'

const Tweet: FC<{
  name: string,
  text: string,
  id: string
}> = (props) => {
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
          {getInitials(props.name)}
        </div>
      </div>
      <div
        className='tweet__content-section'
      >
        <p
          className='tweet__full-name'
        >
          {props.name}
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
