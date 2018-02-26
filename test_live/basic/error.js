'use strict';
import {expect} from '../_supports/chai';
import FB, {FacebookApiException} from '../_supports/fb';

describe('error', function() {
	describe("FB.api('/404')", function() {
		it('should throw a FacebookApiException', async function() {
			const res = FB.api('/404');
			await expect(res).to.eventually.be.rejectedWith(FacebookApiException);
			await expect(res).to.eventually.be.rejected
				.and.have.a.property('response')
					.that.is.a('object')
					.with.property('error')
						.that.has.keys(['message', 'type', 'code', 'error_subcode', 'fbtrace_id']);
		});
	});
});
