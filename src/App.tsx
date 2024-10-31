import React, { useEffect, useState } from 'react';
import './App.css';
import { SettingsProvider } from './context/SettingsContext';
import Settings from './components/Settings';
import data from './data/data.json';
import Card from './components/Card';
import { useSettingsContext } from "./context/SettingsContext";

function App() {
  const { settings, setSettings } = useSettingsContext();
  const [showWiat, setShowWait] = useState<boolean>(true)

  useEffect(() => {
    const handleLoad = () => {
      setShowWait(false)
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [])

  return (
    <div className=' app bg-slate-200 w-full'>
      {showWiat && (
        <div className=' fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-slate-100 z-50 flex justify-center items-center'>
          <div className='loader'></div>
        </div>
      )}
      <div className="main px-2 pt-3">
        <h1 className=' w-full text-center text-2xl md:text-3xl mb-1 font-medium'>{data.title}</h1>
        {/* <h2 className=' w-full text-center text-lg mb-1'>{data.subtitle}</h2> */}
      </div>
      <div className={` px-3 pb-3 cards g-${settings.grid} i-${settings.aspectRatio} s-${settings.size} mb-4`}>
        {data.cards.map((card: CardFormat, i) => (
          <Card state={settings.table[i]} key={card.id} imgPath={card.imgPath} name={card.name} describe={card.describe}></Card>
        ))}
      </div>
      <Settings></Settings>
    </div>
  );
}

export default App;
