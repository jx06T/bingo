import React, { useState } from "react";
import { MaterialSymbolsCancelOutlineRounded, MaterialSymbolsSettingsOutlineRounded } from "./Icons";
import { useSettingsContext } from "../context/SettingsContext";

function BtnPair({ text, thisKey, onClick, selected }: { thisKey: string, text: [string, string], onClick: Function, selected: string }) {
    return (
        <div>
            <button onClick={() => onClick(thisKey, text[0])} className={` border-2 border-black h-8 rounded-full px-4 my-2 mx-2 ${text[0] === selected ? " bg-slate-400" : " bg-transparent"}`}>{text[0]}</button>
            <button onClick={() => onClick(thisKey, text[1])} className={` border-2 border-black h-8 rounded-full px-4 my-2 mx-2 ${text[1] === selected ? " bg-slate-400" : " bg-transparent"}`}>{text[1]}</button>
        </div>
    )

}

function BtnS({ text, thisKey, onClick, selected }: { thisKey: string, text: string[], onClick: Function, selected: string }) {
    return (
        <div>
            {
                text.map(e => (
                    <button key={e} onClick={() => onClick(thisKey, e)} className={` hover:scale-105 transition-transform  border-2 border-black h-8 rounded-full px-4 my-2 mx-2 ${e === selected ? " bg-slate-400" : " bg-transparent"}`}>{e}</button>
                ))
            }
        </div>
    )

}

const settingsMap: SettingsMapFormat[] = [
    {
        key: "grid",
        options: ["auto", "fixed"]
    },
    {
        key: "size",
        options: ["full", "max"]
    },
    {
        key: "aspectRatio",
        options: ["3-4", "1-1", "4-3", "16-9", "auto"]
    }
]

const generateTable = (): StateFormat[] => {
    const table = Array.from({ length: 25 }, (_, i) => i + 1);

    for (let i = table.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [table[i], table[j]] = [table[j], table[i]];
    }

    return table.map(e => ({ number: e, opened: false, show: false }))
}

function Settings() {
    const [showSettings, setShowSettings] = useState<boolean>(false)
    const { settings, setSettings } = useSettingsContext();

    const handleClick = (key: string, value: any) => {
        setSettings({ ...settings, [key]: value })
    }

    return (
        <div>
            <button onClick={() => setShowSettings(!showSettings)} className=" fixed top-2 right-1 w-10 h-10 text-center z-10 hover:scale-110 transition-transform "><MaterialSymbolsSettingsOutlineRounded className=" text-3xl md:text-4xl cursor-pointer"></MaterialSymbolsSettingsOutlineRounded></button>
            {showSettings &&
                <div onClick={(e) => setShowSettings(false)} className=" fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center z-30">
                    <div onClick={(e) => e.stopPropagation()} className=" pointer-events-auto p-3 px-4 rounded-lg border-[2px] settings w-[max(80%,18rem)] max-h-[80vh] bg-stone-200 overflow-y-auto">
                        <div className=" flex justify-between">
                            <h1 className=" text-2xl  underline">Settings</h1>
                            <button onClick={() => setShowSettings(false)} className=" text-2xl  underline hover:scale-110 transition-transform "><MaterialSymbolsCancelOutlineRounded className=" text-3xl "></MaterialSymbolsCancelOutlineRounded></button>
                        </div>
                        <div className=" mt-4 space-y-3">
                            {settingsMap.map(e => (
                                <div key={e.key} className=" flex items-center">
                                    <p className=" mb-1 ">{e.key}：</p>
                                    <BtnS thisKey={e.key} selected={settings[(e.key as keyof SettingsFormat)] as string || ""} text={e.options} onClick={handleClick}></BtnS>
                                </div>
                            ))}

                        </div>
                        <div className=" flex items-center mt-5 ">
                            <button onClick={() => setSettings({ ...settings, table: generateTable() })} className={` hover:scale-105 transition-transform border-2 border-red-600 hover:bg-red-300 h-8 rounded-full px-4 my-2 mx-2 }`}>Reassign numbers</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )

}

export default Settings