import { DataSources } from 'data-sources';
import { Vacancy } from '@zp/ts-types/vacancy';

export default {
    Query: {
        vacancy: async (_: any, args: any, { dataSources }:{ dataSources: DataSources }) => (
            dataSources.vacanciesAPI.getVacancy(args.id)
        ),
        vacanciesList: async (_: any, args: any, { dataSources }: any) => (
            dataSources.vacanciesAPI.getVacanciesList(args)
        ),
    },
    Vacancy: {
        vacancyBrandedTemplate: async (parent: Vacancy, args: any, { dataSources }: { dataSources: DataSources }) => {
            if (!parent.branded_template) return null;

            const template = await dataSources.vacancyBrandedTemplateAPI.getById(parent.branded_template.template_id);

            return template;
        },
        deferredOrder: async (parent: Vacancy, args: any, { dataSources }: { dataSources: DataSources }) => {
            const deferredOrder = await dataSources.vacancyDeferredOrderAPI.getByVacancyId(parent.id);

            return deferredOrder;
        },
    },
};
