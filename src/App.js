import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './Component/Home';
import Timeline from './Component/Timeline';
import Team from './Component/Team';
import Mentors from './Component/Mentors';
import FAQs from './Component/FAQs';


const App = ()=>{
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/timeline" component={Timeline} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/mentors" component={Mentors} />
      <Route exact path="/faqs" component={FAQs} />
    </Switch>
    </>
  )
}
 
export default App;