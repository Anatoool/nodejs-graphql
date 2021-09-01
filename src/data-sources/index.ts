import OrderAPI from 'data-sources/order-api';
import VacanciesAPI from 'data-sources/vacancies-api';
import VacancyBrandedTemplateAPI from 'data-sources/vacancy-branded-template-api';
import VacancyDeferredOrderAPI from 'data-sources/vacancy-deferred-order-api';

const dataSources = () => ({
    orderAPI: new OrderAPI(),
    vacanciesAPI: new VacanciesAPI(),
    vacancyBrandedTemplateAPI: new VacancyBrandedTemplateAPI(),
    vacancyDeferredOrderAPI: new VacancyDeferredOrderAPI(),
} as const);

export type DataSources = ReturnType<typeof dataSources>;

export default dataSources;
