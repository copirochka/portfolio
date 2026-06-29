/* =========================================================================
   ТВОИ ДАННЫЕ — РЕДАКТИРУЙ ТОЛЬКО ЭТОТ ФАЙЛ
   =========================================================================
   Здесь хранятся все твои работы, скиллы, контакты и тексты.
   Менять HTML/CSS не нужно — просто впиши сюда свои ссылки и названия.
========================================================================= */

/* ----------------------------- О ТЕБЕ ----------------------------------- */
const PROFILE = {
  name: "Ирочка Трунова",
  role: "Копирайтинг · SMM · контент-маркетинг",
  // Продающий заголовок в шапке (главный оффер):
  headline: "Напишу так, что даже зумер заинтересуется металлургией. Придумаю идею, которую захотят повторить.",
  about:
    "Привет, я Ира! Придумываю креативные идеи и пишу тексты под любую задачу, какую бы вы ни поставили. Не люблю копировать чужое и слепо бежать за трендами — мне интереснее создавать их самой и придумывать то, что ещё не было сделано до меня.",
  // Ссылка на файл с резюме. Положи PDF в папку assets и впиши имя файла.
  resumeFile: "assets/resume.pdf",
  // Фото (положи в папку assets). Если файла нет — покажется котик-заглушка.
  photo: "assets/me.gif",
  contacts: {
    telegram: "@trunowa",
    telegramUrl: "https://t.me/trunowa",
    email: "trunowa.02@yandex.ru",
    whatsapp: "+79052256739",
    whatsappUrl: "https://wa.me/79052256739",
  },
  // Маленькая полоска цифр под шапкой (по желанию — меняй смело):
  stats: [
    { num: "5+ лет", label: "в текстах и контенте" },
    { num: "10+ ниш", label: "от тату до медицины" },
    { num: "10 млн+", label: "охватов в Reels" },
    { num: ">50%", label: "дочитываний промостраниц" },
  ],
};

/* ----------------------------- ЧТО Я УМЕЮ -------------------------------- *
   Блок услуг — широкие строки с подробным описанием.
   icon — имя котика из assets/cats/ без .gif
   (доступны: oiia, banana, happy, huh, maxwell, yippee, typing, dubi,
    crying, polite, standing, smudge, business, shocked, vibe, screaming, judge)
------------------------------------------------------------------------- */
const SERVICES = [
  {
    icon: "vibe",
    title: "Сценарии для Reels",
    desc: "Сценарий от хука до финала, раскадровка и образ в кадре — под большие охваты.",
  },
  {
    icon: "polite",
    title: "Посты и карусели",
    desc: "Карусели, которые долистывают, сохраняют и репостят. Текст + ТЗ дизайнеру.",
  },
  {
    icon: "business",
    title: "Контент-план",
    desc: "Рубрики, форматы, tone of voice и календарь — постинг как система.",
  },
  {
    icon: "judge",
    title: "Анализ целевой аудитории",
    desc: "Боли, желания, возражения и язык ЦА — контент бьёт в нужного человека.",
  },
  {
    icon: "screaming",
    title: "Нейминг и слоганы",
    desc: "Названия, слоганы и УТП, которые легко запомнить. Варианты — пачками.",
  },
  {
    icon: "standing",
    title: "SEO-статьи и тексты",
    desc: "Семантика, ключи и оформление по правилам — трафик из поиска для живых людей.",
  },
  {
    icon: "banana",
    title: "Статьи и лонгриды для медиа",
    desc: "Экспертные лонгриды для VC и Дзена: сложное — просто, скучное — увлекательно.",
  },
  {
    icon: "shocked",
    title: "Яндекс.Промостраницы",
    desc: "Заголовки, на которые кликают, и структура под дочитывания и трафик.",
  },
  {
    icon: "smudge",
    title: "B2G / B2B письма и деловые тексты",
    desc: "Деловые письма без канцелярита, на которые реально отвечают.",
  },
  {
    icon: "crying",
    title: "Рерайт и редактура",
    desc: "Уберу воду, приведу к единому стилю и вычитаю — черновик в чистовик.",
  },
  {
    icon: "happy",
    title: "Тексты для сайтов и лендингов",
    desc: "Главная, услуги, карточки — структура, ведущая к нужной кнопке.",
  },
];

/* ----------------------------- РЕЗУЛЬТАТЫ -------------------------------- *
   Сюда пойдут скрины статистики/результатов. Пока img пустой — показывается
   заглушка. Положи картинку в assets/results/ и впиши имя в img.
------------------------------------------------------------------------- */
const RESULTS = [
  { img: "assets/results/reels-1m.png", title: "Вот ролик-миллионник", caption: "а суммарный охват моих рилсов — больше 100 млн просмотров", link: "https://www.instagram.com/reels/DWTcjWJjCvP/", linkText: "смотреть ролик →" },
  { img: "", title: "SOLD OUT: 30 мест на курс", caption: "с одной продающей рассылки" },
  { img: "assets/results/dzen.png", title: "503 подписчика на Дзен с нуля", caption: "канал Optimin · продажи с каждой статьи", link: "https://dzen.ru/optimin", linkText: "посмотреть канал →" },
  { img: "", title: ">50% дочитываемость промостраниц", caption: "при норме рынка 30–40%" },
  { img: "", title: "51 SEO-текст без возвратов", caption: "несколько — в топ-5 выдачи" },
  { img: "", title: "Threads: 150 000 просмотров/мес", caption: "посты бренда Optimin" },
];

/* ----------------------------- СОЦСЕТИ ---------------------------------- *
   Площадки, которые всегда показываются в группировке «По соцсетям» —
   даже если кейсов по ним пока нет (появятся пустыми блоками «скоро»).
   Чтобы наполнить — просто поставь у работы social: "Дзен" / "ВК" / "LinkedIn".
------------------------------------------------------------------------- */
const EMPTY_SOCIALS = ["ВК", "Дзен", "LinkedIn"];

/* ----------------------------- РАБОТЫ ----------------------------------- *
   Каждая работа — это один объект { ... } и на сайте превращается в кнопку-цветок.

   Поля:
     title    — название работы (обязательно). Держи коротким — влезет в цветок.
     link     — ссылка на работу (можно оставить "" — будет «скоро»)
     project  — проект/заказчик (группировка «По проектам»)
     niche    — тематика/ниша (группировка «По нишам»)
     format   — формат: "Статья", "Reels", "Пост", "Промостраница", "Рерайт"...
     social   — площадка: "VC", "Telegram", "Сайт", "Reels", "Промостраницы"...
     best     — true, если это одна из лучших работ (появится значок ⭐)
     note     — полное описание (показывается при наведении на цветок)
------------------------------------------------------------------------- */
const WORKS = [
  /* ---------- StickPeek · статьи: VC, блог компании, Контур.Журнал ---------- */
  { title: "«Я начальник, ты дурак»", link: "https://vc.ru/hr/1927731-navyki-upravleniya-soboy-dlya-karernogo-rosta", project: "StickPeek", niche: "HR и найм", format: "Статья", social: "VC", best: false, note: "Почему self-skills нужны бизнесу и как их развивать без коучей." },
  { title: "Поиск IT-спецов: 6 шагов", link: "https://vc.ru/hr/1832688-gaid-po-uspeshnomu-poisku-it-specialistov-ot-ekspertov-6-praktichnyh-shagov", project: "StickPeek", niche: "HR и найм", format: "Статья", social: "VC", best: false, note: "Гайд по успешному поиску IT-специалистов от экспертов: 6 практичных шагов." },
  { title: "Рекрутеры не нужны? AI и найм", link: "https://vc.ru/hr/1781133-rekrutery-bolshe-ne-nuzhny-ai-uzhe-delaet-ih-rabotu-bystree-i-deshevle", project: "StickPeek", niche: "HR и найм", format: "Статья", social: "VC", best: true, note: "AI уже делает работу рекрутёров быстрее и дешевле." },
  { title: "Кого нанимать в 2025", link: "https://vc.ru/hr/1704609-zumery-ne-rabotayut-rabochie-v-deficite-kogo-voobshe-nanimat-v-2025-godu", project: "StickPeek", niche: "HR и найм", format: "Статья", social: "VC", best: true, note: "Зумеры не работают, рабочие в дефиците — кого вообще нанимать в 2025 году." },
  { title: "Зачем вам интроверты", link: "https://vc.ru/hr/1725604-zachem-vam-introverty-5-prichin-pochemu-oni-horoshie-sotrudniki", project: "StickPeek", niche: "HR и найм", format: "Статья", social: "VC", best: false, note: "5 причин, почему интроверты — хорошие сотрудники." },
  { title: "Геймификация онбординга", link: "https://stickpeek.ru/blog/game_onboarding", project: "StickPeek", niche: "HR и найм", format: "SEO-статья", social: "Блог компании", best: false, note: "SEO-статья в блог StickPeek: геймифицированный онбординг." },
  { title: "Мерч и лояльность сотрудников", link: "https://stickpeek.ru/blog/employee_loyalty", project: "StickPeek", niche: "HR и найм", format: "SEO-статья", social: "Блог компании", best: false, note: "SEO-статья в блог StickPeek: мерч для повышения лояльности сотрудников." },
  { title: "Мерч как благодарность", link: "https://stickpeek.ru/blog/merch_kak_sposob_blagodarnosti_sotrudnikam", project: "StickPeek", niche: "HR и найм", format: "SEO-статья", social: "Блог компании", best: false, note: "SEO-статья в блог StickPeek: корпоративный мерч как способ выразить благодарность сотрудникам." },
  { title: "Колонка в Контур.Журнале", link: "https://docs.google.com/document/d/1K86auU_BUfz1GmaQiPjDBd1AukwxNCSrAm1yBisUKtk/edit?tab=t.0", project: "StickPeek", niche: "HR и найм", format: "Гостевая колонка", social: "Контур.Журнал", best: true, note: "Гостевая экспертная колонка для Контур.Журнала — написана от лица бренда StickPeek." },

  /* ---------- SLOVAMO · SEO-статьи (тату, дизайн, ремонт, металлургия) ---------- */
  { title: "Статьи про тату", link: "https://justdotattoo.ru/author/trunova_ira/", project: "SLOVAMO", niche: "Тату и бьюти", format: "Статья", social: "Сайт", best: true, note: "Серия авторских статей про тату — отдельная страница на JustDoTattoo." },
  { title: "Как создать мудборд", link: "https://docs.google.com/document/d/1A7p0GxqyfwV1o2WuMD6NEpLVbbvdoIuTgN4U_wI_Y60/edit?tab=t.0#heading=h.fcqelqh3watp", project: "SLOVAMO", niche: "Дизайн", format: "SEO-статья", social: "Сайт", best: false, note: "SEO-статья: как создать мудборд." },
  { title: "Как зарабатывать на стикерах", link: "https://docs.google.com/document/d/1_CHWjGb8nlw9DqV5hh9MUKunAQE2NzalERZuoe9488Q/edit?tab=t.0#heading=h.rs8tsrtt6kvn", project: "SLOVAMO", niche: "Дизайн", format: "SEO-статья", social: "Сайт", best: false, note: "SEO-статья: как зарабатывать на стикерах." },
  { title: "Молдинги в интерьере", link: "https://docs.google.com/document/d/1KesFNwzcnPLbltIi_PYEKhUVJxqgTTE9JpSEhHD4Tcc/edit?tab=t.0", project: "SLOVAMO", niche: "Дизайн интерьера", format: "SEO-статья", social: "Сайт", best: false, note: "SEO-статья: что такое молдинги в интерьере." },
  { title: "Тёплый пол в квартире", link: "https://docs.google.com/document/d/1ZaCJz2nFqxy0A8JA4JVkd9T4ByDUsgDyK44x0sVZclk/edit?tab=t.0#heading=h.ujr83wqhwjmf", project: "SLOVAMO", niche: "Стройка и ремонт", format: "SEO-статья", social: "Сайт", best: false, note: "SEO-статья: можно ли в квартире сделать тёплый пол." },
  { title: "Где купить алюминиевые листы", link: "https://docs.google.com/document/d/1RQ5kDiy9pw-XnYpBJSaBws_0VwA5IboCAWR9fgCEJE8/edit?tab=t.0#heading=h.90zdheir1mho", project: "SLOVAMO", niche: "Металлургия", format: "SEO-статья", social: "Сайт", best: false, note: "SEO-статья: где купить алюминиевые листы." },
  { title: "Хранение титанового проката", link: "https://docs.google.com/document/d/1pWbKjr0wxDw29S7NENFrqA1-V9bGFUcGjFvmOR9rLJA/edit?tab=t.0", project: "SLOVAMO", niche: "Металлургия", format: "SEO-статья", social: "Сайт", best: false, note: "SEO-статья: как хранить титановый прокат." },

  /* ---------- Фриланс · разовые работы ---------- */
  { title: "Сотрудники-амбассадоры: кейс", link: "https://vc.ru/life/1435243-zachem-biznesu-sotrudniki-ambassadory-keis-iz-lichnogo-opyta", project: "Фриланс", niche: "Маркетинг и бренд", format: "Статья", social: "VC", best: false, note: "Зачем бизнесу сотрудники-амбассадоры. Кейс из личного опыта." },
  { title: "Амбассадоры = масштабирование", link: "https://vc.ru/marketing/1441484-sotrudniki-ambassadory-luchshaya-strategiya-masshtabirovaniya-biznesa", project: "Фриланс", niche: "Маркетинг и бренд", format: "Статья", social: "VC", best: true, note: "Сотрудники-амбассадоры — лучшая стратегия масштабирования бизнеса." },

  /* ---------- Промостраницы (агентство Jungle Marketing) ---------- */
  { title: "Как в 45 выглядеть на 30", link: "https://docs.google.com/document/d/13LiaJUDEZeKAx03I0GNzLJMU2VQVF5B0_rwn5A4NE7o/edit?tab=t.0#heading=h.a2li7oeaqofz", project: "Jungle Marketing", niche: "Медицина", format: "Статья", social: "Промостраницы", best: false, note: "Промостраница про anti-age — с хорошими цифрами по дочитываниям." },
  { title: "Розацеа · Телос Бьюти", link: "https://docs.google.com/document/d/1c75LRulQGfQ2TPMzEQlfoM2NmANW5bchCcN7bJtgRtw/edit?tab=t.0#heading=h.ac2q3bh95qtf", project: "Jungle Marketing", niche: "Медицина", format: "Статья", social: "Промостраницы", best: false, note: "Что делать при розацеа и как её избежать. Промостраница для «Телос Бьюти»." },
  { title: "Мигрень и остеопатия", link: "https://docs.google.com/document/d/1C-nKVJiiTmrdrv1wBOun_H_8RWYe6iYWlk8WFHRdABw/edit?tab=t.0#heading=h.caglyniq65oa", project: "Jungle Marketing", niche: "Медицина", format: "Статья", social: "Промостраницы", best: false, note: "Эффективное лечение мигреней с помощью остеопатии." },
  { title: "Боли в пояснице у беременных", link: "https://docs.google.com/document/d/1SeTpj5RdjsCq9pRIqgP4Zdc3w-8uDzwkuo7m2iyT1HU/edit?tab=t.0#heading=h.w7rawftxm4zu", project: "Jungle Marketing", niche: "Медицина", format: "Статья", social: "Промостраницы", best: false, note: "Безопасное лечение болей в пояснице при беременности." },
  { title: "Страх стоматологов", link: "https://docs.google.com/document/d/16M_iSEz6ckUmjsDC13o-N5oNE8A8dRvaqoJTgqdn_YE/edit?tab=t.0#heading=h.j1sv86qox8w", project: "Jungle Marketing", niche: "Медицина", format: "Статья", social: "Промостраницы", best: false, note: "Как перестать бояться стоматологов." },
  { title: "Где теряются клиенты", link: "https://marketing-jungle.com/blog/klyuchevye-oshibki-gde-teryayutsya-klienty/", project: "Jungle Marketing", niche: "Маркетинг и бренд", format: "SEO-статья", social: "Блог компании", best: false, note: "Ключевые ошибки, где теряются клиенты." },
  { title: "B2B-маркетинг для медицины", link: "https://marketing-jungle.com/blog/b2b-marketing-dlya-mediciny-chto-rabotaet-a-chto-pustaya-trata-byudzheta/", project: "Jungle Marketing", niche: "Маркетинг и бренд", format: "SEO-статья", social: "Блог компании", best: false, note: "B2B-маркетинг для медицины: что работает, а что пустая трата бюджета." },
  { title: "Может ли агентство слить базу", link: "https://marketing-jungle.com/blog/razbiraem-strahi-mozhet-li-agentstvo-slit-bazu-ili-udorozhit-zayavki/", project: "Jungle Marketing", niche: "Маркетинг и бренд", format: "SEO-статья", social: "Блог компании", best: false, note: "Разбираем страхи: может ли агентство «слить» базу или удорожить заявки." },
  { title: "Аутсорс vs штатный маркетолог", link: "https://marketing-jungle.com/blog/shtatnyj-specialist-ili-marketing-na-autsorse-chto-luchshe/", project: "Jungle Marketing", niche: "Маркетинг и бренд", format: "SEO-статья", social: "Блог компании", best: false, note: "Маркетолог на аутсорсе против штатного: что лучше." },


  /* ---------- Reels · сценарии и ролики ---------- */
  { title: "Reels · питомник туй", link: "https://docs.google.com/document/d/1lEfbkW1oC-LmATk4Ryj4xB_gU6hSJ1l1gCPk_WAMfTo/edit?tab=t.0#heading=h.xofcpt4q5m3o", project: "Pomegranate Project", niche: "Растения и сад", format: "Reels", social: "Instagram", best: false, note: "Сценарии Reels для питомника туй (Pomegranate Project)." },
  { title: "Сторис · питомник туй", link: "https://docs.google.com/spreadsheets/d/1PaWqwJHkcUEjgacErTm8LXSEmEcbFyrHybFnORk7VKQ/edit?gid=0#gid=0", project: "Pomegranate Project", niche: "Растения и сад", format: "Сторис", social: "Instagram", best: false, note: "Сторис для питомника туй (Pomegranate Project)." },
  { title: "Кейс: соцсети питомника", link: "https://vc.ru/id2415075/1624437-kak-my-prokachali-socseti-pitomnika-rastenii-priveli-280-000-podpischikov-v-inst-i-80-000-v-vk", project: "Pomegranate Project", niche: "Растения и сад", format: "Статья", social: "VC", best: true, note: "Кейс на VC: как прокачали соцсети питомника растений — 280 000 подписчиков в Instagram и 80 000 во ВКонтакте." },
  { title: "Reels-сериал про органы", link: "", project: "Optimin", niche: "Здоровье и спорт", format: "Reels", social: "Instagram", best: false, note: "Сериал из рилсов про органы для бренда Optimin." },
  { title: "Контент-план Optimin", link: "https://docs.google.com/spreadsheets/d/1SR1BU845smtsUjyTEGMii_TnfKECOePJafGWEFhYUfI/edit?gid=0#gid=0", project: "Optimin", niche: "Здоровье и спорт", format: "Контент-план", social: "Google Sheets", best: false, note: "Контент-план для бренда Optimin (Google Таблицы)." },
  { title: "Telegram-канал Optimin", link: "https://t.me/Optimin_Club/114", project: "Optimin", niche: "Здоровье и спорт", format: "Ведение канала", social: "Telegram", best: false, note: "Веду Telegram-канал бренда Optimin." },

  /* ---------- Apartico · ведение каналов (посуточная аренда) ---------- */
  { title: "Telegram-канал УК (B2B)", link: "https://t.me/Aparticouk/25", project: "Apartico", niche: "Недвижимость", format: "Ведение канала", social: "Telegram", best: false, note: "Веду Telegram-канал управляющей компании Apartico — аудитория B2B." },
  { title: "Дзен (B2C)", link: "https://dzen.ru/apartico", project: "Apartico", niche: "Недвижимость", format: "Ведение канала", social: "Дзен", best: false, note: "Веду блог Apartico на Дзене — аудитория B2C." },
  { title: "ВК-сообщество (B2C)", link: "https://vk.com/apartico", project: "Apartico", niche: "Недвижимость", format: "Ведение канала", social: "ВК", best: false, note: "Веду сообщество Apartico во ВКонтакте — аудитория B2C." },
  { title: "Tenchat (B2B)", link: "https://tenchat.ru/apartico", project: "Apartico", niche: "Недвижимость", format: "Ведение канала", social: "Tenchat", best: false, note: "Веду блог Apartico в Tenchat — аудитория B2B." },

  /* ---------- Посты для соцсетей ---------- */
  { title: "«Хочу похудеть, но бездействую»", link: "https://docs.google.com/document/d/1TIXGl0JW_pLeai9o0l7_egfs7SXRiC-Qh_XfLj7wzBg/edit?tab=t.0#heading=h.qlpqdw7cmfgp", project: "Фриланс", niche: "Здоровье и спорт", format: "Пост", social: "Instagram", best: false, note: "Пост для Instagram: «Хочу похудеть, но бездействую»." },
  { title: "Брокер недвижимости (Дубай)", link: "https://docs.google.com/document/d/1MVRjf2c0U0SyRoX--at8l-lzckcrnKjxqQbKP7N3ihk/edit?tab=t.0#heading=h.56lwj6rfzz5h", project: "Pomegranate Project", niche: "Недвижимость", format: "Пост", social: "Telegram", best: false, note: "Посты для брокера недвижимости в Дубае (Pomegranate Project)." },
  { title: "«Что такое HRV»", link: "https://docs.google.com/document/d/1e8KpzohHaXG8k_rkahxjdQ9g21M8Iopghw1zvKJVzg0/edit?tab=t.0", project: "Фриланс", niche: "Здоровье и спорт", format: "Пост", social: "ВК", best: false, note: "Пост во ВКонтакте: что такое HRV." },
  { title: "Новости АПК", link: "https://t.me/digitalagro_news/102", project: "Фриланс", niche: "АПК и агро", format: "Пост", social: "Telegram", best: false, note: "Пост с подборкой новостей в сфере АПК." },

  /* ---------- Фриланс · прочие разовые работы ---------- */
  { title: "B2G письма", link: "", project: "Фриланс", niche: "Бизнес и право", format: "Письмо", social: "B2B/B2G", best: false, note: "Деловые письма в госорганы, на которые отвечают." },
  { title: "Детский B2B журнал", link: "", project: "Фриланс", niche: "Детские товары", format: "Статья", social: "B2B/B2G", best: false, note: "" },
  { title: "Сайт с кофе", link: "", project: "Фриланс", niche: "Еда и HoReCa", format: "Сайт", social: "Сайт", best: false, note: "Тексты для сайта кофейного бренда." },
  { title: "Рерайт Franshisa.ru", link: "", project: "Фриланс", niche: "Бизнес и право", format: "Рерайт", social: "Сайт", best: false, note: "Оживила сухие описания франшиз, не потеряв смысл." },
  { title: "Mugle Rest", link: "https://dzen.ru/mugle_rest", project: "Фриланс", niche: "Еда и HoReCa", format: "Ведение канала", social: "Дзен", best: false, note: "Веду Дзен франшизы грузинских ресторанов Mugle Rest." },
  { title: "Franchise 500", link: "https://docs.google.com/document/d/1l0fozv_fjIx9Va4rOff8Iv0d7oQHarSOUC1lA4cqVr4/edit?tab=t.0", project: "Фриланс", niche: "Бизнес и право", format: "SEO-статья", social: "Сайт", best: false, note: "SEO-статья про рейтинг франшиз Franchise 500." },
  { title: "Reels · Just Hike", link: "https://docs.google.com/document/d/1JIBkkYm5617oDRFXaBLI3A_HSZxXTnfzZBSNYWtkWH0/edit?tab=t.0#heading=h.4ehtgv1tnx9i", project: "Фриланс", niche: "Путешествия", format: "Reels", social: "Instagram", best: false, note: "Сценарии Reels для Just Hike." },
];

/* ----------------------------- СКИЛЛЫ ----------------------------------- *
   hard — навыки и инструменты (level от 1 до 5 — закрашенные лепестки)
   soft — личные качества (cat — имя гифки из папки assets/cats без .gif)
------------------------------------------------------------------------- */
const SKILLS = {
  hard: [
    { name: "Копирайтинг под задачу", level: 5 },
    { name: "SMM-ведение (VK, TG, Дзен)", level: 5 },
    { name: "Сценарии Reels", level: 5 },
    { name: "SEO-копирайтинг", level: 4 },
    { name: "Промостраницы (Яндекс)", level: 4 },
    { name: "Контент-стратегия и план", level: 4 },
    { name: "Работа с ТЗ и брифами", level: 5 },
    { name: "Нейросети (ChatGPT, Claude)", level: 4 },
    { name: "Email-рассылки и воронки", level: 4 },
  ],
  soft: [
    { title: "Креативность", desc: "Идеи пачками + насмотренность в трендах и мемах", img: "assets/cats/skill-creativity.png" },
    { title: "Эмпатия к ЦА", desc: "Пишу на языке читателя, чувствую tone of voice", cat: "happy" },
    { title: "Дедлайны", desc: "Веду несколько проектов сразу и сдаю в срок", img: "assets/cats/skill-deadlines.png" },
    { title: "Гибкость", desc: "Спокойно принимаю правки и переделываю по делу", cat: "huh" },
    { title: "Коммуникация", desc: "Внятно согласую задачу и задаю правильные вопросы", img: "assets/cats/skill-communication.png" },
    { title: "Внимание к деталям", desc: "Вычитываю, проверяю факты, держу единый стиль", cat: "maxwell" },
  ],
};
