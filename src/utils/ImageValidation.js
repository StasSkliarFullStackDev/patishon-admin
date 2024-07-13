export const validateImageRatioOneByOne = (file) => {
    return new Promise((resolve, reject) => {
        let image = new Image()
        image.src = URL.createObjectURL(file)
        image.onload = () => image.width / image.height === 1 ? resolve('true') : reject('false')
    })
}
