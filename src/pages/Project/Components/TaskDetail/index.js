import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import MainContent from './Components/MainContent';

import {
  TaskDetailContainer,
  TaskDetailBox,
  TaskTitle,
  TaskDetailHeader,
} from './styles';

function TaskDetail({ tasks, overlayDisplay, setOverlayDisplay }) {
  return (
    <TaskDetailContainer display={overlayDisplay}>
      <TaskDetailBox>
        <TaskDetailHeader>

          <TaskTitle>
            <FontAwesomeIcon icon={faTasks} color='#000' style={{ fontSize: 25 }} />
            <h1>{tasks[1].title}</h1>
          </TaskTitle>
          <span onClick={() => setOverlayDisplay('none')}>+</span>
        </TaskDetailHeader>
        <MainContent task={tasks[1]} style={{ gridArea: 'main' }} />
      </TaskDetailBox>
    </TaskDetailContainer>
  );
}

export default TaskDetail;
