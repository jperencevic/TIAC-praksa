import cors from 'cors';
import Options from './models/Options';
var express = require('express'),
mongoose = require('mongoose'), //created model loading here
bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use("/", router);

app.listen(4000, () => console.log(`Express server running on port 4000`));

mongoose.connect('mongodb://localhost:27017/datas', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/options').get((req, res) => {
    Options.find((err, option) => {
        if (err)
            console.log(err);
        else
            res.json(option);
    });
});

router.route('/options/:id').get((req, res) => {
    Options.findById(req.params.id, (err, option) => {
        if (err)
            console.log(err);
        else
            res.json(option);
    })
});

