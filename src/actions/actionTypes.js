export const INITIALIZE_PAGINATOR = '@@violet-paginator/INITIALIZE_PAGINATOR'
export const EXPIRE_PAGINATOR = '@@violet-paginator/EXPIRE_PAGINATOR'
export const EXPIRE_ALL = '@@violet-paginator/EXPIRE_ALL'
export const FOUND_PAGINATOR = '@@violet-paginator/FOUND_PAGINATOR'
export const PREVIOUS_PAGE = '@@violet-paginator/PREVIOUS_PAGE'
export const NEXT_PAGE = '@@violet-paginator/NEXT_PAGE'
export const GO_TO_PAGE = '@@violet-paginator/GO_TO_PAGE'
export const SET_PAGE_SIZE = '@@violet-paginator/SET_PAGE_SIZE'
export const FETCH_RECORDS = '@@violet-paginator/FETCH_RECORDS'
export const RESULTS_UPDATED = '@@violet-paginator/RESULTS_UPDATED'
export const RESULTS_UPDATED_ERROR = '@@violet-paginator/RESULTS_UPDATED_ERROR'
export const TOGGLE_FILTER_ITEM = '@@violet-paginator/TOGGLE_FILTER_ITEM'
export const SET_FILTER = '@@violet-paginator/SET_FILTER'
export const SET_FILTERS = '@@violet-paginator/SET_FILTERS'
export const RESET_FILTERS = '@@violet-paginator/RESET_FILTERS'
export const SORT_CHANGED = '@@violet-paginator/SORT_CHANGED'
export const UPDATING_ITEM = '@@violet-paginator/UPDATING_ITEM'
export const UPDATE_ITEMS = '@@violet-paginator/UPDATE_ITEMS'
export const UPDATE_ITEM = '@@violet-paginator/UPDATE_ITEM'
export const UPDATING_ITEMS = '@@violet-paginator/UPDATING_ITEMS'
export const RESET_ITEM = '@@violet-paginator/RESET_ITEM'
export const MARK_ITEMS_ERRORED = '@@violet-paginator/MARK_ITEMS_ERRORED'
export const RESET_RESULTS = '@@violet-paginator/RESET_RESULTS'
export const REMOVING_ITEM = '@@violet-paginator/REMOVING_ITEM'
export const REMOVE_ITEM = '@@violet-paginator/REMOVE_ITEM'
export const ITEM_ERROR = '@@violet-paginator/ITEM_ERROR'

export default function actionType(t, id) {
  return `${t}_${id}`
}