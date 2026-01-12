# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
# clothes-picker

# Технологии

- **Vue 3** + Composition API  
- `<script setup>` для всех компонентов  
- Тупые UI-компоненты (без бизнес-логики)  
- Бизнес-логика вынесена в **composable** `useSelection()`  
- Данные вынесены в **composable** `useItems()`  
- Простая CSS-верстка без внешних библиотек

# Структура проекта

src/
├─ components/
│ ├─ CollectionPanel.vue # Панель с элементами
│ ├─ ItemCard.vue # Карточка элемента
│ ├─ SelectedTopLeft.vue # Отображение выбранных слева
│ └─ SelectedTopRight.vue # Отображение выбранного справа
├─ composables/
│ ├─ useItems.js # Данные для нижних блоков
│ └─ useSelection.js # Бизнес-логика выбора элементов
├─ App.vue
└─ main.js