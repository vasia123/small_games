import { appSounds } from "../../constants/assets";
import { Locations } from "../scenes/Locations";
import { SoundManager } from "./SoundManager";
import sleep from "./sleep";


export const waitTillMusicEnds = async (locationClass: Locations, name: appSounds, locationFrom: string, locationTo: string) => {
    while (true) {
        const duration = SoundManager.getDuration(name)
        if (duration) {
            const timeout = (duration + 1) * 1000
            // const timeout = 5 * 1000
            // console.log('waitTillMusicEnds name', name, timeout)
            // TODO: singleton
            setTimeout(() => {
                console.log("getCurrentLocation", locationClass.getCurrentLocation(), locationFrom)
                if (locationClass.getCurrentLocation() === locationFrom) {
                    locationClass.dialogManager.hideDialog().then(() => locationClass.gotoDialog(locationTo))
                }
            }, timeout);
            return true
        }
        await sleep(200)
    }
}