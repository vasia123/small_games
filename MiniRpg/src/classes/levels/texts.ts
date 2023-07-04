import { Dialogs } from "../../interfaces/IDialog";


export const dialogs: Dialogs = {
    "ep0": {
        location: "intro",
        message: "Ты стоишь в невысокой траве на окраине города. Свет луны едва пробивается сквозь темноту, заставляя твои глаза напрягаться. Воздух прохладен, и тихий шепот ветра неспешно пробирается сквозь деревья. \n\nЗияющий люк выглядит как рот, готовый поглотить тебя, а старая ржавая лестница ведет вниз, где твой фонарик едва освещает мокрые каменные стены.\n\nТы чувствуешь влажный, холодный воздух, поднимающийся из глубин, и запах старой воды и земли. Это место не тронуто десятилетиями, и ты знаешь, что за этим люком таится ключ к твоему расследованию.",
        options: {
            "Спуститься вниз": "ep1"
        },
        sound: "main_theme",
    },
    "ep1": {
        location: "bg_3_dark",
        message: "Ты осторожно спускаешься по железной лестнице, чувствуя, как холод и сырость усиливаются с каждым шагом. Звук твоих шагов эхом разносится вглубь туннеля. Спрыгнув с лестницы, ты оказываешься в темном, обветшалом туннеле.",
        options: {
            "Включить фонарик": "ep2"
        },
        sound: "main_theme",
    },
    "ep2": {
        location: "bg_3",
        message: "Пока твой фонарик скользит по заброшенному туннелю, в воздухе витает мертвая тишина, нарушаемая лишь еле слышным капанием воды где-то вдалеке. Стены туннеля, увитые пеленой мха и лишайников, как будто шепчут о забытых эпохах. Поверхность их неровная, а контуры имеют странные изгибы, как будто когти огромного зверя царапали их на протяжении столетий.",
        options: {
            "Осмотреть туннель": "tonnel_investigation",
            "Идти дальше": "first_junction",
        }
    },
    "tonnel_investigation": {
        location: "crowbar",
        message: "Фонарик освещает угол, где, как верный страж, лежит старый ржавый ломик. Ржавчина покрыла его так плотно, что он кажется единым с землей, на которой лежит. По его изогнутой форме и зубчатому краю можно предположить, что он повидал немало тяжелых дней на своём веку.",
        options: {
            "Взять ломик": "take_crowbar",
            "Идти дальше": "first_junction",
        }
    },
    "take_crowbar": {
        location: "crowbar_taken",
        message: "Ты наклоняешься и осторожно поднимаешь ломик. Он тяжелый, и ты можешь почувствовать холод металла даже через перчатки. Чутье подсказывает, что это инструмент стал свидетелем историй, которые могли бы заставить кровь стынуть в жилах. Похоже, этот туннель хранит свои тайны крепко, и стены здесь говорят на языке, которому следует прислушиваться очень внимательно.",
        options: {
            "Идти дальше": "first_junction",
        }
    },
    "first_junction": {
        location: "bg_2",
        sound: "main_theme",
        message: "Продолжая свой путь по темному туннелю, ты ощущаешь, как атмосфера вокруг становится всё более густой. Всё глуше доносится звук твоих шагов, словно стены всасывают в себя каждый звук.\n\nВнезапно, твой фонарик освещает перед тобой развилку - три туннеля, уходящих в разные стороны. Твоя душа наполняется как волнением, так и тревогой. Каждый из туннелей кажется приглашением в свой собственный мир.",
        options: {
            "Идти в левый туннель": "left_tunnel",
            "Идти в правый туннель": "right_tunnel",
            "Идти в центральный туннель": "center_tunnel",
        }
    },
    "left_tunnel": {
        location: "",
        message: "Левый туннель обвит корнями деревьев, которые, казалось бы, проникают из земли сверху. Стены в этом направлении усыпаны сверкающими геодами, которые мерцая, отражают свет твоего фонарика. Отсюда доносится аромат мха и земли, и ты почти можешь услышать шепот природы.",
        options: {
            "Идти дальше": "to_be_continued",
            "Повернуть назад": "first_junction",
        }
    },
    "center_tunnel": {
        location: "",
        message: "Центральный туннель кажется самым старым. Стены здесь выглядят изношенными, и пол устлан осколками кирпичей и камней. Тихое эхо голосов из прошлого, возможно, здесь ещё блуждает. Похоже, что этот туннель ведет к самому сердцу канализационной системы, где хранятся древние секреты города.",
        options: {
            "Идти дальше": "to_be_continued",
            "Повернуть назад": "first_junction",
        }
    },
    "right_tunnel": {
        location: "bg_cultists",
        sound: "witches",
        message: "После тщательного размышления, ты решаешь двигаться по правому туннелю, влекомый звуком воды и отблеском металла в глубине. С каждым шагом, прохлада усиливается, и звук воды становится громче. Твой фонарик мелькает по стенам, открывая перед тобой всё новые и новые гроты и ниши.\n\nПри движении дальше ты начинаешь слышать еще один звук, смешанный с журчанием воды – это мелодия, играющая где-то впереди. Странная музыка, звучащая как микс древних напевов и современных ритмов, всё громче наполняет туннель.\n\nВнезапно, туннель расширяется, и ты замираешь на пороге большого подземного грота, освещенное мягким лунным светом от дыры в потолке. В центре ты видишь группу людей, одетых в мантии, танцующих странный танец под странную музыка. \n\nВ голове у тебя всплывают воспоминания о бредовых слухах, которые ходили в городе. Люди шептались о таинственной секте, рьяно охраняющей свои секреты, но никто не знал ничего конкретного, а ты раньше считал это всего лишь вымыслом...",
        options: {
            "Спросить у сектантов дорогу": "location_cultists",
            "Повернуть назад": "first_junction",
        }
    },
    "location_cultists": {
        location: "",
        message: "Дальше пока ничего нет, но скоро будет.",
        options: {

        }
    },
    "to_be_continued": {
        location: "",
        message: "Дальше пока ничего нет, но скоро будет.",
        options: {

        }
    }
}

