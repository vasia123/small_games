import { Container, Sprite } from 'pixi.js';
import { IScene } from '../../interfaces/IScene';
// import { assets } from '../assets';
// import { Manager } from '../Manager';
import { DialogManager } from '../ui/DialogManager';
import { Manager } from '../Manager';
import { assets } from '../assets';

export class Intro extends Container implements IScene {
    private background!: Sprite;
    private dialogManager!: DialogManager;

    constructor() {
        super()
        // Load background based on level name
        this.background = Sprite.from(assets.ui.bg_1);
        this.background.anchor.set(0.5, 0.5);
        this.background.position.set(Manager.width / 2, Manager.height / 2)
        this.addChildAt(this.background, 0); // Add background as the first child so it's rendered behind everything else

        this.dialogManager = new DialogManager(this);
        this.ep1()
    }


    public ep1(): void {
        this.dialogManager.showDialog(
            "Ты осторожно спускаешься по железной лестнице, чувствуя, как холод и сырость усиливаются с каждым шагом. Звук твоих шагов эхом разносится вглубь туннеля. Спрыгнув с лестницы, ты оказываешься в темном, обветшалом туннеле.",
            [
                "Включить фонарик",
            ]
        ).then((_selectedOption) => {
            this.ep2()
        });
    }
    public ep2(): void {
        this.dialogManager.showDialog(
            "Пока твой фонарик скользит по заброшенному туннелю, в воздухе витает мертвая тишина, нарушаемая лишь еле слышным капанием воды где-то вдалеке. Стены туннеля, увитые пеленой мха и лишайников, как будто шепчут о забытых эпохах. Поверхность их неровная, а контуры имеют странные изгибы, как будто когти огромного зверя царапали их на протяжении столетий.",
            [
                "Осмотреть туннель",
                "Идти дальше",
            ]
        ).then((selectedOption) => {
            if (selectedOption === 0) {
                this.tonnel_investigation()
            } else {
                this.first_junction()
            }
        });
    }
    public tonnel_investigation(): void {
        this.dialogManager.showDialog(
            "Фонарик освещает угол, где, как верный страж, лежит старый ржавый ломик. Ржавчина покрыла его так плотно, что он кажется единым с землей, на которой лежит. По его изогнутой форме и зубчатому краю можно предположить, что он повидал немало тяжелых дней на своём веку.",
            [
                "Взять ломик",
                "Идти дальше",
            ]
        ).then((selectedOption) => {
            if (selectedOption === 0) {
                this.take_crowbar()
            } else {
                this.first_junction()
            }
        });
    }
    public take_crowbar(): void {
        this.dialogManager.showDialog(
            "Ты наклоняешься и осторожно поднимаешь ломик. Он тяжелый, и ты можешь почувствовать холод металла даже через перчатки. Чутье подсказывает, что это инструмент стал свидетелем историй, которые могли бы заставить кровь стынуть в жилах. Похоже, этот туннель хранит свои тайны крепко, и стены здесь говорят на языке, которому следует прислушиваться очень внимательно.",
            [
                "Идти дальше",
            ]
        ).then((_selectedOption) => {
            this.first_junction()
        });
    }
    public first_junction(): void {
        this.dialogManager.showDialog(
            "Продолжая свой путь по темному туннелю, ты ощущаешь, как атмосфера вокруг становится всё более густой. Всё глуше доносится звук твоих шагов, словно стены всасывают в себя каждый звук.\n\nВнезапно, твой фонарик освещает перед тобой развилку - три туннеля, уходящих в разные стороны. Твоя душа наполняется как волнением, так и тревогой. Каждый из туннелей кажется приглашать в собственный мир тайн.",
            [
                "Осмотреть левый туннель",
                "Осмотреть правый туннель",
                "Осмотреть центральный туннель",
            ]
        ).then((selectedOption) => {
            switch (selectedOption) {
                case 0:
                    this.left_tunnel()
                    break;
                case 1:
                    this.center_tunnel()
                    break;
                case 2:
                    this.right_tunnel()
                    break;
            }
        });
    }

    public left_tunnel(): void {
        this.dialogManager.showDialog(
            "Левый туннель обвит корнями деревьев, которые, казалось бы, проникают из земли сверху. Стены в этом направлении усыпаны сверкающими геодами, которые мерцая, отражают свет твоего фонарика. Отсюда доносится аромат мха и земли, и ты почти можешь услышать шепот природы.",
            [
                "Идти дальше",
                "Повернуть назад",
            ]
        ).then((selectedOption) => {
            if (selectedOption === 0) {
                // TODO:
                this.to_be_continued()
            } else {
                this.first_junction()
            }
        });
    }

    public center_tunnel(): void {
        this.dialogManager.showDialog(
            "Центральный туннель кажется самым старым. Стены здесь выглядят изношенными, и пол устлан осколками кирпичей и камней. Тихое эхо голосов из прошлого, возможно, здесь ещё блуждает. Похоже, что этот туннель ведет к самому сердцу канализационной системы, где хранятся древние секреты города.",
            [
                "Идти дальше",
                "Повернуть назад",
            ]
        ).then((selectedOption) => {
            if (selectedOption === 0) {
                // TODO:
                this.to_be_continued()
            } else {
                this.first_junction()
            }
        });
    }

    public right_tunnel(): void {
        this.dialogManager.showDialog(
            "Правый туннель имеет гладкие стены, похоже, что он был высечен из твёрдой породы. Отсюда несёт прохладой, и ты слышишь звук текущей воды. Вдалеке, в глубине туннеля, мелькает отблеск чего-то металлического. Этот путь, возможно, ведет к подземному ручью или источнику.",
            [
                "Идти дальше",
                "Повернуть назад",
            ]
        ).then((selectedOption) => {
            if (selectedOption === 0) {
                // TODO:
                this.to_be_continued()
            } else {
                this.first_junction()
            }
        });
    }

    public to_be_continued(): void {
        this.dialogManager.showDialog(
            "Дальше пока ничего нет, но скоро будет.",
            [
                // "Идти дальше",
            ]
        ).then((selectedOption) => {
            if (selectedOption === 0) {
                // TODO:
            } else {
                this.first_junction()
            }
        });
    }


    public update(_delta: number): void { }
}
