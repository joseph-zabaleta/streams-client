import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" component={StreamCreate} />
						<Route
							path="/streams/edit/:id"
							component={StreamEdit}
						/>
						<Route
							path="/streams/delete/:id"
							component={StreamDelete}
						/>
						<Route
							path="/streams/:id"
							component={StreamShow}
						/>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;