import React from "react";
import AccountContainer from "./components/AccountContainer";
import "./App.css";
import AddTransactionForm from "./components/AddTransactionForm";

function App() {
  

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />  
       <AddTransactionForm /> 
    </div>
  );
}

export default App;