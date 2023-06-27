import { useEffect, useState } from 'react';

import Loading from './components/Loading';
import { ITour } from './components/Tour';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id: string): void => {
    const newTours = tours.filter((tour: ITour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours().then();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className={'title'}>
          <h2>no tours left</h2>
          <button
            type={'button'}
            className={'btn'}
            onClick={fetchTours}
            style={{ marginTop: '4rem' }}
          >
            More tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
