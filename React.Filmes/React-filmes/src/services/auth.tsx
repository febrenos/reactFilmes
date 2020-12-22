export const usuarioAutenticado = () => localStorage.getItem("token-filmes") !== null;

export const parseJWT = () =>{

    var token = localStorage.getItem("token-filmes");
    if(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        let tipo = JSON.parse(jsonPayload);
        let acesso = Object.values(tipo)[2];
        
        return acesso;
    }
}