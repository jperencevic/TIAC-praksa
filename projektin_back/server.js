// import cors from 'cors';
// import Options from './models/Options';
// import Elements from './models/Elements';
var express = require('express');
var mongoose = require('mongoose'); //created model loading here
const bodyParser = require('body-parser');
var cors = require('cors')
var Options = require('./models/Options');
var Elements = require ('./models/Elements')

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

router.route('/elements').get((req, res) => {
    Elements.find((err, element) => {
        if (err)
            console.log(err);
        else
            res.json(element);
    });
});
router.route('/elements/:id').get((req, res) => {
    Elements.findById(req.params.id, (err, option) => {
        if (err)
            console.log(err);
        else
            res.json(option);
    })
});

router.route('/elements/add').post((req, res) => {
    let element = new Elements(req.body);
    console.log(req.body);
    console.log(element);
    element.save()
        .then(element => {
            res.status(200).json({'element': element});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/elements/delete/:id').get((req, res) => {
    Elements.remove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});
