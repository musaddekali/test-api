const usersPostControllers = (req, res) => {
    console.log('user post res: ', req.body)
    res.send('User post successfull!')
}

export {usersPostControllers}