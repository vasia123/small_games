import { Dialogs } from "../../interfaces/IDialog";
import { Inventory } from "../actors/Inventory";
import { SoundManager } from "../utils/SoundManager";
import { waitTillMusicEnds } from "../utils/waitTillMusic";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, updateDoc, doc, Firestore } from 'firebase/firestore/lite';

export const startScene = "homeless_talk"

let firstTime = true

export const dialogs: Dialogs = {
    "ep0": {
        location: "intro",
        message: "Ты стоишь в невысокой траве на окраине города. Свет луны едва пробивается сквозь темноту. Воздух прохладен, и тихий шепот ветра неспешно пробирается сквозь деревья. \n\nЗияющий люк выглядит как рот, готовый поглотить тебя. Ты начинаешь спускаться по старой ржавой лестнице вниз.\n\nВлажный, холодный воздух, поднимающийся из глубин, обдает тебя. Это место не тронуто десятилетиями, и ты знаешь, что за этим люком таится ключ к твоему расследованию.",
        options: {
            "Спуститься вниз": "ep1"
        },
        sound: "main_theme",
    },
    "ep1": {
        location: "bg_tunnel_start_dark",
        message: "Звук твоих шагов эхом разносится вглубь туннеля. Спрыгнув с лестницы, ты оказываешься в темном, обветшалом туннеле.",
        options: {
            "Включить фонарик": "ep2"
        },
        sound: "main_theme",
    },
    "ep2": {
        location: "bg_tunnel_start",
        message: "Пока твой фонарик скользит по заброшенному туннелю, в воздухе витает мертвая тишина, нарушаемая лишь едва уловимым звуком капающей воды.\n\nСтены туннеля, обвитые пеленой мха и лишайников, словно шепчут таинственные истории забытых эпох.",
        options: {
            "Осмотреть туннель": "tonnel_investigation",
            "Идти дальше": "first_junction",
        }
    },
    "tonnel_investigation": {
        location: "crowbar",
        message: "Фонарик освещает угол, где, как верный страж, лежит старый ржавый ломик. \n\nРжавчина покрыла его так плотно, что он кажется единым с землей, на которой лежит. \n\nПо его изогнутой форме и зубчатому краю можно предположить, что он повидал немало тяжелых дней на своём веку.",
        options: {
            "Взять ломик": "take_crowbar",
            "Идти дальше": "first_junction",
        }
    },
    "take_crowbar": {
        location: "crowbar_taken",
        message: "Ты наклоняешься и осторожно поднимаешь ломик. \n\nОн тяжелый, и ты можешь почувствовать холод металла даже через перчатки.",
        options: {
            "Идти дальше": "first_junction",
        },
        guard: () => {
            Inventory.addItem("crowbar")
            return ""
        }
    },
    "first_junction": {
        location: "bg_tunnel_1",
        sound: "main_theme",
        message: "Твой фонарик освещает перед тобой развилку - три туннеля, уходящих в разные стороны.\n\nКаждый из туннелей кажется приглашением в свой собственный мир.",
        options: {
            "Идти в левый туннель": "second_junction",
            "Идти в правый туннель": "right_tunnel",
            "Идти в центральный туннель": "center_tunnel",
        }
    },
    "center_tunnel": {
        location: "bg_empty_tunnel",
        sound: "main_theme",
        message: "Стены здесь выглядят изношенными, и пол устлан осколками кирпичей и камней.",
        options: {
            "Идти дальше": "rat",
            "Повернуть назад": "first_junction",
        }
    },
    "rat": {
        location: "bg_giant_rat",
        sound: "battle",
        message: "Постепенно продвигаясь дальше, ты чувствуешь, как воздух становится более сухим и холодным. Стены тут изрыты и покрыты чем-то, что выглядит как следы когтей. Твой фонарик мерцает, и ты слышишь шорохи вокруг.\n\nВдруг, ты замечаешь, что не один. Откуда-то из темноты на тебя выпрыгивает огромная крыса с блестящими глазами и острыми клыками. Твоё сердце замирает от страха, и ты понимаешь, что должен быстро принять решение.",
        options: {
            "Сражаться": "rat_fight_win",
            "Бежать": "rat_run",
        }
    },
    "rat_run": {
        location: "bg_empty_tunnel",
        sound: "main_theme",
        message: "Ты решаешь, что борьба с этим созданием не стоит риска, и резко разворачиваешься, чтобы бежать обратно по туннелю. Твои шаги отдают эхом по мрачным стенам, пока ты бежишь. Ты чувствуешь, как крыса пытается догнать тебя, но ты вкладываешь все свои силы в бег. В конце концов, ты слышишь, как шорох её движений стихает. Ты останавливаешься, чтобы перевести дыхание, осознавая, что сумел убежать. Опасность миновала, но теперь ты понимаешь, что в этих туннелях тебе нужно быть крайне осторожным. С еще большей осторожностью, ты продолжаешь свой путь.",
        options: {
            "Вернуться к развилке": "first_junction",
        },
        guard: () => {
            if (Math.random() < 0.5 || Inventory.itemExists("cultists_pendant")) {
                return ""
            }
            return "rat_fight_lose_run"
        }
    },
    "rat_fight_win": {
        location: "bg_giant_rat_empty",
        sound: "main_theme",
        message: "Ты рефлекторно выхватываешь ржавый ломик, который ты нашел ранее. Крыса нацеливается на твою ногу, но с криком ты размахиваешь ломиком, и он ударяет крысу. Животное визжит и отскакивает обратно в темноту. \n\nТы переводишь дыхание, ощущая адреналин в своих венах, и продолжаешь свой путь, крепко сжимая ломик в руке.",
        options: {
            "Идти дальше": "second_junction",
        },
        guard: () => {
            if (Inventory.itemExists("crowbar") || Inventory.itemExists("cultists_pendant")) {
                return ""
            }
            return "rat_fight_lose_fight"
        }
    },
    "rat_fight_lose_fight": {
        location: "",
        message: "Понимая, что у тебя нет другого выхода, ты решаешь вступить в бой с крысой голыми руками. Твои руки дрожат, но решимость в твоих глазах стальная. Крыса кажется удивительно быстрой и готовой к атаке.\n\nТы пытаешься ударить её, но она проворно уклоняется, и твоя рука лишь срывает воздух. В ответ крыса бросается на тебя, впиваясь клыками в твою руку. Боль оглушает, и ты пытаешься отбиться другой рукой, но это лишь дразнит зверя еще больше.\n\nКрыса начинает атаковать все более жестоко, и ты чувствуешь, как силы покидают тебя. Она кусает и царапает, а ты уже не в силах сопротивляться. Всё, что ты можешь сделать, – это принять свою судьбу в этом мрачном, забытом туннеле.\n\nТвой взгляд затуманивается, и последнее, что ты слышишь – это жуткое визжание крысы. Мир вокруг становится тихим, и твоё сознание уходит в пучину бесконечной тьмы...",
        options: {
            "Конец игры": "game_end",
        }
    },
    "rat_fight_lose_run": {
        location: "",
        message: "Ты пытаешься убежать, но крыса невероятно быстра и проворна. Она делает гигантский прыжок и ухватывается за твою ногу своими острыми когтями. Сердце колотится в ужасе, и ты пытаешься сбросить крысу с ноги, но это только раздражает существо, и оно с ревом впивается своими клыками в твою голень.\n\nОт этой внезапной, жгучей боли твои ноги подкашиваются, и ты падаешь на холодный, влажный пол туннеля. Лежа на полу ты почти мгновенно осознаешь, что твоя ситуация стала ещё более отчаянной. Теперь тебе не спастись от её клыков...",
        options: {
            "Конец игры": "game_end",
        }
    },
    "right_tunnel": {
        location: "bg_empty_tunnel",
        sound: "main_theme",
        message: "После тщательного размышления, ты решаешь двигаться по правому туннелю, влекомый звуком воды и отблеском металла в глубине. \n\nС каждым шагом, прохлада усиливается, и звук воды становится громче. Твой фонарик мелькает по стенам, открывая перед тобой всё новые и новые гроты и ниши.\n\nПри движении дальше ты начинаешь слышать еще один звук, смешанный с хлюпанием воды под ногами – это мелодия, играющая где-то впереди.",
        options: {
            "Идти дальше": "location_cultists_enter",
            "Повернуть назад": "first_junction",
        },
        guard: () => {
            if (Inventory.itemExists("cultists_pendant")) {
                return "location_cultists_empty"
            }
            return ""
        }
    },
    "location_cultists_enter": {
        location: "bg_cultists",
        sound: "witches",
        message: "Странная музыка, звучащая как микс древних напевов и современных ритмов, всё громче наполняет туннель.\n\nВнезапно, туннель расширяется, и ты замираешь на пороге большого подземного грота, освещенное мягким лунным светом от дыры в потолке. В центре ты видишь группу людей, одетых в мантии, танцующих странный танец под странную музыка.\n\nВ голове у тебя всплывают воспоминания о бредовых слухах, которые ходили в городе. Люди шептались о таинственной секте, рьяно охраняющей свои секреты, но никто не знал ничего конкретного, а ты раньше считал это всего лишь вымыслом...",
        options: {
            "Спрятаться и дослушать песню": "location_cultists_music_hear",
            "Выйти и поговорить с ними": "location_cultists_questions",
            "Повернуть назад": "first_junction",
        }
    },
    "location_cultists_music_hear": {
        location: "",
        message: "Это донельзя странная песня привлекает твоё внимание. Ты прислоняешься к холодной каменной стене и затаиваешь дыхание, пока пристально наблюдаешь за их танцами и слушаешь эту странную музыку.\n\nПо мере того как песня развивается, ты замечаешь, что звуки становятся гармоничными, словно они олицетворяют древний язык, который невозможно понять, но можно почувствовать. Звуки флейт смешиваются с волынкой и чем-то еще, что ты не можешь определить. Это звучит одновременно прекрасно и завораживающе.\n\nТвои чувства обостряются. Запахи земли, мха и влажного камня окутывают тебя. Стены кажутся живыми, как будто дыхание пещеры находится в ритме с музыкой. Ощущение магии и таинства наполняет воздух...",
        options: {
            "Уйти": "first_junction",
        },
        guard: (location) => {
            waitTillMusicEnds(location, "witches", "location_cultists_music_hear", "location_cultists_dance_end")
            return ""
        }
    },
    "location_cultists_questions": {
        location: "",
        message: "Когда ты приближаешься к группе сектантов, их танец становится всё более интенсивным, а музыка завораживает.\n\nОсторожно, ты решаешь обратиться к ним...",
        options: {
            "Спросить у сектантов дорогу": "location_cultists_questions_road",
            "Присоединиться к танцу": "location_cultists_dance",
            "Передумать и вернуться назад": "first_junction",
        }
    },
    "location_cultists_questions_road": {
        location: "",
        message: "- Прошу прощения. Я кажется потерялся. Не будете ли так добры подсказать...",
        options: {
            "Как пройти в библиотеку?": "location_cultists_questions_library",
            "Где здесь можно поесть недорого?": "location_cultists_questions_food",
            "Не знаете ли Вы кто убил F?": "location_cultists_questions_murder",
        }
    },
    "location_cultists_questions_library": {
        location: "",
        message: "Один из сектантов останавливается и смотрит на тебя с недоумением. Затем, его глаза расширяются, и он начинает говорить странной, монотонной манерой:\n\n- Ах, в поисках знаний ты, странник? Библиотека времени и вечности находится в сознании каждого из нас. Присоединись к нам, и открой свою библиотеку души.\n\nОн возобновляет свой танец, и другие сектанты теперь танцуют вокруг тебя, вторя ему в странных напевах.",
        options: {
            "Присоединиться к танцу": "location_cultists_dance",
            "Передумать и вернуться назад": "first_junction",
        }
    },
    "location_cultists_questions_food": {
        location: "",
        message: "В ответ на твой вопрос женщина в черных одеждах прекращает танец и улыбается.\n\n- О, путник, жаждешь ли ты пищи тела или духа? Если первое, то пойди наверх и найди 'Бистро Пьера'. Если второе, то присоединись к нам в нашем ритуале, и твоя душа будет насыщена самым вкусным из лакомств.\n\nЕё смех эхом разносится по туннелю, и ты чувствуешь, как улыбка заразительна. Возможно, это даже звучит весело. Ты вежливо улыбаешься в ответ и думаешь что же делать дальше.",
        options: {
            "Присоединиться к танцу": "location_cultists_dance",
            "Передумать и вернуться назад": "first_junction",
        }
    },
    "location_cultists_questions_murder": {
        location: "",
        message: "Все сектанты резко останавливаются. Воздух становится напряженным. Один из них, кажется, лидер, медленно подходит к тебе. Его глаза изучают тебя.\n\n- Тьма убивает тех, кто слишком близко подходит к её тайнам, но если ты ищешь ответы, знай, что они тоже ищут тебя. Будь осторожен с тем, что ты хочешь увидеть.\n\nИ сектанты снова возвращаются к своему занятию будто и не было ничего.",
        options: {
            "Присоединиться к танцу": "location_cultists_dance",
            "Передумать и вернуться назад": "first_junction",
        }
    },
    "location_cultists_dance": {
        location: "",
        message: "Ты решаешь присоединиться к танцу сектантов. Так как ты двигаешься в ритме музыки, они смотрят на тебя с одобрением. Лидер, с длинной бородой и в балахоне, проносясь мимо тебя в танце произносит:\n\n- Ты принимаешь нашу энергию, путник. Мы приветствуем тебя.\n\nВдруг, ты чувствуешь, что твои движения становятся легкими и бесшумными...",
        options: {
            "Уйти": "first_junction",
        },
        guard: (location) => {
            waitTillMusicEnds(location, "witches", "location_cultists_dance", "location_cultists_dance_end")
            return ""
        }
    },
    "location_cultists_dance_end": {
        location: "bg_cultists_empty",
        sound: "main_theme",
        message: "Когда музыка заканчивается, сектанты собираются, и будто, повинуясь одной команде спешат в глубь туннеля не замечая тебя. Последним идёт лидер и внезапно остановившись перед тобой протягивает тебе маленький амулет.\n\n- Это защитит тебя в твоих странствиях, - говорит он и сразу же скрывается во тьме вслед за остальными не дав тебе и слова промолвить в ответ.",
        options: {
            "Идти далше": "second_junction",
        },
        guard: () => {
            Inventory.addItem("cultists_pendant")
            return ""
        }
    },
    "location_cultists_empty": {
        location: "bg_cultists_empty",
        sound: "main_theme",
        message: "Грот пуст и ничего, кроме твоих воспоминаний, не напоминает о том, что здесь происходило несколько минут назад.",
        options: {
            "Повернуть назад": "first_junction",
        }
    },
    "second_junction": {
        location: "bg_tunnel_2",
        sound: "main_theme",
        message: "Перед тобой развилка.\n\nВ каждом из этих туннелей может скрываться что-то, что поможет тебе в расследовании. Какой путь ты выберешь?",
        options: {
            "Идти в левый туннель": "second_left_tunnel",
            "Идти в правый туннель": "third_junction",
            "Идти в центральный туннель": "second_center_tunnel",
        }
    },
    "second_left_tunnel": {
        location: "bg_1",
        message: "Ты двигаешься по мокрому туннелю, и твой фонарик освещает путь впереди.\n\nТвои ботинки начинают утопать в воде, и ты начинаешь чувствовать неприятный холод. Запах становится все более густым и смешивается с запахом гнили и болота.",
        options: {
            "Идти дальше": "crocodile"
        }
    },
    "crocodile": {
        location: "bg_crocodile",
        sound: "battle",
        message: "Внезапно, ты слышишь глухое рычание, и твой фонарик выхватывает два сверкающих глаза, поднимающихся из воды. \n\nЭто крокодил, и он находится на удивление близко. Его чудовищные челюсти и зубы кажутся огромными в свете фонаря.\n\nТвое сердце начинает биться быстрее, и ты понимаешь, что у тебя есть только два варианта: бежать или сражаться.",
        options: {
            "Бежать": "crocodile_run",
            "Сражаться": "crocodile_fight",
        }
    },
    "crocodile_run": {
        location: "bg_1",
        sound: "main_theme",
        message: "Решив, что схватка с крокодилом равносильна самоубийству, ты молниеносно разворачиваешься и бросаешься наутек. По туннелю ты несешься с бешеной скоростью, расплескивая воду вокруг.\n\nЗа спиной слышен рык крокодила и плеск воды, но оглядываться нет времени. Ты бежишь до тех пор, пока не оказываешься в сухом месте. Похоже, опасность осталась позади.",
        options: {
            "Возвратиться на развилку": "second_junction",
        }
    },
    "crocodile_fight": {
        location: "bg_crocodile",
        sound: "main_theme",
        message: "С сомнением в голосе, ты решаешь сражаться с крокодилом. Ты берешь ломик и занимаешь оборонительную позицию.\n\nКрокодил резко бросается в атаку, его мощные челюсти раскрываются. Ты пытаешься ударить его ломиком, но сила и скорость крокодила непреодолимы.\n\nОн схватывает тебя своими челюстями, и ты осознаешь, что твоя борьба бесполезна. Челюсти смыкаются еще сильнее, и ты слышишь последний рык крокодила перед тем, как потерять сознание.",
        options: {
            "Конец игры": "game_end",
        }
    },
    "second_center_tunnel": {
        location: "bg_empty_tunnel",
        message: "Продвигаясь всё дальше воздух становится прохладнее.\n\nСтены, усыпанные каплями конденсата, кажутся живыми, словно они тоже внимательно следят за тобой.\n\nВскоре ты замечаешь слабое свечение впереди и до тебя доносятся обрывки звуков.",
        options: {
            "Идти дальше": "stalkers",
            "Повернуть назад": "second_junction",
        }
    },
    "stalkers": {
        location: "bg_stalkers",
        sound: "igra_na_vijivanie",
        message: "Вскоре ты выходишь на источник звуков, которым оказывается двух сталкеров, сидящих в закутке туннеля у костра и поющая проникновенную песню.\n\nИх одежда выглядит потрепанной, но на лицах у них светится искреннее веселье и умиротворение.\n\nОни не выглядят опасными, но даже встреча с культистами не подготовила тебя к этому необычному зрелищу.",
        options: {
            "Присесть рядом": "stalkers_camp",
            "Попробовать пройти мимо": "stalkers_camp",
            "Повернуть назад": "second_junction",
        },
        guard: () => {
            if (Inventory.itemExists("stalkers_bag")) {
                return "stalkers_camp_empty"
            }
            return ""
        }
    },
    "stalkers_camp": {
        location: "",
        message: "Ты осторожно подходишь к сталкерам, сидящим у костра. Их лица освещены мягким теплом пламени, и их голоса складываются в трогательную мелодию. Когда они замечают тебя, один из них кивает в знак приветствия, указывая на пустое место возле костра. Ты подходишь и садишься.",
        options: {
            "Слушать молча": "stalkers_camp_silent_start",
            "Подпевать": "stalkers_camp_sing_start",
            "Передумать и уйти": "stalkers_camp_leave",
        }
    },
    "stalkers_camp_silent_start": {
        location: "",
        message: "Ты решаешь не позориться и просто слушать. Голоса сталкеров нежные, но полные силы, их песня имеет грустную мелодию, но в ней чувствуется надежда.\n\nСлова песни касаются твоей души, и ты чувствуешь, как глаза становятся влажными. Один из сталкеров, заметив, что ты слушаешь, улыбается тебе.",
        options: {
            "Уйти": "second_junction",
        },
        guard: (location) => {
            waitTillMusicEnds(location, "igra_na_vijivanie", "stalkers_camp_silent_start", "stalkers_camp_song_end")
            return ""
        }
    },
    "stalkers_camp_sing_start": {
        location: "",
        message: "Хотя ты не знаешь слов песни, мелодия кажется знакомой, и ты начинаешь подпевать. Сталкеры удивляются, но затем даже подстраиваются под тебя. Вы поёте вместе, голоса сливаются в прекрасную гармонию...",
        options: {
            "Уйти": "second_junction",
        },
        guard: (location) => {
            waitTillMusicEnds(location, "igra_na_vijivanie", "stalkers_camp_sing_start", "stalkers_camp_song_end")
            return ""
        }
    },
    "stalkers_camp_leave": {
        location: "",
        message: "В последний момент, ты чувствуешь, что не хочешь вторгаться в их мир. Ты останавливаешься, делаешь шаг назад и молча удаляешься. Твои шаги звучат глухо по мере того как ты уходишь от площадки с костром. Ты чувствуешь, что это было верное решение. Возможно, их песня останется с тобой, как напоминание о чём-то важном, что ты не можешь точно определить.",
        options: {
            "Идти дальше": "second_junction",
        }
    },
    "stalkers_camp_song_end": {
        location: "bg_stalkers_empty",
        sound: "main_theme",
        message: "После того как песня затихает и последние аккорды растворяются в ночном воздухе, сталкеры еще минуту сидят с улыбкой, а после встают и собираются уходить.\n\n - Спасибо за вашу песню. Она тронула меня, - говоришь ты.\n\nОдин из сталкеров, казалось, их неофициальный лидер, с улыбкой кивает и отвечает:\n\n - Эта песня – часть нашей души. Мы рады, что ты был с нами, чтобы её услышать.\n\nТы делаешь шаг назад, намереваясь уйти, но лидер сталкеров останавливает тебя. Он протягивает тебе маленький мешочек с некими предметами внутри.Ты берешь мешочек и благодаришь его. Перед тем как уйти, ты оборачиваешься к сталкерам и делаешь кивок.\n\nБудьте осторожны там, внизу, - предупреждаешь ты их. Они отвечают улыбками и кивками.",
        options: {
            "Идти дальше": "third_junction",
        },
        guard: () => {
            Inventory.addItem("stalkers_bag")
            return ""
        }
    },
    "stalkers_camp_empty": {
        location: "bg_stalkers_empty",
        message: "Ты возвращаешься к площадке, где недавно сидели сталкеры, но теперь она пуста и заброшена. Где только что были смех, пение и свет костра, теперь тишина и тьма. Ты настороженно осматриваешься. Пепел в костре еще теплый, и остатки дерева слегка дымятся, как тихие воспоминания о том, что здесь когда-то было.",
        options: {
            "Идти дальше": "third_junction",
        }
    },
    "third_junction": {
        location: "bg_tunnel_4",
        message: "Твой фонарик высвечивает из темноты развилку.\n\nНа стенах немного мха, а под потолком тянутся обвисшие гирлянды паутины.",
        options: {
            "Идти в левый туннель": "bats",
            "Идти в правый туннель": "homeless",
            "Идти в центральный туннель": "third_center_tunnel",
        }
    },


    "homeless": {
        location: "bg_homeless",
        message: "Правый тоннель казался самым светлым. Пройдя еще несколько метров вперед, вы стали замечать, как в закутке еле заметные тени танцевали на сырых, покрытых плесенью, стенах.\n\nИ вот уже твой путь был перекрыт сворой бродяг, которые, по всей видимости, превратили эту часть канализации в свой дом.\n\nПоявление незнакомца заставило их насторожиться.",
        options: {
            "Завести разговор": "homeless_talk",
            "Попытаться пройти мимо": "homeless_walk",
            "Уйти": "third_junction",
        }
    },
    "homeless_talk": {
        location: "bg_homeless",
        message: "Без лишних действий и не наводя паники, вы выделили из толпы мужчину старших лет, который походил на лидера, и обратились напрямую к нему.\n\nОн критически осматривает тебя, пока ты объясняешь, что занимаешься расследованием и нуждается в информации.\n\nКогда ты объясняешь лидеру бездомных свою миссию, его серьезный взгляд постепенно смягчается.\n\n- В основном, сюда спускаются те, кто, ищут укрытия или хотят избежать проблем, но я чувствую, что твои намерения искренни.\n\nМы, бездомные, тоже не хотим, чтобы зло бродило по этим туннелям. Есть один человек, который, возможно, сможет тебе помочь.",
        options: {
            "Расспросить свидетеля": "good_end",
        }
    },
    "homeless_walk": {
        location: "bg_homeless",
        message: "Стараясь не привлекать к себе еще большего внимания, вы молча последовали вперед, как вдруг, будто каменной стеной, перед вами возник суровый пожилой мужчина. Вы приготовились припугнуть его удостоверением, но он успевает оборвать вас на полуслове.\n\n- Слышь, малец, плевать я хотел на твою «корочку», это наша территория. Лучше вали, откуда пришел!",
        options: {
            "Пригрозить ломиком": "third_junction",
        }
    },
    "homeless_walk_end": {
        location: "bg_homeless",
        message: "Ты решаешь пригрозить бездомным ломиком, рявкнув:\n\n- Отойдите! - говоришь ты, но их взгляды становятся яростными, и они молниеносно набрасываются на тебя толпой.\n\nЧисловое преимущество даёт о себе знать, и ты быстро оказываешься на полу под их ударами. Вскоре твой взгляд затуманивается, и ты теряешь сознание.\n\nТак заканчивается жизнь великого детектива, которого погубила агрессия и необдуманные действия.",
        options: {
            "Ты проиграл": "game_end",
        }
    },
    "bats": {
        location: "bg_bats",
        message: "Свет фонаря двигается по стенам, и ты видишь, что что-то шевелится. Поднимаешь фонарь выше и обнаруживаешь кучу летучих мышей на потолке. Испугавшись света они взлетают с громким шумом.\n\nТы отпрыгиваешь назад, сердце бешено колотится, но мыши пролетают мимо, касаясь тебя крыльями. Очень скоро они исчезают в темноте, и ты остаешься один в тупике. Дальше пути нет.",
        options: {
            "Вернуться на развилку": "third_junction",
        }
    },
    "third_center_tunnel": {
        location: "bg_tunnel_web",
        message: "С некоторой решимостью ты направляешься по центральному туннелю. Тут капельки воды, стекающие по стенам, создают сложный ритм, словно таинственная мелодия подземелья.\n\n Паутина в этом туннеле гуще, и ты осторожно раздвигаешь ее, стараясь не задеть.\n\nПауки разных размеров вдоль туннеля расположились так, словно указывают направление вперед. Ты ощущаешь, как они наблюдают за тобой своими многочисленными глазами.",
        options: {
            "Идти дальше": "harry",
        }
    },

    "harry": {
        location: "bg_harry",
        sound: "nimbus_2000",
        message: "Ты движешься глубже и замечаешь, что туннель впереди расширяется. Тут ты видишь удивительную сцену: камера напоминает заброшенную библиотеку с потрепанными книжными полками и старинными свитками. Но самое поразительное - две фигуры, занятые разговором у одной из полок. Похоже, что это подростки забравшиеся в сырой грот в лесу только для того чтобы выразить всё что у них на душе.",
        options: {
            "Подождать и послушать": "harry_listen",
            "Вернуться на развилку": "third_junction",
        }
    },
    "harry_listen": {
        location: "bg_harry",
        message: "Ты прячешься за угол и наблюдаешь. \n\nПодростки ведут беседу, которая кажется не только веселой, но и теплой.",
        options: {
            "Уйти": "third_junction",
        },
        guard: (location) => {
            waitTillMusicEnds(location, "nimbus_2000", "harry_listen", "harry_listen_end")
            return ""
        },
    },
    "good_end": {
        location: "",
        message: "Ты нашёл подсказку!\n\n\n\nСледуй показаниям, чтобы продлжить историю.",
        options: {
            "Послушать свидетеля": "witness_2",
        },
        guard: () => {
            if (firstTime) {
                firstTime = false
                SoundManager.stopAll();
                SoundManager.playSound("win");

                const firebaseConfig = {
                    apiKey: "AIzaSyD19hXl7T_hR22RKTbO0HRqzJLWB-dhnpw",
                    authDomain: "small-games-dda7a.firebaseapp.com",
                    projectId: "small-games-dda7a",
                    storageBucket: "small-games-dda7a.appspot.com",
                    messagingSenderId: "536294849994",
                    appId: "1:536294849994:web:a7eaf666f68f46c537e333"
                };

                const app = initializeApp(firebaseConfig);

                const db = getFirestore(app);
                const currentGameOrder = 1

                // Function to mark the current game as completed
                async function markGameAsCompleted(db: Firestore) {
                    try {
                        // Reference to the games collection
                        const gamesCol = collection(db, 'games');

                        // Construct the query
                        const q = query(gamesCol, where('sort_order', '==', currentGameOrder));

                        // Execute the query
                        const querySnapshot = await getDocs(q);

                        // Loop through the documents (should only be one) and update it
                        querySnapshot.forEach(docSnap => {
                            const gameDoc = doc(db, 'games', docSnap.id);
                            updateDoc(gameDoc, { is_completed: true });
                        });

                        console.log('Game marked as completed');
                    } catch (error) {
                        console.error('Error updating game data:', error);
                    }
                }

                markGameAsCompleted(db)
            }
            return ""
        },
    },
    "game_end": {
        location: "",
        message: "Ты проиграл.",
        options: {

        }
    },
    "witness_2": {
        location: "",
        message: "",
        options: {}
    }
}

