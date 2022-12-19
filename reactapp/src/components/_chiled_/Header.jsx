import React from "react";
// import ModalBgItem from "./ModalBgItem";
import DynamicProf from "./DynamicProf"
// import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
// import Select from '@mui/joy/Select';









const Header = () => {
    return (
        <>
            <div className="header">
                <div className="profile">
                   <div className="prof_div">
                        <DynamicProf/>
                        <span>Murch</span>
                        <img className="other_func" src="/images/Frame 12.png" alt="" />
                   </div>
                </div>
            </div>
             
            
        </>
    )
}
// const theme = extendTheme({
//     components: {
//       JoySelect: {
//         defaultProps: {
//           indicator: '↕',
//         },
//       },
//     },
//   });
  
//   const App = () => (
//     <CssVarsProvider theme={theme}>
//       <Select>...options</Select>
//     </CssVarsProvider>
//   );


export default Header;
