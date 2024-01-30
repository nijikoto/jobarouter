import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  //get the ID param from the URL
  const { id } = useParams()
  const career = useLoaderData()
  // console.log(career)
  // console.log(id)
  return (
    <div className="careers-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary{career.title}</p>
      <p>Location:{career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora in, accusantium
          provident repellendus dolor nobis expedita! Blanditiis voluptatum quod voluptate eum.
          Eligendi inventore nostrum assumenda atque perferendis, illum accusantium.
        </p>
      </div>
    </div>
  )
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch('http://localhost:4000/careers/' + id)

  return res.json()
}
