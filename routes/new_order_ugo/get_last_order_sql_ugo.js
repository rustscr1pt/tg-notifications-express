const {reply_with_message} = require("../../replies_examples/replies_examples");
const {botSendMessage} = require("../../telegram/botSendMessage");
const {format_new_order_message_ugo} = require("./format_new_order_message_ugo");

function get_last_order_sql_ugo(res, mysqlConnection, tgBot) {
    mysqlConnection.query(
        "SELECT id, request_status, customer_name, customer_email, customer_self_description, date_time_added FROM ugo_customers_request WHERE id=(SELECT MAX(id) FROM ugo_customers_request)",
        (err, results, _) => {
            if (!err) {
                if (results.length === 0) {
                    res.send(reply_with_message(false, "Couldn't get a recently added order -> /telegram/new_order/ugo/"))
                }
                else {
                    botSendMessage(tgBot, format_new_order_message_ugo(results[0]));
                    res.send(reply_with_message(true, "Notification has been sent"))
                }
            }
            else {
                res.send(reply_with_message(false, err))
            }
        }
    )
}

module.exports = {get_last_order_sql_ugo}
