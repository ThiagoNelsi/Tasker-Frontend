import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import MainContent from './MainContent';

import {
  TaskDetailContainer,
  TaskDetailBox,
  TaskTitle,
  TaskDetailHeader,
} from './styles';

function TaskDetail({ task, overlayDisplay, setOverlayDisplay }) {

  if (!task) return null;

  return (
    <TaskDetailContainer display={overlayDisplay}>
      <TaskDetailBox>
        <TaskDetailHeader>

          <TaskTitle>
            <FontAwesomeIcon icon={faTasks} color='#000' style={{ fontSize: 25 }} />
            <h1>{task.title}</h1>
          </TaskTitle>
          <span onClick={() => setOverlayDisplay('none')}>+</span>
        </TaskDetailHeader>
        <MainContent task={task} style={{ gridArea: 'main' }} />
      </TaskDetailBox>
    </TaskDetailContainer>
  );
}

export default TaskDetail;
