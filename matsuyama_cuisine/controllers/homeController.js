exports.showCourses = (req, res) => {
    res.render('courses')
}

exports.showSingUp = (req, res) => {
    res.render('contact')
}

exports.postSignUpForm = (req, res) => {
    console.log('yes, you did it.')
    res.render('thanks')
}