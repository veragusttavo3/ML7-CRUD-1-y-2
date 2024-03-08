const fs = require("fs") //requerir file system
const path = require("path")// requerir ruta

module.exports={
    //cargar datos en general reutilizable
    loadData:(filenameJSON = "productsDataBase")=>{ //guardado por defecto mas adelente sera variable
        const pathJSON= path.join(__dirname,`./${filenameJSON}.json`) //busca el archivo local
        const dataJSON= fs.readFileSync(pathJSON, "utf-8") //leo el archivo "pathJSON" con filesystem, codificado en uft-8 y lo guarda
        const dataJS= JSON.parse(dataJSON)// convierto texto plano a codigo javascript
        return dataJS // retorna archivo . js
    },
    // guardar datos en general reutilizable (escribir )
    saveData: (data,filenameJSON = "productsDataBase") =>{ //archivo a modificar y dato
        const pathJSON= path.join(__dirname,`./${filenameJSON}.json`)// ruta del archivo a modificar
        const dataString=JSON.stringify(data,null, 3) //convertir data .js a texto plano (dato a convertir,null, 3 sangrias?)
        fs.writeFileSync(pathJSON,dataString,"utf-8")//escribir con filesytstem 1-ruta_archivo,2-dato_recibido convertido a js,3-codificadion de texto
    }
}