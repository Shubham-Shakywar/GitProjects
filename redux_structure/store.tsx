import {createStore}from 'redux'
import { rootReduer } from './rootReduer'
export const MyStore=createStore(rootReduer)