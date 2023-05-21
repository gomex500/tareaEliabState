 import React, {useState} from 'react'

function App() {
  var [num, setNum] = useState([]);
  var [n, setN] = useState(0);

  var insertar = () => {
    let nuevoN = [...num];
    nuevoN.splice(nuevoN.length, 0, n);
    setNum(nuevoN);
  }

  var borrar = (index) =>{
    let nuevoN = [...num];
    nuevoN.splice(index, 1);
    setNum(nuevoN)
  }

  return (
    <div >
      <input type='number' onChange={(e) => setN(e.target.value)}/>
      <button onClick={insertar}>Ingresar</button>
      <ul>
          {num.map((numero, index) =>(
          <li key={index}>
            {numero} <button onClick={() => borrar(index)}>X</button>
          </li>
         ))}
      </ul>
    </div>
  );
}

export default App;
