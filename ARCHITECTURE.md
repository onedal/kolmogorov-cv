# Архитектура приложения CV

## 🏗️ Структура проекта

```
src/
├── lib/
│   ├── types/           # TypeScript типы
│   ├── config/          # Конфигурация приложения
│   ├── data/            # Централизованные данные
│   ├── stores/          # Svelte stores для состояния
│   ├── utils/           # Утилиты и хелперы
│   ├── routing/         # Навигация и роутинг
│   └── components/
│       ├── base/        # Переиспользуемые компоненты
│       ├── ui/          # UI компоненты (shadcn/ui)
│       └── [feature]/   # Специфичные компоненты
├── routes/              # SvelteKit роуты
└── app.html            # HTML шаблон
```

## 📋 Основные принципы

### 1. **Типизация (TypeScript)**
- Строгая типизация всех данных
- Интерфейсы для всех сущностей
- Типы для языков и специализаций

### 2. **Централизованное управление состоянием**
- Svelte stores для глобального состояния
- Реактивные вычисления
- Единый источник истины

### 3. **Переиспользуемые компоненты**
- Базовые компоненты в `lib/components/base/`
- Композиция над наследованием
- Пропсы для кастомизации

### 4. **Конфигурация**
- Централизованные настройки
- Константы для роутов и файлов
- Легкая настройка

## 🔧 Ключевые модули

### Types (`lib/types/index.ts`)
```typescript
export type Language = 'en' | 'ru';
export type Specialization = 'develop' | 'devops';
export interface ResumeData { ... }
```

### Config (`lib/config/index.ts`)
```typescript
export const APP_CONFIG: AppConfig = { ... };
export const ROUTES = { ... };
export const PDF_FILES = { ... };
```

### Data (`lib/data/index.ts`)
```typescript
export const RESUME_DATA: Record<Language, Record<Specialization, ResumeData>> = { ... };
```

### Stores (`lib/stores/index.ts`)
```typescript
export const currentLanguage = writable<Language>('ru');
export const currentSpecialization = writable<Specialization>('develop');
```

### Utils (`lib/utils/index.ts`)
```typescript
export function getLanguageFromPath(path: string): Language { ... }
export function getPdfFileName(spec: Specialization, lang: Language): string { ... }
```

## 🎯 Преимущества новой архитектуры

### ✅ **Масштабируемость**
- Легко добавлять новые языки
- Простое расширение функциональности
- Модульная структура

### ✅ **Поддерживаемость**
- Четкое разделение ответственности
- Типизированный код
- Документированные интерфейсы

### ✅ **Переиспользование**
- Базовые компоненты
- Утилиты и хелперы
- Централизованные данные

### ✅ **Тестируемость**
- Изолированные модули
- Чистые функции
- Предсказуемое состояние

## 🚀 Использование

### Добавление нового языка
1. Обновить `Language` тип в `types/index.ts`
2. Добавить данные в `data/index.ts`
3. Обновить конфигурацию в `config/index.ts`

### Добавление новой специализации
1. Обновить `Specialization` тип
2. Добавить роуты в `config/index.ts`
3. Создать данные в `data/index.ts`

### Создание нового компонента
1. Определить интерфейс пропсов
2. Создать компонент в `components/base/`
3. Добавить типизацию

## 📝 Следующие шаги

1. **Миграция существующих компонентов** на новую архитектуру
2. **Добавление тестов** для критических модулей
3. **Оптимизация производительности** с lazy loading
4. **Добавление валидации** данных
5. **Интернационализация** (i18n) система
