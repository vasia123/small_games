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
                // TODO:
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
                // TODO:
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
            // TODO:
        });
    }
    public first_junction(): void {
        this.dialogManager.showDialog(
            "Ты наклоняешься и осторожно поднимаешь ломик. Он тяжелый, и ты можешь почувствовать холод металла даже через перчатки. Чутье подсказывает, что это инструмент стал свидетелем историй, которые могли бы заставить кровь стынуть в жилах. Похоже, этот туннель хранит свои тайны крепко, и стены здесь говорят на языке, которому следует прислушиваться очень внимательно.",
            [
                "Идти дальше",
            ]
        ).then((_selectedOption) => {
            // TODO:
        });
    }


    public update(_delta: number): void { }
}
