export type ImageContextData = {
    default: string,
    __esModule: boolean
}

function importAllImages(webpackContext: __WebpackModuleApi.RequireContext): ImageContextData[] {
    return webpackContext.keys().map((fileUrl) => {
        const image = webpackContext(fileUrl)
        return image
    })
}

// const images: ImageContextData[] = importAllImages(require.context(
//     '../assets/us',
//     false,
//     /\.(png|jpe?g|svg|JPE?G)$/
//     ))

const importImages = (folderUrl: string) => 
    importAllImages(require.context(
        folderUrl,
        false,
        /\.(png|jpe?g|svg|JPE?G)$/
    ))

export default importImages;