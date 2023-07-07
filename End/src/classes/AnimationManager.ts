import { gsap } from 'gsap';
import { Sprite } from 'pixi.js';

export class AnimationManager {
    public static slideTo(sprite: Sprite, x: number, y: number, duration: number = 0.5): Promise<void> {
        return new Promise((resolve) => {
            gsap.to(sprite, {
                x,
                y,
                duration,
                ease: 'power2.inOut',
                onComplete: resolve
            });
        });
    }
}
