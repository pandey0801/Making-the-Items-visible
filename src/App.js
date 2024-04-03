import Header from "./componenets/Layout/Header";
import { Fragment } from "react";
import Meals from "./componenets/Meals/Meals";

function App() {
  // console.log("sdds");
  return (
    <Fragment>
      <Header />
          <Meals />
      </Fragment>
    
  );
}

export default App;
