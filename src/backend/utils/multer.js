import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    },
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true)
    } else {
        ({ error: "File định dạng không được hỗ trợ! Chỉ tải lên tệp JPEG/JPG hoặc PNG" }, false)
    }
}

const upload = multer({
    storage,
    limits: { fieldSize: 1024 * 1024 },
    fileFilter
})

export default upload