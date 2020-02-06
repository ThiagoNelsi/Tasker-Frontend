import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCommentDots, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

import {
  Header,
  Logo,
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
  TaskDetailContainer,
  TaskDetailBox,
  TaskTitle,
  TaskDetailHeader,
} from './styles';

import MainContent from './Components/MainContent';

function Main() {

  const [display, setDisplay] = useState('flex');
  const [tasks, setTasks] = useState();

  useEffect(() => {
    async function getTasks() {
      const response = await api.get('/projects/5e3b4fff307b3c19d836d200');
      setTasks(response.data.project.tasks);
    }
    getTasks();
  }, []);

  if (!tasks) return <h1>Loading...</h1>;

  return (
    <>
      <Container>
        <Header>
          <Logo>Tasker</Logo>
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
                  <CardTitle onClick={() => setDisplay('flex')}>{task.title}</CardTitle>
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
      <TaskDetailContainer display={display}>
        <TaskDetailBox>
          <TaskDetailHeader>

            <TaskTitle>
              <FontAwesomeIcon icon={faTasks} color='#000' style={{ fontSize: 25 }} />
              <h1>Fazer o site</h1>
            </TaskTitle>
            <span onClick={() => setDisplay('none')}>+</span>
          </TaskDetailHeader>
          <MainContent style={{ gridArea: 'main' }} />
        </TaskDetailBox>
      </TaskDetailContainer>
    </>
  )

}

export default Main;
