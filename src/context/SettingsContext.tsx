import React, { createContext, useState, useContext, useCallback, ReactNode, useRef, useEffect } from 'react';

interface SettingsContextType {
  settings: SettingsFormat,
  setSettings: Function,
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const generateTable = (): StateFormat[] => {
  const table = Array.from({ length: 25 }, (_, i) => i + 1);

  for (let i = table.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [table[i], table[j]] = [table[j], table[i]];
  }

  return table.map(e => ({ number: e, opened: false, show: false }))
}

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsFormat>({ init: true, grid: "fixed", size: "max", aspectRatio: "3-4", table: generateTable() });

  useEffect(() => {
    const initialSettings = localStorage.getItem('bingo-settings');
    if (initialSettings) {
      const parsedSettings = JSON.parse(initialSettings);
      setSettings({ ...parsedSettings, init: false });
    } else {
      localStorage.setItem('bingo-settings', JSON.stringify(settings))
    }
  }, [])

  useEffect(() => {
    if (settings.init) {
      return
    }
    localStorage.setItem('bingo-settings', JSON.stringify(settings))
  }, [settings])

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = (): SettingsContextType => {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('SettingsContext must be used within a StateProvider');
  }
  return context;
};