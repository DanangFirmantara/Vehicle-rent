

const getVehicles = (req,res) =>{
    return res.json({
        success : true,
        message : 'List of vehicles'
    })
}

module.exports = {
    getVehicles,
}