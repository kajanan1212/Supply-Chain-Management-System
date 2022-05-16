const crypto = require("crypto");

function getUniqId(prefix) {
    const id = crypto.randomBytes(8).toString("hex");
    return prefix + "_" + id

}

module.exports = getUniqId;