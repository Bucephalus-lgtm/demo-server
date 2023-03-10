const Agora = require("agora-access-token");

const createRTCToken = async (req, res) => {
    try {
        const appID = "8a147f71a37343e2bc61457a6d0d5a95";
        const appCertificate = "9ba2e6fb5fae4f22bd649cda8cccba2c";
        const expirationTimeInSeconds = 3600;
        const uid = 0;
        const role = Agora.RtcRole.SUBSCRIBER;
        const channelName = req.body.channelName;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

        const token = Agora.RtcTokenBuilder.buildTokenWithUid(
            appID,
            appCertificate,
            channelName,
            uid,
            role,
            privilegeExpiredTs
        );

        //  Return
        return res.status(201).send(token);
    } catch (err) {
        console.log(err.message);
        return;
    }
};

module.exports = { createRTCToken };