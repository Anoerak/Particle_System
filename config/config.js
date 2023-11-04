/*-------------------------------------------------------------
|	We store all our configuration in a single file, config.js, 
|	which we import into our main.js file. 
|	This is a good practice to follow, as it makes it easier to change 
|	the configuration of our particle system without having to dig through 
|	our classes.
-------------------------------------------------------------*/

/**
 * Configuration object for A Particular Test.
 * @typedef {Object} Config
 * @property {Object} stageSize - Defines the size of the stage.
 * @property {number} stageSize.width - The width of the stage.
 * @property {number} stageSize.height - The height of the stage.
 * @property {Array<Object>} textures - Defines the textures to use for particles.
 * @property {string} textures[].folderPath - The folder path where the textures are located.
 * @property {number} textures[].numFiles - The number of files in the folder.
 * @property {string} [textures[].order] - The order in which to use the files (ASC or DESC). If empty, files will be used in a random order.
 * @property {Array<Object>} particleModelOptions - Defines the options for particles.
 * @property {Object} particleModelOptions[].speed - Defines the speed of particles.
 * @property {number} particleModelOptions[].speed.startSpeed - The starting speed of particles.
 * @property {number} particleModelOptions[].speed.endSpeed - The ending speed of particles.
 */
export const config = {
	// We define the size of our stage
	stageSize: {
		width: 450,
		height: 800,
	},
	// We define the textures we want to use for our particles
	textures: [
		{
			// We define the folder path where our textures are located
			folderPath: '/lib/assets/Imgs/gfx/CoinsGold',
			// We define the number of files in the folder
			numFiles: 9,
			/* We define the order in which we want to use the files (ASC or DESC)
			 *  We can also leave this field empty, in which case the files will be used in a random order
			 */
			order: 'ASC',
		},
		{
			folderPath: '/lib/assets/Imgs/gfx/CoinsGold',
			numFiles: 9,
			order: 'DESC',
		},
	],
	// We define the options for our particles (see https://pixijs.io/pixi-particles-editor/# for more information)
	particleModelOptions: [
		{
			speed: {
				startSpeed: 900,
				endSpeed: 450,
			},
		},
		{
			speed: {
				startSpeed: 700,
				endSpeed: 300,
			},
		},
	],
};
