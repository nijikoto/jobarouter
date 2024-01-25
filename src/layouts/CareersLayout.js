import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat quibusdam voluptatibus
        quaerat quis impedit consequuntur fuga sed. Voluptate cupiditate alias aut corrupti, beatae
        molestiae debitis sit soluta temporibus eius!
      </p>
      <Outlet />
    </div>
  )
}
