import { DataSources } from 'data-sources';
import { Context } from 'apollo-server-core';

type OrderContext = Context<{ dataSources: DataSources; clientId: number; }>;

export default {
    VacancyDeferredOrder: {
        order: async (parent: any, { clientId }: any, context: OrderContext): Promise<any> => {
            if (!parent) return null;

            context.clientId = clientId;

            const { dataSources } = context;

            const order = await dataSources.orderAPI.getById(parent.order_id);

            return order;
        },
    },
};
