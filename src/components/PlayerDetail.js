import React from 'react';
import PropTypes from 'prop-types';
import HighScoreIcon from './HighScoreIcon';

const PlayerDetail = ({ player, highScore }) => {
  if(player){
	return (
	  <div>
		<h3>
            <HighScoreIcon isHighScore={player.score === highScore} />
			{ player.name }
		</h3>
		<ul>
		  <li>
			<span>Score: </span>
			{ player.score }
		  </li>
		  <li>
			<span>Created: </span>
			{ player.created }
		  </li>
		  <li>
			<span>Updated: </span>
			{ player.updated }
		  </li>
		</ul>
	  </div>
	);
  }
  else {
	return (<p>Click on a player to see more details</p>);
  }
};

PlayerDetail.propTypes = {
    player: PropTypes.object,
    highScore: PropTypes.number
}

export default PlayerDetail;