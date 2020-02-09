import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {
  Header,
  Logo,
  ThemeSelector,
  ThemeBox,
  Container,
  Content,
  Tasks,
  Box,
  BoxTitle,
  NewCard,
} from './styles';

import './.css';
import Card from './Components/Card';
import NewTaskOverlay from './Components/NewTaskOverlay';
import TaskDetail from './Components/TaskDetail';

function Main({ changeTheme }) {


  const projectId = window.location.pathname.split('/')[2];

  const [detailOverlayDisplay, setDetailOverlayDisplay] = useState('none');

  const [newTaskOverlayDisplay, setNewTaskOverlayDisplay] = useState('flex');
  const [newTaskStatus, setNewTaskStatus] = useState('todo');

  const [themeBoxDisplay, setThemeBoxDisplay] = useState('none');
  const [tasks, setTasks] = useState();
  const [showTask, setShowTask] = useState();

  useEffect(() => {
    async function getTasks() {
      const response = await api.get(`/projects/${projectId}`);
      setTasks(response.data.project.tasks);
      console.log(response.data.project.tasks);
    }
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!tasks) return <h1>Loading...</h1>;

  return (
    <>
      <Container id='container'>
        <Header>
          <Logo>Tasker</Logo>
          <ThemeSelector>
            <h1 onClick={() => setThemeBoxDisplay(themeBoxDisplay === 'flex' ? 'none' : 'flex')}>Temas</h1>
            <ThemeBox id='themeBox' display={themeBoxDisplay}>
              <div id='lightBlue' onClick={() => changeTheme('lightBlue')} />
              <div id='green' onClick={() => changeTheme('green')} />
              <div id='yellow' onClick={() => changeTheme('yellow')} />
              <div id='purplePink' onClick={() => changeTheme('purplePink')} />
              <div id='darkPurple' onClick={() => changeTheme('darkPurple')} />
              <div id='dark' onClick={() => changeTheme('dark')} />
            </ThemeBox>
          </ThemeSelector>
        </Header>
        <Tasks>
          <Content>
            <Box>
              <BoxTitle> To Do </BoxTitle>
              {tasks.map(task => task.status === 'todo' && <Card task={task} setShowTask={setShowTask} showTask={showTask} setOverlayDisplay={setDetailOverlayDisplay} />)}
              <NewCard onClick={() => { setNewTaskStatus('todo'); setNewTaskOverlayDisplay('flex') }}>
                <FontAwesomeIcon icon={faPlus} color='#ccc' />
                <span>Adicionar cartão</span>
              </NewCard>
            </Box>
          </Content>
          <Content>
            <Box>
              <BoxTitle> Doing </BoxTitle>
              {tasks.map(task => task.status === 'doing' && <Card task={task} setShowTask={setShowTask} showTask={showTask} setOverlayDisplay={setDetailOverlayDisplay} />)}
              <NewCard onClick={() => { setNewTaskStatus('doing'); setNewTaskOverlayDisplay('flex') }}>
                <FontAwesomeIcon icon={faPlus} color='#ccc' />
                <span>Adicionar cartão</span>
              </NewCard>
            </Box>
          </Content>
          <Content>
            <Box>
              <BoxTitle> Done </BoxTitle>
              {tasks.map(task => task.status === 'done' && <Card task={task} setShowTask={setShowTask} showTask={showTask} setOverlayDisplay={setDetailOverlayDisplay} />)}
              <NewCard onClick={() => { setNewTaskStatus('donee'); setNewTaskOverlayDisplay('flex') }}>
                <FontAwesomeIcon icon={faPlus} color='#ccc' />
                <span>Adicionar cartão</span>
              </NewCard>
            </Box>
          </Content>
        </Tasks>
      </Container>
      <TaskDetail task={showTask} overlayDisplay={detailOverlayDisplay} setOverlayDisplay={setDetailOverlayDisplay} />
      <NewTaskOverlay overlayDisplay={newTaskOverlayDisplay} setOverlayDisplay={setNewTaskOverlayDisplay} status={newTaskStatus} />
    </>
  )

}

export default Main;
