import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='.cardsItemProfesion' data-category={props.label}>
            <img
              className='cardsProfesionesImg'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cardsInfoText'>
            <h5 className='cardsProfesionesText'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
