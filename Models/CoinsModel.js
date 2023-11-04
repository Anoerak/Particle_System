/**
 * CoinsModel class represents the model for coins in a game.
 * @class
 */
export class CoinsModel {
	/**
	 * Creates a new CoinsModel instance.
	 * @constructor
	 * @param {Object} optionsConfig - The configuration options for the CoinsModel instance.
	 * @param {boolean} [optionsConfig.loop=true] - Whether the animation should loop.
	 * @param {number} [optionsConfig.framerate=30] - The framerate of the animation.
	 * @param {Object} [optionsConfig.alpha] - The alpha values for the animation.
	 * @param {number} [optionsConfig.alpha.start=0.5] - The starting alpha value.
	 * @param {number} [optionsConfig.alpha.end=1] - The ending alpha value.
	 * @param {Object} [optionsConfig.scale] - The scale values for the animation.
	 * @param {number} [optionsConfig.scale.start=0] - The starting scale value.
	 * @param {number} [optionsConfig.scale.end=0.5] - The ending scale value.
	 * @param {number} [optionsConfig.scale.minimumScaleMultiplier=1] - The minimum scale multiplier.
	 * @param {Object} [optionsConfig.speed] - The speed values for the animation.
	 * @param {number} [optionsConfig.speed.startSpeed=900] - The starting speed value.
	 * @param {number} [optionsConfig.speed.endSpeed=450] - The ending speed value.
	 * @param {number} [optionsConfig.speed.minimumSpeedMultiplier=1] - The minimum speed multiplier.
	 * @param {Object} [optionsConfig.acceleration] - The acceleration values for the animation.
	 * @param {number} [optionsConfig.acceleration.x=0] - The x acceleration value.
	 * @param {number} [optionsConfig.acceleration.y=1500] - The y acceleration value.
	 * @param {number} [optionsConfig.maxSpeed=0] - The maximum speed value.
	 * @param {Object} [optionsConfig.startRotation] - The starting rotation values for the animation.
	 * @param {number} [optionsConfig.startRotation.min=-110] - The minimum starting rotation value.
	 * @param {number} [optionsConfig.startRotation.max=-75] - The maximum starting rotation value.
	 * @param {boolean} [optionsConfig.noRotation=false] - Whether the animation should not rotate.
	 * @param {Object} [optionsConfig.rotationSpeed] - The rotation speed values for the animation.
	 * @param {number} [optionsConfig.rotationSpeed.min=0] - The minimum rotation speed value.
	 * @param {number} [optionsConfig.rotationSpeed.max=150] - The maximum rotation speed value.
	 * @param {Object} [optionsConfig.lifetime] - The lifetime values for the particles.
	 * @param {number} [optionsConfig.lifetime.min=2] - The minimum lifetime value.
	 * @param {number} [optionsConfig.lifetime.max=2] - The maximum lifetime value.
	 * @param {string} [optionsConfig.blendMode='normal'] - The blend mode for the animation.
	 * @param {number} [optionsConfig.frequency=0.075] - The frequency of the animation.
	 * @param {number} [optionsConfig.emitterLifetime=-1] - The lifetime of the emitter.
	 * @param {number} [optionsConfig.maxParticles=500] - The maximum number of particles.
	 * @param {Object} [optionsConfig.pos] - The position of the emitter.
	 * @param {number} [optionsConfig.pos.x=400] - The x position of the emitter.
	 * @param {number} [optionsConfig.pos.y=0] - The y position of the emitter.
	 * @param {boolean} [optionsConfig.addAtBack=true] - Whether to add particles at the back.
	 * @param {string} [optionsConfig.spawnType='rect'] - The type of spawn.
	 * @param {Object} [optionsConfig.spawnRect] - The spawn rectangle values.
	 * @param {number} [optionsConfig.spawnRect.x=-300] - The x position of the spawn rectangle.
	 * @param {number} [optionsConfig.spawnRect.y=450] - The y position of the spawn rectangle.
	 * @param {number} [optionsConfig.spawnRect.w=300] - The width of the spawn rectangle.
	 * @param {number} [optionsConfig.spawnRect.h=0] - The height of the spawn rectangle.
	 * @param {boolean} [optionsConfig.spawnBurst=false] - Whether to spawn particles in a burst.
	 */
	constructor(optionsConfig) {
		this.options = {
			loop: optionsConfig.loop !== undefined ? optionsConfig.loop : true,
			framerate: optionsConfig.framerate !== undefined ? optionsConfig.framerate : 30,
			alpha: {
				start: optionsConfig.alpha !== undefined && optionsConfig.alpha.start !== undefined ? optionsConfig.alpha.start : 0.5,
				end: optionsConfig.alpha !== undefined && optionsConfig.alpha.end !== undefined ? optionsConfig.alpha.end : 1,
			},
			scale: {
				start: optionsConfig.scale !== undefined && optionsConfig.scale.start !== undefined ? optionsConfig.scale.start : 0,
				end: optionsConfig.scale !== undefined && optionsConfig.scale.end !== undefined ? optionsConfig.scale.end : 0.5,
				minimumScaleMultiplier:
					optionsConfig.scale !== undefined && optionsConfig.scale.minimumScaleMultiplier !== undefined
						? optionsConfig.scale.minimumScaleMultiplier
						: 1,
			},
			speed: {
				start:
					optionsConfig.speed !== undefined && optionsConfig.speed.startSpeed !== undefined
						? optionsConfig.speed.startSpeed
						: 900,
				end: optionsConfig.speed !== undefined && optionsConfig.speed.endSpeed !== undefined ? optionsConfig.speed.endSpeed : 450,
				minimumSpeedMultiplier:
					optionsConfig.speed !== undefined && optionsConfig.speed.minimumSpeedMultiplier !== undefined
						? optionsConfig.speed.minimumSpeedMultiplier
						: 1,
			},
			acceleration: {
				x:
					optionsConfig.acceleration !== undefined && optionsConfig.acceleration.x !== undefined
						? optionsConfig.acceleration.x
						: 0,
				y:
					optionsConfig.acceleration !== undefined && optionsConfig.acceleration.y !== undefined
						? optionsConfig.acceleration.y
						: 1500,
			},
			maxSpeed: optionsConfig.maxSpeed !== undefined ? optionsConfig.maxSpeed : 0,
			startRotation: {
				min:
					optionsConfig.startRotation !== undefined && optionsConfig.startRotation.min !== undefined
						? optionsConfig.startRotation.min
						: -110,
				max:
					optionsConfig.startRotation !== undefined && optionsConfig.startRotation.max !== undefined
						? optionsConfig.startRotation.max
						: -75,
			},
			noRotation: optionsConfig.noRotation !== undefined ? optionsConfig.noRotation : false,
			rotationSpeed: {
				min:
					optionsConfig.rotationSpeed !== undefined && optionsConfig.rotationSpeed.min !== undefined
						? optionsConfig.rotationSpeed.min
						: 0,
				max:
					optionsConfig.rotationSpeed !== undefined && optionsConfig.rotationSpeed.max !== undefined
						? optionsConfig.rotationSpeed.max
						: 150,
			},
			lifetime: {
				min: optionsConfig.lifetime !== undefined && optionsConfig.lifetime.min !== undefined ? optionsConfig.lifetime.min : 2,
				max: optionsConfig.lifetime !== undefined && optionsConfig.lifetime.max !== undefined ? optionsConfig.lifetime.max : 2,
			},
			blendMode: optionsConfig.blendMode !== undefined ? optionsConfig.blendMode : 'normal',
			frequency: optionsConfig.frequency !== undefined ? optionsConfig.frequency : 0.075,
			emitterLifetime: optionsConfig.emitterLifetime !== undefined ? optionsConfig.emitterLifetime : -1,
			maxParticles: optionsConfig.maxParticles !== undefined ? optionsConfig.maxParticles : 500,
			pos: {
				x: optionsConfig.pos !== undefined && optionsConfig.pos.x !== undefined ? optionsConfig.pos.x : 400,
				y: optionsConfig.pos !== undefined && optionsConfig.pos.y !== undefined ? optionsConfig.pos.y : 0,
			},
			addAtBack: optionsConfig.addAtBack !== undefined ? optionsConfig.addAtBack : true,
			spawnType: optionsConfig.spawnType !== undefined ? optionsConfig.spawnType : 'rect',
			spawnRect: {
				x: optionsConfig.spawnRect !== undefined && optionsConfig.spawnRect.x !== undefined ? optionsConfig.spawnRect.x : -300,
				y: optionsConfig.spawnRect !== undefined && optionsConfig.spawnRect.y !== undefined ? optionsConfig.spawnRect.y : 450,
				w: optionsConfig.spawnRect !== undefined && optionsConfig.spawnRect.w !== undefined ? optionsConfig.spawnRect.w : 300,
				h: optionsConfig.spawnRect !== undefined && optionsConfig.spawnRect.h !== undefined ? optionsConfig.spawnRect.h : 0,
			},
			spawnBurst: optionsConfig.spawnBurst !== undefined ? optionsConfig.spawnBurst : false,
		};
	}
}
