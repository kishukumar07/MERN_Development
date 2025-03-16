const express = require('express');
const noteRouter = express.Router()

const Notemodel = require('../model/note.model')


noteRouter.post("/create", async (req, res) => {
    try {
        let note = new Notemodel(req.body)
        await note.save()
        res.status(200).send({ "msg": "New Note has been Added!!" })
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
})



//need to check who is going to acsess which thing ...relationship verification
//payload can help mean decode the token again>? no man 
// we can get using req.body.authorID bcs we manupulated that previously 





noteRouter.get("/", async (req, res) => {
    try {
        let notes = await Notemodel.find({ authorID: req.body.authorID }) //u need to get those note  where same authorid is present 
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
})


noteRouter.patch("/update/:noteID", async (req, res) => {
    const { noteID } = req.params
    const note = await Notemodel.findOne({ _id: noteID });
    try {
        if (req.body.authorID !== note.authorID) {
            res.status(200).send({ "msg": `you are not authorized to do this action` })

        } else {
            await Notemodel.findByIdAndUpdate({ _id: noteID }, req.body)//u can update those note where same user authorid is present 
            res.status(200).send({ "msg": `the note with id${noteID} has been updated` })
        }
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
})


noteRouter.delete("/delete/:noteID", async (req, res) => {
    const { noteID } = req.params
    const note = await Notemodel.findOne({ _id: noteID });
    try {
        if (req.body.authorID !== note.authorID) {  //this if block is written for authorization 
            res.status(200).send({ "msg": `you are not authorized to do this action` })
        } else {
            await Notemodel.findByIdAndDelete({ _id: noteID })
            res.status(200).send({ "msg": `the note with id${noteID} has been Deleted` })
        }
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
})










module.exports = {
    noteRouter
}