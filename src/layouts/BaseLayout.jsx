import { Navbar } from "../components/Navbar";

export function BaseLayout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="px-22">
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}
