export default function verifyErro(erro){
    if (erro.code === 'ENOENT')   {
        throw new Error('Arquivo não localizado.');
    }else{
        return 'Ocorreu um erro inesperado.';
    }
}