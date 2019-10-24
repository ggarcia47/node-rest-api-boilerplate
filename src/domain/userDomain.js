let serviceUsers = require('../infraestructure/user');

const getUsers = async ()=>{
    let data = await serviceUsers();
    let datosOrdenardos= ordenar(data);
    let datosFiltrados = datosOrdenardos.filter(elem => elem.is_active ===true);
    let usuariosEdad=crearEdad(datosFiltrados);
    return data;
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function ordenar(array){
    return array.users.sort((a,b) => (a.lastname > b.lastname) ? 1 : ((b.lastname > a.lastname) ? -1 : 0));
}

function crearEdad(array){
    let countriesData
    try{           
        countriesData= array.map((elem)=> {
            elem['Age']=getAge(elem.birthday);            
          });          
    }
    catch(err){
        console.log('ERR: '+err);
    }
    return countriesData;
};

module.exports = getUsers;

