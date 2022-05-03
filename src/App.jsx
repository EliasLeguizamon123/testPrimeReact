import './App.css'
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Form from './components/Form'
import Footer from './components/Footer';
import GridTest from './components/Grid';

function App() {
  return (
    <>
      <div className="card w-max h-max">
        <div className="flex align-content-center card-container">
          <div className="flex-gone flex align-items-center mx-2">
            <h1 className="">42PayApp</h1>
          </div>
          <div className="flex-grow-1 flex align-items-center justify-content-center text-blue-500">
            <i className="pi pi-prime" style={{ fontSize: '2rem', marginRight: '14%' }}></i>
          </div>
        </div>
      </div>
      <Form />
      <GridTest />
      <Footer />
    </>
  )
}

export default App;
