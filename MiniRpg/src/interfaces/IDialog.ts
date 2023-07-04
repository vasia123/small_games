import { appSounds } from "../classes/assets";

export interface Dialogs {
    [x: string]: {
        message: string,
        sound?: appSounds,
        options: {
            [x: string]: string
        };
    };
}