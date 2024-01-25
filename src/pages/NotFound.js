import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic enim maiores, nulla expedita
        repellat dolores, nesciunt harum ut accusantium rem veritatis autem dolorum temporibus
        facilis? Sed assumenda aliquam accusantium eos.
      </p>
      <p>
        Go to the <Link to="/">HomePage</Link>.
      </p>
    </div>
  )
}
