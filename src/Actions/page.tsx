interface CurrentPage {

  currentPage:number

}

export function setCurrentPage(currentPage:CurrentPage) {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: {
      currentPage
    }
  }
}