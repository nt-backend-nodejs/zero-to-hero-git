export const getAllData = (res, req, next) => {
    try {
        res.end("get all data")
    } catch (err) {
        next(err)
    }
}

