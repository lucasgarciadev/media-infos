import { ChangeEvent, Fragment, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

// import { usePeopleList } from './reducers/people';
import { GlobalStyle } from "./styles/global";

import Nav from "./components/Nav";
import { Template } from "./components/MainComponents";


const App = () => {

  // const [list, dispatch] = usePeopleList();

  // const [inputName, setInputName] = useState('');

  // const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputName(e.target.value);
  // }

  // const handleAddButton = () => {
  //   dispatch({
  //     type: 'ADD',
  //     payload: {
  //       name: inputName
  //     }
  //   })
  //   setInputName('');
  // }

  // const deletePerson = (id: string) => {
  //   dispatch({
  //     type: 'DEL',
  //     payload: { id }
  //   })
  // }

  // const handleOrderButton = () => {
  //   dispatch({
  //     type: 'ORDER'
  //   })
  // }

  return (
      <Fragment >
        <BrowserRouter>
        
          <Nav />

          <Template>
            <Routes/>
          </Template>

        </BrowserRouter>

        <GlobalStyle />
      </Fragment>
    
  )
}

{/* <button onClick={handleOrderButton} >Ordenar</button>

<h1>List of People</h1>

<input type="text" value={inputName} onChange={handleInputValue} />
<button onClick={handleAddButton}>Adicionar</button>

<ul>
  {list.map((item, index) =>
    <li key={index} >
      {item.name}
      <button onClick={() => deletePerson(item.id)} >Deletar</button>
    </li>
  )}
</ul> */}

export default App;
