import { RestaurantGroupedProps } from "../types"

interface PageProps {
  data: RestaurantGroupedProps
}

function Restaurant_Card({ data } : PageProps) {
  return (
    <div className="sm:w-1/4 w-full px-5">
      <div className="border border-gray-300 rounded-[20px] py-5 px-5 h-full shadow-mainShadow">
        <p className="text-black text-[20px] font-[500] mb-5">{data.state}</p>
        <ul>
          {data.names.map((state,index) => (
            <li key={index} className="text-black text-left">{state}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Restaurant_Card