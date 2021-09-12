const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 4
const scGap : number = 0.04 / parts 
const strokeFactor : number = 90 
const sizeFactor : number = 11.2 
const rFactor : number = 24.2 
const delay : number = 20 
const deg : number = Math.PI / 2
const backColor : string = "#BDBDBD"
const colors : Array<string> = [
    "#B71C1C",
    "#1A237E",
    "#00C853",
    "#FF6D00",
    "#AA00FF"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}