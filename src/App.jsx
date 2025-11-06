import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Employees />
      </main>
      <Footer />
    </div>
  );
}

export default App;
