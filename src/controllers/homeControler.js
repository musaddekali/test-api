export default class HomeControllers {
    static getHome(req, res) {
        res.send('<h1>Welcome to Home page.</h1>')
    }
    static getApiHome(req, res) {
        res.send("<code>You are in the empty ocan...💖</code>");
    }
}