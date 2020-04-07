import React from 'react';
import NavBar from './NavBar';
import WorldMap from './WorldMap';
import Cards from './Cards';




class App extends React.Component {

  render(){


    return (
      <div>
      <NavBar/>
      {//<WorldMap/>
      }
      <Cards/>
      <WorldMap/>
      </div>
    );
  }
}

export default App;
