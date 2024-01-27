class ApiResponse {

    static ok(message){
        return {
            statusCode: 200,
            message: message,
            dataTime: new Date().getTime()
        }
    }
}

module.exports = ApiResponse;