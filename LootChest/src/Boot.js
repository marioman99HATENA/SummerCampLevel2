LootChest = 
{

};

LootChest.Boot = function (game)
{

};

LootChest.Boot.prototype = 
{
	preload: function ()
	{
		this.load.tilemap('level','assets/sprites/level1.json',null, Phaser.Tilemap.TILED_JSON);
		this.load.image('tiles-1', 'assets/sprites/tiles-1.png');
		this.load.spritesheet('player','assets/sprites/dude.png', 32,48);
		this.load.spritesheet('chest','assets/sprites/chest2.png',52,52);
		this.load.spritesheet('chip','assets/sprites/chip2.png',16,16);
		this.load.image('sword1','assets/sprites/sword1.png');
		this.load.image('sword2','assets/sprites/sword2.png');
		this.load.image('ElectroShield','assets/sprites/ElectroShield.png');
		
	},
	
	create: function ()
	{
		this.state.start('Game');
	}

};