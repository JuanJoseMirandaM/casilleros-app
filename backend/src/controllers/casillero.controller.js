const casillerosCtrl = {};

const Casillero = require('../models/Casillero');

casillerosCtrl.getCasilleros = async (req, res) => {
    let valor  = req.query.valor;
    const casilleros = await Casillero.find({'bloque':valor},{}).sort({'numero':1});;
    res.json(casilleros);
};

casillerosCtrl.createCasillero = async (req, res) => {
    try {
        const { vendedor,bloque,numero,codigo,precio,estado,nombre,ci,celular,fecha } = req.body;
        const newCasillero = new Casillero({
            vendedor,
            bloque,
            numero,
            codigo,
            precio,
            estado,
            nombre,
            ci,
            celular,
            fecha
        });
        await newCasillero.save();
        res.json('New Casillero added');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};



casillerosCtrl.getCasillero = async (req, res) => {
    const casillero = await Casillero.findById(req.params.id);
    res.json(casillero);
}

casillerosCtrl.deleteCasillero = async (req, res) => {
    await Casillero.findByIdAndDelete(req.params.id)
    res.json('Casillero Deleted');
}

casillerosCtrl.updateCasillero = async (req, res) => {
    const { vendedor,bloque,numero,codigo,precio,estado,nombre,ci,celular,fecha } = req.body;
    await Casillero.findByIdAndUpdate(req.params.id, {
        vendedor,
        bloque,
        numero,
        codigo,
        precio,
        estado,
        nombre,
        ci,
        celular,
        fecha
    });
    res.json('Casillero Updated');
}

module.exports = casillerosCtrl;