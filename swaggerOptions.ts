import swaggerJsDoc from 'swagger-jsdoc'
import path from 'path'

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fast Delivery',
            version: '1.0.0',
            description: 'A simple Express API',
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Local server',
            },
        ],
    },
    apis: [
        path.resolve(__dirname, './docs/area-routes.ts'),
        path.resolve(__dirname, './docs/employee-routes.ts'),
        path.resolve(__dirname, './docs/user-routes.ts'),
    ],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

export default swaggerDocs
