import Blockly from 'blockly';
import Phaser from 'phaser';
import map1 from './stage/tilemap.json';
import tiles from './stage/map.png';
import player1 from './stage/player.png';
import xmlFile1 from '../Blockly/test.xml';
//import BlocklyRunner from '../Blockly/BlocklyRunner.js';
var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 600,
    parent: 'phaserDiv',
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0,
            },
            debug: false,
        }
    },
    //ここにシーンを追加(preloadとかはここで定義しなくても良い)
    scene: {
        preload: preload, // 以下に定義する preload 関数をセットする
        create: create, // 以下に定義する create 関数をセットする
        update: update // 以下に定義する update 関数をセットする
    },
    render: {
        transparent: true,
    },
};

const blocklyDiv = document.getElementById("blocklyDiv");
blocklyDiv.style.left = config.width;
var player;
// ゲーム開始!!!
var game = new Phaser.Game(config);
// ゲーム開始前に呼び出される関数定義
function preload ()
{ // アセット（画像とか）の取得を行う
    //ここのthisはおそらくPhaser.AUTOのこと
    this.load.tilemapTiledJSON('map1', map1);
    this.load.image("tiles", tiles);
    this.load.spritesheet("player", player1, { frameWidth: 32, frameHeight: 32});
}
var mapDat;
var map2Img;
// ゲーム開始時に呼び出される関数
function create ()
{ // 背景を設定したり、プレイヤーの初期配置をしたりする
    //canvasとmapの大きさは比率も合わせて一致している必要があります。
    mapDat = this.add.tilemap("map1");
    let tileset = mapDat.addTilesetImage("tileset", "tiles");
    this.backgroundLayer = mapDat.createLayer("ground", tileset);
    map2Img = game.canvas.width / this.backgroundLayer.width;
    this.backgroundLayer.setScale(map2Img);
    //これ、このままではまずくて、ステージとキャラクターのズレをなくすためにステージと同じ座標軸でキャラクターを配置したい
    player = this.add.sprite(130, 345, "player");
    //player.setOrigin(0, 1);
}

// ゲーム進行時に呼び出される関数
function update ()
{ //プレイヤーを動かしたり、衝突判定からのロジックを回したり
    //ここでblockが使われたらこの動作をします的なことを書きます
    //多分キャラクターの座標更新だけなので難しくなさそう。
}
/*
  const blocklyRunner = new BlocklyRunner(xmlFile1);
  function startBlockly() {
    console.log("start");
    if (!isRunning) {
        isRunning = true;
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';

        console.log(workspace);
        let code = Blockly.JavaScript.workspaceToCode(workspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

        try {
            console.log("code: ", code);
            commandGenerator = eval("(function* () {" + code + "})()");
        } catch(err) {
            console.error(err);
        }

        blocklyRunner.updateBlockly();
        return commandGenerator;
    } else {
        return null;
    }
};


function runCode() {
    console.log(commandGenerator);
    if (isRunning) {
        if (++tick === cmdDelta) {
            let gen = commandGenerator.next();
            if (!gen.done) tick = 0;
            else {
                endRunning();
            }
        }
    }
};

// stage option
blocklyRunner.setBlockDefinition("move", function() {
    this.appendDummyInput()
    .appendField("Move")
    .appendField(new Blockly.FieldDropdown([
        ["→", "0"],
        ["←", "1"],
        ["↑", "2"],
        ["↓", "3"]
    ]), "move_direction");
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
}, function(block) {
    // TODO: ここ、blockをJSON.stringifyしてyieldの返り値で返せばhighlight出来る
    var dropdown_direction = block.getFieldValue('move_direction');
    return `tryMove(player, ${dropdown_direction});\
        yield true;\n`;
});
  var workspace;
  blocklyRunner.renderBlockly(startBlockly)
    .then((space) => {
        workspace = space;
    });*/