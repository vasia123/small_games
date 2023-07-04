
export interface Dialogs {
    [x: string]: {
        message: string,
        options: {
            [x: string]: string
        };
    };
}