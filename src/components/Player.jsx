import {useState, useRef} from 'react';
export default function Player() {
  const [name,setName] = useState(null);
  const Reference = useRef();
  
  function display(){
    setName(Reference.current.value);
  }
  return (
   
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={Reference}/>
        <button onClick={display}>Set Name</button>
        
      </p>
      <h1>{name}</h1>
    </section>
  );
}
