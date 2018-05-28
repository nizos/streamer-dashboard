// model for User
export class User {
    public id: string;
    public login: string;
    public display_name: string;
    public type: string;
    public broadcaster_type: string;
    public description: string;
    public profile_image_url: string;
    public offline_image_url: string;
    public view_count: string;



    constructor(
        id: string,
        login: string,
        display_name: string,
        type: string,
        broadcaster_type: string,
        description: string,
        profile_image_url: string,
        offline_image_url: string,
        view_count: string) {
            this.id = id;
            this.login = login;
            this.display_name = display_name;
            this.type = type;
            this.broadcaster_type = broadcaster_type;
            this.description = description;
            this.profile_image_url = profile_image_url;
            this.offline_image_url = offline_image_url;
            this.view_count = view_count;
    }
}
