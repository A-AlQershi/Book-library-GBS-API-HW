function thumbnailProcess(imageLinks) {
  if (!imageLinks) {
    return '/src/assets/whitePage.jpeg';
  }
  else if (imageLinks.extraLarge !== undefined) {
    return imageLinks.extraLarge;
  } else if (imageLinks.large !== undefined) {
    return imageLinks.large;
  } else if (imageLinks.medium !== undefined) {
    return imageLinks.medium;
  } else if (imageLinks.small !== undefined) {
    return imageLinks.small;
  } else if (imageLinks.thumbnail !== undefined) {
    return imageLinks.thumbnail;
  } else if (imageLinks.smallThumbnail !== undefined) {
    return imageLinks.smallThumbnail;
  } else {
    return '/src/assets/whitePage.jpeg';
  }
}

export default thumbnailProcess;