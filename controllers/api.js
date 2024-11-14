// api.js in controllers
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"artifacts", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']');
    res.send();
};
