import axios from 'axios'; /*importar depois de instalar o axios*/

const api = axios.create({  /*configurando para o backend (db.json)*/
    baseURL: 'http://localhost:3000'
});

export default api;  /*exportando para que o resto do projeto possa usar a api*/