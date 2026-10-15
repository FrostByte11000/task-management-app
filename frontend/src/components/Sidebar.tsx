import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>TaskFlow</h2>

      <nav>
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          My Tasks
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar