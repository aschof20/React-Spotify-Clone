import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { RightMenu } from './components/RightMenu';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>

    </div>
  );
}

export default App;
