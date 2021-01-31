import React, { useState } from 'react';
import './App.css';
import { web3, portis } from './services/web3';
import Address from './components/address';
import Balance from './components/balance';

type IState = {
  address: string;
  balance: number;
}

const initialState: IState = {
  address: "",
  balance: 0
}

function App() {

  const [state, setState] = useState(initialState);
  web3.eth.getAccounts((accounts: any) => {
    console.log(accounts);
  });
  portis.showPortis();
  portis.onLogin((address) => {
    web3.eth.getBalance(address).then((balance) => {
      setState({ balance: Number(web3.utils.fromWei(balance)), address: address })
    });

  });


  return (
    <div className="App">
      <header className="App-header">
        <Address address={state.address}></Address>
        <Balance amount={state.balance} symbol={"BNB"}></Balance>
      </header>
    </div>
  );
}

export default App;