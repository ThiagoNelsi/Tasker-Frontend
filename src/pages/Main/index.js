import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faClock, faCommentDots, faCheckSquare } from '@fortawesome/free-regular-svg-icons'

import { Header, Logo, Container, Content, Tasks, Box, BoxTitle, Card, Tags, Tag, CardTitle, Info, InfoItem, Deadline, Comments, CheckBox, NewCard } from './styles';

function Main() {


  return (
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
              <CardTitle>Lorem Ipsum</CardTitle>
              <Info>
                <InfoItem>
                  <Deadline priority='red'>
                    <FontAwesomeIcon icon={faClock} color='#fff' />
                    <span>3 de fev</span>
                  </Deadline>
                </InfoItem>
                <InfoItem>
                  <FontAwesomeIcon icon={faAlignLeft} color='#999'/>
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
          <Box>
            <BoxTitle> Doing </BoxTitle>
            <NewCard>
              <FontAwesomeIcon icon={faPlus} />
              <span>Adicionar cartão</span>
            </NewCard>
          </Box>
          <Box>
            <BoxTitle> Done </BoxTitle>
            <NewCard>
              <FontAwesomeIcon icon={faPlus} />
              <span>Adicionar cartão</span>
            </NewCard>
          </Box>
        </Content>
      </Tasks>
    </Container>
  )

}

export default Main;
