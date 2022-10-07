const INITIAL_STATE = {
  modeEtat: [],
};

function modeEtatReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SAVE_ETAT": {
      const newArrSec = [...state.modeEtat];
      newArrSec.unshift(action.payload);

      console.log(newArrSec, "newArrSec");

      return {
        state,
        modeEtat: newArrSec,
      };
    }
  }

  return state;
}
