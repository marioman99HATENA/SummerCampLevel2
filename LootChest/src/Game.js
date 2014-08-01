LootChest.Game = function(game)
{	
		this.map;
		this.tileset;
		this.layer;
		this.player;
		this.chests;
		this.sword1;
		this.sword2;
		this.chips;
		this.electroShield;
};

LootChest.Game.prototype = 
{
	preload: function()
	{},
	
	create: function()
	{
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.stage.backgroundColor = '#008800';
		
		this.map = this.add.tilemap('level');
		this.map.addTilesetImage('tiles-1');
		this.map.setCollisionByExclusion([13,15,16,46,47,48,49,50,51]);
		
		this.layer = this.map.createLayer('Tile Layer 1');
		this.layer.resizeWorld();
		
		this.physics.arcade.gravity.y = 250;
		this.chests = this.add.group();
		this.chips = this.add.group();
		this.electroShield = this.add.group();
		
		this.chests.add(new LootChest.Chest(this.game,100,172));
		
		this.player = new LootChest.Player(this.game,32,32);
		
		this.camera.follow(this.player);
		
	},
	
	update: function()
	{
	this.physics.arcade.collide(this.player,this.layer);
	this.physics.arcade.collide(this.chips,this.layer);
	this.physics.arcade.collide(this.chips);
	this.physics.arcade.collide(this.electroShield,this.layer);
	this.physics.arcade.overlap(this.player,this.chests,this.chestOverlap,null,this);
	this.physics.arcade.overlap(this.player,this.chips,this.chipOverlap,null,this);
//	this.physics.arcade.overlap(this.player,this.electroShield,this.electroShieldOverlap,null,this);
	this.player.update();
	
	
	},
	render: function()
	{
		//this.game.debug.body(this.player);
		//this.game.debug.bodyInfo(this.player,16,24);
		//this.game.debug.body(this.chests);
	},
	chestOverlap: function(player,chest)
	{
		if(!chest.opened){
			chest.open(player);
			for(var i =0; i< chest.chipAmount; i++){
				this.createChip(chest.x,chest.y);
			}
			this.createElectroShield(chest.x,chest.y);
		}
	
	},
	chipOverlap: function(player,chip)
	{
		chip.collect(player);
	
	},
	createChip: function(x,y)
	{
		var chip = new LootChest.Chip(this.game,x,y);
		chip.body.velocity.x = this.game.rnd.integerInRange(-200,200);
		chip.body.velocity.y = this.game.rnd.integerInRange(-200,0);
		this.chips.add(chip);
	
	},
	
	electroShieldOverlap: function(player,electroShield)
	{
		electroShield.collect(player);
	
	},
	createElectroShield: function(x,y)
	{
		var electroShield = new LootChest.ElectroShield(this.game,x,y);
		electroShield.body.velocity.x = this.game.rnd.integerInRange(-200,200);
		electroShield.body.velocity.y = this.game.rnd.integerInRange(-200,0);
		this.electroShield.add(electroShield);
		
	}
	
};