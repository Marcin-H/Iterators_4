import { useState } from 'react';
import FirstComponent from './components/FirstComponent/FirstComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';

function App() {
  const [isFirstComponent, setIsFirstComponent] = useState(true);

  const changeComponent = () => {
    setIsFirstComponent(!isFirstComponent);
  };

  const showComponent = () => {
    return isFirstComponent ? (
      <FirstComponent
        img="breakfast.jpg"
        title="BREAKFAST"
        description="Crazy breakfast! Are fun and melts in your mouth thing!"
      />
    ) : (
      <SecondComponent name="John Smith" position="Front-end Developer" company="Adobe" />
    );
  };

  return (
    <>
      <div style={{ margin: 'auto' }}>
        <button onClick={changeComponent}>Show Another Component</button>
      </div>
      {showComponent()}
    </>
  );
}

export default App;
