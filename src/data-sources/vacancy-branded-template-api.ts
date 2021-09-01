import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

import { URL } from 'constants/url';

class VacancyBrandedTemplatesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = URL.apiV1;
    }

    willSendRequest(request: RequestOptions): void {
        request.headers.set('Authorization', this.context.token);
    }

    async getById(id: number): Promise<any> {
        return (await this.get(`vacancy_branded_templates/${id}`)).vacancy_branded_templates[0];
    }
}

export default VacancyBrandedTemplatesAPI;
