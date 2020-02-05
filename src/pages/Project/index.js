import React, { useState } from 'react';
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
  AsideContent,
  MainContent,
  TagAndDeadline,
} from './styles';

function Main() {

  const [display, setDisplay] = useState('flex');

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
              <Card>
                <Tags>
                  <Tag color='green'></Tag>
                  <Tag color='blue'></Tag>
                  <Tag color='red'></Tag>
                </Tags>
                <CardTitle onClick={() => setDisplay('flex')}>Teminar site</CardTitle>
                <Info>
                  <InfoItem>
                    <Deadline priority='red'>
                      <FontAwesomeIcon icon={faClock} color='#fff' />
                      <span>3 de fev</span>
                    </Deadline>
                  </InfoItem>
                  <InfoItem>
                    <FontAwesomeIcon icon={faAlignLeft} color='#999' />
                  </InfoItem>
                  <InfoItem>
                    <Comments>
                      <FontAwesomeIcon icon={faCommentDots} color='#999' />
                      <span>1</span>
                    </Comments>
                  </InfoItem>
                  <InfoItem>
                    <CheckBox>
                      <FontAwesomeIcon icon={faCheckSquare} color='#999' />
                      <span>1/3</span>
                    </CheckBox>
                  </InfoItem>
                </Info>
              </Card>
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
          <MainContent>
            <TagAndDeadline>


            </TagAndDeadline>
          </MainContent>
          <AsideContent>

          </AsideContent>
        </TaskDetailBox>
      </TaskDetailContainer>
    </>
  )

}

export default Main;
