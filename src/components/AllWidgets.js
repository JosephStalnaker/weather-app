/* eslint-disable react/display-name */
import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { widgets } from './widgets';

const Container = styled.div``;
const Widgets = styled.nav``;

// active class styling for NavLink applied by styled-components
const StyledNavLink = styled(NavLink).attrs({ activeClassName: 'selected' })`
	& {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 1em;
		color: inherit;
	}
	&.selected {
		border-bottom: 2px solid orange;
	}
`;

const AllWidgets = () => {
	// general purpose url for prefixing subroutes
	const { url } = useRouteMatch();

	return (
		<Container>
			<Widgets>
				{widgets.map(({ id, link, renderCard }) => {
					return (
						<StyledNavLink key={id} to={url + link}>
							{renderCard()}
						</StyledNavLink>
					);
				})}
			</Widgets>
		</Container>
	);
};

export default AllWidgets;
