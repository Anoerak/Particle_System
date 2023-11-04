import { config } from './config/config.js';
import { StageController } from './Controllers/StageController.js';

window.onload = () => {
	/**
	 * The controller for the main stage.
	 * @type {StageController}
	 */
	let stage = new StageController(config.stageSize.width, config.stageSize.height);
	stage.init(config.textures, config.particleModelOptions);
};
