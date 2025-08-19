import express from 'express';
import menu from '../models/menu.js';

const router = express.Router();

router.post('/' ,async(req , res) => {
    try {
            const MenuItem = req.body
            const MenuList = new menu(MenuItem);
            const Item = await MenuList.save();
            console.log('data added');
            res.status(200).json(Item)
        
    } catch (error) {
                        console.log(error);
                        res.status(500).json({error:'internal server error'});        
    }
})

router.get('/', async(req,res)=>{
    try {
        const MenuList = await menu.find()
        console.log('here menu')
        res.status(200).json(MenuList)

    } catch (error) {
                    console.log(error);
                    res.status(500).json({error:'internal server error'});        
    }
})
router.get('/:taste', async(req,res)=>{
    try {
        const taste = req.params.taste;
        if(taste == 'sour'|| taste == 'spicy' || taste =='sweet' ){
            const response = await menu.find({taste:taste});
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
router.put('/:id', async (req,res)=>{
    try {
        const menuId = req.params.id;
        const updateMenu = req.body;

        const response = await menu.findByIdAndUpdate(menuId , updateMenu, {
            new: true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'menuId not valid'});
        }
        console.log("data updated");
        res.status(200).json(response);
    } catch (error) {
                        console.log(error);
                        res.status(500).json({error:'internal server error'});        
    }
})
export default router;
//second commit