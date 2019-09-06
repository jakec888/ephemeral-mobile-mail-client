# Ephemeral Email Mobile Client

### Most Recent Project:

[Bityle Clone](https://github.com/jakec888/bitly-clone) which uses the tecnologies here but with redux saga and to make asynchronous generator-linke requests.

### In Progress:

- **redux-saga/generators** (**recently finished** at most recent project **[Bityle Clone](https://github.com/jakec888/bitly-clone)**)
- testing using **jest** and **enzyme**

## About

Google Play Store: [Ephemeral Mobile Mail Client](https://play.google.com/store/apps/details?id=com.jakec888.ephemeral_mobile_mail_client_android)

Deployed only on the google play store.

Ephemeral online email client that will securely check your emails anywhere without holding you information.

Static website with serverless backend.

<center><h3>Add Your Email Credentials</h3></center>
<p align="center">
<img src="credentials.gif" />
</p>

<center><h3>Retrieve Emails From Your Inbox and Other Folders</h3></center>
<p align="center">
<img src="folder-and-view-email.gif" />
</p>

<center><h3>Compose And Send Emails</h3></center>
<p align="center">
<img src="compose-email.gif" />
</p>

### Front End Stack

- [Node JS v10.16.0](v10.16.0)
- [React JS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Moment](https://momentjs.com/)
- [AWS Amplify](https://aws-amplify.github.io/)

### Back End Stack

- [Python](https://www.python.org/)
- [AWS Chalice](https://chalice.readthedocs.io/en/latest/)
- [Imbox](https://github.com/martinrusev/imbox)
- [Sender](https://sender.readthedocs.io/)

### Internet

- [IMAP Protocol Documentation](http://www.networksorcery.com/enp/protocol/imap.htm); IMAP4 Protocol.
- I believe the imbox library uses .uid() to build its query
- [UID Source Code](https://github.com/python/cpython/blob/3.7/Lib/imaplib.py#L862)

# Imbox

### Things To Improve

- Add a limit to imbox.message()
  -- here is where emails are downloaded to memory (highly memory intensive)
- Add a ascending/descending order
- Add pagination; retrieve emails

### Internet Message Access Protocol

Imbox uses a uid lookup. It makes it hard to make the necessary changes to the library, such as reverse as it creates a unique id's for that session. Ordering must be done with those ids and not by date as it would be with [list()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.list), [search()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.search), or [sort()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.sort). The reason to do this is to add pagination. Read More Here: [INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1](http://www.networksorcery.com/enp/rfc/rfc3501.txt)

```
2.3.1.1.

Unique identifiers are assigned in a strictly ascending fashion in the mailbox; as each message is added to the mailbox it is assigned a higher UID than the message(s) which were added previously.
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

android [options][project-dir] ||| Opens your app in Expo on a connected Android device
build:ios|bi [options][project-dir] ||| Build a standalone IPA for your project, signed and ready for submission to the Apple App Store.
build:android|ba [options][project-dir] ||| Build a standalone APK or App Bundle for your project, signed and ready for submission to the Google Play Store.
build:web [options][project-dir] ||| Build a production bundle for your project, compressed and ready for deployment.
build:status|bs [options][project-dir] ||| Gets the status of a current (or most recently finished) build for your project.
bundle-assets [options][project-dir] ||| Bundles assets for a detached app. This command should be executed from xcode or gradle.
client:ios [options][project-dir] ||| Build a custom version of the Expo Client for iOS using your own Apple credentials and install it on your mobile device using Safari.
client:install:ios Install the latest version of Expo Client for iOS on the simulator
client:install:android Install the latest version of Expo Client for Android on a connected device or emulator
credentials:manager:android Manage your Android credentials
customize:web [options][project-dir] ||| Generate static web files into your project.
diagnostics [project-dir] ||| Prints environment info to console.
doctor [options][project-dir] ||| Diagnoses issues with your Expo project.
eject [options][project-dir] ||| Creates Xcode and Android Studio projects for your app. Use this if you need to add custom native functionality.
export [options][project-dir] ||| Exports the static files of the app for hosting it on a web server.
fetch:ios:certs [options][project-dir] ||| Fetch this project's iOS certificates/keys and provisioning profile. Writes files to the PROJECT_DIR and prints passwords to stdout.
fetch:android:keystore [options][project-dir] ||| Fetch this project's Android keystore. Writes keystore to PROJECT_DIR/PROJECT_NAME.jks and prints passwords to stdout.
fetch:android:hashes [options][project-dir] ||| Fetch this project's Android key hashes needed to set up Google/Facebook authentication. Note: if you are using Google Play signing, this app will be signed with a different key after publishing to the store, and you'll need to use the hashes displayed in the Google Play console.
fetch:android:upload-cert [options][project-dir] ||| Fetch this project's upload certificate needed after opting in to app signing by Google Play or after resetting a previous upload certificate.
generate-module [options][new-module-project] ||| Generate a universal module for Expo from a template in [new-module-project] directory.
init|i [options][project-dir] ||| Initializes a directory with an example project. Run it without any options and you will be prompted for the name and type.
install:ios Install the latest version of Expo Client for iOS on the simulator
install:android Install the latest version of Expo Client for Android on a connected device or emulator
install [options][packages...] ||| Installs a unimodule or other package to a project.
ios [options][project-dir] ||| Opens your app in Expo in an iOS simulator on your computer
login|signin [options] ||| Login with your Expo account
logout Logout from your Expo account
opt-in-google-play-signing [options][project-dir] ||| Switch from the old method of signing APKs to the new App Signing by Google Play. The APK will be signed with an upload key and after uploading it to the store, app will be re-signed with the key from the original keystore.
optimize|o [options][project-dir] ||| Compress the assets in your Expo project
prepare-detached-build [options][project-dir] ||| Prepares a detached project for building
publish:history|ph [options][project-dir] ||| View a log of your published releases.
publish:details|pd [options][project-dir] ||| View the details of a published release.
publish:set|ps [options][project-dir] ||| Set a published release to be served from a specified channel.
publish:rollback|pr [options][project-dir] ||| Rollback an update to a channel.
publish|p [options][project-dir] ||| Publishes your project to exp.host
push:android:upload [options][project-dir] ||| Uploads a Firebase Cloud Messaging key for Android push notifications.
push:android:show [options][project-dir] ||| Print the value currently in use for FCM notifications for this project.
push:android:clear [options][project-dir] ||| Deletes a previously uploaded FCM credential.
register Sign up for a new Expo account
send [options][project-dir] ||| Sends a link to your project to an email address
start|r [options][project-dir] ||| Starts or restarts a local server for your app and gives you a URL to it
upload:android|ua [options][projectdir] ||| Uploads a standalone Android app to Google Play (works on macOS only). Uploads the latest build by default.
upload:ios|ui [options][projectdir] ||| Uploads a standalone app to Apple TestFlight (works on macOS only). Uploads the latest build by default.
url|u [options][project-dir] ||| Displays the URL you can use to view your project in Expo
url:ipa [options][project-dir] ||| Displays the standalone iOS binary URL you can use to download your app binary
url:apk [options][project-dir] ||| Displays the standalone Android binary URL you can use to download your app binary
webhooks:set [options][project-dir] ||| Set a webhook for the project.
webhooks:show [options][project-dir] ||| Show webhooks for the project.
webhooks:clear [options][project-dir] ||| Clear a webhook associated with this project.
whoami|w Checks with the server and then says who you are logged in as
