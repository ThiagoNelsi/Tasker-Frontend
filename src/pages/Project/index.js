import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCommentDots, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

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
  Card,
  Tags,
  Tag,
  CardTitle,
  Info,
  InfoItem,
  Deadline,
  Comments,
  CheckBox,
  NewCard,
} from './styles';

import './.css';
import TaskDetail from './Components/TaskDetail';

function Main({ changeTheme }) {

  const [overlayDisplay, setOverlayDisplay] = useState('none');
  const [themeBoxDisplay, setThemeBoxDisplay] = useState('none');
  const [tasks, setTasks] = useState();

  useEffect(() => {
    async function getTasks() {
      const response = await api.get('/projects/5e3b4fff307b3c19d836d200');
      setTasks(response.data.project.tasks);
      console.log(response.data.project.tasks);
    }
    getTasks();
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
              {tasks.map(task => (
                <Card>
                  <Tags>
                    {task.description[0].tags.map(tag => (
                      <Tag color={tag.color} />
                    ))}
                  </Tags>
                  <CardTitle onClick={() => setOverlayDisplay('flex')}>{task.title}</CardTitle>
                  <Info>

                    {task.description[0].deadline ? (
                      <InfoItem>
                        <Deadline priority='red'>
                          <FontAwesomeIcon icon={faClock} color='#fff' />
                          <span>{task.description[0].deadline}</span>
                        </Deadline>
                      </InfoItem>
                    ) : null
                    }
                    {task.description[0].description ? (
                      <InfoItem>
                        <FontAwesomeIcon icon={faAlignLeft} color='#999' />
                      </InfoItem>
                    ) : null
                    }
                    {task.description[0].comments ? (
                      <InfoItem>
                        <Comments>
                          <FontAwesomeIcon icon={faCommentDots} color='#999' />
                          <span>{task.description[0].comments.lenght}</span>
                        </Comments>
                      </InfoItem>
                    ) : null
                    }
                    {task.description[0].checklist ? (
                      <InfoItem>
                        <CheckBox>
                          <FontAwesomeIcon icon={faCheckSquare} color='#999' />
                          <span>1/3</span>
                        </CheckBox>
                      </InfoItem>
                    ) : null
                    }
                  </Info>
                </Card>
              ))}
              <NewCard>
                <FontAwesomeIcon icon={faPlus} color='#ccc' />
                <span>Adicionar cartão</span>
              </NewCard>
            </Box>
          </Content>
          <Content>
            <Box>
              <BoxTitle> Doing </BoxTitle>
              <NewCard>
                <FontAwesomeIcon icon={faPlus} color='#ccc' />
                <span>Adicionar cartão</span>
              </NewCard>
            </Box>
          </Content>
          <Content>
            <Box>
              <BoxTitle> Done </BoxTitle>
              <NewCard>
                <FontAwesomeIcon icon={faPlus} color='#ccc' />
                <span>Adicionar cartão</span>
              </NewCard>
            </Box>
          </Content>
        </Tasks>
      </Container>
      <TaskDetail tasks={tasks} overlayDisplay={overlayDisplay} setOverlayDisplay={setOverlayDisplay} />
    </>
  )

}

export default Main;
