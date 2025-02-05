const express=require('express'); 
const noteRouter =express.Router()

const Notemodel=require('../model/note.model')


noteRouter.post("/create", async (req, res) => {
    //logic
    // let data=req.body; 

    try {
        let note = new Notemodel(req.body)
        await note.save()
        res.status(200).send({ "msg": "New Note has been Added!!" })
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
})


noteRouter.get("/", async (req, res) => {
    try {
        let notes = await Notemodel.find()
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }

})

noteRouter.patch("/update/:noteID", async (req, res) => {
    // console.log(req.params)
    const { noteID } = req.params
    try {
        await Notemodel.findByIdAndUpdate({ _id: noteID }, req.body)
        res.status(200).send({ "msg": `the note with id${noteID} has been updated`})
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
})


noteRouter.delete("/delete/:noteID", async (req, res) => {
    const { noteID } = req.params
    try {
        await Notemodel.findByIdAndDelete({ _id: noteID })
        res.status(200).send({ "msg": `the note with id${noteID} has been Deleted`})
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
})

module.exports={
    noteRouter
}