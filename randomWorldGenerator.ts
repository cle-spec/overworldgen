//% color="#01959D"
//% icon="\uf0ac"
namespace overworldgen {

    // list of tilemaps used for random fill
    // (user edits these manually in this file)
    const defaultMaps: tiles.TileMapData[] = [
        tilemap`forest`,
        tilemap`desert`,
        tilemap`lava`
    ]

    /**
     * Build a random overworld using width & height
     */
    //% blockId=owgen_build_world
    //% block="build world width $cols row $rows"
    //% cols.defl=3 rows.defl=3
    //% group=Overworld Generator
    export function buildWorld(cols: number, rows: number): tiles.TileMapData[][] {
        let world: tiles.TileMapData[][] = []
        let seed = randint(0, 100000)

        for (let x = 0; x < cols; x++) {
            world[x] = []
            for (let y = 0; y < rows; y++) {
                let indexSeed = seed + x * 37 + y * 13
                let index = indexSeed % defaultMaps.length
                world[x][y] = defaultMaps[index]
            }
        }

        return world
    }
}
