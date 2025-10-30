import { GlobalStyles } from "@mui/material"

export const AnimatedBackground = () => {
  return (
    <>
    <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "#0e6cc4",
            overflowX: "hidden",
            overflowY: "hidden",
          },
          ".box": {
            position: "fixed",
            top: 0,
            transform: "rotate(80deg)",
            left: 0,
          },
          ".wave": {
            position: "fixed",
            top: "0",
            left: "0",
            opacity: 0.4,
            background: "#0af",
            width: "1500px",
            height: "1300px",
            marginLeft: "-150px",
            marginTop: "-250px",
            transformOrigin: "50% 48%",
            borderRadius: "43%",
            animation: "drift 7000ms infinite linear",
          },
          ".wave.-two": {
            animation: "drift 3000ms infinite linear",
            opacity: 0.1,
            background: "black",
          },
          ".wave.-three": {
            animation: "drift 7500ms infinite linear",
            backgroundColor: "#77daff",
          },
          "@keyframes drift": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
        }}
      />
    <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
    </div>

    </>
  )
}

export default AnimatedBackground
