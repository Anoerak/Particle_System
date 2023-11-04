import { ParticleController, TexturesController } from './ParticleSystemController.js';
import { CoinsModel } from '../Models/CoinsModel.js';

/**
 * StageController class creates a PIXI application and initializes textures, options and particle systems.
 * @class
 */
export class StageController {
	constructor(width, height) {
		this.size = { width, height };
		this.app = new PIXI.Application({ ...this.size });
		document.body.appendChild(this.app.view);
	}

	init(texturesConfig, optionsConfig) {
		this.textures = texturesConfig.map((textureConfig) => {
			return new TexturesController(textureConfig.folderPath, textureConfig.numFiles, textureConfig.order);
		});

		this.options = optionsConfig.map((optionConfig) => {
			return new CoinsModel(optionConfig);
		});

		this.particleSystems = this.textures.map((textures, index) => {
			return new ParticleController(this.app, textures, this.options[index]);
		});
	}
}
