class ApiResponse {

    static ok(message){
        return {
            statusCode: 200,
            message: message,
            dataTime: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })
        }
    }
}

module.exports = ApiResponse;