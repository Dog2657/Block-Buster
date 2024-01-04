import { countIntersects } from "./general"
import Tile from "./tile"

export default class board{
    matrix: Array<Array<Tile>> = []

    constructor(size: number, possibleCharacters: Array<string>){
        const temp: Array<number> = []

        for(let i=0; i<size; i++){
            this.matrix.push(new Array(size).fill(undefined).map(() => {
                let index = -1

                while(index === -1 || temp.includes(index)){
                    index = Math.round(Math.random() * (possibleCharacters.length - 1))
                }

                if(possibleCharacters.length < 3 || temp.length >= 3)
                    temp.splice(0, 1)

                temp.push(index)

                return new Tile(possibleCharacters[index])
            }))
        }
    }

    getSlot(colum: number, row: number){
        return this.matrix[colum][row]
    }

    getCollidingTile(x: number, y: number){
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix.length; j++) {
                const instance = this.matrix[i][j]

                if(x < (instance.x - instance.size) || y < (instance.y - instance.size))
                    continue

                if((instance.x + instance.size) < x || (instance.y + instance.size) < y)
                    continue

                    
                const lines = instance.corner_points.map(({x, y}, i) => {
                    const next = instance.corner_points[ (i >= instance.corner_points.length -1)? 0 : i+1]
                    
                    return {x1: x, y1: y, x2: next.x, y: next.y}
                })
                //console.log(countIntersects({x1: 0, y1: instance.y, x2: x, y2: y}, lines))
            }
        }
    }


    render(context: CanvasRenderingContext2D){
        this.matrix.forEach(elements => {
            elements.forEach(instance => {
                instance.draw(context)
            })
        });
    }
}