import {useState, useRef} from 'react';
export default function Player() {
  const [name,setName] = useState(null);
  const Reference = useRef();
  
  function display(){
    setName(Reference.current.value);
    Reference.current.value = "";
  }
  return (
    <section className="p-8 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg shadow-xl max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-white mb-4">Welcome {name ?? "unknown entity"}</h2>
      <div className="flex gap-4">
        <input 
          type="text" 
          ref={Reference} 
          placeholder='Enter your name'
          className="flex-1 px-4 py-2 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-500"
        />
        <button 
          onClick={display}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
        >
          SET NAME
        </button>
      </div>
      {name && <h1 className="text-2xl text-purple-200 mt-4 font-bold">{name}</h1>}
    </section>
  );
}
