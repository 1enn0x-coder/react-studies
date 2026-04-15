import { Outlet, NavLink } from "react-router";

export default function App() {
  return (
    <>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "16px" }}>
          <NavLink to="/">All users</NavLink>
          <NavLink to="/:id">Users To Do</NavLink>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "20px", borderTop: "1px solid #ddd" }}>
        Footer
      </footer>
    </>
  );
}
