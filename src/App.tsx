import React, { useState } from 'react';
import './App.css';
import { SettingsProvider } from './context/SettingsContext';
import Settings from './components/Settings';
import data from './data/data.json';
import Card from './components/Card';
import { useSettingsContext } from "./context/SettingsContext";

function App() {
  const { settings, setSettings } = useSettingsContext();

  return (
    <div className=' app bg-slate-100 w-full'>
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
