const { VITE_APP_PIXABAY_API_KEY } = import.meta.env

const fetchImages = async (searchKey, sellersLength = 4) => {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=${VITE_APP_PIXABAY_API_KEY}&q=${encodeURIComponent(searchKey)}&image_type=photo&per_page=${sellersLength}`
    )
    const images = await res.json()
    return images
  } catch (error) {
    console.log(error)
  }
}

export default fetchImages
