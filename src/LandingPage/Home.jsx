import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Details from './Details';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import MainPost from './MainPost';



const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: '8%',
    marginTop: '3%',
  },
  mainGrid: {
    marginTop: theme.spacing(1),
    textAlign: 'justify',
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginBottom: '15%',
    marginTop: '15%',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    color: 'primary',
    marginBottom: '5%',
  },
  social: {
    color: 'secondary',
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '10%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  pageInfo: {
    paddingTop: '3%',
  }
}));


const mainPost = {
  title: 'Booked Up',
  description:
    "Best application where you can write your history and meet the most famous agnets to publish your writens",
  image: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const AgentAtuhorInfo = [
  {
    title: 'Agents',
    description:
      'You can sign up as an agent and you can search good books and meet thier authors.',
    image: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    imageText: 'Image Text',
  },
  {
    title: 'Authors',
    description:
      'You can sign up as an author so that you can upload your books and search agents.',
    image: 'https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    imageText: 'Image Text',
  },

  {
    title: 'Fans',
    description:
      'You can sign up as a fan for free and search your favorite authors and books.',
    image: 'https://t4.ftcdn.net/jpg/02/92/63/29/240_F_292632949_xldRUMB4rIT2aSC2kHWHj0C9mMhEwyik.jpg',
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Booked up is an easy and user-friendly place for both parties to connect a way for literary agents to leave feedback, a way for authors to post their work and One-stop location for all things connected to submitting, reviewing and communicating about written works from new authors to literary agents',
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function HomePage(props) {
  const classes = useStyles();
  const { description, social, title } = sidebar;

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <MainPost post={mainPost} />
          <Typography variant="h4" gutterBottom>
           
              </Typography>
          <Grid container spacing={4}>
            {AgentAtuhorInfo.map((post) => (
              <Details key={post.title} post={post} />
            ))}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid} >
            <Grid item xs={10} md={6}>
              <Typography variant="h6" gutterBottom>
                <h2>Vision</h2>
              </Typography>
              <Divider />             
              <Typography className={classes.pageInfo}>
              Product vision on business point of view. 
              The Product vision describes the purpose of a Product, 
              the intention with which the Product is being created and what it aims to achieve for customers and users. 
              The Product vision describes a future state of the Product and what problems it tries to resolve or what ambitions it tries to fulfill.
              </Typography>
            </Grid>
            <Grid item xs={10} md={6}>
              <Typography variant="h6" gutterBottom>
                <h2>Misison</h2>
              </Typography>
              <Divider />             
              <Typography className={classes.pageInfo}>
              Product mission on business point of view. A mission statement articulates a company's purpose. 
              It announces to the world at large why your company/product exists. 
              Every business should have a mission statement as a way of unifying the business.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </Paper>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
             </Typography>
              {social.map((network) => (
                <Link display="block" variant="body1" href="#" color="secondary" key={network}>
                  <Grid container direction="row" spacing={1} alignItems="center">
                    <Grid item className={classes.social}>
                      <network.icon />
                    </Grid>
                    <Grid item>{network.name}</Grid>
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Grid>
        </main>
      </Container>
    </Fragment>
  );
}