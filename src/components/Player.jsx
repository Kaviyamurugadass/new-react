import {useState, useRef} from 'react';
export default function Player() {
  const [name,setName] = useState(null);
  const Reference = useRef();
  
  function display(){
    setName(Reference.current.value);
    Reference.current.value = "";
  }
  return (
   
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={Reference} placeholder='player name please'/>
        <button onClick={display}>SET NAME</button>
        
      </p>
      <h1>{name}</h1>
    </section>
  );
}
