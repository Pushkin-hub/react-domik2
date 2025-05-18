import logo from './logo.svg';
import './App.css';
import PersonalPage from './components/PersonalPage';
import RegistrationForm from './components/RegistrationForm';
import PhotoUploadForm from './components/PhotoUploadForm';
import BandsList from './components/BandsList';
import './components/CitiesList';

function App() {
  return (
    <div>
      <PersonalPage />
      <RegistrationForm />
      <PhotoUploadForm />
      <BandsList />
    </div>
  );
}

export default App;
