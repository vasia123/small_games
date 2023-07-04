import { Dialogs } from "../../interfaces/IDialog";


export const dialogs: Dialogs = {
    "ep1": {
        message: "Ты осторожно спускаешься по железной лестнице, чувствуя, как холод и сырость усиливаются с каждым шагом. Звук твоих шагов эхом разносится вглубь туннеля. Спрыгнув с лестницы, ты оказываешься в темном, обветшалом туннеле.",
        options: {
            "Включить фонарик": "ep2"
        }
    },
    "ep2": {
        message: "Пока твой фонарик скользит по заброшенному туннелю, в воздухе витает мертвая тишина, нарушаемая лишь еле слышным капанием воды где-то вдалеке. Стены туннеля, увитые пеленой мха и лишайников, как будто шепчут о забытых эпохах. Поверхность их неровная, а контуры имеют странные изгибы, как будто когти огромного зверя царапали их на протяжении столетий.",
        options: {
            "Осмотреть туннель": "tonnel_investigation",
            "Идти дальше": "first_junction",
        }
    },
    "tonnel_investigation": {
        message: "Фонарик освещает угол, где, как верный страж, лежит старый ржавый ломик. Ржавчина покрыла его так плотно, что он кажется единым с землей, на которой лежит. По его изогнутой форме и зубчатому краю можно предположить, что он повидал немало тяжелых дней на своём веку.",
        options: {
            "Взять ломик": "take_crowbar",
            "Идти дальше": "first_junction",
        }
    },
    "take_crowbar": {
        message: "Ты наклоняешься и осторожно поднимаешь ломик. Он тяжелый, и ты можешь почувствовать холод металла даже через перчатки. Чутье подсказывает, что это инструмент стал свидетелем историй, которые могли бы заставить кровь стынуть в жилах. Похоже, этот туннель хранит свои тайны крепко, и стены здесь говорят на языке, которому следует прислушиваться очень внимательно.",
        options: {
            "Идти дальше": "first_junction",
        }
    },
    "first_junction": {
        message: "Продолжая свой путь по темному туннелю, ты ощущаешь, как атмосфера вокруг становится всё более густой. Всё глуше доносится звук твоих шагов, словно стены всасывают в себя каждый звук.\n\nВнезапно, твой фонарик освещает перед тобой развилку - три туннеля, уходящих в разные стороны. Твоя душа наполняется как волнением, так и тревогой. Каждый из туннелей кажется приглашать в собственный мир тайн.",
        options: {
            "Осмотреть левый туннель": "left_tunnel",
            "Осмотреть правый туннель": "center_tunnel",
            "Осмотреть центральный туннель": "right_tunnel",
        }
    },
    "left_tunnel": {
        message: "Левый туннель обвит корнями деревьев, которые, казалось бы, проникают из земли сверху. Стены в этом направлении усыпаны сверкающими геодами, которые мерцая, отражают свет твоего фонарика. Отсюда доносится аромат мха и земли, и ты почти можешь услышать шепот природы.",
        options: {
            "Идти дальше": "to_be_continued",
            "Повернуть назад": "first_junction",
        }
    },
    "center_tunnel": {
        message: "Центральный туннель кажется самым старым. Стены здесь выглядят изношенными, и пол устлан осколками кирпичей и камней. Тихое эхо голосов из прошлого, возможно, здесь ещё блуждает. Похоже, что этот туннель ведет к самому сердцу канализационной системы, где хранятся древние секреты города.",
        options: {
            "Идти дальше": "to_be_continued",
            "Повернуть назад": "first_junction",
        }
    },
    "right_tunnel": {
        message: "Правый туннель имеет гладкие стены, похоже, что он был высечен из твёрдой породы. Отсюда несёт прохладой, и ты слышишь звук текущей воды. Вдалеке, в глубине туннеля, мелькает отблеск чего-то металлического. Этот путь, возможно, ведет к подземному ручью или источнику.",
        options: {
            "Идти дальше": "to_be_continued",
            "Повернуть назад": "first_junction",
        }
    },
    "to_be_continued": {
        message: "Дальше пока ничего нет, но скоро будет.",
        options: {

        }
    }
}