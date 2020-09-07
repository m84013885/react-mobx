import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef, createContext } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { useStore } from '../../utils/stroe'

import { Toast, Svga, Mask, Loading, Img, Msg } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from './useCommon'

import { useObserver } from "mobx-react-lite"

import test from '../assets/jb.svga'

import Store from './store'
import Text from './text'

const Main = () => {
    const store = useStore()
    console.log(store.doubleCount)
    return useObserver(() => (
        <React.Fragment>
            <div className={style.scrollView}>
                {store.doubleCount}
                <Text />
                <Store />
                {/* something */}
                <div className={style.canvas}>
                    <Svga svga={test} />
                </div>
                <Img className={style.test} />
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
            <Msg />
        </React.Fragment>
    ))



}

export default Main