/**
 * 设置
 */

const routes = [
    {
        name: '',
        path: '/v1/checkConfig/queryPage',
        context: (ctx) => {
            ctx.statusCode = 200;
            ctx.body = {
                data: $Mock({
                    'list|30-100': [{
                        'configId|+1': 1,
                        'configName': '@csentence(2, 5)',
                        'productId': '@csentence(2, 5)',
                        'postLoanCheckType|1': '001,002,003,004',
                        'limitCheckType|1': '001,002',
                        'managerId': '000GUS202112140000000002',
                        'status|1': [
                            '001',
                            '002',
                        ],
                        'currencyFlag|1': [
                            '001',
                            '002',
                        ],
                    }],
                }),
                httpStatus: 200,
                responseType: "HSJRY_SUCCESS",
            }
        }
    }
]

module.exports = routes;
