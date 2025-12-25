 # Overworld Generator – MakeCode Arcade Extension

This extension lets you **procedurally generate an overworld map** made of multiple tilemaps.  
You only specify the **width** and **height**, and the generator fills the world using random tilemaps.

---

##  Features
- Build a world grid (e.g., 4 × 4)
- Automatically assigns a random tilemap to each region
- Works with the official `overworld` extension
- Exposes a single block ➝ **"build world _X_ by _Y_"**

---

##  Example

```ts
// Build a 4x4 overworld
let world = overworldgen.buildWorld(4, 4)
let overworldManager = overworld.setOverworld16(world)

controller.moveSprite(player, 50, 50)
overworld.setPlayerSprite(player)
scene.cameraFollowSprite(player)
overworld.loadMap(0, 0)



> Open this page at [https://cle-spec.github.io/overworldgen/](https://cle-spec.github.io/overworldgen/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/cle-spec/overworldgen** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/cle-spec/overworldgen** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
