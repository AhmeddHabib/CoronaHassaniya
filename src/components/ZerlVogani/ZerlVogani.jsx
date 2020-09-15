import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './ZerlVogani.module.css';

const zerVogani = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return ' النفس , حاني شوي!..';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              المصابون
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
            اخر تحديث:{new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              عدد المصابون ب اللبن و الرغوة
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              المتعافون
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
            اخر تحديث:{new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              عدد الناس ال مركت الطب
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              الموتي
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              اخر تحديث:{new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              نسلمو و نسعاو البرو
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default zerVogani;
