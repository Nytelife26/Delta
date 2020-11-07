# Delta Whitepaper

Delta's purpose is to provide an all-platform (web included) wallet service for
the Conflux network, including a Paypal / Flexa like integratable embeddable
payment API channel.

#### Dependencies

In order to accomplish this mammoth task, I have elected to use the following 
stack:

* **Framework**: `next.js` / `expo` / `react-native` (later preact)
* **Accounts**: `pg` (postgres)
* **Authorization**: [`auth0`]

[`auth0`]: https://auth0.com

#### Structure

The wallet will be divided into two separate components: the API, and the app.
The use of `next.js` enables an easy way to hook react up for client and server
side, and stacking with `expo` and `react-native` allows that to be harnessed in
an all-platform application without having to rewrite the project specifically
for other platforms.

`next.js` will serve the site and API. There will be a landing page located at
the index, and a register/login page will be the next component. This will
hook in with `auth0`, attached to the postgres backend database.

That is all that is planned for now. This will be updated as the project
develops.