import React, { useEffect, useState } from "react";
import { useSettingsContext } from "../context/SettingsContext";
import { MaterialSymbolsCancelOutlineRounded, MaterialSymbolsSettingsOutlineRounded } from "./Icons";

interface ExtendedCardFormat extends CardFormat {
    state: StateFormat;
}

function Card({ state, imgPath, describe, name }: ExtendedCardFormat) {
    const { settings, setSettings } = useSettingsContext();
    const [showText, setShowText] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShowText(state.show)
        }, 300);

    }, [state])

    const handleClickSH = () => {
        setSettings((prev: SettingsFormat) => {
            const newTable = prev.table.map(e => (e.number === state.number ? { ...e, show: true } : e))
            return { ...prev, table: newTable }
        })
    }

    const handleClickOP = () => {
        setSettings((prev: SettingsFormat) => {
            const newTable = prev.table.map(e => (e.number === state.number ? { ...e, show: false, opened: true } : e))
            setShowText(false)
            return { ...prev, table: newTable }
        })
    }

    return (
        <div className=" relative card bg-stone-200 rounded-md min-h-0 min-w-0 transition-transform duration-300 hover:scale-102">
            <div className="relative w-full h-full">

                <div onClick={handleClickSH} className={` opacity-0 hover:opacity-100 transition-all duration-500 w-full h-full glass-3 absolute big-text text-slate-200 pl-3`}>
                </div>
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

            {/* <div className={` describe ${state.show ? " show fixed left-0 right-0 top-0 bottom-0 pointer-events-auto " : "fixed left-[50%] right-[50%] top-[50%] bottom-[50%] pointer-events-none "} transition-all duration-500 flex justify-center items-center z-20 glass-2`}> */}
            <div className={` describe ${state.show ? " show " : ""} transition-all duration-500  z-20 glass-2`}>
                <div className={` bgi relative bg-slate-300 pointer-events-auto overflow-y-hidden `}>
                    <div className="  rounded-md card-img">
                        <img
                            src={imgPath}
                            alt={name}
                            className=" w-full rounded-md h-full object-cover"
                        />
                    </div>
                    <div className={`${showText ? " opacity-100" : " opacity-0"} overflow-y-auto transition-all duration-300 h-full w-full py-1 flex flex-col justify-between items-center`}>
                        <div className="space-y-3 text-sm md:text-xl">
                            <h1 className="w-full mb-1 text-center text-3xl font-medium">{name}</h1>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.ch}</pre>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.en}</pre>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.jp}</pre>
                        </div>
                        <div className=" mt-3 pb-0">
                            <div className="mb-8 p-5 bg-slate-400 w-full h-full aspect-square-j rounded-full big-text text-center font-extrabold border-0 border-slate-200 flex justify-center items-center">
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