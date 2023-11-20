export default class FileControllers {
  static getImage(req, res, next) {
    const fileName = req.params.name;
    res.send(
      `<a href="/${fileName}"> <img alt=${fileName} src="/${fileName}"> </a>`
    );
  }

  static getFileText(req, res) {
    res.send('This is file text')
  }
}
