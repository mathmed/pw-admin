import React from "react";

import Routes from "./routes.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const App = () => <Routes/> ;

export default App;