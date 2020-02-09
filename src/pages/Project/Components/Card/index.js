import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCommentDots, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

import {
  Container,
  Tags,
  Tag,
  CardTitle,
  Info,
  InfoItem,
  Deadline,
  Comments,
  CheckBox,
} from './styles';

function Card({ task, setShowTask, showTask, setOverlayDisplay }) {
  return (
    <Container key={task._id}>
      <Tags>
        {task.tags.map(tag => (
          <Tag color={tag.color} />
        ))}
      </Tags>
      <CardTitle onClick={() => { setShowTask(task); console.log(showTask); setOverlayDisplay('flex') }}>{task.title}</CardTitle>
      <Info>

        {task.deadline ? (
          <InfoItem>
            <Deadline priority='red'>
              <FontAwesomeIcon icon={faClock} color='#fff' />
              <span>{task.deadline}</span>
            </Deadline>
          </InfoItem>
        ) : null
        }
        {task.description ? (
          <InfoItem>
            <FontAwesomeIcon icon={faAlignLeft} color='#999' />
          </InfoItem>
        ) : null
        }
        {task.activity ? (
          <InfoItem>
            <Comments>
              <FontAwesomeIcon icon={faCommentDots} color='#999' />
              <span>{task.activity.lenght}</span>
            </Comments>
          </InfoItem>
        ) : null
        }
        {task.checklist ? (
          <InfoItem>
            <CheckBox>
              <FontAwesomeIcon icon={faCheckSquare} color='#999' />
              <span>1/3</span>
            </CheckBox>
          </InfoItem>
        ) : null
        }
      </Info>
    </Container>
  )
}

export default Card;
