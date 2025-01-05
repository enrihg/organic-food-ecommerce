import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

//Colors:  
  --primary-soft: hsl(122,46%,67%,100%);
  --primary: hsl(122,100%,35%,100%);
  --primary-hard: hsl(122,45%,31%,100%);
  --warning: hsl(32,100%,50%,100%);
  --danger: hsl(1,79%,60%,100%);
  --white: hsl(0,0%,100%,100%);

  --gray-50: hsl(0,0%,95%,100%);
  --gray-100: hsl(0,0%,90%,100%);
  --gray-200: hsl(0,0%,80%,100%);
  --gray-300: hsl(0,0%,70%,100%);
  --gray-400: hsl(0,0%,60%,100%);
  --gray-500: hsl(0,0%,50%,100%);
  --gray-600: hsl(0,0%,40%,100%);
  --gray-700: hsl(0,0%,30%,100%);
  --gray-800: hsl(0,0%,20%,100%);
  --gray-900: hsl(0,0%,10%,100%);

  --green-gray-50: hsl(122,16%,94%,100%);
  --green-gray-100: hsl(122,18%,88%,100%);
  --green-gray-200: hsl(122,19%,75%,100%);
  --green-gray-300: hsl(122,16%,64%,100%);
  --green-gray-400: hsl(122,13%,54%,100%);
  --green-gray-500: hsl(122,14%,44%,100%);
  --green-gray-600: hsl(122,25%,34%,100%);
  --green-gray-700: hsl(124,33%,26%,100%);
  --green-gray-800: hsl(124,43%,16%,100%);
  --green-gray-900: hsl(124,100%,8%,100%);

}

body {
  background-color:wheat;
  margin: 0;
  display: flex;
  place-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
}

`

export default GlobalStyles;