import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

import { Vacancy } from '@zp/ts-types/vacancy';

import { URL } from 'constants/url';

class VacanciesDeferredOrderAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = URL.rpc;
    }

    willSendRequest(request: RequestOptions): void {
        request.headers.set('Authorization', `token ${this.context.token}`);
    }

    private getByVacanciesIdsLoader = new DataLoader(async (ids) => {
        const deferredList = await Promise.all(ids.map(async (id) => (
            (await this.get(`vacancies/deferred/get_by_vacancy/${id}`)).vacancies_deferred[0]
        )));
        // const deferredList = (await this.get('orders/', {
        //     order_ids: ids.join(','),
        //     limit: 100,
        //     'client[type]': 'company',
        //     'client[id]': this.context.clientId,
        //     fields: '*,alias,source,form_api_v1_key,cost,group_id,state,' +
        //         'title,is_admin,,client_email,packet_status,invoice_url,invoice_number',
        // })).orders;

        return ids.map(id => deferredList.find((deferred: Record<string, any>) => deferred.vacancy_id === id));
    }, {
        cache: false,
        maxBatchSize: 100,
    });

    async getByVacancyId(id: number): Promise<Vacancy> {
        return this.getByVacanciesIdsLoader.load(id);
    }

    // async getByVacancyId(id: number): Promise<Vacancy> {
    //     return (await this.get(`vacancies/deferred/get_by_vacancy/${id}`)).vacancies_deferred[0];
    // }
}

export default VacanciesDeferredOrderAPI;
