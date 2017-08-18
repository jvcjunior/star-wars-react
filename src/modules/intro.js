// Actions
export const SHOW_INTRO = 'intro/SHOW_INTRO'
export const HIDE_INTRO = 'counter/HIDE_INTRO'

const initialState = {
  showIntro: true,
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INTRO:
      return {
        ...state,
        showIntro: true,
      }

    case HIDE_INTRO:
      return {
        ...state,
        showIntro: false,
      }

    default:
      return state
  }
}

// Action Creators
export function showIntro() {
  return { type: SHOW_INTRO };
}

export function hideIntro() {
  return { type: HIDE_INTRO };
}