Graph API Live Tests
====================
```js
npm run test-live
```

The normal `test/` tests locally ensure that the various ways of making API calls all make API calls in the same expected format. These tests are run against the live Graph API in just one format to ensure that the SDK functions with real-world API calls.

To run these live tests you will have to setup a Facebook app for testing, create some test users, and include the credentials as ENV variables when running the test suite.

* Create a Facebook app on https://developers.facebook.com/
* Using "Roles > Test Users" add a test user with the following options:
  * Enable "Authorize Test Users for This App?"
  * Set "Login Permissions" to "publish_actions","user_posts"
* Use the "Edit" button to get an access token for that user
* Run the test suite with the following environment variables (to simplify configuration you can save these to an `.env` file)
  * **`FB_APP_ID`**=Your test app's App ID.
  * **`FB_APP_SECRET`**=Your test app's App Secret.
  * **`FB_APP_ACCESS_TOKEN`**=The access token for the test user you created, you'll need to periodically get a new one.

**WARNING**: These tests make test posts and photo uploads, **do not** run them using access tokens for your personal Facebook account.
