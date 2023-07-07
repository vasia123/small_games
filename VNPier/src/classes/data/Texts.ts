import { Dialogs } from "../../interfaces/IDialog";
// import { Inventory } from "../actors/Inventory";


export const startScene = "ep4"

export const dialogs: Dialogs = {
    "ep0": {
        location: "intro_1",
        sound: "main_theme",
        message: "Тяжелый люк скрипнул и открылся, пропуская дневной свет, который теперь кажется тебе почти слепящим. Только выбравшись на свежий воздух ты почувствовал насколько пропах нечистотами. Желудок тут же взбунтовал от голода, а голова закружилась от усталости.",
        options: {
            "Осмотреться вокруг": "ep1"
        },
        // guard: () => {
        //     Inventory.addItem("crowbar")
        //     return ""
        // }
    },
    "ep1": {
        location: "intro_2",
        message: "Нужно поесть и передохнуть решил ты. Как удачно, что прямо возле люка находится ресторан \"Гурман Пьер\". ",
        options: {
            "Войти в ресторан": "ep2"
        }
    },
    "ep2": {
        location: "chief",
        message: "Не в силах сдержать свой аппетит, ты поспешил внутрь.\n\nВнутри заведения тебя встретило теплом и уютом, а запахи, которые наполняли воздух, заставляли желудок бунтовать с удвоенной силой. \n\nТы замечаешь, что в этом уголке уюта суетится всего один человек - шеф-повар, который, судя по вывеске, и есть Пьер. Его усы кручены в спирали, а на голове покоится берет.\n\nОн поет что-то на французском, танцуя между кастрюлями.",
        options: {
            "Обратиться к владельцу": "ep3",
        }
    },
    "ep3": {
        location: "chief",
        message: "Могу ли я заказать что-нибудь поесть. - спрашиваешь ты.\n\nОн смотрит на тебя, после скручивает нос и произносит: \n\n- Ах, mon ami! Конечно, но... людей, которых пахнет как из помойки мы не обслуживаем!\n\nТы внимательно слушаешь, как Пьер с всплеснув руками объясняет:\n\n- Здесь каждый клиент становится соавтором своего угощения!\n\nТвой желудок урчит еще громче, и ты киваешь.",
        options: {
            "Хорошо. Только можно побыстрее?": "ep4",
        }
    },
    "ep4": {
        location: "chief",
        message: "- Мне нравится твой настрой! - говрит он и объявляет первый вопрос:\n\nКакой фрукт используют для приготовления гуакамоле?",
        options: {
            "Гуа... что?": "ep5",
            "Банан": "ep5",
            "Авокадо": "ep5",
        }
    },
    "ep5": {
        location: "chief",
        message: "Что традиционно подают с английским завтраком?",
        options: {
            "Шоколадное мороженое": "ep6",
            "Бобы в томатном соусе": "ep6",
            "Пицца с ананасами": "ep6",
        }
    },

    "ep6": {
        location: "chief",
        message: "Что добавляют в кофе для приготовления традиционного ирландского кофе?",
        options: {
            "Виски": "ep6",
            "Сок из красной свеклы": "ep6",
            "Кетчуп": "ep6",
        }
    },

    "good_end": {
        location: "",
        message: "Ты выиграл!",
        options: {

        }
    },
    "game_end": {
        location: "",
        message: "Ты проиграл.",
        options: {

        }
    }
}

