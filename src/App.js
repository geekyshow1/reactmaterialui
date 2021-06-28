import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';
import Radio from '@material-ui/core/Radio';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      {/* <h3>Text Button</h3>
      <Button>Click Me</Button>
      <Button color="secondary">Secondary</Button>
      <Button href="https://google.com" color="primary">Link</Button>
      <Button disabled>Disabled </Button>

      <h3>Contained Button</h3>
      <Button variant="contained">Click Me</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" href="https://google.com" color="primary">Link</Button>
      <Button variant="contained" disabled>Disabled </Button>

      <h3>Outlined Button</h3>
      <Button variant="outlined">Click Me</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" href="https://google.com" color="primary">Link</Button>
      <Button variant="outlined" disabled>Disabled</Button>

      <h3>Button Size</h3>
      <Button variant="contained" color="secondary" size="small">Small</Button>
      <Button variant="contained" color="secondary" size="medium">Medium</Button>
      <Button variant="contained" color="secondary" size="large">Large</Button>

      <h3>Button with Icon</h3>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>Delete</Button>

      <h3>Icon Button</h3>
      <IconButton variant="contained" color="secondary">
        <DeleteIcon />
      </IconButton>

      <h3>Custom Button</h3>
      <Button variant="contained" color="secondary" style={{ backgroundColor: "blue" }}>Custom</Button>

      <h3>Button Group</h3>
      <ButtonGroup variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h3>Vertical Button Group</h3>
      <ButtonGroup orientation="vertical" color="primary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h3>Floating Action Button</h3>
      <Fab color="primary"><AddIcon /></Fab>
      <Fab color="secondary"><EditIcon /></Fab>
      <Fab variant="extended"><NavigationIcon />Navigate</Fab>
      <Fab disabled><FavoriteIcon /></Fab>

      <h3>Checkbox</h3>
      <Checkbox />
      <Checkbox checked="true" />
      <Checkbox checked="true" color="primary" />
      <Checkbox defaultChecked indeterminate />
      <FormControlLabel
        control={<Checkbox checked="true" name="checkedA" />}
        label="Secondary"
      />

      <h3>Date and Time</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>

      <h3>Radio Button</h3>
      <Radio
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />

      <h3>Slider</h3>
      <Slider value="5" />

      <h3>Switch</h3>
      <Switch />

      <h3>Box</h3>
      <Box>Hello World</Box>

      <h3>Alignment</h3>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>

      <h3>Font Weight</h3>
      <Box fontWeight="fontWeightBold">Hello</Box>
      <Box fontWeight={500}>Hello</Box>

      <h3>Font Size</h3>
      <Box fontSize={24}>Hello</Box>

      <h3>Font Style</h3>
      <Box fontStyle="italic">Hello</Box> 

      <h3>Color</h3>
      <Box color="primary.main">primary</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">error</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">success</Box>

      <h3>Background Color</h3>
      <Box bgcolor="primary.main">primary</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">error</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">success</Box>
      

      <h3>Margin</h3>
      <Box m={10}> All Side Margin</Box>
      <Box mt={10}>Margin Top</Box>
      <Box mb={10}>Margin Bottom</Box>
      <Box ml={10}>Margin Left</Box>
      <Box mr={10}>Margin Right</Box>
      <Box mx={10}>Margin Left Right</Box>
      <Box my={10}>Margin Top Bottom</Box>

      <h3>Padding</h3>
      <Box p={10}> All Side Padding</Box>
      <Box pt={10}>Padding Top</Box>
      <Box pb={10}>Padding Bottom</Box>
      <Box pl={10}>Padding Left</Box>
      <Box pr={10}>Padding Right</Box>
      <Box px={10}>Padding Left Right</Box>
      <Box py={10}>Padding Top Bottom</Box>

      <h3>Width Sizing</h3>
      <Box width={1 / 4} bgcolor="red">Width 1/4</Box>
      <Box width={500} bgcolor="yellow">Width 500px</Box>
      <Box width="50%" bgcolor="pink">Width 50%</Box>
      <Box width={1} bgcolor="green">Width 100%</Box>

      <h3>Height Sizing</h3>
      <Box height="50%" bgcolor="pink">Height 50%</Box>
      <Box height={200} bgcolor="yellow">Height 200px</Box>

      <h3>Border</h3>
      <Box border={1}>Hello 1</Box>
      <Box borderTop={1}>Hello 2</Box>
      <Box borderBottom={1}>Hello 3</Box>
      <Box borderLeft={1}>Hello 4</Box>
      <Box borderRight={1}>Hello 5</Box>
  
      <Box border={0}>Hello 1</Box>
      <Box border={1} borderTop={0}>Hello 2</Box>
      <Box border={1} borderBottom={0}>Hello 3</Box>
      <Box border={1} borderLeft={0}>Hello 4</Box>
      <Box border={1} borderRight={0}>Hello 5</Box>

      <h3>Border Color</h3>
      <Box border={1} borderColor="secondary.main">Hello</Box>

      <h3>Border Radius</h3>
      <Box border={1} borderRadius="50%" width={300} height={300}></Box>
      <Box border={1} borderRadius={16} width={300} height={300}></Box>
         

      <h3>Avatars</h3>
      <Avatar>G</Avatar>
      <Avatar src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" />

      <h3>Badges</h3>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={40}>
        <MailIcon />
      </Badge>
      <Badge anchorOrigin={{ vertical: "bottom", horizontal: "right" }} badgeContent={100} color="primary" max={50} >
        <MailIcon />
      </Badge>
      <Badge color="primary" variant="dot">
        <MailIcon />
      </Badge>


      <h3>Chip</h3>
      <Chip label="Basic" />
      <Chip label="Disabled" disabled />
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
      <Chip avatar={<Avatar src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" />} label="Avatar Chip" />

      <h3>Divider</h3>
      <Divider />
      <Divider orientation="vertical" />

      <h3>List</h3>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>

      <h3>Table</h3>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">Sonam</TableCell>
              <TableCell align="right">101</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">2</TableCell>
              <TableCell align="right">Rahul</TableCell>
              <TableCell align="right">102</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3>Tooltip</h3>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <h3>Typography</h3>
      <Typography variant="h1">Heading H1</Typography>
      <Typography variant="h6">Heading H6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>

      <h3>Progress</h3>
      <CircularProgress />
      <CircularProgress color="secondary" />

      <LinearProgress />
      <LinearProgress color="secondary" />


      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
 
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>


      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>


      <Grid container spacing={2} direction="row">
        <Grid item lg={6} md={4} sm={12} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} direction="row" justify="center">
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
      </Grid>
    

      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="red" p={5} textAlign="center">1-1</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="blue" p={5} textAlign="center">1-2</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="green" p={5} textAlign="center">1-3</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="red" p={5} textAlign="center">4-1</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="pink" p={5} textAlign="center">4-2</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="green" p={5} textAlign="center">4-3</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Hidden only="md">
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box bgcolor="blue" p={5} textAlign="center">4</Box>
          </Grid>
        </Hidden>
      </Grid>
   */}
      <h3>Paper</h3>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper elevation={9}>
            <Box p={5} textAlign="center">1</Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined">
            <Box p={5} textAlign="center">2</Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>

      <h3>Card</h3>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card>
            <CardHeader title="Card hai ye" subheader="September 14, 2016" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Material UI 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Material UI 2
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>

      <h3>Accordion</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>

      <h3>App Bar</h3>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
    </>


  );
}

export default App;
