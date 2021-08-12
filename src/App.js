import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)

  return <main>
    <section className="container">
      <h6><center>Example ReactJS App</center></h6><br />
      <h3>{people.length} Birthdays Today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
      <h5><center><a href="https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=24217s" target="_blank" rel="noopener noreferrer">FreeCodeCamp ReactJS Project Examples</a></center></h5>
    </section>
  </main>;
}

export default App;
