import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faClock, faAlignLeft, faTasks } from '@fortawesome/free-solid-svg-icons';

import { Container, FieldName, TagArea, Tag, DeadlineArea, DescriptionArea, ActivityArea, ActivityComment } from './styles';

import './.css';

function MainContent({ task }) {

  const divStyle = {
    paddingBottom: '3vh',
    marginBottom: '3vh',
    borderBottom: '1px solid #999',
  }

  return (
    <Container className='scrollHidden'>

      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faTags} style={{ fontSize: 20 }} />
          <h1>Tags</h1>
        </FieldName>
        <TagArea>
          {task.tags ? task.tags.map(tag => (
            <Tag color={tag.color}>{tag.text}</Tag>
          )) : null}
          <span>+</span>
        </TagArea>
      </div>
      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faClock} />
          <h1>Prazo de Entrega</h1>
        </FieldName>
        <DeadlineArea>
          {task.deadline ? task.deadline : '+'}
        </DeadlineArea>
      </div>
      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faAlignLeft} />
          <h1>Descrição</h1>
        </FieldName>
        <DescriptionArea>
          {task.description ? task.description : <textarea placeholder='Adicione uma descrição...' />}
        </DescriptionArea>
      </div>
      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faTasks} />
          <h1>Atividade</h1>
        </FieldName>
        <ActivityArea>
          <textarea placeholder='Escreva um comentário...' />
          {task.activity ? task.activity.map(comment => (
            <ActivityComment>
              <h1>{comment.user}</h1>
              <p>{comment.message}</p>
            </ActivityComment>
          )) : null}
        </ActivityArea>
      </div>
    </Container>

  );

}

export default MainContent;
