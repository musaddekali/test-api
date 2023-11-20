export default class FileControllers {
  static getImage(req, res) {
    const fileName = req.params.name;
    if(!fileName) {
      res.status(404).send('file not found');
      return;
    }
    res.send(
      `<a href="/${fileName}"> <img alt=${fileName} src="/${fileName}"> </a>`
    );
  }

  static getFileText(req, res) {
    res.send('This is file text')
  }
}
