// model for User
export class User {
    constructor(
        id: {
            type: string,
            required: true
        },
        login: {
            type: string,
            required: true
        },
        display_name: {
            type: string,
            required: true
        },
        type: {
            type: string,
            required: true
        },
        broadcaster_type: {
            type: string,
            required: true
        },
        description: {
            type: string,
            required: true
        },
        profile_image_url: {
            type: string,
            required: true
        },
        offline_image_url: {
            type: string,
            required: true
        },
        view_count: {
            type: number,
            required: true
        },
        email: {
            type: string,
            required: false
        }) {
    }
}
