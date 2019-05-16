import React from "react"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
});

const CharactersCollection = (props) => {
  const { classes, characters } = props;

  return (
    <React.Fragment>
      <h3>Characters</h3>
      <hr/>
      <Grid container spacing={40}>
        {characters.results.map((char) => (
          <Grid item key={char.id} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={char.image}
                title={char.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {char.name}
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}

CharactersCollection.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(CharactersCollection)