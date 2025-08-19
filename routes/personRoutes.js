import express from 'express';
import person from '../models/person.js';


const router = express.Router();

router.post('/person',async (req, res)=>{
    try{
        const data = req.body
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }


})
router.get('/person',async(req,res)=>{
    try{
        const data =await person.find();
        console.log('data fatched');
        res.status(200).json(data);
    }
    catch(mis){
        console.log(mis);
        res.status(500).json({error:'internal server error'});
    }
})

router.get('/person/:postion',async(req,res)=>{
    try {
        const postion = req.params.postion;
        if(postion == 'Chef'||postion =='Manager'||postion =='Waiter'){
            const response =await person.find({work:postion});
            console.log("resopnse fatched");
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'internal server error'});
        }
    } catch (error) {
                        console.log(error);
                        res.status(500).json({error:'internal server error'});          
    }
})
router.put('/person/:id', async (req, res)=>{
    try {
        const Personid = req.params.id;
        const updatePersondata = req.body;

        const response =await person.findByIdAndUpdate(Personid,updatePersondata,{
            new: true,
            runValidators: true,
        })

        if(!response){
            return res.status(404).json({error:'person id not found'});
        }

        console.log("data updated");
        res.status(200).json(response);

    } catch (error) {
                        console.log(error);
                        res.status(500).json({error:'internal server error'});        
    }
})

router.delete('/person/:id', async (req,res)=>{
    try {
        const PersonId = req.params.id;
        const personData = req.body;
        const datadelted = await person.findById(PersonId, personData)
        const response = await person.findByIdAndDelete(PersonId);
        if(!response){
            return res.status(404).json({error:'person id not found'});
        }
        console.log("data deleted");
        res.status(200).json({message:'person data deleted',deleteData:datadelted});


    } catch (error) {
                        console.log(error);
                        res.status(500).json({error:'internal server error'});        
    }
})

export default router;