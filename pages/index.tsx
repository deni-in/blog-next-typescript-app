import {Provider, useDispatch} from "react-redux";
import {store} from "../store";
import {useEffect} from "react";

export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])
  return (
      <Provider store={store}>
          <div>
              Hello
          </div>
      </Provider>
  )
}
