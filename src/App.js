import React, { useContext, useState } from 'react';
import './App.css';
import AlignItemsList from './components/AlignItemsList';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { GlobalContext } from './components/globalContext';
import UserTypedMessage from './util/UserTypedMessage';
import ResultView from './components/ResultView';

export default function App() {
  const [userMessage, setUserMessage] = useState(''); // [state, setState
  const [transcript, setTranscript] = useState([]); // [state, setState
  const { state, dispatch } = useContext(GlobalContext);
  const [showResult, setShowResult] = useState(false); // [state, setState
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      {/* other components */}
      <header className="App-header">
        <Container maxWidth="sm">
          <Typography variant="body1">AI Call Center Demo</Typography>
          <Button 
            variant="contained" 
            color= { showResult ? "primary" : "secondary" }
            onClick={() => setShowResult(!showResult)}
            >
            { showResult ? "Result" : "Transcript" }
          </Button>
        </Container>
      </header>
      <div className={classes.display}>
        { !showResult && <AlignItemsList messages= { transcript } /> }
        { showResult && <ResultView messages = { state.appState.gpt3 } /> }
      </div>
      <footer className={classes.footer}>
          <div className={classes.footercontainer}>
            <TextField 
              multiline
              maxRows={4} 
              fullWidth 
              label="Enter Text" 
              id="fullWidth"
              value={userMessage}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  const text = userMessage;
                  const result = await UserTypedMessage(state.appState, text)
                  dispatch({ type: 'state', payload: result.data })
                  setTranscript(result.data.transcript);
                  setUserMessage('');
                }
              }}
              onChange = {(e) => {
                e.preventDefault();
                setUserMessage(e.target.value);
              }} />
          </div>
      </footer>
    </div>
  );
}

// const messages = [
//   {
//     id: 1,
//     name: "AI",
//     text: "I will be in your neighborhood.  Let's get together."
//   },
//   {
//     id: 2,
//     name: "Me",
//     text: "I am free for lunch.  What do you think?"
//   },
//   {
//     id: 3,
//     name: "AI",
//     text: "Great.  Let's do In and Out.  I am in the mood for double double."
//   }
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20vh',
    maxHeight: '90vh',
    maxWidth: '90vw',
    minWidth: '40vw',
    padding: theme.spacing(3, 2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  footercontainer: {
    padding: theme.spacing(2),
  }
}));
