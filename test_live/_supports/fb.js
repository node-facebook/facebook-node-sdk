'use strict';
import 'dotenv/config';
import FB from '../..';

if ( !process.env.FB_APP_ID || !process.env.FB_APP_SECRET || !(process.env.FB_APP_ACCESS_TOKEN || process.env.FB_APP_TEST_USER) ) {
	console.warn("FB_APP_ID, FB_APP_SECRET, and FB_APP_ACCESS_TOKEN environment variables must be defined for live tests against Facebook's Graph API to function."); // eslint-disable-line no-console
}

FB.options({
	appId: process.env.FB_APP_ID,
	appSecret: process.env.FB_APP_SECRET,
	accessToken: process.env.FB_APP_ACCESS_TOKEN,
	version: 'v2.12',
});

before(async function() {
	if ( !process.env.FB_APP_ACCESS_TOKEN && process.env.FB_APP_TEST_USER ) {
		const {data} = await FB.api(process.env.FB_APP_ID + '/accounts/test-users',
			{access_token: process.env.FB_APP_ID + '|' + process.env.FB_APP_SECRET});

		const testUser = data.find(({id}) => id === process.env.FB_APP_TEST_USER);
		if ( testUser ) {
			FB.options({
				accessToken: testUser.access_token,
			});
		} else {
			console.warn(`Could not find test user ${process.env.FB_APP_TEST_USER}`); // eslint-disable-line no-console
		}
	}
});

export default FB;
