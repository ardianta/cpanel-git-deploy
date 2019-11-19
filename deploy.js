var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "user",
    // Password optional, prompted if none given
    password: "password",
    host: "ftp.someserver.com",
    port: 21,
    localRoot: __dirname + "/local-folder",
    remoteRoot: "/public_html/remote-folder/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*.php", "dist/*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};
 
// use with promises
ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
 
// use with callback
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err);
    else console.log("finished:", res);
});