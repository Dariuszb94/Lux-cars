import {YEAR_MAX} from '../Actions/types';
import {YEAR_MIN} from '../Actions/types';

const initialState ={
        yearMin: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        yearMax: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
       };
export default function(state = initialState, action) {

  switch (action.type) {
    case YEAR_MAX:
      return {
        ...state,
        yearMaxRead:action.payload
      };
 case YEAR_MIN:
      return {
        ...state,
        yearMinRead:action.payload
      };
      default: 
      return state;
  }
}