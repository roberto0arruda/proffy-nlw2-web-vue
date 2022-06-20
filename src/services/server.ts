import { createServer } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    return createServer({
        environment,

        routes() {
            this.urlPrefix = 'http://localhost:3333';

            this.get("/connections", () => {
                return {
                    total: 3
                }
            });
        },
    });
}