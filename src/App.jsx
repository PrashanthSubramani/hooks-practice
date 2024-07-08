import LoginContextProvider from "./context/LoginContextProvider";
import UseContext from "./Hooks/UseContext";
import UseEffects from "./Hooks/UseEffects"
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState"


function App() {


  return (
    <>
      <UseState/>
      <UseEffects/>
      <LoginContextProvider>
        <UseContext/>      
      </LoginContextProvider>
      <UseRef/>
      <UseReducer/>
      <UseLayoutEffect/>
    </>
  )
}

export default App
