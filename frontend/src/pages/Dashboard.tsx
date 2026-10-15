
function Dashboard() {
  return (
    <main className="app-content">
      <h2>Dashboard</h2>
      <p>Welcome to your task manager.</p>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Completed Tasks</h3>
          <p>0</p>
        </div>
      </section>
    </main>
  )
}

export default Dashboard