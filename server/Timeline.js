var app = express();
app.use(session({secret: SESSION_SECRET, resave: false, saveUninitialized: false}));
app.use(express.static('public'));
app.use(passport.initialize());
console.log('LINE: 22  CALLED: app.use(passport.initialize());');
app.use(passport.session());
console.log('LINE: 24  CALLED: app.use(passport.session());');