import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  pickedcolor: string;
}

const color_arr: string[] = ["#000000","#804000","#FE0000","#FE6A00","#FFD800","#00FF01","#FFFFFF","#01FFFF","#0094FE","#0026FF","#B100FE","#FF006E"]


//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const pickColor = (color: string) => {
  PixelPainterStore.update(
    s => {s.pickedcolor = color}
  )
}

export const changeColor = (y:number, x:number) => {
  PixelPainterStore.update(
    s => {s.canvas[y][x] = s.pickedcolor}
  )
}

export const clear  = () => {
  PixelPainterStore.update(
    s => {
      for (let i=0; i<16; i++){
        s.canvas[i] = []
        for (let j=0; j<16; j++){
          s.canvas[i].push('#FFFFFF')
        }
      }
    }
  )
}

export const random = () => {
  PixelPainterStore.update(
    s => {
      for (let i=0; i<16; i++){
        s.canvas[i] = []
        for (let j=0; j<16; j++){
          let number = Math.floor(Math.random() * 12);
          s.canvas[i].push(color_arr[number])
        }
      }
    }
  )
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  pickedcolor: color_arr[0]
 
})