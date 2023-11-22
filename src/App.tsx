import { useEffect, useState } from 'react'
import './App.css'

import Restaurant_Card from './components/Restaurant_Card'

import { RestaurantGroupedProps, RestaurantProps } from './types'

function App() {
  const [ restaurantLists, setRestaurantLists ] = useState<RestaurantGroupedProps[]>([]);

  useEffect(() => {
    fetch("/api/restaurants")
      .then(res => {
        return res.json();
      })
      .then(data => {
        groupRestaurantsByState(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
  }, [])
  
  const groupRestaurantsByState = (data: RestaurantProps[]) => {
    const grouped = data.reduce<{ [key: string]: string[] }>((acc, restaurant) => {
      acc[restaurant.state] = acc[restaurant.state] || [];
      acc[restaurant.state].push(restaurant.restaurant_name);
      return acc;
    }, {});

    const formattedGroups = Object.keys(grouped).map((state) => ({
      state,
      names: grouped[state],
    }));
    
    setRestaurantLists(formattedGroups);
  };

  return (
    <main className='max-w-[1200px] m-auto'>
      <h1 className="font-[600] text-[30px] mb-10">List of Restaurant Categorized by States</h1>
      <section className="flex flex-wrap gap-y-10">
        {restaurantLists.map((item, index) => (
          <Restaurant_Card data={item} key={index}/>
        ))}
      </section>
    </main>
  )
}

export default App