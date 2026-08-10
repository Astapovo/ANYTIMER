# AnyTimer ⏱️

[EN]
A lightweight, local-first PWA timer designed to track time across multiple physical zones or concurrent processes. Zero backend, works entirely offline. Built for field engineers and on-the-go tracking.

🚀 **[Live Demo](https://astapovo.github.io/ANYTIMER/)**

## Why it exists
Standard timers track one linear event. AnyTimer is built to monitor multiple independent objects entering and leaving various control zones simultaneously, keeping a strict log of every action without relying on an internet connection.

## How to use
1. **Zone Setup:** Create zones in the Editor. Swipe left to delete.
2. **Modes:**
   - *Single:* A simple toggle (Start/Stop) for the whole zone.
   - *Multiple:* Track multiple independent items inside one zone (adds a new item with a unique ID on each tap).
3. **Tracking:** Tap to start/stop. Long-running tasks (>30 min) require confirmation to stop to prevent accidental resets.
4. **Data & Logs:** Add text/voice notes on the fly. Export everything to CSV or send data payloads to external systems via Webhooks.

---

[RU]
Локальный PWA-таймер для контроля времени по физическим зонам и параллельным процессам. Без бэкенда, работает полностью офлайн. Заточен под полевую работу и управление на ходу.

🚀 **[Запустить приложение](https://astapovo.github.io/ANYTIMER/)**

## Зачем нужен
Обычные секундомеры считают одно событие. AnyTimer создан для мониторинга независимых объектов, которые заходят в разные зоны контроля и покидают их. Приложение ведет жесткий лог каждого действия и не зависит от наличия сети.

## Как использовать
1. **Настройка зон:** Создай нужные зоны в Редакторе. Удаление — свайпом карточки влево.
2. **Режимы:**
   - *Одиночная:* Простой тумблер (Старт/Стоп) на всю зону.
   - *Множественная:* Учет толпы объектов внутри одной зоны (каждый тап добавляет новый объект с уникальным номером).
3. **Учет:** Тапай для старта/остановки. Затяжные процессы (от 30 мин) просят подтверждение при остановке, чтобы не сбросить случайно.
4. **Логи и данные:** Накидывай текстовые или голосовые заметки на лету. Вся история выгружается в CSV или улетает на твои сервера через Webhook.