import lista from '../../data/listaProdutos'

export default function repeticao2(){

function renderizarLinhas(){

    return lista.map( item => {

        return(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>   
                <td>{item.preco}</td> 
             </tr>

        )
    }) 
}


    return(

        <div>
            <table style={{
                border:'1px solid #000',


            }
            }>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                      {renderizarLinhas()}  

                </tbody>
            </table>
        </div>
    )
}