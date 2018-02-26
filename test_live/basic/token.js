'use strict';
import {expect} from '../_supports/chai';
import FB from '../_supports/fb';

describe("FB.api('/debug_token')", function() {
	let debug_token;
	before(function() {
		debug_token = FB.api('/debug_token', {
			access_token: `${process.env.FB_APP_ID}|${process.env.FB_APP_SECRET}`,
			input_token: FB.options('accessToken'),
		});
	});

	it('should be valid', async function() {
		const {data} = await debug_token;
		expect(data).to.have.a.property('is_valid', true);
	});

	it('should be for a USER', async function() {
		const {data} = await debug_token;
		expect(data).to.have.a.property('type', 'USER');
	});

	it('should be for the same APP_ID', async function() {
		const {data} = await debug_token;
		expect(data).to.have.a.property('app_id', process.env.FB_APP_ID);
	});

	it('should have the publish_actions and user_posts scope', async function() {
		const {data} = await debug_token;
		expect(data).to.have.a.property('scopes')
			.which.is.a('array')
			.and.includes('publish_actions')
			.and.includes('user_posts');
	});
});
