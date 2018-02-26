'use strict';
import {expect} from '../_supports/chai';
import FB from '../_supports/fb';

describe('me', function() {
	describe("FB.api('/me')", function() {
		it('should have a numeric `id` and string `name`', async function() {
			const response = await FB.api('/me');
			expect(response).to.have.a.property('id')
				.that.is.a('string').which.matches(/^\d+$/);
			expect(response).to.have.a.property('name')
				.that.is.a('string');
		});

		it('should have an `id` that matches the one belonging to the access token', async function() {
			const {data} = await FB.api('/debug_token', {
				access_token: `${process.env.FB_APP_ID}|${process.env.FB_APP_SECRET}`,
				input_token: FB.options('accessToken'),
			});
			const response = await FB.api('/me', {fields: 'id'});
			expect(response).to.have.a.property('id', data.user_id);
		});
	});

	describe("FB.api('/me', {fields: 'locale'})", function() {
		it('should have a `locale` matching a locale string and not have a `name`', async function() {
			const response = await FB.api('/me', {fields: 'locale'});
			expect(response).to.have.a.property('locale')
				.that.is.a('string').which.matches(/^[a-z]{2}_[A-Z]{2}$/);
			expect(response).to.not.have.a.property('name');
		});
	});
});
