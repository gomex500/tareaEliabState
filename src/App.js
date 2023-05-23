 import React, {useState} from 'react'

function App() {
  var [num, setNum] = useState([]);
  var [n, setN] = useState('');

  var insertar = () => {
    let nuevoN = [...num];
    if (n === '') {
      alert('ingrese un numero')
      return
    }
    nuevoN.splice(nuevoN.length, 0, n);
    setNum(nuevoN);
    setN('');
  }

  var borrar = (index) =>{
    let nuevoN = [...num];
    nuevoN.splice(index, 1);
    setNum(nuevoN)
  }

  var min = Math.min(...num);

  return (
    <div >
      <input type='number' value={n} onChange={(e) => setN(e.target.value)}/>
      <button onClick={insertar}>Ingresar</button>
      <p>Valor minimo: {min}</p>
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
