export const initialAppState = {
  modalActive: false,
  persons: [
    {
      number: 1,                        // порядковый номер
      name: "Иванов Иван Иванович",     // ФИО
      date: "01.01.2024",               // дата звонка
      manager: "Сидоров",               // менеджер
      tel: "89991234567",               // телефон
      age: "01.01.1980",                // возраст
      area: "Магнитогорск",             // область/край
      trailer: "24",                    // длина прицепа
      experience: "10",                 // стаж на фурах
      source: "соцсети",                // источник
      advisor: "Петров Петр Петрович",  // ФИО кто привел
      verify: null,                     // результат СБ
      leader: null,                     // начальник колонны
      leaderComment: null,              // комментарий нач.кол.
      enterCity: null,                  // город выхода
      enterDate: null,                  // дата выхода
      medical: null,                    // мед. осмотр
      comment: "",                      // комментарий ОК
    }
  ],
};