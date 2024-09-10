const {reply_with_message} = require("../../replies_examples/replies_examples");
const {fetch_new_status_ugo_sql} = require("./fetch_new_status_ugo_sql");

function new_status_ugo_runtime(body, res, mysqlConnection, tgBot) {
    if (body.key === 'hello') {
        fetch_new_status_ugo_sql(res, mysqlConnection, tgBot, body)
    }
    else {
        res.send(reply_with_message(false, "Wrong keygen! Please pick another one."))
    }
}

module.exports = {new_status_ugo_runtime}
