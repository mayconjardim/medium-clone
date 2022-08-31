import {RegisterRequestInteface} from './../types/registerRequest.interface'
import {createAction, props} from '@ngrx/store'

import {ActionTypes} from './actionTypes'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInteface}>()
)
