import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper} from "next-redux-wrapper";
import {store} from "../store";

class MyApp extends App {
    render(): JSX.Element {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        )
    }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)