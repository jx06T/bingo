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
                <div className={` ${state.opened ? " opacity-100 pointer-events-none" : " opacity-0 pointer-events-none"} transition-all duration-500 w-[80%] h-[80%] max-h-fit max-w-fit rounded-br-full glass absolute big-text text-slate-200 pl-3`}>
                    <strong className=" -ml-2 md:-ml-0 md:-mt-3 block mr-6 md:mr-12 mb-6">{state.number}</strong>
                </div>

                <img
                    onClick={handleClickSH}
                    src={imgPath}
                    alt={name}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>

            {/* <div className={` describe ${state.show ? " show fixed left-0 right-0 top-0 bottom-0 pointer-events-auto " : "fixed left-[50%] right-[50%] top-[50%] bottom-[50%] pointer-events-none "} transition-all duration-500 flex justify-center items-center z-20 glass-2`}> */}
            <div className={` describe ${state.show ? " show " : ""} transition-all duration-500  z-20 glass-2 overflow-y-hidden`}>
                <div className={` bgi relative bg-slate-300 pointer-events-auto sm:overflow-y-hidden overflow-y-auto`}>
                    <div className="  rounded-md card-img  block">
                        <img
                            src={imgPath}
                            alt={name}
                            className=" w-full rounded-md h-full object-cover block"
                        />
                    </div>
                    <div className={`${showText ? " opacity-100" : " opacity-0"} sm:overflow-y-auto transition-all duration-300 h-full w-full py-1 flex flex-col justify-start items-center `}>
                        <h1 className="w-full mb-3 text-center text-3xl md:text-4xl lg:text-5xl font-medium ">{name}</h1>
                        <div className="space-y-3 text-lg md:text-2xl lg:text-3xl ">
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.ch}</pre>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.en}</pre>
                            <hr />
                            <pre className="w-full text-wrap break-words whitespace-pre-line">{describe.jp}</pre>
                        </div>

                        <div className=" mt-10 p-2 w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52">
                            <div className="mb-8 p-5 bg-slate-400 w-full h-full aspect-square-j rounded-full big-text text-center font-extrabold border-0 border-slate-200 flex justify-center items-center">
                                <span>
                                    {state.number}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleClickOP}
                        className="right-1 top-2 absolute text-2xl transition-transform duration-300 hover:scale-110"
                    >
                        <MaterialSymbolsCancelOutlineRounded className="text-3xl md:text-4xl text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;