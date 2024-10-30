import React from "react";
import { useSettingsContext } from "../context/SettingsContext";
import { MaterialSymbolsCancelOutlineRounded, MaterialSymbolsSettingsOutlineRounded } from "./Icons";

interface ExtendedCardFormat extends CardFormat {
    state: StateFormat;
}

function Card({ state, imgPath, describe, name }: ExtendedCardFormat) {
    const { settings, setSettings } = useSettingsContext();

    const handleClickSH = () => {
        setSettings((prev: SettingsFormat) => {
            const newTable = prev.table.map(e => (e.number === state.number ? { ...e, show: true } : e))
            return { ...prev, table: newTable }
        })
    }

    const handleClickOP = () => {
        setSettings((prev: SettingsFormat) => {
            const newTable = prev.table.map(e => (e.number === state.number ? { ...e, show: false, opened: true } : e))
            return { ...prev, table: newTable }
        })
    }

    return (
        <div className="card bg-stone-200 rounded-md min-h-0 min-w-0 transition-transform duration-300 hover:scale-102">
            <div className="relative w-full h-full">
                {state.opened && (
                    <div className="w-48 h-48 rounded-br-full glass absolute text-6xl text-slate-200 pl-3">
                        <strong className="-mt-3 block">{state.number}</strong>
                    </div>
                )}
                <img
                    onClick={handleClickSH}
                    src={imgPath}
                    alt={name}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>
            {state.show && (
                <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center z-20 glass-2 animate-fadeIn">
                    <div className="bgi relative overflow-hidden bg-slate-300 rounded-md pointer-events-auto describe bg-slate-300settings w-[max(80%,18rem)] h-[max(80%,18rem)] p-4 flex animate-modalIn">
                        <img
                            src={imgPath}
                            alt={name}
                            className="rounded-md w-[50%] mr-4 h-full object-cover"
                        />
                        <div className="w-full py-1 flex flex-col justify-between items-center">
                            <div className="space-y-3 text-xl">
                                <h1 className="w-full mb-2 text-center text-3xl font-medium">{name}</h1>
                                <hr />
                                <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.ch}</pre>
                                <hr />
                                <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.en}</pre>
                                <hr />
                                <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.jp}</pre>
                            </div>
                            <div>
                                <div className="mb-8 bg-slate-400 w-48 h-48 rounded-full text-6xl text-center font-extrabold border-0 border-slate-200">
                                    {state.number}
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleClickOP}
                            className="right-3 top-4 absolute text-2xl transition-transform duration-300 hover:scale-110"
                        >
                            <MaterialSymbolsCancelOutlineRounded className="text-3xl -mr-2 -mt-3" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

// 只保留核心的动画关键帧
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes modalIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);

export default Card;