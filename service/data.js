export const removeDatasRepetidas = (datas) => { 

 const datasUnicas = []
 datas.forEach((data => { 
     if(datasUnicas.indexOf(data.dataFormatada) === -1){
         datasUnicas.push(data.dataFormatada)
     }
 }))
 return datasUnicas
}

export const ordenaDatas = (data) => { 
    //sort () ordena os elementos da array e retorna a array
 data.sort((a, b) => {
     const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
     const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
    return primeiraData - segundaData
 })
}