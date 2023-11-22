import { useEffect, useState } from 'react'
import './App.css'

import Restaurant_Card from './components/Restaurant_Card'

import { RestaurantGroupedProps, RestaurantProps } from './types'

const testdata = [{"restaurant_name":"Green Leaf 1","state":"Georgia"},{"restaurant_name":"Green Leaf 2","state":"Pennsylvania"},{"restaurant_name":"Green Leaf 3","state":"Pennsylvania"},{"restaurant_name":"Green Leaf 4","state":"Illinois"},{"restaurant_name":"Green Leaf 5","state":"California"},{"restaurant_name":"Green Leaf 6","state":"Texas"},{"restaurant_name":"Green Leaf 7","state":"Florida"},{"restaurant_name":"Green Leaf 8","state":"New York"},{"restaurant_name":"Green Leaf 9","state":"Pennsylvania"},{"restaurant_name":"Green Leaf 10","state":"Illinois"},{"restaurant_name":"Mountain View 1","state":"California"},{"restaurant_name":"Mountain View 2","state":"Texas"},{"restaurant_name":"Mountain View 3","state":"Florida"},{"restaurant_name":"Mountain View 4","state":"New York"},{"restaurant_name":"Mountain View 5","state":"Pennsylvania"},{"restaurant_name":"Mountain View 6","state":"Illinois"},{"restaurant_name":"Mountain View 7","state":"Georgia"},{"restaurant_name":"Mountain View 8","state":"Texas"},{"restaurant_name":"Mountain View 9","state":"Florida"},{"restaurant_name":"Mountain View 10","state":"New York"},{"restaurant_name":"Sunny Side 1","state":"Pennsylvania"},{"restaurant_name":"Sunny Side 2","state":"Illinois"},{"restaurant_name":"Sunny Side 3","state":"Georgia"},{"restaurant_name":"Sunny Side 4","state":"Texas"},{"restaurant_name":"Sunny Side 5","state":"Florida"},{"restaurant_name":"Sunny Side 6","state":"New York"},{"restaurant_name":"Sunny Side 7","state":"Pennsylvania"},{"restaurant_name":"Sunny Side 8","state":"Illinois"},{"restaurant_name":"Sunny Side 9","state":"California"},{"restaurant_name":"Sunny Side 10","state":"Texas"},{"restaurant_name":"Ocean's Delight 1","state":"Florida"},{"restaurant_name":"Ocean's Delight 2","state":"New York"},{"restaurant_name":"Ocean's Delight 3","state":"Pennsylvania"},{"restaurant_name":"Ocean's Delight 4","state":"Illinois"},{"restaurant_name":"Ocean's Delight 5","state":"Georgia"},{"restaurant_name":"Ocean's Delight 6","state":"Texas"},{"restaurant_name":"Ocean's Delight 7","state":"Florida"},{"restaurant_name":"Ocean's Delight 8","state":"New York"},{"restaurant_name":"Ocean's Delight 9","state":"Pennsylvania"},{"restaurant_name":"Ocean's Delight 10","state":"Illinois"},{"restaurant_name":"City Lights 1","state":"Georgia"},{"restaurant_name":"City Lights 2","state":"California"},{"restaurant_name":"City Lights 3","state":"Texas"},{"restaurant_name":"City Lights 4","state":"Florida"},{"restaurant_name":"City Lights 5","state":"New York"},{"restaurant_name":"City Lights 6","state":"Pennsylvania"},{"restaurant_name":"City Lights 7","state":"Illinois"},{"restaurant_name":"City Lights 8","state":"Georgia"},{"restaurant_name":"City Lights 9","state":"Texas"},{"restaurant_name":"City Lights 10","state":"Florida"},{"restaurant_name":"Golden Plate 1","state":"New York"},{"restaurant_name":"Golden Plate 2","state":"Pennsylvania"},{"restaurant_name":"Golden Plate 3","state":"Illinois"},{"restaurant_name":"Golden Plate 4","state":"Georgia"},{"restaurant_name":"Golden Plate 5","state":"California"},{"restaurant_name":"Golden Plate 6","state":"Texas"},{"restaurant_name":"Golden Plate 7","state":"Florida"},{"restaurant_name":"Golden Plate 8","state":"New York"},{"restaurant_name":"Golden Plate 9","state":"Pennsylvania"},{"restaurant_name":"Golden Plate 10","state":"Illinois"},{"restaurant_name":"The Friendly Chef 1","state":"Georgia"},{"restaurant_name":"The Friendly Chef 2","state":"California"},{"restaurant_name":"The Friendly Chef 3","state":"Texas"},{"restaurant_name":"The Friendly Chef 4","state":"Florida"},{"restaurant_name":"The Friendly Chef 5","state":"New York"},{"restaurant_name":"The Friendly Chef 6","state":"Pennsylvania"},{"restaurant_name":"The Friendly Chef 7","state":"Illinois"},{"restaurant_name":"The Friendly Chef 8","state":"Georgia"},{"restaurant_name":"The Friendly Chef 9","state":"Texas"},{"restaurant_name":"The Friendly Chef 10","state":"Florida"},{"restaurant_name":"Harbor Point 1","state":"New York"},{"restaurant_name":"Harbor Point 2","state":"Pennsylvania"},{"restaurant_name":"Harbor Point 3","state":"Illinois"},{"restaurant_name":"Harbor Point 4","state":"Georgia"},{"restaurant_name":"Harbor Point 5","state":"California"},{"restaurant_name":"Harbor Point 6","state":"Texas"},{"restaurant_name":"Harbor Point 7","state":"Florida"},{"restaurant_name":"Harbor Point 8","state":"New York"},{"restaurant_name":"Harbor Point 9","state":"Pennsylvania"},{"restaurant_name":"Harbor Point 10","state":"Illinois"},{"restaurant_name":"The Cozy Corner 1","state":"Georgia"},{"restaurant_name":"The Cozy Corner 2","state":"California"},{"restaurant_name":"The Cozy Corner 3","state":"Texas"},{"restaurant_name":"The Cozy Corner 4","state":"Florida"},{"restaurant_name":"The Cozy Corner 5","state":"New York"},{"restaurant_name":"The Cozy Corner 6","state":"Pennsylvania"},{"restaurant_name":"The Cozy Corner 7","state":"Illinois"},{"restaurant_name":"The Cozy Corner 8","state":"Georgia"},{"restaurant_name":"The Cozy Corner 9","state":"Texas"},{"restaurant_name":"The Cozy Corner 10","state":"Florida"}]

function App() {
  const [ restaurantLists, setRestaurantLists ] = useState<RestaurantGroupedProps[]>([]);

  useEffect(() => {
    fetch("https://nextjs-orpin-omega-98.vercel.app/api/restaurants")
      .then(res => {
        return res.json();
      })
      .then(data => {
        groupRestaurantsByState(data);
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
      <h1 className="font-[600] text-[30px] mb-10">List of Restaurant Categorized by State</h1>
      <section className="flex flex-wrap gap-y-10">
        {restaurantLists.map((item, index) => (
          <Restaurant_Card data={item} key={index}/>
        ))}
      </section>
    </main>
  )
}

export default App