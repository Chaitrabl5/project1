class HttpClient{
    async get(url){
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    async post(url,data){
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const data = await response.json()
        return data
    }
}

export default new HttpClient()