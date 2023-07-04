import { appSounds, assets } from "../classes/assets";

export interface Dialogs {
    [x: string]: {
        location: keyof typeof assets['locations'] | "",
        message: string,
        sound?: appSounds | "",
        options: {
            [x: string]: string
        };
    };
}