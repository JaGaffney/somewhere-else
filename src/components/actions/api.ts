export const setActivePage = (activePage: string) => dispatch => {
  return dispatch({
    type: "ACTIVE_PAGE",
    payload: activePage,
  })
}
export const setActiveAction = (activeAction: string) => dispatch => {
  return dispatch({
    type: "ACTIVE_ACTION",
    payload: activeAction,
  })
}
