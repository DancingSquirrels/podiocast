import React from 'react';
import PropTypes from 'prop-types';
import PodcastListEntry from './PodcastListEntry.jsx';

const PodcastList = function(props) {



  return (
    <div className='podcast-wrapper'>
      {
        props.podcasts.map((podcast, itr) =>
          <PodcastListEntry
            key={itr}
            podcast={podcast}
            onClickPodcast={props.onClickPodcast}
            loggedIn={props.loggedIn}/>
        )
      }
    </div>
  );
};

PodcastList.propTypes = {
  podcasts: PropTypes.array.isRequired,
  onClickPodcast: PropTypes.func.isRequired
};

export default PodcastList;
