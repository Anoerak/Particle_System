/**
 * ParticleController class creates a particle system using PIXI.js library.
 * @class
 * @param {PIXI.Application} app - The PIXI application instance.
 * @param {Object} textures - The textures object containing the textures for the particles.
 * @param {Object} options - The options object containing the configuration for the particle system.
 * @param {Object} options.options - The options object containing the configuration for the particle system.
 * @param {Object} options.animatedBehavior - The animated behavior object containing the configuration for the particle animation.
 * @param {number} options.animatedBehavior.framerate - The framerate of the particle animation.
 * @param {boolean} options.animatedBehavior.loop - Whether the particle animation should loop.
 * @param {Array} options.animatedBehavior.textures - The array of textures to use for the particle animation.
 */
export class ParticleController {
	constructor(app, textures, options) {
		this.container = new PIXI.Container();
		app.stage.addChild(this.container);
		this.now = Date.now();

		this.options = options.options;
		this.animatedBehavior = {
			framerate: 30,
			loop: true,
			textures: textures.textures,
		};

		this.emitter = new PIXI.particles.Emitter(this.container, [this.animatedBehavior], this.options);
		this.emitter.particleConstructor = PIXI.particles.AnimatedParticle;

		app.ticker.add(() => {
			this.newNow = Date.now();
			this.elapsed = this.newNow - this.now;
			// We update the emitter with the elapsed time, taking into account the timeScale
			this.emitter.update(this.elapsed * 0.001);
			this.now = this.newNow;
		});

		this.emitter.emit = true;
	}
}

/**
 * A controller class for managing textures used in a particle system.
 * @class
 */
export class TexturesController {
	/**
	 * Creates a new instance of TexturesController.
	 * @constructor
	 * @param {string} folderPath - The path to the folder containing the texture files.
	 * @param {number} numFiles - The number of texture files to use.
	 * @param {string} [order] - The order in which to use the texture files. Can be 'ASC' or 'DESC'. If not provided, the files will be used in random order.
	 */
	constructor(folderPath, numFiles, order) {
		if (order) {
			this.textures = this.createTexturePaths(folderPath, numFiles, order);
		} else {
			this.textures = this.createRandomTexturePaths(folderPath, numFiles);
		}
	}

	/**
	 * Creates an array of texture paths in random order.
	 * @param {string} folderPath - The path to the folder containing the texture files.
	 * @param {number} numFiles - The number of texture files to use.
	 * @returns {PIXI.Texture[]} An array of PIXI.Texture objects.
	 */
	createRandomTexturePaths(folderPath, numFiles) {
		let files = Array.from({ length: numFiles }, (_, i) => `${folderPath}/${String(i).padStart(3, '0')}.png`);
		// Randomize array in-place using Durstenfeld shuffle algorithm
		for (let i = files.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[files[i], files[j]] = [files[j], files[i]];
		}
		return files.map((file) => PIXI.Texture.from(file));
	}

	/**
	 * Creates an array of texture paths in a specific order.
	 * @param {string} folderPath - The path to the folder containing the texture files.
	 * @param {number} numFiles - The number of texture files to use.
	 * @param {string} order - The order in which to use the texture files. Can be 'ASC' or 'DESC'.
	 * @returns {PIXI.Texture[]} An array of PIXI.Texture objects.
	 */
	createTexturePaths(folderPath, numFiles, order) {
		// We create an array of texture paths and order them in a specific way (order: ASC or DESC)
		let files = Array.from({ length: numFiles }, (_, i) => `${folderPath}/${String(i).padStart(3, '0')}.png`);
		if (order === 'ASC') {
			return files.map((file) => PIXI.Texture.from(file));
		} else if (order === 'DESC') {
			return files.reverse().map((file) => PIXI.Texture.from(file));
		}
	}
}
