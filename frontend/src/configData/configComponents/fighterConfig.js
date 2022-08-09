


export default {
    title : "Fighter",
    anchorLink : "fighter",
    apiInfo : [
        {
            endpoint : "data/response_example_PERSON_[queryParam].json",
            responseSignature : 200,
            type : "Successful",
            selected : true,
            queryParamsExamples: [
                "4f00e28e-cbf0-4ac8-988c-845c990e21c0", 
                "4f00e28e-cbf0-4ac8-988c-845c990e21c1"
            ],
            queryParams: [
                {
                    key : "id",
                    description: "The Category ID. This can be found using the Categories API.",
                    type : "string",
                    required : true
                },
                {
                    key : "test",
                    description: "The Category ID. This can be found using the Categories API.",
                    type : "string",
                    required : false
                }
            ],
            responseSchema : {
                data : [
                    {
                        key : "uuid",
                        description: "Universally unique identifier for the person"
                    },
                    {
                        key : "full_name",
                        description: "Full legal name for the person"
                    }
                ]
            }
        },
        {
            endpoint : "data/response_example_PERSON_403.json",
            responseSignature : 403,
            type : "Forbidden",
            selected : false,
            queryParams: [],
            responseSchema : {
                data : [
                    {
                        key : "timestamp",
                        description: "Current ISO 8601 timestamp on the server",
                        type : "string",
                    },
                    {
                        key : "error_code",
                        description: "An internal error code for the current error. If a unique platform error code is not available the HTTP status code is returned.",
                        type : "integer",
                    }
                ]
            }
        }
    ],                
    primaryText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc.",
    additionalInfo: {
        availableApiPlans: [
            'Free',
            'Hobby',
            'Pro'
        ],
        requestTypes: [
            'GET'
        ], 
    }
}