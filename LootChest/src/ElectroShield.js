LootChest.ElectroShield = function(game,x,y)
{
		this.game = game;
	
		Phaser.Sprite.call(this,game,x,y,'ElectroShield');
		
		game.physics.enable(this,Phaser.Physics.ARCADE);
	
		this.body.collideWorldBounds = true;	
	
		game.add.existing(this);
};

LootChest.ElectroShield.prototype = Object.create(Phaser.Sprite.prototype);
LootChest.ElectroShield.prototype.constructor = LootChest.ElectroShield;
LootChest.ElectroShield.prototype.collect = function(player)
{
	player.electroShieldAmount++;
	this.kill();
}