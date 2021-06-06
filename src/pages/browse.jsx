import BrowseContainer from 'containers/browse';
import useContent from 'hooks/use-content';
import React from 'react';
import selectionFilter from 'utils/selection-filter';

function Browse() {
	const { series } = useContent('series');
	const { films } = useContent('films');

	const slides = selectionFilter({ series, films });
	return <BrowseContainer slides={slides} />;
}

export default Browse;
