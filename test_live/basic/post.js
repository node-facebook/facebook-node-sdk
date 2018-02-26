'use strict';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import {expect} from '../_supports/chai';
import FB from '../_supports/fb';

function getTestID() {
	const now = new Date();
	const uniq = crypto.randomBytes(3).toString('base64');
	const id = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}-${uniq}`;
	return id;
}

describe('post', function() {
	describe("FB.api('/me/feed', 'post', {message})", function() {
		it('should post a message', async function() {
			const id = getTestID();
			const message = `A test suite post using facebook-node-sdk (#${id})`;
			const response = await FB.api('/me/feed', 'post', {message, fields: 'message'});
			expect(response).to.have.a.property('id')
				.that.is.a('string').which.matches(/^\d+_\d+$/);
			expect(response).to.have.a.property('message')
				.that.is.a('string').which.equals(message);
		});
	});

	describe("FB.api('/me/photos', 'post', {source: readStream, caption})", function() {
		it('should post an image', async function() {
			const id = getTestID();
			const caption = `A test suite upload using facebook-node-sdk (#${id})`;
			const readStream = fs.createReadStream(path.join(__dirname, '../_fixtures/2x2-check.jpg'));
			const response = await FB.api('/me/photos', 'post', {readStream, caption, fields: 'name'});
			expect(response).to.have.a.property('id')
				.that.is.a('string').which.matches(/^\d+$/);
			expect(response).to.have.a.property('name')
				.that.is.a('string').which.equals(caption);
		});
	});
});
