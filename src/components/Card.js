import React from 'react';// it having bz jsx needed react

const Card = ({ name, email, id }) => {
  return (
     <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'> {/*background of the card*/}
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}  />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
