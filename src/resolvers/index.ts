import vacancyResolvers from 'resolvers/vacancy';
import vacancyDeferredOrderResolvers from 'resolvers/vacancy-deferred-order';

export default {
    Query: {
        ...vacancyResolvers.Query,
    },
    Vacancy: vacancyResolvers.Vacancy,
    VacancyDeferredOrder: vacancyDeferredOrderResolvers.VacancyDeferredOrder,
};
