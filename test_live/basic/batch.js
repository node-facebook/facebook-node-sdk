'use strict';
import {expect} from '../_supports/chai';
import FB from '../_supports/fb';

describe('batch', function() {
	it('should make a batch API call and return results for each', async function() {
		const response = await FB.api('', 'post', {
			batch: [
				{method: 'get', relative_url: 'me'},
				{method: 'get', relative_url: 'me/friends?limit=1', name: 'one-friend'}
			],
		});

		const res1 = response[0];
		expect(res1).to.be.a('object');
		expect(res1).to.have.a.property('code', 200);
		expect(res1).to.have.a.property('body')
			.that.satisfies((body) => JSON.parse(body));
		expect(JSON.parse(res1.body)).to.have.a.property('id')
			.that.is.a('string').which.matches(/^\d+$/);
		expect(JSON.parse(res1.body)).to.have.a.property('name')
			.that.is.a('string');

		const res2 = response[1];
		expect(res2).to.be.a('object');
		expect(res2).to.have.a.property('code', 200);
		expect(res2).to.have.a.property('body')
			.that.satisfies((body) => JSON.parse(body));
		expect(JSON.parse(res2.body)).to.have.a.property('data')
			.that.is.a('array');
		expect(JSON.parse(res2.body)).to.have.a.property('summary')
			.that.is.a('object')
			.with.a.property('total_count').that.is.a('number');
	});
});
