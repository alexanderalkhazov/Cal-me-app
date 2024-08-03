import axios from 'axios';

const AUDIANCE = "https://dev-1t7yzdpbm5zl3s32.us.auth0.com/api/v2/";
const GRANT_TYPE = 'client_credentials';

export class Auth0Service {

    async getAccessToken(shouldPrintAT: boolean = false): Promise<{ success: boolean, msg: string, accessToken?: string }> {
        try {
            console.log("Trying to authenticate and get access token...");
            const { data: result } = await axios.post(`https://dev-1t7yzdpbm5zl3s32.us.auth0.com/oauth/token`, {
                client_id: process.env.AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                audience: AUDIANCE,
                grant_type: GRANT_TYPE
            });
            const { access_token } = result;
            console.log("Successfully got access token" + (shouldPrintAT ? " :" + access_token : ''));
            return { success: true, msg: 'get AT OK', accessToken: access_token };
        } catch (err) {
            console.error(err);
            return { success: false, msg: err.message };
        }
    }

}