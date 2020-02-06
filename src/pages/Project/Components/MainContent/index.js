import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faClock, faAlignLeft, faTasks } from '@fortawesome/free-solid-svg-icons';

import { Container, FieldName, TagArea, Tag, DeadlineArea, DescriptionArea, ActivityArea } from './styles.js';

function MainContent() {

  const divStyle = {
    paddingBottom: '3vh',
    marginBottom: '3vh',
    borderBottom: '1px solid #999',
  }

  return (
    <Container>

      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faTags} style={{ fontSize: 20 }} />
          <h1>Tags</h1>
        </FieldName>
        <TagArea>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <span>+</span>
        </TagArea>
      </div>
      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faClock} />
          <h1>Prazo de Entrega</h1>
        </FieldName>
        <DeadlineArea>
          05 fev 2020
        </DeadlineArea>
      </div>
      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faAlignLeft} />
          <h1>Descrição</h1>
        </FieldName>
        <DescriptionArea>

          <textarea placeholder='Adicione uma descrição...' />
        </DescriptionArea>
      </div>
      <div style={divStyle}>
        <FieldName>
          <FontAwesomeIcon icon={faTasks} />
          <h1>Atividade</h1>
        </FieldName>
        <ActivityArea>
          <textarea placeholder='Escreva um comentário...' />
          <div></div>
        </ActivityArea>
      </div>
    </Container>

  );

}

export default MainContent;
