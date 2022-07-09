var courses = [
    {
        title: 'Event Driven Cakes',
        cost: '50'
    },
    {
        title: 'sample course',
        cost: 100
    }
]

exports.showCourses = (req, res) => {
    res.render('courses', {
        // コースの配列をビューに渡す
        offeredCourses: courses
    })
}

exports.showSingUp = (req, res) => {
    res.render('contact')
}

exports.postSignUpForm = (req, res) => {
    res.render('thanks')
}