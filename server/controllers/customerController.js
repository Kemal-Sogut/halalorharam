/**
 * GET / 
 * Homepage
 */

exports.homepage = async(req,res)=>{

    const locals = {
        title:'Halal Or Haram',
        description:"Is it halal or haram?"
    }
    res.render('index', locals)

}