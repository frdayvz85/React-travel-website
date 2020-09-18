import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1600268971003-c19ffd730c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              text='Travel through the Islands of Bali in a Secret mountain'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1599687349533-82f24a0b62cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              text='Explore the hidden ocean deep inside the Canada beach'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1593521535471-4f620d6882c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              text='Travel through the Sea of Turkey in a Private adventure'
              label='Crazy'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1600317822495-3b20de577677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              text='Set Sea in the Atlantic Ocean visiting hidden Waters'
              label='Mystery'
              path='/sign-up'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              text='Experience Football on Top of the Barcelona City'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1494753124839-84d9bbe79043?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              text='Ride through the France on a guided bus tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;