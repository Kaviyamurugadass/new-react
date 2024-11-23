import {useState, useRef} from 'react';

export default function Player() {
  const [name,setName] = useState(null);
  const Reference = useRef();
  
  function display(){
    setName(Reference.current.value);
    Reference.current.value = "";
  }

  return (
    <div className="container mx-auto px-4 my-8">
      {/* Player Name Section */}
      <section className="p-8 bg-gradient-radial from-game-gradient-from to-game-gradient-to rounded-lg shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-game-text mb-4">Welcome {name ?? "unknown entity"}</h2>
        <div className="flex gap-4 justify-center items-center">
          <input 
            type="text" 
            ref={Reference} 
            placeholder='Enter your name'
            className="flex-1 max-w-md px-4 py-2 rounded-lg border-2 border-game-primary bg-game-input-bg focus:outline-none focus:border-game-primary-hover text-game-text-light"
          />
          <button 
            onClick={display}
            className="bg-game-primary text-game-text-dark px-6 py-2 rounded-lg hover:bg-game-primary-hover transition-colors font-semibold whitespace-nowrap"
          >
            SET NAME
          </button>
        </div>
        {name && <h1 className="text-2xl text-game-text mt-4 font-bold text-center">{name}</h1>}
      </section>

      {/* Game Levels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Easy Level */}
        <section className="p-8 bg-gradient-radial from-green-600 to-green-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-green-100 mb-4 font-handjet">Easy Mode</h2>
          <div className="space-y-4">
            <p className="text-green-200">Target Time: 1-3 seconds</p>
            <div className="flex justify-between items-center">
              <span className="text-green-200">Best Score:</span>
              <span className="text-green-100 font-handjet text-2xl">0.00s</span>
            </div>
            <button className="w-full bg-green-500 text-green-900 py-3 rounded-lg hover:bg-green-400 transition-colors font-semibold mt-4">
              Start Game
            </button>
          </div>
        </section>

        {/* Medium Level */}
        <section className="p-8 bg-gradient-radial from-blue-600 to-blue-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-blue-100 mb-4 font-handjet">Medium Mode</h2>
          <div className="space-y-4">
            <p className="text-blue-200">Target Time: 3-5 seconds</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-200">Best Score:</span>
              <span className="text-blue-100 font-handjet text-2xl">0.00s</span>
            </div>
            <button className="w-full bg-blue-500 text-blue-900 py-3 rounded-lg hover:bg-blue-400 transition-colors font-semibold mt-4">
              Start Game
            </button>
          </div>
        </section>

        {/* Hard Level */}
        <section className="p-8 bg-gradient-radial from-orange-600 to-orange-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-orange-100 mb-4 font-handjet">Hard Mode</h2>
          <div className="space-y-4">
            <p className="text-orange-200">Target Time: 5-7 seconds</p>
            <div className="flex justify-between items-center">
              <span className="text-orange-200">Best Score:</span>
              <span className="text-orange-100 font-handjet text-2xl">0.00s</span>
            </div>
            <button className="w-full bg-orange-500 text-orange-900 py-3 rounded-lg hover:bg-orange-400 transition-colors font-semibold mt-4">
              Start Game
            </button>
          </div>
        </section>

        {/* Hardest Level */}
        <section className="p-8 bg-gradient-radial from-red-600 to-red-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-red-100 mb-4 font-handjet">Hardest Mode</h2>
          <div className="space-y-4">
            <p className="text-red-200">Target Time: 7-10 seconds</p>
            <div className="flex justify-between items-center">
              <span className="text-red-200">Best Score:</span>
              <span className="text-red-100 font-handjet text-2xl">0.00s</span>
            </div>
            <button className="w-full bg-red-500 text-red-900 py-3 rounded-lg hover:bg-red-400 transition-colors font-semibold mt-4">
              Start Game
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
