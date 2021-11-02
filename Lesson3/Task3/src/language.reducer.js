import { SET_LANGUAGE } from './language.actions';

const defaultLanguage = {
  language: 'en',
};

export const languageReducer = (state = defaultLanguage, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;
    default:
      return {
        state,
      };
  }
};
