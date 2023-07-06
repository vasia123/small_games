import { Locations } from "../classes/scenes/Locations";
import { appSounds, assets } from "../constants/assets";

type ILocation = keyof typeof assets['locations']

export interface Dialogs {
    [x: string]: {
        location: ILocation | "",
        message: string,
        sound?: appSounds | "",
        options: {
            [x: string]: string
        };
        guard?: (location: Locations) => string
    };
}