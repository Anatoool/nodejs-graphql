import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

import { URL } from 'constants/url';

class OrderAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = URL.billingV1;
    }

    willSendRequest(request: RequestOptions): void {
        request.headers.set('Authorization', `token ${this.context.token}`);
    }

    private ordersLoader = new DataLoader(async (ids) => {
        console.log(ids, this.context.clientId);

        const ordersList = (await this.get('orders/', {
            order_ids: ids.join(','),
            limit: 100,
            'client[type]': 'company',
            'client[id]': this.context.clientId,
            fields: '*,alias,source,form_api_v1_key,cost,group_id,state,' +
                'title,is_admin,,client_email,packet_status,invoice_url,invoice_number',
        })).orders;

        return ids.map(id => ordersList.find((order: Record<string, any>) => order.id === id));
    }, {
        cache: false,
        maxBatchSize: 50,
    });

    async getById(id: number): Promise<Record<string, any>> {
        return this.ordersLoader.load(id);
    }
}

export default OrderAPI;
