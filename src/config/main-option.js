export default {
    baseUrl: process.env.NODE_ENV == 'production' ? "/prod/api" : "/api",
    generatorCode: process.env.NODE_ENV == 'production' ? "/prod/api/user/generator-code" : "/api/user/generator-code"
}