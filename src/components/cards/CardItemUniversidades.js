import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__universidades' data-category={props.label}>
            <img
              className='cards__universidades__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__universidades__info__text'>
            <h5 className='cards__universidades__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;