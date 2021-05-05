import DataTable from 'Components/DataTable';
import Footer from 'Components/Footer';
import Navbar from 'Components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">
    <h1 className="text-primary">Ola mundo</h1>
    <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
