import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

import { Vacancy } from '@zp/ts-types/vacancy';

import { URL } from 'constants/url';

class VacanciesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = URL.apiV1;
    }

    willSendRequest(request: RequestOptions): void {
        request.headers.set('Authorization', this.context.token);
    }

    async getVacancy(id: number): Promise<Vacancy> {
        return (await this.get(`vacancies/${id}?scope=private&rubric_filter_mode=new`)).vacancies[0];
    }

    async getVacanciesList(params: Record<string, any>): Promise<Vacancy[]> {
        return this.get('vacancies', params);
    }
}

export default VacanciesAPI;
