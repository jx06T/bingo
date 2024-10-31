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

                <div className={` ${state.opened ? " opacity-100 pointer-events-none" : " opacity-0 pointer-events-none"} transition-all duration-500 w-[80%] h-[80%] rounded-br-full glass absolute big-text text-slate-200 pl-3`}>
                    <strong className=" -ml-2 md:-ml-0 md:-mt-3 block">{state.number}</strong>
                </div>

                <img
                    onClick={handleClickSH}
                    src={imgPath}
                    alt={name}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>

            <div className={` ${state.show ? " fixed left-0 right-0 top-0 bottom-0 pointer-events-auto " : " fixed left-[50%] right-[50%] top-[60%] bottom-[60%] opacity-0 pointer-events-none "} transition-all duration-500 fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center z-20 glass-2 animate-fadeIn`}>
                <div className=" bgi relative overflow-hidden bg-slate-300 rounded-md pointer-events-auto describe bg-slate-300settings w-[max(85%,18rem)] max-h-[90vh] overflow-y-auto p-4 flex flex-col md:flex-row animate-modalIn">
                    <div className=" md:max-w-[55%] md:mr-4 rounded-md ">
                        <img
                            src={imgPath}
                            alt={name}
                            className=" w-full rounded-md h-full object-cover"
                        />
                    </div>
                    <div className="w-full py-1 flex flex-col justify-between items-center">
                        <div className="space-y-3 text-sm md:text-xl">
                            <h1 className="w-full mb-1 text-center text-3xl font-medium">{name}</h1>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.ch}</pre>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.en}</pre>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.jp}</pre>
                        </div>
                        <div className=" mt-3 pb-3">
                            <div className="mb-8 p-2 bg-slate-400 w-full h-full aspect-square-j rounded-full big-text text-center font-extrabold border-0 border-slate-200 flex justify-center items-center">
                                <span>
                                    {state.number}
                                </span>
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
        </div>
    )
}

export default Card;