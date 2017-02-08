// so happy this relative import seems to work the same as ' import FB from "fb" '
import FB, {Facebook} from "../../";

// the 3 options overloads
FB.options().appId;
FB.options("appId");
FB.options({
    appId: "alskjdfaslkdjfalsdfjk"
});
// extend returns a Facebook
FB.extend({
    accessToken: "loremipsum"
}).options("accessToken");
// withAccessToken returns a Facebook
FB.withAccessToken("foobar").options("accessToken");
// setAccessToken works, getAccessToken returns a string
FB.setAccessToken("foobar");
FB.getAccessToken().charAt(0);

// All api calls have the documented parameters/returns
FB.api("./").then((response) => {
});
FB.api("./", (response) => {});
FB.api("./", {scope: "foo"}).then((response) => {
});
FB.api("./", {scope: "foo"}, (response) => {});
FB.api("./", "get").then((response) => {
});
FB.api("./", "post", (response) => {});
FB.api("./", "delete", {scope: "foo"}).then((response) => {
});
FB.api("./", "get", {scope: "foo"}, (response) => {});
// All napi calls have the documented parameters
FB.napi("./");
FB.napi("./", (error, response) => {});
FB.napi("./", {scope: "foo"});
FB.napi("./", {scope: "foo"}, (error, response) => {});
FB.napi("./", "post");
FB.napi("./", "post", (error, response) => {});
FB.napi("./", "delete", {scope: "foo"});
FB.napi("./", "delete", {scope: "foo"}, (error, response) => {});

// can instantiate Facebook class
let fb = new Facebook();
fb.api("./");
