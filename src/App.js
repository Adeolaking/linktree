import LinkTree from "./components/links/linktree";
import Footer from "./components/footer/footer";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import ContactForm from "./components/ContactForm/ContactForm";
// function App() {
//   return (
//     <div className='lg:px-[100px] md:PX-[80PX] xsm:px-[60px] px-[10px] py-10'>
//     <Router>
//       <Route path="/">
//          <LinkTree />
//       </Route>
//       <Route>
//         <ContactForm/> 
//       </Route>
//     </Router>
      
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
     <div className='lg:px-[100px] md:PX-[80PX] xsm:px-[60px] px-[10px] py-10'>
     <Routes>
           <Route exert path="/" element={<LinkTree />}/>
            <Route path="/contact" element={ <ContactForm/>}/>
        </Routes>
        <Footer />
     </div>
     
    </BrowserRouter>
  
  );
}

export default App;
