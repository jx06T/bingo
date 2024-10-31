// declarations.d.ts
interface SettingsFormat {
    init?: boolean,
    grid: "auto" | "fixed",
    size: "full" | "max",
    aspectRatio: "auto" | "1-1" | "3-4" | "4-3" | "16-9",
    table: StateFormat[],
}

interface CardFormat {
    id?: number,
    imgPath: string,
    name: string,
    describe: {
        en?: string,
        ch: string,
        jp: string
    }
}


interface SettingsMapFormat {
    key: string,
    options: [string, string] | string[]
}

interface StateFormat {
    number: number,
    opened: boolean,
    show: boolean,
}


