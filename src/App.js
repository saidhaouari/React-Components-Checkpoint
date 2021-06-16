import './App.css';
import Profile from './component/profile/ProfilePhoto';
import Adresse from './component/profile/Address';
import FullName from './component/profile/FullName';
function App() {
  return (
    <div className="App">
      <Profile />
      <section className="info">
      <FullName />
      <Adresse />
      </section>
      
    </div>
  );
}

export default App;
