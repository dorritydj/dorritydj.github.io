import get from 'axios';
import * as _ from 'lodash';

export class Github {
    public info: any[];

    private static instance: Github;

    constructor() {
        this.info = [];

        this.saveInfo();
    }

    public saveInfo() {
        return get('http://api.github.com/users/dorritydj/repos')
            .then((data) => {
                return data.data;
            })
            .then((projects) => {
                return _(projects)
                    .filter((project) => {
                        return project.archived === false;
                    })
                    .map((project) => {
                        console.log(project);
                        return {
                            name: project.name,
                            url: project.html_url,
                            description: project.description
                        };
                    })
                    .compact()
                    .value();
            })
            .then((projects) => {
                this.info = projects;
            });
    }

    public getInfo() {
        console.log(this.info);
        return this.info;
    }

    public static getInstance() {
        return this.instance || (this.instance = new this());
    }
}
