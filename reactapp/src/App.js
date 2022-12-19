import './App.scss';
import './sass/left_part.scss';
import './sass/main.scss';
import './sass/right.scss';
import LeftBlock from './components/LeftBlock';
import Main from './components/Main';
import RightBlock from './components/RightBlock';

 
function App() {
  return (
    <>
      <LeftBlock/>
      <Main/>
      <RightBlock/>
    </>
  );
}

export default App;
