const express=require('express')
const router = express.Router()



const lisOfService=[
        {
           

            "Name":"Web Development"

        },
        {
            

            "Name": 'Mobile Development'
        },
        {
            

            "Name": 'React'
        },
        {
          

            "Name": 'Express'
        },
        {
           

            "Name": 'Mango db'
        },

    ]



// router.get('/:id',(request,response)=>{
//     const serviceId=Number(request.params.id);
//     const getService=lisOfService.find((service) => service.id===serviceId)

//     if(!getService){
//         response.status(500).send("Expected not found")
//         console.log(request.params.id)
//     }
//     else{
//         response.json(getService.Name)
//     }
// })

router.get('/:id([0-9]{1})',(request,response)=>{
    response.send(request.user.Name)
})
router.param('id',(request,response,next,id)=>{
    request.user=lisOfService[id-1]
    next()
})




module.exports=router