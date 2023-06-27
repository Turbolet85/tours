import React from 'react';

import Tour, { ITour } from './Tour';

export interface ITours {
  tours: ITour[];
  removeTour: (id: string) => void;
}
const Tours = ({ tours, removeTour }: ITours) => {
  return (
    <section>
      <div className={'title'}>
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour: ITour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
