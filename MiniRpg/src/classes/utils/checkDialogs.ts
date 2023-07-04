import { Dialogs } from "../../interfaces/IDialog";


export function validateOptions(dialogs: Dialogs) {
    let isValid = true;

    // Loop through each key (episode) in the dialogs object
    for (let episode in dialogs) {
        const options = dialogs[episode].options;

        // If options are present for this episode
        if (options) {
            // Loop through each option to check if it points to a valid key
            for (let option in options) {
                const targetEpisode = options[option];

                // If the targetEpisode does not exist as a key in dialogs
                if (!dialogs.hasOwnProperty(targetEpisode)) {
                    console.error(`Option "${option}" in episode "${episode}" points to an invalid key "${targetEpisode}"`);
                    isValid = false;
                }
            }
        }
    }

    return isValid;
}