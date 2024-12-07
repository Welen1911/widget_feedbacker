export default httpClient => ({
    create: async (data) => {
        // const response = await httpClient.get('/users/me');

        return {
            data: data
        }
    },
    generateApiKey: async () => {
        const response = await httpClient.post('/users/me/apikey');

        return {
            data: response.data
        }
    }
});