import es from './src/i18n/translations/es.json';

type Messages = typeof es;

declare global {
    interface IntlMessages extends Messages { }
}