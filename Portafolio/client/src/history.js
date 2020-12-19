//Remember that BrowserRouter keeps a history under the hood of the URL.
//The point of this file is to access that history as an object so that we can more easily control it and navigate it.
//Probably not really needed for this app, but it is helpful if you have a case where you need to navigate to a new path based on an event.
import { createBrowserHistory } from 'history';

export default createBrowserHistory();